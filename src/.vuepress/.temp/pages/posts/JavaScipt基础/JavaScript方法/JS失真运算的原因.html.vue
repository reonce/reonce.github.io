<template><div><h1 id="关于js失真运算0-55-100-55-0000001" tabindex="-1"><a class="header-anchor" href="#关于js失真运算0-55-100-55-0000001" aria-hidden="true">#</a> 关于JS失真运算0.55*100=55.0000001</h1>
<p><em>今天写业务偶然实现了<code v-pre> 0.55*100</code>的代码，结果不尽人意，等于55.0000001</em></p>
<hr>
<p>这好吗? 这不好。原因如下：</p>
<p>在JS中，变量存储没有区分数字型和浮点型，而是统一作为浮点型(float)进行存储，这在很久前学习时有个模糊的印象。
查阅资料，IEEE 754-2008 标准定义的64bit浮点格式存储number.</p>
<p>其实JavsScript中，变量在存储时并不区分number和float类型，而是统一按float存储，而javascript使用IEEE 754-2008 标准定义的64bit浮点格式存储number，<code v-pre>0.55</code>对应的整形部分长度为0,小数部分长度为16，所以默认的计算结果为“55.0000001”，如最后一个小数为0，则取1作为有效数字标志。类似地，可以想像，1/3的结果应该是0.3333333333333333。</p>
<p>我的解决方案是 使用<strong>Math.round()</strong> 函数取整（这里提一句使用toFixed()可能会导致精度丢失）</p>
</div></template>


