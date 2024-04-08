"use strict";(self.webpackChunkv61265_blog=self.webpackChunkv61265_blog||[]).push([[656],{1173:function(e,t,l){l.d(t,{p:function(){return i},A:function(){return s}});var n=l(6540),a=l(557),r=l(6835),c=l(3328),m=l(7715),u=l(7169);var E=e=>{let{post:t}=e;return null};const d=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var o=e=>{let{data:{post:t},children:l}=e;return(0,a.Y)(c.A,null,(0,a.Y)(r.DZ,{as:"h1",variant:"styles.h1"},t.title),(0,a.Y)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.Y)("time",null,t.date),t.tags&&(0,a.Y)(n.Fragment,null," — ",(0,a.Y)(m.A,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.Y)("span",null,t.timeToRead," min read")),(0,a.Y)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:d.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},l),(0,a.Y)(E,{post:t}))};const i=e=>{var t,l,n;let{data:{post:r}}=e;return(0,a.Y)(u.A,{title:r.title,description:r.description?r.description:r.excerpt,image:r.banner?null===(t=r.banner)||void 0===t||null===(l=t.childImageSharp)||void 0===l||null===(n=l.resize)||void 0===n?void 0:n.src:void 0,pathname:r.slug,canonicalUrl:r.canonicalUrl})};function s(e){let{...t}=e;return n.createElement(o,t)}},7715:function(e,t,l){var n=l(557),a=l(6540),r=l(4194),c=l(3601),m=l(2174);t.A=e=>{let{tags:t}=e;const{tagsPath:l,basePath:u}=(0,c.A)();return(0,n.Y)(a.Fragment,null,t.map(((e,t)=>(0,n.Y)(a.Fragment,{key:e.slug},!!t&&", ",(0,n.Y)(r.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,m.A)("/"+u+"/"+l+"/"+e.slug)},e.name)))))}},7169:function(e,t,l){var n=l(6540),a=l(4194),r=l(7533);t.A=e=>{let{title:t="",description:l="",pathname:c="",image:m="",children:u=null,canonicalUrl:E=""}=e;const d=(0,r.A)(),{siteTitle:o,siteTitleAlt:i,siteUrl:s,siteDescription:p,siteImage:b,author:h,siteLanguage:g}=d,f={title:t?t+" | "+o:i,description:l||p,url:""+s+(c||""),image:""+s+(m||b)};return n.createElement(n.Fragment,null,n.createElement("html",{lang:g}),n.createElement("title",null,f.title),n.createElement("meta",{name:"description",content:f.description}),n.createElement("meta",{name:"image",content:f.image}),n.createElement("meta",{property:"og:title",content:f.title}),n.createElement("meta",{property:"og:url",content:f.url}),n.createElement("meta",{property:"og:description",content:f.description}),n.createElement("meta",{property:"og:image",content:f.image}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{property:"og:image:alt",content:f.description}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:title",content:f.title}),n.createElement("meta",{name:"twitter:url",content:f.url}),n.createElement("meta",{name:"twitter:description",content:f.description}),n.createElement("meta",{name:"twitter:image",content:f.image}),n.createElement("meta",{name:"twitter:image:alt",content:f.description}),n.createElement("meta",{name:"twitter:creator",content:h}),n.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),n.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),n.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),n.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),E?n.createElement("link",{rel:"canonical",href:E}):null,u)}},6035:function(e,t,l){l.r(t),l.d(t,{Head:function(){return m.p},default:function(){return u}});var n=l(6540),a=l(8453);function r(e){const t=Object.assign({h3:"h3",p:"p",a:"a",br:"br",code:"code",pre:"pre",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h5:"h5",strong:"strong",span:"span"},(0,a.RP)(),e.components);return n.createElement(n.Fragment,null,n.createElement(t.h3,null,"JavaScript 是什麼？"),"\n",n.createElement(t.p,null,"是一套程式語言，因為幾乎沒有程式基礎，此時先了解 ",n.createElement(t.a,{href:"https://hackmd.io/6IxGWa3eQtGWWCeIC8yZOA?both/"},"性質")," 也沒有太多意義。因此就直接開始吧。"),"\n",n.createElement(t.h3,null,"安裝環境： Node.js"),"\n",n.createElement(t.p,null,"下載方法： ",n.createElement(t.a,{href:"https://nodejs.org/en/"},"官網"),n.createElement(t.br),"\n","安裝完成後在 Command Line 輸入 ",n.createElement(t.code,null,"node -v")," ，如果成功會出現版本號，如："),"\n",n.createElement(t.pre,null,n.createElement(t.code,null,"$ node -v\nv14.4.0\n")),"\n",n.createElement(t.p,null,"在 Commend Line 輸入 ",n.createElement(t.code,null,"node")," ，即可進入編輯模式，之後按 ",n.createElement(t.code,null,"Ctrl + C")," 離開。也可以用 ",n.createElement(t.code,null,"node + 檔案名稱")," 進入 vim 編輯器編輯 .js 檔案。"),"\n",n.createElement(t.h3,null,"Hello World"),"\n",n.createElement(t.p,null,"如果想要讓結果顯示出 ",n.createElement(t.code,null,"Hello World")," ，可以使用："),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-js"},"console.log(欲顯示文字);\n")),"\n",n.createElement(t.p,null,"如果想顯示數字可以直接輸入，但如果想顯示字串（之後會介紹分類），要記得字串前後加單引號 ",n.createElement(t.code,null,"'"),"　或雙引號 ",n.createElement(t.code,null,'"')," 。"),"\n",n.createElement(t.h3,null,"基本運算"),"\n",n.createElement(t.p,null,"通常是從右到左運算，另外像是先乘除後加減之類的，運算符號之間也有 ",n.createElement(t.a,{href:"https://www.fooish.com/javascript/operator.html"},"優先順序")," 。但保險起見，可以用小括號 ",n.createElement(t.code,null,"()")," 標示出要先算的地方。"),"\n",n.createElement(t.h4,null,"數學運算"),"\n",n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"符號"),n.createElement(t.th,null,"功能"),n.createElement(t.th,null,"例子"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,"+"),n.createElement(t.td,null,"加"),n.createElement(t.td,null,"4 + 3 > 7")),n.createElement(t.tr,null,n.createElement(t.td,null,"-"),n.createElement(t.td,null,"減"),n.createElement(t.td,null,"5 - 2 > 3")),n.createElement(t.tr,null,n.createElement(t.td,null,"*"),n.createElement(t.td,null,"乘"),n.createElement(t.td,null,"3 * 7 > 21")),n.createElement(t.tr,null,n.createElement(t.td,null,"/"),n.createElement(t.td,null,"除"),n.createElement(t.td,null,"10 / 2 > 5")),n.createElement(t.tr,null,n.createElement(t.td,null,"%"),n.createElement(t.td,null,"餘數"),n.createElement(t.td,null,"7 % 3 > 1")))),"\n",n.createElement(t.h4,null,"邏輯運算"),"\n",n.createElement(t.h5,null,"邏輯運算可放什麼"),"\n",n.createElement(t.p,null,"一般來說就是放可以對應到真假值的運算（如 ",n.createElement(t.code,null,"true")," 或 ",n.createElement(t.code,null,"4 - 3 == 1"),"）。另外若在 or 和 and 放數字或字串，會顯示 ",n.createElement(t.strong,null,"誰決定句子真假"),"。"),"\n",n.createElement(t.h5,null,"or"),"\n",n.createElement(t.p,null,"JavaScript 中的 or 是用 ",n.createElement(t.code,null,"||")," 表示。",n.createElement(t.br),"\n","以下是 a || b 的真值表：（用 0 表示 false ， 1 表示 true）"),"\n",n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"a"),n.createElement(t.th,null,"b"),n.createElement(t.th,null,"a or b"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,"1"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"1")),n.createElement(t.tr,null,n.createElement(t.td,null,"1"),n.createElement(t.td,null,"0"),n.createElement(t.td,null,"1")),n.createElement(t.tr,null,n.createElement(t.td,null,"0"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"1")),n.createElement(t.tr,null,n.createElement(t.td,null,"0"),n.createElement(t.td,null,"0"),n.createElement(t.td,null,"0")))),"\n",n.createElement(t.pre,null,n.createElement(t.code,null,"> true || true\ntrue\n> true || false\ntrue\n> false || true\ntrue\n> false || false\nfalse\n")),"\n",n.createElement(t.p,null,n.createElement(t.strong,null,"誰決定句子真假："),n.createElement(t.br),"\n","通常除了 0、null 以外幾乎所有字都對應到 true。",n.createElement(t.br),"\n","上方真值表可看出，若前者為真，後面不管是誰都無所謂；但若前者為假，句子的真假則由後者決定。因此："),"\n",n.createElement(t.pre,null,n.createElement(t.code,null,"> 33 || 10\n33\n> 33 || 0\n33\n> 0 || 33\n33\n> 0 || 0\n0\n")),"\n",n.createElement(t.h5,null,"and"),"\n",n.createElement(t.p,null,"JavaScript 中的 and 是用 ",n.createElement(t.code,null,"&&")," 表示。",n.createElement(t.br),"\n","以下是 a && b 的真值表：（用 0 表示 false ， 1 表示 true）"),"\n",n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"a"),n.createElement(t.th,null,"b"),n.createElement(t.th,null,"a && b"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,"1"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"1")),n.createElement(t.tr,null,n.createElement(t.td,null,"1"),n.createElement(t.td,null,"0"),n.createElement(t.td,null,"0")),n.createElement(t.tr,null,n.createElement(t.td,null,"0"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"0")),n.createElement(t.tr,null,n.createElement(t.td,null,"0"),n.createElement(t.td,null,"0"),n.createElement(t.td,null,"0")))),"\n",n.createElement(t.pre,null,n.createElement(t.code,null,"> true && true\ntrue\n> true && false\nfalse\n> false && true\nfalse\n> false && false\nfalse\n")),"\n",n.createElement(t.p,null,n.createElement(t.strong,null,"誰決定句子真假："),n.createElement(t.br),"\n","上方真值表可看出，若前者為真，後者的真假會決定句子的真假；但若前者為假，無論後者真假，句子都是假的。因此："),"\n",n.createElement(t.pre,null,n.createElement(t.code,null,"> 33 && 10\n10\n> 33 && 0\n0\n> 0 && 33\n0\n> 0 && 0\n0\n")),"\n",n.createElement(t.h5,null,"not"),"\n",n.createElement(t.p,null,"JavaScript 中的 not 是用 ",n.createElement(t.code,null,"!")," 表示。",n.createElement(t.br),"\n","以下是 !a 的真值表：（用 0 表示 false ， 1 表示 true）"),"\n",n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"a"),n.createElement(t.th,null,"!a"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,"1"),n.createElement(t.td,null,"0")),n.createElement(t.tr,null,n.createElement(t.td,null,"0"),n.createElement(t.td,null,"1")))),"\n",n.createElement(t.pre,null,n.createElement(t.code,null,"> ! true\nfalse\n> ! false\ntrue\n")),"\n",n.createElement(t.p,null,n.createElement(t.strong,null,"後面放其他東西的話："),n.createElement(t.br),"\n","會將字轉換成真假值後直接顯示真假值"),"\n",n.createElement(t.pre,null,n.createElement(t.code,null,"> ! 882\nfalse\n> ! 0\ntrue\n")),"\n",n.createElement(t.h3,null,"位元運算"),"\n",n.createElement(t.p,null,"二進位法是電腦最原始的形式，因此直接使用二進位法溝通是最有效率的。",n.createElement(t.br),"\n",n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 29.166666666666668%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAsElEQVR42nWQ6QqEMAyEff/nFPwjnq23Zv0GZikLK5QxTeZoqm3b4nniPU/s+y48jiPu+1ZdIvdlH+66ruGPXpVSiuu64jzPSDnrP+dFpGVZdP+LcOjP8xzTNInjU43jKHUcaYIQIOLuJLiD1G3bSrBM9k3YNI0EGETATwIRBX/vXWPQdZ1q0qIhQSezq3f5D0vhYRgkjKCeXNd19H2vwoPsCgOjhbwCz+V353CdEMEPycXWAyayLUcAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt=" "\n        title=""\n        src="/static/b7039310bdb39c3fb3e3bae18b5dbafc/7d769/table.png"\n        srcset="/static/b7039310bdb39c3fb3e3bae18b5dbafc/5243c/table.png 240w,\n/static/b7039310bdb39c3fb3e3bae18b5dbafc/ab158/table.png 480w,\n/static/b7039310bdb39c3fb3e3bae18b5dbafc/7d769/table.png 960w,\n/static/b7039310bdb39c3fb3e3bae18b5dbafc/c9863/table.png 1256w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",n.createElement(t.a,{href:"https://hackmd.io/6IxGWa3eQtGWWCeIC8yZOA?both/"},"資料來源")),"\n",n.createElement(t.h4,null,"左右位移"),"\n",n.createElement(t.p,null,"二進位的 0100 是 2 的 3 次方、1000 是 2 的 4 次方。可推斷往左移就是乘以二的幾次方，右移則是除以二的幾次方。",n.createElement(t.br),"\n",n.createElement(t.code,null,"<<")," ：左移。",n.createElement(t.br),"\n",n.createElement(t.code,null,">>")," ：右移。"),"\n",n.createElement(t.pre,null,n.createElement(t.code,null,"> 10 << 1   #10 左移一次（乘以 2 一次)\n20\n> 8 >> 2    #8 右移兩次（除以 2 兩次，也就是除以 4）\n2\n")),"\n",n.createElement(t.h4,null,"位元運算"),"\n",n.createElement(t.p,null,"概念：將兩個數字拆成位元，每個位置再各自使用邏輯規則比對出新的位元，最後轉換回數字。"),"\n",n.createElement(t.h5,null,"and"),"\n",n.createElement(t.p,null,"位元運算的 and 用 ",n.createElement(t.code,null,"&"),"表示。",n.createElement(t.br),"\n","例如 ",n.createElement(t.code,null,"10 & 15")," 會輸出 0 。"),"\n",n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"數字"),n.createElement(t.th,null,"8"),n.createElement(t.th,null,"4"),n.createElement(t.th,null,"2"),n.createElement(t.th,null,"1"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,"10"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"0"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"0")),n.createElement(t.tr,null,n.createElement(t.td,null,"15"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"1")),n.createElement(t.tr,null,n.createElement(t.td,null,"10 & 15"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"0"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"0")))),"\n",n.createElement(t.p,null,n.createElement(t.strong,null,"位元遮罩："),n.createElement(t.br),"\n","因為 1 只有最後一位有數字，如果某數 ",n.createElement(t.code,null,"a & 1")," 等於一，表示 a 轉換位元後在 1 的位置上有數字，也就是說他是奇數。"),"\n",n.createElement(t.h5,null,"or"),"\n",n.createElement(t.p,null,"位元運算的 and 用 ",n.createElement(t.code,null,"|"),"表示。",n.createElement(t.br),"\n","例如 ",n.createElement(t.code,null,"10 | 15")," 會輸出 15 。"),"\n",n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"數字"),n.createElement(t.th,null,"8"),n.createElement(t.th,null,"4"),n.createElement(t.th,null,"2"),n.createElement(t.th,null,"1"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,"10"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"0"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"0")),n.createElement(t.tr,null,n.createElement(t.td,null,"15"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"1")),n.createElement(t.tr,null,n.createElement(t.td,null,"10 & 15"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"1")))),"\n",n.createElement(t.h5,null,"xor"),"\n",n.createElement(t.p,null,"位元運算的 and 用 ",n.createElement(t.code,null,"^"),"表示。",n.createElement(t.br),"\n","xor 的真值表如下："),"\n",n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"a"),n.createElement(t.th,null,"b"),n.createElement(t.th,null,"a ^ b"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,"1"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"0")),n.createElement(t.tr,null,n.createElement(t.td,null,"1"),n.createElement(t.td,null,"0"),n.createElement(t.td,null,"1")),n.createElement(t.tr,null,n.createElement(t.td,null,"0"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"1")),n.createElement(t.tr,null,n.createElement(t.td,null,"0"),n.createElement(t.td,null,"0"),n.createElement(t.td,null,"0")))),"\n",n.createElement(t.p,null,"因此",n.createElement(t.code,null,"10 ^ 15")," 會輸出 5 。"),"\n",n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"數字"),n.createElement(t.th,null,"8"),n.createElement(t.th,null,"4"),n.createElement(t.th,null,"2"),n.createElement(t.th,null,"1"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,"10"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"0"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"0")),n.createElement(t.tr,null,n.createElement(t.td,null,"15"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"1")),n.createElement(t.tr,null,n.createElement(t.td,null,"10 & 15"),n.createElement(t.td,null,"0"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"0"),n.createElement(t.td,null,"1")))),"\n",n.createElement(t.h5,null,"not"),"\n",n.createElement(t.p,null,"位元運算的 not 用 ",n.createElement(t.code,null,"~")," 表示。",n.createElement(t.br),"\n","不過因為 10 的位元 並不只有 ",n.createElement(t.code,null,"1010")," ，而是 ",n.createElement(t.code,null,"00000(略)1010")," ，因此 ",n.createElement(t.code,null,"~10")," 等於 -16 。"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.RP)(),e.components);return t?n.createElement(t,e,n.createElement(r,e)):r(e)},m=l(1173);function u(e){return n.createElement(m.A,e,n.createElement(c,e))}m.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-給自己看的-java-script-基礎-運算-index-mdx-4ed6897f6550b1ea1a25.js.map