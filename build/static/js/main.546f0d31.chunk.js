(this["webpackJsonpgoit-react-hw-04-feedback"]=this["webpackJsonpgoit-react-hw-04-feedback"]||[]).push([[0],{10:function(e,t,a){e.exports={section:"Section_section__20i3o",header:"Section_header__YEe5L"}},12:function(e,t,a){e.exports={message:"Notification_message__ee1E1"}},18:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(11),i=a.n(c),r=a(8),o=a(3),l=a(4),u=a(6),b=a(5),j=a(12),d=a.n(j),p=a(0);function h(e){var t=e.message;return Object(p.jsx)("p",{className:d.a.message,children:t})}var O=a(2),m=a.n(O),f=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return 0===this.props.total?Object(p.jsx)(h,{message:"No feedback given"}):Object(p.jsx)("div",{children:Object(p.jsxs)("ul",{className:m.a.list,children:[Object(p.jsxs)("li",{className:m.a.item,children:["Good: ",this.props.good]}),Object(p.jsxs)("li",{className:m.a.item,children:["Neutral: ",this.props.neutral]}),Object(p.jsxs)("li",{className:m.a.item,children:["Bad: ",this.props.bad]}),Object(p.jsxs)("li",{className:m.a.item,children:["Total: ",this.props.total]}),Object(p.jsxs)("li",{className:m.a.item,children:["Positive percentage: ",this.props.positivePercentage," %"]})]})})}}]),a}(n.a.Component);f.defaultProps={good:0,neutral:0,bad:0,total:0,positivePercentage:0};var x=a(7),_=a.n(x),v=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(p.jsx)("ul",{className:_.a.list,children:this.props.options.map((function(t){return Object(p.jsx)("li",{className:_.a.item,children:Object(p.jsx)("button",{className:_.a.btn,onClick:e.props.onLeaveFeedback,children:t})},t)}))})}}]),a}(n.a.Component);v.defaultProps={options:[]};var g=a(10),k=a.n(g);function N(e){var t=e.title,a=e.children;return Object(p.jsxs)("section",{className:k.a.section,children:[Object(p.jsx)("h2",{className:k.a.header,children:t}),a]})}function S(){var e=Object(s.useState)(0),t=Object(r.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(0),i=Object(r.a)(c,2),o=i[0],l=i[1],u=Object(s.useState)(0),b=Object(r.a)(u,2),j=b[0],d=b[1],h=function(){return a+j+o};return Object(p.jsxs)("div",{children:[Object(p.jsx)(N,{title:"Please leave your feedback",children:Object(p.jsx)(v,{options:["Good","Neutral","Bad"],onLeaveFeedback:function(e){var t=e.target.textContent;switch(console.log(t),t){case"Good":n((function(e){return e+1}));break;case"Neutral":l((function(e){return e+1}));break;case"Bad":d((function(e){return e+1}));break;default:return}}})}),Object(p.jsx)(N,{title:"Statistics",children:Object(p.jsx)(f,{good:a,neutral:o,bad:j,total:h(),positivePercentage:Math.round(a/h()*100)||0})})]})}N.defaultProps={title:"Section title"},i.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root"))},2:function(e,t,a){e.exports={list:"Statistics_list__WALgf",item:"Statistics_item__2qEqM"}},7:function(e,t,a){e.exports={list:"FeedbackOption_list__2ii-h",btn:"FeedbackOption_btn__32xVe",item:"FeedbackOption_item__3SWIR"}}},[[18,1,2]]]);
//# sourceMappingURL=main.546f0d31.chunk.js.map