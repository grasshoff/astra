| op | arguments | result | semantics |
|---|---|---|---|
| `const` | number | scalar | a literal |
| `param` |  | scalar | input: a parameter of the model; its value comes from the parametrisation. Without a value it is null, an error as soon as anything but a range or a law (ids `_aux…`) needs it |
| `var` | [rate, epoch] | angle | input: a kinematic variable; its value comes from the state. If the state gives a time t instead and the variable has a law: norm360(epoch + rate · t) |
| `id` | value | same | a named value |
| `add` | a, b | same | scalars or 2-vectors element-wise |
| `sub` | a, b | same | scalars or 2-vectors element-wise |
| `mul` | a, b | same | scalar × scalar, or scalar × 2-vector |
| `div` | a, b | scalar | a / b; NaN when b = 0 |
| `neg` | a | same |  |
| `abs` | a | scalar |  |
| `norm360` | angle | angle | into [0, 360) |
| `norm180` | angle | angle | into (-180, 180] |
| `polar` | length, angle | vector | [r cos θ, r sin θ] |
| `observer` |  | point | [0, 0]: the observer is the origin of the model frame |
| `circle` | point, length | circle |  |
| `line` | point, point | line | directed P→Q; NaN direction when P and Q are closer than 1e-9 |
| `ray` | point, angle | line | directed line from P at angle θ |
| `x_cl` | circle, line, branch | point | circle ∩ directed line; branch +1: the point further along the direction, −1: the nearer (smaller parameter); NaN when they miss |
| `x_cc` | circle, circle, branch | point | circle ∩ circle; branch +1: left of the directed line centre₁→centre₂, −1: right; NaN when they miss or coincide |
| `foot` | point, line | point | perpendicular foot of P on the line |
| `midpoint` | point, point | point |  |
| `rotate` | point, about, angle | point | P turned about A by θ (counter-clockwise) |
| `reflect` | point, line | point |  |
| `ellipse` | focus, focus, length | ellipse | foci and semi-major axis a |
| `on_ellipse` | ellipse, angle | point | the point at eccentric anomaly E, counted at the centre from the major axis towards the second focus |
| `x_el` | ellipse, line, branch | point | ellipse ∩ directed line, branch as x_cl |
| `tangent` | point, circle, branch | point | point of contact of the tangent from P; branch +1 counter-clockwise of the direction centre→P, −1 clockwise; NaN for an interior P |
| `direction` | point, point | angle | norm360(atan2(Q − P)); NaN when P and Q are closer than 1e-9 |
| `distance` | point, point | length |  |
| `seen_from` | point, circle, angle | point | the point of the circle on the ray from Q at angle θ, far branch (the equant construction) |
| `kepler_E` | mean_anomaly, e | angle | eccentric anomaly from Kepler's equation, Newton iteration to 1e-14 |
| `true_anom` | eccentric_anomaly, e | angle | ν from E |
| `sin` | angle | number |  |
| `cos` | angle | number |  |
| `tan` | angle | number |  |
| `atan2` | y, x | angle | in (-180, 180] |
| `asin` | number | angle | argument clamped to [-1, 1] |
| `sqrt` | number | number | NaN for a negative argument |
| `res_parallel` | line, line | number | |sin Δθ| — the residual of parallel |
| `res_collinear` | point, point, point | number | |PQ × QR| / (|PQ| |QR|) — the residual of collinear |
| `res_perp` | line, line | number | |cos Δθ| — the residual of perpendicular |
| `res_on` | point, circle | length | | |P − centre| − r | — the residual of on |
