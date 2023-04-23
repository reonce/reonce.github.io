 # Vite知识调研

1. Vite和WebPack的区别，各有哪些优点和不足
2. Vite打包为什么可以那么“快”

1. 将现有的项目迁移使用Vite存在哪些问题
2. Vite生产环境为什么选择Rollup做构建工具

1. ESbuild和babel-plugin-import相关知识
2. Vite同期竞品比较

------

### 1.Vite和Webpack的区别，各有哪些优点和不足

现在前端主流的打包工具主要以 Webpack 为代表，但随着项目规模的发展，构建方面的痛点越来越突出，最大的感受就是**太慢了**，一方面项目冷启动时必须递归打包整个项目的依赖树，另一方面 JavaScript 语言本身(解释执行、单线程执行)的限制，导致构建性能遇到瓶颈。

这时候，基于ES module的 Vite应运而生，由尤雨溪(以下简称尤老师)带队开发。

**区别**

  webpack构建项目会先**打包**，之后启动本地开发服务器，采用**全部加载**的方案，请求模块时加载模块相应的打包结果。

  vite启动项目则选择的不打包的方案，在浏览器请求某个模块时，根据模块进行编译，实现**按需动态编译**。

从而可以跳过打包过程中的分析模块依赖、编译等操作。当然，不是随便就可以跳过打包的，后文会提到一些关于vite跳过打包要处理的问题。

  **webpack**作为老牌霸主，把工作放在了服务器上，全部编译打包，经过多年的优化，已经十分稳定。缺陷主要是提到的速度慢。

  **vite**是一颗备受瞩目的新星，你可能并没有开始使用或研究它，但你一定耳闻过它。最大的优势是速度快。Vite在使用热更新的时候，改动一个模块，仅需让浏览器重新请求该模块即可，因此效率更高。项目复杂度越大，vite的优势就越明显。它甚至可以比webpack快十倍百倍... 它目前的缺点有：

1. 浏览器兼容性。只能使用在现代浏览器上（支持es2015+）
2. 打包兼容性不稳定。对于CommonJs的模块不完全兼容

1. 开发服务器和产品构建之间的最佳输出和行为存在不一致的情况
2. 生态不及webpack，插件等不够丰富

1. 生产环境下，ESbuild构建对于css的代码分割不够友好

|         | **打包过程**                                                 | **原理**                                                     |
| ------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| webpack | 识别入口->逐层识别依赖->分析/转换/编译/输出代码->打包后的代码 | 逐级递归识别依赖，构建依赖图谱->转化AST语法树->处理代码->转换为浏览器可识别的代码 |
| vite    | -                                                            | 基于浏览器原生支持的 ES module，利用浏览器解析 imports，服务器端按需编译返回 |

  值得一提的是，vite在打包部署到生产环境的时候，是使用**rollup**打包的，后文会提到一些为什么vite选择rollup。从这一点上，个人认为vite的优势主要在**开发阶段**。

