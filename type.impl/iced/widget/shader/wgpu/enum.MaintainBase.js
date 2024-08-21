(function() {var type_impls = {
"iced":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-MaintainBase%3CT%3E\" class=\"impl\"><a href=\"#impl-Clone-for-MaintainBase%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"iced/widget/shader/wgpu/enum.MaintainBase.html\" title=\"enum iced::widget::shader::wgpu::MaintainBase\">Maintain</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"iced/widget/shader/wgpu/enum.MaintainBase.html\" title=\"enum iced::widget::shader::wgpu::MaintainBase\">Maintain</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","iced::widget::shader::wgpu::Maintain"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MaintainBase%3CT%3E\" class=\"impl\"><a href=\"#impl-MaintainBase%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"enum\" href=\"iced/widget/shader/wgpu/enum.MaintainBase.html\" title=\"enum iced::widget::shader::wgpu::MaintainBase\">Maintain</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.wait\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"iced/widget/shader/wgpu/enum.MaintainBase.html#tymethod.wait\" class=\"fn\">wait</a>() -&gt; <a class=\"enum\" href=\"iced/widget/shader/wgpu/enum.MaintainBase.html\" title=\"enum iced::widget::shader::wgpu::MaintainBase\">Maintain</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Construct a wait variant</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.wait_for\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"iced/widget/shader/wgpu/enum.MaintainBase.html#tymethod.wait_for\" class=\"fn\">wait_for</a>(submission_index: T) -&gt; <a class=\"enum\" href=\"iced/widget/shader/wgpu/enum.MaintainBase.html\" title=\"enum iced::widget::shader::wgpu::MaintainBase\">Maintain</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Construct a WaitForSubmissionIndex variant</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_wait\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"iced/widget/shader/wgpu/enum.MaintainBase.html#tymethod.is_wait\" class=\"fn\">is_wait</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>This maintain represents a wait of some kind.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.map_index\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"iced/widget/shader/wgpu/enum.MaintainBase.html#tymethod.map_index\" class=\"fn\">map_index</a>&lt;U, F&gt;(self, func: F) -&gt; <a class=\"enum\" href=\"iced/widget/shader/wgpu/enum.MaintainBase.html\" title=\"enum iced::widget::shader::wgpu::MaintainBase\">Maintain</a>&lt;U&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(T) -&gt; U,</div></h4></section></summary><div class=\"docblock\"><p>Map on the wait index type.</p>\n</div></details></div></details>",0,"iced::widget::shader::wgpu::Maintain"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()