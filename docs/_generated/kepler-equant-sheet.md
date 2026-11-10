### The equant model of the first inequality

`fr:astra/kepler-equant` · model · astra/1

| | |
|---|---|
| the model of | Ptolemy |
| witness | `fr:kepler-prim/kgw-03/0071/p04` — the construction, Astronomia nova ch. 4 |
| witness | `fr:kepler-prim/kgw-03/0071/fig01` — the figure |
| this description by | Gerd Graßhoff |
| tradition | ptolemaic |
| frame | geocentric |
| check | **documented** (6/6: ✓ well-formed · ✓ constructible · ✓ astronomical · ✓ kinematic · ✓ consistent · ✓ documented) |

**Parameters** (symbols; values stand in parametrisations)

| symbol | unit | meaning | admissible |
|---|---|---|---|
| R `R` | length | radius of the eccentric circle about B | (10, 1000) |
| e `e` | length | eccentricity BA: the distance of the eye from the centre | (0, R / 3) |
| q `q` | length | the distance BC of the equant point from the centre | (0, R / 3) |
| λ<sub>D</sub> `lamD` | angle | direction of the apogee | any |
| T `T` | time | period of the planet about the equant point | (100, 20000) |
| θ<sub>0</sub> `theta_0` | angle | the angle at the equant point at t = 0 | any |

**Kinematic variables** (their values are the states)

| symbol | meaning | law |
|---|---|---|
| θ `theta` | the angle DCE at the equant point, counted from the apogee | uniform, period T, epoch theta_0 |

**Construction**

| object | kind | defined by | meaning |
|---|---|---|---|
| `A` | point | `observer()` | the eye |
| `B` | point | `A + polar(e, lamD)` | centre of the eccentric |
| `C` | point | `B + polar(q, lamD)` | the equant point |
| `orb` | circle | `circle(B, R)` | the eccentric, the circle the planet traverses |
| `D` | point | `B + polar(R, lamD)` | apogee |
| `F` | point | `B - polar(R, lamD)` | perigee |
| `E` | point | `seen_from(C, orb, lamD + theta)` | the planet: where the line from C at the angle θ meets the circle |

**Observables**

| symbol | defined by | meaning |
|---|---|---|
| λ `lam` | `direction(A, E)` | longitude of the planet as seen from A |
| atC `atC` | `angle(D, C, E)` | the angle DCE at the equant point |
| atB `atB` | `angle(D, B, E)` | the angle DBE at the centre: the arc DE the planet has traversed |

**Stated propositions** (hold in every sampled configuration; not derived)

| | proposition | meaning | residual |
|---|---|---|---|
| p1 | `on(E, orb)` | the planet is on the circle about B | holds, 4e-16 over 3456 |
| p2 | `collinear(F, A, D)` | the apsidal line passes through the eye | holds, 2e-16 over 3456 |

**Derivations:** `fr:astra/kepler-equant-unequal-motion`
