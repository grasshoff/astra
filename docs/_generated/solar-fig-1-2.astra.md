```
# Swerdlow 2026, Fig. 1.2 (p. 20, scan page 50): "Equivalence of eccentric and epicyclic models for the inequality
# of the sun in which the eccentricity and radius of the epicycle are equal." The figure draws the superposition
# of the two forms. Its eccentricity is exaggerated for legibility; so is this drawing (drawing values, marked).
figure solar-fig-1-2 of solar-eccentric-epicyclic "The two forms of Ptolemy's solar model superposed, R' = R and r = e"
witness fr:kepler-sec/Swerdlow2026/0050/fig01
author "Gerd Graßhoff"
with solar-eccentric-epicyclic.equal-radii
drawn with Ecc.e = 16, Epi.r = 16
at kappa_bar = 41°
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
label segment line(Ecc.A, Ecc.B)
label arrow Ecc.S on Ecc.ecc
label arrow Epi.C on Epi.def
label dashed line(O, Epi.S')
```
