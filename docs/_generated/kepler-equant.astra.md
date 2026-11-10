```
# The equant model of the first inequality, as Kepler sets it out in Astronomia nova, Part I, ch. 4 (KGW 3,
# p. 73; here kepler-prim/kgw-03, pidx 71, paragraph 3): "Centro B scribatur eccentricus DE, cujus eccentricitas
# sit BA, ut A sit locus oculi. Acta linea per BA ostendet in D apogaeum in F perigaeum. In hac linea supra B
# spatium aliud BC extendatur … Erit C punctum aequantis, punctum nempe, apud quod Planeta aequalibus
# temporibus conficit aequales angulos, quamvis circulum non circa C sed circa B ordinet."
# Kepler names Ptolemy as the one who uses this hypothesis. That BC equals BA is not part of the geometry here:
# it is the hypothesis of the derivation, so that it can be asked whether an argument needs it.
model kepler-equant "The equant model of the first inequality"
attributed "Ptolemy"
witness fr:kepler-prim/kgw-03/0071/p04 "the construction, Astronomia nova ch. 4"
witness fr:kepler-prim/kgw-03/0071/fig01 "the figure"
author "Gerd Graßhoff"
tradition ptolemaic
frame geocentric

param R       : length "radius of the eccentric circle about B"                     in (10, 1000)
param e       : length "eccentricity BA: the distance of the eye from the centre"   in (0, R / 3)
param q       : length "the distance BC of the equant point from the centre"        in (0, R / 3)
param lamD    : angle  "direction of the apogee"
param T       : time   "period of the planet about the equant point"                in (100, 20000)
param theta_0 : angle  "the angle at the equant point at t = 0"
display lamD "λ_D"
display theta_0 "θ_0"

variable theta : angle "the angle DCE at the equant point, counted from the apogee"
law theta = uniform(period: T, epoch: theta_0) "about C the planet completes equal angles in equal times"
display theta "θ"

A   = observer                          "the eye"
B   = A + polar(e, lamD)                "centre of the eccentric"
C   = B + polar(q, lamD)                "the equant point"
orb = circle(B, R)                      "the eccentric, the circle the planet traverses"
D   = B + polar(R, lamD)                "apogee"
F   = B - polar(R, lamD)                "perigee"
E   = seen_from(C, orb, lamD + theta)   "the planet: where the line from C at the angle θ meets the circle"
body planet at E

observe lam  = direction(A, E)          "longitude of the planet as seen from A"
observe atC  = angle(D, C, E)           "the angle DCE at the equant point"
observe atB  = angle(D, B, E)           "the angle DBE at the centre: the arc DE the planet has traversed"
display lam "λ"

proposition p1: on(E, orb)              "the planet is on the circle about B"
proposition p2: collinear(F, A, D)      "the apsidal line passes through the eye"
```
