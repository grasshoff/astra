### Euler's geometry of the tide-raising force

`fr:astra/euler-tide-force` · model · astra/1

| | |
|---|---|
| the model of | Leonhard Euler |
| witness | `fr:enestroem/E57/0015/fig01` — Fig. 3 |
| witness | `fr:enestroem/E57/0016/p02` — §24: the setting |
| witness | `fr:enestroem/E57/0017/p03` — §26: the resolution along MC and MR |
| this description by | Gerd Graßhoff |
| tradition | newtonian |
| frame | geocentric |
| check | **documented** (6/6: ✓ well-formed · ✓ constructible · ✓ astronomical · ✓ kinematic · ✓ consistent · ✓ documented) |

**Parameters** (symbols; values stand in parametrisations)

| symbol | unit | meaning | admissible |
|---|---|---|---|
| a `a` | length | distance CS of the luminary from the centre of the earth | (30, 1000) |
| ρ `rho` | length | distance CM of the particle from the centre of the earth | (0.5, 2) |
| S `Sf` | quantity | absolute force of the luminary: its accelerating force at the distance of one semidiameter of the earth | any |

**Kinematic variables** (their values are the states)

| symbol | meaning | law |
|---|---|---|
| φ `phi` | the angle ACM between the line to the luminary and the line to the particle | none: free |

**Construction**

| object | kind | defined by | meaning |
|---|---|---|---|
| `C` | point | `observer()` | centre of the earth |
| `S` | point | `C + polar(a, 90°)` | the sun or the moon |
| `A` | point | `C + polar(rho, 90°)` | the point of the sphere through M that has the luminary in its zenith |
| `B` | point | `C - polar(rho, 90°)` | the point that has it in its nadir |
| `D` | point | `C + polar(rho, 180°)` | a point that has it in the horizon |
| `E` | point | `C + polar(rho, 0°)` | the opposite point that has it in the horizon |
| `shell` | circle | `circle(C, rho)` | the sphere about C through the particle |
| `M` | point | `C + polar(rho, 90° + phi)` | a particle of the earth |
| `P` | point | `foot(M, line(C, S))` | foot of the perpendicular from M on CS |

**Observables**

| symbol | defined by | meaning |
|---|---|---|
| CS `dir` | `direction(C, S)` | direction of the luminary from the centre |
| x `x` | `rho * cos(phi)` | CP, counted towards the luminary |
| y `y` | `rho * sin(phi)` | PM, counted towards D |
| dist `dist` | `distance(M, S)` | SM, the distance of the particle from the luminary |
| fM `fM` | `Sf / (dist * dist)` | accelerating force on the particle towards S |
| fC `fC` | `Sf / (a * a)` | accelerating force on the centre towards S |
| tMC `tMC` | `fM * cos(direction(M, S) - direction(M, C)) - fC * cos(direction(C, S) - direction(M, C))` | the force on the particle less the force on the centre, along MC, towards the centre |
| tMR `tMR` | `fM * cos(direction(M, S) - (direction(M, C) + 90°)) - fC * cos(direction(C, S) - (direction(M, C) + 90°))` | the same along MR, normal to MC, towards the side of the luminary |

**Stated propositions** (hold in every sampled configuration; not derived)

| | proposition | meaning | residual |
|---|---|---|---|
| p1 | `equal(abs(x), distance(C, P))` | x is CP | holds, 8e-18 over 3456 |
| p2 | `equal(abs(y), distance(P, M))` | y is PM | holds, 1e-17 over 3456 |

**Derivations:** `fr:astra/euler-tide-force-emendation`, `fr:astra/euler-tide-force-resolution`

**Notes and gaps**

- phi moves no body: it varies a point of the figure, not a celestial body
- phi has no law: its states are not ordered in time
