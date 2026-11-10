### The eccentricity and the apogee follow from the lengths of spring and summer

`fr:astra/solar-parameters-from-seasons` · derivation · astra/1

| | |
|---|---|
| witness | `fr:kepler-sec/Swerdlow2026/0052/p05` — the seasons and the parameters, p. 22 |
| this description by | Gerd Graßhoff |
| in | `fr:astra/solar-eccentric` |
| check | **conclusive** (5/5: ✓ well-formed · ✓ grounded · ✓ true · ✓ justified · ✓ conclusive) |

**Steps**

| | proposition | from | by | status |
|---|---|---|---|---|
| d1 | `equal(lam_bar, lamA + kappa_bar)` | def lam_bar, def S | construction | read off the construction |
| conclusion | `equal(lam_bar, lamA + kappa_bar)` | d1 | — | justified |

**Rules used**

- **construction**: “The proposition is read off the cited constructions: it holds for every parameter value and every state without any hypothesis.”

**Computed**

| quantity | with | computed | reported | verdict |
|---|---|---|---|---|
| days.e: e determined from lam: 0° → 90° in 94;30 d, lam: 90° → 180° in 92;30 d | `fr:astra/solar-eccentric.ptolemy` | 2;28,58 (the only solution found; days turned into arcs of mean motion with T = 365;14,48 d) | 2;29,30 | discrepancy, −0;0,31,44 |
| days.lamA: lamA determined from lam: 0° → 90° in 94;30 d, lam: 90° → 180° in 92;30 d | `fr:astra/solar-eccentric.ptolemy` | 65;26° (the only solution found; days turned into arcs of mean motion with T = 365;14,48 d) | 65;30° | discrepancy, −0;3,47 |
| arcs.e: e determined from lam: 0° → 90° in 93;9° of mean motion, lam: 90° → 180° in 91;11° of mean motion | `fr:astra/solar-eccentric.ptolemy` | 2;29,28 (the only solution found; the intervals taken as arcs of mean motion) | 2;29,30 | discrepancy, −0;0,1,51 |
| arcs.lamA: lamA determined from lam: 0° → 90° in 93;9° of mean motion, lam: 90° → 180° in 91;11° of mean motion | `fr:astra/solar-eccentric.ptolemy` | 65;35° (the only solution found; the intervals taken as arcs of mean motion) | 65;30° | discrepancy, +0;5,7 |

**Notes and gaps**

- days.e: computed 2;28,58, reported 2;29,30 (difference −0;0,31,44)
- days.lamA: computed 65;26°, reported 65;30° (difference −0;3,47)
- arcs.e: computed 2;29,28, reported 2;29,30 (difference −0;0,1,51)
- arcs.lamA: computed 65;35°, reported 65;30° (difference +0;5,7)
