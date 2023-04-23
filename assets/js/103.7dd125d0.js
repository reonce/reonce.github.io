(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{317:function(_,v,s){"use strict";s.r(v);var t=s(5),e=Object(t.a)({},(function(){var _=this,v=_.$createElement,s=_._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[s("h1",{attrs:{id:"摆脱-console-log-使用更优质的前端调试方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#摆脱-console-log-使用更优质的前端调试方案"}},[_._v("#")]),_._v(" 摆脱 console.log ，使用更优质的前端调试方案")]),_._v(" "),s("p",[_._v("程序调试是程序开发必不可少的一环，刚开始接触前端调试时，最常用的就是 "),s("code",[_._v("console.log")]),_._v(" 打印变量进行调试，本文会分享一些笔者学习到的前端调试方法，减少对 "),s("code",[_._v("console.log")]),_._v(" 调试方式的依赖，选择更优质的前端调试方案。")]),_._v(" "),s("blockquote",[s("p",[_._v("本文中提到的 "),s("code",[_._v("command")]),_._v(" 键，在 Windows 系统中用 "),s("code",[_._v("control")]),_._v(" 键替代即可")])]),_._v(" "),s("h2",{attrs:{id:"_1-为什么不用-console-log-一把梭"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么不用-console-log-一把梭"}},[_._v("#")]),_._v(" 1. 为什么不用 console.log 一把梭")]),_._v(" "),s("p",[_._v("我们看一下使用 "),s("code",[_._v("console.log")]),_._v(" 的步骤：")]),_._v(" "),s("ul",[s("li",[_._v("找到需要调试代码的具体位置")]),_._v(" "),s("li",[_._v("写上一行 "),s("code",[_._v("console.log()")]),_._v(" 代码，传入需要打印的变量")]),_._v(" "),s("li",[_._v("保存，等待项目热更新完成")]),_._v(" "),s("li",[_._v("打开控制台，查看打印的变量值")]),_._v(" "),s("li",[_._v("调试结束，删掉打印的那一行代码")])]),_._v(" "),s("p",[_._v("平时使用中你可能没发现，原来限定条件这么多，调试变量需要这五个步骤一个都不能省。")]),_._v(" "),s("p",[_._v("遇到复杂的函数执行逻辑时，甚至要在每个函数中打印来确定函数的执行，这种情况下实在是不怎么方便。")]),_._v(" "),s("blockquote",[s("p",[_._v("简单的调试还是可取的，看个人调试习惯，较为复杂的调试就不推荐使用 "),s("code",[_._v("console.log")]),_._v(" 了")])]),_._v(" "),s("h2",{attrs:{id:"_2-使用浏览器调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用浏览器调试"}},[_._v("#")]),_._v(" 2. 使用浏览器调试")]),_._v(" "),s("p",[_._v("在本地代码端，可以 通过添加一行 "),s("code",[_._v("debugger;")]),_._v(" 命令，当代码执行到这一行，会自动进入调试模式")]),_._v(" "),s("p",[_._v("从"),s("strong",[_._v("浏览器端")]),_._v("进行浏览器调试需要以下几个步骤：")]),_._v(" "),s("ul",[s("li",[_._v("打开 浏览器开发者工具的 "),s("code",[_._v("Sources")]),_._v(" 源代码面板")]),_._v(" "),s("li",[_._v("找到需要调试的文件")]),_._v(" "),s("li",[_._v("打断点")]),_._v(" "),s("li",[_._v("进入 Debugger 模式，开始调试")])]),_._v(" "),s("h3",{attrs:{id:"_2-1-找到需要调试的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-找到需要调试的文件"}},[_._v("#")]),_._v(" 2.1 找到需要调试的文件")]),_._v(" "),s("p",[_._v("在浏览器当中直接找调试文件有两种方式："),s("strong",[_._v("搜索文件调试")]),_._v(" 和 "),s("strong",[_._v("通过文件目录查找调试文件")])]),_._v(" "),s("h4",{attrs:{id:"_2-1-1-搜索文件调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-搜索文件调试"}},[_._v("#")]),_._v(" 2.1.1 搜索文件调试")]),_._v(" "),s("p",[_._v("如果没有打开的调试页，空页面中会当前浏览器查找文件的快捷键提示")]),_._v(" "),s("p",[_._v("以谷歌浏览器为例，可以通过 "),s("code",[_._v("command + P")]),_._v(" "),s("strong",[_._v("查找文件")]),_._v(" 的方式打开需要调试的文件")]),_._v(" "),s("p",[s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c79ebba84c74475693f7bb794ca52f32~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"1.png"}})]),_._v(" "),s("p",[_._v("按下 "),s("code",[_._v("command + p")]),_._v(" 快捷键后，搜索你要调试的文件，例如 "),s("code",[_._v("Component/index.tsx")]),_._v(" , 即可打开对应的调试文件，接下来，就可以开始打断点了。在这一步下，最便捷的打断点方式就是点击需要调试代码的 "),s("strong",[_._v("行号")]),_._v("，当代码指定到这行时，会自动进入浏览器的断点调试模式")]),_._v(" "),s("h4",{attrs:{id:"_2-1-2-通过文件目录查找调试文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-通过文件目录查找调试文件"}},[_._v("#")]),_._v(" 2.1.2 通过文件目录查找调试文件")]),_._v(" "),s("p",[_._v("点击左上角的展开图标, 推荐勾选上这三个筛选分类选项，在左侧 “网页” Tab 下，会实时展示加载模块的文件，找到需要调试的文件，接下来就可以开始调试了")]),_._v(" "),s("p",[s("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ea00c985178f4afdb4be7bc5e9c06d9c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"2.png"}})]),_._v(" "),s("h3",{attrs:{id:"_2-2-打-javascript-断点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-打-javascript-断点"}},[_._v("#")]),_._v(" 2.2 打 JavaScript 断点")]),_._v(" "),s("p",[_._v("找到文件之后就可以开始打断点了，在浏览器中最便捷也是最常用的就是直接"),s("strong",[_._v("点击行号")]),_._v("打断点，例如这里在点击事件这一行打了断点，当触发这个点击事件时，这个断点就会被触发了。")]),_._v(" "),s("p",[s("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f64bb0278c3c462aa5e9f7ee26b6107a~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"3.png"}})]),_._v(" "),s("p",[_._v("此外，右键行号也可以进行添加断点，它提供了更多的选项，例如：")]),_._v(" "),s("ul",[s("li",[_._v("条件断点，指定条件为 true 时才触发断点")]),_._v(" "),s("li",[_._v("日志点，记录消息")]),_._v(" "),s("li",[_._v("其他执行操作，执行到此处、不在此处暂停等")])]),_._v(" "),s("h3",{attrs:{id:"_2-3-debugger-调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-debugger-调试"}},[_._v("#")]),_._v(" 2.3 "),s("strong",[_._v("Debugger")]),_._v(" 调试")]),_._v(" "),s("p",[_._v("进入 "),s("code",[_._v("Debugger")]),_._v(" 调试模式之后，源代码面板右侧的"),s("strong",[_._v("调试控制台")]),_._v("上方有七个按钮，分别表示")]),_._v(" "),s("ol",{attrs:{start:"0"}},[s("li",[_._v("执行/暂停")]),_._v(" "),s("li",[_._v("跨步执行（运行下一行代码)")]),_._v(" "),s("li",[_._v("JS执行下一步(忽略异步行为)")]),_._v(" "),s("li",[_._v("JS执行上一步(忽略异步行为)")]),_._v(" "),s("li",[_._v("执行到函数末尾")]),_._v(" "),s("li",[_._v("禁用所有断点")]),_._v(" "),s("li",[_._v("启动/关闭错误时暂停执行")])]),_._v(" "),s("p",[s("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9950d735053a412eb6314cdf52f1a7c2~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"4.png"}})]),_._v(" "),s("p",[_._v("在Debugger 模式下可以查看 JavaScript 完整的执行过程，将鼠标移到执行过的变量上可以直接看到变量的值")]),_._v(" "),s("p",[_._v("在调试控制台下方的信息区域，可以查看断点的集合、当前函数的变量、全局变量、闭包和调用堆栈等信息")]),_._v(" "),s("h3",{attrs:{id:"_2-4-打-dom-断点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-打-dom-断点"}},[_._v("#")]),_._v(" 2.4 打 DOM 断点")]),_._v(" "),s("p",[_._v("给 DOM 元素添加断点，当DOM 元素发生变化时，会进入 debugger 模式，具体方法如下：")]),_._v(" "),s("p",[_._v("在控制台的 "),s("strong",[_._v("元素")]),_._v(" 标签页选中 DOM 节点，右键 选择发生中断的条件 可设置为属性修改 ，元素属性变化的时候，就会进入断点模式")]),_._v(" "),s("h2",{attrs:{id:"_3-使用-vscode-调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用-vscode-调试"}},[_._v("#")]),_._v(" 3. 使用 VsCode 调试")]),_._v(" "),s("p",[_._v("谷歌浏览器的 debugger 插件已经内置了，这里以火狐浏览器举例，步骤如下：")]),_._v(" "),s("ol",[s("li",[s("p",[_._v("安装 Debugger for Firefox")])]),_._v(" "),s("li",[s("p",[_._v("左侧图标点击 "),s("strong",[_._v("”调试”")]),_._v(" ，若无配置可添加配置，按照默认的添加 "),s("code",[_._v("lauch")]),_._v(" 方式即可， 或者直接在根目录下创建一个 "),s("code",[_._v(".vscode")]),_._v(" 目录，里面新建一个 "),s("code",[_._v("launch.json")]),_._v(" 文件，添加上配置, "),s("a",{attrs:{href:""}},[_._v("官网调试文档")]),_._v(" 有必要一读, 以火")]),_._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[_._v('{\n  // 使用 IntelliSense 了解相关属性。 \n  // 悬停以查看现有属性的描述。\n  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "type": "firefox", // 浏览器类型\n      "request": "launch", // 调试连接方式，launch 为新打开一个浏览器实例调试， attach 为附加到已打开的浏览器上\n      "name": "firefox", // 调试配置的名称\n      "url": "http://localhost:3009/", // 调试项目的主页地址\n      "webRoot": "${workspaceFolder}/src", // 文件执行路径\n      "pathMappings": [{ "url": "webpack:///src/", "path": "${webRoot}/" }],\n      "profile": "default-release" // 可选配置， 火狐浏览器用户档案\n    }\n  ]\n}\n\n')])]),_._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[_._v("1")]),s("br"),s("span",{staticClass:"line-number"},[_._v("2")]),s("br"),s("span",{staticClass:"line-number"},[_._v("3")]),s("br"),s("span",{staticClass:"line-number"},[_._v("4")]),s("br"),s("span",{staticClass:"line-number"},[_._v("5")]),s("br"),s("span",{staticClass:"line-number"},[_._v("6")]),s("br"),s("span",{staticClass:"line-number"},[_._v("7")]),s("br"),s("span",{staticClass:"line-number"},[_._v("8")]),s("br"),s("span",{staticClass:"line-number"},[_._v("9")]),s("br"),s("span",{staticClass:"line-number"},[_._v("10")]),s("br"),s("span",{staticClass:"line-number"},[_._v("11")]),s("br"),s("span",{staticClass:"line-number"},[_._v("12")]),s("br"),s("span",{staticClass:"line-number"},[_._v("13")]),s("br"),s("span",{staticClass:"line-number"},[_._v("14")]),s("br"),s("span",{staticClass:"line-number"},[_._v("15")]),s("br"),s("span",{staticClass:"line-number"},[_._v("16")]),s("br"),s("span",{staticClass:"line-number"},[_._v("17")]),s("br"),s("span",{staticClass:"line-number"},[_._v("18")]),s("br")])]),s("p",[s("strong",[_._v("profile 配置")]),_._v(" 是可选的配置项，表示打开浏览器实例之后使用的用户档案，正常打开实例之后，会打开一个类似于进入了无痕窗口模式的浏览器，如果想正常进入浏览器，查看书签使用浏览器扩展，就需要这个配置项了")]),_._v(" "),s("p",[_._v("在火狐的地址栏中输入"),s("code",[_._v("about:profiles")]),_._v(" 可以看到所有的档案方案，这里我直接使用了默认的档案方案")])])]),_._v(" "),s("p",[_._v("配置完成后，打上断点，然后启动项目，点击调试按钮即可启动 VsCode 调试，执行到断点的地方会自动进入 VsCode 的调试模式，和浏览器中调试方式差不多")]),_._v(" "),s("p",[s("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b1450c9b0b524c1cb534efc79e40d703~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"5.png"}})]),_._v(" "),s("h2",{attrs:{id:"_4-一些小技巧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-一些小技巧"}},[_._v("#")]),_._v(" 4. 一些小技巧")]),_._v(" "),s("h4",{attrs:{id:"console-打印"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#console-打印"}},[_._v("#")]),_._v(" console 打印")]),_._v(" "),s("ul",[s("li",[_._v("打印 "),s("strong",[_._v("对象数组集合")]),_._v(" 使用 "),s("code",[_._v("console.table")]),_._v(" 可以更图表化的查看数据")]),_._v(" "),s("li",[_._v("打印 "),s("strong",[_._v("DOM")]),_._v(" 对象 使用 "),s("code",[_._v("console.dir")]),_._v(" 可以打印出 "),s("strong",[_._v("DOM")]),_._v(" 节点的具体属性")])]),_._v(" "),s("h4",{attrs:{id:"快捷键"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快捷键"}},[_._v("#")]),_._v(" 快捷键")]),_._v(" "),s("p",[s("code",[_._v("command + option + i")]),_._v(" 快速打开 开发者工具 "),s("code",[_._v("源代码")]),_._v(" 面板")]),_._v(" "),s("p",[s("code",[_._v("command + shift + c")]),_._v("，打开 开发者工具 "),s("code",[_._v("Element")]),_._v(" 面板，并启用 "),s("strong",[_._v("元素审查")])]),_._v(" "),s("h4",{attrs:{id:"查看-hover-状态下的元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看-hover-状态下的元素"}},[_._v("#")]),_._v(" 查看 "),s("code",[_._v("hover")]),_._v(" 状态下的元素")]),_._v(" "),s("p",[_._v("打开控制台的 "),s("code",[_._v("source")]),_._v(" （中文源代码) 面板，按下"),s("code",[_._v("command +")]),_._v(" 会进入 "),s("strong",[_._v("debugger")]),_._v(" 模式")]),_._v(" "),s("p",[_._v("选中元素，在 "),s("code",[_._v("Element")]),_._v(" 面板右键 选择强制执行状态 "),s("code",[_._v(":hover")])]),_._v(" "),s("h2",{attrs:{id:"_5-结语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-结语"}},[_._v("#")]),_._v(" 5. 结语")]),_._v(" "),s("p",[_._v("关于学习前端调试，我认为一文读懂是不可能的，本文的一点内容算是抛砖引玉，供大家参考")]),_._v(" "),s("p",[_._v("奉上一句诗，很贴合调试的学习： "),s("strong",[_._v('"纸上得来终觉浅，欲知此事要躬行"')])])])}),[],!1,null,null,null);v.default=e.exports}}]);