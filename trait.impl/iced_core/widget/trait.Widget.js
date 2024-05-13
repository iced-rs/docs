(function() {var implementors = {
"iced":[],
"iced_core":[],
"iced_widget":[["impl&lt;P, Message, Theme, Renderer&gt; <a class=\"trait\" href=\"iced_core/widget/trait.Widget.html\" title=\"trait iced_core::widget::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"iced_widget/shader/struct.Shader.html\" title=\"struct iced_widget::shader::Shader\">Shader</a>&lt;Message, P&gt;<div class=\"where\">where\n    P: <a class=\"trait\" href=\"iced_widget/shader/trait.Program.html\" title=\"trait iced_widget::shader::Program\">Program</a>&lt;Message&gt;,\n    Renderer: <a class=\"trait\" href=\"iced_wgpu/primitive/trait.Renderer.html\" title=\"trait iced_wgpu::primitive::Renderer\">Renderer</a>,</div>"],["impl&lt;'a, Message, Theme, Renderer&gt; <a class=\"trait\" href=\"iced_core/widget/trait.Widget.html\" title=\"trait iced_core::widget::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"iced_widget/struct.Responsive.html\" title=\"struct iced_widget::Responsive\">Responsive</a>&lt;'a, Message, Theme, Renderer&gt;<div class=\"where\">where\n    Renderer: <a class=\"trait\" href=\"iced_core/renderer/trait.Renderer.html\" title=\"trait iced_core::renderer::Renderer\">Renderer</a>,</div>"],["impl&lt;Message, Theme, Renderer, Handle&gt; <a class=\"trait\" href=\"iced_core/widget/trait.Widget.html\" title=\"trait iced_core::widget::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"iced_widget/image/viewer/struct.Viewer.html\" title=\"struct iced_widget::image::viewer::Viewer\">Viewer</a>&lt;Handle&gt;<div class=\"where\">where\n    Renderer: <a class=\"trait\" href=\"iced_core/image/trait.Renderer.html\" title=\"trait iced_core::image::Renderer\">Renderer</a>&lt;Handle = Handle&gt;,\n    Handle: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div>"],["impl&lt;'a, T, Message, Theme, Renderer&gt; <a class=\"trait\" href=\"iced_core/widget/trait.Widget.html\" title=\"trait iced_core::widget::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"iced_widget/combo_box/struct.ComboBox.html\" title=\"struct iced_widget::combo_box::ComboBox\">ComboBox</a>&lt;'a, T, Message, Theme, Renderer&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + 'static,\n    Message: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Theme: <a class=\"trait\" href=\"iced_widget/combo_box/trait.Catalog.html\" title=\"trait iced_widget::combo_box::Catalog\">Catalog</a>,\n    Renderer: <a class=\"trait\" href=\"iced_core/text/trait.Renderer.html\" title=\"trait iced_core::text::Renderer\">Renderer</a>,</div>"],["impl&lt;'a, Message, Theme, Renderer&gt; <a class=\"trait\" href=\"iced_core/widget/trait.Widget.html\" title=\"trait iced_core::widget::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"iced_widget/checkbox/struct.Checkbox.html\" title=\"struct iced_widget::checkbox::Checkbox\">Checkbox</a>&lt;'a, Message, Theme, Renderer&gt;<div class=\"where\">where\n    Renderer: <a class=\"trait\" href=\"iced_core/text/trait.Renderer.html\" title=\"trait iced_core::text::Renderer\">Renderer</a>,\n    Theme: <a class=\"trait\" href=\"iced_widget/checkbox/trait.Catalog.html\" title=\"trait iced_widget::checkbox::Catalog\">Catalog</a>,</div>"],["impl&lt;'a, Highlighter, Message, Theme, Renderer&gt; <a class=\"trait\" href=\"iced_core/widget/trait.Widget.html\" title=\"trait iced_core::widget::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"iced_widget/text_editor/struct.TextEditor.html\" title=\"struct iced_widget::text_editor::TextEditor\">TextEditor</a>&lt;'a, Highlighter, Message, Theme, Renderer&gt;<div class=\"where\">where\n    Highlighter: <a class=\"trait\" href=\"iced_core/text/highlighter/trait.Highlighter.html\" title=\"trait iced_core::text::highlighter::Highlighter\">Highlighter</a>,\n    Theme: <a class=\"trait\" href=\"iced_widget/text_editor/trait.Catalog.html\" title=\"trait iced_widget::text_editor::Catalog\">Catalog</a>,\n    Renderer: <a class=\"trait\" href=\"iced_core/text/trait.Renderer.html\" title=\"trait iced_core::text::Renderer\">Renderer</a>,</div>"],["impl&lt;'a, Message, Theme, Renderer&gt; <a class=\"trait\" href=\"iced_core/widget/trait.Widget.html\" title=\"trait iced_core::widget::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"iced_widget/button/struct.Button.html\" title=\"struct iced_widget::button::Button\">Button</a>&lt;'a, Message, Theme, Renderer&gt;<div class=\"where\">where\n    Message: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Renderer: 'a + <a class=\"trait\" href=\"iced_core/renderer/trait.Renderer.html\" title=\"trait iced_core::renderer::Renderer\">Renderer</a>,\n    Theme: <a class=\"trait\" href=\"iced_widget/button/trait.Catalog.html\" title=\"trait iced_widget::button::Catalog\">Catalog</a>,</div>"],["impl&lt;'a, Message, Theme, Renderer&gt; <a class=\"trait\" href=\"iced_core/widget/trait.Widget.html\" title=\"trait iced_core::widget::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"iced_widget/progress_bar/struct.ProgressBar.html\" title=\"struct iced_widget::progress_bar::ProgressBar\">ProgressBar</a>&lt;'a, Theme&gt;<div class=\"where\">where\n    Theme: <a class=\"trait\" href=\"iced_widget/progress_bar/trait.Catalog.html\" title=\"trait iced_widget::progress_bar::Catalog\">Catalog</a>,\n    Renderer: <a class=\"trait\" href=\"iced_core/renderer/trait.Renderer.html\" title=\"trait iced_core::renderer::Renderer\">Renderer</a>,</div>"],["impl&lt;'a, Message, Theme, Renderer&gt; <a class=\"trait\" href=\"iced_core/widget/trait.Widget.html\" title=\"trait iced_core::widget::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"iced_widget/rule/struct.Rule.html\" title=\"struct iced_widget::rule::Rule\">Rule</a>&lt;'a, Theme&gt;<div class=\"where\">where\n    Renderer: <a class=\"trait\" href=\"iced_core/renderer/trait.Renderer.html\" title=\"trait iced_core::renderer::Renderer\">Renderer</a>,\n    Theme: <a class=\"trait\" href=\"iced_widget/rule/trait.Catalog.html\" title=\"trait iced_widget::rule::Catalog\">Catalog</a>,</div>"],["impl&lt;'a, Message, Theme, Renderer&gt; <a class=\"trait\" href=\"iced_core/widget/trait.Widget.html\" title=\"trait iced_core::widget::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"iced_widget/toggler/struct.Toggler.html\" title=\"struct iced_widget::toggler::Toggler\">Toggler</a>&lt;'a, Message, Theme, Renderer&gt;<div class=\"where\">where\n    Theme: <a class=\"trait\" href=\"iced_widget/toggler/trait.Catalog.html\" title=\"trait iced_widget::toggler::Catalog\">Catalog</a>,\n    Renderer: <a class=\"trait\" href=\"iced_core/text/trait.Renderer.html\" title=\"trait iced_core::text::Renderer\">Renderer</a>,</div>"],["impl&lt;'a, Message, Theme, Renderer&gt; <a class=\"trait\" href=\"iced_core/widget/trait.Widget.html\" title=\"trait iced_core::widget::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"iced_widget/container/struct.Container.html\" title=\"struct iced_widget::container::Container\">Container</a>&lt;'a, Message, Theme, Renderer&gt;<div class=\"where\">where\n    Theme: <a class=\"trait\" href=\"iced_widget/container/trait.Catalog.html\" title=\"trait iced_widget::container::Catalog\">Catalog</a>,\n    Renderer: <a class=\"trait\" href=\"iced_core/renderer/trait.Renderer.html\" title=\"trait iced_core::renderer::Renderer\">Renderer</a>,</div>"],["impl&lt;'a, T, Message, Theme, Renderer&gt; <a class=\"trait\" href=\"iced_core/widget/trait.Widget.html\" title=\"trait iced_core::widget::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"iced_widget/slider/struct.Slider.html\" title=\"struct iced_widget::slider::Slider\">Slider</a>&lt;'a, T, Message, Theme&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; + <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/cast/trait.FromPrimitive.html\" title=\"trait num_traits::cast::FromPrimitive\">FromPrimitive</a>,\n    Message: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Theme: <a class=\"trait\" href=\"iced_widget/slider/trait.Catalog.html\" title=\"trait iced_widget::slider::Catalog\">Catalog</a>,\n    Renderer: <a class=\"trait\" href=\"iced_core/renderer/trait.Renderer.html\" title=\"trait iced_core::renderer::Renderer\">Renderer</a>,</div>"],["impl&lt;'a, Message, Theme, Renderer&gt; <a class=\"trait\" href=\"iced_core/widget/trait.Widget.html\" title=\"trait iced_core::widget::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"iced_widget/text_input/struct.TextInput.html\" title=\"struct iced_widget::text_input::TextInput\">TextInput</a>&lt;'a, Message, Theme, Renderer&gt;<div class=\"where\">where\n    Message: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Theme: <a class=\"trait\" href=\"iced_widget/text_input/trait.Catalog.html\" title=\"trait iced_widget::text_input::Catalog\">Catalog</a>,\n    Renderer: <a class=\"trait\" href=\"iced_core/text/trait.Renderer.html\" title=\"trait iced_core::text::Renderer\">Renderer</a>,</div>"],["impl&lt;'a, Message, Theme, Renderer&gt; <a class=\"trait\" href=\"iced_core/widget/trait.Widget.html\" title=\"trait iced_core::widget::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"iced_widget/svg/struct.Svg.html\" title=\"struct iced_widget::svg::Svg\">Svg</a>&lt;'a, Theme&gt;<div class=\"where\">where\n    Renderer: <a class=\"trait\" href=\"iced_core/svg/trait.Renderer.html\" title=\"trait iced_core::svg::Renderer\">Renderer</a>,\n    Theme: <a class=\"trait\" href=\"iced_widget/svg/trait.Catalog.html\" title=\"trait iced_widget::svg::Catalog\">Catalog</a>,</div>"],["impl&lt;'a, T, Message, Theme, Renderer&gt; <a class=\"trait\" href=\"iced_core/widget/trait.Widget.html\" title=\"trait iced_core::widget::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"iced_widget/vertical_slider/struct.VerticalSlider.html\" title=\"struct iced_widget::vertical_slider::VerticalSlider\">VerticalSlider</a>&lt;'a, T, Message, Theme&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; + <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/cast/trait.FromPrimitive.html\" title=\"trait num_traits::cast::FromPrimitive\">FromPrimitive</a>,\n    Message: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Theme: <a class=\"trait\" href=\"iced_widget/slider/trait.Catalog.html\" title=\"trait iced_widget::slider::Catalog\">Catalog</a>,\n    Renderer: <a class=\"trait\" href=\"iced_core/renderer/trait.Renderer.html\" title=\"trait iced_core::renderer::Renderer\">Renderer</a>,</div>"],["impl&lt;'a, Message, Theme, Renderer&gt; <a class=\"trait\" href=\"iced_core/widget/trait.Widget.html\" title=\"trait iced_core::widget::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"iced_widget/tooltip/struct.Tooltip.html\" title=\"struct iced_widget::tooltip::Tooltip\">Tooltip</a>&lt;'a, Message, Theme, Renderer&gt;<div class=\"where\">where\n    Theme: <a class=\"trait\" href=\"iced_widget/container/trait.Catalog.html\" title=\"trait iced_widget::container::Catalog\">Catalog</a>,\n    Renderer: <a class=\"trait\" href=\"iced_core/text/trait.Renderer.html\" title=\"trait iced_core::text::Renderer\">Renderer</a>,</div>"],["impl&lt;'a, Message, Theme, Renderer, Dependency, View&gt; <a class=\"trait\" href=\"iced_core/widget/trait.Widget.html\" title=\"trait iced_core::widget::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"iced_widget/struct.Lazy.html\" title=\"struct iced_widget::Lazy\">Lazy</a>&lt;'a, Message, Theme, Renderer, Dependency, View&gt;<div class=\"where\">where\n    View: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced_core/element/struct.Element.html\" title=\"struct iced_core::element::Element\">Element</a>&lt;'static, Message, Theme, Renderer&gt;&gt; + 'static,\n    Dependency: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + 'a,\n    Message: 'static,\n    Theme: 'static,\n    Renderer: <a class=\"trait\" href=\"iced_core/renderer/trait.Renderer.html\" title=\"trait iced_core::renderer::Renderer\">Renderer</a> + 'static,</div>"],["impl&lt;'a, Message, Theme, Renderer&gt; <a class=\"trait\" href=\"iced_core/widget/trait.Widget.html\" title=\"trait iced_core::widget::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"iced_widget/radio/struct.Radio.html\" title=\"struct iced_widget::radio::Radio\">Radio</a>&lt;'a, Message, Theme, Renderer&gt;<div class=\"where\">where\n    Message: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Theme: <a class=\"trait\" href=\"iced_widget/radio/trait.Catalog.html\" title=\"trait iced_widget::radio::Catalog\">Catalog</a>,\n    Renderer: <a class=\"trait\" href=\"iced_core/text/trait.Renderer.html\" title=\"trait iced_core::text::Renderer\">Renderer</a>,</div>"],["impl&lt;P, Message, Theme, Renderer&gt; <a class=\"trait\" href=\"iced_core/widget/trait.Widget.html\" title=\"trait iced_core::widget::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"iced_widget/canvas/struct.Canvas.html\" title=\"struct iced_widget::canvas::Canvas\">Canvas</a>&lt;P, Message, Theme, Renderer&gt;<div class=\"where\">where\n    Renderer: <a class=\"trait\" href=\"iced_graphics/geometry/trait.Renderer.html\" title=\"trait iced_graphics::geometry::Renderer\">Renderer</a>,\n    P: <a class=\"trait\" href=\"iced_widget/canvas/trait.Program.html\" title=\"trait iced_widget::canvas::Program\">Program</a>&lt;Message, Theme, Renderer&gt;,</div>"],["impl&lt;'a, Message, Theme&gt; <a class=\"trait\" href=\"iced_core/widget/trait.Widget.html\" title=\"trait iced_core::widget::Widget\">Widget</a>&lt;Message, Theme, <a class=\"enum\" href=\"iced_renderer/fallback/enum.Renderer.html\" title=\"enum iced_renderer::fallback::Renderer\">Renderer</a>&lt;<a class=\"struct\" href=\"iced_wgpu/struct.Renderer.html\" title=\"struct iced_wgpu::Renderer\">Renderer</a>, <a class=\"struct\" href=\"iced_tiny_skia/struct.Renderer.html\" title=\"struct iced_tiny_skia::Renderer\">Renderer</a>&gt;&gt; for <a class=\"struct\" href=\"iced_widget/qr_code/struct.QRCode.html\" title=\"struct iced_widget::qr_code::QRCode\">QRCode</a>&lt;'a, Theme&gt;<div class=\"where\">where\n    Theme: <a class=\"trait\" href=\"iced_widget/qr_code/trait.Catalog.html\" title=\"trait iced_widget::qr_code::Catalog\">Catalog</a>,</div>"],["impl&lt;'a, Message, Theme, Renderer&gt; <a class=\"trait\" href=\"iced_core/widget/trait.Widget.html\" title=\"trait iced_core::widget::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"iced_widget/scrollable/struct.Scrollable.html\" title=\"struct iced_widget::scrollable::Scrollable\">Scrollable</a>&lt;'a, Message, Theme, Renderer&gt;<div class=\"where\">where\n    Theme: <a class=\"trait\" href=\"iced_widget/scrollable/trait.Catalog.html\" title=\"trait iced_widget::scrollable::Catalog\">Catalog</a>,\n    Renderer: <a class=\"trait\" href=\"iced_core/renderer/trait.Renderer.html\" title=\"trait iced_core::renderer::Renderer\">Renderer</a>,</div>"],["impl&lt;'a, Key, Message, Theme, Renderer&gt; <a class=\"trait\" href=\"iced_core/widget/trait.Widget.html\" title=\"trait iced_core::widget::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"iced_widget/keyed/column/struct.Column.html\" title=\"struct iced_widget::keyed::column::Column\">Column</a>&lt;'a, Key, Message, Theme, Renderer&gt;<div class=\"where\">where\n    Renderer: <a class=\"trait\" href=\"iced_core/renderer/trait.Renderer.html\" title=\"trait iced_core::renderer::Renderer\">Renderer</a>,\n    Key: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + 'static,</div>"],["impl&lt;'a, T, L, V, Message, Theme, Renderer&gt; <a class=\"trait\" href=\"iced_core/widget/trait.Widget.html\" title=\"trait iced_core::widget::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"iced_widget/pick_list/struct.PickList.html\" title=\"struct iced_widget::pick_list::PickList\">PickList</a>&lt;'a, T, L, V, Message, Theme, Renderer&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/alloc/string/trait.ToString.html\" title=\"trait alloc::string::ToString\">ToString</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + 'a,\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[T]</a>&gt;,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;T&gt;,\n    Message: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + 'a,\n    Theme: <a class=\"trait\" href=\"iced_widget/pick_list/trait.Catalog.html\" title=\"trait iced_widget::pick_list::Catalog\">Catalog</a> + 'a,\n    Renderer: <a class=\"trait\" href=\"iced_core/text/trait.Renderer.html\" title=\"trait iced_core::text::Renderer\">Renderer</a> + 'a,</div>"],["impl&lt;'a, Message, Theme, Renderer&gt; <a class=\"trait\" href=\"iced_core/widget/trait.Widget.html\" title=\"trait iced_core::widget::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"iced_widget/pane_grid/struct.PaneGrid.html\" title=\"struct iced_widget::pane_grid::PaneGrid\">PaneGrid</a>&lt;'a, Message, Theme, Renderer&gt;<div class=\"where\">where\n    Theme: <a class=\"trait\" href=\"iced_widget/pane_grid/trait.Catalog.html\" title=\"trait iced_widget::pane_grid::Catalog\">Catalog</a>,\n    Renderer: <a class=\"trait\" href=\"iced_core/renderer/trait.Renderer.html\" title=\"trait iced_core::renderer::Renderer\">Renderer</a>,</div>"],["impl&lt;Message, Theme, Renderer, Handle&gt; <a class=\"trait\" href=\"iced_core/widget/trait.Widget.html\" title=\"trait iced_core::widget::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"iced_widget/image/struct.Image.html\" title=\"struct iced_widget::image::Image\">Image</a>&lt;Handle&gt;<div class=\"where\">where\n    Renderer: <a class=\"trait\" href=\"iced_core/image/trait.Renderer.html\" title=\"trait iced_core::image::Renderer\">Renderer</a>&lt;Handle = Handle&gt;,\n    Handle: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()