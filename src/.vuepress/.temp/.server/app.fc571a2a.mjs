import { defineAsyncComponent, ref, readonly, reactive, defineComponent, onMounted, computed, h as h$4, inject, getCurrentInstance, camelize, capitalize, unref, getCurrentScope, onScopeDispose, nextTick, watch, shallowRef, watchEffect, Transition, provide, onBeforeUnmount, resolveComponent, toRef, TransitionGroup, useSSRContext, createSSRApp } from "vue";
const pagesData$1 = {
  // path: /
  "v-8daa1a0e": () => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./assets/index.html-9f892e5f.js"
  ).then(({ data }) => data),
  // path: /intro.html
  "v-184f4da6": () => import(
    /* webpackChunkName: "v-184f4da6" */
    "./assets/intro.html-5635e3f6.js"
  ).then(({ data }) => data),
  // path: /posts/CSS/CSS3%E9%83%A8%E5%88%86%E6%96%B0%E7%89%B9%E6%80%A7.html
  "v-687eeb1a": () => import(
    /* webpackChunkName: "v-687eeb1a" */
    "./assets/CSS3部分新特性.html-3a24e5cf.js"
  ).then(({ data }) => data),
  // path: /posts/CSS/CSS%E6%96%87%E5%AD%97%E6%8D%A2%E8%A1%8C%E8%AF%AD%E6%B3%95%E6%B1%87%E6%80%BB.html
  "v-2ce88be4": () => import(
    /* webpackChunkName: "v-2ce88be4" */
    "./assets/CSS文字换行语法汇总.html-51f1546e.js"
  ).then(({ data }) => data),
  // path: /posts/CSS/requestAnimationFrame%20%E6%B7%B1%E5%BA%A6%E8%A7%A3%E8%AF%BB.html
  "v-2a6ef733": () => import(
    /* webpackChunkName: "v-2a6ef733" */
    "./assets/requestAnimationFrame 深度解读.html-71f75ef6.js"
  ).then(({ data }) => data),
  // path: /posts/CSS/%E5%8A%A8%E7%94%BBRequestAnimations.html
  "v-62e8e475": () => import(
    /* webpackChunkName: "v-62e8e475" */
    "./assets/动画RequestAnimations.html-f2aaeace.js"
  ).then(({ data }) => data),
  // path: /posts/CSS/%E6%9C%AA%E7%9F%A5%E9%AB%98%E5%BA%A6%E5%85%83%E7%B4%A0%EF%BC%8C%E5%9E%82%E7%9B%B4%E6%B0%B4%E5%B9%B3%E5%B1%85%E4%B8%AD.html
  "v-ed5b4fbe": () => import(
    /* webpackChunkName: "v-ed5b4fbe" */
    "./assets/未知高度元素，垂直水平居中.html-ac42c165.js"
  ).then(({ data }) => data),
  // path: /posts/CSS/%E7%B3%BB%E7%BB%9F%E5%AD%97%E4%BD%93%E5%AF%BC%E8%87%B4%E7%9A%84CSS%E9%94%99%E4%BD%8D%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93.html
  "v-5eabaff1": () => import(
    /* webpackChunkName: "v-5eabaff1" */
    "./assets/系统字体导致的CSS错位问题总结.html-ca1101d0.js"
  ).then(({ data }) => data),
  // path: /posts/Chore/Bash%E5%AD%A6%E4%B9%A0(%E4%B8%80).html
  "v-c5ea9104": () => import(
    /* webpackChunkName: "v-c5ea9104" */
    "./assets/Bash学习(一).html-e76f8f5f.js"
  ).then(({ data }) => data),
  // path: /posts/Chore/Bash%E5%AD%A6%E4%B9%A0(%E4%BA%8C).html
  "v-20b61768": () => import(
    /* webpackChunkName: "v-20b61768" */
    "./assets/Bash学习(二).html-fa39b91b.js"
  ).then(({ data }) => data),
  // path: /posts/Chore/TypeScript%20%E7%B4%A2%E5%BC%95%E7%AD%BE%E5%90%8D%E5%AF%BC%E8%87%B4%E7%9A%84%E6%8A%A5%E9%94%99%E9%97%AE%E9%A2%98.html
  "v-68a1d3a7": () => import(
    /* webpackChunkName: "v-68a1d3a7" */
    "./assets/TypeScript 索引签名导致的报错问题.html-c897b79a.js"
  ).then(({ data }) => data),
  // path: /posts/Chore/%E6%B5%85%E8%AF%BB%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F.html
  "v-6742941a": () => import(
    /* webpackChunkName: "v-6742941a" */
    "./assets/浅读正则表达式.html-b5564842.js"
  ).then(({ data }) => data),
  // path: /posts/Chore/%E7%A8%8B%E5%BA%8F%E8%A6%81%E9%9C%80%E8%A6%81%E5%AD%A6%E4%B9%A0%E7%9A%84%E8%BD%AF%E6%8A%80%E8%83%BD.html
  "v-a67cdd4c": () => import(
    /* webpackChunkName: "v-a67cdd4c" */
    "./assets/程序要需要学习的软技能.html-03d61949.js"
  ).then(({ data }) => data),
  // path: /posts/JS%E8%BF%9B%E9%98%B6-%E6%BA%90%E7%A0%81%E9%98%85%E8%AF%BB/Redux%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86.html
  "v-73358dfa": () => import(
    /* webpackChunkName: "v-73358dfa" */
    "./assets/Redux实现原理.html-ad8effed.js"
  ).then(({ data }) => data),
  // path: /posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/Filber.html
  "v-c341ed9c": () => import(
    /* webpackChunkName: "v-c341ed9c" */
    "./assets/Filber.html-13c2f252.js"
  ).then(({ data }) => data),
  // path: /posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/React%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E4%B8%AD%E4%BD%BF%E7%94%A8%E9%98%B2%E6%8A%96%E8%8A%82%E6%B5%81.html
  "v-1f21b52a": () => import(
    /* webpackChunkName: "v-1f21b52a" */
    "./assets/React函数组件中使用防抖节流.html-b89ee528.js"
  ).then(({ data }) => data),
  // path: /posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/input.html
  "v-2a6b0260": () => import(
    /* webpackChunkName: "v-2a6b0260" */
    "./assets/input.html-155c8f40.js"
  ).then(({ data }) => data),
  // path: /posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/%E5%A6%82%E4%BD%95%E9%98%B2%E6%AD%A2Input%E7%9A%84%E6%8B%BC%E9%9F%B3%E8%BE%93%E5%85%A5%E8%A7%A6%E5%8F%91onChange.html
  "v-68b2b365": () => import(
    /* webpackChunkName: "v-68b2b365" */
    "./assets/如何防止Input的拼音输入触发onChange.html-d8d1ddfe.js"
  ).then(({ data }) => data),
  // path: /posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Vite%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E6%8B%A9Rollup%E5%81%9A%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7.html
  "v-8b00529c": () => import(
    /* webpackChunkName: "v-8b00529c" */
    "./assets/Vite生产环境为什么选择Rollup做构建工具.html-e34769c9.js"
  ).then(({ data }) => data),
  // path: /posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Webpack%E4%BC%98%E7%BC%BA%E7%82%B9.html
  "v-db3b8e32": () => import(
    /* webpackChunkName: "v-db3b8e32" */
    "./assets/Webpack优缺点.html-d81705c8.js"
  ).then(({ data }) => data),
  // path: /posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/git%20cz%E7%9A%84%E9%85%8D%E7%BD%AE%E5%91%BD%E4%BB%A4.html
  "v-417f036a": () => import(
    /* webpackChunkName: "v-417f036a" */
    "./assets/git cz的配置命令.html-6216abaa.js"
  ).then(({ data }) => data),
  // path: /posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/webpack%E4%B8%AD%E7%9A%84Loader%E5%92%8CPlugin%E5%8C%BA%E5%88%AB.html
  "v-640f9dee": () => import(
    /* webpackChunkName: "v-640f9dee" */
    "./assets/webpack中的Loader和Plugin区别.html-232a3f0d.js"
  ).then(({ data }) => data),
  // path: /posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/webpack%E4%BB%8E0%E6%90%AD%E5%BB%BAreact%E9%A1%B9%E7%9B%AE.html
  "v-4b7131b0": () => import(
    /* webpackChunkName: "v-4b7131b0" */
    "./assets/webpack从0搭建react项目.html-395b8f06.js"
  ).then(({ data }) => data),
  // path: /posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E5%89%8D%E7%AB%AF%E8%B7%AF%E7%94%B1%E7%9A%84%E4%B8%A4%E7%A7%8D%E6%A8%A1%E5%BC%8F.html
  "v-0a3e262b": () => import(
    /* webpackChunkName: "v-0a3e262b" */
    "./assets/前端路由的两种模式.html-945c9ac7.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/%E4%BD%A0%E5%A6%82%E4%BD%95%E5%AF%B9%E7%BD%91%E7%AB%99%E7%9A%84%E6%96%87%E4%BB%B6%E5%92%8C%E8%B5%84%E6%BA%90%E8%BF%9B%E8%A1%8C%E4%BC%98%E5%8C%96%E7%9A%84%202979065a206a4a3d8c82ff7b672cab0c.html
  "v-ce6345e0": () => import(
    /* webpackChunkName: "v-ce6345e0" */
    "./assets/你如何对网站的文件和资源进行优化的 2979065a206a4a3d8c82ff7b672cab0c.html-308c671a.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/%E8%99%9A%E6%8B%9F%E5%88%97%E8%A1%A8.html
  "v-61c606ba": () => import(
    /* webpackChunkName: "v-61c606ba" */
    "./assets/虚拟列表.html-9ec9d233.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/%E8%AF%B7%E8%AF%B4%E5%87%BA%E4%B8%89%E7%A7%8D%E5%87%8F%E5%B0%91%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD%E6%97%B6%E9%97%B4%E7%9A%84%E6%96%B9%E6%B3%95%E3%80%82%204f65bc03f263461bb0a38a4ef0dd8c48.html
  "v-0b88481a": () => import(
    /* webpackChunkName: "v-0b88481a" */
    "./assets/请说出三种减少页面加载时间的方法。 4f65bc03f263461bb0a38a4ef0dd8c48.html-1cb64201.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/ES5%E5%AE%9E%E7%8E%B0let%E4%B8%8Econst%203f9f5daaef2448dca1a3e7e8e8474461.html
  "v-37a57d9f": () => import(
    /* webpackChunkName: "v-37a57d9f" */
    "./assets/ES5实现let与const 3f9f5daaef2448dca1a3e7e8e8474461.html-27e8b060.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%BB%93%E9%A2%98%E6%80%9D%E8%B7%AF.html
  "v-36c6d27b": () => import(
    /* webpackChunkName: "v-36c6d27b" */
    "./assets/动态规划结题思路.html-4ef7619f.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E5%8F%AF%E9%80%86%E5%BA%8F%E6%89%A7%E8%A1%8C%E4%B8%B2%E8%81%94%E5%87%BD%E6%95%B0.html
  "v-0a39012e": () => import(
    /* webpackChunkName: "v-0a39012e" */
    "./assets/可逆序执行串联函数.html-91b48614.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E5%A4%9A%E5%BC%82%E6%AD%A5%E4%BB%BB%E5%8A%A1%E4%BF%9D%E6%8C%813%E4%B8%AA%E5%B9%B6%E5%8F%91.html
  "v-70d1a412": () => import(
    /* webpackChunkName: "v-70d1a412" */
    "./assets/多异步任务保持3个并发.html-e1449e04.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E5%8F%AF%E9%93%BE%E5%BC%8F%E8%B0%83%E7%94%A8%E3%80%81%E5%8F%AF%E7%AD%89%E5%BE%85%E6%89%A7%E8%A1%8C%E7%9A%84%E7%B1%BB%203ff786584ab24b19b3bca0b613b1a1a5.html
  "v-b16f5fc6": () => import(
    /* webpackChunkName: "v-b16f5fc6" */
    "./assets/实现一个可链式调用、可等待执行的类 3ff786584ab24b19b3bca0b613b1a1a5.html-6996b17d.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E6%AF%94%E8%BE%83%E4%B8%A4%E4%B8%AA%E5%AF%B9%E8%B1%A1%E6%98%AF%E5%90%A6%E5%85%A8%E7%AD%89.html
  "v-6795f498": () => import(
    /* webpackChunkName: "v-6795f498" */
    "./assets/比较两个对象是否全等.html-0637f65f.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E6%B7%B1%E6%8B%B7%E8%B4%9D.html
  "v-1bdc6284": () => import(
    /* webpackChunkName: "v-1bdc6284" */
    "./assets/深拷贝.html-49a3bbc5.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/Event%20Loop%E5%9C%A8%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%AD%E5%92%8CNode%E7%8E%AF%E5%A2%83%E4%B8%AD%E7%9A%84%E5%8C%BA%E5%88%AB.html
  "v-925b3b1a": () => import(
    /* webpackChunkName: "v-925b3b1a" */
    "./assets/Event Loop在浏览器中和Node环境中的区别.html-72bc0a2d.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/HTTP1%20x%E5%92%8CHTTP2%200%E5%8C%BA%E5%88%AB.html
  "v-09c2bb22": () => import(
    /* webpackChunkName: "v-09c2bb22" */
    "./assets/HTTP1 x和HTTP2 0区别.html-7e5cb1fb.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/Http%E7%9A%84session%E5%92%8Ccookie.html
  "v-43a90af2": () => import(
    /* webpackChunkName: "v-43a90af2" */
    "./assets/Http的session和cookie.html-96a8477c.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%92%8C%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B.html
  "v-1e7178c0": () => import(
    /* webpackChunkName: "v-1e7178c0" */
    "./assets/三次握手和四次挥手.html-23c4bc3e.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E4%BA%8B%E4%BB%B6%E4%BB%A3%E7%90%86%E7%9A%84%E7%90%86%E8%A7%A3.html
  "v-4192394a": () => import(
    /* webpackChunkName: "v-4192394a" */
    "./assets/事件代理的理解.html-544ea462.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E5%89%8D%E7%AB%AF%E7%9A%84%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D%EF%BC%8C%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6.html
  "v-1e5b26d9": () => import(
    /* webpackChunkName: "v-1e5b26d9" */
    "./assets/前端的内存分配，垃圾回收.html-d20aed1d.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E6%91%86%E8%84%B1%20console.log%20%EF%BC%8C%E4%BD%BF%E7%94%A8%E6%9B%B4%E4%BC%98%E8%B4%A8%E7%9A%84%E5%89%8D%E7%AB%AF%E8%B0%83%E8%AF%95%E6%96%B9%E6%A1%88.html
  "v-42badac9": () => import(
    /* webpackChunkName: "v-42badac9" */
    "./assets/摆脱 console.log ，使用更优质的前端调试方案.html-86f94c2f.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%A4%9A%E8%AF%AD%E8%A8%80.html
  "v-444987b6": () => import(
    /* webpackChunkName: "v-444987b6" */
    "./assets/浏览器多语言.html-5f1951d5.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E8%B7%A8%E5%9F%9F%E6%89%A7%E8%A1%8C%E3%80%81HTTP%E7%AE%80%E5%8D%95%E5%A4%8D%E6%9D%82%E8%AF%B7%E6%B1%82.html
  "v-6901a767": () => import(
    /* webpackChunkName: "v-6901a767" */
    "./assets/跨域执行、HTTP简单复杂请求.html-acb3b14f.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E8%B7%A8%E5%9F%9F%E8%AF%A6%E8%A7%A3.html
  "v-cc5e397e": () => import(
    /* webpackChunkName: "v-cc5e397e" */
    "./assets/跨域详解.html-4f2710fb.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/Array.from%20%E6%96%B9%E6%B3%95%E6%B7%B1%E5%BA%A6%E8%A7%A3%E8%AF%BB.html
  "v-0ec8fb2a": () => import(
    /* webpackChunkName: "v-0ec8fb2a" */
    "./assets/Array.from 方法深度解读.html-d22f9de3.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/JSON%E6%96%B9%E6%B3%95.html
  "v-1d9b7dc0": () => import(
    /* webpackChunkName: "v-1d9b7dc0" */
    "./assets/JSON方法.html-cb08285e.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/JS%E5%A4%B1%E7%9C%9F%E8%BF%90%E7%AE%97%E7%9A%84%E5%8E%9F%E5%9B%A0.html
  "v-ce4f1900": () => import(
    /* webpackChunkName: "v-ce4f1900" */
    "./assets/JS失真运算的原因.html-083c3205.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/JS%E5%AF%B9%E8%B1%A1%E4%B8%AD%E7%9A%84with%E8%AF%AD%E5%8F%A5.html
  "v-e0a87c6e": () => import(
    /* webpackChunkName: "v-e0a87c6e" */
    "./assets/JS对象中的with语句.html-8b39e145.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/Proxy%E5%92%8CObject.defineProperty%E7%9A%84%E5%8C%BA%E5%88%AB.html
  "v-77797307": () => import(
    /* webpackChunkName: "v-77797307" */
    "./assets/Proxy和Object.defineProperty的区别.html-e6066297.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/async%E7%9A%84%E4%BA%A7%E7%94%9F%EF%BC%8C%E7%94%9F%E6%88%90%E5%99%A8%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB.html
  "v-2ab47c70": () => import(
    /* webpackChunkName: "v-2ab47c70" */
    "./assets/async的产生，生成器相关解读.html-f01c606a.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%84%9F%E6%82%9F/%E5%BA%94%E8%AF%A5%E6%8A%8A%E7%B2%BE%E5%8A%9B%E6%8A%95%E5%85%A5%E5%88%B0%E5%93%AA%E4%BA%9B%E4%BA%8B%E6%83%85%E4%B8%8A.html
  "v-102063fb": () => import(
    /* webpackChunkName: "v-102063fb" */
    "./assets/应该把精力投入到哪些事情上.html-96a7ee19.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%84%9F%E6%82%9F/%E6%97%B6%E9%97%B4%E7%AE%A1%E7%90%86.html
  "v-5bd6fcb6": () => import(
    /* webpackChunkName: "v-5bd6fcb6" */
    "./assets/时间管理.html-9a4c1382.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%84%9F%E6%82%9F/%E6%9B%BC%E5%B7%B4%E5%AD%A6%E4%B9%A0%E6%B3%95.html
  "v-21de64b9": () => import(
    /* webpackChunkName: "v-21de64b9" */
    "./assets/曼巴学习法.html-ced8f1e8.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%84%9F%E6%82%9F/%E6%AF%8F%E5%BD%93%E6%83%B3%E6%94%BE%E5%BC%83%E8%BF%9B%E5%85%A5%E8%88%92%E9%80%82%E5%9C%88%E7%9A%84%E6%97%B6%E5%80%99.html
  "v-024a88b8": () => import(
    /* webpackChunkName: "v-024a88b8" */
    "./assets/每当想放弃进入舒适圈的时候.html-efbf7ac2.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%84%9F%E6%82%9F/%E7%BA%A0%E7%BB%93%E6%97%B6%E5%BA%94%E8%AF%A5%E5%A6%82%E4%BD%95%E6%8A%89%E6%8B%A9.html
  "v-5a97986f": () => import(
    /* webpackChunkName: "v-5a97986f" */
    "./assets/纠结时应该如何抉择.html-738462cd.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%84%9F%E6%82%9F/%E7%BC%96%E5%86%99%E4%BB%A3%E7%A0%81%E7%9A%84%E5%93%AA%E4%BA%9B%E6%96%B9%E9%9D%A2%E8%83%BD%E5%A4%9F%E4%BD%BF%E4%BD%A0%E5%85%B4%E5%A5%8B%E6%88%96%E6%84%9F%E5%85%B4%E8%B6%A3%EF%BC%9F%203297254ce03d4138993062f560433d03.html
  "v-31fe5478": () => import(
    /* webpackChunkName: "v-31fe5478" */
    "./assets/编写代码的哪些方面能够使你兴奋或感兴趣？ 3297254ce03d4138993062f560433d03.html-03ae4c74.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%84%9F%E6%82%9F/%E9%80%89%E6%8B%A9%E5%A4%A7%E4%BA%8E%E5%8A%AA%E5%8A%9B.html
  "v-1fc1e26c": () => import(
    /* webpackChunkName: "v-1fc1e26c" */
    "./assets/选择大于努力.html-19030f06.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%84%9F%E6%82%9F/%E9%80%89%E6%8B%A9%E6%AF%94%E5%8A%AA%E5%8A%9B%E9%87%8D%E8%A6%81.html
  "v-1b49a928": () => import(
    /* webpackChunkName: "v-1b49a928" */
    "./assets/选择比努力重要.html-d5cf5539.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%84%9F%E6%82%9F/%E9%A2%84%E4%BC%B0%E4%B8%9A%E5%8A%A1%E9%94%99%E8%AF%AF%E5%BC%95%E5%8F%91%E7%9A%84%E6%80%9D%E8%80%83.html
  "v-71031c10": () => import(
    /* webpackChunkName: "v-71031c10" */
    "./assets/预估业务错误引发的思考.html-838df215.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/13.2%E7%94%A8%E6%88%B7%E4%BB%A3%E7%90%86%E6%A3%80%E6%B5%8B.html
  "v-5ec61931": () => import(
    /* webpackChunkName: "v-5ec61931" */
    "./assets/13.2用户代理检测.html-5d563012.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/13.3%20%E8%BD%AF%E4%BB%B6%E4%B8%8E%E7%A1%AC%E4%BB%B6%E6%A3%80%E6%B5%8B.html
  "v-3e882234": () => import(
    /* webpackChunkName: "v-3e882234" */
    "./assets/13.3 软件与硬件检测.html-89082b49.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/14.1%20%E8%8A%82%E7%82%B9%E5%B1%82%E7%BA%A7%20Node%E8%8A%82%E7%82%B9.html
  "v-d2452084": () => import(
    /* webpackChunkName: "v-d2452084" */
    "./assets/14.1 节点层级 Node节点.html-c98a4390.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/14.1.3%20Element%E7%B1%BB%E5%9E%8B.html
  "v-caede9ae": () => import(
    /* webpackChunkName: "v-caede9ae" */
    "./assets/14.1.3 Element类型.html-60f5fce2.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/14.1.4%20Text%E7%B1%BB%E5%9E%8B.html
  "v-31e2d74b": () => import(
    /* webpackChunkName: "v-31e2d74b" */
    "./assets/14.1.4 Text类型.html-bfe2be00.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/16.2.1%20%20%E5%AD%98%E5%8F%96%E5%85%83%E7%B4%A0%E6%A0%B7%E5%BC%8F.html
  "v-2ce62492": () => import(
    /* webpackChunkName: "v-2ce62492" */
    "./assets/16.2.1  存取元素样式.html-4df77e92.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/17.1%E4%BA%8B%E4%BB%B6%E6%B5%81-17.2%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E7%A8%8B%E5%BA%8F.html
  "v-6012c088": () => import(
    /* webpackChunkName: "v-6012c088" */
    "./assets/17.1事件流-17.2事件处理程序.html-4e412842.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/JSON.html
  "v-2b3b3850": () => import(
    /* webpackChunkName: "v-2b3b3850" */
    "./assets/JSON.html-0223ac2f.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/Javascript%E7%B1%BB.html
  "v-31f424c2": () => import(
    /* webpackChunkName: "v-31f424c2" */
    "./assets/Javascript类.html-4f577d7d.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/Web%20Socket.html
  "v-2009c8b6": () => import(
    /* webpackChunkName: "v-2009c8b6" */
    "./assets/Web Socket.html-50c9e8f3.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/script%E6%A0%87%E7%AD%BE-%E8%84%9A%E6%9C%AC%E5%8A%A0%E8%BD%BD.html
  "v-5bb40ee2": () => import(
    /* webpackChunkName: "v-5bb40ee2" */
    "./assets/script标签-脚本加载.html-e839611a.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E4%BA%8B%E4%BB%B6.html
  "v-0195f72f": () => import(
    /* webpackChunkName: "v-0195f72f" */
    "./assets/事件.html-84fdca8d.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E4%BB%A3%E7%90%86%E4%B8%8E%E5%8F%8D%E5%B0%84.html
  "v-08636197": () => import(
    /* webpackChunkName: "v-08636197" */
    "./assets/代理与反射.html-f2e28753.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E5%8D%81%E5%9B%9B%E7%AB%A014.3%20MutationObServer%E6%8E%A5%E5%8F%A3.html
  "v-62407bf4": () => import(
    /* webpackChunkName: "v-62407bf4" */
    "./assets/十四章14.3 MutationObServer接口.html-70e3b5dc.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E5%8F%98%E9%87%8F.html
  "v-fb4efdd4": () => import(
    /* webpackChunkName: "v-fb4efdd4" */
    "./assets/变量.html-6f4b15f9.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%E4%B8%8E%E4%BD%9C%E7%94%A8%E5%9F%9F.html
  "v-42a677d8": () => import(
    /* webpackChunkName: "v-42a677d8" */
    "./assets/执行上下文与作用域.html-894e2463.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E7%AC%AC%E5%8D%81%E4%B8%89%E7%AB%A0%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E6%A3%80%E6%B5%8B%2013.3%20%E8%BD%AF%E4%BB%B6%E4%B8%8E%E7%A1%AC%E4%BB%B6%E6%A3%80%E6%B5%8B%EF%BC%88%E6%9C%AC%E7%AB%A0%E5%AE%8C%EF%BC%89.html
  "v-d9e213d4": () => import(
    /* webpackChunkName: "v-d9e213d4" */
    "./assets/第十三章 客户端检测 13.3 软件与硬件检测（本章完）.html-a598b5ae.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E7%AC%AC%E5%8D%81%E4%BA%8C%E7%AB%A0BOM12.1.1-6.html
  "v-e23fa3cc": () => import(
    /* webpackChunkName: "v-e23fa3cc" */
    "./assets/第十二章BOM12.1.1-6.html-cc552b21.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E7%AC%AC%E5%8D%81%E4%BA%94%E7%AB%A0%2015.1-15.3.html
  "v-78000d0c": () => import(
    /* webpackChunkName: "v-78000d0c" */
    "./assets/第十五章 15.1-15.3.html-eb85152d.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E9%97%AD%E5%8C%85.html
  "v-0fc2c1e2": () => import(
    /* webpackChunkName: "v-0fc2c1e2" */
    "./assets/闭包.html-3c141ba8.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E7%9C%8B%E4%BB%A3%E7%A0%81%E8%AF%B4%E7%BB%93%E6%9E%9C/%E7%9C%8B%E4%BB%A3%E7%A0%81%E8%AF%B4%E7%BB%93%E6%9E%9C%20Promise%E9%A2%98.html
  "v-7b4fe6f4": () => import(
    /* webpackChunkName: "v-7b4fe6f4" */
    "./assets/看代码说结果 Promise题.html-4f695202.js"
  ).then(({ data }) => data),
  // path: /404.html
  "v-3706649a": () => import(
    /* webpackChunkName: "v-3706649a" */
    "./assets/404.html-6c530a7b.js"
  ).then(({ data }) => data),
  // path: /posts/CSS/
  "v-63514721": () => import(
    /* webpackChunkName: "v-63514721" */
    "./assets/index.html-437f8dab.js"
  ).then(({ data }) => data),
  // path: /posts/
  "v-e1e3da16": () => import(
    /* webpackChunkName: "v-e1e3da16" */
    "./assets/index.html-4b6d219c.js"
  ).then(({ data }) => data),
  // path: /posts/Chore/
  "v-555c9a72": () => import(
    /* webpackChunkName: "v-555c9a72" */
    "./assets/index.html-ad8e4e05.js"
  ).then(({ data }) => data),
  // path: /posts/JS%E8%BF%9B%E9%98%B6-%E6%BA%90%E7%A0%81%E9%98%85%E8%AF%BB/
  "v-4282cf02": () => import(
    /* webpackChunkName: "v-4282cf02" */
    "./assets/index.html-a286c535.js"
  ).then(({ data }) => data),
  // path: /posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/
  "v-def4f67e": () => import(
    /* webpackChunkName: "v-def4f67e" */
    "./assets/index.html-9bc58cca.js"
  ).then(({ data }) => data),
  // path: /posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/
  "v-4c082264": () => import(
    /* webpackChunkName: "v-4c082264" */
    "./assets/index.html-0b3dbbc0.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/
  "v-d07c574c": () => import(
    /* webpackChunkName: "v-d07c574c" */
    "./assets/index.html-deaebbb3.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/
  "v-2f43e305": () => import(
    /* webpackChunkName: "v-2f43e305" */
    "./assets/index.html-7abb5bfc.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/
  "v-0d167dd1": () => import(
    /* webpackChunkName: "v-0d167dd1" */
    "./assets/index.html-ad2b68aa.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/
  "v-896225c0": () => import(
    /* webpackChunkName: "v-896225c0" */
    "./assets/index.html-57947d93.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/
  "v-883e369e": () => import(
    /* webpackChunkName: "v-883e369e" */
    "./assets/index.html-5e8521b7.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%84%9F%E6%82%9F/
  "v-5d66c790": () => import(
    /* webpackChunkName: "v-5d66c790" */
    "./assets/index.html-a508dd1b.js"
  ).then(({ data }) => data),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/
  "v-3df4ddc1": () => import(
    /* webpackChunkName: "v-3df4ddc1" */
    "./assets/index.html-5809af86.js"
  ).then(({ data }) => data),
  // path: /posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E7%9C%8B%E4%BB%A3%E7%A0%81%E8%AF%B4%E7%BB%93%E6%9E%9C/
  "v-3715f198": () => import(
    /* webpackChunkName: "v-3715f198" */
    "./assets/index.html-d9c74355.js"
  ).then(({ data }) => data),
  // path: /category/
  "v-5bc93818": () => import(
    /* webpackChunkName: "v-5bc93818" */
    "./assets/index.html-f49ecb98.js"
  ).then(({ data }) => data),
  // path: /tag/
  "v-744d024e": () => import(
    /* webpackChunkName: "v-744d024e" */
    "./assets/index.html-78e741f6.js"
  ).then(({ data }) => data),
  // path: /article/
  "v-e52c881c": () => import(
    /* webpackChunkName: "v-e52c881c" */
    "./assets/index.html-925bf84b.js"
  ).then(({ data }) => data),
  // path: /star/
  "v-154dc4c4": () => import(
    /* webpackChunkName: "v-154dc4c4" */
    "./assets/index.html-c50e487d.js"
  ).then(({ data }) => data),
  // path: /timeline/
  "v-01560935": () => import(
    /* webpackChunkName: "v-01560935" */
    "./assets/index.html-d6d5e091.js"
  ).then(({ data }) => data)
};
const siteData$1 = JSON.parse('{"base":"/","lang":"en-US","title":"","description":"","head":[],"locales":{"/":{"lang":"zh-CN","title":"饮东的博客","description":"你好，欢迎访问饮东的博客"}}}');
process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" ? Object.freeze([]) : [];
const isArray$2 = Array.isArray;
const isFunction$1 = (val) => typeof val === "function";
const isString$1 = (val) => typeof val === "string";
var resolveHeadIdentifier = ([
  tag,
  attrs,
  content
]) => {
  if (tag === "meta" && attrs.name) {
    return `${tag}.${attrs.name}`;
  }
  if (["title", "base"].includes(tag)) {
    return tag;
  }
  if (tag === "template" && attrs.id) {
    return `${tag}.${attrs.id}`;
  }
  return JSON.stringify([tag, attrs, content]);
};
var dedupeHead = (head) => {
  const identifierSet = /* @__PURE__ */ new Set();
  const result = [];
  head.forEach((item) => {
    const identifier = resolveHeadIdentifier(item);
    if (!identifierSet.has(identifier)) {
      identifierSet.add(identifier);
      result.push(item);
    }
  });
  return result;
};
var ensureEndingSlash = (str) => /(\.html|\/)$/.test(str) ? str : str + "/";
var isLinkFtp = (link) => link.startsWith("ftp://");
var isLinkHttp = (link) => /^(https?:)?\/\//.test(link);
var markdownLinkRegexp = /.md((\?|#).*)?$/;
var isLinkExternal = (link, base = "/") => {
  if (isLinkHttp(link) || isLinkFtp(link)) {
    return true;
  }
  if (link.startsWith("/") && !link.startsWith(base) && !markdownLinkRegexp.test(link)) {
    return true;
  }
  return false;
};
var isLinkMailto = (link) => /^mailto:/.test(link);
var isLinkTel = (link) => /^tel:/.test(link);
var isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
var removeEndingSlash = (str) => str.replace(/\/$/, "");
var removeLeadingSlash = (str) => str.replace(/^\//, "");
var resolveLocalePath = (locales2, routePath) => {
  const localePaths = Object.keys(locales2).sort((a2, b2) => {
    const levelDelta = b2.split("/").length - a2.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    }
    return b2.length - a2.length;
  });
  for (const localePath of localePaths) {
    if (routePath.startsWith(localePath)) {
      return localePath;
    }
  }
  return "/";
};
const pagesComponents = {
  // path: /
  "v-8daa1a0e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./assets/index.html-cd97d14b.js"
  )),
  // path: /intro.html
  "v-184f4da6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-184f4da6" */
    "./assets/intro.html-b7b7c1b4.js"
  )),
  // path: /posts/CSS/CSS3%E9%83%A8%E5%88%86%E6%96%B0%E7%89%B9%E6%80%A7.html
  "v-687eeb1a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-687eeb1a" */
    "./assets/CSS3部分新特性.html-1c292f73.js"
  )),
  // path: /posts/CSS/CSS%E6%96%87%E5%AD%97%E6%8D%A2%E8%A1%8C%E8%AF%AD%E6%B3%95%E6%B1%87%E6%80%BB.html
  "v-2ce88be4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2ce88be4" */
    "./assets/CSS文字换行语法汇总.html-9a64b964.js"
  )),
  // path: /posts/CSS/requestAnimationFrame%20%E6%B7%B1%E5%BA%A6%E8%A7%A3%E8%AF%BB.html
  "v-2a6ef733": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2a6ef733" */
    "./assets/requestAnimationFrame 深度解读.html-ee8bd851.js"
  )),
  // path: /posts/CSS/%E5%8A%A8%E7%94%BBRequestAnimations.html
  "v-62e8e475": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-62e8e475" */
    "./assets/动画RequestAnimations.html-e4b79b61.js"
  )),
  // path: /posts/CSS/%E6%9C%AA%E7%9F%A5%E9%AB%98%E5%BA%A6%E5%85%83%E7%B4%A0%EF%BC%8C%E5%9E%82%E7%9B%B4%E6%B0%B4%E5%B9%B3%E5%B1%85%E4%B8%AD.html
  "v-ed5b4fbe": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-ed5b4fbe" */
    "./assets/未知高度元素，垂直水平居中.html-fba07eb5.js"
  )),
  // path: /posts/CSS/%E7%B3%BB%E7%BB%9F%E5%AD%97%E4%BD%93%E5%AF%BC%E8%87%B4%E7%9A%84CSS%E9%94%99%E4%BD%8D%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93.html
  "v-5eabaff1": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5eabaff1" */
    "./assets/系统字体导致的CSS错位问题总结.html-8daa11de.js"
  )),
  // path: /posts/Chore/Bash%E5%AD%A6%E4%B9%A0(%E4%B8%80).html
  "v-c5ea9104": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-c5ea9104" */
    "./assets/Bash学习(一).html-1fb040b7.js"
  )),
  // path: /posts/Chore/Bash%E5%AD%A6%E4%B9%A0(%E4%BA%8C).html
  "v-20b61768": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-20b61768" */
    "./assets/Bash学习(二).html-fbe08bb8.js"
  )),
  // path: /posts/Chore/TypeScript%20%E7%B4%A2%E5%BC%95%E7%AD%BE%E5%90%8D%E5%AF%BC%E8%87%B4%E7%9A%84%E6%8A%A5%E9%94%99%E9%97%AE%E9%A2%98.html
  "v-68a1d3a7": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-68a1d3a7" */
    "./assets/TypeScript 索引签名导致的报错问题.html-9f2f0a05.js"
  )),
  // path: /posts/Chore/%E6%B5%85%E8%AF%BB%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F.html
  "v-6742941a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6742941a" */
    "./assets/浅读正则表达式.html-0de2a0b7.js"
  )),
  // path: /posts/Chore/%E7%A8%8B%E5%BA%8F%E8%A6%81%E9%9C%80%E8%A6%81%E5%AD%A6%E4%B9%A0%E7%9A%84%E8%BD%AF%E6%8A%80%E8%83%BD.html
  "v-a67cdd4c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-a67cdd4c" */
    "./assets/程序要需要学习的软技能.html-52164095.js"
  )),
  // path: /posts/JS%E8%BF%9B%E9%98%B6-%E6%BA%90%E7%A0%81%E9%98%85%E8%AF%BB/Redux%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86.html
  "v-73358dfa": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-73358dfa" */
    "./assets/Redux实现原理.html-9357d097.js"
  )),
  // path: /posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/Filber.html
  "v-c341ed9c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-c341ed9c" */
    "./assets/Filber.html-df947edb.js"
  )),
  // path: /posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/React%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E4%B8%AD%E4%BD%BF%E7%94%A8%E9%98%B2%E6%8A%96%E8%8A%82%E6%B5%81.html
  "v-1f21b52a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1f21b52a" */
    "./assets/React函数组件中使用防抖节流.html-d05b1386.js"
  )),
  // path: /posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/input.html
  "v-2a6b0260": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2a6b0260" */
    "./assets/input.html-46dbc7f3.js"
  )),
  // path: /posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/%E5%A6%82%E4%BD%95%E9%98%B2%E6%AD%A2Input%E7%9A%84%E6%8B%BC%E9%9F%B3%E8%BE%93%E5%85%A5%E8%A7%A6%E5%8F%91onChange.html
  "v-68b2b365": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-68b2b365" */
    "./assets/如何防止Input的拼音输入触发onChange.html-34e02df0.js"
  )),
  // path: /posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Vite%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E6%8B%A9Rollup%E5%81%9A%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7.html
  "v-8b00529c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-8b00529c" */
    "./assets/Vite生产环境为什么选择Rollup做构建工具.html-d471981a.js"
  )),
  // path: /posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Webpack%E4%BC%98%E7%BC%BA%E7%82%B9.html
  "v-db3b8e32": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-db3b8e32" */
    "./assets/Webpack优缺点.html-d075913f.js"
  )),
  // path: /posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/git%20cz%E7%9A%84%E9%85%8D%E7%BD%AE%E5%91%BD%E4%BB%A4.html
  "v-417f036a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-417f036a" */
    "./assets/git cz的配置命令.html-74dd1fc6.js"
  )),
  // path: /posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/webpack%E4%B8%AD%E7%9A%84Loader%E5%92%8CPlugin%E5%8C%BA%E5%88%AB.html
  "v-640f9dee": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-640f9dee" */
    "./assets/webpack中的Loader和Plugin区别.html-4a58296c.js"
  )),
  // path: /posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/webpack%E4%BB%8E0%E6%90%AD%E5%BB%BAreact%E9%A1%B9%E7%9B%AE.html
  "v-4b7131b0": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4b7131b0" */
    "./assets/webpack从0搭建react项目.html-07fd5ca8.js"
  )),
  // path: /posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E5%89%8D%E7%AB%AF%E8%B7%AF%E7%94%B1%E7%9A%84%E4%B8%A4%E7%A7%8D%E6%A8%A1%E5%BC%8F.html
  "v-0a3e262b": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-0a3e262b" */
    "./assets/前端路由的两种模式.html-524bbb4c.js"
  )),
  // path: /posts/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/%E4%BD%A0%E5%A6%82%E4%BD%95%E5%AF%B9%E7%BD%91%E7%AB%99%E7%9A%84%E6%96%87%E4%BB%B6%E5%92%8C%E8%B5%84%E6%BA%90%E8%BF%9B%E8%A1%8C%E4%BC%98%E5%8C%96%E7%9A%84%202979065a206a4a3d8c82ff7b672cab0c.html
  "v-ce6345e0": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-ce6345e0" */
    "./assets/你如何对网站的文件和资源进行优化的 2979065a206a4a3d8c82ff7b672cab0c.html-647702e1.js"
  )),
  // path: /posts/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/%E8%99%9A%E6%8B%9F%E5%88%97%E8%A1%A8.html
  "v-61c606ba": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-61c606ba" */
    "./assets/虚拟列表.html-559fe695.js"
  )),
  // path: /posts/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/%E8%AF%B7%E8%AF%B4%E5%87%BA%E4%B8%89%E7%A7%8D%E5%87%8F%E5%B0%91%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD%E6%97%B6%E9%97%B4%E7%9A%84%E6%96%B9%E6%B3%95%E3%80%82%204f65bc03f263461bb0a38a4ef0dd8c48.html
  "v-0b88481a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-0b88481a" */
    "./assets/请说出三种减少页面加载时间的方法。 4f65bc03f263461bb0a38a4ef0dd8c48.html-0e1c8741.js"
  )),
  // path: /posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/ES5%E5%AE%9E%E7%8E%B0let%E4%B8%8Econst%203f9f5daaef2448dca1a3e7e8e8474461.html
  "v-37a57d9f": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-37a57d9f" */
    "./assets/ES5实现let与const 3f9f5daaef2448dca1a3e7e8e8474461.html-3ed89f46.js"
  )),
  // path: /posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%BB%93%E9%A2%98%E6%80%9D%E8%B7%AF.html
  "v-36c6d27b": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-36c6d27b" */
    "./assets/动态规划结题思路.html-c2335a5e.js"
  )),
  // path: /posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E5%8F%AF%E9%80%86%E5%BA%8F%E6%89%A7%E8%A1%8C%E4%B8%B2%E8%81%94%E5%87%BD%E6%95%B0.html
  "v-0a39012e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-0a39012e" */
    "./assets/可逆序执行串联函数.html-5c5240cb.js"
  )),
  // path: /posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E5%A4%9A%E5%BC%82%E6%AD%A5%E4%BB%BB%E5%8A%A1%E4%BF%9D%E6%8C%813%E4%B8%AA%E5%B9%B6%E5%8F%91.html
  "v-70d1a412": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-70d1a412" */
    "./assets/多异步任务保持3个并发.html-bd5faf45.js"
  )),
  // path: /posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E5%8F%AF%E9%93%BE%E5%BC%8F%E8%B0%83%E7%94%A8%E3%80%81%E5%8F%AF%E7%AD%89%E5%BE%85%E6%89%A7%E8%A1%8C%E7%9A%84%E7%B1%BB%203ff786584ab24b19b3bca0b613b1a1a5.html
  "v-b16f5fc6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-b16f5fc6" */
    "./assets/实现一个可链式调用、可等待执行的类 3ff786584ab24b19b3bca0b613b1a1a5.html-114db817.js"
  )),
  // path: /posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E6%AF%94%E8%BE%83%E4%B8%A4%E4%B8%AA%E5%AF%B9%E8%B1%A1%E6%98%AF%E5%90%A6%E5%85%A8%E7%AD%89.html
  "v-6795f498": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6795f498" */
    "./assets/比较两个对象是否全等.html-a49c65cc.js"
  )),
  // path: /posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E6%B7%B1%E6%8B%B7%E8%B4%9D.html
  "v-1bdc6284": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1bdc6284" */
    "./assets/深拷贝.html-934e3ad5.js"
  )),
  // path: /posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/Event%20Loop%E5%9C%A8%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%AD%E5%92%8CNode%E7%8E%AF%E5%A2%83%E4%B8%AD%E7%9A%84%E5%8C%BA%E5%88%AB.html
  "v-925b3b1a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-925b3b1a" */
    "./assets/Event Loop在浏览器中和Node环境中的区别.html-3a208577.js"
  )),
  // path: /posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/HTTP1%20x%E5%92%8CHTTP2%200%E5%8C%BA%E5%88%AB.html
  "v-09c2bb22": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-09c2bb22" */
    "./assets/HTTP1 x和HTTP2 0区别.html-65c20d96.js"
  )),
  // path: /posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/Http%E7%9A%84session%E5%92%8Ccookie.html
  "v-43a90af2": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-43a90af2" */
    "./assets/Http的session和cookie.html-a24bb6c1.js"
  )),
  // path: /posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%92%8C%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B.html
  "v-1e7178c0": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1e7178c0" */
    "./assets/三次握手和四次挥手.html-273d726b.js"
  )),
  // path: /posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E4%BA%8B%E4%BB%B6%E4%BB%A3%E7%90%86%E7%9A%84%E7%90%86%E8%A7%A3.html
  "v-4192394a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4192394a" */
    "./assets/事件代理的理解.html-74ca4dfc.js"
  )),
  // path: /posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E5%89%8D%E7%AB%AF%E7%9A%84%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D%EF%BC%8C%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6.html
  "v-1e5b26d9": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1e5b26d9" */
    "./assets/前端的内存分配，垃圾回收.html-e71e12ef.js"
  )),
  // path: /posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E6%91%86%E8%84%B1%20console.log%20%EF%BC%8C%E4%BD%BF%E7%94%A8%E6%9B%B4%E4%BC%98%E8%B4%A8%E7%9A%84%E5%89%8D%E7%AB%AF%E8%B0%83%E8%AF%95%E6%96%B9%E6%A1%88.html
  "v-42badac9": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-42badac9" */
    "./assets/摆脱 console.log ，使用更优质的前端调试方案.html-b7b19fa5.js"
  )),
  // path: /posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%A4%9A%E8%AF%AD%E8%A8%80.html
  "v-444987b6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-444987b6" */
    "./assets/浏览器多语言.html-571231ff.js"
  )),
  // path: /posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E8%B7%A8%E5%9F%9F%E6%89%A7%E8%A1%8C%E3%80%81HTTP%E7%AE%80%E5%8D%95%E5%A4%8D%E6%9D%82%E8%AF%B7%E6%B1%82.html
  "v-6901a767": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6901a767" */
    "./assets/跨域执行、HTTP简单复杂请求.html-38df5872.js"
  )),
  // path: /posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E8%B7%A8%E5%9F%9F%E8%AF%A6%E8%A7%A3.html
  "v-cc5e397e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-cc5e397e" */
    "./assets/跨域详解.html-41d4a95f.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/Array.from%20%E6%96%B9%E6%B3%95%E6%B7%B1%E5%BA%A6%E8%A7%A3%E8%AF%BB.html
  "v-0ec8fb2a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-0ec8fb2a" */
    "./assets/Array.from 方法深度解读.html-c5e53654.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/JSON%E6%96%B9%E6%B3%95.html
  "v-1d9b7dc0": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1d9b7dc0" */
    "./assets/JSON方法.html-1764ec54.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/JS%E5%A4%B1%E7%9C%9F%E8%BF%90%E7%AE%97%E7%9A%84%E5%8E%9F%E5%9B%A0.html
  "v-ce4f1900": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-ce4f1900" */
    "./assets/JS失真运算的原因.html-7a761f83.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/JS%E5%AF%B9%E8%B1%A1%E4%B8%AD%E7%9A%84with%E8%AF%AD%E5%8F%A5.html
  "v-e0a87c6e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-e0a87c6e" */
    "./assets/JS对象中的with语句.html-3c9b9c07.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/Proxy%E5%92%8CObject.defineProperty%E7%9A%84%E5%8C%BA%E5%88%AB.html
  "v-77797307": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-77797307" */
    "./assets/Proxy和Object.defineProperty的区别.html-29b6bfe2.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/async%E7%9A%84%E4%BA%A7%E7%94%9F%EF%BC%8C%E7%94%9F%E6%88%90%E5%99%A8%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB.html
  "v-2ab47c70": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2ab47c70" */
    "./assets/async的产生，生成器相关解读.html-ff00c1eb.js"
  )),
  // path: /posts/%E6%84%9F%E6%82%9F/%E5%BA%94%E8%AF%A5%E6%8A%8A%E7%B2%BE%E5%8A%9B%E6%8A%95%E5%85%A5%E5%88%B0%E5%93%AA%E4%BA%9B%E4%BA%8B%E6%83%85%E4%B8%8A.html
  "v-102063fb": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-102063fb" */
    "./assets/应该把精力投入到哪些事情上.html-150d9b2a.js"
  )),
  // path: /posts/%E6%84%9F%E6%82%9F/%E6%97%B6%E9%97%B4%E7%AE%A1%E7%90%86.html
  "v-5bd6fcb6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5bd6fcb6" */
    "./assets/时间管理.html-e116efa6.js"
  )),
  // path: /posts/%E6%84%9F%E6%82%9F/%E6%9B%BC%E5%B7%B4%E5%AD%A6%E4%B9%A0%E6%B3%95.html
  "v-21de64b9": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-21de64b9" */
    "./assets/曼巴学习法.html-8d1df0d2.js"
  )),
  // path: /posts/%E6%84%9F%E6%82%9F/%E6%AF%8F%E5%BD%93%E6%83%B3%E6%94%BE%E5%BC%83%E8%BF%9B%E5%85%A5%E8%88%92%E9%80%82%E5%9C%88%E7%9A%84%E6%97%B6%E5%80%99.html
  "v-024a88b8": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-024a88b8" */
    "./assets/每当想放弃进入舒适圈的时候.html-b25731d4.js"
  )),
  // path: /posts/%E6%84%9F%E6%82%9F/%E7%BA%A0%E7%BB%93%E6%97%B6%E5%BA%94%E8%AF%A5%E5%A6%82%E4%BD%95%E6%8A%89%E6%8B%A9.html
  "v-5a97986f": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5a97986f" */
    "./assets/纠结时应该如何抉择.html-9bb2d2a4.js"
  )),
  // path: /posts/%E6%84%9F%E6%82%9F/%E7%BC%96%E5%86%99%E4%BB%A3%E7%A0%81%E7%9A%84%E5%93%AA%E4%BA%9B%E6%96%B9%E9%9D%A2%E8%83%BD%E5%A4%9F%E4%BD%BF%E4%BD%A0%E5%85%B4%E5%A5%8B%E6%88%96%E6%84%9F%E5%85%B4%E8%B6%A3%EF%BC%9F%203297254ce03d4138993062f560433d03.html
  "v-31fe5478": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-31fe5478" */
    "./assets/编写代码的哪些方面能够使你兴奋或感兴趣？ 3297254ce03d4138993062f560433d03.html-bc052f75.js"
  )),
  // path: /posts/%E6%84%9F%E6%82%9F/%E9%80%89%E6%8B%A9%E5%A4%A7%E4%BA%8E%E5%8A%AA%E5%8A%9B.html
  "v-1fc1e26c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1fc1e26c" */
    "./assets/选择大于努力.html-dd47ccfa.js"
  )),
  // path: /posts/%E6%84%9F%E6%82%9F/%E9%80%89%E6%8B%A9%E6%AF%94%E5%8A%AA%E5%8A%9B%E9%87%8D%E8%A6%81.html
  "v-1b49a928": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1b49a928" */
    "./assets/选择比努力重要.html-06a4ee65.js"
  )),
  // path: /posts/%E6%84%9F%E6%82%9F/%E9%A2%84%E4%BC%B0%E4%B8%9A%E5%8A%A1%E9%94%99%E8%AF%AF%E5%BC%95%E5%8F%91%E7%9A%84%E6%80%9D%E8%80%83.html
  "v-71031c10": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-71031c10" */
    "./assets/预估业务错误引发的思考.html-3f2b5645.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/13.2%E7%94%A8%E6%88%B7%E4%BB%A3%E7%90%86%E6%A3%80%E6%B5%8B.html
  "v-5ec61931": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5ec61931" */
    "./assets/13.2用户代理检测.html-812e04ff.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/13.3%20%E8%BD%AF%E4%BB%B6%E4%B8%8E%E7%A1%AC%E4%BB%B6%E6%A3%80%E6%B5%8B.html
  "v-3e882234": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-3e882234" */
    "./assets/13.3 软件与硬件检测.html-f2a781c8.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/14.1%20%E8%8A%82%E7%82%B9%E5%B1%82%E7%BA%A7%20Node%E8%8A%82%E7%82%B9.html
  "v-d2452084": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-d2452084" */
    "./assets/14.1 节点层级 Node节点.html-c50e0a81.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/14.1.3%20Element%E7%B1%BB%E5%9E%8B.html
  "v-caede9ae": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-caede9ae" */
    "./assets/14.1.3 Element类型.html-c71168e0.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/14.1.4%20Text%E7%B1%BB%E5%9E%8B.html
  "v-31e2d74b": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-31e2d74b" */
    "./assets/14.1.4 Text类型.html-1a797b72.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/16.2.1%20%20%E5%AD%98%E5%8F%96%E5%85%83%E7%B4%A0%E6%A0%B7%E5%BC%8F.html
  "v-2ce62492": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2ce62492" */
    "./assets/16.2.1  存取元素样式.html-82985dc1.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/17.1%E4%BA%8B%E4%BB%B6%E6%B5%81-17.2%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E7%A8%8B%E5%BA%8F.html
  "v-6012c088": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6012c088" */
    "./assets/17.1事件流-17.2事件处理程序.html-d8cffd7e.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/JSON.html
  "v-2b3b3850": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2b3b3850" */
    "./assets/JSON.html-38e2a665.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/Javascript%E7%B1%BB.html
  "v-31f424c2": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-31f424c2" */
    "./assets/Javascript类.html-ea1acc22.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/Web%20Socket.html
  "v-2009c8b6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2009c8b6" */
    "./assets/Web Socket.html-c23c733e.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/script%E6%A0%87%E7%AD%BE-%E8%84%9A%E6%9C%AC%E5%8A%A0%E8%BD%BD.html
  "v-5bb40ee2": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5bb40ee2" */
    "./assets/script标签-脚本加载.html-f5f15288.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E4%BA%8B%E4%BB%B6.html
  "v-0195f72f": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-0195f72f" */
    "./assets/事件.html-46b289ef.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E4%BB%A3%E7%90%86%E4%B8%8E%E5%8F%8D%E5%B0%84.html
  "v-08636197": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-08636197" */
    "./assets/代理与反射.html-f7b7fd44.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E5%8D%81%E5%9B%9B%E7%AB%A014.3%20MutationObServer%E6%8E%A5%E5%8F%A3.html
  "v-62407bf4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-62407bf4" */
    "./assets/十四章14.3 MutationObServer接口.html-59081e3a.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E5%8F%98%E9%87%8F.html
  "v-fb4efdd4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-fb4efdd4" */
    "./assets/变量.html-28b9c9de.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%E4%B8%8E%E4%BD%9C%E7%94%A8%E5%9F%9F.html
  "v-42a677d8": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-42a677d8" */
    "./assets/执行上下文与作用域.html-85897e95.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E7%AC%AC%E5%8D%81%E4%B8%89%E7%AB%A0%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E6%A3%80%E6%B5%8B%2013.3%20%E8%BD%AF%E4%BB%B6%E4%B8%8E%E7%A1%AC%E4%BB%B6%E6%A3%80%E6%B5%8B%EF%BC%88%E6%9C%AC%E7%AB%A0%E5%AE%8C%EF%BC%89.html
  "v-d9e213d4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-d9e213d4" */
    "./assets/第十三章 客户端检测 13.3 软件与硬件检测（本章完）.html-72d75981.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E7%AC%AC%E5%8D%81%E4%BA%8C%E7%AB%A0BOM12.1.1-6.html
  "v-e23fa3cc": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-e23fa3cc" */
    "./assets/第十二章BOM12.1.1-6.html-4ede07ad.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E7%AC%AC%E5%8D%81%E4%BA%94%E7%AB%A0%2015.1-15.3.html
  "v-78000d0c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-78000d0c" */
    "./assets/第十五章 15.1-15.3.html-83fb9361.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E9%97%AD%E5%8C%85.html
  "v-0fc2c1e2": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-0fc2c1e2" */
    "./assets/闭包.html-d43a5750.js"
  )),
  // path: /posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E7%9C%8B%E4%BB%A3%E7%A0%81%E8%AF%B4%E7%BB%93%E6%9E%9C/%E7%9C%8B%E4%BB%A3%E7%A0%81%E8%AF%B4%E7%BB%93%E6%9E%9C%20Promise%E9%A2%98.html
  "v-7b4fe6f4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-7b4fe6f4" */
    "./assets/看代码说结果 Promise题.html-0cbee7c9.js"
  )),
  // path: /404.html
  "v-3706649a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-3706649a" */
    "./assets/404.html-037f8eb2.js"
  )),
  // path: /posts/CSS/
  "v-63514721": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-63514721" */
    "./assets/index.html-e73b2edf.js"
  )),
  // path: /posts/
  "v-e1e3da16": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-e1e3da16" */
    "./assets/index.html-fc56c7e8.js"
  )),
  // path: /posts/Chore/
  "v-555c9a72": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-555c9a72" */
    "./assets/index.html-1d162352.js"
  )),
  // path: /posts/JS%E8%BF%9B%E9%98%B6-%E6%BA%90%E7%A0%81%E9%98%85%E8%AF%BB/
  "v-4282cf02": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4282cf02" */
    "./assets/index.html-95910b7d.js"
  )),
  // path: /posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/
  "v-def4f67e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-def4f67e" */
    "./assets/index.html-5529a836.js"
  )),
  // path: /posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/
  "v-4c082264": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4c082264" */
    "./assets/index.html-8c54358e.js"
  )),
  // path: /posts/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/
  "v-d07c574c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-d07c574c" */
    "./assets/index.html-e18e9054.js"
  )),
  // path: /posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/
  "v-2f43e305": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2f43e305" */
    "./assets/index.html-98206fdb.js"
  )),
  // path: /posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/
  "v-0d167dd1": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-0d167dd1" */
    "./assets/index.html-eb4dde5b.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/
  "v-896225c0": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-896225c0" */
    "./assets/index.html-14d34e4b.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/
  "v-883e369e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-883e369e" */
    "./assets/index.html-e489365b.js"
  )),
  // path: /posts/%E6%84%9F%E6%82%9F/
  "v-5d66c790": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5d66c790" */
    "./assets/index.html-4ce791bf.js"
  )),
  // path: /posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/
  "v-3df4ddc1": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-3df4ddc1" */
    "./assets/index.html-71ec8ccd.js"
  )),
  // path: /posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E7%9C%8B%E4%BB%A3%E7%A0%81%E8%AF%B4%E7%BB%93%E6%9E%9C/
  "v-3715f198": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-3715f198" */
    "./assets/index.html-f0e491be.js"
  )),
  // path: /category/
  "v-5bc93818": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5bc93818" */
    "./assets/index.html-d8e9a019.js"
  )),
  // path: /tag/
  "v-744d024e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-744d024e" */
    "./assets/index.html-dbcf72de.js"
  )),
  // path: /article/
  "v-e52c881c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-e52c881c" */
    "./assets/index.html-6fe96b5b.js"
  )),
  // path: /star/
  "v-154dc4c4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-154dc4c4" */
    "./assets/index.html-e9483f18.js"
  )),
  // path: /timeline/
  "v-01560935": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-01560935" */
    "./assets/index.html-0e2d15e2.js"
  ))
};
var layoutsSymbol = Symbol(
  ""
);
var pagesData = ref(pagesData$1);
var pageDataEmpty = readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  headers: []
});
var pageData = ref(pageDataEmpty);
var usePageData = () => pageData;
var pageFrontmatterSymbol = Symbol(
  ""
);
var usePageFrontmatter = () => {
  const pageFrontmatter = inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
var pageHeadSymbol = Symbol(
  ""
);
var usePageHead = () => {
  const pageHead = inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
var pageHeadTitleSymbol = Symbol(
  ""
);
var usePageHeadTitle = () => {
  const pageHeadTitle = inject(pageHeadTitleSymbol);
  if (!pageHeadTitle) {
    throw new Error("usePageHeadTitle() is called without provider.");
  }
  return pageHeadTitle;
};
var pageLangSymbol = Symbol(
  ""
);
var usePageLang = () => {
  const pageLang = inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
var pageLayoutSymbol = Symbol(
  ""
);
var usePageLayout = () => {
  const pageLayout = inject(pageLayoutSymbol);
  if (!pageLayout) {
    throw new Error("usePageLayout() is called without provider.");
  }
  return pageLayout;
};
var routeLocaleSymbol = Symbol(
  ""
);
var useRouteLocale = () => {
  const routeLocale = inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
var siteData = ref(siteData$1);
var useSiteData = () => siteData;
var siteLocaleDataSymbol = Symbol(
  ""
);
var useSiteLocaleData = () => {
  const siteLocaleData = inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
var LAYOUT_NAME_DEFAULT = "Layout";
var LAYOUT_NAME_NOT_FOUND = "NotFound";
var resolvers = reactive({
  resolveLayouts: (clientConfigs2) => clientConfigs2.reduce(
    (prev, item) => ({
      ...prev,
      ...item.layouts
    }),
    {}
  ),
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver == null ? void 0 : pageDataResolver());
    return pageData2 ?? pageDataEmpty;
  },
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString$1(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray$2(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  resolvePageHeadTitle: (page2, siteLocale) => [page2.title, siteLocale.title].filter((item) => !!item).join(" | "),
  resolvePageLang: (page2) => page2.lang || "en",
  resolvePageLayout: (page2, layouts) => {
    let layoutName;
    if (page2.path) {
      const frontmatterLayout = page2.frontmatter.layout;
      if (isString$1(frontmatterLayout)) {
        layoutName = frontmatterLayout;
      } else {
        layoutName = LAYOUT_NAME_DEFAULT;
      }
    } else {
      layoutName = LAYOUT_NAME_NOT_FOUND;
    }
    return layouts[layoutName];
  },
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  resolveSiteLocaleData: (site, routeLocale) => ({
    ...site,
    ...site.locales[routeLocale]
  })
});
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_2, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a2, _b2;
      return isMounted.value ? (_b2 = (_a2 = ctx.slots).default) == null ? void 0 : _b2.call(_a2) : null;
    };
  }
});
var Content = defineComponent({
  name: "Content",
  props: {
    pageKey: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const page2 = usePageData();
    const pageComponent = computed(
      () => pagesComponents[props.pageKey || page2.value.key]
    );
    return () => pageComponent.value ? h$4(pageComponent.value) : h$4(
      "div",
      "404 Not Found"
    );
  }
});
var defineClientConfig = (clientConfig = {}) => clientConfig;
var withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  return `${"/"}${removeLeadingSlash(url)}`;
};
const hopeInject = "";
const clientConfig0 = {};
var u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b2 = new u16(31);
  for (var i2 = 0; i2 < 31; ++i2) {
    b2[i2] = start += 1 << eb[i2 - 1];
  }
  var r2 = new u32(b2[30]);
  for (var i2 = 1; i2 < 30; ++i2) {
    for (var j = b2[i2]; j < b2[i2 + 1]; ++j) {
      r2[j] = j - b2[i2] << 5 | i2;
    }
  }
  return [b2, r2];
};
var _a$1 = freb(fleb, 2), fl = _a$1[0], revfl = _a$1[1];
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b[0];
var rev = new u16(32768);
for (var i$4 = 0; i$4 < 32768; ++i$4) {
  var x$2 = (i$4 & 43690) >>> 1 | (i$4 & 21845) << 1;
  x$2 = (x$2 & 52428) >>> 2 | (x$2 & 13107) << 2;
  x$2 = (x$2 & 61680) >>> 4 | (x$2 & 3855) << 4;
  rev[i$4] = ((x$2 & 65280) >>> 8 | (x$2 & 255) << 8) >>> 1;
}
var hMap = function(cd, mb, r2) {
  var s2 = cd.length;
  var i2 = 0;
  var l2 = new u16(mb);
  for (; i2 < s2; ++i2) {
    if (cd[i2])
      ++l2[cd[i2] - 1];
  }
  var le2 = new u16(mb);
  for (i2 = 0; i2 < mb; ++i2) {
    le2[i2] = le2[i2 - 1] + l2[i2 - 1] << 1;
  }
  var co;
  if (r2) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        var sv = i2 << 4 | cd[i2];
        var r_1 = mb - cd[i2];
        var v2 = le2[cd[i2] - 1]++ << r_1;
        for (var m2 = v2 | (1 << r_1) - 1; v2 <= m2; ++v2) {
          co[rev[v2] >>> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s2);
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        co[i2] = rev[le2[cd[i2] - 1]++] >>> 15 - cd[i2];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (var i$4 = 0; i$4 < 144; ++i$4)
  flt[i$4] = 8;
for (var i$4 = 144; i$4 < 256; ++i$4)
  flt[i$4] = 9;
for (var i$4 = 256; i$4 < 280; ++i$4)
  flt[i$4] = 7;
for (var i$4 = 280; i$4 < 288; ++i$4)
  flt[i$4] = 8;
var fdt = new u8(32);
for (var i$4 = 0; i$4 < 32; ++i$4)
  fdt[i$4] = 5;
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a2) {
  var m2 = a2[0];
  for (var i2 = 1; i2 < a2.length; ++i2) {
    if (a2[i2] > m2)
      m2 = a2[i2];
  }
  return m2;
};
var bits = function(d2, p2, m2) {
  var o2 = p2 / 8 | 0;
  return (d2[o2] | d2[o2 + 1] << 8) >> (p2 & 7) & m2;
};
var bits16 = function(d2, p2) {
  var o2 = p2 / 8 | 0;
  return (d2[o2] | d2[o2 + 1] << 8 | d2[o2 + 2] << 16) >> (p2 & 7);
};
var shft = function(p2) {
  return (p2 + 7) / 8 | 0;
};
var slc = function(v2, s2, e2) {
  if (s2 == null || s2 < 0)
    s2 = 0;
  if (e2 == null || e2 > v2.length)
    e2 = v2.length;
  var n2 = new (v2.BYTES_PER_ELEMENT == 2 ? u16 : v2.BYTES_PER_ELEMENT == 4 ? u32 : u8)(e2 - s2);
  n2.set(v2.subarray(s2, e2));
  return n2;
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt2) {
  var e2 = new Error(msg || ec[ind]);
  e2.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e2, err);
  if (!nt2)
    throw e2;
  return e2;
};
var inflt = function(dat, buf, st2) {
  var sl = dat.length;
  if (!sl || st2 && st2.f && !st2.l)
    return buf || new u8(0);
  var noBuf = !buf || st2;
  var noSt = !st2 || st2.i;
  if (!st2)
    st2 = {};
  if (!buf)
    buf = new u8(sl * 3);
  var cbuf = function(l3) {
    var bl = buf.length;
    if (l3 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l3));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st2.f || 0, pos = st2.p || 0, bt2 = st2.b || 0, lm = st2.l, dm = st2.d, lbt = st2.m, dbt = st2.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type2 = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type2) {
        var s2 = shft(pos) + 4, l2 = dat[s2 - 4] | dat[s2 - 3] << 8, t2 = s2 + l2;
        if (t2 > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (noBuf)
          cbuf(bt2 + l2);
        buf.set(dat.subarray(s2, t2), bt2);
        st2.b = bt2 += l2, st2.p = pos = t2 * 8, st2.f = final;
        continue;
      } else if (type2 == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type2 == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i2 = 0; i2 < hcLen; ++i2) {
          clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i2 = 0; i2 < tl; ) {
          var r2 = clm[bits(dat, pos, clbmsk)];
          pos += r2 & 15;
          var s2 = r2 >>> 4;
          if (s2 < 16) {
            ldt[i2++] = s2;
          } else {
            var c2 = 0, n2 = 0;
            if (s2 == 16)
              n2 = 3 + bits(dat, pos, 3), pos += 2, c2 = ldt[i2 - 1];
            else if (s2 == 17)
              n2 = 3 + bits(dat, pos, 7), pos += 3;
            else if (s2 == 18)
              n2 = 11 + bits(dat, pos, 127), pos += 7;
            while (n2--)
              ldt[i2++] = c2;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (noBuf)
      cbuf(bt2 + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c2 = lm[bits16(dat, pos) & lms], sym = c2 >>> 4;
      pos += c2 & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c2)
        err(2);
      if (sym < 256)
        buf[bt2++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i2 = sym - 257, b2 = fleb[i2];
          add = bits(dat, pos, (1 << b2) - 1) + fl[i2];
          pos += b2;
        }
        var d2 = dm[bits16(dat, pos) & dms], dsym = d2 >>> 4;
        if (!d2)
          err(3);
        pos += d2 & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b2 = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b2) - 1, pos += b2;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (noBuf)
          cbuf(bt2 + 131072);
        var end = bt2 + add;
        for (; bt2 < end; bt2 += 4) {
          buf[bt2] = buf[bt2 - dt];
          buf[bt2 + 1] = buf[bt2 + 1 - dt];
          buf[bt2 + 2] = buf[bt2 + 2 - dt];
          buf[bt2 + 3] = buf[bt2 + 3 - dt];
        }
        bt2 = end;
      }
    }
    st2.l = lm, st2.p = lpos, st2.b = bt2, st2.f = final;
    if (lm)
      final = 1, st2.m = lbt, st2.d = dm, st2.n = dbt;
  } while (!final);
  return bt2 == buf.length ? buf : slc(buf, 0, bt2);
};
var et$1 = /* @__PURE__ */ new u8(0);
var zlv = function(d2) {
  if ((d2[0] & 15) != 8 || d2[0] >>> 4 > 7 || (d2[0] << 8 | d2[1]) % 31)
    err(6, "invalid zlib data");
  if (d2[1] & 32)
    err(6, "invalid zlib data: preset dictionaries not supported");
};
function unzlibSync(data, out) {
  return inflt((zlv(data), data.subarray(2, -4)), out);
}
var te = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et$1, { stream: true });
  tds = 1;
} catch (e2) {
}
var dutf8 = function(d2) {
  for (var r2 = "", i2 = 0; ; ) {
    var c2 = d2[i2++];
    var eb = (c2 > 127) + (c2 > 223) + (c2 > 239);
    if (i2 + eb > d2.length)
      return [r2, slc(d2, i2 - 1)];
    if (!eb)
      r2 += String.fromCharCode(c2);
    else if (eb == 3) {
      c2 = ((c2 & 15) << 18 | (d2[i2++] & 63) << 12 | (d2[i2++] & 63) << 6 | d2[i2++] & 63) - 65536, r2 += String.fromCharCode(55296 | c2 >> 10, 56320 | c2 & 1023);
    } else if (eb & 1)
      r2 += String.fromCharCode((c2 & 31) << 6 | d2[i2++] & 63);
    else
      r2 += String.fromCharCode((c2 & 15) << 12 | (d2[i2++] & 63) << 6 | d2[i2++] & 63);
  }
};
function strToU8(str, latin1) {
  if (latin1) {
    var ar_1 = new u8(str.length);
    for (var i2 = 0; i2 < str.length; ++i2)
      ar_1[i2] = str.charCodeAt(i2);
    return ar_1;
  }
  if (te)
    return te.encode(str);
  var l2 = str.length;
  var ar = new u8(str.length + (str.length >> 1));
  var ai = 0;
  var w2 = function(v2) {
    ar[ai++] = v2;
  };
  for (var i2 = 0; i2 < l2; ++i2) {
    if (ai + 5 > ar.length) {
      var n2 = new u8(ai + 8 + (l2 - i2 << 1));
      n2.set(ar);
      ar = n2;
    }
    var c2 = str.charCodeAt(i2);
    if (c2 < 128 || latin1)
      w2(c2);
    else if (c2 < 2048)
      w2(192 | c2 >> 6), w2(128 | c2 & 63);
    else if (c2 > 55295 && c2 < 57344)
      c2 = 65536 + (c2 & 1023 << 10) | str.charCodeAt(++i2) & 1023, w2(240 | c2 >> 18), w2(128 | c2 >> 12 & 63), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
    else
      w2(224 | c2 >> 12), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
  }
  return slc(ar, 0, ai);
}
function strFromU8(dat, latin1) {
  if (latin1) {
    var r2 = "";
    for (var i2 = 0; i2 < dat.length; i2 += 16384)
      r2 += String.fromCharCode.apply(null, dat.subarray(i2, i2 + 16384));
    return r2;
  } else if (td)
    return td.decode(dat);
  else {
    var _a2 = dutf8(dat), out = _a2[0], ext = _a2[1];
    if (ext.length)
      err(8);
    return out;
  }
}
const R$1 = ({ name: t2 = "", color: r2 = "currentColor" }, { slots: e2 }) => {
  var o2;
  return h$4("svg", { xmlns: "http://www.w3.org/2000/svg", class: ["icon", `${t2}-icon`], viewBox: "0 0 1024 1024", fill: r2, "aria-label": `${t2} icon` }, (o2 = e2.default) == null ? void 0 : o2.call(e2));
};
R$1.displayName = "IconBase";
const kt = (t2, { slots: r2 }) => {
  var e2;
  return ((e2 = r2.default) == null ? void 0 : e2.call(r2)) || null;
}, vt = () => h$4(R$1, { name: "github" }, () => h$4("path", { d: "M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z" }));
vt.displayName = "GitHubIcon";
const pt = () => h$4(R$1, { name: "gitlab" }, () => h$4("path", { d: "M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z" }));
pt.displayName = "GitlabIcon";
const $t = () => h$4(R$1, { name: "gitee" }, () => h$4("path", { d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z" }));
$t.displayName = "GiteeIcon";
const gt = () => h$4(R$1, { name: "bitbucket" }, () => h$4("path", { d: "M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z" }));
gt.displayName = "BitbucketIcon";
const yt = () => h$4(R$1, { name: "source" }, () => h$4("path", { d: "M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z" }));
yt.displayName = "SourceIcon";
const Ht = (t2, r2) => {
  const e2 = r2 ? r2._instance : getCurrentInstance();
  return isPlainObject(e2 == null ? void 0 : e2.appContext.components) && (t2 in e2.appContext.components || camelize(t2) in e2.appContext.components || capitalize(camelize(t2)) in e2.appContext.components);
}, Yt = (t2) => {
  const r2 = useRouteLocale();
  return computed(() => t2[r2.value]);
}, Lt = (t2) => /\b(?:Android|iPhone)/i.test(t2), Zt = (t2, r2) => {
  let e2 = 1;
  for (let o2 = 0; o2 < t2.length; o2++)
    e2 += t2.charCodeAt(o2), e2 += e2 << 10, e2 ^= e2 >> 6;
  return e2 += e2 << 3, e2 ^= e2 >> 11, e2 % r2;
};
var K = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, et = {}, Bt = { get exports() {
  return et;
}, set exports(t2) {
  et = t2;
} };
(function(t2, r2) {
  (function(e2, o2) {
    t2.exports = o2();
  })(K, function() {
    var e2 = 1e3, o2 = 6e4, g2 = 36e5, w2 = "millisecond", y2 = "second", O2 = "minute", v2 = "hour", S2 = "day", k2 = "week", x2 = "month", u2 = "quarter", h2 = "year", p2 = "date", n2 = "Invalid Date", c2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, z2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, D2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(f2) {
      var a2 = ["th", "st", "nd", "rd"], i2 = f2 % 100;
      return "[" + f2 + (a2[(i2 - 20) % 10] || a2[i2] || a2[0]) + "]";
    } }, T2 = function(f2, a2, i2) {
      var l2 = String(f2);
      return !l2 || l2.length >= a2 ? f2 : "" + Array(a2 + 1 - l2.length).join(i2) + f2;
    }, U = { s: T2, z: function(f2) {
      var a2 = -f2.utcOffset(), i2 = Math.abs(a2), l2 = Math.floor(i2 / 60), s2 = i2 % 60;
      return (a2 <= 0 ? "+" : "-") + T2(l2, 2, "0") + ":" + T2(s2, 2, "0");
    }, m: function f2(a2, i2) {
      if (a2.date() < i2.date())
        return -f2(i2, a2);
      var l2 = 12 * (i2.year() - a2.year()) + (i2.month() - a2.month()), s2 = a2.clone().add(l2, x2), m2 = i2 - s2 < 0, d2 = a2.clone().add(l2 + (m2 ? -1 : 1), x2);
      return +(-(l2 + (i2 - s2) / (m2 ? s2 - d2 : d2 - s2)) || 0);
    }, a: function(f2) {
      return f2 < 0 ? Math.ceil(f2) || 0 : Math.floor(f2);
    }, p: function(f2) {
      return { M: x2, y: h2, w: k2, d: S2, D: p2, h: v2, m: O2, s: y2, ms: w2, Q: u2 }[f2] || String(f2 || "").toLowerCase().replace(/s$/, "");
    }, u: function(f2) {
      return f2 === void 0;
    } }, I2 = "en", E2 = {};
    E2[I2] = D2;
    var H2 = function(f2) {
      return f2 instanceof j;
    }, L2 = function f2(a2, i2, l2) {
      var s2;
      if (!a2)
        return I2;
      if (typeof a2 == "string") {
        var m2 = a2.toLowerCase();
        E2[m2] && (s2 = m2), i2 && (E2[m2] = i2, s2 = m2);
        var d2 = a2.split("-");
        if (!s2 && d2.length > 1)
          return f2(d2[0]);
      } else {
        var M2 = a2.name;
        E2[M2] = a2, s2 = M2;
      }
      return !l2 && s2 && (I2 = s2), s2 || !l2 && I2;
    }, b2 = function(f2, a2) {
      if (H2(f2))
        return f2.clone();
      var i2 = typeof a2 == "object" ? a2 : {};
      return i2.date = f2, i2.args = arguments, new j(i2);
    }, $2 = U;
    $2.l = L2, $2.i = H2, $2.w = function(f2, a2) {
      return b2(f2, { locale: a2.$L, utc: a2.$u, x: a2.$x, $offset: a2.$offset });
    };
    var j = function() {
      function f2(i2) {
        this.$L = L2(i2.locale, null, true), this.parse(i2);
      }
      var a2 = f2.prototype;
      return a2.parse = function(i2) {
        this.$d = function(l2) {
          var s2 = l2.date, m2 = l2.utc;
          if (s2 === null)
            return new Date(NaN);
          if ($2.u(s2))
            return new Date();
          if (s2 instanceof Date)
            return new Date(s2);
          if (typeof s2 == "string" && !/Z$/i.test(s2)) {
            var d2 = s2.match(c2);
            if (d2) {
              var M2 = d2[2] - 1 || 0, _2 = (d2[7] || "0").substring(0, 3);
              return m2 ? new Date(Date.UTC(d2[1], M2, d2[3] || 1, d2[4] || 0, d2[5] || 0, d2[6] || 0, _2)) : new Date(d2[1], M2, d2[3] || 1, d2[4] || 0, d2[5] || 0, d2[6] || 0, _2);
            }
          }
          return new Date(s2);
        }(i2), this.$x = i2.x || {}, this.init();
      }, a2.init = function() {
        var i2 = this.$d;
        this.$y = i2.getFullYear(), this.$M = i2.getMonth(), this.$D = i2.getDate(), this.$W = i2.getDay(), this.$H = i2.getHours(), this.$m = i2.getMinutes(), this.$s = i2.getSeconds(), this.$ms = i2.getMilliseconds();
      }, a2.$utils = function() {
        return $2;
      }, a2.isValid = function() {
        return this.$d.toString() !== n2;
      }, a2.isSame = function(i2, l2) {
        var s2 = b2(i2);
        return this.startOf(l2) <= s2 && s2 <= this.endOf(l2);
      }, a2.isAfter = function(i2, l2) {
        return b2(i2) < this.startOf(l2);
      }, a2.isBefore = function(i2, l2) {
        return this.endOf(l2) < b2(i2);
      }, a2.$g = function(i2, l2, s2) {
        return $2.u(i2) ? this[l2] : this.set(s2, i2);
      }, a2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, a2.valueOf = function() {
        return this.$d.getTime();
      }, a2.startOf = function(i2, l2) {
        var s2 = this, m2 = !!$2.u(l2) || l2, d2 = $2.p(i2), M2 = function(B2, N2) {
          var G2 = $2.w(s2.$u ? Date.UTC(s2.$y, N2, B2) : new Date(s2.$y, N2, B2), s2);
          return m2 ? G2 : G2.endOf(S2);
        }, _2 = function(B2, N2) {
          return $2.w(s2.toDate()[B2].apply(s2.toDate("s"), (m2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(N2)), s2);
        }, C2 = this.$W, Y2 = this.$M, V2 = this.$D, W = "set" + (this.$u ? "UTC" : "");
        switch (d2) {
          case h2:
            return m2 ? M2(1, 0) : M2(31, 11);
          case x2:
            return m2 ? M2(1, Y2) : M2(0, Y2 + 1);
          case k2:
            var F2 = this.$locale().weekStart || 0, J2 = (C2 < F2 ? C2 + 7 : C2) - F2;
            return M2(m2 ? V2 - J2 : V2 + (6 - J2), Y2);
          case S2:
          case p2:
            return _2(W + "Hours", 0);
          case v2:
            return _2(W + "Minutes", 1);
          case O2:
            return _2(W + "Seconds", 2);
          case y2:
            return _2(W + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, a2.endOf = function(i2) {
        return this.startOf(i2, false);
      }, a2.$set = function(i2, l2) {
        var s2, m2 = $2.p(i2), d2 = "set" + (this.$u ? "UTC" : ""), M2 = (s2 = {}, s2[S2] = d2 + "Date", s2[p2] = d2 + "Date", s2[x2] = d2 + "Month", s2[h2] = d2 + "FullYear", s2[v2] = d2 + "Hours", s2[O2] = d2 + "Minutes", s2[y2] = d2 + "Seconds", s2[w2] = d2 + "Milliseconds", s2)[m2], _2 = m2 === S2 ? this.$D + (l2 - this.$W) : l2;
        if (m2 === x2 || m2 === h2) {
          var C2 = this.clone().set(p2, 1);
          C2.$d[M2](_2), C2.init(), this.$d = C2.set(p2, Math.min(this.$D, C2.daysInMonth())).$d;
        } else
          M2 && this.$d[M2](_2);
        return this.init(), this;
      }, a2.set = function(i2, l2) {
        return this.clone().$set(i2, l2);
      }, a2.get = function(i2) {
        return this[$2.p(i2)]();
      }, a2.add = function(i2, l2) {
        var s2, m2 = this;
        i2 = Number(i2);
        var d2 = $2.p(l2), M2 = function(Y2) {
          var V2 = b2(m2);
          return $2.w(V2.date(V2.date() + Math.round(Y2 * i2)), m2);
        };
        if (d2 === x2)
          return this.set(x2, this.$M + i2);
        if (d2 === h2)
          return this.set(h2, this.$y + i2);
        if (d2 === S2)
          return M2(1);
        if (d2 === k2)
          return M2(7);
        var _2 = (s2 = {}, s2[O2] = o2, s2[v2] = g2, s2[y2] = e2, s2)[d2] || 1, C2 = this.$d.getTime() + i2 * _2;
        return $2.w(C2, this);
      }, a2.subtract = function(i2, l2) {
        return this.add(-1 * i2, l2);
      }, a2.format = function(i2) {
        var l2 = this, s2 = this.$locale();
        if (!this.isValid())
          return s2.invalidDate || n2;
        var m2 = i2 || "YYYY-MM-DDTHH:mm:ssZ", d2 = $2.z(this), M2 = this.$H, _2 = this.$m, C2 = this.$M, Y2 = s2.weekdays, V2 = s2.months, W = function(N2, G2, X, Q2) {
          return N2 && (N2[G2] || N2(l2, m2)) || X[G2].slice(0, Q2);
        }, F2 = function(N2) {
          return $2.s(M2 % 12 || 12, N2, "0");
        }, J2 = s2.meridiem || function(N2, G2, X) {
          var Q2 = N2 < 12 ? "AM" : "PM";
          return X ? Q2.toLowerCase() : Q2;
        }, B2 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: C2 + 1, MM: $2.s(C2 + 1, 2, "0"), MMM: W(s2.monthsShort, C2, V2, 3), MMMM: W(V2, C2), D: this.$D, DD: $2.s(this.$D, 2, "0"), d: String(this.$W), dd: W(s2.weekdaysMin, this.$W, Y2, 2), ddd: W(s2.weekdaysShort, this.$W, Y2, 3), dddd: Y2[this.$W], H: String(M2), HH: $2.s(M2, 2, "0"), h: F2(1), hh: F2(2), a: J2(M2, _2, true), A: J2(M2, _2, false), m: String(_2), mm: $2.s(_2, 2, "0"), s: String(this.$s), ss: $2.s(this.$s, 2, "0"), SSS: $2.s(this.$ms, 3, "0"), Z: d2 };
        return m2.replace(z2, function(N2, G2) {
          return G2 || B2[N2] || d2.replace(":", "");
        });
      }, a2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, a2.diff = function(i2, l2, s2) {
        var m2, d2 = $2.p(l2), M2 = b2(i2), _2 = (M2.utcOffset() - this.utcOffset()) * o2, C2 = this - M2, Y2 = $2.m(this, M2);
        return Y2 = (m2 = {}, m2[h2] = Y2 / 12, m2[x2] = Y2, m2[u2] = Y2 / 3, m2[k2] = (C2 - _2) / 6048e5, m2[S2] = (C2 - _2) / 864e5, m2[v2] = C2 / g2, m2[O2] = C2 / o2, m2[y2] = C2 / e2, m2)[d2] || C2, s2 ? Y2 : $2.a(Y2);
      }, a2.daysInMonth = function() {
        return this.endOf(x2).$D;
      }, a2.$locale = function() {
        return E2[this.$L];
      }, a2.locale = function(i2, l2) {
        if (!i2)
          return this.$L;
        var s2 = this.clone(), m2 = L2(i2, l2, true);
        return m2 && (s2.$L = m2), s2;
      }, a2.clone = function() {
        return $2.w(this.$d, this);
      }, a2.toDate = function() {
        return new Date(this.valueOf());
      }, a2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, a2.toISOString = function() {
        return this.$d.toISOString();
      }, a2.toString = function() {
        return this.$d.toUTCString();
      }, f2;
    }(), ct = j.prototype;
    return b2.prototype = ct, [["$ms", w2], ["$s", y2], ["$m", O2], ["$H", v2], ["$W", S2], ["$M", x2], ["$y", h2], ["$D", p2]].forEach(function(f2) {
      ct[f2[1]] = function(a2) {
        return this.$g(a2, f2[0], f2[1]);
      };
    }), b2.extend = function(f2, a2) {
      return f2.$i || (f2(a2, j, b2), f2.$i = true), b2;
    }, b2.locale = L2, b2.isDayjs = H2, b2.unix = function(f2) {
      return b2(1e3 * f2);
    }, b2.en = E2[I2], b2.Ls = E2, b2.p = {}, b2;
  });
})(Bt);
var Z = et, nt = {}, Ft = { get exports() {
  return nt;
}, set exports(t2) {
  nt = t2;
} };
(function(t2, r2) {
  (function(e2, o2) {
    t2.exports = o2();
  })(K, function() {
    return function(e2, o2, g2) {
      var w2 = o2.prototype, y2 = function(u2) {
        var h2, p2 = u2.date, n2 = u2.utc, c2 = {};
        if (!((h2 = p2) instanceof Date || h2 instanceof Array || w2.$utils().u(h2) || h2.constructor.name !== "Object")) {
          if (!Object.keys(p2).length)
            return new Date();
          var z2 = n2 ? g2.utc() : g2();
          Object.keys(p2).forEach(function(b2) {
            var $2, j;
            c2[$2 = b2, j = w2.$utils().p($2), j === "date" ? "day" : j] = p2[b2];
          });
          var D2 = c2.day || (c2.year || c2.month >= 0 ? 1 : z2.date()), T2 = c2.year || z2.year(), U = c2.month >= 0 ? c2.month : c2.year || c2.day ? 0 : z2.month(), I2 = c2.hour || 0, E2 = c2.minute || 0, H2 = c2.second || 0, L2 = c2.millisecond || 0;
          return n2 ? new Date(Date.UTC(T2, U, D2, I2, E2, H2, L2)) : new Date(T2, U, D2, I2, E2, H2, L2);
        }
        return p2;
      }, O2 = w2.parse;
      w2.parse = function(u2) {
        u2.date = y2.bind(this)(u2), O2.bind(this)(u2);
      };
      var v2 = w2.set, S2 = w2.add, k2 = w2.subtract, x2 = function(u2, h2, p2, n2) {
        n2 === void 0 && (n2 = 1);
        var c2 = Object.keys(h2), z2 = this;
        return c2.forEach(function(D2) {
          z2 = u2.bind(z2)(h2[D2] * n2, D2);
        }), z2;
      };
      w2.set = function(u2, h2) {
        return h2 = h2 === void 0 ? u2 : h2, u2.constructor.name === "Object" ? x2.bind(this)(function(p2, n2) {
          return v2.bind(this)(n2, p2);
        }, h2, u2) : v2.bind(this)(u2, h2);
      }, w2.add = function(u2, h2) {
        return u2.constructor.name === "Object" ? x2.bind(this)(S2, u2, h2) : S2.bind(this)(u2, h2);
      }, w2.subtract = function(u2, h2) {
        return u2.constructor.name === "Object" ? x2.bind(this)(S2, u2, h2, -1) : k2.bind(this)(u2, h2);
      };
    };
  });
})(Ft);
var Jt = nt, it = {}, qt = { get exports() {
  return it;
}, set exports(t2) {
  it = t2;
} };
(function(t2, r2) {
  (function(e2, o2) {
    t2.exports = o2();
  })(K, function() {
    var e2 = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, o2 = {};
    return function(g2, w2, y2) {
      var O2, v2 = function(u2, h2, p2) {
        p2 === void 0 && (p2 = {});
        var n2 = new Date(u2), c2 = function(z2, D2) {
          D2 === void 0 && (D2 = {});
          var T2 = D2.timeZoneName || "short", U = z2 + "|" + T2, I2 = o2[U];
          return I2 || (I2 = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: z2, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: T2 }), o2[U] = I2), I2;
        }(h2, p2);
        return c2.formatToParts(n2);
      }, S2 = function(u2, h2) {
        for (var p2 = v2(u2, h2), n2 = [], c2 = 0; c2 < p2.length; c2 += 1) {
          var z2 = p2[c2], D2 = z2.type, T2 = z2.value, U = e2[D2];
          U >= 0 && (n2[U] = parseInt(T2, 10));
        }
        var I2 = n2[3], E2 = I2 === 24 ? 0 : I2, H2 = n2[0] + "-" + n2[1] + "-" + n2[2] + " " + E2 + ":" + n2[4] + ":" + n2[5] + ":000", L2 = +u2;
        return (y2.utc(H2).valueOf() - (L2 -= L2 % 1e3)) / 6e4;
      }, k2 = w2.prototype;
      k2.tz = function(u2, h2) {
        u2 === void 0 && (u2 = O2);
        var p2 = this.utcOffset(), n2 = this.toDate(), c2 = n2.toLocaleString("en-US", { timeZone: u2 }), z2 = Math.round((n2 - new Date(c2)) / 1e3 / 60), D2 = y2(c2).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(n2.getTimezoneOffset() / 15) - z2, true);
        if (h2) {
          var T2 = D2.utcOffset();
          D2 = D2.add(p2 - T2, "minute");
        }
        return D2.$x.$timezone = u2, D2;
      }, k2.offsetName = function(u2) {
        var h2 = this.$x.$timezone || y2.tz.guess(), p2 = v2(this.valueOf(), h2, { timeZoneName: u2 }).find(function(n2) {
          return n2.type.toLowerCase() === "timezonename";
        });
        return p2 && p2.value;
      };
      var x2 = k2.startOf;
      k2.startOf = function(u2, h2) {
        if (!this.$x || !this.$x.$timezone)
          return x2.call(this, u2, h2);
        var p2 = y2(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
        return x2.call(p2, u2, h2).tz(this.$x.$timezone, true);
      }, y2.tz = function(u2, h2, p2) {
        var n2 = p2 && h2, c2 = p2 || h2 || O2, z2 = S2(+y2(), c2);
        if (typeof u2 != "string")
          return y2(u2).tz(c2);
        var D2 = function(E2, H2, L2) {
          var b2 = E2 - 60 * H2 * 1e3, $2 = S2(b2, L2);
          if (H2 === $2)
            return [b2, H2];
          var j = S2(b2 -= 60 * ($2 - H2) * 1e3, L2);
          return $2 === j ? [b2, $2] : [E2 - 60 * Math.min($2, j) * 1e3, Math.max($2, j)];
        }(y2.utc(u2, n2).valueOf(), z2, c2), T2 = D2[0], U = D2[1], I2 = y2(T2).utcOffset(U);
        return I2.$x.$timezone = c2, I2;
      }, y2.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, y2.tz.setDefault = function(u2) {
        O2 = u2;
      };
    };
  });
})(qt);
var Qt = it, rt = {}, Kt = { get exports() {
  return rt;
}, set exports(t2) {
  rt = t2;
} };
(function(t2, r2) {
  (function(e2, o2) {
    t2.exports = o2();
  })(K, function() {
    var e2 = "minute", o2 = /[+-]\d\d(?::?\d\d)?/g, g2 = /([+-]|\d\d)/g;
    return function(w2, y2, O2) {
      var v2 = y2.prototype;
      O2.utc = function(n2) {
        var c2 = { date: n2, utc: true, args: arguments };
        return new y2(c2);
      }, v2.utc = function(n2) {
        var c2 = O2(this.toDate(), { locale: this.$L, utc: true });
        return n2 ? c2.add(this.utcOffset(), e2) : c2;
      }, v2.local = function() {
        return O2(this.toDate(), { locale: this.$L, utc: false });
      };
      var S2 = v2.parse;
      v2.parse = function(n2) {
        n2.utc && (this.$u = true), this.$utils().u(n2.$offset) || (this.$offset = n2.$offset), S2.call(this, n2);
      };
      var k2 = v2.init;
      v2.init = function() {
        if (this.$u) {
          var n2 = this.$d;
          this.$y = n2.getUTCFullYear(), this.$M = n2.getUTCMonth(), this.$D = n2.getUTCDate(), this.$W = n2.getUTCDay(), this.$H = n2.getUTCHours(), this.$m = n2.getUTCMinutes(), this.$s = n2.getUTCSeconds(), this.$ms = n2.getUTCMilliseconds();
        } else
          k2.call(this);
      };
      var x2 = v2.utcOffset;
      v2.utcOffset = function(n2, c2) {
        var z2 = this.$utils().u;
        if (z2(n2))
          return this.$u ? 0 : z2(this.$offset) ? x2.call(this) : this.$offset;
        if (typeof n2 == "string" && (n2 = function(I2) {
          I2 === void 0 && (I2 = "");
          var E2 = I2.match(o2);
          if (!E2)
            return null;
          var H2 = ("" + E2[0]).match(g2) || ["-", 0, 0], L2 = H2[0], b2 = 60 * +H2[1] + +H2[2];
          return b2 === 0 ? 0 : L2 === "+" ? b2 : -b2;
        }(n2), n2 === null))
          return this;
        var D2 = Math.abs(n2) <= 16 ? 60 * n2 : n2, T2 = this;
        if (c2)
          return T2.$offset = D2, T2.$u = n2 === 0, T2;
        if (n2 !== 0) {
          var U = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (T2 = this.local().add(D2 + U, e2)).$offset = D2, T2.$x.$localOffset = U;
        } else
          T2 = this.utc();
        return T2;
      };
      var u2 = v2.format;
      v2.format = function(n2) {
        var c2 = n2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return u2.call(this, c2);
      }, v2.valueOf = function() {
        var n2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * n2;
      }, v2.isUTC = function() {
        return !!this.$u;
      }, v2.toISOString = function() {
        return this.toDate().toISOString();
      }, v2.toString = function() {
        return this.toDate().toUTCString();
      };
      var h2 = v2.toDate;
      v2.toDate = function(n2) {
        return n2 === "s" && this.$offset ? O2(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : h2.call(this);
      };
      var p2 = v2.diff;
      v2.diff = function(n2, c2, z2) {
        if (n2 && this.$u === n2.$u)
          return p2.call(this, n2, c2, z2);
        var D2 = this.local(), T2 = O2(n2).local();
        return p2.call(D2, T2, c2, z2);
      };
    };
  });
})(Kt);
var Xt = rt;
Z.extend(Jt), Z.extend(Xt), Z.extend(Qt);
const st = (t2, r2) => {
  if (t2) {
    if (Z(t2 instanceof Date ? t2 : t2.trim()).isValid()) {
      const o2 = r2 ? Z(t2).tz(r2) : Z(t2), g2 = o2.year(), w2 = o2.month() + 1, y2 = o2.date(), O2 = o2.hour(), v2 = o2.minute(), S2 = o2.second(), k2 = o2.millisecond(), x2 = O2 === 0 && v2 === 0 && S2 === 0 && k2 === 0;
      return { value: o2.toDate(), info: { year: g2, month: w2, day: y2, ...x2 ? {} : { hour: O2, minute: v2, second: S2 } }, type: x2 ? "date" : "full" };
    }
    const e2 = /(?:(\d{2,4})[/-](\d{1,2})[/-](\d{1,2}))?\s*(?:(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/u.exec(t2.trim());
    if (e2) {
      const [, o2, g2, w2, y2, O2, v2] = e2, S2 = (c2) => typeof c2 > "u" ? void 0 : Number(c2), k2 = (c2) => c2 && c2 < 100 ? c2 + 2e3 : c2, x2 = (c2) => y2 && O2 && !v2 ? 0 : c2, u2 = { year: k2(S2(o2)), month: S2(g2), day: S2(w2), hour: S2(y2), minute: S2(O2), second: x2(S2(v2)) }, h2 = o2 === void 0 && g2 === void 0 && w2 === void 0, p2 = y2 === void 0 && O2 === void 0 && v2 === void 0, n2 = Z({ ...u2, month: u2.month - 1 }).toDate();
      return { value: h2 ? void 0 : n2, info: p2 ? { year: u2.year, month: u2.month, day: u2.day } : h2 ? { hour: u2.hour, minute: u2.minute, second: u2.second } : u2, type: h2 ? "time" : p2 ? "date" : "full" };
    }
  }
  return null;
}, bt = (t2, r2) => isString$1(t2) && t2.startsWith(r2), ee = (t2, r2) => isString$1(t2) && t2.endsWith(r2), St = Object.entries, Dt = Object.keys, ot = (t2, ...r2) => {
  if (r2.length === 0)
    return t2;
  const e2 = r2.shift() || null;
  return e2 && St(e2).forEach(([o2, g2]) => {
    o2 === "__proto__" || o2 === "constructor" || (isPlainObject(t2[o2]) && isPlainObject(g2) ? ot(t2[o2], g2) : isArray$2(g2) ? t2[o2] = [...g2] : isPlainObject(g2) ? t2[o2] = { ...g2 } : t2[o2] = e2[o2]);
  }), ot(t2, ...r2);
}, re = (t2, r2 = false) => t2 ? isArray$2(t2) ? t2.map((e2) => isString$1(e2) ? { name: e2 } : e2) : isString$1(t2) ? [{ name: t2 }] : isPlainObject(t2) && t2.name ? [t2] : (console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${r2 ? "" : "| false"} | undefined\`, but got`, t2), []) : [], at = (t2, r2) => {
  if (t2) {
    if (isArray$2(t2))
      return t2;
    if (isString$1(t2))
      return [t2];
    console.error(`Expect ${r2 || "value"} to be \`string[] | string | undefined\`, but got`, t2);
  }
  return [];
}, se = (t2) => at(t2, "category"), oe = (t2) => at(t2, "tag"), ue = (t2) => bt(t2, "/");
class ce {
  constructor() {
    this.messageElements = {};
    const r2 = "message-container", e2 = document.getElementById(r2);
    e2 ? this.containerElement = e2 : (this.containerElement = document.createElement("div"), this.containerElement.id = r2, document.body.appendChild(this.containerElement));
  }
  pop(r2, e2 = 2e3) {
    const o2 = document.createElement("div"), g2 = Date.now();
    return o2.className = "message move-in", o2.innerHTML = r2, this.containerElement.appendChild(o2), this.messageElements[g2] = o2, e2 > 0 && setTimeout(() => {
      this.close(g2);
    }, e2), g2;
  }
  close(r2) {
    if (r2) {
      const e2 = this.messageElements[r2];
      e2.className = e2.className.replace("move-in", ""), e2.className += "move-out", e2.addEventListener("animationend", () => {
        e2.remove(), delete this.messageElements[r2];
      });
    } else
      Dt(this.messageElements).forEach((e2) => this.close(Number(e2)));
  }
  destroy() {
    document.body.removeChild(this.containerElement);
  }
}
const Mt = /#.*$/u, wt = (t2) => {
  const r2 = Mt.exec(t2);
  return r2 ? r2[0] : "";
}, ut = (t2) => decodeURI(t2).replace(Mt, "").replace(/(index)?\.(md|html)$/, ""), he = (t2, r2) => {
  if (r2 === void 0)
    return false;
  const e2 = ut(t2.path), o2 = ut(r2), g2 = wt(r2);
  return g2 ? g2 === t2.hash && (!o2 || e2 === o2) : e2 === o2;
}, le = (t2) => {
  const r2 = Buffer.from(t2, "base64").toString("binary");
  return strFromU8(unzlibSync(strToU8(r2, true)));
}, de = (t2) => isLinkHttp(t2) ? t2 : `https://github.com/${t2}`, me = (t2) => !isLinkHttp(t2) || /github\.com/.test(t2) ? "GitHub" : /bitbucket\.org/.test(t2) ? "Bitbucket" : /gitlab\.com/.test(t2) ? "GitLab" : /gitee\.com/.test(t2) ? "Gitee" : null, Ot = (t2, ...r2) => {
  const e2 = t2.resolve(...r2), o2 = e2.matched[e2.matched.length - 1];
  if (!(o2 != null && o2.redirect))
    return e2;
  const { redirect: g2 } = o2, w2 = isFunction$1(g2) ? g2(e2) : g2, y2 = isString$1(w2) ? { path: w2 } : w2;
  return Ot(t2, { hash: e2.hash, query: e2.query, params: e2.params, ...y2 });
};
var _a;
const isClient = typeof window !== "undefined";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const noop$2 = () => {
};
isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function resolveUnref(r2) {
  return typeof r2 === "function" ? r2() : unref(r2);
}
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop$2;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop$2;
  };
  const filter = (invoke) => {
    const duration = resolveUnref(ms);
    const maxDuration = resolveUnref(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = null;
      }
      return Promise.resolve(invoke());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = null;
          resolve(invoke());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = null;
        resolve(invoke());
      }, duration);
    });
  };
  return filter;
}
function throttleFilter(ms, trailing = true, leading = true, rejectOnCancel = false) {
  let lastExec = 0;
  let timer;
  let isLeading = true;
  let lastRejector = noop$2;
  let lastValue;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
      lastRejector();
      lastRejector = noop$2;
    }
  };
  const filter = (_invoke) => {
    const duration = resolveUnref(ms);
    const elapsed = Date.now() - lastExec;
    const invoke = () => {
      return lastValue = _invoke();
    };
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration && (leading || !isLeading)) {
      lastExec = Date.now();
      invoke();
    } else if (trailing) {
      return new Promise((resolve, reject) => {
        lastRejector = rejectOnCancel ? reject : resolve;
        timer = setTimeout(() => {
          lastExec = Date.now();
          isLeading = true;
          resolve(invoke());
          clear();
        }, duration - elapsed);
      });
    }
    if (!leading && !timer)
      timer = setTimeout(() => isLeading = true, duration);
    isLeading = false;
    return lastValue;
  };
  return filter;
}
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive: readonly(isActive), pause, resume, eventFilter };
}
function identity(arg) {
  return arg;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(debounceFilter(ms, options), fn);
}
function useThrottleFn(fn, ms = 200, trailing = false, leading = true, rejectOnCancel = false) {
  return createFilterWrapper(throttleFilter(ms, trailing, leading, rejectOnCancel), fn);
}
function resolveRef(r2) {
  return typeof r2 === "function" ? computed(r2) : ref(r2);
}
function tryOnMounted(fn, sync = true) {
  if (getCurrentInstance())
    onMounted(fn);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __objRest$5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$6.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$6.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchWithFilter(source, cb, options = {}) {
  const _a2 = options, {
    eventFilter = bypassFilter
  } = _a2, watchOptions = __objRest$5(_a2, [
    "eventFilter"
  ]);
  return watch(source, createFilterWrapper(eventFilter, cb), watchOptions);
}
var __defProp$2 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp$2.call(b2, prop))
      __defNormalProp$2(a2, prop, b2[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b2)) {
      if (__propIsEnum$2.call(b2, prop))
        __defNormalProp$2(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps$2 = (a2, b2) => __defProps$2(a2, __getOwnPropDescs$2(b2));
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchPausable(source, cb, options = {}) {
  const _a2 = options, {
    eventFilter: filter
  } = _a2, watchOptions = __objRest$1(_a2, [
    "eventFilter"
  ]);
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(source, cb, __spreadProps$2(__spreadValues$2({}, watchOptions), {
    eventFilter
  }));
  return { stop, pause, resume, isActive };
}
function unrefElement(elRef) {
  var _a2;
  const plain = resolveUnref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
const defaultDocument = isClient ? window.document : void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (isString(args[0]) || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop$2;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener) => {
    el.addEventListener(event, listener, options);
    return () => el.removeEventListener(event, listener, options);
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (!el)
      return;
    cleanups.push(...events.flatMap((event) => {
      return listeners.map((listener) => register(el, event, listener));
    }));
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
  if (!window2)
    return;
  let shouldListen = true;
  let fallback;
  const shouldIgnore = (event) => {
    return ignore.some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  const listener = (event) => {
    window2.clearTimeout(fallback);
    const el = unrefElement(target);
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if (event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window2, "click", listener, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e2) => {
      const el = unrefElement(target);
      if (el)
        shouldListen = !e2.composedPath().includes(el) && !shouldIgnore(e2);
    }, { passive: true }),
    useEventListener(window2, "pointerup", (e2) => {
      if (e2.button === 0) {
        const path = e2.composedPath();
        e2.composedPath = () => path;
        fallback = window2.setTimeout(() => listener(e2), 50);
      }
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      var _a2;
      const el = unrefElement(target);
      if (((_a2 = window2.document.activeElement) == null ? void 0 : _a2.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement)))
        handler(event);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}
function useSupported(callback, sync = false) {
  const isSupported = ref();
  const update = () => isSupported.value = Boolean(callback());
  update();
  tryOnMounted(update, sync);
  return isSupported;
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", update);
    else
      mediaQuery.removeListener(update);
  };
  const update = () => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window2.matchMedia(resolveRef(query).value);
    matches.value = mediaQuery.matches;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
  };
  watchEffect(update);
  tryOnScopeDispose(() => cleanup());
  return matches;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
const handlers = _global[globalKey];
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
var __defProp$j = Object.defineProperty;
var __getOwnPropSymbols$l = Object.getOwnPropertySymbols;
var __hasOwnProp$l = Object.prototype.hasOwnProperty;
var __propIsEnum$l = Object.prototype.propertyIsEnumerable;
var __defNormalProp$j = (obj, key, value) => key in obj ? __defProp$j(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$j = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp$l.call(b2, prop))
      __defNormalProp$j(a2, prop, b2[prop]);
  if (__getOwnPropSymbols$l)
    for (var prop of __getOwnPropSymbols$l(b2)) {
      if (__propIsEnum$l.call(b2, prop))
        __defNormalProp$j(a2, prop, b2[prop]);
    }
  return a2;
};
const StorageSerializers = {
  boolean: {
    read: (v2) => v2 === "true",
    write: (v2) => String(v2)
  },
  object: {
    read: (v2) => JSON.parse(v2),
    write: (v2) => JSON.stringify(v2)
  },
  number: {
    read: (v2) => Number.parseFloat(v2),
    write: (v2) => String(v2)
  },
  any: {
    read: (v2) => v2,
    write: (v2) => String(v2)
  },
  string: {
    read: (v2) => v2,
    write: (v2) => String(v2)
  },
  map: {
    read: (v2) => new Map(JSON.parse(v2)),
    write: (v2) => JSON.stringify(Array.from(v2.entries()))
  },
  set: {
    read: (v2) => new Set(JSON.parse(v2)),
    write: (v2) => JSON.stringify(Array.from(v2))
  },
  date: {
    read: (v2) => new Date(v2),
    write: (v2) => v2.toISOString()
  }
};
function useStorage(key, defaults, storage, options = {}) {
  var _a2;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e2) => {
      console.error(e2);
    }
  } = options;
  const data = (shallow ? shallowRef : ref)(defaults);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a22;
        return (_a22 = defaultWindow) == null ? void 0 : _a22.localStorage;
      })();
    } catch (e2) {
      onError(e2);
    }
  }
  if (!storage)
    return data;
  const rawInit = resolveUnref(defaults);
  const type2 = guessSerializerType(rawInit);
  const serializer = (_a2 = options.serializer) != null ? _a2 : StorageSerializers[type2];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(data, () => write(data.value), { flush, deep, eventFilter });
  if (window2 && listenToStorageChanges)
    useEventListener(window2, "storage", update);
  update();
  return data;
  function write(v2) {
    try {
      if (v2 == null) {
        storage.removeItem(key);
      } else {
        const serialized = serializer.write(v2);
        const oldValue = storage.getItem(key);
        if (oldValue !== serialized) {
          storage.setItem(key, serialized);
          if (window2) {
            window2 == null ? void 0 : window2.dispatchEvent(new StorageEvent("storage", {
              key,
              oldValue,
              newValue: serialized,
              storageArea: storage
            }));
          }
        }
      }
    } catch (e2) {
      onError(e2);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(key);
    if (rawValue == null) {
      if (writeDefaults && rawInit !== null)
        storage.setItem(key, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (isFunction(mergeDefaults))
        return mergeDefaults(value, rawInit);
      else if (type2 === "object" && !Array.isArray(value))
        return __spreadValues$j(__spreadValues$j({}, rawInit), value);
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      data.value = read(event);
    } catch (e2) {
      onError(e2);
    } finally {
      if (event)
        nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
}
function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}
const functionsMap = [
  [
    "requestFullscreen",
    "exitFullscreen",
    "fullscreenElement",
    "fullscreenEnabled",
    "fullscreenchange",
    "fullscreenerror"
  ],
  [
    "webkitRequestFullscreen",
    "webkitExitFullscreen",
    "webkitFullscreenElement",
    "webkitFullscreenEnabled",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "webkitRequestFullScreen",
    "webkitCancelFullScreen",
    "webkitCurrentFullScreenElement",
    "webkitCancelFullScreen",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "mozRequestFullScreen",
    "mozCancelFullScreen",
    "mozFullScreenElement",
    "mozFullScreenEnabled",
    "mozfullscreenchange",
    "mozfullscreenerror"
  ],
  [
    "msRequestFullscreen",
    "msExitFullscreen",
    "msFullscreenElement",
    "msFullscreenEnabled",
    "MSFullscreenChange",
    "MSFullscreenError"
  ]
];
function useFullscreen(target, options = {}) {
  const { document: document2 = defaultDocument, autoExit = false } = options;
  const targetRef = target || (document2 == null ? void 0 : document2.querySelector("html"));
  const isFullscreen = ref(false);
  let map = functionsMap[0];
  const isSupported = useSupported(() => {
    if (!document2) {
      return false;
    } else {
      for (const m2 of functionsMap) {
        if (m2[1] in document2) {
          map = m2;
          return true;
        }
      }
    }
    return false;
  });
  const [REQUEST, EXIT, ELEMENT, , EVENT] = map;
  async function exit() {
    if (!isSupported.value)
      return;
    if (document2 == null ? void 0 : document2[ELEMENT])
      await document2[EXIT]();
    isFullscreen.value = false;
  }
  async function enter() {
    if (!isSupported.value)
      return;
    await exit();
    const target2 = unrefElement(targetRef);
    if (target2) {
      await target2[REQUEST]();
      isFullscreen.value = true;
    }
  }
  async function toggle() {
    if (isFullscreen.value)
      await exit();
    else
      await enter();
  }
  if (document2) {
    useEventListener(document2, EVENT, () => {
      isFullscreen.value = !!(document2 == null ? void 0 : document2[ELEMENT]);
    }, false);
  }
  if (autoExit)
    tryOnScopeDispose(exit);
  return {
    isSupported,
    isFullscreen,
    enter,
    exit,
    toggle
  };
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
function useSessionStorage(key, initialValue, options = {}) {
  const { window: window2 = defaultWindow } = options;
  return useStorage(key, initialValue, window2 == null ? void 0 : window2.sessionStorage, options);
}
let _id = 0;
function useStyleTag(css2, options = {}) {
  const isLoaded = ref(false);
  const {
    document: document2 = defaultDocument,
    immediate = true,
    manual = false,
    id = `vueuse_styletag_${++_id}`
  } = options;
  const cssRef = ref(css2);
  let stop = () => {
  };
  const load = () => {
    if (!document2)
      return;
    const el = document2.getElementById(id) || document2.createElement("style");
    if (!el.isConnected) {
      el.type = "text/css";
      el.id = id;
      if (options.media)
        el.media = options.media;
      document2.head.appendChild(el);
    }
    if (isLoaded.value)
      return;
    stop = watch(cssRef, (value) => {
      el.textContent = value;
    }, { immediate: true });
    isLoaded.value = true;
  };
  const unload = () => {
    if (!document2 || !isLoaded.value)
      return;
    stop();
    document2.head.removeChild(document2.getElementById(id));
    isLoaded.value = false;
  };
  if (immediate && !manual)
    tryOnMounted(load);
  if (!manual)
    tryOnScopeDispose(unload);
  return {
    id,
    css: cssRef,
    unload,
    load,
    isLoaded: readonly(isLoaded)
  };
}
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
__spreadValues({
  linear: identity
}, _TransitionPresets);
const badge = "";
const t$2 = ({ type: r2 = "info", text: e2 = "", vertical: i2 = "top", color: a2 }, { slots: l2 }) => {
  var o2;
  return h$4("span", { class: ["badge", r2, { diy: a2 }], style: { verticalAlign: i2, ...a2 ? { backgroundColor: a2 } : {} } }, e2 || ((o2 = l2.default) == null ? void 0 : o2.call(l2)));
};
t$2.displayName = "Badge";
const fontIcon = "";
var c$3 = defineComponent({ name: "FontIcon", props: { icon: { type: String, default: "" }, color: { type: String, default: "" }, size: { type: [String, Number], default: "" } }, setup(o2) {
  const t2 = computed(() => {
    const n2 = {};
    return o2.color && (n2.color = o2.color), o2.size && (n2["font-size"] = Number.isNaN(Number(o2.size)) ? o2.size : `${o2.size}px`), Dt(n2).length ? n2 : null;
  });
  return () => o2.icon ? h$4("span", { key: o2.icon, class: ["font-icon icon", "", o2.icon.includes(" ") ? o2.icon : `${"iconfont icon-"}${o2.icon}`], style: t2.value }) : null;
} });
const backToTop = "";
const a$2 = () => h$4(R$1, { name: "back-to-top" }, () => [h$4("path", { d: "M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z" }), h$4("path", { d: "m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z" })]);
a$2.displayName = "BackToTopIcon";
var h$3 = defineComponent({ name: "BackToTop", props: { threshold: { type: Number, default: 300 } }, setup(l2) {
  const c2 = usePageFrontmatter(), n2 = Yt({ "/": { "backToTop": "返回顶部" } }), e2 = ref(0), r2 = computed(() => c2.value.backToTop !== false && e2.value > l2.threshold), t2 = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  return onMounted(() => {
    e2.value = t2();
  }), useEventListener("scroll", useDebounceFn(() => {
    e2.value = t2();
  }, 100)), () => h$4(Transition, { name: "fade" }, () => r2.value ? h$4("button", { class: "back-to-top", "aria-label": n2.value.backToTop, "data-balloon-pos": "left", onClick: () => {
    window.scrollTo({ top: 0, behavior: "smooth" }), e2.value = 0;
  } }, h$4(a$2)) : null);
} });
const srOnly = "";
const clientConfig1 = defineClientConfig({
  enhance: ({ app }) => {
    if (!Ht("Badge"))
      app.component("Badge", t$2);
    if (!Ht("FontIcon"))
      app.component("FontIcon", c$3);
  },
  setup: () => {
    useStyleTag(`      @import url("//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
      `);
  },
  rootComponents: [
    () => h$4(h$3, { threshold: 300 })
  ]
});
function getDevtoolsGlobalHook() {
  return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
  return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
}
const isProxyAvailable = typeof Proxy === "function";
const HOOK_SETUP = "devtools-plugin:setup";
const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
let supported;
let perf;
function isPerformanceSupported() {
  var _a2;
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else if (typeof global !== "undefined" && ((_a2 = global.perf_hooks) === null || _a2 === void 0 ? void 0 : _a2.performance)) {
    supported = true;
    perf = global.perf_hooks.performance;
  } else {
    supported = false;
  }
  return supported;
}
function now() {
  return isPerformanceSupported() ? perf.now() : Date.now();
}
class ApiProxy {
  constructor(plugin, hook) {
    this.target = null;
    this.targetQueue = [];
    this.onQueue = [];
    this.plugin = plugin;
    this.hook = hook;
    const defaultSettings = {};
    if (plugin.settings) {
      for (const id in plugin.settings) {
        const item = plugin.settings[id];
        defaultSettings[id] = item.defaultValue;
      }
    }
    const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
    let currentSettings = Object.assign({}, defaultSettings);
    try {
      const raw = localStorage.getItem(localSettingsSaveId);
      const data = JSON.parse(raw);
      Object.assign(currentSettings, data);
    } catch (e2) {
    }
    this.fallbacks = {
      getSettings() {
        return currentSettings;
      },
      setSettings(value) {
        try {
          localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
        } catch (e2) {
        }
        currentSettings = value;
      },
      now() {
        return now();
      }
    };
    if (hook) {
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
    }
    this.proxiedOn = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target.on[prop];
        } else {
          return (...args) => {
            this.onQueue.push({
              method: prop,
              args
            });
          };
        }
      }
    });
    this.proxiedTarget = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target[prop];
        } else if (prop === "on") {
          return this.proxiedOn;
        } else if (Object.keys(this.fallbacks).includes(prop)) {
          return (...args) => {
            this.targetQueue.push({
              method: prop,
              args,
              resolve: () => {
              }
            });
            return this.fallbacks[prop](...args);
          };
        } else {
          return (...args) => {
            return new Promise((resolve) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve
              });
            });
          };
        }
      }
    });
  }
  async setRealTarget(target) {
    this.target = target;
    for (const item of this.onQueue) {
      this.target.on[item.method](...item.args);
    }
    for (const item of this.targetQueue) {
      item.resolve(await this.target[item.method](...item.args));
    }
  }
}
function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
  const descriptor = pluginDescriptor;
  const target = getTarget();
  const hook = getDevtoolsGlobalHook();
  const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
  if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
    hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
  } else {
    const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
    const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
    list.push({
      pluginDescriptor: descriptor,
      setupFn,
      proxy
    });
    if (proxy)
      setupFn(proxy.proxiedTarget);
  }
}
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const isBrowser$1 = typeof window !== "undefined";
function isESModule(obj) {
  return obj.__esModule || obj[Symbol.toStringTag] === "Module";
}
const assign = Object.assign;
function applyToParams(fn, params) {
  const newParams = {};
  for (const key in params) {
    const value = params[key];
    newParams[key] = isArray$1(value) ? value.map(fn) : fn(value);
  }
  return newParams;
}
const noop$1 = () => {
};
const isArray$1 = Array.isArray;
function warn(msg) {
  const args = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + msg].concat(args));
}
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery2, location, currentLocation = "/") {
  let path, query = {}, searchString = "", hash = "";
  const hashPos = location.indexOf("#");
  let searchPos = location.indexOf("?");
  if (hashPos < searchPos && hashPos >= 0) {
    searchPos = -1;
  }
  if (searchPos > -1) {
    path = location.slice(0, searchPos);
    searchString = location.slice(searchPos + 1, hashPos > -1 ? hashPos : location.length);
    query = parseQuery2(searchString);
  }
  if (hashPos > -1) {
    path = path || location.slice(0, hashPos);
    hash = location.slice(hashPos, location.length);
  }
  path = resolveRelativePath(path != null ? path : location, currentLocation);
  return {
    fullPath: path + (searchString && "?") + searchString + hash,
    path,
    query,
    hash
  };
}
function stringifyURL(stringifyQuery2, location) {
  const query = location.query ? stringifyQuery2(location.query) : "";
  return location.path + (query && "?") + query + (location.hash || "");
}
function isSameRouteLocation(stringifyQuery2, a2, b2) {
  const aLastIndex = a2.matched.length - 1;
  const bLastIndex = b2.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord$1(a2.matched[aLastIndex], b2.matched[bLastIndex]) && isSameRouteLocationParams$1(a2.params, b2.params) && stringifyQuery2(a2.query) === stringifyQuery2(b2.query) && a2.hash === b2.hash;
}
function isSameRouteRecord$1(a2, b2) {
  return (a2.aliasOf || a2) === (b2.aliasOf || b2);
}
function isSameRouteLocationParams$1(a2, b2) {
  if (Object.keys(a2).length !== Object.keys(b2).length)
    return false;
  for (const key in a2) {
    if (!isSameRouteLocationParamsValue$1(a2[key], b2[key]))
      return false;
  }
  return true;
}
function isSameRouteLocationParamsValue$1(a2, b2) {
  return isArray$1(a2) ? isEquivalentArray$1(a2, b2) : isArray$1(b2) ? isEquivalentArray$1(b2, a2) : a2 === b2;
}
function isEquivalentArray$1(a2, b2) {
  return isArray$1(b2) ? a2.length === b2.length && a2.every((value, i2) => value === b2[i2]) : a2.length === 1 && a2[0] === b2;
}
function resolveRelativePath(to, from) {
  if (to.startsWith("/"))
    return to;
  if (process.env.NODE_ENV !== "production" && !from.startsWith("/")) {
    warn(`Cannot resolve a relative location without an absolute path. Trying to resolve "${to}" from "${from}". It should look like "/${from}".`);
    return to;
  }
  if (!to)
    return from;
  const fromSegments = from.split("/");
  const toSegments = to.split("/");
  let position = fromSegments.length - 1;
  let toPosition;
  let segment;
  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition];
    if (segment === ".")
      continue;
    if (segment === "..") {
      if (position > 1)
        position--;
    } else
      break;
  }
  return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
}
var NavigationType$1;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType$1 || (NavigationType$1 = {}));
var NavigationDirection$1;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection$1 || (NavigationDirection$1 = {}));
const START = "";
function normalizeBase(base) {
  if (!base) {
    if (isBrowser$1) {
      const baseEl = document.querySelector("base");
      base = baseEl && baseEl.getAttribute("href") || "/";
      base = base.replace(/^\w+:\/\/[^\/]+/, "");
    } else {
      base = "/";
    }
  }
  if (base[0] !== "/" && base[0] !== "#")
    base = "/" + base;
  return removeTrailingSlash(base);
}
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location) {
  return base.replace(BEFORE_HASH_RE, "#") + location;
}
function getElementPosition(el, offset) {
  const docRect = document.documentElement.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    behavior: offset.behavior,
    left: elRect.left - docRect.left - (offset.left || 0),
    top: elRect.top - docRect.top - (offset.top || 0)
  };
}
const computeScrollPosition = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function scrollToPosition(position) {
  let scrollToOptions;
  if ("el" in position) {
    const positionEl = position.el;
    const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof position.el === "string") {
      if (!isIdSelector || !document.getElementById(position.el.slice(1))) {
        try {
          const foundEl = document.querySelector(position.el);
          if (isIdSelector && foundEl) {
            warn(`The selector "${position.el}" should be passed as "el: document.querySelector('${position.el}')" because it starts with "#".`);
            return;
          }
        } catch (err2) {
          warn(`The selector "${position.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
          return;
        }
      }
    }
    const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
    if (!el) {
      process.env.NODE_ENV !== "production" && warn(`Couldn't find element using selector "${position.el}" returned by scrollBehavior.`);
      return;
    }
    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }
  if ("scrollBehavior" in document.documentElement.style)
    window.scrollTo(scrollToOptions);
  else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
  }
}
function getScrollKey(path, delta) {
  const position = history.state ? history.state.position - delta : -1;
  return position + path;
}
const scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
  const scroll = scrollPositions.get(key);
  scrollPositions.delete(key);
  return scroll;
}
function createMemoryHistory(base = "") {
  let listeners = [];
  let queue2 = [START];
  let position = 0;
  base = normalizeBase(base);
  function setLocation(location) {
    position++;
    if (position === queue2.length) {
      queue2.push(location);
    } else {
      queue2.splice(position);
      queue2.push(location);
    }
  }
  function triggerListeners(to, from, { direction, delta }) {
    const info = {
      direction,
      delta,
      type: NavigationType$1.pop
    };
    for (const callback of listeners) {
      callback(to, from, info);
    }
  }
  const routerHistory = {
    // rewritten by Object.defineProperty
    location: START,
    // TODO: should be kept in queue
    state: {},
    base,
    createHref: createHref.bind(null, base),
    replace(to) {
      queue2.splice(position--, 1);
      setLocation(to);
    },
    push(to, data) {
      setLocation(to);
    },
    listen(callback) {
      listeners.push(callback);
      return () => {
        const index2 = listeners.indexOf(callback);
        if (index2 > -1)
          listeners.splice(index2, 1);
      };
    },
    destroy() {
      listeners = [];
      queue2 = [START];
      position = 0;
    },
    go(delta, shouldTrigger = true) {
      const from = this.location;
      const direction = (
        // we are considering delta === 0 going forward, but in abstract mode
        // using 0 for the delta doesn't make sense like it does in html5 where
        // it reloads the page
        delta < 0 ? NavigationDirection$1.back : NavigationDirection$1.forward
      );
      position = Math.max(0, Math.min(position + delta, queue2.length - 1));
      if (shouldTrigger) {
        triggerListeners(this.location, from, {
          direction,
          delta
        });
      }
    }
  };
  Object.defineProperty(routerHistory, "location", {
    enumerable: true,
    get: () => queue2[position]
  });
  return routerHistory;
}
function isRouteLocation(route) {
  return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
  return typeof name === "string" || typeof name === "symbol";
}
const START_LOCATION_NORMALIZED = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
const NavigationFailureSymbol = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var NavigationFailureType$1;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType$1 || (NavigationFailureType$1 = {}));
const ErrorTypeMessages = {
  [
    1
    /* ErrorTypes.MATCHER_NOT_FOUND */
  ]({ location, currentLocation }) {
    return `No match for
 ${JSON.stringify(location)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
  },
  [
    2
    /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
  ]({ from, to }) {
    return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
  },
  [
    4
    /* ErrorTypes.NAVIGATION_ABORTED */
  ]({ from, to }) {
    return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
  },
  [
    8
    /* ErrorTypes.NAVIGATION_CANCELLED */
  ]({ from, to }) {
    return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
  },
  [
    16
    /* ErrorTypes.NAVIGATION_DUPLICATED */
  ]({ from, to }) {
    return `Avoided redundant navigation to current location: "${from.fullPath}".`;
  }
};
function createRouterError(type2, params) {
  if (process.env.NODE_ENV !== "production" || false) {
    return assign(new Error(ErrorTypeMessages[type2](params)), {
      type: type2,
      [NavigationFailureSymbol]: true
    }, params);
  } else {
    return assign(new Error(), {
      type: type2,
      [NavigationFailureSymbol]: true
    }, params);
  }
}
function isNavigationFailure(error, type2) {
  return error instanceof Error && NavigationFailureSymbol in error && (type2 == null || !!(error.type & type2));
}
const propertiesToLog = ["params", "query", "hash"];
function stringifyRoute(to) {
  if (typeof to === "string")
    return to;
  if ("path" in to)
    return to.path;
  const location = {};
  for (const key of propertiesToLog) {
    if (key in to)
      location[key] = to[key];
  }
  return JSON.stringify(location, null, 2);
}
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
  const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
  const score = [];
  let pattern = options.start ? "^" : "";
  const keys = [];
  for (const segment of segments) {
    const segmentScores = segment.length ? [] : [
      90
      /* PathScore.Root */
    ];
    if (options.strict && !segment.length)
      pattern += "/";
    for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
      const token = segment[tokenIndex];
      let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
      if (token.type === 0) {
        if (!tokenIndex)
          pattern += "/";
        pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
        subSegmentScore += 40;
      } else if (token.type === 1) {
        const { value, repeatable, optional, regexp } = token;
        keys.push({
          name: value,
          repeatable,
          optional
        });
        const re3 = regexp ? regexp : BASE_PARAM_PATTERN;
        if (re3 !== BASE_PARAM_PATTERN) {
          subSegmentScore += 10;
          try {
            new RegExp(`(${re3})`);
          } catch (err2) {
            throw new Error(`Invalid custom RegExp for param "${value}" (${re3}): ` + err2.message);
          }
        }
        let subPattern = repeatable ? `((?:${re3})(?:/(?:${re3}))*)` : `(${re3})`;
        if (!tokenIndex)
          subPattern = // avoid an optional / if there are more segments e.g. /:p?-static
          // or /:p?-:p2
          optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
        if (optional)
          subPattern += "?";
        pattern += subPattern;
        subSegmentScore += 20;
        if (optional)
          subSegmentScore += -8;
        if (repeatable)
          subSegmentScore += -20;
        if (re3 === ".*")
          subSegmentScore += -50;
      }
      segmentScores.push(subSegmentScore);
    }
    score.push(segmentScores);
  }
  if (options.strict && options.end) {
    const i2 = score.length - 1;
    score[i2][score[i2].length - 1] += 0.7000000000000001;
  }
  if (!options.strict)
    pattern += "/?";
  if (options.end)
    pattern += "$";
  else if (options.strict)
    pattern += "(?:/|$)";
  const re2 = new RegExp(pattern, options.sensitive ? "" : "i");
  function parse(path) {
    const match = path.match(re2);
    const params = {};
    if (!match)
      return null;
    for (let i2 = 1; i2 < match.length; i2++) {
      const value = match[i2] || "";
      const key = keys[i2 - 1];
      params[key.name] = value && key.repeatable ? value.split("/") : value;
    }
    return params;
  }
  function stringify(params) {
    let path = "";
    let avoidDuplicatedSlash = false;
    for (const segment of segments) {
      if (!avoidDuplicatedSlash || !path.endsWith("/"))
        path += "/";
      avoidDuplicatedSlash = false;
      for (const token of segment) {
        if (token.type === 0) {
          path += token.value;
        } else if (token.type === 1) {
          const { value, repeatable, optional } = token;
          const param = value in params ? params[value] : "";
          if (isArray$1(param) && !repeatable) {
            throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
          }
          const text = isArray$1(param) ? param.join("/") : param;
          if (!text) {
            if (optional) {
              if (segment.length < 2) {
                if (path.endsWith("/"))
                  path = path.slice(0, -1);
                else
                  avoidDuplicatedSlash = true;
              }
            } else
              throw new Error(`Missing required param "${value}"`);
          }
          path += text;
        }
      }
    }
    return path || "/";
  }
  return {
    re: re2,
    score,
    keys,
    parse,
    stringify
  };
}
function compareScoreArray(a2, b2) {
  let i2 = 0;
  while (i2 < a2.length && i2 < b2.length) {
    const diff = b2[i2] - a2[i2];
    if (diff)
      return diff;
    i2++;
  }
  if (a2.length < b2.length) {
    return a2.length === 1 && a2[0] === 40 + 40 ? -1 : 1;
  } else if (a2.length > b2.length) {
    return b2.length === 1 && b2[0] === 40 + 40 ? 1 : -1;
  }
  return 0;
}
function comparePathParserScore(a2, b2) {
  let i2 = 0;
  const aScore = a2.score;
  const bScore = b2.score;
  while (i2 < aScore.length && i2 < bScore.length) {
    const comp = compareScoreArray(aScore[i2], bScore[i2]);
    if (comp)
      return comp;
    i2++;
  }
  if (Math.abs(bScore.length - aScore.length) === 1) {
    if (isLastScoreNegative(aScore))
      return 1;
    if (isLastScoreNegative(bScore))
      return -1;
  }
  return bScore.length - aScore.length;
}
function isLastScoreNegative(score) {
  const last = score[score.length - 1];
  return score.length > 0 && last[last.length - 1] < 0;
}
const ROOT_TOKEN = {
  type: 0,
  value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
  if (!path)
    return [[]];
  if (path === "/")
    return [[ROOT_TOKEN]];
  if (!path.startsWith("/")) {
    throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${path}" should be "/${path}".` : `Invalid path "${path}"`);
  }
  function crash(message2) {
    throw new Error(`ERR (${state})/"${buffer}": ${message2}`);
  }
  let state = 0;
  let previousState = state;
  const tokens = [];
  let segment;
  function finalizeSegment() {
    if (segment)
      tokens.push(segment);
    segment = [];
  }
  let i2 = 0;
  let char;
  let buffer = "";
  let customRe = "";
  function consumeBuffer() {
    if (!buffer)
      return;
    if (state === 0) {
      segment.push({
        type: 0,
        value: buffer
      });
    } else if (state === 1 || state === 2 || state === 3) {
      if (segment.length > 1 && (char === "*" || char === "+"))
        crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
      segment.push({
        type: 1,
        value: buffer,
        regexp: customRe,
        repeatable: char === "*" || char === "+",
        optional: char === "*" || char === "?"
      });
    } else {
      crash("Invalid state to consume buffer");
    }
    buffer = "";
  }
  function addCharToBuffer() {
    buffer += char;
  }
  while (i2 < path.length) {
    char = path[i2++];
    if (char === "\\" && state !== 2) {
      previousState = state;
      state = 4;
      continue;
    }
    switch (state) {
      case 0:
        if (char === "/") {
          if (buffer) {
            consumeBuffer();
          }
          finalizeSegment();
        } else if (char === ":") {
          consumeBuffer();
          state = 1;
        } else {
          addCharToBuffer();
        }
        break;
      case 4:
        addCharToBuffer();
        state = previousState;
        break;
      case 1:
        if (char === "(") {
          state = 2;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i2--;
        }
        break;
      case 2:
        if (char === ")") {
          if (customRe[customRe.length - 1] == "\\")
            customRe = customRe.slice(0, -1) + char;
          else
            state = 3;
        } else {
          customRe += char;
        }
        break;
      case 3:
        consumeBuffer();
        state = 0;
        if (char !== "*" && char !== "?" && char !== "+")
          i2--;
        customRe = "";
        break;
      default:
        crash("Unknown state");
        break;
    }
  }
  if (state === 2)
    crash(`Unfinished custom RegExp for param "${buffer}"`);
  consumeBuffer();
  finalizeSegment();
  return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
  const parser = tokensToParser(tokenizePath(record.path), options);
  if (process.env.NODE_ENV !== "production") {
    const existingKeys = /* @__PURE__ */ new Set();
    for (const key of parser.keys) {
      if (existingKeys.has(key.name))
        warn(`Found duplicated params with name "${key.name}" for path "${record.path}". Only the last one will be available on "$route.params".`);
      existingKeys.add(key.name);
    }
  }
  const matcher = assign(parser, {
    record,
    parent,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  if (parent) {
    if (!matcher.record.aliasOf === !parent.record.aliasOf)
      parent.children.push(matcher);
  }
  return matcher;
}
function createRouterMatcher(routes, globalOptions) {
  const matchers = [];
  const matcherMap = /* @__PURE__ */ new Map();
  globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }
  function addRoute(record, parent, originalRecord) {
    const isRootAdd = !originalRecord;
    const mainNormalizedRecord = normalizeRouteRecord(record);
    if (process.env.NODE_ENV !== "production") {
      checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent);
    }
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    const options = mergeOptions(globalOptions, record);
    const normalizedRecords = [
      mainNormalizedRecord
    ];
    if ("alias" in record) {
      const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
      for (const alias of aliases) {
        normalizedRecords.push(assign({}, mainNormalizedRecord, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
          path: alias,
          // we might be the child of an alias
          aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
      }
    }
    let matcher;
    let originalMatcher;
    for (const normalizedRecord of normalizedRecords) {
      const { path } = normalizedRecord;
      if (parent && path[0] !== "/") {
        const parentPath = parent.record.path;
        const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }
      if (process.env.NODE_ENV !== "production" && normalizedRecord.path === "*") {
        throw new Error('Catch all routes ("*") must now be defined using a param with a custom regexp.\nSee more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.');
      }
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if (process.env.NODE_ENV !== "production" && parent && path[0] === "/")
        checkMissingParamsInAbsolutePath(matcher, parent);
      if (originalRecord) {
        originalRecord.alias.push(matcher);
        if (process.env.NODE_ENV !== "production") {
          checkSameParams(originalRecord, matcher);
        }
      } else {
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher)
          originalMatcher.alias.push(matcher);
        if (isRootAdd && record.name && !isAliasRecord(matcher))
          removeRoute(record.name);
      }
      if (mainNormalizedRecord.children) {
        const children = mainNormalizedRecord.children;
        for (let i2 = 0; i2 < children.length; i2++) {
          addRoute(children[i2], matcher, originalRecord && originalRecord.children[i2]);
        }
      }
      originalRecord = originalRecord || matcher;
      if (matcher.record.components && Object.keys(matcher.record.components).length || matcher.record.name || matcher.record.redirect) {
        insertMatcher(matcher);
      }
    }
    return originalMatcher ? () => {
      removeRoute(originalMatcher);
    } : noop$1;
  }
  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      const matcher = matcherMap.get(matcherRef);
      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      const index2 = matchers.indexOf(matcherRef);
      if (index2 > -1) {
        matchers.splice(index2, 1);
        if (matcherRef.record.name)
          matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }
  function getRoutes() {
    return matchers;
  }
  function insertMatcher(matcher) {
    let i2 = 0;
    while (i2 < matchers.length && comparePathParserScore(matcher, matchers[i2]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (matcher.record.path !== matchers[i2].record.path || !isRecordChildOf(matcher, matchers[i2])))
      i2++;
    matchers.splice(i2, 0, matcher);
    if (matcher.record.name && !isAliasRecord(matcher))
      matcherMap.set(matcher.record.name, matcher);
  }
  function resolve(location, currentLocation) {
    let matcher;
    let params = {};
    let path;
    let name;
    if ("name" in location && location.name) {
      matcher = matcherMap.get(location.name);
      if (!matcher)
        throw createRouterError(1, {
          location
        });
      if (process.env.NODE_ENV !== "production") {
        const invalidParams = Object.keys(location.params || {}).filter((paramName) => !matcher.keys.find((k2) => k2.name === paramName));
        if (invalidParams.length) {
          warn(`Discarded invalid param(s) "${invalidParams.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
        }
      }
      name = matcher.record.name;
      params = assign(
        // paramsFromLocation is a new object
        paramsFromLocation(
          currentLocation.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          matcher.keys.filter((k2) => !k2.optional).map((k2) => k2.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        location.params && paramsFromLocation(location.params, matcher.keys.map((k2) => k2.name))
      );
      path = matcher.stringify(params);
    } else if ("path" in location) {
      path = location.path;
      if (process.env.NODE_ENV !== "production" && !path.startsWith("/")) {
        warn(`The Matcher cannot resolve relative paths but received "${path}". Unless you directly called \`matcher.resolve("${path}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`);
      }
      matcher = matchers.find((m2) => m2.re.test(path));
      if (matcher) {
        params = matcher.parse(path);
        name = matcher.record.name;
      }
    } else {
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m2) => m2.re.test(currentLocation.path));
      if (!matcher)
        throw createRouterError(1, {
          location,
          currentLocation
        });
      name = matcher.record.name;
      params = assign({}, currentLocation.params, location.params);
      path = matcher.stringify(params);
    }
    const matched = [];
    let parentMatcher = matcher;
    while (parentMatcher) {
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }
    return {
      name,
      path,
      params,
      matched,
      meta: mergeMetaFields(matched)
    };
  }
  routes.forEach((route) => addRoute(route));
  return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher };
}
function paramsFromLocation(params, keys) {
  const newParams = {};
  for (const key of keys) {
    if (key in params)
      newParams[key] = params[key];
  }
  return newParams;
}
function normalizeRouteRecord(record) {
  return {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: void 0,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in record ? record.components || null : record.component && { default: record.component }
  };
}
function normalizeRecordProps(record) {
  const propsObject = {};
  const props = record.props || false;
  if ("component" in record) {
    propsObject.default = props;
  } else {
    for (const name in record.components)
      propsObject[name] = typeof props === "boolean" ? props : props[name];
  }
  return propsObject;
}
function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf)
      return true;
    record = record.parent;
  }
  return false;
}
function mergeMetaFields(matched) {
  return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function mergeOptions(defaults, partialOptions) {
  const options = {};
  for (const key in defaults) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
  }
  return options;
}
function isSameParam(a2, b2) {
  return a2.name === b2.name && a2.optional === b2.optional && a2.repeatable === b2.repeatable;
}
function checkSameParams(a2, b2) {
  for (const key of a2.keys) {
    if (!key.optional && !b2.keys.find(isSameParam.bind(null, key)))
      return warn(`Alias "${b2.record.path}" and the original record: "${a2.record.path}" must have the exact same param named "${key.name}"`);
  }
  for (const key of b2.keys) {
    if (!key.optional && !a2.keys.find(isSameParam.bind(null, key)))
      return warn(`Alias "${b2.record.path}" and the original record: "${a2.record.path}" must have the exact same param named "${key.name}"`);
  }
}
function checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent) {
  if (parent && parent.record.name && !mainNormalizedRecord.name && !mainNormalizedRecord.path) {
    warn(`The route named "${String(parent.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
  }
}
function checkMissingParamsInAbsolutePath(record, parent) {
  for (const key of parent.keys) {
    if (!record.keys.find(isSameParam.bind(null, key)))
      return warn(`Absolute path "${record.record.path}" must have the exact same param named "${key.name}" as its parent "${parent.record.path}".`);
  }
}
function isRecordChildOf(record, parent) {
  return parent.children.some((child) => child === record || isRecordChildOf(record, child));
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
const ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
  return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
  try {
    return decodeURIComponent("" + text);
  } catch (err2) {
    process.env.NODE_ENV !== "production" && warn(`Error decoding "${text}". Using original value`);
  }
  return "" + text;
}
function parseQuery(search) {
  const query = {};
  if (search === "" || search === "?")
    return query;
  const hasLeadingIM = search[0] === "?";
  const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
  for (let i2 = 0; i2 < searchParams.length; ++i2) {
    const searchParam = searchParams[i2].replace(PLUS_RE, " ");
    const eqPos = searchParam.indexOf("=");
    const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!isArray$1(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}
function stringifyQuery(query) {
  let search = "";
  for (let key in query) {
    const value = query[key];
    key = encodeQueryKey(key);
    if (value == null) {
      if (value !== void 0) {
        search += (search.length ? "&" : "") + key;
      }
      continue;
    }
    const values = isArray$1(value) ? value.map((v2) => v2 && encodeQueryValue(v2)) : [value && encodeQueryValue(value)];
    values.forEach((value2) => {
      if (value2 !== void 0) {
        search += (search.length ? "&" : "") + key;
        if (value2 != null)
          search += "=" + value2;
      }
    });
  }
  return search;
}
function normalizeQuery(query) {
  const normalizedQuery = {};
  for (const key in query) {
    const value = query[key];
    if (value !== void 0) {
      normalizedQuery[key] = isArray$1(value) ? value.map((v2) => v2 == null ? null : "" + v2) : value == null ? value : "" + value;
    }
  }
  return normalizedQuery;
}
const matchedRouteKey = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
const viewDepthKey = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const routerKey$1 = Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
const routeLocationKey$1 = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
const routerViewLocationKey = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function useCallbacks() {
  let handlers2 = [];
  function add(handler) {
    handlers2.push(handler);
    return () => {
      const i2 = handlers2.indexOf(handler);
      if (i2 > -1)
        handlers2.splice(i2, 1);
    };
  }
  function reset() {
    handlers2 = [];
  }
  return {
    add,
    list: () => handlers2,
    reset
  };
}
function guardToPromiseFn(guard, to, from, record, name) {
  const enterCallbackArray = record && // name is defined if record is because of the function overload
  (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return () => new Promise((resolve, reject) => {
    const next = (valid) => {
      if (valid === false) {
        reject(createRouterError(4, {
          from,
          to
        }));
      } else if (valid instanceof Error) {
        reject(valid);
      } else if (isRouteLocation(valid)) {
        reject(createRouterError(2, {
          from: to,
          to: valid
        }));
      } else {
        if (enterCallbackArray && // since enterCallbackArray is truthy, both record and name also are
        record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") {
          enterCallbackArray.push(valid);
        }
        resolve();
      }
    };
    const guardReturn = guard.call(record && record.instances[name], to, from, process.env.NODE_ENV !== "production" ? canOnlyBeCalledOnce(next, to, from) : next);
    let guardCall = Promise.resolve(guardReturn);
    if (guard.length < 3)
      guardCall = guardCall.then(next);
    if (process.env.NODE_ENV !== "production" && guard.length > 2) {
      const message2 = `The "next" callback was never called inside of ${guard.name ? '"' + guard.name + '"' : ""}:
${guard.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof guardReturn === "object" && "then" in guardReturn) {
        guardCall = guardCall.then((resolvedValue) => {
          if (!next._called) {
            warn(message2);
            return Promise.reject(new Error("Invalid navigation guard"));
          }
          return resolvedValue;
        });
      } else if (guardReturn !== void 0) {
        if (!next._called) {
          warn(message2);
          reject(new Error("Invalid navigation guard"));
          return;
        }
      }
    }
    guardCall.catch((err2) => reject(err2));
  });
}
function canOnlyBeCalledOnce(next, to, from) {
  let called = 0;
  return function() {
    if (called++ === 1)
      warn(`The "next" callback was called more than once in one navigation guard when going from "${from.fullPath}" to "${to.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`);
    next._called = true;
    if (called === 1)
      next.apply(null, arguments);
  };
}
function extractComponentsGuards(matched, guardType, to, from) {
  const guards = [];
  for (const record of matched) {
    if (process.env.NODE_ENV !== "production" && !record.components && !record.children.length) {
      warn(`Record with path "${record.path}" is either missing a "component(s)" or "children" property.`);
    }
    for (const name in record.components) {
      let rawComponent = record.components[name];
      if (process.env.NODE_ENV !== "production") {
        if (!rawComponent || typeof rawComponent !== "object" && typeof rawComponent !== "function") {
          warn(`Component "${name}" in record with path "${record.path}" is not a valid component. Received "${String(rawComponent)}".`);
          throw new Error("Invalid route component");
        } else if ("then" in rawComponent) {
          warn(`Component "${name}" in record with path "${record.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const promise2 = rawComponent;
          rawComponent = () => promise2;
        } else if (rawComponent.__asyncLoader && // warn only once per component
        !rawComponent.__warnedDefineAsync) {
          rawComponent.__warnedDefineAsync = true;
          warn(`Component "${name}" in record with path "${record.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`);
        }
      }
      if (guardType !== "beforeRouteEnter" && !record.instances[name])
        continue;
      if (isRouteComponent(rawComponent)) {
        const options = rawComponent.__vccOpts || rawComponent;
        const guard = options[guardType];
        guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
      } else {
        let componentPromise = rawComponent();
        if (process.env.NODE_ENV !== "production" && !("catch" in componentPromise)) {
          warn(`Component "${name}" in record with path "${record.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`);
          componentPromise = Promise.resolve(componentPromise);
        }
        guards.push(() => componentPromise.then((resolved) => {
          if (!resolved)
            return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.components[name] = resolvedComponent;
          const options = resolvedComponent.__vccOpts || resolvedComponent;
          const guard = options[guardType];
          return guard && guardToPromiseFn(guard, to, from, record, name)();
        }));
      }
    }
  }
  return guards;
}
function isRouteComponent(component) {
  return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function useLink$1(props) {
  const router = inject(routerKey$1);
  const currentRoute = inject(routeLocationKey$1);
  const route = computed(() => router.resolve(unref(props.to)));
  const activeRecordIndex = computed(() => {
    const { matched } = route.value;
    const { length } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length)
      return -1;
    const index2 = currentMatched.findIndex(isSameRouteRecord$1.bind(null, routeMatched));
    if (index2 > -1)
      return index2;
    const parentRecordPath = getOriginalPath$1(matched[length - 2]);
    return (
      // we are dealing with nested routes
      length > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      getOriginalPath$1(routeMatched) === parentRecordPath && // avoid comparing the child with its parent
      currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord$1.bind(null, matched[length - 2])) : index2
    );
  });
  const isActive = computed(() => activeRecordIndex.value > -1 && includesParams$1(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams$1(currentRoute.params, route.value.params));
  function navigate(e2 = {}) {
    if (guardEvent$1(e2)) {
      return router[unref(props.replace) ? "replace" : "push"](
        unref(props.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(noop$1);
    }
    return Promise.resolve();
  }
  if ((process.env.NODE_ENV !== "production" || false) && isBrowser$1) {
    const instance = getCurrentInstance();
    if (instance) {
      const linkContextDevtools = {
        route: route.value,
        isActive: isActive.value,
        isExactActive: isExactActive.value
      };
      instance.__vrl_devtools = instance.__vrl_devtools || [];
      instance.__vrl_devtools.push(linkContextDevtools);
      watchEffect(() => {
        linkContextDevtools.route = route.value;
        linkContextDevtools.isActive = isActive.value;
        linkContextDevtools.isExactActive = isExactActive.value;
      }, { flush: "post" });
    }
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive,
    isExactActive,
    navigate
  };
}
const RouterLinkImpl$1 = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: useLink$1,
  setup(props, { slots }) {
    const link = reactive(useLink$1(props));
    const { options } = inject(routerKey$1);
    const elClass = computed(() => ({
      [getLinkClass$1(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [getLinkClass$1(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && slots.default(link);
      return props.custom ? children : h$4("a", {
        "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink$1 = RouterLinkImpl$1;
function guardEvent$1(e2) {
  if (e2.metaKey || e2.altKey || e2.ctrlKey || e2.shiftKey)
    return;
  if (e2.defaultPrevented)
    return;
  if (e2.button !== void 0 && e2.button !== 0)
    return;
  if (e2.currentTarget && e2.currentTarget.getAttribute) {
    const target = e2.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target))
      return;
  }
  if (e2.preventDefault)
    e2.preventDefault();
  return true;
}
function includesParams$1(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue)
        return false;
    } else {
      if (!isArray$1(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i2) => value !== outerValue[i2]))
        return false;
    }
  }
  return true;
}
function getOriginalPath$1(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass$1 = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /* @__PURE__ */ defineComponent({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(props, { attrs, slots }) {
    process.env.NODE_ENV !== "production" && warnDeprecatedUsage();
    const injectedRoute = inject(routerViewLocationKey);
    const routeToDisplay = computed(() => props.route || injectedRoute.value);
    const injectedDepth = inject(viewDepthKey, 0);
    const depth = computed(() => {
      let initialDepth = unref(injectedDepth);
      const { matched } = routeToDisplay.value;
      let matchedRoute;
      while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) {
        initialDepth++;
      }
      return initialDepth;
    });
    const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth.value]);
    provide(viewDepthKey, computed(() => depth.value + 1));
    provide(matchedRouteKey, matchedRouteRef);
    provide(routerViewLocationKey, routeToDisplay);
    const viewRef = ref();
    watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
      if (to) {
        to.instances[name] = instance;
        if (from && from !== to && instance && instance === oldInstance) {
          if (!to.leaveGuards.size) {
            to.leaveGuards = from.leaveGuards;
          }
          if (!to.updateGuards.size) {
            to.updateGuards = from.updateGuards;
          }
        }
      }
      if (instance && to && // if there is no instance but to and from are the same this might be
      // the first visit
      (!from || !isSameRouteRecord$1(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
      }
    }, { flush: "post" });
    return () => {
      const route = routeToDisplay.value;
      const currentName = props.name;
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.components[currentName];
      if (!ViewComponent) {
        return normalizeSlot(slots.default, { Component: ViewComponent, route });
      }
      const routePropsOption = matchedRoute.props[currentName];
      const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
      const onVnodeUnmounted = (vnode) => {
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };
      const component = h$4(ViewComponent, assign({}, routeProps, attrs, {
        onVnodeUnmounted,
        ref: viewRef
      }));
      if ((process.env.NODE_ENV !== "production" || false) && isBrowser$1 && component.ref) {
        const info = {
          depth: depth.value,
          name: matchedRoute.name,
          path: matchedRoute.path,
          meta: matchedRoute.meta
        };
        const internalInstances = isArray$1(component.ref) ? component.ref.map((r2) => r2.i) : [component.ref.i];
        internalInstances.forEach((instance) => {
          instance.__vrv_devtools = info;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        normalizeSlot(slots.default, { Component: component, route }) || component
      );
    };
  }
});
function normalizeSlot(slot, data) {
  if (!slot)
    return null;
  const slotContent = slot(data);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
}
const RouterView = RouterViewImpl;
function warnDeprecatedUsage() {
  const instance = getCurrentInstance();
  const parentName = instance.parent && instance.parent.type.name;
  if (parentName && (parentName === "KeepAlive" || parentName.includes("Transition"))) {
    const comp = parentName === "KeepAlive" ? "keep-alive" : "transition";
    warn(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${comp}>
    <component :is="Component" />
  </${comp}>
</router-view>`);
  }
}
function formatRouteLocation(routeLocation, tooltip) {
  const copy = assign({}, routeLocation, {
    // remove variables that can contain vue instances
    matched: routeLocation.matched.map((matched) => omit(matched, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: true,
      display: routeLocation.fullPath,
      tooltip,
      value: copy
    }
  };
}
function formatDisplay(display) {
  return {
    _custom: {
      display
    }
  };
}
let routerId = 0;
function addDevtools(app, router, matcher) {
  if (router.__hasDevtools)
    return;
  router.__hasDevtools = true;
  const id = routerId++;
  setupDevtoolsPlugin({
    id: "org.vuejs.router" + (id ? "." + id : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app
  }, (api) => {
    if (typeof api.now !== "function") {
      console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
    }
    api.on.inspectComponent((payload, ctx) => {
      if (payload.instanceData) {
        payload.instanceData.state.push({
          type: "Routing",
          key: "$route",
          editable: false,
          value: formatRouteLocation(router.currentRoute.value, "Current Route")
        });
      }
    });
    api.on.visitComponentTree(({ treeNode: node, componentInstance }) => {
      if (componentInstance.__vrv_devtools) {
        const info = componentInstance.__vrv_devtools;
        node.tags.push({
          label: (info.name ? `${info.name.toString()}: ` : "") + info.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: PINK_500
        });
      }
      if (isArray$1(componentInstance.__vrl_devtools)) {
        componentInstance.__devtoolsApi = api;
        componentInstance.__vrl_devtools.forEach((devtoolsData) => {
          let backgroundColor = ORANGE_400;
          let tooltip = "";
          if (devtoolsData.isExactActive) {
            backgroundColor = LIME_500;
            tooltip = "This is exactly active";
          } else if (devtoolsData.isActive) {
            backgroundColor = BLUE_600;
            tooltip = "This link is active";
          }
          node.tags.push({
            label: devtoolsData.route.path,
            textColor: 0,
            tooltip,
            backgroundColor
          });
        });
      }
    });
    watch(router.currentRoute, () => {
      refreshRoutesView();
      api.notifyComponentUpdate();
      api.sendInspectorTree(routerInspectorId);
      api.sendInspectorState(routerInspectorId);
    });
    const navigationsLayerId = "router:navigations:" + id;
    api.addTimelineLayer({
      id: navigationsLayerId,
      label: `Router${id ? " " + id : ""} Navigations`,
      color: 4237508
    });
    router.onError((error, to) => {
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          title: "Error during Navigation",
          subtitle: to.fullPath,
          logType: "error",
          time: api.now(),
          data: { error },
          groupId: to.meta.__navigationId
        }
      });
    });
    let navigationId = 0;
    router.beforeEach((to, from) => {
      const data = {
        guard: formatDisplay("beforeEach"),
        from: formatRouteLocation(from, "Current Location during this navigation"),
        to: formatRouteLocation(to, "Target location")
      };
      Object.defineProperty(to.meta, "__navigationId", {
        value: navigationId++
      });
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          time: api.now(),
          title: "Start of navigation",
          subtitle: to.fullPath,
          data,
          groupId: to.meta.__navigationId
        }
      });
    });
    router.afterEach((to, from, failure) => {
      const data = {
        guard: formatDisplay("afterEach")
      };
      if (failure) {
        data.failure = {
          _custom: {
            type: Error,
            readOnly: true,
            display: failure ? failure.message : "",
            tooltip: "Navigation Failure",
            value: failure
          }
        };
        data.status = formatDisplay("❌");
      } else {
        data.status = formatDisplay("✅");
      }
      data.from = formatRouteLocation(from, "Current Location during this navigation");
      data.to = formatRouteLocation(to, "Target location");
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          title: "End of navigation",
          subtitle: to.fullPath,
          time: api.now(),
          data,
          logType: failure ? "warning" : "default",
          groupId: to.meta.__navigationId
        }
      });
    });
    const routerInspectorId = "router-inspector:" + id;
    api.addInspector({
      id: routerInspectorId,
      label: "Routes" + (id ? " " + id : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function refreshRoutesView() {
      if (!activeRoutesPayload)
        return;
      const payload = activeRoutesPayload;
      let routes = matcher.getRoutes().filter((route) => !route.parent);
      routes.forEach(resetMatchStateOnRouteRecord);
      if (payload.filter) {
        routes = routes.filter((route) => (
          // save matches state based on the payload
          isRouteMatching(route, payload.filter.toLowerCase())
        ));
      }
      routes.forEach((route) => markRouteRecordActive(route, router.currentRoute.value));
      payload.rootNodes = routes.map(formatRouteRecordForInspector);
    }
    let activeRoutesPayload;
    api.on.getInspectorTree((payload) => {
      activeRoutesPayload = payload;
      if (payload.app === app && payload.inspectorId === routerInspectorId) {
        refreshRoutesView();
      }
    });
    api.on.getInspectorState((payload) => {
      if (payload.app === app && payload.inspectorId === routerInspectorId) {
        const routes = matcher.getRoutes();
        const route = routes.find((route2) => route2.record.__vd_id === payload.nodeId);
        if (route) {
          payload.state = {
            options: formatRouteRecordMatcherForStateInspector(route)
          };
        }
      }
    });
    api.sendInspectorTree(routerInspectorId);
    api.sendInspectorState(routerInspectorId);
  });
}
function modifierForKey(key) {
  if (key.optional) {
    return key.repeatable ? "*" : "?";
  } else {
    return key.repeatable ? "+" : "";
  }
}
function formatRouteRecordMatcherForStateInspector(route) {
  const { record } = route;
  const fields = [
    { editable: false, key: "path", value: record.path }
  ];
  if (record.name != null) {
    fields.push({
      editable: false,
      key: "name",
      value: record.name
    });
  }
  fields.push({ editable: false, key: "regexp", value: route.re });
  if (route.keys.length) {
    fields.push({
      editable: false,
      key: "keys",
      value: {
        _custom: {
          type: null,
          readOnly: true,
          display: route.keys.map((key) => `${key.name}${modifierForKey(key)}`).join(" "),
          tooltip: "Param keys",
          value: route.keys
        }
      }
    });
  }
  if (record.redirect != null) {
    fields.push({
      editable: false,
      key: "redirect",
      value: record.redirect
    });
  }
  if (route.alias.length) {
    fields.push({
      editable: false,
      key: "aliases",
      value: route.alias.map((alias) => alias.record.path)
    });
  }
  if (Object.keys(route.record.meta).length) {
    fields.push({
      editable: false,
      key: "meta",
      value: route.record.meta
    });
  }
  fields.push({
    key: "score",
    editable: false,
    value: {
      _custom: {
        type: null,
        readOnly: true,
        display: route.score.map((score) => score.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: route.score
      }
    }
  });
  return fields;
}
const PINK_500 = 15485081;
const BLUE_600 = 2450411;
const LIME_500 = 8702998;
const CYAN_400 = 2282478;
const ORANGE_400 = 16486972;
const DARK = 6710886;
function formatRouteRecordForInspector(route) {
  const tags = [];
  const { record } = route;
  if (record.name != null) {
    tags.push({
      label: String(record.name),
      textColor: 0,
      backgroundColor: CYAN_400
    });
  }
  if (record.aliasOf) {
    tags.push({
      label: "alias",
      textColor: 0,
      backgroundColor: ORANGE_400
    });
  }
  if (route.__vd_match) {
    tags.push({
      label: "matches",
      textColor: 0,
      backgroundColor: PINK_500
    });
  }
  if (route.__vd_exactActive) {
    tags.push({
      label: "exact",
      textColor: 0,
      backgroundColor: LIME_500
    });
  }
  if (route.__vd_active) {
    tags.push({
      label: "active",
      textColor: 0,
      backgroundColor: BLUE_600
    });
  }
  if (record.redirect) {
    tags.push({
      label: typeof record.redirect === "string" ? `redirect: ${record.redirect}` : "redirects",
      textColor: 16777215,
      backgroundColor: DARK
    });
  }
  let id = record.__vd_id;
  if (id == null) {
    id = String(routeRecordId++);
    record.__vd_id = id;
  }
  return {
    id,
    label: record.path,
    tags,
    children: route.children.map(formatRouteRecordForInspector)
  };
}
let routeRecordId = 0;
const EXTRACT_REGEXP_RE = /^\/(.*)\/([a-z]*)$/;
function markRouteRecordActive(route, currentRoute) {
  const isExactActive = currentRoute.matched.length && isSameRouteRecord$1(currentRoute.matched[currentRoute.matched.length - 1], route.record);
  route.__vd_exactActive = route.__vd_active = isExactActive;
  if (!isExactActive) {
    route.__vd_active = currentRoute.matched.some((match) => isSameRouteRecord$1(match, route.record));
  }
  route.children.forEach((childRoute) => markRouteRecordActive(childRoute, currentRoute));
}
function resetMatchStateOnRouteRecord(route) {
  route.__vd_match = false;
  route.children.forEach(resetMatchStateOnRouteRecord);
}
function isRouteMatching(route, filter) {
  const found = String(route.re).match(EXTRACT_REGEXP_RE);
  route.__vd_match = false;
  if (!found || found.length < 3) {
    return false;
  }
  const nonEndingRE = new RegExp(found[1].replace(/\$$/, ""), found[2]);
  if (nonEndingRE.test(filter)) {
    route.children.forEach((child) => isRouteMatching(child, filter));
    if (route.record.path !== "/" || filter === "/") {
      route.__vd_match = route.re.test(filter);
      return true;
    }
    return false;
  }
  const path = route.record.path.toLowerCase();
  const decodedPath = decode(path);
  if (!filter.startsWith("/") && (decodedPath.includes(filter) || path.includes(filter)))
    return true;
  if (decodedPath.startsWith(filter) || path.startsWith(filter))
    return true;
  if (route.record.name && String(route.record.name).includes(filter))
    return true;
  return route.children.some((child) => isRouteMatching(child, filter));
}
function omit(obj, keys) {
  const ret = {};
  for (const key in obj) {
    if (!keys.includes(key)) {
      ret[key] = obj[key];
    }
  }
  return ret;
}
function createRouter(options) {
  const matcher = createRouterMatcher(options.routes, options);
  const parseQuery$1 = options.parseQuery || parseQuery;
  const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  const routerHistory = options.history;
  if (process.env.NODE_ENV !== "production" && !routerHistory)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const beforeGuards = useCallbacks();
  const beforeResolveGuards = useCallbacks();
  const afterGuards = useCallbacks();
  const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
  let pendingLocation = START_LOCATION_NORMALIZED;
  if (isBrowser$1 && options.scrollBehavior && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
  const encodeParams = applyToParams.bind(null, encodeParam);
  const decodeParams = (
    // @ts-expect-error: intentionally avoid the type check
    applyToParams.bind(null, decode)
  );
  function addRoute(parentOrRoute, route) {
    let parent;
    let record;
    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else {
      record = parentOrRoute;
    }
    return matcher.addRoute(record, parent);
  }
  function removeRoute(name) {
    const recordMatcher = matcher.getRecordMatcher(name);
    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    } else if (process.env.NODE_ENV !== "production") {
      warn(`Cannot remove non-existent route "${String(name)}"`);
    }
  }
  function getRoutes() {
    return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
  }
  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }
  function resolve(rawLocation, currentLocation) {
    currentLocation = assign({}, currentLocation || currentRoute.value);
    if (typeof rawLocation === "string") {
      const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
      const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
      const href2 = routerHistory.createHref(locationNormalized.fullPath);
      if (process.env.NODE_ENV !== "production") {
        if (href2.startsWith("//"))
          warn(`Location "${rawLocation}" resolved to "${href2}". A resolved location cannot start with multiple slashes.`);
        else if (!matchedRoute2.matched.length) {
          warn(`No match found for location with path "${rawLocation}"`);
        }
      }
      return assign(locationNormalized, matchedRoute2, {
        params: decodeParams(matchedRoute2.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: void 0,
        href: href2
      });
    }
    let matcherLocation;
    if ("path" in rawLocation) {
      if (process.env.NODE_ENV !== "production" && "params" in rawLocation && !("name" in rawLocation) && // @ts-expect-error: the type is never
      Object.keys(rawLocation.params).length) {
        warn(`Path "${// @ts-expect-error: the type is never
        rawLocation.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`);
      }
      matcherLocation = assign({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      const targetParams = assign({}, rawLocation.params);
      for (const key in targetParams) {
        if (targetParams[key] == null) {
          delete targetParams[key];
        }
      }
      matcherLocation = assign({}, rawLocation, {
        params: encodeParams(rawLocation.params)
      });
      currentLocation.params = encodeParams(currentLocation.params);
    }
    const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    const hash = rawLocation.hash || "";
    if (process.env.NODE_ENV !== "production" && hash && !hash.startsWith("#")) {
      warn(`A \`hash\` should always start with the character "#". Replace "${hash}" with "#${hash}".`);
    }
    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    const href = routerHistory.createHref(fullPath);
    if (process.env.NODE_ENV !== "production") {
      if (href.startsWith("//")) {
        warn(`Location "${rawLocation}" resolved to "${href}". A resolved location cannot start with multiple slashes.`);
      } else if (!matchedRoute.matched.length) {
        warn(`No match found for location with path "${"path" in rawLocation ? rawLocation.path : rawLocation}"`);
      }
    }
    return assign({
      fullPath,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
      )
    }, matchedRoute, {
      redirectedFrom: void 0,
      href
    });
  }
  function locationAsObject(to) {
    return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
  }
  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8, {
        from,
        to
      });
    }
  }
  function push(to) {
    return pushWithRedirect(to);
  }
  function replace(to) {
    return push(assign(locationAsObject(to), { replace: true }));
  }
  function handleRedirectRecord(to) {
    const lastMatched = to.matched[to.matched.length - 1];
    if (lastMatched && lastMatched.redirect) {
      const { redirect } = lastMatched;
      let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
      if (typeof newTargetLocation === "string") {
        newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : (
          // force empty params
          { path: newTargetLocation }
        );
        newTargetLocation.params = {};
      }
      if (process.env.NODE_ENV !== "production" && !("path" in newTargetLocation) && !("name" in newTargetLocation)) {
        warn(`Invalid redirect found:
${JSON.stringify(newTargetLocation, null, 2)}
 when navigating to "${to.fullPath}". A redirect must contain a name or path. This will break in production.`);
        throw new Error("Invalid redirect");
      }
      return assign({
        query: to.query,
        hash: to.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in newTargetLocation ? {} : to.params
      }, newTargetLocation);
    }
  }
  function pushWithRedirect(to, redirectedFrom) {
    const targetLocation = pendingLocation = resolve(to);
    const from = currentRoute.value;
    const data = to.state;
    const force = to.force;
    const replace2 = to.replace === true;
    const shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect)
      return pushWithRedirect(
        assign(locationAsObject(shouldRedirect), {
          state: typeof shouldRedirect === "object" ? assign({}, data, shouldRedirect.state) : data,
          force,
          replace: replace2
        }),
        // keep original redirectedFrom if it exists
        redirectedFrom || targetLocation
      );
    const toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    let failure;
    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16, { to: toLocation, from });
      handleScroll3(
        from,
        from,
        // this is a push, the only way for it to be triggered from a
        // history.listen is with a redirect, which makes it become a push
        true,
        // This cannot be the first navigation because the initial location
        // cannot be manually navigated to
        false
      );
    }
    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? (
      // navigation redirects still mark the router as ready
      isNavigationFailure(
        error,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? error : markAsReady(error)
    ) : (
      // reject any unknown error
      triggerError(error, toLocation, from)
    )).then((failure2) => {
      if (failure2) {
        if (isNavigationFailure(
          failure2,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        )) {
          if (process.env.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          isSameRouteLocation(stringifyQuery$1, resolve(failure2.to), toLocation) && // and we have done it a couple of times
          redirectedFrom && // @ts-expect-error: added only in dev
          (redirectedFrom._count = redirectedFrom._count ? (
            // @ts-expect-error
            redirectedFrom._count + 1
          ) : 1) > 10) {
            warn(`Detected an infinite redirection in a navigation guard when going from "${from.fullPath}" to "${toLocation.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`);
            return Promise.reject(new Error("Infinite redirect in navigation guard"));
          }
          return pushWithRedirect(
            // keep options
            assign({
              // preserve an existing replacement but allow the redirect to override it
              replace: replace2
            }, locationAsObject(failure2.to), {
              state: typeof failure2.to === "object" ? assign({}, data, failure2.to.state) : data,
              force
            }),
            // preserve the original redirectedFrom if any
            redirectedFrom || toLocation
          );
        }
      } else {
        failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
      }
      triggerAfterEach(toLocation, from, failure2);
      return failure2;
    });
  }
  function checkCanceledNavigationAndReject(to, from) {
    const error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  }
  function navigate(to, from) {
    let guards;
    const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
    guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
    for (const record of leavingRecords) {
      record.leaveGuards.forEach((guard) => {
        guards.push(guardToPromiseFn(guard, to, from));
      });
    }
    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck);
    return runGuardQueue(guards).then(() => {
      guards = [];
      for (const guard of beforeGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
      for (const record of updatingRecords) {
        record.updateGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const record of to.matched) {
        if (record.beforeEnter && !from.matched.includes(record)) {
          if (isArray$1(record.beforeEnter)) {
            for (const beforeEnter of record.beforeEnter)
              guards.push(guardToPromiseFn(beforeEnter, to, from));
          } else {
            guards.push(guardToPromiseFn(record.beforeEnter, to, from));
          }
        }
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      to.matched.forEach((record) => record.enterCallbacks = {});
      guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const guard of beforeResolveGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).catch((err2) => isNavigationFailure(
      err2,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? err2 : Promise.reject(err2));
  }
  function triggerAfterEach(to, from, failure) {
    for (const guard of afterGuards.list())
      guard(to, from, failure);
  }
  function finalizeNavigation(toLocation, from, isPush, replace2, data) {
    const error = checkCanceledNavigation(toLocation, from);
    if (error)
      return error;
    const isFirstNavigation = from === START_LOCATION_NORMALIZED;
    const state = !isBrowser$1 ? {} : history.state;
    if (isPush) {
      if (replace2 || isFirstNavigation)
        routerHistory.replace(toLocation.fullPath, assign({
          scroll: isFirstNavigation && state && state.scroll
        }, data));
      else
        routerHistory.push(toLocation.fullPath, data);
    }
    currentRoute.value = toLocation;
    handleScroll3(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }
  let removeHistoryListener;
  function setupListeners() {
    if (removeHistoryListener)
      return;
    removeHistoryListener = routerHistory.listen((to, _from, info) => {
      if (!router.listening)
        return;
      const toLocation = resolve(to);
      const shouldRedirect = handleRedirectRecord(toLocation);
      if (shouldRedirect) {
        pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop$1);
        return;
      }
      pendingLocation = toLocation;
      const from = currentRoute.value;
      if (isBrowser$1) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }
      navigate(toLocation, from).catch((error) => {
        if (isNavigationFailure(
          error,
          4 | 8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        )) {
          return error;
        }
        if (isNavigationFailure(
          error,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        )) {
          pushWithRedirect(
            error.to,
            toLocation
            // avoid an uncaught rejection, let push call triggerError
          ).then((failure) => {
            if (isNavigationFailure(
              failure,
              4 | 16
              /* ErrorTypes.NAVIGATION_DUPLICATED */
            ) && !info.delta && info.type === NavigationType$1.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop$1);
          return Promise.reject();
        }
        if (info.delta) {
          routerHistory.go(-info.delta, false);
        }
        return triggerError(error, toLocation, from);
      }).then((failure) => {
        failure = failure || finalizeNavigation(
          // after navigation, all matched components are resolved
          toLocation,
          from,
          false
        );
        if (failure) {
          if (info.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
          // entry while a different route is displayed
          !isNavigationFailure(
            failure,
            8
            /* ErrorTypes.NAVIGATION_CANCELLED */
          )) {
            routerHistory.go(-info.delta, false);
          } else if (info.type === NavigationType$1.pop && isNavigationFailure(
            failure,
            4 | 16
            /* ErrorTypes.NAVIGATION_DUPLICATED */
          )) {
            routerHistory.go(-1, false);
          }
        }
        triggerAfterEach(toLocation, from, failure);
      }).catch(noop$1);
    });
  }
  let readyHandlers = useCallbacks();
  let errorHandlers = useCallbacks();
  let ready;
  function triggerError(error, to, from) {
    markAsReady(error);
    const list = errorHandlers.list();
    if (list.length) {
      list.forEach((handler) => handler(error, to, from));
    } else {
      if (process.env.NODE_ENV !== "production") {
        warn("uncaught error during route navigation:");
      }
      console.error(error);
    }
    return Promise.reject(error);
  }
  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
      return Promise.resolve();
    return new Promise((resolve2, reject) => {
      readyHandlers.add([resolve2, reject]);
    });
  }
  function markAsReady(err2) {
    if (!ready) {
      ready = !err2;
      setupListeners();
      readyHandlers.list().forEach(([resolve2, reject]) => err2 ? reject(err2) : resolve2());
      readyHandlers.reset();
    }
    return err2;
  }
  function handleScroll3(to, from, isPush, isFirstNavigation) {
    const { scrollBehavior } = options;
    if (!isBrowser$1 || !scrollBehavior)
      return Promise.resolve();
    const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err2) => triggerError(err2, to, from));
  }
  const go = (delta) => routerHistory.go(delta);
  let started;
  const installedApps = /* @__PURE__ */ new Set();
  const router = {
    currentRoute,
    listening: true,
    addRoute,
    removeRoute,
    hasRoute,
    getRoutes,
    resolve,
    options,
    push,
    replace,
    go,
    back: () => go(-1),
    forward: () => go(1),
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorHandlers.add,
    isReady,
    install(app) {
      const router2 = this;
      app.component("RouterLink", RouterLink$1);
      app.component("RouterView", RouterView);
      app.config.globalProperties.$router = router2;
      Object.defineProperty(app.config.globalProperties, "$route", {
        enumerable: true,
        get: () => unref(currentRoute)
      });
      if (isBrowser$1 && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        started = true;
        push(routerHistory.location).catch((err2) => {
          if (process.env.NODE_ENV !== "production")
            warn("Unexpected error when starting the router:", err2);
        });
      }
      const reactiveRoute = {};
      for (const key in START_LOCATION_NORMALIZED) {
        reactiveRoute[key] = computed(() => currentRoute.value[key]);
      }
      app.provide(routerKey$1, router2);
      app.provide(routeLocationKey$1, reactive(reactiveRoute));
      app.provide(routerViewLocationKey, currentRoute);
      const unmountApp = app.unmount;
      installedApps.add(app);
      app.unmount = function() {
        installedApps.delete(app);
        if (installedApps.size < 1) {
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          removeHistoryListener = null;
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }
        unmountApp();
      };
      if ((process.env.NODE_ENV !== "production" || false) && isBrowser$1) {
        addDevtools(app, router2, matcher);
      }
    }
  };
  return router;
}
function runGuardQueue(guards) {
  return guards.reduce((promise2, guard) => promise2.then(() => guard()), Promise.resolve());
}
function extractChangingRecords(to, from) {
  const leavingRecords = [];
  const updatingRecords = [];
  const enteringRecords = [];
  const len = Math.max(from.matched.length, to.matched.length);
  for (let i2 = 0; i2 < len; i2++) {
    const recordFrom = from.matched[i2];
    if (recordFrom) {
      if (to.matched.find((record) => isSameRouteRecord$1(record, recordFrom)))
        updatingRecords.push(recordFrom);
      else
        leavingRecords.push(recordFrom);
    }
    const recordTo = to.matched[i2];
    if (recordTo) {
      if (!from.matched.find((record) => isSameRouteRecord$1(record, recordTo))) {
        enteringRecords.push(recordTo);
      }
    }
  }
  return [leavingRecords, updatingRecords, enteringRecords];
}
function useRouter$1() {
  return inject(routerKey$1);
}
function useRoute$1() {
  return inject(routeLocationKey$1);
}
const clientConfig2 = defineClientConfig({
  setup() {
    return;
  }
});
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const isBrowser = typeof window !== "undefined";
const noop = () => {
};
const isArray = Array.isArray;
function isSameRouteRecord(a2, b2) {
  return (a2.aliasOf || a2) === (b2.aliasOf || b2);
}
function isSameRouteLocationParams(a2, b2) {
  if (Object.keys(a2).length !== Object.keys(b2).length)
    return false;
  for (const key in a2) {
    if (!isSameRouteLocationParamsValue(a2[key], b2[key]))
      return false;
  }
  return true;
}
function isSameRouteLocationParamsValue(a2, b2) {
  return isArray(a2) ? isEquivalentArray(a2, b2) : isArray(b2) ? isEquivalentArray(b2, a2) : a2 === b2;
}
function isEquivalentArray(a2, b2) {
  return isArray(b2) ? a2.length === b2.length && a2.every((value, i2) => value === b2[i2]) : a2.length === 1 && a2[0] === b2;
}
var NavigationType;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var NavigationFailureType;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const routerKey = Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
const routeLocationKey = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function useLink(props) {
  const router = inject(routerKey);
  const currentRoute = inject(routeLocationKey);
  const route = computed(() => router.resolve(unref(props.to)));
  const activeRecordIndex = computed(() => {
    const { matched } = route.value;
    const { length } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length)
      return -1;
    const index2 = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index2 > -1)
      return index2;
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return (
      // we are dealing with nested routes
      length > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      getOriginalPath(routeMatched) === parentRecordPath && // avoid comparing the child with its parent
      currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index2
    );
  });
  const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate(e2 = {}) {
    if (guardEvent(e2)) {
      return router[unref(props.replace) ? "replace" : "push"](
        unref(props.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(noop);
    }
    return Promise.resolve();
  }
  if ((process.env.NODE_ENV !== "production" || false) && isBrowser) {
    const instance = getCurrentInstance();
    if (instance) {
      const linkContextDevtools = {
        route: route.value,
        isActive: isActive.value,
        isExactActive: isExactActive.value
      };
      instance.__vrl_devtools = instance.__vrl_devtools || [];
      instance.__vrl_devtools.push(linkContextDevtools);
      watchEffect(() => {
        linkContextDevtools.route = route.value;
        linkContextDevtools.isActive = isActive.value;
        linkContextDevtools.isExactActive = isExactActive.value;
      }, { flush: "post" });
    }
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive,
    isExactActive,
    navigate
  };
}
const RouterLinkImpl = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink,
  setup(props, { slots }) {
    const link = reactive(useLink(props));
    const { options } = inject(routerKey);
    const elClass = computed(() => ({
      [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && slots.default(link);
      return props.custom ? children : h$4("a", {
        "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink = RouterLinkImpl;
function guardEvent(e2) {
  if (e2.metaKey || e2.altKey || e2.ctrlKey || e2.shiftKey)
    return;
  if (e2.defaultPrevented)
    return;
  if (e2.button !== void 0 && e2.button !== 0)
    return;
  if (e2.currentTarget && e2.currentTarget.getAttribute) {
    const target = e2.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target))
      return;
  }
  if (e2.preventDefault)
    e2.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue)
        return false;
    } else {
      if (!isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i2) => value !== outerValue[i2]))
        return false;
    }
  }
  return true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
function useRouter() {
  return inject(routerKey);
}
function useRoute() {
  return inject(routeLocationKey);
}
const autoCatalog = "";
var M$1 = defineComponent({ name: "AutoCatalog", props: { base: { type: String, default: "" }, level: { type: Number, default: 3 }, titleGetter: { type: Function, default: (l2) => l2.title }, iconGetter: { type: Function, default: (l2) => l2.icon }, orderGetter: { type: Function, default: (l2) => l2.order || 0 }, shouldIndex: { type: Function, default: (l2) => l2.index !== false } }, setup(l2) {
  const f2 = Yt({ "/": { "title": "目录" } }), s2 = useRoute(), C2 = useRouter(), T2 = useSiteData(), $2 = () => {
    const u2 = l2.base || s2.path.replace(/\/[^/]+$/, "/"), m2 = C2.getRoutes(), h2 = [];
    return m2.filter(({ meta: t2, path: e2 }) => {
      if (!bt(e2, u2) || e2 === u2)
        return false;
      if (u2 === "/") {
        const a2 = Dt(T2.value.locales).filter((o2) => o2 !== "/");
        if (e2 === "/404.html" || a2.some((o2) => bt(e2, o2)))
          return false;
      }
      return (ee(e2, ".html") && !ee(e2, "/index.html") || ee(e2, "/")) && l2.shouldIndex(t2);
    }).map(({ path: t2, meta: e2 }) => {
      const a2 = t2.substring(u2.length).split("/").length;
      return { title: l2.titleGetter(e2), icon: l2.iconGetter(e2), base: t2.replace(/\/[^/]+\/?$/, "/"), order: l2.orderGetter(e2) || null, level: ee(t2, "/") ? a2 - 1 : a2, path: t2 };
    }).filter(({ title: t2, level: e2 }) => e2 <= l2.level || !t2).sort(({ title: t2, level: e2, path: a2, order: o2 }, { title: i2, level: r2, path: p2, order: c2 }) => e2 - r2 || (ee(a2, "/index.html") ? -1 : ee(p2, "/index.html") ? 1 : o2 === null ? c2 === null ? t2.localeCompare(i2) : c2 : c2 === null ? o2 : o2 > 0 ? c2 > 0 ? o2 - c2 : -1 : c2 < 0 ? o2 - c2 : 1)).forEach((t2) => {
      var e2;
      const { base: a2, level: o2 } = t2;
      switch (o2) {
        case 1:
          h2.push(t2);
          break;
        case 2: {
          const i2 = h2.find((r2) => r2.path === a2);
          i2 && (i2.children ?? (i2.children = [])).push(t2);
          break;
        }
        default: {
          const i2 = h2.find((r2) => r2.path === a2.replace(/\/[^/]+\/$/, "/"));
          if (i2) {
            const r2 = (e2 = i2.children) == null ? void 0 : e2.find((p2) => p2.path === a2);
            r2 && (r2.children ?? (r2.children = [])).push(t2);
          }
        }
      }
    }), h2;
  }, G2 = computed(() => $2());
  return () => h$4("div", { class: "auto-catalog-wrapper" }, [h$4("h2", { class: "main-title" }, f2.value.title), ...G2.value.map(({ children: u2 = [], icon: m2, path: h2, title: t2 }, e2) => [h$4("h3", { id: t2, class: ["child-title", { "has-children": u2.length }] }, [h$4("a", { href: `#${t2}`, class: "header-anchor" }, "#"), h$4(RouterLink, { class: "catalog-title", to: h2 }, () => [m2 ? h$4(c$3, { icon: m2 }) : null, `${e2 + 1}. ${t2 || "Unknown"}`])]), u2.length ? h$4("ul", { class: "child-catalog-wrapper" }, u2.map(({ children: a2 = [], icon: o2, path: i2, title: r2 }, p2) => h$4("li", { class: "child-catalog-item" }, [h$4("div", { class: ["sub-title", { "has-children": a2.length }] }, [h$4("a", { href: `#${r2}`, class: "header-anchor" }, "#"), h$4(RouterLink, { class: "catalog-title", to: i2 }, () => [o2 ? h$4(c$3, { icon: o2 }) : null, `${e2 + 1}.${p2 + 1} ${r2 || "Unknown"}`])]), a2.length ? h$4("div", { class: "sub-catalog-wrapper" }, a2.map(({ icon: c2, path: v2, title: E2 }, O2) => h$4(RouterLink, { class: "sub-catalog-item", to: v2 }, () => [c2 ? h$4(c$3, { icon: c2 }) : null, `${e2 + 1}.${p2 + 1}.${O2 + 1} ${E2 || "Unknown"}`]))) : null]))) : null])]);
} }), F$2 = defineClientConfig({ enhance: ({ app: l2 }) => {
  Ht("AutoCatalog", l2) || l2.component("AutoCatalog", (f2) => h$4(M$1, { titleGetter: (s2) => s2["t"], iconGetter: (s2) => s2["i"], orderGetter: (s2) => s2["O"], shouldIndex: (s2) => Boolean(s2["I"]), ...f2 }));
} });
const vars$1 = "";
const externalLinkIcon = "";
const svg = h$4("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  h$4("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  h$4("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = computed(() => props.locales[routeLocale.value] ?? {
      openInNewWindow: "open in new window"
    });
    return () => h$4("span", [
      svg,
      h$4("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
const locales = {};
const clientConfig4 = defineClientConfig({
  enhance({ app }) {
    app.component("ExternalLinkIcon", h$4(ExternalLinkIcon, { locales }));
  }
});
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
const nprogress$1 = {
  settings: {
    minimum: 0.08,
    easing: "ease",
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    barSelector: '[role="bar"]',
    parent: "body",
    template: '<div class="bar" role="bar"></div>'
  },
  status: null,
  set: (n2) => {
    const started = nprogress$1.isStarted();
    n2 = clamp(n2, nprogress$1.settings.minimum, 1);
    nprogress$1.status = n2 === 1 ? null : n2;
    const progress = nprogress$1.render(!started);
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const speed = nprogress$1.settings.speed;
    const ease = nprogress$1.settings.easing;
    progress.offsetWidth;
    queue((next) => {
      css(bar, {
        transform: "translate3d(" + toBarPerc(n2) + "%,0,0)",
        transition: "all " + speed + "ms " + ease
      });
      if (n2 === 1) {
        css(progress, {
          transition: "none",
          opacity: "1"
        });
        progress.offsetWidth;
        setTimeout(function() {
          css(progress, {
            transition: "all " + speed + "ms linear",
            opacity: "0"
          });
          setTimeout(function() {
            nprogress$1.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(() => next(), speed);
      }
    });
    return nprogress$1;
  },
  isStarted: () => typeof nprogress$1.status === "number",
  start: () => {
    if (!nprogress$1.status)
      nprogress$1.set(0);
    const work = () => {
      setTimeout(() => {
        if (!nprogress$1.status)
          return;
        nprogress$1.trickle();
        work();
      }, nprogress$1.settings.trickleSpeed);
    };
    if (nprogress$1.settings.trickle)
      work();
    return nprogress$1;
  },
  done: (force) => {
    if (!force && !nprogress$1.status)
      return nprogress$1;
    return nprogress$1.inc(0.3 + 0.5 * Math.random()).set(1);
  },
  inc: (amount) => {
    let n2 = nprogress$1.status;
    if (!n2) {
      return nprogress$1.start();
    }
    if (typeof amount !== "number") {
      amount = (1 - n2) * clamp(Math.random() * n2, 0.1, 0.95);
    }
    n2 = clamp(n2 + amount, 0, 0.994);
    return nprogress$1.set(n2);
  },
  trickle: () => nprogress$1.inc(Math.random() * nprogress$1.settings.trickleRate),
  render: (fromStart) => {
    if (nprogress$1.isRendered()) {
      return document.getElementById("nprogress");
    }
    addClass(document.documentElement, "nprogress-busy");
    const progress = document.createElement("div");
    progress.id = "nprogress";
    progress.innerHTML = nprogress$1.settings.template;
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const perc = fromStart ? "-100" : toBarPerc(nprogress$1.status || 0);
    const parent = document.querySelector(nprogress$1.settings.parent);
    css(bar, {
      transition: "all 0 linear",
      transform: "translate3d(" + perc + "%,0,0)"
    });
    if (parent !== document.body) {
      addClass(parent, "nprogress-custom-parent");
    }
    parent == null ? void 0 : parent.appendChild(progress);
    return progress;
  },
  remove: () => {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(document.querySelector(nprogress$1.settings.parent), "nprogress-custom-parent");
    const progress = document.getElementById("nprogress");
    progress && removeElement(progress);
  },
  isRendered: () => !!document.getElementById("nprogress")
};
const clamp = (n2, min, max2) => {
  if (n2 < min)
    return min;
  if (n2 > max2)
    return max2;
  return n2;
};
const toBarPerc = (n2) => (-1 + n2) * 100;
const queue = function() {
  const pending = [];
  function next() {
    const fn = pending.shift();
    if (fn) {
      fn(next);
    }
  }
  return function(fn) {
    pending.push(fn);
    if (pending.length === 1)
      next();
  };
}();
const css = function() {
  const cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  const cssProps = {};
  function camelCase(string) {
    return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
      return letter.toUpperCase();
    });
  }
  function getVendorProp(name) {
    const style = document.body.style;
    if (name in style)
      return name;
    let i2 = cssPrefixes.length;
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    let vendorName;
    while (i2--) {
      vendorName = cssPrefixes[i2] + capName;
      if (vendorName in style)
        return vendorName;
    }
    return name;
  }
  function getStyleProp(name) {
    name = camelCase(name);
    return cssProps[name] || (cssProps[name] = getVendorProp(name));
  }
  function applyCss(element, prop, value) {
    prop = getStyleProp(prop);
    element.style[prop] = value;
  }
  return function(element, properties) {
    for (const prop in properties) {
      const value = properties[prop];
      if (value !== void 0 && Object.prototype.hasOwnProperty.call(properties, prop))
        applyCss(element, prop, value);
    }
  };
}();
const hasClass = (element, name) => {
  const list = typeof element === "string" ? element : classList(element);
  return list.indexOf(" " + name + " ") >= 0;
};
const addClass = (element, name) => {
  const oldList = classList(element);
  const newList = oldList + name;
  if (hasClass(oldList, name))
    return;
  element.className = newList.substring(1);
};
const removeClass = (element, name) => {
  const oldList = classList(element);
  if (!hasClass(element, name))
    return;
  const newList = oldList.replace(" " + name + " ", " ");
  element.className = newList.substring(1, newList.length - 1);
};
const classList = (element) => {
  return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
};
const removeElement = (element) => {
  element && element.parentNode && element.parentNode.removeChild(element);
};
const vars = "";
const nprogress = "";
const useNprogress = () => {
  onMounted(() => {
    const router = useRouter$1();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress$1.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress$1.done();
    });
  });
};
const clientConfig5 = defineClientConfig({
  setup() {
    useNprogress();
  }
});
const themeData$1 = JSON.parse('{"encrypt":{"config":{"/demo/encrypt.html":["$2a$10$qW8axqXoeEuyhioBJl0m.e.4I9OMZlhSOcpnH.Cfxcn9dSJvGqhZ6"],"/zh/demo/encrypt.html":["$2a$10$fB3703q9QddsJgw16Z3dTOSPDSANCqWW6cnrtXjpWEgVuabbRjB4a"]}},"blog":{"medias":{"GitHub":"https://github.com/reonce"}},"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"访问我的 GitHub"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"收藏"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"author":{"name":"饮东","url":"http://www.reonce.top/"},"logo":"/head.svg","repo":"https://github.com/reonce","docsDir":"posts","editLink":false,"lastUpdated":false,"navbar":[{"text":"主页","icon":"discover","link":"/"},{"text":"归档","icon":"note","prefix":"/posts/","link":"/posts/"},{"text":"关于","icon":"edit","link":"/intro.html"}],"sidebar":{"/":[{"text":"文章","icon":"note","prefix":"posts/","children":"structure"},"intro"]},"footer":"Default footer","displayFooter":true,"blog":{"description":"山西临汾人，职业是前端程序员","intro":"/intro.html"}}}}');
const themeData = ref(themeData$1);
const useThemeData$1 = () => themeData;
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a2;
  return {
    ...theme,
    ...(_a2 = theme.locales) == null ? void 0 : _a2[routeLocale]
  };
};
const clientConfig6 = defineClientConfig({
  enhance({ app }) {
    const themeData2 = useThemeData$1();
    const routeLocale = app._context.provides[routeLocaleSymbol];
    const themeLocaleData = computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
    app.provide(themeLocaleDataSymbol, themeLocaleData);
    Object.defineProperties(app.config.globalProperties, {
      $theme: {
        get() {
          return themeData2.value;
        }
      },
      $themeLocale: {
        get() {
          return themeLocaleData.value;
        }
      }
    });
  }
});
const giscus = "";
const i$3 = ["de", "gsw", "en", "es", "fr", "id", "it", "ja", "ko", "pl", "ro", "ru", "tr", "vi", "zh-CN", "zh-TW"], e$2 = { "provider": "Giscus", "lightTheme": "https://unpkg.com/vuepress-theme-hope@2.0.0-beta.171/templates/giscus/light.css", "darkTheme": "https://unpkg.com/vuepress-theme-hope@2.0.0-beta.171/templates/giscus/dark.css", "repo": "vuepress-theme-hope/giscus-discussions", "repoId": "R_kgDOG_Pt2A", "category": "Announcements", "categoryId": "DIC_kwDOG_Pt2M4COD69" }, k$5 = Boolean(e$2.categoryId), { repo: P$2, repoId: T, category: w$3, categoryId: C$2 } = e$2;
var b = defineComponent({ name: "GiscusComment", props: { darkmode: Boolean }, setup(s2) {
  const p2 = usePageFrontmatter(), d2 = useRoute$1(), r2 = ref(false), u2 = computed(() => {
    const t2 = usePageLang().value;
    if (i$3.includes(t2))
      return t2;
    const o2 = t2.split("-")[0];
    return i$3.includes(o2) ? o2 : "en";
  }), m2 = computed(() => {
    if (!k$5)
      return false;
    const t2 = e$2.comment !== false, o2 = p2.value.comment;
    return Boolean(o2) || t2 !== false && o2 !== false;
  }), c2 = computed(() => ({ repo: P$2, repoId: T, category: w$3, categoryId: C$2, lang: u2.value, theme: s2.darkmode ? e$2.darkTheme : e$2.lightTheme, mapping: e$2.mapping || "pathname", term: withBase(d2.path), inputPosition: e$2.inputPosition || "top", reactionsEnabled: e$2.reactionsEnabled === false ? "0" : "1", strict: e$2.strict === false ? "0" : "1", loading: e$2.lazyLoading === false ? "eager" : "lazy", emitMetadata: "0" }));
  return onMounted(async () => {
    await import("giscus"), r2.value = true;
  }), () => h$4("div", { class: ["giscus-wrapper", { "input-top": e$2.inputPosition !== "bottom" }], id: "comment", style: { display: m2.value ? "block" : "none" } }, r2.value ? h$4("giscus-widget", c2.value) : h$4("div", { style: "text-align:center" }, "Loading..."));
} });
const d$3 = { "provider": "Giscus", "lightTheme": "https://unpkg.com/vuepress-theme-hope@2.0.0-beta.171/templates/giscus/light.css", "darkTheme": "https://unpkg.com/vuepress-theme-hope@2.0.0-beta.171/templates/giscus/dark.css", "repo": "vuepress-theme-hope/giscus-discussions", "repoId": "R_kgDOG_Pt2A", "category": "Announcements", "categoryId": "DIC_kwDOG_Pt2M4COD69" }.comment !== false, i$2 = defineComponent({ name: "CommentService", props: { darkmode: Boolean }, setup(e2) {
  const o2 = usePageFrontmatter(), m2 = computed(() => o2.value.comment || d$3 && o2.value.comment !== false);
  return () => h$4(b, { darkmode: e2.darkmode, style: { display: m2.value ? "block" : "none" } });
} });
var l$2 = defineClientConfig({ enhance: ({ app: e2 }) => {
  e2.component("CommentService", i$2);
} });
const message = "";
const balloon = "";
const button = "";
const O$1 = 800, _$2 = { "/": { "copy": "复制代码", "copied": "已复制", "hint": "复制成功" } }, A$2 = ['.theme-hope-content div[class*="language-"] pre'], g$2 = false, w$2 = async (l2) => {
  try {
    return navigator.clipboard.writeText(l2);
  } catch {
    const e2 = document.createElement("textarea"), i2 = document.activeElement;
    e2.value = l2, e2.setAttribute("readonly", ""), e2.style.contain = "strict", e2.style.position = "absolute", e2.style.left = "-9999px", e2.style.fontSize = "12pt";
    const s2 = document.getSelection(), r2 = s2 ? s2.rangeCount > 0 && s2.getRangeAt(0) : null;
    document.body.appendChild(e2), e2.select(), e2.selectionStart = 0, e2.selectionEnd = l2.length, document.execCommand("copy"), document.body.removeChild(e2), r2 && (s2.removeAllRanges(), s2.addRange(r2)), i2 && i2.focus();
  }
}, d$2 = /* @__PURE__ */ new Map(), x$1 = () => {
  const l2 = useRoute$1(), e2 = Yt(_$2);
  const s2 = (o2) => {
    if (!o2.hasAttribute("copy-code-registered")) {
      const n2 = document.createElement("button");
      n2.classList.add("copy-code-button"), n2.innerHTML = '<div class="copy-icon" />', n2.setAttribute("aria-label", e2.value.copy), n2.setAttribute("data-copied", e2.value.copied), o2.parentElement && o2.parentElement.insertBefore(n2, o2), o2.setAttribute("copy-code-registered", "");
    }
  }, r2 = () => {
    setTimeout(() => {
      A$2.forEach((o2) => {
        document.querySelectorAll(o2).forEach(s2);
      });
    }, O$1);
  }, p2 = (o2, n2, t2) => {
    let { innerText: c2 = "" } = n2;
    /language-(shellscript|shell|bash|sh|zsh)/.test(o2.classList.toString()) && (c2 = c2.replace(/^ *(\$|>) /gm, "")), w$2(c2).then(() => {
      t2.classList.add("copied"), clearTimeout(d$2.get(t2));
      const a2 = setTimeout(() => {
        t2.classList.remove("copied"), t2.blur(), d$2.delete(t2);
      }, 2e3);
      d$2.set(t2, a2);
    });
  };
  onMounted(() => {
    const { userAgent: o2 } = navigator;
    new ce(), (!Lt(o2) || g$2) && r2(), window.addEventListener("click", (n2) => {
      const t2 = n2.target;
      if (t2.matches('div[class*="language-"] > button.copy')) {
        const c2 = t2.parentElement, a2 = t2.nextElementSibling;
        a2 && p2(c2, a2, t2);
      } else if (t2.matches('div[class*="language-"] div.copy-icon')) {
        const c2 = t2.parentElement, a2 = c2.parentElement, u2 = c2.nextElementSibling;
        u2 && p2(a2, u2, c2);
      }
    }), watch(() => l2.path, () => {
      (!Lt(o2) || g$2) && r2();
    });
  });
};
var D$1 = defineClientConfig({ setup: () => {
  x$1();
} });
const chart = "";
const LoadingIcon$1 = () => h$4(R$1, { name: "loading" }, () => ["0s", "-0.333s", "-0.667s"].map((e2) => h$4("circle", { cx: 512, cy: 512, r: 0, fill: "none", stroke: "currentColor", "stroke-width": "20" }, [h$4("animate", { attributeName: "r", repeatCount: "indefinite", dur: "1s", values: "0;400", keyTimes: "0;1", keySplines: "0 0.2 0.8 1", calcMode: "spline", begin: e2 }), h$4("animate", { attributeName: "opacity", repeatCount: "indefinite", dur: "1s", values: "1;0", keyTimes: "0;1", keySplines: "0.2 0 0.8 1", calcMode: "spline", begin: e2 })]))), parseChartConfig = (config, type) => {
  if (type === "json")
    return JSON.parse(config);
  const exports = {}, module = { exports };
  return eval(config), module.exports;
};
var ChartJS = defineComponent({ name: "ChartJS", props: { config: { type: String, required: true }, id: { type: String, required: true }, title: { type: String, default: "" }, type: { type: String, default: "json" } }, setup(e2) {
  const o2 = ref(), i2 = ref(), n2 = ref(true);
  return onMounted(() => {
    Promise.all([import("./assets/auto-6559493d.js"), new Promise((t2) => setTimeout(t2, 800))]).then(([{ default: t2 }]) => {
      t2.defaults.maintainAspectRatio = false;
      const r2 = parseChartConfig(le(e2.config), e2.type), a2 = i2.value.getContext("2d");
      new t2(a2, r2), n2.value = false;
    });
  }), () => [e2.title ? h$4("div", { class: "chart-title" }, decodeURIComponent(e2.title)) : null, n2.value ? h$4("div", { class: "chart-loading-wrapper" }, h$4(LoadingIcon$1)) : null, h$4("div", { ref: o2, class: "chart-wrapper", id: e2.id, style: { display: n2.value ? "none" : "block" } }, h$4("canvas", { ref: i2, height: 400 }))];
} });
const codeTabs = "";
const o$2 = useStorage("VUEPRESS_CODE_TAB_STORE", {});
var S$2 = defineComponent({ name: "CodeTabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: { type: String, default: "" } }, setup(t2, { slots: v2 }) {
  const l2 = ref(t2.active), r2 = ref([]), c2 = () => {
    if (t2.tabId) {
      const { title: e2, id: a2 = e2 } = t2.data[l2.value];
      o$2.value[t2.tabId] = a2;
    }
  }, b2 = (e2 = l2.value) => {
    l2.value = e2 < r2.value.length - 1 ? e2 + 1 : 0, r2.value[l2.value].focus();
  }, f2 = (e2 = l2.value) => {
    l2.value = e2 > 0 ? e2 - 1 : r2.value.length - 1, r2.value[l2.value].focus();
  }, p2 = (e2, a2) => {
    if (e2.key === " " || e2.key === "Enter" ? (e2.preventDefault(), l2.value = a2) : e2.key === "ArrowRight" ? (e2.preventDefault(), b2()) : e2.key === "ArrowLeft" && (e2.preventDefault(), f2()), t2.tabId) {
      const { title: d2, id: i2 = d2 } = t2.data[l2.value];
      o$2.value[t2.tabId] = i2;
    }
  }, m2 = () => {
    if (t2.tabId) {
      const e2 = t2.data.findIndex(({ title: a2, id: d2 = a2 }) => o$2.value[t2.tabId] === d2);
      if (e2 !== -1)
        return e2;
    }
    return t2.active;
  };
  return onMounted(() => {
    l2.value = m2(), watch(() => o$2.value[t2.tabId], (e2, a2) => {
      if (t2.tabId && e2 !== a2) {
        const d2 = t2.data.findIndex(({ title: i2, id: u2 = i2 }) => u2 === e2);
        d2 !== -1 && (l2.value = d2);
      }
    });
  }), () => t2.data.length ? h$4("div", { class: "code-tabs" }, [h$4("div", { class: "code-tabs-nav", role: "tablist" }, t2.data.map(({ title: e2 }, a2) => {
    const d2 = a2 === l2.value;
    return h$4("button", { ref: (i2) => {
      i2 && (r2.value[a2] = i2);
    }, class: ["code-tabs-nav-tab", { active: d2 }], role: "tab", "aria-controls": `codetab-${t2.id}-${a2}`, "aria-selected": d2, onClick: () => {
      l2.value = a2, c2();
    }, onKeydown: (i2) => p2(i2, a2) }, e2);
  })), t2.data.map(({ title: e2, id: a2 = e2 }, d2) => {
    var i2;
    const u2 = d2 === l2.value;
    return h$4("div", { class: ["code-tab", { active: u2 }], id: `codetab-${t2.id}-${d2}`, role: "tabpanel", "aria-expanded": u2 }, (i2 = v2[`tab${d2}`]) == null ? void 0 : i2.call(v2, { title: e2, value: a2, isActive: u2 }));
  })]) : null;
} });
const codeGroup = "";
const c$2 = ({ active: p2 = false }, { slots: u2 }) => {
  var e2;
  return h$4("div", { class: ["code-group-item", { active: p2 }], "aria-selected": p2 }, (e2 = u2.default) == null ? void 0 : e2.call(u2));
};
c$2.displayName = "CodeGroupItem";
const y$2 = defineComponent({ name: "CodeGroup", setup(p2, { slots: u2 }) {
  const e2 = ref(-1), t2 = ref([]);
  const i2 = (a2 = e2.value) => {
    e2.value = a2 < t2.value.length - 1 ? a2 + 1 : 0, t2.value[e2.value].focus();
  }, f2 = (a2 = e2.value) => {
    e2.value = a2 > 0 ? a2 - 1 : t2.value.length - 1, t2.value[e2.value].focus();
  }, m2 = (a2, o2) => {
    a2.key === " " || a2.key === "Enter" ? (a2.preventDefault(), e2.value = o2) : a2.key === "ArrowRight" ? (a2.preventDefault(), i2(o2)) : a2.key === "ArrowLeft" && (a2.preventDefault(), f2(o2));
  };
  return () => {
    var a2;
    const o2 = (((a2 = u2.default) == null ? void 0 : a2.call(u2)) || []).filter((l2) => l2.type.name === "CodeGroupItem").map((l2) => (l2.props === null && (l2.props = {}), l2));
    return o2.length === 0 ? null : (e2.value < 0 || e2.value > o2.length - 1 ? (e2.value = o2.findIndex((l2) => "active" in l2.props), e2.value === -1 && (e2.value = 0)) : o2.forEach((l2, r2) => {
      l2.props.active = r2 === e2.value;
    }), h$4("div", { class: "code-group" }, [h$4("div", { class: "code-group-nav" }, o2.map((l2, r2) => {
      const s2 = r2 === e2.value;
      return h$4("button", { ref: (v2) => {
        v2 && (t2.value[r2] = v2);
      }, class: ["code-group-nav-tab", { active: s2 }], "aria-pressed": s2, "aria-expanded": s2, onClick: () => {
        e2.value = r2;
      }, onKeydown: (v2) => m2(v2, r2) }, l2.props.title);
    })), o2]));
  };
} });
const index$2 = "";
const codeDemo = "";
const N = () => h$4(R$1, { name: "loading" }, () => ["0s", "-0.333s", "-0.667s"].map((e2) => h$4("circle", { cx: 512, cy: 512, r: 0, fill: "none", stroke: "currentColor", "stroke-width": "20" }, [h$4("animate", { attributeName: "r", repeatCount: "indefinite", dur: "1s", values: "0;400", keyTimes: "0;1", keySplines: "0 0.2 0.8 1", calcMode: "spline", begin: e2 }), h$4("animate", { attributeName: "opacity", repeatCount: "indefinite", dur: "1s", values: "1;0", keyTimes: "0;1", keySplines: "0.2 0 0.8 1", calcMode: "spline", begin: e2 })]))), A$1 = '<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>', k$4 = '<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg" width="228.516" height="200"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>', L = { "useBabel": false, "jsLib": [], "cssLib": [], "codepenLayout": "left", "codepenEditors": "101", "babel": "https://unpkg.com/@babel/standalone/babel.min.js", "vue": "https://unpkg.com/vue/dist/vue.global.prod.js", "react": "https://unpkg.com/react/umd/react.production.min.js", "reactDOM": "https://unpkg.com/react-dom/umd/react-dom.production.min.js" }, x = { html: { types: ["html", "slim", "haml", "md", "markdown", "vue"], map: { html: "none", vue: "none", md: "markdown" } }, js: { types: ["js", "javascript", "coffee", "coffeescript", "ts", "typescript", "ls", "livescript"], map: { js: "none", javascript: "none", coffee: "coffeescript", ls: "livescript", ts: "typescript" } }, css: { types: ["css", "less", "sass", "scss", "stylus", "styl"], map: { css: "none", styl: "stylus" } } }, D = (e2, s2, t2) => {
  const a2 = document.createElement(e2);
  return isPlainObject(s2) && Dt(s2).forEach((l2) => {
    if (l2.indexOf("data"))
      a2[l2] = s2[l2];
    else {
      const r2 = l2.replace("data", "");
      a2.dataset[r2] = s2[l2];
    }
  }), t2 && t2.forEach((l2) => {
    a2.appendChild(l2);
  }), a2;
}, w$1 = (e2) => ({ ...L, ...e2, jsLib: Array.from(/* @__PURE__ */ new Set([...L.jsLib || [], ...e2.jsLib || []])), cssLib: Array.from(/* @__PURE__ */ new Set([...L.cssLib || [], ...e2.cssLib || []])) }), v$1 = (e2, s2) => {
  if (e2[s2] !== void 0)
    return e2[s2];
  const t2 = new Promise((a2) => {
    var l2;
    const r2 = document.createElement("script");
    r2.src = s2, (l2 = document.querySelector("body")) == null || l2.appendChild(r2), r2.onload = () => {
      a2();
    };
  });
  return e2[s2] = t2, t2;
}, R = (e2, s2) => {
  if (s2.css && Array.from(e2.childNodes).every((t2) => t2.nodeName !== "STYLE")) {
    const t2 = D("style", { innerHTML: s2.css });
    e2.appendChild(t2);
  }
}, B = (e2, s2, t2) => {
  const a2 = t2.getScript();
  if (a2 && Array.from(s2.childNodes).every((l2) => l2.nodeName !== "SCRIPT")) {
    const l2 = document.createElement("script");
    l2.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${e2} .code-demo-container').shadowRoot;
${a2}}`)), s2.appendChild(l2);
  }
}, V = (e2) => {
  const s2 = Dt(e2), t2 = { html: [], js: [], css: [], isLegal: false };
  return ["html", "js", "css"].forEach((a2) => {
    const l2 = s2.filter((r2) => x[a2].types.includes(r2));
    if (l2.length) {
      const r2 = l2[0];
      t2[a2] = [e2[r2].replace(/^\n|\n$/g, ""), x[a2].map[r2] || r2];
    }
  }), t2.isLegal = (!t2.html.length || t2.html[1] === "none") && (!t2.js.length || t2.js[1] === "none") && (!t2.css.length || t2.css[1] === "none"), t2;
}, _$1 = (e2) => e2.replace(/<br \/>/g, "<br>").replace(/<((\S+)[^<]*?)\s+\/>/g, "<$1></$2>"), q = (e2) => `<div id="app">
${_$1(e2)}
</div>`, z = (e2) => `${e2.replace("export default ", "const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/, "")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`, P$1 = (e2) => e2.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u, "Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u, "Vue.createApp({$1}).mount('#app')").trim(), $ = (e2) => `(function(exports){var module={};module.exports=exports;${e2};return module.exports.__esModule?module.exports.default:module.exports;})({})`, H$1 = (e2, s2) => {
  const t2 = w$1(s2), a2 = e2.js[0] || "";
  return { ...t2, html: _$1(e2.html[0] || ""), js: a2, css: e2.css[0] || "", isLegal: e2.isLegal, getScript: () => {
    var l2;
    return t2.useBabel ? ((l2 = window.Babel.transform(a2, { presets: ["es2015"] })) == null ? void 0 : l2.code) || "" : a2;
  } };
}, I$1 = (e2, s2) => {
  const t2 = w$1(s2), a2 = e2.html[0] || "", l2 = /<template>([\s\S]+)<\/template>/u.exec(a2), r2 = /<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u.exec(a2), p2 = /<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u.exec(a2), d2 = l2 ? l2[1].replace(/^\n|\n$/g, "") : "", [c2 = "", n2 = ""] = r2 ? [r2[4].replace(/^\n|\n$/g, ""), r2[3]] : [], [y2 = "", u2 = ""] = p2 ? [p2[4].replace(/^\n|\n$/g, ""), p2[3]] : [], j = n2 === "" && (u2 === "" || u2 === "css");
  return { ...t2, html: q(d2), js: P$1(c2), css: y2, isLegal: j, jsLib: [t2.vue, ...t2.jsLib], getScript: () => {
    var i2, m2;
    const g2 = s2.useBabel ? ((m2 = (i2 = window.Babel) == null ? void 0 : i2.transform(c2, { presets: ["es2015"] })) == null ? void 0 : m2.code) || "" : c2.replace(/export\s+default/u, "return");
    return `const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${$(g2)};appOptions.template=\`${d2.replace("`", '\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`;
  } };
}, J = (e2, s2) => {
  const t2 = w$1(s2);
  return { ...t2, html: q(""), js: z(e2.js[0] || ""), css: e2.css[0] || (e2.js[0] ? e2.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/, "$1").trim() : ""), isLegal: e2.isLegal, jsLib: [t2.react, t2.reactDOM, ...t2.jsLib], jsx: true, getScript: () => {
    var a2, l2;
    const r2 = ((l2 = (a2 = window.Babel) == null ? void 0 : a2.transform(e2.js[0] || "", { presets: ["es2015", "react"] })) == null ? void 0 : l2.code) || "";
    return `window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${$(r2)}))`;
  } };
}, h$2 = {}, Q = (e2) => Promise.all([v$1(h$2, e2.babel), v$1(h$2, e2.react), v$1(h$2, e2.reactDOM)]), F$1 = (e2) => {
  const s2 = [v$1(h$2, e2.vue)];
  return e2.useBabel && s2.push(v$1(h$2, e2.babel)), Promise.all(s2);
}, G = (e2) => e2.useBabel ? v$1(h$2, e2.babel) : Promise.resolve();
var Y = defineComponent({ name: "CodeDemo", props: { id: { type: String, required: true }, type: { type: String, default: "normal" }, title: { type: String, default: "" }, config: { type: String, default: "" }, code: { type: String, required: true } }, setup(e2, { slots: s2 }) {
  const t2 = ref(false), a2 = ref(), l2 = ref(), r2 = ref("0"), p2 = ref(false), d2 = computed(() => JSON.parse(e2.config ? le(e2.config) : "{}")), c2 = computed(() => {
    const i2 = JSON.parse(le(e2.code));
    return V(i2);
  }), n2 = computed(() => e2.type === "react" ? J(c2.value, d2.value) : e2.type === "vue" ? I$1(c2.value, d2.value) : H$1(c2.value, d2.value)), y2 = computed(() => n2.value.isLegal), u2 = (i2 = false) => {
    const m2 = a2.value.attachShadow({ mode: "open" }), g2 = document.createElement("div");
    g2.classList.add("code-demo-app"), m2.appendChild(g2), y2.value ? (i2 && (g2.innerHTML = n2.value.html), R(m2, n2.value), B(e2.id, m2, n2.value), r2.value = "0") : r2.value = "auto", p2.value = true;
  }, j = () => {
    switch (e2.type) {
      case "react":
        return Q(n2.value).then(() => u2());
      case "vue":
        return F$1(n2.value).then(() => u2());
      default:
        return G(n2.value).then(() => u2(true));
    }
  };
  return onMounted(() => {
    setTimeout(() => {
      j();
    }, 800);
  }), () => {
    var i2;
    return h$4("div", { class: "code-demo-wrapper", id: e2.id }, [p2.value ? null : h$4("div", { class: "loading" }, h$4(N)), h$4("div", { class: "code-demo-header" }, [n2.value.isLegal ? h$4("button", { class: ["toggle-button", t2.value ? "down" : "end"], onClick: () => {
      r2.value = t2.value ? "0" : `${l2.value.clientHeight + 13.8}px`, t2.value = !t2.value;
    } }) : null, e2.title ? h$4("span", { class: "title" }, decodeURIComponent(e2.title)) : null, n2.value.isLegal && n2.value.jsfiddle !== false ? h$4("form", { class: "code-demo-jsfiddle", target: "_blank", action: "https://jsfiddle.net/api/post/library/pure/", method: "post" }, [h$4("input", { type: "hidden", name: "html", value: n2.value.html }), h$4("input", { type: "hidden", name: "js", value: n2.value.js }), h$4("input", { type: "hidden", name: "css", value: n2.value.css }), h$4("input", { type: "hidden", name: "wrap", value: "1" }), h$4("input", { type: "hidden", name: "panel_js", value: "3" }), h$4("input", { type: "hidden", name: "resources", value: [...n2.value.cssLib, ...n2.value.jsLib].join(",") }), h$4("button", { type: "submit", class: "jsfiddle-button", innerHTML: k$4, "aria-label": "JSFiddle", "data-balloon-pos": "up" })]) : null, !n2.value.isLegal || n2.value.codepen !== false ? h$4("form", { class: "code-demo-codepen", target: "_blank", action: "https://codepen.io/pen/define", method: "post" }, [h$4("input", { type: "hidden", name: "data", value: JSON.stringify({ html: n2.value.html, js: n2.value.js, css: n2.value.css, js_external: n2.value.jsLib.join(";"), css_external: n2.value.cssLib.join(";"), layout: n2.value.codepenLayout, html_pre_processor: c2.value ? c2.value.html[1] : "none", js_pre_processor: c2.value ? c2.value.js[1] : n2.value.jsx ? "babel" : "none", css_pre_processor: c2.value ? c2.value.css[1] : "none", editors: n2.value.codepenEditors }) }), h$4("button", { type: "submit", innerHTML: A$1, class: "codepen-button", "aria-label": "Codepen", "data-balloon-pos": "up" })]) : null]), h$4("div", { ref: a2, class: "code-demo-container", style: { display: y2.value && p2.value ? "block" : "none" } }), h$4("div", { class: "code-demo-code-wrapper", style: { height: r2.value } }, h$4("div", { ref: l2, class: "code-demo-codes" }, (i2 = s2.default) == null ? void 0 : i2.call(s2)))]);
  };
} });
const echarts = "";
const LoadingIcon = () => h$4(R$1, { name: "loading" }, () => ["0s", "-0.333s", "-0.667s"].map((e2) => h$4("circle", { cx: 512, cy: 512, r: 0, fill: "none", stroke: "currentColor", "stroke-width": "20" }, [h$4("animate", { attributeName: "r", repeatCount: "indefinite", dur: "1s", values: "0;400", keyTimes: "0;1", keySplines: "0 0.2 0.8 1", calcMode: "spline", begin: e2 }), h$4("animate", { attributeName: "opacity", repeatCount: "indefinite", dur: "1s", values: "1;0", keyTimes: "0;1", keySplines: "0.2 0 0.8 1", calcMode: "spline", begin: e2 })]))), parseEChartsConfig = (config, type) => {
  if (type === "js") {
    const exports = {}, module = { exports };
    return eval(config), module.exports;
  }
  return JSON.parse(config);
};
var ECharts = defineComponent({ name: "ECharts", props: { config: { type: String, required: true }, id: { type: String, required: true }, title: { type: String, default: "" }, type: { type: String, default: "json" } }, setup(e2) {
  const o2 = ref();
  let n2;
  const i2 = ref(true);
  return onMounted(() => {
    Promise.all([import("echarts"), new Promise((t2) => setTimeout(t2, 800))]).then(([t2]) => {
      const r2 = parseEChartsConfig(le(e2.config), e2.type);
      n2 = t2.init(o2.value), n2.showLoading(), n2.setOption(r2), n2.hideLoading(), i2.value = false;
    }), useEventListener("resize", useDebounceFn(() => n2 == null ? void 0 : n2.resize(), 100));
  }), onBeforeUnmount(() => {
    n2 == null || n2.dispose();
  }), () => [e2.title ? h$4("div", { class: "echarts-title" }, decodeURIComponent(e2.title)) : null, i2.value ? h$4("div", { class: "echarts-loading-wrapper" }, h$4(LoadingIcon)) : null, h$4("div", { ref: o2, class: "echarts-wrapper", id: e2.id })];
} });
const figure = "";
const flowchart = "";
const y$1 = () => h$4(R$1, { name: "loading" }, () => ["0s", "-0.333s", "-0.667s"].map((e2) => h$4("circle", { cx: 512, cy: 512, r: 0, fill: "none", stroke: "currentColor", "stroke-width": "20" }, [h$4("animate", { attributeName: "r", repeatCount: "indefinite", dur: "1s", values: "0;400", keyTimes: "0;1", keySplines: "0 0.2 0.8 1", calcMode: "spline", begin: e2 }), h$4("animate", { attributeName: "opacity", repeatCount: "indefinite", dur: "1s", values: "1;0", keyTimes: "0;1", keySplines: "0.2 0 0.8 1", calcMode: "spline", begin: e2 })])));
var a$1 = { x: 0, y: 0, "line-width": 2, "line-length": 40, "text-margin": 8, "font-size": 14, "font-color": "#8DA1AC", "line-color": "#8DA1AC", "element-color": "black", fill: "white", "yes-text": "Yes", "no-text": "No", "arrow-end": "block", scale: 1 }, F = { ...a$1, symbols: { start: { class: "start-element", "font-color": "#fff", fill: "#595959", "line-width": "0px" }, end: { class: "end-element", "font-color": "#fff", fill: "#595959", "line-width": "0px" }, operation: { class: "operation-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" }, inputoutput: { class: "inputoutput-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" }, subroutine: { class: "subroutine-element", "font-color": "#fff", fill: "#FF485E", "element-color": "#fff", "line-color": "red" }, condition: { class: "condition-element", "font-color": "#fff", fill: "#FF485E", "line-width": "0px" }, parallel: { class: "parallel-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" } } }, C$1 = { ...a$1, "line-width": 1, symbols: { start: { class: "start-element", fill: "#ccc", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, end: { class: "end-element", fill: "#ccc", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, operation: { class: "operation-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, inputoutput: { class: "inputoutput-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, subroutine: { class: "subroutine-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, condition: { class: "condition-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, parallel: { class: "parallel-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" } } }, g$1 = { ...a$1, symbols: { start: { class: "start-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" }, end: { class: "end-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" }, operation: { class: "operation-element", "font-color": "#fff", fill: "#00BC7D", "line-width": "0px" }, inputoutput: { class: "inputoutput-element", "font-color": "#fff", fill: "#EB4D5D", "line-width": "0px" }, subroutine: { class: "subroutine-element", "font-color": "#fff", fill: "#937AC4", "element-color": "#fff", "line-color": "red" }, condition: { class: "condition-element", "font-color": "#fff", fill: "#FFB500", "line-width": "0px" }, parallel: { class: "parallel-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" } } }, p$1 = { ant: F, vue: g$1, pie: C$1 }, k$3 = defineComponent({ name: "FlowChart", props: { code: { type: String, required: true }, id: { type: String, required: true }, preset: { type: String, default: "vue" } }, setup(e2) {
  let n2;
  const d2 = ref(), i2 = ref(true), t2 = ref(1), c2 = computed(() => p$1[e2.preset] || (console.warn(`[md-enhance:flowchart] Unknown preset: ${e2.preset}`), p$1.vue)), s2 = (l2) => l2 < 419 ? 0.8 : l2 > 1280 ? 1 : 0.9;
  return onMounted(() => {
    Promise.all([import("flowchart.ts"), new Promise((l2) => setTimeout(l2, 800))]).then(([{ parse: l2 }]) => {
      n2 = l2(le(e2.code)), t2.value = s2(window.innerWidth), i2.value = false, n2.draw(e2.id, { ...c2.value, scale: t2.value }), useEventListener("resize", useDebounceFn(() => {
        const r2 = s2(window.innerWidth);
        t2.value !== r2 && (t2.value = r2, n2.draw(e2.id, { ...c2.value, scale: r2 }));
      }, 100));
    });
  }), () => [i2.value ? h$4("div", { class: "flowchart-loading-wrapper" }, h$4(y$1)) : null, h$4("div", { ref: d2, class: ["flowchart-wrapper", e2.preset], id: e2.id, style: { display: i2.value ? "none" : "block" } })];
} });
const footnote = "";
const imageMark = "";
const mermaid = "";
const M = () => h$4(R$1, { name: "loading" }, () => ["0s", "-0.333s", "-0.667s"].map((e2) => h$4("circle", { cx: 512, cy: 512, r: 0, fill: "none", stroke: "currentColor", "stroke-width": "20" }, [h$4("animate", { attributeName: "r", repeatCount: "indefinite", dur: "1s", values: "0;400", keyTimes: "0;1", keySplines: "0 0.2 0.8 1", calcMode: "spline", begin: e2 }), h$4("animate", { attributeName: "opacity", repeatCount: "indefinite", dur: "1s", values: "1;0", keyTimes: "0;1", keySplines: "0.2 0 0.8 1", calcMode: "spline", begin: e2 })]))), k$2 = (e2) => ({ dark: e2, background: e2 ? "#1e1e1e" : "#fff", primaryColor: e2 ? "#389d70" : "#4abf8a", primaryBorderColor: e2 ? "#389d70" : "#4abf8a", primaryTextColor: "#fff", secondaryColor: "#ffb500", secondaryBorderColor: e2 ? "#fff" : "#000", secondaryTextColor: e2 ? "#ddd" : "#333", tertiaryColor: e2 ? "#282828" : "#efeef4", tertiaryBorderColor: e2 ? "#bbb" : "#242424", tertiaryTextColor: e2 ? "#ddd" : "#333", noteBkgColor: e2 ? "#f6d365" : "#fff5ad", noteTextColor: "#242424", noteBorderColor: e2 ? "#f6d365" : "#333", lineColor: e2 ? "#d3d3d3" : "#333", textColor: e2 ? "#fff" : "#242424", mainBkg: e2 ? "#389d70" : "#4abf8a", errorBkgColor: "#eb4d5d", errorTextColor: "#fff", nodeBorder: e2 ? "#389d70" : "#4abf8a", nodeTextColor: e2 ? "#fff" : "#242424", signalTextColor: e2 ? "#9e9e9e" : "#242424", classText: "#fff", labelColor: "#fff", fillType0: e2 ? "#cf1322" : "#f1636e", fillType1: "#f39c12", fillType2: "#2ecc71", fillType3: "#fa541c", fillType4: "#25a55b", fillType5: "#13c2c2", fillType6: "#096dd9", fillType7: "#aa6fe9" });
var w = defineComponent({ name: "Mermaid", props: { id: { type: String, required: true }, code: { type: String, required: true } }, setup(e2) {
  const r2 = ref(""), c2 = ref(), i2 = ref(false);
  let l2 = null;
  return onMounted(() => {
    const n2 = document.querySelector("html"), u2 = le(e2.code), s2 = () => n2.classList.contains("dark") || n2.getAttribute("data-theme") === "dark";
    i2.value = s2(), Promise.all([import("./assets/mermaid.esm.min-4af353af.js"), import("./assets/mermaid-mindmap.esm.min-e0ca10f2.js"), new Promise((o2) => setTimeout(o2, 800))]).then(async ([{ default: o2 }, { default: m2 }]) => {
      try {
        await o2.registerExternalDiagrams([m2]);
      } catch {
      }
      const f2 = async () => {
        const a2 = document.createElement("div");
        a2.style.position = "relative", a2.style.top = "-9999px";
        const p2 = (y2) => {
          r2.value = y2, document.body.removeChild(a2);
        };
        o2.initialize({ theme: "base", themeVariables: k$2(i2.value), flowchart: { useMaxWidth: false }, sequence: { useMaxWidth: false }, journey: { useMaxWidth: false }, gantt: { useMaxWidth: false }, er: { useMaxWidth: false }, pie: { useMaxWidth: false }, ...{}, startOnLoad: false }), r2.value = "", document.body.appendChild(a2), await nextTick(), await o2.renderAsync(e2.id, u2, p2, a2);
      };
      await f2(), l2 = new MutationObserver(() => {
        i2.value = s2();
      }), l2.observe(n2, { attributeFilter: ["class", "data-theme"], attributes: true }), watch(i2, f2);
    });
  }), onBeforeUnmount(() => {
    l2 == null || l2.disconnect();
  }), () => h$4("div", { ref: c2, class: ["mermaid-wrapper", { loading: !r2.value }] }, r2.value ? h$4("div", { class: "content", innerHTML: r2.value }) : h$4(M));
} });
const o$1 = () => import("./assets/highlight.esm-2e198519.js"), t$1 = () => import("./assets/markdown.esm-9eee1148.js"), e$1 = () => import("./assets/math.esm-821e316c.js"), r$2 = () => import("./assets/notes.esm-b3f6d79b.js"), a = () => import("./assets/reveal.esm-6bdc27c1.js"), i$1 = () => import("./assets/search.esm-05bc88d1.js"), c$1 = () => import("./assets/zoom.esm-226c665b.js");
const useReveal = () => [a(), t$1(), o$1(), e$1(), i$1(), r$2(), c$1()];
const index$1 = "";
const leagueGothic = "";
const sourceSansPro = "";
const k$1 = () => h$4(R$1, { name: "loading" }, () => ["0s", "-0.333s", "-0.667s"].map((t2) => h$4("circle", { cx: 512, cy: 512, r: 0, fill: "none", stroke: "currentColor", "stroke-width": "20" }, [h$4("animate", { attributeName: "r", repeatCount: "indefinite", dur: "1s", values: "0;400", keyTimes: "0;1", keySplines: "0 0.2 0.8 1", calcMode: "spline", begin: t2 }), h$4("animate", { attributeName: "opacity", repeatCount: "indefinite", dur: "1s", values: "1;0", keyTimes: "0;1", keySplines: "0.2 0 0.8 1", calcMode: "spline", begin: t2 })])));
var S$1 = defineComponent({ name: "Presentation", props: { id: { type: String, required: true }, code: { type: String, required: true }, theme: { type: String, default: "auto" } }, setup(t2) {
  const n2 = usePageFrontmatter(), s2 = ref(""), r2 = ref(false), u2 = ref(), a2 = ref();
  let i2;
  return onMounted(() => {
    if (a2.value) {
      s2.value = le(t2.code), a2.value.setAttribute("id", t2.id), a2.value.setAttribute("data-theme", t2.theme);
      const d2 = [new Promise((l2) => setTimeout(l2, 800)), ...useReveal()];
      Promise.all(d2).then(([, l2, ...m2]) => {
        i2 = new l2.default(a2.value, { plugins: m2.map((p2) => p2.default) }), i2.initialize({ backgroundTransition: "slide", hash: n2.value.layout === "Slide", mouseWheel: n2.value.layout === "Slide", transition: "slide", slideNumber: true, ...{}, ...n2.value.reveal || {}, embedded: n2.value.layout !== "Slide" }).then(() => {
          r2.value = false, i2.configure({ backgroundTransition: "slide" });
        });
      });
    }
  }), onBeforeUnmount(() => {
    i2 == null || i2.destroy();
  }), () => h$4("div", { ref: u2, class: { "md-enhance-presentation": true, loading: r2.value } }, [r2.value ? h$4(k$1) : null, h$4("div", { ref: a2, class: ["reveal", "reveal-viewport"] }, h$4("div", { class: "slides", style: { display: r2.value ? "none" : "block" }, innerHTML: `<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${s2.value}<\/script></section>` }))]);
} });
const playground = "";
const n$1 = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';
var r$1 = defineComponent({ name: "Playground", props: { title: { type: String, default: "" }, link: { type: String, required: true } }, setup(t2) {
  return () => [h$4("div", { class: "playground-wrapper" }, [h$4("div", { class: "title-wrapper" }, [t2.title ? h$4("div", { class: "title" }, decodeURIComponent(t2.title)) : null, h$4("div", { class: "actions" }, [h$4("a", { class: "action", href: decodeURIComponent(t2.link), target: "_blank", innerHTML: n$1 })])]), h$4("div", { class: "preview-container" }, h$4("iframe", { class: "iframe-preview", src: decodeURIComponent(t2.link) }))])];
} });
const tabs = "";
const v = useStorage("VUEPRESS_TAB_STORE", {});
var S = defineComponent({ name: "Tabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: { type: String, default: "" } }, setup(e2, { slots: o2 }) {
  const l2 = ref(e2.active), u2 = ref([]), s2 = () => {
    if (e2.tabId) {
      const { title: a2, id: t2 = a2 } = e2.data[l2.value];
      v.value[e2.tabId] = t2;
    }
  }, b2 = (a2 = l2.value) => {
    l2.value = a2 < u2.value.length - 1 ? a2 + 1 : 0, u2.value[l2.value].focus();
  }, f2 = (a2 = l2.value) => {
    l2.value = a2 > 0 ? a2 - 1 : u2.value.length - 1, u2.value[l2.value].focus();
  }, p2 = (a2, t2) => {
    a2.key === " " || a2.key === "Enter" ? (a2.preventDefault(), l2.value = t2) : a2.key === "ArrowRight" ? (a2.preventDefault(), b2()) : a2.key === "ArrowLeft" && (a2.preventDefault(), f2()), s2();
  }, m2 = () => {
    if (e2.tabId) {
      const a2 = e2.data.findIndex(({ title: t2, id: i2 = t2 }) => v.value[e2.tabId] === i2);
      if (a2 !== -1)
        return a2;
    }
    return e2.active;
  };
  return onMounted(() => {
    l2.value = m2(), watch(() => v.value[e2.tabId], (a2, t2) => {
      if (e2.tabId && a2 !== t2) {
        const i2 = e2.data.findIndex(({ title: r2, id: d2 = r2 }) => d2 === a2);
        i2 !== -1 && (l2.value = i2);
      }
    });
  }), () => e2.data.length ? h$4("div", { class: "tab-list" }, [h$4("div", { class: "tab-list-nav", role: "tablist" }, e2.data.map(({ title: a2 }, t2) => {
    const i2 = t2 === l2.value;
    return h$4("button", { ref: (r2) => {
      r2 && (u2.value[t2] = r2);
    }, class: ["tab-list-nav-item", { active: i2 }], role: "tab", "aria-controls": `tab-${e2.id}-${t2}`, "aria-selected": i2, onClick: () => {
      l2.value = t2, s2();
    }, onKeydown: (r2) => p2(r2, t2) }, a2);
  })), e2.data.map(({ title: a2, id: t2 = a2 }, i2) => {
    var r2;
    const d2 = i2 === l2.value;
    return h$4("div", { class: ["tab-item", { active: d2 }], id: `tab-${e2.id}-${i2}`, role: "tabpanel", "aria-expanded": d2 }, (r2 = o2[`tab${i2}`]) == null ? void 0 : r2.call(o2, { title: a2, value: t2, isActive: d2 }));
  })]) : null;
} });
const tasklist = "";
const katex = "";
const clientConfig9 = defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("CodeTabs", S$2);
    if (!Ht("CodeGroup", app))
      app.component("CodeGroup", y$2);
    if (!Ht("CodeGroupItem", app))
      app.component("CodeGroupItem", c$2);
    app.component("CodeDemo", Y);
    app.component("ECharts", ECharts);
    app.component("FlowChart", k$3);
    app.component("Mermaid", w);
    app.component("Presentation", S$1);
    app.component("Playground", r$1);
    app.component("Tabs", S);
    app.component("VuePlayground", defineAsyncComponent(() => import("./assets/VuePlayground-093feef9.js")));
  }
});
const photoswipe = "";
const E = ".theme-hope-content :not(a) > img", P = { "/": { "closeTitle": "关闭", "downloadTitle": "下载图片", "fullscreenTitle": "切换全屏", "zoomTitle": "缩放", "arrowPrevTitle": "上一个 (左箭头)", "arrowNextTitle": "下一个 (右箭头)" } }, O = 800, H = {}, d$1 = (t2) => ({ src: t2.src, width: t2.naturalWidth, height: t2.naturalHeight, alt: t2.alt }), I = (t2) => {
  const r2 = isString$1(t2) ? Array.from(document.querySelectorAll(t2)) : t2.map((e2) => Array.from(document.querySelectorAll(e2))).flat();
  return Promise.all(r2.map((e2) => new Promise((i2, s2) => {
    e2.complete ? i2(d$1(e2)) : (e2.onload = () => i2(d$1(e2)), e2.onerror = (n2) => s2(n2));
  }))).then((e2) => ({ elements: r2, infos: e2 }));
}, A = () => {
  const { isSupported: t2, toggle: r2 } = useFullscreen(), e2 = Yt(P), i2 = useRoute$1(), s2 = () => {
    Promise.all([import("./assets/photoswipe.esm-3900af7f.js"), new Promise((n2) => setTimeout(n2, O)).then(() => I(E))]).then(([n2, m2]) => {
      m2.elements.forEach((l2, p2) => {
        const u2 = () => {
          const o2 = new n2.default({ dataSource: m2.infos, ...e2.value, ...H, index: p2 });
          o2.on("uiRegister", () => {
            t2 && o2.ui.registerElement({ name: "fullscreen", order: 7, isButton: true, html: '<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>', onClick: () => {
              r2();
            } }), o2.ui.registerElement({ name: "download", order: 8, isButton: true, tagName: "a", html: { isCustomSVG: true, inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>', outlineID: "pswp__icn-download" }, onInit: (a2, c2) => {
              a2.setAttribute("download", ""), a2.setAttribute("target", "_blank"), a2.setAttribute("rel", "noopener"), c2.on("change", () => {
                a2.href = c2.currSlide.data.src;
              });
            } });
          }), o2.init();
        };
        l2.style.cursor = "zoom-in", l2.addEventListener("click", u2), l2.addEventListener("keypress", ({ key: o2 }) => {
          o2 === "Enter" && u2();
        });
      });
    });
  };
  onMounted(() => {
    s2(), watch(() => i2.path, () => s2());
  });
};
var y = defineClientConfig({ setup: () => {
  A();
} });
const useAutoLink = (item, preferFull = false) => {
  const router = useRouter$1();
  const { fullPath, meta, name } = Ot(router, encodeURI(item));
  return {
    text: !preferFull && meta[
      "s"
      /* ArticleInfoType.shortTitle */
    ] ? meta[
      "s"
      /* ArticleInfoType.shortTitle */
    ] : meta[
      "t"
      /* ArticleInfoType.title */
    ] || item,
    link: name === "404" ? item : fullPath,
    ...meta[
      "i"
      /* ArticleInfoType.icon */
    ] ? { icon: meta[
      "i"
      /* ArticleInfoType.icon */
    ] } : {}
  };
};
const useThemeData = () => useThemeData$1();
const useThemeLocaleData = () => useThemeLocaleData$1();
const usePure = () => computed(() => Boolean(useThemeData().value.pure));
const useWindowSize = () => {
  const themeData2 = useThemeData();
  const isMobile = ref(false);
  const isWide = ref(false);
  const windowSizeHandler = () => {
    isMobile.value = window.innerWidth <= (themeData2.value.mobileBreakPoint || 719);
    isWide.value = window.innerWidth >= (themeData2.value.wideBreakPoint || 1440);
  };
  onMounted(() => {
    windowSizeHandler();
    useEventListener("resize", windowSizeHandler, false);
    useEventListener("orientationchange", windowSizeHandler, false);
  });
  return {
    isMobile,
    isWide
  };
};
const useNavigate = () => {
  const router = useRouter$1();
  const route = useRoute$1();
  return (url) => {
    if (url) {
      if (ue(url)) {
        if (route.path !== url)
          void router.push(url);
      } else if (isLinkHttp(url) || isLinkMailto(url)) {
        if (window)
          window.open(url);
      } else {
        const base = route.path.slice(0, route.path.lastIndexOf("/"));
        void router.push(`${base}/${encodeURI(url)}`);
      }
    }
  };
};
const usePageAuthor = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    const { author } = frontmatter.value;
    if (author)
      return re(author);
    if (author === false)
      return [];
    return re(themeLocale.value.author, false);
  });
};
const usePageCategory = () => {
  const frontmatter = usePageFrontmatter();
  return computed(() => se(frontmatter.value.category).map((name) => {
    var _a2, _b2;
    return {
      name,
      // this is a hack
      path: ((_b2 = (_a2 = inject(Symbol.for("categoryMap"))) == null ? void 0 : _a2.value.map[name]) == null ? void 0 : _b2.path) || ""
    };
  }));
};
const usePageTag = () => {
  const frontmatter = usePageFrontmatter();
  return computed(() => oe(frontmatter.value.tag).map((name) => {
    var _a2, _b2;
    return {
      name,
      // this is a hack
      path: ((_b2 = (_a2 = inject(Symbol.for("tagMap"))) == null ? void 0 : _a2.value.map[name]) == null ? void 0 : _b2.path) || ""
    };
  }));
};
const usePageDate = () => {
  const frontmatter = usePageFrontmatter();
  const page2 = usePageData();
  return computed(() => {
    const { date } = frontmatter.value;
    if (date)
      return st(date);
    const { createdTime } = page2.value.git || {};
    if (createdTime)
      return st(new Date(createdTime));
    return null;
  });
};
const usePageInfo = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  const author = usePageAuthor();
  const category = usePageCategory();
  const tag = usePageTag();
  const date = usePageDate();
  const info = computed(() => ({
    author: author.value,
    category: category.value,
    date: date.value,
    localizedDate: page2.value.localizedDate,
    tag: tag.value,
    isOriginal: frontmatter.value.isOriginal || false,
    readingTime: page2.value.readingTime || null,
    pageview: "pageview" in frontmatter.value ? frontmatter.value.pageview : true
  }));
  const items = computed(() => "pageInfo" in frontmatter.value ? frontmatter.value.pageInfo : "pageInfo" in themeLocale.value ? themeLocale.value.pageInfo : null);
  return { info, items };
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve == null ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const footer = "";
const PageFooter = defineComponent({
  name: "PageFooter",
  setup() {
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const author = usePageAuthor();
    const enable = computed(() => {
      const { copyright: copyright2, footer: footer2 } = frontmatter.value;
      return footer2 !== false && Boolean(copyright2 || footer2 || themeLocale.value.displayFooter);
    });
    const content = computed(() => {
      const { footer: footer2 } = frontmatter.value;
      return footer2 === false ? false : isString$1(footer2) ? footer2 : themeLocale.value.footer || "";
    });
    const copyright = computed(() => "copyright" in frontmatter.value ? frontmatter.value.copyright : "copyright" in themeLocale.value ? themeLocale.value.copyright : author.value.length ? `Copyright © ${new Date().getFullYear()} ${author.value[0].name}` : false);
    return () => enable.value ? h$4("footer", { class: "footer-wrapper" }, [
      content.value ? h$4("div", { class: "footer", innerHTML: content.value }) : null,
      copyright.value ? h$4("div", {
        class: "copyright",
        innerHTML: copyright.value
      }) : null
    ]) : null;
  }
});
const I18nIcon = () => h$4(R$1, { name: "i18n" }, () => [
  h$4("path", {
    d: "M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z"
  })
]);
I18nIcon.displayName = "I18nIcon";
const Icon = (props) => {
  const { icon = "" } = props;
  return isLinkHttp(icon) ? h$4("img", { class: "icon", src: icon }) : ue(icon) ? h$4("img", { class: "icon", src: withBase(icon) }) : h$4(resolveComponent("FontIcon"), props);
};
Icon.displayName = "Icon";
const AutoLink = defineComponent({
  name: "AutoLink",
  inheritAttrs: false,
  props: {
    /**
     * @description Autolink config
     */
    config: {
      type: Object,
      required: true
    },
    /**
     * @description Whether it's active only when exact match
     */
    exact: Boolean,
    /**
     * @description Whether to hide externalLinkIcon
     */
    noExternalLinkIcon: Boolean
  },
  emits: {
    focusout: () => true
  },
  setup(props, { attrs, emit, slots }) {
    const route = useRoute$1();
    const siteData2 = useSiteData();
    const config2 = toRef(props, "config");
    const hasHttpProtocol = computed(() => isLinkHttp(config2.value.link));
    const hasNonHttpProtocol = computed(() => isLinkMailto(config2.value.link) || isLinkTel(config2.value.link));
    const linkTarget = computed(() => hasNonHttpProtocol.value ? void 0 : config2.value.target || (hasHttpProtocol.value ? "_blank" : void 0));
    const isBlankTarget = computed(() => linkTarget.value === "_blank");
    const renderRouterLink = computed(() => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value);
    const anchorRel = computed(() => hasNonHttpProtocol.value ? void 0 : config2.value.rel || (isBlankTarget.value ? "noopener noreferrer" : void 0));
    const linkAriaLabel = computed(() => config2.value.ariaLabel || config2.value.text);
    const shouldBeActiveInSubpath = computed(() => {
      if (props.exact)
        return false;
      const localeKeys = Dt(siteData2.value.locales);
      return localeKeys.length ? (
        // check all the locales
        localeKeys.every((key) => key !== config2.value.link)
      ) : (
        // check root
        config2.value.link !== "/"
      );
    });
    const isActive = computed(() => renderRouterLink.value ? config2.value.activeMatch ? new RegExp(config2.value.activeMatch).test(route.path) : (
      // if this link is active in subpath
      !shouldBeActiveInSubpath.value ? route.path === config2.value.link : bt(route.path, config2.value.link)
    ) : false);
    return () => {
      var _a2, _b2, _c;
      const { text, icon, link } = config2.value;
      return renderRouterLink.value ? h$4(RouterLink$1, {
        to: link,
        "aria-label": linkAriaLabel.value,
        ...attrs,
        // class needs to be merged manually
        class: ["nav-link", { active: isActive.value }, attrs["class"]],
        onFocusout: () => emit("focusout")
      }, () => {
        var _a3, _b3, _c2;
        return ((_a3 = slots["default"]) == null ? void 0 : _a3.call(slots)) || [
          ((_b3 = slots["before"]) == null ? void 0 : _b3.call(slots)) || h$4(Icon, { icon }),
          text,
          (_c2 = slots["after"]) == null ? void 0 : _c2.call(slots)
        ];
      }) : h$4("a", {
        href: link,
        rel: anchorRel.value,
        target: linkTarget.value,
        "aria-label": linkAriaLabel.value,
        ...attrs,
        // class needs to be merged manually
        class: ["nav-link", attrs["class"]],
        onFocusout: () => emit("focusout")
      }, ((_a2 = slots["default"]) == null ? void 0 : _a2.call(slots)) || [
        ((_b2 = slots["before"]) == null ? void 0 : _b2.call(slots)) || h$4(Icon, { icon }),
        text,
        props.noExternalLinkIcon ? null : h$4(ExternalLinkIcon),
        (_c = slots["after"]) == null ? void 0 : _c.call(slots)
      ]);
    };
  }
});
const dropdownLink = "";
const DropdownLink = defineComponent({
  name: "NavbarDropdownLink",
  props: {
    /**
     * Dropdown config
     *
     * 下拉列表配置
     */
    config: {
      type: Object,
      required: true
    }
  },
  setup(props, { slots }) {
    const route = useRoute$1();
    const config2 = toRef(props, "config");
    const dropdownAriaLabel = computed(() => config2.value.ariaLabel || config2.value.text);
    const open = ref(false);
    watch(() => route.path, () => {
      open.value = false;
    });
    const handleDropdown = (event) => {
      const isTriggerByTab = event.detail === 0;
      if (isTriggerByTab)
        open.value = !open.value;
    };
    return () => {
      var _a2;
      return h$4("div", { class: ["dropdown-wrapper", { open: open.value }] }, [
        h$4("button", {
          class: "dropdown-title",
          type: "button",
          "aria-label": dropdownAriaLabel.value,
          onClick: handleDropdown
        }, [
          ((_a2 = slots["title"]) == null ? void 0 : _a2.call(slots)) || h$4("span", { class: "title" }, [
            h$4(Icon, { icon: config2.value.icon }),
            props.config.text
          ]),
          h$4("span", { class: "arrow" }),
          h$4("ul", { class: "nav-dropdown" }, config2.value.children.map((child, index2) => {
            const isLastChild = index2 === config2.value.children.length - 1;
            return h$4("li", { class: "dropdown-item" }, "children" in child ? [
              h$4("h4", { class: "dropdown-subtitle" }, child.link ? h$4(AutoLink, {
                config: child,
                onFocusout: () => {
                  if (
                    // no children
                    child.children.length === 0 && isLastChild
                  )
                    open.value = false;
                }
              }) : h$4("span", child.text)),
              h$4("ul", { class: "dropdown-subitem-wrapper" }, child.children.map((grandchild, grandIndex) => h$4("li", { class: "dropdown-subitem" }, h$4(AutoLink, {
                config: grandchild,
                onFocusout: () => {
                  if (
                    // last item of grandchild
                    grandIndex === child.children.length - 1 && isLastChild
                  )
                    open.value = false;
                }
              }))))
            ] : h$4(AutoLink, {
              config: child,
              onFocusout: () => {
                if (isLastChild)
                  open.value = false;
              }
            }));
          }))
        ])
      ]);
    };
  }
});
const resolveNavbarItem = (item, prefix = "") => {
  if (isString$1(item))
    return useAutoLink(`${prefix}${item}`);
  if ("children" in item)
    return {
      ...item,
      ...item.link && !isLinkExternal(item.link) ? useAutoLink(`${prefix}${item.link}`) : {},
      children: item.children.map((child) => resolveNavbarItem(child, `${prefix}${item.prefix || ""}`))
    };
  return {
    ...item,
    link: isLinkExternal(item.link) ? item.link : useAutoLink(`${prefix}${item.link}`).link
  };
};
const useNavbarConfig = () => computed(() => (useThemeLocaleData().value.navbar || []).map((item) => resolveNavbarItem(item)));
const useNavbarLanguageDropdown = () => {
  const router = useRouter$1();
  const routeLocale = useRouteLocale();
  const siteLocale = useSiteLocaleData();
  const themeData2 = useThemeData();
  const themeLocale = useThemeLocaleData();
  return computed(() => {
    const localePaths = Dt(siteLocale.value.locales);
    if (localePaths.length < 2)
      return null;
    const { path, fullPath } = router.currentRoute.value;
    const { navbarLocales } = themeLocale.value;
    const languageDropdown = {
      text: "",
      ariaLabel: navbarLocales == null ? void 0 : navbarLocales.selectLangAriaLabel,
      children: localePaths.map((targetLocalePath) => {
        var _a2, _b2, _c;
        const targetSiteLocale = ((_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) ?? {};
        const targetThemeLocale = ((_b2 = themeData2.value.locales) == null ? void 0 : _b2[targetLocalePath]) ?? {};
        const targetLang = targetSiteLocale.lang || "";
        const text = ((_c = targetThemeLocale.navbarLocales) == null ? void 0 : _c.langName) ?? targetLang;
        let link;
        if (targetLang === siteLocale.value.lang) {
          link = path;
        } else {
          const targetLocalePage = path.replace(routeLocale.value, targetLocalePath);
          link = // try to link to the corresponding page of current page
          router.getRoutes().some((item) => item.path === targetLocalePage) ? (
            // try to keep current hash across languages
            fullPath.replace(path, targetLocalePage)
          ) : (
            // or fallback to homepage
            targetThemeLocale.home ?? targetLocalePath
          );
        }
        return {
          text,
          link
        };
      })
    };
    return languageDropdown;
  });
};
const useNavbarRepo = () => {
  const themeLocale = useThemeLocaleData();
  const repo = computed(() => themeLocale.value.repo || null);
  const repoLink2 = computed(() => repo.value ? de(repo.value) : null);
  const repoType = computed(() => repo.value ? me(repo.value) : null);
  const repoLabel = computed(() => repoLink2.value ? themeLocale.value.repoLabel ?? (repoType.value === null ? "Source" : repoType.value) : null);
  return computed(() => {
    if (!repoLink2.value || !repoLabel.value || themeLocale.value.repoDisplay === false)
      return null;
    return {
      type: repoType.value || "Source",
      label: repoLabel.value,
      link: repoLink2.value
    };
  });
};
defineComponent({
  name: "LanguageDropdown",
  setup() {
    const dropdown = useNavbarLanguageDropdown();
    return () => dropdown.value ? h$4("div", { class: "nav-item" }, h$4(DropdownLink, { class: "i18n-dropdown", config: dropdown.value }, {
      title: () => {
        var _a2;
        return h$4(I18nIcon, {
          "aria-label": (_a2 = dropdown.value) == null ? void 0 : _a2.ariaLabel,
          style: {
            width: "1rem",
            height: "1rem",
            verticalAlign: "middle"
          }
        });
      }
    })) : null;
  }
});
const navbarBrand = "";
const NavbarBrand = defineComponent({
  name: "NavbarBrand",
  setup() {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const siteBrandLink = computed(() => themeLocale.value.home || routeLocale.value);
    const siteBrandTitle = computed(() => siteLocale.value.title);
    const siteBrandLogo = computed(() => themeLocale.value.logo ? withBase(themeLocale.value.logo) : null);
    const siteBrandLogoDark = computed(() => themeLocale.value.logoDark ? withBase(themeLocale.value.logoDark) : null);
    return () => h$4(RouterLink$1, { to: siteBrandLink.value, class: "brand" }, () => [
      siteBrandLogo.value ? h$4("img", {
        class: ["logo", { light: Boolean(siteBrandLogoDark.value) }],
        src: siteBrandLogo.value,
        alt: siteBrandTitle.value
      }) : null,
      siteBrandLogoDark.value ? h$4("img", {
        class: ["logo dark"],
        src: siteBrandLogoDark.value,
        alt: siteBrandTitle.value
      }) : null,
      siteBrandTitle.value ? h$4("span", {
        class: [
          "site-name",
          {
            "hide-in-pad": siteBrandLogo.value && themeLocale.value.hideSiteNameOnMobile !== false
          }
        ]
      }, siteBrandTitle.value) : null
    ]);
  }
});
const navbarLinks = "";
const NavbarLinks = defineComponent({
  name: "NavbarLinks",
  setup() {
    const navbarConfig = useNavbarConfig();
    return () => navbarConfig.value.length ? h$4("nav", { class: "nav-links" }, [
      ...navbarConfig.value.map((config2) => h$4("div", { class: "nav-item hide-in-mobile" }, "children" in config2 ? h$4(DropdownLink, { config: config2 }) : h$4(AutoLink, { config: config2 })))
    ]) : null;
  }
});
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i2 = 0, arr2 = Array(arr.length); i2 < arr.length; i2++) {
      arr2[i2] = arr[i2];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
var hasPassiveEvents = false;
if (typeof window !== "undefined") {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return void 0;
    }
  };
  window.addEventListener("testPassive", null, passiveTestOptions);
  window.removeEventListener("testPassive", null, passiveTestOptions);
}
var isIosDevice = typeof window !== "undefined" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPaddingRight = void 0;
var allowTouchMove = function allowTouchMove2(el) {
  return locks.some(function(lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }
    return false;
  });
};
var preventDefault = function preventDefault2(rawEvent) {
  var e2 = rawEvent || window.event;
  if (allowTouchMove(e2.target)) {
    return true;
  }
  if (e2.touches.length > 1)
    return true;
  if (e2.preventDefault)
    e2.preventDefault();
  return false;
};
var setOverflowHidden = function setOverflowHidden2(options) {
  if (previousBodyPaddingRight === void 0) {
    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
    if (_reserveScrollBarGap && scrollBarGap > 0) {
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = scrollBarGap + "px";
    }
  }
  if (previousBodyOverflowSetting === void 0) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
};
var restoreOverflowSetting = function restoreOverflowSetting2() {
  if (previousBodyPaddingRight !== void 0) {
    document.body.style.paddingRight = previousBodyPaddingRight;
    previousBodyPaddingRight = void 0;
  }
  if (previousBodyOverflowSetting !== void 0) {
    document.body.style.overflow = previousBodyOverflowSetting;
    previousBodyOverflowSetting = void 0;
  }
};
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled2(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};
var handleScroll = function handleScroll2(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;
  if (allowTouchMove(event.target)) {
    return false;
  }
  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    return preventDefault(event);
  }
  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    return preventDefault(event);
  }
  event.stopPropagation();
  return true;
};
var disableBodyScroll = function disableBodyScroll2(targetElement, options) {
  if (!targetElement) {
    console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
    return;
  }
  if (locks.some(function(lock2) {
    return lock2.targetElement === targetElement;
  })) {
    return;
  }
  var lock = {
    targetElement,
    options: options || {}
  };
  locks = [].concat(_toConsumableArray(locks), [lock]);
  if (isIosDevice) {
    targetElement.ontouchstart = function(event) {
      if (event.targetTouches.length === 1) {
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = function(event) {
      if (event.targetTouches.length === 1) {
        handleScroll(event, targetElement);
      }
    };
    if (!documentListenerAdded) {
      document.addEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
      documentListenerAdded = true;
    }
  } else {
    setOverflowHidden(options);
  }
};
var clearAllBodyScrollLocks = function clearAllBodyScrollLocks2() {
  if (isIosDevice) {
    locks.forEach(function(lock) {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });
    if (documentListenerAdded) {
      document.removeEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
      documentListenerAdded = false;
    }
    initialClientY = -1;
  } else {
    restoreOverflowSetting();
  }
  locks = [];
};
const navScreenDropdown = "";
const NavScreenDropdown = defineComponent({
  name: "NavScreenDropdown",
  props: {
    /**
     * Navbar Screen Dropdown list config
     *
     * 导航栏下拉列表配置
     */
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute$1();
    const config2 = toRef(props, "config");
    const dropdownAriaLabel = computed(() => config2.value.ariaLabel || config2.value.text);
    const open = ref(false);
    watch(() => route.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item, arr) => arr[arr.length - 1] === item;
    return () => [
      h$4("button", {
        class: ["nav-screen-dropdown-title", { active: open.value }],
        type: "button",
        "aria-label": dropdownAriaLabel.value,
        onClick: () => {
          open.value = !open.value;
        }
      }, [
        h$4("span", { class: "title" }, [
          h$4(Icon, { icon: config2.value.icon }),
          props.config.text
        ]),
        h$4("span", { class: ["arrow", open.value ? "down" : "end"] })
      ]),
      h$4("ul", {
        class: ["nav-screen-dropdown", { hide: !open.value }]
      }, config2.value.children.map((child) => h$4("li", { class: "dropdown-item" }, "children" in child ? [
        h$4("h4", { class: "dropdown-subtitle" }, child.link ? h$4(AutoLink, {
          config: child,
          onFocusout: () => {
            if (isLastItemOfArray(child, config2.value.children) && child.children.length === 0)
              open.value = false;
          }
        }) : h$4("span", child.text)),
        h$4("ul", { class: "dropdown-subitem-wrapper" }, child.children.map((grandchild) => h$4("li", { class: "dropdown-subitem" }, h$4(AutoLink, {
          config: grandchild,
          onFocusout: () => {
            if (isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, config2.value.children))
              open.value = false;
          }
        }))))
      ] : h$4(AutoLink, {
        config: child,
        onFocusout: () => {
          if (isLastItemOfArray(child, config2.value.children))
            open.value = false;
        }
      }))))
    ];
  }
});
const navScreenLinks = "";
const NavScreenLinks = defineComponent({
  name: "NavScreenLinks",
  setup() {
    const navbarConfig = useNavbarConfig();
    return () => navbarConfig.value.length ? h$4("nav", { class: "nav-screen-links" }, navbarConfig.value.map((config2) => h$4("div", { class: "navbar-links-item" }, "children" in config2 ? h$4(NavScreenDropdown, { config: config2 }) : h$4(AutoLink, { config: config2 })))) : null;
  }
});
const DarkIcon = () => h$4(R$1, { name: "dark" }, () => h$4("path", {
  d: "M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"
}));
DarkIcon.displayName = "DarkIcon";
const LightIcon = () => h$4(R$1, { name: "light" }, () => h$4("path", {
  d: "M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"
}));
LightIcon.displayName = "LightIcon";
const AutoIcon = () => h$4(R$1, { name: "auto" }, () => h$4("path", {
  d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"
}));
AutoIcon.displayName = "AutoIcon";
const EnterFullScreenIcon = () => h$4(R$1, { name: "enter-fullscreen" }, () => h$4("path", {
  d: "M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"
}));
EnterFullScreenIcon.displayName = "EnterFullScreenIcon";
const CancelFullScreenIcon = () => h$4(R$1, { name: "cancel-fullscreen" }, () => h$4("path", {
  d: "M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"
}));
CancelFullScreenIcon.displayName = "CancelFullScreenIcon";
const OutlookIcon = () => h$4(R$1, { name: "outlook" }, () => [
  h$4("path", {
    d: "M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"
  })
]);
OutlookIcon.displayName = "OutlookIcon";
const darkModeSymbol = Symbol.for("darkMode");
const useDarkmode = () => {
  const darkmode = inject(darkModeSymbol);
  if (!darkmode) {
    throw new Error("useDarkmode() is called without provider.");
  }
  return darkmode;
};
const injectDarkmode = (app) => {
  const themeData2 = useThemeData();
  const isDarkPreferred = usePreferredDark();
  const status = useStorage("vuepress-theme-hope-scheme", "auto");
  const config2 = computed(() => themeData2.value.darkmode || "switch");
  const isDarkmode = computed(() => {
    const darkmode = config2.value;
    return darkmode === "disable" ? false : (
      // force darkmode
      darkmode === "enable" ? true : (
        // auto
        darkmode === "auto" ? isDarkPreferred.value : (
          // toggle
          darkmode === "toggle" ? status.value === "dark" : (
            // switch
            status.value === "dark" || status.value === "auto" && isDarkPreferred.value
          )
        )
      )
    );
  });
  const canToggle = computed(() => {
    const darkmode = config2.value;
    return darkmode === "switch" || darkmode === "toggle";
  });
  app.provide(darkModeSymbol, {
    canToggle,
    config: config2,
    isDarkmode,
    status
  });
  Object.defineProperties(app.config.globalProperties, {
    $isDarkmode: { get: () => isDarkmode.value }
  });
};
const setupDarkmode = () => {
  const { isDarkmode } = useDarkmode();
  const updateDOM = (isDark = isDarkmode.value) => {
    const html = window == null ? void 0 : window.document.querySelector("html");
    html == null ? void 0 : html.setAttribute("data-theme", isDark ? "dark" : "light");
  };
  onMounted(() => {
    watch(isDarkmode, updateDOM, { immediate: true });
  });
};
const appearanceSwitch = "";
const AppearanceSwitch = defineComponent({
  name: "AppearanceSwitch",
  setup() {
    const { config: config2, status } = useDarkmode();
    const toggleDarkMode = () => {
      if (config2.value === "switch") {
        status.value = {
          light: "dark",
          dark: "auto",
          auto: "light"
        }[status.value];
      } else
        status.value = status.value === "light" ? "dark" : "light";
    };
    return () => h$4("button", {
      id: "appearance-switch",
      onClick: () => toggleDarkMode()
    }, [
      h$4(AutoIcon, {
        style: {
          display: status.value === "auto" ? "block" : "none"
        }
      }),
      h$4(DarkIcon, {
        style: {
          display: status.value === "dark" ? "block" : "none"
        }
      }),
      h$4(LightIcon, {
        style: {
          display: status.value === "light" ? "block" : "none"
        }
      })
    ]);
  }
});
const AppearanceMode = defineComponent({
  name: "AppearanceMode",
  setup() {
    const themeLocale = useThemeLocaleData();
    const { canToggle } = useDarkmode();
    const locale = computed(() => themeLocale.value.outlookLocales.darkmode);
    return () => canToggle.value ? h$4("div", { class: "appearance-wrapper" }, [
      h$4("label", { class: "appearance-title", for: "appearance-switch" }, locale.value),
      h$4(AppearanceSwitch)
    ]) : null;
  }
});
const themeColorPicker = "";
const ThemeColorPicker = defineComponent({
  name: "ThemeColorPicker",
  props: {
    /**
     * Theme color picker config
     *
     * 主题色选择器配置
     */
    themeColor: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const setThemeColor = (theme = "") => {
      const classes = document.documentElement.classList;
      const themes = Dt(props.themeColor).map((color) => `theme-${color}`);
      if (!theme) {
        localStorage.removeItem("theme");
        classes.remove(...themes);
        return;
      }
      classes.remove(...themes.filter((themeColorClass) => themeColorClass !== `theme-${theme}`));
      classes.add(`theme-${theme}`);
      localStorage.setItem("theme", theme);
    };
    onMounted(() => {
      const theme = localStorage.getItem("theme");
      if (theme)
        setThemeColor(theme);
    });
    return () => h$4("ul", { id: "theme-color-picker" }, [
      h$4("li", h$4("span", {
        class: "theme-color",
        onClick: () => setThemeColor()
      })),
      ...St(props.themeColor).map(([color, value]) => h$4("li", h$4("span", {
        style: { background: value },
        onClick: () => setThemeColor(color)
      })))
    ]);
  }
});
const ThemeColor = defineComponent({
  name: "ThemeColor",
  setup() {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    const locale = computed(() => themeLocale.value.outlookLocales.themeColor);
    const themeColor = computed(() => {
      const { themeColor: themeColor2 } = themeData2.value;
      return themeColor2 === false ? null : themeColor2;
    });
    return () => themeColor.value ? h$4("div", { class: "theme-color-wrapper" }, [
      h$4("label", { class: "theme-color-title", for: "theme-color-picker" }, locale.value),
      h$4(ThemeColorPicker, { themeColor: themeColor.value })
    ]) : null;
  }
});
const toggleFullScreenButton = "";
const ToggleFullScreenButton = defineComponent({
  name: "ToggleFullScreenButton",
  setup() {
    const themeLocale = useThemeLocaleData();
    const { isSupported, isFullscreen, toggle } = useFullscreen();
    const fullscreenLocale = computed(() => themeLocale.value.outlookLocales.fullscreen);
    return () => isSupported ? h$4("div", { class: "full-screen-wrapper" }, [
      h$4("label", { class: "full-screen-title", for: "full-screen-switch" }, fullscreenLocale.value),
      h$4("button", {
        class: "full-screen",
        id: "full-screen-switch",
        ariaPressed: isFullscreen.value,
        onClick: () => toggle()
      }, isFullscreen.value ? h$4(CancelFullScreenIcon) : h$4(EnterFullScreenIcon))
    ]) : null;
  }
});
const OutlookSettings = defineComponent({
  name: "OutlookSettings",
  setup() {
    const themeData2 = useThemeData();
    const pure = usePure();
    const enableThemeColor = computed(() => !pure.value && Boolean(themeData2.value.themeColor));
    const enableFullScreen = computed(() => !pure.value && themeData2.value.fullscreen);
    return () => h$4(ClientOnly, () => [
      enableThemeColor.value ? h$4(ThemeColor) : null,
      h$4(AppearanceMode),
      enableFullScreen.value ? h$4(ToggleFullScreenButton) : null
    ]);
  }
});
const navScreen = "";
const NavScreen = defineComponent({
  name: "NavScreen",
  props: {
    /**
     * Whether to show the screen
     *
     * 是否显示
     */
    show: Boolean
  },
  emits: {
    close: () => true
  },
  setup(props, { emit, slots }) {
    const route = useRoute$1();
    const { isMobile } = useWindowSize();
    const screen = ref();
    onMounted(() => {
      watch(isMobile, (value) => {
        if (!value && props.show) {
          clearAllBodyScrollLocks();
          emit("close");
        }
      });
      watch(() => route.path, () => {
        clearAllBodyScrollLocks();
        emit("close");
      });
    });
    onBeforeUnmount(() => {
      clearAllBodyScrollLocks();
    });
    return () => h$4(Transition, {
      name: "fade",
      onEnter: () => disableBodyScroll(screen.value, { reserveScrollBarGap: true }),
      onAfterLeave: () => clearAllBodyScrollLocks()
    }, () => {
      var _a2, _b2;
      return props.show ? h$4("div", { id: "nav-screen", ref: screen }, h$4("div", { class: "container" }, [
        (_a2 = slots["before"]) == null ? void 0 : _a2.call(slots),
        h$4(NavScreenLinks),
        h$4("div", { class: "outlook-wrapper" }, h$4(OutlookSettings)),
        (_b2 = slots["after"]) == null ? void 0 : _b2.call(slots)
      ])) : null;
    });
  }
});
const outlookButton = "";
const OutlookButton = defineComponent({
  name: "OutlookButton",
  setup() {
    const { isSupported } = useFullscreen();
    const themeData2 = useThemeData();
    const pure = usePure();
    const route = useRoute$1();
    const { canToggle } = useDarkmode();
    const open = ref(false);
    const enableThemeColor = computed(() => !pure.value && Boolean(themeData2.value.themeColor));
    const enableFullScreen = computed(() => !pure.value && themeData2.value.fullscreen && isSupported);
    watch(() => route.path, () => {
      open.value = false;
    });
    return () => canToggle.value || enableFullScreen.value || enableThemeColor.value ? h$4(
      "div",
      { class: "nav-item hide-in-mobile" },
      // only AppearanceSwitch is enabled
      canToggle.value && !enableFullScreen.value && !enableThemeColor.value ? h$4(AppearanceSwitch) : (
        // only FullScreen is enabled
        enableFullScreen.value && !canToggle.value && !enableThemeColor.value ? h$4(ToggleFullScreenButton) : h$4("button", {
          class: ["outlook-button", { open: open.value }],
          tabindex: "-1",
          ariaHidden: true
        }, [
          h$4(OutlookIcon),
          h$4("div", { class: "outlook-dropdown" }, h$4(OutlookSettings))
        ])
      )
    ) : null;
  }
});
const toggleNavbarButton = "";
const ToggleNavbarButton = ({ active = false }, { emit }) => h$4("button", {
  class: ["toggle-navbar-button", { "is-active": active }],
  "aria-label": "Toggle Navbar",
  "aria-expanded": active,
  "aria-controls": "nav-screen",
  onClick: () => emit("toggle")
}, h$4("span", { class: "button-container" }, [
  h$4("span", { class: "button-top" }),
  h$4("span", { class: "button-middle" }),
  h$4("span", { class: "button-bottom" })
]));
ToggleNavbarButton.displayName = "ToggleNavbarButton";
const toggleSidebarButton = "";
const ToggleSidebarButton = (_2, { emit }) => h$4("button", {
  class: "toggle-sidebar-button",
  title: "Toggle Sidebar",
  onClick: () => emit("toggle")
}, h$4("span", { class: "icon" }));
ToggleSidebarButton.displayName = "ToggleSidebarButton";
ToggleSidebarButton.emits = ["toggle"];
const repoLink = "";
const RepoLink = defineComponent({
  name: "RepoLink",
  components: { BitbucketIcon: gt, GiteeIcon: $t, GitHubIcon: vt, GitlabIcon: pt, SourceIcon: yt },
  setup() {
    const repo = useNavbarRepo();
    return () => repo.value ? h$4("div", { class: "nav-item" }, h$4("a", {
      class: "repo-link",
      href: repo.value.link,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": repo.value.label
    }, h$4(resolveComponent(`${repo.value.type}Icon`), {
      style: {
        width: "1.25rem",
        height: "1.25rem",
        verticalAlign: "middle"
      }
    }))) : null;
  }
});
const navbar = "";
const Navbar = defineComponent({
  name: "NavBar",
  emits: {
    toggleSidebar: () => true
  },
  setup(_props, { emit, slots }) {
    const themeLocale = useThemeLocaleData();
    const { isMobile } = useWindowSize();
    const showScreen = ref(false);
    const autoHide = computed(() => {
      const { navbarAutoHide = "mobile" } = themeLocale.value;
      return navbarAutoHide !== "none" && (navbarAutoHide === "always" || isMobile.value);
    });
    const navbarLayout = computed(() => themeLocale.value.navbarLayout || {
      start: ["Brand"],
      center: ["Links"],
      end: ["Language", "Repo", "Outlook", "Search"]
    });
    return () => {
      var _a2, _b2, _c, _d, _e, _f;
      const map = {
        Brand: h$4(NavbarBrand),
        Language: null,
        Links: h$4(NavbarLinks),
        Repo: h$4(RepoLink),
        Outlook: h$4(OutlookButton),
        Search: Ht("Docsearch") ? h$4(resolveComponent("Docsearch")) : Ht("SearchBox") ? h$4(resolveComponent("SearchBox")) : Ht("SearchBox") ? h$4(resolveComponent("SearchBox")) : null
      };
      return [
        h$4("header", {
          class: [
            "navbar",
            {
              "auto-hide": autoHide.value,
              "hide-icon": themeLocale.value.navbarIcon === false
            }
          ],
          id: "navbar"
        }, [
          h$4("div", { class: "navbar-start" }, [
            // @ts-ignore
            h$4(ToggleSidebarButton, {
              onToggle: () => {
                if (showScreen.value)
                  showScreen.value = false;
                emit("toggleSidebar");
              }
            }),
            (_a2 = slots["startBefore"]) == null ? void 0 : _a2.call(slots),
            ...(navbarLayout.value.start || []).map((item) => map[item]),
            (_b2 = slots["startAfter"]) == null ? void 0 : _b2.call(slots)
          ]),
          h$4("div", { class: "navbar-center" }, [
            (_c = slots["centerBefore"]) == null ? void 0 : _c.call(slots),
            ...(navbarLayout.value.center || []).map((item) => map[item]),
            (_d = slots["centerAfter"]) == null ? void 0 : _d.call(slots)
          ]),
          h$4("div", { class: "navbar-end" }, [
            (_e = slots["endBegin"]) == null ? void 0 : _e.call(slots),
            ...(navbarLayout.value.end || []).map((item) => map[item]),
            (_f = slots["endAfter"]) == null ? void 0 : _f.call(slots),
            h$4(ToggleNavbarButton, {
              active: showScreen.value,
              onToggle: () => {
                showScreen.value = !showScreen.value;
              }
            })
          ])
        ]),
        h$4(NavScreen, {
          show: showScreen.value,
          onClose: () => {
            showScreen.value = false;
          }
        }, {
          before: () => {
            var _a3;
            return (_a3 = slots["screenTop"]) == null ? void 0 : _a3.call(slots);
          },
          after: () => {
            var _a3;
            return (_a3 = slots["screenBottom"]) == null ? void 0 : _a3.call(slots);
          }
        })
      ];
    };
  }
});
const isActiveSidebarItem = (route, item, exact = false) => {
  if ("activeMatch" in item)
    return new RegExp(item.activeMatch).test(route.path);
  if (he(route, item.link))
    return true;
  if (item.children && !exact)
    return item.children.some((child) => isActiveSidebarItem(route, child));
  return false;
};
const isMatchedSidebarItem = (route, item) => {
  if (item.type === "group")
    return item.children.some((child) => {
      if (child.type === "group")
        return isMatchedSidebarItem(route, child);
      return child.type === "page" && isActiveSidebarItem(route, child, true);
    }) || "prefix" in item && he(route, item.prefix);
  return false;
};
const renderItem = (config2, props) => config2.link ? (
  // if the item has link, render it as `<AutoLink>`
  h$4(AutoLink, {
    ...props,
    config: config2
  })
) : (
  // if the item only has text, render it as `<p>`
  h$4("p", props, [h$4(Icon, { icon: config2.icon }), config2.text])
);
const renderChildren$1 = (children) => {
  const route = useRoute$1();
  if (!children)
    return null;
  return h$4("ul", { class: "sidebar-sub-headers" }, children.map((child) => {
    const active = isActiveSidebarItem(route, child, true);
    return h$4("li", { class: "sidebar-sub-header" }, [
      renderItem(child, {
        class: ["sidebar-link", "heading", { active }]
      }),
      renderChildren$1(child.children)
    ]);
  }));
};
const sidebarData = { "/posts/": [{ "text": "感悟", "prefix": "感悟/", "collapsible": true, "children": ["编写代码的哪些方面能够使你兴奋或感兴趣？ 3297254ce03d4138993062f560433d03.md", "曼巴学习法.md", "纠结时应该如何抉择.md", "每当想放弃进入舒适圈的时候.md", "时间管理.md", "选择比努力重要.md", "选择大于努力.md", "应该把精力投入到哪些事情上.md", "预估业务错误引发的思考.md"] }, { "text": "浏览器相关知识", "prefix": "浏览器相关知识/", "collapsible": true, "children": ["摆脱 console.log ，使用更优质的前端调试方案.md", "跨域详解.md", "跨域执行、HTTP简单复杂请求.md", "浏览器多语言.md", "前端的内存分配，垃圾回收.md", "三次握手和四次挥手.md", "事件代理的理解.md", "Event Loop在浏览器中和Node环境中的区别.md", "HTTP1 x和HTTP2 0区别.md", "Http的session和cookie.md"] }, { "text": "前端工程化", "prefix": "前端工程化/", "collapsible": true, "children": ["前端路由的两种模式.md", "git cz的配置命令.md", "Vite生产环境为什么选择Rollup做构建工具.md", "webpack从0搭建react项目.md", "Webpack优缺点.md", "webpack中的Loader和Plugin区别.md"] }, { "text": "手写算法系列", "prefix": "手写算法系列/", "collapsible": true, "children": ["深拷贝.md", "比较两个对象是否全等.md", "动态规划结题思路.md", { "text": "看代码说结果", "prefix": "看代码说结果/", "collapsible": true, "children": ["看代码说结果 Promise题.md"] }, "可逆序执行串联函数.md", "实现一个可链式调用、可等待执行的类 3ff786584ab24b19b3bca0b613b1a1a5.md", "多异步任务保持3个并发.md", "ES5实现let与const 3f9f5daaef2448dca1a3e7e8e8474461.md"] }, { "text": "性能优化", "prefix": "性能优化/", "collapsible": true, "children": ["你如何对网站的文件和资源进行优化的 2979065a206a4a3d8c82ff7b672cab0c.md", "请说出三种减少页面加载时间的方法。 4f65bc03f263461bb0a38a4ef0dd8c48.md", "虚拟列表.md"] }, { "text": "C S S", "prefix": "CSS/", "collapsible": true, "children": ["动画RequestAnimations.md", "未知高度元素，垂直水平居中.md", "系统字体导致的CSS错位问题总结.md", "CSS3部分新特性.md", "CSS文字换行语法汇总.md", "requestAnimationFrame 深度解读.md"] }, { "text": "Chore", "prefix": "Chore/", "collapsible": true, "children": ["程序要需要学习的软技能.md", "浅读正则表达式.md", "Bash学习(二).md", "Bash学习(一).md", "TypeScript 索引签名导致的报错问题.md"] }, { "text": "J S进阶 源码阅读", "prefix": "JS进阶-源码阅读/", "collapsible": true, "children": ["Redux实现原理.md"] }, { "text": "Java Scipt基础", "prefix": "JavaScipt基础/", "collapsible": true, "children": [{ "text": "红宝书", "prefix": "红宝书/", "collapsible": true, "children": ["变量.md", "第十三章 客户端检测 13.3 软件与硬件检测（本章完）.md", "执行上下文与作用域.md", "script标签-脚本加载.md", "13.2用户代理检测.md", "13.3 软件与硬件检测.md", "14.1.3 Element类型.md", "14.1.4 Text类型.md", "16.2.1  存取元素样式.md", "闭包.md", "代理与反射.md", "17.1事件流-17.2事件处理程序.md", "14.1 节点层级 Node节点.md", "第十五章 15.1-15.3.md", "第十二章BOM12.1.1-6.md", "十四章14.3 MutationObServer接口.md", "Javascript类.md", "事件.md", "JSON.md", "Web Socket.md"] }, { "text": "Java Script方法", "prefix": "JavaScript方法/", "collapsible": true, "children": ["JS失真运算的原因.md", "Array.from 方法深度解读.md", "async的产生，生成器相关解读.md", "JS对象中的with语句.md", "JSON方法.md", "Proxy和Object.defineProperty的区别.md"] }] }, { "text": "React相关解读", "prefix": "React相关解读/", "collapsible": true, "children": ["如何防止Input的拼音输入触发onChange.md", "input.md", "Filber.md", "React函数组件中使用防抖节流.md"] }] };
const resolvePrefix = (prefix = "", path = "") => ue(path) ? path : `${ensureEndingSlash(prefix)}${path}`;
const headerToSidebarItem = (header, headerDepth) => {
  const page2 = usePageData();
  return {
    type: "heading",
    text: header.title,
    link: `${page2.value.path}#${header.slug}`,
    children: headersToSidebarItemChildren(header.children, headerDepth)
  };
};
const headersToSidebarItemChildren = (headers, headerDepth) => headerDepth > 0 ? headers.map((header) => headerToSidebarItem(header, headerDepth - 1)) : [];
const resolveHeadingSidebarItems = (headerDepth) => {
  const page2 = usePageData();
  return headersToSidebarItemChildren(page2.value.headers, headerDepth);
};
const resolveArraySidebarItems = (sidebarConfig, headerDepth, prefix = "") => {
  const page2 = usePageData();
  const route = useRoute$1();
  const handleChildItem = (item, pathPrefix = prefix) => {
    var _a2;
    const childItem = isString$1(item) ? useAutoLink(resolvePrefix(pathPrefix, item)) : item.link ? {
      ...item,
      ...!isLinkExternal(item.link) ? { link: useAutoLink(resolvePrefix(pathPrefix, item.link)).link } : {}
    } : item;
    if ("children" in childItem) {
      const prefix2 = resolvePrefix(pathPrefix, childItem.prefix);
      const children = childItem.children === "structure" ? sidebarData[prefix2] : childItem.children;
      return {
        type: "group",
        ...childItem,
        prefix: prefix2,
        children: children.map((item2) => handleChildItem(item2, prefix2))
      };
    }
    return {
      type: "page",
      ...childItem,
      children: (
        // if the sidebar item is current page and children is not set
        // use headers of current page as children
        childItem.link === route.path ? headersToSidebarItemChildren(
          // skip h1 header
          ((_a2 = page2.value.headers[0]) == null ? void 0 : _a2.level) === 1 ? page2.value.headers[0].children : page2.value.headers,
          headerDepth
        ) : []
      )
    };
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, headerDepth) => {
  const route = useRoute$1();
  const sidebarRoutes = Dt(sidebarConfig).sort((x2, y2) => y2.length - x2.length);
  for (const base of sidebarRoutes) {
    if (bt(decodeURI(route.path), base)) {
      const matchedConfig = sidebarConfig[base];
      return matchedConfig ? resolveArraySidebarItems(matchedConfig === "structure" ? sidebarData[base] : matchedConfig === "heading" ? resolveHeadingSidebarItems(headerDepth) : matchedConfig, headerDepth, base) : [];
    }
  }
  console.warn(`${route.path} is missing sidebar config.`);
  return [];
};
const resolveSidebarItems = () => {
  const routeLocale = useRouteLocale();
  const frontmatter = usePageFrontmatter();
  const themeLocale = useThemeLocaleData();
  const sidebarConfig = frontmatter.value.home ? false : frontmatter.value.sidebar ?? themeLocale.value.sidebar ?? "structure";
  const headerDepth = frontmatter.value.headerDepth ?? themeLocale.value.headerDepth ?? 2;
  return sidebarConfig === false ? [] : sidebarConfig === "heading" ? resolveHeadingSidebarItems(headerDepth) : sidebarConfig === "structure" ? resolveArraySidebarItems(sidebarData[routeLocale.value], headerDepth, routeLocale.value) : isArray$2(sidebarConfig) ? resolveArraySidebarItems(sidebarConfig, headerDepth) : isPlainObject(sidebarConfig) ? resolveMultiSidebarItems(sidebarConfig, headerDepth) : [];
};
const sidebarItemsSymbol = Symbol.for("sidebarItems");
const setupSidebarItems = () => {
  const sidebarItems = computed(() => resolveSidebarItems());
  provide(sidebarItemsSymbol, sidebarItems);
};
const useSidebarItems = () => {
  const sidebarItems = inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
const sidebarChild = "";
const SidebarChild = defineComponent({
  name: "SidebarChild",
  props: {
    /**
     * Sidebar item config
     *
     * 侧边栏项目配置
     */
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute$1();
    return () => [
      renderItem(props.config, {
        class: [
          "sidebar-link",
          `sidebar-${props.config.type}`,
          { active: isActiveSidebarItem(route, props.config, true) }
        ],
        exact: true
      }),
      renderChildren$1(props.config.children)
    ];
  }
});
const sidebarGroup = "";
const SidebarGroup = defineComponent({
  name: "SidebarGroup",
  props: {
    /**
     * Sidebar group item config
     *
     * 侧边栏分组配置
     */
    config: {
      type: Object,
      required: true
    },
    /**
     * Whether current group is open
     *
     * 当前分组是否展开
     */
    open: {
      type: Boolean,
      required: true
    }
  },
  emits: {
    toggle: () => true
  },
  setup(props, { emit }) {
    const route = useRoute$1();
    const active = computed(() => isActiveSidebarItem(route, props.config));
    const exact = computed(() => isActiveSidebarItem(route, props.config, true));
    return () => {
      const { collapsible, children = [], icon, prefix, link, text } = props.config;
      return h$4("section", { class: "sidebar-group" }, [
        h$4(collapsible ? "button" : "p", {
          class: [
            "sidebar-heading",
            {
              clickable: collapsible || link,
              exact: exact.value,
              active: active.value
            }
          ],
          ...collapsible ? {
            onClick: () => emit("toggle"),
            onKeydown: (event) => {
              if (event.key === "Enter")
                emit("toggle");
            }
          } : {}
        }, [
          // icon
          h$4(Icon, { icon }),
          // title
          link ? h$4(RouterLink$1, { to: link, class: "title" }, () => text) : h$4("span", { class: "title" }, text),
          // arrow
          collapsible ? h$4("span", { class: ["arrow", props.open ? "down" : "end"] }) : null
        ]),
        props.open || !collapsible ? h$4(SidebarLinks, { key: prefix, config: children }) : null
      ]);
    };
  }
});
const sidebarLinks = "";
const SidebarLinks = defineComponent({
  name: "SidebarLinks",
  props: {
    /**
     * Sidebar links config
     *
     * 侧边栏链接配置
     */
    config: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const route = useRoute$1();
    const openGroupIndex = ref(-1);
    const toggleGroup = (index2) => {
      openGroupIndex.value = index2 === openGroupIndex.value ? -1 : index2;
    };
    watch(() => route.path, () => {
      const index2 = props.config.findIndex((item) => isMatchedSidebarItem(route, item));
      openGroupIndex.value = index2;
    }, { immediate: true, flush: "post" });
    return () => h$4("ul", { class: "sidebar-links" }, props.config.map((config2, index2) => h$4("li", config2.type === "group" ? h$4(SidebarGroup, {
      config: config2,
      open: index2 === openGroupIndex.value,
      onToggle: () => toggleGroup(index2)
    }) : h$4(SidebarChild, { config: config2 }))));
  }
});
const sidebar = "";
const Sidebar = defineComponent({
  name: "SideBar",
  setup(_props, { slots }) {
    const route = useRoute$1();
    const themeLocale = useThemeLocaleData();
    const sidebarItems = useSidebarItems();
    const sidebar2 = ref();
    onMounted(() => {
      watch(() => route.hash, (hash) => {
        const activeSidebarItem = document.querySelector(`.sidebar a.sidebar-link[href="${route.path}${hash}"]`);
        if (!activeSidebarItem)
          return;
        const { top: sidebarTop, height: sidebarHeight } = sidebar2.value.getBoundingClientRect();
        const { top: activeSidebarItemTop, height: activeSidebarItemHeight } = activeSidebarItem.getBoundingClientRect();
        if (activeSidebarItemTop < sidebarTop)
          activeSidebarItem.scrollIntoView(true);
        else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight)
          activeSidebarItem.scrollIntoView(false);
      });
    });
    return () => {
      var _a2, _b2, _c;
      return h$4("aside", {
        class: [
          "sidebar",
          { "hide-icon": themeLocale.value.sidebarIcon === false }
        ],
        id: "sidebar",
        ref: sidebar2
      }, [
        (_a2 = slots["top"]) == null ? void 0 : _a2.call(slots),
        ((_b2 = slots["default"]) == null ? void 0 : _b2.call(slots)) || h$4(SidebarLinks, { config: sidebarItems.value }),
        (_c = slots["bottom"]) == null ? void 0 : _c.call(slots)
      ]);
    };
  }
});
const common = "";
const CommonWrapper = defineComponent({
  name: "CommonWrapper",
  props: {
    /**
     * Whether disable navbar
     *
     * 是否禁用导航栏
     */
    noNavbar: Boolean,
    /**
     * Whether disable sidebar
     *
     * 是否禁用侧边栏
     */
    noSidebar: Boolean
  },
  setup(props, { slots }) {
    const router = useRouter$1();
    const page2 = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const { isMobile, isWide } = useWindowSize();
    const hideNavbar = ref(false);
    const enableNavbar = computed(() => {
      if (props.noNavbar)
        return false;
      if (frontmatter.value.navbar === false || themeLocale.value.navbar === false)
        return false;
      return Boolean(page2.value.title || themeLocale.value.logo || themeLocale.value.repo || themeLocale.value.navbar);
    });
    const sidebarItems = useSidebarItems();
    const enableSidebar = computed(() => {
      if (props.noSidebar)
        return false;
      return frontmatter.value.sidebar !== false && sidebarItems.value.length !== 0 && !frontmatter.value.home;
    });
    const isMobileSidebarOpen = ref(false);
    const isDesktopSidebarCollapsed = ref(false);
    const toggleMobileSidebar = (value) => {
      isMobileSidebarOpen.value = typeof value === "boolean" ? value : !isMobileSidebarOpen.value;
    };
    const toggleDesktopSidebar = (value) => {
      isDesktopSidebarCollapsed.value = typeof value === "boolean" ? value : !isDesktopSidebarCollapsed.value;
    };
    const touchStart = { x: 0, y: 0 };
    const onTouchStart = (e2) => {
      touchStart.x = e2.changedTouches[0].clientX;
      touchStart.y = e2.changedTouches[0].clientY;
    };
    const onTouchEnd = (e2) => {
      const dx = e2.changedTouches[0].clientX - touchStart.x;
      const dy = e2.changedTouches[0].clientY - touchStart.y;
      if (
        // horizontal swipe
        Math.abs(dx) > Math.abs(dy) * 1.5 && Math.abs(dx) > 40
      ) {
        if (dx > 0 && touchStart.x <= 80)
          toggleMobileSidebar(true);
        else
          toggleMobileSidebar(false);
      }
    };
    const enableToc = computed(() => frontmatter.value.home ? false : frontmatter.value.toc || themeLocale.value.toc !== false && frontmatter.value.toc !== false);
    const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let unregisterRouterHook;
    let lastDistance = 0;
    useEventListener("scroll", useThrottleFn(() => {
      const distance = getScrollTop();
      if (lastDistance < distance && distance > 58) {
        if (!isMobileSidebarOpen.value)
          hideNavbar.value = true;
      } else
        hideNavbar.value = false;
      lastDistance = distance;
    }, 300, true));
    watch(isMobile, (value) => {
      if (!value)
        toggleMobileSidebar(false);
    });
    onMounted(() => {
      unregisterRouterHook = router.afterEach(() => {
        toggleMobileSidebar(false);
      });
    });
    onBeforeUnmount(() => {
      unregisterRouterHook();
    });
    return () => h$4(Ht("GlobalEncrypt") ? resolveComponent("GlobalEncrypt") : kt, () => {
      var _a2;
      return h$4("div", {
        class: [
          "theme-container",
          // classes
          {
            "no-navbar": !enableNavbar.value,
            "no-sidebar": !enableSidebar.value && !(slots["sidebar"] || slots["sidebarTop"] || slots["sidebarBottom"]),
            "has-toc": enableToc.value,
            "hide-navbar": hideNavbar.value,
            "sidebar-collapsed": !isMobile.value && !isWide.value && isDesktopSidebarCollapsed.value,
            "sidebar-open": isMobile.value && isMobileSidebarOpen.value
          },
          frontmatter.value.containerClass || ""
        ],
        onTouchStart,
        onTouchEnd
      }, [
        // navbar
        enableNavbar.value ? h$4(Navbar, { onToggleSidebar: () => toggleMobileSidebar() }, {
          startBefore: () => {
            var _a3;
            return (_a3 = slots["navbarStartBefore"]) == null ? void 0 : _a3.call(slots);
          },
          startAfter: () => {
            var _a3;
            return (_a3 = slots["navbarStartAfter"]) == null ? void 0 : _a3.call(slots);
          },
          centerBefore: () => {
            var _a3;
            return (_a3 = slots["navbarCenterBefore"]) == null ? void 0 : _a3.call(slots);
          },
          centerAfter: () => {
            var _a3;
            return (_a3 = slots["navbarCenterAfter"]) == null ? void 0 : _a3.call(slots);
          },
          endBegin: () => {
            var _a3;
            return (_a3 = slots["navbarEndBegin"]) == null ? void 0 : _a3.call(slots);
          },
          endAfter: () => {
            var _a3;
            return (_a3 = slots["navbarEndAfter"]) == null ? void 0 : _a3.call(slots);
          },
          screenTop: () => {
            var _a3;
            return (_a3 = slots["navScreenTop"]) == null ? void 0 : _a3.call(slots);
          },
          screenBottom: () => {
            var _a3;
            return (_a3 = slots["navScreenBottom"]) == null ? void 0 : _a3.call(slots);
          }
        }) : null,
        // sidebar mask
        h$4(Transition, { name: "fade" }, () => isMobileSidebarOpen.value ? h$4("div", {
          class: "sidebar-mask",
          onClick: () => toggleMobileSidebar(false)
        }) : null),
        // toggle sidebar button
        h$4(Transition, { name: "fade" }, () => isMobile.value ? null : h$4("div", {
          class: "toggle-sidebar-wrapper",
          onClick: () => toggleDesktopSidebar()
        }, h$4("span", {
          class: [
            "arrow",
            isDesktopSidebarCollapsed.value ? "end" : "start"
          ]
        }))),
        // sidebar
        h$4(Sidebar, {}, {
          ...slots["sidebar"] ? {
            default: () => {
              var _a3;
              return (_a3 = slots["sidebar"]) == null ? void 0 : _a3.call(slots);
            }
          } : {},
          top: () => {
            var _a3;
            return (_a3 = slots["sidebarTop"]) == null ? void 0 : _a3.call(slots);
          },
          bottom: () => {
            var _a3;
            return (_a3 = slots["sidebarBottom"]) == null ? void 0 : _a3.call(slots);
          }
        }),
        (_a2 = slots["default"]) == null ? void 0 : _a2.call(slots),
        h$4(PageFooter)
      ]);
    });
  }
});
const DropTransition = defineComponent({
  name: "DropTransition",
  props: {
    /**
     * @description Transition type
     */
    type: {
      type: String,
      default: "single"
    },
    /**
     * @description Transition delay
     */
    delay: { type: Number, default: 0 },
    /**
     * @description Transition duration
     */
    duration: { type: Number, default: 0.25 },
    /**
     * @description appear
     */
    appear: Boolean
  },
  setup(props, { slots }) {
    const setStyle = (item) => {
      item.style.transition = `transform ${props.duration}s ease-in-out ${props.delay}s, opacity ${props.duration}s ease-in-out ${props.delay}s`;
      item.style.transform = "translateY(-20px)";
      item.style.opacity = "0";
    };
    const unsetStyle = (item) => {
      item.style.transform = "translateY(0)";
      item.style.opacity = "1";
    };
    return () => h$4(
      // @ts-ignore
      props.type === "single" ? Transition : TransitionGroup,
      {
        name: "drop",
        appear: props.appear,
        onAppear: setStyle,
        onAfterAppear: unsetStyle,
        onEnter: setStyle,
        onAfterEnter: unsetStyle,
        onBeforeLeave: setStyle
      },
      () => {
        var _a2;
        return (_a2 = slots["default"]) == null ? void 0 : _a2.call(slots);
      }
    );
  }
});
const featurePanel = "";
const FeaturePanel = defineComponent({
  name: "FeaturePanel",
  props: {
    /**
     * Feature config
     */
    items: {
      type: Object,
      default: () => []
    },
    /**
     * Feature header
     */
    header: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    return () => h$4("div", { class: "feature-panel" }, [
      props.header ? h$4("h2", { class: "feature-header" }, props.header) : null,
      props.items.length ? h$4("div", { class: "feature-wrapper" }, props.items.map((feature) => {
        const children = [
          h$4("h3", [
            h$4(Icon, { icon: feature.icon }),
            h$4("span", { innerHTML: feature.title })
          ]),
          h$4("p", { innerHTML: feature.details })
        ];
        return feature.link ? isLinkExternal(feature.link) ? h$4("a", {
          class: "feature-item link",
          href: feature.link,
          role: "navigation",
          "aria-label": feature.title,
          target: "_blank"
        }, children) : h$4(RouterLink$1, {
          class: "feature-item link",
          to: feature.link,
          role: "navigation",
          "aria-label": feature.title
        }, () => children) : h$4("div", { class: "feature-item" }, children);
      })) : null
    ]);
  }
});
const heroInfo = "";
const HeroInfo = defineComponent({
  name: "HeroInfo",
  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const heroText = computed(() => {
      if (frontmatter.value.heroText === false)
        return false;
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const tagline = computed(() => {
      if (frontmatter.value.tagline === false)
        return false;
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const heroImage = computed(() => {
      if (!frontmatter.value.heroImage)
        return null;
      return withBase(frontmatter.value.heroImage);
    });
    const heroImageDark = computed(() => {
      if (!frontmatter.value.heroImageDark)
        return null;
      return withBase(frontmatter.value.heroImageDark);
    });
    const heroAlt = computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const actions = computed(() => frontmatter.value.actions ?? []);
    return () => {
      var _a2, _b2;
      return h$4("header", { class: "hero-info-wrapper" }, [
        ((_a2 = slots["heroImage"]) == null ? void 0 : _a2.call(slots)) || h$4(DropTransition, { appear: true, type: "group" }, () => [
          heroImage.value ? h$4("img", {
            key: "light",
            class: { light: heroImageDark.value },
            src: heroImage.value,
            alt: heroAlt.value
          }) : null,
          heroImageDark.value ? h$4("img", {
            key: "dark",
            class: "dark",
            src: heroImageDark.value,
            alt: heroAlt.value
          }) : null
        ]),
        ((_b2 = slots["heroInfo"]) == null ? void 0 : _b2.call(slots)) || h$4("div", { class: "hero-info" }, [
          heroText.value ? h$4(DropTransition, { appear: true, delay: 0.04 }, () => h$4("h1", { id: "main-title" }, heroText.value)) : null,
          tagline.value ? h$4(DropTransition, { appear: true, delay: 0.08 }, () => h$4("p", { class: "description" }, tagline.value)) : null,
          actions.value.length ? h$4(DropTransition, { appear: true, delay: 0.12 }, () => h$4("p", { class: "actions" }, actions.value.map((action) => h$4(AutoLink, {
            class: ["action-button", action.type || "default"],
            config: action,
            noExternalLinkIcon: true
          })))) : null
        ])
      ]);
    };
  }
});
const MarkdownContent = ({ custom }) => h$4(Content, { class: ["theme-hope-content", { custom }] });
MarkdownContent.displayName = "MarkdownContent";
MarkdownContent.props = {
  custom: Boolean
};
const homePage = "";
const HomePage = defineComponent({
  name: "HopePage",
  setup(_props, { slots }) {
    const pure = usePure();
    const frontmatter = usePageFrontmatter();
    const features = computed(() => {
      const { features: features2 } = frontmatter.value;
      if (isArray$2(features2))
        return features2.some((item) => !("items" in item)) ? [{ items: features2 }] : features2;
      return [];
    });
    return () => {
      var _a2, _b2, _c;
      return h$4("main", {
        class: ["home project", { pure: pure.value }],
        id: "main-content",
        "aria-labelledby": frontmatter.value.heroText === null ? void 0 : "main-title"
      }, [
        (_a2 = slots["top"]) == null ? void 0 : _a2.call(slots),
        h$4(HeroInfo),
        features.value.map(({ header = "", items }, index2) => h$4(DropTransition, { appear: true, delay: 0.16 + index2 * 0.08 }, () => h$4(FeaturePanel, { header, items }))),
        (_b2 = slots["center"]) == null ? void 0 : _b2.call(slots),
        h$4(DropTransition, { appear: true, delay: 0.16 + features.value.length * 0.08 }, () => h$4(MarkdownContent)),
        (_c = slots["bottom"]) == null ? void 0 : _c.call(slots)
      ]);
    };
  }
});
const getAncestorLinks = (route, routeLocale) => {
  const routePaths = route.path.replace(routeLocale, "/").split("/");
  const links = [];
  let link = removeEndingSlash(routeLocale);
  routePaths.forEach((element, index2) => {
    if (index2 !== routePaths.length - 1) {
      link += `${element}/`;
      links.push(link);
    } else if (element !== "") {
      link += element;
      links.push(link);
    }
  });
  return links;
};
const breadcrumb = "";
const BreadCrumb = defineComponent({
  name: "BreadCrumb",
  setup() {
    const router = useRouter$1();
    const route = useRoute$1();
    const routeLocale = useRouteLocale();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const config2 = ref([]);
    const enable = computed(() => {
      return (frontmatter.value.breadcrumb || frontmatter.value.breadcrumb !== false && themeLocale.value.breadcrumb !== false) && config2.value.length > 1;
    });
    const iconEnable = computed(() => frontmatter.value.breadcrumbIcon || frontmatter.value.breadcrumbIcon !== false && themeLocale.value.breadcrumbIcon !== false);
    const getBreadCrumbConfig = () => {
      const routes = router.getRoutes();
      const breadcrumbConfig = getAncestorLinks(route, routeLocale.value).map((link) => {
        const route2 = routes.find((route3) => route3.path === link);
        if (route2) {
          const { meta, path } = Ot(router, route2.path);
          const title = meta[
            "s"
            /* ArticleInfoType.shortTitle */
          ] || meta[
            "t"
            /* ArticleInfoType.title */
          ];
          if (title)
            return {
              title,
              icon: meta[
                "i"
                /* ArticleInfoType.icon */
              ],
              path
            };
        }
        return null;
      }).filter((item) => item !== null);
      if (breadcrumbConfig.length > 1)
        config2.value = breadcrumbConfig;
    };
    onMounted(() => {
      void getBreadCrumbConfig();
      watch(() => route.path, getBreadCrumbConfig);
    });
    return () => h$4("nav", { class: ["breadcrumb", { disable: !enable.value }] }, enable.value ? h$4("ol", {
      vocab: "https://schema.org/",
      typeof: "BreadcrumbList"
    }, config2.value.map((item, index2) => h$4("li", {
      class: { "is-active": config2.value.length - 1 === index2 },
      property: "itemListElement",
      typeof: "ListItem"
    }, [
      h$4(RouterLink$1, {
        to: item.path,
        property: "item",
        typeof: "WebPage"
      }, () => [
        // icon
        iconEnable.value ? h$4(Icon, { icon: item.icon }) : null,
        // text
        h$4("span", { property: "name" }, item.title || "Unknown")
      ]),
      // meta
      h$4("meta", { property: "position", content: index2 + 1 })
    ]))) : []);
  }
});
const pageNav = "";
const resolveFromFrontmatterConfig = (conf) => {
  if (conf === false)
    return false;
  if (isString$1(conf))
    return useAutoLink(conf, true);
  if (isPlainObject(conf))
    return conf;
  return null;
};
const resolveFromSidebarItems = (sidebarItems, currentPath, offset) => {
  const index2 = sidebarItems.findIndex((item) => item.link === currentPath);
  if (index2 !== -1) {
    const targetItem = sidebarItems[index2 + offset];
    if (!(targetItem == null ? void 0 : targetItem.link))
      return null;
    return targetItem;
  }
  for (const item of sidebarItems)
    if (item.children) {
      const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
      if (childResult)
        return childResult;
    }
  return null;
};
const PageNav = defineComponent({
  name: "PageNav",
  setup() {
    const themeLocale = useThemeLocaleData();
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = useRoute$1();
    const navigate = useNavigate();
    const prevNavLink = computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      return prevConfig === false ? null : prevConfig || (themeLocale.value.prevLink === false ? null : resolveFromSidebarItems(sidebarItems.value, route.path, -1));
    });
    const nextNavLink = computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      return nextConfig === false ? null : nextConfig || (themeLocale.value.nextLink === false ? null : resolveFromSidebarItems(sidebarItems.value, route.path, 1));
    });
    useEventListener("keydown", (event) => {
      if (event.altKey) {
        if (event.key === "ArrowRight") {
          if (nextNavLink.value) {
            navigate(nextNavLink.value.link);
            event.preventDefault();
          }
        } else if (event.key === "ArrowLeft") {
          if (prevNavLink.value) {
            navigate(prevNavLink.value.link);
            event.preventDefault();
          }
        }
      }
    });
    return () => prevNavLink.value || nextNavLink.value ? h$4("nav", { class: "page-nav" }, [
      prevNavLink.value ? h$4(AutoLink, { class: "prev", config: prevNavLink.value }, () => {
        var _a2, _b2;
        return [
          h$4("div", { class: "hint" }, [
            h$4("span", { class: "arrow start" }),
            themeLocale.value.metaLocales.prev
          ]),
          h$4("div", { class: "link" }, [
            h$4(Icon, {
              icon: (_a2 = prevNavLink.value) == null ? void 0 : _a2.icon
            }),
            (_b2 = prevNavLink.value) == null ? void 0 : _b2.text
          ])
        ];
      }) : null,
      nextNavLink.value ? h$4(AutoLink, { class: "next", config: nextNavLink.value }, () => {
        var _a2, _b2;
        return [
          h$4("div", { class: "hint" }, [
            themeLocale.value.metaLocales.next,
            h$4("span", { class: "arrow end" })
          ]),
          h$4("div", { class: "link" }, [
            (_a2 = nextNavLink.value) == null ? void 0 : _a2.text,
            h$4(Icon, {
              icon: (_b2 = nextNavLink.value) == null ? void 0 : _b2.icon
            })
          ])
        ];
      }) : null
    ]) : null;
  }
});
const AuthorIcon = () => h$4(R$1, { name: "author" }, () => h$4("path", {
  d: "M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"
}));
AuthorIcon.displayName = "AuthorIcon";
const CalendarIcon = () => h$4(R$1, { name: "calendar" }, () => h$4("path", {
  d: "M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"
}));
CalendarIcon.displayName = "CalendarIcon";
const CategoryIcon$1 = () => h$4(R$1, { name: "category" }, () => h$4("path", {
  d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"
}));
CategoryIcon$1.displayName = "CategoryIcon";
const EyeIcon = () => h$4(R$1, { name: "eye" }, () => h$4("path", {
  d: "M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"
}));
EyeIcon.displayName = "EyeIcon";
const FireIcon = () => h$4(R$1, { name: "fire" }, () => h$4("path", {
  d: "M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"
}));
FireIcon.displayName = "FireIcon";
const PrintIcon = () => h$4(R$1, { name: "print" }, () => h$4("path", {
  d: "M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"
}));
PrintIcon.displayName = "PrintIcon";
const TagIcon$1 = () => h$4(R$1, { name: "tag" }, () => h$4("path", {
  d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"
}));
TagIcon$1.displayName = "TagIcon";
const TimerIcon = () => h$4(R$1, { name: "timer" }, () => h$4("path", {
  d: "M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"
}));
TimerIcon.displayName = "TimerIcon";
const WordIcon = () => h$4(R$1, { name: "word" }, () => [
  h$4("path", {
    d: "M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"
  }),
  h$4("path", {
    d: "M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"
  })
]);
WordIcon.displayName = "WordIcon";
const useMetaLocale = () => {
  const themeLocale = useThemeLocaleData();
  return computed(() => themeLocale.value.metaLocales);
};
const readingTimeLocales = { "/": { "word": "约 $word 字", "less1Minute": "小于 1 分钟", "time": "大约 $time 分钟" } };
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const repoType = me(docsRepo);
  let pattern;
  if (editLinkPattern)
    pattern = editLinkPattern;
  else if (repoType !== null)
    pattern = editLinkPatterns[repoType];
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const useEditLink = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    const { repo, docsRepo = repo, docsBranch = "main", docsDir = "", editLink, editLinkPattern = "" } = themeLocale.value;
    const showEditLink = frontmatter.value.editLink ?? editLink ?? true;
    if (!showEditLink)
      return null;
    if (!docsRepo)
      return null;
    const link = resolveEditLink({
      docsRepo,
      docsBranch,
      docsDir,
      editLinkPattern,
      filePathRelative: page2.value.filePathRelative
    });
    if (!link)
      return null;
    return {
      text: themeLocale.value.metaLocales.editLink,
      link
    };
  });
};
const useUpdateTime = () => {
  const siteLocale = useSiteLocaleData();
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    var _a2, _b2;
    const showLastUpdated = frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true;
    if (!showLastUpdated)
      return null;
    if (!((_a2 = page2.value.git) == null ? void 0 : _a2.updatedTime))
      return null;
    const updatedDate = new Date((_b2 = page2.value.git) == null ? void 0 : _b2.updatedTime);
    return updatedDate.toLocaleString(siteLocale.value.lang);
  });
};
const useContributors = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    var _a2;
    const showContributors = frontmatter.value.contributors ?? themeLocale.value.contributors ?? true;
    if (!showContributors)
      return null;
    return ((_a2 = page2.value.git) == null ? void 0 : _a2.contributors) ?? null;
  });
};
const authorInfo = "";
const AuthorInfo = defineComponent({
  name: "AuthorInfo",
  inheritAttrs: false,
  props: {
    /**
     * Author information
     *
     * 作者信息
     */
    author: {
      type: Array,
      required: true
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    return () => props.author.length ? h$4("span", {
      class: "page-author-info",
      "aria-label": `${metaLocale.value.author}${props.pure ? "" : "🖊"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h$4(AuthorIcon),
      h$4("span", props.author.map((item) => item.url ? h$4("a", {
        class: "page-author-item",
        href: item.url,
        target: "_blank",
        rel: "noopener noreferrer"
      }, item.name) : h$4("span", { class: "page-author-item" }, item.name))),
      h$4("span", {
        property: "author",
        content: props.author.map((item) => item.name).join(", ")
      })
    ]) : null;
  }
});
const categoryInfo = "";
const CategoryInfo = defineComponent({
  name: "CategoryInfo",
  inheritAttrs: false,
  props: {
    /**
     * Category information
     *
     * 分类信息
     */
    category: {
      type: Array,
      required: true
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const router = useRouter$1();
    const route = useRoute$1();
    const metaLocale = useMetaLocale();
    const navigate = (event, path = "") => {
      if (path && route.path !== path) {
        event.preventDefault();
        void router.push(path);
      }
    };
    return () => props.category.length ? h$4("span", {
      class: "page-category-info",
      "aria-label": `${metaLocale.value.category}${props.pure ? "" : "🌈"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h$4(CategoryIcon$1),
      ...props.category.map(({ name, path }) => h$4("span", {
        class: [
          "page-category-item",
          {
            // TODO: magic number 9 is tricky here
            [`category${Zt(name, 9)}`]: !props.pure,
            clickable: path
          }
        ],
        role: path ? "navigation" : "",
        onClick: (event) => navigate(event, path)
      }, name)),
      h$4("meta", {
        property: "articleSection",
        content: props.category.map(({ name }) => name).join(",")
      })
    ]) : null;
  }
});
const DateInfo = defineComponent({
  name: "DateInfo",
  inheritAttrs: false,
  props: {
    /**
     * Date information
     *
     * 日期信息
     */
    date: {
      type: Object,
      default: null
    },
    /**
     * Localized date text
     *
     * 本地化的日期文字
     */
    localizedDate: {
      type: String,
      default: ""
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const lang = usePageLang();
    const metaLocale = useMetaLocale();
    return () => {
      var _a2, _b2;
      return props.date ? h$4("span", {
        class: "page-date-info",
        "aria-label": `${metaLocale.value.date}${props.pure ? "" : "📅"}`,
        ...props.pure ? {} : { "data-balloon-pos": "down" }
      }, [
        h$4(CalendarIcon),
        h$4("span", h$4(ClientOnly, () => {
          var _a3;
          return props.localizedDate || ((_a3 = props.date.value) == null ? void 0 : _a3.toLocaleDateString(lang.value));
        })),
        h$4("meta", {
          property: "datePublished",
          // ISO Format Date string
          content: ((_b2 = (_a2 = props.date) == null ? void 0 : _a2.value) == null ? void 0 : _b2.toISOString()) || ""
        })
      ]) : null;
    };
  }
});
defineComponent({
  name: "PageViewInfo",
  inheritAttrs: false,
  props: {
    /**
     * Whether show pageview and it's path
     *
     * 是否显示浏览量以及其路径
     */
    pageview: {
      type: [Boolean, String],
      default: false
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const route = useRoute$1();
    const metaLocale = useMetaLocale();
    const pageViews = ref(0);
    const getCount = () => {
      const countElement = document.querySelector(".waline-pageview-count");
      if (countElement) {
        const count = countElement.textContent;
        if (count && !isNaN(Number(count)))
          pageViews.value = Number(count);
        else
          setTimeout(getCount, 500);
      }
    };
    onMounted(() => {
      setTimeout(getCount, 1500);
    });
    watch(() => [route.path, route.query], () => {
      setTimeout(getCount, 500);
    });
    return () => props.pageview ? h$4("span", {
      class: "page-pageview-info",
      "aria-label": `${metaLocale.value.views}${props.pure ? "" : "🔢"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h$4(pageViews.value < 1e3 ? EyeIcon : FireIcon),
      h$4("span", {
        class: "waline-pageview-count",
        /** visitorID */
        "data-path": isString$1(props.pageview) ? props.pageview : withBase(route.path)
      }, "...")
    ]) : null;
  }
});
const ReadingTimeInfo = defineComponent({
  name: "ReadingTimeInfo",
  inheritAttrs: false,
  props: {
    /**
     * Reading time information
     *
     * 阅读时间信息
     */
    readingTime: {
      type: Object,
      default: () => null
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    const readingTimeLocale = Yt(readingTimeLocales);
    const readingTime = computed(() => {
      if (!props.readingTime)
        return null;
      const { minutes } = props.readingTime;
      return minutes < 1 ? { text: readingTimeLocale.value.less1Minute, time: "PT1M" } : {
        text: readingTimeLocale.value.time.replace("$time", Math.round(minutes).toString()),
        time: `PT${Math.round(minutes)}M`
      };
    });
    return () => readingTime.value ? h$4("span", {
      class: "page-reading-time-info",
      "aria-label": `${metaLocale.value.readingTime}${props.pure ? "" : "⌛"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h$4(TimerIcon),
      h$4("span", readingTime.value.text),
      h$4("meta", {
        property: "timeRequired",
        content: readingTime.value.time
      })
    ]) : null;
  }
});
const tagInfo = "";
const TagInfo = defineComponent({
  name: "TagInfo",
  inheritAttrs: false,
  props: {
    /**
     * Tag information
     *
     * 标签信息
     */
    tag: {
      type: Array,
      default: () => []
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const router = useRouter$1();
    const route = useRoute$1();
    const metaLocale = useMetaLocale();
    const navigate = (event, path = "") => {
      if (path && route.path !== path) {
        event.preventDefault();
        void router.push(path);
      }
    };
    return () => props.tag.length ? h$4("span", {
      class: "page-tag-info",
      "aria-label": `${metaLocale.value.tag}${props.pure ? "" : "🏷"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h$4(TagIcon$1),
      ...props.tag.map(({ name, path }) => h$4("span", {
        class: [
          "page-tag-item",
          {
            // TODO: magic number 9 is tricky here
            [`tag${Zt(name, 9)}`]: !props.pure,
            clickable: path
          }
        ],
        role: path ? "navigation" : "",
        onClick: (event) => navigate(event, path)
      }, name)),
      h$4("meta", {
        property: "keywords",
        content: props.tag.map(({ name }) => name).join(",")
      })
    ]) : null;
  }
});
const originalInfo = "";
const OriginalInfo = defineComponent({
  name: "OriginalInfo",
  inheritAttrs: false,
  props: {
    /**
     * Whether the article is original
     *
     * 文章是否是原创
     */
    isOriginal: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    return () => props.isOriginal ? h$4("span", { class: "page-original-info" }, metaLocale.value.origin) : null;
  }
});
const WordInfo = defineComponent({
  name: "ReadTimeInfo",
  inheritAttrs: false,
  props: {
    /**
     * Reading time information
     *
     * 阅读时间信息
     */
    readingTime: {
      type: Object,
      default: () => null
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    const readingTimeLocale = Yt(readingTimeLocales);
    const words = computed(() => {
      var _a2;
      return (_a2 = props.readingTime) == null ? void 0 : _a2.words.toString();
    });
    const wordText = computed(() => readingTimeLocale.value.word.replace("$word", words.value || ""));
    return () => words.value ? h$4("span", {
      class: "page-word-info",
      "aria-label": `${metaLocale.value.words}${props.pure ? "" : "🔠"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h$4(WordIcon),
      h$4("span", wordText.value),
      h$4("meta", {
        property: "wordCount",
        content: words.value
      })
    ]) : null;
  }
});
const pageInfo = "";
const PageInfo = defineComponent({
  name: "PageInfo",
  components: {
    AuthorInfo,
    CategoryInfo,
    DateInfo,
    OriginalInfo,
    PageViewInfo: () => null,
    ReadingTimeInfo,
    TagInfo,
    WordInfo
  },
  props: {
    /**
     * Article information to display
     *
     * 待展示的文章信息
     */
    items: {
      type: [Array, Boolean],
      default: () => [
        "Author",
        "Original",
        "Date",
        "PageView",
        "ReadingTime",
        "Category",
        "Tag"
      ]
    },
    /**
     * Article information
     *
     * 文章信息配置
     */
    info: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const pure = usePure();
    return () => props.items ? h$4("div", { class: "page-info" }, props.items.map((item) => h$4(resolveComponent(`${item}Info`), {
      ...props.info,
      pure: pure.value
    }))) : null;
  }
});
const pageTitle = "";
const PageTitle = defineComponent({
  name: "PageTitle",
  setup() {
    const page2 = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const { info, items } = usePageInfo();
    return () => h$4("div", { class: "page-title" }, [
      h$4("h1", [
        themeLocale.value.titleIcon === false ? null : h$4(Icon, { icon: frontmatter.value.icon }),
        page2.value.title
      ]),
      h$4(PageInfo, {
        info: info.value,
        ...items.value === null ? {} : { items: items.value }
      }),
      h$4("hr")
    ]);
  }
});
const EditIcon = () => h$4(R$1, { name: "edit" }, () => [
  h$4("path", {
    d: "M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"
  }),
  h$4("path", {
    d: "M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"
  })
]);
EditIcon.displayName = "EditIcon";
const pageMeta = "";
const PageMeta = defineComponent({
  name: "PageMeta",
  setup() {
    const themeLocale = useThemeLocaleData();
    const editLink = useEditLink();
    const updateTime = useUpdateTime();
    const contributors = useContributors();
    return () => {
      const { metaLocales } = themeLocale.value;
      return h$4("footer", { class: "page-meta" }, [
        editLink.value ? h$4("div", { class: "meta-item edit-link" }, h$4(AutoLink, { class: "label", config: editLink.value }, { before: () => h$4(EditIcon) })) : null,
        h$4("div", { class: "meta-item git-info" }, [
          updateTime.value ? h$4("div", { class: "update-time" }, [
            h$4("span", { class: "label" }, `${metaLocales.lastUpdated}: `),
            h$4(ClientOnly, () => h$4("span", { class: "info" }, updateTime.value))
          ]) : null,
          contributors.value && contributors.value.length ? h$4("div", { class: "contributors" }, [
            h$4("span", { class: "label" }, `${metaLocales.contributors}: `),
            contributors.value.map(({ email, name }, index2) => [
              h$4("span", { class: "contributor", title: `email: ${email}` }, name),
              index2 !== contributors.value.length - 1 ? "," : ""
            ])
          ]) : null
        ])
      ]);
    };
  }
});
const printButton = "";
const PrintButton = defineComponent({
  name: "PrintButton",
  setup() {
    const themeData2 = useThemeData();
    return () => themeData2.value.print === false ? null : h$4("button", {
      class: "print-button",
      title: "print",
      onClick: () => {
        window.print();
      }
    }, h$4(PrintIcon));
  }
});
const toc = "";
const renderHeader = ({ title, level, slug }) => h$4(RouterLink$1, {
  to: `#${slug}`,
  class: ["toc-link", `level${level}`]
}, () => title);
const renderChildren = (headers, headerDepth) => {
  const route = useRoute$1();
  return headers.length && headerDepth > 0 ? h$4("ul", { class: "toc-list" }, headers.map((header) => [
    h$4("li", {
      class: [
        "toc-item",
        { active: he(route, `#${header.slug}`) }
      ]
    }, renderHeader(header)),
    renderChildren(header.children, headerDepth - 1)
  ])) : null;
};
const TOC = defineComponent({
  name: "TOC",
  props: {
    /**
     * TOC items config
     *
     * TOC 项目配置
     */
    items: {
      type: Array,
      default: () => []
    },
    /**
     * Max header nesting depth
     *
     * 最大的标题嵌套深度
     */
    headerDepth: {
      type: Number,
      default: 2
    }
  },
  setup(props) {
    const route = useRoute$1();
    const page2 = usePageData();
    const metaLocale = useMetaLocale();
    const toc2 = ref();
    const scrollTo = (top) => {
      var _a2;
      (_a2 = toc2.value) == null ? void 0 : _a2.scrollTo({ top, behavior: "smooth" });
    };
    onMounted(() => {
      watch(() => route.hash, (hash) => {
        if (toc2.value) {
          const activeTocItem = document.querySelector(`#toc a.toc-link[href$="${hash}"]`);
          if (!activeTocItem)
            return;
          const { top: tocTop, height: tocHeight } = toc2.value.getBoundingClientRect();
          const { top: activeTocItemTop, height: activeTocItemHeight } = activeTocItem.getBoundingClientRect();
          if (activeTocItemTop < tocTop)
            scrollTo(toc2.value.scrollTop + activeTocItemTop - tocTop);
          else if (activeTocItemTop + activeTocItemHeight > tocTop + tocHeight)
            scrollTo(toc2.value.scrollTop + activeTocItemTop + activeTocItemHeight - tocTop - tocHeight);
        }
      });
    });
    return () => {
      const tocHeaders = props.items.length ? renderChildren(props.items, props.headerDepth) : page2.value.headers ? renderChildren(page2.value.headers, props.headerDepth) : null;
      return tocHeaders ? h$4("div", { class: "toc-place-holder" }, [
        h$4("aside", { id: "toc" }, [
          h$4("div", { class: "toc-header" }, [
            metaLocale.value.toc,
            h$4(PrintButton)
          ]),
          h$4("div", { class: "toc-wrapper", ref: toc2 }, [tocHeaders])
        ])
      ]) : null;
    };
  }
});
const page$1 = "";
const NormalPage = defineComponent({
  name: "NormalPage",
  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter();
    const { isDarkmode } = useDarkmode();
    const themeLocale = useThemeLocaleData();
    const tocEnable = computed(() => frontmatter.value.toc || frontmatter.value.toc !== false && themeLocale.value.toc !== false);
    return () => h$4("main", { class: "page", id: "main-content" }, h$4(Ht("LocalEncrypt") ? resolveComponent("LocalEncrypt") : kt, () => {
      var _a2, _b2, _c, _d;
      return [
        (_a2 = slots["top"]) == null ? void 0 : _a2.call(slots),
        h$4(BreadCrumb),
        h$4(PageTitle),
        tocEnable.value ? h$4(TOC, {
          headerDepth: frontmatter.value.headerDepth ?? themeLocale.value.headerDepth ?? 2
        }) : null,
        (_b2 = slots["contentBefore"]) == null ? void 0 : _b2.call(slots),
        h$4(MarkdownContent),
        (_c = slots["contentAfter"]) == null ? void 0 : _c.call(slots),
        h$4(PageMeta),
        h$4(PageNav),
        Ht("CommentService") ? h$4(resolveComponent("CommentService"), {
          darkmode: isDarkmode.value
        }) : null,
        (_d = slots["bottom"]) == null ? void 0 : _d.call(slots)
      ];
    }));
  }
});
const fadeSlideY = "";
const FadeSlideY = defineComponent({
  name: "FadeSlideY",
  setup(_props, { slots }) {
    const scrollPromise2 = useScrollPromise();
    const onBeforeEnter = scrollPromise2.resolve;
    const onBeforeLeave = scrollPromise2.pending;
    return () => h$4(Transition, {
      name: "fade-slide-y",
      mode: "out-in",
      onBeforeEnter,
      onBeforeLeave
    }, () => {
      var _a2;
      return (_a2 = slots["default"]) == null ? void 0 : _a2.call(slots);
    });
  }
});
const skipLink = "";
const SkipLink = defineComponent({
  name: "SkipLink",
  props: {
    /** @description Content ID */
    content: {
      type: String,
      default: "main-content"
    }
  },
  setup(props) {
    const route = useRoute$1();
    const themeLocale = useThemeLocaleData();
    const skipToMainContent = ref();
    const focusMainContent = ({ target }) => {
      const el = document.querySelector(target.hash);
      if (el) {
        const removeTabIndex = () => {
          el.removeAttribute("tabindex");
          el.removeEventListener("blur", removeTabIndex);
        };
        el.setAttribute("tabindex", "-1");
        el.addEventListener("blur", removeTabIndex);
        el.focus();
        window.scrollTo(0, 0);
      }
    };
    onMounted(() => {
      watch(() => route.path, () => skipToMainContent.value.focus());
    });
    return () => [
      h$4("span", {
        ref: skipToMainContent,
        tabindex: "-1"
      }),
      h$4("a", {
        href: `#${props.content}`,
        class: "skip-link sr-only",
        onClick: focusMainContent
      }, themeLocale.value.routeLocales.skipToContent)
    ];
  }
});
const Layout = defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Layout",
  setup() {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    const page2 = usePageData();
    const frontmatter = usePageFrontmatter();
    const { isMobile } = useWindowSize();
    const sidebarDisplay = computed(
      () => {
        var _a2, _b2;
        return ((_a2 = themeLocale.value.blog) == null ? void 0 : _a2.sidebarDisplay) || ((_b2 = themeData2.value.blog) == null ? void 0 : _b2.sidebarDisplay) || "mobile";
      }
    );
    return () => [
      h$4(SkipLink),
      h$4(CommonWrapper, {}, {
        default: () => frontmatter.value.home ? h$4(HomePage) : h$4(FadeSlideY, () => h$4(NormalPage, { key: page2.value.path })),
        ...sidebarDisplay.value !== "none" ? { navScreenBottom: () => h$4(resolveComponent("BloggerInfo")) } : {},
        ...!isMobile.value && sidebarDisplay.value === "always" ? { sidebar: () => h$4(resolveComponent("BloggerInfo")) } : {}
      })
    ];
  }
});
const notFoundHint = "";
const NotFoundHint = defineComponent({
  name: "NotFoundHint",
  setup() {
    const themeLocale = useThemeLocaleData();
    const getMsg = () => {
      const messages = themeLocale.value.routeLocales["notFoundMsg"];
      return messages[Math.floor(Math.random() * messages.length)];
    };
    return () => h$4("div", { class: "not-found-hint" }, [
      h$4("p", { class: "error-code" }, "404"),
      h$4("h1", { class: "error-title" }, themeLocale.value.routeLocales["notFoundTitle"]),
      h$4("p", { class: "error-hint" }, getMsg())
    ]);
  }
});
const notFound = "";
const NotFound = defineComponent({
  name: "NotFound",
  setup(_props, { slots }) {
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const { navigate } = useLink$1({
      to: themeLocale.value.home ?? routeLocale.value
    });
    return () => [
      h$4(SkipLink),
      h$4(CommonWrapper, { noSidebar: true }, () => {
        var _a2;
        return h$4("main", { class: "page not-found", id: "main-content" }, ((_a2 = slots["default"]) == null ? void 0 : _a2.call(slots)) || [
          h$4(NotFoundHint),
          h$4("div", { class: "actions" }, [
            h$4("button", {
              class: "action-button",
              onClick: () => {
                window.history.go(-1);
              }
            }, themeLocale.value.routeLocales.back),
            h$4("button", { class: "action-button", onClick: () => navigate() }, themeLocale.value.routeLocales.home)
          ])
        ]);
      })
    ];
  }
});
const index = "";
const icons = { "GitHub": '<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>' };
const categoryMap = { "category": { "/": { "path": "/category/", "map": {} } }, "tag": { "/": { "path": "/tag/", "map": {} } } };
const typeMap = { "article": { "/": { "path": "/article/", "keys": ["v-0ec8fb2a", "v-7b4fe6f4", "v-184f4da6", "v-687eeb1a", "v-2ce88be4", "v-2a6ef733", "v-62e8e475", "v-ed5b4fbe", "v-5eabaff1", "v-c5ea9104", "v-20b61768", "v-68a1d3a7", "v-6742941a", "v-a67cdd4c", "v-73358dfa", "v-c341ed9c", "v-1f21b52a", "v-2a6b0260", "v-68b2b365", "v-8b00529c", "v-db3b8e32", "v-417f036a", "v-640f9dee", "v-4b7131b0", "v-0a3e262b", "v-ce6345e0", "v-61c606ba", "v-0b88481a", "v-37a57d9f", "v-36c6d27b", "v-0a39012e", "v-70d1a412", "v-b16f5fc6", "v-6795f498", "v-1bdc6284", "v-925b3b1a", "v-09c2bb22", "v-43a90af2", "v-1e7178c0", "v-4192394a", "v-1e5b26d9", "v-42badac9", "v-444987b6", "v-6901a767", "v-cc5e397e", "v-1d9b7dc0", "v-ce4f1900", "v-e0a87c6e", "v-77797307", "v-2ab47c70", "v-102063fb", "v-5bd6fcb6", "v-21de64b9", "v-024a88b8", "v-5a97986f", "v-31fe5478", "v-1fc1e26c", "v-1b49a928", "v-71031c10", "v-5ec61931", "v-3e882234", "v-d2452084", "v-caede9ae", "v-31e2d74b", "v-2ce62492", "v-6012c088", "v-2b3b3850", "v-31f424c2", "v-2009c8b6", "v-5bb40ee2", "v-0195f72f", "v-08636197", "v-62407bf4", "v-fb4efdd4", "v-42a677d8", "v-d9e213d4", "v-e23fa3cc", "v-78000d0c", "v-0fc2c1e2"] } }, "star": { "/": { "path": "/star/", "keys": [] } }, "timeline": { "/": { "path": "/timeline/", "keys": ["v-0ec8fb2a", "v-7b4fe6f4", "v-184f4da6", "v-687eeb1a", "v-2ce88be4", "v-2a6ef733", "v-62e8e475", "v-ed5b4fbe", "v-5eabaff1", "v-c5ea9104", "v-20b61768", "v-68a1d3a7", "v-6742941a", "v-a67cdd4c", "v-73358dfa", "v-c341ed9c", "v-1f21b52a", "v-2a6b0260", "v-68b2b365", "v-8b00529c", "v-db3b8e32", "v-417f036a", "v-640f9dee", "v-4b7131b0", "v-0a3e262b", "v-ce6345e0", "v-61c606ba", "v-0b88481a", "v-37a57d9f", "v-36c6d27b", "v-0a39012e", "v-70d1a412", "v-b16f5fc6", "v-6795f498", "v-1bdc6284", "v-925b3b1a", "v-09c2bb22", "v-43a90af2", "v-1e7178c0", "v-4192394a", "v-1e5b26d9", "v-42badac9", "v-444987b6", "v-6901a767", "v-cc5e397e", "v-1d9b7dc0", "v-ce4f1900", "v-e0a87c6e", "v-77797307", "v-2ab47c70", "v-102063fb", "v-5bd6fcb6", "v-21de64b9", "v-024a88b8", "v-5a97986f", "v-31fe5478", "v-1fc1e26c", "v-1b49a928", "v-71031c10", "v-5ec61931", "v-3e882234", "v-d2452084", "v-caede9ae", "v-31e2d74b", "v-2ce62492", "v-6012c088", "v-2b3b3850", "v-31f424c2", "v-2009c8b6", "v-5bb40ee2", "v-0195f72f", "v-08636197", "v-62407bf4", "v-fb4efdd4", "v-42a677d8", "v-d9e213d4", "v-e23fa3cc", "v-78000d0c", "v-0fc2c1e2"] } } };
const l$1 = ref(categoryMap), k = (e2 = "") => {
  const s2 = useRouter$1(), c2 = useRoute$1(), u2 = useRouteLocale();
  return computed(() => {
    var r2;
    const p2 = e2 || ((r2 = usePageFrontmatter().value.blog) == null ? void 0 : r2.key) || "";
    if (!p2)
      return console.warn("useBlogCategory: key not found"), { path: "/", map: {} };
    const i2 = s2.getRoutes();
    if (!l$1.value[p2])
      throw new Error(`useBlogCategory: key ${p2} is invalid`);
    const n2 = l$1.value[p2][u2.value], o2 = { path: n2.path, map: {} };
    for (const a2 in n2.map) {
      const t2 = n2.map[a2];
      o2.map[a2] = { path: t2.path, items: [] };
      for (const d2 of t2.keys) {
        const f2 = i2.find(({ name: m2 }) => m2 === d2);
        if (f2) {
          const m2 = Ot(s2, f2.path);
          o2.map[a2].items.push({ path: m2.path, info: m2.meta });
        }
      }
      c2.path === t2.path && (o2.currentItems = o2.map[a2].items);
    }
    return o2;
  });
};
const _ = ref(typeMap), C = (e2 = "") => {
  const s2 = useRouter$1(), c2 = useRouteLocale();
  return computed(() => {
    var u2;
    const r2 = e2 || ((u2 = usePageFrontmatter().value.blog) == null ? void 0 : u2.key) || "";
    if (!r2)
      return console.warn("useBlogType: key not found"), { path: "/", items: [] };
    if (!_.value[r2])
      throw new Error(`useBlogType: key ${e2} is invalid`);
    const p2 = s2.getRoutes(), i2 = _.value[r2][c2.value], n2 = { path: i2.path, items: [] };
    for (const o2 of i2.keys) {
      const a2 = p2.find(({ name: t2 }) => t2 === o2);
      if (a2) {
        const t2 = Ot(s2, a2.path);
        n2.items.push({ path: t2.path, info: t2.meta });
      }
    }
    return n2;
  });
};
const categoryMapSymbol = Symbol.for("categoryMap");
const useCategoryMap = () => {
  const categoryMap2 = inject(categoryMapSymbol);
  if (!categoryMap2) {
    throw new Error("useCategoryMap() is called without provider.");
  }
  return categoryMap2;
};
const setupCategoryMap = () => {
  const categoryMap2 = k("category");
  provide(categoryMapSymbol, categoryMap2);
};
const useBlogOptions = () => {
  const themeData2 = useThemeData();
  const themeLocale = useThemeLocaleData();
  return computed(() => ({
    ...themeData2.value.blog,
    ...themeLocale.value.blog
  }));
};
const tagMapSymbol = Symbol.for("tagMap");
const useTagMap = () => {
  const tagMap = inject(tagMapSymbol);
  if (!tagMap) {
    throw new Error("useTagMap() is called without provider.");
  }
  return tagMap;
};
const setupTagMap = () => {
  const tagMap = k("tag");
  provide(tagMapSymbol, tagMap);
};
const useArticleAuthor = (info) => {
  const themeLocale = useThemeLocaleData();
  return computed(() => {
    const { [
      "a"
      /* ArticleInfoType.author */
    ]: author } = info.value;
    if (author)
      return re(author);
    if (author === false)
      return [];
    return re(themeLocale.value.author, false);
  });
};
const useArticleCategory = (info) => {
  const categoryMap2 = useCategoryMap();
  return computed(() => se(info.value[
    "c"
    /* ArticleInfoType.category */
  ]).map((name) => ({
    name,
    path: categoryMap2.value.map[name].path
  })));
};
const useArticleTag = (info) => {
  const tagMap = useTagMap();
  return computed(() => oe(info.value[
    "g"
    /* ArticleInfoType.tag */
  ]).map((name) => ({
    name,
    path: tagMap.value.map[name].path
  })));
};
const useArticleDate = (info) => computed(() => {
  const { [
    "d"
    /* ArticleInfoType.date */
  ]: date } = info.value;
  return date ? st(date) : null;
});
const useArticleInfo = (props) => {
  const articleInfo = toRef(props, "info");
  const blogOptions = useBlogOptions();
  const author = useArticleAuthor(articleInfo);
  const category = useArticleCategory(articleInfo);
  const tag = useArticleTag(articleInfo);
  const date = useArticleDate(articleInfo);
  const info = computed(() => ({
    author: author.value,
    category: category.value,
    date: date.value,
    localizedDate: articleInfo.value[
      "l"
      /* ArticleInfoType.localizedDate */
    ] || "",
    tag: tag.value,
    isOriginal: articleInfo.value[
      "o"
      /* ArticleInfoType.isOriginal */
    ] || false,
    readingTime: articleInfo.value[
      "r"
      /* ArticleInfoType.readingTime */
    ] || null,
    pageview: props.path
  }));
  const items = computed(() => blogOptions.value.articleInfo);
  return { info, items };
};
const articlesSymbol = Symbol.for("articles");
const useArticles = () => {
  const articles = inject(articlesSymbol);
  if (!articles) {
    throw new Error("useArticles() is called without provider.");
  }
  return articles;
};
const setupArticles = () => {
  const articles = C("article");
  provide(articlesSymbol, articles);
};
const starsSymbol = Symbol.for("stars");
const useStars = () => {
  const stars = inject(starsSymbol);
  if (!stars) {
    throw new Error("useStars() is called without provider.");
  }
  return stars;
};
const setupStars = () => {
  const stars = C("star");
  provide(starsSymbol, stars);
};
const timelinesSymbol = Symbol.for("timelines");
const useTimelines = () => {
  const timelines = inject(timelinesSymbol);
  if (!timelines) {
    throw new Error("useTimelines() is called without provider.");
  }
  return timelines;
};
const setupTimelines = () => {
  const timelines = C("timeline");
  const timelineItems2 = computed(() => {
    const timelineItems3 = [];
    timelines.value.items.forEach(({ info, path }) => {
      var _a2;
      const { year, month, day } = ((_a2 = st(info[
        "d"
        /* ArticleInfoType.date */
      ])) == null ? void 0 : _a2.info) || {};
      if (year && month && day) {
        if (!timelineItems3[0] || timelineItems3[0].year !== year)
          timelineItems3.unshift({ year, items: [] });
        timelineItems3[0].items.push({
          date: `${month}/${day}`,
          info,
          path
        });
      }
    });
    return {
      ...timelines.value,
      config: timelineItems3.reverse()
    };
  });
  provide(timelinesSymbol, timelineItems2);
};
const setupBlog = () => {
  setupArticles();
  setupCategoryMap();
  setupStars();
  setupTagMap();
  setupTimelines();
};
const socialMedia = "";
const SocialMedia = defineComponent({
  name: "SocialMedia",
  setup() {
    const blogOptions = useBlogOptions();
    const isPure = usePure();
    const mediaLinks = computed(() => {
      const config2 = blogOptions.value.medias;
      return config2 ? St(config2).map(([media, url]) => ({
        name: media,
        icon: icons[media],
        url
      })) : [];
    });
    return () => mediaLinks.value.length ? h$4("div", { class: "social-media-wrapper" }, mediaLinks.value.map(({ name, icon, url }) => h$4("a", {
      class: "social-media",
      href: url,
      rel: "noopener noreferrer",
      target: "_blank",
      "aria-label": name,
      ...isPure.value ? {} : { "data-balloon-pos": "up" },
      innerHTML: icon
    }))) : null;
  }
});
const bloggerInfo = "";
const BloggerInfo = defineComponent({
  name: "BloggerInfo",
  setup() {
    const blogOptions = useBlogOptions();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const articles = useArticles();
    const categoryMap2 = useCategoryMap();
    const tagMap = useTagMap();
    const timelines = useTimelines();
    const navigate = useNavigate();
    const bloggerName = computed(() => {
      var _a2;
      return blogOptions.value.name || ((_a2 = re(themeLocale.value.author)[0]) == null ? void 0 : _a2.name) || siteLocale.value.title;
    });
    const bloggerAvatar = computed(() => blogOptions.value.avatar || themeLocale.value.logo);
    const locale = computed(() => themeLocale.value.blogLocales);
    const intro = computed(() => blogOptions.value.intro);
    return () => h$4("div", {
      class: "blogger-info",
      vocab: "https://schema.org/",
      typeof: "Person"
    }, [
      h$4("div", {
        class: "blogger",
        ...intro.value ? {
          style: { cursor: "pointer" },
          "aria-label": locale.value.intro,
          "data-balloon-pos": "down",
          role: "navigation",
          onClick: () => navigate(intro.value)
        } : {}
      }, [
        bloggerAvatar.value ? h$4("img", {
          class: [
            "blogger-avatar",
            { round: blogOptions.value.roundAvatar }
          ],
          src: withBase(bloggerAvatar.value),
          property: "image",
          alt: "Blogger Avatar"
        }) : null,
        bloggerName.value ? h$4("div", { class: "blogger-name", property: "name" }, bloggerName.value) : null,
        blogOptions.value.description ? h$4("div", {
          class: "blogger-description",
          innerHTML: blogOptions.value.description
        }) : null,
        intro.value ? h$4("meta", { property: "url", content: withBase(intro.value) }) : null
      ]),
      h$4("div", { class: "num-wrapper" }, [
        h$4("div", { onClick: () => navigate(articles.value.path) }, [
          h$4("div", { class: "num" }, articles.value.items.length),
          h$4("div", locale.value.article)
        ]),
        h$4("div", { onClick: () => navigate(categoryMap2.value.path) }, [
          h$4("div", { class: "num" }, Dt(categoryMap2.value.map).length),
          h$4("div", locale.value.category)
        ]),
        h$4("div", { onClick: () => navigate(tagMap.value.path) }, [
          h$4("div", { class: "num" }, Dt(tagMap.value.map).length),
          h$4("div", locale.value.tag)
        ]),
        h$4("div", { onClick: () => navigate(timelines.value.path) }, [
          h$4("div", { class: "num" }, timelines.value.items.length),
          h$4("div", locale.value.timeline)
        ])
      ]),
      h$4(SocialMedia)
    ]);
  }
});
const CategoryIcon = () => h$4(R$1, { name: "category" }, () => h$4("path", {
  d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"
}));
CategoryIcon.displayName = "CategoryIcon";
const TagIcon = () => h$4(R$1, { name: "tag" }, () => h$4("path", {
  d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"
}));
TagIcon.displayName = "TagIcon";
const TimelineIcon = () => h$4(R$1, { name: "timeline" }, () => h$4("path", {
  d: "M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"
}));
TimelineIcon.displayName = "TimelineIcon";
const SlideIcon = () => h$4(R$1, { name: "slides" }, () => h$4("path", {
  d: "M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"
}));
SlideIcon.displayName = "SlideIcon";
const StickyIcon = () => h$4(R$1, { name: "sticky" }, () => [
  h$4("path", {
    d: "m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"
  })
]);
StickyIcon.displayName = "StickyIcon";
const ArticleIcon = () => h$4(R$1, { name: "article" }, () => h$4("path", {
  d: "M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"
}));
ArticleIcon.displayName = "ArticleIcon";
const BookIcon = () => h$4(R$1, { name: "book" }, () => h$4("path", {
  d: "M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"
}));
BookIcon.displayName = "BookIcon";
const LinkIcon = () => h$4(R$1, { name: "link" }, () => h$4("path", {
  d: "M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"
}));
LinkIcon.displayName = "LinkIcon";
const ProjectIcon = () => h$4(R$1, { name: "project" }, () => h$4("path", {
  d: "M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"
}));
ProjectIcon.displayName = "ProjectIcon";
const FriendIcon = () => h$4(R$1, { name: "friend" }, () => h$4("path", {
  d: "M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"
}));
FriendIcon.displayName = "FriendIcon";
const SlideDownIcon = () => h$4(R$1, { name: "slide-down" }, () => h$4("path", {
  d: "M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"
}));
SlideDownIcon.displayName = "SlideDownIcon";
const emptyIcon = "";
const EmptyIcon = () => h$4("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  // eslint-disable-next-line @typescript-eslint/naming-convention
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  class: "empty-icon",
  viewBox: "0 0 1024 1024",
  innerHTML: '<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'
});
EmptyIcon.displayName = "EmptyIcon";
const LockIcon = () => h$4(R$1, { name: "lock" }, () => h$4("path", {
  d: "M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"
}));
LockIcon.displayName = "LockIcon";
const articleItem = "";
const ArticleItem = defineComponent({
  name: "ArticleItem",
  props: {
    /**
     * Article information
     *
     * 文章信息
     */
    info: {
      type: Object,
      required: true
    },
    /**
     * Article path
     *
     * 文章路径
     */
    path: { type: String, required: true }
  },
  setup(props) {
    const info = toRef(props, "info");
    const { info: articleInfo, items } = useArticleInfo(props);
    return () => h$4("div", { class: "article-item" }, h$4("article", {
      class: "article",
      vocab: "https://schema.org/",
      typeof: "Article"
    }, [
      info.value[
        "u"
        /* ArticleInfoType.sticky */
      ] ? h$4(StickyIcon) : null,
      h$4(RouterLink$1, { to: props.path }, () => [
        h$4("header", { class: "title" }, [
          info.value[
            "n"
            /* ArticleInfoType.isEncrypted */
          ] ? h$4(LockIcon) : null,
          info.value[
            "y"
            /* ArticleInfoType.type */
          ] === "s" ? h$4(SlideIcon) : null,
          h$4("span", { property: "headline" }, info.value[
            "t"
            /* ArticleInfoType.title */
          ]),
          info.value[
            "v"
            /* ArticleInfoType.cover */
          ] ? h$4("meta", {
            property: "image",
            content: withBase(info.value[
              "v"
              /* ArticleInfoType.cover */
            ])
          }) : null
        ])
      ]),
      info.value[
        "e"
        /* ArticleInfoType.excerpt */
      ] ? h$4("div", {
        class: "article-excerpt",
        innerHTML: info.value[
          "e"
          /* ArticleInfoType.excerpt */
        ]
      }) : null,
      h$4("hr", { class: "hr" }),
      h$4(PageInfo, {
        info: articleInfo.value,
        ...items.value ? { items: items.value } : {}
      })
    ]));
  }
});
const pagination = "";
const Pagination = defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pagination",
  props: {
    /**
     * Number of total items
     *
     * 项目总数
     */
    total: { type: Number, default: 10 },
    /**
     * Items per page
     *
     * 每页项目数
     */
    perPage: { type: Number, default: 10 },
    /**
     * Current page number
     *
     * 当前页面
     */
    current: { type: Number, default: 1 }
  },
  emits: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateCurrentPage: (_page) => true
  },
  setup(props, { emit }) {
    let message2;
    const themeLocale = useThemeLocaleData();
    const input = ref("");
    const locale = computed(() => themeLocale.value.paginationLocales);
    const totalPages = computed(() => Math.ceil(props.total / props.perPage));
    const enable = computed(() => Boolean(totalPages.value) && totalPages.value !== 1);
    const displayLeftEllipsis = computed(() => {
      if (totalPages.value < 7)
        return false;
      return props.current > 4;
    });
    const displayRightEllipsis = computed(() => {
      if (totalPages.value < 7)
        return false;
      return props.current < totalPages.value - 3;
    });
    const indexes = computed(() => {
      const { current: currentPage } = props;
      let min = 1;
      let max2 = totalPages.value;
      const arr = [];
      if (totalPages.value >= 7) {
        if (currentPage <= 4 && currentPage < totalPages.value - 3) {
          min = 1;
          max2 = 5;
        } else if (currentPage > 4 && currentPage >= totalPages.value - 3) {
          max2 = totalPages.value;
          min = totalPages.value - 4;
        } else if (totalPages.value > 7) {
          min = currentPage - 2;
          max2 = currentPage + 2;
        }
      }
      for (let i2 = min; i2 <= max2; i2++)
        arr.push(i2);
      return arr;
    });
    const navigate = (page2) => emit("updateCurrentPage", page2);
    const jumpPage = (index2) => {
      const pageNum = parseInt(index2);
      if (pageNum <= totalPages.value && pageNum > 0)
        navigate(pageNum);
      else
        message2.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${locale.value.errorText.replace(/\$page/g, totalPages.value.toString())}`);
    };
    onMounted(() => {
      message2 = new ce();
    });
    return () => h$4("div", { class: "pagination-wrapper" }, enable.value ? h$4("div", { class: "pagination-list" }, [
      h$4("div", { class: "page-number" }, [
        // prev button
        props.current > 1 ? h$4("div", {
          class: "prev",
          role: "navigation",
          unselectable: "on",
          onClick: () => navigate(props.current - 1)
        }, locale.value.prev) : null,
        // left ellipsis
        ...displayLeftEllipsis.value ? [
          h$4("div", {
            role: "navigation",
            onClick: () => navigate(1)
          }, 1),
          h$4("div", { class: "ellipsis" }, "...")
        ] : [],
        // numbers
        ...indexes.value.map((num) => h$4("div", {
          key: num,
          class: { active: props.current === num },
          role: "navigation",
          onClick: () => navigate(num)
        }, num)),
        // right ellipsis
        ...displayRightEllipsis.value ? [
          h$4("div", { class: "ellipsis" }, "..."),
          h$4("div", {
            role: "navigation",
            onClick: () => navigate(totalPages.value)
          }, totalPages.value)
        ] : [],
        // next button
        props.current < totalPages.value ? h$4("div", {
          class: "next",
          role: "navigation",
          unselectable: "on",
          onClick: () => navigate(props.current + 1)
        }, locale.value.next) : null
      ]),
      h$4("div", { class: "navigate-wrapper" }, [
        h$4("label", { for: "navigation-text" }, `${locale.value.navigate}: `),
        h$4("input", {
          id: "navigation-text",
          value: input.value,
          onInput: ({ target }) => {
            input.value = target.value;
          },
          onKeydown: (event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              jumpPage(input.value);
            }
          }
        }),
        h$4("button", {
          class: "navigate",
          role: "navigation",
          title: locale.value.action,
          onClick: () => jumpPage(input.value)
        }, locale.value.action)
      ])
    ]) : []);
  }
});
const articleList = "";
const ArticleList = defineComponent({
  name: "ArticleList",
  props: {
    /**
     * Articles
     *
     * 文章项目
     */
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const route = useRoute$1();
    const router = useRouter$1();
    const blogOptions = useBlogOptions();
    const currentPage = ref(1);
    const articlePerPage = computed(() => blogOptions.value.articlePerPage || 10);
    const currentArticles = computed(() => props.items.slice((currentPage.value - 1) * articlePerPage.value, currentPage.value * articlePerPage.value));
    const updatePage = (page2) => {
      currentPage.value = page2;
      const query = { ...route.query };
      if (query["page"] === page2.toString() || page2 === 1 && !query["page"])
        return;
      if (page2 === 1)
        delete query["page"];
      else
        query["page"] = page2.toString();
      void router.push({ path: route.path, query });
    };
    onMounted(() => {
      const { page: page2 } = route.query;
      updatePage(page2 ? Number(page2) : 1);
      watch(currentPage, () => {
        const distance = document.querySelector("#article-list").getBoundingClientRect().top + window.scrollY;
        setTimeout(() => {
          window.scrollTo(0, distance);
        }, 100);
      });
    });
    return () => h$4("div", { id: "article-list", class: "article-wrapper" }, currentArticles.value.length ? [
      ...currentArticles.value.map(({ info, path }, index2) => h$4(DropTransition, { appear: true, delay: index2 * 0.04 }, () => h$4(ArticleItem, { key: path, info, path }))),
      h$4(Pagination, {
        current: currentPage.value,
        perPage: articlePerPage.value,
        total: props.items.length,
        onUpdateCurrentPage: updatePage
      })
    ] : h$4(EmptyIcon));
  }
});
const categoryList = "";
const CategoryList = defineComponent({
  name: "CategoryList",
  setup() {
    const route = useRoute$1();
    const categoryMap2 = useCategoryMap();
    return () => h$4("ul", { class: "category-list-wrapper" }, St(categoryMap2.value.map).map(([category, { path, items }]) => h$4("li", {
      class: [
        "category",
        // TODO: magic number 9 is tricky here
        `category${Zt(category, 9)}`,
        { active: path === route.path }
      ]
    }, h$4(RouterLink$1, { to: path }, () => [
      category,
      h$4("span", { class: "category-num" }, items.length)
    ]))));
  }
});
const tagList = "";
const TagList = defineComponent({
  name: "TagList",
  setup() {
    const frontmatter = usePageFrontmatter();
    const tagMap = useTagMap();
    const isActive = (name) => {
      var _a2;
      return name === ((_a2 = frontmatter.value.blog) == null ? void 0 : _a2.name);
    };
    return () => h$4("ul", { class: "tag-list-wrapper" }, St(tagMap.value.map).map(([tag, { path, items }]) => h$4("li", {
      class: [
        "tag",
        // TODO: magic number 9 is tricky here
        `tag${Zt(tag, 9)}`,
        { active: isActive(tag) }
      ]
    }, h$4(RouterLink$1, { to: path }, () => [
      tag,
      h$4("span", { class: "tag-num" }, items.length)
    ]))));
  }
});
const timelineList = "";
const TimelineList = defineComponent({
  name: "TimelineList",
  setup() {
    const themeLocale = useThemeLocaleData();
    const timelines = useTimelines();
    const navigate = useNavigate();
    const hint = computed(() => themeLocale.value.blogLocales.timeline);
    return () => h$4("div", { class: "timeline-list-wrapper" }, [
      h$4("div", {
        class: "timeline-list-title",
        onClick: () => navigate(timelines.value.path)
      }, [
        h$4(TimelineIcon),
        h$4("span", { class: "num" }, timelines.value.items.length),
        hint.value
      ]),
      h$4("hr"),
      h$4("div", { class: "timeline-content" }, h$4("ul", { class: "timeline-list" }, timelines.value.config.map(({ year, items }, index2) => h$4(DropTransition, { appear: true, delay: 0.08 * (index2 + 1) }, () => h$4("li", [
        h$4("h3", { class: "timeline-year" }, year),
        h$4("ul", { class: "timeline-year-wrapper" }, items.map(({ date, info, path }) => h$4("li", { class: "timeline-item" }, [
          h$4("span", { class: "timeline-date" }, date),
          h$4(RouterLink$1, {
            class: "timeline-title",
            to: path
          }, () => info[
            "t"
            /* ArticleInfoType.title */
          ])
        ])))
      ])))))
    ]);
  }
});
const infoList = "";
const InfoList = defineComponent({
  name: "InfoList",
  setup() {
    const themeLocale = useThemeLocaleData();
    const articles = useArticles();
    const categoryMap2 = useCategoryMap();
    const categoryNumber = computed(() => Dt(categoryMap2.value.map).length);
    const stars = useStars();
    const tagMap = useTagMap();
    const tagNumber = computed(() => Dt(tagMap.value.map).length);
    const navigate = useNavigate();
    const active = ref("article");
    const locale = computed(() => themeLocale.value.blogLocales);
    const buttons = [
      ["article", ArticleIcon],
      ["category", CategoryIcon],
      ["tag", TagIcon],
      ["timeline", TimelineIcon]
    ];
    return () => h$4("div", { class: "blog-info-list" }, [
      h$4("div", { class: "blog-type-wrapper" }, buttons.map(([key, icon]) => h$4("button", {
        class: "blog-type-button",
        onClick: () => {
          active.value = key;
        }
      }, h$4("div", {
        class: ["icon-wrapper", { active: active.value === key }],
        "aria-label": locale.value[key],
        "data-balloon-pos": "up"
      }, h$4(icon))))),
      h$4(DropTransition, () => (
        // article
        active.value === "article" ? h$4("div", { class: "sticky-article-wrapper" }, [
          h$4("div", {
            class: "title",
            onClick: () => navigate(articles.value.path)
          }, [
            h$4(ArticleIcon),
            h$4("span", { class: "num" }, articles.value.items.length),
            locale.value.article
          ]),
          h$4("hr"),
          h$4("ul", { class: "sticky-article-list" }, stars.value.items.map(({ info, path }, index2) => h$4(DropTransition, { appear: true, delay: 0.08 * (index2 + 1) }, () => h$4("li", { class: "sticky-article" }, h$4(RouterLink$1, { to: path }, () => info[
            "t"
            /* ArticleInfoType.title */
          ])))))
        ]) : active.value === "category" ? h$4("div", { class: "category-wrapper" }, [
          categoryNumber.value ? h$4("div", {
            class: "title",
            onClick: () => navigate(categoryMap2.value.path)
          }, [
            h$4(CategoryIcon),
            h$4("span", { class: "num" }, categoryNumber.value),
            locale.value.category
          ]) : null,
          h$4("hr"),
          h$4(DropTransition, { delay: 0.04 }, () => h$4(CategoryList))
        ]) : active.value === "tag" ? h$4("div", { class: "tag-wrapper" }, [
          tagNumber.value ? h$4("div", {
            class: "title",
            onClick: () => navigate(tagMap.value.path)
          }, [
            h$4(TagIcon),
            h$4("span", { class: "num" }, tagNumber.value),
            locale.value.tag
          ]) : null,
          h$4("hr"),
          h$4(DropTransition, { delay: 0.04 }, () => h$4(TagList))
        ]) : h$4(DropTransition, () => h$4(TimelineList))
      ))
    ]);
  }
});
const page = "";
const BlogWrapper = defineComponent({
  name: "BlogWrapper",
  setup(_props, { slots }) {
    const { isMobile } = useWindowSize();
    return () => [
      h$4(SkipLink),
      h$4(CommonWrapper, { noSidebar: true }, {
        default: () => {
          var _a2;
          return (_a2 = slots["default"]) == null ? void 0 : _a2.call(slots);
        },
        navScreenBottom: () => h$4(BloggerInfo),
        ...isMobile.value ? { sidebar: () => h$4(InfoList) } : {}
      })
    ];
  }
});
const infoPanel = "";
const InfoPanel = () => h$4("aside", { class: "blog-info-wrapper" }, [
  h$4(DropTransition, () => h$4(BloggerInfo)),
  h$4(DropTransition, { delay: 0.04 }, () => h$4(InfoList))
]);
InfoPanel.displayName = "InfoPanel";
const BlogCategory = defineComponent({
  name: "BlogPage",
  components: {
    CategoryList,
    TagList
  },
  setup() {
    const frontmatter = usePageFrontmatter();
    const route = useRoute$1();
    const categoryMap2 = useCategoryMap();
    const tagMap = useTagMap();
    const blogOptions = computed(() => frontmatter.value.blog || {});
    const componentName = computed(() => {
      const { key = "" } = blogOptions.value;
      return key === "category" ? "CategoryList" : key === "tag" ? "TagList" : null;
    });
    const items = computed(() => {
      const { name = "", key = "" } = blogOptions.value;
      return key === "category" ? name ? categoryMap2.value.map[name].items : [] : key === "tag" ? name ? tagMap.value.map[name].items : [] : [];
    });
    return () => h$4(BlogWrapper, () => h$4("div", { class: "page blog" }, h$4("div", { class: "blog-page-wrapper" }, [
      h$4("main", { class: "blog-main", id: "main-content" }, [
        h$4(DropTransition, () => componentName.value ? h$4(resolveComponent(componentName.value)) : null),
        blogOptions.value.name ? h$4(DropTransition, { appear: true, delay: 0.24 }, () => h$4(ArticleList, { key: route.path, items: items.value })) : null
      ]),
      h$4(DropTransition, { delay: 0.16 }, () => h$4(InfoPanel))
    ])));
  }
});
const defaultHeroBgImagePath = "/assets/hero-197a9d2d.jpg";
const blogHero = "";
const BlogHero = defineComponent({
  name: "BlogHero",
  setup() {
    const title = usePageHeadTitle();
    const frontmatter = usePageFrontmatter();
    const hero = ref();
    const heroImage = computed(() => frontmatter.value.heroImage || null);
    const isFullScreen = computed(() => frontmatter.value.heroFullScreen || false);
    const bgImage = computed(() => frontmatter.value.bgImage ? withBase(frontmatter.value.bgImage) : frontmatter.value.bgImage ?? defaultHeroBgImagePath);
    return () => frontmatter.value.hero === false ? null : h$4("div", {
      ref: hero,
      class: [
        "blog-hero",
        {
          fullscreen: isFullScreen.value,
          "no-bg": !bgImage.value
        }
      ]
    }, [
      bgImage.value ? h$4("div", {
        class: "mask",
        style: {
          background: `url(${bgImage.value}) center/cover no-repeat`,
          ...frontmatter.value.bgImageStyle
        }
      }) : null,
      h$4(DropTransition, { appear: true, delay: 0.04 }, () => heroImage.value ? h$4("img", {
        class: "hero-image",
        style: frontmatter.value.heroImageStyle,
        src: withBase(heroImage.value),
        alt: frontmatter.value.heroAlt || "hero image"
      }) : null),
      h$4(DropTransition, { appear: true, delay: 0.08 }, () => frontmatter.value.heroText === false ? null : h$4("h1", frontmatter.value.heroText || title.value)),
      h$4(DropTransition, { appear: true, delay: 0.12 }, () => frontmatter.value.tagline ? h$4("p", {
        class: "description",
        innerHTML: frontmatter.value.tagline
      }) : null),
      isFullScreen.value ? h$4("button", {
        class: "slide-down-button",
        onClick: () => {
          window.scrollTo({
            top: hero.value.clientHeight,
            behavior: "smooth"
          });
        }
      }, [h$4(SlideDownIcon), h$4(SlideDownIcon)]) : null
    ]);
  }
});
const projectPanel = "";
const AVAILABLE_PROJECT_TYPES = [
  "link",
  "article",
  "book",
  "project",
  "friend"
];
const ProjectPanel = defineComponent({
  name: "ProjectPanel",
  components: { ArticleIcon, BookIcon, FriendIcon, LinkIcon, ProjectIcon },
  setup() {
    const frontmatter = usePageFrontmatter();
    const pure = usePure();
    const navigate = useNavigate();
    const renderIcon = (icon = "", alt = "icon") => {
      if (AVAILABLE_PROJECT_TYPES.includes(icon))
        return h$4(resolveComponent(`${icon}-icon`));
      if (isLinkHttp(icon))
        return h$4("img", { src: icon, alt, class: "image" });
      if (ue(icon))
        return h$4("img", { src: withBase(icon), alt, class: "image" });
      return h$4(Icon, { icon });
    };
    return () => {
      var _a2;
      return ((_a2 = frontmatter.value.projects) == null ? void 0 : _a2.length) ? h$4("div", { class: "project-panel" }, frontmatter.value.projects.map(({ icon, link, name, desc }, index2) => h$4("div", {
        class: [
          "project",
          // TODO: magic number 9 is tricky here
          { [`project${index2 % 9}`]: !pure.value }
        ],
        onClick: () => navigate(link)
      }, [
        renderIcon(icon, name),
        h$4("div", { class: "name" }, name),
        h$4("div", { class: "desc" }, desc)
      ]))) : null;
    };
  }
});
const home = "";
const BlogHome$1 = defineComponent({
  name: "BlogHome",
  setup() {
    const articles = useArticles();
    return () => h$4("div", { class: "page blog" }, [
      h$4(BlogHero),
      h$4("div", { class: "blog-page-wrapper" }, [
        h$4("main", { class: "blog-home", id: "main-content" }, [
          h$4(DropTransition, { appear: true, delay: 0.16 }, () => h$4(ProjectPanel)),
          h$4(DropTransition, { appear: true, delay: 0.24 }, () => h$4(ArticleList, { items: articles.value.items }))
        ]),
        h$4(DropTransition, { appear: true, delay: 0.16 }, () => h$4(InfoPanel))
      ]),
      h$4(DropTransition, { appear: true, delay: 0.28 }, () => h$4(MarkdownContent))
    ]);
  }
});
const BlogHome = defineComponent({
  name: "BlogHome",
  setup() {
    return () => h$4(BlogWrapper, () => h$4(BlogHome$1));
  }
});
const articleType = "";
const ArticleType = defineComponent({
  name: "ArticleType",
  setup() {
    const localePath = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const route = useRoute$1();
    const articles = useArticles();
    const stars = useStars();
    const types = computed(() => {
      const locale = themeLocale.value.blogLocales;
      return [
        {
          text: locale.all,
          path: articles.value.path
        },
        { text: locale.star, path: stars.value.path },
        ...[].map(({ key, path }) => ({
          text: locale[key],
          path: path.replace(/^\//, localePath.value)
        }))
      ];
    });
    return () => h$4("ul", { class: "article-type-wrapper" }, types.value.map((type2) => h$4("li", {
      class: ["article-type", { active: type2.path === route.path }]
    }, h$4(RouterLink$1, { to: type2.path }, () => type2.text))));
  }
});
const BlogType = defineComponent({
  name: "BlogPage",
  setup() {
    const blogType = C();
    const frontmatter = usePageFrontmatter();
    const route = useRoute$1();
    const articles = useArticles();
    const stars = useStars();
    const items = computed(() => {
      const { key = "", type: type2 } = frontmatter.value.blog || {};
      return key === "star" ? stars.value.items : type2 === "type" && key ? blogType.value.items : articles.value.items;
    });
    return () => h$4(BlogWrapper, () => h$4("div", { class: "page blog" }, h$4("div", { class: "blog-page-wrapper" }, [
      h$4("main", { class: "blog-main", id: "main-content" }, [
        h$4(DropTransition, () => h$4(ArticleType)),
        h$4(DropTransition, { appear: true, delay: 0.24 }, () => h$4(ArticleList, { key: route.path, items: items.value }))
      ]),
      h$4(DropTransition, { delay: 0.16 }, () => h$4(InfoPanel))
    ])));
  }
});
const timelineItems = "";
const TimelineItems = defineComponent({
  name: "TimelineItems",
  setup() {
    const blogOptions = useBlogOptions();
    const themeLocale = useThemeLocaleData();
    const timelines = useTimelines();
    const hint = computed(() => blogOptions.value.timeline || themeLocale.value.blogLocales.timelineTitle);
    const items = computed(() => timelines.value.config.map(({ year }) => ({
      title: year.toString(),
      level: 2,
      slug: year.toString(),
      children: []
    })));
    return () => h$4("div", { class: "timeline-wrapper" }, h$4("ul", { class: "timeline-content" }, [
      h$4(DropTransition, () => h$4("li", { class: "motto" }, hint.value)),
      h$4(TOC, { items: items.value }),
      ...timelines.value.config.map(({ year, items: items2 }, index2) => h$4(DropTransition, { appear: true, delay: 0.08 * (index2 + 1), type: "group" }, () => [
        h$4("h3", { key: "title", id: year, class: "timeline-year-title" }, h$4("span", year)),
        h$4("li", { key: "content", class: "timeline-year-list" }, [
          h$4("ul", { class: "timeline-year-wrapper" }, items2.map(({ date, info, path }) => h$4("li", { class: "timeline-item" }, [
            h$4("span", { class: "timeline-date" }, date),
            h$4(RouterLink$1, {
              class: "timeline-title",
              to: path
            }, () => info[
              "t"
              /* ArticleInfoType.title */
            ])
          ])))
        ])
      ]))
    ]));
  }
});
const Timeline = defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Timeline",
  components: {
    ArticleType,
    CategoryList,
    TagList
  },
  setup() {
    return () => h$4(BlogWrapper, () => h$4("div", { class: "page blog" }, h$4("div", { class: "blog-page-wrapper" }, [
      h$4("main", { class: "blog-main", id: "main-content" }, [
        h$4(DropTransition, { appear: true, delay: 0.24 }, () => h$4(TimelineItems))
      ]),
      h$4(DropTransition, { delay: 0.16 }, () => h$4(InfoPanel))
    ])));
  }
});
const layout = "";
const passwordModal = "";
const PasswordModal = defineComponent({
  name: "PasswordModal",
  props: {
    /**
     * Whether is fullscreen
     *
     * 是否是全屏
     */
    full: Boolean
  },
  emits: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    verify: (_password, _remember) => true
  },
  setup(props, { emit }) {
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const password = ref("");
    const hasTried = ref(false);
    const remember = ref(false);
    const locale = computed(() => themeLocale.value.encryptLocales);
    let hintHandler = null;
    const verify = () => {
      if (hintHandler)
        clearTimeout(hintHandler);
      hasTried.value = false;
      emit("verify", password.value, remember.value);
      void nextTick().then(() => {
        hasTried.value = true;
        hintHandler = setTimeout(() => {
          hasTried.value = false;
        }, 1e3);
      });
    };
    return () => h$4("div", {
      class: [
        "password-layer",
        { expand: props.full || frontmatter.value["home"] }
      ]
    }, h$4("div", { class: "password-modal" }, [
      h$4("div", { class: ["hint", { tried: hasTried.value }] }, hasTried.value ? locale.value.errorHint : h$4(LockIcon, { "aria-label": locale.value.iconLabel })),
      h$4("div", { class: "password" }, [
        h$4("input", {
          type: "password",
          value: password.value,
          placeholder: locale.value.placeholder,
          onInput: ({ target }) => {
            password.value = target.value;
          },
          onKeydown: ({ key }) => {
            if (key === "Enter")
              verify();
          }
        })
      ]),
      h$4("div", { class: "remember-password" }, [
        h$4("input", {
          type: "checkbox",
          value: remember.value,
          onChange: () => remember.value = !remember.value
        }),
        locale.value.remember
      ]),
      h$4("button", { class: "submit", onClick: () => verify() }, "OK")
    ]));
  }
});
const r = "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), t = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, -1, -1, -1, -1, -1, -1, -1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, -1, -1, -1, -1, -1, -1, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, -1, -1, -1, -1, -1], e = [608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479, 2450970073, 2306472731], n = [3509652390, 2564797868, 805139163, 3491422135, 3101798381, 1780907670, 3128725573, 4046225305, 614570311, 3012652279, 134345442, 2240740374, 1667834072, 1901547113, 2757295779, 4103290238, 227898511, 1921955416, 1904987480, 2182433518, 2069144605, 3260701109, 2620446009, 720527379, 3318853667, 677414384, 3393288472, 3101374703, 2390351024, 1614419982, 1822297739, 2954791486, 3608508353, 3174124327, 2024746970, 1432378464, 3864339955, 2857741204, 1464375394, 1676153920, 1439316330, 715854006, 3033291828, 289532110, 2706671279, 2087905683, 3018724369, 1668267050, 732546397, 1947742710, 3462151702, 2609353502, 2950085171, 1814351708, 2050118529, 680887927, 999245976, 1800124847, 3300911131, 1713906067, 1641548236, 4213287313, 1216130144, 1575780402, 4018429277, 3917837745, 3693486850, 3949271944, 596196993, 3549867205, 258830323, 2213823033, 772490370, 2760122372, 1774776394, 2652871518, 566650946, 4142492826, 1728879713, 2882767088, 1783734482, 3629395816, 2517608232, 2874225571, 1861159788, 326777828, 3124490320, 2130389656, 2716951837, 967770486, 1724537150, 2185432712, 2364442137, 1164943284, 2105845187, 998989502, 3765401048, 2244026483, 1075463327, 1455516326, 1322494562, 910128902, 469688178, 1117454909, 936433444, 3490320968, 3675253459, 1240580251, 122909385, 2157517691, 634681816, 4142456567, 3825094682, 3061402683, 2540495037, 79693498, 3249098678, 1084186820, 1583128258, 426386531, 1761308591, 1047286709, 322548459, 995290223, 1845252383, 2603652396, 3431023940, 2942221577, 3202600964, 3727903485, 1712269319, 422464435, 3234572375, 1170764815, 3523960633, 3117677531, 1434042557, 442511882, 3600875718, 1076654713, 1738483198, 4213154764, 2393238008, 3677496056, 1014306527, 4251020053, 793779912, 2902807211, 842905082, 4246964064, 1395751752, 1040244610, 2656851899, 3396308128, 445077038, 3742853595, 3577915638, 679411651, 2892444358, 2354009459, 1767581616, 3150600392, 3791627101, 3102740896, 284835224, 4246832056, 1258075500, 768725851, 2589189241, 3069724005, 3532540348, 1274779536, 3789419226, 2764799539, 1660621633, 3471099624, 4011903706, 913787905, 3497959166, 737222580, 2514213453, 2928710040, 3937242737, 1804850592, 3499020752, 2949064160, 2386320175, 2390070455, 2415321851, 4061277028, 2290661394, 2416832540, 1336762016, 1754252060, 3520065937, 3014181293, 791618072, 3188594551, 3933548030, 2332172193, 3852520463, 3043980520, 413987798, 3465142937, 3030929376, 4245938359, 2093235073, 3534596313, 375366246, 2157278981, 2479649556, 555357303, 3870105701, 2008414854, 3344188149, 4221384143, 3956125452, 2067696032, 3594591187, 2921233993, 2428461, 544322398, 577241275, 1471733935, 610547355, 4027169054, 1432588573, 1507829418, 2025931657, 3646575487, 545086370, 48609733, 2200306550, 1653985193, 298326376, 1316178497, 3007786442, 2064951626, 458293330, 2589141269, 3591329599, 3164325604, 727753846, 2179363840, 146436021, 1461446943, 4069977195, 705550613, 3059967265, 3887724982, 4281599278, 3313849956, 1404054877, 2845806497, 146425753, 1854211946, 1266315497, 3048417604, 3681880366, 3289982499, 290971e4, 1235738493, 2632868024, 2414719590, 3970600049, 1771706367, 1449415276, 3266420449, 422970021, 1963543593, 2690192192, 3826793022, 1062508698, 1531092325, 1804592342, 2583117782, 2714934279, 4024971509, 1294809318, 4028980673, 1289560198, 2221992742, 1669523910, 35572830, 157838143, 1052438473, 1016535060, 1802137761, 1753167236, 1386275462, 3080475397, 2857371447, 1040679964, 2145300060, 2390574316, 1461121720, 2956646967, 4031777805, 4028374788, 33600511, 2920084762, 1018524850, 629373528, 3691585981, 3515945977, 2091462646, 2486323059, 586499841, 988145025, 935516892, 3367335476, 2599673255, 2839830854, 265290510, 3972581182, 2759138881, 3795373465, 1005194799, 847297441, 406762289, 1314163512, 1332590856, 1866599683, 4127851711, 750260880, 613907577, 1450815602, 3165620655, 3734664991, 3650291728, 3012275730, 3704569646, 1427272223, 778793252, 1343938022, 2676280711, 2052605720, 1946737175, 3164576444, 3914038668, 3967478842, 3682934266, 1661551462, 3294938066, 4011595847, 840292616, 3712170807, 616741398, 312560963, 711312465, 1351876610, 322626781, 1910503582, 271666773, 2175563734, 1594956187, 70604529, 3617834859, 1007753275, 1495573769, 4069517037, 2549218298, 2663038764, 504708206, 2263041392, 3941167025, 2249088522, 1514023603, 1998579484, 1312622330, 694541497, 2582060303, 2151582166, 1382467621, 776784248, 2618340202, 3323268794, 2497899128, 2784771155, 503983604, 4076293799, 907881277, 423175695, 432175456, 1378068232, 4145222326, 3954048622, 3938656102, 3820766613, 2793130115, 2977904593, 26017576, 3274890735, 3194772133, 1700274565, 1756076034, 4006520079, 3677328699, 720338349, 1533947780, 354530856, 688349552, 3973924725, 1637815568, 332179504, 3949051286, 53804574, 2852348879, 3044236432, 1282449977, 3583942155, 3416972820, 4006381244, 1617046695, 2628476075, 3002303598, 1686838959, 431878346, 2686675385, 1700445008, 1080580658, 1009431731, 832498133, 3223435511, 2605976345, 2271191193, 2516031870, 1648197032, 4164389018, 2548247927, 300782431, 375919233, 238389289, 3353747414, 2531188641, 2019080857, 1475708069, 455242339, 2609103871, 448939670, 3451063019, 1395535956, 2413381860, 1841049896, 1491858159, 885456874, 4264095073, 4001119347, 1565136089, 3898914787, 1108368660, 540939232, 1173283510, 2745871338, 3681308437, 4207628240, 3343053890, 4016749493, 1699691293, 1103962373, 3625875870, 2256883143, 3830138730, 1031889488, 3479347698, 1535977030, 4236805024, 3251091107, 2132092099, 1774941330, 1199868427, 1452454533, 157007616, 2904115357, 342012276, 595725824, 1480756522, 206960106, 497939518, 591360097, 863170706, 2375253569, 3596610801, 1814182875, 2094937945, 3421402208, 1082520231, 3463918190, 2785509508, 435703966, 3908032597, 1641649973, 2842273706, 3305899714, 1510255612, 2148256476, 2655287854, 3276092548, 4258621189, 236887753, 3681803219, 274041037, 1734335097, 3815195456, 3317970021, 1899903192, 1026095262, 4050517792, 356393447, 2410691914, 3873677099, 3682840055, 3913112168, 2491498743, 4132185628, 2489919796, 1091903735, 1979897079, 3170134830, 3567386728, 3557303409, 857797738, 1136121015, 1342202287, 507115054, 2535736646, 337727348, 3213592640, 1301675037, 2528481711, 1895095763, 1721773893, 3216771564, 62756741, 2142006736, 835421444, 2531993523, 1442658625, 3659876326, 2882144922, 676362277, 1392781812, 170690266, 3921047035, 1759253602, 3611846912, 1745797284, 664899054, 1329594018, 3901205900, 3045908486, 2062866102, 2865634940, 3543621612, 3464012697, 1080764994, 553557557, 3656615353, 3996768171, 991055499, 499776247, 1265440854, 648242737, 3940784050, 980351604, 3713745714, 1749149687, 3396870395, 4211799374, 3640570775, 1161844396, 3125318951, 1431517754, 545492359, 4268468663, 3499529547, 1437099964, 2702547544, 3433638243, 2581715763, 2787789398, 1060185593, 1593081372, 2418618748, 4260947970, 69676912, 2159744348, 86519011, 2512459080, 3838209314, 1220612927, 3339683548, 133810670, 1090789135, 1078426020, 1569222167, 845107691, 3583754449, 4072456591, 1091646820, 628848692, 1613405280, 3757631651, 526609435, 236106946, 48312990, 2942717905, 3402727701, 1797494240, 859738849, 992217954, 4005476642, 2243076622, 3870952857, 3732016268, 765654824, 3490871365, 2511836413, 1685915746, 3888969200, 1414112111, 2273134842, 3281911079, 4080962846, 172450625, 2569994100, 980381355, 4109958455, 2819808352, 2716589560, 2568741196, 3681446669, 3329971472, 1835478071, 660984891, 3704678404, 4045999559, 3422617507, 3040415634, 1762651403, 1719377915, 3470491036, 2693910283, 3642056355, 3138596744, 1364962596, 2073328063, 1983633131, 926494387, 3423689081, 2150032023, 4096667949, 1749200295, 3328846651, 309677260, 2016342300, 1779581495, 3079819751, 111262694, 1274766160, 443224088, 298511866, 1025883608, 3806446537, 1145181785, 168956806, 3641502830, 3584813610, 1689216846, 3666258015, 3200248200, 1692713982, 2646376535, 4042768518, 1618508792, 1610833997, 3523052358, 4130873264, 2001055236, 3610705100, 2202168115, 4028541809, 2961195399, 1006657119, 2006996926, 3186142756, 1430667929, 3210227297, 1314452623, 4074634658, 4101304120, 2273951170, 1399257539, 3367210612, 3027628629, 1190975929, 2062231137, 2333990788, 2221543033, 2438960610, 1181637006, 548689776, 2362791313, 3372408396, 3104550113, 3145860560, 296247880, 1970579870, 3078560182, 3769228297, 1714227617, 3291629107, 3898220290, 166772364, 1251581989, 493813264, 448347421, 195405023, 2709975567, 677966185, 3703036547, 1463355134, 2715995803, 1338867538, 1343315457, 2802222074, 2684532164, 233230375, 2599980071, 2000651841, 3277868038, 1638401717, 4028070440, 3237316320, 6314154, 819756386, 300326615, 590932579, 1405279636, 3267499572, 3150704214, 2428286686, 3959192993, 3461946742, 1862657033, 1266418056, 963775037, 2089974820, 2263052895, 1917689273, 448879540, 3550394620, 3981727096, 150775221, 3627908307, 1303187396, 508620638, 2975983352, 2726630617, 1817252668, 1876281319, 1457606340, 908771278, 3720792119, 3617206836, 2455994898, 1729034894, 1080033504, 976866871, 3556439503, 2881648439, 1522871579, 1555064734, 1336096578, 3548522304, 2579274686, 3574697629, 3205460757, 3593280638, 3338716283, 3079412587, 564236357, 2993598910, 1781952180, 1464380207, 3163844217, 3332601554, 1699332808, 1393555694, 1183702653, 3581086237, 1288719814, 691649499, 2847557200, 2895455976, 3193889540, 2717570544, 1781354906, 1676643554, 2592534050, 3230253752, 1126444790, 2770207658, 2633158820, 2210423226, 2615765581, 2414155088, 3127139286, 673620729, 2805611233, 1269405062, 4015350505, 3341807571, 4149409754, 1057255273, 2012875353, 2162469141, 2276492801, 2601117357, 993977747, 3918593370, 2654263191, 753973209, 36408145, 2530585658, 25011837, 3520020182, 2088578344, 530523599, 2918365339, 1524020338, 1518925132, 3760827505, 3759777254, 1202760957, 3985898139, 3906192525, 674977740, 4174734889, 2031300136, 2019492241, 3983892565, 4153806404, 3822280332, 352677332, 2297720250, 60907813, 90501309, 3286998549, 1016092578, 2535922412, 2839152426, 457141659, 509813237, 4120667899, 652014361, 1966332200, 2975202805, 55981186, 2327461051, 676427537, 3255491064, 2882294119, 3433927263, 1307055953, 942726286, 933058658, 2468411793, 3933900994, 4215176142, 1361170020, 2001714738, 2830558078, 3274259782, 1222529897, 1679025792, 2729314320, 3714953764, 1770335741, 151462246, 3013232138, 1682292957, 1483529935, 471910574, 1539241949, 458788160, 3436315007, 1807016891, 3718408830, 978976581, 1043663428, 3165965781, 1927990952, 4200891579, 2372276910, 3208408903, 3533431907, 1412390302, 2931980059, 4132332400, 1947078029, 3881505623, 4168226417, 2941484381, 1077988104, 1320477388, 886195818, 18198404, 3786409e3, 2509781533, 112762804, 3463356488, 1866414978, 891333506, 18488651, 661792760, 1628790961, 3885187036, 3141171499, 876946877, 2693282273, 1372485963, 791857591, 2686433993, 3759982718, 3167212022, 3472953795, 2716379847, 445679433, 3561995674, 3504004811, 3574258232, 54117162, 3331405415, 2381918588, 3769707343, 4154350007, 1140177722, 4074052095, 668550556, 3214352940, 367459370, 261225585, 2610173221, 4209349473, 3468074219, 3265815641, 314222801, 3066103646, 3808782860, 282218597, 3406013506, 3773591054, 379116347, 1285071038, 846784868, 2669647154, 3771962079, 3550491691, 2305946142, 453669953, 1268987020, 3317592352, 3279303384, 3744833421, 2610507566, 3859509063, 266596637, 3847019092, 517658769, 3462560207, 3443424879, 370717030, 4247526661, 2224018117, 4143653529, 4112773975, 2788324899, 2477274417, 1456262402, 2901442914, 1517677493, 1846949527, 2295493580, 3734397586, 2176403920, 1280348187, 1908823572, 3871786941, 846861322, 1172426758, 3287448474, 3383383037, 1655181056, 3139813346, 901632758, 1897031941, 2986607138, 3066810236, 3447102507, 1393639104, 373351379, 950779232, 625454576, 3124240540, 4148612726, 2007998917, 544563296, 2244738638, 2330496472, 2058025392, 1291430526, 424198748, 50039436, 29584100, 3605783033, 2429876329, 2791104160, 1057563949, 3255363231, 3075367218, 3463963227, 1469046755, 985887462], o = [1332899944, 1700884034, 1701343084, 1684370003, 1668446532, 1869963892], s = (t2, e2) => {
  if (e2 <= 0 || e2 > t2.length)
    throw Error(`Illegal len: ${e2}`);
  let n2, o2, s2 = 0;
  const l2 = [];
  for (; s2 < e2; ) {
    if (n2 = 255 & t2[s2++], l2.push(r[n2 >> 2 & 63]), n2 = (3 & n2) << 4, s2 >= e2) {
      l2.push(r[63 & n2]);
      break;
    }
    if (o2 = 255 & t2[s2++], n2 |= o2 >> 4 & 15, l2.push(r[63 & n2]), n2 = (15 & o2) << 2, s2 >= e2) {
      l2.push(r[63 & n2]);
      break;
    }
    o2 = 255 & t2[s2++], n2 |= o2 >> 6 & 3, l2.push(r[63 & n2]), l2.push(r[63 & o2]);
  }
  return l2.join("");
}, l = "undefined" != typeof process && process && "function" == typeof process.nextTick ? "function" == typeof setImmediate ? setImmediate : process.nextTick : setTimeout, f$1 = (r2, t2, e2, n2) => {
  let o2, s2 = r2[t2], l2 = r2[t2 + 1];
  return s2 ^= e2[0], o2 = n2[s2 >>> 24], o2 += n2[256 | s2 >> 16 & 255], o2 ^= n2[512 | s2 >> 8 & 255], o2 += n2[768 | 255 & s2], l2 ^= o2 ^ e2[1], o2 = n2[l2 >>> 24], o2 += n2[256 | l2 >> 16 & 255], o2 ^= n2[512 | l2 >> 8 & 255], o2 += n2[768 | 255 & l2], s2 ^= o2 ^ e2[2], o2 = n2[s2 >>> 24], o2 += n2[256 | s2 >> 16 & 255], o2 ^= n2[512 | s2 >> 8 & 255], o2 += n2[768 | 255 & s2], l2 ^= o2 ^ e2[3], o2 = n2[l2 >>> 24], o2 += n2[256 | l2 >> 16 & 255], o2 ^= n2[512 | l2 >> 8 & 255], o2 += n2[768 | 255 & l2], s2 ^= o2 ^ e2[4], o2 = n2[s2 >>> 24], o2 += n2[256 | s2 >> 16 & 255], o2 ^= n2[512 | s2 >> 8 & 255], o2 += n2[768 | 255 & s2], l2 ^= o2 ^ e2[5], o2 = n2[l2 >>> 24], o2 += n2[256 | l2 >> 16 & 255], o2 ^= n2[512 | l2 >> 8 & 255], o2 += n2[768 | 255 & l2], s2 ^= o2 ^ e2[6], o2 = n2[s2 >>> 24], o2 += n2[256 | s2 >> 16 & 255], o2 ^= n2[512 | s2 >> 8 & 255], o2 += n2[768 | 255 & s2], l2 ^= o2 ^ e2[7], o2 = n2[l2 >>> 24], o2 += n2[256 | l2 >> 16 & 255], o2 ^= n2[512 | l2 >> 8 & 255], o2 += n2[768 | 255 & l2], s2 ^= o2 ^ e2[8], o2 = n2[s2 >>> 24], o2 += n2[256 | s2 >> 16 & 255], o2 ^= n2[512 | s2 >> 8 & 255], o2 += n2[768 | 255 & s2], l2 ^= o2 ^ e2[9], o2 = n2[l2 >>> 24], o2 += n2[256 | l2 >> 16 & 255], o2 ^= n2[512 | l2 >> 8 & 255], o2 += n2[768 | 255 & l2], s2 ^= o2 ^ e2[10], o2 = n2[s2 >>> 24], o2 += n2[256 | s2 >> 16 & 255], o2 ^= n2[512 | s2 >> 8 & 255], o2 += n2[768 | 255 & s2], l2 ^= o2 ^ e2[11], o2 = n2[l2 >>> 24], o2 += n2[256 | l2 >> 16 & 255], o2 ^= n2[512 | l2 >> 8 & 255], o2 += n2[768 | 255 & l2], s2 ^= o2 ^ e2[12], o2 = n2[s2 >>> 24], o2 += n2[256 | s2 >> 16 & 255], o2 ^= n2[512 | s2 >> 8 & 255], o2 += n2[768 | 255 & s2], l2 ^= o2 ^ e2[13], o2 = n2[l2 >>> 24], o2 += n2[256 | l2 >> 16 & 255], o2 ^= n2[512 | l2 >> 8 & 255], o2 += n2[768 | 255 & l2], s2 ^= o2 ^ e2[14], o2 = n2[s2 >>> 24], o2 += n2[256 | s2 >> 16 & 255], o2 ^= n2[512 | s2 >> 8 & 255], o2 += n2[768 | 255 & s2], l2 ^= o2 ^ e2[15], o2 = n2[l2 >>> 24], o2 += n2[256 | l2 >> 16 & 255], o2 ^= n2[512 | l2 >> 8 & 255], o2 += n2[768 | 255 & l2], s2 ^= o2 ^ e2[16], r2[t2] = l2 ^ e2[17], r2[t2 + 1] = s2, r2;
}, i = (r2, t2) => {
  let e2 = 0;
  for (let n2 = 0; n2 < 4; ++n2)
    e2 = e2 << 8 | 255 & r2[t2], t2 = (t2 + 1) % r2.length;
  return { key: e2, offp: t2 };
}, u = (r2, t2, e2) => {
  const n2 = t2.length, o2 = e2.length;
  let s2, l2 = 0, u2 = [0, 0];
  for (let e3 = 0; e3 < n2; e3++)
    s2 = i(r2, l2), l2 = s2.offp, t2[e3] = t2[e3] ^ s2.key;
  for (let r3 = 0; r3 < n2; r3 += 2)
    u2 = f$1(u2, 0, t2, e2), t2[r3] = u2[0], t2[r3 + 1] = u2[1];
  for (let r3 = 0; r3 < o2; r3 += 2)
    u2 = f$1(u2, 0, t2, e2), e2[r3] = u2[0], e2[r3 + 1] = u2[1];
}, h$1 = (r2, t2, s2, h2, p2) => {
  const a2 = o.slice(), g2 = a2.length;
  if (s2 < 4 || s2 > 31) {
    const r3 = new Error(`Illegal number of rounds (4-31): ${s2}`);
    if (false === h2)
      return Promise.reject(r3);
    throw r3;
  }
  if (16 !== t2.length) {
    const r3 = new Error(`Illegal salt length: ${t2.length} != 16`);
    if (false === h2)
      return Promise.reject(r3);
    throw r3;
  }
  let c2, y2;
  s2 = 1 << s2 >>> 0;
  let m2, w2 = 0;
  Int32Array ? (c2 = new Int32Array(e), y2 = new Int32Array(n)) : (c2 = e.slice(), y2 = n.slice()), ((r3, t3, e2, n2) => {
    const o2 = e2.length, s3 = n2.length;
    let l2, u2 = 0, h3 = [0, 0];
    for (let r4 = 0; r4 < o2; r4++)
      l2 = i(t3, u2), u2 = l2.offp, e2[r4] = e2[r4] ^ l2.key;
    u2 = 0;
    for (let t4 = 0; t4 < o2; t4 += 2)
      l2 = i(r3, u2), u2 = l2.offp, h3[0] ^= l2.key, l2 = i(r3, u2), u2 = l2.offp, h3[1] ^= l2.key, h3 = f$1(h3, 0, e2, n2), e2[t4] = h3[0], e2[t4 + 1] = h3[1];
    for (let t4 = 0; t4 < s3; t4 += 2)
      l2 = i(r3, u2), u2 = l2.offp, h3[0] ^= l2.key, l2 = i(r3, u2), u2 = l2.offp, h3[1] ^= l2.key, h3 = f$1(h3, 0, e2, n2), n2[t4] = h3[0], n2[t4 + 1] = h3[1];
  })(t2, r2, c2, y2);
  const I2 = () => {
    if (p2 && p2(w2 / s2), !(w2 < s2)) {
      for (w2 = 0; w2 < 64; w2++)
        for (m2 = 0; m2 < g2 >> 1; m2++)
          f$1(a2, m2 << 1, c2, y2);
      const r3 = [];
      for (w2 = 0; w2 < g2; w2++)
        r3.push((a2[w2] >> 24 & 255) >>> 0), r3.push((a2[w2] >> 16 & 255) >>> 0), r3.push((a2[w2] >> 8 & 255) >>> 0), r3.push((255 & a2[w2]) >>> 0);
      return false === h2 ? Promise.resolve(r3) : r3;
    }
    {
      const e2 = Date.now();
      for (; w2 < s2 && (w2 += 1, u(r2, c2, y2), u(t2, c2, y2), !(Date.now() - e2 > 100)); )
        ;
    }
    if (false === h2)
      return new Promise((r3) => l(() => {
        I2().then(r3);
      }));
  };
  if (false === h2)
    return I2();
  {
    let r3;
    for (; ; )
      if (void 0 !== (r3 = I2()))
        return r3 || [];
  }
}, p = (r2 = 10) => {
  if ("number" != typeof r2)
    throw Error("Illegal arguments: " + typeof r2);
  r2 < 4 ? r2 = 4 : r2 > 31 && (r2 = 31);
  const t2 = [];
  return t2.push("$2a$"), r2 < 10 && t2.push("0"), t2.push(r2.toString()), t2.push("$"), t2.push(s(((r3) => {
    try {
      let t3;
      return (self.crypto || self.msCrypto).getRandomValues(t3 = new Uint32Array(r3)), Array.prototype.slice.call(t3);
    } catch (r4) {
      throw Error("WebCryptoAPI is not available");
    }
  })(16), 16)), t2.join("");
};
function g(r2, e2, n2, l2) {
  if ("string" != typeof r2 || "string" != typeof e2) {
    const r3 = new Error("Invalid string / salt: Not a string");
    if (false === n2)
      return Promise.reject(r3);
    throw r3;
  }
  let f2, i2;
  if ("$" !== e2.charAt(0) || "2" !== e2.charAt(1)) {
    const r3 = new Error("Invalid salt version: " + e2.substring(0, 2));
    if (false === n2)
      return Promise.reject(r3);
    throw r3;
  }
  if ("$" === e2.charAt(2))
    f2 = String.fromCharCode(0), i2 = 3;
  else {
    if (f2 = e2.charAt(2), "a" !== f2 && "b" !== f2 && "y" !== f2 || "$" !== e2.charAt(3)) {
      const r3 = Error("Invalid salt revision: " + e2.substring(2, 4));
      if (false === n2)
        return Promise.reject(r3);
      throw r3;
    }
    i2 = 4;
  }
  if (e2.charAt(i2 + 2) > "$") {
    const r3 = new Error("Missing salt rounds");
    if (false === n2)
      return Promise.reject(r3);
    throw r3;
  }
  const u2 = 10 * parseInt(e2.substring(i2, i2 + 1), 10) + parseInt(e2.substring(i2 + 1, i2 + 2), 10), p2 = e2.substring(i2 + 3, i2 + 25), a2 = ((r3) => {
    const t2 = [];
    let e3 = 0;
    var n3;
    return n3 = (r4) => {
      t2.push(r4);
    }, ((r4, t3) => {
      let e4, n4 = null;
      for (; null !== (e4 = null !== n4 ? n4 : r4()); )
        e4 >= 55296 && e4 <= 57343 && null !== (n4 = r4()) && n4 >= 56320 && n4 <= 57343 ? (t3(1024 * (e4 - 55296) + n4 - 56320 + 65536), n4 = null) : t3(e4);
      null !== n4 && t3(n4);
    })(() => e3 >= r3.length ? null : r3.charCodeAt(e3++), function(r4) {
      ((r5, t3) => {
        let e4 = null;
        for ("number" == typeof r5 && (e4 = r5, r5 = () => null); null !== e4 || null !== (e4 = r5()); )
          e4 < 128 ? t3(127 & e4) : e4 < 2048 ? (t3(e4 >> 6 & 31 | 192), t3(63 & e4 | 128)) : e4 < 65536 ? (t3(e4 >> 12 & 15 | 224), t3(e4 >> 6 & 63 | 128), t3(63 & e4 | 128)) : (t3(e4 >> 18 & 7 | 240), t3(e4 >> 12 & 63 | 128), t3(e4 >> 6 & 63 | 128), t3(63 & e4 | 128)), e4 = null;
      })(r4, n3);
    }), t2;
  })(r2 += f2 >= "a" ? "\0" : ""), g2 = ((r3, e3) => {
    if (e3 <= 0)
      throw Error(`Illegal len: ${e3}`);
    const n3 = r3.length;
    let o2, s2, l3, f3, i3, u3, h2 = 0, p3 = 0;
    const a3 = [];
    for (; h2 < n3 - 1 && p3 < e3 && (u3 = r3.charCodeAt(h2++), o2 = u3 < t.length ? t[u3] : -1, u3 = r3.charCodeAt(h2++), s2 = u3 < t.length ? t[u3] : -1, -1 != o2 && -1 != s2) && (i3 = o2 << 2 >>> 0, i3 |= (48 & s2) >> 4, a3.push(String.fromCharCode(i3)), !(++p3 >= e3 || h2 >= n3)) && (u3 = r3.charCodeAt(h2++), l3 = u3 < t.length ? t[u3] : -1, -1 != l3) && (i3 = (15 & s2) << 4 >>> 0, i3 |= (60 & l3) >> 2, a3.push(String.fromCharCode(i3)), !(++p3 >= e3 || h2 >= n3)); )
      u3 = r3.charCodeAt(h2++), f3 = u3 < t.length ? t[u3] : -1, i3 = (3 & l3) << 6 >>> 0, i3 |= f3, a3.push(String.fromCharCode(i3)), ++p3;
    return a3.map((r4) => r4.charCodeAt(0));
  })(p2, 16), c2 = (r3) => {
    const t2 = [];
    return t2.push("$2"), f2 >= "a" && t2.push(f2), t2.push("$"), u2 < 10 && t2.push("0"), t2.push(u2.toString()), t2.push("$"), t2.push(s(g2, g2.length)), t2.push(s(r3, 4 * o.length - 1)), t2.join("");
  };
  return false === n2 ? h$1(a2, g2, u2, false, l2).then((r3) => c2(r3)) : c2(h$1(a2, g2, u2, true, l2));
}
const c = (r2, t2 = 10) => {
  if ("number" == typeof t2 && (t2 = p(t2)), "string" != typeof r2 || "string" != typeof t2)
    throw Error("Illegal arguments: " + typeof r2 + ", " + typeof t2);
  return g(r2, t2, true);
}, m = (r2, t2) => {
  if ("string" != typeof r2 || "string" != typeof t2)
    throw Error("Illegal arguments: " + typeof r2 + ", " + typeof t2);
  return 60 === t2.length && c(r2, t2.substring(0, t2.length - 31)) === t2;
};
const useEncryptData = () => {
  const themeData2 = useThemeData();
  return computed(() => themeData2.value.encrypt || {});
};
const STORAGE_KEY$1 = "VUEPRESS_HOPE_GLOBAL_TOKEN";
const useGlobalEncrypt = () => {
  const encryptData = useEncryptData();
  const localToken = useStorage(STORAGE_KEY$1, "");
  const sessionToken = useSessionStorage(STORAGE_KEY$1, "");
  const isEncrypted = computed(() => {
    const { global: global2 = false, admin = [] } = encryptData.value;
    return global2 && admin.length > 0;
  });
  const isDecrypted = computed(() => {
    if (isEncrypted.value) {
      if (localToken.value)
        return encryptData.value.admin.some((hash) => m(localToken.value, hash));
      if (sessionToken.value)
        return encryptData.value.admin.some((hash) => m(sessionToken.value, hash));
    }
    return false;
  });
  const validate = (inputToken, keep = false) => {
    (keep ? localToken : sessionToken).value = inputToken;
  };
  return {
    isEncrypted,
    isDecrypted,
    validate
  };
};
const checkToken = (token = "", hash) => Boolean(token) && m(token, hash);
const STORAGE_KEY = "VUEPRESS_HOPE_PATH_TOKEN";
const usePathEncrypt = () => {
  const route = useRoute$1();
  const encryptData = useEncryptData();
  const localToken = useStorage(STORAGE_KEY, {});
  const sessionToken = useSessionStorage(STORAGE_KEY, {});
  const getPathMatchedKeys = (path) => isPlainObject(encryptData.value.config) ? Dt(encryptData.value.config).filter((key) => bt(decodeURI(path), key)).sort((a2, b2) => b2.length - a2.length) : [];
  const getStatus = (path) => {
    const matchedKeys = getPathMatchedKeys(path);
    if (matchedKeys.length > 0) {
      const { config: config2 = {} } = encryptData.value;
      return {
        isEncrypted: true,
        isDecrypted: matchedKeys.some((key) => localToken.value[key] && config2[key].some((token) => checkToken(localToken.value[key], token)) || sessionToken.value[key] && config2[key].some((token) => checkToken(sessionToken.value[key], token)))
      };
    }
    return {
      isDecrypted: false,
      isEncrypted: false
    };
  };
  const status = computed(() => getStatus(route.path));
  const validate = (inputToken, keep = false) => {
    const { config: config2 = {} } = encryptData.value;
    const matchedKeys = getPathMatchedKeys(route.path);
    for (const hitKey of matchedKeys) {
      if (config2[hitKey].filter((token) => checkToken(inputToken, token))) {
        (keep ? localToken : sessionToken).value[hitKey] = inputToken;
        break;
      }
    }
  };
  return {
    status,
    getStatus,
    validate
  };
};
const GlobalEncrypt = defineComponent({
  name: "GlobalEncrypt",
  setup(_props, { slots }) {
    const { isDecrypted, isEncrypted, validate } = useGlobalEncrypt();
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => h$4(FadeSlideY, () => {
      var _a2, _b2;
      return isEncrypted.value ? isMounted.value ? isDecrypted.value ? (_a2 = slots["default"]) == null ? void 0 : _a2.call(slots) : h$4(PasswordModal, { full: true, onVerify: validate }) : null : (_b2 = slots["default"]) == null ? void 0 : _b2.call(slots);
    });
  }
});
const LocalEncrypt = defineComponent({
  name: "LocalEncrypt",
  setup(_props, { slots }) {
    const { status, validate } = usePathEncrypt();
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a2, _b2;
      const { isEncrypted, isDecrypted } = status.value;
      return isEncrypted ? isMounted.value ? isDecrypted ? ((_a2 = slots["default"]) == null ? void 0 : _a2.call(slots)) || null : h$4(PasswordModal, { full: true, onVerify: validate }) : null : ((_b2 = slots["default"]) == null ? void 0 : _b2.call(slots)) || null;
    };
  }
});
const slidePage = "";
const d = () => h$4(R$1, { name: "back" }, () => h$4("path", { d: "M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z" })), h = () => h$4(R$1, { name: "home" }, () => h$4("path", { d: "M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z" }));
var f = defineComponent({ name: "SlidePage", setup() {
  const c2 = useRouter$1(), t2 = ref(false), n2 = ref(), i2 = () => {
    t2.value = !t2.value;
  }, e2 = () => {
    t2.value = false;
  }, l2 = () => {
    e2(), window.history.go(-1);
  }, m2 = () => {
    e2(), c2.push("/");
  };
  return onClickOutside(n2, e2), () => h$4("div", { class: "presentation" }, [h$4(Content), h$4("div", { ref: n2, class: ["menu", { active: t2.value }] }, [h$4("button", { class: "menu-button", onClick: () => i2() }, h$4("span", { class: "icon" })), h$4("button", { class: "back-button", onClick: () => l2() }, h$4(d)), h$4("button", { class: "home-button", onClick: () => m2() }, h$4(h))])]);
} });
const clientConfig11 = defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;
    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();
      return scrollBehavior(...args);
    };
    injectDarkmode(app);
    app.component("BloggerInfo", BloggerInfo);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
    Slide: f
  }
});
const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  F$2,
  clientConfig4,
  clientConfig5,
  clientConfig6,
  l$2,
  D$1,
  clientConfig9,
  y,
  clientConfig11
];
const pagesRoutes = [
  ["v-8daa1a0e", "/", { "y": "h", "t": "", "i": "home", "I": 1 }, ["/index.html", "/README.md"]],
  ["v-184f4da6", "/intro.html", { "d": "2023-02-04T13:15:39.000Z", "e": '<h1> 关于</h1>\n<h2> 关于笔者</h2>\n<p>你好，我叫饮东，山西临汾人，本科软工专业毕业，爱好阅读、写作和散步 <br>\n目前是一名普通的前端程序员，从事 React Web端的开发工作<br></p>\n<p>想了解更多笔者的学习经历，可以访问我的 <a href="https://github.com/reonce/notes-and-essays" target="_blank" rel="noopener noreferrer">日更随笔</a></p>\n<h2> 关于博客</h2>\n<p>由于做过迁移，文章的<strong>写作时间</strong>已经凌乱，所幸这个主题的博客可以通过文件夹形式检索文章<br>\n主题名叫做 <code>vuepress-theme-hope</code> （既然免费使用，就免费推广一下~)</p>', "r": { "minutes": 0.51, "words": 152 }, "y": "a", "t": "关于", "I": 1 }, ["/intro", "/intro.md"]],
  ["v-687eeb1a", "/posts/CSS/CSS3%E9%83%A8%E5%88%86%E6%96%B0%E7%89%B9%E6%80%A7.html", { "d": "2023-02-04T13:15:39.000Z", "e": '<h1> CSS3知识点汇总</h1>\n<h2> CSS3中新特性样式篇</h2>\n<h3> 背景设置</h3>\n<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>background-origin：   规定背景图片的定位区域。\n	☞ padding-box    背景图像相对内边距定位（默认值）\n	☞ border-box	 背景图像相对边框定位【以边框左上角为参照进行位置设置】\n	☞ content-box    背景图像相对内容区域定位【以内容区域左上角为参照进行位置设置】\n\n   备注：\n		默认盒子的背景图片是在盒子的内边距左上角对齐设置。(padding-box)\n\nbackground-clip：  	 规定背景的绘制区域。\n	☞ border-box	 背景被裁切到边框盒子位置 【将背景图片在整个容器中显示】\n	☞ padding-box	 背景被裁切到内边距区域【将背景图片在内边距区域（包含内容区域）显示】\n	☞ content-box	 背景被裁切到内容区域【将背景图片在内容区域显示】\n	备注：\n		默认背景的绘制区域是border-box。\n\nbackground-size：     规定背景图片的尺寸。\n	☞ cover			//背景图片按照原来的缩放比，铺满整个容器\n	☞ contain		//背景图片按照原来的缩放比，完整地显示到容器中(不确定是否铺满屏幕)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', "r": { "minutes": 5.65, "words": 1696 }, "y": "a", "t": "CSS3知识点汇总", "I": 1 }, ["/posts/CSS/CSS3部分新特性.html", "/posts/CSS/CSS3%E9%83%A8%E5%88%86%E6%96%B0%E7%89%B9%E6%80%A7", "/posts/CSS/CSS3部分新特性.md", "/posts/CSS/CSS3%E9%83%A8%E5%88%86%E6%96%B0%E7%89%B9%E6%80%A7.md"]],
  ["v-2ce88be4", "/posts/CSS/CSS%E6%96%87%E5%AD%97%E6%8D%A2%E8%A1%8C%E8%AF%AD%E6%B3%95%E6%B1%87%E6%80%BB.html", { "d": "2023-02-04T13:15:39.000Z", "e": '<hr>\n<h1> CSS文字换行</h1>\n<p><strong>word-wrap: normal; || word-break: normal;</strong></p>\n<p>当word-wrap或者word-break为normal时，也就是浏览器的默认设置时。</p>\n<p>换行规则是这样的：</p>\n<p><em>情景一：</em>　　当一个单词在行尾不能完整容纳时，会自动将这个单词换到下一行，示例如下。</p>\n<figure><img src="https://images2015.cnblogs.com/blog/666306/201508/666306-20150829131640390-213490926.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>', "r": { "minutes": 1.53, "words": 458 }, "y": "a", "t": "CSS文字换行", "I": 1 }, ["/posts/CSS/CSS文字换行语法汇总.html", "/posts/CSS/CSS%E6%96%87%E5%AD%97%E6%8D%A2%E8%A1%8C%E8%AF%AD%E6%B3%95%E6%B1%87%E6%80%BB", "/posts/CSS/CSS文字换行语法汇总.md", "/posts/CSS/CSS%E6%96%87%E5%AD%97%E6%8D%A2%E8%A1%8C%E8%AF%AD%E6%B3%95%E6%B1%87%E6%80%BB.md"]],
  ["v-2a6ef733", "/posts/CSS/requestAnimationFrame%20%E6%B7%B1%E5%BA%A6%E8%A7%A3%E8%AF%BB.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> requestAnimationFrame 定时器解读</h1>\n<p><strong><code>window.requestAnimationFrame()</code></strong> 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。</p>\n<p>计时器一直是javascript动画的核心技术。而编写动画循环的关键是要知道延迟时间多长合适。一方面，循环间隔必须足够短，这样才能让不同的动画效果显得平滑流畅；另一方面，循环间隔还要足够长，这样才能确保浏览器有能力渲染产生的变化</p>", "r": { "minutes": 2.96, "words": 889 }, "y": "a", "t": "requestAnimationFrame 定时器解读", "I": 1 }, ["/posts/CSS/requestAnimationFrame 深度解读.html", "/posts/CSS/requestAnimationFrame%20%E6%B7%B1%E5%BA%A6%E8%A7%A3%E8%AF%BB", "/posts/CSS/requestAnimationFrame 深度解读.md", "/posts/CSS/requestAnimationFrame%20%E6%B7%B1%E5%BA%A6%E8%A7%A3%E8%AF%BB.md"]],
  ["v-62e8e475", "/posts/CSS/%E5%8A%A8%E7%94%BBRequestAnimations.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 动画RequestAnimationFrame与canvas</h1>\n<p>早期的动画是用<code>setInterval()</code>做的，存在不精确的缺陷。</p>\n<p>现在一般显示器的屏幕刷新率是60Hz，基本上意味着每秒需要重绘60次。很多浏览器会限制重绘频率，不超过显示屏的刷新率，因为超过<strong>刷新率用户也感知不到</strong></p>\n<p>因此实现平滑动画最佳的重回间隔是1000毫秒/60，大约17毫秒。</p>\n<p>无论是<code>setInterval</code>还是<code>setTimeout</code>，由于时间循环机制的存在，它们都是不精确的，再加上早起浏览器的计时器精度很差，基本上是雪上加霜的，现在好很多，现在Chrome大约是4毫秒。</p>", "r": { "minutes": 1.65, "words": 496 }, "y": "a", "t": "动画RequestAnimationFrame与canvas", "I": 1 }, ["/posts/CSS/动画RequestAnimations.html", "/posts/CSS/%E5%8A%A8%E7%94%BBRequestAnimations", "/posts/CSS/动画RequestAnimations.md", "/posts/CSS/%E5%8A%A8%E7%94%BBRequestAnimations.md"]],
  ["v-ed5b4fbe", "/posts/CSS/%E6%9C%AA%E7%9F%A5%E9%AB%98%E5%BA%A6%E5%85%83%E7%B4%A0%EF%BC%8C%E5%9E%82%E7%9B%B4%E6%B0%B4%E5%B9%B3%E5%B1%85%E4%B8%AD.html", { "d": "2023-02-04T13:15:39.000Z", "e": '<h1> 未知高度元素，垂直水平居中</h1>\n<p>除flex外的方法：</p>\n<h2> absolute+transform</h2>\n<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token punctuation">.</span>parent <span class="token punctuation">{</span>\n      <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>\n      <span class="token literal-property property">height</span><span class="token operator">:</span> 500px<span class="token punctuation">;</span>\n      <span class="token literal-property property">width</span><span class="token operator">:</span> 500px<span class="token punctuation">;</span>\n      background<span class="token operator">-</span>color<span class="token operator">:</span> #fd0c70<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">.</span>child <span class="token punctuation">{</span>\n      <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>\n      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>\n      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>\n      <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token literal-property property">width</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>\n      <span class="token literal-property property">height</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>\n      <span class="token literal-property property">background</span><span class="token operator">:</span> blue<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', "r": { "minutes": 0.53, "words": 160 }, "y": "a", "t": "未知高度元素，垂直水平居中", "I": 1 }, ["/posts/CSS/未知高度元素，垂直水平居中.html", "/posts/CSS/%E6%9C%AA%E7%9F%A5%E9%AB%98%E5%BA%A6%E5%85%83%E7%B4%A0%EF%BC%8C%E5%9E%82%E7%9B%B4%E6%B0%B4%E5%B9%B3%E5%B1%85%E4%B8%AD", "/posts/CSS/未知高度元素，垂直水平居中.md", "/posts/CSS/%E6%9C%AA%E7%9F%A5%E9%AB%98%E5%BA%A6%E5%85%83%E7%B4%A0%EF%BC%8C%E5%9E%82%E7%9B%B4%E6%B0%B4%E5%B9%B3%E5%B1%85%E4%B8%AD.md"]],
  ["v-5eabaff1", "/posts/CSS/%E7%B3%BB%E7%BB%9F%E5%AD%97%E4%BD%93%E5%AF%BC%E8%87%B4%E7%9A%84CSS%E9%94%99%E4%BD%8D%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 系统字体导致的CSS错位问题总结</h1>\n<p>开发业务中，实现了一个顶部的字体，设置了和设计图一样的宽度和字体：</p>\n<p>但是拿给设计看之后，他的电脑上是这个样子的：</p>\n<p>纳尼！！？ 经典的我电脑上没问题。 用附近同事的电脑看，都和我的呈现效果一致。</p>\n<p>在核查了屏幕设置，分辨率等都没问题之后，没有头绪，于是跑上楼看测试的电脑，检查，初步怀疑是浏览器版本问题，但是用另外一个浏览器也发现同样的问题。这时候有个细节，设计的电脑上字体和我们的不一样，设计电脑上展示的是<code>PingFang SC</code>字体。原来是字体原因导致的吗，为啥会出现字体不一样的情况呢？</p>", "r": { "minutes": 2.04, "words": 611 }, "y": "a", "t": "系统字体导致的CSS错位问题总结", "I": 1 }, ["/posts/CSS/系统字体导致的CSS错位问题总结.html", "/posts/CSS/%E7%B3%BB%E7%BB%9F%E5%AD%97%E4%BD%93%E5%AF%BC%E8%87%B4%E7%9A%84CSS%E9%94%99%E4%BD%8D%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93", "/posts/CSS/系统字体导致的CSS错位问题总结.md", "/posts/CSS/%E7%B3%BB%E7%BB%9F%E5%AD%97%E4%BD%93%E5%AF%BC%E8%87%B4%E7%9A%84CSS%E9%94%99%E4%BD%8D%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93.md"]],
  ["v-c5ea9104", "/posts/Chore/Bash%E5%AD%A6%E4%B9%A0(%E4%B8%80).html", { "d": "2023-02-04T13:15:39.000Z", "e": '<h1> Bash学习（一）</h1>\n<h2> Shell概念</h2>\n<p>Shell的含义是外壳，和内核相对性。比喻内核外的一层，也就是用户和内核交互的界面。</p>\n<p>Shell有很多种类。可以通过 <code>echo $SHELL</code>命令查看系统的默认Shell</p>\n<p>查看当前使用的Shell类型可以通过 <code>echo $0</code>命令查看，或者直接输入一条不存在的命令，查看报错</p>\n<h2> 命令提示符</h2>\n<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>user@hostname<span class="token punctuation">]</span> $\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>', "r": { "minutes": 3.3, "words": 990 }, "y": "a", "t": "Bash学习（一）", "I": 1 }, ["/posts/Chore/Bash学习(一).html", "/posts/Chore/Bash%E5%AD%A6%E4%B9%A0(%E4%B8%80)", "/posts/Chore/Bash学习(一).md", "/posts/Chore/Bash%E5%AD%A6%E4%B9%A0(%E4%B8%80).md"]],
  ["v-20b61768", "/posts/Chore/Bash%E5%AD%A6%E4%B9%A0(%E4%BA%8C).html", { "d": "2023-02-04T13:15:39.000Z", "e": '<h1> Bash学习(二)</h1>\n<h2> 第三章 Bash的模式扩展</h2>\n<p>Bash当中，存在着许多特殊的符号，来表示特殊的命令,这种符号的使用被称为<strong>模式扩展</strong>，其中用到通配符的部分，被称为<code>通配符扩展</code></p>\n<p>本章主要以了解为主，知道有这些特殊的符号扩展即可，回头使用来翻阅即可。</p>\n<h3> 扩展的开关</h3>\n<p>Bash 允许用户关闭扩展。</p>\n<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">set</span> <span class="token parameter variable">-o</span> noglob\n<span class="token comment"># 或者</span>\n$ <span class="token builtin class-name">set</span> <span class="token parameter variable">-f</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', "r": { "minutes": 3.09, "words": 928 }, "y": "a", "t": "Bash学习(二)", "I": 1 }, ["/posts/Chore/Bash学习(二).html", "/posts/Chore/Bash%E5%AD%A6%E4%B9%A0(%E4%BA%8C)", "/posts/Chore/Bash学习(二).md", "/posts/Chore/Bash%E5%AD%A6%E4%B9%A0(%E4%BA%8C).md"]],
  ["v-68a1d3a7", "/posts/Chore/TypeScript%20%E7%B4%A2%E5%BC%95%E7%AD%BE%E5%90%8D%E5%AF%BC%E8%87%B4%E7%9A%84%E6%8A%A5%E9%94%99%E9%97%AE%E9%A2%98.html", { "d": "2023-02-04T13:15:39.000Z", "e": `<h1> TypeScript 索引签名导致的报错问题</h1>
<p>可以用字符串访问 JavaScript 中的对象（TypeScript 中也一样），用来保存对其他对象的引用。</p>
<p>例如：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> foo<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
foo<span class="token punctuation">[</span><span class="token string">'Hello'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'World'</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">[</span><span class="token string">'Hello'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// World</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`, "r": { "minutes": 5.76, "words": 1729 }, "y": "a", "t": "TypeScript 索引签名导致的报错问题", "I": 1 }, ["/posts/Chore/TypeScript 索引签名导致的报错问题.html", "/posts/Chore/TypeScript%20%E7%B4%A2%E5%BC%95%E7%AD%BE%E5%90%8D%E5%AF%BC%E8%87%B4%E7%9A%84%E6%8A%A5%E9%94%99%E9%97%AE%E9%A2%98", "/posts/Chore/TypeScript 索引签名导致的报错问题.md", "/posts/Chore/TypeScript%20%E7%B4%A2%E5%BC%95%E7%AD%BE%E5%90%8D%E5%AF%BC%E8%87%B4%E7%9A%84%E6%8A%A5%E9%94%99%E9%97%AE%E9%A2%98.md"]],
  ["v-6742941a", "/posts/Chore/%E6%B5%85%E8%AF%BB%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 浅读正则表达式</h1>\n<h2> 导读</h2>\n<p>长期以来我对正则表达式的理解是：</p>\n<ol>\n<li>可以百度查到，随用随查</li>\n<li>印象中不难，但是看不懂</li>\n<li>比起其他的知识，它的优先级不高</li>\n</ol>\n<p>但是要系统的学习JS基础，正则我认为是不可少的一环</p>\n<p>本文目的在于能够使用简单的，看懂正常的正则表达式</p>\n<h2> 创建正则表达式</h2>\n<p>ECNAScript 通过RegExp类型支持正则表达式，它在JS中有两种创建方式：</p>\n<ol>\n<li>通过字面量定义，类似于Perl的简洁语法创建</li>\n<li>通过RegExp构建函数创建</li>\n</ol>", "r": { "minutes": 2.74, "words": 822 }, "y": "a", "t": "浅读正则表达式", "I": 1 }, ["/posts/Chore/浅读正则表达式.html", "/posts/Chore/%E6%B5%85%E8%AF%BB%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F", "/posts/Chore/浅读正则表达式.md", "/posts/Chore/%E6%B5%85%E8%AF%BB%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F.md"]],
  ["v-a67cdd4c", "/posts/Chore/%E7%A8%8B%E5%BA%8F%E8%A6%81%E9%9C%80%E8%A6%81%E5%AD%A6%E4%B9%A0%E7%9A%84%E8%BD%AF%E6%8A%80%E8%83%BD.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 程序要要学习的软技能</h1>\n<h2> 什么是软技能</h2>\n<p>软技能可以理解成除专业强相关的技能以外的技能（对于程序员来说，就是计算机专业能力），涉及范围很广，包括人际处事、职业规划、沟通表达、专业态度等等</p>\n<h2> 1. 人际交往能力</h2>\n<p>程序员工作环境较为单一，通常是整天面对冷冰冰的电脑屏幕，相对其他行业需要和人打交道略显不足。但是人际交往能力又是在社会上生存最重要的能力，因此程序员需要设法进行弥补。</p>\n<h4> 1.1 眼里不要只有代码</h4>\n<p>代码只是工作交差的成果，不要把眼光只聚焦在代码本身，程序员的需求都来自于人，所有的沟通也是人。与人打交道是我们的基本职场技能，需要留心去观察学习。</p>", "r": { "minutes": 8.6, "words": 2579 }, "y": "a", "t": "程序要要学习的软技能", "I": 1 }, ["/posts/Chore/程序要需要学习的软技能.html", "/posts/Chore/%E7%A8%8B%E5%BA%8F%E8%A6%81%E9%9C%80%E8%A6%81%E5%AD%A6%E4%B9%A0%E7%9A%84%E8%BD%AF%E6%8A%80%E8%83%BD", "/posts/Chore/程序要需要学习的软技能.md", "/posts/Chore/%E7%A8%8B%E5%BA%8F%E8%A6%81%E9%9C%80%E8%A6%81%E5%AD%A6%E4%B9%A0%E7%9A%84%E8%BD%AF%E6%8A%80%E8%83%BD.md"]],
  ["v-73358dfa", "/posts/JS%E8%BF%9B%E9%98%B6-%E6%BA%90%E7%A0%81%E9%98%85%E8%AF%BB/Redux%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86.html", { "d": "2023-02-04T13:15:39.000Z", "e": '<h1> Redux实现原理</h1>\n<h2> 状态管理器</h2>\n<p>Redux是一个状态管理器，与react不强相关，只是react中使用的多。它也可以应用于其他框架。由React核心开发者Dan开源开发，缺点槽点很多，但这并不妨碍它是目前最流行的react状态管理解决方案。</p>\n<h3> 简单的状态管理实现</h3>\n<p>redux是一个状态管理器，状态指的就是数据，比如计数器中的count。</p>\n<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>\n	<span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', "r": { "minutes": 6.9, "words": 2069 }, "y": "a", "t": "Redux实现原理", "I": 1 }, ["/posts/JS进阶-源码阅读/Redux实现原理.html", "/posts/JS%E8%BF%9B%E9%98%B6-%E6%BA%90%E7%A0%81%E9%98%85%E8%AF%BB/Redux%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86", "/posts/JS进阶-源码阅读/Redux实现原理.md", "/posts/JS%E8%BF%9B%E9%98%B6-%E6%BA%90%E7%A0%81%E9%98%85%E8%AF%BB/Redux%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86.md"]],
  ["v-c341ed9c", "/posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/Filber.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> Fiber</h1>\n<h4> 回答关键的几个的地方</h4>\n<ol>\n<li>\n<p>递归树改成链表，可中断</p>\n</li>\n<li>\n<p>链表节点有4个关键属性，return父亲，child子节点，sibling兄弟，alternate拷贝</p>\n</li>\n<li>\n<p>DFS，一路到底，再向上遍历兄弟 就这几个就差不多了，基本不会再问了。其他再补充比如react自己实现了reaquestIdleCallback</p>\n</li>\n</ol>\n", "r": { "minutes": 0.3, "words": 90 }, "y": "a", "t": "Fiber", "I": 1 }, ["/posts/React相关解读/Filber.html", "/posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/Filber", "/posts/React相关解读/Filber.md", "/posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/Filber.md"]],
  ["v-1f21b52a", "/posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/React%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E4%B8%AD%E4%BD%BF%E7%94%A8%E9%98%B2%E6%8A%96%E8%8A%82%E6%B5%81.html", { "d": "2023-02-04T13:15:39.000Z", "e": '<h1> React函数组件中使用防抖节流</h1>\n<h5> 由于react组件变量变化会导致重复渲染的特性，不能直接的使用loadsh的debouce进行防抖。</h5>\n<h3> 解决思路： 使用useCallback保持防抖函数的唯一性，不重复渲染</h3>\n<p>例如：</p>\n<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">useDebounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token function">debounce</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>counter<span class="token punctuation">,</span> setCounter<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> handleClick <span class="token operator">=</span> <span class="token function">useDebounce</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setCounter</span><span class="token punctuation">(</span>counter <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>Button\n      onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span>\n    <span class="token operator">&gt;</span>click<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span>counter<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', "r": { "minutes": 1.23, "words": 369 }, "y": "a", "t": "React函数组件中使用防抖节流", "I": 1 }, ["/posts/React相关解读/React函数组件中使用防抖节流.html", "/posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/React%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E4%B8%AD%E4%BD%BF%E7%94%A8%E9%98%B2%E6%8A%96%E8%8A%82%E6%B5%81", "/posts/React相关解读/React函数组件中使用防抖节流.md", "/posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/React%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E4%B8%AD%E4%BD%BF%E7%94%A8%E9%98%B2%E6%8A%96%E8%8A%82%E6%B5%81.md"]],
  ["v-2a6b0260", "/posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/input.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 如何防止Input的拼音输入触发onChange</h1>\n<p>需要使用到<input>的两个厲性 compositionstart 和compositionEnd。下面来看看它们的MDN定义。\ncompositionstart：输入法编辑器开始新的输入法合成时触发的事件，例如，当用户使用拼音输入法开始输\n入汉字时，这个事件就会被触发。\ncompositionstart：同理可得，这是输入法合成完成后触发的事件，例如，当用户使用拼音输入法输入完拼\n音选中汉字时，这个事件就会被触发。\n我们可以在输入法合成时设置一个锁 1ock=true;在输入法合成结束时解除这个锁 1ock=fa lse，在锁生效期\n间onChange事件都return掉不触发，在输入法合成结束时再setlnputValue即可。需要注意的是，这么做的话我\n们的＜Input /＞组件必须设置为非受控，否则在拼音时，会因为此时锁生效不触发setlnputValue事件导致输入框\n一直为空，无任何输入。</p>", "r": { "minutes": 0.87, "words": 261 }, "y": "a", "t": "如何防止Input的拼音输入触发onChange", "I": 1 }, ["/posts/React相关解读/input.html", "/posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/input", "/posts/React相关解读/input.md", "/posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/input.md"]],
  ["v-68b2b365", "/posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/%E5%A6%82%E4%BD%95%E9%98%B2%E6%AD%A2Input%E7%9A%84%E6%8B%BC%E9%9F%B3%E8%BE%93%E5%85%A5%E8%A7%A6%E5%8F%91onChange.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 如何防止Input的拼音输入触发onChange</h1>\n<p>需要使用到<input>的两个厲性 compositionstart 和compositionEnd。下面来看看它们的MDN定义。\ncompositionstart：输入法编辑器开始新的输入法合成时触发的事件，例如，当用户使用拼音输入法开始输\n入汉字时，这个事件就会被触发。\ncompositionstart：同理可得，这是输入法合成完成后触发的事件，例如，当用户使用拼音输入法输入完拼\n音选中汉字时，这个事件就会被触发。\n我们可以在输入法合成时设置一个锁 lock=true;在输入法合成结束时解除这个锁 lock=false，在锁生效期\n间onChange事件都return掉不触发，在输入法合成结束时再setlnputValue即可。需要注意的是，这么做的话我\n们的＜Input /＞组件必须设置为非受控，否则在拼音时，会因为此时锁生效不触发setlnputValue事件导致输入框\n一直为空，无任何输入。</p>", "r": { "minutes": 1.14, "words": 342 }, "y": "a", "t": "如何防止Input的拼音输入触发onChange", "I": 1 }, ["/posts/React相关解读/如何防止Input的拼音输入触发onChange.html", "/posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/%E5%A6%82%E4%BD%95%E9%98%B2%E6%AD%A2Input%E7%9A%84%E6%8B%BC%E9%9F%B3%E8%BE%93%E5%85%A5%E8%A7%A6%E5%8F%91onChange", "/posts/React相关解读/如何防止Input的拼音输入触发onChange.md", "/posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/%E5%A6%82%E4%BD%95%E9%98%B2%E6%AD%A2Input%E7%9A%84%E6%8B%BC%E9%9F%B3%E8%BE%93%E5%85%A5%E8%A7%A6%E5%8F%91onChange.md"]],
  ["v-8b00529c", "/posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Vite%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E6%8B%A9Rollup%E5%81%9A%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> Vite 的技术选型设计</h1>\n<h2> 一、Vite生产环境为什么选择Rollup做构建工具。</h2>\n<p>Vite是一个由原生ESM驱动的Web开发构建工具。在选择构建工具的时候也最好可以选择基于ESM的工具。</p>\n<p>Rollup是基于ES2015的JavaScript打包工具。它将小文件打包成一个大文件或者更复杂的库和应用，打包既可用于浏览器和Node.js使用。 Rollup最显著的地方就是能让打包文件体积很小。相比其他JavaScript打包工具，Rollup总能打出更小，更快的包。因为Rollup基于ES2015模块，比Webpack和Browserify使用的CommonJS模块机制更高效。</p>", "r": { "minutes": 1.88, "words": 564 }, "y": "a", "t": "Vite 的技术选型设计", "I": 1 }, ["/posts/前端工程化/Vite生产环境为什么选择Rollup做构建工具.html", "/posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Vite%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E6%8B%A9Rollup%E5%81%9A%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7", "/posts/前端工程化/Vite生产环境为什么选择Rollup做构建工具.md", "/posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Vite%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E6%8B%A9Rollup%E5%81%9A%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7.md"]],
  ["v-db3b8e32", "/posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Webpack%E4%BC%98%E7%BC%BA%E7%82%B9.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> Webpack优缺点</h1>\n<p>现在前端主流的打包工具主要以 Webpack 为代表，但随着项目规模的发展，构建方面的痛点越来越突出，最大的感受就是<strong>太慢了</strong>，一方面项目冷启动时必须递归打包整个项目的依赖树，另一方面 JavaScript 语言本身(解释执行、单线程执行)的限制，导致构建性能遇到瓶颈。</p>\n<p>在这样的背景下，一些被称为 Bundleless (或者 Unbundled) 的构建工具应运而生，诸如 Snowpack、Vite，其中 Vite 最近在社区的呼声越来越高，GitHub 上的 star 30k+，甚至已经超过 vue3 仓库的 star 数(目前 24.1k)，可见其影响力之大。</p>", "r": { "minutes": 0.61, "words": 184 }, "y": "a", "t": "Webpack优缺点", "I": 1 }, ["/posts/前端工程化/Webpack优缺点.html", "/posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Webpack%E4%BC%98%E7%BC%BA%E7%82%B9", "/posts/前端工程化/Webpack优缺点.md", "/posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Webpack%E4%BC%98%E7%BC%BA%E7%82%B9.md"]],
  ["v-417f036a", "/posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/git%20cz%E7%9A%84%E9%85%8D%E7%BD%AE%E5%91%BD%E4%BB%A4.html", { "d": "2023-02-04T13:15:39.000Z", "e": `<h1> git cz的配置命令</h1>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g commitizen；

npm install -g conventional-changelog-cli；

npm install -g cz-conventional-changelog；

echo '{ "path": "cz-conventional-changelog" }' &gt; ~/.czrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`, "r": { "minutes": 0.12, "words": 36 }, "y": "a", "t": "git cz的配置命令", "I": 1 }, ["/posts/前端工程化/git cz的配置命令.html", "/posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/git%20cz%E7%9A%84%E9%85%8D%E7%BD%AE%E5%91%BD%E4%BB%A4", "/posts/前端工程化/git cz的配置命令.md", "/posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/git%20cz%E7%9A%84%E9%85%8D%E7%BD%AE%E5%91%BD%E4%BB%A4.md"]],
  ["v-640f9dee", "/posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/webpack%E4%B8%AD%E7%9A%84Loader%E5%92%8CPlugin%E5%8C%BA%E5%88%AB.html", { "d": "2023-02-04T13:15:39.000Z", "e": '<h1> webpack中的Loader和Plugin区别</h1>\n<h2> Loader</h2>\n<p>Loader：直译为"加载器"，主要是解析一些非js文件的，例如：<code>babel-loader</code>、 <code>less-loader</code>、<code>file-loader</code>等\nWebpack将一切文件视为模块，但是webpack原生是只能解析js文件，如果想将其他文件也打包的话，就会用到<code>loader</code>。 所以Loader的作用是让webpack拥有了加载和解析非JavaScript文件的能力。</p>\n<h2> Plugin</h2>', "r": { "minutes": 0.7, "words": 209 }, "y": "a", "t": "webpack中的Loader和Plugin区别", "I": 1 }, ["/posts/前端工程化/webpack中的Loader和Plugin区别.html", "/posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/webpack%E4%B8%AD%E7%9A%84Loader%E5%92%8CPlugin%E5%8C%BA%E5%88%AB", "/posts/前端工程化/webpack中的Loader和Plugin区别.md", "/posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/webpack%E4%B8%AD%E7%9A%84Loader%E5%92%8CPlugin%E5%8C%BA%E5%88%AB.md"]],
  ["v-4b7131b0", "/posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/webpack%E4%BB%8E0%E6%90%AD%E5%BB%BAreact%E9%A1%B9%E7%9B%AE.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> webpack从0搭建react项目</h1>\n<p>本教程不会涉及到任何的实现原理，只是 <strong>webpack 的使用</strong>和<strong>第三方库的使用</strong></p>\n<h1> 准备</h1>\n<p>后续补齐相关学习资料</p>\n<p>学习之前，你需要做一些知识的了解：</p>\n<ul>\n<li>node 入门（path模块，命令行）</li>\n<li>前端模块化入门</li>\n<li>webpack 入门</li>\n<li>babel 入门</li>\n<li>正则入门</li>\n</ul>\n<p><strong>请务必保证上述内容都至少了解的情况下，再开始学习本教程</strong></p>", "r": { "minutes": 15.31, "words": 4594 }, "y": "a", "t": "webpack从0搭建react项目", "I": 1 }, ["/posts/前端工程化/webpack从0搭建react项目.html", "/posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/webpack%E4%BB%8E0%E6%90%AD%E5%BB%BAreact%E9%A1%B9%E7%9B%AE", "/posts/前端工程化/webpack从0搭建react项目.md", "/posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/webpack%E4%BB%8E0%E6%90%AD%E5%BB%BAreact%E9%A1%B9%E7%9B%AE.md"]],
  ["v-0a3e262b", "/posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E5%89%8D%E7%AB%AF%E8%B7%AF%E7%94%B1%E7%9A%84%E4%B8%A4%E7%A7%8D%E6%A8%A1%E5%BC%8F.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 前端路由的两种模式： hash 模式和 history 模式</h1>\n<p>对于前端来说，hash路由和history路由都可以实现不刷新页面跳转的功能，也就是说都可以用于前后端分离的项目。</p>\n<h2> hash模式</h2>\n<p>这里的 hash 就是指 url 尾巴后的 # 号以及后面的字符。这里的 # 和 css 里的 # 是一个意思。hash 也 称作 锚点，本身是用来做页面定位的，她可以使对应 id 的元素显示在可视区域内。</p>\n<p>由于 hash 值变化不会导致浏览器向服务器发出请求，而且 hash 改变会触发 hashchange 事件，浏览器的进后退也能对其进行控制，所以人们在 html5 的 history 出现前，基本都是使用 hash 来实现前端路由的。</p>", "r": { "minutes": 3.71, "words": 1113 }, "y": "a", "t": "前端路由的两种模式： hash 模式和 history 模式", "I": 1 }, ["/posts/前端工程化/前端路由的两种模式.html", "/posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E5%89%8D%E7%AB%AF%E8%B7%AF%E7%94%B1%E7%9A%84%E4%B8%A4%E7%A7%8D%E6%A8%A1%E5%BC%8F", "/posts/前端工程化/前端路由的两种模式.md", "/posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E5%89%8D%E7%AB%AF%E8%B7%AF%E7%94%B1%E7%9A%84%E4%B8%A4%E7%A7%8D%E6%A8%A1%E5%BC%8F.md"]],
  ["v-ce6345e0", "/posts/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/%E4%BD%A0%E5%A6%82%E4%BD%95%E5%AF%B9%E7%BD%91%E7%AB%99%E7%9A%84%E6%96%87%E4%BB%B6%E5%92%8C%E8%B5%84%E6%BA%90%E8%BF%9B%E8%A1%8C%E4%BC%98%E5%8C%96%E7%9A%84%202979065a206a4a3d8c82ff7b672cab0c.html", { "d": "2023-02-04T13:15:39.000Z", "e": '<h1> 你如何对网站的文件和资源进行优化的</h1>\n<p>链接：</p>\n<p><a href="https://www.nowcoder.com/questionTerminal/89089a6c27fb4749bf73b25c347a2051" target="_blank" rel="noopener noreferrer">https://www.nowcoder.com/questionTerminal/89089a6c27fb4749bf73b25c347a2051</a></p>\n<ol>\n<li>尽可能减少http请求次数，将css, js, 图片各自合并</li>\n<li>使用CDN，降低通信距离</li>\n<li>添加Expire/Cache-Control头</li>\n<li>启用Gzip压缩文件</li>\n<li>将css放在页面最上面</li>\n<li>将script放在页面最下面</li>\n<li>避免在css中使用表达式</li>\n<li>将css, js都放在外部文件中</li>\n<li>减少DNS查询</li>\n<li>最小化css, js，减小文件体积</li>\n<li>避免重定向</li>\n<li>移除重复脚本</li>\n<li>配置实体标签ETag</li>\n</ol>', "r": { "minutes": 0.51, "words": 154 }, "y": "a", "t": "你如何对网站的文件和资源进行优化的", "I": 1 }, ["/posts/性能优化/你如何对网站的文件和资源进行优化的 2979065a206a4a3d8c82ff7b672cab0c.html", "/posts/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/%E4%BD%A0%E5%A6%82%E4%BD%95%E5%AF%B9%E7%BD%91%E7%AB%99%E7%9A%84%E6%96%87%E4%BB%B6%E5%92%8C%E8%B5%84%E6%BA%90%E8%BF%9B%E8%A1%8C%E4%BC%98%E5%8C%96%E7%9A%84%202979065a206a4a3d8c82ff7b672cab0c", "/posts/性能优化/你如何对网站的文件和资源进行优化的 2979065a206a4a3d8c82ff7b672cab0c.md", "/posts/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/%E4%BD%A0%E5%A6%82%E4%BD%95%E5%AF%B9%E7%BD%91%E7%AB%99%E7%9A%84%E6%96%87%E4%BB%B6%E5%92%8C%E8%B5%84%E6%BA%90%E8%BF%9B%E8%A1%8C%E4%BC%98%E5%8C%96%E7%9A%84%202979065a206a4a3d8c82ff7b672cab0c.md"]],
  ["v-61c606ba", "/posts/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/%E8%99%9A%E6%8B%9F%E5%88%97%E8%A1%A8.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 虚拟列表原理解析</h1>\n<h2> 前言</h2>\n<h3> 虚拟列表介绍</h3>\n<p>​	<strong>虚拟列表</strong>是解决<strong>大数据量渲染</strong>列表的一种方案。原理简述就是只渲染当前视口内的列表项。初次接触容易联想到浏览器的栅格化（raster），但是实现原理和类似于懒加载的栅格化不同，它始终只渲染当前视口的内容，而不是即将看到哪，就增加那块部分的渲染。</p>\n<p>通常，解决<strong>大数据量渲染</strong>问题有两种方案，一种是采用时间分片，另一种就是本文要谈的虚拟列表。在正文开始前，不妨简单了解一下第一种方案，<strong>时间分片</strong>。</p>", "r": { "minutes": 7.96, "words": 2387 }, "y": "a", "t": "虚拟列表原理解析", "I": 1 }, ["/posts/性能优化/虚拟列表.html", "/posts/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/%E8%99%9A%E6%8B%9F%E5%88%97%E8%A1%A8", "/posts/性能优化/虚拟列表.md", "/posts/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/%E8%99%9A%E6%8B%9F%E5%88%97%E8%A1%A8.md"]],
  ["v-0b88481a", "/posts/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/%E8%AF%B7%E8%AF%B4%E5%87%BA%E4%B8%89%E7%A7%8D%E5%87%8F%E5%B0%91%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD%E6%97%B6%E9%97%B4%E7%9A%84%E6%96%B9%E6%B3%95%E3%80%82%204f65bc03f263461bb0a38a4ef0dd8c48.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 请说出三种减少页面加载时间的方法。</h1>\n<p>1.减少HTTP请求；</p>\n<p>2.合并压缩Js/css文件；</p>\n<p>3.使用缓存manifest；</p>\n<p>4.服务器端开启gzip；</p>\n<p>5.使用CDN，用户可以就近获取所需要的资源，访问速度有保障，稳定性也有保障</p>\n<p>6.外部JS和CSS放底下</p>\n<p>7.尽可能少的操作DOM，某些需要重复操作的DOM可以放变量里</p>\n", "r": { "minutes": 0.37, "words": 111 }, "y": "a", "t": "请说出三种减少页面加载时间的方法。", "I": 1 }, ["/posts/性能优化/请说出三种减少页面加载时间的方法。 4f65bc03f263461bb0a38a4ef0dd8c48.html", "/posts/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/%E8%AF%B7%E8%AF%B4%E5%87%BA%E4%B8%89%E7%A7%8D%E5%87%8F%E5%B0%91%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD%E6%97%B6%E9%97%B4%E7%9A%84%E6%96%B9%E6%B3%95%E3%80%82%204f65bc03f263461bb0a38a4ef0dd8c48", "/posts/性能优化/请说出三种减少页面加载时间的方法。 4f65bc03f263461bb0a38a4ef0dd8c48.md", "/posts/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/%E8%AF%B7%E8%AF%B4%E5%87%BA%E4%B8%89%E7%A7%8D%E5%87%8F%E5%B0%91%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD%E6%97%B6%E9%97%B4%E7%9A%84%E6%96%B9%E6%B3%95%E3%80%82%204f65bc03f263461bb0a38a4ef0dd8c48.md"]],
  ["v-37a57d9f", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/ES5%E5%AE%9E%E7%8E%B0let%E4%B8%8Econst%203f9f5daaef2448dca1a3e7e8e8474461.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> ES5实现let与const</h1>\n<p>在es5中，没有块级作用域的概念，只有 <code>函数作用域</code> 的概念。</p>\n<p>webpack进行模块化打包的时候，也需要把不同的函数隔离开，使得各个模块的代码互不影响，它的实现原理也是 <code>IIFE</code></p>\n<h2> 实现let</h2>\n<p>使用 <code>IIFE</code> 可以很方便的创建一个块级作用域，在这个块级作用域之外的地方访问其中的变量都会报错。做到了 <code>let</code> 声明中<strong>隔离作用域</strong>和<strong>防止变量声明提升</strong>的概念。</p>", "r": { "minutes": 1.99, "words": 596 }, "y": "a", "t": "ES5实现let与const", "I": 1 }, ["/posts/手写算法系列/ES5实现let与const 3f9f5daaef2448dca1a3e7e8e8474461.html", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/ES5%E5%AE%9E%E7%8E%B0let%E4%B8%8Econst%203f9f5daaef2448dca1a3e7e8e8474461", "/posts/手写算法系列/ES5实现let与const 3f9f5daaef2448dca1a3e7e8e8474461.md", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/ES5%E5%AE%9E%E7%8E%B0let%E4%B8%8Econst%203f9f5daaef2448dca1a3e7e8e8474461.md"]],
  ["v-36c6d27b", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%BB%93%E9%A2%98%E6%80%9D%E8%B7%AF.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 动态规划解题思路</h1>\n<h1> 01背包问题</h1>\n<p>给你一个可装载重量为W的背包和N个物品，每个物品有重量和价值两个属性。其中第i个物品的重量为wt[i]， 价值为val[i]， 现在让你用这个背包装物品，最多能装的价值是多少？</p>\n<h2> 动态规划解题思路</h2>\n<p><strong>一、明确【状态】和【选择】</strong></p>\n<p>可选物品</p>\n<p>背包的容量限制</p>\n<p>状态有两个：</p>\n<ol>\n<li>可选择的物品</li>\n<li>背包的容量</li>\n</ol>\n<p>选择有两个：</p>\n<ol>\n<li>装进背包</li>\n<li>不装进背包</li>\n</ol>", "r": { "minutes": 2.16, "words": 647 }, "y": "a", "t": "动态规划解题思路", "I": 1 }, ["/posts/手写算法系列/动态规划结题思路.html", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%BB%93%E9%A2%98%E6%80%9D%E8%B7%AF", "/posts/手写算法系列/动态规划结题思路.md", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%BB%93%E9%A2%98%E6%80%9D%E8%B7%AF.md"]],
  ["v-0a39012e", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E5%8F%AF%E9%80%86%E5%BA%8F%E6%89%A7%E8%A1%8C%E4%B8%B2%E8%81%94%E5%87%BD%E6%95%B0.html", { "d": "2023-02-04T13:15:39.000Z", "e": '<h1> 可逆序执行串联函数</h1>\n<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> middleware <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nmiddleware<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmiddleware<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmiddleware<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> fn <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span>middleware<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 实现comopse使得输出为1 2 3 3.1 2.1 1.1</span>\n<span class="token keyword">function</span> <span class="token function">compose</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', "r": { "minutes": 0.27, "words": 80 }, "y": "a", "t": "可逆序执行串联函数", "I": 1 }, ["/posts/手写算法系列/可逆序执行串联函数.html", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E5%8F%AF%E9%80%86%E5%BA%8F%E6%89%A7%E8%A1%8C%E4%B8%B2%E8%81%94%E5%87%BD%E6%95%B0", "/posts/手写算法系列/可逆序执行串联函数.md", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E5%8F%AF%E9%80%86%E5%BA%8F%E6%89%A7%E8%A1%8C%E4%B8%B2%E8%81%94%E5%87%BD%E6%95%B0.md"]],
  ["v-70d1a412", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E5%A4%9A%E5%BC%82%E6%AD%A5%E4%BB%BB%E5%8A%A1%E4%BF%9D%E6%8C%813%E4%B8%AA%E5%B9%B6%E5%8F%91.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 有20个异步请求，如何保持同时三个的并发</h1>\n", "r": { "minutes": 0.06, "words": 18 }, "y": "a", "t": "有20个异步请求，如何保持同时三个的并发", "I": 1 }, ["/posts/手写算法系列/多异步任务保持3个并发.html", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E5%A4%9A%E5%BC%82%E6%AD%A5%E4%BB%BB%E5%8A%A1%E4%BF%9D%E6%8C%813%E4%B8%AA%E5%B9%B6%E5%8F%91", "/posts/手写算法系列/多异步任务保持3个并发.md", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E5%A4%9A%E5%BC%82%E6%AD%A5%E4%BB%BB%E5%8A%A1%E4%BF%9D%E6%8C%813%E4%B8%AA%E5%B9%B6%E5%8F%91.md"]],
  ["v-b16f5fc6", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E5%8F%AF%E9%93%BE%E5%BC%8F%E8%B0%83%E7%94%A8%E3%80%81%E5%8F%AF%E7%AD%89%E5%BE%85%E6%89%A7%E8%A1%8C%E7%9A%84%E7%B1%BB%203ff786584ab24b19b3bca0b613b1a1a5.html", { "d": "2023-02-04T13:15:39.000Z", "e": '<h1> 实现一个可链式调用、可等待执行的类</h1>\n<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">const</span> ny <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NiceTry</span><span class="token punctuation">(</span><span class="token string">"jack"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nny<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token string">"吃饭"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token string">"玩游戏"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">/**\njack\n等待了2000秒...\n我在吃饭\n等待了1000秒...\n我在玩游戏\n*/</span>\n\n<span class="token keyword">class</span> <span class="token class-name">NiceTry</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', "r": { "minutes": 0.77, "words": 231 }, "y": "a", "t": "实现一个可链式调用、可等待执行的类", "I": 1 }, ["/posts/手写算法系列/实现一个可链式调用、可等待执行的类 3ff786584ab24b19b3bca0b613b1a1a5.html", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E5%8F%AF%E9%93%BE%E5%BC%8F%E8%B0%83%E7%94%A8%E3%80%81%E5%8F%AF%E7%AD%89%E5%BE%85%E6%89%A7%E8%A1%8C%E7%9A%84%E7%B1%BB%203ff786584ab24b19b3bca0b613b1a1a5", "/posts/手写算法系列/实现一个可链式调用、可等待执行的类 3ff786584ab24b19b3bca0b613b1a1a5.md", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E5%8F%AF%E9%93%BE%E5%BC%8F%E8%B0%83%E7%94%A8%E3%80%81%E5%8F%AF%E7%AD%89%E5%BE%85%E6%89%A7%E8%A1%8C%E7%9A%84%E7%B1%BB%203ff786584ab24b19b3bca0b613b1a1a5.md"]],
  ["v-6795f498", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E6%AF%94%E8%BE%83%E4%B8%A4%E4%B8%AA%E5%AF%B9%E8%B1%A1%E6%98%AF%E5%90%A6%E5%85%A8%E7%AD%89.html", { "d": "2023-02-04T13:15:39.000Z", "e": '<h1> 比较两个对象是否全等</h1>\n<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>location<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>', "r": { "minutes": 0.06, "words": 17 }, "y": "a", "t": "比较两个对象是否全等", "I": 1 }, ["/posts/手写算法系列/比较两个对象是否全等.html", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E6%AF%94%E8%BE%83%E4%B8%A4%E4%B8%AA%E5%AF%B9%E8%B1%A1%E6%98%AF%E5%90%A6%E5%85%A8%E7%AD%89", "/posts/手写算法系列/比较两个对象是否全等.md", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E6%AF%94%E8%BE%83%E4%B8%A4%E4%B8%AA%E5%AF%B9%E8%B1%A1%E6%98%AF%E5%90%A6%E5%85%A8%E7%AD%89.md"]],
  ["v-1bdc6284", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E6%B7%B1%E6%8B%B7%E8%B4%9D.html", { "d": "2023-02-04T13:15:39.000Z", "e": '<h2> JS深拷贝实现</h2>\n<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> obj<span class="token punctuation">;</span> \n    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Date</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">RegExp</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">"object"</span><span class="token punctuation">)</span> <span class="token keyword">return</span> obj<span class="token punctuation">;</span>\n    <span class="token keyword">let</span> cloneObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">obj<span class="token punctuation">.</span>constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 实现一个递归拷贝</span>\n        cloneObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> cloneObj<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', "r": { "minutes": 0.21, "words": 64 }, "y": "a", "t": "", "I": 1 }, ["/posts/手写算法系列/深拷贝.html", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E6%B7%B1%E6%8B%B7%E8%B4%9D", "/posts/手写算法系列/深拷贝.md", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E6%B7%B1%E6%8B%B7%E8%B4%9D.md"]],
  ["v-925b3b1a", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/Event%20Loop%E5%9C%A8%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%AD%E5%92%8CNode%E7%8E%AF%E5%A2%83%E4%B8%AD%E7%9A%84%E5%8C%BA%E5%88%AB.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> Event Loop在浏览器中和Node环境中的区别</h1>\n<h2> 浏览器中的Event Loop</h2>\n<p>事件循环中的异步队列有两种：macro（宏任务）队列和 micro（微任务）队列。宏任务队列可以有多个，微任务队列只有一个。\n常见的 macro-task 比如：setTimeout、setInterval、 setImmediate、script（整体代码）、 I/O 操作、UI 渲染等。\n常见的 micro-task 比如: process.nextTick、new Promise().then(回调)、MutationObserver(html5 新特性) 等。</p>", "r": { "minutes": 2.32, "words": 696 }, "y": "a", "t": "Event Loop在浏览器中和Node环境中的区别", "I": 1 }, ["/posts/浏览器相关知识/Event Loop在浏览器中和Node环境中的区别.html", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/Event%20Loop%E5%9C%A8%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%AD%E5%92%8CNode%E7%8E%AF%E5%A2%83%E4%B8%AD%E7%9A%84%E5%8C%BA%E5%88%AB", "/posts/浏览器相关知识/Event Loop在浏览器中和Node环境中的区别.md", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/Event%20Loop%E5%9C%A8%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%AD%E5%92%8CNode%E7%8E%AF%E5%A2%83%E4%B8%AD%E7%9A%84%E5%8C%BA%E5%88%AB.md"]],
  ["v-09c2bb22", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/HTTP1%20x%E5%92%8CHTTP2%200%E5%8C%BA%E5%88%AB.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> HTTP1.x和HTTP2.0区别</h1>\n<p>HTTP2采用二进制格式传输，取代了HTTP1.x的文本格式，二进制格式解析更高效。多路复用代替了HTTP1.x的序列和阻塞机制，所有的相同域名请求都通过同一个TCP连接并发完成。在HTTP1.x中，并发多个请求需要多个TCP连接，浏览器为了控制资源会有6-8个TCP连接都限制。</p>\n<p><strong>HTTP2中</strong></p>\n<ul>\n<li>同域名下所有通信都在单个连接上完成，消除了因多个 TCP 连接而带来的延时和内存消耗。</li>\n<li>单个连接上可以并行交错的请求和响应，之间互不干扰</li>\n</ul>", "r": { "minutes": 2.29, "words": 688 }, "y": "a", "t": "HTTP1.x和HTTP2.0区别", "I": 1 }, ["/posts/浏览器相关知识/HTTP1 x和HTTP2 0区别.html", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/HTTP1%20x%E5%92%8CHTTP2%200%E5%8C%BA%E5%88%AB", "/posts/浏览器相关知识/HTTP1 x和HTTP2 0区别.md", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/HTTP1%20x%E5%92%8CHTTP2%200%E5%8C%BA%E5%88%AB.md"]],
  ["v-43a90af2", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/Http%E7%9A%84session%E5%92%8Ccookie.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> Http的session和cookie</h1>\n<p>cookie算是session的一种实现方式。由于http无状态的特性，服务端想要知道是哪个用户请求的接口，就必须有一个标识来确认，服务端通过某种机制获取用户信息，就是一个典型的<strong>session</strong>场景。现在主流的方案是cookie里携带一个session的id标识，服务端拿到这个id后，查询得知是哪个用户调的接口。</p>\n<blockquote>\n<p>服务端保存Session的方法很多，内存、数据库、文件都有。集群的时候也要考虑Session的转移，在大型的网站，一般会有专门的Session服务器集群，用来保存用户会话，这个时候 Session 信息都是放在内存的，使用一些缓存服务比如Memcached之类的来放 Session。</p>\n</blockquote>", "r": { "minutes": 0.92, "words": 275 }, "y": "a", "t": "Http的session和cookie", "I": 1 }, ["/posts/浏览器相关知识/Http的session和cookie.html", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/Http%E7%9A%84session%E5%92%8Ccookie", "/posts/浏览器相关知识/Http的session和cookie.md", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/Http%E7%9A%84session%E5%92%8Ccookie.md"]],
  ["v-1e7178c0", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%92%8C%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 三次握手和四次挥手</h1>\n<blockquote>\n<p>客户端和服务器建立通信的过程中要进行三次握手，结束通信要进行四次挥手。</p>\n</blockquote>\n<p>其实”握手“这一词本身是具有歧义的，”握手“不应该是双方手掌接触互相传输信息吗?<br>\n已经搞懂本文的同学会发现，其实三次握手就是三次单向交流的过程，即我告诉你，你告诉我，我再告诉你。</p>\n<p>好吧，暂且不管哪个傻吊取得这个名字。我们回到正题，首先了解一下为什么需要三次握手吧，让我们带着好奇心搞懂本文。</p>\n<h3> 假设客户端和服务器直接进行连接，会出现什么问题?</h3>\n<p>由于网络传输是有延时的(要通过网络光纤和各种中间代理服务器)，在传输的过程中，比如客户端发起了 SYN=1 创建连接的请求(第一次握手)。</p>", "r": { "minutes": 7.33, "words": 2200 }, "y": "a", "t": "三次握手和四次挥手", "I": 1 }, ["/posts/浏览器相关知识/三次握手和四次挥手.html", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%92%8C%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B", "/posts/浏览器相关知识/三次握手和四次挥手.md", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%92%8C%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B.md"]],
  ["v-4192394a", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E4%BA%8B%E4%BB%B6%E4%BB%A3%E7%90%86%E7%9A%84%E7%90%86%E8%A7%A3.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 事件代理（委托）的理解</h1>\n<p>事件代理是指通过监听父元素并绑定函数，达到子元素触发事件时引发的事件冒泡，然后触发父元素绑定的函数。</p>\n<blockquote>\n<p>形象的比喻：爹有3个儿，监听爹，给爹绑定一条指令，孩子读书的时候，爹要交学费。  大娃上学了，大娃的事件触发，事件冒泡到爹（大娃告诉爹 ps: nodeName：大娃）， 爹给大娃交学费（爹的函数中给大娃的属性做些操作），这就是一个事件代理的思想，不需要给每个娃绑定事件，而是给爹绑定事件。 （reonce原创）</p>\n</blockquote>\n<p>由于事件流的特性，可以把多个事件函数减为一个，对于不同的元素可以有不同的处理方法。</p>", "r": { "minutes": 1.66, "words": 499 }, "y": "a", "t": "事件代理（委托）的理解", "I": 1 }, ["/posts/浏览器相关知识/事件代理的理解.html", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E4%BA%8B%E4%BB%B6%E4%BB%A3%E7%90%86%E7%9A%84%E7%90%86%E8%A7%A3", "/posts/浏览器相关知识/事件代理的理解.md", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E4%BA%8B%E4%BB%B6%E4%BB%A3%E7%90%86%E7%9A%84%E7%90%86%E8%A7%A3.md"]],
  ["v-1e5b26d9", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E5%89%8D%E7%AB%AF%E7%9A%84%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D%EF%BC%8C%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 前端的内存分配，垃圾回收</h1>\n<h2> 内存的生命周期</h2>\n<ul>\n<li>内存分配： 生命变量，函数，对象的时候，js会自动分配内存</li>\n<li>内存使用： 调用的时候，使用的时候</li>\n<li>内存回收： 下面讲</li>\n</ul>\n<h2> js中的垃圾回收机制</h2>\n<h3> <strong>引用计数垃圾回收</strong></h3>\n<p>如果a对象对b对象有访问权限，那么称为a引用b对象。</p>\n<p>检查b有没有被引用，如果没有使用了，回收。</p>\n<p>缺陷： <strong>循环引用</strong>，a引用了b，b也引用了a，造成内存泄漏。</p>", "r": { "minutes": 2, "words": 599 }, "y": "a", "t": "前端的内存分配，垃圾回收", "I": 1 }, ["/posts/浏览器相关知识/前端的内存分配，垃圾回收.html", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E5%89%8D%E7%AB%AF%E7%9A%84%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D%EF%BC%8C%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6", "/posts/浏览器相关知识/前端的内存分配，垃圾回收.md", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E5%89%8D%E7%AB%AF%E7%9A%84%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D%EF%BC%8C%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6.md"]],
  ["v-42badac9", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E6%91%86%E8%84%B1%20console.log%20%EF%BC%8C%E4%BD%BF%E7%94%A8%E6%9B%B4%E4%BC%98%E8%B4%A8%E7%9A%84%E5%89%8D%E7%AB%AF%E8%B0%83%E8%AF%95%E6%96%B9%E6%A1%88.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 摆脱 console.log ，使用更优质的前端调试方案</h1>\n<p>程序调试是程序开发必不可少的一环，刚开始接触前端调试时，最常用的就是 <code>console.log</code> 打印变量进行调试，本文会分享一些笔者学习到的前端调试方法，减少对 <code>console.log</code> 调试方式的依赖，选择更优质的前端调试方案。</p>\n<blockquote>\n<p>本文中提到的 <code>command</code> 键，在 Windows 系统中用 <code>control</code> 键替代即可</p>\n</blockquote>\n<h2> 1. 为什么不用 console.log 一把梭</h2>", "r": { "minutes": 6.25, "words": 1876 }, "y": "a", "t": "摆脱 console.log ，使用更优质的前端调试方案", "I": 1 }, ["/posts/浏览器相关知识/摆脱 console.log ，使用更优质的前端调试方案.html", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E6%91%86%E8%84%B1%20console.log%20%EF%BC%8C%E4%BD%BF%E7%94%A8%E6%9B%B4%E4%BC%98%E8%B4%A8%E7%9A%84%E5%89%8D%E7%AB%AF%E8%B0%83%E8%AF%95%E6%96%B9%E6%A1%88", "/posts/浏览器相关知识/摆脱 console.log ，使用更优质的前端调试方案.md", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E6%91%86%E8%84%B1%20console.log%20%EF%BC%8C%E4%BD%BF%E7%94%A8%E6%9B%B4%E4%BC%98%E8%B4%A8%E7%9A%84%E5%89%8D%E7%AB%AF%E8%B0%83%E8%AF%95%E6%96%B9%E6%A1%88.md"]],
  ["v-444987b6", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%A4%9A%E8%AF%AD%E8%A8%80.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 浏览器多语言</h1>\n<p>首先采用utf-8编码</p>\n<p>针对静态的，就准备多套路由文件，通过路径区分，例如MDN等</p>\n<p>针对动态的，通过语言变量Ln_name去判断，传给后端呈现</p>\n<p>多语言网站实现计划 ：</p>\n<p>1、静态：就是为每种语言分辨准备一套页面文件，要么通过文件后缀名来区分不同语言，要么通过子目录来区分不同语言。例如对于首页文件index_en.htm供给英语界面，index_gb.htm供给简体中文界面，index_big.htm供给繁体中文界面，或者是en/index.htm供给英语界面，gb/index.htm供给简体中文界面，big/index.htm供给繁体中文界面，一旦用户选择了需要的语言后，主动跳转到相应的页面，首页以下其他链接也是按照同样方法处理。从保护的角度来看，通过子目录比通过文件后缀名来区分不同语言版本显得要简略明了。2，动态：站点内所有页面文件都是动态页面文件（PHP，ASP等）而不是静态页面文件，在需要输出语言文字的处所同一采用语言变量来表现，这些语言变量可以根据用户选择不同的语言赋予不同的值，从而能够实现在不同的语言环境下输出不同的文字。例如：语言变量ln_name，当用户选择的语言是英语时赋值为“Name”，当用户选择的语言是简体中文时赋值为“姓名”，这样就可以适应不同语言时的输出。采用静态方法的长处是页面直接输出到客户端，不需要在服务器上运行，占用服务器的资源比拟少，系统能够支撑的并发连接数较多，毛病是要为每种语言制作一套页面文件，很多内容即使是和语言无关的也要分不同语言来存储，因此占用的存储空间较多。采用动态方法和静态方法的优毛病正好相反，它的长处是动态页面文件只有一套，不同语言的文字应用语言变量来存储，和语言无关的内容只存储一份，占用的存储空间较少，并且扩大新语言比拟轻易，毛病需要在服务器上运行，然后把成果输进到客户端，占用服务器的资源比拟多，系统能够支撑的并发连接数较少。</p>", "r": { "minutes": 2.18, "words": 655 }, "y": "a", "t": "浏览器多语言", "I": 1 }, ["/posts/浏览器相关知识/浏览器多语言.html", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%A4%9A%E8%AF%AD%E8%A8%80", "/posts/浏览器相关知识/浏览器多语言.md", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%A4%9A%E8%AF%AD%E8%A8%80.md"]],
  ["v-6901a767", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E8%B7%A8%E5%9F%9F%E6%89%A7%E8%A1%8C%E3%80%81HTTP%E7%AE%80%E5%8D%95%E5%A4%8D%E6%9D%82%E8%AF%B7%E6%B1%82.html", { "d": "2023-02-04T13:15:39.000Z", "e": '<h1> 跨域执行、HTTP简单复杂请求</h1>\n<h1> 跨域问题</h1>\n<p><a href="https://reonce.github.io/2022/06/11/%E8%B7%A8%E5%9F%9F%E8%AF%A6%E8%A7%A3/" target="_blank" rel="noopener noreferrer">https://reonce.github.io/2022/06/11/跨域详解/</a></p>\n<h1> <strong>跨域的请求在服务端会不会真正执行？</strong></h1>\n<h2> <strong>跨域请求的拦截</strong></h2>\n', "r": { "minutes": 3.97, "words": 1192 }, "y": "a", "t": "跨域执行、HTTP简单复杂请求", "I": 1 }, ["/posts/浏览器相关知识/跨域执行、HTTP简单复杂请求.html", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E8%B7%A8%E5%9F%9F%E6%89%A7%E8%A1%8C%E3%80%81HTTP%E7%AE%80%E5%8D%95%E5%A4%8D%E6%9D%82%E8%AF%B7%E6%B1%82", "/posts/浏览器相关知识/跨域执行、HTTP简单复杂请求.md", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E8%B7%A8%E5%9F%9F%E6%89%A7%E8%A1%8C%E3%80%81HTTP%E7%AE%80%E5%8D%95%E5%A4%8D%E6%9D%82%E8%AF%B7%E6%B1%82.md"]],
  ["v-cc5e397e", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E8%B7%A8%E5%9F%9F%E8%AF%A6%E8%A7%A3.html", { "d": "2023-02-04T13:15:39.000Z", "e": '<h1> 跨域详解</h1>\n<p>跨域问题是一道经典的题目了，本文将解读并用代码实现跨域的解决方案。</p>\n<h2> 什么是跨域</h2>\n<p>跨域是浏览器的一种安全策略（同源策略），它要求一个网址的请求必须有相同的域名、端口和协议，否则无法正常请求，形成“跨域”。</p>\n<p>一个域名地址的组成：</p>\n<ul>\n<li>http://  ⇒ 协议</li>\n<li>www. ⇒ 子域名</li>\n<li><a href="http://abc.com" target="_blank" rel="noopener noreferrer">abc.com</a> ⇒主域名</li>\n<li>: 8080 ⇒ 端口号</li>\n<li>/script/jquery.js ⇒ 请求资源地址</li>\n</ul>', "r": { "minutes": 8.36, "words": 2509 }, "y": "a", "t": "跨域详解", "I": 1 }, ["/posts/浏览器相关知识/跨域详解.html", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E8%B7%A8%E5%9F%9F%E8%AF%A6%E8%A7%A3", "/posts/浏览器相关知识/跨域详解.md", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E8%B7%A8%E5%9F%9F%E8%AF%A6%E8%A7%A3.md"]],
  ["v-0ec8fb2a", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/Array.from%20%E6%96%B9%E6%B3%95%E6%B7%B1%E5%BA%A6%E8%A7%A3%E8%AF%BB.html", { "d": "2023-02-05T03:47:16.000Z", "e": '<h1> Array.from 方法深度解读</h1>\n<p>先看下MDN官方介绍:\n<strong>Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。</strong>\n创建一个新的、浅拷贝的数组，这里最开始很难理解这句话。“新的”或许代表着深拷贝？ 但是为什么又说是创建浅拷贝呢。\n这里放一段让我对<code>Array.from</code><strong>浅拷贝</strong>疑惑的代码</p>\n<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> copyArr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>\ncopyArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>copyArr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [8, 2, 3]</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1,2,3]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', "r": { "minutes": 2.45, "words": 736 }, "y": "a", "t": "Array.from 方法深度解读", "I": 1 }, ["/posts/JavaScipt基础/JavaScript方法/Array.from 方法深度解读.html", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/Array.from%20%E6%96%B9%E6%B3%95%E6%B7%B1%E5%BA%A6%E8%A7%A3%E8%AF%BB", "/posts/JavaScipt基础/JavaScript方法/Array.from 方法深度解读.md", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/Array.from%20%E6%96%B9%E6%B3%95%E6%B7%B1%E5%BA%A6%E8%A7%A3%E8%AF%BB.md"]],
  ["v-1d9b7dc0", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/JSON%E6%96%B9%E6%B3%95.html", { "d": "2023-02-04T13:15:39.000Z", "e": '<h1> JSON方法</h1>\n<p>JSON 是语言无关的纯数据规范，因此一些特定于 JavaScript 的对象属性会被 <code>JSON.stringify</code> 跳过。</p>\n<p>即：</p>\n<ul>\n<li>函数属性（方法）。</li>\n<li>Symbol 类型的属性。</li>\n<li>存储 <code>undefined</code> 的属性。</li>\n</ul>\n<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 被忽略</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token comment">// 被忽略</span>\n  <span class="token literal-property property">something</span><span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token comment">// 被忽略</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">alert</span><span class="token punctuation">(</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {}（空对象）</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', "r": { "minutes": 3.03, "words": 910 }, "y": "a", "t": "JSON方法", "I": 1 }, ["/posts/JavaScipt基础/JavaScript方法/JSON方法.html", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/JSON%E6%96%B9%E6%B3%95", "/posts/JavaScipt基础/JavaScript方法/JSON方法.md", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/JSON%E6%96%B9%E6%B3%95.md"]],
  ["v-ce4f1900", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/JS%E5%A4%B1%E7%9C%9F%E8%BF%90%E7%AE%97%E7%9A%84%E5%8E%9F%E5%9B%A0.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 关于JS失真运算0.55*100=55.0000001</h1>\n<p><em>今天写业务偶然实现了<code> 0.55*100</code>的代码，结果不尽人意，等于55.0000001</em></p>\n<hr>\n<p>这好吗? 这不好。原因如下：</p>\n<p>在JS中，变量存储没有区分数字型和浮点型，而是统一作为浮点型(float)进行存储，这在很久前学习时有个模糊的印象。\n查阅资料，IEEE 754-2008 标准定义的64bit浮点格式存储number.</p>\n<p>其实JavsScript中，变量在存储时并不区分number和float类型，而是统一按float存储，而javascript使用IEEE 754-2008 标准定义的64bit浮点格式存储number，<code>0.55</code>对应的整形部分长度为0,小数部分长度为16，所以默认的计算结果为“55.0000001”，如最后一个小数为0，则取1作为有效数字标志。类似地，可以想像，1/3的结果应该是0.3333333333333333。</p>", "r": { "minutes": 0.85, "words": 256 }, "y": "a", "t": "关于JS失真运算0.55*100=55.0000001", "I": 1 }, ["/posts/JavaScipt基础/JavaScript方法/JS失真运算的原因.html", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/JS%E5%A4%B1%E7%9C%9F%E8%BF%90%E7%AE%97%E7%9A%84%E5%8E%9F%E5%9B%A0", "/posts/JavaScipt基础/JavaScript方法/JS失真运算的原因.md", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/JS%E5%A4%B1%E7%9C%9F%E8%BF%90%E7%AE%97%E7%9A%84%E5%8E%9F%E5%9B%A0.md"]],
  ["v-e0a87c6e", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/JS%E5%AF%B9%E8%B1%A1%E4%B8%AD%E7%9A%84with%E8%AF%AD%E5%8F%A5.html", { "d": "2023-02-04T13:15:39.000Z", "e": '<h1> JS对象中的with语句</h1>\n<p><code>with</code>语句的格式如下：</p>\n<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>with (对象) {\n  语句;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', "r": { "minutes": 1.29, "words": 388 }, "y": "a", "t": "JS对象中的with语句", "I": 1 }, ["/posts/JavaScipt基础/JavaScript方法/JS对象中的with语句.html", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/JS%E5%AF%B9%E8%B1%A1%E4%B8%AD%E7%9A%84with%E8%AF%AD%E5%8F%A5", "/posts/JavaScipt基础/JavaScript方法/JS对象中的with语句.md", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/JS%E5%AF%B9%E8%B1%A1%E4%B8%AD%E7%9A%84with%E8%AF%AD%E5%8F%A5.md"]],
  ["v-77797307", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/Proxy%E5%92%8CObject.defineProperty%E7%9A%84%E5%8C%BA%E5%88%AB.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> Proxy和Object.defineProperty的区别</h1>\n<p><strong>Proxy的优势如下</strong></p>\n<ul>\n<li>Proxy可以直接监听整个对象而非属性。</li>\n<li>Proxy可以直接监听数组的变化。</li>\n<li>Proxy有13中拦截方法，如<code>ownKeys、deleteProperty、has</code> 等是 <code>Object.defineProperty</code> 不具备的。</li>\n<li>Proxy返回的是一个新对象，我们可以只操作新的对象达到目的，而<code>Object.defineProperty</code>只能遍历对象属性直接修改， 性能角度要好;</li>\n<li>Proxy做为新标准将受到浏览器产商重点持续的性能优化,也就是传说中的新标准的性能红利。</li>\n</ul>", "r": { "minutes": 0.99, "words": 297 }, "y": "a", "t": "Proxy和Object.defineProperty的区别", "I": 1 }, ["/posts/JavaScipt基础/JavaScript方法/Proxy和Object.defineProperty的区别.html", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/Proxy%E5%92%8CObject.defineProperty%E7%9A%84%E5%8C%BA%E5%88%AB", "/posts/JavaScipt基础/JavaScript方法/Proxy和Object.defineProperty的区别.md", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/Proxy%E5%92%8CObject.defineProperty%E7%9A%84%E5%8C%BA%E5%88%AB.md"]],
  ["v-2ab47c70", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/async%E7%9A%84%E4%BA%A7%E7%94%9F%EF%BC%8C%E7%94%9F%E6%88%90%E5%99%A8%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB.html", { "d": "2023-02-04T13:15:39.000Z", "e": `<h1> async的产生，生成器相关解读</h1>
<p>ES2017 标准引入了 async 函数，使得异步操作变得更加方便。</p>
<p>async 函数是什么？一句话，它就是 Generator 函数的语法糖。</p>
<p>关于 Generator 函数，依次读取两个文件。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">readFile</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fileName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>fileName<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">gen</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> f1 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'/etc/fstab'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> f2 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'/etc/shells'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f1<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f2<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`, "r": { "minutes": 1.79, "words": 537 }, "y": "a", "t": "async的产生，生成器相关解读", "I": 1 }, ["/posts/JavaScipt基础/JavaScript方法/async的产生，生成器相关解读.html", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/async%E7%9A%84%E4%BA%A7%E7%94%9F%EF%BC%8C%E7%94%9F%E6%88%90%E5%99%A8%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB", "/posts/JavaScipt基础/JavaScript方法/async的产生，生成器相关解读.md", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/async%E7%9A%84%E4%BA%A7%E7%94%9F%EF%BC%8C%E7%94%9F%E6%88%90%E5%99%A8%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB.md"]],
  ["v-102063fb", "/posts/%E6%84%9F%E6%82%9F/%E5%BA%94%E8%AF%A5%E6%8A%8A%E7%B2%BE%E5%8A%9B%E6%8A%95%E5%85%A5%E5%88%B0%E5%93%AA%E4%BA%9B%E4%BA%8B%E6%83%85%E4%B8%8A.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 应该把精力投入到哪些事情上</h1>\n<p>尽管我的个人理念是偏享受型的，基本认同人生苦短，及时行乐。但是很多时候为了短期的行乐影响到未来更加长久的行乐，这是不健康的。</p>\n<p>同级的同学已经通过接私活+炒股的方式买房了，甚至在尝试创业开公司。</p>\n<p>而我在为买一台macbook纠结许久。不知不觉中人与人的差距就拉开了，我一直不擅与人交往，在实习的公司也没有留下比较好的印象，以至于那家公司现在有外包项目或是维护项目都是找其他人。接熟人私活这条途径基本上走不通。炒股基金我也一窍不通，并且买了就想一直看，没有一个成熟的心态去观察。那么我安慰自己在准备知识进大厂，实际上准备进度很迟缓，看上去是学到了很多，但是随意对比一个面经就能感受到自己离大厂的距离。</p>", "r": { "minutes": 1.18, "words": 353 }, "y": "a", "t": "应该把精力投入到哪些事情上", "I": 1 }, ["/posts/感悟/应该把精力投入到哪些事情上.html", "/posts/%E6%84%9F%E6%82%9F/%E5%BA%94%E8%AF%A5%E6%8A%8A%E7%B2%BE%E5%8A%9B%E6%8A%95%E5%85%A5%E5%88%B0%E5%93%AA%E4%BA%9B%E4%BA%8B%E6%83%85%E4%B8%8A", "/posts/感悟/应该把精力投入到哪些事情上.md", "/posts/%E6%84%9F%E6%82%9F/%E5%BA%94%E8%AF%A5%E6%8A%8A%E7%B2%BE%E5%8A%9B%E6%8A%95%E5%85%A5%E5%88%B0%E5%93%AA%E4%BA%9B%E4%BA%8B%E6%83%85%E4%B8%8A.md"]],
  ["v-5bd6fcb6", "/posts/%E6%84%9F%E6%82%9F/%E6%97%B6%E9%97%B4%E7%AE%A1%E7%90%86.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 时间管理</h1>\n<h2> 认清现状</h2>\n<ul>\n<li>技术提升</li>\n</ul>\n<p>现在个人的提高是很有限的，几乎是在工作中提高，偶尔从技术文章、视频中提高。</p>\n<ol>\n<li>在工作中遇到一些复杂的业务，解除一些业务难点，解决的过程中得到了提升。</li>\n<li>偶尔得闲去看一些技术文章、面经等，通过文章思想学到一些知识。</li>\n<li>极其偶尔看一些视频提升，例如之前补node基础看过一些。</li>\n</ol>\n<ul>\n<li>娱乐休息</li>\n</ul>\n<p>娱乐玩耍占用了很多得空闲时间，通常连续块时间打游戏居多、碎片时间看视频居多。</p>", "r": { "minutes": 4.46, "words": 1337 }, "y": "a", "t": "时间管理", "I": 1 }, ["/posts/感悟/时间管理.html", "/posts/%E6%84%9F%E6%82%9F/%E6%97%B6%E9%97%B4%E7%AE%A1%E7%90%86", "/posts/感悟/时间管理.md", "/posts/%E6%84%9F%E6%82%9F/%E6%97%B6%E9%97%B4%E7%AE%A1%E7%90%86.md"]],
  ["v-21de64b9", "/posts/%E6%84%9F%E6%82%9F/%E6%9B%BC%E5%B7%B4%E5%AD%A6%E4%B9%A0%E6%B3%95.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 费曼学习法是什么</h1>\n<h2> 概念</h2>\n<p>费曼学习法被誉为世界上最好的学习方法，是一种顶级的思维模式，值得了解。</p>\n<p>费曼学习法可以分为五个步骤：</p>\n<ol>\n<li>确立学习目标</li>\n<li>理解学习的知识</li>\n<li>进行知识的输出，复述学习的成果</li>\n<li>再次学习，纠正错误，加深印象</li>\n<li>归纳总结，化繁为简</li>\n</ol>\n<p>通过这五个步骤，可以很容易获得最高的内存留存率，加强学习的效果，达成学习目标。</p>\n<h2> 学习的目的是输出</h2>\n<p>曼巴学习法是对”学习本质“的回归。学习的目的就是要使用，如果学了不用，大脑会产生本能的抗拒，认为是做”无用功“。</p>", "r": { "minutes": 1.44, "words": 432 }, "y": "a", "t": "费曼学习法是什么", "I": 1 }, ["/posts/感悟/曼巴学习法.html", "/posts/%E6%84%9F%E6%82%9F/%E6%9B%BC%E5%B7%B4%E5%AD%A6%E4%B9%A0%E6%B3%95", "/posts/感悟/曼巴学习法.md", "/posts/%E6%84%9F%E6%82%9F/%E6%9B%BC%E5%B7%B4%E5%AD%A6%E4%B9%A0%E6%B3%95.md"]],
  ["v-024a88b8", "/posts/%E6%84%9F%E6%82%9F/%E6%AF%8F%E5%BD%93%E6%83%B3%E6%94%BE%E5%BC%83%E8%BF%9B%E5%85%A5%E8%88%92%E9%80%82%E5%9C%88%E7%9A%84%E6%97%B6%E5%80%99.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 每当想放弃进入舒适圈的时候</h1>\n<p>7.22 大雨</p>\n<p>今天我终于交付了 “婚姻预测”的H5外包项目。前两天我经常修改bug到晚上12点，上完正常班回家继续写代码改bug的酸爽。</p>\n<p>尽管这个项目对我的提高有帮助，包括css动画、移动端的一些适配等。但是我认为我付出的时间精力已经超过了合计1.3k的报价。再加上甲方对产品的要求以及自己水平原因，使我感到很疲惫。</p>\n<p>今天终于解放了，特别想躺着休息一下。转念一想，我的日常其实也应该保持这个工作的状态，目前对进大厂的准备已经有些拉下了。自己明显已经感觉到准备的不足，感觉自己还没准备好。但是原计划八月初就应该开始投递简历了。没办法，只有逼自己一把继续努力，无论如何，要按照自己的计划去尝试。哪怕今年进不了大厂，也要去尝试一下，纠正自己努力的方向。</p>", "r": { "minutes": 0.98, "words": 295 }, "y": "a", "t": "每当想放弃进入舒适圈的时候", "I": 1 }, ["/posts/感悟/每当想放弃进入舒适圈的时候.html", "/posts/%E6%84%9F%E6%82%9F/%E6%AF%8F%E5%BD%93%E6%83%B3%E6%94%BE%E5%BC%83%E8%BF%9B%E5%85%A5%E8%88%92%E9%80%82%E5%9C%88%E7%9A%84%E6%97%B6%E5%80%99", "/posts/感悟/每当想放弃进入舒适圈的时候.md", "/posts/%E6%84%9F%E6%82%9F/%E6%AF%8F%E5%BD%93%E6%83%B3%E6%94%BE%E5%BC%83%E8%BF%9B%E5%85%A5%E8%88%92%E9%80%82%E5%9C%88%E7%9A%84%E6%97%B6%E5%80%99.md"]],
  ["v-5a97986f", "/posts/%E6%84%9F%E6%82%9F/%E7%BA%A0%E7%BB%93%E6%97%B6%E5%BA%94%E8%AF%A5%E5%A6%82%E4%BD%95%E6%8A%89%E6%8B%A9.html", { "d": "2023-02-04T13:15:39.000Z", "e": '<h1> 购物纠结时应该如何抉择</h1>\n<blockquote>\n<p>金星曾经看上了一个名贵的限量款包，高昂的售价使她十分纠结，于是她打电话给她的丈夫汉斯商量。</p>\n<p>汉斯给的建议是： <strong>如果你喜欢它，就买；如果你需要它，就不买。</strong></p>\n<p>于是金星果断买下了那个包包。</p>\n</blockquote>\n<h2> 我的购物纠结思考</h2>\n<p>参加工作后，手头也逐渐宽裕起来，有了自己可支配的资金，在工作压力和重复劳作的影响下，经常会有"想买点啥"的想法。</p>\n<p>以我个人的部分数码购物经历举例： 买完手机买耳机(airpots2)，买了耳机又觉得做地铁听不到声 买降噪耳机（airpots pro)，买完 降噪耳机 又想换个苹果电脑，至此我的苹果全家桶除了手表已经齐了...</p>', "r": { "minutes": 3.32, "words": 997 }, "y": "a", "t": "购物纠结时应该如何抉择", "I": 1 }, ["/posts/感悟/纠结时应该如何抉择.html", "/posts/%E6%84%9F%E6%82%9F/%E7%BA%A0%E7%BB%93%E6%97%B6%E5%BA%94%E8%AF%A5%E5%A6%82%E4%BD%95%E6%8A%89%E6%8B%A9", "/posts/感悟/纠结时应该如何抉择.md", "/posts/%E6%84%9F%E6%82%9F/%E7%BA%A0%E7%BB%93%E6%97%B6%E5%BA%94%E8%AF%A5%E5%A6%82%E4%BD%95%E6%8A%89%E6%8B%A9.md"]],
  ["v-31fe5478", "/posts/%E6%84%9F%E6%82%9F/%E7%BC%96%E5%86%99%E4%BB%A3%E7%A0%81%E7%9A%84%E5%93%AA%E4%BA%9B%E6%96%B9%E9%9D%A2%E8%83%BD%E5%A4%9F%E4%BD%BF%E4%BD%A0%E5%85%B4%E5%A5%8B%E6%88%96%E6%84%9F%E5%85%B4%E8%B6%A3%EF%BC%9F%203297254ce03d4138993062f560433d03.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 编写代码的哪些方面能够使你兴奋或感兴趣？</h1>\n<p>最让我感兴趣的通常是自我驱动的去写一些代码。</p>\n<p>但是传统的自我驱动带有盲目性，你的目的是不够明确的，常常也伴随着变化性。在这不确定性的变化中，兴趣很容易被消磨。</p>\n<p>我最近在空余时间接手了一个H5应用的外包，里面有一些动效和动画，因为要考虑移动端适配和safari浏览器可恶的渲染机制，我需要对动画做适配调整，不断的重构，不断的学习。</p>\n<p>从css动画到js动画再回到css动画最终完美呈现的一个过程，让我非常的兴奋和有成就感。</p>\n", "r": { "minutes": 0.67, "words": 200 }, "y": "a", "t": "编写代码的哪些方面能够使你兴奋或感兴趣？", "I": 1 }, ["/posts/感悟/编写代码的哪些方面能够使你兴奋或感兴趣？ 3297254ce03d4138993062f560433d03.html", "/posts/%E6%84%9F%E6%82%9F/%E7%BC%96%E5%86%99%E4%BB%A3%E7%A0%81%E7%9A%84%E5%93%AA%E4%BA%9B%E6%96%B9%E9%9D%A2%E8%83%BD%E5%A4%9F%E4%BD%BF%E4%BD%A0%E5%85%B4%E5%A5%8B%E6%88%96%E6%84%9F%E5%85%B4%E8%B6%A3%EF%BC%9F%203297254ce03d4138993062f560433d03", "/posts/感悟/编写代码的哪些方面能够使你兴奋或感兴趣？ 3297254ce03d4138993062f560433d03.md", "/posts/%E6%84%9F%E6%82%9F/%E7%BC%96%E5%86%99%E4%BB%A3%E7%A0%81%E7%9A%84%E5%93%AA%E4%BA%9B%E6%96%B9%E9%9D%A2%E8%83%BD%E5%A4%9F%E4%BD%BF%E4%BD%A0%E5%85%B4%E5%A5%8B%E6%88%96%E6%84%9F%E5%85%B4%E8%B6%A3%EF%BC%9F%203297254ce03d4138993062f560433d03.md"]],
  ["v-1fc1e26c", "/posts/%E6%84%9F%E6%82%9F/%E9%80%89%E6%8B%A9%E5%A4%A7%E4%BA%8E%E5%8A%AA%E5%8A%9B.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 选择比努力重要</h1>\n<blockquote>\n<p>这是一篇鸡汤文章，由于22年的互联网行情，各大厂都在裁员，令人在准备阶段容易泄气。</p>\n</blockquote>\n<p>方向比选择重要，选择比努力重要。</p>\n<p>想清楚自己想要什么，就必须做出选择。</p>\n<p>有一个事情是肯定的，在这家公司我得不到我想要的东西。</p>\n<p>准备改变，进行改变，改变。</p>\n<p>从结果进行导向，那就是我一定要完成这件事，这样有时候会在泄气的时候说服自己，恢复勇气。</p>\n<p>2022.5.31</p>\n", "r": { "minutes": 0.49, "words": 147 }, "y": "a", "t": "选择比努力重要", "I": 1 }, ["/posts/感悟/选择大于努力.html", "/posts/%E6%84%9F%E6%82%9F/%E9%80%89%E6%8B%A9%E5%A4%A7%E4%BA%8E%E5%8A%AA%E5%8A%9B", "/posts/感悟/选择大于努力.md", "/posts/%E6%84%9F%E6%82%9F/%E9%80%89%E6%8B%A9%E5%A4%A7%E4%BA%8E%E5%8A%AA%E5%8A%9B.md"]],
  ["v-1b49a928", "/posts/%E6%84%9F%E6%82%9F/%E9%80%89%E6%8B%A9%E6%AF%94%E5%8A%AA%E5%8A%9B%E9%87%8D%E8%A6%81.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 选择比努力重要</h1>\n<blockquote>\n<p>这是一篇鸡汤文章，由于22年的互联网行情，各大厂都在裁员，令人在准备阶段容易泄气。</p>\n</blockquote>\n<p>方向比选择重要，选择比努力重要。</p>\n<p>想清楚自己想要什么，就必须做出选择。</p>\n<p>有一个事情是肯定的，在这家公司我得不到我想要的东西。</p>\n<p>准备改变，进行改变，改变。</p>\n<p>从结果进行导向，那就是我一定要完成这件事，这样有时候会在泄气的时候说服自己，恢复勇气。</p>\n<p>2022.5.31</p>\n", "r": { "minutes": 0.49, "words": 147 }, "y": "a", "t": "选择比努力重要", "I": 1 }, ["/posts/感悟/选择比努力重要.html", "/posts/%E6%84%9F%E6%82%9F/%E9%80%89%E6%8B%A9%E6%AF%94%E5%8A%AA%E5%8A%9B%E9%87%8D%E8%A6%81", "/posts/感悟/选择比努力重要.md", "/posts/%E6%84%9F%E6%82%9F/%E9%80%89%E6%8B%A9%E6%AF%94%E5%8A%AA%E5%8A%9B%E9%87%8D%E8%A6%81.md"]],
  ["v-71031c10", "/posts/%E6%84%9F%E6%82%9F/%E9%A2%84%E4%BC%B0%E4%B8%9A%E5%8A%A1%E9%94%99%E8%AF%AF%E5%BC%95%E5%8F%91%E7%9A%84%E6%80%9D%E8%80%83.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 预估业务错误引发的思考</h1>\n<h2> 需求背景</h2>\n<p>一个树形多选组件，当子节点全部选中的时候，只传父节点的值，否则传子节点</p>\n<h2> 错误判断</h2>\n<p>因为在ng-zorro中，这个逻辑是默认的，于是我很爽快的答应了后端这样做。但是在antd react版本中，子节点全选中会把所有子节点和父节点都传出，和需求商讨的方案是不同的，于是我需要自己实现。</p>\n<h2> 技术实现分析</h2>\n<p>在选中或取消某个节点时，可以拿到当前节点的树结构和对应关系。</p>\n<ol>\n<li>\n<p>当节点作为父节点时，很容易去判断去掉它的子节点。</p>\n</li>\n<li>\n<p>当节点作为子节点时，<strong>难点</strong>来了，需要判断它的兄弟节点及它兄弟节点的全部子节点是否全部选中，然后如果全中，在用当前节点的父节点走作为父节点的逻辑还要再走作为子节点的逻辑</p>\n</li>\n</ol>", "r": { "minutes": 1.5, "words": 449 }, "y": "a", "t": "预估业务错误引发的思考", "I": 1 }, ["/posts/感悟/预估业务错误引发的思考.html", "/posts/%E6%84%9F%E6%82%9F/%E9%A2%84%E4%BC%B0%E4%B8%9A%E5%8A%A1%E9%94%99%E8%AF%AF%E5%BC%95%E5%8F%91%E7%9A%84%E6%80%9D%E8%80%83", "/posts/感悟/预估业务错误引发的思考.md", "/posts/%E6%84%9F%E6%82%9F/%E9%A2%84%E4%BC%B0%E4%B8%9A%E5%8A%A1%E9%94%99%E8%AF%AF%E5%BC%95%E5%8F%91%E7%9A%84%E6%80%9D%E8%80%83.md"]],
  ["v-5ec61931", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/13.2%E7%94%A8%E6%88%B7%E4%BB%A3%E7%90%86%E6%A3%80%E6%B5%8B.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 13.2用户代理检测</h1>\n<h2> 概念</h2>\n<p>在http1.0和1.1的协议中，要求浏览器应该向服务器发送一段包含<strong>浏览器名称</strong>和<strong>版本信息</strong>的字符串\n通过浏览器携带的<strong>用户代理字符串</strong>来判断当前是什么浏览器的方法叫做<strong>用户代理检测</strong></p>\n<h2> 早期的使用</h2>\n<p>美国国家超级计算机中心发布于1993年的<code>Mosaic</code>是早期web浏览器的代表。它的用户代理字符串格式是： <code>Mosaic/0.9</code>\n后面崛起的网景公司开发浏览器时，将 浏览器代号取为 <code>Mozilla</code>  （Mosaic Killer）\n最开始它的字符串格式是这样的<code>Mozilla/Version [language] (Platform; Encryption)</code>\n除了http要求的信息，它还额外携带了当前语言、操作系统和加密类型</p>", "r": { "minutes": 3.9, "words": 1169 }, "y": "a", "t": "13.2用户代理检测", "I": 1 }, ["/posts/JavaScipt基础/红宝书/13.2用户代理检测.html", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/13.2%E7%94%A8%E6%88%B7%E4%BB%A3%E7%90%86%E6%A3%80%E6%B5%8B", "/posts/JavaScipt基础/红宝书/13.2用户代理检测.md", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/13.2%E7%94%A8%E6%88%B7%E4%BB%A3%E7%90%86%E6%A3%80%E6%B5%8B.md"]],
  ["v-3e882234", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/13.3%20%E8%BD%AF%E4%BB%B6%E4%B8%8E%E7%A1%AC%E4%BB%B6%E6%A3%80%E6%B5%8B.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> <strong>13.3 软件与硬件检测</strong></h1>\n<p>前两节提到的特性检测和用户代理检测是两种常用的识别浏览器方式。而navigator和screen对象也提供了对页面所在软件环境的信息。</p>\n<h2> navigator</h2>\n<h3> navigator.oscpu</h3>\n<p>这个字段返回了操作系统、系统架构相关信息</p>\n<h3> navigator.vendor</h3>\n<p>返回浏览器的开发商信息</p>\n<h3> navigator.platform</h3>\n<p>返回一个表示浏览器所在操作系统的字符串</p>\n<h2> screen</h2>", "r": { "minutes": 1.42, "words": 427 }, "y": "a", "t": "13.3 软件与硬件检测", "I": 1 }, ["/posts/JavaScipt基础/红宝书/13.3 软件与硬件检测.html", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/13.3%20%E8%BD%AF%E4%BB%B6%E4%B8%8E%E7%A1%AC%E4%BB%B6%E6%A3%80%E6%B5%8B", "/posts/JavaScipt基础/红宝书/13.3 软件与硬件检测.md", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/13.3%20%E8%BD%AF%E4%BB%B6%E4%B8%8E%E7%A1%AC%E4%BB%B6%E6%A3%80%E6%B5%8B.md"]],
  ["v-d2452084", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/14.1%20%E8%8A%82%E7%82%B9%E5%B1%82%E7%BA%A7%20Node%E8%8A%82%E7%82%B9.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 第十四章DOM  14.1节点层级 Node节点</h1>\n<p>由于对BOM整章的学习，现在在心态上已经完全可以去学习DOM了。今天只看完了14.1.1小节，不过也算有所收获，毕竟每晚的时间有限，重在积累。</p>\n<h2> DOM概念</h2>\n<p>DOM表示由多层节点构成的文档，通过它开发者可以添加、删除和修改页面的各个部分。</p>\n<p>document节点表示每个文档的根节点。</p>\n<h2> Node类型</h2>\n<p>DOM Level1中就描述了node的接口，这个接口是面向所有DOM节点的，都必须实现。</p>\n<p>每个节点都存在一个叫做 <strong>nodeType</strong>的属性，表示节点的类型。它由定义好的十二个数值分别表示不同的节点，也就是规范规定的映射。</p>", "r": { "minutes": 4.43, "words": 1330 }, "y": "a", "t": "第十四章DOM  14.1节点层级 Node节点", "I": 1 }, ["/posts/JavaScipt基础/红宝书/14.1 节点层级 Node节点.html", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/14.1%20%E8%8A%82%E7%82%B9%E5%B1%82%E7%BA%A7%20Node%E8%8A%82%E7%82%B9", "/posts/JavaScipt基础/红宝书/14.1 节点层级 Node节点.md", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/14.1%20%E8%8A%82%E7%82%B9%E5%B1%82%E7%BA%A7%20Node%E8%8A%82%E7%82%B9.md"]],
  ["v-caede9ae", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/14.1.3%20Element%E7%B1%BB%E5%9E%8B.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 14.1.3 Element 类型</h1>\n<h2> 概念</h2>\n<p>ELement 类型表示元素类型，暴露了访问元素标签名、子节点和属性的能力。</p>\n<p>可以直接访问 nodeName 和 tagName 属性来获得元素标签名，这两个元素返回相同的值</p>\n<p>div.tagName 实际返回的是大写的 “DIV” 所有进行比较的时候，最好都转换成小写去比较</p>\n<h2> HTML 元素</h2>\n<p>HTML 元素都通过 HTMLELEMENT 类型表示，包括直接实例和间接实例，并且继承了 ELement 并增加了一些属性。这些属性可以直接获取访问对应的值。详见 P415表格字典</p>", "r": { "minutes": 2.61, "words": 782 }, "y": "a", "t": "14.1.3 Element 类型", "I": 1 }, ["/posts/JavaScipt基础/红宝书/14.1.3 Element类型.html", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/14.1.3%20Element%E7%B1%BB%E5%9E%8B", "/posts/JavaScipt基础/红宝书/14.1.3 Element类型.md", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/14.1.3%20Element%E7%B1%BB%E5%9E%8B.md"]],
  ["v-31e2d74b", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/14.1.4%20Text%E7%B1%BB%E5%9E%8B.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 14.1.4 Text类型</h1>\n<h2> 概念</h2>\n<p>Text 节点是由 Text 类型表示，也就是标签之间的文本字符</p>\n<p>暴露了几个方法：</p>\n<ul>\n<li>appendData(text)</li>\n<li>deleteData(offset, count) 在 offset 开始删除 count个字符</li>\n<li>insertData(offset, text)  在 offset 位置插入文本</li>\n<li>replaceData(offset, count, text) 在 用 text 替换从 offset 开始的 count 个字符</li>\n<li>splitText(offset) 在 offset 位置将文本拆分成两个文本节点</li>\n<li>subStringData(offset, count) 提取从位置 offset 到 offset+count  的文本</li>\n</ul>", "r": { "minutes": 0.91, "words": 273 }, "y": "a", "t": "14.1.4 Text类型", "I": 1 }, ["/posts/JavaScipt基础/红宝书/14.1.4 Text类型.html", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/14.1.4%20Text%E7%B1%BB%E5%9E%8B", "/posts/JavaScipt基础/红宝书/14.1.4 Text类型.md", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/14.1.4%20Text%E7%B1%BB%E5%9E%8B.md"]],
  ["v-2ce62492", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/16.2.1%20%20%E5%AD%98%E5%8F%96%E5%85%83%E7%B4%A0%E6%A0%B7%E5%BC%8F.html", { "d": "2023-02-04T13:15:39.000Z", "e": `<h1> 16.2.1  存取元素样式</h1>
<p>CSS 属性名是使用连字符表示的，例如 <code>backgroud-color</code>，所以在 JS 中必须转换成驼峰大小写形式， 例如 <code>backgroundColor</code></p>
<p>大多数都会像上面一样转换过来。但是 <code>float</code> 不行，它是 JS 的保留关键字，需要用 <code>cssFloat</code> 来表示</p>
<p>通过 JS 设置样式的时候，使用小驼峰形式的属性名就可以直接设置了，例如：</p>
<div class="language-js' line-numbers-mode" data-ext="js'"><pre class="language-js'"><code>div.style.backgroundColor = 'red'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`, "r": { "minutes": 1.91, "words": 572 }, "y": "a", "t": "16.2.1  存取元素样式", "I": 1 }, ["/posts/JavaScipt基础/红宝书/16.2.1  存取元素样式.html", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/16.2.1%20%20%E5%AD%98%E5%8F%96%E5%85%83%E7%B4%A0%E6%A0%B7%E5%BC%8F", "/posts/JavaScipt基础/红宝书/16.2.1  存取元素样式.md", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/16.2.1%20%20%E5%AD%98%E5%8F%96%E5%85%83%E7%B4%A0%E6%A0%B7%E5%BC%8F.md"]],
  ["v-6012c088", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/17.1%E4%BA%8B%E4%BB%B6%E6%B5%81-17.2%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E7%A8%8B%E5%BA%8F.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 第17章 事件  17.1事件流-17.2事件处理程序</h1>\n<h2> 17.1 事件流</h2>\n<p><strong>事件流</strong> 描述了页面接收事件的顺序，事件流方案分为 <strong>事件冒泡</strong> 和 <strong>事件冒泡</strong>，所有现代浏览器都支持它们。</p>\n<h3> 17.1.1 事件冒泡</h3>\n<p>由 IE 团队提出，事件从触发事件的具体元素节点逐级向上传播到不具体的元素(文档)</p>\n<h3> 17.1.2 事件捕获</h3>\n<p>由 NetScape 团队提出，事件从最不具体的节点（文档) 最先接收事件，之后逐级捕获到具体触发事件的元素节点</p>", "r": { "minutes": 3.56, "words": 1068 }, "y": "a", "t": "第17章 事件  17.1事件流-17.2事件处理程序", "I": 1 }, ["/posts/JavaScipt基础/红宝书/17.1事件流-17.2事件处理程序.html", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/17.1%E4%BA%8B%E4%BB%B6%E6%B5%81-17.2%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E7%A8%8B%E5%BA%8F", "/posts/JavaScipt基础/红宝书/17.1事件流-17.2事件处理程序.md", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/17.1%E4%BA%8B%E4%BB%B6%E6%B5%81-17.2%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E7%A8%8B%E5%BA%8F.md"]],
  ["v-2b3b3850", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/JSON.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> JSON</h1>\n<p><code>JSON.stringify(obj, []/fun, number/string)</code>接收三个参数，第一个是要序列化的对象。第二个参数可以是一个包含要序列化对象的键的数组，或者是一个函数，这个函数接收<code>(key, value)</code>两个参数。第三个参数表示缩进。</p>\n<p>对象中可以定义<code>toJSON()</code>方法，序列化json时，将返回对象定义的<code>toJSON()</code>方法的返回值。</p>\n<p><code>JSON.parse()</code>方法也可以接受一个函数作为第二个参数，这个参数被称为<strong>复活函数</strong>。复活函数接受两个参数（key, value），也需要返回值，如果返回undefined，则结果中会删除相应的键。如果返回了其他值，则该值会成为响应键的值从插入到结果中。</p>", "r": { "minutes": 0.65, "words": 194 }, "y": "a", "t": "JSON", "I": 1 }, ["/posts/JavaScipt基础/红宝书/JSON.html", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/JSON", "/posts/JavaScipt基础/红宝书/JSON.md", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/JSON.md"]],
  ["v-31f424c2", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/Javascript%E7%B1%BB.html", { "d": "2023-02-04T13:15:39.000Z", "e": '<h1> 类</h1>\n<p>ES6引入新的class关键字，是一个新的基础语法糖。虽然表面上看起来支持正式的面向对象编程，但实际上<strong>背后使用的仍然是原型和构造函数</strong>的概念。</p>\n<p>定义类的两种方式：类声明和类表达式。</p>\n<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 类声明</span>\n<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">// 类表达式</span>\n<span class="token keyword">const</span> Animal <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', "r": { "minutes": 2.85, "words": 855 }, "y": "a", "t": "类", "I": 1 }, ["/posts/JavaScipt基础/红宝书/Javascript类.html", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/Javascript%E7%B1%BB", "/posts/JavaScipt基础/红宝书/Javascript类.md", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/Javascript%E7%B1%BB.md"]],
  ["v-2009c8b6", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/Web%20Socket.html", { "d": "2023-02-04T13:15:39.000Z", "e": '<h1> Web Socket</h1>\n<p>​	Web Socket目标是通过一个长时连接实现与服务器全双工、双向的通信。</p>\n<p>在JS创建它的时候，一个HTTP请求会发送到服务器以初始化连接。</p>\n<h2> API</h2>\n<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">"ws://www.example.com/server.php"</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>', "r": { "minutes": 1.54, "words": 463 }, "y": "a", "t": "Web Socket", "I": 1 }, ["/posts/JavaScipt基础/红宝书/Web Socket.html", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/Web%20Socket", "/posts/JavaScipt基础/红宝书/Web Socket.md", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/Web%20Socket.md"]],
  ["v-5bb40ee2", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/script%E6%A0%87%E7%AD%BE-%E8%84%9A%E6%9C%AC%E5%8A%A0%E8%BD%BD.html", { "d": "2023-02-04T13:15:39.000Z", "e": '<h2> <code>&lt;Script&gt;</code>元素</h2>\n<h3> crossorigin</h3>\n<blockquote>\n<p>涉及到的元素  1.script 2.link 3.img 4.audio 5.video</p>\n</blockquote>\n<p>当浏览器请求这些标签的时候，可以配置跨源</p>\n<p><strong>跨源</strong> origin由三部分组成</p>\n<p>源指的是 协议、域名、端口。 即1.protocol 2.domain  3.port</p>\n<p>可以通过设置“凭据模式”：</p>\n<ol>\n<li><code>ananymous</code> 表示不包含凭据，就是不设置cookie，跨源的时候不在请求中附加值，保持匿名请求</li>\n<li><code>use-credentials</code>表示在请求中包含凭据，cookie、tls证书、http认证（用户身份）</li>\n<li>不设置这个属性，或者值是""，相当于<code>ananymous</code></li>\n</ol>', "r": { "minutes": 1.44, "words": 431 }, "y": "a", "t": "", "I": 1 }, ["/posts/JavaScipt基础/红宝书/script标签-脚本加载.html", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/script%E6%A0%87%E7%AD%BE-%E8%84%9A%E6%9C%AC%E5%8A%A0%E8%BD%BD", "/posts/JavaScipt基础/红宝书/script标签-脚本加载.md", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/script%E6%A0%87%E7%AD%BE-%E8%84%9A%E6%9C%AC%E5%8A%A0%E8%BD%BD.md"]],
  ["v-0195f72f", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E4%BA%8B%E4%BB%B6.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 事件</h1>\n<p>JS与HTML的交互是通过<strong>事件</strong>实现的，事件代表文档或浏览器窗口中某个有意义的时刻。</p>\n<p>可以使用仅在事件发生时执行的<strong>监听器</strong>（也叫处理程序）订阅事件。在传统软件工程领域，这个模型叫“观察者模式”。</p>\n<h2> 事件流</h2>\n<p>事件流描述了页面接受时间的顺序。IE支持事件冒泡流，而Netscape Communicator支持事件捕获流。</p>\n<h2> 事件属性和方法</h2>\n<p><code>preventDefault()</code>  用于取消事件的默认行为，只有<code>cancelabel</code>为true才可以调用这个方法。</p>", "r": { "minutes": 0.71, "words": 213 }, "y": "a", "t": "事件", "I": 1 }, ["/posts/JavaScipt基础/红宝书/事件.html", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E4%BA%8B%E4%BB%B6", "/posts/JavaScipt基础/红宝书/事件.md", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E4%BA%8B%E4%BB%B6.md"]],
  ["v-08636197", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E4%BB%A3%E7%90%86%E4%B8%8E%E5%8F%8D%E5%B0%84.html", { "d": "2023-02-04T13:15:39.000Z", "e": `<h1> 代理与反射</h1>
<p>ES6新增的代理和反射为开发者提供了拦截并向基本操作嵌入额外行为的能力。</p>
<blockquote>
<p>在ES6之前，ECMAScript中并没有类似代理的特性。由于代理是一种新的基础性语言能力，很多转译程序都不能把代理行为装换为之前的ECMAScript代码。<u>因此，代理和反射只能在百分百支持它们的平台上使用</u></p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'target'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//id属性会访问同一个值,修改目标值 会反映在na'ge</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// target</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxy<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// target</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`, "r": { "minutes": 3.47, "words": 1041 }, "y": "a", "t": "代理与反射", "I": 1 }, ["/posts/JavaScipt基础/红宝书/代理与反射.html", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E4%BB%A3%E7%90%86%E4%B8%8E%E5%8F%8D%E5%B0%84", "/posts/JavaScipt基础/红宝书/代理与反射.md", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E4%BB%A3%E7%90%86%E4%B8%8E%E5%8F%8D%E5%B0%84.md"]],
  ["v-62407bf4", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E5%8D%81%E5%9B%9B%E7%AB%A014.3%20MutationObServer%E6%8E%A5%E5%8F%A3.html", { "d": "2023-02-04T13:15:39.000Z", "e": `<h1> 今天拜读了红宝书 Dom的14.2.4、14.3章节</h1>
<h2> 14.2.4 Nodelist</h2>
<p>本节点提到，理解nodelist对象和相关的NamedNodeMap、HTMLCollection，是理解DOM的关键。我一看这还了得，赶紧打起精神来，结果翻到下一页，就介绍了一页的篇幅...
主要是介绍，nodelist是实时变化的，它始终展示最新的状态。例子：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> divs <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementByTagName</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> divs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>div<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 这段代码会陷入死循环，因为Nodelist是基于DOM文档的实时查询</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`, "r": { "minutes": 4.62, "words": 1387 }, "y": "a", "t": "今天拜读了红宝书 Dom的14.2.4、14.3章节", "I": 1 }, ["/posts/JavaScipt基础/红宝书/十四章14.3 MutationObServer接口.html", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E5%8D%81%E5%9B%9B%E7%AB%A014.3%20MutationObServer%E6%8E%A5%E5%8F%A3", "/posts/JavaScipt基础/红宝书/十四章14.3 MutationObServer接口.md", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E5%8D%81%E5%9B%9B%E7%AB%A014.3%20MutationObServer%E6%8E%A5%E5%8F%A3.md"]],
  ["v-fb4efdd4", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E5%8F%98%E9%87%8F.html", { "d": "2023-02-04T13:15:39.000Z", "e": `<h2> 声明变量的三个关键字：var、let、const</h2>
<h2> var</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 函数级作用域</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">var</span> msg <span class="token operator">=</span> <span class="token string">'123'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">123</span>
msg
<span class="token comment">// undefined异常</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`, "r": { "minutes": 1.46, "words": 437 }, "y": "a", "t": "", "I": 1 }, ["/posts/JavaScipt基础/红宝书/变量.html", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E5%8F%98%E9%87%8F", "/posts/JavaScipt基础/红宝书/变量.md", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E5%8F%98%E9%87%8F.md"]],
  ["v-42a677d8", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%E4%B8%8E%E4%BD%9C%E7%94%A8%E5%9F%9F.html", { "d": "2023-02-04T13:15:39.000Z", "e": '<h3> 上下文</h3>\n<p>上下文之间的连接是线性的、有序的。每个上下文都可以到上一级上下文中去搜索变量和函数，但是不能到下一级去搜索。有点像事件冒泡，一层一层往上。</p>\n<h3> 作用域链增强</h3>\n<ul>\n<li>\n<p>tyr/catch 中的catch块</p>\n</li>\n<li>\n<p>with语句</p>\n<p>这两种情况下，会在作用域链前端加一个变量对象</p>\n</li>\n</ul>\n<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">buildUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> qs <span class="token operator">=</span> <span class="token string">"?debug=true"</span><span class="token punctuation">;</span>\n  <span class="token keyword">with</span><span class="token punctuation">(</span>location<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> url <span class="token operator">=</span> href <span class="token operator">+</span> qs<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> url<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', "r": { "minutes": 0.39, "words": 117 }, "y": "a", "t": "", "I": 1 }, ["/posts/JavaScipt基础/红宝书/执行上下文与作用域.html", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%E4%B8%8E%E4%BD%9C%E7%94%A8%E5%9F%9F", "/posts/JavaScipt基础/红宝书/执行上下文与作用域.md", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%E4%B8%8E%E4%BD%9C%E7%94%A8%E5%9F%9F.md"]],
  ["v-d9e213d4", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E7%AC%AC%E5%8D%81%E4%B8%89%E7%AB%A0%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E6%A3%80%E6%B5%8B%2013.3%20%E8%BD%AF%E4%BB%B6%E4%B8%8E%E7%A1%AC%E4%BB%B6%E6%A3%80%E6%B5%8B%EF%BC%88%E6%9C%AC%E7%AB%A0%E5%AE%8C%EF%BC%89.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<p>前两节提到的特性检测和用户代理检测是两种常用的识别浏览器方式。而navigator和screen对象也提供了对页面所在软件环境的信息。</p>\n<h2> navigator</h2>\n<h3> navigator.oscpu</h3>\n<p>这个字段返回了操作系统、系统架构相关信息</p>\n<h3> navigator.vendor</h3>\n<p>返回浏览器的开发商信息</p>\n<h3> navigator.platform</h3>\n<p>返回一个表示浏览器所在操作系统的字符串</p>\n<h2> screen</h2>\n<p>属性不常用，可以获取显示器每像素颜色位深、屏幕角度等</p>", "r": { "minutes": 1.4, "words": 419 }, "y": "a", "t": "", "I": 1 }, ["/posts/JavaScipt基础/红宝书/第十三章 客户端检测 13.3 软件与硬件检测（本章完）.html", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E7%AC%AC%E5%8D%81%E4%B8%89%E7%AB%A0%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E6%A3%80%E6%B5%8B%2013.3%20%E8%BD%AF%E4%BB%B6%E4%B8%8E%E7%A1%AC%E4%BB%B6%E6%A3%80%E6%B5%8B%EF%BC%88%E6%9C%AC%E7%AB%A0%E5%AE%8C%EF%BC%89", "/posts/JavaScipt基础/红宝书/第十三章 客户端检测 13.3 软件与硬件检测（本章完）.md", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E7%AC%AC%E5%8D%81%E4%B8%89%E7%AB%A0%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E6%A3%80%E6%B5%8B%2013.3%20%E8%BD%AF%E4%BB%B6%E4%B8%8E%E7%A1%AC%E4%BB%B6%E6%A3%80%E6%B5%8B%EF%BC%88%E6%9C%AC%E7%AB%A0%E5%AE%8C%EF%BC%89.md"]],
  ["v-e23fa3cc", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E7%AC%AC%E5%8D%81%E4%BA%8C%E7%AB%A0BOM12.1.1-6.html", { "d": "2023-02-04T13:15:39.000Z", "e": "<h1> 概念</h1>\n<p>BOM是浏览器对象模型，核心是window对象，表示浏览器的实例。</p>\n<h2> Global作用域</h2>\n<p>用var声明的变量和方法会自动声明到全局作用域，let和const不行</p>\n<h2> 窗口关系和位置</h2>\n<p><code>top</code>始终指向最上层的窗口，即浏览器窗口本身。而<code>parent</code>对象始终指向当前窗口的父窗口，如果当前窗口是最上层窗口，则parent等于top（等于window)。\n<code>self</code>对象是终极window对象，它是为了和top、parent保持一致。\n<code>moveTo</code>和<code>moveBy</code>可以移动窗口位置。它们都接受两个参数，表示移动的x和y，单位都是px。前者是移动到新位置的坐标，后者是相对于当前坐标移动多少。</p>", "r": { "minutes": 2.54, "words": 763 }, "y": "a", "t": "概念", "I": 1 }, ["/posts/JavaScipt基础/红宝书/第十二章BOM12.1.1-6.html", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E7%AC%AC%E5%8D%81%E4%BA%8C%E7%AB%A0BOM12.1.1-6", "/posts/JavaScipt基础/红宝书/第十二章BOM12.1.1-6.md", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E7%AC%AC%E5%8D%81%E4%BA%8C%E7%AB%A0BOM12.1.1-6.md"]],
  ["v-78000d0c", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E7%AC%AC%E5%8D%81%E4%BA%94%E7%AB%A0%2015.1-15.3.html", { "d": "2023-02-04T13:15:39.000Z", "e": `<h1> 第十五章 DOM扩展 15.1-15.3</h1>
<h2> 15.1 Selectors API</h2>
<p>Selectors API 是 W3C 推荐标准，规定了浏览器原生支持的、通过 CSS 查询 DOM 的 API</p>
<h3> 15.1.1 querySelector()</h3>
<p>这个方法可以传入 CSS 选择符参数，例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 通过标签元素查找</span>
<span class="token keyword">let</span> body <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'body'</span><span class="token punctuation">)</span>
<span class="token comment">// 通过 id 查找</span>
<span class="token keyword">let</span> myDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#myDiv'</span><span class="token punctuation">)</span>
<span class="token comment">// 通过 类名 查找</span>
<span class="token keyword">let</span> myDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.box'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`, "r": { "minutes": 1.05, "words": 315 }, "y": "a", "t": "第十五章 DOM扩展 15.1-15.3", "I": 1 }, ["/posts/JavaScipt基础/红宝书/第十五章 15.1-15.3.html", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E7%AC%AC%E5%8D%81%E4%BA%94%E7%AB%A0%2015.1-15.3", "/posts/JavaScipt基础/红宝书/第十五章 15.1-15.3.md", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E7%AC%AC%E5%8D%81%E4%BA%94%E7%AB%A0%2015.1-15.3.md"]],
  ["v-0fc2c1e2", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E9%97%AD%E5%8C%85.html", { "d": "2023-02-04T13:15:39.000Z", "e": '<h1> 闭包</h1>\n<p><strong>闭包</strong>指的是那些引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的。</p>\n<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token parameter">value1<span class="token punctuation">,</span> value2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span>value1 <span class="token operator">===</span> value2<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> value1 <span class="token operator">&gt;</span> value2 <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', "r": { "minutes": 1.9, "words": 571 }, "y": "a", "t": "闭包", "I": 1 }, ["/posts/JavaScipt基础/红宝书/闭包.html", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E9%97%AD%E5%8C%85", "/posts/JavaScipt基础/红宝书/闭包.md", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E9%97%AD%E5%8C%85.md"]],
  ["v-7b4fe6f4", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E7%9C%8B%E4%BB%A3%E7%A0%81%E8%AF%B4%E7%BB%93%E6%9E%9C/%E7%9C%8B%E4%BB%A3%E7%A0%81%E8%AF%B4%E7%BB%93%E6%9E%9C%20Promise%E9%A2%98.html", { "d": "2023-02-05T03:47:16.000Z", "e": '<h1> 看代码说结果 Promise题</h1>\n<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n    <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\np<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', "r": { "minutes": 0.36, "words": 108 }, "y": "a", "t": "看代码说结果 Promise题", "I": 1 }, ["/posts/手写算法系列/看代码说结果/看代码说结果 Promise题.html", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E7%9C%8B%E4%BB%A3%E7%A0%81%E8%AF%B4%E7%BB%93%E6%9E%9C/%E7%9C%8B%E4%BB%A3%E7%A0%81%E8%AF%B4%E7%BB%93%E6%9E%9C%20Promise%E9%A2%98", "/posts/手写算法系列/看代码说结果/看代码说结果 Promise题.md", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E7%9C%8B%E4%BB%A3%E7%A0%81%E8%AF%B4%E7%BB%93%E6%9E%9C/%E7%9C%8B%E4%BB%A3%E7%A0%81%E8%AF%B4%E7%BB%93%E6%9E%9C%20Promise%E9%A2%98.md"]],
  ["v-3706649a", "/404.html", { "y": "p", "t": "", "I": 1 }, ["/404"]],
  ["v-63514721", "/posts/CSS/", { "y": "p", "t": "C S S", "I": 1 }, ["/posts/CSS/index.html"]],
  ["v-e1e3da16", "/posts/", { "y": "p", "t": "Posts", "I": 1 }, ["/posts/index.html"]],
  ["v-555c9a72", "/posts/Chore/", { "y": "p", "t": "Chore", "I": 1 }, ["/posts/Chore/index.html"]],
  ["v-4282cf02", "/posts/JS%E8%BF%9B%E9%98%B6-%E6%BA%90%E7%A0%81%E9%98%85%E8%AF%BB/", { "y": "p", "t": "J S进阶 源码阅读", "I": 1 }, ["/posts/JS进阶-源码阅读/", "/posts/JS%E8%BF%9B%E9%98%B6-%E6%BA%90%E7%A0%81%E9%98%85%E8%AF%BB/index.html"]],
  ["v-def4f67e", "/posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/", { "y": "p", "t": "React相关解读", "I": 1 }, ["/posts/React相关解读/", "/posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/index.html"]],
  ["v-4c082264", "/posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/", { "y": "p", "t": "前端工程化", "I": 1 }, ["/posts/前端工程化/", "/posts/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/index.html"]],
  ["v-d07c574c", "/posts/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/", { "y": "p", "t": "性能优化", "I": 1 }, ["/posts/性能优化/", "/posts/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/index.html"]],
  ["v-2f43e305", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/", { "y": "p", "t": "手写算法系列", "I": 1 }, ["/posts/手写算法系列/", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/index.html"]],
  ["v-0d167dd1", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/", { "y": "p", "t": "浏览器相关知识", "I": 1 }, ["/posts/浏览器相关知识/", "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/index.html"]],
  ["v-896225c0", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/", { "y": "p", "t": "Java Script方法", "I": 1 }, ["/posts/JavaScipt基础/JavaScript方法/", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/index.html"]],
  ["v-883e369e", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/", { "y": "p", "t": "Java Scipt基础", "I": 1 }, ["/posts/JavaScipt基础/", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/index.html"]],
  ["v-5d66c790", "/posts/%E6%84%9F%E6%82%9F/", { "y": "p", "t": "感悟", "I": 1 }, ["/posts/感悟/", "/posts/%E6%84%9F%E6%82%9F/index.html"]],
  ["v-3df4ddc1", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/", { "y": "p", "t": "红宝书", "I": 1 }, ["/posts/JavaScipt基础/红宝书/", "/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/index.html"]],
  ["v-3715f198", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E7%9C%8B%E4%BB%A3%E7%A0%81%E8%AF%B4%E7%BB%93%E6%9E%9C/", { "y": "p", "t": "看代码说结果", "I": 1 }, ["/posts/手写算法系列/看代码说结果/", "/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E7%9C%8B%E4%BB%A3%E7%A0%81%E8%AF%B4%E7%BB%93%E6%9E%9C/index.html"]],
  ["v-5bc93818", "/category/", { "y": "p", "t": "分类", "I": 1 }, ["/category/index.html"]],
  ["v-744d024e", "/tag/", { "y": "p", "t": "标签", "I": 1 }, ["/tag/index.html"]],
  ["v-e52c881c", "/article/", { "y": "p", "t": "文章", "I": 1 }, ["/article/index.html"]],
  ["v-154dc4c4", "/star/", { "y": "p", "t": "收藏", "I": 1 }, ["/star/index.html"]],
  ["v-01560935", "/timeline/", { "y": "p", "t": "时间轴", "I": 1 }, ["/timeline/index.html"]]
];
var Vuepress = defineComponent({
  name: "Vuepress",
  setup() {
    const layout2 = usePageLayout();
    return () => h$4(layout2.value);
  }
});
var createRoutes = () => pagesRoutes.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path
      }))
    );
    return result;
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress
    }
  ]
);
var historyCreator = createMemoryHistory;
var createVueRouter = () => {
  const router = createRouter({
    history: historyCreator(removeEndingSlash("/")),
    routes: createRoutes(),
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a2;
    if (to.path !== from.path || from === START_LOCATION_NORMALIZED) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a2 = pagesComponents[to.name]) == null ? void 0 : _a2.__asyncLoader()
      ]);
    }
  });
  return router;
};
var setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
var setupGlobalComputed = (app, router, clientConfigs2) => {
  const layouts = computed(() => resolvers.resolveLayouts(clientConfigs2));
  const routeLocale = computed(
    () => resolvers.resolveRouteLocale(
      siteData.value.locales,
      router.currentRoute.value.path
    )
  );
  const siteLocaleData = computed(
    () => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value)
  );
  const pageFrontmatter = computed(
    () => resolvers.resolvePageFrontmatter(pageData.value)
  );
  const pageHeadTitle = computed(
    () => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value)
  );
  const pageHead = computed(
    () => resolvers.resolvePageHead(
      pageHeadTitle.value,
      pageFrontmatter.value,
      siteLocaleData.value
    )
  );
  const pageLang = computed(() => resolvers.resolvePageLang(pageData.value));
  const pageLayout = computed(
    () => resolvers.resolvePageLayout(pageData.value, layouts.value)
  );
  app.provide(layoutsSymbol, layouts);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  app.provide(pageLayoutSymbol, pageLayout);
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    layouts,
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    pageLayout,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
var setupUpdateHead = () => {
  useRoute$1();
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
var appCreator = createSSRApp;
var createVueApp = async () => {
  var _a2;
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      var _a3;
      setupUpdateHead();
      for (const clientConfig of clientConfigs) {
        (_a3 = clientConfig.setup) == null ? void 0 : _a3.call(clientConfig);
      }
      return () => [
        h$4(RouterView),
        ...clientConfigs.flatMap(
          ({ rootComponents = [] }) => rootComponents.map((component) => h$4(component))
        )
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router, clientConfigs);
  for (const clientConfig of clientConfigs) {
    await ((_a2 = clientConfig.enhance) == null ? void 0 : _a2.call(clientConfig, { app, router, siteData }));
  }
  app.use(router);
  return {
    app,
    router
  };
};
export {
  R$1 as R,
  createVueApp,
  ot as o
};
