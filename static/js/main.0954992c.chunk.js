(this["webpackJsonpreact-js"]=this["webpackJsonpreact-js"]||[]).push([[0],{14:function(e,t,n){},18:function(e,t,n){e.exports=n(31)},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),m=n(3),u=n(6),l=n(17),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.id,a=t.name,r=t.comment,c=t.date,o=t.type;switch(o){case"ADD_COMMENT":return[].concat(Object(l.a)(e),[{id:n,name:a,comment:r,date:c}]);case"DELETE_COMMENT":return e.filter((function(e){return e.id!==n}));default:return e}},i=n(1),d=n(2),f=n(8),p=n(7),v=n(16),E=(n(14),function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",comment:""},e.inputChangeHandler=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(v.a)({},a,r))},e.formSubmitHandler=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.comment;(0,e.props.addComment)(a,r,(new Date).toLocaleString()),e.setState({name:"",comment:""})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.comment,a=this.inputChangeHandler,c=this.formSubmitHandler;return r.a.createElement("div",{className:"position"},r.a.createElement("h1",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432"),r.a.createElement("form",{onSubmit:c},r.a.createElement("input",{onChange:a,type:"text",name:"name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f",value:t,required:!0}),r.a.createElement("div",null,r.a.createElement("textarea",{onChange:a,name:"comment",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",value:n,required:!0})),r.a.createElement("button",{type:"submit"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439")))}}]),n}(a.Component)),h=Object(m.b)(null,{addComment:function(e,t,n){return{type:"ADD_COMMENT",id:"f".concat((~~(1e8*Math.random())).toString(16)),name:e,comment:t,date:n}}})(E),b=function(e){var t=e.deleteComment,n=e.commentElements,a=n.comment,c=n.name,o=n.id,m=n.date;return r.a.createElement("li",{className:"comment"},r.a.createElement("div",null,r.a.createElement("button",{className:"delete",onClick:function(){return t(o)}},"Delete"),r.a.createElement("span",{className:"date"},m)),r.a.createElement("div",{className:"comment_margin"},"\u0418\u043c\u044f:",r.a.createElement("p",{className:"comment_name_p"},c)),r.a.createElement("div",{className:"comment_margin"},"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439:",r.a.createElement("p",null,a)))},C=function(e){var t=e.stateComments,n=e.deleteComment,a=t.map((function(e){return r.a.createElement(b,{deleteComment:n,commentElements:e,key:e.id})}));return r.a.createElement("ul",null,a)},O=n(4),g=n.n(O),j=n(12),y=function(){function e(){Object(i.a)(this,e)}return Object(d.a)(e,[{key:"getInitialState",value:function(){var e=Object(j.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/todos/1");case 2:if(!(t=e.sent).ok){e.next=10;break}if(n=localStorage.getItem("state_comments")){e.next=7;break}return e.abrupt("return",[]);case 7:return e.abrupt("return",JSON.parse(n));case 10:console.log("\u041e\u0448\u0438\u0431\u043a\u0430:"+t.status);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"saveState",value:function(){var e=Object(j.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/todos/1");case 2:(n=e.sent).ok?localStorage.setItem("state_comments",JSON.stringify(t)):console.log("\u041e\u0448\u0438\u0431\u043a\u0430:"+n.status);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();var S=Object(m.b)((function(e){return{stateComments:e}}),(function(e){return{deleteComment:function(t){return e(function(e){return{type:"DELETE_COMMENT",id:e}}(t))}}}))((function(e){var t=e.stateComments,n=e.deleteComment;return(new y).saveState(t),r.a.createElement(C,{stateComments:t,deleteComment:n})})),k=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(S,null))}}]),n}(a.Component);n(30);(new y).getInitialState().then((function(e){var t=Object(u.b)(s,e);o.a.render(r.a.createElement(m.a,{store:t},r.a.createElement(k,null)),document.getElementById("root"))}))}},[[18,1,2]]]);
//# sourceMappingURL=main.0954992c.chunk.js.map