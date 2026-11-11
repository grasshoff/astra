// astra-runtime — animates an astra/1 figure in the browser. Dependency-free ES module.
//
// It evaluates the context's ops (the same op-set as famulus_astronomica/evaluate.py, spec/ops.yaml) for the
// figure's parameter values in a state, and redraws the figure's body with the placement rules of svg/scene.py.
// The projection comes from the figure bundle, so the browser figure and the static SVG are the same drawing.
//
//   import { mount } from './astra-runtime.js';
//   const ctl = mount(svgElement, bundle, { transport: divElement });
//   ctl.seek(u); ctl.play(); ctl.pause(); ctl.set('e', 15); ctl.morph(0.3); ctl.step('d6'); ctl.state();
//
// A state is {<kinematic variable>: degrees} or {t: days}. The animation runs the figure's one kinematic variable
// through a revolution from the depicted state (several variables: time through the period).
// URL parameters: ?t=<seconds> renders the still at that scene time and never starts; ?static holds the depicted
// state; ?theme=light|dark sets data-theme; ?morph=0..1 (superpositions) shows the first member, both, or the
// second; ?step=<name> (figures of derivations) shows what that step is about. prefers-reduced-motion: reduce
// also holds the still. The element gets data-ink (an estimate of the inked share of the canvas); errors set
// data-render-error on <html>, as famulus-viz render_check expects.

const RAD = Math.PI / 180;
const EM = 15.0;
const POINT_R = 3.2;
const TEXT = '\ufe0e';
const SIGNS = [...'♈♉♊♋♌♍♎♏♐♑♒♓'].map(g => g + TEXT);
const CARDINAL = { 0: SIGNS[0], 90: SIGNS[3], 180: SIGNS[6], 270: SIGNS[9] };

export function norm360(a) { a = a % 360; return a < 0 ? a + 360 : a; }
export function norm180(a) { a = norm360(a); return a > 180 ? a - 360 : a; }

const isVec = v => Array.isArray(v) && v.length === 2;
const polar = (r, deg) => [r * Math.cos(deg * RAD), r * Math.sin(deg * RAD)];
const NAN2 = [NaN, NaN];
const COINCIDENT = 1e-9;   // two points closer than this have no line and no direction between them

