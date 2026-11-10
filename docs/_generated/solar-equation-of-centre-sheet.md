### The equation of centre is the angle at the sun, with tan c = e sin κ̄ / (R + e cos κ̄)

`fr:astra/solar-equation-of-centre` · derivation · astra/1

| | |
|---|---|
| witness | `fr:kepler-sec/Swerdlow2026/0052/p03` — the formula, p. 22 |
| witness | `fr:kepler-sec/Swerdlow2026/0052/p05` — the maximum, p. 22 |
| this description by | Gerd Graßhoff |
| in | `fr:astra/solar-eccentric` |
| check | **conclusive** (5/5: ✓ well-formed · ✓ grounded · ✓ true · ✓ justified · ✓ conclusive) |

**Constructed**

- `F = foot(O, line(E, S))` — foot of the perpendicular from the earth on ES

**Steps**

| | proposition | from | by | status |
|---|---|---|---|---|
| d1 | `equal(angle(S, E, A), angle(E, S, O) + angle(S, O, E))` | def A | Elements I.32 | justified; degenerate at kappa_bar = 0°, kappa_bar = 180° |
| d2 | `equal(abs(norm180(c)), angle(O, S, E))` | d1, prop p1, prop p2 | algebra | by calculation |
| d3 | `perpendicular(line(O, F), line(E, S))` | def F | construction | read off the construction; undefined at kappa_bar = 0°, kappa_bar = 180° |
| d4 | `equal(distance(O, F), distance(O, E) * sin(angle(O, E, F)))` | d3 | trigonometry sine | justified; degenerate at kappa_bar = 0°, kappa_bar = 90°, kappa_bar = 180°, kappa_bar = 270°; undefined at kappa_bar = 270°, kappa_bar = 90° |
| d5 | `equal(distance(O, E), e)` | def E | construction | read off the construction |
| d6 | `equal(sin(angle(O, E, F)), abs(sin(kappa_bar)))` | def E, def S, def F | construction | read off the construction; undefined at kappa_bar = 270°, kappa_bar = 90° |
| d7 | `equal(distance(O, F), e * abs(sin(kappa_bar)))` | d4, d5, d6 | algebra | by calculation |
| d8 | `equal(distance(S, F), R + e * cos(kappa_bar))` | def E, def S, def F | construction | read off the construction |
| d9 | `equal(tan(angle(O, S, F)), distance(O, F) / distance(S, F))` | d3 | trigonometry tangent | justified; degenerate at kappa_bar = 0°, kappa_bar = 180° |
| d10 | `equal(angle(O, S, F), angle(O, S, E))` | def F, def E, def S | construction | read off the construction |
| d11 | `equal(distance(O, F), distance(O, S) * sin(angle(O, S, F)))` | d3 | trigonometry sine | justified; degenerate at kappa_bar = 0°, kappa_bar = 180° |
| d12 | `equal(distance(O, S) * distance(O, S), distance(O, F) * distance(O, F) + distance(S, F) * distance(S, F))` | d3 | Elements I.47 | justified; degenerate at kappa_bar = 0°, kappa_bar = 180° |
| conclusion2 | `equal(sin(abs(norm180(c))), e * abs(sin(kappa_bar)) / sqrt(R * R + e * e + 2 * R * e * cos(kappa_bar)))` | d2, d10, d11, d12, d7, d8 | algebra | by calculation |
| conclusion | `equal(tan(abs(norm180(c))), e * abs(sin(kappa_bar)) / (R + e * cos(kappa_bar)))` | d2, d9, d10, d7, d8 | algebra | by calculation |

**Rules used**

- **Elements I.32**: “In any triangle, if one of the sides be produced, the exterior angle is equal to the two interior and opposite angles, and the three interior angles of the triangle are equal to two right angles.” (vol. I, p. 316, `fr:assyrischeSammlung/The-thirteen-books-of-Euclids-Elements--Vol-1-Books-1-2-by-Euclid--Sir-Thomas-Little-Heath/0325`)
- **algebra**: “The proposition follows from the cited equalities by calculation.”
- **construction**: “The proposition is read off the cited constructions: it holds for every parameter value and every state without any hypothesis.”
- **trigonometry sine**: “In a right triangle the side opposite an acute angle is the hypotenuse times the sine of that angle.”
- **trigonometry tangent**: “In a right triangle the tangent of an acute angle is the opposite side over the adjacent side.”
- **Elements I.47**: “In right-angled triangles the square on the side subtending the right angle is equal to the squares on the sides containing the right angle.” (vol. I, p. 349, `fr:assyrischeSammlung/The-thirteen-books-of-Euclids-Elements--Vol-1-Books-1-2-by-Euclid--Sir-Thomas-Little-Heath/0358`)

**Computed**

| quantity | with | computed | reported | verdict |
|---|---|---|---|---|
| c_max: max angle(O, S, E) | `fr:astra/solar-eccentric.ptolemy` | 2;23° (κ̄ = 267;37°) | 2;23° | confirmed |
| c_max_battani: max angle(O, S, E) | `fr:astra/solar-eccentric.battani` | 1;59,9° (κ̄ = 268;1°) | 1;59,10° | discrepancy, −0;0,0,55 |

**Notes and gaps**

- d2 rests on the stated proposition p1 (equal(lam_bar, lamA + kappa_bar)), which is checked numerically, not derived
- d2 rests on the stated proposition p2 (equal(kappa, kappa_bar - c)), which is checked numerically, not derived
- degenerate states, in which a step's rule does not apply, a term is undefined or an inequality becomes an equality: kappa_bar = 0°; kappa_bar = 180°; kappa_bar = 270°; kappa_bar = 90°. The derivation does not cover them; the conclusion is true there as well (numerically)
- c_max_battani: computed 1;59,9°, reported 1;59,10° (difference −0;0,0,55)
