### Deep reading: Euler on the tide-raising force, E57 §§24–29

`fr:enestroem/E57` · 10 assertions: 8 confirmed, 1 discrepancies, 1 not checkable, 0 quotations not found.

| # | locus | quotation | kind | of | check | printed | recomputed | verdict |
|---|---|---|---|---|---|---|---|---|
| 1 | `0014/p03` | propria vis, qua quaeque particula agitabitur, innotescet, si a vi acceleratrice illam … | definition | print | `—` | — | — | not checkable |
| 2 | `0016/p02` | SP = a - x et SM = \sqrt((a - x)^2 + y^2) | construction | print | `step euler-tide-force-resolution: setting` | holds | equal(dist * dist, (a - x) * (a - x) + y * y): justified | confirmed |
| 3 | `0017/p04` | unde omnino particula M a vi ad S tendente versus C urgebitur vi | formula | print | `step euler-tide-force-resolution: exact_MC` | holds | equal(tMC, Sf * x / (a * a * rho) - Sf * (a * x - x * x - y * y) / (dist * dist * dist * rho)): justified | confirmed |
| 4 | `0017/p05` | eadem particula M in directione MR ad MC normali sollicitabitur vi | formula | print | `step euler-tide-force-resolution: exact_MR` | holds | equal(tMR, Sf * a * y / (dist * dist * dist * rho) - Sf * y / (a * a * rho)): justified | confirmed |
| 5 | `0018/p04` | satis tuto substitui poterit 1/a^3 + 3x/a^4 + 3(4xx - yy)/2a^5 | formula | print | `step euler-tide-force-resolution: second_MC` | holds | approximately(tMC, Sf * (y * y - 2 * x * x) / (a * a * a * rho) + 3 * Sf * x * (3 * y * y - 2 * x * x) / (2 * a * a * a * a * rho)) to order 2 in rho / a: justified | confirmed |
| 6 | `0018/p07` | (x + 4xx + yy/2a) | formula | reported | `step euler-tide-force-emendation: conclusion` | holds | approximately(tMR, 3 * Sf * x * y / (a * a * a * rho) + 3 * Sf * y * (4 * x * x + y * y) / (2 * a * a * a * a * rho)): false | **discrepancy** |
| 7 | `0018/p08` | particula M a vi Solis Lunaeve secundum MC urgebitur vi | formula | print | `step euler-tide-force-resolution: first_MC` | holds | approximately(tMC, Sf * (y * y - 2 * x * x) / (a * a * a * rho)) to order 1 in rho / a: justified | confirmed |
| 8 | `0018/p08` | in directione vero MR vi | formula | print | `step euler-tide-force-resolution: first_MR` | holds | approximately(tMR, 3 * Sf * x * y / (a * a * a * rho)) to order 1 in rho / a: justified | confirmed |
| 9 | `0018/p09` | ut sit yy > 2xx hoc est tangens anguli MCP > \sqrt2 | computation | print | `step euler-tide-force-resolution: vertical` | holds | equal(Sf * (y * y - 2 * x * x) / (a * a * a * rho), Sf * rho / (a * a * a) * (1 - 3 * cos(phi) * cos(phi))): justified | confirmed |
| 10 | `0020/p02` | Vis autem horizontalis 3Sxy/a^3 maxima evadet, si angulus ACM fuerit semirectus | computation | print | `step euler-tide-force-resolution: horizontal` | holds | equal(3 * Sf * x * y / (a * a * a * rho), 3 * Sf * rho / (2 * a * a * a) * sin(2 * phi)): justified | confirmed |

- **second-order-normal-emended** (`fr:enestroem/E57/0018/p07`): derivation step fr:astra/euler-tide-force-emendation/conclusion by expansion. the reading of Opera omnia II 31, an emendation of the editor (note 5: 'Editio princeps et Manuscriptus: (4xx − yy)/2a loco (4xx + yy)/2a. Correxit EJA.'). It is of first order only. The reading of the first edition and the manuscript, 4xx − yy, is of second order (step second_MR)