function line(p, q) {
  const dx = q[0] - p[0], dy = q[1] - p[1], n = Math.hypot(dx, dy);
  return n < COINCIDENT ? [p[0], p[1], NaN, NaN] : [p[0], p[1], dx / n, dy / n];
}
function xcl(c, l, branch) {
  const [cx, cy, r] = c, [px, py, dx, dy] = l;
  const fx = px - cx, fy = py - cy;
  const b = 2 * (fx * dx + fy * dy), cc = fx * fx + fy * fy - r * r;
  let disc = b * b - 4 * cc;
  if (disc < -1e-12) return NAN2;
  disc = Math.max(disc, 0);
  const s = Math.sqrt(disc);
  const t = branch > 0 ? (-b + s) / 2 : (-b - s) / 2;
  return [px + t * dx, py + t * dy];
}
function xcc(a, b, branch) {
  const [ax, ay, ra] = a, [bx, by, rb] = b;
  const dx = bx - ax, dy = by - ay, d = Math.hypot(dx, dy);
  if (d === 0 || d > ra + rb + 1e-12 || d < Math.abs(ra - rb) - 1e-12) return NAN2;
  const x = (d * d + ra * ra - rb * rb) / (2 * d);
  const h = Math.sqrt(Math.max(ra * ra - x * x, 0));
  const ux = dx / d, uy = dy / d, mx = ax + x * ux, my = ay + x * uy;
  return [mx - branch * h * uy, my + branch * h * ux];
}
function foot(p, l) {
  const [px, py, dx, dy] = l, t = (p[0] - px) * dx + (p[1] - py) * dy;
  return [px + t * dx, py + t * dy];
}
function rotate(p, about, deg) {
  const c = Math.cos(deg * RAD), s = Math.sin(deg * RAD), x = p[0] - about[0], y = p[1] - about[1];
  return [about[0] + x * c - y * s, about[1] + x * s + y * c];
}
function reflect(p, l) { const f = foot(p, l); return [2 * f[0] - p[0], 2 * f[1] - p[1]]; }
export function ellipseFrame(e) {
  const [f1x, f1y, f2x, f2y, a] = e;
  const cx = (f1x + f2x) / 2, cy = (f1y + f2y) / 2;
  const c = Math.hypot(f2x - f1x, f2y - f1y) / 2, b = Math.sqrt(Math.max(a * a - c * c, 0));
  const ang = c > 0 ? Math.atan2(f2y - f1y, f2x - f1x) / RAD : 0;
  return { centre: [cx, cy], a, b, ang };
}
function onEllipse(e, deg) {
  const f = ellipseFrame(e);
  return rotate([f.centre[0] + f.a * Math.cos(deg * RAD), f.centre[1] + f.b * Math.sin(deg * RAD)], f.centre, f.ang);
}
function xel(e, l, branch) {
  const f = ellipseFrame(e);
  const p = rotate([l[0], l[1]], f.centre, -f.ang), d = rotate([l[0] + l[2], l[1] + l[3]], f.centre, -f.ang);
  const px = p[0] - f.centre[0], py = p[1] - f.centre[1], dx = d[0] - p[0], dy = d[1] - p[1];
  const A = dx * dx / (f.a * f.a) + dy * dy / (f.b * f.b);
  const B = 2 * (px * dx / (f.a * f.a) + py * dy / (f.b * f.b));
  const C = px * px / (f.a * f.a) + py * py / (f.b * f.b) - 1;
  const disc = B * B - 4 * A * C;
  if (disc < -1e-12 || A === 0) return NAN2;
  const s = Math.sqrt(Math.max(disc, 0));
  const t = branch > 0 ? (-B + s) / (2 * A) : (-B - s) / (2 * A);
  return rotate([f.centre[0] + px + t * dx, f.centre[1] + py + t * dy], f.centre, f.ang);
}
function tangent(p, c, branch) {
  const [cx, cy, r] = c, dx = p[0] - cx, dy = p[1] - cy, d = Math.hypot(dx, dy);
  if (d < r - 1e-12 || d === 0) return NAN2;
  const ang = Math.acos(Math.min(1, r / d)) / RAD, base = Math.atan2(dy, dx) / RAD;
  const v = polar(r, base + branch * ang);
  return [cx + v[0], cy + v[1]];
}
const direction = (p, q) => Math.hypot(q[0] - p[0], q[1] - p[1]) < COINCIDENT ? NaN : norm360(Math.atan2(q[1] - p[1], q[0] - p[0]) / RAD);
function keplerE(M, e) {
  const m = norm360(M) * RAD;
  let E = e < 0.8 ? m : Math.PI;
  for (let i = 0; i < 30; i++) {
    const f = E - e * Math.sin(E) - m;
    E -= f / (1 - e * Math.cos(E));
    if (Math.abs(f) < 1e-14) break;
  }
  return norm360(E / RAD);
}
function trueAnom(E, e) {
  const Er = E * RAD;
  const nu = 2 * Math.atan2(Math.sqrt(1 + e) * Math.sin(Er / 2), Math.sqrt(1 - e) * Math.cos(Er / 2));
  return norm360(nu / RAD);
}
function resCollinear(p, q, r) {
  const ax = q[0] - p[0], ay = q[1] - p[1], bx = r[0] - q[0], by = r[1] - q[1];
  const na = Math.hypot(ax, ay), nb = Math.hypot(bx, by);
  return na === 0 || nb === 0 ? 0 : Math.abs(ax * by - ay * bx) / (na * nb);
}

export const OPS = {
  const: v => v,
  id: v => v,
  add: (a, b) => isVec(a) && isVec(b) ? [a[0] + b[0], a[1] + b[1]] : a + b,
  sub: (a, b) => isVec(a) && isVec(b) ? [a[0] - b[0], a[1] - b[1]] : a - b,
  mul: (a, b) => isVec(a) ? [a[0] * b, a[1] * b] : isVec(b) ? [b[0] * a, b[1] * a] : a * b,
  div: (a, b) => b !== 0 ? a / b : NaN,
  neg: a => isVec(a) ? [-a[0], -a[1]] : -a,
  abs: Math.abs,
  norm360, norm180,
  polar,
  observer: () => [0, 0],
  circle: (c, r) => [c[0], c[1], r],
  line,
  ray: (p, deg) => [p[0], p[1], Math.cos(deg * RAD), Math.sin(deg * RAD)],
  x_cl: xcl, x_cc: xcc, foot,
  midpoint: (p, q) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2],
  rotate, reflect,
  ellipse: (f1, f2, a) => [f1[0], f1[1], f2[0], f2[1], a],
  on_ellipse: onEllipse, x_el: xel, tangent, direction,
  distance: (p, q) => Math.hypot(q[0] - p[0], q[1] - p[1]),
  seen_from: (q, c, deg) => xcl(c, [q[0], q[1], Math.cos(deg * RAD), Math.sin(deg * RAD)], 1),
  kepler_E: keplerE, true_anom: trueAnom,
  sin: a => Math.sin(a * RAD), cos: a => Math.cos(a * RAD), tan: a => Math.tan(a * RAD),
  atan2: (y, x) => Math.atan2(y, x) / RAD,
  asin: v => Math.asin(Math.max(-1, Math.min(1, v))) / RAD,
  sqrt: v => v >= 0 ? Math.sqrt(v) : NaN,
  res_parallel: (l1, l2) => Math.abs(l1[2] * l2[3] - l1[3] * l2[2]),
  res_collinear: resCollinear,
  res_perp: (l1, l2) => Math.abs(l1[2] * l2[2] + l1[3] * l2[3]),
  res_on: (p, c) => Math.abs(Math.hypot(p[0] - c[0], p[1] - c[1]) - c[2]),
};

