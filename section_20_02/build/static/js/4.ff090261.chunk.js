(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{44:function(e,t,c){e.exports={comments:"Comments_comments__iZX-v"}},45:function(e,t,c){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},46:function(e,t,c){e.exports={item:"CommentItem_item__24mbD"}},47:function(e,t,c){e.exports={comments:"CommentsList_comments__valp0"}},48:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},53:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),o=c(37),a=c(44),m=c.n(a),r=c(35),j=c(36),i=c(45),d=c.n(i),u=c(15),l=c(1),b=function(e){var t=Object(n.useRef)(),c=Object(r.a)(j.a),s=c.sendRequest,o=c.status,a=c.error,m=e.onAddComment;Object(n.useEffect)((function(){"completed"!==o||a||m()}),[o,a,m]);var i=function(c){c.preventDefault();var n=t.current.value;s({commentData:{text:n},quoteId:e.quoteId})};return Object(l.jsxs)("form",{className:d.a.form,onSubmit:i,children:["pending"===o&&Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)(u.a,{})}),Object(l.jsxs)("div",{className:d.a.control,onSubmit:i,children:[Object(l.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(l.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(l.jsx)("div",{className:d.a.actions,children:Object(l.jsx)("button",{className:"btn",children:"Add Comment"})})]})},x=c(46),O=c.n(x),h=function(e){return Object(l.jsx)("li",{className:O.a.item,children:Object(l.jsx)("p",{children:e.text})})},f=c(47),p=c.n(f),_=function(e){return Object(l.jsx)("ul",{className:p.a.comments,children:e.comments.map((function(e){return Object(l.jsx)(h,{text:e.text},e.id)}))})},N=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],a=t[1],i=Object(s.j)(),d=Object(r.a)(j.c),x=d.sendRequest,O=d.status,h=d.data,f=i.quoteId.quoteId;Object(n.useEffect)((function(){x(f)}),[f,x]);var p,N=Object(n.useCallback)((function(){x(f)}),[x,f]);return"pending"===O&&(p=Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)(u.a,{})})),"completed"===O&&h&&h.length>0&&(p=Object(l.jsx)(_,{comments:h})),"completed"!==O||h&&0!==h.length||(p=Object(l.jsx)("p",{className:"centered",children:"No comments were added yet."})),Object(l.jsxs)("section",{className:m.a.comments,children:[Object(l.jsx)("h2",{children:"User Comments"}),!c&&Object(l.jsx)("button",{className:"btn",onClick:function(){a(!0)},children:"Add a Comment"}),c&&Object(l.jsx)(b,{quoteId:f,onAddComment:N}),p]})},v=c(48),C=c.n(v),g=function(e){return Object(l.jsxs)("figure",{className:C.a.quote,children:[Object(l.jsx)("p",{children:e.text}),Object(l.jsx)("figcaption",{children:e.author})]})},q=c(7);t.default=function(){var e=Object(s.k)(),t=Object(s.j)().quoteId,c=Object(r.a)(j.e,!0),o=c.sendRequest,a=c.status,m=c.data,i=c.error;return Object(n.useEffect)((function(){o(t)}),[o,t]),"pending"===a?Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)(u.a,{})}):i?Object(l.jsx)("p",{className:"centered",children:i}):m.text?Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)(g,{text:m.text,author:m.author}),Object(l.jsx)(s.c,{path:e.path,exact:!0,children:Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)(q.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load Comments"})})}),Object(l.jsx)(s.c,{path:"".concat(e.path,"/comments"),children:Object(l.jsx)(N,{})})]}):Object(l.jsx)("p",{children:"no quote found."})}}}]);
//# sourceMappingURL=4.ff090261.chunk.js.map