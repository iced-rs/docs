(function() {var type_impls = {
"iced":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Renderer%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#51\">source</a><a href=\"#impl-Renderer%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.draw_mesh\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#52\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_renderer/enum.Renderer.html#tymethod.draw_mesh\" class=\"fn\">draw_mesh</a>(&amp;mut self, mesh: <a class=\"enum\" href=\"iced_graphics/mesh/enum.Mesh.html\" title=\"enum iced_graphics::mesh::Mesh\">Mesh</a>)</h4></section></div></details>",0,"iced::Renderer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Renderer-for-Renderer%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#67\">source</a><a href=\"#impl-Renderer-for-Renderer%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"iced/advanced/trait.Renderer.html\" title=\"trait iced::advanced::Renderer\">Renderer</a> for <a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Theme\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Theme\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"iced/advanced/trait.Renderer.html#associatedtype.Theme\" class=\"associatedtype\">Theme</a> = T</h4></section></summary><div class='docblock'>The supported theme of the <a href=\"iced/advanced/trait.Renderer.html\" title=\"trait iced::advanced::Renderer\"><code>Renderer</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_layer\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#70\">source</a><a href=\"#method.with_layer\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Renderer.html#tymethod.with_layer\" class=\"fn\">with_layer</a>(&amp;mut self, bounds: <a class=\"struct\" href=\"iced/struct.Rectangle.html\" title=\"struct iced::Rectangle\">Rectangle</a>, f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;mut <a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a>&lt;T&gt;))</h4></section></summary><div class='docblock'>Draws the primitives recorded in the given closure in a new layer. <a href=\"iced/advanced/trait.Renderer.html#tymethod.with_layer\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_translation\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#102-106\">source</a><a href=\"#method.with_translation\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Renderer.html#tymethod.with_translation\" class=\"fn\">with_translation</a>(\n    &amp;mut self,\n    translation: <a class=\"struct\" href=\"iced/struct.Vector.html\" title=\"struct iced::Vector\">Vector</a>,\n    f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;mut <a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a>&lt;T&gt;)\n)</h4></section></summary><div class='docblock'>Applies a <code>translation</code> to the primitives recorded in the given closure.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fill_quad\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#138-142\">source</a><a href=\"#method.fill_quad\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Renderer.html#tymethod.fill_quad\" class=\"fn\">fill_quad</a>(&amp;mut self, quad: <a class=\"struct\" href=\"iced/advanced/renderer/struct.Quad.html\" title=\"struct iced::advanced::renderer::Quad\">Quad</a>, background: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"iced/enum.Background.html\" title=\"enum iced::Background\">Background</a>&gt;)</h4></section></summary><div class='docblock'>Fills a <a href=\"iced/advanced/renderer/struct.Quad.html\" title=\"struct iced::advanced::renderer::Quad\"><code>Quad</code></a> with the provided <a href=\"iced/enum.Background.html\" title=\"enum iced::Background\"><code>Background</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clear\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#146\">source</a><a href=\"#method.clear\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Renderer.html#tymethod.clear\" class=\"fn\">clear</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Clears all of the recorded primitives in the <a href=\"iced/advanced/trait.Renderer.html\" title=\"trait iced::advanced::Renderer\"><code>Renderer</code></a>.</div></details></div></details>","Renderer","iced::Renderer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Renderer-for-Renderer%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#217\">source</a><a href=\"#impl-Renderer-for-Renderer%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"iced/advanced/image/trait.Renderer.html\" title=\"trait iced::advanced::image::Renderer\">Renderer</a> for <a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a>&lt;T&gt;</h3><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>image</code></strong> only.</div></span></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Handle\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Handle\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"iced/advanced/image/trait.Renderer.html#associatedtype.Handle\" class=\"associatedtype\">Handle</a> = <a class=\"struct\" href=\"iced/widget/image/struct.Handle.html\" title=\"struct iced::widget::image::Handle\">Handle</a></h4></section></summary><div class='docblock'>The image Handle to be displayed. Iced exposes its own default implementation of a <a href=\"iced/advanced/image/trait.Renderer.html#associatedtype.Handle\" title=\"associated type iced_core::image::Renderer::Handle::Handle\"><code>Handle</code></a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.dimensions\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#220-223\">source</a><a href=\"#method.dimensions\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/image/trait.Renderer.html#tymethod.dimensions\" class=\"fn\">dimensions</a>(&amp;self, handle: &amp;<a class=\"struct\" href=\"iced/widget/image/struct.Handle.html\" title=\"struct iced::widget::image::Handle\">Handle</a>) -&gt; <a class=\"struct\" href=\"iced/struct.Size.html\" title=\"struct iced::Size\">Size</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;</h4></section></summary><div class='docblock'>Returns the dimensions of an image for the given <a href=\"iced/widget/image/struct.Handle.html\" title=\"struct iced::widget::image::Handle\"><code>Handle</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.draw\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#227-232\">source</a><a href=\"#method.draw\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/image/trait.Renderer.html#tymethod.draw\" class=\"fn\">draw</a>(\n    &amp;mut self,\n    handle: <a class=\"struct\" href=\"iced/widget/image/struct.Handle.html\" title=\"struct iced::widget::image::Handle\">Handle</a>,\n    filter_method: <a class=\"enum\" href=\"iced/widget/image/enum.FilterMethod.html\" title=\"enum iced::widget::image::FilterMethod\">FilterMethod</a>,\n    bounds: <a class=\"struct\" href=\"iced/struct.Rectangle.html\" title=\"struct iced::Rectangle\">Rectangle</a>\n)</h4></section></summary><div class='docblock'>Draws an image with the given <a href=\"iced/widget/image/struct.Handle.html\" title=\"struct iced::widget::image::Handle\"><code>Handle</code></a> and inside the provided\n<code>bounds</code>.</div></details></div></details>","Renderer","iced::Renderer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Renderer-for-Renderer%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#286\">source</a><a href=\"#impl-Renderer-for-Renderer%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"iced_wgpu/primitive/pipeline/trait.Renderer.html\" title=\"trait iced_wgpu::primitive::pipeline::Renderer\">Renderer</a> for <a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a>&lt;T&gt;</h3><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>wgpu</code></strong> only.</div></span></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.draw_pipeline_primitive\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#287-291\">source</a><a href=\"#method.draw_pipeline_primitive\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_wgpu/primitive/pipeline/trait.Renderer.html#tymethod.draw_pipeline_primitive\" class=\"fn\">draw_pipeline_primitive</a>(\n    &amp;mut self,\n    bounds: <a class=\"struct\" href=\"iced/struct.Rectangle.html\" title=\"struct iced::Rectangle\">Rectangle</a>,\n    primitive: impl <a class=\"trait\" href=\"iced/widget/shader/trait.Primitive.html\" title=\"trait iced::widget::shader::Primitive\">Primitive</a>\n)</h4></section></summary><div class='docblock'>Draws a custom pipeline primitive.</div></details></div></details>","Renderer","iced::Renderer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Renderer-for-Renderer%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#254\">source</a><a href=\"#impl-Renderer-for-Renderer%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"iced/widget/canvas/trait.Renderer.html\" title=\"trait iced::widget::canvas::Renderer\">Renderer</a> for <a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a>&lt;T&gt;</h3><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>geometry</code></strong> only.</div></span></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Geometry\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Geometry\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"iced/widget/canvas/trait.Renderer.html#associatedtype.Geometry\" class=\"associatedtype\">Geometry</a> = <a class=\"enum\" href=\"iced/widget/canvas/enum.Geometry.html\" title=\"enum iced::widget::canvas::Geometry\">Geometry</a></h4></section></summary><div class='docblock'>The kind of geometry this renderer can draw.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.draw\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#257\">source</a><a href=\"#method.draw\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/widget/canvas/trait.Renderer.html#tymethod.draw\" class=\"fn\">draw</a>(&amp;mut self, layers: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&lt;<a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a>&lt;T&gt; as <a class=\"trait\" href=\"iced/widget/canvas/trait.Renderer.html\" title=\"trait iced::widget::canvas::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"iced/widget/canvas/trait.Renderer.html#associatedtype.Geometry\" title=\"type iced::widget::canvas::Renderer::Geometry\">Geometry</a>&gt;)</h4></section></summary><div class='docblock'>Draws the given layers of <a href=\"iced/widget/canvas/trait.Renderer.html#associatedtype.Geometry\" title=\"associated type iced_graphics::geometry::Renderer::Geometry::Geometry\"><code>Self::Geometry</code></a>.</div></details></div></details>","Renderer","iced::Renderer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Renderer-for-Renderer%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#151\">source</a><a href=\"#impl-Renderer-for-Renderer%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"iced/advanced/text/trait.Renderer.html\" title=\"trait iced::advanced::text::Renderer\">Renderer</a> for <a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Font\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Font\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"iced/advanced/text/trait.Renderer.html#associatedtype.Font\" class=\"associatedtype\">Font</a> = <a class=\"struct\" href=\"iced/struct.Font.html\" title=\"struct iced::Font\">Font</a></h4></section></summary><div class='docblock'>The font type used.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Paragraph\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Paragraph\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"iced/advanced/text/trait.Renderer.html#associatedtype.Paragraph\" class=\"associatedtype\">Paragraph</a> = <a class=\"struct\" href=\"iced_graphics/text/paragraph/struct.Paragraph.html\" title=\"struct iced_graphics::text::paragraph::Paragraph\">Paragraph</a></h4></section></summary><div class='docblock'>The <a href=\"iced/advanced/text/trait.Paragraph.html\" title=\"trait iced::advanced::text::Paragraph\"><code>Paragraph</code></a> of this <a href=\"iced/advanced/text/trait.Renderer.html\" title=\"trait iced::advanced::text::Renderer\"><code>Renderer</code></a>.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Editor\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Editor\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"iced/advanced/text/trait.Renderer.html#associatedtype.Editor\" class=\"associatedtype\">Editor</a> = <a class=\"struct\" href=\"iced_graphics/text/editor/struct.Editor.html\" title=\"struct iced_graphics::text::editor::Editor\">Editor</a></h4></section></summary><div class='docblock'>The <a href=\"iced/advanced/text/trait.Editor.html\" title=\"trait iced::advanced::text::Editor\"><code>Editor</code></a> of this <a href=\"iced/advanced/text/trait.Renderer.html\" title=\"trait iced::advanced::text::Renderer\"><code>Renderer</code></a>.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.ICON_FONT\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#156\">source</a><a href=\"#associatedconstant.ICON_FONT\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"iced/advanced/text/trait.Renderer.html#associatedconstant.ICON_FONT\" class=\"constant\">ICON_FONT</a>: <a class=\"struct\" href=\"iced/struct.Font.html\" title=\"struct iced::Font\">Font</a> = iced_tiny_skia::Renderer&lt;T&gt;::ICON_FONT</h4></section></summary><div class='docblock'>The icon font of the backend.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.CHECKMARK_ICON\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#157\">source</a><a href=\"#associatedconstant.CHECKMARK_ICON\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"iced/advanced/text/trait.Renderer.html#associatedconstant.CHECKMARK_ICON\" class=\"constant\">CHECKMARK_ICON</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.char.html\">char</a> = &#39;\\u{f00c}&#39;</h4></section></summary><div class='docblock'>The <code>char</code> representing a ✔ icon in the <a href=\"iced/advanced/text/trait.Renderer.html#associatedconstant.ICON_FONT\" title=\"associated constant iced_core::text::Renderer::ICON_FONT::ICON_FONT\"><code>ICON_FONT</code></a>.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.ARROW_DOWN_ICON\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#158\">source</a><a href=\"#associatedconstant.ARROW_DOWN_ICON\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"iced/advanced/text/trait.Renderer.html#associatedconstant.ARROW_DOWN_ICON\" class=\"constant\">ARROW_DOWN_ICON</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.char.html\">char</a> = &#39;\\u{e800}&#39;</h4></section></summary><div class='docblock'>The <code>char</code> representing a ▼ icon in the built-in <a href=\"iced/advanced/text/trait.Renderer.html#associatedconstant.ICON_FONT\" title=\"associated constant iced_core::text::Renderer::ICON_FONT::ICON_FONT\"><code>ICON_FONT</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.default_font\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#161\">source</a><a href=\"#method.default_font\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/text/trait.Renderer.html#tymethod.default_font\" class=\"fn\">default_font</a>(&amp;self) -&gt; &lt;<a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a>&lt;T&gt; as <a class=\"trait\" href=\"iced/advanced/text/trait.Renderer.html\" title=\"trait iced::advanced::text::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"iced/advanced/text/trait.Renderer.html#associatedtype.Font\" title=\"type iced::advanced::text::Renderer::Font\">Font</a></h4></section></summary><div class='docblock'>Returns the default <a href=\"iced/advanced/text/trait.Renderer.html#associatedtype.Font\" title=\"associated type iced_core::text::Renderer::Font::Font\"><code>Self::Font</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.default_size\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#165\">source</a><a href=\"#method.default_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/text/trait.Renderer.html#tymethod.default_size\" class=\"fn\">default_size</a>(&amp;self) -&gt; <a class=\"struct\" href=\"iced/struct.Pixels.html\" title=\"struct iced::Pixels\">Pixels</a></h4></section></summary><div class='docblock'>Returns the default size of <a href=\"iced/advanced/struct.Text.html\" title=\"struct iced::advanced::Text\"><code>Text</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.load_font\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#169\">source</a><a href=\"#method.load_font\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/text/trait.Renderer.html#tymethod.load_font\" class=\"fn\">load_font</a>(&amp;mut self, bytes: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;)</h4></section></summary><div class='docblock'>Loads a <a href=\"iced/advanced/text/trait.Renderer.html#associatedtype.Font\" title=\"associated type iced_core::text::Renderer::Font::Font\"><code>Self::Font</code></a> from its bytes.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fill_paragraph\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#173-179\">source</a><a href=\"#method.fill_paragraph\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/text/trait.Renderer.html#tymethod.fill_paragraph\" class=\"fn\">fill_paragraph</a>(\n    &amp;mut self,\n    paragraph: &amp;&lt;<a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a>&lt;T&gt; as <a class=\"trait\" href=\"iced/advanced/text/trait.Renderer.html\" title=\"trait iced::advanced::text::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"iced/advanced/text/trait.Renderer.html#associatedtype.Paragraph\" title=\"type iced::advanced::text::Renderer::Paragraph\">Paragraph</a>,\n    position: <a class=\"struct\" href=\"iced/struct.Point.html\" title=\"struct iced::Point\">Point</a>,\n    color: <a class=\"struct\" href=\"iced/struct.Color.html\" title=\"struct iced::Color\">Color</a>,\n    clip_bounds: <a class=\"struct\" href=\"iced/struct.Rectangle.html\" title=\"struct iced::Rectangle\">Rectangle</a>\n)</h4></section></summary><div class='docblock'>Draws the given <a href=\"iced/advanced/text/trait.Paragraph.html\" title=\"trait iced::advanced::text::Paragraph\"><code>Paragraph</code></a> at the given position and with the given\n<a href=\"iced/struct.Color.html\" title=\"struct iced::Color\"><code>Color</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fill_editor\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#187-193\">source</a><a href=\"#method.fill_editor\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/text/trait.Renderer.html#tymethod.fill_editor\" class=\"fn\">fill_editor</a>(\n    &amp;mut self,\n    editor: &amp;&lt;<a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a>&lt;T&gt; as <a class=\"trait\" href=\"iced/advanced/text/trait.Renderer.html\" title=\"trait iced::advanced::text::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"iced/advanced/text/trait.Renderer.html#associatedtype.Editor\" title=\"type iced::advanced::text::Renderer::Editor\">Editor</a>,\n    position: <a class=\"struct\" href=\"iced/struct.Point.html\" title=\"struct iced::Point\">Point</a>,\n    color: <a class=\"struct\" href=\"iced/struct.Color.html\" title=\"struct iced::Color\">Color</a>,\n    clip_bounds: <a class=\"struct\" href=\"iced/struct.Rectangle.html\" title=\"struct iced::Rectangle\">Rectangle</a>\n)</h4></section></summary><div class='docblock'>Draws the given <a href=\"iced/advanced/text/trait.Editor.html\" title=\"trait iced::advanced::text::Editor\"><code>Editor</code></a> at the given position and with the given\n<a href=\"iced/struct.Color.html\" title=\"struct iced::Color\"><code>Color</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fill_text\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#201-207\">source</a><a href=\"#method.fill_text\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/text/trait.Renderer.html#tymethod.fill_text\" class=\"fn\">fill_text</a>(\n    &amp;mut self,\n    text: <a class=\"struct\" href=\"iced/advanced/struct.Text.html\" title=\"struct iced::advanced::Text\">Text</a>&lt;'_, &lt;<a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a>&lt;T&gt; as <a class=\"trait\" href=\"iced/advanced/text/trait.Renderer.html\" title=\"trait iced::advanced::text::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"iced/advanced/text/trait.Renderer.html#associatedtype.Font\" title=\"type iced::advanced::text::Renderer::Font\">Font</a>&gt;,\n    position: <a class=\"struct\" href=\"iced/struct.Point.html\" title=\"struct iced::Point\">Point</a>,\n    color: <a class=\"struct\" href=\"iced/struct.Color.html\" title=\"struct iced::Color\">Color</a>,\n    clip_bounds: <a class=\"struct\" href=\"iced/struct.Rectangle.html\" title=\"struct iced::Rectangle\">Rectangle</a>\n)</h4></section></summary><div class='docblock'>Draws the given <a href=\"iced/advanced/struct.Text.html\" title=\"struct iced::advanced::Text\"><code>Text</code></a> at the given position and with the given\n<a href=\"iced/struct.Color.html\" title=\"struct iced::Color\"><code>Color</code></a>.</div></details></div></details>","Renderer","iced::Renderer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Renderer-for-Renderer%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#238\">source</a><a href=\"#impl-Renderer-for-Renderer%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"iced/advanced/svg/trait.Renderer.html\" title=\"trait iced::advanced::svg::Renderer\">Renderer</a> for <a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a>&lt;T&gt;</h3><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>svg</code></strong> only.</div></span></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.dimensions\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#239\">source</a><a href=\"#method.dimensions\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/svg/trait.Renderer.html#tymethod.dimensions\" class=\"fn\">dimensions</a>(&amp;self, handle: &amp;<a class=\"struct\" href=\"iced/widget/svg/struct.Handle.html\" title=\"struct iced::widget::svg::Handle\">Handle</a>) -&gt; <a class=\"struct\" href=\"iced/struct.Size.html\" title=\"struct iced::Size\">Size</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;</h4></section></summary><div class='docblock'>Returns the default dimensions of an SVG for the given <a href=\"iced/widget/svg/struct.Handle.html\" title=\"struct iced::widget::svg::Handle\"><code>Handle</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.draw\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#243-248\">source</a><a href=\"#method.draw\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/svg/trait.Renderer.html#tymethod.draw\" class=\"fn\">draw</a>(&amp;mut self, handle: <a class=\"struct\" href=\"iced/widget/svg/struct.Handle.html\" title=\"struct iced::widget::svg::Handle\">Handle</a>, color: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"iced/struct.Color.html\" title=\"struct iced::Color\">Color</a>&gt;, bounds: <a class=\"struct\" href=\"iced/struct.Rectangle.html\" title=\"struct iced::Rectangle\">Rectangle</a>)</h4></section></summary><div class='docblock'>Draws an SVG with the given <a href=\"iced/widget/svg/struct.Handle.html\" title=\"struct iced::widget::svg::Handle\"><code>Handle</code></a>, an optional <a href=\"iced/struct.Color.html\" title=\"struct iced::Color\"><code>Color</code></a> filter, and inside the provided <code>bounds</code>.</div></details></div></details>","Renderer","iced::Renderer"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()