// The configuration of a context under parameter values in a state (evaluate.py: configuration). A parameter
// without value is null; it is an error as soon as something other than a range or a law (ids `_aux…`) needs it.
export function configuration(ops, params, state) {
  const env = {};
  let missing = false;
  for (const op of ops) {
    const k = op.op;
    if (k === 'const') env[op.id] = op.args[0];
    else if (k === 'param') {
      if (op.id in params) env[op.id] = params[op.id]; else { env[op.id] = null; missing = true; }
    } else if (k === 'var') {
      if (op.id in state) env[op.id] = state[op.id];
      else if (op.args.length && 't' in state && op.args[0] in env) {
        if (env[op.args[0]] === null || env[op.args[1]] === null) throw new Error(`the state gives a time, but the law of ${op.id} lacks a parameter value`);
        env[op.id] = norm360(env[op.args[1]] + env[op.args[0]] * state.t);
      } else throw new Error(`the state does not fix ${op.id}`);
    } else {
      const vals = op.args.map(a => env[a]);
      if (missing && vals.some(v => v === null)) {
        if (!op.id.startsWith('_aux')) throw new Error(`a parameter needed by ${op.id} has no value`);
        env[op.id] = null;
        continue;
      }
      const fn = OPS[k];
      if (!fn) throw new Error('unknown op ' + k);
      env[op.id] = fn(...vals);
    }
  }
  return env;
}

export const isNaNValue = v => typeof v === 'number' ? Number.isNaN(v) : Array.isArray(v) && v.some(x => Number.isNaN(x));

// ── projection (svg/transform.py) ──────────────────────────────────────────
export function project(proj, p) {
  const phi = (90 - proj.up) * RAD;
  const x = p[0] * Math.cos(phi) - p[1] * Math.sin(phi), y = p[0] * Math.sin(phi) + p[1] * Math.cos(phi);
  return [proj.tx + proj.scale * x, proj.ty - proj.scale * y];
}
const screenAngle = (proj, deg) => -(deg + (90 - proj.up));
const screenDir = (proj, deg) => { const s = screenAngle(proj, deg) * RAD; return [Math.cos(s), Math.sin(s)]; };

// ── drawing (svg/render.py, one to one) ────────────────────────────────────
const f2 = x => x.toFixed(2);
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
function rich(str) {
  const i = String(str).indexOf('_');
  if (i < 0) return esc(str);
  return `${esc(str.slice(0, i))}<tspan class="sub" dy="0.35em" font-size="70%">${esc(str.slice(i + 1))}</tspan>`;
}
function text(x, y, str, cls, id, anchor = 'middle') {
  return `<text id="astra-${id}-text" class="${cls}" x="${f2(x)}" y="${f2(y)}" text-anchor="${anchor}" dominant-baseline="middle">${rich(str)}</text>`;
}
export function arcSpan(a1, a2, value) {
  const sweep = norm360(a2 - a1), v = norm360(value);
  if (Math.abs(norm180(sweep - v)) < 0.5) return [a1, sweep, false];
  if (Math.abs(norm180(360 - sweep - v)) < 0.5) return [a2, 360 - sweep, true];
  return sweep <= 180 ? [a1, sweep, false] : [a2, 360 - sweep, true];
}
function arcPath(cx, cy, r, a1, a2, proj, sweepGiven) {
  const sweep = sweepGiven === undefined ? norm360(a2 - a1) : sweepGiven;
  const s1 = screenAngle(proj, a1) * RAD, s2 = screenAngle(proj, a1 + sweep) * RAD;
  const large = sweep > 180 ? 1 : 0;
  return `M ${f2(cx + r * Math.cos(s1))} ${f2(cy + r * Math.sin(s1))} A ${f2(r)} ${f2(r)} 0 ${large} 0 ${f2(cx + r * Math.cos(s2))} ${f2(cy + r * Math.sin(s2))}`;
}
const armAngle = (arm, env, v) => 'fixed' in arm ? arm.fixed : 'point' in arm
  ? Math.atan2(env[arm.point][1] - v[1], env[arm.point][0] - v[0]) / RAD : env[arm.angle];

