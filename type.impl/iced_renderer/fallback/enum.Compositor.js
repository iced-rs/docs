(function() {var type_impls = {
"iced_renderer":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Compositor-for-Compositor%3CA,+B%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_renderer/fallback.rs.html#235-415\">source</a><a href=\"#impl-Compositor-for-Compositor%3CA,+B%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, B&gt; <a class=\"trait\" href=\"iced_graphics/compositor/trait.Compositor.html\" title=\"trait iced_graphics::compositor::Compositor\">Compositor</a> for <a class=\"enum\" href=\"iced_renderer/fallback/enum.Compositor.html\" title=\"enum iced_renderer::fallback::Compositor\">Compositor</a>&lt;A, B&gt;<div class=\"where\">where\n    A: <a class=\"trait\" href=\"iced_graphics/compositor/trait.Compositor.html\" title=\"trait iced_graphics::compositor::Compositor\">Compositor</a>,\n    B: <a class=\"trait\" href=\"iced_graphics/compositor/trait.Compositor.html\" title=\"trait iced_graphics::compositor::Compositor\">Compositor</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Renderer\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Renderer\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Renderer\" class=\"associatedtype\">Renderer</a> = <a class=\"enum\" href=\"iced_renderer/fallback/enum.Renderer.html\" title=\"enum iced_renderer::fallback::Renderer\">Renderer</a>&lt;&lt;A as <a class=\"trait\" href=\"iced_graphics/compositor/trait.Compositor.html\" title=\"trait iced_graphics::compositor::Compositor\">Compositor</a>&gt;::<a class=\"associatedtype\" href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Renderer\" title=\"type iced_graphics::compositor::Compositor::Renderer\">Renderer</a>, &lt;B as <a class=\"trait\" href=\"iced_graphics/compositor/trait.Compositor.html\" title=\"trait iced_graphics::compositor::Compositor\">Compositor</a>&gt;::<a class=\"associatedtype\" href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Renderer\" title=\"type iced_graphics::compositor::Compositor::Renderer\">Renderer</a>&gt;</h4></section></summary><div class='docblock'>The iced renderer of the backend.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Surface\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Surface\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Surface\" class=\"associatedtype\">Surface</a> = <a class=\"enum\" href=\"iced_renderer/fallback/enum.Surface.html\" title=\"enum iced_renderer::fallback::Surface\">Surface</a>&lt;&lt;A as <a class=\"trait\" href=\"iced_graphics/compositor/trait.Compositor.html\" title=\"trait iced_graphics::compositor::Compositor\">Compositor</a>&gt;::<a class=\"associatedtype\" href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Surface\" title=\"type iced_graphics::compositor::Compositor::Surface\">Surface</a>, &lt;B as <a class=\"trait\" href=\"iced_graphics/compositor/trait.Compositor.html\" title=\"trait iced_graphics::compositor::Compositor\">Compositor</a>&gt;::<a class=\"associatedtype\" href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Surface\" title=\"type iced_graphics::compositor::Compositor::Surface\">Surface</a>&gt;</h4></section></summary><div class='docblock'>The surface of the backend.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_backend\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/fallback.rs.html#243-292\">source</a><a href=\"#method.with_backend\" class=\"anchor\">§</a><h4 class=\"code-header\">async fn <a href=\"iced_graphics/compositor/trait.Compositor.html#tymethod.with_backend\" class=\"fn\">with_backend</a>&lt;W: <a class=\"trait\" href=\"iced_graphics/compositor/trait.Window.html\" title=\"trait iced_graphics::compositor::Window\">Window</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt;(\n    settings: <a class=\"struct\" href=\"iced_graphics/settings/struct.Settings.html\" title=\"struct iced_graphics::settings::Settings\">Settings</a>,\n    compatible_window: W,\n    backend: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"enum\" href=\"iced_graphics/error/enum.Error.html\" title=\"enum iced_graphics::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Creates a new <a href=\"iced_graphics/compositor/trait.Compositor.html\" title=\"trait iced_graphics::compositor::Compositor\"><code>Compositor</code></a> with a backend preference. <a href=\"iced_graphics/compositor/trait.Compositor.html#tymethod.with_backend\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.create_renderer\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/fallback.rs.html#294-303\">source</a><a href=\"#method.create_renderer\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_graphics/compositor/trait.Compositor.html#tymethod.create_renderer\" class=\"fn\">create_renderer</a>(&amp;self) -&gt; Self::<a class=\"associatedtype\" href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Renderer\" title=\"type iced_graphics::compositor::Compositor::Renderer\">Renderer</a></h4></section></summary><div class='docblock'>Creates a <a href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Renderer\" title=\"associated type iced_graphics::compositor::Compositor::Renderer::Renderer\"><code>Self::Renderer</code></a> for the <a href=\"iced_graphics/compositor/trait.Compositor.html\" title=\"trait iced_graphics::compositor::Compositor\"><code>Compositor</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.create_surface\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/fallback.rs.html#305-319\">source</a><a href=\"#method.create_surface\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_graphics/compositor/trait.Compositor.html#tymethod.create_surface\" class=\"fn\">create_surface</a>&lt;W: <a class=\"trait\" href=\"iced_graphics/compositor/trait.Window.html\" title=\"trait iced_graphics::compositor::Window\">Window</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt;(\n    &amp;mut self,\n    window: W,\n    width: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>,\n    height: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>,\n) -&gt; Self::<a class=\"associatedtype\" href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Surface\" title=\"type iced_graphics::compositor::Compositor::Surface\">Surface</a></h4></section></summary><div class='docblock'>Crates a new <a href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Surface\" title=\"associated type iced_graphics::compositor::Compositor::Surface::Surface\"><code>Surface</code></a> for the given window.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.configure_surface\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/fallback.rs.html#321-336\">source</a><a href=\"#method.configure_surface\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_graphics/compositor/trait.Compositor.html#tymethod.configure_surface\" class=\"fn\">configure_surface</a>(\n    &amp;mut self,\n    surface: &amp;mut Self::<a class=\"associatedtype\" href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Surface\" title=\"type iced_graphics::compositor::Compositor::Surface\">Surface</a>,\n    width: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>,\n    height: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>,\n)</h4></section></summary><div class='docblock'>Configures a new <a href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Surface\" title=\"associated type iced_graphics::compositor::Compositor::Surface::Surface\"><code>Surface</code></a> with the given dimensions.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.load_font\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/fallback.rs.html#338-340\">source</a><a href=\"#method.load_font\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_graphics/compositor/trait.Compositor.html#method.load_font\" class=\"fn\">load_font</a>(&amp;mut self, font: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;)</h4></section></summary><div class='docblock'>Loads a font from its bytes.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fetch_information\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/fallback.rs.html#342-344\">source</a><a href=\"#method.fetch_information\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_graphics/compositor/trait.Compositor.html#tymethod.fetch_information\" class=\"fn\">fetch_information</a>(&amp;self) -&gt; <a class=\"struct\" href=\"iced_graphics/compositor/struct.Information.html\" title=\"struct iced_graphics::compositor::Information\">Information</a></h4></section></summary><div class='docblock'>Returns <a href=\"iced_graphics/compositor/struct.Information.html\" title=\"struct iced_graphics::compositor::Information\"><code>Information</code></a> used by this <a href=\"iced_graphics/compositor/trait.Compositor.html\" title=\"trait iced_graphics::compositor::Compositor\"><code>Compositor</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.present\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/fallback.rs.html#346-379\">source</a><a href=\"#method.present\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_graphics/compositor/trait.Compositor.html#tymethod.present\" class=\"fn\">present</a>&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt;(\n    &amp;mut self,\n    renderer: &amp;mut Self::<a class=\"associatedtype\" href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Renderer\" title=\"type iced_graphics::compositor::Compositor::Renderer\">Renderer</a>,\n    surface: &amp;mut Self::<a class=\"associatedtype\" href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Surface\" title=\"type iced_graphics::compositor::Compositor::Surface\">Surface</a>,\n    viewport: &amp;<a class=\"struct\" href=\"iced_graphics/viewport/struct.Viewport.html\" title=\"struct iced_graphics::viewport::Viewport\">Viewport</a>,\n    background_color: Color,\n    overlay: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[T]</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"iced_graphics/compositor/enum.SurfaceError.html\" title=\"enum iced_graphics::compositor::SurfaceError\">SurfaceError</a>&gt;</h4></section></summary><div class='docblock'>Presents the <a href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Renderer\" title=\"associated type iced_graphics::compositor::Compositor::Renderer::Renderer\"><code>Renderer</code></a> primitives to the next frame of the given <a href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Surface\" title=\"associated type iced_graphics::compositor::Compositor::Surface::Surface\"><code>Surface</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.screenshot\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/fallback.rs.html#381-414\">source</a><a href=\"#method.screenshot\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_graphics/compositor/trait.Compositor.html#tymethod.screenshot\" class=\"fn\">screenshot</a>&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt;(\n    &amp;mut self,\n    renderer: &amp;mut Self::<a class=\"associatedtype\" href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Renderer\" title=\"type iced_graphics::compositor::Compositor::Renderer\">Renderer</a>,\n    surface: &amp;mut Self::<a class=\"associatedtype\" href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Surface\" title=\"type iced_graphics::compositor::Compositor::Surface\">Surface</a>,\n    viewport: &amp;<a class=\"struct\" href=\"iced_graphics/viewport/struct.Viewport.html\" title=\"struct iced_graphics::viewport::Viewport\">Viewport</a>,\n    background_color: Color,\n    overlay: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[T]</a>,\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;</h4></section></summary><div class='docblock'>Screenshots the current <a href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Renderer\" title=\"associated type iced_graphics::compositor::Compositor::Renderer::Renderer\"><code>Renderer</code></a> primitives to an offscreen texture, and returns the bytes of\nthe texture ordered as <code>RGBA</code> in the <code>sRGB</code> color space.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_graphics/compositor.rs.html#22-25\">source</a><a href=\"#method.new\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_graphics/compositor/trait.Compositor.html#method.new\" class=\"fn\">new</a>&lt;W&gt;(\n    settings: <a class=\"struct\" href=\"iced_graphics/settings/struct.Settings.html\" title=\"struct iced_graphics::settings::Settings\">Settings</a>,\n    compatible_window: W,\n) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"enum\" href=\"iced_graphics/error/enum.Error.html\" title=\"enum iced_graphics::error::Error\">Error</a>&gt;&gt;<div class=\"where\">where\n    W: <a class=\"trait\" href=\"iced_graphics/compositor/trait.Window.html\" title=\"trait iced_graphics::compositor::Window\">Window</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h4></section></summary><div class='docblock'>Creates a new <a href=\"iced_graphics/compositor/trait.Compositor.html\" title=\"trait iced_graphics::compositor::Compositor\"><code>Compositor</code></a>.</div></details></div></details>","Compositor","iced_renderer::Compositor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Compositor%3CA,+B%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_renderer/fallback.rs.html#212\">source</a><a href=\"#impl-Debug-for-Compositor%3CA,+B%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"iced_renderer/fallback/enum.Compositor.html\" title=\"enum iced_renderer::fallback::Compositor\">Compositor</a>&lt;A, B&gt;<div class=\"where\">where\n    A: <a class=\"trait\" href=\"iced_graphics/compositor/trait.Compositor.html\" title=\"trait iced_graphics::compositor::Compositor\">Compositor</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    B: <a class=\"trait\" href=\"iced_graphics/compositor/trait.Compositor.html\" title=\"trait iced_graphics::compositor::Compositor\">Compositor</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/fallback.rs.html#212\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","iced_renderer::Compositor"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()