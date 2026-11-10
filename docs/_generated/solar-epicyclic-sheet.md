### Ptolemy's solar model, epicyclic form

`fr:astra/solar-epicyclic` · model · astra/1

| | |
|---|---|
| the model of | Ptolemy |
| witness | `fr:kepler-sec/Swerdlow2026/0049/p04` — the construction, p. 19 |
| witness | `fr:kepler-sec/Swerdlow2026/0050/fig01` — Fig. 1.2 |
| this description by | Gerd Graßhoff |
| tradition | ptolemaic |
| frame | geocentric |
| check | **documented** (6/6: ✓ well-formed · ✓ constructible · ✓ astronomical · ✓ kinematic · ✓ consistent · ✓ documented) |

**Parameters** (symbols; values stand in parametrisations)

| symbol | unit | meaning | admissible |
|---|---|---|---|
| R' `R'` | length | radius of the deferent, the circle about O | (1, 1000) |
| r `r` | length | radius of the epicycle | (0, R' / 2) |
| λ<sub>A</sub> `lamA` | angle | longitude of the apogee | any |
| T `T` | time | tropical year | (300, 400) |
| κ̄<sub>0</sub> `kappa_0` | angle | mean anomaly at t = 0 | any |

**Kinematic variables** (their values are the states)

| symbol | meaning | law |
|---|---|---|
| κ̄ `kappa_bar` | mean anomaly: the motion of C about O, and of the sun about C in the opposite sense | uniform, period T, epoch kappa_0 |

**Construction**

| object | kind | defined by | meaning |
|---|---|---|---|
| `O` | point | `observer()` | earth |
| `def` | circle | `circle(O, R')` | the deferent |
| `A'` | point | `O + polar(R', lamA)` | apogee of the deferent |
| `B'` | point | `O - polar(R', lamA)` | perigee of the deferent |
| `C` | point | `O + polar(R', lamA + kappa_bar)` | centre of the epicycle |
| `epi` | circle | `circle(C, r)` | the epicycle |
| `S'` | point | `C + polar(r, lamA)` | sun |

**Observables**

| symbol | defined by | meaning |
|---|---|---|
| λ<sub>S</sub> `lam` | `direction(O, S')` | true longitude |

**Stated propositions** (hold in every sampled configuration; not derived)

| | proposition | meaning | residual |
|---|---|---|---|
| p1 | `parallel(line(C, S'), line(O, A'))` | the radius of the epicycle stays parallel to the apsidal line | holds, 2e-15 over 3456 |
| p2 | `collinear(A', O, B')` | the apsidal line passes through O | holds, 0e+00 over 3456 |

**Figures:** `fr:astra/kepler-fig-ch2-epicycle`, `fr:astra/solar-fig-epicyclic`
