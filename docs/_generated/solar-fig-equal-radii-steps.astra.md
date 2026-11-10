```
# The superposition as the scene of the derivation solar-equivalence-equal-radii: every segment a step speaks
# of can be shown (`?step=d6` in the browser, `--step d6` on the command line).
figure solar-fig-equal-radii-steps of solar-equivalence-equal-radii "The parallelogram OESC: the steps of the equivalence"
witness fr:kepler-sec/Swerdlow2026/0050/fig01
author "Gerd Graßhoff"
with solar-eccentric-epicyclic.equal-radii
drawn with Ecc.e = 16, Epi.r = 16
at kappa_bar = 41°
up lamA
fit [Ecc.ecc, Epi.def, Epi.epi]
display Epi.S' "S'"
label segment line(Ecc.A, Ecc.B)
label length Ecc.R on Ecc.E Ecc.S
label length Epi.R' on O Epi.C side right
label length Ecc.e on O Ecc.E
label length Epi.r on Epi.C Epi.S' side right
```
