```
# The two forms of Ptolemy's solar model in one plane: what Swerdlow's Figs. 1.2 and 1.3 draw.
# The superposition says only that both models are about the same earth, the same apsidal direction and the
# same mean motion. That the two suns coincide (Fig. 1.2) or lie on one ray (Fig. 1.3) is not said here: it is
# derived, under hypotheses on the radii, in solar-equivalence-equal-radii and solar-equivalence-proportional.
superposition solar-eccentric-epicyclic "Eccentric and epicyclic form of Ptolemy's solar model, superposed"
witness fr:kepler-sec/Swerdlow2026/0050/fig01 "Fig. 1.2"
witness fr:kepler-sec/Swerdlow2026/0051/fig01 "Fig. 1.3"
author "Gerd Graßhoff"
place solar-eccentric as Ecc
place solar-epicyclic as Epi
identify Ecc.O = Epi.O                 "one earth"
identify Ecc.lamA = Epi.lamA           "one apsidal direction"
identify Ecc.T = Epi.T                 "one year"
identify Ecc.kappa_0 = Epi.kappa_0     "one epoch"
identify Ecc.kappa_bar = Epi.kappa_bar "one mean anomaly"
display Epi.lam "λ'_S"
display Ecc.lam "λ_S"
```
