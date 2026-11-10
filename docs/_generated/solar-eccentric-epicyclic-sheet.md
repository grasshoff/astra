### Eccentric and epicyclic form of Ptolemy's solar model, superposed

`fr:astra/solar-eccentric-epicyclic` · superposition · astra/1

| | |
|---|---|
| witness | `fr:kepler-sec/Swerdlow2026/0050/fig01` — Fig. 1.2 |
| witness | `fr:kepler-sec/Swerdlow2026/0051/fig01` — Fig. 1.3 |
| this description by | Gerd Graßhoff |
| frame | geocentric |
| check | **consistent** (4/4: ✓ well-formed · ✓ constructible · ✓ superposed · ✓ consistent) |

**Members**

| prefix | model | whose |
|---|---|---|
| Ecc | `fr:astra/solar-eccentric` — Ptolemy's solar model, eccentric form | Ptolemy |
| Epi | `fr:astra/solar-epicyclic` — Ptolemy's solar model, epicyclic form | Ptolemy |

**Identified**

- `Ecc.O` = `Epi.O` as `O` — one earth
- `Ecc.lamA` = `Epi.lamA` as `lamA` — one apsidal direction
- `Ecc.T` = `Epi.T` as `T` — one year
- `Ecc.kappa_0` = `Epi.kappa_0` as `kappa_0` — one epoch
- `Ecc.kappa_bar` = `Epi.kappa_bar` as `kappa_bar` — one mean anomaly

**Parameters** (symbols; values stand in parametrisations)

| symbol | unit | meaning | admissible |
|---|---|---|---|
| R `Ecc.R` | length | radius of the eccentric | (1, 1000) |
| e `Ecc.e` | length | eccentricity, the distance OE | (0, Ecc.R / 2) |
| λ<sub>A</sub> `lamA` | angle | longitude of the apogee | any |
| T `T` | time | tropical year | (300, 400) |
| κ̄<sub>0</sub> `kappa_0` | angle | mean anomaly at t = 0 | any |
| R' `Epi.R'` | length | radius of the deferent, the circle about O | (1, 1000) |
| r `Epi.r` | length | radius of the epicycle | (0, Epi.R' / 2) |

**Kinematic variables** (their values are the states)

| symbol | meaning | law |
|---|---|---|
| κ̄ `kappa_bar` | mean anomaly about E, counted from the apogee | uniform, period T, epoch kappa_0 |

**Construction**

| object | kind | defined by | meaning |
|---|---|---|---|
| `O` | point | `observer()` | earth |
| `Ecc.E` | point | `O + polar(Ecc.e, lamA)` | centre of the eccentric |
| `Ecc.ecc` | circle | `circle(Ecc.E, Ecc.R)` | the eccentric |
| `Ecc.A` | point | `Ecc.E + polar(Ecc.R, lamA)` | apogee |
| `Ecc.B` | point | `Ecc.E - polar(Ecc.R, lamA)` | perigee |
| `Ecc.S` | point | `Ecc.E + polar(Ecc.R, lamA + kappa_bar)` | sun |
| `Epi.def` | circle | `circle(O, Epi.R')` | the deferent |
| `Epi.A'` | point | `O + polar(Epi.R', lamA)` | apogee of the deferent |
| `Epi.B'` | point | `O - polar(Epi.R', lamA)` | perigee of the deferent |
| `Epi.C` | point | `O + polar(Epi.R', lamA + kappa_bar)` | centre of the epicycle |
| `Epi.epi` | circle | `circle(Epi.C, Epi.r)` | the epicycle |
| `Epi.S'` | point | `Epi.C + polar(Epi.r, lamA)` | sun |

**Observables**

| symbol | defined by | meaning |
|---|---|---|
| λ̄<sub>S</sub> `Ecc.lam_bar` | `direction(Ecc.E, Ecc.S)` | mean longitude |
| λ<sub>S</sub> `Ecc.lam` | `direction(O, Ecc.S)` | true longitude |
| κ `Ecc.kappa` | `Ecc.lam - lamA` | true anomaly about O |
| c `Ecc.c` | `Ecc.lam_bar - Ecc.lam` | equation of centre, mean minus true longitude |
| λ'<sub>S</sub> `Epi.lam` | `direction(O, Epi.S')` | true longitude |

**Stated propositions** (hold in every sampled configuration; not derived)

| | proposition | meaning | residual |
|---|---|---|---|
| Ecc.p1 | `equal(Ecc.lam_bar, lamA + kappa_bar)` | the mean longitude is the longitude of the apogee plus the mean anomaly | holds, 6e-14 over 3456 |
| Ecc.p2 | `equal(Ecc.kappa, kappa_bar - Ecc.c)` | the true anomaly is the mean anomaly less the equation | holds, 1e-13 over 3456 |
| Ecc.p5 | `equal(Ecc.lam, Ecc.lam_bar - Ecc.c)` | the true longitude is the mean longitude less the equation | holds, 6e-14 over 3456 |
| Ecc.p3 | `collinear(Ecc.A, Ecc.E, Ecc.B)` | the apsidal line passes through E | holds, 2e-16 over 3456 |
| Ecc.p4 | `collinear(Ecc.A, O, Ecc.B)` | and through O | holds, 2e-16 over 3456 |
| Epi.p1 | `parallel(line(Epi.C, Epi.S'), line(O, Epi.A'))` | the radius of the epicycle stays parallel to the apsidal line | holds, 3e-15 over 3456 |
| Epi.p2 | `collinear(Epi.A', O, Epi.B')` | the apsidal line passes through O | holds, 0e+00 over 3456 |

**Parametrisations:** `fr:astra/solar-eccentric-epicyclic.equal-radii`, `fr:astra/solar-eccentric-epicyclic.proportional`

**Derivations:** `fr:astra/solar-equivalence-equal-radii`, `fr:astra/solar-equivalence-proportional`

**Figures:** `fr:astra/solar-fig-1-2`, `fr:astra/solar-fig-1-3`

**Notes and gaps**

- parameters of one member only (free until a hypothesis or a parametrisation relates them): Ecc.R, Ecc.e, Epi.R', Epi.r
