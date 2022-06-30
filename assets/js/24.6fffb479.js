(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{239:function(n,s,t){"use strict";t.r(s);var a=t(5),e=Object(a.a)({},(function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("今天刷力扣提升算法的时候，偶然遇到一道有超过number类型最大长度限度的测试用例。经过查阅资料学习，总结出此篇关于BigInt类型的一些知识。 BigInt数据类型的目的是比Number数据类型支持的范围更大的整数值。在对大整数执行数学运算时，以任意精度表示整数的能力尤为重要。使用BigInt，整数溢出将不再是问题。 此外，可以安全地使用更加准确时间戳，大整数ID等，而无需使用变通方法。 BigInt目前是第3阶段提案， 一旦添加到规范中，它就是JS 第二个数字数据类型，也将是 JS 第8种基本数据类型。 按照JS标准，所有数字都是以双精度浮点数所表示，无法精确表示的非常大的整数将自动四舍五入。确切地说，JS 中的Number类型只能安全地表示-9007199254740991 (-(2^53-1)) 和9007199254740991(2^53-1)之间的整数，任何超出此范围的整数值都可能失去精度。为了解决这个限制 BigInt诞生了。")]),n._v(" "),t("p",[n._v("使用说明： 要创建BigInt，只需在整数的末尾追加n即可。比较:")]),n._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[n._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("9007199254740995n")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// → 9007199254740995n console.log(9007199254740995); // → 9007199254740996 或者，可以调用BigInt()构造函数")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("BigInt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("“"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("9007199254740995")]),n._v("”"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// → 9007199254740995n BigInt文字也可以用二进制、八进制或十六进制表示")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// binary console.log(0b100000000000000000000000000000000000000000000000000011n); // → 9007199254740995n")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// hex console.log(0x20000000000003n); // → 9007199254740995n")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// octal console.log(0o400000000000000003n); // → 9007199254740995n")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// note that legacy octal syntax is not supported console.log(0400000000000000003n); // → SyntaxError 请记住，不能使用严格相等运算符将BigInt与常规数字进行比较，因为它们的类型不同：")]),n._v("\n\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("10n")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("===")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// → false")]),n._v("\n\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("typeof")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("10n")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// → bigint console.log(typeof 10); // → number 相反，可以使用等号运算符，它在处理操作数之前执行隐式类型转换")]),n._v("\n\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("10n")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("==")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// → true 除一元加号(+)运算符外，所有算术运算符都可用于BigInt")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("10n")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("+")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("20n")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// → 30n 10n - 20n; // → -10n +10n; // → TypeError: Cannot convert a BigInt value to a number -10n; // → -10n 10n * 20n; // → 200n 20n / 10n; // → 2n 23n % 10n; // → 3n 10n ** 3n; // → 1000n")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("const")]),n._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("10n")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("++")]),n._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// → 11n –x; // → 9n")]),n._v("\n\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);