(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{161:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),i=a(0),s=a.n(i),o=a(166),c=a.n(o),l=a(168),m=a(204),p=(a(77),a(36)),u=(a(455),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement("div",{className:"newsletter-container",id:"newsletter"},s.a.createElement("div",{className:"newsletter__info"},s.a.createElement("h2",{className:"newsletter__title"},"Restons en contact"),s.a.createElement("p",{className:"newsletter__sub"},"Recevez les derniers articles directement dans votre boite mail."),s.a.createElement("input",{type:"email",className:"form-control",placeholder:"Votre Email"}),s.a.createElement("button",{className:"btn",type:"submit"},"Je m'inscris")),s.a.createElement("div",{className:"newsletter__illustration"}))},t}(i.Component)),d=(a(171),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,displayDate:t.node.frontmatter.date,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},a.render=function(){var e=this.getPostList();return s.a.createElement("section",{className:"post-listing__sub"},s.a.createElement("h2",{className:"post-listing__sub_title"},"DERNIERS ARTICLES"),s.a.createElement("div",{className:"post-listing__container_sub"},e.map(function(t){if(t===e[1]||t===e[2]||t===e[3])return s.a.createElement("div",{className:"post-card",key:t.title},s.a.createElement(p.Link,{to:t.path,key:t.title+"_sub"},s.a.createElement("img",{src:t.cover,className:"post-cover"}),s.a.createElement("h2",{className:"post-card__title"},t.title),s.a.createElement("p",{className:"post-card__date-sub"},t.displayDate)))})),s.a.createElement(u,null),s.a.createElement("div",{className:"post-listing__container_sub"},e.map(function(t){if(t!==e[0]&&t!==e[1]&&t!==e[2]&&t!==e[3])return s.a.createElement("div",{className:"post-card",key:t.title},s.a.createElement(p.Link,{to:t.path,key:t.title+"_sub"},s.a.createElement("img",{src:t.cover,className:"post-cover"}),s.a.createElement("h2",{className:"post-card__title"},t.title),s.a.createElement("p",{className:"post-card__date-sub"},t.displayDate)))})))},t}(s.a.Component)),f=a(179),g=a(180),h=a(177),E=a(165),v=a.n(E);a.d(t,"pageQuery",function(){return N});var y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return s.a.createElement(l.a,null,s.a.createElement("div",{className:"index-container"},s.a.createElement(c.a,{title:v.a.siteTitle}),s.a.createElement(f.a,null),s.a.createElement(g.a,{config:v.a}),s.a.createElement(m.a,{postEdges:e}),s.a.createElement(d,{postEdges:e}),s.a.createElement(h.a,{config:v.a})))},t}(s.a.Component),N=(t.default=y,"1873831682")},165:function(e,t,a){a(37);var n={siteTitle:"Cryptisla",siteTitleShort:"Cryptisla",siteTitleAlt:"Cryptisla, le trading de cryptos pour débutants",siteLogo:"/logos/logo.png",siteUrl:"https://cryptisla.com",pathPrefix:"",siteDescription:"Découvrir le trading de crypto-monnaies et la blockchain simplement.",siteRss:"/rss.xml",siteFBAppID:"",googleAnalyticsID:"UA-59515367-8",disqusShortname:"cryptisla",postDefaultCategoryID:"trading",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"Cala",userEmail:"hello@cryptisla.com",userTwitter:"",userLocation:"",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",userLinks:[{label:"Insta",url:"https://instagram.com/cryptisla",iconClassName:"fa fa-instagram",icon:"/icons/instagram.svg"},{label:"Twitter",url:"https://twitter.com/cryptisla",iconClassName:"fa fa-twitter",icon:"/icons/twitter.svg"},{label:"Facebook",url:"https://facebook.com/cryptisla",iconClassName:"fa fa-envelope",icon:"/icons/facebook.svg"},{label:"Medium",url:"https://medium.com/cryptisla",iconClassName:"fa fa-envelope",icon:"/icons/medium.svg"}],menuLink:[{name:"home",link:"/"},{name:"guides",link:"/guides"},{name:"trading",link:"/trading"},{name:"blockchain",link:"/blockchain"},{name:"newsletter",link:"#newsletter"}],copyright:"Copyright © 2019. Cryptisla",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===n.pathPrefix?n.pathPrefix="":n.pathPrefix="/"+n.pathPrefix.replace(/^\/|\/$/g,""),"/"===n.siteUrl.substr(-1)&&(n.siteUrl=n.siteUrl.slice(0,-1)),n.siteRss&&"/"!==n.siteRss[0]&&(n.siteRss="/"+n.siteRss),e.exports=n},167:function(e,t,a){"use strict";var n=a(8),r=a.n(n),i=a(0),s=a.n(i),o=(a(36),a(176),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getLinkElements=function(){var e=this.props.config.userLinks;this.props.labeled;return e.map(function(e){return s.a.createElement("a",{className:"user-links",key:e.label,href:e.url},s.a.createElement("img",{src:e.icon,className:"user-links__social"}))})},a.render=function(){return this.props.config.userLinks?s.a.createElement("div",{className:"user-links"},this.getLinkElements()):null},t}(i.Component));t.a=o},168:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(8),r=a.n(n),i=a(0),s=a.n(i),o=a(166),c=a.n(o),l=a(165),m=a.n(l),p=(a(169),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return s.a.createElement("div",{className:"container"},s.a.createElement(c.a,null,s.a.createElement("meta",{name:"description",content:m.a.siteDescription})),e)},t}(s.a.Component))},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){"use strict";var n=a(8),r=a.n(n),i=a(0),s=a.n(i),o=(a(36),a(167)),c=(a(178),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.config,t=(e.siteRss,e.copyright);return t?s.a.createElement("footer",{className:"footer"},s.a.createElement("div",{className:"notice-container"},s.a.createElement("span",null,"Made with ❤️️ in 🇪🇺 ",t)),s.a.createElement(o.a,{config:e,labeled:!0})):null},t}(i.Component));t.a=c},178:function(e,t,a){},179:function(e,t,a){"use strict";var n=a(8),r=a.n(n),s=a(0),o=a.n(s),l=a(166),u=a.n(l),d=a(184),f=a.n(d),g=a(165),E=a.n(g),v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,a,n,r=this.props,s=r.postNode,l=r.postPath,d=r.postSEO;if(d){var g=s.frontmatter;e=g.title,t=g.description?g.description:s.excerpt,a=g.cover,n=f()(E.a.siteUrl,E.a.pathPrefix,l)}else e=E.a.siteTitle,t=E.a.siteDescription,a=E.a.siteLogo;a=f()(E.a.siteUrl,E.a.pathPrefix,a);var v=f()(E.a.siteUrl,E.a.pathPrefix),y=[{"@context":"http://schema.org","@type":"WebSite",url:v,name:e,alternateName:E.a.siteTitleAlt?E.a.siteTitleAlt:""}];return d&&y.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:v,name:e,alternateName:E.a.siteTitleAlt?E.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},description:t}),o.a.createElement(u.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:a}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(y)),o.a.createElement("script",{id:"mcjs"},"!function(c,h,i,m,p)",(m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)),'(document,"script","https://chimpstatic.com/mcjs-connected/js/users/b2c2786749f2250b6db9f1d37/c01b9b6078e74872e5e2ec638.js");'),o.a.createElement("meta",{property:"og:url",content:d?n:v}),d?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:a}),o.a.createElement("meta",{property:"fb:app_id",content:E.a.siteFBAppID?E.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:E.a.userTwitter?E.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:a}))},t}(s.Component);t.a=v},180:function(e,t,a){"use strict";a(173);var n=a(8),r=a.n(n),i=a(38),s=a.n(i),o=a(0),c=a.n(o),l=a(36),m=(a(167),a(174)),p=a.n(m),u=(a(170),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:!1},a}return r()(t,e),t.prototype.render=function(){var e=this.props.config,t=e.menuLink;e.isMobile;return c.a.createElement("nav",{id:"menu"},c.a.createElement("ul",{className:"primary-nav__items"},c.a.createElement("li",{className:"item"},c.a.createElement(l.Link,{to:t[1].link},"👨‍🎓 GUIDES")),c.a.createElement("li",{className:"item"},c.a.createElement(l.Link,{to:t[2].link},"📈 TRADING")),c.a.createElement("li",{className:"item"},c.a.createElement(l.Link,{to:t[3].link},"🤝 BLOCKCHAIN")),c.a.createElement("li",{className:"item no-margin"},c.a.createElement(l.Link,{to:t[4].link},"💌 NEWSLETTER"))))},t}(o.Component)),d=a(197),f=a.n(d),g=function(e){function t(t){var a;return(a=e.call(this,t)||this).open=function(){a.setState({isOpen:!a.state.isOpen})},a.state={isOpen:!1},a.toggleNav=a.toggleNav.bind(s()(s()(a))),a}r()(t,e);var a=t.prototype;return a.toggleNav=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){var e=this.props.config,t=e.menuLink,a=e.copyright,n=e.siteLogo;if(!a)return null;this.state.isOpen;var r=this.state.isOpen?"nav-toggle__bar half half_left":"nav-toggle__bar half";return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header--container"},c.a.createElement("div",{className:"header__mobile"},c.a.createElement(l.Link,{to:t[0].link},c.a.createElement("img",{className:"logo",src:n})),c.a.createElement("div",{className:"nav-toggle",onClick:this.toggleNav},c.a.createElement("div",{className:"nav-toggle__bar"}),c.a.createElement("div",{className:r}),c.a.createElement("div",{className:"nav-toggle__bar"}))),c.a.createElement(f.a,{maxWidth:1100},c.a.createElement(p.a,{isOpen:this.state.isOpen,onClose:this.open,labelledby:"nav-toggle",height:"100vh",className:"nav__offCanvas",returnFocusAfterClose:!1},c.a.createElement(u,{config:e,isMobile:!0,navToggle:this.open}),c.a.createElement("div",{onClick:this.open,className:"close"}))),c.a.createElement(f.a,{minWidth:1101},c.a.createElement(u,{config:e,isMobile:!1,navToggle:this.open}))))},t}(o.Component);t.a=g},204:function(e,t,a){"use strict";a(77);var n=a(8),r=a.n(n),i=a(0),s=a.n(i),o=a(36),c=(a(171),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,displayDate:t.node.frontmatter.date,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},a.render=function(){var e=this.getPostList();return s.a.createElement("div",{className:"post-listing__container"},e.map(function(t){var a={background:"url("+t.cover+")",backgroundPosition:"top",backgroundSize:"cover"};if(t===e[0])return s.a.createElement("div",{className:"post-card__hero",style:a,key:t.title},s.a.createElement(o.Link,{to:t.path,key:t.title+"_post",className:"post-card__link"},s.a.createElement("p",{className:"post-card__complementary"},s.a.createElement("span",{className:"post-card__tag"},t.tags),s.a.createElement("span",{className:"post-card__date"},t.displayDate)),s.a.createElement("div",{className:"post-card__info"},s.a.createElement("h1",{className:"post-card__hero-title"},t.title)),s.a.createElement("div",{className:"post-card__more"},s.a.createElement("span",null,"LIRE L'ARTICLE"))))}))},t}(s.a.Component));t.a=c},455:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-jsx-97b500e48be395d4cec1.js.map