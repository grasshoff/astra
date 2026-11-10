### Deep reading: Swerdlow on Ptolemy's solar model, pp. 17 and 19–23

`fr:kepler-sec/Swerdlow2026` · 45 assertions: 35 confirmed, 9 discrepancies, 1 not checkable, 0 quotations not found.

| # | locus | quotation | kind | of | check | printed | recomputed | verdict |
|---|---|---|---|---|---|---|---|---|
| 1 | `0047/p03` | 365 1/4 - 1/300 days = 365;14,48^d | computation | print | `365 + 1/4 - 1/300` | 365;14,48 | 365;14,48 | confirmed |
| 2 | `0047/p03` | 365;14,48^d = 365^d 5;55,12^h | computation | print | `(365;14,48 - 365) * 24` | 5;55,12 | 5;55,12 | confirmed |
| 3 | `0047/p03` | is 0;6,26^h too long | computation | print | `(365;14,48 - 365.2422) * 24` | 0;6,26 | 0;6,26 | confirmed |
| 4 | `0047/p03` | 3760/304 · 29;31,50,8,20^d ≈ 111,035^d/304 | computation | print | `3760 * 29;31,50,8,20` | 111035 | 111035 | confirmed |
| 5 | `0047/p03` | 111,035^d/304 = 365;14,48,9…^d | computation | print | `111035 / 304` | 365;14,48,9 | 365;14,48,9 | confirmed |
| 6 | `0047/p03` | 365;15,25^d = 365^d 6;10^h | computation | print | `(365;15,25 - 365) * 24` | 6;10 | 6;10 | confirmed |
| 7 | `0047/p03` | 1° per century or 36'' per year | computation | print | `3600 / 100` | 36 | 36 | confirmed |
| 8 | `0049/p04` | on which the sun S moves uniformly about E through the mean anomaly κ̄ measured from th… | construction | print | `proposition solar-eccentric: p1` | holds | equal(lam_bar, lamA + kappa_bar): max residual 6e-14 over 3456 configurations | confirmed |
| 9 | `0049/p04` | complete parallelogram OESC | construction | print | `step solar-equivalence-equal-radii: d6` | holds | parallel(line(O, Ecc.E), line(Epi.C, Ecc.S)): justified | confirmed |
| 10 | `0049/p04` | so that r is always parallel to the apsidal line AB | construction | print | `proposition solar-epicyclic: p1` | holds | parallel(line(C, S'), line(O, A')): max residual 2e-15 over 3456 configurations | confirmed |
| 11 | `0050/p02` | the direction OS from the earth to the sun, the diagonal of the parallelogram, is the s… | construction | print | `step solar-equivalence-equal-radii: conclusion` | holds | coincident(Ecc.S, Epi.S'): justified | confirmed |
| 12 | `0050/p02` | the apparent nonuniform motion of the sun is identical | construction | print | `step solar-equivalence-equal-radii: d12` | holds | coincident(Ecc.S, Epi.S'): justified | confirmed |
| 13 | `0050/p02` | in both models the directions OS and OS′ are the same | construction | print | `step solar-equivalence-proportional: conclusion` | holds | equal(direction(O, Ecc.S), direction(O, Epi.S')): justified | confirmed |
| 14 | `0050/p02` | There is, however, a distinction between the models, although it is recognized only by … | historical-claim | print | `—` | — | — | not checkable |
| 15 | `0052/p02` | The mean anomaly κ̄ = λ̄s − λA | definition | print | `proposition solar-eccentric: p1` | holds | equal(lam_bar, lamA + kappa_bar): max residual 6e-14 over 3456 configurations | confirmed |
| 16 | `0052/p02` | the true anomaly κ = κ̄ ± c about O | definition | print | `proposition solar-eccentric: p2` | holds | equal(kappa, kappa_bar - c): max residual 1e-13 over 3456 configurations | confirmed |
| 17 | `0052/p03` | sin c = e sin κ̄/(R^2 + e^2 + 2Re cos κ̄)^1/2 | formula | print | `step solar-equation-of-centre: conclusion2` | holds | equal(sin(abs(norm180(c))), e * abs(sin(kappa_bar)) / sqrt(R * R + e * e + 2 * R * e * cos(kappa_bar))): by calculation | confirmed |
| 18 | `0052/p03` | tan c = e sin κ̄/R + e cos κ̄ | formula | print | `step solar-equation-of-centre: conclusion` | holds | equal(tan(abs(norm180(c))), e * abs(sin(kappa_bar)) / (R + e * cos(kappa_bar))): by calculation | confirmed |
| 19 | `0052/p04` | c < 0° for κ̄ > 180°, c > 0° for κ̄ > 180° | sign-rule | print | `sign solar-eccentric[solar-eccentric.ptolemy]: c` | c < 0° for κ̄ > 180°, c > 0° for κ̄ > 180° | c > 0° for κ̄ < 180°, c < 0° for κ̄ > 180° | **discrepancy** |
| 20 | `0052/p04` | lies on a line parallel to ES in the direction Oλ̄s, thus λs = λ̄s ± c | definition | print | `proposition solar-eccentric: p5` | holds | equal(lam, lam_bar - c): max residual 6e-14 over 3456 configurations | confirmed |
| 21 | `0052/p05` | vernal equinox to summer solstice 94½d with mean motion 93;9° | computation | reported | `94.5 * 360 / 365;14,48` | 93;9 | 93;9 | confirmed |
| 22 | `0052/p05` | summer solstice to autumnal equinox 92½d with mean motion 91;11° | computation | reported | `92.5 * 360 / 365;14,48` | 91;11 | 91;10 | **discrepancy** |
| 23 | `0052/p05` | a total of 187d and mean motion of 184;20° | computation | reported | `187 * 360 / 365;14,48` | 184;20 | 184;19 | **discrepancy** |
| 24 | `0052/p05` | a total of 187d | computation | print | `94.5 + 92.5` | 187 | 187 | confirmed |
| 25 | `0052/p05` | e = 2;29,30 ≈ 2;30, thus e/R = 1/24 | computation | print | `2;30 / 60` | 0;2,30 | 0;2,30 | confirmed |
| 26 | `0052/p05` | from which he finds that where R = 60, e = 2;29,30 | derivation | reported | `computation solar-parameters-from-seasons: arcs.e` | 2;29,30 | 2;29,28 | **discrepancy** |
| 27 | `0052/p05` | and λA = 65;30° | derivation | reported | `computation solar-parameters-from-seasons: arcs.lamA` | 65;30 | 65;35° | **discrepancy** |
| 28 | `0052/p05` | vernal equinox to summer solstice 94½d | derivation | reported | `computation solar-parameters-from-seasons: days.e` | 2;29,30 | 2;28,58 | **discrepancy** |
| 29 | `0052/p05` | summer solstice to autumnal equinox 92½d | derivation | reported | `computation solar-parameters-from-seasons: days.lamA` | 65;30 | 65;26° | **discrepancy** |
| 30 | `0052/p05` | the maximum correction cm = sin−1e/R = 2;23° | computation | print | `asin(2;30 / 60)` | 2;23 | 2;23 | confirmed |
| 31 | `0052/p05` | e is in error by about +0;24 | computation | print | `2;30 - 2;6,22` | 0;24 | 0;24 | confirmed |
| 32 | `0052/p05` | +0;24/2;6 = +19% | computation | print | `0;24 / 2;6 * 100` | 19 | 19 | confirmed |
| 33 | `0052/p05` | λA by −0;46° in −145 | computation | print | `65;30 - 66;16` | -0;46 | -0;46 | confirmed |
| 34 | `0052/p05` | −5;36° in 140 | computation | print | `65;30 - 71;6` | -5;36 | -5;36 | confirmed |
| 35 | `0052/p05` | its longitude has increased by +4;50° in 285 years | computation | print | `71;6 - 66;16` | 4;50 | 4;50 | confirmed |
| 36 | `0052/p05` | of which about 4° is the precession of the equinoxes | computation | print | `285 / 72` | 4 | 4 | confirmed |
| 37 | `0052/p05` | 0;50° the proper or sidereal motion of the apsidal line | computation | print | `4;50 - 4` | 0;50 | 0;50 | confirmed |
| 38 | `0052/p06` | al-Battānī found e = 2;4,45 and cm = 1;59,10° | computation | reported | `asin(2;4,45 / 60)` | 1;59,10 | 1;59,9 | **discrepancy** |
| 39 | `0052/p06` | λA = 82;17°, a notable advance of 16;37° in 743 years | computation | print | `82;17 - 65;30` | 16;37 | 16;47 | **discrepancy** |
| 40 | `0053/p02` | λA = 77;50°, a regression of 4;27° | computation | print | `82;17 - 77;50` | 4;27 | 4;27 | confirmed |
| 41 | `0053/p02` | cm = 2;10°, corresponding to e ≈ 2;16 | computation | print | `60 * sin(2;10)` | 2;16 | 2;16 | confirmed |
| 42 | `0053/p03` | λ̄s = λs + c = 180° + 2;10° = 182;10° | computation | print | `solve solar-eccentric[solar-eccentric.ptolemy]: c at lam …` | 2;10 | 2;10 | confirmed |
| 43 | `0053/p03` | κ̄ = 182;10° −65;30° = 116;40° | computation | print | `182;10 - 65;30` | 116;40 | 116;40 | confirmed |
| 44 | `0053/p03` | λ̄s ≈ 183;15°, so Ptolemy's mean longitude is in error by −1;5° | computation | print | `182;10 - 183;15` | -1;5 | -1;5 | confirmed |
| 45 | `0053/p03` | the error increases by −0;26,25° per century | computation | print | `-(0;6,26 / 24) * 100 * 360 / 365;14,48` | -0;26,25 | -0;26,25 | confirmed |

- **sign-rule** (`fr:kepler-sec/Swerdlow2026/0052/p04`): the model gives «c > 0° for κ̄ < 180°, c < 0° for κ̄ > 180°», printed «c < 0° for κ̄ > 180°, c > 0° for κ̄ > 180°». the two clauses name the same condition; as printed the rule is contradictory — one clause must read κ̄ < 180°
- **interval-2** (`fr:kepler-sec/Swerdlow2026/0052/p05`): recomputed 91;10, printed 91;11, difference -0;0,43. Ptolemy's figure; exact arithmetic on his year gives 91;10,17, so 91;11 is Ptolemy's rounding, not a slip of the print
- **interval-sum** (`fr:kepler-sec/Swerdlow2026/0052/p05`): recomputed 184;19, printed 184;20, difference -0;1,10. exact arithmetic gives 184;18,50; 184;20 is the sum of Ptolemy's two rounded arcs 93;9 + 91;11
- **eccentricity-from-arcs** (`fr:kepler-sec/Swerdlow2026/0052/p05`): computation fr:astra/solar-parameters-from-seasons/arcs.e with solar-eccentric.ptolemy: 2;29,28, reported 2;29,30, difference −0;0,1,51 (the only solution found; the intervals taken as arcs of mean motion). the model inverted exactly for the two reported arcs 93;9° and 91;11° gives 2;29,28: Ptolemy's 2;29,30 within 0;0,2, the size of a rounding in his chord computation
- **apogee-from-arcs** (`fr:kepler-sec/Swerdlow2026/0052/p05`): computation fr:astra/solar-parameters-from-seasons/arcs.lamA with solar-eccentric.ptolemy: 65;35°, reported 65;30°, difference +0;5,7 (the only solution found; the intervals taken as arcs of mean motion). the same exact inversion gives 65;35°; the reported 65;30° differs by 0;5°. The paragraph itself calls the derivation sensitive to errors in the intervals
- **eccentricity-from-days** (`fr:kepler-sec/Swerdlow2026/0052/p05`): computation fr:astra/solar-parameters-from-seasons/days.e with solar-eccentric.ptolemy: 2;28,58, reported 2;29,30, difference −0;0,31,44 (the only solution found; days turned into arcs of mean motion with T = 365;14,48 d). from the day counts 94½ and 92½ with the year 365;14,48 d and exact arithmetic the model gives 2;28,58: the reported parameters follow from the rounded arcs, not from the day counts
- **apogee-from-days** (`fr:kepler-sec/Swerdlow2026/0052/p05`): computation fr:astra/solar-parameters-from-seasons/days.lamA with solar-eccentric.ptolemy: 65;26°, reported 65;30°, difference −0;3,47 (the only solution found; days turned into arcs of mean motion with T = 365;14,48 d). from the day counts with exact arithmetic the model gives 65;26°
- **battani-maximum** (`fr:kepler-sec/Swerdlow2026/0052/p06`): recomputed 1;59,9, printed 1;59,10, difference -0;0,0,55. arcsin(e/R) for the reported e gives 1;59,9,5; the reported 1;59,10 is al-Battānī's own figure as Regiomontanus gives it (not checked against al-Battānī)
- **battani-advance** (`fr:kepler-sec/Swerdlow2026/0052/p06`): recomputed 16;47, printed 16;37, difference +0;10. the advance from Ptolemy's 65;30° to 82;17° is 16;47°; the printed 16;37° differs by exactly 0;10°
