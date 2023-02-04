<template><div><p>先看下MDN官方介绍:
<strong>Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。</strong>
创建一个新的、浅拷贝的数组，这里最开始很难理解这句话。“新的”或许代表着深拷贝？ 但是为什么又说是创建浅拷贝呢。
这里放一段让我对<code v-pre>Array.from</code><strong>浅拷贝</strong>疑惑的代码</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> copyArr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
copyArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>copyArr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [8, 2, 3]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1,2,3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个疑问首先要在深度理解一下<strong>深浅拷贝</strong>，首先提一个很重要的一句，深浅拷贝只针对于引用类型（对象、数组）的数据。</p>
<p><code v-pre>Array.from</code>拷贝的实际上是伪数组的子元素，以上示例的问题也就暴露出来了：拷贝的是数字，属于基本类型，因此不存在浅拷贝的概念。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">23</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> copyArr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
copyArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>copyArr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [{id:8, age:23}, {id:2, age: 24}]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [{id:8, age:23}, {id:2, age: 24}]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个示例中就证明了<strong>浅拷贝</strong>的概念。</p>
<p>这里又出现了一个疑问的问题了（来自lly）</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> copyArr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
copyArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>copyArr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [[8], [2]];</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// // [[1], [2]];</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不是浅拷贝吗，这里怎么没改成。说实话，直接改<code v-pre>copyArr[0] = [8]</code>这个改法也比较清奇..，正常不应该改<code v-pre>copyArr[0][0] = 8</code>吗，后者的改法是浅拷贝的。</p>
<p>这里就要提到**“新的”<strong>这个概念了，<code v-pre>Array.from</code>创建的是一个</strong>新的**、<em>浅拷贝</em>的数组。</p>
<p>也就是说生成的这个数组本身是新的，占用内存是独立的。我的理解是，如果数组中的子元素是引用类型，拷贝数组的子元素就会直接指向原数组的子元素。更改引用类型子元素，原数组当然也会更改（同一个），但是直接去更改数组本身，实际上并不影响原数组的，也就是拷贝数组本身是一个<strong>新的</strong>数组。</p>
<p><strong>Tip:</strong> 在实际开发中，要记住<code v-pre>Array.from</code>浅拷贝的概念，或者慎用。以避免难以排查的错误。</p>
<p>这里补充一些<code v-pre>Array.from</code>的用法。 三个传参 要转换的目标、对子元素执行的方法、this指向</p>
<p>下面一些示例介绍具体使用</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Array.from('foo');
// [ "f", "o", "o" ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [ 1, 2, 3 ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// 第二个传参
Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]

Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// 数组去重 合并
function combine(){
    let arr = [].concat.apply([], arguments);  //没有去重复的新数组
    return Array.from(new Set(arr));
}

var m = [1, 2, 2], n = [2,3,3];
console.log(combine(m,n));                     // [1, 2, 3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


