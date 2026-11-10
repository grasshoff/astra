```
# After the first figure of Astronomia nova ch. 2 (KGW 3, p. 66; fr:kepler-prim/kgw-03/0064/fig01): the
# concentric with epicycle, with Kepler's letters — the eye A, the centre B of the epicycle, the planet C.
figure kepler-fig-ch2-epicycle of solar-epicyclic "Kepler's concentric with epicycle (Astronomia nova ch. 2), with his letters"
witness fr:kepler-prim/kgw-03/0064/fig01
author "Gerd Graßhoff"
drawn with R' = 60, r = 16, lamA = 90°
at kappa_bar = 50°
up 90°
fit [def, epi]
display O "A"
display C "B"
display S' "C"
hide A' B'
label segment line(O, C)
label segment line(C, S')
label dashed line(O, S')
label arrow C on def
```
