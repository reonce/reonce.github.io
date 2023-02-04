<template><div><h1 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h1>
<p><code v-pre>JSON.stringify(obj, []/fun, number/string)</code>接收三个参数，第一个是要序列化的对象。第二个参数可以是一个包含要序列化对象的键的数组，或者是一个函数，这个函数接收<code v-pre>(key, value)</code>两个参数。第三个参数表示缩进。</p>
<p>对象中可以定义<code v-pre>toJSON()</code>方法，序列化json时，将返回对象定义的<code v-pre>toJSON()</code>方法的返回值。</p>
<p><code v-pre>JSON.parse()</code>方法也可以接受一个函数作为第二个参数，这个参数被称为<strong>复活函数</strong>。复活函数接受两个参数（key, value），也需要返回值，如果返回undefined，则结果中会删除相应的键。如果返回了其他值，则该值会成为响应键的值从插入到结果中。</p>
</div></template>


