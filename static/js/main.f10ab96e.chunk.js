(this["webpackJsonpgoit-react-hw-04-feedback"]=this["webpackJsonpgoit-react-hw-04-feedback"]||[]).push([[0],[,,function(e,t,a){e.exports={list:"Statistics_list__WALgf",item:"Statistics_item__2qEqM"}},function(e,t,a){e.exports={list:"FeedbackOption_list__2ii-h",btn:"FeedbackOption_btn__32xVe",item:"FeedbackOption_item__3SWIR"}},,,function(e,t,a){e.exports={section:"Section_section__20i3o",header:"Section_header__YEe5L"}},,function(e,t,a){e.exports={message:"Notification_message__ee1E1"}},,,,,,function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),i=a(7),n=a.n(i),r=a(4),o=a(8),l=a.n(o),d=a(0);function b(e){var t=e.message;return Object(d.jsx)("p",{className:l.a.message,children:t})}var j=a(2),u=a.n(j);function h(e){var t=e.good,a=e.bad,c=e.neutral,s=e.total,i=e.positivePercentage;return 0===s?Object(d.jsx)(b,{message:"No feedback given"}):Object(d.jsx)("div",{children:Object(d.jsxs)("ul",{className:u.a.list,children:[Object(d.jsxs)("li",{className:u.a.item,children:["Good: ",t]}),Object(d.jsxs)("li",{className:u.a.item,children:["Neutral: ",c]}),Object(d.jsxs)("li",{className:u.a.item,children:["Bad: ",a]}),Object(d.jsxs)("li",{className:u.a.item,children:["Total: ",s]}),Object(d.jsxs)("li",{className:u.a.item,children:["Positive percentage: ",i," %"]})]})})}h.defaultProps={good:0,neutral:0,bad:0,total:0,positivePercentage:0};var m=a(3),O=a.n(m);function x(e){var t=e.options,a=e.onLeaveFeedback;return Object(d.jsx)("ul",{className:O.a.list,children:t.map((function(e){return Object(d.jsx)("li",{className:O.a.item,children:Object(d.jsx)("button",{className:O.a.btn,onClick:a,children:e})},e)}))})}x.defaultProps={options:[]};var f=a(6),p=a.n(f);function _(e){var t=e.title,a=e.children;return Object(d.jsxs)("section",{className:p.a.section,children:[Object(d.jsx)("h2",{className:p.a.header,children:t}),a]})}function v(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)(0),n=Object(r.a)(i,2),o=n[0],l=n[1],b=Object(c.useState)(0),j=Object(r.a)(b,2),u=j[0],m=j[1],O=function(){return a+u+o};return Object(d.jsxs)("div",{children:[Object(d.jsx)(_,{title:"Please leave your feedback",children:Object(d.jsx)(x,{options:["Good","Neutral","Bad"],onLeaveFeedback:function(e){switch(e.target.textContent){case"Good":s((function(e){return e+1}));break;case"Neutral":l((function(e){return e+1}));break;case"Bad":m((function(e){return e+1}));break;default:return}}})}),Object(d.jsx)(_,{title:"Statistics",children:Object(d.jsx)(h,{good:a,neutral:o,bad:u,total:O(),positivePercentage:Math.round(a/O()*100)||0})})]})}_.defaultProps={title:"Section title"},n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.f10ab96e.chunk.js.map