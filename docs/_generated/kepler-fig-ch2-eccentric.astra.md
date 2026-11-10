```
# After the second figure of Astronomia nova ch. 2 (fr:kepler-prim/kgw-03/0064/fig02): the eccentric, with
# Kepler's letters — the eye α, the centre β of the eccentric, the planet γ.
figure kepler-fig-ch2-eccentric of solar-eccentric "Kepler's eccentric (Astronomia nova ch. 2), with his letters"
witness fr:kepler-prim/kgw-03/0064/fig02
author "Gerd Graßhoff"
drawn with R = 60, e = 16, lamA = 90°
at kappa_bar = 50°
up 90°
fit [ecc]
display O "α"
display E "β"
display S "γ"
hide A B
label segment line(E, S)
label segment line(O, E)
label dashed line(O, S)
label arrow S on ecc
```
