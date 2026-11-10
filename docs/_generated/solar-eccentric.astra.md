```
# Ptolemy's solar model in its eccentric form: the pure geometry.
# The description follows the use Swerdlow makes of the model in The Renaissance of Astronomy (2026), pp. 19–22
# (scan pages 49–52): the earth O, the centre E of the eccentric at the distance e in the direction of the
# apogee, the sun S moving uniformly about E. No value stands here; values are parametrisations.
model solar-eccentric "Ptolemy's solar model, eccentric form"
attributed "Ptolemy"
witness fr:kepler-sec/Swerdlow2026/0049/p04 "the construction, p. 19"
witness fr:kepler-sec/Swerdlow2026/0050/p03 "longitudes, anomalies and the equation, p. 20"
witness fr:kepler-sec/Swerdlow2026/0051/fig02 "Fig. 1.4"
author "Gerd Graßhoff"
tradition ptolemaic
frame geocentric

param R       : length "radius of the eccentric"                in (1, 1000)
param e       : length "eccentricity, the distance OE"          in (0, R / 2)
param lamA    : angle  "longitude of the apogee"
param T       : time   "tropical year"                          in (300, 400)
param kappa_0 : angle  "mean anomaly at t = 0"
display lamA "λ_A"
display kappa_0 "κ̄_0"

variable kappa_bar : angle "mean anomaly about E, counted from the apogee"
law kappa_bar = uniform(period: T, epoch: kappa_0) "the sun moves uniformly about E"
display kappa_bar "κ̄"

O   = observer                        "earth"
E   = O + polar(e, lamA)              "centre of the eccentric"
ecc = circle(E, R)                    "the eccentric"
A   = E + polar(R, lamA)              "apogee"
B   = E - polar(R, lamA)              "perigee"
S   = E + polar(R, lamA + kappa_bar)  "sun"
body sun at S

observe lam_bar = direction(E, S)     "mean longitude"
observe lam     = direction(O, S)     "true longitude"
observe kappa   = lam - lamA          "true anomaly about O"
observe c       = lam_bar - lam       "equation of centre, mean minus true longitude"
display lam_bar "λ̄_S"
display lam "λ_S"
display kappa "κ"

# stated propositions: checked over the parameter space and all states, not derived here
proposition p1: equal(lam_bar, lamA + kappa_bar) "the mean longitude is the longitude of the apogee plus the mean anomaly"
proposition p2: equal(kappa, kappa_bar - c)      "the true anomaly is the mean anomaly less the equation"
proposition p5: equal(lam, lam_bar - c)           "the true longitude is the mean longitude less the equation"
proposition p3: collinear(A, E, B)               "the apsidal line passes through E"
proposition p4: collinear(A, O, B)               "and through O"
```
