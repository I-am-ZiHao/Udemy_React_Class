(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{41:function(e,t,c){e.exports={card:"Card_card__1m44e"}},42:function(e,t,c){e.exports={form:"QuoteForm_form__3Ndw9",loading:"QuoteForm_loading__iDpS0",control:"QuoteForm_control__2lCiE",actions:"QuoteForm_actions__354La"}},55:function(e,t,c){"use strict";c.r(t);var n=c(37),o=c(0),r=c(2),s=c(41),a=c.n(s),i=c(1),u=function(e){return Object(i.jsx)("div",{className:a.a.card,children:e.children})},l=c(15),d=c(42),j=c.n(d),b=function(e){var t=Object(o.useState)(!1),c=Object(n.a)(t,2),s=c[0],a=c[1],d=Object(o.useRef)(),b=Object(o.useRef)();return Object(i.jsxs)(o.Fragment,{children:[Object(i.jsx)(r.a,{when:s,message:function(e){return"Sure to leave?"}}),Object(i.jsx)(u,{children:Object(i.jsxs)("form",{onFocus:function(){a(!0)},className:j.a.form,onSubmit:function(t){t.preventDefault();var c=d.current.value,n=b.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(i.jsx)("div",{className:j.a.loading,children:Object(i.jsx)(l.a,{})}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"author",children:"Author"}),Object(i.jsx)("input",{type:"text",id:"author",ref:d})]}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("textarea",{id:"text",rows:"5",ref:b})]}),Object(i.jsx)("div",{className:j.a.actions,children:Object(i.jsx)("button",{onClick:function(){a(!1)},className:"btn",children:"Add Quote"})})]})})]})},f=c(35),h=c(36);t.default=function(){var e=Object(f.a)(h.b),t=e.sendRequest,c=e.status,n=Object(r.h)();Object(o.useEffect)((function(){"completed"===c&&n.push("/quotes")}),[c,n]);return Object(i.jsx)(b,{isLoading:"pending"===c,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=6.53599aa1.chunk.js.map