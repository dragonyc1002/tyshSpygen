(this["webpackJsonptyshSpy-Message-Generator"]=this["webpackJsonptyshSpy-Message-Generator"]||[]).push([[1],{22:function(e){e.exports=JSON.parse('{"content":["\u9019\u662f \u6843\u9ad8\u81e5\u5e95 \u8a0a\u606f\u7522\u751f\u5668\uff0c\u4f60\u53ef\u4ee5\u7528\u5b83\u7522\u751f\u4ed6\u6c92\u8aaa\u904e\u7684\u8a71","\u6211\u6c92\u8aaa\u904e\u9019\u53e5\u8a71","\u55e8\uff0c\u6b61\u8fce\u4f7f\u7528\u6843\u9ad8\u81e5\u5e95\u8a0a\u606f\u7522\u751f\u5668","\u4f60\u9019\u8b8a\u614b\u662f\u4e0d\u662f\u60f3\u62ff\u9019\u53bb\u505a\u5947\u602a\u7684\u4e8b","\u5982\u679c\u4f60\u770b\u5230\u4e86\u9019\u5247\u8a0a\u606f\uff0c\u6709\u5f88\u5927\u7684\u6a5f\u7387\u4e0d\u662f\u6211\u8b1b\u7684","\u6211\u5f88\u8ced\u721b\u7d42\u7a76\u6709\u4e00\u5929\uff0c\u4eba\u5011\u6703\u62ff\u8457\u4e00\u5f35 Discord \u8a0a\u606f\u622a\u5716\uff0c\u4e0a\u9762\u6709\u6211\u7684\u540d\u5b57\u548c\u982d\u50cf\uff0c\u4f46\u6211\u6839\u672c\u6c92\u8aaa\u904e\u9019\u53e5\u8a71","\u5728\u4f60\u773c\u524d\u7684\u662f\u4e00\u500b\u8a0a\u606f\u7522\u751f\u5668\uff0c\u4f60\u53ef\u4ee5\u7528\u5b83\u7522\u751f \u6843\u9ad8\u81e5\u5e95 \u6c92\u8aaa\u904e\u7684\u8a71\u5230\u8655\u50b3\u8b93\u4ed6\u982d\u5f88\u75db"],"attachments":[""]}')},39:function(e,t,n){var c={"./discord-action-row_29.entry.js":[44,0]};function a(e){if(!n.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(c)},a.id=39,e.exports=a},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(11),r=n.n(a),i=n(2),o=n.p+"static/media/avatar-main.7c7b135a.png",s=n(8),j=n(0),l={main:o};function h(e){return Object(j.jsx)(s.c,{style:{minHeight:"90px"},"light-theme":e.light,id:"renderer",children:Object(j.jsxs)(s.b,{author:e.name,avatar:l[e.avatar],roleColor:e.color,timestamp:e.timestamp,children:["",e.content,Object(j.jsx)("div",{children:/\.(bmp|jpe?g|png|gif|webp|tiff)$/i.test(e.attachment)?Object(j.jsx)(s.a,{slot:"attachments",url:e.attachment,style:{maxWidth:"256px"},alt:"attachment"}):""})]})})}function u(e){return Object(j.jsxs)("fieldset",{children:[Object(j.jsx)("legend",{children:"\u8a0a\u606f\u5167\u5bb9"}),Object(j.jsx)("input",{type:"text",value:e.content,onChange:function(t){e.onContentChange(t.target.value)},style:{width:"80vw",height:"30px"}})]})}function d(e){return Object(j.jsxs)("fieldset",{children:[Object(j.jsx)("legend",{children:"\u982d\u50cf"}),Object(j.jsx)("select",{onChange:function(t){e.onAvatarChange(t.target.value)},children:Object(j.jsx)("option",{value:"main",children:"\u56fa\u5b9a\u5f0f\u982d\u50cf"})})]})}function b(e){return Object(j.jsxs)("fieldset",{children:[Object(j.jsx)("legend",{children:"\u984f\u8272"}),Object(j.jsx)("input",{type:"color",value:e.default,onChange:function(t){e.onColorChange(t.target.value)}})]})}function O(e){return Object(j.jsxs)("fieldset",{children:[Object(j.jsx)("legend",{children:"\u6642\u9593\u9ede"}),Object(j.jsx)("input",{type:"text",value:e.default,onChange:function(t){e.onTimeChange(t.target.value)}})]})}function x(e){return Object(j.jsxs)("fieldset",{onChange:function(t){e.onCheckChange(t.target.checked)},children:[Object(j.jsx)("legend",{children:"\u660e\u4eae\u80cc\u666f"}),Object(j.jsx)("input",{type:"checkbox",id:"box"}),Object(j.jsx)("label",{htmlFor:"box",children:"\u958b\u555f"})]})}function g(e){return Object(j.jsxs)("fieldset",{children:[Object(j.jsxs)("legend",{children:[Object(j.jsx)("nobr",{children:"\u9644\u4ef6\u5716\u7247\u7db2\u5740"}),Object(j.jsx)("nobr",{children:"\uff08\u5c0d\uff0c\u53ea\u80fd\u4e00\u5f35\u5716\u7247\uff0c\u9ebb\u7169\u7528\u526f\u6a94\u540d\u7d50\u5c3e\uff09"})]}),Object(j.jsx)("input",{type:"text",value:e.url,onChange:function(t){e.onAttachmentChange(t.target.value)},style:{width:"80vw",height:"30px"}})]})}function f(e){return Object(j.jsxs)("fieldset",{children:[Object(j.jsx)("legend",{children:"\u540d\u7a31"}),Object(j.jsxs)("select",{onChange:function(t){e.onNameChange(t.target.value)},children:[Object(j.jsx)(m,{name:"\u6843\u9ad8\u81e5\u5e95"}),Object(j.jsx)(m,{name:"\u6d77\u8c5a"})]})]})}function m(e){var t=e.name;return Object(j.jsx)("option",{value:t,children:t})}var p=n(22);function v(){var e,t=new Date,n=Object(c.useState)((e=p.content)[~~(Math.random()*e.length)]),a=Object(i.a)(n,2),r=a[0],o=a[1],s=Object(c.useState)("\u6843\u9ad8\u81e5\u5e95"),l=Object(i.a)(s,2),m=l[0],v=l[1],C=Object(c.useState)("main"),y=Object(i.a)(C,2),w=y[0],S=y[1],k=Object(c.useState)("#657c89"),D=Object(i.a)(k,2),M=D[0],N=D[1],A=Object(c.useState)("".concat(t.getFullYear(),"/").concat(t.getMonth()+1,"/").concat(t.getDate())),F=Object(i.a)(A,2),E=F[0],J=F[1],T=Object(c.useState)(!1),_=Object(i.a)(T,2),G=_[0],U=_[1],B=Object(c.useState)([]),H=Object(i.a)(B,2),I=H[0],L=H[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("div",{id:"title",children:"\u6843\u9ad8\u81e5\u5e95 \u8a0a\u606f\u7522\u751f\u5668"}),Object(j.jsx)("a",{href:"https://github.com/dragonyc1002/tyshSpygen",children:"\u539f\u59cb\u78bc"})]}),Object(j.jsxs)("div",{id:"inputs",children:[Object(j.jsx)(x,{default:G,onCheckChange:function(e){U(e)}}),Object(j.jsx)(b,{default:M,onColorChange:function(e){N(e)}}),Object(j.jsx)(f,{default:m,onNameChange:function(e){v(e)}}),Object(j.jsx)(d,{default:w,onAvatarChange:function(e){S(e)}}),Object(j.jsx)(O,{default:E,onTimeChange:function(e){J(e)}}),Object(j.jsx)(g,{url:I,onAttachmentChange:function(e){L(e)}}),Object(j.jsx)(u,{content:r,onContentChange:function(e){o(e)}}),Object(j.jsx)(h,{name:m,content:r,avatar:w,color:M,timestamp:E,light:G,attachment:I})]})]})}n(41);r.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[42,3,4]]]);
//# sourceMappingURL=main.4827b02a.chunk.js.map