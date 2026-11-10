```
# The eccentricity and the apogee from the lengths of two seasons.
# The page (p. 22, scan page 52, paragraph 4) reports Ptolemy's data and results: from the vernal equinox to the
# summer solstice 94½ days, from the summer solstice to the autumnal equinox 92½ days, hence e = 2;29,30 and
# λ_A = 65;30°. It does not give Ptolemy's steps (Almagest III 4, which is not in PDAI on this machine: a gap).
# Here the two parameters are determined by inverting the model numerically.
derivation solar-parameters-from-seasons in solar-eccentric "The eccentricity and the apogee follow from the lengths of spring and summer"
witness fr:kepler-sec/Swerdlow2026/0052/p05 "the seasons and the parameters, p. 22"
author "Gerd Graßhoff"

determine days: e, lamA from lam: 0° -> 90° = 94;30 d, lam: 90° -> 180° = 92;30 d with solar-eccentric.ptolemy reported e = 2;29,30, lamA = 65;30° source fr:kepler-sec/Swerdlow2026/0052/p05 "from the lengths of the seasons in days, turned into mean motion with the year 365;14,48 d"
determine arcs: e, lamA from lam: 0° -> 90° = 93;9°, lam: 90° -> 180° = 91;11° with solar-eccentric.ptolemy reported e = 2;29,30, lamA = 65;30° source fr:kepler-sec/Swerdlow2026/0052/p05 "from the arcs of mean motion the page reports for the two seasons"

derive d1: equal(lam_bar, lamA + kappa_bar) from def lam_bar, def S by construction "the mean longitude runs with the mean anomaly: a season of n days is an arc of n · 360°/T of mean motion"
conclude equal(lam_bar, lamA + kappa_bar) from d1
```
