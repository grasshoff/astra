```
# Swerdlow 2026, Fig. 1.3 (p. 21, scan page 51): "Equivalence of eccentric and epicyclic models in which the
# eccentricity and radius of the epicycle are proportional."
figure solar-fig-1-3 of solar-eccentric-epicyclic "The two forms of Ptolemy's solar model superposed, R'/r = R/e"
witness fr:kepler-sec/Swerdlow2026/0051/fig01
author "Gerd Graßhoff"
with solar-eccentric-epicyclic.proportional
drawn with Ecc.e = 19;30, Epi.r = Epi.R' * Ecc.e / Ecc.R
at kappa_bar = 116°
up lamA
fit [Ecc.ecc, Epi.def, Epi.epi]
speed 24 s
display Epi.S' "S'"
label angle kappa_bar at Ecc.E from Ecc.A to Ecc.S arrow
label angle kappa_bar at O from Epi.A' to Epi.C arrow
label length Ecc.R on Ecc.E Ecc.S
label length Ecc.e on O Ecc.E
label length Epi.R' on O Epi.C side right
label length Epi.r on Epi.C Epi.S' side right
label segment line(Epi.A', Epi.B')
label arrow Ecc.S on Ecc.ecc
label arrow Epi.C on Epi.def
label dashed line(O, Epi.S')
```
