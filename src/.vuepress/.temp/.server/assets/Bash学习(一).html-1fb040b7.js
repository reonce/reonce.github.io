import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bash学习-一" tabindex="-1"><a class="header-anchor" href="#bash学习-一" aria-hidden="true">#</a> Bash学习（一）</h1><h2 id="shell概念" tabindex="-1"><a class="header-anchor" href="#shell概念" aria-hidden="true">#</a> Shell概念</h2><p>Shell的含义是外壳，和内核相对性。比喻内核外的一层，也就是用户和内核交互的界面。</p><p>Shell有很多种类。可以通过 <code>echo $SHELL</code>命令查看系统的默认Shell</p><p>查看当前使用的Shell类型可以通过 <code>echo $0</code>命令查看，或者直接输入一条不存在的命令，查看报错</p><h2 id="命令提示符" tabindex="-1"><a class="header-anchor" href="#命令提示符" aria-hidden="true">#</a> 命令提示符</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>user@hostname<span class="token punctuation">]</span> $
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面例子中，完整的提示符是<code>[user@hostname] $</code>，其中前缀是用户名（<code>user</code>）加上<code>@</code>，再加主机名（<code>hostname</code>）。比如，用户名是<code>bill</code>，主机名是<code>home-machine</code>，前缀就是<code>bill@home-machine</code>。</p><p>注意，根用户（root）的提示符，不以美元符号（<code>$</code>）结尾，而以井号（<code>#</code>）结尾，用来提醒用户，现在具有根权限，可以执行各种操作，务必小心，不要出现误操作。这个符号是可以自己定义的，详见《命令提示符》一章。</p><h2 id="echo命令" tabindex="-1"><a class="header-anchor" href="#echo命令" aria-hidden="true">#</a> echo命令</h2><p><code>pwd</code>查看当前路径</p><p>echo命令是最常见的命令之一，作用类似于js中的console.log(),输出一行数据</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$ echo hello world
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出多行文本，需要把文本放到 引号当中。例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$ echo &quot;<span class="token operator">&lt;</span><span class="token constant">HTML</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token constant">HEAD</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token constant">TITLE</span><span class="token operator">&gt;</span>Page Title<span class="token operator">&lt;</span><span class="token operator">/</span><span class="token constant">TITLE</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token constant">HEAD</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token constant">BODY</span><span class="token operator">&gt;</span>
          Page body<span class="token punctuation">.</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token constant">BODY</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span><span class="token constant">HTML</span><span class="token operator">&gt;</span>&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单引号会直接输出其中的内容，双引号则具有一些使用变量的操作，很类似js当中的\`\`。</p><p>双引号当中的 $会被解析成变量 ， 例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">test</span><span class="token operator">=</span><span class="token number">123</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$test</span>&quot;</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;$test&#39;</span>
<span class="token number">123</span>
<span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p><code>-n</code>参数，默认echo输出的文本后面会有一个回车符，加了<code>-n</code>后会取消末尾的回车符</p><p><code>-e</code>参数，会解释引号当中的特殊字符（比如换行符<code>\\n</code>），例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$echo</span> <span class="token string">&quot;Hello<span class="token entity" title="\\n">\\n</span>Shell&quot;</span>
Hello<span class="token punctuation">\\</span>nShell

<span class="token comment"># 引号的情况</span>
<span class="token variable">$echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;Hello<span class="token entity" title="\\n">\\n</span>Shell&quot;</span>
Hello
Shell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命令格式" tabindex="-1"><a class="header-anchor" href="#命令格式" aria-hidden="true">#</a> 命令格式</h2><p>通产</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">command</span> <span class="token punctuation">[</span> arg1 <span class="token punctuation">..</span>. <span class="token punctuation">[</span> argN <span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，<code>command</code>是具体的命令或者一个可执行文件，<code>arg1 ... argN</code>是传递给命令的参数，是可选的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ ls -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面这个命令中，<code>ls</code>是命令，<code>-l</code>是参数。</p><p>上列参数中 <code>-l</code>是短形式，如果用<code>-list</code>则是长形式，短形式用于方便执行代码，长形式用于保持代码的阅读性。</p><h3 id="换行" tabindex="-1"><a class="header-anchor" href="#换行" aria-hidden="true">#</a> 换行</h3><p>Bash 单个命令一般都是一行，用户按下回车键，就开始执行。有些命令比较长，写成多行会有利于阅读和编辑，这时可以在每一行的结尾加上反斜杠，Bash 就会将下一行跟当前行放在一起解释。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> foo bar
<span class="token comment"># 等同于</span>
$ <span class="token builtin class-name">echo</span> foo <span class="token punctuation">\\</span>
bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="空格" tabindex="-1"><a class="header-anchor" href="#空格" aria-hidden="true">#</a> 空格</h3><p>Bash使用空格或<code>Tab</code>键来区别不同的参数。</p><p>如果参数之间有多个空格，Bash 会自动忽略多余的空格。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> this is a     <span class="token builtin class-name">test</span>
this is a <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面命令中，<code>a</code>和<code>test</code>之间有多个空格，Bash 会忽略多余的空格。</p><h3 id="分号" tabindex="-1"><a class="header-anchor" href="#分号" aria-hidden="true">#</a> 分号</h3><p>分号（<code>;</code>）是命令的结束符，使得一行可以放置多个命令，上一个命令执行结束后，再执行第二个命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">clear</span><span class="token punctuation">;</span> <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="组合符-和" tabindex="-1"><a class="header-anchor" href="#组合符-和" aria-hidden="true">#</a> 组合符 <code>&amp;&amp; </code> 和 <code>||</code></h2><p><code>&amp;&amp;</code>表示第一个执行成功之后，第二个再执行</p><p><code>||</code>表示第一个执行失败，第二个再执行</p><h2 id="type命令" tabindex="-1"><a class="header-anchor" href="#type命令" aria-hidden="true">#</a> type命令</h2><p>Bash本身内置了很多命令，也可以执行外部程序。可以通过 <code>type</code>命令判断命令的来源</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$type</span> <span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> is a shell <span class="token builtin class-name">builtin</span>
<span class="token variable">$type</span> <span class="token function">ls</span>
<span class="token function">ls</span> is hashed<span class="token punctuation">(</span>/bin/ls<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以加 <code>-a</code>参数查看命令的所有定义</p><p>可以加 <code>-t</code>参数查看命令的类型</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">type</span> <span class="token parameter variable">-t</span> <span class="token function">bash</span>
<span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="快捷键" tabindex="-1"><a class="header-anchor" href="#快捷键" aria-hidden="true">#</a> 快捷键</h2><p>部分常用快捷键：</p><ul><li><code>Ctrl + L</code>：清除屏幕并将当前行移到页面顶部。</li><li><code>Ctrl + C</code>：中止当前正在执行的命令。</li><li><code>Shift + PageUp</code>：向上滚动。</li><li><code>Shift + PageDown</code>：向下滚动。</li><li><code>Ctrl + U</code>：从光标位置删除到行首。</li><li><code>Ctrl + K</code>：从光标位置删除到行尾。</li><li><code>Ctrl + W</code>：删除光标位置前一个单词。</li><li><code>Ctrl + D</code>：关闭 Shell 会话。</li><li><code>↑</code>，<code>↓</code>：浏览已执行命令的历史记录。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/Chore/Bash学习(一).html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Bash______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Bash学习(一).html.vue"]]);
export {
  Bash______html as default
};
