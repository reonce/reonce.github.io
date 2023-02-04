<template><div><h1 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h1>
<p>ES6引入新的class关键字，是一个新的基础语法糖。虽然表面上看起来支持正式的面向对象编程，但实际上<strong>背后使用的仍然是原型和构造函数</strong>的概念。</p>
<p>定义类的两种方式：类声明和类表达式。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 类声明</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 类表达式</span>
<span class="token keyword">const</span> Animal <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与函数表达式类似，类表达式在他们被求值前也不能引用。与函数定义不同的是：</p>
<ol>
<li>类定义声明不能提升，而函数的可以。</li>
<li>函数受函数作用域限制，而类受块级作用域限制。</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Fn<span class="token punctuation">)</span> <span class="token comment">// fn(){}</span>
<span class="token keyword">function</span> <span class="token function">Fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Person<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="类的首字母要大写" tabindex="-1"><a class="header-anchor" href="#类的首字母要大写" aria-hidden="true">#</a> 类的首字母要大写</h5>
<h2 id="类构造函数" tabindex="-1"><a class="header-anchor" href="#类构造函数" aria-hidden="true">#</a> 类构造函数</h2>
<p>constructor关键字用于在类定义块内部构造函数，非必须的。</p>
<h5 id="如果构造函数返回非空对象-则返回该对象-否则返回刚创建的对象" tabindex="-1"><a class="header-anchor" href="#如果构造函数返回非空对象-则返回该对象-否则返回刚创建的对象" aria-hidden="true">#</a> 如果构造函数返回非空对象，则返回该对象；否则返回刚创建的对象</h5>
<blockquote>
<p>如果返回的不是this对象，而是其他对象，那么这个对象不会通过instanceof操作符检测出和类有关联</p>
</blockquote>
<h5 id="类中的代码默认是严格模式" tabindex="-1"><a class="header-anchor" href="#类中的代码默认是严格模式" aria-hidden="true">#</a> 类中的代码默认是严格模式</h5>
<h5 id="调用类构造函数时如果不适用new则会抛出异常" tabindex="-1"><a class="header-anchor" href="#调用类构造函数时如果不适用new则会抛出异常" aria-hidden="true">#</a> 调用类构造函数时如果不适用new则会抛出异常</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token function">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// TypeError: class construction ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类构造函数在实例化之后，它就会成为普通的实例方法。</p>
<p>严格来说，类中定义的普通方法都定义在原型上，所以constructor并不是实例方法。只有在构造函数中定义在this的方法才是实例自己的方法。</p>
<h5 id="所有类的constructor都等于funciton" tabindex="-1"><a class="header-anchor" href="#所有类的constructor都等于funciton" aria-hidden="true">#</a> 所有类的constructor都等于Funciton</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Person<span class="token punctuation">.</span>constructot <span class="token comment">// Function() { [native code] }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>类不能在类块中给原型添加值作为成员数据，也就是说目前没有显示支持添加数据成员的方法（目前有提案在进行）</p>
<p>类定义语法支持在原型和类本身上定义生成器方法：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token operator">*</span><span class="token function">createNicknameIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    yiekd <span class="token string">'Butcher'</span><span class="token punctuation">;</span>
    yiekd <span class="token string">'Baker'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> p <span class="token operator">=</span> Person<span class="token punctuation">.</span>createNicknameIterator
<span class="token constant">P</span><span class="token punctuation">.</span>next <span class="token comment">// Butcher</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类支持生成器方法，因此可以<strong>通过添加一个默认的迭代器，把类实例变成可迭代对象：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>nickNames <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token operator">*</span><span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> <span class="token operator">*</span><span class="token keyword">this</span><span class="token punctuation">.</span>nickNames<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>ids<span class="token punctuation">,</span> nickName<span class="token punctuation">]</span> <span class="token keyword">of</span> p<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nickName<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3>
<ol>
<li>
<h4 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h4>
</li>
</ol>
<p>可以使用extends继承类，也可以继承普通的构造函数（保持向后兼容</p>
<p>extend关键字也可以在类表达式中使用</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> Bar <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> Foo <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>
<h4 id="构造函数、homeobjcet和super" tabindex="-1"><a class="header-anchor" href="#构造函数、homeobjcet和super" aria-hidden="true">#</a> 构造函数、HomeObjcet和super()</h4>
</li>
</ol>
<h6 id="派生类方法可以通过super关键字引用它们的原型" tabindex="-1"><a class="header-anchor" href="#派生类方法可以通过super关键字引用它们的原型" aria-hidden="true">#</a> 派生类方法可以通过super关键字引用它们的原型</h6>
<blockquote>
<p>在实例方法中，super引用父类原型，可以通过它调用父类原型上的方法。在类方法（静态方法）中，super引用父类，可以调用父类的静态方法。在构造函数中，super是父类构造函数的别名，通过它可以调用父类构造函数。</p>
</blockquote>
<h5 id="使用super的注意事项" tabindex="-1"><a class="header-anchor" href="#使用super的注意事项" aria-hidden="true">#</a> 使用super的注意事项：</h5>
<ul>
<li>suiper只能在<strong>派生类</strong>构造函数和静态方法中使用。</li>
</ul>
<p>派生类中必须先调用super（），再操作this，否则会报错。</p>
<ul>
<li>继承自其他类的类被称作派生类，如果在派生类中指定 了构造函数，则要么必须再其中调用super（），要么必须在其中返回一个对象。如果不这样做程序就会报错。如果选择不使用构造函数，则当创建新的类实例时会自动调用super()并传入所有参数</li>
</ul>
</div></template>


