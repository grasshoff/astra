### The tide-raising force along and across the vertical, to first order in the earth's size over the luminary's distance

`fr:astra/euler-tide-force-resolution` · derivation · astra/1

| | |
|---|---|
| witness | `fr:enestroem/E57/0016/p02` — §24 |
| witness | `fr:enestroem/E57/0017/p04` — §26: the exact components |
| witness | `fr:enestroem/E57/0018/p08` — §27: the two components to first order |
| this description by | Gerd Graßhoff |
| in | `fr:astra/euler-tide-force` |
| check | **conclusive** (5/5: ✓ well-formed · ✓ grounded · ✓ true · ✓ justified · ✓ conclusive) |

**Steps**

| | proposition | from | by | status |
|---|---|---|---|---|
| **setting** | `equal(dist * dist, (a - x) * (a - x) + y * y)` | s6 | — | justified |
| · s1 | `perpendicular(line(M, P), line(S, C))` | def P | construction | read off the construction; undefined at phi = 0°, phi = 180° |
| · s2 | `equal(distance(M, S) * distance(M, S), distance(M, P) * distance(M, P) + distance(S, P) * distance(S, P))` | s1 | Elements I.47 | justified; degenerate at phi = 0°, phi = 180° |
| · s3 | `equal(distance(S, P), a - x)` | def S, def P, def x | construction | read off the construction |
| · s4 | `equal(distance(M, P), abs(y))` | def M, def P, def y | construction | read off the construction |
| · s5 | `equal(dist, distance(M, S))` | def dist | construction | read off the construction |
| · s6 | `equal(dist * dist, (a - x) * (a - x) + y * y)` | s2, s3, s4, s5 | algebra | by calculation |
| **exact_MC** | `equal(tMC, Sf * x / (a * a * rho) - Sf * (a * x - x * x - y * y) / (dist * dist * dist * rho))` | m1 | — | justified |
| · m1 | `equal(tMC, Sf * x / (a * a * rho) - Sf * (a * x - x * x - y * y) / (dist * dist * dist * rho))` | def tMC, def fM, def fC, def dist, def x, def y, def M, def S | construction | read off the construction |
| **exact_MR** | `equal(tMR, Sf * a * y / (dist * dist * dist * rho) - Sf * y / (a * a * rho))` | r1 | — | justified |
| · r1 | `equal(tMR, Sf * a * y / (dist * dist * dist * rho) - Sf * y / (a * a * rho))` | def tMR, def fM, def fC, def dist, def x, def y, def M, def S | construction | read off the construction |
| **second_MC** | `approximately(tMC, Sf * (y * y - 2 * x * x) / (a * a * a * rho) + 3 * Sf * x * (3 * y * y - 2 * x * x) / (2 * a * a * a * a * rho)) to order 2 in rho / a` | n1 | — | justified |
| · n1 | `approximately(tMC, Sf * (y * y - 2 * x * x) / (a * a * a * rho) + 3 * Sf * x * (3 * y * y - 2 * x * x) / (2 * a * a * a * a * rho)) to order 2 in rho / a` | exact_MC, setting | expansion | by expansion |
| **second_MR** | `approximately(tMR, 3 * Sf * x * y / (a * a * a * rho) + 3 * Sf * y * (4 * x * x - y * y) / (2 * a * a * a * a * rho)) to order 2 in rho / a` | n2 | — | justified |
| · n2 | `approximately(tMR, 3 * Sf * x * y / (a * a * a * rho) + 3 * Sf * y * (4 * x * x - y * y) / (2 * a * a * a * a * rho)) to order 2 in rho / a` | exact_MR, setting | expansion | by expansion |
| **first_MC** | `approximately(tMC, Sf * (y * y - 2 * x * x) / (a * a * a * rho)) to order 1 in rho / a` | f1 | — | justified |
| · f1 | `approximately(tMC, Sf * (y * y - 2 * x * x) / (a * a * a * rho)) to order 1 in rho / a` | second_MC | expansion | by expansion |
| **first_MR** | `approximately(tMR, 3 * Sf * x * y / (a * a * a * rho)) to order 1 in rho / a` | f2 | — | justified |
| · f2 | `approximately(tMR, 3 * Sf * x * y / (a * a * a * rho)) to order 1 in rho / a` | second_MR | expansion | by expansion |
| **vertical** | `equal(Sf * (y * y - 2 * x * x) / (a * a * a * rho), Sf * rho / (a * a * a) * (1 - 3 * cos(phi) * cos(phi)))` | v3 | — | justified |
| · v1 | `equal(x, rho * cos(phi))` | def x | construction | read off the construction |
| · v2 | `equal(y, rho * sin(phi))` | def y | construction | read off the construction |
| · v3 | `equal(Sf * (y * y - 2 * x * x) / (a * a * a * rho), Sf * rho / (a * a * a) * (1 - 3 * cos(phi) * cos(phi)))` | v1, v2 | algebra | by calculation |
| **horizontal** | `equal(3 * Sf * x * y / (a * a * a * rho), 3 * Sf * rho / (2 * a * a * a) * sin(2 * phi))` | w3 | — | justified |
| · w1 | `equal(x, rho * cos(phi))` | def x | construction | read off the construction |
| · w2 | `equal(y, rho * sin(phi))` | def y | construction | read off the construction |
| · w3 | `equal(3 * Sf * x * y / (a * a * a * rho), 3 * Sf * rho / (2 * a * a * a) * sin(2 * phi))` | w1, w2 | algebra | by calculation |
| conclusion2 | `approximately(tMR, 3 * Sf * x * y / (a * a * a * rho)) to order 1 in rho / a` | first_MR | expansion | by expansion |
| conclusion | `approximately(tMC, Sf * (y * y - 2 * x * x) / (a * a * a * rho))` | first_MC | — | justified |

**Rules used**

- **construction**: “The proposition is read off the cited constructions: it holds for every parameter value and every state without any hypothesis.”
- **Elements I.47**: “In right-angled triangles the square on the side subtending the right angle is equal to the squares on the sides containing the right angle.” (vol. I, p. 349, `fr:assyrischeSammlung/The-thirteen-books-of-Euclids-Elements--Vol-1-Books-1-2-by-Euclid--Sir-Thomas-Little-Heath/0358`)
- **algebra**: “The proposition follows from the cited equalities by calculation.”
- **expansion**: “The two expressions agree to the stated order in a small ratio: their relative difference falls like that power of the ratio.”

**Notes and gaps**

- step v1 is not used on the way to the conclusion
- step v2 is not used on the way to the conclusion
- step v3 is not used on the way to the conclusion
- step vertical is not used on the way to the conclusion
- step w1 is not used on the way to the conclusion
- step w2 is not used on the way to the conclusion
- step w3 is not used on the way to the conclusion
- step horizontal is not used on the way to the conclusion
- degenerate states, in which a step's rule does not apply, a term is undefined or an inequality becomes an equality: phi = 0°; phi = 180°. The derivation does not cover them; the conclusion is true there as well (numerically)
