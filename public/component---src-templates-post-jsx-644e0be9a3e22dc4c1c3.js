(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{160:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),i=a(0),s=a.n(i),o=a(166),l=a.n(o),c=a(168),m=a(180),p=a(177),u=a(304),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.config.userTwitter,t=this.props.expanded;return s.a.createElement(u.Follow,{username:e,options:{count:!!t||"none"}})},t}(i.Component),f=(a(37),a(38)),g=a.n(f),d=a(387),E=a.n(d),v=a(184),y=a.n(v),N=a(165),b=a.n(N),k=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={toasts:[]},a.notifyAboutComment=a.notifyAboutComment.bind(g()(g()(a))),a.onSnackbarDismiss=a.onSnackbarDismiss.bind(g()(g()(a))),a}r()(t,e);var a=t.prototype;return a.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},a.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!"}),this.setState({toasts:e})},a.render=function(){var e=this.props.postNode;if(!b.a.disqusShortname)return null;var t=e.frontmatter,a=y()(b.a.siteUrl,e.fields.slug),n=t.title.replace(/\s+/g,"");return s.a.createElement(E.a,{shortname:b.a.disqusShortname,identifier:n,title:t.title,url:a,onNewComment:this.notifyAboutComment})},t}(i.Component),C=a(389),_=a.n(C),w=a(36),D=(i.Component,a(457)),L=a(458),x=a(459),T=a(460),A=a(463),S=a(461),O=a(462),I=(a(402),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,a=e.postPath,n=e.mobile,r=t.frontmatter,i=y()(b.a.siteUrl,a),o=n?36:48;return s.a.createElement("div",{className:"social-links"},s.a.createElement(D.a,{url:i,title:r.title},s.a.createElement(L.a,{round:!0,size:o})),s.a.createElement(x.a,{url:i,quote:t.excerpt},s.a.createElement(T.a,{round:!0,size:o}),s.a.createElement(A.a,{url:i},function(e){return function(e){return s.a.createElement("div",{className:"share-count"},function(e){return e>0?e:""}(e))}(e)})),s.a.createElement(S.a,{url:i},s.a.createElement(O.a,{round:!0,size:o})))},t}(i.Component)),P=a(179);a(453),a(454);a.d(t,"default",function(){return U}),a.d(t,"pageQuery",function(){return M});var U=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext.slug,t=this.props.data.markdownRemark,a=t.frontmatter;return a.id||(a.id=e),a.category_id||(a.category_id=b.a.postDefaultCategoryID),s.a.createElement(c.a,null,s.a.createElement("div",{className:"index-container"},s.a.createElement(l.a,null,s.a.createElement("title",null,a.title+" | "+b.a.siteTitle)),s.a.createElement(P.a,{postPath:e,postNode:t,postSEO:!0}),s.a.createElement(m.a,{config:b.a}),s.a.createElement("div",{className:"post-container"},s.a.createElement("h1",{className:"post-container__title"},a.title),s.a.createElement("img",{className:"post-container__hero",src:a.cover,alt:a.title}),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),s.a.createElement("div",{className:"post-meta"},s.a.createElement(I,{postPath:e,postNode:t})),s.a.createElement(h,{config:b.a}),s.a.createElement(k,{postNode:t})),s.a.createElement(p.a,{config:b.a})))},t}(s.a.Component),M="822495912"},165:function(e,t,a){a(37);var n={siteTitle:"Cryptisla",siteTitleShort:"Cryptisla",siteTitleAlt:"Cryptisla, le trading de cryptos pour débutants",siteLogo:"/logos/logo.png",siteUrl:"https://cryptisla.com",pathPrefix:"",siteDescription:"Découvrir le trading de crypto-monnaies et la blockchain simplement.",siteRss:"/rss.xml",siteFBAppID:"",googleAnalyticsID:"UA-59515367-8",disqusShortname:"cryptisla",postDefaultCategoryID:"trading",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"Cala",userEmail:"hello@cryptisla.com",userTwitter:"",userLocation:"",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",userLinks:[{label:"Insta",url:"https://instagram.com/cryptisla",iconClassName:"fa fa-instagram",icon:"/icons/instagram.svg"},{label:"Twitter",url:"https://twitter.com/cryptisla",iconClassName:"fa fa-twitter",icon:"/icons/twitter.svg"},{label:"Facebook",url:"https://facebook.com/cryptisla",iconClassName:"fa fa-envelope",icon:"/icons/facebook.svg"},{label:"Medium",url:"https://medium.com/cryptisla",iconClassName:"fa fa-envelope",icon:"/icons/medium.svg"}],menuLink:[{name:"home",link:"/"},{name:"guides",link:"/guides"},{name:"trading",link:"/trading"},{name:"blockchain",link:"/blockchain"},{name:"newsletter",link:"#newsletter"}],copyright:"Copyright © 2019. Cryptisla",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===n.pathPrefix?n.pathPrefix="":n.pathPrefix="/"+n.pathPrefix.replace(/^\/|\/$/g,""),"/"===n.siteUrl.substr(-1)&&(n.siteUrl=n.siteUrl.slice(0,-1)),n.siteRss&&"/"!==n.siteRss[0]&&(n.siteRss="/"+n.siteRss),e.exports=n},167:function(e,t,a){"use strict";var n=a(8),r=a.n(n),i=a(0),s=a.n(i),o=(a(36),a(176),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getLinkElements=function(){var e=this.props.config.userLinks;this.props.labeled;return e.map(function(e){return s.a.createElement("a",{className:"user-links",key:e.label,href:e.url},s.a.createElement("img",{src:e.icon,className:"user-links__social"}))})},a.render=function(){return this.props.config.userLinks?s.a.createElement("div",{className:"user-links"},this.getLinkElements()):null},t}(i.Component));t.a=o},168:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(8),r=a.n(n),i=a(0),s=a.n(i),o=a(166),l=a.n(o),c=a(165),m=a.n(c),p=(a(169),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return s.a.createElement("div",{className:"container"},s.a.createElement(l.a,null,s.a.createElement("meta",{name:"description",content:m.a.siteDescription})),e)},t}(s.a.Component))},169:function(e,t,a){},170:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){"use strict";var n=a(8),r=a.n(n),i=a(0),s=a.n(i),o=(a(36),a(167)),l=(a(178),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.config,t=(e.siteRss,e.copyright);return t?s.a.createElement("footer",{className:"footer"},s.a.createElement("div",{className:"notice-container"},s.a.createElement("span",null,"Made with ❤️️ in 🇪🇺 ",t)),s.a.createElement(o.a,{config:e,labeled:!0})):null},t}(i.Component));t.a=l},178:function(e,t,a){},179:function(e,t,a){"use strict";var n=a(8),r=a.n(n),i=a(0),s=a.n(i),o=a(166),l=a.n(o),c=a(184),m=a.n(c),p=a(165),u=a.n(p),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,a,n,r=this.props,i=r.postNode,o=r.postPath,c=r.postSEO;if(c){var p=i.frontmatter;e=p.title,t=p.description?p.description:i.excerpt,a=p.cover,n=m()(u.a.siteUrl,u.a.pathPrefix,o)}else e=u.a.siteTitle,t=u.a.siteDescription,a=u.a.siteLogo;a=m()(u.a.siteUrl,u.a.pathPrefix,a);var h=m()(u.a.siteUrl,u.a.pathPrefix),f=[{"@context":"http://schema.org","@type":"WebSite",url:h,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return c&&f.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:h,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},description:t}),s.a.createElement(l.a,null,s.a.createElement("meta",{name:"description",content:t}),s.a.createElement("meta",{name:"image",content:a}),s.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),s.a.createElement("meta",{property:"og:url",content:c?n:h}),c?s.a.createElement("meta",{property:"og:type",content:"article"}):null,s.a.createElement("meta",{property:"og:title",content:e}),s.a.createElement("meta",{property:"og:description",content:t}),s.a.createElement("meta",{property:"og:image",content:a}),s.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),s.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),s.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),s.a.createElement("meta",{name:"twitter:title",content:e}),s.a.createElement("meta",{name:"twitter:description",content:t}),s.a.createElement("meta",{name:"twitter:image",content:a}))},t}(i.Component);t.a=h},180:function(e,t,a){"use strict";a(173);var n=a(8),r=a.n(n),i=a(38),s=a.n(i),o=a(0),l=a.n(o),c=a(36),m=(a(167),a(174)),p=a.n(m),u=(a(170),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:!1},a}return r()(t,e),t.prototype.render=function(){var e=this.props.config,t=e.menuLink;e.isMobile;return l.a.createElement("nav",{id:"menu"},l.a.createElement("ul",{className:"primary-nav__items"},l.a.createElement("li",{className:"item"},l.a.createElement(c.Link,{to:t[1].link},"👨‍🎓 GUIDES")),l.a.createElement("li",{className:"item"},l.a.createElement(c.Link,{to:t[2].link},"📈 TRADING")),l.a.createElement("li",{className:"item"},l.a.createElement(c.Link,{to:t[3].link},"🤝 BLOCKCHAIN")),l.a.createElement("li",{className:"item no-margin"},l.a.createElement(c.Link,{to:t[4].link},"💌 NEWSLETTER"))))},t}(o.Component)),h=a(197),f=a.n(h),g=function(e){function t(t){var a;return(a=e.call(this,t)||this).open=function(){a.setState({isOpen:!a.state.isOpen})},a.state={isOpen:!1},a.toggleNav=a.toggleNav.bind(s()(s()(a))),a}r()(t,e);var a=t.prototype;return a.toggleNav=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){var e=this.props.config,t=e.menuLink,a=e.copyright,n=e.siteLogo;if(!a)return null;this.state.isOpen;var r=this.state.isOpen?"nav-toggle__bar half half_left":"nav-toggle__bar half";return l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"header--container"},l.a.createElement("div",{className:"header__mobile"},l.a.createElement(c.Link,{to:t[0].link},l.a.createElement("img",{className:"logo",src:n})),l.a.createElement("div",{className:"nav-toggle",onClick:this.toggleNav},l.a.createElement("div",{className:"nav-toggle__bar"}),l.a.createElement("div",{className:r}),l.a.createElement("div",{className:"nav-toggle__bar"}))),l.a.createElement(f.a,{maxWidth:1100},l.a.createElement(p.a,{isOpen:this.state.isOpen,onClose:this.open,labelledby:"nav-toggle",height:"100vh",className:"nav__offCanvas",returnFocusAfterClose:!1},l.a.createElement(u,{config:e,isMobile:!0,navToggle:this.open}),l.a.createElement("div",{onClick:this.open,className:"close"}))),l.a.createElement(f.a,{minWidth:1101},l.a.createElement(u,{config:e,isMobile:!1,navToggle:this.open}))))},t}(o.Component);t.a=g},402:function(e,t,a){},453:function(e,t,a){},454:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-post-jsx-644e0be9a3e22dc4c1c3.js.map