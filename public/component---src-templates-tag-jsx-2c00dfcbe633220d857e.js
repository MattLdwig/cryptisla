(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{155:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u}),a.d(t,"pageQuery",function(){return g});var n=a(8),s=a.n(n),r=a(0),i=a.n(r),o=a(166),l=a.n(o),c=a(168),p=a(204),m=a(165),d=a.n(m),u=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=this.props.pageContext.tag,t=this.props.data.allMarkdownRemark.edges;return i.a.createElement(c.a,null,i.a.createElement("div",{className:"tag-container"},i.a.createElement(l.a,{title:'Posts tagged as "'+e+'" | '+d.a.siteTitle}),i.a.createElement(p.a,{postEdges:t})))},t}(i.a.Component),g="3824571933"},165:function(e,t,a){a(38);var n={siteTitle:"Cryptisla",siteTitleShort:"Cryptisla",siteTitleAlt:"Cryptisla, le trading de cryptos pour débutants",siteLogo:"/logos/logo.png",siteUrl:"https://cryptisla.com",pathPrefix:"",siteDescription:"Découvrir le trading de crypto-monnaies et la blockchain simplement.",siteRss:"/rss.xml",siteFBAppID:"",googleAnalyticsID:"UA-59515367-8",disqusShortname:"cryptisla",postDefaultCategoryID:"trading",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"Cala",userEmail:"hello@cryptisla.com",userTwitter:"",userLocation:"",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",userLinks:[{label:"Insta",url:"https://instagram.com/cryptisla",iconClassName:"fa fa-instagram",icon:"/icons/instagram.svg"},{label:"Twitter",url:"https://twitter.com/cryptisla",iconClassName:"fa fa-twitter",icon:"/icons/twitter.svg"},{label:"Facebook",url:"https://facebook.com/cryptisla",iconClassName:"fa fa-envelope",icon:"/icons/facebook.svg"},{label:"Medium",url:"https://medium.com/cryptisla",iconClassName:"fa fa-envelope",icon:"/icons/medium.svg"}],menuLink:[{name:"home",link:"/"},{name:"guides",link:"/guides"},{name:"trading",link:"/trading"},{name:"blockchain",link:"/blockchain"},{name:"newsletter",link:"#newsletter"}],copyright:"Copyright © 2019. Cryptisla",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===n.pathPrefix?n.pathPrefix="":n.pathPrefix="/"+n.pathPrefix.replace(/^\/|\/$/g,""),"/"===n.siteUrl.substr(-1)&&(n.siteUrl=n.siteUrl.slice(0,-1)),n.siteRss&&"/"!==n.siteRss[0]&&(n.siteRss="/"+n.siteRss),e.exports=n},168:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(8),s=a.n(n),r=a(0),i=a.n(r),o=a(166),l=a.n(o),c=a(165),p=a.n(c),m=(a(169),function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("div",{className:"container"},i.a.createElement(l.a,null,i.a.createElement("meta",{name:"description",content:p.a.siteDescription})),e)},t}(i.a.Component))},169:function(e,t,a){},171:function(e,t,a){},204:function(e,t,a){"use strict";a(77);var n=a(8),s=a.n(n),r=a(0),i=a.n(r),o=a(36),l=(a(171),function(e){function t(){return e.apply(this,arguments)||this}s()(t,e);var a=t.prototype;return a.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,displayDate:t.node.frontmatter.date,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},a.render=function(){var e=this.getPostList();return i.a.createElement("div",{className:"post-listing__container"},e.map(function(t){var a={background:"url("+t.cover+")",backgroundPosition:"top",backgroundSize:"cover"};if(t===e[0])return i.a.createElement("div",{className:"post-card__hero",style:a,key:t.title},i.a.createElement(o.Link,{to:t.path,key:t.title+"_post",className:"post-card__link"},i.a.createElement("p",{className:"post-card__complementary"},i.a.createElement("span",{className:"post-card__tag"},t.tags),i.a.createElement("span",{className:"post-card__date"},t.displayDate)),i.a.createElement("div",{className:"post-card__info"},i.a.createElement("h1",{className:"post-card__hero-title"},t.title)),i.a.createElement("div",{className:"post-card__more"},i.a.createElement("span",null,"LIRE L'ARTICLE"))))}))},t}(i.a.Component));t.a=l}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-2c00dfcbe633220d857e.js.map