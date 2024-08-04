(function() {var type_impls = {
"iced":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Frame%3CRenderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#14-16\">source</a><a href=\"#impl-Frame%3CRenderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Renderer&gt; <a class=\"struct\" href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\">Frame</a>&lt;Renderer&gt;<div class=\"where\">where\n    Renderer: <a class=\"trait\" href=\"iced_graphics/geometry/trait.Renderer.html\" title=\"trait iced_graphics::geometry::Renderer\">Renderer</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#19\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.new\" class=\"fn\">new</a>(renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Renderer</a>, size: <a class=\"struct\" href=\"iced/struct.Size.html\" title=\"struct iced::Size\">Size</a>) -&gt; <a class=\"struct\" href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\">Frame</a>&lt;Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a> with the given dimensions.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.width\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#26\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.width\" class=\"fn\">width</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f32.html\">f32</a></h4></section></summary><div class=\"docblock\"><p>Returns the width of the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.height\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#31\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.height\" class=\"fn\">height</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f32.html\">f32</a></h4></section></summary><div class=\"docblock\"><p>Returns the height of the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#36\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.size\" class=\"fn\">size</a>(&amp;self) -&gt; <a class=\"struct\" href=\"iced/struct.Size.html\" title=\"struct iced::Size\">Size</a></h4></section></summary><div class=\"docblock\"><p>Returns the dimensions of the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.center\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#41\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.center\" class=\"fn\">center</a>(&amp;self) -&gt; <a class=\"struct\" href=\"iced/struct.Point.html\" title=\"struct iced::Point\">Point</a></h4></section></summary><div class=\"docblock\"><p>Returns the coordinate of the center of the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fill\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#47\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.fill\" class=\"fn\">fill</a>(&amp;mut self, path: &amp;<a class=\"struct\" href=\"iced/widget/canvas/struct.Path.html\" title=\"struct iced::widget::canvas::Path\">Path</a>, fill: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced/widget/canvas/struct.Fill.html\" title=\"struct iced::widget::canvas::Fill\">Fill</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Draws the given <a href=\"iced/widget/canvas/struct.Path.html\" title=\"struct iced::widget::canvas::Path\"><code>Path</code></a> on the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a> by filling it with the\nprovided style.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fill_rectangle\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#53-58\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.fill_rectangle\" class=\"fn\">fill_rectangle</a>(\n    &amp;mut self,\n    top_left: <a class=\"struct\" href=\"iced/struct.Point.html\" title=\"struct iced::Point\">Point</a>,\n    size: <a class=\"struct\" href=\"iced/struct.Size.html\" title=\"struct iced::Size\">Size</a>,\n    fill: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced/widget/canvas/struct.Fill.html\" title=\"struct iced::widget::canvas::Fill\">Fill</a>&gt;,\n)</h4></section></summary><div class=\"docblock\"><p>Draws an axis-aligned rectangle given its top-left corner coordinate and\nits <code>Size</code> on the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a> by filling it with the provided style.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.stroke\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#64\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.stroke\" class=\"fn\">stroke</a>&lt;'a&gt;(&amp;mut self, path: &amp;<a class=\"struct\" href=\"iced/widget/canvas/struct.Path.html\" title=\"struct iced::widget::canvas::Path\">Path</a>, stroke: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced/widget/canvas/struct.Stroke.html\" title=\"struct iced::widget::canvas::Stroke\">Stroke</a>&lt;'a&gt;&gt;)</h4></section></summary><div class=\"docblock\"><p>Draws the stroke of the given <a href=\"iced/widget/canvas/struct.Path.html\" title=\"struct iced::widget::canvas::Path\"><code>Path</code></a> on the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a> with the\nprovided style.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fill_text\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#74\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.fill_text\" class=\"fn\">fill_text</a>(&amp;mut self, text: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced/widget/canvas/struct.Text.html\" title=\"struct iced::widget::canvas::Text\">Text</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Draws the characters of the given <a href=\"iced/widget/canvas/struct.Text.html\" title=\"struct iced::widget::canvas::Text\"><code>Text</code></a> on the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a>, filling\nthem with the given color.</p>\n<p><strong>Warning:</strong> All text will be rendered on top of all the layers of\na <code>Canvas</code>. Therefore, it is currently only meant to be used for\noverlays, which is the most common use case.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.draw_image\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#80\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.draw_image\" class=\"fn\">draw_image</a>(&amp;mut self, bounds: <a class=\"struct\" href=\"iced/struct.Rectangle.html\" title=\"struct iced::Rectangle\">Rectangle</a>, image: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced/widget/canvas/struct.Image.html\" title=\"struct iced::widget::canvas::Image\">Image</a>&gt;)</h4></section><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>image</code></strong> only.</div></span></summary><div class=\"docblock\"><p>Draws the given <a href=\"iced/widget/canvas/struct.Image.html\" title=\"struct iced::widget::canvas::Image\"><code>Image</code></a> on the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a> inside the given bounds.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.draw_svg\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#86\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.draw_svg\" class=\"fn\">draw_svg</a>(&amp;mut self, bounds: <a class=\"struct\" href=\"iced/struct.Rectangle.html\" title=\"struct iced::Rectangle\">Rectangle</a>, svg: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced/advanced/svg/struct.Svg.html\" title=\"struct iced::advanced::svg::Svg\">Svg</a>&gt;)</h4></section><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>svg</code></strong> only.</div></span></summary><div class=\"docblock\"><p>Draws the given <a href=\"iced/advanced/svg/struct.Svg.html\" title=\"struct iced::advanced::svg::Svg\"><code>Svg</code></a> on the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a> inside the given bounds.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_save\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#96\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.with_save\" class=\"fn\">with_save</a>&lt;R&gt;(&amp;mut self, f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;mut <a class=\"struct\" href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\">Frame</a>&lt;Renderer&gt;) -&gt; R) -&gt; R</h4></section></summary><div class=\"docblock\"><p>Stores the current transform of the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a> and executes the given\ndrawing operations, restoring the transform afterwards.</p>\n<p>This method is useful to compose transforms and perform drawing\noperations in different coordinate systems.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.push_transform\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#107\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.push_transform\" class=\"fn\">push_transform</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Pushes the current transform in the transform stack.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.pop_transform\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#112\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.pop_transform\" class=\"fn\">pop_transform</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Pops a transform from the transform stack and sets it as the current transform.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_clip\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#123-127\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.with_clip\" class=\"fn\">with_clip</a>&lt;R&gt;(\n    &amp;mut self,\n    region: <a class=\"struct\" href=\"iced/struct.Rectangle.html\" title=\"struct iced::Rectangle\">Rectangle</a>,\n    f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;mut <a class=\"struct\" href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\">Frame</a>&lt;Renderer&gt;) -&gt; R,\n) -&gt; R</h4></section></summary><div class=\"docblock\"><p>Executes the given drawing operations within a <a href=\"iced/struct.Rectangle.html\" title=\"struct iced::Rectangle\"><code>Rectangle</code></a> region,\nclipping any geometry that overflows its bounds. Any transformations\nperformed are local to the provided closure.</p>\n<p>This method is useful to perform drawing operations that need to be\nclipped.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.translate\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#153\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.translate\" class=\"fn\">translate</a>(&amp;mut self, translation: <a class=\"struct\" href=\"iced/struct.Vector.html\" title=\"struct iced::Vector\">Vector</a>)</h4></section></summary><div class=\"docblock\"><p>Applies a translation to the current transform of the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.rotate\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#158\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.rotate\" class=\"fn\">rotate</a>(&amp;mut self, angle: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced/struct.Radians.html\" title=\"struct iced::Radians\">Radians</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Applies a rotation in radians to the current transform of the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.scale\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#163\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.scale\" class=\"fn\">scale</a>(&amp;mut self, scale: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f32.html\">f32</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Applies a uniform scaling to the current transform of the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.scale_nonuniform\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#168\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.scale_nonuniform\" class=\"fn\">scale_nonuniform</a>(&amp;mut self, scale: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced/struct.Vector.html\" title=\"struct iced::Vector\">Vector</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Applies a non-uniform scaling to the current transform of the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_geometry\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#173\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.into_geometry\" class=\"fn\">into_geometry</a>(self) -&gt; &lt;Renderer as <a class=\"trait\" href=\"iced_graphics/geometry/trait.Renderer.html\" title=\"trait iced_graphics::geometry::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"iced_graphics/geometry/trait.Renderer.html#associatedtype.Geometry\" title=\"type iced_graphics::geometry::Renderer::Geometry\">Geometry</a></h4></section></summary><div class=\"docblock\"><p>Turns the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a> into its underlying geometry.</p>\n</div></details></div></details>",0,"iced::widget::canvas::Frame"]],
"iced_widget":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Frame%3CRenderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#14-16\">source</a><a href=\"#impl-Frame%3CRenderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Renderer&gt; <a class=\"struct\" href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\">Frame</a>&lt;Renderer&gt;<div class=\"where\">where\n    Renderer: <a class=\"trait\" href=\"iced_graphics/geometry/trait.Renderer.html\" title=\"trait iced_graphics::geometry::Renderer\">Renderer</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#19\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.new\" class=\"fn\">new</a>(renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Renderer</a>, size: <a class=\"struct\" href=\"iced_core/size/struct.Size.html\" title=\"struct iced_core::size::Size\">Size</a>) -&gt; <a class=\"struct\" href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\">Frame</a>&lt;Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a> with the given dimensions.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.width\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#26\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.width\" class=\"fn\">width</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f32.html\">f32</a></h4></section></summary><div class=\"docblock\"><p>Returns the width of the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.height\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#31\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.height\" class=\"fn\">height</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f32.html\">f32</a></h4></section></summary><div class=\"docblock\"><p>Returns the height of the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#36\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.size\" class=\"fn\">size</a>(&amp;self) -&gt; <a class=\"struct\" href=\"iced_core/size/struct.Size.html\" title=\"struct iced_core::size::Size\">Size</a></h4></section></summary><div class=\"docblock\"><p>Returns the dimensions of the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.center\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#41\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.center\" class=\"fn\">center</a>(&amp;self) -&gt; <a class=\"struct\" href=\"iced_core/point/struct.Point.html\" title=\"struct iced_core::point::Point\">Point</a></h4></section></summary><div class=\"docblock\"><p>Returns the coordinate of the center of the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fill\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#47\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.fill\" class=\"fn\">fill</a>(&amp;mut self, path: &amp;<a class=\"struct\" href=\"iced_widget/canvas/struct.Path.html\" title=\"struct iced_widget::canvas::Path\">Path</a>, fill: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced_widget/canvas/struct.Fill.html\" title=\"struct iced_widget::canvas::Fill\">Fill</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Draws the given <a href=\"iced_widget/canvas/struct.Path.html\" title=\"struct iced_widget::canvas::Path\"><code>Path</code></a> on the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a> by filling it with the\nprovided style.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fill_rectangle\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#53-58\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.fill_rectangle\" class=\"fn\">fill_rectangle</a>(\n    &amp;mut self,\n    top_left: <a class=\"struct\" href=\"iced_core/point/struct.Point.html\" title=\"struct iced_core::point::Point\">Point</a>,\n    size: <a class=\"struct\" href=\"iced_core/size/struct.Size.html\" title=\"struct iced_core::size::Size\">Size</a>,\n    fill: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced_widget/canvas/struct.Fill.html\" title=\"struct iced_widget::canvas::Fill\">Fill</a>&gt;,\n)</h4></section></summary><div class=\"docblock\"><p>Draws an axis-aligned rectangle given its top-left corner coordinate and\nits <code>Size</code> on the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a> by filling it with the provided style.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.stroke\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#64\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.stroke\" class=\"fn\">stroke</a>&lt;'a&gt;(&amp;mut self, path: &amp;<a class=\"struct\" href=\"iced_widget/canvas/struct.Path.html\" title=\"struct iced_widget::canvas::Path\">Path</a>, stroke: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced_widget/canvas/struct.Stroke.html\" title=\"struct iced_widget::canvas::Stroke\">Stroke</a>&lt;'a&gt;&gt;)</h4></section></summary><div class=\"docblock\"><p>Draws the stroke of the given <a href=\"iced_widget/canvas/struct.Path.html\" title=\"struct iced_widget::canvas::Path\"><code>Path</code></a> on the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a> with the\nprovided style.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fill_text\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#74\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.fill_text\" class=\"fn\">fill_text</a>(&amp;mut self, text: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced_widget/canvas/struct.Text.html\" title=\"struct iced_widget::canvas::Text\">Text</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Draws the characters of the given <a href=\"iced_widget/canvas/struct.Text.html\" title=\"struct iced_widget::canvas::Text\"><code>Text</code></a> on the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a>, filling\nthem with the given color.</p>\n<p><strong>Warning:</strong> All text will be rendered on top of all the layers of\na <code>Canvas</code>. Therefore, it is currently only meant to be used for\noverlays, which is the most common use case.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.draw_image\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#80\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.draw_image\" class=\"fn\">draw_image</a>(&amp;mut self, bounds: <a class=\"struct\" href=\"iced_core/rectangle/struct.Rectangle.html\" title=\"struct iced_core::rectangle::Rectangle\">Rectangle</a>, image: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced_widget/canvas/struct.Image.html\" title=\"struct iced_widget::canvas::Image\">Image</a>&gt;)</h4></section><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>image</code></strong> only.</div></span></summary><div class=\"docblock\"><p>Draws the given <a href=\"iced_widget/canvas/struct.Image.html\" title=\"struct iced_widget::canvas::Image\"><code>Image</code></a> on the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a> inside the given bounds.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.draw_svg\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#86\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.draw_svg\" class=\"fn\">draw_svg</a>(&amp;mut self, bounds: <a class=\"struct\" href=\"iced_core/rectangle/struct.Rectangle.html\" title=\"struct iced_core::rectangle::Rectangle\">Rectangle</a>, svg: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced_core/svg/struct.Svg.html\" title=\"struct iced_core::svg::Svg\">Svg</a>&gt;)</h4></section><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>svg</code></strong> only.</div></span></summary><div class=\"docblock\"><p>Draws the given <a href=\"iced_core/svg/struct.Svg.html\" title=\"struct iced_core::svg::Svg\"><code>Svg</code></a> on the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a> inside the given bounds.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_save\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#96\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.with_save\" class=\"fn\">with_save</a>&lt;R&gt;(&amp;mut self, f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;mut <a class=\"struct\" href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\">Frame</a>&lt;Renderer&gt;) -&gt; R) -&gt; R</h4></section></summary><div class=\"docblock\"><p>Stores the current transform of the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a> and executes the given\ndrawing operations, restoring the transform afterwards.</p>\n<p>This method is useful to compose transforms and perform drawing\noperations in different coordinate systems.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.push_transform\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#107\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.push_transform\" class=\"fn\">push_transform</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Pushes the current transform in the transform stack.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.pop_transform\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#112\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.pop_transform\" class=\"fn\">pop_transform</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Pops a transform from the transform stack and sets it as the current transform.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_clip\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#123-127\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.with_clip\" class=\"fn\">with_clip</a>&lt;R&gt;(\n    &amp;mut self,\n    region: <a class=\"struct\" href=\"iced_core/rectangle/struct.Rectangle.html\" title=\"struct iced_core::rectangle::Rectangle\">Rectangle</a>,\n    f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;mut <a class=\"struct\" href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\">Frame</a>&lt;Renderer&gt;) -&gt; R,\n) -&gt; R</h4></section></summary><div class=\"docblock\"><p>Executes the given drawing operations within a <a href=\"iced_core/rectangle/struct.Rectangle.html\" title=\"struct iced_core::rectangle::Rectangle\"><code>Rectangle</code></a> region,\nclipping any geometry that overflows its bounds. Any transformations\nperformed are local to the provided closure.</p>\n<p>This method is useful to perform drawing operations that need to be\nclipped.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.translate\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#153\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.translate\" class=\"fn\">translate</a>(&amp;mut self, translation: <a class=\"struct\" href=\"iced_core/vector/struct.Vector.html\" title=\"struct iced_core::vector::Vector\">Vector</a>)</h4></section></summary><div class=\"docblock\"><p>Applies a translation to the current transform of the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.rotate\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#158\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.rotate\" class=\"fn\">rotate</a>(&amp;mut self, angle: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced_core/angle/struct.Radians.html\" title=\"struct iced_core::angle::Radians\">Radians</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Applies a rotation in radians to the current transform of the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.scale\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#163\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.scale\" class=\"fn\">scale</a>(&amp;mut self, scale: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f32.html\">f32</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Applies a uniform scaling to the current transform of the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.scale_nonuniform\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#168\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.scale_nonuniform\" class=\"fn\">scale_nonuniform</a>(&amp;mut self, scale: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced_core/vector/struct.Vector.html\" title=\"struct iced_core::vector::Vector\">Vector</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Applies a non-uniform scaling to the current transform of the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_geometry\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_graphics/geometry/frame.rs.html#173\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_graphics/geometry/frame/struct.Frame.html#tymethod.into_geometry\" class=\"fn\">into_geometry</a>(self) -&gt; &lt;Renderer as <a class=\"trait\" href=\"iced_graphics/geometry/trait.Renderer.html\" title=\"trait iced_graphics::geometry::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"iced_graphics/geometry/trait.Renderer.html#associatedtype.Geometry\" title=\"type iced_graphics::geometry::Renderer::Geometry\">Geometry</a></h4></section></summary><div class=\"docblock\"><p>Turns the <a href=\"iced_graphics/geometry/frame/struct.Frame.html\" title=\"struct iced_graphics::geometry::frame::Frame\"><code>Frame</code></a> into its underlying geometry.</p>\n</div></details></div></details>",0,"iced_widget::canvas::Frame"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()