const ahead = state => 't' in state ? { ...state, t: state.t + 0.01 } : Object.fromEntries(Object.entries(state).map(([k, v]) => [k, v + 0.05]));

// The scene as a stage of the narration draws it (mirrors svg/render.py `staged`): without the label kinds the
// stage has not yet revealed. Members the stage does not show stay in the scene: the runtime fades them.
function staged(scene, stage) {
  if (!stage) return scene;
  const hidden = new Set(stage.hidden || []);
  return hidden.size ? scene.filter(d => !hidden.has(d.label)) : scene;
}

export function renderBody(bundle, state, stepName, stage) {
  const proj = bundle.projection;
  const env = configuration(bundle.ops, bundle.params, state);
  const scene = staged(bundle.scene, stage);
  const hl = stepName ? (bundle.steps || []).find(s => s.name === stepName) : null;
  const hlPoints = new Set(hl ? hl.points : []);
  const hlSegs = new Set(hl ? hl.segments.map(pq => [...pq].sort().join('|')) : []);
  const isHl = (p, q) => hlSegs.has([p, q].sort().join('|'));
  const raw = [];
  let currentOwner = '';
  const out = { push(item) { if (currentOwner && item.startsWith('<') && !item.includes(' data-owner=')) item = item.replace(' ', ` data-owner="${currentOwner}" `); raw.push(item); }, join(sep) { return raw.join(sep); } };
  let ink = 0;
  const rFit = proj.scale * proj.r_fit;
  const cX = proj.width / 2, cY = proj.height / 2;
  const P = name => isNaNValue(env[name]) ? null : project(proj, env[name]);
  const seg = (id, cls, p, q) => { ink += Math.hypot(q[0] - p[0], q[1] - p[1]) * 1.5; return `<line id="astra-${id}" class="${cls}" x1="${f2(p[0])}" y1="${f2(p[1])}" x2="${f2(q[0])}" y2="${f2(q[1])}"/>`; };
  const tx = (...a) => { ink += 8 * EM * String(a[2]).length; return text(...a); };

  for (const d of scene) {
    currentOwner = d.owner || '';
    if (d.kind === 'segment') {
      const p = P(d.p), q = P(d.q), on = isHl(d.p, d.q);
      if (d.step_only && !on) continue;
      if (d.sight) continue;            // drawn later, above the construction
      if (p && q) out.push(seg(d.id, on ? 'astra-step' : d.dashed ? 'astra-aux astra-dashed' : 'astra-construct', p, q));
    } else if (d.kind === 'zodiac') {
      const c = env[d.circle], o = P(d.point);
      if (!o || isNaNValue(c)) continue;
      const r = proj.scale * c[2], om = env[d.point];
      const degs = d.full ? [...Array(12).keys()].map(i => i * 30) : [0, 90, 180, 270];
      for (const deg of degs) {
        const [dx, dy] = screenDir(proj, deg);
        const hit = xcl(c, [om[0], om[1], Math.cos(deg * RAD), Math.sin(deg * RAD)], 1);
        if (isNaNValue(hit)) continue;
        const [ex, ey] = project(proj, hit), cc = [ex - r * dx, ey - r * dy];
        if (deg in CARDINAL) {
          out.push(seg(`${d.id}-${deg}`, 'astra-aux astra-dashed', o, [ex, ey]));
          out.push(`<circle id="astra-${d.id}-${deg}-pt" class="astra-point" cx="${f2(ex)}" cy="${f2(ey)}" r="${POINT_R}"/>`);
        } else out.push(seg(`${d.id}-${deg}-tick`, 'astra-aux', [cc[0] + (r - 6) * dx, cc[1] + (r - 6) * dy], [ex, ey]));
        out.push(tx(ex + 1.3 * EM * dx, ey + 1.3 * EM * dy, CARDINAL[deg] || SIGNS[deg / 30], 'astra-zodiac', `${d.id}-${deg}`));
      }
    }
  }
  for (const d of scene) {
    currentOwner = d.owner || '';
    if (d.kind === 'circle') {
      const c = env[d.ref]; if (isNaNValue(c)) continue;
      const [cx, cy] = project(proj, [c[0], c[1]]), r = proj.scale * c[2];
      ink += 2 * Math.PI * r * 1.5;
      out.push(`<circle id="astra-${d.id}" class="astra-construct" cx="${f2(cx)}" cy="${f2(cy)}" r="${f2(r)}"/>`);
    } else if (d.kind === 'ellipse') {
      const e = env[d.ref]; if (isNaNValue(e)) continue;
      const f = ellipseFrame(e), [cx, cy] = project(proj, f.centre), rot = screenAngle(proj, f.ang);
      ink += 2 * Math.PI * proj.scale * f.a * 1.5;
      out.push(`<ellipse id="astra-${d.id}" class="astra-ellipse" cx="${f2(cx)}" cy="${f2(cy)}" rx="${f2(proj.scale * f.a)}" ry="${f2(proj.scale * f.b)}" transform="rotate(${f2(rot)} ${f2(cx)} ${f2(cy)})"/>`);
    }
  }
  for (const d of scene) {
    currentOwner = d.owner || '';
    if (d.kind !== 'length') continue;
    const p = P(d.p), q = P(d.q); if (!p || !q) continue;
    out.push(seg(d.id, isHl(d.p, d.q) ? 'astra-step' : 'astra-construct', p, q));
    const mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2, dx = q[0] - p[0], dy = q[1] - p[1], n = Math.hypot(dx, dy) || 1;
    let nx = dy / n, ny = -dx / n;
    if (d.side === 'right') { nx = -nx; ny = -ny; }
    out.push(tx(mx + 0.7 * EM * nx, my + 0.7 * EM * ny, d.text, 'astra-label var', d.id));
  }
  for (const d of scene) {
    currentOwner = d.owner || '';
    if (d.kind !== 'angle') continue;
    const v = env[d.vertex]; if (isNaNValue(v)) continue;
    const a1 = armAngle(d.from, env, v), a2 = armAngle(d.to, env, v);
    const [start, sweep, rev] = arcSpan(a1, a2, env[d.ref]);
    const [vx, vy] = project(proj, v), r = 0.16 * rFit * (1 + 0.22 * d.rank);
    const marker = d.arrow ? (rev ? ' marker-start="url(#astra-arrow-gold)"' : ' marker-end="url(#astra-arrow-gold)"') : '';
    out.push(`<path id="astra-${d.id}" class="astra-angle" d="${arcPath(vx, vy, r, start, start + sweep, proj, sweep)}"${marker}/>`);
    const [bx, by] = screenDir(proj, start + sweep / 2);
    const lr = sweep >= 12 ? r + 0.9 * EM : 1.8 * r + 0.5 * EM;
    ink += r * sweep * RAD * 1.5;
    out.push(tx(vx + lr * bx, vy + lr * by, d.text, 'astra-label astra-angle-label', d.id));
  }
  for (const d of scene) {
    currentOwner = d.owner || '';
    if (d.kind !== 'motion') continue;
    const c = env[d.circle], p = env[d.point]; if (isNaNValue(c) || isNaNValue(p)) continue;
    const ang = Math.atan2(p[1] - c[1], p[0] - c[0]) / RAD;
    const env2 = configuration(bundle.ops, bundle.params, ahead(state)), p2 = env2[d.point], c2 = env2[d.circle];
    const ang2 = Math.atan2(p2[1] - c2[1], p2[0] - c2[0]) / RAD;
    const sense = ((ang2 - ang + 540) % 360 - 180) >= 0 ? 1 : -1;
    const [cx, cy] = project(proj, [c[0], c[1]]), r = proj.scale * c[2];
    const a1 = ang + sense * 6, a2 = ang + sense * 28;
    const path = sense > 0 ? arcPath(cx, cy, r, a1, a2, proj) : arcPath(cx, cy, r, a2, a1, proj);
    const marker = sense > 0 ? 'marker-end="url(#astra-arrow-gold)"' : 'marker-start="url(#astra-arrow-gold)"';
    ink += r * 22 * RAD * 1.5;
    out.push(`<path id="astra-${d.id}" class="astra-motion" d="${path}" ${marker}/>`);
  }
  for (const d of scene) {
    currentOwner = d.owner || '';
    if (d.kind !== 'direction') continue;
    const o = P(d.point); if (!o) continue;
    const [dx, dy] = screenDir(proj, env[d.ref]), L = 1.15 * rFit;
    out.push(`<line id="astra-${d.id}" class="${d.dashed ? 'astra-aux astra-dashed' : 'astra-aux'}" x1="${f2(o[0])}" y1="${f2(o[1])}" x2="${f2(o[0] + L * dx)}" y2="${f2(o[1] + L * dy)}" marker-end="url(#astra-arrow-ink)"/>`);
    ink += L;
    out.push(tx(o[0] + (L + 1.1 * EM) * dx, o[1] + (L + 1.1 * EM) * dy, d.text, 'astra-label var', d.id));
  }
  for (const d of scene) {          // lines of sight: above the construction, below the points
    currentOwner = d.owner || '';
    if (d.kind !== 'segment' || !d.sight) continue;
    const p = P(d.p), q = P(d.q);
    if (p && q) out.push(seg(d.id, 'astra-sight', p, q));
  }
  const placed = [];
  for (const d of scene) {
    currentOwner = d.owner || '';
    if (d.kind !== 'point') continue;
    const p = P(d.ref); if (!p) continue;
    if (placed.some(q => Math.hypot(p[0] - q[0], p[1] - q[1]) < 0.6)) continue;
    placed.push(p);
    out.push(`<circle id="astra-${d.id}" class="${hlPoints.has(d.ref) ? 'astra-point astra-step-point' : 'astra-point'}" cx="${f2(p[0])}" cy="${f2(p[1])}" r="${POINT_R}"/>`);
    let ox = p[0] - cX, oy = p[1] - cY, n = Math.hypot(ox, oy);
    if (n < 0.08 * rFit) { ox = 1; oy = 0.35; n = Math.hypot(ox, oy); }
    out.push(tx(p[0] + EM * ox / n, p[1] + EM * oy / n, d.text, 'astra-label', d.id));
  }
  return { html: out.join('\n'), ink: ink / (proj.width * proj.height), env };
}

