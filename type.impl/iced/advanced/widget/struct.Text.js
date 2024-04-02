(function() {var type_impls = {
"iced":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Text%3C'a,+Theme,+Renderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#36-39\">source</a><a href=\"#impl-Text%3C'a,+Theme,+Renderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Theme, Renderer&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Theme, Renderer&gt;<div class=\"where\">where\n    Theme: <a class=\"trait\" href=\"iced/widget/text/trait.Catalog.html\" title=\"trait iced::widget::text::Catalog\">Catalog</a>,\n    Renderer: <a class=\"trait\" href=\"iced/advanced/text/trait.Renderer.html\" title=\"trait iced::advanced::text::Renderer\">Renderer</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#42\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/advanced/widget/struct.Text.html#tymethod.new\" class=\"fn\">new</a>(fragment: impl <a class=\"trait\" href=\"iced/widget/text/trait.IntoFragment.html\" title=\"trait iced::widget::text::IntoFragment\">IntoFragment</a>&lt;'a&gt;) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Theme, Renderer&gt;</h4></section><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>advanced</code></strong> only.</div></span></summary><div class=\"docblock\"><p>Create a new fragment of <a href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\"><code>Text</code></a> with the given contents.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#58\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/advanced/widget/struct.Text.html#tymethod.size\" class=\"fn\">size</a>(self, size: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced/struct.Pixels.html\" title=\"struct iced::Pixels\">Pixels</a>&gt;) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Theme, Renderer&gt;</h4></section><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>advanced</code></strong> only.</div></span></summary><div class=\"docblock\"><p>Sets the size of the <a href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\"><code>Text</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.line_height\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#64\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/advanced/widget/struct.Text.html#tymethod.line_height\" class=\"fn\">line_height</a>(\n    self,\n    line_height: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"iced/widget/text/enum.LineHeight.html\" title=\"enum iced::widget::text::LineHeight\">LineHeight</a>&gt;\n) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Theme, Renderer&gt;</h4></section><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>advanced</code></strong> only.</div></span></summary><div class=\"docblock\"><p>Sets the <a href=\"iced/widget/text/enum.LineHeight.html\" title=\"enum iced::widget::text::LineHeight\"><code>LineHeight</code></a> of the <a href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\"><code>Text</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.font\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#72\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/advanced/widget/struct.Text.html#tymethod.font\" class=\"fn\">font</a>(\n    self,\n    font: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;&lt;Renderer as <a class=\"trait\" href=\"iced/advanced/text/trait.Renderer.html\" title=\"trait iced::advanced::text::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"iced/advanced/text/trait.Renderer.html#associatedtype.Font\" title=\"type iced::advanced::text::Renderer::Font\">Font</a>&gt;\n) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Theme, Renderer&gt;</h4></section><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>advanced</code></strong> only.</div></span></summary><div class=\"docblock\"><p>Sets the <a href=\"iced/advanced/text/trait.Renderer.html#associatedtype.Font\" title=\"associated type iced::advanced::text::Renderer::Font\"><code>Font</code></a> of the <a href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\"><code>Text</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.width\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#78\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/advanced/widget/struct.Text.html#tymethod.width\" class=\"fn\">width</a>(self, width: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"iced/enum.Length.html\" title=\"enum iced::Length\">Length</a>&gt;) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Theme, Renderer&gt;</h4></section><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>advanced</code></strong> only.</div></span></summary><div class=\"docblock\"><p>Sets the width of the <a href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\"><code>Text</code></a> boundaries.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.height\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#84\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/advanced/widget/struct.Text.html#tymethod.height\" class=\"fn\">height</a>(self, height: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"iced/enum.Length.html\" title=\"enum iced::Length\">Length</a>&gt;) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Theme, Renderer&gt;</h4></section><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>advanced</code></strong> only.</div></span></summary><div class=\"docblock\"><p>Sets the height of the <a href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\"><code>Text</code></a> boundaries.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.horizontal_alignment\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#90-93\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/advanced/widget/struct.Text.html#tymethod.horizontal_alignment\" class=\"fn\">horizontal_alignment</a>(\n    self,\n    alignment: <a class=\"enum\" href=\"iced/alignment/enum.Horizontal.html\" title=\"enum iced::alignment::Horizontal\">Horizontal</a>\n) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Theme, Renderer&gt;</h4></section><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>advanced</code></strong> only.</div></span></summary><div class=\"docblock\"><p>Sets the <a href=\"iced/alignment/enum.Horizontal.html\" title=\"enum iced::alignment::Horizontal\"><code>alignment::Horizontal</code></a> of the <a href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\"><code>Text</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.vertical_alignment\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#99-102\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/advanced/widget/struct.Text.html#tymethod.vertical_alignment\" class=\"fn\">vertical_alignment</a>(\n    self,\n    alignment: <a class=\"enum\" href=\"iced/alignment/enum.Vertical.html\" title=\"enum iced::alignment::Vertical\">Vertical</a>\n) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Theme, Renderer&gt;</h4></section><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>advanced</code></strong> only.</div></span></summary><div class=\"docblock\"><p>Sets the <a href=\"iced/alignment/enum.Vertical.html\" title=\"enum iced::alignment::Vertical\"><code>alignment::Vertical</code></a> of the <a href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\"><code>Text</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.shaping\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#108\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/advanced/widget/struct.Text.html#tymethod.shaping\" class=\"fn\">shaping</a>(self, shaping: <a class=\"enum\" href=\"iced/widget/text/enum.Shaping.html\" title=\"enum iced::widget::text::Shaping\">Shaping</a>) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Theme, Renderer&gt;</h4></section><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>advanced</code></strong> only.</div></span></summary><div class=\"docblock\"><p>Sets the <a href=\"iced/widget/text/enum.Shaping.html\" title=\"enum iced::widget::text::Shaping\"><code>Shaping</code></a> strategy of the <a href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\"><code>Text</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.style\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#115-117\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/advanced/widget/struct.Text.html#tymethod.style\" class=\"fn\">style</a>(\n    self,\n    style: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Theme</a>) -&gt; <a class=\"struct\" href=\"iced/widget/text/struct.Style.html\" title=\"struct iced::widget::text::Style\">Style</a> + 'a\n) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Theme, Renderer&gt;<div class=\"where\">where\n    &lt;Theme as <a class=\"trait\" href=\"iced/widget/text/trait.Catalog.html\" title=\"trait iced::widget::text::Catalog\">Catalog</a>&gt;::<a class=\"associatedtype\" href=\"iced/widget/text/trait.Catalog.html#associatedtype.Class\" title=\"type iced::widget::text::Catalog::Class\">Class</a>&lt;'a&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Theme</a>) -&gt; <a class=\"struct\" href=\"iced/widget/text/struct.Style.html\" title=\"struct iced::widget::text::Style\">Style</a> + 'a&gt;&gt;,</div></h4></section><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>advanced</code></strong> only.</div></span></summary><div class=\"docblock\"><p>Sets the style of the <a href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\"><code>Text</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.color\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#124-126\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/advanced/widget/struct.Text.html#tymethod.color\" class=\"fn\">color</a>(self, color: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced/struct.Color.html\" title=\"struct iced::Color\">Color</a>&gt;) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Theme, Renderer&gt;<div class=\"where\">where\n    &lt;Theme as <a class=\"trait\" href=\"iced/widget/text/trait.Catalog.html\" title=\"trait iced::widget::text::Catalog\">Catalog</a>&gt;::<a class=\"associatedtype\" href=\"iced/widget/text/trait.Catalog.html#associatedtype.Class\" title=\"type iced::widget::text::Catalog::Class\">Class</a>&lt;'a&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Theme</a>) -&gt; <a class=\"struct\" href=\"iced/widget/text/struct.Style.html\" title=\"struct iced::widget::text::Style\">Style</a> + 'a&gt;&gt;,</div></h4></section><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>advanced</code></strong> only.</div></span></summary><div class=\"docblock\"><p>Sets the <a href=\"iced/struct.Color.html\" title=\"struct iced::Color\"><code>Color</code></a> of the <a href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\"><code>Text</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.color_maybe\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#132-134\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/advanced/widget/struct.Text.html#tymethod.color_maybe\" class=\"fn\">color_maybe</a>(\n    self,\n    color: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced/struct.Color.html\" title=\"struct iced::Color\">Color</a>&gt;&gt;\n) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Theme, Renderer&gt;<div class=\"where\">where\n    &lt;Theme as <a class=\"trait\" href=\"iced/widget/text/trait.Catalog.html\" title=\"trait iced::widget::text::Catalog\">Catalog</a>&gt;::<a class=\"associatedtype\" href=\"iced/widget/text/trait.Catalog.html#associatedtype.Class\" title=\"type iced::widget::text::Catalog::Class\">Class</a>&lt;'a&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Theme</a>) -&gt; <a class=\"struct\" href=\"iced/widget/text/struct.Style.html\" title=\"struct iced::widget::text::Style\">Style</a> + 'a&gt;&gt;,</div></h4></section><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>advanced</code></strong> only.</div></span></summary><div class=\"docblock\"><p>Sets the <a href=\"iced/struct.Color.html\" title=\"struct iced::Color\"><code>Color</code></a> of the <a href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\"><code>Text</code></a>, if <code>Some</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.class\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#144\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/advanced/widget/struct.Text.html#tymethod.class\" class=\"fn\">class</a>(\n    self,\n    class: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;&lt;Theme as <a class=\"trait\" href=\"iced/widget/text/trait.Catalog.html\" title=\"trait iced::widget::text::Catalog\">Catalog</a>&gt;::<a class=\"associatedtype\" href=\"iced/widget/text/trait.Catalog.html#associatedtype.Class\" title=\"type iced::widget::text::Catalog::Class\">Class</a>&lt;'a&gt;&gt;\n) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Theme, Renderer&gt;</h4></section><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>advanced</code></strong> only.</div></span></summary><div class=\"docblock\"><p>Sets the style class of the <a href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\"><code>Text</code></a>.</p>\n</div></details></div></details>",0,"iced::widget::Text"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3C%26str%3E-for-Text%3C'a,+Theme,+Renderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#311-314\">source</a><a href=\"#impl-From%3C%26str%3E-for-Text%3C'a,+Theme,+Renderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Theme, Renderer&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Theme, Renderer&gt;<div class=\"where\">where\n    Theme: <a class=\"trait\" href=\"iced/widget/text/trait.Catalog.html\" title=\"trait iced::widget::text::Catalog\">Catalog</a> + 'a,\n    Renderer: <a class=\"trait\" href=\"iced/advanced/text/trait.Renderer.html\" title=\"trait iced::advanced::text::Renderer\">Renderer</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#316\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(content: &amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Theme, Renderer&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<&'a str>","iced::widget::Text"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Widget%3CMessage,+Theme,+Renderer%3E-for-Text%3C'a,+Theme,+Renderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#154-158\">source</a><a href=\"#impl-Widget%3CMessage,+Theme,+Renderer%3E-for-Text%3C'a,+Theme,+Renderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Message, Theme, Renderer&gt; <a class=\"trait\" href=\"iced/advanced/trait.Widget.html\" title=\"trait iced::advanced::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Theme, Renderer&gt;<div class=\"where\">where\n    Theme: <a class=\"trait\" href=\"iced/widget/text/trait.Catalog.html\" title=\"trait iced::widget::text::Catalog\">Catalog</a>,\n    Renderer: <a class=\"trait\" href=\"iced/advanced/text/trait.Renderer.html\" title=\"trait iced::advanced::text::Renderer\">Renderer</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.tag\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#160\">source</a><a href=\"#method.tag\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Widget.html#method.tag\" class=\"fn\">tag</a>(&amp;self) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/tree/struct.Tag.html\" title=\"struct iced::advanced::widget::tree::Tag\">Tag</a></h4></section></summary><div class='docblock'>Returns the <a href=\"iced/advanced/widget/tree/struct.Tag.html\" title=\"struct iced::advanced::widget::tree::Tag\"><code>Tag</code></a> of the <a href=\"iced/advanced/trait.Widget.html\" title=\"trait iced::advanced::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.state\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#164\">source</a><a href=\"#method.state\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Widget.html#method.state\" class=\"fn\">state</a>(&amp;self) -&gt; <a class=\"enum\" href=\"iced/advanced/widget/tree/enum.State.html\" title=\"enum iced::advanced::widget::tree::State\">State</a></h4></section></summary><div class='docblock'>Returns the <a href=\"iced/advanced/widget/tree/enum.State.html\" title=\"enum iced::advanced::widget::tree::State\"><code>State</code></a> of the <a href=\"iced/advanced/trait.Widget.html\" title=\"trait iced::advanced::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#168\">source</a><a href=\"#method.size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Widget.html#tymethod.size\" class=\"fn\">size</a>(&amp;self) -&gt; <a class=\"struct\" href=\"iced/struct.Size.html\" title=\"struct iced::Size\">Size</a>&lt;<a class=\"enum\" href=\"iced/enum.Length.html\" title=\"enum iced::Length\">Length</a>&gt;</h4></section></summary><div class='docblock'>Returns the <a href=\"iced/struct.Size.html\" title=\"struct iced::Size\"><code>Size</code></a> of the <a href=\"iced/advanced/trait.Widget.html\" title=\"trait iced::advanced::Widget\"><code>Widget</code></a> in lengths.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.layout\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#175-180\">source</a><a href=\"#method.layout\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Widget.html#tymethod.layout\" class=\"fn\">layout</a>(&amp;self, tree: &amp;mut <a class=\"struct\" href=\"iced/advanced/widget/struct.Tree.html\" title=\"struct iced::advanced::widget::Tree\">Tree</a>, renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Renderer</a>, limits: &amp;<a class=\"struct\" href=\"iced/advanced/layout/struct.Limits.html\" title=\"struct iced::advanced::layout::Limits\">Limits</a>) -&gt; <a class=\"struct\" href=\"iced/advanced/layout/struct.Node.html\" title=\"struct iced::advanced::layout::Node\">Node</a></h4></section></summary><div class='docblock'>Returns the <a href=\"iced/advanced/layout/struct.Node.html\" title=\"struct iced::advanced::layout::Node\"><code>layout::Node</code></a> of the <a href=\"iced/advanced/trait.Widget.html\" title=\"trait iced::advanced::Widget\"><code>Widget</code></a>. <a href=\"iced/advanced/trait.Widget.html#tymethod.layout\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.draw\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#197-206\">source</a><a href=\"#method.draw\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Widget.html#tymethod.draw\" class=\"fn\">draw</a>(\n    &amp;self,\n    tree: &amp;<a class=\"struct\" href=\"iced/advanced/widget/struct.Tree.html\" title=\"struct iced::advanced::widget::Tree\">Tree</a>,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut Renderer</a>,\n    theme: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Theme</a>,\n    defaults: &amp;<a class=\"struct\" href=\"iced/advanced/renderer/struct.Style.html\" title=\"struct iced::advanced::renderer::Style\">Style</a>,\n    layout: <a class=\"struct\" href=\"iced/advanced/struct.Layout.html\" title=\"struct iced::advanced::Layout\">Layout</a>&lt;'_&gt;,\n    _cursor_position: <a class=\"enum\" href=\"iced/mouse/enum.Cursor.html\" title=\"enum iced::mouse::Cursor\">Cursor</a>,\n    viewport: &amp;<a class=\"struct\" href=\"iced/struct.Rectangle.html\" title=\"struct iced::Rectangle\">Rectangle</a>\n)</h4></section></summary><div class='docblock'>Draws the <a href=\"iced/advanced/trait.Widget.html\" title=\"trait iced::advanced::Widget\"><code>Widget</code></a> using the associated <code>Renderer</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#53\">source</a><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Widget.html#method.size_hint\" class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"struct\" href=\"iced/struct.Size.html\" title=\"struct iced::Size\">Size</a>&lt;<a class=\"enum\" href=\"iced/enum.Length.html\" title=\"enum iced::Length\">Length</a>&gt;</h4></section></summary><div class='docblock'>Returns a <a href=\"iced/struct.Size.html\" title=\"struct iced::Size\"><code>Size</code></a> hint for laying out the <a href=\"iced/advanced/trait.Widget.html\" title=\"trait iced::advanced::Widget\"><code>Widget</code></a>. <a href=\"iced/advanced/trait.Widget.html#method.size_hint\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.children\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#95\">source</a><a href=\"#method.children\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Widget.html#method.children\" class=\"fn\">children</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"iced/advanced/widget/struct.Tree.html\" title=\"struct iced::advanced::widget::Tree\">Tree</a>&gt;</h4></section></summary><div class='docblock'>Returns the state <a href=\"iced/advanced/widget/struct.Tree.html\" title=\"struct iced::advanced::widget::Tree\"><code>Tree</code></a> of the children of the <a href=\"iced/advanced/trait.Widget.html\" title=\"trait iced::advanced::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.diff\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#100\">source</a><a href=\"#method.diff\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Widget.html#method.diff\" class=\"fn\">diff</a>(&amp;self, _tree: &amp;mut <a class=\"struct\" href=\"iced/advanced/widget/struct.Tree.html\" title=\"struct iced::advanced::widget::Tree\">Tree</a>)</h4></section></summary><div class='docblock'>Reconciliates the <a href=\"iced/advanced/trait.Widget.html\" title=\"trait iced::advanced::Widget\"><code>Widget</code></a> with the provided <a href=\"iced/advanced/widget/struct.Tree.html\" title=\"struct iced::advanced::widget::Tree\"><code>Tree</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.operate\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#103-109\">source</a><a href=\"#method.operate\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Widget.html#method.operate\" class=\"fn\">operate</a>(\n    &amp;self,\n    _state: &amp;mut <a class=\"struct\" href=\"iced/advanced/widget/struct.Tree.html\" title=\"struct iced::advanced::widget::Tree\">Tree</a>,\n    _layout: <a class=\"struct\" href=\"iced/advanced/struct.Layout.html\" title=\"struct iced::advanced::Layout\">Layout</a>&lt;'_&gt;,\n    _renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Renderer</a>,\n    _operation: &amp;mut dyn <a class=\"trait\" href=\"iced/advanced/widget/trait.Operation.html\" title=\"trait iced::advanced::widget::Operation\">Operation</a>&lt;Message&gt;\n)</h4></section></summary><div class='docblock'>Applies an <a href=\"iced/advanced/widget/trait.Operation.html\" title=\"trait iced::advanced::widget::Operation\"><code>Operation</code></a> to the <a href=\"iced/advanced/trait.Widget.html\" title=\"trait iced::advanced::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.on_event\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#115-125\">source</a><a href=\"#method.on_event\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Widget.html#method.on_event\" class=\"fn\">on_event</a>(\n    &amp;mut self,\n    _state: &amp;mut <a class=\"struct\" href=\"iced/advanced/widget/struct.Tree.html\" title=\"struct iced::advanced::widget::Tree\">Tree</a>,\n    _event: <a class=\"enum\" href=\"iced/enum.Event.html\" title=\"enum iced::Event\">Event</a>,\n    _layout: <a class=\"struct\" href=\"iced/advanced/struct.Layout.html\" title=\"struct iced::advanced::Layout\">Layout</a>&lt;'_&gt;,\n    _cursor: <a class=\"enum\" href=\"iced/mouse/enum.Cursor.html\" title=\"enum iced::mouse::Cursor\">Cursor</a>,\n    _renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Renderer</a>,\n    _clipboard: &amp;mut dyn <a class=\"trait\" href=\"iced/advanced/trait.Clipboard.html\" title=\"trait iced::advanced::Clipboard\">Clipboard</a>,\n    _shell: &amp;mut <a class=\"struct\" href=\"iced/advanced/struct.Shell.html\" title=\"struct iced::advanced::Shell\">Shell</a>&lt;'_, Message&gt;,\n    _viewport: &amp;<a class=\"struct\" href=\"iced/struct.Rectangle.html\" title=\"struct iced::Rectangle\">Rectangle</a>\n) -&gt; <a class=\"enum\" href=\"iced/widget/canvas/event/enum.Status.html\" title=\"enum iced::widget::canvas::event::Status\">Status</a></h4></section></summary><div class='docblock'>Processes a runtime <a href=\"iced/enum.Event.html\" title=\"enum iced::Event\"><code>Event</code></a>. <a href=\"iced/advanced/trait.Widget.html#method.on_event\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.mouse_interaction\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#132-139\">source</a><a href=\"#method.mouse_interaction\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Widget.html#method.mouse_interaction\" class=\"fn\">mouse_interaction</a>(\n    &amp;self,\n    _state: &amp;<a class=\"struct\" href=\"iced/advanced/widget/struct.Tree.html\" title=\"struct iced::advanced::widget::Tree\">Tree</a>,\n    _layout: <a class=\"struct\" href=\"iced/advanced/struct.Layout.html\" title=\"struct iced::advanced::Layout\">Layout</a>&lt;'_&gt;,\n    _cursor: <a class=\"enum\" href=\"iced/mouse/enum.Cursor.html\" title=\"enum iced::mouse::Cursor\">Cursor</a>,\n    _viewport: &amp;<a class=\"struct\" href=\"iced/struct.Rectangle.html\" title=\"struct iced::Rectangle\">Rectangle</a>,\n    _renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Renderer</a>\n) -&gt; <a class=\"enum\" href=\"iced/mouse/enum.Interaction.html\" title=\"enum iced::mouse::Interaction\">Interaction</a></h4></section></summary><div class='docblock'>Returns the current <a href=\"iced/mouse/enum.Interaction.html\" title=\"enum iced::mouse::Interaction\"><code>mouse::Interaction</code></a> of the <a href=\"iced/advanced/trait.Widget.html\" title=\"trait iced::advanced::Widget\"><code>Widget</code></a>. <a href=\"iced/advanced/trait.Widget.html#method.mouse_interaction\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.overlay\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#144-150\">source</a><a href=\"#method.overlay\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Widget.html#method.overlay\" class=\"fn\">overlay</a>&lt;'a&gt;(\n    &amp;'a mut self,\n    _state: &amp;'a mut <a class=\"struct\" href=\"iced/advanced/widget/struct.Tree.html\" title=\"struct iced::advanced::widget::Tree\">Tree</a>,\n    _layout: <a class=\"struct\" href=\"iced/advanced/struct.Layout.html\" title=\"struct iced::advanced::Layout\">Layout</a>&lt;'_&gt;,\n    _renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Renderer</a>,\n    _translation: <a class=\"struct\" href=\"iced/struct.Vector.html\" title=\"struct iced::Vector\">Vector</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"iced/advanced/overlay/struct.Element.html\" title=\"struct iced::advanced::overlay::Element\">Element</a>&lt;'a, Message, Theme, Renderer&gt;&gt;</h4></section></summary><div class='docblock'>Returns the overlay of the <a href=\"iced/advanced/trait.Widget.html\" title=\"trait iced::advanced::Widget\"><code>Widget</code></a>, if there is any.</div></details></div></details>","Widget<Message, Theme, Renderer>","iced::widget::Text"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()