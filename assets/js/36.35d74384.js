(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{178:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("为了能让检查对象字面量类型更容易，TypeScript 提供 Freshness 的概念（它也被称为更严格的对象字面量检查）用来确保对象字面量在结构上类型兼容。")]),t._v(" "),a("p",[t._v("结构类型非常方便。考虑如下例子代码，它可以让你非常便利的从 JavaScript 迁移至 TypeScript，并且会提供类型安全：")]),t._v(" "),t._m(1),a("p",[t._v("然而，结构类型有一个缺点，它能误导你认为某些东西接收的数据比它实际的多。如下例，TypeScript 发出错误警告：")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("另外一个使用比较多的场景是与具有可选成员的接口一起使用，如果没有这样的对象字面量检查，当你输入错误单词的时候，并不会发出错误警告：")]),t._v(" "),t._m(5),a("p",[t._v("之所以只对对象字面量进行类型检查的原因是，在这种情况下，那些实际上并没有被使用到的属性有可能会拼写错误或者会被误用。"),a("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/pull/3823",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关 PR"),a("OutboundLink")],1)]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("一个类型能够包含索引签名，以明确表明可以使用额外的属性：")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),a("p",[t._v("如果你想使用 Freshness，你可能需要将所有成员标记为可选，这仍然会捕捉到拼写错误：")]),t._v(" "),t._m(11)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"freshness"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#freshness","aria-hidden":"true"}},[this._v("#")]),this._v(" Freshness")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("logName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("something"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("something"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" person "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'matt'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" job"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'being awesome'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" animal "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'cow'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" diet"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vegan, but has milk of own specie'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" randow "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" note"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`I don't have a name property`")])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("logName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ok")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("logName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("animal"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ok")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("logName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("randow"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Error: 没有 `name` 属性")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("logName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("something"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token builtin"}},[t._v("console")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("something"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("logName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'matt'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ok")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("logName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'matt'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" job"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'being awesome'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Error: 对象字面量只能指定已知属性，`job` 属性在这里并不存在。")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),s("p",[this._v("请注意，这种错误提示，只会发生在对象字面量上。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("如果没有这种错误提示，我们可能会去寻找函数的调用 "),a("code",[t._v("logName({ name: 'matt', job: 'being awesome' })")]),t._v("，继而会认为 "),a("code",[t._v("logName")]),t._v(" 可能会使用 "),a("code",[t._v("job")]),t._v(" 属性做一些事情，然而实际上 "),a("code",[t._v("logName")]),t._v(" 并没有使用它。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("logIfHasName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("something"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("something"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token builtin"}},[t._v("console")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("something"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" person "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'matt'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" job"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'being awesome'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" animal "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'cow'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" diet"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vegan, but has milk of own species'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("logIfHasName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// okay")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("logIfHasName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("animal"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// okay")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("logIfHasName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" neme"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'I just misspelled name to neme'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Error: 对象字面量只能指定已知属性，`neme` 属性不存在。")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"允许额外的属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#允许额外的属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 允许额外的属性")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("any")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nx "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" baz"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ok, 'baz' 属性匹配于索引签名")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"用例：react-state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用例：react-state","aria-hidden":"true"}},[this._v("#")]),this._v(" 用例：React State")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Facebook ReactJS 为对象的 Freshness 提供了一个很好的用例，通常在组件中，你只使用少量属性，而不是传入所有，来调用 "),s("code",[this._v("setState")]),this._v("：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 假设")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("State")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  bar"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 你可能想做：")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Error: 没有属性 'bar'")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 因为 state 包含 'foo' 与 'bar'，TypeScript 会强制你这么做：")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bar"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 假设")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("State")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  foo"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  bar"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 你可能想做")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Yay works fine!")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 由于 Freshness，你也可以防止错别字")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foos"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Error: 对象只能指定已知属性")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 仍然会有类型检查")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("123")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Error: 无法将 number 类型赋值给 string 类型")]),t._v("\n")])])])}],!1,null,null,null);s.default=o.exports}}]);