(this.webpackJsonpauxilium=this.webpackJsonpauxilium||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),s=a.n(c),l=(a(68),a(6)),o=a(7),m=a(9),i=a(8),u=a(102),d=a(103),p=a(104),h=a(105),E=a(61),b=a(106),f=a(107),g=a(10),v=a(19),N=a(22),O=a(31),k=a.n(O),y=(a(29),a(18),a(39),a(13));function C(e){var t=e.user,a=e.isAuthenticated;return r.a.createElement(g.c,{to:a?"/user":"/login",className:"nav-link"},r.a.createElement("span",{className:"text-link"},a?"Welcome, ".concat(t.name):"Login/Register"))}var j=a(101),w=a(12),x=a.n(w),S=a(23),A=a(15),L=a.n(A),R=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:"GET_ERRORS",payload:{msg:e,status:t,id:a}}},_=function(){return{type:"CLEAR_ERRORS"}},T=function(e){var t=e.email,a=e.password;return function(){var e=Object(S.a)(x.a.mark((function e(n){var r,c,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={headers:{"Content-Type":"application/json"}},c=JSON.stringify({email:t,password:a}),e.next=5,L.a.post("/api/auth",c,r);case 5:s=e.sent,n({type:"LOGIN_SUCCESS",payload:s.data}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),n(R(e.t0.response.data,e.t0.response.status,"LOGIN_FAIL")),n({type:"LOGIN_FAIL"});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},I=function(e){var t=e().auth.token,a={headers:{"Content-type":"application/json"}};return t&&(a.headers["x-auth-token"]=t),a},D=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(j.a,{className:"nav-link",onClick:this.props.logout,href:"#"},r.a.createElement(v.a,{icon:N.d,size:"lg",className:"text-link"})))}}]),a}(n.Component),P=Object(y.b)(null,{logout:function(){return{type:"LOGOUT_SUCCESS"}}})(D),U=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleToggle=function(){var e=n.state.isOpen;n.setState({isOpen:!e})},n.state={name:"",isOpen:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.auth,t=e.isAuthenticated,a=e.user;return console.log(t),r.a.createElement(u.a,{className:"header"},r.a.createElement(d.a,{className:"col-2 col-sm-2 col-md-2 order-12 order-sm-1"},r.a.createElement(g.c,{to:"/",className:"figure text-decoration-none mr-5"},r.a.createElement("img",{src:k.a,alt:"an image",height:"80",width:"80"}))),r.a.createElement(d.a,{className:"col-5 col-sm-3 col-md-3 d-none d-md-inline order-2  order-sm-2"},r.a.createElement("form",{class:"navbar-form rounded"},r.a.createElement("div",{class:"input-group mt-3 rounded"},r.a.createElement("input",{class:"form-control",type:"text",name:"search",placeholder:"Location"}),r.a.createElement("span",{class:"input-group-btn"},r.a.createElement("button",{type:"submit",class:"btn text-link"},r.a.createElement("span",{class:"fa fa-search fa-lg"})))))),r.a.createElement(d.a,{className:"col col-sm col-md order-1 order-sm-1 order-md-12"},r.a.createElement(p.a,{light:!0,expand:"md",className:"float-md-right"},r.a.createElement(h.a,{onClick:this.handleToggle}),r.a.createElement(E.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(b.a,{className:" mt-2 w-100",navbar:!0},r.a.createElement(f.a,{className:"mr-2"},r.a.createElement(g.c,{to:"/",className:"nav-link "},r.a.createElement("span",{className:"text-link"},r.a.createElement("i",{className:" fa fa-home fa-lg mr-1"}),r.a.createElement("span",{className:"d-sm-inline d-md-none d-lg-inline"},"Home")))),r.a.createElement(f.a,{className:"mr-2"},r.a.createElement(g.c,{to:"/covid",className:"nav-link"},r.a.createElement("span",{className:"nav-text ml-1 text-link"},r.a.createElement(v.a,{icon:N.e,size:"lg",className:"mr-1"}),r.a.createElement("span",{className:" d-sm-inline d-md-none d-lg-inline"},"COVID-19")))),r.a.createElement(f.a,{className:"mr-2"},r.a.createElement(g.c,{to:"/about",className:"nav-link"},r.a.createElement("span",{className:"text-link"},r.a.createElement("i",{className:"fa fa-users fa-lg mr-1"}),r.a.createElement("span",{className:"d-sm-inline d-md-none d-lg-inline"},"About Us")))),r.a.createElement(f.a,{className:"mr-2"},r.a.createElement(C,{user:a,isAuthenticated:t})),r.a.createElement(f.a,{className:"mr-2"},t?r.a.createElement(P,null):null))))))}}]),a}(n.Component),G=Object(y.b)((function(e){return{auth:e.auth}}),null)(U),F=a(109),M=a(110),q=a(111),H=a(37),z=a(44),B=a(108),V=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).incrementId=function(){var e=n.state.id;return e+=1,n.setState({id:e}),e},n.toString=function(e){return"#"+e.toString()},n.state={isClicked:0,id:0},n.handleLikeClick=n.handleLikeClick.bind(Object(H.a)(n)),n}return Object(o.a)(a,[{key:"handleLikeClick",value:function(){0==this.state.isClicked?this.setState({isClicked:1}):this.setState({isClicked:0})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("button",{className:"btn",onClick:this.handleLikeClick},r.a.createElement("span",null,r.a.createElement(v.a,{icon:1==this.state.isClicked?N.a:z.b,size:"2x"}))),r.a.createElement("button",{className:"btn",id:"tog"},r.a.createElement("span",{className:"pl-3"},r.a.createElement(v.a,{icon:z.a,size:"2x"})))),r.a.createElement(B.a,{toggler:"#tog",className:"mt-3"},r.a.createElement("span",null,r.a.createElement("input",{type:"text",className:"form-control d-inline w-75",name:"comment",placeholder:"Leave a comment"}),r.a.createElement("button",{type:"submit",className:"btn"},r.a.createElement(v.a,{icon:N.b,size:"lg"})))))}}]),a}(n.Component),J=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).postCreated=function(e){var t="",a=Date.parse(e),n=(Date.now()-a)/1e3/60/60;return t=n>=24?Math.trunc(n/24)+"d ago":n<1?Math.trunc(60*n)+"m ago":Math.trunc(n)+"h ago","Created: ".concat(t)},n.postUpdated=function(e){var t="",a=Date.parse(e),n=(Date.now()-a)/1e3/60/60;return t=n>=24?Math.trunc(n/24)+"d ago":n<1?Math.trunc(60*n)+"m ago":Math.trunc(n)+"h ago","Updated: ".concat(t)},n.state={posts:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;L.a.get("/api/posts/getall").then((function(t){var a=t.data;e.setState({posts:a})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.posts.map((function(t){return r.a.createElement(u.a,{key:t._id},r.a.createElement(d.a,{className:"mt-5"},r.a.createElement(F.a,{className:"bg-light shadow-sm"},r.a.createElement(M.a,{className:"p-3"},r.a.createElement(u.a,null,r.a.createElement(d.a,{className:"col-8 col-sm-10"},r.a.createElement("p",null,r.a.createElement("strong",null,t.owner))),r.a.createElement(d.a,{className:"col-4 col-sm-2"},r.a.createElement("span",{className:"float-right"},e.postCreated(t.createdAt)),r.a.createElement("span",{className:"float-right"},e.postUpdated(t.updatedAt))))),r.a.createElement(q.a,{className:"pt-0"},r.a.createElement("h4",null,t.title),r.a.createElement("p",null,t.content),r.a.createElement("p",null,"34 likes"),r.a.createElement(V,{id:t.id})))))})))}}]),a}(n.Component),W=(a(35),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.isAuthenticated;console.log(e);var t=r.a.createElement(n.Fragment,null,r.a.createElement(d.a,{className:"col-12 col-sm-4 mt-5"},r.a.createElement(g.b,{to:"/createpost",className:"float-right"},r.a.createElement("button",{type:"button",id:"createpostbtn",className:"btn rounded"},r.a.createElement(v.a,{icon:N.c,className:"createpostbtn",size:"3x"})),r.a.createElement("label",{for:"createpostbtn",className:"createpostbtn"},"Create a post"))));return r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center mt-3"},"General"),r.a.createElement(u.a,{className:"btn-group-toggle","data-toggle":"buttons"},r.a.createElement(d.a,{className:"col-4 col-sm-4 d-none d-sm-block mt-5"},r.a.createElement(g.b,{to:"/",className:"mt-4"},r.a.createElement("button",{type:"button",className:"btn btn-menu w-100 rounded btn-aux"}," ","General"))),r.a.createElement(d.a,{className:"col-4 col-sm-4 d-none d-sm-block mt-5"},r.a.createElement(g.b,{to:"/covid"},r.a.createElement("button",{type:"button",className:"btn w-100 rounded btn-aux"}," ","COVID-19"))),e?t:null),r.a.createElement(J,null)))}}]),a}(n.Component)),K=Object(y.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error}}),{login:T})(W),$=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).postCreated=function(e){var t="",a=Date.parse(e),n=(Date.now()-a)/1e3/60/60;return t=n>=24?Math.trunc(n/24)+"d ago":n<1?Math.trunc(60*n)+"m ago":Math.trunc(n)+"h ago","Created: ".concat(t)},n.postUpdated=function(e){var t="",a=Date.parse(e),n=(Date.now()-a)/1e3/60/60;return t=n>=24?Math.trunc(n/24)+"d ago":n<1?Math.trunc(60*n)+"m ago":Math.trunc(n)+"h ago","Updated: ".concat(t)},n.state={posts:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;L.a.get("/api/covid/getall").then((function(t){var a=t.data;e.setState({posts:a})}))}},{key:"render",value:function(){var e=this,t=this.state.posts;return r.a.createElement("div",null,t.map((function(t){return r.a.createElement(u.a,{key:t._id},r.a.createElement(d.a,{className:"mt-5"},r.a.createElement(F.a,{className:"bg-light shadow-sm"},r.a.createElement(M.a,{className:"p-3"},r.a.createElement(u.a,null,r.a.createElement(d.a,{className:"col-8 col-sm-10"},r.a.createElement("p",null,r.a.createElement("strong",null,t.owner))),r.a.createElement(d.a,{className:"col-4 col-sm-2"},r.a.createElement("span",{className:"float-right"},e.postCreated(t.createdAt)),r.a.createElement("span",{className:"float-right"},e.postUpdated(t.updatedAt))))),r.a.createElement(q.a,{className:"pt-0"},r.a.createElement("h4",null,t.title),r.a.createElement("p",null,t.content),r.a.createElement("p",null,"34 Likes"),r.a.createElement(V,{className:"d-inline"}),r.a.createElement("button",{className:"btn btn-info float-right"},"Accept")))))})))}}]),a}(n.Component),Q=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.isAuthenticated;console.log(e);var t=r.a.createElement(n.Fragment,null,r.a.createElement(d.a,{className:"col-4 col-sm-4 d-none d-sm-block mt-5"},r.a.createElement(g.b,{to:"/createpost",className:"float-right"},r.a.createElement("button",{type:"button",id:"createpostbtn",className:"btn rounded"},r.a.createElement(v.a,{icon:N.c,className:"createpostbtn",size:"3x"})),r.a.createElement("label",{for:"createpostbtn",className:"createpostbtn"},"Create a post"))));return r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center mt-3"},"COVID-19"),r.a.createElement(u.a,null,r.a.createElement(d.a,{className:"col-4 col-sm-4 d-none d-sm-block mt-5"},r.a.createElement(g.b,{to:"/",className:"mt-4"},r.a.createElement("button",{type:"button",className:"btn btn-menu w-100 rounded btn-aux"}," ","General"))),r.a.createElement(d.a,{className:"col-4 col-sm-4 d-none d-sm-block mt-5"},r.a.createElement(g.b,{to:"/covid"},r.a.createElement("button",{type:"button",className:"btn w-100 rounded btn-aux"}," ","COVID-19"))),e?t:null),r.a.createElement($,null)))}}]),a}(n.Component),X=Object(y.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error}}),{login:T})(Q),Y=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement("h1",{class:"text-center page-header text-uppercase"},"About Us"),r.a.createElement("div",{class:"mx-auto card w-75"},r.a.createElement("div",null,r.a.createElement("h5",{class:"card-header bg-secondary font-weight-bold text-uppercase"},"Front-end")),r.a.createElement("div",{class:"card-body"},r.a.createElement("blockquote",{class:"blockquote mb-0"},r.a.createElement("p",null,"I Am ........ sjndfisuafh usjfihaushf nfuie difhsdjf cushf sdfbuyewufdh",r.a.createElement("img",{src:"https://via.placeholder.com/150",class:"rounded float-right",alt:"..."})),r.a.createElement("footer",{class:"blockquote-footer"},"Alireza Kakan"))),r.a.createElement("div",null,r.a.createElement("h5",{class:"card-header bg-secondary font-weight-bold text-uppercase"},"Back-end")),r.a.createElement("div",{class:"card-body"},r.a.createElement("blockquote",{class:"blockquote mb-0"},r.a.createElement("p",{class:"text-center"},r.a.createElement("img",{src:"https://via.placeholder.com/150",class:"rounded float-left",alt:"..."}),"I Am ........ sjndfisuafh usjfihaushf nfuie difhsdjf cushf sdfbuyewufdh",r.a.createElement("footer",{class:"blockquote-footer"},"Edgar")))),r.a.createElement("div",null,r.a.createElement("h5",{class:"card-header bg-secondary font-weight-bold text-uppercase"},"Back-end")),r.a.createElement("div",{class:"card-body"},r.a.createElement("blockquote",{class:"blockquote mb-0"},r.a.createElement("p",null,"I Am ........ sjndfisuafh usjfihaushf nfuie difhsdjf cushf sdfbuyewufdh",r.a.createElement("img",{src:"https://via.placeholder.com/150",class:"rounded float-right",alt:"..."}),r.a.createElement("footer",{class:"blockquote-footer"},"Tommy")))),r.a.createElement("div",null,r.a.createElement("h5",{class:"card-header bg-secondary font-weight-bold text-uppercase"},"Front-end")),r.a.createElement("div",{class:"card-body"},r.a.createElement("blockquote",{class:"blockquote mb-0"},r.a.createElement("p",{class:"text-center"},r.a.createElement("img",{src:"https://via.placeholder.com/150",class:"rounded float-left",alt:"..."}),"I Am ........ sjndfisuafh usjfihaushf nfuie difhsdjf cushf sdfbuyewufdh",r.a.createElement("footer",{class:"blockquote-footer text-center"},"Sayed Fahad"))))))}}]),a}(n.Component),Z=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center"},"Profile"),r.a.createElement(u.a,null,r.a.createElement(d.a,{className:"col-12 col-sm-6"},r.a.createElement("p",{className:"text-center mt-3"},"First Name")),r.a.createElement(d.a,{className:"col-12 col-sm-6"},r.a.createElement("p",{className:"text-center mt-3"},"last Name")),r.a.createElement(d.a,{className:"col-12 col-sm-6"},r.a.createElement("p",{className:"text-center mt-3"},"UserName")),r.a.createElement(d.a,{className:"col-12 col-sm-6"},r.a.createElement("p",{className:"text-center mt-3  "},"Email@gmail.com"))),r.a.createElement(u.a,null)))}}]),a}(n.Component),ee=a(25),te=a(27),ae=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChange=function(e){n.setState(Object(ee.a)({},e.target.name,e.target.value))},n.onChangeCheckBox=function(e){n.setState(Object(ee.a)({},e.target.name,e.target.checked))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.title,r=t.content,c=t.relatedToCovid;t.askForHelp;if(c){var s={title:a,content:r,owner:n.props.user.name,ownerId:n.props.user._id};console.log(s),n.props.createCovidPost(s),n.setState({redirectToCovid:!0})}else{var l={title:a,content:r,owner:n.props.user.name,ownerId:n.props.user._id};console.log(l),n.props.createPost(l),n.setState({redirectToHome:!0})}},n.componentDidMount=function(){n.props.isAuthenticated||n.props.history.push("/")},n.state={title:"",content:"",redirectToHome:!1,redirectToCovid:!1,relatedToCovid:!1,askForHelp:!1},n}return Object(o.a)(a,[{key:"render",value:function(){return this.state.redirectToHome?r.a.createElement(te.a,{to:"/"}):this.state.redirectToCovid?r.a.createElement(te.a,{to:"/covid"}):r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement("div",{className:"container"},r.a.createElement(d.a,{className:"col-4 col-sm-4 d-none d-sm-block mt-5"},r.a.createElement(g.b,{to:"/",className:"mt-4"},r.a.createElement("button",{type:"button",className:"btn btn-menu w-75 rounded btn-success"},"Post")))),r.a.createElement(F.a,{className:"bg-info shadow mx-auto w-75"},r.a.createElement(q.a,{className:"mx-auto w-50"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"title",id:"title",onChange:this.onChange,placeholder:"Post title",className:"form-control  "}),r.a.createElement("textarea",{type:"text",name:"content",id:"content",onChange:this.onChange,placeholder:"Content Body",className:"form-control  mt-4",rows:"3"}),r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{class:"form-check-input",type:"checkbox",id:"inlineCheckbox1",name:"relatedToCovid",value:"option1",onChange:this.onChangeCheckBox}),r.a.createElement("label",{class:"form-check-label",name:"relatedToCovid",for:"inlineCheckbox1"},"Related to COVID-19")),r.a.createElement("div",{class:"form-check form-check-inline"},r.a.createElement("input",{class:"form-check-input",type:"checkbox",id:"inlineCheckbox2",value:"option2",onChange:this.onChangeCheckBox,name:"askForHelp"}),r.a.createElement("label",{class:"form-check-label",name:"askForHelp",for:"inlineCheckbox2"},"Ask for Help")),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"btn btn-success mt-5"},"Send"))))))}}]),a}(n.Component),ne=Object(y.b)((function(e){return{user:e.auth.user,isAuthenticated:e.auth.isAuthenticated}}),{createPost:function(e){return function(){var t=Object(S.a)(x.a.mark((function t(a,n){var r,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L.a.post("/api/posts",e,I(n));case 3:r=t.sent,c=r.data,console.log(c),a({type:"CREATE_POST",payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a(R(t.t0.response.data,t.t0.response.status));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,a){return t.apply(this,arguments)}}()},createCovidPost:function(e){return function(){var t=Object(S.a)(x.a.mark((function t(a,n){var r,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L.a.post("/api/covid",e,I(n));case 3:r=t.sent,c=r.data,console.log(c),a({type:"CREATE_C_POST",payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a(R(t.t0.response.data,t.t0.response.status));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,a){return t.apply(this,arguments)}}()}})(ae),re=a(112),ce=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChange=function(e){n.setState(Object(ee.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a={email:t.email,password:t.password};n.props.login(a)},n.state={email:"",password:""},n}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.error,n=t.isAuthenticated;a!==e.error&&("LOGIN_FAIL"===a.id?this.setState({msg:a.msg.msg}):this.setState({msg:null})),n&&this.props.history.push("/")}},{key:"render",value:function(){return r.a.createElement("div",{className:"aux-background"},r.a.createElement(G,null),r.a.createElement(F.a,{className:"aux-background shadow"},this.state.msg?r.a.createElement(re.a,{color:"danger"},this.state.msg):null,r.a.createElement(M.a,{className:"text-center p-3"},r.a.createElement(g.c,{to:"/register",className:"d-block pull-right"},r.a.createElement("button",{type:"button",className:"btn btn-info"},"Register")),r.a.createElement("img",{src:k.a,className:"d-block mx-auto  ",height:"150",width:"150"})),r.a.createElement(q.a,{className:"mx-auto w-50"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Email",onChange:this.onChange,className:"form-control"}),r.a.createElement("input",{type:"password",name:"password",id:"email",placeholder:"Password",onChange:this.onChange,className:"form-control mt-4"}),r.a.createElement("button",{type:"submit",className:"btn btn-success mt-4"},"Login")))))}}]),a}(n.Component),se=Object(y.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error}}),{login:T,clearErrors:_})(ce),le=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChange=function(e){n.setState(Object(ee.a)({},e.target.name,e.target.value))},n.onSubmit=function(e){e.preventDefault();var t=n.state,a={email:t.email,firstName:t.firstName,lastName:t.lastName,username:t.username,password:t.password,confirmPassword:t.confirmPassword};n.props.register(a)},n.state={email:"",firstName:"",lastName:"",username:"",password:"",confirmPassword:"",msg:null},n}return Object(o.a)(a,[{key:"componentWillUnmount",value:function(){this.props.clearErrors()}},{key:"componentDidUpdate",value:function(e){var t=this.props.error;t!==e.error&&("REGISTER_FAIL"===t.id?this.setState({msg:t.msg.msg}):this.setState({msg:null})),this.props.isAuthenticated&&this.props.history.push("/login")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement(F.a,{className:"bg-dark shadow"},this.state.msg?r.a.createElement(re.a,{color:"danger"},this.state.msg):null,r.a.createElement(M.a,{className:"text-center p-3"},r.a.createElement("img",{src:k.a,className:"d-block mx-auto  ",height:"150",width:"150"})),r.a.createElement(q.a,{className:"mx-auto w-50"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Email",className:"form-control",onChange:this.onChange}),r.a.createElement("input",{type:"text",name:"firstName",id:"firstName",placeholder:"First name",className:"form-control mt-4",onChange:this.onChange}),r.a.createElement("input",{type:"text",name:"lastName",id:"lastName",placeholder:"Last name",className:"form-control mt-4",onChange:this.onChange}),r.a.createElement("input",{type:"text",name:"username",id:"username",placeholder:"Username",className:"form-control mt-4",onChange:this.onChange}),r.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"Password",className:"form-control mt-4",onChange:this.onChange}),r.a.createElement("input",{type:"password",name:"confirmPassword",id:"confirmPassword",placeholder:"Confirm Password",className:"form-control mt-4",onChange:this.onChange}),r.a.createElement("button",{type:"submit",className:"btn btn-success mt-4"},"Register")))))}}]),a}(n.Component),oe=Object(y.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error}}),{register:function(e){var t=e.email,a=e.firstName,n=e.lastName,r=e.username,c=e.password;e.confirmPassword;return function(){var e=Object(S.a)(x.a.mark((function e(s){var l,o,m;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l={headers:{"Content-Type":"application/json"}},o=JSON.stringify({name:r,email:t,firstName:a,lastName:n,password:c}),e.next=5,L.a.post("/api/users",o,l);case 5:m=e.sent,s({type:"REGISTER_SUCCESS",payload:m.data}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),s(R(e.t0.response.data,e.t0.response.status,"REGISTER_FAIL")),s({type:"REGISTER_FAIL"});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},clearErrors:_})(le),me=a(26),ie=a(62),ue=a(11),de={posts:[]};var pe={msg:{},status:null,id:null};var he={token:localStorage.getItem("token"),isAuthenticated:null,isLoading:!1,user:null};var Ee={covidPosts:[]};var be=Object(me.c)({post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL_POSTS":return Object(ue.a)(Object(ue.a)({},e),{},{posts:t.payload});case"DELETE_POST":return Object(ue.a)(Object(ue.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.payload}))});default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return{msg:t.payload.msg,stats:t.payload.status,id:t.payload.id};case"CLEAR_ERRORS":return{msg:{},status:null,id:null};default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOADING":return Object(ue.a)(Object(ue.a)({},e),{},{isLoading:!0});case"USER_LOADED":return Object(ue.a)(Object(ue.a)({},e),{},{isAuthenticated:!0,isLoading:!1,user:t.payload});case"LOGIN_SUCCESS":case"REGISTER_SUCCESS":return localStorage.setItem("token",t.payload.token),Object(ue.a)(Object(ue.a)(Object(ue.a)({},e),t.payload),{},{isAuthenticated:!0,isLoading:!1});case"AUTH_ERROR":case"LOGIN_FAIL":case"LOGOUT_SUCCESS":case"REGISTER_FAIL":return localStorage.removeItem("token"),Object(ue.a)(Object(ue.a)({},e),{},{token:null,user:null,isAuthenticated:!1,isLoading:!1});default:return e}},covidPosts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL_C_POSTS":return Object(ue.a)(Object(ue.a)({},e),{},{covidPosts:t.payload});case"DELETE_C_POST":return Object(ue.a)(Object(ue.a)({},e),{},{covidPosts:e.covidPosts.filter((function(e){return e.id!==t.payload}))});default:return e}}}),fe=[ie.a],ge=Object(me.e)(be,{},Object(me.d)(me.a.apply(void 0,fe))),ve=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){ge.dispatch(function(){var e=Object(S.a)(x.a.mark((function e(t,a){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"USER_LOADING"}),e.next=4,L.a.get("/api/auth/user",I(a));case 4:n=e.sent,t({type:"USER_LOADED",payload:n.data}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),t(R(e.t0.response.data,e.t0.response.status)),t({type:"AUTH_ERROR"});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}())}},{key:"render",value:function(){return r.a.createElement(y.a,{store:ge},r.a.createElement(g.a,null,r.a.createElement("div",{className:"mh-100"},r.a.createElement(te.d,null,r.a.createElement(te.b,{path:"/",component:K,exact:!0}),r.a.createElement(te.b,{path:"/covid",component:X,exact:!0}),r.a.createElement(te.b,{path:"/login",component:se,exact:!0}),r.a.createElement(te.b,{path:"/about",component:Y}),r.a.createElement(te.b,{path:"/user",component:Z}),r.a.createElement(te.b,{path:"/register",component:oe,exact:!0}),r.a.createElement(te.b,{path:"/createpost",component:ne})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},31:function(e,t,a){e.exports=a.p+"static/media/logo_transparent.40f99bd0.png"},35:function(e,t,a){},39:function(e,t,a){},63:function(e,t,a){e.exports=a(100)},68:function(e,t,a){}},[[63,1,2]]]);
//# sourceMappingURL=main.124e6186.chunk.js.map