(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{162:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),i=a(0),s=a.n(i),o=a(166),c=a.n(o),l=a(168),m=(a(77),a(36)),p=(a(171),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,displayDate:t.node.frontmatter.date,category:t.node.frontmatter.category,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},a.render=function(){var e=this.getPostList();return s.a.createElement("section",{className:"post-listing__sub"},s.a.createElement("h2",{className:"post-listing__sub_title"},"🤝 Blockchain 🤝"),s.a.createElement("p",{className:"post-listing__sub_construct"},"Cette page est toujours en construction 🏗️ et ne contient pas encore d'articles. Mais promis, ils sont en cours d'écriture 💻 ☕"),s.a.createElement("div",{className:"post-listing__container_sub"},e.map(function(e){if("blockchain"===e.category)return s.a.createElement("div",{className:"post-card",key:e.title},s.a.createElement(m.Link,{to:e.path,key:e.title+"_dev"},s.a.createElement("img",{src:e.cover,className:"post-cover"}),s.a.createElement("h2",{className:"post-card__title"},e.title),s.a.createElement("p",{className:"post-card__date-sub"},e.displayDate)))})))},t}(s.a.Component)),u=a(179),g=a(180),d=a(177),h=a(165),f=a.n(h);a.d(t,"pageQuery",function(){return v});var E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return s.a.createElement(l.a,null,s.a.createElement("div",{className:"index-container"},s.a.createElement(c.a,{title:f.a.siteTitle}),s.a.createElement(u.a,null),s.a.createElement(g.a,{config:f.a}),s.a.createElement(p,{postEdges:e}),s.a.createElement(d.a,{config:f.a})))},t}(s.a.Component),v=(t.default=E,"699911914")},165:function(e,t,a){a(37);var n={siteTitle:"Cryptisla",siteTitleShort:"Cryptisla",siteTitleAlt:"Cryptisla, le trading de cryptos pour débutants",siteLogo:"/logos/logo.png",siteUrl:"https://cryptisla.com",pathPrefix:"",siteDescription:"Découvrir le trading de crypto-monnaies et la blockchain simplement.",siteRss:"/rss.xml",siteFBAppID:"",googleAnalyticsID:"UA-59515367-8",disqusShortname:"cryptisla",postDefaultCategoryID:"trading",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"Cala",userEmail:"hello@cryptisla.com",userTwitter:"",userLocation:"",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",userLinks:[{label:"Twitter",url:"https://twitter.com/cryptisla",iconClassName:"fa fa-twitter",icon:"/icons/twitter.svg"},{label:"Facebook",url:"https://facebook.com/cryptisla",iconClassName:"fa fa-envelope",icon:"/icons/facebook.svg"}],menuLink:[{name:"home",link:"/"},{name:"guides",link:"/guides"},{name:"trading",link:"/trading"},{name:"blockchain",link:"/blockchain"}],copyright:"Copyright © 2019. Cryptisla",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===n.pathPrefix?n.pathPrefix="":n.pathPrefix="/"+n.pathPrefix.replace(/^\/|\/$/g,""),"/"===n.siteUrl.substr(-1)&&(n.siteUrl=n.siteUrl.slice(0,-1)),n.siteRss&&"/"!==n.siteRss[0]&&(n.siteRss="/"+n.siteRss),e.exports=n},167:function(e,t,a){"use strict";var n=a(8),r=a.n(n),i=a(0),s=a.n(i),o=(a(36),a(176),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getLinkElements=function(){var e=this.props.config.userLinks;this.props.labeled;return e.map(function(e){return s.a.createElement("a",{className:"user-links",key:e.label,href:e.url},s.a.createElement("img",{src:e.icon,className:"user-links__social"}))})},a.render=function(){return this.props.config.userLinks?s.a.createElement("div",{className:"user-links"},this.getLinkElements()):null},t}(i.Component));t.a=o},168:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(8),r=a.n(n),i=a(0),s=a.n(i),o=a(166),c=a.n(o),l=a(165),m=a.n(l),p=(a(169),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return s.a.createElement("div",{className:"container"},s.a.createElement(c.a,null,s.a.createElement("meta",{name:"description",content:m.a.siteDescription})),e)},t}(s.a.Component))},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){"use strict";var n=a(8),r=a.n(n),i=a(0),s=a.n(i),o=(a(36),a(167)),c=(a(178),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.config,t=(e.siteRss,e.copyright);return t?s.a.createElement("footer",{className:"footer"},s.a.createElement("div",{className:"notice-container"},s.a.createElement("span",null,"Made with ❤️️ in 🇪🇺 ",t)),s.a.createElement(o.a,{config:e,labeled:!0})):null},t}(i.Component));t.a=c},178:function(e,t,a){},179:function(e,t,a){"use strict";var n=a(8),r=a.n(n),i=a(0),s=a.n(i),o=a(166),c=a.n(o),l=a(184),m=a.n(l),p=a(165),u=a.n(p),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,a,n,r=this.props,i=r.postNode,o=r.postPath,l=r.postSEO;if(l){var p=i.frontmatter;e=p.title,t=p.description?p.description:i.excerpt,a=p.cover,n=m()(u.a.siteUrl,u.a.pathPrefix,o)}else e=u.a.siteTitle,t=u.a.siteDescription,a=u.a.siteLogo;a=m()(u.a.siteUrl,u.a.pathPrefix,a);var g=m()(u.a.siteUrl,u.a.pathPrefix),d=[{"@context":"http://schema.org","@type":"WebSite",url:g,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return l&&d.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:g,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},description:t}),s.a.createElement(c.a,null,s.a.createElement("meta",{name:"description",content:t}),s.a.createElement("meta",{name:"image",content:a}),s.a.createElement("script",{type:"application/ld+json"},JSON.stringify(d)),s.a.createElement("script",{dangerouslySetInnerHTML:{__html:'!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/b2c2786749f2250b6db9f1d37/c01b9b6078e74872e5e2ec638.js");'}}),s.a.createElement("meta",{property:"og:url",content:l?n:g}),l?s.a.createElement("meta",{property:"og:type",content:"article"}):null,s.a.createElement("meta",{property:"og:title",content:e}),s.a.createElement("meta",{property:"og:description",content:t}),s.a.createElement("meta",{property:"og:image",content:a}),s.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),s.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),s.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),s.a.createElement("meta",{name:"twitter:title",content:e}),s.a.createElement("meta",{name:"twitter:description",content:t}),s.a.createElement("meta",{name:"twitter:image",content:a}))},t}(i.Component);t.a=g},180:function(e,t,a){"use strict";a(173);var n=a(8),r=a.n(n),i=a(38),s=a.n(i),o=a(0),c=a.n(o),l=a(36),m=(a(167),a(174)),p=a.n(m),u=(a(170),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:!1},a}return r()(t,e),t.prototype.render=function(){var e=this.props.config,t=e.menuLink;e.isMobile;return c.a.createElement("nav",{id:"menu"},c.a.createElement("ul",{className:"primary-nav__items"},c.a.createElement("li",{className:"item"},c.a.createElement(l.Link,{to:t[1].link},"👨‍🎓 GUIDES")),c.a.createElement("li",{className:"item"},c.a.createElement(l.Link,{to:t[2].link},"📈 TRADING")),c.a.createElement("li",{className:"item no-margin"},c.a.createElement(l.Link,{to:t[3].link},"🤝 BLOCKCHAIN"))))},t}(o.Component)),g=a(197),d=a.n(g),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).open=function(){a.setState({isOpen:!a.state.isOpen})},a.state={isOpen:!1},a.toggleNav=a.toggleNav.bind(s()(s()(a))),a}r()(t,e);var a=t.prototype;return a.toggleNav=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){var e=this.props.config,t=e.menuLink,a=e.copyright,n=e.siteLogo;if(!a)return null;this.state.isOpen;var r=this.state.isOpen?"nav-toggle__bar half half_left":"nav-toggle__bar half";return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header--container"},c.a.createElement("div",{className:"header__mobile"},c.a.createElement(l.Link,{to:t[0].link},c.a.createElement("img",{className:"logo",src:n})),c.a.createElement("div",{className:"nav-toggle",onClick:this.toggleNav},c.a.createElement("div",{className:"nav-toggle__bar"}),c.a.createElement("div",{className:r}),c.a.createElement("div",{className:"nav-toggle__bar"}))),c.a.createElement(d.a,{maxWidth:1100},c.a.createElement(p.a,{isOpen:this.state.isOpen,onClose:this.open,labelledby:"nav-toggle",height:"100vh",className:"nav__offCanvas",returnFocusAfterClose:!1},c.a.createElement(u,{config:e,isMobile:!0,navToggle:this.open}),c.a.createElement("div",{onClick:this.open,className:"close"}))),c.a.createElement(d.a,{minWidth:1101},c.a.createElement(u,{config:e,isMobile:!1,navToggle:this.open}))))},t}(o.Component);t.a=h}}]);
//# sourceMappingURL=component---src-pages-blockchain-jsx-62e9ad2385353d6fa819.js.map