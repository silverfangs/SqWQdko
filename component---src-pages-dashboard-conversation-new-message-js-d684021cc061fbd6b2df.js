webpackJsonp([0x8bc97d928476],{"./src/action/MessageAction.js":function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(){return function(e){return m.default.get(E.default.serverURL+"/message",{withCredentials:!0}).then(function(t){return e({type:"MESSAGE_SET_GROUP",payload:t.data}),!0}).catch(function(e){console.log(e)})}}function r(e){return function(t){return m.default.put(E.default.serverURL+"/message/chat",{message_uuid:e.msgUUID},{withCredentials:!0}).then(function(e){return t({type:"MESSAGE_SELECTED",payload:e.data}),!0}).catch(function(e){console.log(e)})}}function s(){return function(e){return m.default.get(E.default.serverURL+"/message/recipient",{withCredentials:!0}).then(function(t){return e({type:"MESSAGE_SET_RECIPIENT",payload:t.data}),!0}).catch(function(e){console.log(e)})}}function o(e){return function(t){return m.default.post(E.default.serverURL+"/message/",{subject:e.subject,recipient_uuid:e.recipientUUID,message_type:e.msgType,content:e.content},{withCredentials:!0}).then(function(e){return!0}).catch(function(e){console.log(e)})}}function c(e){return function(t){return m.default.post(E.default.serverURL+"/message/chat",{message_uuid:e.msgUUID,content:e.content},{withCredentials:!0}).then(function(e){return!0}).catch(function(e){console.log(e)})}}function i(e){return function(t){t({type:"MESSAGE_UPDATE_CHAT",payload:e})}}function u(){return function(e){e({type:"MESSAGE_CLEAR"})}}function d(){return function(e){e({type:"MESSAGE_CLEAR_CURRENT"})}}t.__esModule=!0,t.getAllMessages=n,t.getMessageChat=r,t.getRecipient=s,t.createNewMessage=o,t.replyMessage=c,t.replyMessageSocket=i,t.clearAllMessageState=u,t.clearCurrentMessage=d;var f=a("./node_modules/axios/index.js"),m=l(f),p=a("./src/config/index.js"),E=l(p)},"./src/components/dashboard/conversation/ConversationSidebar.js":function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a("./node_modules/react/react.js"),c=l(o),i=a("./node_modules/gatsby-link/index.js"),u=l(i),d=(a("./node_modules/react-redux/lib/index.js"),function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return c.default.createElement("div",{className:"col-lg-3"},c.default.createElement("div",{className:"ibox float-e-margins"},c.default.createElement("div",{className:"ibox-content mailbox-content"},c.default.createElement("div",{className:"file-manager"},c.default.createElement(u.default,{className:"btn btn-block btn-primary compose-mail",to:"/dashboard/conversation/new-message"},"Start Conversation"),c.default.createElement("div",{className:"space-25"}),c.default.createElement("h5",null,"Folders"),c.default.createElement("ul",{className:"folder-list m-b-md",style:{padding:0}},c.default.createElement("li",null,c.default.createElement(u.default,{to:"/dashboard/conversation"}," ",c.default.createElement("i",{className:"fa fa-inbox "})," Inbox ",c.default.createElement("span",{className:"label label-warning pull-right"},this.props.messagesLength)," ")),c.default.createElement("li",null,c.default.createElement("a",{href:"#"}," ",c.default.createElement("i",{className:"fa fa-envelope-o"})," Send Mail")),c.default.createElement("li",null,c.default.createElement("a",{href:"#"}," ",c.default.createElement("i",{className:"fa fa-certificate"})," Important")),c.default.createElement("li",null,c.default.createElement("a",{href:"#"}," ",c.default.createElement("i",{className:"fa fa-file-text-o"})," Drafts ",c.default.createElement("span",{className:"label label-danger pull-right"},"2"))),c.default.createElement("li",null,c.default.createElement("a",{href:"#"}," ",c.default.createElement("i",{className:"fa fa-trash-o"})," Trash"))),c.default.createElement("h5",null,"Categories"),c.default.createElement("ul",{className:"category-list",style:{padding:0}},c.default.createElement("li",null,c.default.createElement("a",{href:"#"}," ",c.default.createElement("i",{className:"fa fa-circle text-primary"})," Message")),c.default.createElement("li",null,c.default.createElement("a",{href:"#"}," ",c.default.createElement("i",{className:"fa fa-circle text-danger"})," Complaint")),c.default.createElement("li",null,c.default.createElement("a",{href:"#"}," ",c.default.createElement("i",{className:"fa fa-circle text-info"})," Suggestion")),c.default.createElement("li",null,c.default.createElement("a",{href:"#"}," ",c.default.createElement("i",{className:"fa fa-circle text-warning"})," Security"))),c.default.createElement("h5",{className:"tag-title"},"Labels"),c.default.createElement("ul",{className:"tag-list",style:{padding:0}},c.default.createElement("li",null,c.default.createElement("a",{href:"#"},c.default.createElement("i",{className:"fa fa-tag"})," Message")),c.default.createElement("li",null,c.default.createElement("a",{href:"#"},c.default.createElement("i",{className:"fa fa-tag"})," Complaint")),c.default.createElement("li",null,c.default.createElement("a",{href:"#"},c.default.createElement("i",{className:"fa fa-tag"})," Suggestion")),c.default.createElement("li",null,c.default.createElement("a",{href:"#"},c.default.createElement("i",{className:"fa fa-tag"})," Security"))),c.default.createElement("div",{className:"clearfix"})))))},t}(c.default.Component));t.default=d,e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["C:/Users/aaronkow/Aaron-Workspace/MyResidency/project/frontend/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","C:/Users/aaronkow/Aaron-Workspace/MyResidency/project/frontend/node_modules/babel-plugin-add-module-exports/lib/index.js","C:/Users/aaronkow/Aaron-Workspace/MyResidency/project/frontend/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["C:/Users/aaronkow/Aaron-Workspace/MyResidency/project/frontend/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"C:/Users/aaronkow/Aaron-Workspace/MyResidency/project/frontend/node_modules/babel-preset-stage-0/lib/index.js","C:/Users/aaronkow/Aaron-Workspace/MyResidency/project/frontend/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/dashboard/conversation/new-message.js':function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a("./node_modules/react/react.js"),c=l(o),i=a("./node_modules/react-redux/lib/index.js"),u=a("./node_modules/react-helmet/lib/Helmet.js"),d=l(u),f=a("./node_modules/gatsby-link/index.js"),m=a("./src/style/preloader.module.css"),p=l(m),E=a("./src/components/dashboard/conversation/ConversationSidebar.js"),g=l(E),b=a("./src/action/MessageAction.js"),h=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return s(t,e),t.prototype.componentWillMount=function(){this.props.getRecipient()},t.prototype.componentDidMount=function(){$(".select-type").select2({placeholder:"Select Conversation Type",allowClear:!0,width:"100%"}),$(".select-recipient").select2({placeholder:"Select Recipient",allowClear:!0,width:"100%"})},t.prototype.handleSubmit=function(e){e.preventDefault(),this.props.clearAllMessageState(),this.props.createNewMessage({subject:this.refs.subject.value,recipientUUID:$("#recipient").val(),msgType:$("#msgType").val(),content:this.refs.message.value}).then(function(e){e&&(0,f.navigateTo)("/dashboard/conversation")})},t.prototype.render=function(){if(this.props.user.loggedIn){var e=this.props.recipients.map(function(e,t){var a=e.type;return a=a.replace(a[0],a[0].toUpperCase()),c.default.createElement("option",{key:t,value:e.uuid},a," - ",e.name)});return c.default.createElement("div",{className:"wrapper wrapper-content"},c.default.createElement(d.default,{title:"Conversation - new",meta:[{name:"description",content:"Conversation - new"},{name:"keywords",content:"Conversation"}]}),c.default.createElement("div",{className:p.default.preloader1+" "+(this.props.recipients.length>0?"":p.default.active)},c.default.createElement("i",{className:p.default.preloaderIcon+" fa fa-refresh"})),c.default.createElement("div",{className:"row"},c.default.createElement(g.default,{messagesLength:this.props.messages.length}),c.default.createElement("div",{className:"col-lg-9 animated fadeInRight"},c.default.createElement("div",{className:"mail-box-header"},c.default.createElement("div",{className:"pull-right tooltip-demo"},c.default.createElement("a",{href:"#",className:"btn btn-space btn-white btn-sm","data-toggle":"tooltip","data-placement":"top",title:"Move to draft folder"},c.default.createElement("i",{className:"fa fa-pencil"})," Draft"),c.default.createElement("a",{href:"#",className:"btn btn-space btn-danger btn-sm","data-toggle":"tooltip","data-placement":"top",title:"Discard email"},c.default.createElement("i",{className:"fa fa-times"})," Discard")),c.default.createElement("h2",null,"Conversation Content")),c.default.createElement("div",{className:"mail-box"},c.default.createElement("div",{className:"mail-body"},c.default.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit.bind(this)},c.default.createElement("div",{className:"form-group"},c.default.createElement("label",{htmlFor:"subject",className:"col-sm-2 control-label"},"Subject:"),c.default.createElement("div",{className:"col-sm-10"},c.default.createElement("input",{type:"text",className:"form-control",id:"subject",ref:"subject",maxLength:"255",required:!0}))),c.default.createElement("div",{className:"form-group"},c.default.createElement("label",{htmlFor:"msgType",className:"col-sm-2 control-label"},"Type:"),c.default.createElement("div",{className:"col-sm-10"},c.default.createElement("select",{className:"select-type form-control",id:"msgType",value:"",required:!0},c.default.createElement("option",null),c.default.createElement("option",{value:"Message"},"Message"),c.default.createElement("option",{value:"Suggestion"},"Suggestion"),c.default.createElement("option",{value:"Complaint"},"Complaint"),c.default.createElement("option",{value:"Security"},"Security")))),c.default.createElement("div",{className:"form-group"},c.default.createElement("label",{htmlFor:"recipient",className:"col-sm-2 control-label"},"Recipient:"),c.default.createElement("div",{className:"col-sm-10"},c.default.createElement("select",{className:"select-recipient form-control",id:"recipient",value:"",required:!0},c.default.createElement("option",null),e))),c.default.createElement("div",{className:"space-25"}),c.default.createElement("div",{className:"form-group"},c.default.createElement("div",{className:"summernote mail-text h-200"},c.default.createElement("div",{className:"space-25"}),c.default.createElement("div",{className:"col-sm-offset-1 col-sm-10"},c.default.createElement("textarea",{className:"form-control",rows:"6",placeholder:"Please insert your message here",ref:"message",maxLength:"255",required:!0})))),c.default.createElement("div",{className:"form-group"},c.default.createElement("div",{className:"mail-body text-right tooltip-demo",style:{paddingBottom:0}},c.default.createElement("button",{type:"submit",className:"btn btn-space btn-sm btn-primary"},c.default.createElement("strong",null,c.default.createElement("i",{className:"fa fa-reply"})," Send")),c.default.createElement("a",{href:"#",className:"btn btn-space btn-white btn-sm","data-toggle":"tooltip","data-placement":"top",title:"Discard email"},c.default.createElement("i",{className:"fa fa-times"})," Discard"),c.default.createElement("a",{href:"#",className:"btn btn-space btn-white btn-sm","data-toggle":"tooltip","data-placement":"top",title:"Move to draft folder"},c.default.createElement("i",{className:"fa fa-pencil"})," Draft"))))),c.default.createElement("div",{className:"clearfix"})))))}return null},t}(c.default.Component),y=function(e){return{user:e.users.user,messages:e.messages.messages,recipients:e.messages.recipients}},v=function(e){return{getRecipient:b.getRecipient,createNewMessage:b.createNewMessage,clearAllMessageState:b.clearAllMessageState}};t.default=(0,i.connect)(y,v())(h),e.exports=t.default},"./src/style/preloader.module.css":function(e,t){e.exports={preloader1:"src-style----preloader-module---preloader1---3HVjL",preloaderIcon:"src-style----preloader-module---preloaderIcon---3C18X",rotation:"src-style----preloader-module---rotation---1VcWA",active:"src-style----preloader-module---active---3BM91"}}});
//# sourceMappingURL=component---src-pages-dashboard-conversation-new-message-js-d684021cc061fbd6b2df.js.map