### Deep reading: Kepler, Astronomia nova ch. 4 (the equant) and ch. 2 (eccentric and epicycle)

`fr:kepler-prim/kgw-03` · 11 assertions: 7 confirmed, 0 discrepancies, 4 not checkable, 0 quotations not found.

| # | locus | quotation | kind | of | check | printed | recomputed | verdict |
|---|---|---|---|---|---|---|---|---|
| 1 | `0071/p04` | Erit C punctum aequantis, punctum nempe, apud quod Planeta aequalibus temporibus confic… | construction | reported | `proposition kepler-equant: p1` | holds | on(E, orb): max residual 4e-16 over 3456 configurations | confirmed |
| 2 | `0071/p04` | spatium aliud BC extendatur, aequale ipsi BA | construction | reported | `—` | — | — | not checkable |
| 3 | `0071/p05` | DCE exterior aequet CBE, CEB interiores | derivation | print | `step kepler-equant-unequal-motion: k1` | holds | equal(angle(E, C, D), angle(C, E, B) + angle(E, B, C)): justified; degenerate at theta = 0°, theta = 180° | confirmed |
| 4 | `0071/p05` | ergo parte CEB ablata, residuus CBE vel DBE minor erit quam DCE | derivation | print | `step kepler-equant-unequal-motion: lag` | holds | less(angle(D, B, E), angle(D, C, E)): justified | confirmed |
| 5 | `0071/p05` | itaque FBE major quam DCE vel FCE | derivation | print | `step kepler-equant-unequal-motion: lead` | holds | less(angle(E, C, F), angle(E, B, F)): justified | confirmed |
| 6 | `0071/p05` | minor ergo DE quam EF. et transit Planeta per eos aequalibus temporibus | derivation | print | `step kepler-equant-unequal-motion: unequal` | holds | less(angle(D, B, E), angle(E, B, F)): justified | confirmed |
| 7 | `0071/p05` | Quod COPERNICVS ut absurdum rejicit | historical-claim | reported | `—` | — | — | not checkable |
| 8 | `0064/p04` | eccentricus paria facit cum epicyclo in concentrico | derivation | reported | `step solar-equivalence-equal-radii: conclusion` | holds | coincident(Ecc.S, Epi.S'): justified | confirmed |
| 9 | `0064/p04` | hic semidiameter epicycli aequet illic eccentricitatem, semidiametri vero illic eccentr… | construction | reported | `—` | — | — | not checkable |
| 10 | `0064/p05` | Dico, distantias AC | derivation | reported | `step solar-equivalence-equal-radii: same` | holds | coincident(Ecc.S, Epi.S'): justified by cases | confirmed |
| 11 | `0065/p02` | Nec verbis opus est. Schema loquitur Geometrae. | historical-claim | print | `—` | — | — | not checkable |

