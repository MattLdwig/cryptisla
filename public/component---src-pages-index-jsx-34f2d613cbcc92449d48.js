(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{161:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),i=a(0),s=a.n(i),o=a(166),l=a.n(o),c=a(168),m=a(204),p=(a(77),a(36)),u=(a(455),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement("div",{className:"newsletter-container",id:"newsletter"},s.a.createElement("div",{className:"newsletter__info"},s.a.createElement("h2",{className:"newsletter__title"},"Restons en contact"),s.a.createElement("p",{className:"newsletter__sub"},"Recevez les derniers articles directement dans votre boite mail."),s.a.createElement("input",{type:"email",className:"form-control",placeholder:"Votre Email"}),s.a.createElement("button",{className:"btn",type:"submit"},"Je m'inscris")),s.a.createElement("div",{className:"newsletter__illustration"}))},t}(i.Component)),d=(a(171),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,displayDate:t.node.frontmatter.date,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},a.render=function(){var e=this.getPostList();return s.a.createElement("section",{className:"post-listing__sub"},s.a.createElement("h2",{className:"post-listing__sub_title"},"DERNIERS ARTICLES"),s.a.createElement("div",{className:"post-listing__container_sub"},e.map(function(t){if(t===e[1]||t===e[2]||t===e[3])return s.a.createElement("div",{className:"post-card",key:t.title},s.a.createElement(p.Link,{to:t.path,key:t.title+"_sub"},s.a.createElement("img",{src:t.cover,className:"post-cover"}),s.a.createElement("h2",{className:"post-card__title"},t.title),s.a.createElement("p",{className:"post-card__date-sub"},t.displayDate)))})),s.a.createElement(u,null),s.a.createElement("div",{className:"post-listing__container_sub"},e.map(function(t){if(t!==e[0]&&t!==e[1]&&t!==e[2]&&t!==e[3])return s.a.createElement("div",{className:"post-card",key:t.title},s.a.createElement(p.Link,{to:t.path,key:t.title+"_sub"},s.a.createElement("img",{src:t.cover,className:"post-cover"}),s.a.createElement("h2",{className:"post-card__title"},t.title),s.a.createElement("p",{className:"post-card__date-sub"},t.displayDate)))})))},t}(s.a.Component)),f=a(179),g=a(180),h=a(177),E=a(165),v=a.n(E);a.d(t,"pageQuery",function(){return N});var y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return s.a.createElement(c.a,null,s.a.createElement("div",{className:"index-container"},s.a.createElement(l.a,{title:v.a.siteTitle}),s.a.createElement(f.a,null),s.a.createElement(g.a,{config:v.a}),s.a.createElement(m.a,{postEdges:e}),s.a.createElement(d,{postEdges:e}),s.a.createElement(h.a,{config:v.a})))},t}(s.a.Component),N=(t.default=y,"1873831682")},165:function(e,t,a){a(38);var n={siteTitle:"Cryptisla",siteTitleShort:"Cryptisla",siteTitleAlt:"Cryptisla, le trading de cryptos pour débutants",siteLogo:"/logos/logo.png",siteUrl:"https://cryptisla.com",pathPrefix:"",siteDescription:"Découvrir le trading de crypto-monnaies et la blockchain simplement.",siteRss:"/rss.xml",siteFBAppID:"",googleAnalyticsID:"UA-59515367-8",disqusShortname:"cryptisla",postDefaultCategoryID:"trading",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"Cala",userEmail:"hello@cryptisla.com",userTwitter:"",userLocation:"",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",userLinks:[{label:"Insta",url:"https://instagram.com/cryptisla",iconClassName:"fa fa-instagram",icon:"/icons/instagram.svg"},{label:"Twitter",url:"https://twitter.com/cryptisla",iconClassName:"fa fa-twitter",icon:"/icons/twitter.svg"},{label:"Facebook",url:"https://facebook.com/cryptisla",iconClassName:"fa fa-envelope",icon:"/icons/facebook.svg"},{label:"Medium",url:"https://medium.com/cryptisla",iconClassName:"fa fa-envelope",icon:"/icons/medium.svg"}],menuLink:[{name:"home",link:"/"},{name:"guides",link:"/guides"},{name:"trading",link:"/trading"},{name:"blockchain",link:"/blockchain"},{name:"newsletter",link:"#newsletter"}],copyright:"Copyright © 2019. Cryptisla",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===n.pathPrefix?n.pathPrefix="":n.pathPrefix="/"+n.pathPrefix.replace(/^\/|\/$/g,""),"/"===n.siteUrl.substr(-1)&&(n.siteUrl=n.siteUrl.slice(0,-1)),n.siteRss&&"/"!==n.siteRss[0]&&(n.siteRss="/"+n.siteRss),e.exports=n},167:function(e,t,a){"use strict";var n=a(8),r=a.n(n),i=a(0),s=a.n(i),o=(a(36),a(176),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getLinkElements=function(){var e=this.props.config.userLinks;this.props.labeled;return e.map(function(e){return s.a.createElement("a",{className:"user-links",key:e.label,href:e.url},s.a.createElement("img",{src:e.icon,className:"user-links__social"}))})},a.render=function(){return this.props.config.userLinks?s.a.createElement("div",{className:"user-links"},this.getLinkElements()):null},t}(i.Component));t.a=o},168:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(8),r=a.n(n),i=a(0),s=a.n(i),o=a(166),l=a.n(o),c=a(165),m=a.n(c),p=(a(169),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return s.a.createElement("div",{className:"container"},s.a.createElement(l.a,null,s.a.createElement("meta",{name:"description",content:m.a.siteDescription})),e)},t}(s.a.Component))},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){"use strict";var n=a(8),r=a.n(n),i=a(0),s=a.n(i),o=(a(36),a(167)),l=(a(178),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.config,t=(e.siteRss,e.copyright);return t?s.a.createElement("footer",{className:"footer"},s.a.createElement("div",{className:"notice-container"},s.a.createElement("span",null,"Made with ❤️️ in 🇪🇺 ",t)),s.a.createElement(o.a,{config:e,labeled:!0})):null},t}(i.Component));t.a=l},178:function(e,t,a){},179:function(e,t,a){"use strict";var n=a(8),r=a.n(n),i=a(0),s=a.n(i),o=a(166),l=a.n(o),c=a(184),m=a.n(c),p=a(165),u=a.n(p),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,a,n,r=this.props,i=r.postNode,o=r.postPath,c=r.postSEO;if(c){var p=i.frontmatter;e=p.title,t=p.description?p.description:i.excerpt,a=p.cover,n=m()(u.a.siteUrl,u.a.pathPrefix,o)}else e=u.a.siteTitle,t=u.a.siteDescription,a=u.a.siteLogo;a=m()(u.a.siteUrl,u.a.pathPrefix,a);var d=m()(u.a.siteUrl,u.a.pathPrefix),f=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return c&&f.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},description:t}),s.a.createElement(l.a,null,s.a.createElement("meta",{name:"description",content:t}),s.a.createElement("meta",{name:"image",content:a}),s.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),s.a.createElement("meta",{property:"og:url",content:c?n:d}),c?s.a.createElement("meta",{property:"og:type",content:"article"}):null,s.a.createElement("meta",{property:"og:title",content:e}),s.a.createElement("meta",{property:"og:description",content:t}),s.a.createElement("meta",{property:"og:image",content:a}),s.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),s.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),s.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),s.a.createElement("meta",{name:"twitter:title",content:e}),s.a.createElement("meta",{name:"twitter:description",content:t}),s.a.createElement("meta",{name:"twitter:image",content:a}))},t}(i.Component);t.a=d},180:function(e,t,a){"use strict";a(173);var n=a(8),r=a.n(n),i=a(37),s=a.n(i),o=a(0),l=a.n(o),c=a(36),m=(a(167),a(174)),p=a.n(m),u=(a(170),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:!1},a.toggleNav=a.toggleNav.bind(s()(s()(a))),a}r()(t,e);var a=t.prototype;return a.toggleNav=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){var e=this.props.config.menuLink;return l.a.createElement("nav",{id:"menu"},l.a.createElement("ul",{className:"primary-nav__items"},l.a.createElement("li",{className:"item"},l.a.createElement(c.Link,{to:e[1].link},"👨‍🎓 GUIDES")),l.a.createElement("li",{className:"item"},l.a.createElement(c.Link,{to:e[2].link},"📈 TRADING")),l.a.createElement("li",{className:"item"},l.a.createElement(c.Link,{to:e[3].link},"🤝 BLOCKCHAIN")),l.a.createElement("li",{className:"item no-margin"},l.a.createElement(c.Link,{to:e[4].link},"💌 NEWSLETTER"))))},t}(o.Component)),d=a(197),f=a.n(d),g=function(e){function t(t){var a;return(a=e.call(this,t)||this).open=function(){a.setState({isOpen:!a.state.isOpen})},a.state={isOpen:!1},a.toggleNav=a.toggleNav.bind(s()(s()(a))),a}r()(t,e);var a=t.prototype;return a.toggleNav=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){var e=this.props.config,t=e.menuLink,a=e.copyright,n=e.siteLogo;if(!a)return null;this.state.isOpen;var r=this.state.isOpen?"nav-toggle__bar half half_left":"nav-toggle__bar half";return l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"header--container"},l.a.createElement("div",{className:"header__mobile"},l.a.createElement(c.Link,{to:t[0].link},l.a.createElement("img",{className:"logo",src:n})),l.a.createElement("div",{className:"nav-toggle",onClick:this.toggleNav},l.a.createElement("div",{className:"nav-toggle__bar"}),l.a.createElement("div",{className:r}),l.a.createElement("div",{className:"nav-toggle__bar"}))),l.a.createElement(f.a,{maxWidth:1100},l.a.createElement(p.a,{isOpen:this.state.isOpen,onClose:this.open,labelledby:"nav-toggle",height:"100vh",className:"nav__offCanvas"},l.a.createElement(u,{config:e}))),l.a.createElement(f.a,{minWidth:1101},l.a.createElement(u,{config:e}))))},t}(o.Component);t.a=g},204:function(e,t,a){"use strict";a(77);var n=a(8),r=a.n(n),i=a(0),s=a.n(i),o=a(36),l=(a(171),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,displayDate:t.node.frontmatter.date,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},a.render=function(){var e=this.getPostList();return s.a.createElement("div",{className:"post-listing__container"},e.map(function(t){var a={background:"url("+t.cover+")",backgroundPosition:"top",backgroundSize:"cover"};if(t===e[0])return s.a.createElement("div",{className:"post-card__hero",style:a,key:t.title},s.a.createElement(o.Link,{to:t.path,key:t.title+"_post",className:"post-card__link"},s.a.createElement("p",{className:"post-card__complementary"},s.a.createElement("span",{className:"post-card__tag"},t.tags),s.a.createElement("span",{className:"post-card__date"},t.displayDate)),s.a.createElement("div",{className:"post-card__info"},s.a.createElement("h1",{className:"post-card__hero-title"},t.title)),s.a.createElement("div",{className:"post-card__more"},s.a.createElement("span",null,"LIRE L'ARTICLE"))))}))},t}(s.a.Component));t.a=l},455:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-jsx-34f2d613cbcc92449d48.js.map