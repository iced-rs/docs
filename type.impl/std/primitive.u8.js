(function() {var type_impls = {
"iced":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ReadEndian%3Cu8%3E-for-R\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/lebe/0.5.0/src/lebe/lib.rs.html#422-427\">source</a><a href=\"#impl-ReadEndian%3Cu8%3E-for-R\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R&gt; <a class=\"trait\" href=\"https://docs.rs/lebe/0.5.0/lebe/io/trait.ReadEndian.html\" title=\"trait lebe::io::ReadEndian\">ReadEndian</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; for R<div class=\"where\">where\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_from_little_endian_into\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/lebe/0.5.0/src/lebe/lib.rs.html#422-427\">source</a><a href=\"#method.read_from_little_endian_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/lebe/0.5.0/lebe/io/trait.ReadEndian.html#tymethod.read_from_little_endian_into\" class=\"fn\">read_from_little_endian_into</a>(&amp;mut self, value: &amp;mut <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Read into the supplied reference. Acts the same as <code>std::io::Read::read_exact</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_from_big_endian_into\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/lebe/0.5.0/src/lebe/lib.rs.html#422-427\">source</a><a href=\"#method.read_from_big_endian_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/lebe/0.5.0/lebe/io/trait.ReadEndian.html#tymethod.read_from_big_endian_into\" class=\"fn\">read_from_big_endian_into</a>(&amp;mut self, value: &amp;mut <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Read into the supplied reference. Acts the same as <code>std::io::Read::read_exact</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_from_native_endian_into\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/lebe/0.5.0/src/lebe/lib.rs.html#317\">source</a><a href=\"#method.read_from_native_endian_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/lebe/0.5.0/lebe/io/trait.ReadEndian.html#method.read_from_native_endian_into\" class=\"fn\">read_from_native_endian_into</a>(&amp;mut self, value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut T</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Read into the supplied reference. Acts the same as <code>std::io::Read::read_exact</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_from_little_endian\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/lebe/0.5.0/src/lebe/lib.rs.html#324\">source</a><a href=\"#method.read_from_little_endian\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/lebe/0.5.0/lebe/io/trait.ReadEndian.html#method.read_from_little_endian\" class=\"fn\">read_from_little_endian</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h4></section></summary><div class='docblock'>Read the byte value of the inferred type</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_from_big_endian\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/lebe/0.5.0/src/lebe/lib.rs.html#332\">source</a><a href=\"#method.read_from_big_endian\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/lebe/0.5.0/lebe/io/trait.ReadEndian.html#method.read_from_big_endian\" class=\"fn\">read_from_big_endian</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h4></section></summary><div class='docblock'>Read the byte value of the inferred type</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_from_native_endian\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/lebe/0.5.0/src/lebe/lib.rs.html#340\">source</a><a href=\"#method.read_from_native_endian\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/lebe/0.5.0/lebe/io/trait.ReadEndian.html#method.read_from_native_endian\" class=\"fn\">read_from_native_endian</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h4></section></summary><div class='docblock'>Read the byte value of the inferred type</div></details></div></details>","ReadEndian<u8>","iced::widget::shader::wgpu::core::pipeline::ImplicitBindGroupCount","iced::widget::shader::wgpu::core::naga::back::msl::Slot","iced::widget::shader::wgpu::core::naga::back::msl::InlineSamplerIndex","iced::widget::shader::wgpu::core::naga::Bytes"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntoFragment%3C'a%3E-for-u8\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#431\">source</a><a href=\"#impl-IntoFragment%3C'a%3E-for-u8\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"iced/widget/text/trait.IntoFragment.html\" title=\"trait iced::widget::text::IntoFragment\">IntoFragment</a>&lt;'a&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_fragment\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#431\">source</a><a href=\"#method.into_fragment\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/widget/text/trait.IntoFragment.html#tymethod.into_fragment\" class=\"fn\">into_fragment</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;</h4></section></summary><div class='docblock'>Converts the value to some text <a href=\"iced/widget/text/type.Fragment.html\" title=\"type iced::widget::text::Fragment\"><code>Fragment</code></a>.</div></details></div></details>","IntoFragment<'a>","iced::widget::shader::wgpu::core::pipeline::ImplicitBindGroupCount","iced::widget::shader::wgpu::core::naga::back::msl::Slot","iced::widget::shader::wgpu::core::naga::back::msl::InlineSamplerIndex","iced::widget::shader::wgpu::core::naga::Bytes"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ComponentOrder%3CC,+u8%3E-for-T\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/palette/0.7.6/src/palette/cast/packed.rs.html#185-187\">source</a><a href=\"#impl-ComponentOrder%3CC,+u8%3E-for-T\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C, T&gt; <a class=\"trait\" href=\"https://docs.rs/palette/0.7.6/palette/cast/packed/trait.ComponentOrder.html\" title=\"trait palette::cast::packed::ComponentOrder\">ComponentOrder</a>&lt;C, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; for T<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/palette/0.7.6/palette/cast/packed/trait.ComponentOrder.html\" title=\"trait palette::cast::packed::ComponentOrder\">ComponentOrder</a>&lt;C, [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">1</a>]&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.pack\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/palette/0.7.6/src/palette/cast/packed.rs.html#190\">source</a><a href=\"#method.pack\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/palette/0.7.6/palette/cast/packed/trait.ComponentOrder.html#tymethod.pack\" class=\"fn\">pack</a>(color: C) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a></h4></section></summary><div class='docblock'>Combine the components of a color into the packed format.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unpack\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/palette/0.7.6/src/palette/cast/packed.rs.html#196\">source</a><a href=\"#method.unpack\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/palette/0.7.6/palette/cast/packed/trait.ComponentOrder.html#tymethod.unpack\" class=\"fn\">unpack</a>(packed: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>) -&gt; C</h4></section></summary><div class='docblock'>Split the packed color into its separate components.</div></details></div></details>","ComponentOrder<C, u8>","iced::widget::shader::wgpu::core::pipeline::ImplicitBindGroupCount","iced::widget::shader::wgpu::core::naga::back::msl::Slot","iced::widget::shader::wgpu::core::naga::back::msl::InlineSamplerIndex","iced::widget::shader::wgpu::core::naga::Bytes"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()