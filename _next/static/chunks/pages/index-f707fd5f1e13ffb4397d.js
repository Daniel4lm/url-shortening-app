(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9247:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return b}});var n=r(4476),o=r.n(n),s=r(485),a=r.n(s),i=r(5893),c=function(t){var e=t.title,r=t.text,n=t.icon;return(0,i.jsxs)("div",{className:a().card,children:[(0,i.jsx)("div",{className:a().card_Icon,children:(0,i.jsx)("img",{src:"".concat("/url-shortening-app","/").concat(n),alt:"Icon"})}),(0,i.jsx)("p",{className:a().card_Title,children:e}),(0,i.jsx)("span",{className:a().card_Text,children:r})]})};function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function _(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e,r,n,o,s,a){try{var i=t[s](a),c=i.value}catch(l){return void r(l)}i.done?e(c):Promise.resolve(c).then(n,o)}var h=r(809),d=r.n(h),m=r(7294),p=r(590),f=r(6825),g=r.n(f),v=function(){var t=(0,m.useState)(""),e=t[0],r=t[1],n=(0,m.useState)(!1),o=n[0],s=n[1],a=(0,m.useState)(!1),c=a[0],l=a[1],h=(0,m.useState)(""),f=h[0],v=h[1],x=(0,m.useState)(!1),b=x[0],j=x[1],S=(0,m.useState)(""),y=S[0],k=S[1],w=(0,m.useState)([]),N=w[0],F=w[1],I=(0,p.bp)().validateUrl;(0,m.useEffect)((function(){F(localStorage.getItem("shortenArray")?JSON.parse(localStorage.getItem("shortenArray")||"{}"):[])}),[]);var C=function(t){return N.find((function(e){return e.shortValue===t}))},T=function(){var t,n=(t=d().mark((function t(n){var o,a,i,c;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!(0===e.length||e.length<=8)){t.next=7;break}return s(!0),k("Please add a link"),t.abrupt("return");case 7:if(I(e)){t.next=11;break}return s(!0),k("Please add a valid link"),t.abrupt("return");case 11:return s(!1),k(""),t.prev=13,l(!0),t.next=17,fetch("https://api.shrtco.de/v2/shorten?url=".concat(e));case 17:return o=t.sent,t.next=20,o.json();case 20:if(a=t.sent,i=a.result,!C(i.full_short_link3)){t.next=24;break}return t.abrupt("return");case 24:c=[].concat(_(N),[{value:"https://".concat(e),shortValue:i.full_short_link3}]),F(c),localStorage.setItem("shortenArray",JSON.stringify(c)),l(!1),r(""),t.next=34;break;case 31:t.prev=31,t.t0=t.catch(13),k("Error: ".concat(null===t.t0||void 0===t.t0?void 0:t.t0.message));case 34:case"end":return t.stop()}}),t,null,[[13,31]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var s=t.apply(e,r);function a(t){u(s,n,o,a,i,"next",t)}function i(t){u(s,n,o,a,i,"throw",t)}a(void 0)}))});return function(t){return n.apply(this,arguments)}}();return(0,i.jsxs)("div",{className:g().form_Wrapper,children:[(0,i.jsxs)("form",{className:g().shorten_Form,onSubmit:T,children:[(0,i.jsx)("input",{type:"text",name:"shortenInput",className:o?"".concat(g().shorten_Input," ").concat(g().error):g().shorten_Input,placeholder:"Shorten a link here...",onChange:function(t){var e=t.target.value;r(e),s(!1)},value:e}),(0,i.jsx)("span",{className:o?"".concat(g().error_Msg," ").concat(g().show):g().error_Msg,children:y}),(0,i.jsx)("input",{className:g().shorten_Button,type:"submit",value:c?"Processing":"Shorten It!"})]}),(0,i.jsx)("ul",{className:g().shortenList,children:N&&N.map((function(t){return(0,i.jsxs)("li",{children:[(0,i.jsx)("p",{className:g().url_Orig,children:t.value}),(0,i.jsxs)("div",{className:g().short_Part,children:[(0,i.jsx)("p",{className:g().url_Short,children:t.shortValue}),(0,i.jsx)("a",{className:b&&f===t.shortValue?"copy__button.round.thin.copied":"copy__button.round.thin",onClick:function(){return e=t.shortValue,navigator.clipboard.writeText(e),j(!0),void v(e);var e},children:b&&f===t.shortValue?"Copied!":"Copy"})]})]},t.shortValue)}))})]})},x=[{id:0,title:"Brand Recognition",text:"Boost your brand recognition with each click. Generic links don\u2019t mean a thing. Branded links help instil confidence in your content.",icon:"/images/icon-brand-recognition.svg"},{id:1,title:"Detailed Records",text:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",icon:"/images/icon-detailed-records.svg"},{id:2,title:"Fully Customizable",text:"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",icon:"/images/icon-fully-customizable.svg"}],b=function(){return(0,i.jsxs)("div",{className:o().home_Container,children:[(0,i.jsxs)("section",{className:o().more_About,children:[(0,i.jsxs)("div",{className:o().more_Left,children:[(0,i.jsx)("h1",{children:"More than just shorter links"}),(0,i.jsx)("p",{children:"Build your brand\u2019s recognition and get detailed insights on how your links are performing."}),(0,i.jsx)("a",{className:"info__button",children:"Get Started"})]}),(0,i.jsx)("div",{className:o().working_Img,children:(0,i.jsx)("img",{src:"".concat("/url-shortening-app","/images/illustration-working.svg"),alt:"illustration-working"})})]}),(0,i.jsxs)("section",{className:o().url_Form,children:[(0,i.jsx)(v,{}),(0,i.jsxs)("div",{className:o().site_Statistic,children:[(0,i.jsx)("h1",{className:"".concat(o().site_Title," ").concat(o().dark),children:"Advanced Statistics"}),(0,i.jsx)("p",{children:"Track how your links are performing across the web with our advanced statistics dashboard."})]}),(0,i.jsx)("div",{className:o().cards_List,children:x.map((function(t){return(0,i.jsx)(c,{title:t.title,text:t.text,icon:t.icon},t.id)}))})]}),(0,i.jsxs)("section",{className:o().boost_Links,children:[(0,i.jsx)("h1",{className:"".concat(o().site_Title," ").concat(o().white),children:"Boost your links today"}),(0,i.jsx)("a",{className:"info__button",children:"Get Started"})]})]})}},5301:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(9247)}])},485:function(t){t.exports={card:"PresentationCard_card__3tFEd",card_Icon:"PresentationCard_card_Icon__2mFXb",card_Title:"PresentationCard_card_Title__1OTbj",card_Text:"PresentationCard_card_Text__2yN6L"}},6825:function(t){t.exports={form_Wrapper:"ShortenForm_form_Wrapper__33N2_",shorten_Form:"ShortenForm_shorten_Form__akJsT",shorten_Input:"ShortenForm_shorten_Input__KCPjS",error:"ShortenForm_error__VfUgg",error_Msg:"ShortenForm_error_Msg__2nGfw",show:"ShortenForm_show__1LUR0",shorten_Button:"ShortenForm_shorten_Button__2vg-m",shortenList:"ShortenForm_shortenList__Na7AJ",short_Part:"ShortenForm_short_Part__CWVW5",url_Orig:"ShortenForm_url_Orig__GaNty",url_Short:"ShortenForm_url_Short__2ojEb"}},4476:function(t){t.exports={home_Container:"Home_home_Container__1c83C",more_About:"Home_more_About__1G-fZ",more_Left:"Home_more_Left__36GLl",working_Img:"Home_working_Img__o5gTt",url_Form:"Home_url_Form__LgK3b",site_Statistic:"Home_site_Statistic__2KMWx",site_Title:"Home_site_Title__22tYA",dark:"Home_dark__2t7S6",white:"Home_white__Aw9X7",cards_List:"Home_cards_List__1XfS_",boost_Links:"Home_boost_Links__1qjp5"}}},function(t){t.O(0,[774,888,179],(function(){return e=5301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);