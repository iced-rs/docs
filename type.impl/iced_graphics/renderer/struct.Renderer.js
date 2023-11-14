(function() {var type_impls = {
"iced_tiny_skia":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Renderer%3CB,+T%3E\" class=\"impl\"><a href=\"#impl-Renderer%3CB,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, T&gt; Renderer&lt;B, T&gt;<span class=\"where fmt-newline\">where\n    B: Backend,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>(\n    backend: B,\n    default_font: Font,\n    default_text_size: Pixels\n) -&gt; Renderer&lt;B, T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new [<code>Renderer</code>] from the given [<code>Backend</code>].</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.backend\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">backend</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;B</a></h4></section></summary><div class=\"docblock\"><p>Returns a reference to the [<code>Backend</code>] of the [<code>Renderer</code>].</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.draw_primitive\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">draw_primitive</a>(\n    &amp;mut self,\n    primitive: Primitive&lt;&lt;B as Backend&gt;::Primitive&gt;\n)</h4></section></summary><div class=\"docblock\"><p>Enqueues the given [<code>Primitive</code>] in the [<code>Renderer</code>] for drawing.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_primitives\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">with_primitives</a>&lt;O&gt;(\n    &amp;mut self,\n    f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut B</a>, &amp;[Primitive&lt;&lt;B as Backend&gt;::Primitive&gt;]) -&gt; O\n) -&gt; O</h4></section></summary><div class=\"docblock\"><p>Runs the given closure with the [<code>Backend</code>] and the recorded primitives\nof the [<code>Renderer</code>].</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.start_layer\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">start_layer</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;Primitive&lt;&lt;B as Backend&gt;::Primitive&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Starts recording a new layer.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.end_layer\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">end_layer</a>(\n    &amp;mut self,\n    primitives: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;Primitive&lt;&lt;B as Backend&gt;::Primitive&gt;&gt;,\n    bounds: Rectangle\n)</h4></section></summary><div class=\"docblock\"><p>Ends the recording of a layer.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.start_translation\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">start_translation</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;Primitive&lt;&lt;B as Backend&gt;::Primitive&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Starts recording a translation.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.end_translation\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">end_translation</a>(\n    &amp;mut self,\n    primitives: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;Primitive&lt;&lt;B as Backend&gt;::Primitive&gt;&gt;,\n    translation: Vector\n)</h4></section></summary><div class=\"docblock\"><p>Ends the recording of a translation.</p>\n</div></details></div></details>",0,"iced_tiny_skia::Renderer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Renderer-for-Renderer%3CB,+T%3E\" class=\"impl\"><a href=\"#impl-Renderer-for-Renderer%3CB,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, T&gt; Renderer for Renderer&lt;B, T&gt;<span class=\"where fmt-newline\">where\n    B: Backend,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Theme\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Theme\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Theme</a> = T</h4></section></summary><div class='docblock'>The supported theme of the [<code>Renderer</code>].</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_layer\" class=\"method trait-impl\"><a href=\"#method.with_layer\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">with_layer</a>(&amp;mut self, bounds: Rectangle, f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;mut Renderer&lt;B, T&gt;))</h4></section></summary><div class='docblock'>Draws the primitives recorded in the given closure in a new layer. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_translation\" class=\"method trait-impl\"><a href=\"#method.with_translation\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">with_translation</a>(\n    &amp;mut self,\n    translation: Vector,\n    f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;mut Renderer&lt;B, T&gt;)\n)</h4></section></summary><div class='docblock'>Applies a <code>translation</code> to the primitives recorded in the given closure.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fill_quad\" class=\"method trait-impl\"><a href=\"#method.fill_quad\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">fill_quad</a>(&amp;mut self, quad: Quad, background: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;Background&gt;)</h4></section></summary><div class='docblock'>Fills a [<code>Quad</code>] with the provided [<code>Background</code>].</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clear\" class=\"method trait-impl\"><a href=\"#method.clear\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">clear</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Clears all of the recorded primitives in the [<code>Renderer</code>].</div></details></div></details>","Renderer","iced_tiny_skia::Renderer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Renderer%3CB,+Theme%3E\" class=\"impl\"><a href=\"#impl-Debug-for-Renderer%3CB,+Theme%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, Theme&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for Renderer&lt;B, Theme&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + Backend,\n    Theme: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    &lt;B as Backend&gt;::Primitive: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","iced_tiny_skia::Renderer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Renderer-for-Renderer%3CB,+T%3E\" class=\"impl\"><a href=\"#impl-Renderer-for-Renderer%3CB,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, T&gt; Renderer for Renderer&lt;B, T&gt;<span class=\"where fmt-newline\">where\n    B: Backend + Image,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Handle\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Handle\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Handle</a> = Handle</h4></section></summary><div class='docblock'>The image Handle to be displayed. Iced exposes its own default implementation of a <a href=\"Self::Handle\"><code>Handle</code></a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.dimensions\" class=\"method trait-impl\"><a href=\"#method.dimensions\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">dimensions</a>(&amp;self, handle: &amp;Handle) -&gt; Size&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;</h4></section></summary><div class='docblock'>Returns the dimensions of an image for the given [<code>Handle</code>].</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.draw\" class=\"method trait-impl\"><a href=\"#method.draw\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">draw</a>(\n    &amp;mut self,\n    handle: Handle,\n    filter_method: FilterMethod,\n    bounds: Rectangle\n)</h4></section></summary><div class='docblock'>Draws an image with the given [<code>Handle</code>] and inside the provided\n<code>bounds</code>.</div></details></div></details>","Renderer","iced_tiny_skia::Renderer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Renderer-for-Renderer%3CB,+T%3E\" class=\"impl\"><a href=\"#impl-Renderer-for-Renderer%3CB,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, T&gt; Renderer for Renderer&lt;B, T&gt;<span class=\"where fmt-newline\">where\n    B: Backend + Svg,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.dimensions\" class=\"method trait-impl\"><a href=\"#method.dimensions\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">dimensions</a>(&amp;self, handle: &amp;Handle) -&gt; Size&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;</h4></section></summary><div class='docblock'>Returns the default dimensions of an SVG for the given [<code>Handle</code>].</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.draw\" class=\"method trait-impl\"><a href=\"#method.draw\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">draw</a>(&amp;mut self, handle: Handle, color: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Color&gt;, bounds: Rectangle)</h4></section></summary><div class='docblock'>Draws an SVG with the given [<code>Handle</code>], an optional [<code>Color</code>] filter, and inside the provided <code>bounds</code>.</div></details></div></details>","Renderer","iced_tiny_skia::Renderer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Renderer-for-Renderer%3CB,+T%3E\" class=\"impl\"><a href=\"#impl-Renderer-for-Renderer%3CB,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, T&gt; Renderer for Renderer&lt;B, T&gt;<span class=\"where fmt-newline\">where\n    B: Backend + Text,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Font\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Font\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Font</a> = Font</h4></section></summary><div class='docblock'>The font type used.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Paragraph\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Paragraph\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Paragraph</a> = Paragraph</h4></section></summary><div class='docblock'>The [<code>Paragraph</code>] of this [<code>Renderer</code>].</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Editor\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Editor\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Editor</a> = Editor</h4></section></summary><div class='docblock'>The [<code>Editor</code>] of this [<code>Renderer</code>].</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.ICON_FONT\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.ICON_FONT\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">ICON_FONT</a>: Font = _</h4></section></summary><div class='docblock'>The icon font of the backend.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.CHECKMARK_ICON\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.CHECKMARK_ICON\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">CHECKMARK_ICON</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.char.html\">char</a> = &#39;\\u{f00c}&#39;</h4></section></summary><div class='docblock'>The <code>char</code> representing a ✔ icon in the <a href=\"Self::ICON_FONT\"><code>ICON_FONT</code></a>.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.ARROW_DOWN_ICON\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.ARROW_DOWN_ICON\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">ARROW_DOWN_ICON</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.char.html\">char</a> = &#39;\\u{e800}&#39;</h4></section></summary><div class='docblock'>The <code>char</code> representing a ▼ icon in the built-in <a href=\"Self::ICON_FONT\"><code>ICON_FONT</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.default_font\" class=\"method trait-impl\"><a href=\"#method.default_font\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">default_font</a>(&amp;self) -&gt; &lt;Renderer&lt;B, T&gt; as Renderer&gt;::Font</h4></section></summary><div class='docblock'>Returns the default [<code>Self::Font</code>].</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.default_size\" class=\"method trait-impl\"><a href=\"#method.default_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">default_size</a>(&amp;self) -&gt; Pixels</h4></section></summary><div class='docblock'>Returns the default size of [<code>Text</code>].</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.load_font\" class=\"method trait-impl\"><a href=\"#method.load_font\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">load_font</a>(&amp;mut self, bytes: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;)</h4></section></summary><div class='docblock'>Loads a [<code>Self::Font</code>] from its bytes.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fill_paragraph\" class=\"method trait-impl\"><a href=\"#method.fill_paragraph\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">fill_paragraph</a>(\n    &amp;mut self,\n    paragraph: &amp;&lt;Renderer&lt;B, T&gt; as Renderer&gt;::Paragraph,\n    position: Point,\n    color: Color\n)</h4></section></summary><div class='docblock'>Draws the given [<code>Paragraph</code>] at the given position and with the given\n[<code>Color</code>].</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fill_editor\" class=\"method trait-impl\"><a href=\"#method.fill_editor\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">fill_editor</a>(\n    &amp;mut self,\n    editor: &amp;&lt;Renderer&lt;B, T&gt; as Renderer&gt;::Editor,\n    position: Point,\n    color: Color\n)</h4></section></summary><div class='docblock'>Draws the given [<code>Editor</code>] at the given position and with the given\n[<code>Color</code>].</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fill_text\" class=\"method trait-impl\"><a href=\"#method.fill_text\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">fill_text</a>(\n    &amp;mut self,\n    text: Text&lt;'_, &lt;Renderer&lt;B, T&gt; as Renderer&gt;::Font&gt;,\n    position: Point,\n    color: Color\n)</h4></section></summary><div class='docblock'>Draws the given [<code>Text</code>] at the given position and with the given\n[<code>Color</code>].</div></details></div></details>","Renderer","iced_tiny_skia::Renderer"]],
"iced_wgpu":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Renderer%3CB,+T%3E\" class=\"impl\"><a href=\"#impl-Renderer%3CB,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, T&gt; Renderer&lt;B, T&gt;<span class=\"where fmt-newline\">where\n    B: Backend,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>(\n    backend: B,\n    default_font: Font,\n    default_text_size: Pixels\n) -&gt; Renderer&lt;B, T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new [<code>Renderer</code>] from the given [<code>Backend</code>].</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.backend\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">backend</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;B</a></h4></section></summary><div class=\"docblock\"><p>Returns a reference to the [<code>Backend</code>] of the [<code>Renderer</code>].</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.draw_primitive\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">draw_primitive</a>(\n    &amp;mut self,\n    primitive: Primitive&lt;&lt;B as Backend&gt;::Primitive&gt;\n)</h4></section></summary><div class=\"docblock\"><p>Enqueues the given [<code>Primitive</code>] in the [<code>Renderer</code>] for drawing.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_primitives\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">with_primitives</a>&lt;O&gt;(\n    &amp;mut self,\n    f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut B</a>, &amp;[Primitive&lt;&lt;B as Backend&gt;::Primitive&gt;]) -&gt; O\n) -&gt; O</h4></section></summary><div class=\"docblock\"><p>Runs the given closure with the [<code>Backend</code>] and the recorded primitives\nof the [<code>Renderer</code>].</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.start_layer\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">start_layer</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;Primitive&lt;&lt;B as Backend&gt;::Primitive&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Starts recording a new layer.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.end_layer\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">end_layer</a>(\n    &amp;mut self,\n    primitives: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;Primitive&lt;&lt;B as Backend&gt;::Primitive&gt;&gt;,\n    bounds: Rectangle\n)</h4></section></summary><div class=\"docblock\"><p>Ends the recording of a layer.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.start_translation\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">start_translation</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;Primitive&lt;&lt;B as Backend&gt;::Primitive&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Starts recording a translation.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.end_translation\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">end_translation</a>(\n    &amp;mut self,\n    primitives: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;Primitive&lt;&lt;B as Backend&gt;::Primitive&gt;&gt;,\n    translation: Vector\n)</h4></section></summary><div class=\"docblock\"><p>Ends the recording of a translation.</p>\n</div></details></div></details>",0,"iced_wgpu::Renderer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Renderer-for-Renderer%3CB,+T%3E\" class=\"impl\"><a href=\"#impl-Renderer-for-Renderer%3CB,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, T&gt; Renderer for Renderer&lt;B, T&gt;<span class=\"where fmt-newline\">where\n    B: Backend,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Theme\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Theme\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Theme</a> = T</h4></section></summary><div class='docblock'>The supported theme of the [<code>Renderer</code>].</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_layer\" class=\"method trait-impl\"><a href=\"#method.with_layer\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">with_layer</a>(&amp;mut self, bounds: Rectangle, f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;mut Renderer&lt;B, T&gt;))</h4></section></summary><div class='docblock'>Draws the primitives recorded in the given closure in a new layer. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_translation\" class=\"method trait-impl\"><a href=\"#method.with_translation\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">with_translation</a>(\n    &amp;mut self,\n    translation: Vector,\n    f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;mut Renderer&lt;B, T&gt;)\n)</h4></section></summary><div class='docblock'>Applies a <code>translation</code> to the primitives recorded in the given closure.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fill_quad\" class=\"method trait-impl\"><a href=\"#method.fill_quad\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">fill_quad</a>(&amp;mut self, quad: Quad, background: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;Background&gt;)</h4></section></summary><div class='docblock'>Fills a [<code>Quad</code>] with the provided [<code>Background</code>].</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clear\" class=\"method trait-impl\"><a href=\"#method.clear\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">clear</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Clears all of the recorded primitives in the [<code>Renderer</code>].</div></details></div></details>","Renderer","iced_wgpu::Renderer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Renderer%3CB,+Theme%3E\" class=\"impl\"><a href=\"#impl-Debug-for-Renderer%3CB,+Theme%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, Theme&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for Renderer&lt;B, Theme&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + Backend,\n    Theme: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    &lt;B as Backend&gt;::Primitive: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","iced_wgpu::Renderer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Renderer-for-Renderer%3CB,+T%3E\" class=\"impl\"><a href=\"#impl-Renderer-for-Renderer%3CB,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, T&gt; Renderer for Renderer&lt;B, T&gt;<span class=\"where fmt-newline\">where\n    B: Backend + Image,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Handle\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Handle\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Handle</a> = Handle</h4></section></summary><div class='docblock'>The image Handle to be displayed. Iced exposes its own default implementation of a <a href=\"Self::Handle\"><code>Handle</code></a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.dimensions\" class=\"method trait-impl\"><a href=\"#method.dimensions\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">dimensions</a>(&amp;self, handle: &amp;Handle) -&gt; Size&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;</h4></section></summary><div class='docblock'>Returns the dimensions of an image for the given [<code>Handle</code>].</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.draw\" class=\"method trait-impl\"><a href=\"#method.draw\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">draw</a>(\n    &amp;mut self,\n    handle: Handle,\n    filter_method: FilterMethod,\n    bounds: Rectangle\n)</h4></section></summary><div class='docblock'>Draws an image with the given [<code>Handle</code>] and inside the provided\n<code>bounds</code>.</div></details></div></details>","Renderer","iced_wgpu::Renderer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Renderer-for-Renderer%3CB,+T%3E\" class=\"impl\"><a href=\"#impl-Renderer-for-Renderer%3CB,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, T&gt; Renderer for Renderer&lt;B, T&gt;<span class=\"where fmt-newline\">where\n    B: Backend + Svg,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.dimensions\" class=\"method trait-impl\"><a href=\"#method.dimensions\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">dimensions</a>(&amp;self, handle: &amp;Handle) -&gt; Size&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;</h4></section></summary><div class='docblock'>Returns the default dimensions of an SVG for the given [<code>Handle</code>].</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.draw\" class=\"method trait-impl\"><a href=\"#method.draw\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">draw</a>(&amp;mut self, handle: Handle, color: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Color&gt;, bounds: Rectangle)</h4></section></summary><div class='docblock'>Draws an SVG with the given [<code>Handle</code>], an optional [<code>Color</code>] filter, and inside the provided <code>bounds</code>.</div></details></div></details>","Renderer","iced_wgpu::Renderer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Renderer-for-Renderer%3CB,+T%3E\" class=\"impl\"><a href=\"#impl-Renderer-for-Renderer%3CB,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, T&gt; Renderer for Renderer&lt;B, T&gt;<span class=\"where fmt-newline\">where\n    B: Backend + Text,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Font\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Font\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Font</a> = Font</h4></section></summary><div class='docblock'>The font type used.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Paragraph\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Paragraph\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Paragraph</a> = Paragraph</h4></section></summary><div class='docblock'>The [<code>Paragraph</code>] of this [<code>Renderer</code>].</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Editor\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Editor\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Editor</a> = Editor</h4></section></summary><div class='docblock'>The [<code>Editor</code>] of this [<code>Renderer</code>].</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.ICON_FONT\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.ICON_FONT\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">ICON_FONT</a>: Font = _</h4></section></summary><div class='docblock'>The icon font of the backend.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.CHECKMARK_ICON\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.CHECKMARK_ICON\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">CHECKMARK_ICON</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.char.html\">char</a> = &#39;\\u{f00c}&#39;</h4></section></summary><div class='docblock'>The <code>char</code> representing a ✔ icon in the <a href=\"Self::ICON_FONT\"><code>ICON_FONT</code></a>.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.ARROW_DOWN_ICON\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.ARROW_DOWN_ICON\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">ARROW_DOWN_ICON</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.char.html\">char</a> = &#39;\\u{e800}&#39;</h4></section></summary><div class='docblock'>The <code>char</code> representing a ▼ icon in the built-in <a href=\"Self::ICON_FONT\"><code>ICON_FONT</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.default_font\" class=\"method trait-impl\"><a href=\"#method.default_font\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">default_font</a>(&amp;self) -&gt; &lt;Renderer&lt;B, T&gt; as Renderer&gt;::Font</h4></section></summary><div class='docblock'>Returns the default [<code>Self::Font</code>].</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.default_size\" class=\"method trait-impl\"><a href=\"#method.default_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">default_size</a>(&amp;self) -&gt; Pixels</h4></section></summary><div class='docblock'>Returns the default size of [<code>Text</code>].</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.load_font\" class=\"method trait-impl\"><a href=\"#method.load_font\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">load_font</a>(&amp;mut self, bytes: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;)</h4></section></summary><div class='docblock'>Loads a [<code>Self::Font</code>] from its bytes.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fill_paragraph\" class=\"method trait-impl\"><a href=\"#method.fill_paragraph\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">fill_paragraph</a>(\n    &amp;mut self,\n    paragraph: &amp;&lt;Renderer&lt;B, T&gt; as Renderer&gt;::Paragraph,\n    position: Point,\n    color: Color\n)</h4></section></summary><div class='docblock'>Draws the given [<code>Paragraph</code>] at the given position and with the given\n[<code>Color</code>].</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fill_editor\" class=\"method trait-impl\"><a href=\"#method.fill_editor\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">fill_editor</a>(\n    &amp;mut self,\n    editor: &amp;&lt;Renderer&lt;B, T&gt; as Renderer&gt;::Editor,\n    position: Point,\n    color: Color\n)</h4></section></summary><div class='docblock'>Draws the given [<code>Editor</code>] at the given position and with the given\n[<code>Color</code>].</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fill_text\" class=\"method trait-impl\"><a href=\"#method.fill_text\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">fill_text</a>(\n    &amp;mut self,\n    text: Text&lt;'_, &lt;Renderer&lt;B, T&gt; as Renderer&gt;::Font&gt;,\n    position: Point,\n    color: Color\n)</h4></section></summary><div class='docblock'>Draws the given [<code>Text</code>] at the given position and with the given\n[<code>Color</code>].</div></details></div></details>","Renderer","iced_wgpu::Renderer"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()