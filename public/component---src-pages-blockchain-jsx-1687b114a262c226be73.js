(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{164:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(0),s=a.n(r),o=a(166),l=a.n(o),c=a(168),m=(a(77),a(36)),p=(a(171),function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var a=t.prototype;return a.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,displayDate:t.node.frontmatter.date,category:t.node.frontmatter.category,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},a.render=function(){var e=this.getPostList();return s.a.createElement("section",{className:"post-listing__sub"},s.a.createElement("h2",{className:"post-listing__sub_title"},"🤝 Blockchain 🤝"),s.a.createElement("p",{className:"post-listing__sub_construct"},"Cette page est toujours en construction 🏗️ et ne contient pas encore d'articles. Mais promis, ils sont en cours d'écriture 💻 ☕"),s.a.createElement("div",{className:"post-listing__container_sub"},e.map(function(e){if("blockchain"===e.category)return s.a.createElement("div",{className:"post-card",key:e.title},s.a.createElement(m.Link,{to:e.path,key:e.title+"_dev"},s.a.createElement("img",{src:e.cover,className:"post-cover"}),s.a.createElement("h2",{className:"post-card__title"},e.title),s.a.createElement("p",{className:"post-card__date-sub"},e.displayDate)))})))},t}(s.a.Component)),u=a(179),g=a(180),d=a(177),h=a(165),f=a.n(h);a.d(t,"pageQuery",function(){return v});var E=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return s.a.createElement(c.a,null,s.a.createElement("div",{className:"index-container"},s.a.createElement(l.a,{title:f.a.siteTitle}),s.a.createElement(u.a,null),s.a.createElement(g.a,{config:f.a}),s.a.createElement(p,{postEdges:e}),s.a.createElement(d.a,{config:f.a})))},t}(s.a.Component),v=(t.default=E,"699911914")},165:function(e,t,a){a(38);var n={siteTitle:"Cryptisla",siteTitleShort:"Cryptisla",siteTitleAlt:"Cryptisla, le trading de cryptos pour débutants",siteLogo:"/logos/logo.png",siteUrl:"https://cryptisla.com",pathPrefix:"",siteDescription:"Découvrir le trading de crypto-monnaies et la blockchain simplement.",siteRss:"/rss.xml",siteFBAppID:"",googleAnalyticsID:"UA-59515367-8",disqusShortname:"cryptisla",postDefaultCategoryID:"trading",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"Cala",userEmail:"hello@cryptisla.com",userTwitter:"",userLocation:"",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",userLinks:[{label:"Insta",url:"https://instagram.com/cryptisla",iconClassName:"fa fa-instagram",icon:"/icons/instagram.svg"},{label:"Twitter",url:"https://twitter.com/cryptisla",iconClassName:"fa fa-twitter",icon:"/icons/twitter.svg"},{label:"Facebook",url:"https://facebook.com/cryptisla",iconClassName:"fa fa-envelope",icon:"/icons/facebook.svg"},{label:"Medium",url:"https://medium.com/cryptisla",iconClassName:"fa fa-envelope",icon:"/icons/medium.svg"}],menuLink:[{name:"home",link:"/"},{name:"guides",link:"/guides"},{name:"trading",link:"/trading"},{name:"blockchain",link:"/blockchain"},{name:"newsletter",link:"#newsletter"}],copyright:"Copyright © 2019. Cryptisla",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===n.pathPrefix?n.pathPrefix="":n.pathPrefix="/"+n.pathPrefix.replace(/^\/|\/$/g,""),"/"===n.siteUrl.substr(-1)&&(n.siteUrl=n.siteUrl.slice(0,-1)),n.siteRss&&"/"!==n.siteRss[0]&&(n.siteRss="/"+n.siteRss),e.exports=n},167:function(e,t,a){"use strict";var n=a(8),i=a.n(n),r=a(0),s=a.n(r),o=(a(36),a(176),function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var a=t.prototype;return a.getLinkElements=function(){var e=this.props.config.userLinks;this.props.labeled;return e.map(function(e){return s.a.createElement("a",{className:"user-links",key:e.label,href:e.url},s.a.createElement("img",{src:e.icon,className:"user-links__social"}))})},a.render=function(){return this.props.config.userLinks?s.a.createElement("div",{className:"user-links"},this.getLinkElements()):null},t}(r.Component));t.a=o},168:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(8),i=a.n(n),r=a(0),s=a.n(r),o=a(166),l=a.n(o),c=a(165),m=a.n(c),p=(a(169),function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.children;return s.a.createElement("div",{className:"container"},s.a.createElement(l.a,null,s.a.createElement("meta",{name:"description",content:m.a.siteDescription})),e)},t}(s.a.Component))},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){"use strict";var n=a(8),i=a.n(n),r=a(0),s=a.n(r),o=(a(36),a(167)),l=(a(178),function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.config,t=(e.siteRss,e.copyright);return t?s.a.createElement("footer",{className:"footer"},s.a.createElement("div",{className:"notice-container"},s.a.createElement("span",null,"Made with ❤️️ in 🇪🇺 ",t)),s.a.createElement(o.a,{config:e,labeled:!0})):null},t}(r.Component));t.a=l},178:function(e,t,a){},179:function(e,t,a){"use strict";var n=a(8),i=a.n(n),r=a(0),s=a.n(r),o=a(166),l=a.n(o),c=a(184),m=a.n(c),p=a(165),u=a.n(p),g=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e,t,a,n,i=this.props,r=i.postNode,o=i.postPath,c=i.postSEO;if(c){var p=r.frontmatter;e=p.title,t=p.description?p.description:r.excerpt,a=p.cover,n=m()(u.a.siteUrl,u.a.pathPrefix,o)}else e=u.a.siteTitle,t=u.a.siteDescription,a=u.a.siteLogo;a=m()(u.a.siteUrl,u.a.pathPrefix,a);var g=m()(u.a.siteUrl,u.a.pathPrefix),d=[{"@context":"http://schema.org","@type":"WebSite",url:g,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return c&&d.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:g,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},description:t}),s.a.createElement(l.a,null,s.a.createElement("meta",{name:"description",content:t}),s.a.createElement("meta",{name:"image",content:a}),s.a.createElement("script",{type:"application/ld+json"},JSON.stringify(d)),s.a.createElement("meta",{property:"og:url",content:c?n:g}),c?s.a.createElement("meta",{property:"og:type",content:"article"}):null,s.a.createElement("meta",{property:"og:title",content:e}),s.a.createElement("meta",{property:"og:description",content:t}),s.a.createElement("meta",{property:"og:image",content:a}),s.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),s.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),s.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),s.a.createElement("meta",{name:"twitter:title",content:e}),s.a.createElement("meta",{name:"twitter:description",content:t}),s.a.createElement("meta",{name:"twitter:image",content:a}))},t}(r.Component);t.a=g},180:function(e,t,a){"use strict";a(173);var n=a(8),i=a.n(n),r=a(37),s=a.n(r),o=a(0),l=a.n(o),c=a(36),m=(a(167),a(174)),p=a.n(m),u=(a(170),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:!1},a.toggleNav=a.toggleNav.bind(s()(s()(a))),a}i()(t,e);var a=t.prototype;return a.toggleNav=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){var e=this.props.config.menuLink;return l.a.createElement("nav",{id:"menu"},l.a.createElement("ul",{className:"primary-nav__items"},l.a.createElement("li",{className:"item"},l.a.createElement(c.Link,{to:e[1].link},"👨‍🎓 GUIDES")),l.a.createElement("li",{className:"item"},l.a.createElement(c.Link,{to:e[2].link},"📈 TRADING")),l.a.createElement("li",{className:"item"},l.a.createElement(c.Link,{to:e[3].link},"🤝 BLOCKCHAIN")),l.a.createElement("li",{className:"item no-margin"},l.a.createElement(c.Link,{to:e[4].link},"💌 NEWSLETTER"))))},t}(o.Component)),g=a(197),d=a.n(g),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).open=function(){a.setState({isOpen:!a.state.isOpen})},a.state={isOpen:!1},a.toggleNav=a.toggleNav.bind(s()(s()(a))),a}i()(t,e);var a=t.prototype;return a.toggleNav=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){var e=this.props.config,t=e.menuLink,a=e.copyright,n=e.siteLogo;if(!a)return null;this.state.isOpen;var i=this.state.isOpen?"nav-toggle__bar half half_left":"nav-toggle__bar half";return l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"header--container"},l.a.createElement("div",{className:"header__mobile"},l.a.createElement(c.Link,{to:t[0].link},l.a.createElement("img",{className:"logo",src:n})),l.a.createElement("div",{className:"nav-toggle",onClick:this.toggleNav},l.a.createElement("div",{className:"nav-toggle__bar"}),l.a.createElement("div",{className:i}),l.a.createElement("div",{className:"nav-toggle__bar"}))),l.a.createElement(d.a,{maxWidth:1100},l.a.createElement(p.a,{isOpen:this.state.isOpen,onClose:this.open,labelledby:"nav-toggle",height:"100vh",className:"nav__offCanvas"},l.a.createElement(u,{config:e}))),l.a.createElement(d.a,{minWidth:1101},l.a.createElement(u,{config:e}))))},t}(o.Component);t.a=h}}]);
//# sourceMappingURL=component---src-pages-blockchain-jsx-1687b114a262c226be73.js.map