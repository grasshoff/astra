### The two forms place the sun at the same point when R' = R and r = e

`fr:astra/solar-equivalence-equal-radii` · derivation · astra/1

| | |
|---|---|
| witness | `fr:kepler-sec/Swerdlow2026/0049/p04` — the parallelogram OESC, p. 19 |
| witness | `fr:kepler-sec/Swerdlow2026/0050/fig01` — Fig. 1.2 |
| this description by | Gerd Graßhoff |
| in | `fr:astra/solar-eccentric-epicyclic` |
| check | **conclusive** (5/5: ✓ well-formed · ✓ grounded · ✓ true · ✓ justified · ✓ conclusive) |

**Given**

- **h1** `equal(Epi.R', Ecc.R)` — the deferent has the radius of the eccentric
- **h2** `equal(Epi.r, Ecc.e)` — the epicycle has the eccentricity as its radius

**Steps**

| | proposition | from | by | status |
|---|---|---|---|---|
| **same** | `coincident(Ecc.S, Epi.S')` | — | cases | justified by cases |
| · d3 | `equal(distance(Ecc.E, Ecc.S), Ecc.R)` | def Ecc.S | construction | read off the construction |
| · d4 | `equal(distance(O, Epi.C), Epi.R')` | def Epi.C | construction | read off the construction |
| · d8 | `equal(distance(O, Ecc.E), Ecc.e)` | def Ecc.E | construction | read off the construction |
| · d9 | `equal(distance(Epi.C, Epi.S'), Epi.r)` | def Epi.S' | construction | read off the construction |
| · *generic* | `coincident(Ecc.S, Epi.S')` | d12 | — | justified |
| · · **sides** | `parallel(line(Ecc.E, Ecc.S), line(O, Epi.C))` | d2 | — | justified |
| · · · d1 | `equal(angle(Ecc.A, Ecc.E, Ecc.S), angle(Epi.A', O, Epi.C))` | def Ecc.A, def Ecc.S, def Epi.A', def Epi.C | construction | read off the construction |
| · · · d2 | `parallel(line(Ecc.E, Ecc.S), line(O, Epi.C))` | d1 | Elements I.28 | justified |
| · · d5 | `equal(distance(Ecc.E, Ecc.S), distance(O, Epi.C))` | d3, d4, h1 | common notion 1 | justified |
| · · **joins** | `parallel(line(O, Ecc.E), line(Epi.C, Ecc.S))` | d6 | — | justified |
| · · · d6 | `parallel(line(O, Ecc.E), line(Epi.C, Ecc.S))` | sides, d5 | Elements I.33 | justified |
| · · d7 | `equal(distance(O, Ecc.E), distance(Epi.C, Ecc.S))` | sides, d5 | Elements I.33 | justified |
| · · d10 | `equal(distance(Epi.C, Ecc.S), distance(Epi.C, Epi.S'))` | d7, d8, h2, d9 | common notion 1 | justified |
| · · d11 | `parallel(line(Epi.C, Epi.S'), line(O, Ecc.E))` | def Epi.S', def Ecc.E | construction | read off the construction |
| · · d12 | `coincident(Ecc.S, Epi.S')` | joins, d11, d10 | lemma same ray | justified |
| · *apogee* | `coincident(Ecc.S, Epi.S')` | a7 | — | justified |
| · · a1 | `equal(distance(O, Ecc.S), distance(O, Ecc.E) + distance(Ecc.E, Ecc.S))` | — | lemma segment addition | justified |
| · · a2 | `equal(distance(O, Epi.S'), distance(O, Epi.C) + distance(Epi.C, Epi.S'))` | — | lemma segment addition | justified |
| · · a3 | `equal(distance(O, Ecc.S), distance(O, Epi.S'))` | a1, a2, d3, d4, d8, d9, h1, h2 | algebra | by calculation |
| · · a4 | `parallel(line(O, Ecc.S), line(O, Ecc.E))` | apogee | lemma one line | justified |
| · · a5 | `collinear(O, Ecc.E, Epi.S')` | def Epi.C, def Epi.S', def Ecc.E | construction | read off the construction |
| · · a6 | `parallel(line(O, Epi.S'), line(O, Ecc.E))` | a5 | lemma one line | justified |
| · · a7 | `coincident(Ecc.S, Epi.S')` | a4, a6, a3 | lemma same ray | justified |
| · *perigee* | `coincident(Ecc.S, Epi.S')` | p7 | — | justified |
| · · p1 | `equal(distance(Ecc.E, Ecc.S), distance(Ecc.E, O) + distance(O, Ecc.S))` | — | lemma segment addition | justified |
| · · p2 | `equal(distance(Epi.C, O), distance(Epi.C, Epi.S') + distance(Epi.S', O))` | — | lemma segment addition | justified |
| · · p3 | `equal(distance(O, Ecc.S), distance(O, Epi.S'))` | p1, p2, d3, d4, d8, d9, h1, h2 | algebra | by calculation |
| · · p4 | `parallel(line(O, Ecc.S), line(O, Ecc.E))` | perigee | lemma one line | justified |
| · · p5 | `collinear(O, Ecc.E, Epi.S')` | def Epi.C, def Epi.S', def Ecc.E | construction | read off the construction |
| · · p6 | `parallel(line(O, Epi.S'), line(O, Ecc.E))` | p5 | lemma one line | justified |
| · · p7 | `coincident(Ecc.S, Epi.S')` | p4, p6, p3 | lemma same ray | justified |
| conclusion | `coincident(Ecc.S, Epi.S')` | same | — | justified |

**Equivalence:** `solar-eccentric` and `solar-epicyclic` are equivalent in **position** under `equal(Epi.R', Ecc.R)`, `equal(Epi.r, Ecc.e)`.

**Rules used**

- **cases**: “The claim is reached in every case, and the cases cover every configuration.”
- **construction**: “The proposition is read off the cited constructions: it holds for every parameter value and every state without any hypothesis.”
- **Elements I.28**: “If a straight line falling on two straight lines make the exterior angle equal to the interior and opposite angle on the same side, or the interior angles on the same side equal to two right angles, the straight lines will be parallel to one another.” (vol. I, p. 309, `fr:assyrischeSammlung/The-thirteen-books-of-Euclids-Elements--Vol-1-Books-1-2-by-Euclid--Sir-Thomas-Little-Heath/0318`)
- **common notion 1**: “Things which are equal to the same thing are also equal to one another.” (vol. I, p. 155, `fr:assyrischeSammlung/The-thirteen-books-of-Euclids-Elements--Vol-1-Books-1-2-by-Euclid--Sir-Thomas-Little-Heath/0164`)
- **Elements I.33**: “The straight lines joining equal and parallel straight lines (at the extremities which are) in the same directions (respectively) are themselves also equal and parallel.” (vol. I, p. 322, `fr:assyrischeSammlung/The-thirteen-books-of-Euclids-Elements--Vol-1-Books-1-2-by-Euclid--Sir-Thomas-Little-Heath/0331`)
- **lemma same ray**: “Two points that lie from a point C in the same direction along parallels to one line, at equal distances from C, coincide.”
- **lemma segment addition**: “If B lies between A and C on one line, AC is AB and BC together.”
- **algebra**: “The proposition follows from the cited equalities by calculation.”
- **lemma one line**: “Three points on one line give lines from one of them to the other two that are parallel (they are one line).”
