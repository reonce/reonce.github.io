import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="event-loop在浏览器中和node环境中的区别" tabindex="-1"><a class="header-anchor" href="#event-loop在浏览器中和node环境中的区别" aria-hidden="true">#</a> Event Loop在浏览器中和Node环境中的区别</h1><h2 id="浏览器中的event-loop" tabindex="-1"><a class="header-anchor" href="#浏览器中的event-loop" aria-hidden="true">#</a> 浏览器中的Event Loop</h2><p>事件循环中的异步队列有两种：macro（宏任务）队列和 micro（微任务）队列。宏任务队列可以有多个，微任务队列只有一个。 常见的 macro-task 比如：setTimeout、setInterval、 setImmediate、script（整体代码）、 I/O 操作、UI 渲染等。 常见的 micro-task 比如: process.nextTick、new Promise().then(回调)、MutationObserver(html5 新特性) 等。</p><blockquote><p>扩展一下process.nextTick()，它一般用于控制代码执行顺序，可用于赋予用户一，去保证方法在对象完成constructor后但是在I/O发生前调用。它可扩展学习的内容也较多，下一个issue单独介绍下。</p></blockquote><p><strong>执行机制</strong>：当某个宏任务执行完后,会查看是否有微任务队列。如果有，先执行微任务队列中的所有任务，如果没有，会读取宏任务队列中排在最前的任务，执行宏任务的过程中，遇到微任务，依次加入微任务队列。栈空后，再次读取微任务队列里的任务，依次类推。</p><h2 id="node环境中的event-loop" tabindex="-1"><a class="header-anchor" href="#node环境中的event-loop" aria-hidden="true">#</a> Node环境中的Event Loop</h2><p>Node 中的 Event Loop 和浏览器中的是完全不相同的东西。Node.js采用V8作为js的解析引擎，而I/O处理方面使用了自己设计的libuv，libuv是一个基于事件驱动的跨平台抽象层，封装了不同操作系统一些底层特性，对外提供统一的API，事件循环机制也是它里面的实现</p><p>Node的Event loop一共分为6个阶段，每个细节具体如下：</p><ul><li>timers: 执行setTimeout和setInterval中到期的callback。</li><li>pending callback: 上一轮循环中少数的callback会放在这一阶段执行。</li><li>idle, prepare:仅在内部使用。</li><li>poll:最重要的阶段，执行pending callback，在适当的情况下回阻塞在这个阶段。</li><li>check:执行setImmediate的callback。</li><li>close callbacks: 执行close事件的callback，例如socket.on(‘close’[,fn])或者http.server.on(&#39;close, fn)。 注意：上面六个阶段都不包括 process.nextTick()。 在Node.js中，一次宏任务可以认为是包含上述6个阶段、<strong>微任务</strong>microtask会在<strong>事件循环的各个阶段</strong>之间执行，也就是一个阶段执行完毕，就会去执行microtask队列的任务。 process.nextTick()</li></ul><p>在前面就已经了解到，process.nextTick()属于微任务，但是这里需要重点提及下： process.nextTick()虽然它是异步API的一部分，但未在图中显示。因为process.nextTick()从技术上讲，它不是事件循环的一部分； 当每个阶段完成后，如果存在 nextTick，就会清空队列中的所有回调函数，并且优先于其他 microtask 执行（可以理解为微任务中优先级最高的）</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/浏览器相关知识/Event Loop在浏览器中和Node环境中的区别.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Event_Loop______Node_______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Event Loop在浏览器中和Node环境中的区别.html.vue"]]);
export {
  Event_Loop______Node_______html as default
};
