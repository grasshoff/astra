### About the centre of its circle the planet moves unequally: the arc DE is less than the arc EF, and both are passed in equal times

`fr:astra/kepler-equant-unequal-motion` · derivation · astra/1

| | |
|---|---|
| witness | `fr:kepler-prim/kgw-03/0071/p05` — Astronomia nova ch. 4 |
| witness | `fr:kepler-sec/Kepler1992/0147/p02` — Donahue's translation |
| this description by | Gerd Graßhoff |
| in | `fr:astra/kepler-equant` |
| check | **conclusive** (5/5: ✓ well-formed · ✓ grounded · ✓ true · ✓ justified · ✓ conclusive) |

**Given**

- **h1** `equal(q, e)` — the equant point lies as far above the centre as the eye lies below it: BC = BA

**Steps**

| | proposition | from | by | status |
|---|---|---|---|---|
| **lag** | `less(angle(D, B, E), angle(D, C, E))` | k4 | — | justified |
| · k1 | `equal(angle(E, C, D), angle(C, E, B) + angle(E, B, C))` | — | Elements I.32 | justified; degenerate at theta = 0°, theta = 180° |
| · k2 | `less(angle(E, B, C), angle(E, C, D))` | k1 | common notion 5 | justified |
| · k3 | `equal(angle(E, B, C), angle(D, B, E))` | def C, def D, def E | construction | read off the construction |
| · k4 | `less(angle(D, B, E), angle(D, C, E))` | k2, k3 | common notion 1 | justified |
| k5 | `equal(angle(D, B, E) + angle(E, B, F), 180°)` | — | Elements I.13 | justified |
| k6 | `equal(angle(D, C, E) + angle(E, C, F), 180°)` | — | Elements I.13 | justified |
| **lead** | `less(angle(E, C, F), angle(E, B, F))` | k7 | — | justified |
| · k7 | `less(angle(E, C, F), angle(E, B, F))` | lag, k5, k6 | algebra | by calculation |
| quadrant | `right_angle(D, C, E)` | — | — | supposed |
| **unequal** | `less(angle(D, B, E), angle(E, B, F))` | k9 | — | justified |
| · k8 | `equal(angle(D, C, E), angle(E, C, F))` | quadrant, k6 | algebra | by calculation |
| · k9 | `less(angle(D, B, E), angle(E, B, F))` | lag, lead, k8 | algebra | by calculation |
| conclusion | `less(angle(D, B, E), angle(E, B, F))` | unequal | — | justified |

**Rules used**

- **Elements I.32**: “In any triangle, if one of the sides be produced, the exterior angle is equal to the two interior and opposite angles, and the three interior angles of the triangle are equal to two right angles.” (vol. I, p. 316, `fr:assyrischeSammlung/The-thirteen-books-of-Euclids-Elements--Vol-1-Books-1-2-by-Euclid--Sir-Thomas-Little-Heath/0325`)
- **common notion 5**: “The whole is greater than the part.” (vol. I, p. 155, `fr:assyrischeSammlung/The-thirteen-books-of-Euclids-Elements--Vol-1-Books-1-2-by-Euclid--Sir-Thomas-Little-Heath/0164`)
- **construction**: “The proposition is read off the cited constructions: it holds for every parameter value and every state without any hypothesis.”
- **common notion 1**: “Things which are equal to the same thing are also equal to one another.” (vol. I, p. 155, `fr:assyrischeSammlung/The-thirteen-books-of-Euclids-Elements--Vol-1-Books-1-2-by-Euclid--Sir-Thomas-Little-Heath/0164`)
- **Elements I.13**: “If a straight line set up on a straight line make angles, it will make either two right angles or angles equal to two right angles.” (vol. I, p. 275, `fr:assyrischeSammlung/The-thirteen-books-of-Euclids-Elements--Vol-1-Books-1-2-by-Euclid--Sir-Thomas-Little-Heath/0284`)
- **algebra**: “The proposition follows from the cited equalities by calculation.”

**Notes and gaps**

- given h1 (equal(q, e)) is not needed for the conclusion
- degenerate states, in which a step's rule does not apply, a term is undefined or an inequality becomes an equality: theta = 0°; theta = 180°. The derivation does not cover them; the conclusion is true there as well (numerically)
