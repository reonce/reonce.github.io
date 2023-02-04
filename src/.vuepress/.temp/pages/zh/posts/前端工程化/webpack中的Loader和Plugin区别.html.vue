<template><div><h1 id="webpack中的loader和plugin区别" tabindex="-1"><a class="header-anchor" href="#webpack中的loader和plugin区别" aria-hidden="true">#</a> webpack中的Loader和Plugin区别</h1>
<h2 id="loader" tabindex="-1"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> Loader</h2>
<p>Loader：直译为&quot;加载器&quot;，主要是解析一些非js文件的，例如：<code v-pre>babel-loader</code>、 <code v-pre>less-loader</code>、<code v-pre>file-loader</code>等
Webpack将一切文件视为模块，但是webpack原生是只能解析js文件，如果想将其他文件也打包的话，就会用到<code v-pre>loader</code>。 所以Loader的作用是让webpack拥有了加载和解析非JavaScript文件的能力。</p>
<h2 id="plugin" tabindex="-1"><a class="header-anchor" href="#plugin" aria-hidden="true">#</a> Plugin</h2>
<p>Plugin:直译为&quot;插件&quot;，可以扩展webpack的功能，让webpack具有更多的灵活性。 在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。例如<code v-pre>html-webpack-plugin</code>、<code v-pre>eslint-webpack-plugin</code>等等。简易实战：在代码中加入版权所属、写作日期，都可以用Plugin实现.</p>
</div></template>