[为什么生产环境仍需打包](https://vitejs.cn/guide/why.html#为什么生产环境仍需打包)

### 2. Vite打包为什么可以那么“快”

  Vite引以为傲的是开发环境不打包，尤老师利用了[浏览器的原生 ES Module 支持](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)，直接在 html 文件里写诸如这样的代码：

// index.html
<div id="app"></div>
<script type="module">
  import { createApp } from 'vue'
  import Main from './Main.vue'
  createApp(Main).mount('#app')
</script>

  Vite 会在本地帮你启动一个服务器，当浏览器读取到这个 html 文件之后，会在执行到 import 的时候才去向服务端发送模块的请求，解析成浏览器可以执行的 js 文件返回到浏览器端。也就是说只有在真正使用到这个模块的时，浏览器才会请求并且解析这个模块，最大程度的做到了**按需加载**。

引用Vite 官网上的图，传统的 bundle 模式是这样的：

![img](https://cdn.nlark.com/yuque/0/2021/webp/22685233/1636941361665-3f5b47c6-451e-44dd-b21c-d2e9f9f4230e.webp)

而基于 ESM 的构建模式则是这样的：

![img](https://cdn.nlark.com/yuque/0/2021/webp/22685233/1636941361941-62d4eddf-5462-43a5-9a7b-12de2eca4c32.webp)

  灰色部分是暂时没有用到的路由，甚至完全不会参与构建过程，即使项目中的路由增加，构建速度也不会变慢。

#### 依赖预编译

[依赖预编译原因](https://vitejs.cn/guide/dep-pre-bundling.html)

  Vite 2在为用户启动开发服务器之前，先用 esbuild 把检测到的依赖预先构建了一遍。一方面，它在这个过程中将CommonJS依赖或UMD依赖转换成ESM。另一方面，为了提高性能，它将内部模块的依赖关系转换成单个模块，提高后续页面加载的性能。例如我们导入一个lodash的包，使用它的防抖函数。

import { debounce } from 'lodash' 导入一个命名函数的时候，debounce` 函数的模块内部又依赖了很多其他函数，形成了一个依赖图。

当浏览器请求 debounce 的模块时，又会发现内部有 2 个 import，再这样延伸下去，这个函数内部竟然带来了 600 次请求，虽然服务器处理这样请求时没有问题，但是大量的请求会导致页面的加载速度相当慢。

![img](https://cdn.nlark.com/yuque/0/2021/webp/22685233/1636941361697-2ae3aff6-8817-40cc-a0ea-bb57defa0665.webp)

  这好吗，这不好。于是尤老师想了个折中的办法，利用 [Esbuild](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fevanw%2Fesbuild) 接近无敌的构建速度，让你在没有感知的情况下在启动的时候预先帮你把 debounce 所用到的所有内部模块全部打包成一个传统的 js bundle（大概作用是把各个模块call一下，然后存到一起，方便其他模块调用）。

[Vite 启动服务器源码](https://github.com/vitejs/vite/blob/main/packages/vite/src/node/server/index.ts)

// server/index.ts
const listen = httpServer.listen.bind(httpServer)
httpServer.listen = (async (port: number, ...args: any[]) => {
  try {
   await container.buildStart({})
   // 这里会进行依赖的预构建
   await runOptimize()
  } catch (e) {
   httpServer.emit('error', e)
   return
  }
  return listen(port, ...args)
}) as any

  首先会根据本次运行的入口，来扫描其中的依赖：

let deps: Record<string, string>, missing: Record<string, string>
if (!newDeps) {
  ;({ deps, missing } = await scanImports(config))
}

  scanImports 其实就是利用 Esbuild 构建时提供的钩子去扫描文件中的依赖，收集到 deps 变量里，在扫描到入口文件（比如 index.html）中依赖的模块后，形成类似这样的依赖路径数据结构：

{
  "lodash-es": "node_modules/lodash-es"
}

 之后再根据分析出来的依赖，使用 Esbuild 把它们提前打包成单文件的 bundle。

const esbuildService = await ensureService()
await esbuildService.build({
  entryPoints: Object.keys(flatIdDeps),
  bundle: true,
  format: 'esm',
  external: config.optimizeDeps?.exclude,
  logLevel: 'error',
  splitting: true,
  sourcemap: true
  outdir: cacheDir,
  treeShaking: 'ignore-annotations',
  metafile: esbuildMetaPath,
  define,
  plugins: [esbuildDepPlugin(flatIdDeps, flatIdToExports, config)]
})

  在浏览器请求相关模块时，返回这个预构建好的模块。这样，当浏览器请求 lodash-es 中的 debounce 模块的时候，就可以保证只发生一次接口请求了。

这一步和 Webpack 所做的构建一样，只不过速度快了几十倍。

### 3.将现有的项目迁移使用Vite存在哪些问题

- *Svg组件报错*

Vite 暂时没有对 svg 组件写法的支持，在默认情况下，下面的写法会导致浏览器报错:

import Up from 'common/imgs/up.svg';
function Home() {
  return {
   <>
    // 省略其他子组件
    <Up className="admin-header-user-up" />
   </>
  }
}

解决方案 ： 使用vite-plugin-react-svg插件, 将svg添加到Vite的plugins数组中，实现了以组件方式引用 SVG 资源的能力。

import Up from 'common/imgs/up.svg?component';

- *第三方包内部报错*解决思路： 一般来说，解决 node_modules 中第三方库的 bug 大概有两种思路：第一种思路是将第三方库中有问题的文件 copy 一份进行修复，放在项目目录里面(非 node_modules)，然后通过构建工具 resolve.alias 能力**重定向**到修复后的位置。另一种是通过 patch-package 记录 node_modules 更改记录，生成 patches 目录，然后通过项目的 post-install 脚本在团队中同步这个更改。
- 预构建反复执行Vite 预构建并不只有在服务启动的时候进行，在请求进入的时候也有可能触发预构建，也就是说，**预构建的行为不只是在最开始触发一次，在浏览器访问项目的时候有可能再次触发，甚至是多次触发**。在反复执行的过程中，控制台可能会反复打印new dependencies之类的 log，构建缓存目录会一次次刷新，然后页面卡住。vite仓库中也有相关的issue，这种二次预构建的过程在正常的项目中也是会真实存在的，主要是为了处理项目中一些动态 import 的场景，当这种通过动态 import 的依赖多了之后，也会非常影响构建性能，这种场景下也可以用 **antfu**  开发的 vite-plugin-optimize-persist 这个插件进行自动优化。

- 开发版本和生产版本可能存在差异如官网所说要确保开发服务器和产品构建之间的最佳输出和行为一致并不容易，vite对此做出了很多努力。尽管尤老师说其他构建工具也不是完全一样的，但经过时间和项目的验证，webpack显然更加稳定。如果它不能保证两者的一致性，那在用户选择时，将会成为一个无法妥协的问题。

### 4.Vite生产环境为什么选择Rollup做构建工具

**一、Vite生产环境为什么选择Rollup做构建工具。**

  Vite是一个由原生ESM驱动的Web开发构建工具。在选择构建工具的时也最好可以选择基于ESM的工具。

Rollup是基于ES2015的JavaScript打包工具。它将小文件打包成一个大文件或者更复杂的库和应用，打包既可用于浏览器和Node.js使用。 Rollup最显著的地方就是能让打包文件体积很小。相比其他JavaScript打包工具，Rollup总能打出更小，更快的包。因为Rollup基于ES2015模块，比Webpack和Browserify使用的CommonJS模块机制更高效。

**二、Vite为什么不用Rollup的热更新**

Vite开发模式单独实现了一套热更新（HMR - Hot Module Replacement），可是从[Rollup Awesome](https://github.com/rollup/awesome)中可以发现，Rollup有热更新插件[nollup](https://link.zhihu.com/?target=https%3A//github.com/PepsRyuu/nollup)。为什么Vite不用Rollup的热更新呢？

从Vite的README，我们可以发现：

Vite was created to tackle native ESM-based HMR. When Vite was first released with working ESM-based HMR, there was no other project actively trying to bring native ESM based HMR to production.

创建Vite是为了解决基于esm的本地HMR问题。 当Vite第一次发布基于ESM的HMR时，还没有其他项目积极尝试将基于ESM的本地HMR投入生产。

Vite在发布的时候还没有发现基于纯ESM的热更新的项目，当时的Rollup还没有纯ESM的热更新。因此可能更多的原因是，vite已经自己写了，而不是Rollup这方面做的不够好之类的。

**三、Vite为什么不用Webpack**

Webpack和Rollup功能差不多，以前有种说法是应用开发用Webpack，库开发用Rollup。但Webpack2.0之后也支持了Tree shaking，Rollup也有热更新，而且都有强大的插件开发功能。二者的功能差异越来越模糊。

**二者的区别在写法上也可以看出一些。**

如下是Rollup的配置文件：

// rollup.config.js
import babel from 'rollup-plugin-babel';
export default {
   input: './src/index.js',
   output: {
     file: './dist/bundle.rollup.js',
     format: 'cjs'
   },
   plugins: [
     babel({
       presets: [
         [
           'es2015', {
             modules: false
           }
         ]
       ]
     })
   ]
}

下面是webpack的配置文件：

// webpack.config.js
const path = require('path');
const webpack = require('webpack');
module.exports = {
   entry: {
     'index.webpack': path.resolve('./src/index.js')
   },
   output: {
     libraryTarget: "umd",
     filename: "bundle.webpack.js",
   },
   module: {
     rules: [
       {
         test: /\.js$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
         query: {
           presets: ['es2015']
         }
       }
     ]
   }
};

可以看出：

- Rollup使用新的ESM，而Webpack用的是旧的CommonJS。
- Rollup支持相对路径，webpack需要使用path模块。

Rollup的用法相对比较简便，可以打出更小体积的文件，并且使用了ESM（vite也用了ESM，反正缺点都有了）。

在加上尤老师多少有点和webpack赌气的成分，所以Vite选择了Rollup。

### 5.. ESbuild和babel-plugin-import

  **ESbuild** 是一个类似webpack的构建工具，它的构建速度是 webpack 的几十倍，现在比较火的Vite、Snowpack等就是基于它实现的。

1. js是单线程串行，esbuild是新开一个进程，然后多线程并行，充分发挥多核优势
2. go是纯机器码，肯定要比JIT快

1. 不使用 AST，优化了构建流程。（也带来了一些缺点，后面会说） 

#### 用法 

用法较繁杂，暂时不是我了解的重点，这里放一个ESbulid 使用文档: [esbuild.github.io/api/](https://link.juejin.cn/?target=https%3A%2F%2Fesbuild.github.io%2Fapi%2F)

#### 缺点

这里其实我最想了解的就是它的缺点，因为它或多或少会导致打包的兼容性变差。

  esbuild 牺牲了哪些东西？ 为了保证 esbuild 的编译效率，esbuild 没有提供 AST 的操作能力。所以一些通过 AST 处理代码的 babel-plugin 没有很好的方法过渡到 esbuild 中（例如 babel-plugin-import）。因此如果项目中使用了 babel-plugin-import, 或者一些自定义的 babel-plugin，就可能存在一些问题，目前没有比较完美的迁移方案。

**babel-plugin-import**是一个非常实用的插件，它可以为组件库实现单组件按需加载并且自动引入其样式。在了解它之前，你可能需要了解 [ES6标准入门-Module 的语法](https://es6.ruanyifeng.com/#docs/module)

实际上，现在的ant组件库提供了ES Module的构建产物，直接import {} from 'antd'也是可以进行tree-shaking的，但相关组件的样式怎么办呢。下面是引入样式的示例：

import { Affix, Avatar, Button, Rate } from 'antd';

import 'antd/lib/affix/style';
import 'antd/lib/avatar/style';
import 'antd/lib/button/style';
import 'antd/lib/rate/style';

这好吗，这不好。这时候我们就可以用到babel-plugin-import。它帮我们做了这些工作：

import { Button } from 'antd';
  它帮我们实现👇
var _button = require('antd/lib/button');
require('antd/lib/button/style');

**核心参数**主要是下列三个：

{
  "libraryName": "antd",   // 包名
  "libraryDirectory": "lib", // 目录，默认 lib
  "style": true,       // 是否引入 style
}

其他的可以看这里 => [babel-plugin-import文档](https://github.com/ant-design/babel-plugin-import#usage)

babel-plugin-import 和普遍的 babel 插件一样，会遍历代码的 ast，然后在 ast 上做了一些事情：

1. **收集依赖**：找到 importDeclaration，分析出包 a 和依赖 b,c,d....，假如 a 和 libraryName 一致，就将 b,c,d... 在内部收集起来
2. **判断是否使用**：在多种情况下（比如文中提到的 CallExpression）判断 收集到的 b,c,d... 是否在代码中被使用，如果有使用的，就调用 importMethod 生成新的 impport 语句

1. **生成引入代码**：根据配置项生成代码和样式的 import 语句

当然还有很多需要处理的细节，比如删除旧的 import 等。

除了 antd 和 element 等大型组件库之外，任意的组件库都可以使用 babel-plugin-import 来实现按需加载和自动加载样式。

**使用的先决条件**

由于它的缺点，在使用到生产环境之前，必须确保以下两条：

1. 没有使用一些自定义的 babel-plugin (如 babel-plugin-import)
2. 不需要兼容一些低版本浏览器（esbuild 只能将代码转成 es6）

### 6.Vite同期竞品比较

和 Vite 同时期出现的现代化构建工具还有：

- [Snowpack - The faster frontend build tool](https://www.snowpack.dev/)
- [preactjs/wmr: 👩‍🚀 The tiny all-in-one development tool for modern web apps.](https://github.com/preactjs/wmr)

- [Web Dev Server: Modern Web](https://modern-web.dev/docs/dev-server/overview/)

**Snowpack** 

Snowpack 和 Vite 比较相似，也是基于 ESM 来实现开发环境模块加载，但是它的构建时却是交给用户自己选择，整体的打包体验显得有点支离破碎。

而 Vite 直接整合了 Rollup，为用户提供了完善、开箱即用的解决方案，并且由于这些集成，也方便扩展更多的高级功能。

**WMR** 

WMR 是为 Preact（React替代框架） 而生的，如果你在使用 Preact，可以优先考虑使用这个工具。

**@web/dev-server**

这个工具并未提供开箱即用的框架支持，也需要手动设置 Rollup 构建配置，不过这个项目里包含的很多工具也可以让 Vite 用户受益。

[Vite官方文档-比较](https://cn.vitejs.dev/guide/comparisons.html)

## 总结

Vite 是一个魅力十足的现代化构建工具，尤老师也在各个平台放下狠话，说要替代 Webpack，并怒怼许多vite的负面评论（知乎）。其实 Webpack 在上个世代也是一个贡献非常大的构建工具，只是新特性的出现，出现了可以解决它痛点的解决方案。在我看来，比较理想的方案是开发环境使用vite，生产环境可以使用webpack（vite的Rollup如果优化够好也可以），重难点就是保证它们的一致性以及打包的稳定性。



