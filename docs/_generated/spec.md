Status: active, revisable (10 Nov 2026; replaces the draft of 9 Nov, which wrote geometry, values and depicted
state into one text). Normative for famulus-astronomica. The op-set is `ops.yaml`, the rules of derivation are
`rules.yaml`, the test vectors `ops-vectors.json` and `model-vectors.json`.

## 1. What is told apart

A historical astronomical model is a geometrical construction with a kinematic variable. Four things are easily
run together and are kept apart here, each in a text of its own kind:

| | what it is | kind of text |
|---|---|---|
| the **model** | the pure geometry: parameter symbols, kinematic variables, the construction, the observables. It holds for every admissible parameter value and every state. It has no values. | `model` |
| a **parametrisation** | values for the parameters of one model, each with its source or a stated gap, and whose values they are. One model has many. | `parametrisation` |
| a **state** | a value of the kinematic variable (or a time, through the variable's law). Not a text: an argument, `at kappa_bar = 41°`. | — |
| a **configuration** | a model under a parametrisation in a state: every object has coordinates. Computed, never written. | — |

Two more things are done with models, and a fifth kind of text shows them:

| | what it is | kind of text |
|---|---|---|
| a **superposition** | several models in one plane, with their inputs identified (one earth, one apsidal direction, one mean anomaly). It adds no geometry and states nothing across its members. It is again a model. | `superposition` |
| a **derivation** | geometrical reasoning in a model or a superposition: hypotheses, auxiliary constructions, propositions derived from named premises by named rules, quantities computed or determined, a conclusion. | `derivation` |
| a **figure** | a depiction: what it draws, with which values, in which state, with which labels and view. | `figure` |

Three roles of persons and texts are kept apart in every text: `attributed` (whose model, whose values),
`witness` (the text whose use of the model is analysed, by `fr:` address) and `author` (who wrote this astra
text). The author of a text about Ptolemy's model that follows Swerdlow's exposition is neither Ptolemy nor
Swerdlow.

## 2. Lexical form

- UTF-8, one statement per line. A `;` surrounded by whitespace separates statements on one line; a `;` between
  digits is sexagesimal (`2;30`). `#` starts a comment. One text per file; the first statement names its kind.
- Identifiers `[A-Za-z_][A-Za-z0-9_']*`, dotted for the member of a superposition (`Ecc.S`). Text ids may contain
  hyphens and dots (`solar-eccentric.ptolemy`). The printed symbol of a name is given by `display <name> "<text>"`;
  one underscore in it marks a subscript (`λ_A`).
- Numbers: decimal `12.5` or sexagesimal `<int>;<p1>,<p2>,…` (`2;30` = 2.5, `365;14,48`). A trailing `°` makes
  an angle. The written form is kept.
- Strings in double quotes. `fr:` addresses are a token of their own.

## 3. Model

```
model <id> "<title>"
attributed "<whose model>"     witness fr:… ["note"]     author "<who wrote this text>"
tradition <word>               frame <word>
param <name> : <unit> ["meaning"] [in (lo, hi)]        unit: length | angle | number | time
variable <name> : angle ["meaning"]
law <name> = uniform(period: <param>, epoch: <param>) ["meaning"]
<name> = <expr> ["meaning"]                            a construction: point, line, circle or ellipse
observe <name> = <expr> ["meaning"]                    a scalar: what is seen or measured
body <name> at <point> ["meaning"]
proposition <name>: <predicate>(…) ["meaning"]         stated, checked numerically, not derived
display <name> "<symbol>"
```

A model text that gives a parameter a value, or a source to a value, is refused. A range may depend on earlier
parameters (`in (0, R / 2)`). A kinematic variable without a law is free: its states are not ordered in time.
Time enters only through a law. Every name is defined before it is used; nothing is placed by coordinates
except the observer, the origin.

Types: `number`, `angle`, `length`, `time`, `rate`, `point`, `vector`, `line`, `circle`, `ellipse`. Arithmetic
`+ − * /` with units (angle ± angle, length · number, length / length → number, length · length as an
intermediate, point ± vector → point, point − point → vector).

| function | result | meaning |
|---|---|---|
| `observer` | point | the origin; exactly one per model |
| `polar(r, θ)` | vector | displacement of length r at angle θ |
| `circle(P, r)` · `line(P, Q)` · `ray(P, θ)` | circle, line | lines are directed |
| `intersect(c, l \| c₂, + \| −)` | point | `+`: the point further along the line, or left of centre₁→centre₂ |
| `foot(P, l)` · `midpoint(P, Q)` · `rotate(P, about: A, by: θ)` · `reflect(P, l)` | point | |
| `ellipse(F₁, F₂, a)` · `on_ellipse(ell, E)` | ellipse, point | |
| `tangent(P, c, ±)` · `seen_from(Q, c, θ)` | point | point of contact; the point of c on the ray from Q at θ (equant) |
| `direction(P, Q)` · `distance(P, Q)` | angle, length | undefined when P and Q coincide |
| `angle(P, V, Q)` | angle | the unsigned angle at V, in [0°, 180°]: the angle of Euclid's propositions |
| `true_anomaly(M, e)` | angle | from Kepler's equation |
| `sin cos tan asin atan2 sqrt abs norm360 norm180` | scalars | |

Predicates: `parallel(l₁, l₂)`, `perpendicular(l₁, l₂)`, `coincident(P, Q)`, `collinear(P, Q, R)`, `on(P, c)`,
`equal(a, b)`. Each compiles to a residual. A proposition holds when its residual stays within 1e-9 in every
sampled configuration (lengths relative to the largest length parameter): 48 points of the parameter space,
ranges respected, times 72 states.

## 4. Parametrisation

```
parametrisation <id> of <model or superposition> "<title>"
attributed "<whose values>"     witness fr:…     author "…"
<param> = <expr> ["note"] (source fr:… | gap "<why>")
use <Prefix> = <parametrisation>             in a superposition: the values of a member's parametrisation
```

A value may be an expression in parameters that already have a value (`Epi.r = Ecc.e`). A parametrisation is
*complete* when every parameter has a value, *admissible* when every value lies in its range, *attested* when
every value has a source or a stated gap. A partial parametrisation is legitimate and reported as such; what
needs the missing values cannot be computed with it, and says so.

## 5. Superposition

```
superposition <id> "<title>"
place <model> as <Prefix>
identify <P.x> = <Q.y> [as <name>] ["meaning"]
```

Every name of a member is prefixed; identified names become one. Only parameters of one unit, kinematic
variables and the observer can be identified. That two constructed points coincide is a proposition, to be
derived under hypotheses; a superposition that tried to identify them is refused.

## 6. Figure

```
figure <id> of <model, superposition or derivation> "<title>"
with <parametrisation>
drawn with <param> = <expr>, …          drawing values: they replace attested values for legibility and are marked
at <variable> = <angle>                  the depicted state   (or: at t = <days> d)
up <angle>      fit [a, b, …]      speed <n> s
label angle <angle> at <V> from <arm> to <arm> [arrow]       arm: a point, an angle name, or `aries` (0°)
label length <param | "text"> on <P> <Q> [side right]
label arrow <P> on <circle>      label segment line(P, Q)      label dashed line(P, Q)
label sight line(P, Q)                   the line of sight from an observer P to a body Q, in the sight colour
label direction <angle> from <P> [dashed]      label zodiac at <O> on <circle> [full]
display <name> "<symbol>"      hide <name> …
stage <name> "<sentence>" [show <member>, …] [reveal <label kind>, …] [at <variable> = <angle> | play]
```

**Narration (1.1, 11 Nov 2026).** The `stage` statements of a figure, in their order, are its narration: a figure
that is shown and described step by step. A stage

- `show`s members of a superposition (`show Ecc`; none named: all of them) — what belongs to another member is not
  drawn; what belongs to no member (the observer, a line of sight) always is;
- `reveal`s labels by their kind (`reveal sight`): a kind that some stage reveals is not drawn before that stage
  and stays from it on;
- stands at a state (`at kappa_bar = 90°`; none given: the state it is entered in) or runs through a revolution
  (`play`);
- says one sentence, which the page shows under the figure and the print sets beside the still of the stage.

A figure without stages is drawn and moves as before. The narration is checked with the figure: an unknown member,
a kind the figure does not label, a name used twice or a state of another variable makes the figure not
well-formed; a kind that no stage ever reveals, or one the figure does not draw, makes it not labelled. The page
opens at the first stage and does not run by itself; the transport steps through the stages or plays them all.

**Texts of a project.** A workspace reads the shared texts (`examples/`) and, beside them, the folders named by
`--root <dir>` (repeatable) or `FAMULUS_ASTRA_PATH`: the own texts of a project, e.g. a notebook's figures. An id
used in two folders is an error.

A figure of a derivation draws the derivation's context, auxiliary constructions included, and can show one
step at a time: the points and segments the step speaks of.

## 7. Derivation

```
derivation <id> in <model or superposition> "<title>"
given <h>: equal(<param>, <expr>) ["meaning"]            a hypothesis: it restricts the parameter space
construct <name> = <expr> ["meaning"]                     an auxiliary construction
derive <d>: <predicate>(…) from <premises> by <rule> ["meaning"]
show <A>: <predicate>(…) ["claim"]                          a sub-argument: the claim, then its steps (indented), then
  …                                                         qed from <steps> [by <rule>]
cases ["by what"]                                          inside a `show`: the claim is argued case by case
  case <n>: when <condition>(…)[, <condition>(…)] ["…"]     … qed from <steps>;   the `show` closes with `qed by cases`
suppose <n>: <condition>(…) ["…"]                           restricts the steps that follow, to the end of the block
conclude <predicate>(…) from <premises> [by <rule>]       the conclusion (a further `conclude` needs its rule)
conclude equivalent(<P>, <Q>, position | direction) from <premises>
compute <x> = <expr> | max(<expr>) [at <variable> = <angle>] with <parametrisation> [reported <value> source fr:…]
determine [<name>:] <p>, <q> from <obs>: <a> -> <b> = <n> d | <arc>°, … with <parametrisation> [reported <p> = <v>, … source fr:…]
```

Premises: a given or an earlier step by name, `def <object>` (the construction of an object), `prop <name>`
(a proposition stated in the model). Rules (`rules.yaml`): `Elements <book>.<n>`, `lemma <name>`,
`trigonometry <name>`, `common notion 1`, `common notion 5`, `construction`, `algebra`, `expansion`, `cases`.
A case name or a supposition name is a premise as well: it cites the condition.

Predicates of a step: those of a model (`parallel`, `perpendicular`, `coincident`, `collinear`, `on`, `equal`)
and `less(a, b)` — strictly, in every configuration; where equality occurs in isolated states these are
reported — and `approximately(a, b, small: <ratio>, order: <n>)`: the two sides agree to order n in the small
ratio. It is tested at the ratios 10⁻², 10⁻³, 10⁻⁴: the relative difference must fall like the n-th power.

Conditions (of cases, suppositions and rules): `collinear`, `noncollinear`, `distinct`, `same_direction`,
`same_side`, `opposite_side`, `between`, `right_angle`.

Blocks. The inside of a closed `show` cannot be cited from outside it; the `show` itself can. The steps of a
case are checked only in the configurations that satisfy its condition, the steps after a `suppose` only where
the supposition holds. `qed by cases` requires that every case reaches the claim and that the conditions
together cover every sampled configuration; an uncovered state is named in the report.

`equivalent(P, Q, position)` is the proposition that the bodies of the members P and Q coincide;
`equivalent(P, Q, direction)` that they are seen from the observer in one direction. Equivalence is a relation
between two models, relative to the givens and to what is compared; it is a conclusion, never an assumption.

Four questions, each presupposing the previous:

1. **grounded** — every premise resolves to a given, an earlier step, a construction or a stated proposition.
2. **true** — every proposition holds in all sampled configurations that satisfy the givens. A term undefined
   in isolated states (an angle at a vanished triangle) makes those states *undefined*, not the step false.
3. **justified** — every step is licensed by its rule, in one of these grades:
   - *rule*: an instance of a proposition, lemma or definition: the rule's variables bind to points so that a
     conclusion of the rule is the step's proposition (up to the symmetries of the predicates), each hypothesis
     of the rule is a cited premise, and the rule's configuration conditions hold. States in which they fail are
     the **degenerate states** of the step; more than a few isolated ones and the step is not justified;
   - *equality*: the two sides are joined by the cited equalities (Common Notion 1);
   - *construction*: read off the cited constructions — the proposition speaks only of the cited objects and
     what they are built from, and holds over the whole parameter space **without** the givens;
   - *calculation*: an equality or inequality from cited ones; confirmed numerically, the calculation is not replayed;
   - *approximation* (rule `expansion`): the stated order is confirmed at three sizes of the small ratio;
   - *cases*: every case reaches the claim and the cases cover every configuration; a `show` is justified when
     the steps it closes with are its claim.
   A step that is true but none of these is *true, not justified*: a gap in the reasoning.
4. **conclusive** — the conclusion is reached from the givens. For every given the parameter space is sampled
   with that given lifted: a proposition that then fails *needs* the given; if the given is not cited on the way
   to it, it is a **tacit premise**. Givens the conclusion does not need and steps not on the way to it are noted.

`compute` evaluates a quantity under a parametrisation (a maximum over the states, or at a state) and compares
it with a reported value at the precision in which that value is written. `determine` solves parameters from
observed intervals — the time, or the arc of mean motion, in which an observable goes from one value to another
— by inverting the model numerically, reports whether the solution is the only one, and compares.

A derivation that passes is reasoning whose every proposition is true in the model and whose every step names a
rule that licenses it. It is not a formal proof in an axiomatic system: truth is tested on samples, rules are
matched as schemas, configuration conditions are evaluated numerically.

### The argument document (`astra-argument/1`)

`famulus-astra argument <derivation> [--format json|md|typst|html]` writes a derivation as an argument for
reading: head, the model (every object with construction and meaning), hypotheses H1…, constructions, the
argument as a tree — each node with a hierarchical number, kind (sub-argument, case, step, supposition,
conclusion), the claim in prose, the proposition in the notation of the figure, premises as references, the
rule with wording and locus, status and mark (✓ rule instance, ◦ read off the construction, ≈ calculation or
expansion, ? true but not justified, ✗ false, · supposed), the binding, conditions and degenerate states —
the conclusion, what the checks say, and the figure. Three depths: `overview`, `steps`, `full`. The web
component `<astra-argument>` (`web/astra-argument/`) renders the document with collapse and expand.

### 7a. The exposition document (`astra-exposition/1`)

An exposition sets a derivation beside the source it reconstructs. It is not a sixth kind of astra text: it is a
YAML file under `expositions/` that names a derivation and divides a segment of a source into passages.

| key | meaning |
|---|---|
| `id`, `title`, `subtitle`, `author` | of the exposition |
| `derivation`, `figure` | the argument shown and its figure |
| `source.collection`, `source.document` | the Famulus collection and document the text is taken from |
| `source.bib` | file and key of the checked bibliographic record |
| `source.viewer` | `base`, `path` and `page_offset` of the document in the edition's viewer (a passage links to `path?p=<pidx + page_offset>`) |
| `source.translation` | `origin` and `status` of the translation shown |
| `passages[].spans[]` | `pidx`, and for `la` and `en` the first and the last words of the passage on that page |
| `passages[].steps` | top-level steps of the derivation that reconstruct the passage |
| `passages[].see`, `.model`, `.reconstruction` | steps the passage is read off; quantities of the model it defines; a sentence where the passage is not a step |
| `passages[].corrections[]` | `from`, `to`, `reason`: a wording of the translation corrected against the original |
| `passages[].notes[]` | annotations (Markdown with `$…$` formulas) |

The built document carries, per passage, the text in both languages (HTML with MathML, and Typst), the printed
pages read from the running heads, the paragraph addresses from the reference register, and the link into the
edition; and the argument document (§7) of the derivation. A build has *gaps* when a span is not found exactly
once, a page or its translation is missing, no register paragraph carries a passage, a step stands beside no
passage, or a correction is not found once or cuts a formula. `famulus-astra exposition <id>` fails on gaps.

## 8. What can be said of a text (`check`)

| kind | levels |
|---|---|
| model | well-formed · constructible · astronomical · kinematic · consistent · documented |
| parametrisation | well-formed · complete · admissible · attested |
| superposition | well-formed · constructible · superposed · consistent |
| figure | well-formed · drawable · labelled |
| derivation | well-formed · grounded · true · justified · conclusive |

A failed level names its reason. A missing value is a gap, never a default.

## 9. Evaluation

`configuration(ops, params, state)` is the one evaluation: the context's op list, parameter values, a state
(`{variable: degrees}` or `{t: days}`). Python (`evaluate.py`) and JavaScript (`astra-runtime.js`) implement it
and replay the same vectors. A parameter without value is an error as soon as anything but a range or a law
needs it; a state that fixes no variable is an error.

## 10. Reference objects

`fr:astra/<id>` is a text of any kind; `fr:astra/<id>/<object>` a parameter, variable, constructed object,
observable or proposition of a context, a value of a parametrisation, a given, step, computation or the
conclusion of a derivation. Views `~sheet ~source ~check`, for figures `~svg ~animation`. The grammar is in
famulus-ref/2 (`reserved_namespaces.astra`, 2.4.0); the resolver names the kind of text.

## 10a. The package and the texts of a project

The shared texts are offered as a **package**: `PACKAGE.yaml` (schema `famulus-package/1`, written by
`famulus-astra package --write`, never by hand) lists every text with its kind, its group (the folder under
`examples/`: `solar`, `kepler`, `euler`), the SHA-256 of its source and the ids of the texts it names (`needs`:
the model of a parametrisation, the members of a superposition, the context and the values of a figure or a
derivation). Expositions are listed with the kind `exposition` in the group of the derivation they rest on.
`famulus-astra package --check` says where the manifest and the texts differ; the test suite fails when it is
behind. `fr:astra` names the package (version, digest, groups); `fr:astra/<group>` lists a group.

A document that uses astra **declares what it imports**: the package (`fr:astra`), a group (`fr:astra/solar`) or
one text (`fr:astra/solar-eccentric`), optionally pinned with `@rel:<version>`. A text comes with the texts it
rests on (its closure over `needs`). Exactly the imported texts and the document's own texts are available to it;
the importing system decides what a use outside that is (a Famulus notebook project reports it as a gap). The
hashes let the importing system record against which state of a text it was written, and say when that state
changed.

A project's **own texts** stand in a folder of its own (`--root <dir>`, repeatable, or `FAMULUS_ASTRA_PATH`) and
may be of every kind: a model, a parametrisation, a superposition of an own model with a shared one, a figure, a
derivation. They name shared texts by id; a shared text never names a project's text, and a project's text never
enters the manifest. An id used both in the package and in a project is an error of that id.

`famulus-astra positions <figure> [<point> …] [--steps n] [--with <parametrisation>] [--json]` lists where named
points stand at equally spaced states of one revolution, and for two points their distance with its maximum. It
states what was computed with which values; that two points coincide for every admissible value is what a
derivation shows.

## 11. Representation, model, description

The model is not a text. It is the geometry — the function from parameter values and states to
configurations, with what holds of it. The astra model text, a printed figure, Ptolemy's or Swerdlow's prose,
the op list, a sheet, an animation are representations of it; two representations of one model agree in every
configuration (`diff`: the same geometry up to renaming). A parametrised model is still not a picture: a figure
adds a state and a view, and often other values than the attested ones.

Equivalence relates two *models*, not two representations: under stated hypotheses they agree in what is
compared (the position of the body, or only its direction) and differ in everything else. A superposition is
the scene in which such a relation can be stated, and a derivation is what establishes it.

A describing text refers to the model through names — "complete parallelogram OESC". The astra texts make those
names resolvable, so that prose, figure and derivation speak of the same objects, and so that what the prose
asserts can be checked: as a proposition of the model, a step of a derivation, or a computed quantity.
