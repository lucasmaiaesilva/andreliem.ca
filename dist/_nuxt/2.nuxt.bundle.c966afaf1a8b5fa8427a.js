webpackJsonp([2],{334:function(e,t,n){function s(e){n(359)}var i=n(19)(n(343),n(354),s,null,null);e.exports=i.exports},341:function(e,t,n){function s(e){return n(i(e))}function i(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var r={"./1.md":350};s.keys=function(){return Object.keys(r)},s.resolve=i,e.exports=s,s.id=341},343:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(351),i=n.n(s);t.default={layout:"slug",head:function(){return{title:"Andre Liem",meta:[{hid:"description",name:"description",content:"My custom description"}]}},computed:{postContent:function(){var e=this,t=this.$store.state.posts.list.find(function(t){return t.slug===e.$route.params.slug});return i.a.setOptions({highlight:function(e){return n(68).highlightAuto(e).value}}),i()(n(341)("./"+t.id+".md"))}}}},348:function(e,t,n){t=e.exports=n(13)(!0),t.push([e.i,".post pre{background-color:#f5f5f5;padding:2em}.post .hljs-built_in,.post .hljs-deletion,.post .hljs-function,.post .hljs-section,.post .hljs-selector-class,.post .hljs-string,.post .hljs-template-variable{color:#800}","",{version:3,sources:["/Users/andreliem/Midstride/src/andreliem.ca/pages/_slug/index.vue"],names:[],mappings:"AACA,UAAU,yBAAyB,WAAW,CAC7C,AACD,+JAA+J,UAAU,CACxK",file:"index.vue",sourcesContent:["\n.post pre{background-color:#f5f5f5;padding:2em\n}\n.post .hljs-built_in,.post .hljs-string,.post .hljs-section,.post .hljs-selector-class,.post .hljs-template-variable,.post .hljs-deletion,.post .hljs-function{color:#800\n}"],sourceRoot:""}])},350:function(e,t){e.exports="<p>Welcome to the first official post for my newly revamped personal site running off the awesome Nuxt framework [<a href=https://nuxtjs.org>https://nuxtjs.org</a>]. If you&#39;re not familiar with Nuxt, here is a quick summary straight from the official site. Nuxt.js is summarized:</p> <blockquote> <p>Nuxt.js is a framework for creating Universal Vue.js Applications.</p> <p>Its main scope is UI rendering while abstracting away the client/server distribution.</p> <p>Our goal is to create a framework flexible enough so that you can use it as a main project base or in addition to your current project based on Node.js. In this post I&#39;ll review the following:</p> </blockquote> <h4 id=introduction>Introduction</h4> <p>I decided that it was time to move away from WordPress and adopt static blogging when [<a href=https://vuejs.org>https://vuejs.org</a>] came out. Oddly enough I made this decision around the time that Nuxt was formalizing as a framework for building Universal apps, but I never really gave the docs a read till recently. </p> <p>I was looking at using Vuejs directly to build my Vue news site [<a href=http://vuejsradar.com>http://vuejsradar.com</a>] and building my own layers, investigating SSR. All of this was posted in my first two posts on the site. Fortunately, I read into Nuxt in more detail and realized it could handle a lot of the features I wanted straight out of the box. </p> <p>While there has been static blogging tools like Jekyll for a while, I really like the idea of using Nuxt because it&#39;s already part of a the Javascript / VueJS eco system which I understand already. Using gems and Ruby is fairly foreign and is not something I&#39;m interested in adding to my already full plate of &quot;Full Stack&quot; skills.</p> <p>To meet the most basic needs of my personal site, I really only wanted 3 things to get going:</p> <ul> <li>Standalone files to store my site blog posts (ideally in Markdown and/or HTML)</li> <li>Meta data stored in an array (vuex)</li> <li>slug / pretty urls mapped to content</li> </ul> <p>Fortunately, doing all of this was pretty easy. The remainder of this post is going to review how I setup my personal site. Eventually I will be updating the the repository I setup [<a href=https://github.com/andreliem/vuecms>https://github.com/andreliem/vuecms</a>] to reflect the new direction of basing everythig off of Nuxt.</p> <h3 id=getting-setup>Getting Setup</h3> <p>Getting setup with Nuxt was as painless as getting setup with Vue JS using the CLI. </p> <pre><code>vue init nuxt/starter &lt;project-name&gt;\n</code></pre><pre><code>cd &lt;project-name&gt;\n$ npm install\n</code></pre><pre><code>npm run dev\n</code></pre><p>From here you can author components as you would normally to represent content on your site. With this basic setup you could blog by creating one Vue file per post.</p> <p>But what I wanted was a more streamlined approach which only relies on one single Vue file to render to posts and pulls in data from a <code>Vuex</code> store.</p> <h4 id=slug-style-blog-posts>Slug Style Blog Posts</h4> <p>WordPress popularized the pretty url format (slugs) for blog posts and is pretty important to have for SEO purposes. Doing this with Nuxt involves the following:</p> <pre><code>mkdir pages/_slug \ntouch pages/_slug/index.vue\n</code></pre><p>That&#39;s more or less it! You create a directory with an <code>_</code> prefix and then Nuxt automagically maps the routes for you.</p> <p>e.g. - <code>/i-am-a-slug</code> can be accessed in a computed property in <code>index.vue</code> as </p> <pre><code>this.$route.params.slug\n</code></pre><h4 id=vuex-for-representing-meta-data>Vuex for representing meta data</h4> <p>Nuxt provides great support for Vuex, but there&#39;s a slight difference in how you need to define your state.</p> <pre><code>export const state = () =&gt; ({\n  list: [\n    {\n      id: 1,\n      slug: &#39;hello-nuxt-markdown&#39;,\n      title: &#39;Welcome to my new site using Nuxt + MarkDown&#39;,\n      created_at: &#39;10/22/2016&#39;\n    }\n  ]\n})\n</code></pre><p>Notice how we are returning a function, it&#39;s a minor change but is needed for Vuex with Nuxt. In this above example, I have defined a basic array of JSON data to represent each post. </p> <h4 id=loading-the-post-from-vuex>Loading the Post from Vuex</h4> <p>To fetch the data from the store, I use a computed property which uses the <code>$route</code> object to get the <code>slug</code> value. Nuxt creates the routes for you so there&#39;s no work for you to do.</p> <pre><code>let post = this.$store.state.posts.list.find((post) =&gt; {\n  return (post.slug === this.$route.params.slug)\n})\n</code></pre><h4 id=mark-down-loading-parsing>Mark Down Loading + Parsing</h4> <p>I decided that Markdown would be my goto format for blog posts. Some day I might try to support others, like straight up HTML+JS Inline, but for now Markdown is a great solution that is pretty standard for static blogging.</p> <p>To accomplish this, two packages are required:</p> <pre><code>npm install marked --save\nnpm install vue-markdown --save\n</code></pre><p><code>marked</code> as it name suggests handles mark down files. This library will turn marked down content into HTML which you can output easily using the <code>v-html</code> directive.</p> <p><code>vue-markdown</code> is a file loader that you&#39;ll need to include the markdown file dynamically.</p> <h3 id=code-highlighting>Code Highlighting</h3> <p>Something that is really important for any developer blogging is having <code>&lt;pre&gt;</code> code with some syntax highlighting. A great library for this is <code>highlight.js</code>. </p> <pre><code>npm install highlight.js --save\n</code></pre><p>The trickier part is figuring out how to integrate this into the project.</p> <p>It&#39;s probably best if I put this all together in one code sample below. </p> <p><code>_slug/index.vue</code></p> <pre><code>&lt;template&gt;\n  &lt;div class=&quot;post&quot;&gt;\n    &lt;div v-html=&quot;postContent&quot;&gt;&lt;/div&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n&lt;script type=&quot;text/babel&quot;&gt;\n  import marked from &#39;marked&#39;\n  export default {\n    layout: &#39;slug&#39;,\n    computed: {\n      postContent () {\n        let post = this.$store.state.posts.list.find((post) =&gt; {\n          return (post.slug === this.$route.params.slug)\n        })\n        if (!post) {\n          return\n        }\n        marked.setOptions({\n          highlight: function (code) {\n            return require(&#39;highlight.js&#39;).highlightAuto(code).value\n          }\n        })\n        return marked(require(&#39;../../content/posts/${post.id}.md&#39;))\n      }\n    }\n  }\n&lt;/script&gt;\n</code></pre><p>This file does the following in one <code>computed</code> function.</p> <ol> <li>Find the post given the slug in the URL</li> <li>Return if it does not exist</li> <li>Integrate code syntax highlighting with <code>highlight.js</code></li> <li>Load a local markdown MD file using the <code>id</code> of the post as a unique file identifier.</li> </ol> <p>That&#39;s it! With this single file and some basic CSS integrations (I picked bootstrap) you have a basic blog:</p> <ol> <li>Create new entry in the Vuex state to represent the post.</li> <li>Create the markdown file and type away.</li> </ol> <h3 id=deploying-going-live>Deploying + Going Live</h3> <p>Once you are ready to go live, you can either deploy as a Server Rendered site (SSR) or Static. I&#39;m interested in deploying a static site, so the command to run is</p> <pre><code>npm run generate\n</code></pre><p>This crates a <code>dist</code> folder that you can upload to your hosting service. I won&#39;t go over the tools you can use here as there are some pretty neat solutions for hosting static sites... perhaps in another post. For now, all I&#39;m doing is hacking it through a github commit process. I&#39;ll look at improving that in the future but for now it serves my needs.</p> <h4 id=conclusion>Conclusion</h4> <p>There are a few more details that you will need to handle to have this all going exactly as I have it on my site, such as layouts, css imports... I&#39;ll have this all posted up as a ready to use Nuxt blog in the github repo [<a href=https://github.com/andreliem/vuecms>https://github.com/andreliem/vuecms</a>]</p> "},351:function(e,t,n){(function(t){(function(){function t(e){this.tokens=[],this.tokens.links={},this.options=e||p.defaults,this.rules=u.normal,this.options.gfm&&(this.options.tables?this.rules=u.tables:this.rules=u.gfm)}function n(e,t){if(this.options=t||p.defaults,this.links=e,this.rules=c.normal,this.renderer=this.options.renderer||new s,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=c.breaks:this.rules=c.gfm:this.options.pedantic&&(this.rules=c.pedantic)}function s(e){this.options=e||{}}function i(e){this.tokens=[],this.token=null,this.options=e||p.defaults,this.options.renderer=this.options.renderer||new s,this.renderer=this.options.renderer,this.renderer.options=this.options}function r(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function o(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function l(e,t){return e=e.source,t=t||"",function n(s,i){return s?(i=i.source||i,i=i.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(s,i),n):new RegExp(e,t)}}function a(){}function h(e){for(var t,n,s=1;s<arguments.length;s++){t=arguments[s];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}function p(e,n,s){if(s||"function"==typeof n){s||(s=n,n=null),n=h({},p.defaults,n||{});var o,l,a=n.highlight,u=0;try{o=t.lex(e,n)}catch(e){return s(e)}l=o.length;var c=function(e){if(e)return n.highlight=a,s(e);var t;try{t=i.parse(o,n)}catch(t){e=t}return n.highlight=a,e?s(e):s(null,t)};if(!a||a.length<3)return c();if(delete n.highlight,!l)return c();for(;u<o.length;u++)!function(e){"code"!==e.type?--l||c():a(e.text,e.lang,function(t,n){return t?c(t):null==n||n===e.text?--l||c():(e.text=n,e.escaped=!0,void(--l||c()))})}(o[u])}else try{return n&&(n=h({},p.defaults,n)),i.parse(t.lex(e,n),n)}catch(e){if(e.message+="\nPlease report this to https://github.com/chjj/marked.",(n||p.defaults).silent)return"<p>An error occured:</p><pre>"+r(e.message+"",!0)+"</pre>";throw e}}var u={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:a,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:a,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:a,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};u.bullet=/(?:[*+-]|\d+\.)/,u.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,u.item=l(u.item,"gm")(/bull/g,u.bullet)(),u.list=l(u.list)(/bull/g,u.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+u.def.source+")")(),u.blockquote=l(u.blockquote)("def",u.def)(),u._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",u.html=l(u.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,u._tag)(),u.paragraph=l(u.paragraph)("hr",u.hr)("heading",u.heading)("lheading",u.lheading)("blockquote",u.blockquote)("tag","<"+u._tag)("def",u.def)(),u.normal=h({},u),u.gfm=h({},u.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),u.gfm.paragraph=l(u.paragraph)("(?!","(?!"+u.gfm.fences.source.replace("\\1","\\2")+"|"+u.list.source.replace("\\1","\\3")+"|")(),u.tables=h({},u.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),t.rules=u,t.lex=function(e,n){return new t(n).lex(e)},t.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},t.prototype.token=function(e,t,n){for(var s,i,r,o,l,a,h,p,c,e=e.replace(/^ +$/gm,"");e;)if((r=this.rules.newline.exec(e))&&(e=e.substring(r[0].length),r[0].length>1&&this.tokens.push({type:"space"})),r=this.rules.code.exec(e))e=e.substring(r[0].length),r=r[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?r:r.replace(/\n+$/,"")});else if(r=this.rules.fences.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"code",lang:r[2],text:r[3]||""});else if(r=this.rules.heading.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"heading",depth:r[1].length,text:r[2]});else if(t&&(r=this.rules.nptable.exec(e))){for(e=e.substring(r[0].length),a={type:"table",header:r[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:r[3].replace(/\n$/,"").split("\n")},p=0;p<a.align.length;p++)/^ *-+: *$/.test(a.align[p])?a.align[p]="right":/^ *:-+: *$/.test(a.align[p])?a.align[p]="center":/^ *:-+ *$/.test(a.align[p])?a.align[p]="left":a.align[p]=null;for(p=0;p<a.cells.length;p++)a.cells[p]=a.cells[p].split(/ *\| */);this.tokens.push(a)}else if(r=this.rules.lheading.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"heading",depth:"="===r[2]?1:2,text:r[1]});else if(r=this.rules.hr.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"hr"});else if(r=this.rules.blockquote.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"blockquote_start"}),r=r[0].replace(/^ *> ?/gm,""),this.token(r,t,!0),this.tokens.push({type:"blockquote_end"});else if(r=this.rules.list.exec(e)){for(e=e.substring(r[0].length),o=r[2],this.tokens.push({type:"list_start",ordered:o.length>1}),r=r[0].match(this.rules.item),s=!1,c=r.length,p=0;p<c;p++)a=r[p],h=a.length,a=a.replace(/^ *([*+-]|\d+\.) +/,""),~a.indexOf("\n ")&&(h-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+h+"}","gm"),"")),this.options.smartLists&&p!==c-1&&(l=u.bullet.exec(r[p+1])[0],o===l||o.length>1&&l.length>1||(e=r.slice(p+1).join("\n")+e,p=c-1)),i=s||/\n\n(?!\s*$)/.test(a),p!==c-1&&(s="\n"===a.charAt(a.length-1),i||(i=s)),this.tokens.push({type:i?"loose_item_start":"list_item_start"}),this.token(a,!1,n),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(r=this.rules.html.exec(e))e=e.substring(r[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===r[1]||"script"===r[1]||"style"===r[1]),text:r[0]});else if(!n&&t&&(r=this.rules.def.exec(e)))e=e.substring(r[0].length),this.tokens.links[r[1].toLowerCase()]={href:r[2],title:r[3]};else if(t&&(r=this.rules.table.exec(e))){for(e=e.substring(r[0].length),a={type:"table",header:r[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:r[3].replace(/(?: *\| *)?\n$/,"").split("\n")},p=0;p<a.align.length;p++)/^ *-+: *$/.test(a.align[p])?a.align[p]="right":/^ *:-+: *$/.test(a.align[p])?a.align[p]="center":/^ *:-+ *$/.test(a.align[p])?a.align[p]="left":a.align[p]=null;for(p=0;p<a.cells.length;p++)a.cells[p]=a.cells[p].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(a)}else if(t&&(r=this.rules.paragraph.exec(e)))e=e.substring(r[0].length),this.tokens.push({type:"paragraph",text:"\n"===r[1].charAt(r[1].length-1)?r[1].slice(0,-1):r[1]});else if(r=this.rules.text.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"text",text:r[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var c={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:a,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:a,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};c._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,c._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,c.link=l(c.link)("inside",c._inside)("href",c._href)(),c.reflink=l(c.reflink)("inside",c._inside)(),c.normal=h({},c),c.pedantic=h({},c.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),c.gfm=h({},c.normal,{escape:l(c.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:l(c.text)("]|","~]|")("|","|https?://|")()}),c.breaks=h({},c.gfm,{br:l(c.br)("{2,}","*")(),text:l(c.gfm.text)("{2,}","*")()}),n.rules=c,n.output=function(e,t,s){return new n(t,s).output(e)},n.prototype.output=function(e){for(var t,n,s,i,o="";e;)if(i=this.rules.escape.exec(e))e=e.substring(i[0].length),o+=i[1];else if(i=this.rules.autolink.exec(e))e=e.substring(i[0].length),"@"===i[2]?(n=":"===i[1].charAt(6)?this.mangle(i[1].substring(7)):this.mangle(i[1]),s=this.mangle("mailto:")+n):(n=r(i[1]),s=n),o+=this.renderer.link(s,null,n);else if(this.inLink||!(i=this.rules.url.exec(e))){if(i=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(i[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(i[0])&&(this.inLink=!1),e=e.substring(i[0].length),o+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):r(i[0]):i[0];else if(i=this.rules.link.exec(e))e=e.substring(i[0].length),this.inLink=!0,o+=this.outputLink(i,{href:i[2],title:i[3]}),this.inLink=!1;else if((i=this.rules.reflink.exec(e))||(i=this.rules.nolink.exec(e))){if(e=e.substring(i[0].length),t=(i[2]||i[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){o+=i[0].charAt(0),e=i[0].substring(1)+e;continue}this.inLink=!0,o+=this.outputLink(i,t),this.inLink=!1}else if(i=this.rules.strong.exec(e))e=e.substring(i[0].length),o+=this.renderer.strong(this.output(i[2]||i[1]));else if(i=this.rules.em.exec(e))e=e.substring(i[0].length),o+=this.renderer.em(this.output(i[2]||i[1]));else if(i=this.rules.code.exec(e))e=e.substring(i[0].length),o+=this.renderer.codespan(r(i[2],!0));else if(i=this.rules.br.exec(e))e=e.substring(i[0].length),o+=this.renderer.br();else if(i=this.rules.del.exec(e))e=e.substring(i[0].length),o+=this.renderer.del(this.output(i[1]));else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),o+=this.renderer.text(r(this.smartypants(i[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(i[0].length),n=r(i[1]),s=n,o+=this.renderer.link(s,null,n);return o},n.prototype.outputLink=function(e,t){var n=r(t.href),s=t.title?r(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,s,this.output(e[1])):this.renderer.image(n,s,r(e[1]))},n.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},n.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",s=e.length,i=0;i<s;i++)t=e.charCodeAt(i),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},s.prototype.code=function(e,t,n){if(this.options.highlight){var s=this.options.highlight(e,t);null!=s&&s!==e&&(n=!0,e=s)}return t?'<pre><code class="'+this.options.langPrefix+r(t,!0)+'">'+(n?e:r(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:r(e,!0))+"\n</code></pre>"},s.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},s.prototype.html=function(e){return e},s.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},s.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},s.prototype.list=function(e,t){var n=t?"ol":"ul";return"<"+n+">\n"+e+"</"+n+">\n"},s.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},s.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},s.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},s.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},s.prototype.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},s.prototype.strong=function(e){return"<strong>"+e+"</strong>"},s.prototype.em=function(e){return"<em>"+e+"</em>"},s.prototype.codespan=function(e){return"<code>"+e+"</code>"},s.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},s.prototype.del=function(e){return"<del>"+e+"</del>"},s.prototype.link=function(e,t,n){if(this.options.sanitize){try{var s=decodeURIComponent(o(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return""}if(0===s.indexOf("javascript:")||0===s.indexOf("vbscript:"))return""}var i='<a href="'+e+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>"},s.prototype.image=function(e,t,n){var s='<img src="'+e+'" alt="'+n+'"';return t&&(s+=' title="'+t+'"'),s+=this.options.xhtml?"/>":">"},s.prototype.text=function(e){return e},i.parse=function(e,t,n){return new i(t,n).parse(e)},i.prototype.parse=function(e){this.inline=new n(e.links,this.options,this.renderer),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},i.prototype.next=function(){return this.token=this.tokens.pop()},i.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},i.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},i.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,s,i="",r="";for(n="",e=0;e<this.token.header.length;e++)({header:!0,align:this.token.align[e]}),n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(i+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",s=0;s<t.length;s++)n+=this.renderer.tablecell(this.inline.output(t[s]),{header:!1,align:this.token.align[s]});r+=this.renderer.tablerow(n)}return this.renderer.table(i,r);case"blockquote_start":for(var r="";"blockquote_end"!==this.next().type;)r+=this.tok();return this.renderer.blockquote(r);case"list_start":for(var r="",o=this.token.ordered;"list_end"!==this.next().type;)r+=this.tok();return this.renderer.list(r,o);case"list_item_start":for(var r="";"list_item_end"!==this.next().type;)r+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(r);case"loose_item_start":for(var r="";"list_item_end"!==this.next().type;)r+=this.tok();return this.renderer.listitem(r);case"html":var l=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(l);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},a.exec=a,p.options=p.setOptions=function(e){return h(p.defaults,e),p},p.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new s,xhtml:!1},p.Parser=i,p.parser=i.parse,p.Renderer=s,p.Lexer=t,p.lexer=t.lex,p.InlineLexer=n,p.inlineLexer=n.output,p.parse=p,e.exports=p}).call(function(){return this||("undefined"!=typeof window?window:t)}())}).call(t,n(20))},354:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"post"},[n("div",{domProps:{innerHTML:e._s(e.postContent)}})])},staticRenderFns:[]}},359:function(e,t,n){var s=n(348);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);n(14)("07a1a9e1",s,!0)}});