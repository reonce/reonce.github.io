(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{287:function(t,n,s){"use strict";s.r(n);var o=s(5),e=Object(o.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"如何防止input的拼音输入触发onchange"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何防止input的拼音输入触发onchange"}},[this._v("#")]),this._v(" 如何防止Input的拼音输入触发onChange")]),this._v(" "),n("p",[this._v("需要使用到"),n("Input"),this._v("的两个厲性 compositionstart 和compositionEnd。下面来看看它们的MDN定义。\ncompositionstart：输入法编辑器开始新的输入法合成时触发的事件，例如，当用户使用拼音输入法开始输\n入汉字时，这个事件就会被触发。\ncompositionstart：同理可得，这是输入法合成完成后触发的事件，例如，当用户使用拼音输入法输入完拼\n音选中汉字时，这个事件就会被触发。\n我们可以在输入法合成时设置一个锁 1ock=true;在输入法合成结束时解除这个锁 1ock=fa lse，在锁生效期\n间onChange事件都return掉不触发，在输入法合成结束时再setlnputValue即可。需要注意的是，这么做的话我\n们的＜Input /＞组件必须设置为非受控，否则在拼音时，会因为此时锁生效不触发setlnputValue事件导致输入框\n一直为空，无任何输入。")],1)])}),[],!1,null,null,null);n.default=e.exports}}]);