### The two forms show the sun in the same direction when R'/r = R/e

`fr:astra/solar-equivalence-proportional` · derivation · astra/1

| | |
|---|---|
| witness | `fr:kepler-sec/Swerdlow2026/0050/p02` — the proportional case, p. 20 |
| witness | `fr:kepler-sec/Swerdlow2026/0051/fig01` — Fig. 1.3 |
| this description by | Gerd Graßhoff |
| in | `fr:astra/solar-eccentric-epicyclic` |
| check | **conclusive** (5/5: ✓ well-formed · ✓ grounded · ✓ true · ✓ justified · ✓ conclusive) |

**Given**

- **h1** `equal(Epi.r, Epi.R' * Ecc.e / Ecc.R)` — R'/r = R/e

**Steps**

| | proposition | from | by | status |
|---|---|---|---|---|
| d1 | `equal(angle(O, Ecc.E, Ecc.S), angle(Epi.S', Epi.C, O))` | def Ecc.E, def Ecc.S, def Epi.C, def Epi.S' | construction | read off the construction |
| d2 | `equal(distance(O, Ecc.E), Ecc.e)` | def Ecc.E | construction | read off the construction |
| d3 | `equal(distance(Ecc.E, Ecc.S), Ecc.R)` | def Ecc.S | construction | read off the construction |
| d4 | `equal(distance(Epi.C, Epi.S'), Epi.r)` | def Epi.S' | construction | read off the construction |
| d5 | `equal(distance(O, Epi.C), Epi.R')` | def Epi.C | construction | read off the construction |
| d6 | `equal(distance(Ecc.E, O) / distance(Ecc.E, Ecc.S), distance(Epi.C, Epi.S') / distance(Epi.C, O))` | d2, d3, d4, d5, h1 | algebra | by calculation |
| d7 | `equal(angle(Ecc.E, O, Ecc.S), angle(Epi.C, Epi.S', O))` | d1, d6 | Elements VI.6 | justified; degenerate at kappa_bar = 0°, kappa_bar = 180° |
| d8 | `parallel(line(Epi.C, Epi.S'), line(O, Ecc.E))` | def Epi.S', def Ecc.E | construction | read off the construction |
| d9 | `equal(angle(Epi.C, Epi.S', O), angle(Epi.S', O, Ecc.E))` | d8 | Elements I.29 | justified; degenerate at kappa_bar = 0°, kappa_bar = 180° |
| d10 | `equal(angle(Ecc.E, O, Ecc.S), angle(Ecc.E, O, Epi.S'))` | d7, d9 | common notion 1 | justified |
| d11 | `equal(direction(O, Ecc.S), direction(O, Epi.S'))` | d10 | lemma same angle | justified; degenerate at kappa_bar = 0°, kappa_bar = 180° |
| conclusion | `equal(direction(O, Ecc.S), direction(O, Epi.S'))` | d11 | — | justified |

**Equivalence:** `solar-eccentric` and `solar-epicyclic` are equivalent in **direction** under `equal(Epi.r, Epi.R' * Ecc.e / Ecc.R)`.

**Rules used**

- **construction**: “The proposition is read off the cited constructions: it holds for every parameter value and every state without any hypothesis.”
- **algebra**: “The proposition follows from the cited equalities by calculation.”
- **Elements VI.6**: “If two triangles have one angle equal to one angle and the sides about the equal angles proportional, the triangles will be equiangular and will have those angles equal which the corresponding sides subtend.” (vol. II, p. 204, `fr:assyrischeSammlung/The-Thirteen-Books-of-the-Elements--Vol.-2-Books-3-9-by-Thomas-L.-Heath--Euclid/0211`)
- **Elements I.29**: “A straight line falling on parallel straight lines makes the alternate angles equal to one another, the exterior angle equal to the interior and opposite angle, and the interior angles on the same side equal to two right angles.” (vol. I, p. 311, `fr:assyrischeSammlung/The-thirteen-books-of-Euclids-Elements--Vol-1-Books-1-2-by-Euclid--Sir-Thomas-Little-Heath/0320`)
- **common notion 1**: “Things which are equal to the same thing are also equal to one another.” (vol. I, p. 155, `fr:assyrischeSammlung/The-thirteen-books-of-Euclids-Elements--Vol-1-Books-1-2-by-Euclid--Sir-Thomas-Little-Heath/0164`)
- **lemma same angle**: “Two points that subtend equal angles with a ray VP at V and lie on the same side of it are seen from V in the same direction.”

**Notes and gaps**

- degenerate states, in which a step's rule does not apply, a term is undefined or an inequality becomes an equality: kappa_bar = 0°; kappa_bar = 180°. The derivation does not cover them; the conclusion is true there as well (numerically)
