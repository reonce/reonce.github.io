<template><div><h1 id="bash学习-二" tabindex="-1"><a class="header-anchor" href="#bash学习-二" aria-hidden="true">#</a> Bash学习(二)</h1>
<h2 id="第三章-bash的模式扩展" tabindex="-1"><a class="header-anchor" href="#第三章-bash的模式扩展" aria-hidden="true">#</a> 第三章 Bash的模式扩展</h2>
<p>Bash当中，存在着许多特殊的符号，来表示特殊的命令,这种符号的使用被称为<strong>模式扩展</strong>，其中用到通配符的部分，被称为<code v-pre>通配符扩展</code></p>
<p>本章主要以了解为主，知道有这些特殊的符号扩展即可，回头使用来翻阅即可。</p>
<h3 id="扩展的开关" tabindex="-1"><a class="header-anchor" href="#扩展的开关" aria-hidden="true">#</a> 扩展的开关</h3>
<p>Bash 允许用户关闭扩展。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">set</span> <span class="token parameter variable">-o</span> noglob
<span class="token comment"># 或者</span>
$ <span class="token builtin class-name">set</span> <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的命令可以重新打开扩展。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">set</span> +o noglob
<span class="token comment"># 或者</span>
$ <span class="token builtin class-name">set</span> +f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="波浪线-扩展" tabindex="-1"><a class="header-anchor" href="#波浪线-扩展" aria-hidden="true">#</a> 波浪线<code v-pre>~</code>扩展</h3>
<p><code v-pre>~</code>在bash当中表示当前用户的主目录</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code> $ %echo ~
/Users/jaydonyin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>~</code>号拼路径，会表示主目录下拼接的路径，但是此路径必须存在，<code v-pre>bash</code>中会原样输出，在我电脑的<code v-pre>zsh</code>环境中，会报错</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code> $ <span class="token builtin class-name">echo</span> ~/Applications 
/Users/jaydonyin/Applications
$ %echo ~abbccd
zsh: no such user or named directory: abbccd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>~+</code>会扩展成当前执行目录的路径，等同于<code v-pre>pwd</code></p>
<p><strong>接下来的内容主要是类似于正则表达式的用法，用来筛选出需要的文件，我复制了一些原文</strong>：</p>
<h3 id="字符扩展" tabindex="-1"><a class="header-anchor" href="#字符扩展" aria-hidden="true">#</a> <code v-pre>?</code>字符扩展</h3>
<p><code v-pre>?</code>字符代表文件路径里面的任意单个字符，不包括空字符。比如，<code v-pre>Data???</code>匹配所有<code v-pre>Data</code>后面跟着三个字符的文件名。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 存在文件 a.txt 和 b.txt
$ ls ?.txt
a.txt b.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面命令中，<code v-pre>?</code>表示单个字符，所以会同时匹配<code v-pre>a.txt</code>和<code v-pre>b.txt</code>。</p>
<p>如果匹配多个字符，就需要多个<code v-pre>?</code>连用。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 存在文件 a.txt、b.txt 和 ab.txt
$ ls ??.txt
ab.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不存在复合条件的类型文件，<code v-pre>zsh</code>环境会报错，<code v-pre>bash</code>中会原样输出</p>
<h3 id="字符扩展-1" tabindex="-1"><a class="header-anchor" href="#字符扩展-1" aria-hidden="true">#</a> <code v-pre>*</code>字符扩展</h3>
<p><code v-pre>*</code>字符代表文件路径里面的任意数量的任意字符，包括零个字符。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 存在文件 a.txt、b.txt 和 ab.txt
$ ls *.txt
a.txt b.txt ab.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="大括号扩展" tabindex="-1"><a class="header-anchor" href="#大括号扩展" aria-hidden="true">#</a> 大括号扩展</h3>
<p>大括号扩展<code v-pre>{...}</code>表示分别扩展成大括号里面的所有值，各个值之间使用逗号分隔。比如，<code v-pre>{1,2,3}</code>扩展成<code v-pre>1 2 3</code>。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span><span class="token number">1,2</span>,3<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>

$ <span class="token builtin class-name">echo</span> d<span class="token punctuation">{</span>a,e,i,u,o<span class="token punctuation">}</span>g
dag deg <span class="token function">dig</span> dug dog

$ <span class="token builtin class-name">echo</span> Front-<span class="token punctuation">{</span>A,B,C<span class="token punctuation">}</span>-Back
Front-A-Back Front-B-Back Front-C-Back
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>大括号内部的逗号前后不能有空格</strong>。否则，大括号扩展会失效。</p>
<h3 id="start-end-扩展" tabindex="-1"><a class="header-anchor" href="#start-end-扩展" aria-hidden="true">#</a> {start..end} 扩展</h3>
<p>大括号扩展有一个简写形式<code v-pre>{start..end}</code>，表示扩展成一个连续序列。比如，<code v-pre>{a..z}</code>可以扩展成26个小写英文字母。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ echo {a..c}
a b c

$ echo d{a..d}g
dag dbg dcg ddg

$ echo {1..4}
1 2 3 4

$ echo Number_{1..5}
Number_1 Number_2 Number_3 Number_4 Number_5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种简写形式支持逆序。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ echo {c..a}
c b a

$ echo {5..1}
5 4 3 2 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量扩展" tabindex="-1"><a class="header-anchor" href="#变量扩展" aria-hidden="true">#</a> 变量扩展</h3>
<p><code v-pre>$</code>开头的词元视为变量，将其扩展成变量值。也可以放在<code v-pre>${}</code>里面。</p>
<h3 id="子命令扩展" tabindex="-1"><a class="header-anchor" href="#子命令扩展" aria-hidden="true">#</a> 子命令扩展</h3>
<p><code v-pre>$(...)</code>可以扩展成另一个命令的运行结果，该命令的所有输出都会作为返回值。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ echo $(date)
Tue Jan 28 00:01:13 CST 2020
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="算数扩展" tabindex="-1"><a class="header-anchor" href="#算数扩展" aria-hidden="true">#</a> 算数扩展</h3>
<p><code v-pre>$((...))</code>可以扩展成整数运算的结果，详见《Bash 的算术运算》一章。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ echo $((2 + 2))
4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更多的其他扩展" tabindex="-1"><a class="header-anchor" href="#更多的其他扩展" aria-hidden="true">#</a> 更多的其他扩展</h3>
<ul>
<li>方括号扩展[...]。同正则表达式规则</li>
<li>[start-end]扩展，例如[1-9]。同正则表达式规则</li>
<li>字符类扩展，一些特定的字符标识某种匹配规则，<a href="%E5%8E%9F%E6%96%87%E5%AD%97%E5%85%B8">原文字典链接</a></li>
</ul>
<h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3>
<ol>
<li>
<p>通配符是先解析，在执行</p>
</li>
<li>
<p>文件名扩展不匹配时，会原样输出。（zsh中会抛出异常）</p>
</li>
<li>
<p>只能用于单层路径，不支持跨层匹配</p>
</li>
<li>
<p>文件名可以使用通配符</p>
<p>Bash 允许文件名使用通配符，即文件名包括特殊字符。这时引用文件名，需要把文件名放在单引号或双引号里面。</p>
</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ touch 'fo*'
$ ls
fo*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


