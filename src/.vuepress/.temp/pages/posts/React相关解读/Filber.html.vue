<template><div><h1 id="fiber" tabindex="-1"><a class="header-anchor" href="#fiber" aria-hidden="true">#</a> Fiber</h1>
<h4 id="回答关键的几个的地方" tabindex="-1"><a class="header-anchor" href="#回答关键的几个的地方" aria-hidden="true">#</a> 回答关键的几个的地方</h4>
<ol>
<li>
<p>递归树改成链表，可中断</p>
</li>
<li>
<p>链表节点有4个关键属性，return父亲，child子节点，sibling兄弟，alternate拷贝</p>
</li>
<li>
<p>DFS，一路到底，再向上遍历兄弟 就这几个就差不多了，基本不会再问了。其他再补充比如react自己实现了reaquestIdleCallback</p>
</li>
</ol>
</div></template>


