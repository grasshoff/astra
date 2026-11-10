### Ptolemy's solar model, eccentric form

`fr:astra/solar-eccentric` · model · astra/1

| | |
|---|---|
| the model of | Ptolemy |
| witness | `fr:kepler-sec/Swerdlow2026/0049/p04` — the construction, p. 19 |
| witness | `fr:kepler-sec/Swerdlow2026/0050/p03` — longitudes, anomalies and the equation, p. 20 |
| witness | `fr:kepler-sec/Swerdlow2026/0051/fig02` — Fig. 1.4 |
| this description by | Gerd Graßhoff |
| tradition | ptolemaic |
| frame | geocentric |
| check | **documented** (6/6: ✓ well-formed · ✓ constructible · ✓ astronomical · ✓ kinematic · ✓ consistent · ✓ documented) |

**Parameters** (symbols; values stand in parametrisations)

| symbol | unit | meaning | admissible |
|---|---|---|---|
| R `R` | length | radius of the eccentric | (1, 1000) |
| e `e` | length | eccentricity, the distance OE | (0, R / 2) |
| λ<sub>A</sub> `lamA` | angle | longitude of the apogee | any |
| T `T` | time | tropical year | (300, 400) |
| κ̄<sub>0</sub> `kappa_0` | angle | mean anomaly at t = 0 | any |

**Kinematic variables** (their values are the states)

| symbol | meaning | law |
|---|---|---|
| κ̄ `kappa_bar` | mean anomaly about E, counted from the apogee | uniform, period T, epoch kappa_0 |

**Construction**

| object | kind | defined by | meaning |
|---|---|---|---|
| `O` | point | `observer()` | earth |
| `E` | point | `O + polar(e, lamA)` | centre of the eccentric |
| `ecc` | circle | `circle(E, R)` | the eccentric |
| `A` | point | `E + polar(R, lamA)` | apogee |
| `B` | point | `E - polar(R, lamA)` | perigee |
| `S` | point | `E + polar(R, lamA + kappa_bar)` | sun |

**Observables**

| symbol | defined by | meaning |
|---|---|---|
| λ̄<sub>S</sub> `lam_bar` | `direction(E, S)` | mean longitude |
| λ<sub>S</sub> `lam` | `direction(O, S)` | true longitude |
| κ `kappa` | `lam - lamA` | true anomaly about O |
| c `c` | `lam_bar - lam` | equation of centre, mean minus true longitude |

**Stated propositions** (hold in every sampled configuration; not derived)

| | proposition | meaning | residual |
|---|---|---|---|
| p1 | `equal(lam_bar, lamA + kappa_bar)` | the mean longitude is the longitude of the apogee plus the mean anomaly | holds, 6e-14 over 3456 |
| p2 | `equal(kappa, kappa_bar - c)` | the true anomaly is the mean anomaly less the equation | holds, 1e-13 over 3456 |
| p5 | `equal(lam, lam_bar - c)` | the true longitude is the mean longitude less the equation | holds, 6e-14 over 3456 |
| p3 | `collinear(A, E, B)` | the apsidal line passes through E | holds, 1e-16 over 3456 |
| p4 | `collinear(A, O, B)` | and through O | holds, 1e-16 over 3456 |

**Parametrisations:** `fr:astra/solar-eccentric.battani`, `fr:astra/solar-eccentric.ptolemy`

**Derivations:** `fr:astra/solar-equation-of-centre`, `fr:astra/solar-parameters-from-seasons`

**Figures:** `fr:astra/kepler-fig-ch2-eccentric`, `fr:astra/solar-fig-1-4`, `fr:astra/solar-fig-eccentric`