// ── mounting ───────────────────────────────────────────────────────────────
export function mount(svg, bundle, opts = {}) {
  const q = new URLSearchParams(location.search);
  const theme = q.get('theme');
  if (theme) document.documentElement.dataset.theme = theme, svg.dataset.theme = theme;
  const body = svg.querySelector('#astra-body');
  const anim = bundle.animation;
  const speed = bundle.speed_s || 24;
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hold = q.has('static') || q.has('t') || reduced;
  const params = Object.assign({}, bundle.params);
  let u = q.has('t') ? (parseFloat(q.get('t')) / speed) % 1 : 0;      // fraction of a revolution after the depicted state
  let playing = false, last = null, raf = 0;
  const listeners = new Set();
  const members = (bundle.members || []).length === 2 ? bundle.members : null;
  let morph = q.has('morph') ? Math.max(0, Math.min(1, parseFloat(q.get('morph')))) : 0.5;
  let step = q.get('step') || null;
  // the narration: the stages of the figure, one at a time (none: the figure as before)
  const stages = bundle.stages || [];
  const allMembers = bundle.members || [];
  let stageIx = stages.length ? Math.max(0, stages.findIndex(s => s.name === q.get('stage'))) : -1;
  let touring = false, tourTimer = 0, tourFrom = null;

  const stateAt = x => anim.mode === 'var'
    ? { [anim.name]: norm360(anim.start + 360 * x) }
    : { t: anim.start + x * (anim.period_days || 1) };

  // a stage shows some members and hides the others: by opacity, so that a change of stage fades
  // … and the change fades: for FADE ms after a change of stage each member moves from its old opacity to its new
  const FADE = 450;
  let fadeFrom = null, fadeAt = 0, fadeRaf = 0;
  const shownIn = st => new Set(st && st.show && st.show.length ? st.show : allMembers);
  function applyStage() {
    const st = stageIx >= 0 ? stages[stageIx] : null;
    if (!st) return false;
    const show = shownIn(st);
    const f = fadeFrom && !reduced ? Math.min(1, (performance.now() - fadeAt) / FADE) : 1;
    for (const el of body.querySelectorAll('[data-owner]')) {
      const o = el.getAttribute('data-owner');
      const to = show.has(o) ? 1 : 0, from = fadeFrom ? (fadeFrom.has(o) ? 1 : 0) : to;
      el.style.opacity = (from + (to - from) * f).toFixed(3);
    }
    if (f >= 1) fadeFrom = null;
    return true;
  }
  function fadeLoop() {
    cancelAnimationFrame(fadeRaf);
    const stepFade = () => { if (!fadeFrom) return; if (!playing) draw(); if (fadeFrom) fadeRaf = requestAnimationFrame(stepFade); };
    fadeRaf = requestAnimationFrame(stepFade);
  }
  function applyMorph() {
    if (applyStage()) return;
    if (!members) return;
    const wa = Math.min(1, 2 * (1 - morph)), wb = Math.min(1, 2 * morph);
    for (const el of body.querySelectorAll('[data-owner]')) {
      const o = el.getAttribute('data-owner');
      if (o === members[0]) el.style.opacity = wa.toFixed(3);
      else if (o === members[1]) el.style.opacity = wb.toFixed(3);
    }
  }
  function draw() {
    try {
      const st = stateAt(u);
      const r = renderBody(Object.assign({}, bundle, { params }), st, step, stageIx >= 0 ? stages[stageIx] : null);
      body.innerHTML = r.html;
      applyMorph();
      svg.dataset.ink = r.ink.toFixed(4);
      svg.dataset.state = Object.entries(st).map(([k, v]) => `${k}=${v.toFixed(4)}`).join(', ');
      const bad = Object.entries(r.env).find(([k, v]) => !k.startsWith('_') && v !== null && isNaNValue(v));
      if (bad) document.documentElement.dataset.renderError = `construction failed at ${svg.dataset.state}: ${bad[0]}`;
      for (const fn of listeners) fn(ctl.state());
    } catch (e) {
      document.documentElement.dataset.renderError = String(e.message || e);
      throw e;
    }
  }
  function tick(now) {
    if (!playing) return;
    if (last !== null) u = (u + (now - last) / 1000 / speed) % 1;
    last = now;
    draw();
    // a running stage of the tour ends after one revolution
    if (touring && tourFrom !== null && now - tourFrom >= speed * 1000) { tourFrom = null; ctl.pause(); nextOfTour(); }
    raf = requestAnimationFrame(tick);
  }
  // what a stage does when it is entered: stand at its state, or run
  function enterStage(i, { auto = false } = {}) {
    if (!stages.length) return;
    const before = stageIx >= 0 ? shownIn(stages[stageIx]) : null;
    stageIx = Math.max(0, Math.min(stages.length - 1, i));
    const st = stages[stageIx];
    ctl.pause();
    if (before && !hold) { fadeFrom = before; fadeAt = performance.now(); }
    step = null;
    if (st.u !== null && st.u !== undefined) u = st.u;
    draw();
    if (fadeFrom) fadeLoop();
    if (st.play && !hold) { tourFrom = auto ? performance.now() : null; ctl.play(); }
  }
  // the tour: every stage in turn, a standing one long enough to read its sentence, a running one for a revolution
  function nextOfTour() {
    window.clearTimeout(tourTimer);
    if (!touring) return;
    if (stageIx >= stages.length - 1) { touring = false; for (const fn of listeners) fn(ctl.state()); return; }
    enterStage(stageIx + 1, { auto: true });
    scheduleTour();
  }
  function scheduleTour() {
    const st = stages[stageIx];
    if (st.play && !hold) return;                       // tick() ends it after one revolution
    const read = Math.max(4000, 1200 + 70 * (st.text || '').length);
    tourTimer = window.setTimeout(nextOfTour, read);
  }
  const ctl = {
    stage(i) { touring = false; window.clearTimeout(tourTimer); tourFrom = null; enterStage(i); },
    stageNext() { ctl.stage(stageIx + 1); },
    stagePrev() { ctl.stage(stageIx - 1); },
    tour() {
      if (!stages.length) return;
      if (touring) { touring = false; window.clearTimeout(tourTimer); tourFrom = null; ctl.pause(); for (const fn of listeners) fn(ctl.state()); return; }
      touring = true;
      enterStage(stageIx >= stages.length - 1 ? 0 : stageIx, { auto: true });
      scheduleTour();
      for (const fn of listeners) fn(ctl.state());
    },
    seek(x) { u = ((x % 1) + 1) % 1; draw(); },
    play() { if (playing || hold) return; playing = true; last = null; raf = requestAnimationFrame(tick); },
    pause() { playing = false; cancelAnimationFrame(raf); },
    toggle() { playing ? ctl.pause() : ctl.play(); },
    set(name, value) { params[name] = value; draw(); },
    morph(v) { morph = Math.max(0, Math.min(1, v)); applyMorph(); for (const fn of listeners) fn(ctl.state()); },
    step(name) { step = name || null; draw(); },
    state() { return { u, state: stateAt(u), speed, playing, params: Object.assign({}, params), morph, members, step, stage: stageIx, stages, touring }; },
    onChange(fn) { listeners.add(fn); return () => listeners.delete(fn); },
  };
  draw();
  if (opts.transport) transport(opts.transport, ctl, bundle);
  if (stages.length) enterStage(stageIx);               // a narrated figure opens at its first stage, not running
  else if (!hold && opts.autoplay !== false && !step) ctl.play();
  document.addEventListener('visibilitychange', () => { if (document.hidden) ctl.pause(); });
  return ctl;
}

