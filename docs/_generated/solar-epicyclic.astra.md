```
# Ptolemy's solar model in its epicyclic form: the pure geometry.
# Swerdlow 2026, p. 19 (scan page 49, paragraph 3): the centre C of the epicycle moves uniformly through κ̄ on a
# circle about the earth O; the sun moves on the epicycle "in the opposite direction through κ̄ about C from OC
# extended", so that the radius of the epicycle keeps the direction of the apsidal line.
model solar-epicyclic "Ptolemy's solar model, epicyclic form"
attributed "Ptolemy"
witness fr:kepler-sec/Swerdlow2026/0049/p04 "the construction, p. 19"
witness fr:kepler-sec/Swerdlow2026/0050/fig01 "Fig. 1.2"
author "Gerd Graßhoff"
tradition ptolemaic
frame geocentric

param R'      : length "radius of the deferent, the circle about O"   in (1, 1000)
param r       : length "radius of the epicycle"                       in (0, R' / 2)
param lamA    : angle  "longitude of the apogee"
param T       : time   "tropical year"                                in (300, 400)
param kappa_0 : angle  "mean anomaly at t = 0"
display lamA "λ_A"
display kappa_0 "κ̄_0"

variable kappa_bar : angle "mean anomaly: the motion of C about O, and of the sun about C in the opposite sense"
law kappa_bar = uniform(period: T, epoch: kappa_0) "C moves uniformly about O"
display kappa_bar "κ̄"

O   = observer                        "earth"
def = circle(O, R')                   "the deferent"
A'  = O + polar(R', lamA)             "apogee of the deferent"
B'  = O - polar(R', lamA)             "perigee of the deferent"
C   = O + polar(R', lamA + kappa_bar) "centre of the epicycle"
epi = circle(C, r)                    "the epicycle"
S'  = C + polar(r, lamA)              "sun"
body sun at S'

observe lam = direction(O, S')        "true longitude"
display lam "λ_S"

proposition p1: parallel(line(C, S'), line(O, A')) "the radius of the epicycle stays parallel to the apsidal line"
proposition p2: collinear(A', O, B')               "the apsidal line passes through O"
```
