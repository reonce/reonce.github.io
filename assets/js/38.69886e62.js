(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{247:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_14-1-3-element-类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-1-3-element-类型"}},[t._v("#")]),t._v(" 14.1.3 Element 类型")]),t._v(" "),a("h2",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),a("p",[t._v("ELement 类型表示元素类型，暴露了访问元素标签名、子节点和属性的能力。")]),t._v(" "),a("p",[t._v("可以直接访问 nodeName 和 tagName 属性来获得元素标签名，这两个元素返回相同的值")]),t._v(" "),a("p",[t._v("div.tagName 实际返回的是大写的 “DIV” 所有进行比较的时候，最好都转换成小写去比较")]),t._v(" "),a("h2",{attrs:{id:"html-元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-元素"}},[t._v("#")]),t._v(" HTML 元素")]),t._v(" "),a("p",[t._v("HTML 元素都通过 HTMLELEMENT 类型表示，包括直接实例和间接实例，并且继承了 ELement 并增加了一些属性。这些属性可以直接获取访问对应的值。详见 P415表格字典")]),t._v(" "),a("h2",{attrs:{id:"获取属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取属性"}},[t._v("#")]),t._v(" 获取属性")]),t._v(" "),a("h3",{attrs:{id:"getattribute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getattribute"}},[t._v("#")]),t._v(" getAttribute()")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("接收一个传参，表示要属性的属性名（需要传标签上实际带的，例如calss），如果给定属性不存在，会返回 null 。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("这个方法可以访问到元素中的自定义属性，自定义属性建议前缀加 "),a("code",[t._v("data-")]),t._v("  表示这是自定义字段")])]),t._v(" "),a("li",[a("p",[t._v("传参不区分大小写")])])]),t._v(" "),a("p",[t._v("通常直接访问和用此方法会返回相同的值。但是有两种类型的值例外：")]),t._v(" "),a("ol",[a("li",[t._v("class属性。通过 "),a("code",[t._v("getAttribute()")]),t._v("  方法访问获取的是一个字符串（也就是类名)， 而直接访问元素的属性会返回一个 "),a("code",[t._v("CSSStyleDeclaration")]),t._v(" 对象。")]),t._v(" "),a("li",[t._v("事件处理程序，例如 "),a("code",[t._v("onclick")]),t._v(" "),a("code",[t._v("getAttribute()")]),t._v(" 方法获取到的是一个字符串形式的源代码，直接访问则是一个JS函数")])]),t._v(" "),a("p",[t._v("不难理解，其实 "),a("code",[t._v("getAttribute()")]),t._v(" 相当于就是读元素标签里的属性，而直接访问通常会访问到实际执行的代码。")]),t._v(" "),a("p",[t._v("考虑到这两种差异，开发者通常会直接使用对象属性，这个方法一般用于获取自定义值")]),t._v(" "),a("h3",{attrs:{id:"setattribute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setattribute"}},[t._v("#")]),t._v(" setAttribute()")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我是div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("为元素设置一个属性，接收两个传参： 要设置的属性和要设置的值。")]),t._v(" "),a("p",[t._v("它可以设置自定义值，而在 Element 上直接设置自定义属性是无效的。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 无效")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 有效")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data-name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"removeattrubute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removeattrubute"}},[t._v("#")]),t._v(" removeAttrubute()")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeAttrubute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("移除一个元素的属性，接收需要移除的属性， 会彻底移除属性，而不是仅仅删除值")]),t._v(" "),a("h2",{attrs:{id:"attributes属性-遍历元素的所有属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attributes属性-遍历元素的所有属性"}},[t._v("#")]),t._v(" attributes属性-遍历元素的所有属性")]),t._v(" "),a("p",[t._v("Element 属性是唯一拥有 attributes属性的 DOM 节点类型。")]),t._v(" "),a("p",[t._v("attributes 属性包含了一个叫做 "),a("strong",[t._v("NamedNodeMap")]),t._v(" 的”实时“集合，主要有下面四种方法：")]),t._v(" "),a("ol",[a("li",[t._v("getNamedItem(name)")]),t._v(" "),a("li",[t._v("removeNamedItem(name)")]),t._v(" "),a("li",[t._v("setNamedItem(node)")]),t._v(" "),a("li",[t._v("item(pos)。 返回索引位置pos处的节点")])]),t._v(" "),a("p",[t._v("这个属性用的不多，比较实用的是"),a("strong",[t._v("遍历元素的所有属性")]),t._v("的方法")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("outputAttributes")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("element")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" paris "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" attribute "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    paris"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("attribute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeName"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("attribute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeValue"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" paris\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h2",{attrs:{id:"创建元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建元素"}},[t._v("#")]),t._v(" 创建元素")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("接收一个参数: 要创建元素的标签名，不区分大小写。会自动把 ownerDocument 设置为 document")]),t._v(" "),a("h2",{attrs:{id:"元素后代"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元素后代"}},[t._v("#")]),t._v(" 元素后代")]),t._v(" "),a("p",[a("code",[t._v("childNodes")]),t._v(" 属性包含元素所有子节点。如果要遍历某个元素的某种特定子节点，可以加一个 nodeType 的判断。")]),t._v(" "),a("p",[t._v("element 上使用 getElementByid 和在文档中是一样的，不过范围限制在了此元素中。")])])}),[],!1,null,null,null);s.default=e.exports}}]);