function transport(el, ctl, bundle) {
  const anim = bundle.animation;
  el.className = 'astra-transport';
  el.innerHTML = `
    <button type="button" class="astra-btn" data-act="toggle" aria-label="play or pause">▶</button>
    <input type="range" class="astra-slider" min="0" max="1000" value="0" aria-label="state">
    <span class="astra-readout"></span>`;
  const btn = el.querySelector('[data-act=toggle]'), slider = el.querySelector('input'), readout = el.querySelector('.astra-readout');
  btn.addEventListener('click', () => ctl.toggle());
  slider.addEventListener('input', () => { ctl.pause(); ctl.seek(slider.value / 1000); });
  let anchor = el;
  const st0 = ctl.state();
  if (st0.stages.length) {
    // the narration: the sentence of the stage under the figure, the stages one by one, and the whole tour
    const row = document.createElement('div');
    row.className = 'astra-stage';
    row.setAttribute('aria-live', 'polite');
    row.innerHTML = `<p class="astra-stage-text"></p>
      <div class="astra-stage-nav">
        <button type="button" class="astra-btn" data-act="stage-prev" aria-label="previous stage">‹</button>
        <span class="astra-stage-count"></span>
        <button type="button" class="astra-btn" data-act="stage-next" aria-label="next stage">›</button>
        <span class="astra-stage-dots"></span>
        <button type="button" class="astra-btn astra-tour" data-act="tour"></button>
      </div>`;
    el.before(row);
    const text = row.querySelector('.astra-stage-text'), count = row.querySelector('.astra-stage-count');
    const dots = row.querySelector('.astra-stage-dots'), tour = row.querySelector('[data-act=tour]');
    dots.innerHTML = st0.stages.map((s, i) => `<button type="button" class="astra-dot" data-stage="${i}" aria-label="stage ${i + 1}: ${s.name}"></button>`).join('');
    row.querySelector('[data-act=stage-prev]').addEventListener('click', () => ctl.stagePrev());
    row.querySelector('[data-act=stage-next]').addEventListener('click', () => ctl.stageNext());
    tour.addEventListener('click', () => ctl.tour());
    dots.addEventListener('click', e => { const b = e.target.closest('[data-stage]'); if (b) ctl.stage(Number(b.dataset.stage)); });
    ctl.onChange(s => {
      const st = s.stages[s.stage];
      if (text.dataset.stage !== String(s.stage)) { text.dataset.stage = String(s.stage); text.textContent = st ? st.text : ''; }
      count.textContent = `${s.stage + 1} / ${s.stages.length}`;
      tour.textContent = s.touring ? '❚❚ stop' : '▶ all stages';
      dots.querySelectorAll('.astra-dot').forEach((d, i) => d.classList.toggle('on', i === s.stage));
    });
  }
  if (st0.members && !st0.stages.length) {
    // a second slider fades between the two members of the superposition: the shared observer stays, one
    // construction fades out as the other fades in
    const row = document.createElement('div');
    row.className = 'astra-transport astra-morph';
    row.innerHTML = `<span class="astra-morph-label">${st0.members[0]}</span>
      <input type="range" class="astra-slider" min="0" max="1000" value="${Math.round(st0.morph * 1000)}" aria-label="fade between the two models">
      <span class="astra-morph-label">${st0.members[1]}</span>`;
    anchor.after(row); anchor = row;
    row.querySelector('input').addEventListener('input', e => ctl.morph(e.target.value / 1000));
  }
  const steps = bundle.steps || [];
  if (steps.length) {
    // one step of the derivation at a time: its proposition, its rule, and what it speaks of in the figure
    const row = document.createElement('div');
    row.className = 'astra-transport astra-steps';
    row.innerHTML = `<button type="button" class="astra-btn" data-act="prev" aria-label="previous step">‹</button>
      <span class="astra-step-text"></span>
      <button type="button" class="astra-btn" data-act="next" aria-label="next step">›</button>`;
    anchor.after(row);
    const text = row.querySelector('.astra-step-text');
    let i = Math.max(-1, steps.findIndex(s => s.name === st0.step));
    const show = () => {
      const s = i >= 0 ? steps[i] : null;
      text.textContent = s ? `${s.name}: ${s.text}${s.rule ? ' — by ' + s.rule : ''} (${s.status})` : 'the steps of the derivation';
      ctl.pause(); ctl.step(s ? s.name : null);
    };
    row.querySelector('[data-act=prev]').addEventListener('click', () => { i = Math.max(-1, i - 1); show(); });
    row.querySelector('[data-act=next]').addEventListener('click', () => { i = Math.min(steps.length - 1, i + 1); show(); });
    if (i >= 0) show(); else text.textContent = 'the steps of the derivation';
  }
  ctl.onChange(s => {
    btn.textContent = s.playing ? '❚❚' : '▶';
    slider.value = Math.round(s.u * 1000);
    if (anim.mode === 'var') {
      const v = s.state[anim.name];
      let txt = `${anim.display} = ${v.toFixed(1)}°`;
      if (anim.period_days) txt += ` · t = ${(norm360(v - anim.epoch) / 360 * anim.period_days).toFixed(1)} d`;
      readout.textContent = txt;
    } else readout.textContent = `t = ${s.state.t.toFixed(1)} d`;
  });
  ctl.seek(ctl.state().u);
}
