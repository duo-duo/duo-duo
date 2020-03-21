(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{255:function(t,s,n){"use strict";n.r(s);var a=n(28),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"axios"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#axios"}},[t._v("#")]),t._v(" axios")]),t._v(" "),n("blockquote",[n("p",[t._v("Axios功能很强大,尤大也因此放弃了vue-resource，直接推荐axios\n以下是封装的代码：")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"use strict"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" axios "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"axios"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Full config:  https://github.com/axios/axios#request-config")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';")]),t._v("\n\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" config "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// baseURL: process.env.baseURL || process.env.apiUrl || ""')]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// timeout: 60 * 1000, // Timeout")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// withCredentials: true, // Check cross-site Access-Control")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" _axios "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" axios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n _axios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interceptors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something before request is sent")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something with request error")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Promise"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add a response interceptor")]),t._v("\n _axios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interceptors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something with response data")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something with response error")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Promise"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n Plugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("install")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("axios "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _axios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("axios "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _axios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperties")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     axios"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" _axios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     $axios"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" _axios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Plugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" Plugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用的时候，直接")]),t._v("\naxios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//res中封装的有data数据")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);