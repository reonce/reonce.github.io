import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="requestanimationframe-定时器解读" tabindex="-1"><a class="header-anchor" href="#requestanimationframe-定时器解读" aria-hidden="true">#</a> requestAnimationFrame 定时器解读</h1><p><strong><code>window.requestAnimationFrame()</code></strong> 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。</p><p>计时器一直是javascript动画的核心技术。而编写动画循环的关键是要知道延迟时间多长合适。一方面，循环间隔必须足够短，这样才能让不同的动画效果显得平滑流畅；另一方面，循环间隔还要足够长，这样才能确保浏览器有能力渲染产生的变化</p><p>大多数电脑显示器的刷新频率是60Hz，大概相当于每秒钟重绘60次。大多数浏览器都会对重绘操作加以限制，不超过显示器的重绘频率，因为即使超过那个频率用户体验也不会有提升。因此，最平滑动画的最佳循环间隔是1000ms/60，约等于16.6ms</p><p>而setTimeout和setInterval的问题是，它们都不精确。它们的内在<a href="http://www.cnblogs.com/xiaohuochai/p/5773183.html#anchor3" target="_blank" rel="noopener noreferrer">运行机制`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>决定了时间间隔参数实际上只是指定了把动画代码添加到浏览器UI线程队列中以等待执行的时间。如果队列前面已经加入了其他任务，那动画代码就要等前面的任务完成后再执行</p><p>requestAnimationFrame采用系统时间间隔，保持最佳绘制效率，不会因为间隔时间过短，造成过度绘制，增加开销；也不会因为间隔时间太长，使用动画卡顿不流畅，让各种网页动画效果能够有一个统一的刷新机制，从而节省系统资源，提高系统性能，改善视觉效果</p><p><code>window.requestAnimationFrame()</code>用法与setTimeoutl类似，区别在于它不需要第二个参数，也就是不需要传入时间间隔。</p><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3><p>【1】requestAnimationFrame会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率</p><p>【2】在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这当然就意味着更少的CPU、GPU和内存使用量</p><p>【3】requestAnimationFrame是由浏览器专门为动画提供的API，在运行时浏览器会自动优化方法的调用，并且如果页面不是激活状态下的话，动画会自动暂停，有效节省了CPU开销</p><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><p>requestAnimationFrame的用法与settimeout很相似，只是不需要设置时间间隔而已。requestAnimationFrame使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用。它返回一个整数，表示定时器的编号，这个值可以传递给cancelAnimationFrame用于取消这个函数的执行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>requestID = requestAnimationFrame(callback); 
//控制台输出1和0
var timer = requestAnimationFrame(function(){
    console.log(0);
}); 
console.log(timer);//1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cancelAnimationFrame方法用于取消定时器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//控制台什么都不输出
var timer = requestAnimationFrame(function(){
    console.log(0);
}); 
cancelAnimationFrame(timer);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以直接使用返回值进行取消</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var timer = requestAnimationFrame(function(){
    console.log(0);
}); 
cancelAnimationFrame(1);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="requestanimationframe定时器" tabindex="-1"><a class="header-anchor" href="#requestanimationframe定时器" aria-hidden="true">#</a> requestAnimationFrame定时器</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div id=&quot;myDiv&quot; style=&quot;background-color: lightblue;width: 0;height: 20px;line-height: 20px;&quot;&gt;0%&lt;/div&gt;
&lt;button id=&quot;btn&quot;&gt;run&lt;/button&gt;
&lt;script&gt;
var timer;
btn.onclick = function(){
    myDiv.style.width = &#39;0&#39;;
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn(){
        if(parseInt(myDiv.style.width) &lt; 500){
            myDiv.style.width = parseInt(myDiv.style.width) + 5 + &#39;px&#39;;
            myDiv.innerHTML =     parseInt(myDiv.style.width)/5 + &#39;%&#39;;
            timer = requestAnimationFrame(fn);
        }else{
            cancelAnimationFrame(timer);
        }    
    });
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/CSS/requestAnimationFrame 深度解读.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const requestAnimationFrame______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "requestAnimationFrame 深度解读.html.vue"]]);
export {
  requestAnimationFrame______html as default
};
