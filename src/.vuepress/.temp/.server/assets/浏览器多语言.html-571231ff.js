import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="浏览器多语言" tabindex="-1"><a class="header-anchor" href="#浏览器多语言" aria-hidden="true">#</a> 浏览器多语言</h1><p>首先采用utf-8编码</p><p>针对静态的，就准备多套路由文件，通过路径区分，例如MDN等</p><p>针对动态的，通过语言变量Ln_name去判断，传给后端呈现</p><p>多语言网站实现计划 ：</p><p>1、静态：就是为每种语言分辨准备一套页面文件，要么通过文件后缀名来区分不同语言，要么通过子目录来区分不同语言。例如对于首页文件index_en.htm供给英语界面，index_gb.htm供给简体中文界面，index_big.htm供给繁体中文界面，或者是en/index.htm供给英语界面，gb/index.htm供给简体中文界面，big/index.htm供给繁体中文界面，一旦用户选择了需要的语言后，主动跳转到相应的页面，首页以下其他链接也是按照同样方法处理。从保护的角度来看，通过子目录比通过文件后缀名来区分不同语言版本显得要简略明了。2，动态：站点内所有页面文件都是动态页面文件（PHP，ASP等）而不是静态页面文件，在需要输出语言文字的处所同一采用语言变量来表现，这些语言变量可以根据用户选择不同的语言赋予不同的值，从而能够实现在不同的语言环境下输出不同的文字。例如：语言变量ln_name，当用户选择的语言是英语时赋值为“Name”，当用户选择的语言是简体中文时赋值为“姓名”，这样就可以适应不同语言时的输出。采用静态方法的长处是页面直接输出到客户端，不需要在服务器上运行，占用服务器的资源比拟少，系统能够支撑的并发连接数较多，毛病是要为每种语言制作一套页面文件，很多内容即使是和语言无关的也要分不同语言来存储，因此占用的存储空间较多。采用动态方法和静态方法的优毛病正好相反，它的长处是动态页面文件只有一套，不同语言的文字应用语言变量来存储，和语言无关的内容只存储一份，占用的存储空间较少，并且扩大新语言比拟轻易，毛病需要在服务器上运行，然后把成果输进到客户端，占用服务器的资源比拟多，系统能够支撑的并发连接数较少。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/浏览器相关知识/浏览器多语言.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "浏览器多语言.html.vue"]]);
export {
  _______html as default
};
