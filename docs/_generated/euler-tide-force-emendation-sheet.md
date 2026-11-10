### The emended second-order term of Opera omnia II 31, tested

`fr:astra/euler-tide-force-emendation` · derivation · astra/1

| | |
|---|---|
| witness | `fr:enestroem/E57/0018/p07` — §27: the MR component as printed in Opera omnia II 31, with note 5 |
| this description by | Gerd Graßhoff |
| in | `fr:astra/euler-tide-force` |
| check | **grounded** (2/5: ✓ well-formed · ✓ grounded · ✗ true · ✗ justified · ✗ conclusive) |

- **true** fails: conclusion: approximately(tMR, 3 * Sf * x * y / (a * a * a * rho) + 3 * Sf * y * (4 * x * x + y * y) / (2 * a * a * a * a * rho)) fails (not of order 2: relative difference 2.0e-02 at ratio 0.01, 2.0e-03 at ratio 0.001, 2.0e-04 at ratio 0.0001)
- **conclusive** fails: the conclusion does not hold
**Steps**

| | proposition | from | by | status |
|---|---|---|---|---|
| exact | `equal(tMR, Sf * a * y / (dist * dist * dist * rho) - Sf * y / (a * a * rho))` | def tMR, def fM, def fC, def dist, def x, def y, def M, def S | construction | read off the construction |
| conclusion | `approximately(tMR, 3 * Sf * x * y / (a * a * a * rho) + 3 * Sf * y * (4 * x * x + y * y) / (2 * a * a * a * a * rho))` | exact | expansion | false (not of order 2: relative difference 2.0e-02 at ratio 0.01, 2.0e-03 at ratio 0.001, 2.0e-04 at ratio 0.0001) |

**Rules used**

- **construction**: “The proposition is read off the cited constructions: it holds for every parameter value and every state without any hypothesis.”
- **expansion**: “The two expressions agree to the stated order in a small ratio: their relative difference falls like that power of the ratio.”
