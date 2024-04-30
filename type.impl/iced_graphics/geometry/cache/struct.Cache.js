(function() {var type_impls = {
"iced":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Cache%3CRenderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/cache.rs.html#24-26\">source</a><a href=\"#impl-Cache%3CRenderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Renderer&gt; <a class=\"struct\" href=\"iced_graphics/geometry/cache/struct.Cache.html\" title=\"struct iced_graphics::geometry::cache::Cache\">Cache</a>&lt;Renderer&gt;<div class=\"where\">where\n    Renderer: <a class=\"trait\" href=\"iced_graphics/geometry/trait.Renderer.html\" title=\"trait iced_graphics::geometry::Renderer\">Renderer</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/cache.rs.html#29\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/cache/struct.Cache.html#tymethod.new\" class=\"fn\">new</a>() -&gt; <a class=\"struct\" href=\"iced_graphics/geometry/cache/struct.Cache.html\" title=\"struct iced_graphics::geometry::cache::Cache\">Cache</a>&lt;Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new empty <a href=\"iced_graphics/geometry/cache/struct.Cache.html\" title=\"struct iced_graphics::geometry::cache::Cache\"><code>Cache</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_group\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/cache.rs.html#41\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/cache/struct.Cache.html#tymethod.with_group\" class=\"fn\">with_group</a>(group: <a class=\"struct\" href=\"iced/widget/canvas/struct.Group.html\" title=\"struct iced::widget::canvas::Group\">Group</a>) -&gt; <a class=\"struct\" href=\"iced_graphics/geometry/cache/struct.Cache.html\" title=\"struct iced_graphics::geometry::cache::Cache\">Cache</a>&lt;Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new empty <a href=\"iced_graphics/geometry/cache/struct.Cache.html\" title=\"struct iced_graphics::geometry::cache::Cache\"><code>Cache</code></a> with the given <a href=\"iced/widget/canvas/struct.Group.html\" title=\"struct iced::widget::canvas::Group\"><code>Group</code></a>.</p>\n<p>Caches within the same group may reuse internal rendering storage.</p>\n<p>You should generally group caches that are likely to change\ntogether.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clear\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/cache.rs.html#48\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/cache/struct.Cache.html#tymethod.clear\" class=\"fn\">clear</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Clears the <a href=\"iced_graphics/geometry/cache/struct.Cache.html\" title=\"struct iced_graphics::geometry::cache::Cache\"><code>Cache</code></a>, forcing a redraw the next time it is used.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.draw\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/cache.rs.html#62-67\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/cache/struct.Cache.html#tymethod.draw\" class=\"fn\">draw</a>(\n    &amp;self,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Renderer</a>,\n    bounds: <a class=\"struct\" href=\"iced/struct.Size.html\" title=\"struct iced::Size\">Size</a>,\n    draw_fn: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;mut <a class=\"struct\" href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\">Frame</a>&lt;Renderer&gt;)\n) -&gt; &lt;Renderer as <a class=\"trait\" href=\"iced_graphics/geometry/trait.Renderer.html\" title=\"trait iced_graphics::geometry::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"iced_graphics/geometry/trait.Renderer.html#associatedtype.Geometry\" title=\"type iced_graphics::geometry::Renderer::Geometry\">Geometry</a></h4></section></summary><div class=\"docblock\"><p>Draws geometry using the provided closure and stores it in the\n<a href=\"iced_graphics/geometry/cache/struct.Cache.html\" title=\"struct iced_graphics::geometry::cache::Cache\"><code>Cache</code></a>.</p>\n<p>The closure will only be called when</p>\n<ul>\n<li>the bounds have changed since the previous draw call.</li>\n<li>the <a href=\"iced_graphics/geometry/cache/struct.Cache.html\" title=\"struct iced_graphics::geometry::cache::Cache\"><code>Cache</code></a> is empty or has been explicitly cleared.</li>\n</ul>\n<p>Otherwise, the previously stored geometry will be returned. The\n<a href=\"iced_graphics/geometry/cache/struct.Cache.html\" title=\"struct iced_graphics::geometry::cache::Cache\"><code>Cache</code></a> is not cleared in this case. In other words, it will keep\nreturning the stored geometry if needed.</p>\n</div></details></div></details>",0,"iced::widget::canvas::Cache"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Cache%3CRenderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/cache.rs.html#99-102\">source</a><a href=\"#impl-Debug-for-Cache%3CRenderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Renderer&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"iced_graphics/geometry/cache/struct.Cache.html\" title=\"struct iced_graphics::geometry::cache::Cache\">Cache</a>&lt;Renderer&gt;<div class=\"where\">where\n    Renderer: <a class=\"trait\" href=\"iced_graphics/geometry/trait.Renderer.html\" title=\"trait iced_graphics::geometry::Renderer\">Renderer</a>,\n    &lt;&lt;Renderer as <a class=\"trait\" href=\"iced_graphics/geometry/trait.Renderer.html\" title=\"trait iced_graphics::geometry::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"iced_graphics/geometry/trait.Renderer.html#associatedtype.Geometry\" title=\"type iced_graphics::geometry::Renderer::Geometry\">Geometry</a> as <a class=\"trait\" href=\"iced_graphics/cache/trait.Cached.html\" title=\"trait iced_graphics::cache::Cached\">Cached</a>&gt;::<a class=\"associatedtype\" href=\"iced_graphics/cache/trait.Cached.html#associatedtype.Cache\" title=\"type iced_graphics::cache::Cached::Cache\">Cache</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/cache.rs.html#104\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","iced::widget::canvas::Cache"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Cache%3CRenderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/cache.rs.html#109-111\">source</a><a href=\"#impl-Default-for-Cache%3CRenderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Renderer&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"iced_graphics/geometry/cache/struct.Cache.html\" title=\"struct iced_graphics::geometry::cache::Cache\">Cache</a>&lt;Renderer&gt;<div class=\"where\">where\n    Renderer: <a class=\"trait\" href=\"iced_graphics/geometry/trait.Renderer.html\" title=\"trait iced_graphics::geometry::Renderer\">Renderer</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/cache.rs.html#113\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"iced_graphics/geometry/cache/struct.Cache.html\" title=\"struct iced_graphics::geometry::cache::Cache\">Cache</a>&lt;Renderer&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","iced::widget::canvas::Cache"]],
"iced_widget":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Cache%3CRenderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/cache.rs.html#24-26\">source</a><a href=\"#impl-Cache%3CRenderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Renderer&gt; <a class=\"struct\" href=\"iced_graphics/geometry/cache/struct.Cache.html\" title=\"struct iced_graphics::geometry::cache::Cache\">Cache</a>&lt;Renderer&gt;<div class=\"where\">where\n    Renderer: <a class=\"trait\" href=\"iced_graphics/geometry/trait.Renderer.html\" title=\"trait iced_graphics::geometry::Renderer\">Renderer</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/cache.rs.html#29\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/cache/struct.Cache.html#tymethod.new\" class=\"fn\">new</a>() -&gt; <a class=\"struct\" href=\"iced_graphics/geometry/cache/struct.Cache.html\" title=\"struct iced_graphics::geometry::cache::Cache\">Cache</a>&lt;Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new empty <a href=\"iced_graphics/geometry/cache/struct.Cache.html\" title=\"struct iced_graphics::geometry::cache::Cache\"><code>Cache</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_group\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/cache.rs.html#41\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/cache/struct.Cache.html#tymethod.with_group\" class=\"fn\">with_group</a>(group: <a class=\"struct\" href=\"iced_widget/canvas/struct.Group.html\" title=\"struct iced_widget::canvas::Group\">Group</a>) -&gt; <a class=\"struct\" href=\"iced_graphics/geometry/cache/struct.Cache.html\" title=\"struct iced_graphics::geometry::cache::Cache\">Cache</a>&lt;Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new empty <a href=\"iced_graphics/geometry/cache/struct.Cache.html\" title=\"struct iced_graphics::geometry::cache::Cache\"><code>Cache</code></a> with the given <a href=\"iced_widget/canvas/struct.Group.html\" title=\"struct iced_widget::canvas::Group\"><code>Group</code></a>.</p>\n<p>Caches within the same group may reuse internal rendering storage.</p>\n<p>You should generally group caches that are likely to change\ntogether.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clear\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/cache.rs.html#48\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/cache/struct.Cache.html#tymethod.clear\" class=\"fn\">clear</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Clears the <a href=\"iced_graphics/geometry/cache/struct.Cache.html\" title=\"struct iced_graphics::geometry::cache::Cache\"><code>Cache</code></a>, forcing a redraw the next time it is used.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.draw\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/cache.rs.html#62-67\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/cache/struct.Cache.html#tymethod.draw\" class=\"fn\">draw</a>(\n    &amp;self,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Renderer</a>,\n    bounds: <a class=\"struct\" href=\"iced_core/size/struct.Size.html\" title=\"struct iced_core::size::Size\">Size</a>,\n    draw_fn: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;mut <a class=\"struct\" href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\">Frame</a>&lt;Renderer&gt;)\n) -&gt; &lt;Renderer as <a class=\"trait\" href=\"iced_graphics/geometry/trait.Renderer.html\" title=\"trait iced_graphics::geometry::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"iced_graphics/geometry/trait.Renderer.html#associatedtype.Geometry\" title=\"type iced_graphics::geometry::Renderer::Geometry\">Geometry</a></h4></section></summary><div class=\"docblock\"><p>Draws geometry using the provided closure and stores it in the\n<a href=\"iced_graphics/geometry/cache/struct.Cache.html\" title=\"struct iced_graphics::geometry::cache::Cache\"><code>Cache</code></a>.</p>\n<p>The closure will only be called when</p>\n<ul>\n<li>the bounds have changed since the previous draw call.</li>\n<li>the <a href=\"iced_graphics/geometry/cache/struct.Cache.html\" title=\"struct iced_graphics::geometry::cache::Cache\"><code>Cache</code></a> is empty or has been explicitly cleared.</li>\n</ul>\n<p>Otherwise, the previously stored geometry will be returned. The\n<a href=\"iced_graphics/geometry/cache/struct.Cache.html\" title=\"struct iced_graphics::geometry::cache::Cache\"><code>Cache</code></a> is not cleared in this case. In other words, it will keep\nreturning the stored geometry if needed.</p>\n</div></details></div></details>",0,"iced_widget::canvas::Cache"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Cache%3CRenderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/cache.rs.html#99-102\">source</a><a href=\"#impl-Debug-for-Cache%3CRenderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Renderer&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"iced_graphics/geometry/cache/struct.Cache.html\" title=\"struct iced_graphics::geometry::cache::Cache\">Cache</a>&lt;Renderer&gt;<div class=\"where\">where\n    Renderer: <a class=\"trait\" href=\"iced_graphics/geometry/trait.Renderer.html\" title=\"trait iced_graphics::geometry::Renderer\">Renderer</a>,\n    &lt;&lt;Renderer as <a class=\"trait\" href=\"iced_graphics/geometry/trait.Renderer.html\" title=\"trait iced_graphics::geometry::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"iced_graphics/geometry/trait.Renderer.html#associatedtype.Geometry\" title=\"type iced_graphics::geometry::Renderer::Geometry\">Geometry</a> as <a class=\"trait\" href=\"iced_graphics/cache/trait.Cached.html\" title=\"trait iced_graphics::cache::Cached\">Cached</a>&gt;::<a class=\"associatedtype\" href=\"iced_graphics/cache/trait.Cached.html#associatedtype.Cache\" title=\"type iced_graphics::cache::Cached::Cache\">Cache</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/cache.rs.html#104\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","iced_widget::canvas::Cache"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Cache%3CRenderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/cache.rs.html#109-111\">source</a><a href=\"#impl-Default-for-Cache%3CRenderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Renderer&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"iced_graphics/geometry/cache/struct.Cache.html\" title=\"struct iced_graphics::geometry::cache::Cache\">Cache</a>&lt;Renderer&gt;<div class=\"where\">where\n    Renderer: <a class=\"trait\" href=\"iced_graphics/geometry/trait.Renderer.html\" title=\"trait iced_graphics::geometry::Renderer\">Renderer</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/cache.rs.html#113\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"iced_graphics/geometry/cache/struct.Cache.html\" title=\"struct iced_graphics::geometry::cache::Cache\">Cache</a>&lt;Renderer&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","iced_widget::canvas::Cache"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()