import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="js对象中的with语句" tabindex="-1"><a class="header-anchor" href="#js对象中的with语句" aria-hidden="true">#</a> JS对象中的with语句</h2><p><code>with</code>语句的格式如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>with (对象) {
  语句;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它的作用是操作同一个对象的多个属性时，提供一些书写的方便。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 例一
var obj = {
  p1: 1,
  p2: 2,
};
with (obj) {
  p1 = 4;
  p2 = 5;
}
// 等同于
obj.p1 = 4;
obj.p2 = 5;

// 例二
with (document.links[0]){
  console.log(href);
  console.log(title);
  console.log(style);
}
// 等同于
console.log(document.links[0].href);
console.log(document.links[0].title);
console.log(document.links[0].style);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，如果<code>with</code>区块内部有变量的赋值操作，必须是当前对象已经存在的属性，否则会创造一个当前作用域的全局变量。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = {};
with (obj) {
  p1 = 4;
  p2 = 5;
}

obj.p1 // undefined
p1 // 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，对象<code>obj</code>并没有<code>p1</code>属性，对<code>p1</code>赋值等于创造了一个全局变量<code>p1</code>。正确的写法应该是，先定义对象<code>obj</code>的属性<code>p1</code>，然后在<code>with</code>区块内操作它。</p><p>这是因为<code>with</code>区块没有改变作用域，它的内部依然是当前作用域。这造成了<code>with</code>语句的一个很大的弊病，就是绑定对象不明确。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>with (obj) {
  console.log(x);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单纯从上面的代码块，根本无法判断<code>x</code>到底是全局变量，还是对象<code>obj</code>的一个属性。这非常不利于代码的除错和模块化，编译器也无法对这段代码进行优化，只能留到运行时判断，这就拖慢了运行速度。因此，建议不要使用<code>with</code>语句，可以考虑用一个临时变量代替<code>with</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>with(obj1.obj2.obj3) {
  console.log(p1 + p2);
}

// 可以写成
var temp = obj1.obj2.obj3;
console.log(temp.p1 + temp.p2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/JavaScipt基础/JavaScript方法/JS对象中的with语句.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const JS____with___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "JS对象中的with语句.html.vue"]]);
export {
  JS____with___html as default
};
