```
# The reading of Opera omnia II 31 for the second-order term of the MR component (pidx 18, ¶6): 4xx + yy, an
# emendation of the editor against the first edition and the manuscript, which have 4xx − yy (note 5: "Correxit
# EJA."). This text states the emended formula as a proposition of second order. It is expected to FAIL the
# level "true": the emended formula agrees with Euler's exact component only to first order. The reading of the
# first edition and the manuscript passes (euler-tide-force-resolution, second_MR).
derivation euler-tide-force-emendation in euler-tide-force "The emended second-order term of Opera omnia II 31, tested"
witness fr:enestroem/E57/0018/p07 "§27: the MR component as printed in Opera omnia II 31, with note 5"
author "Gerd Graßhoff"
note "expected to fail: it shows that the emendation is not correct"

derive exact: equal(tMR, Sf * a * y / (dist * dist * dist * rho) - Sf * y / (a * a * rho)) from def tMR, def fM, def fC, def dist, def x, def y, def M, def S by construction "§26: Euler's exact component along MR"
conclude approximately(tMR, 3 * Sf * x * y / (a * a * a * rho) + 3 * Sf * y * (4 * x * x + y * y) / (2 * a * a * a * a * rho), small: rho / a, order: 2) from exact by expansion "3Sy/(a³√(x²+y²)) · (x + (4xx + yy)/2a), as emended"
```
