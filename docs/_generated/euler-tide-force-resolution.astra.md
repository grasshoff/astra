```
# Euler's argument for the tide-raising force, E57 §§24–29 (pidx 15–20), reconstructed.
# §24 sets the particle M by CP = x and PM = y. §§25–26 resolve the force on M, less the force on the centre,
# along MC and MR and give both components exactly. §27 expands them in the small ratio of the earth's size to
# the distance of the luminary, first to two terms, then to one. §§28–29 read the consequences off.
# The second-order term of the MR component is given here as the first edition and the manuscript have it,
# 4xx − yy; Opera omnia II 31 prints 4xx + yy with the note "Editio princeps et Manuscriptus: (4xx − yy)/2a
# loco (4xx + yy)/2a. Correxit EJA." (pidx 18, note 5). See euler-tide-force-emendation.
derivation euler-tide-force-resolution in euler-tide-force "The tide-raising force along and across the vertical, to first order in the earth's size over the luminary's distance"
witness fr:enestroem/E57/0016/p02 "§24"
witness fr:enestroem/E57/0017/p04 "§26: the exact components"
witness fr:enestroem/E57/0018/p08 "§27: the two components to first order"
author "Gerd Graßhoff"

show setting: equal(dist * dist, (a - x) * (a - x) + y * y) "§24: SM² = (a − x)² + y²"
  derive s1: perpendicular(line(M, P), line(S, C)) from def P by construction "MP is normal to CS"
  derive s2: equal(distance(M, S) * distance(M, S), distance(M, P) * distance(M, P) + distance(S, P) * distance(S, P)) from s1 by Elements I.47 "the right triangle MPS"
  derive s3: equal(distance(S, P), a - x) from def S, def P, def x by construction "SP = a − x"
  derive s4: equal(distance(M, P), abs(y)) from def M, def P, def y by construction "PM = y"
  derive s5: equal(dist, distance(M, S)) from def dist by construction
  derive s6: equal(dist * dist, (a - x) * (a - x) + y * y) from s2, s3, s4, s5 by algebra
qed from s6

show exact_MC: equal(tMC, Sf * x / (a * a * rho) - Sf * (a * x - x * x - y * y) / (dist * dist * dist * rho)) "§26: towards the centre the particle is urged by Sx/(a²√(x²+y²)) − S(ax − xx − yy)/(((a−x)²+y²)^(3/2) √(x²+y²))"
  derive m1: equal(tMC, Sf * x / (a * a * rho) - Sf * (a * x - x * x - y * y) / (dist * dist * dist * rho)) from def tMC, def fM, def fC, def dist, def x, def y, def M, def S by construction "the force towards S resolved along CS and along MC, the force on the centre taken away, and what remains along MQ carried to MC by the similar triangles QVM and MPC"
qed from m1

show exact_MR: equal(tMR, Sf * a * y / (dist * dist * dist * rho) - Sf * y / (a * a * rho)) "§26: along MR, normal to MC, by Say/(((a−x)²+y²)^(3/2) √(x²+y²)) − Sy/(a²√(x²+y²))"
  derive r1: equal(tMR, Sf * a * y / (dist * dist * dist * rho) - Sf * y / (a * a * rho)) from def tMR, def fM, def fC, def dist, def x, def y, def M, def S by construction "the same forces carried to the normal MR"
qed from r1

show second_MC: approximately(tMC, Sf * (y * y - 2 * x * x) / (a * a * a * rho) + 3 * Sf * x * (3 * y * y - 2 * x * x) / (2 * a * a * a * a * rho), small: rho / a, order: 2) "§27: with 1/((a−x)²+y²)^(3/2) put as 1/a³ + 3x/a⁴ + 3(4xx − yy)/2a⁵"
  derive n1: approximately(tMC, Sf * (y * y - 2 * x * x) / (a * a * a * rho) + 3 * Sf * x * (3 * y * y - 2 * x * x) / (2 * a * a * a * a * rho), small: rho / a, order: 2) from exact_MC, setting by expansion
qed from n1

show second_MR: approximately(tMR, 3 * Sf * x * y / (a * a * a * rho) + 3 * Sf * y * (4 * x * x - y * y) / (2 * a * a * a * a * rho), small: rho / a, order: 2) "§27: the same for MR, as the first edition and the manuscript read: 3Sy/(a³√(x²+y²)) · (x + (4xx − yy)/2a)"
  derive n2: approximately(tMR, 3 * Sf * x * y / (a * a * a * rho) + 3 * Sf * y * (4 * x * x - y * y) / (2 * a * a * a * a * rho), small: rho / a, order: 2) from exact_MR, setting by expansion
qed from n2

show first_MC: approximately(tMC, Sf * (y * y - 2 * x * x) / (a * a * a * rho), small: rho / a) "§27: along MC the particle is urged by S(yy − 2xx)/(a³√(x²+y²))"
  derive f1: approximately(tMC, Sf * (y * y - 2 * x * x) / (a * a * a * rho), small: rho / a) from second_MC by expansion "the first terms exceed the later ones many times"
qed from f1

show first_MR: approximately(tMR, 3 * Sf * x * y / (a * a * a * rho), small: rho / a) "§27: along MR by 3Sxy/(a³√(x²+y²))"
  derive f2: approximately(tMR, 3 * Sf * x * y / (a * a * a * rho), small: rho / a) from second_MR by expansion
qed from f2

show vertical: equal(Sf * (y * y - 2 * x * x) / (a * a * a * rho), (Sf * rho / (a * a * a)) * (1 - 3 * cos(phi) * cos(phi))) "§§28–29: gravity is increased where yy > 2xx, most at D and E, by Sρ/a³; decreased where yy < 2xx, most at A and B, by 2Sρ/a³"
  derive v1: equal(x, rho * cos(phi)) from def x by construction
  derive v2: equal(y, rho * sin(phi)) from def y by construction
  derive v3: equal(Sf * (y * y - 2 * x * x) / (a * a * a * rho), (Sf * rho / (a * a * a)) * (1 - 3 * cos(phi) * cos(phi))) from v1, v2 by algebra
qed from v3

show horizontal: equal(3 * Sf * x * y / (a * a * a * rho), (3 * Sf * rho / (2 * a * a * a)) * sin(2 * phi)) "§29: the horizontal force is greatest where the angle ACM is half a right angle"
  derive w1: equal(x, rho * cos(phi)) from def x by construction
  derive w2: equal(y, rho * sin(phi)) from def y by construction
  derive w3: equal(3 * Sf * x * y / (a * a * a * rho), (3 * Sf * rho / (2 * a * a * a)) * sin(2 * phi)) from w1, w2 by algebra
qed from w3

conclude approximately(tMC, Sf * (y * y - 2 * x * x) / (a * a * a * rho), small: rho / a) from first_MC "the vertical component of the tide-raising force"
conclude approximately(tMR, 3 * Sf * x * y / (a * a * a * rho), small: rho / a) from first_MR by expansion "and its horizontal component"
```
