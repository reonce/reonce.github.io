<template><div><h1 id="摆脱-console-log-使用更优质的前端调试方案" tabindex="-1"><a class="header-anchor" href="#摆脱-console-log-使用更优质的前端调试方案" aria-hidden="true">#</a> 摆脱 console.log ，使用更优质的前端调试方案</h1>
<p>程序调试是程序开发必不可少的一环，刚开始接触前端调试时，最常用的就是 <code v-pre>console.log</code> 打印变量进行调试，本文会分享一些笔者学习到的前端调试方法，减少对 <code v-pre>console.log</code> 调试方式的依赖，选择更优质的前端调试方案。</p>
<blockquote>
<p>本文中提到的 <code v-pre>command</code> 键，在 Windows 系统中用 <code v-pre>control</code> 键替代即可</p>
</blockquote>
<h2 id="_1-为什么不用-console-log-一把梭" tabindex="-1"><a class="header-anchor" href="#_1-为什么不用-console-log-一把梭" aria-hidden="true">#</a> 1. 为什么不用 console.log 一把梭</h2>
<p>我们看一下使用 <code v-pre>console.log</code> 的步骤：</p>
<ul>
<li>找到需要调试代码的具体位置</li>
<li>写上一行 <code v-pre>console.log()</code> 代码，传入需要打印的变量</li>
<li>保存，等待项目热更新完成</li>
<li>打开控制台，查看打印的变量值</li>
<li>调试结束，删掉打印的那一行代码</li>
</ul>
<p>平时使用中你可能没发现，原来限定条件这么多，调试变量需要这五个步骤一个都不能省。</p>
<p>遇到复杂的函数执行逻辑时，甚至要在每个函数中打印来确定函数的执行，这种情况下实在是不怎么方便。</p>
<blockquote>
<p>简单的调试还是可取的，看个人调试习惯，较为复杂的调试就不推荐使用 <code v-pre>console.log</code> 了</p>
</blockquote>
<h2 id="_2-使用浏览器调试" tabindex="-1"><a class="header-anchor" href="#_2-使用浏览器调试" aria-hidden="true">#</a> 2. 使用浏览器调试</h2>
<p>在本地代码端，可以 通过添加一行 <code v-pre>debugger;</code> 命令，当代码执行到这一行，会自动进入调试模式</p>
<p>从<strong>浏览器端</strong>进行浏览器调试需要以下几个步骤：</p>
<ul>
<li>打开 浏览器开发者工具的 <code v-pre>Sources</code> 源代码面板</li>
<li>找到需要调试的文件</li>
<li>打断点</li>
<li>进入 Debugger 模式，开始调试</li>
</ul>
<h3 id="_2-1-找到需要调试的文件" tabindex="-1"><a class="header-anchor" href="#_2-1-找到需要调试的文件" aria-hidden="true">#</a> 2.1 找到需要调试的文件</h3>
<p>在浏览器当中直接找调试文件有两种方式：<strong>搜索文件调试</strong> 和 <strong>通过文件目录查找调试文件</strong></p>
<h4 id="_2-1-1-搜索文件调试" tabindex="-1"><a class="header-anchor" href="#_2-1-1-搜索文件调试" aria-hidden="true">#</a> 2.1.1 搜索文件调试</h4>
<p>如果没有打开的调试页，空页面中会当前浏览器查找文件的快捷键提示</p>
<p>以谷歌浏览器为例，可以通过 <code v-pre>command + P</code> <strong>查找文件</strong> 的方式打开需要调试的文件</p>
<figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c79ebba84c74475693f7bb794ca52f32~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="1.png" tabindex="0" loading="lazy"><figcaption>1.png</figcaption></figure>
<p>按下 <code v-pre>command + p</code> 快捷键后，搜索你要调试的文件，例如 <code v-pre>Component/index.tsx</code> , 即可打开对应的调试文件，接下来，就可以开始打断点了。在这一步下，最便捷的打断点方式就是点击需要调试代码的 <strong>行号</strong>，当代码指定到这行时，会自动进入浏览器的断点调试模式</p>
<h4 id="_2-1-2-通过文件目录查找调试文件" tabindex="-1"><a class="header-anchor" href="#_2-1-2-通过文件目录查找调试文件" aria-hidden="true">#</a> 2.1.2 通过文件目录查找调试文件</h4>
<p>点击左上角的展开图标, 推荐勾选上这三个筛选分类选项，在左侧 “网页” Tab 下，会实时展示加载模块的文件，找到需要调试的文件，接下来就可以开始调试了</p>
<figure><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ea00c985178f4afdb4be7bc5e9c06d9c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="2.png" tabindex="0" loading="lazy"><figcaption>2.png</figcaption></figure>
<h3 id="_2-2-打-javascript-断点" tabindex="-1"><a class="header-anchor" href="#_2-2-打-javascript-断点" aria-hidden="true">#</a> 2.2 打 JavaScript 断点</h3>
<p>找到文件之后就可以开始打断点了，在浏览器中最便捷也是最常用的就是直接<strong>点击行号</strong>打断点，例如这里在点击事件这一行打了断点，当触发这个点击事件时，这个断点就会被触发了。</p>
<figure><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f64bb0278c3c462aa5e9f7ee26b6107a~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="3.png" tabindex="0" loading="lazy"><figcaption>3.png</figcaption></figure>
<p>此外，右键行号也可以进行添加断点，它提供了更多的选项，例如：</p>
<ul>
<li>条件断点，指定条件为 true 时才触发断点</li>
<li>日志点，记录消息</li>
<li>其他执行操作，执行到此处、不在此处暂停等</li>
</ul>
<h3 id="_2-3-debugger-调试" tabindex="-1"><a class="header-anchor" href="#_2-3-debugger-调试" aria-hidden="true">#</a> 2.3 <strong>Debugger</strong> 调试</h3>
<p>进入 <code v-pre>Debugger</code> 调试模式之后，源代码面板右侧的<strong>调试控制台</strong>上方有七个按钮，分别表示</p>
<ol start="0">
<li>执行/暂停</li>
<li>跨步执行（运行下一行代码)</li>
<li>JS执行下一步(忽略异步行为)</li>
<li>JS执行上一步(忽略异步行为)</li>
<li>执行到函数末尾</li>
<li>禁用所有断点</li>
<li>启动/关闭错误时暂停执行</li>
</ol>
<figure><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9950d735053a412eb6314cdf52f1a7c2~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="4.png" tabindex="0" loading="lazy"><figcaption>4.png</figcaption></figure>
<p>在Debugger 模式下可以查看 JavaScript 完整的执行过程，将鼠标移到执行过的变量上可以直接看到变量的值</p>
<p>在调试控制台下方的信息区域，可以查看断点的集合、当前函数的变量、全局变量、闭包和调用堆栈等信息</p>
<h3 id="_2-4-打-dom-断点" tabindex="-1"><a class="header-anchor" href="#_2-4-打-dom-断点" aria-hidden="true">#</a> 2.4 打 DOM 断点</h3>
<p>给 DOM 元素添加断点，当DOM 元素发生变化时，会进入 debugger 模式，具体方法如下：</p>
<p>在控制台的 <strong>元素</strong> 标签页选中 DOM 节点，右键 选择发生中断的条件 可设置为属性修改 ，元素属性变化的时候，就会进入断点模式</p>
<h2 id="_3-使用-vscode-调试" tabindex="-1"><a class="header-anchor" href="#_3-使用-vscode-调试" aria-hidden="true">#</a> 3. 使用 VsCode 调试</h2>
<p>谷歌浏览器的 debugger 插件已经内置了，这里以火狐浏览器举例，步骤如下：</p>
<ol>
<li>
<p>安装 Debugger for Firefox</p>
</li>
<li>
<p>左侧图标点击 <strong>”调试”</strong> ，若无配置可添加配置，按照默认的添加 <code v-pre>lauch</code> 方式即可， 或者直接在根目录下创建一个 <code v-pre>.vscode</code> 目录，里面新建一个 <code v-pre>launch.json</code> 文件，添加上配置, <a href="">官网调试文档</a> 有必要一读, 以火</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{
  // 使用 IntelliSense 了解相关属性。 
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "firefox", // 浏览器类型
      "request": "launch", // 调试连接方式，launch 为新打开一个浏览器实例调试， attach 为附加到已打开的浏览器上
      "name": "firefox", // 调试配置的名称
      "url": "http://localhost:3009/", // 调试项目的主页地址
      "webRoot": "${workspaceFolder}/src", // 文件执行路径
      "pathMappings": [{ "url": "webpack:///src/", "path": "${webRoot}/" }],
      "profile": "default-release" // 可选配置， 火狐浏览器用户档案
    }
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>profile 配置</strong> 是可选的配置项，表示打开浏览器实例之后使用的用户档案，正常打开实例之后，会打开一个类似于进入了无痕窗口模式的浏览器，如果想正常进入浏览器，查看书签使用浏览器扩展，就需要这个配置项了</p>
<p>在火狐的地址栏中输入<code v-pre>about:profiles</code> 可以看到所有的档案方案，这里我直接使用了默认的档案方案</p>
</li>
</ol>
<p>配置完成后，打上断点，然后启动项目，点击调试按钮即可启动 VsCode 调试，执行到断点的地方会自动进入 VsCode 的调试模式，和浏览器中调试方式差不多</p>
<figure><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b1450c9b0b524c1cb534efc79e40d703~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="5.png" tabindex="0" loading="lazy"><figcaption>5.png</figcaption></figure>
<h2 id="_4-一些小技巧" tabindex="-1"><a class="header-anchor" href="#_4-一些小技巧" aria-hidden="true">#</a> 4. 一些小技巧</h2>
<h4 id="console-打印" tabindex="-1"><a class="header-anchor" href="#console-打印" aria-hidden="true">#</a> console 打印</h4>
<ul>
<li>打印 <strong>对象数组集合</strong> 使用 <code v-pre>console.table</code> 可以更图表化的查看数据</li>
<li>打印 <strong>DOM</strong> 对象 使用 <code v-pre>console.dir</code> 可以打印出 <strong>DOM</strong> 节点的具体属性</li>
</ul>
<h4 id="快捷键" tabindex="-1"><a class="header-anchor" href="#快捷键" aria-hidden="true">#</a> 快捷键</h4>
<p><code v-pre>command + option + i</code> 快速打开 开发者工具 <code v-pre>源代码</code> 面板</p>
<p><code v-pre>command + shift + c</code>，打开 开发者工具 <code v-pre>Element</code> 面板，并启用 <strong>元素审查</strong></p>
<h4 id="查看-hover-状态下的元素" tabindex="-1"><a class="header-anchor" href="#查看-hover-状态下的元素" aria-hidden="true">#</a> 查看 <code v-pre>hover</code> 状态下的元素</h4>
<p>打开控制台的 <code v-pre>source</code> （中文源代码) 面板，按下<code v-pre>command + </code> 会进入 <strong>debugger</strong> 模式</p>
<p>选中元素，在 <code v-pre>Element</code> 面板右键 选择强制执行状态 <code v-pre>:hover</code></p>
<h2 id="_5-结语" tabindex="-1"><a class="header-anchor" href="#_5-结语" aria-hidden="true">#</a> 5. 结语</h2>
<p>关于学习前端调试，我认为一文读懂是不可能的，本文的一点内容算是抛砖引玉，供大家参考</p>
<p>奉上一句诗，很贴合调试的学习： <strong>&quot;纸上得来终觉浅，欲知此事要躬行&quot;</strong></p>
</div></template>


