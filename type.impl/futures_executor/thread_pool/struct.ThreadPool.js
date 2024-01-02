(function() {var type_impls = {
"iced_futures":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ThreadPool\" class=\"impl\"><a href=\"#impl-ThreadPool\" class=\"anchor\">§</a><h3 class=\"code-header\">impl ThreadPool</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;ThreadPool, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new thread pool with the default configuration.</p>\n<p>See documentation for the methods in\n<a href=\"ThreadPoolBuilder\"><code>ThreadPoolBuilder</code></a> for details on the default\nconfiguration.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.builder\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">builder</a>() -&gt; ThreadPoolBuilder</h4></section></summary><div class=\"docblock\"><p>Create a default thread pool configuration, which can then be customized.</p>\n<p>See documentation for the methods in\n<a href=\"ThreadPoolBuilder\"><code>ThreadPoolBuilder</code></a> for details on the default\nconfiguration.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.spawn_obj_ok\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">spawn_obj_ok</a>(&amp;self, future: FutureObj&lt;'static, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Spawns a future that will be run to completion.</p>\n<blockquote>\n<p><strong>Note</strong>: This method is similar to <code>Spawn::spawn_obj</code>, except that\nit is guaranteed to always succeed.</p>\n</blockquote>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.spawn_ok\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">spawn_ok</a>&lt;Fut&gt;(&amp;self, future: Fut)<div class=\"where\">where\n    Fut: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,</div></h4></section></summary><div class=\"docblock\"><p>Spawns a task that polls the given future with output <code>()</code> to\ncompletion.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>futures::executor::ThreadPool;\n\n<span class=\"kw\">let </span>pool = ThreadPool::new().unwrap();\n\n<span class=\"kw\">let </span>future = <span class=\"kw\">async </span>{ <span class=\"comment\">/* ... */ </span>};\npool.spawn_ok(future);</code></pre></div>\n<blockquote>\n<p><strong>Note</strong>: This method is similar to <code>SpawnExt::spawn</code>, except that\nit is guaranteed to always succeed.</p>\n</blockquote>\n</div></details></div></details>",0,"iced_futures::backend::native::thread_pool::Executor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Spawn-for-ThreadPool\" class=\"impl\"><a href=\"#impl-Spawn-for-ThreadPool\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Spawn for ThreadPool</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.spawn_obj\" class=\"method trait-impl\"><a href=\"#method.spawn_obj\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">spawn_obj</a>(&amp;self, future: FutureObj&lt;'static, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, SpawnError&gt;</h4></section></summary><div class='docblock'>Spawns a future that will be run to completion. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.status\" class=\"method trait-impl\"><a href=\"#method.status\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">status</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, SpawnError&gt;</h4></section></summary><div class='docblock'>Determines whether the executor is able to spawn new tasks. <a>Read more</a></div></details></div></details>","Spawn","iced_futures::backend::native::thread_pool::Executor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ThreadPool\" class=\"impl\"><a href=\"#impl-Clone-for-ThreadPool\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for ThreadPool</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; ThreadPool</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","iced_futures::backend::native::thread_pool::Executor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ThreadPool\" class=\"impl\"><a href=\"#impl-Debug-for-ThreadPool\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for ThreadPool</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","iced_futures::backend::native::thread_pool::Executor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-ThreadPool\" class=\"impl\"><a href=\"#impl-Drop-for-ThreadPool\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for ThreadPool</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","iced_futures::backend::native::thread_pool::Executor"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()