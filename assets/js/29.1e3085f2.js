(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{240:function(e,t,r){"use strict";r.r(t);var n=r(5),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("Proxy的优势如下")]),e._v(" "),r("p",[e._v("Proxy可以直接监听整个对象而非属性。\nProxy可以直接监听数组的变化。\nProxy有13中拦截方法，如ownKeys、deleteProperty、has 等是 Object.defineProperty 不具备的。\nProxy返回的是一个新对象，我们可以只操作新的对象达到目的，而Object.defineProperty只能遍历对象属性直接修改， 性能角度要好;\nProxy做为新标准将受到浏览器产商重点持续的性能优化,也就是传说中的新标准的性能红利。\nObject.defineProperty 的优势如下")]),e._v(" "),r("p",[e._v("兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill 磨平。\nObject.defineProperty 不足在于：")]),e._v(" "),r("p",[e._v("Object.defineProperty 只能劫持对象的属性,因此我们需要对每个对象的每个属性进行遍历。\nObject.defineProperty不能监听数组。是通过重写数据的那7个可以改变数据的方法来对数组进行监听的。\nObject.defineProperty 也不能对 es6 新产生的 Map,Set 这些数据结构做出监听。\nObject.defineProperty也不能监听新增和删除操作，通过 Vue.set()和 Vue.delete来实现响应式的。")])])}),[],!1,null,null,null);t.default=o.exports}}]);