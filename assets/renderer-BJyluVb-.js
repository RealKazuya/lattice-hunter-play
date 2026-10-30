import{E as e,O as t,S as n,T as r,U as i,_t as a,a as o,bt as s,dt as c,ft as l,gt as u,ht as d,i as f,it as p,lt as m,mt as h,n as g,nt as _,o as v,pt as y,st as b,y as x}from"./globSources-u6jNjs33.js";import{Q as S,Z as C,nn as w,tn as T,u as E,wn as D}from"./game-tflpGZzQ.js";function O(e,t){return{width:e,height:t,data:new Uint8Array(e*t*4)}}function k(e){let t=Number.parseInt(e.replace(`#`,``),16);return[t>>16&255,t>>8&255,t&255]}function A(e,t){let n=e=>Math.max(0,Math.min(255,Math.round(e*t)));return[n(e[0]),n(e[1]),n(e[2])]}function ee(e,t,n){let r=(e,t)=>Math.round(e+(t-e)*n);return[r(e[0],t[0]),r(e[1],t[1]),r(e[2],t[2])]}function j(e,t,n){let r=Math.imul(e|0,374761393)^Math.imul(t|0,668265263)^Math.imul(n|0,1442695041);return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296}function M(e,t,n,r,i=255){if(t<0||n<0||t>=e.width||n>=e.height)return;let a=(n*e.width+t)*4;e.data[a]=r[0],e.data[a+1]=r[1],e.data[a+2]=r[2],e.data[a+3]=i}function N(e,t,n,r,i){return A(e,1+(j(t,n,r)*2-1)*i)}function te(e,t,n,r,i,a,o=A(i,1.5)){let{x:s,y:c,w:l,h:u}=n;for(let n=0;n<u;n++)for(let d=0;d<l;d++){let f=s+d,p=c+n;M(e,f,p,ne(r,i,o,d,n,l,u,a,e=>{t&&M(t,f,p,e)}))}}function ne(e,t,n,r,i,a,o,s,c){let l=j(r,i,s);switch(e){case`skin`:return N(t,r,i,s,.04);case`hair`:{let e=(r+Math.floor(j(r,0,s)*3))%3==0?.82:1;return A(N(t,r,i>>1,s,.08),e)}case`cloth`:{let e=o>4&&i===o-1?.78:1,n=(r+i)%2==0?1.03:.98;return A(N(t,r,i,s,.06),e*n)}case`cloak`:{let e=r%3==0?.84:r%3==1?1.04:.96;return A(N(t,r,i,s,.05),e)}case`metal`:{let e=i===0||r===0?1.22:i===o-1||r===a-1?.72:1-.04*(r+i&1);return a>=6&&o>=6&&(r===1||r===a-2)&&(i===1||i===o-2)?A(t,1.35):A(N(t,r,i,s,.03),e)}case`trim`:{let e=i===0||i===o-1?.8:(r+2*i)%5==0?1.15:1;return A(N(t,r,i,s,.07),e)}case`hide`:{let e=j(r>>1,i>>1,s+7)>.78?.8:1;return A(N(t,r,i,s,.1),e)}case`horn`:{let e=i%3==0?.82:1;return A(N(t,r,i,s,.05),e)}case`crystal`:{let e=A(t,(r+i)%4==0?1.35:(r-i+64)%4==0?.85:1);return c(A(e,.85)),e}case`blade`:{let e=r===a-1||i===0?1.25:r===0?.86:1;return A(N(t,r,i,s,.02),e)}case`eye`:return c(t),t;case`flame`:{let e=ee(t,[255,245,200],i<o/2?.5*l:0);return c(e),e}case`stone`:{let e=j(r,i>>1,s+3)>.93?.72:1;return A(N(t,r,i,s,.09),e)}case`deep`:return A(N(t,r,i,s,.12),.6);case`cobble`:{let e=(r+Math.floor(j(0,i>>2,s)*3))%4,n=i%4,a=e===0||n===0?.66:1,o=.9+j(r+1>>2,i>>2,s+1)*.25;return A(N(t,r,i,s,.06),a*o)}case`dirt`:{let e=l>.9?1.25:l<.08?.75:1;return A(N(t,r,i,s+1,.1),e)}case`ore`:{let e=ie(r,i,a,o,s);if(e>0){let n=e===2?A(t,1.4):t;return c(A(n,.9)),n}return A(N([118,118,124],r,i,s,.09),1)}case`planks`:{let e=i%4==3?.68:1,n=(r+Math.floor(i/4)*5)%8==0&&i%4!=3?.78:1,a=j(r>>2,i,s)>.7?.92:1;return A(N(t,r,i,s,.05),e*n*a)}case`wood`:{let e=j(r,3,s)>.68?.84:1,n=j(r>>1,i>>1,s+5)>.95?.66:1;return A(N(t,r,i>>2,s,.06),e*n)}case`sack`:{let e=(r+(i>>1))%2==0?1.05:.93,n=(r===0||r===a-1)&&i%2==0?.74:1;return A(N(t,r,i,s,.07),e*n)}case`rope`:{let e=(r+i)%3==0?.76:(r+i)%3==1?1.08:1;return A(N(t,r,i,s,.05),e)}case`golem`:{if(re(r,i,a,o,s)){let e=A(n,.95+.25*l);return c(A(e,.8)),e}let e=j(r,i>>1,s+3)>.94?.74:1;return A(N(t,r,i,s,.1),e)}case`geode`:{let e=j(r-i+96>>1,r+i>>2,s+9)>.86&&(r+i)%2==0;if(e||i===0&&r<a-1||r===0&&i<o-1){let n=A(t,1.32);return c(A(n,e?.8:.45)),n}let n=r===a-1||i===o-1?.62:1,l=(r+2*i)%7==0?.86:(r-i+70)%9==0?1.1:.95;return A(N(t,r,i,s,.05),n*l*.88)}case`leaves`:{let e=j(r>>1,i>>1,s+11),n=e>.7?1.18:e<.18?.7:1;return A(N(t,r,i,s,.08),n)}case`glowLeaves`:if(j(r>>1,i>>1,s+41)>.9){let e=(r+i)%2==0?A(n,1.2):n;return c(A(e,.9)),e}return ne(`leaves`,t,n,r,i,a,o,s,c);case`bark`:{let e=(r+Math.floor(j(r>>2,i>>3,s)*2))%4,n=e===0?.68:e===1?1.12:1;return A(N(t,r,i>>1,s,.06),n)}case`grass`:{let e=j(r,i>>2,s+3),n=(i+Math.floor(e*4))%4==0?1.2:1,a=e<.2?.82:1;return A(N(t,r,i,s,.07),n*a)}case`moss`:{let e=.92+j(r>>2,i>>2,s+5)*.16;return A(N(t,r,i,s,.05),e)}case`petals`:return j(r>>1,i>>1,s+17)>.93?(r+i)%2==0?A(n,1.25):n:ne(`grass`,t,n,r,i,a,o,s,c);case`plate`:{let e=Math.floor((a-1)/2);if(a>=3&&(r===e||a>=8&&r===e+1)&&i>0&&i<o-1)return c(A(n,.85)),n;let l=i===0||r===0?1.2:i===o-1||r===a-1?.7:1;return A(N(t,r,i,s,.04),l)}}}function re(e,t,n,r,i){let a=1+Math.floor(j(2,9,i)*2);for(let o=0;o<a;o++){let a=j(o,21,i)>.5,s=a?e:t,c=a?r:n,l=Math.floor(j(o,23,i)*c);for(let e=0;e<s;e++){let t=j(e,o*7+29,i);t>.7?l++:t<.3&&l--}if((a?t:e)===l)return!0}return!1}function ie(e,t,n,r,i){let a=2+Math.floor(j(1,1,i)*3);for(let o=0;o<a;o++){let a=Math.floor(j(o,11,i)*n),s=Math.floor(j(o,13,i)*r),c=Math.max(1,Math.round((n+r)/16)),l=e-a,u=t-s;if(l===0&&u===0)return 2;if(l*l+u*u<=c*c)return 1}return 0}function ae(e,t,n,r,i){let{x:a,y:o,w:s,h:c}=n,l=Math.max(1,Math.round(c*.3)),u=+(s>=6),d=Math.min(c-1,l+Math.max(0,Math.round(c*.12))),f=s>=10?2:1,p=Math.max(u,Math.round(s*.25)-(f>>1)),m=Math.min(s-1-u-(f-1),s-1-p-(f-1));for(let n=0;n<c;n++)for(let h=0;h<s;h++){let g=n<l||h<u||h>=s-u?A(N(r.hood,h,n,i,.05),n===l-1?.8:1):N(r.skin,h,n,i,.04);n===d&&(h>=p&&h<p+f||h>=m&&h<m+f)&&(g=r.eye,t&&M(t,a+h,o+n,r.eye)),c>=8&&n===d+Math.max(2,Math.round(c*.25))&&h>s*.35&&h<s*.65&&(g=A(r.skin,.7)),M(e,a+h,o+n,g)}}function oe(e,t,n,r){te(e,null,t,`sack`,n.sack,r);let{x:i,y:a,w:o,h:s}=t,c=Math.round(s*.38),l=+(o>=10);for(let t of[Math.round(o*.3),o-1-Math.round(o*.3)])for(let r=-l;r<=l;r++)M(e,i+t+r,a+c+r,n.stitch),M(e,i+t+r,a+c-r,n.stitch);let u=Math.round(s*.72);for(let t=Math.round(o*.3);t<=o-1-Math.round(o*.3);t++)M(e,i+t,a+u-t%2,n.stitch)}function se(e,t,n,r,i){te(e,t,n,`golem`,r.stone,i,r.vein);let{x:a,y:o,w:s,h:c}=n,l=Math.round(c*.42),u=c>=12?2:1,d=Math.round(s*.16),f=s-1-d,p=(n,i,s)=>{M(e,a+n,o+i,A(r.stone,s)),t&&M(t,a+n,o+i,[0,0,0])};for(let e=d-1;e<=f+1;e++)p(e,l-1,.45);for(let n=0;n<u;n++)for(let i=d;i<=f;i++){let s=i===d||i===f?A(r.eye,.75):r.eye;M(e,a+i,o+l+n,s),t&&M(t,a+i,o+l+n,s)}let m=Math.round(c*.76);for(let e=Math.round(s*.3);e<=s-1-Math.round(s*.3);e++)p(e,m,e%2==0?.4:.6)}function ce(e,t,n,r,i){te(e,t,n,`geode`,r.crystal,i);let{x:a,y:o,w:s,h:c}=n,l=(s-1)/2,u=Math.max(2,Math.round(s*.16)),d=Math.round(c*.16),f=d+u*2+1;for(let n=0;n<c;n++)for(let i=0;i<s;i++){let s=Math.abs(i-l),c=n>=d&&n<d+u*2&&s<=u,p=n>=d-1&&n<d+1&&s<=u+1,m=n>=f&&s<=u*2+Math.min(2,n-f>>1);if(!c&&!p&&!m)continue;let h=ee(r.crystal,r.figure,p?.5:.72);M(e,a+i,o+n,h),t&&M(t,a+i,o+n,[0,0,0])}for(let n of new Set([Math.floor(l),Math.ceil(l)]))M(e,a+n,o+d,r.lamp),t&&M(t,a+n,o+d,r.lamp)}function le(e,t,n,r,i){te(e,null,n,`hide`,r.hide,i);let{x:a,y:o,w:s,h:c}=n,l=Math.max(0,Math.round(c*.3));for(let n of[Math.round(s*.2),s-1-Math.round(s*.2)])M(e,a+n,o+l,r.eye),t&&M(t,a+n,o+l,r.eye);for(let t=Math.round(c*.6);t<c;t++)for(let n=Math.round(s*.3);n<s-Math.round(s*.3);n++)M(e,a+n,o+t,A(r.hide,.7))}function ue(e,t){let n=Math.floor(196/Math.max(1,e.regions.length));return{top:28+t*n,height:n}}function de(e,t,n){let r=ue(e,t),i=Math.max(1,e.regions[t]?.floors??1),a=r.height/i,o=n===i-1,s=Math.max(4,Math.floor(a*.62));return{x:80+(n%2==0?-10:10)*!o,y:Math.floor(r.top+a*n+a/2),half:o?46:34,tall:s}}var fe=[106,155];function pe(e,t){let[n,r]=fe,i=Math.max(1,e.surface?.length??1),a=Math.floor((r-n+1)/i);return{x0:n+t*a,x1:n+(t+1)*a-2}}var me=k(`#070b18`),he=k(`#1b2446`),ge=k(`#3d6b3a`),_e=k(`#5e4a36`),ve=k(`#7a6244`),ye=k(`#3f7a3a`),be=k(`#1c3323`),xe=k(`#4a3626`),Se=k(`#0b0a10`),Ce=k(`#120f0c`),P=k(`#8b6a43`),we=k(`#ffd166`),Te=k(`#f2f4f8`),Ee=k(`#c9ccd6`);function F(e){let t=O(160,224);De(t),e.regions.forEach((n,r)=>{je(t,e,n,r)}),Oe(t),e.surface?.forEach((n,r)=>{ke(t,e,n,r)}),Me(t,e),e.regions.forEach((n,r)=>{for(let i=0;i<n.floors;i++)Ne(t,e,n,r,i);let i=ue(e,r);n.open||Fe(t,80,i.top+Math.floor(i.height/2))});let n=e.chosen;return n&&`surface`in n?Ie(t,e,n.surface):n&&Le(t,e,n.region,n.floor),t}function De(e){for(let t=0;t<22;t++){let n=ee(me,he,t/22);for(let r=0;r<160;r++){let i=j(r,t,31)>.985;M(e,r,t,i?A(Te,.7+j(r,t,37)*.3):n)}}}function Oe(e){for(let t=22;t<28;t++)for(let n=0;n<160;n++)M(e,n,t,A(t<24?ge:_e,.85+j(n,t,41)*.3));for(let t of[50,62])for(let n=0;n<5;n++)for(let r=t-n;r<=t+n;r++)M(e,r,17+n,A(k(`#c9b48a`),1-n*.04));M(e,70,21,k(`#ffb347`)),M(e,70,20,k(`#ffd166`)),M(e,69,21,k(`#ff7a2a`));for(let t=16;t<22;t++)M(e,98,t,P);M(e,98,15,k(`#ffd166`));for(let t=13;t<22;t++)M(e,75,t,P),M(e,84,t,P);for(let t=75;t<=84;t++)M(e,t,13,P);M(e,79,12,k(`#9a9aa6`)),M(e,80,12,k(`#9a9aa6`))}function ke(e,t,n,r){let{x0:i,x1:a}=pe(t,r),o=r===0?100:pe(t,r-1).x1+1;for(let t=o;t<=i+2;t++){let n=22+(j(t>>2,0,71+r)>.5?0:1);M(e,t,n,A(ve,.85+j(t,n,73)*.3))}let s=k(n.light),c=[];for(let e=i+3;e<=a-3;e+=6)c.push(e);let l=0;c.forEach((t,i)=>{let a=2+Math.floor(j(i,r,79)*2),o=6+Math.floor(j(i,r,83)*5);l=Math.max(l,a+o);let u=i>=Math.floor(c.length*.66)?s:null;Ae(e,t,22,a,o,n.reached,u,r*16+i)}),n.beaten&&Pe(e,Math.floor((i+a)/2),22-l-4,we)}function Ae(e,t,n,r,i,a,o,s){for(let i=n-r;i<n;i++)M(e,t,i,A(xe,a?1:.6));for(let c=0;c<i;c++){let l=n-r-1-c,u=c/Math.max(1,i-1),d=u<.15?2:u<.75?3:u<.92?2:1;for(let n=-d;n<=d;n++){let r=j(t+n,l,89+s);if(Math.abs(n)===d&&r>.7)continue;let i=(n<0?1.12:.9)*(.85+r*.3)*(.82+u*.3),c=o!==null&&j(t+n,l,97+s)>.8,f=A(a?ye:be,i);M(e,t+n,l,c&&o?a?o:A(o,.35):f)}}}function je(e,t,n,r){let{top:i,height:a}=ue(t,r),o=k(n.rock);for(let t=i;t<i+a;t++)for(let i=0;i<160;i++){let a=j(i>>2,t>>1,53+r)>.965?A(k(n.light),.5):o,s=(.86+j(i>>1,t>>1,47+r)*.2)*(n.open?1:.6);M(e,i,t,A(a,s))}for(let t=0;t<160;t++)M(e,t,i,A(o,.4))}function Me(e,t){let n=t.regions[0];if(!n)return;let r=de(t,0,0).y;for(let e=1;e<n.floors;e++)(n.lifts>>e&1)==1&&(r=de(t,0,e).y);for(let t=22;t<=r;t++){for(let n=77;n<=82;n++)M(e,n,t,Ce);if(M(e,76,t,P),M(e,83,t,P),t%6==0)for(let n=77;n<=82;n++)M(e,n,t,A(P,.8))}}function Ne(e,t,n,r,i){let{x:a,y:o,half:s,tall:c}=de(t,r,i),l=n.open&&i<=n.reached,u=k(n.light),d=o-Math.floor(c/2);for(let t=0;t<c;t++){let i=Math.abs(t-(c-1)/2)/(c/2),o=Math.round(s*(1-i*i*.35));for(let s=-o;s<=o;s++){let c=a+s;if(j(c,d+t,61+r)>.82&&Math.abs(s)>o-2)continue;let f=ee(Se,k(n.rock),.35),p=l?ee(Se,u,.28+.18*(1-i)):f;M(e,c,d+t,A(p,n.open?1:.7))}}for(let t=-s+3;t<=s-3;t++)M(e,a+t,d+c-1,A(k(n.rock),.8)),l&&j(a+t,o,67+r)>.86&&M(e,a+t,d+c-2,u);if(i===n.floors-1&&Pe(e,a,o,n.beaten?we:l?A(u,1.2):A(Ee,.4)),i>0&&(n.lifts>>i&1)==1){for(let t=-2;t<=1;t++)M(e,80+t,o-2,P),M(e,80+t,o+1,P);M(e,78,o-1,P),M(e,81,o-1,P),M(e,78,o,P),M(e,81,o,P)}}function Pe(e,t,n,r){[`#.#.#`,`#####`,`#####`].forEach((i,a)=>{for(let o=0;o<i.length;o++)i[o]===`#`&&M(e,t-2+o,n-1+a,r)})}function Fe(e,t,n){[`.###.`,`#...#`,`#...#`,`#####`,`##.##`,`##.##`,`#####`].forEach((r,i)=>{for(let a=0;a<r.length;a++)r[a]===`#`&&M(e,t-2+a,n-3+i,Ee)})}function Ie(e,t,n){let{x0:r,x1:i}=pe(t,n);for(let[t,n]of[[r-1,-1],[i+1,1]]){for(let n=7;n<22;n++)M(e,t,n,Te);M(e,t-n,7,Te),M(e,t-n,21,Te)}}function Le(e,t,n,r){let{x:i,y:a,half:o,tall:s}=de(t,n,r);for(let t of[-1,1]){let n=i+t*(o+3);for(let t=-Math.floor(s/2);t<=Math.floor(s/2);t++)M(e,n,a+t,Te);M(e,n-t,a-Math.floor(s/2),Te),M(e,n-t,a+Math.floor(s/2),Te)}}var Re=`proto`,ze=`lattice`,Be=`block`;function Ve(e){let t=o(g(e));if(!t.skin)throw Error(`外觀包 ${e} 有錯：${t.errors.join(`；`)}`);return t.skin}function He(e,t){let n=f(Ve(Re),t);return e===`proto`?n:v(f(Ve(e),t),n)}var Ue=1e3,We=1001,Ge=1002,Ke=1003,qe=1004,Je=1005,Ye=1006,Xe=1007,Ze=1008,Qe=1009,$e=1010,et=1011,tt=1012,nt=1013,rt=1014,it=1015,at=1016,ot=1017,st=1018,ct=1020,lt=35902,ut=35899,dt=1021,ft=1022,pt=1023,mt=1026,ht=1027,gt=1028,_t=1029,vt=1030,yt=1031,bt=1033,xt=33776,St=33777,Ct=33778,wt=33779,Tt=35840,Et=35841,Dt=35842,Ot=35843,kt=36196,At=37492,jt=37496,Mt=37488,Nt=37489,Pt=37490,Ft=37491,It=37808,Lt=37809,Rt=37810,zt=37811,Bt=37812,Vt=37813,Ht=37814,Ut=37815,Wt=37816,Gt=37817,Kt=37818,qt=37819,Jt=37820,Yt=37821,Xt=36492,Zt=36494,Qt=36495,$t=36283,en=36284,tn=36285,nn=36286,rn=2300,an=2301,on=2302,sn=2303,cn=2400,ln=2401,un=2402,dn=3200,fn=`srgb`,pn=`srgb-linear`,mn=`linear`,hn=`srgb`,gn=7680,_n=35044,vn=35048,yn=2e3;function bn(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function xn(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Sn(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Cn(){let e=Sn(`canvas`);return e.style.display=`block`,e}var wn={};function Tn(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function En(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function I(...e){e=En(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Dn(...e){e=En(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function On(...e){let t=e.join(` `);t in wn||(wn[t]=!0,I(...e))}function kn(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var An={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Mn=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Nn=Math.PI/180,Pn=180/Math.PI;function Fn(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Mn[e&255]+Mn[e>>8&255]+Mn[e>>16&255]+Mn[e>>24&255]+`-`+Mn[t&255]+Mn[t>>8&255]+`-`+Mn[t>>16&15|64]+Mn[t>>24&255]+`-`+Mn[n&63|128]+Mn[n>>8&255]+`-`+Mn[n>>16&255]+Mn[n>>24&255]+Mn[r&255]+Mn[r>>8&255]+Mn[r>>16&255]+Mn[r>>24&255]).toLowerCase()}function In(e,t,n){return Math.max(t,Math.min(n,e))}function Ln(e,t){return(e%t+t)%t}function Rn(e,t,n){return(1-n)*e+n*t}function zn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Bn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var L=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=In(this.x,e.x,t.x),this.y=In(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=In(this.x,e,t),this.y=In(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(In(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(In(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:I(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(In(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Un.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Un.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=In(this.x,e.x,t.x),this.y=In(this.y,e.y,t.y),this.z=In(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=In(this.x,e,t),this.y=In(this.y,e,t),this.z=In(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(In(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hn.copy(this).projectOnVector(e),this.sub(Hn)}reflect(e){return this.sub(Hn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(In(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hn=new R,Un=new Vn,Wn=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return On(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Gn.makeScale(e,t)),this}rotate(e){return On(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Gn.makeRotation(-e)),this}translate(e,t){return On(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Gn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Gn=new Wn,Kn=new Wn().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qn=new Wn().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jn(){let e={enabled:!0,workingColorSpace:pn,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Xn(e.r),e.g=Xn(e.g),e.b=Xn(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Zn(e.r),e.g=Zn(e.g),e.b=Zn(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?mn:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return On(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return On(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[pn]:{primaries:t,whitePoint:r,transfer:mn,toXYZ:Kn,fromXYZ:qn,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:t,whitePoint:r,transfer:hn,toXYZ:Kn,fromXYZ:qn,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),e}var Yn=Jn();function Xn(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Zn(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Qn,$n=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qn===void 0&&(Qn=Sn(`canvas`)),Qn.width=e.width,Qn.height=e.height;let t=Qn.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Qn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Sn(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Xn(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Xn(t[e]/255)*255):t[e]=Xn(t[e]);return{data:t,width:e.width,height:e.height}}return I(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},er=0,tr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:er++}),this.uuid=Fn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(nr(r[t].image)):e.push(nr(r[t]))}else e=nr(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function nr(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?$n.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(I(`Texture: Unable to serialize Texture.`),{})}var rr=0,ir=new R,ar=class e extends jn{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=We,i=We,a=Ye,o=Ze,s=pt,c=Qe,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rr++}),this.uuid=Fn(),this.name=``,this.source=new tr(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new L(0,0),this.repeat=new L(1,1),this.center=new L(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ir).x}get height(){return this.source.getSize(ir).y}get depth(){return this.source.getSize(ir).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){I(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?I(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ue:e.x-=Math.floor(e.x);break;case We:e.x=e.x<0?0:1;break;case Ge:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Ue:e.y-=Math.floor(e.y);break;case We:e.y=e.y<0?0:1;break;case Ge:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ar.DEFAULT_IMAGE=null,ar.DEFAULT_MAPPING=300,ar.DEFAULT_ANISOTROPY=1;var or=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=In(this.x,e.x,t.x),this.y=In(this.y,e.y,t.y),this.z=In(this.z,e.z,t.z),this.w=In(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=In(this.x,e,t),this.y=In(this.y,e,t),this.z=In(this.z,e,t),this.w=In(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(In(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sr=class extends jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new or(0,0,e,t),this.scissorTest=!1,this.viewport=new or(0,0,e,t),this.textures=[];let r=new ar({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new tr(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},cr=class extends sr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},lr=class extends ar{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},ur=class extends ar{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},z=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/dr.setFromMatrixColumn(e,0).length(),i=1/dr.setFromMatrixColumn(e,1).length(),a=1/dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pr,e,mr)}lookAt(e,t,n){let r=this.elements;return _r.subVectors(e,t),_r.lengthSq()===0&&(_r.z=1),_r.normalize(),hr.crossVectors(n,_r),hr.lengthSq()===0&&(Math.abs(n.z)===1?_r.x+=1e-4:_r.z+=1e-4,_r.normalize(),hr.crossVectors(n,_r)),hr.normalize(),gr.crossVectors(_r,hr),r[0]=hr.x,r[4]=gr.x,r[8]=_r.x,r[1]=hr.y,r[5]=gr.y,r[9]=_r.y,r[2]=hr.z,r[6]=gr.z,r[10]=_r.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],j=r[14],M=r[3],N=r[7],te=r[11],ne=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*ee+c*te,i[12]=a*w+o*O+s*j+c*ne,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*ee+f*te,i[13]=l*w+u*O+d*j+f*ne,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*ee+g*te,i[14]=p*w+m*O+h*j+g*ne,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*ee+b*te,i[15]=_*w+v*O+y*j+b*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=dr.set(r[0],r[1],r[2]).length(),o=dr.set(r[4],r[5],r[6]).length(),s=dr.set(r[8],r[9],r[10]).length();i<0&&(a=-a),fr.copy(this);let c=1/a,l=1/o,u=1/s;return fr.elements[0]*=c,fr.elements[1]*=c,fr.elements[2]*=c,fr.elements[4]*=l,fr.elements[5]*=l,fr.elements[6]*=l,fr.elements[8]*=u,fr.elements[9]*=u,fr.elements[10]*=u,t.setFromRotationMatrix(fr),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=yn,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=yn,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},dr=new R,fr=new z,pr=new R(0,0,0),mr=new R(1,1,1),hr=new R,gr=new R,_r=new R,vr=new z,yr=new Vn,br=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(In(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-In(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(In(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-In(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(In(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-In(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:I(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yr.setFromEuler(this),this.setFromQuaternion(yr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};br.DEFAULT_ORDER=`XYZ`;var xr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Sr=0,Cr=new R,wr=new Vn,Tr=new z,Er=new R,Dr=new R,Or=new R,kr=new Vn,Ar=new R(1,0,0),jr=new R(0,1,0),Mr=new R(0,0,1),Nr={type:`added`},Pr={type:`removed`},Fr={type:`childadded`,child:null},Ir={type:`childremoved`,child:null},Lr=class e extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sr++}),this.uuid=Fn(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new R,n=new br,r=new Vn,i=new R(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new z},normalMatrix:{value:new Wn}}),this.matrix=new z,this.matrixWorld=new z,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(Ar,e)}rotateY(e){return this.rotateOnAxis(jr,e)}rotateZ(e){return this.rotateOnAxis(Mr,e)}translateOnAxis(e,t){return Cr.copy(e).applyQuaternion(this.quaternion),this.position.add(Cr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ar,e)}translateY(e){return this.translateOnAxis(jr,e)}translateZ(e){return this.translateOnAxis(Mr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Er.copy(e):Er.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tr.lookAt(Dr,Er,this.up):Tr.lookAt(Er,Dr,this.up),this.quaternion.setFromRotationMatrix(Tr),r&&(Tr.extractRotation(r.matrixWorld),wr.setFromRotationMatrix(Tr),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(Dn(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nr),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null):Dn(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pr),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nr),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,e,Or),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,kr,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Lr.DEFAULT_UP=new R(0,1,0),Lr.DEFAULT_MATRIX_AUTO_UPDATE=!0,Lr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rr=class extends Lr{constructor(){super(),this.isGroup=!0,this.type=`Group`}},zr={type:`move`},Br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zr)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Rr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Vr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function Wr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var B=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yn.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Yn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Yn.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Yn.workingColorSpace){if(e=Ln(e,1),t=In(t,0,1),n=In(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Wr(i,r,e+1/3),this.g=Wr(i,r,e),this.b=Wr(i,r,e-1/3)}return Yn.colorSpaceToWorking(this,r),this}setStyle(e,t=fn){function n(t){t!==void 0&&parseFloat(t)<1&&I(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:I(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);I(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){let n=Vr[e.toLowerCase()];return n===void 0?I(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return Yn.workingToColorSpace(Gr.copy(this),e),Math.round(In(Gr.r*255,0,255))*65536+Math.round(In(Gr.g*255,0,255))*256+Math.round(In(Gr.b*255,0,255))}getHexString(e=fn){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yn.workingColorSpace){Yn.workingToColorSpace(Gr.copy(this),t);let n=Gr.r,r=Gr.g,i=Gr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Yn.workingColorSpace){return Yn.workingToColorSpace(Gr.copy(this),t),e.r=Gr.r,e.g=Gr.g,e.b=Gr.b,e}getStyle(e=fn){Yn.workingToColorSpace(Gr.copy(this),e);let t=Gr.r,n=Gr.g,r=Gr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(Ur);let n=Rn(Hr.h,Ur.h,t),r=Rn(Hr.s,Ur.s,t),i=Rn(Hr.l,Ur.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gr=new B;B.NAMES=Vr;var Kr=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new B(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qr=class extends Lr{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new br,this.environmentIntensity=1,this.environmentRotation=new br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Jr=new R,Yr=new R,Xr=new R,Zr=new R,Qr=new R,$r=new R,ei=new R,ti=new R,ni=new R,ri=new R,ii=new or,ai=new or,oi=new or,si=class e{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Jr.subVectors(e,t),r.cross(Jr);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Jr.subVectors(r,t),Yr.subVectors(n,t),Xr.subVectors(e,t);let a=Jr.dot(Jr),o=Jr.dot(Yr),s=Jr.dot(Xr),c=Yr.dot(Yr),l=Yr.dot(Xr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Zr)!==null&&Zr.x>=0&&Zr.y>=0&&Zr.x+Zr.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Zr)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Zr.x),s.addScaledVector(a,Zr.y),s.addScaledVector(o,Zr.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return ii.setScalar(0),ai.setScalar(0),oi.setScalar(0),ii.fromBufferAttribute(e,t),ai.fromBufferAttribute(e,n),oi.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ii,i.x),a.addScaledVector(ai,i.y),a.addScaledVector(oi,i.z),a}static isFrontFacing(e,t,n,r){return Jr.subVectors(n,t),Yr.subVectors(e,t),Jr.cross(Yr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jr.subVectors(this.c,this.b),Yr.subVectors(this.a,this.b),Jr.cross(Yr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Qr.subVectors(r,n),$r.subVectors(i,n),ti.subVectors(e,n);let s=Qr.dot(ti),c=$r.dot(ti);if(s<=0&&c<=0)return t.copy(n);ni.subVectors(e,r);let l=Qr.dot(ni),u=$r.dot(ni);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Qr,a);ri.subVectors(e,i);let f=Qr.dot(ri),p=$r.dot(ri);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector($r,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return ei.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(ei,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Qr,a).addScaledVector($r,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ci=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,ui):ui.fromBufferAttribute(r,t),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),di.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),di.copy(e.boundingBox)),di.applyMatrix4(e.matrixWorld),this.union(di)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vi),yi.subVectors(this.max,vi),fi.subVectors(e.a,vi),pi.subVectors(e.b,vi),mi.subVectors(e.c,vi),hi.subVectors(pi,fi),gi.subVectors(mi,pi),_i.subVectors(fi,mi);let t=[0,-hi.z,hi.y,0,-gi.z,gi.y,0,-_i.z,_i.y,hi.z,0,-hi.x,gi.z,0,-gi.x,_i.z,0,-_i.x,-hi.y,hi.x,0,-gi.y,gi.x,0,-_i.y,_i.x,0];return!Si(t,fi,pi,mi,yi)||(t=[1,0,0,0,1,0,0,0,1],!Si(t,fi,pi,mi,yi))?!1:(bi.crossVectors(hi,gi),t=[bi.x,bi.y,bi.z],Si(t,fi,pi,mi,yi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},li=[new R,new R,new R,new R,new R,new R,new R,new R],ui=new R,di=new ci,fi=new R,pi=new R,mi=new R,hi=new R,gi=new R,_i=new R,vi=new R,yi=new R,bi=new R,xi=new R;function Si(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){xi.fromArray(e,a);let o=i.x*Math.abs(xi.x)+i.y*Math.abs(xi.y)+i.z*Math.abs(xi.z),s=t.dot(xi),c=n.dot(xi),l=r.dot(xi);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Ci=new R,wi=new L,Ti=0,Ei=class extends jn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ti++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=_n,this.updateRanges=[],this.gpuType=it,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wi.fromBufferAttribute(this,t),wi.applyMatrix3(e),this.setXY(t,wi.x,wi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ci.fromBufferAttribute(this,t),Ci.applyMatrix3(e),this.setXYZ(t,Ci.x,Ci.y,Ci.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ci.fromBufferAttribute(this,t),Ci.applyMatrix4(e),this.setXYZ(t,Ci.x,Ci.y,Ci.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ci.fromBufferAttribute(this,t),Ci.applyNormalMatrix(e),this.setXYZ(t,Ci.x,Ci.y,Ci.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ci.fromBufferAttribute(this,t),Ci.transformDirection(e),this.setXYZ(t,Ci.x,Ci.y,Ci.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),n=Bn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),n=Bn(n,this.array),r=Bn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),n=Bn(n,this.array),r=Bn(r,this.array),i=Bn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Di=class extends Ei{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Oi=class extends Ei{constructor(e,t,n){super(new Uint32Array(e),t,n)}},ki=class extends Ei{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ai=new ci,ji=new R,Mi=new R,Ni=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Ai.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ji.subVectors(e,this.center);let t=ji.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(ji,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mi.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ji.copy(e.center).add(Mi)),this.expandByPoint(ji.copy(e.center).sub(Mi))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Pi=0,Fi=new z,Ii=new Lr,Li=new R,Ri=new ci,zi=new ci,Bi=new R,Vi=class e extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pi++}),this.uuid=Fn(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(bn(e)?Oi:Di)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Wn().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Fi.makeRotationFromQuaternion(e),this.applyMatrix4(Fi),this}rotateX(e){return Fi.makeRotationX(e),this.applyMatrix4(Fi),this}rotateY(e){return Fi.makeRotationY(e),this.applyMatrix4(Fi),this}rotateZ(e){return Fi.makeRotationZ(e),this.applyMatrix4(Fi),this}translate(e,t,n){return Fi.makeTranslation(e,t,n),this.applyMatrix4(Fi),this}scale(e,t,n){return Fi.makeScale(e,t,n),this.applyMatrix4(Fi),this}lookAt(e){return Ii.lookAt(e),Ii.updateMatrix(),this.applyMatrix4(Ii.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new ki(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&I(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)Dn(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ri.setFromBufferAttribute(n),this.morphTargetsRelative?(Bi.addVectors(this.boundingBox.min,Ri.min),this.boundingBox.expandByPoint(Bi),Bi.addVectors(this.boundingBox.max,Ri.max),this.boundingBox.expandByPoint(Bi)):(this.boundingBox.expandByPoint(Ri.min),this.boundingBox.expandByPoint(Ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dn(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)Dn(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new R,1/0);else if(e){let n=this.boundingSphere.center;if(Ri.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];zi.setFromBufferAttribute(n),this.morphTargetsRelative?(Bi.addVectors(Ri.min,zi.min),Ri.expandByPoint(Bi),Bi.addVectors(Ri.max,zi.max),Ri.expandByPoint(Bi)):(Ri.expandByPoint(zi.min),Ri.expandByPoint(zi.max))}Ri.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Bi.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Bi));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Bi.fromBufferAttribute(a,t),o&&(Li.fromBufferAttribute(e,t),Bi.add(Li)),r=Math.max(r,n.distanceToSquared(Bi))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Dn(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Dn(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Ei(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new R,s[e]=new R;let c=new R,l=new R,u=new R,d=new L,f=new L,p=new L,m=new R,h=new R;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new R,y=new R,b=new R,x=new R;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Ei(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new R,i=new R,a=new R,o=new R,s=new R,c=new R,l=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bi.fromBufferAttribute(e,t),Bi.normalize(),e.setXYZ(t,Bi.x,Bi.y,Bi.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Ei(a,r,i)}if(this.index===null)return I(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Hi=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=_n,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Ui=new R,Wi=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ui.fromBufferAttribute(this,t),Ui.applyMatrix4(e),this.setXYZ(t,Ui.x,Ui.y,Ui.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ui.fromBufferAttribute(this,t),Ui.applyNormalMatrix(e),this.setXYZ(t,Ui.x,Ui.y,Ui.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ui.fromBufferAttribute(this,t),Ui.transformDirection(e),this.setXYZ(t,Ui.x,Ui.y,Ui.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bn(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Bn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Bn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Bn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Bn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bn(t,this.array),n=Bn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bn(t,this.array),n=Bn(n,this.array),r=Bn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bn(t,this.array),n=Bn(n,this.array),r=Bn(r,this.array),i=Bn(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Tn(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Ei(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Tn(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Gi=new R,Ki=new R,qi=new Wn,Ji=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Gi.subVectors(n,t).cross(Ki.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Gi),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||qi.getNormalMatrix(e),r=this.coplanarPoint(Gi).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Yi=0,Xi=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yi++}),this.uuid=Fn(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new B(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gn,this.stencilZFail=gn,this.stencilZPass=gn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){I(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?I(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new B().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Ji().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new L().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new L().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Zi=new R,Qi=new R,$i=new R,ea=new R,ta=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Qi.copy(e).add(t).multiplyScalar(.5),$i.copy(t).sub(e).normalize(),ea.copy(this.origin).sub(Qi);let i=e.distanceTo(t)*.5,a=-this.direction.dot($i),o=ea.dot(this.direction),s=-ea.dot($i),c=ea.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Qi).addScaledVector($i,d),f}intersectSphere(e,t){if(e.radius<0)return null;Zi.subVectors(e.center,this.origin);let n=Zi.dot(this.direction),r=Zi.dot(Zi)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,j,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,j=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,j=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,j=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,j=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,j=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,j=g)),w===0)return null;let N=S/w,te=C/w,ne=1/w,re=T-N*D,ie=E-te*D,ae=O-N*A,oe=k-te*A,se=ee-N*M,ce=j-te*M,le=se*oe-ce*ae,ue=re*ce-ie*se,de=ae*ie-oe*re;if(r){if(le<0||ue<0||de<0)return null}else if((le<0||ue<0||de<0)&&(le>0||ue>0||de>0))return null;let fe=le+ue+de;if(fe===0)return null;let pe=ne*(le*D+ue*A+de*M);return(fe>0?pe<0:pe>0)?null:this.at(pe/fe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},V=class extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new B(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},na=new z,ra=new ta,ia=new Ni,aa=new R,oa=new R,sa=new R,ca=new R,la=new R,ua=new R,da=new R,fa=new R,H=class extends Lr{constructor(e=new Vi,t=new V){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ua.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(la.fromBufferAttribute(s,e),a?ua.addScaledVector(la,r):ua.addScaledVector(la.sub(t),r))}t.add(ua)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(i),ra.copy(e.ray).recast(e.near),!(ia.containsPoint(ra.origin)===!1&&(ra.intersectSphere(ia,aa)===null||ra.origin.distanceToSquared(aa)>(e.far-e.near)**2))&&(na.copy(i).invert(),ra.copy(e.ray).applyMatrix4(na),(n.boundingBox===null||ra.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ra)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ma(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ma(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ma(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ma(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function pa(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;fa.copy(s),fa.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(fa);return l<n.near||l>n.far?null:{distance:l,point:fa.clone(),object:e}}function ma(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,oa),e.getVertexPosition(c,sa),e.getVertexPosition(l,ca);let u=pa(e,t,n,r,oa,sa,ca,da);if(u){let e=new R;si.getBarycoord(da,oa,sa,ca,e),i&&(u.uv=si.getInterpolatedAttribute(i,s,c,l,e,new L)),a&&(u.uv1=si.getInterpolatedAttribute(a,s,c,l,e,new L)),o&&(u.normal=si.getInterpolatedAttribute(o,s,c,l,e,new R),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new R,materialIndex:0};si.getNormal(oa,sa,ca,t.normal),u.face=t,u.barycoord=e}return u}var ha=class extends ar{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Ke,l=Ke,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ga=class extends Ei{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},_a=new z,va=new z,ya=[],ba=new ci,xa=new z,Sa=new H,Ca=new Ni,wa=class extends H{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ga(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,xa)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_a),ba.copy(e.boundingBox).applyMatrix4(_a),this.boundingBox.union(ba)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_a),Ca.copy(e.boundingSphere).applyMatrix4(_a),this.boundingSphere.union(Ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Sa.geometry=this.geometry,Sa.material=this.material,Sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ca.copy(this.boundingSphere),Ca.applyMatrix4(n),e.ray.intersectsSphere(Ca)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,_a),va.multiplyMatrices(n,_a),Sa.matrixWorld=va,Sa.raycast(e,ya);for(let e=0,n=ya.length;e<n;e++){let n=ya[e];n.instanceId=i,n.object=this,t.push(n)}ya.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ga(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ha(new Float32Array(r*this.count),r,this.count,gt,it));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ta=new Ni,Ea=new L(.5,.5),Da=new R,Oa=class{constructor(e=new Ji,t=new Ji,n=new Ji,r=new Ji,i=new Ji,a=new Ji){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yn,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ta.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ta.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ta)}intersectsSprite(e){return Ta.center.set(0,0,0),Ta.radius=.7071067811865476+Ea.distanceTo(e.center),Ta.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ta)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Da.x=r.normal.x>0?e.max.x:e.min.x,Da.y=r.normal.y>0?e.max.y:e.min.y,Da.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Da)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ka=class extends Xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new B(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Aa=new R,ja=new R,Ma=new z,Na=new ta,Pa=new Ni,Fa=new R,Ia=new R,La=class extends Lr{constructor(e=new Vi,t=new ka){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Aa.fromBufferAttribute(t,e-1),ja.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Aa.distanceTo(ja);e.setAttribute(`lineDistance`,new ki(n,1))}else I(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(r),Pa.radius+=i,e.ray.intersectsSphere(Pa)===!1)return;Ma.copy(r).invert(),Na.copy(e.ray).applyMatrix4(Ma);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Ra(this,e,Na,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Ra(this,e,Na,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Ra(this,e,Na,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Ra(this,e,Na,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ra(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Aa.fromBufferAttribute(s,i),ja.fromBufferAttribute(s,a),n.distanceSqToSegment(Aa,ja,Fa,Ia)>r)return;Fa.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Fa);if(!(c<t.near||c>t.far))return{distance:c,point:Ia.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var za=new R,Ba=new R,Va=class extends La{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)za.fromBufferAttribute(t,e),Ba.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+za.distanceTo(Ba);e.setAttribute(`lineDistance`,new ki(n,1))}else I(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Ha=class extends ar{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ua=class extends ar{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wa=class extends ar{constructor(e,t,n=rt,r,i,a,o=Ke,s=Ke,c,l=mt,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ga=class extends Wa{constructor(e,t=rt,n=301,r,i,a=Ke,o=Ke,s,c=mt){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ka=class extends ar{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},qa=class e extends Vi{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new ki(c,3)),this.setAttribute(`normal`,new ki(l,3)),this.setAttribute(`uv`,new ki(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new R;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ja=class e extends Vi{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new R,g=new R;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new ki(o,3)),this.setAttribute(`normal`,new ki(s,3)),this.setAttribute(`uv`,new ki(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ya=class e extends Vi{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new R,l=new L;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new ki(a,3)),this.setAttribute(`normal`,new ki(o,3)),this.setAttribute(`uv`,new ki(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Xa=class e extends Vi{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new ki(u,3)),this.setAttribute(`normal`,new ki(d,3)),this.setAttribute(`uv`,new ki(f,2));function _(){let a=new R,_=new R,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new L,m=new R,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Za=class e extends Xa{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qa=class e extends Vi{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new ki(i,3)),this.setAttribute(`normal`,new ki(i.slice(),3)),this.setAttribute(`uv`,new ki(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new R,r=new R,i=new R;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new R;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new R;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new R,t=new R,n=new R,r=new R,o=new L,s=new L,c=new L;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},$a=class e extends Qa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},eo=class e extends Qa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},to=class e extends Vi{constructor(e=[new L(0,-.5),new L(.5,0),new L(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=In(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new R,d=new L,f=new R,p=new R,m=new R,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new ki(a,3)),this.setAttribute(`uv`,new ki(o,2)),this.setAttribute(`normal`,new ki(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},no=class e extends Qa{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ro=class e extends Vi{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new ki(p,3)),this.setAttribute(`normal`,new ki(m,3)),this.setAttribute(`uv`,new ki(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},io=class e extends Vi{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new R,p=new L;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new ki(s,3)),this.setAttribute(`normal`,new ki(c,3)),this.setAttribute(`uv`,new ki(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ao=class e extends Vi{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new R,d=new R,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new ki(p,3)),this.setAttribute(`normal`,new ki(m,3)),this.setAttribute(`uv`,new ki(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},oo=class e extends Vi{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new R,f=new R,p=new R;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new ki(c,3)),this.setAttribute(`normal`,new ki(l,3)),this.setAttribute(`uv`,new ki(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function so(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(lo(i))i.isRenderTargetTexture?(I(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(lo(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function co(e){let t={};for(let n=0;n<e.length;n++){let r=so(e[n]);for(let e in r)t[e]=r[e]}return t}function lo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function uo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function fo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yn.workingColorSpace}var po={clone:so,merge:co},mo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ho=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,go=class extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mo,this.fragmentShader=ho,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=uo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new B().setHex(r.value);break;case`v2`:this.uniforms[n].value=new L().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new R().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new or().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Wn().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new z().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},_o=class extends go{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},vo=class extends Xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new B(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new B(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new L(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yo=class extends Xi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:``},this.type=`MeshToonMaterial`,this.color=new B(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new B(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new L(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bo=class extends Xi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new B(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new B(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new L(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xo=class extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=dn,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},So=class extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Co(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function wo(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var To=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Eo=class extends To{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cn,endingEnd:cn}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case ln:i=e,o=2*t-n;break;case un:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case ln:a=e,s=2*n-t;break;case un:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Do=class extends To{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Oo=class extends To{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ko=class extends To{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Mo(n,t,g,y,r);i[p]=Ao(x,o,_,b,m)}return i}};function Ao(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function jo(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Mo(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Ao(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=jo(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var No=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Co(t,this.TimeBufferType),this.values=Co(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Co(e.times,Array),values:Co(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),wo(e.settings)&&(n.settings={inTangents:Co(e.settings.inTangents,Array),outTangents:Co(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Do(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ko(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case rn:t=this.InterpolantFactoryMethodDiscrete;break;case an:t=this.InterpolantFactoryMethodLinear;break;case on:t=this.InterpolantFactoryMethodSmooth;break;case sn:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return I(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rn;case this.InterpolantFactoryMethodLinear:return an;case this.InterpolantFactoryMethodSmooth:return on;case this.InterpolantFactoryMethodBezier:return sn}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;wo(this.settings)&&(Po(this.settings.inTangents,e),Po(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Dn(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(Dn(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){Dn(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){Dn(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&xn(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){Dn(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===on,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,wo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Po(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}No.prototype.ValueTypeName=``,No.prototype.TimeBufferType=Float32Array,No.prototype.ValueBufferType=Float32Array,No.prototype.DefaultInterpolation=an;var Fo=class extends No{constructor(e,t,n){super(e,t,n)}};Fo.prototype.ValueTypeName=`bool`,Fo.prototype.ValueBufferType=Array,Fo.prototype.DefaultInterpolation=rn,Fo.prototype.InterpolantFactoryMethodLinear=void 0,Fo.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends No{constructor(e,t,n,r){super(e,t,n,r)}};Io.prototype.ValueTypeName=`color`;var Lo=class extends No{constructor(e,t,n,r){super(e,t,n,r)}};Lo.prototype.ValueTypeName=`number`;var Ro=class extends To{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Vn.slerpFlat(i,0,a,c-o,a,c,s);return i}},zo=class extends No{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ro(this.times,this.values,this.getValueSize(),e)}};zo.prototype.ValueTypeName=`quaternion`,zo.prototype.InterpolantFactoryMethodSmooth=void 0;var Bo=class extends No{constructor(e,t,n){super(e,t,n)}};Bo.prototype.ValueTypeName=`string`,Bo.prototype.ValueBufferType=Array,Bo.prototype.DefaultInterpolation=rn,Bo.prototype.InterpolantFactoryMethodLinear=void 0,Bo.prototype.InterpolantFactoryMethodSmooth=void 0;var Vo=class extends No{constructor(e,t,n,r){super(e,t,n,r)}};Vo.prototype.ValueTypeName=`vector`;var Ho=class extends Lr{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new B(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Uo=class extends Ho{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Lr.DEFAULT_UP),this.updateMatrix(),this.groundColor=new B(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Wo=new z,Go=new R,Ko=new R,qo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new L(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new z,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oa,this._frameExtents=new L(1,1),this._viewportCount=1,this._viewports=[new or(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Go.setFromMatrixPosition(e.matrixWorld),t.position.copy(Go),Ko.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ko),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Wo,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Wo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Jo=new R,Yo=new Vn,Xo=new R,Zo=class extends Lr{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new z,this.projectionMatrix=new z,this.projectionMatrixInverse=new z,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jo,Yo,Xo),Xo.x===1&&Xo.y===1&&Xo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,Yo,Xo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Jo,Yo,Xo),Xo.x===1&&Xo.y===1&&Xo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,Yo,Xo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qo=new R,$o=new L,es=new L,ts=class extends Zo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Pn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Nn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pn*2*Math.atan(Math.tan(Nn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qo.x,Qo.y).multiplyScalar(-e/Qo.z),Qo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qo.x,Qo.y).multiplyScalar(-e/Qo.z)}getViewSize(e,t){return this.getViewBounds(e,$o,es),t.subVectors(es,$o)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Nn*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ns=class extends qo{constructor(){super(new ts(90,1,.5,500)),this.isPointLightShadow=!0}},rs=class extends Ho{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new ns}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},is=class extends Zo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},as=class extends qo{constructor(){super(new is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},os=class extends Ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Lr.DEFAULT_UP),this.updateMatrix(),this.target=new Lr,this.shadow=new as}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ss=class extends Vi{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},cs=-90,ls=1,us=class extends Lr{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ts(cs,ls,e,t);r.layers=this.layers,this.add(r);let i=new ts(cs,ls,e,t);i.layers=this.layers,this.add(i);let a=new ts(cs,ls,e,t);a.layers=this.layers,this.add(a);let o=new ts(cs,ls,e,t);o.layers=this.layers,this.add(o);let s=new ts(cs,ls,e,t);s.layers=this.layers,this.add(s);let c=new ts(cs,ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ds=class extends ts{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},fs=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=ps.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function ps(){this._document.hidden===!1&&this.reset()}var ms=`\\[\\]\\.:\\/`,hs=RegExp(`[\\[\\]\\.:\\/]`,`g`),gs=`[^\\[\\]\\.:\\/]`,_s=`[^`+ms.replace(`\\.`,``)+`]`,vs=`((?:WC+[\\/:])*)`.replace(`WC`,gs),ys=`(WCOD+)?`.replace(`WCOD`,_s),bs=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,gs),xs=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,gs),Ss=RegExp(`^`+vs+ys+bs+xs+`$`),Cs=[`material`,`materials`,`bones`,`map`],ws=class{constructor(e,t,n){let r=n||Ts.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ts=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(hs,``)}static parseTrackName(e){let t=Ss.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Cs.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){I(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){Dn(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){Dn(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){Dn(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){Dn(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){Dn(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){Dn(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){Dn(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;Dn(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){Dn(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){Dn(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ts.Composite=ws,Ts.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ts.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ts.prototype.GetterByBindingType=[Ts.prototype._getValue_direct,Ts.prototype._getValue_array,Ts.prototype._getValue_arrayElement,Ts.prototype._getValue_toArray],Ts.prototype.SetterByBindingTypeAndVersioning=[[Ts.prototype._setValue_direct,Ts.prototype._setValue_direct_setNeedsUpdate,Ts.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ts.prototype._setValue_array,Ts.prototype._setValue_array_setNeedsUpdate,Ts.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ts.prototype._setValue_arrayElement,Ts.prototype._setValue_arrayElement_setNeedsUpdate,Ts.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ts.prototype._setValue_fromArray,Ts.prototype._setValue_fromArray_setNeedsUpdate,Ts.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Es=class extends Hi{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},Ds=new z,Os=class{constructor(e,t,n=0,r=1/0){this.ray=new ta(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new xr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Dn(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Ds.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ds),this}intersectObject(e,t=!0,n=[]){return As(e,this,n,t),n.sort(ks),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)As(e[r],this,n,t);return n.sort(ks),n}};function ks(e,t){return e.distance-t.distance}function As(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)As(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function js(e,t,n,r){let i=Ms(r);switch(n){case dt:return e*t;case gt:return e*t/i.components*i.byteLength;case _t:return e*t/i.components*i.byteLength;case vt:return e*t*2/i.components*i.byteLength;case yt:return e*t*2/i.components*i.byteLength;case ft:return e*t*3/i.components*i.byteLength;case pt:return e*t*4/i.components*i.byteLength;case bt:return e*t*4/i.components*i.byteLength;case xt:case St:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ct:case wt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Et:case Ot:return Math.max(e,16)*Math.max(t,8)/4;case Tt:case Dt:return Math.max(e,8)*Math.max(t,8)/2;case kt:case At:case Mt:case Nt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case jt:case Pt:case Ft:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case It:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Lt:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Rt:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case zt:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Bt:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Vt:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ht:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ut:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Wt:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Gt:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Kt:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case qt:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Jt:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Yt:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Xt:case Zt:case Qt:return Math.ceil(e/4)*Math.ceil(t/4)*16;case $t:case en:return Math.ceil(e/4)*Math.ceil(t/4)*8;case tn:case nn:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ms(e){switch(e){case Qe:case $e:return{byteLength:1,components:1};case tt:case et:case at:return{byteLength:2,components:1};case ot:case st:return{byteLength:2,components:4};case rt:case nt:case it:return{byteLength:4,components:1};case lt:case ut:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?I(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Ns(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ps(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Fs={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},U={common:{diffuse:{value:new B(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wn},alphaMap:{value:null},alphaMapTransform:{value:new Wn},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wn}},envmap:{envMap:{value:null},envMapRotation:{value:new Wn},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wn}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wn}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wn},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wn},normalScale:{value:new L(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wn},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wn}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wn}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wn}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new B(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new B(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wn},alphaTest:{value:0},uvTransform:{value:new Wn}},sprite:{diffuse:{value:new B(16777215)},opacity:{value:1},center:{value:new L(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wn},alphaMap:{value:null},alphaMapTransform:{value:new Wn},alphaTest:{value:0}}},Is={basic:{uniforms:co([U.common,U.specularmap,U.envmap,U.aomap,U.lightmap,U.fog]),vertexShader:Fs.meshbasic_vert,fragmentShader:Fs.meshbasic_frag},lambert:{uniforms:co([U.common,U.specularmap,U.envmap,U.aomap,U.lightmap,U.emissivemap,U.bumpmap,U.normalmap,U.displacementmap,U.fog,U.lights,{emissive:{value:new B(0)},envMapIntensity:{value:1}}]),vertexShader:Fs.meshlambert_vert,fragmentShader:Fs.meshlambert_frag},phong:{uniforms:co([U.common,U.specularmap,U.envmap,U.aomap,U.lightmap,U.emissivemap,U.bumpmap,U.normalmap,U.displacementmap,U.fog,U.lights,{emissive:{value:new B(0)},specular:{value:new B(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fs.meshphong_vert,fragmentShader:Fs.meshphong_frag},standard:{uniforms:co([U.common,U.envmap,U.aomap,U.lightmap,U.emissivemap,U.bumpmap,U.normalmap,U.displacementmap,U.roughnessmap,U.metalnessmap,U.fog,U.lights,{emissive:{value:new B(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fs.meshphysical_vert,fragmentShader:Fs.meshphysical_frag},toon:{uniforms:co([U.common,U.aomap,U.lightmap,U.emissivemap,U.bumpmap,U.normalmap,U.displacementmap,U.gradientmap,U.fog,U.lights,{emissive:{value:new B(0)}}]),vertexShader:Fs.meshtoon_vert,fragmentShader:Fs.meshtoon_frag},matcap:{uniforms:co([U.common,U.bumpmap,U.normalmap,U.displacementmap,U.fog,{matcap:{value:null}}]),vertexShader:Fs.meshmatcap_vert,fragmentShader:Fs.meshmatcap_frag},points:{uniforms:co([U.points,U.fog]),vertexShader:Fs.points_vert,fragmentShader:Fs.points_frag},dashed:{uniforms:co([U.common,U.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fs.linedashed_vert,fragmentShader:Fs.linedashed_frag},depth:{uniforms:co([U.common,U.displacementmap]),vertexShader:Fs.depth_vert,fragmentShader:Fs.depth_frag},normal:{uniforms:co([U.common,U.bumpmap,U.normalmap,U.displacementmap,{opacity:{value:1}}]),vertexShader:Fs.meshnormal_vert,fragmentShader:Fs.meshnormal_frag},sprite:{uniforms:co([U.sprite,U.fog]),vertexShader:Fs.sprite_vert,fragmentShader:Fs.sprite_frag},background:{uniforms:{uvTransform:{value:new Wn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fs.background_vert,fragmentShader:Fs.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wn}},vertexShader:Fs.backgroundCube_vert,fragmentShader:Fs.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fs.cube_vert,fragmentShader:Fs.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fs.equirect_vert,fragmentShader:Fs.equirect_frag},distance:{uniforms:co([U.common,U.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fs.distance_vert,fragmentShader:Fs.distance_frag},shadow:{uniforms:co([U.lights,U.fog,{color:{value:new B(0)},opacity:{value:1}}]),vertexShader:Fs.shadow_vert,fragmentShader:Fs.shadow_frag}};Is.physical={uniforms:co([Is.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wn},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wn},clearcoatNormalScale:{value:new L(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wn},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wn},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wn},sheen:{value:0},sheenColor:{value:new B(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wn},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wn},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wn},transmissionSamplerSize:{value:new L},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wn},attenuationDistance:{value:0},attenuationColor:{value:new B(0)},specularColor:{value:new B(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wn},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wn},anisotropyVector:{value:new L},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wn}}]),vertexShader:Fs.meshphysical_vert,fragmentShader:Fs.meshphysical_frag};var Ls={r:0,b:0,g:0},Rs=new z,zs=new Wn;zs.set(-1,0,0,0,1,0,0,0,1);function Bs(e,t,n,r,i,a){let o=new B(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new H(new qa(1,1,1),new go({name:`BackgroundCubeMaterial`,uniforms:so(Is.backgroundCube.uniforms),vertexShader:Is.backgroundCube.vertexShader,fragmentShader:Is.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Rs.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(zs),l.material.toneMapped=Yn.getTransfer(i.colorSpace)!==hn,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new H(new ro(2,2),new go({name:`BackgroundMaterial`,uniforms:so(Is.background.uniforms),vertexShader:Is.background.vertexShader,fragmentShader:Is.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Yn.getTransfer(i.colorSpace)!==hn,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Ls,fo(e)),n.buffers.color.setClear(Ls.r,Ls.g,Ls.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Vs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Hs(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Us(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(I(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&I(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Ws(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ji,s=new Wn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Gs=4,Ks=6,qs=20,Js=256,Ys=new is,Xs=new B,Zs=null,Qs=0,$s=0,ec=!1,tc=new R,nc=new R,rc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=tc}=i;Zs=this._renderer.getRenderTarget(),Qs=this._renderer.getActiveCubeFace(),$s=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zs,Qs,$s),this._renderer.xr.enabled=ec,e.scissorTest=!1,oc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zs=this._renderer.getRenderTarget(),Qs=this._renderer.getActiveCubeFace(),$s=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:at,format:pt,colorSpace:pn,depthBuffer:!1},r=ac(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ac(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ic(r)),this._blurMaterial=cc(r,e,t),this._ggxMaterial=sc(r,e,t)}return r}_compileMaterial(e){let t=new H(new Vi,e);this._renderer.compile(t,Ys)}_sceneToCubeUV(e,t,n,r,i){let a=new ts(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Xs),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new H(new qa,new V({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Xs),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;oc(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;oc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ys)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Gs?n-d+Gs:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,oc(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Ys),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,oc(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Ys)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];oc(t,3*l*(r>this._lodMax-Gs?r-this._lodMax+Gs:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Ys)}};function ic(e){let t=[],n=[],r=e,i=e-Gs+1+Ks;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?nc.set(1,r,n):e===1?nc.set(-n,1,-r):e===2?nc.set(-n,r,1):e===3?nc.set(-1,r,-n):e===4?nc.set(-n,-1,r):nc.set(n,r,-1),nc.toArray(l,(e*6+t)*3)}}let u=new Vi;u.setAttribute(`position`,new Ei(c,3)),u.setAttribute(`outputDirection`,new Ei(l,3)),n.push(new H(u,null)),r>Gs&&r--}return{lodMeshes:n,sizeLods:t}}function ac(e,t,n){let r=new cr(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function oc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function sc(e,t,n){return new go({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Js,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function cc(e,t,n){return new go({name:`SphericalGaussianBlur`,defines:{SAMPLES:qs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:dc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function lc(){return new go({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function uc(){return new go({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function dc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var fc=class extends cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ha(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qa(5,5,5),i=new go({name:`CubemapFromEquirect`,uniforms:so(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new H(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Ye),new us(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function pc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new fc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new rc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new rc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function mc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&On(`WebGLRenderer: `+e+` extension not supported.`),t}}}function hc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Oi:Di)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function gc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function _c(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:Dn(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function vc(e,t,n){let r=new WeakMap,i=new or;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new lr(h,p,m,u);g.type=it,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new L(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function yc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var bc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function xc(e,t,n,r,i,a){let o=new cr(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Vi;l.setAttribute(`position`,new ki([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new ki([0,2,0,0,2,0],2));let u=new _o({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new H(l,u),f=new is(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new cr(t,n,{type:at,depthBuffer:!1,stencilBuffer:!1}),c=new cr(t,n,{type:at,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Yn.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=bc[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Sc=new ar,Cc=new Wa(1,1),wc=new lr,Tc=new ur,Ec=new Ha,Dc=[],Oc=[],kc=new Float32Array(16),Ac=new Float32Array(9),jc=new Float32Array(4);function Mc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Dc[i];if(a===void 0&&(a=new Float32Array(i),Dc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Nc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Pc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Fc(e,t){let n=Oc[t];n===void 0&&(n=new Int32Array(t),Oc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ic(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Lc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Nc(n,t))return;e.uniform2fv(this.addr,t),Pc(n,t)}}function Rc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Nc(n,t))return;e.uniform3fv(this.addr,t),Pc(n,t)}}function zc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Nc(n,t))return;e.uniform4fv(this.addr,t),Pc(n,t)}}function Bc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Nc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Pc(n,t)}else{if(Nc(n,r))return;jc.set(r),e.uniformMatrix2fv(this.addr,!1,jc),Pc(n,r)}}function Vc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Nc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Pc(n,t)}else{if(Nc(n,r))return;Ac.set(r),e.uniformMatrix3fv(this.addr,!1,Ac),Pc(n,r)}}function Hc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Nc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Pc(n,t)}else{if(Nc(n,r))return;kc.set(r),e.uniformMatrix4fv(this.addr,!1,kc),Pc(n,r)}}function Uc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Wc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Nc(n,t))return;e.uniform2iv(this.addr,t),Pc(n,t)}}function Gc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Nc(n,t))return;e.uniform3iv(this.addr,t),Pc(n,t)}}function Kc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Nc(n,t))return;e.uniform4iv(this.addr,t),Pc(n,t)}}function qc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Jc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Nc(n,t))return;e.uniform2uiv(this.addr,t),Pc(n,t)}}function Yc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Nc(n,t))return;e.uniform3uiv(this.addr,t),Pc(n,t)}}function Xc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Nc(n,t))return;e.uniform4uiv(this.addr,t),Pc(n,t)}}function Zc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Cc.compareFunction=n.isReversedDepthBuffer()?518:515,a=Cc):a=Sc,n.setTexture2D(t||a,i)}function Qc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Tc,i)}function $c(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Ec,i)}function el(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||wc,i)}function tl(e){switch(e){case 5126:return Ic;case 35664:return Lc;case 35665:return Rc;case 35666:return zc;case 35674:return Bc;case 35675:return Vc;case 35676:return Hc;case 5124:case 35670:return Uc;case 35667:case 35671:return Wc;case 35668:case 35672:return Gc;case 35669:case 35673:return Kc;case 5125:return qc;case 36294:return Jc;case 36295:return Yc;case 36296:return Xc;case 35678:case 36198:case 36298:case 36306:case 35682:return Zc;case 35679:case 36299:case 36307:return Qc;case 35680:case 36300:case 36308:case 36293:return $c;case 36289:case 36303:case 36311:case 36292:return el}}function nl(e,t){e.uniform1fv(this.addr,t)}function rl(e,t){let n=Mc(t,this.size,2);e.uniform2fv(this.addr,n)}function il(e,t){let n=Mc(t,this.size,3);e.uniform3fv(this.addr,n)}function al(e,t){let n=Mc(t,this.size,4);e.uniform4fv(this.addr,n)}function ol(e,t){let n=Mc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function sl(e,t){let n=Mc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function cl(e,t){let n=Mc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ll(e,t){e.uniform1iv(this.addr,t)}function ul(e,t){e.uniform2iv(this.addr,t)}function dl(e,t){e.uniform3iv(this.addr,t)}function fl(e,t){e.uniform4iv(this.addr,t)}function pl(e,t){e.uniform1uiv(this.addr,t)}function ml(e,t){e.uniform2uiv(this.addr,t)}function hl(e,t){e.uniform3uiv(this.addr,t)}function gl(e,t){e.uniform4uiv(this.addr,t)}function _l(e,t,n){let r=this.cache,i=t.length,a=Fc(n,i);Nc(r,a)||(e.uniform1iv(this.addr,a),Pc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Cc:Sc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function vl(e,t,n){let r=this.cache,i=t.length,a=Fc(n,i);Nc(r,a)||(e.uniform1iv(this.addr,a),Pc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Tc,a[e])}function yl(e,t,n){let r=this.cache,i=t.length,a=Fc(n,i);Nc(r,a)||(e.uniform1iv(this.addr,a),Pc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Ec,a[e])}function bl(e,t,n){let r=this.cache,i=t.length,a=Fc(n,i);Nc(r,a)||(e.uniform1iv(this.addr,a),Pc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||wc,a[e])}function xl(e){switch(e){case 5126:return nl;case 35664:return rl;case 35665:return il;case 35666:return al;case 35674:return ol;case 35675:return sl;case 35676:return cl;case 5124:case 35670:return ll;case 35667:case 35671:return ul;case 35668:case 35672:return dl;case 35669:case 35673:return fl;case 5125:return pl;case 36294:return ml;case 36295:return hl;case 36296:return gl;case 35678:case 36198:case 36298:case 36306:case 35682:return _l;case 35679:case 36299:case 36307:return vl;case 35680:case 36300:case 36308:case 36293:return yl;case 36289:case 36303:case 36311:case 36292:return bl}}var Sl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tl(t.type)}},Cl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xl(t.type)}},wl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Tl=/(\w+)(\])?(\[|\.)?/g;function El(e,t){e.seq.push(t),e.map[t.id]=t}function Dl(e,t,n){let r=e.name,i=r.length;for(Tl.lastIndex=0;;){let a=Tl.exec(r),o=Tl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){El(n,l===void 0?new Sl(s,e,t):new Cl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new wl(s),El(n,e)),n=e}}}var Ol=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Dl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function kl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Al=37297,jl=0;function Ml(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Nl=new Wn;function Pl(e){Yn._getMatrix(Nl,Yn.workingColorSpace,e);let t=`mat3( ${Nl.elements.map(e=>e.toFixed(4))} )`;switch(Yn.getTransfer(e)){case mn:return[t,`LinearTransferOETF`];case hn:return[t,`sRGBTransferOETF`];default:return I(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Fl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ml(e.getShaderSource(t),r)}return i}function Il(e,t){let n=Pl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Ll={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Rl(e,t){let n=Ll[t];return n===void 0?(I(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var zl=new R;function Bl(){return Yn.getLuminanceCoefficients(zl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${zl.x.toFixed(4)}, ${zl.y.toFixed(4)}, ${zl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Vl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Wl).join(`
`)}function Hl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ul(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Wl(e){return e!==``}function Gl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ql=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(e){return e.replace(ql,Xl)}var Yl=new Map;function Xl(e,t){let n=Fs[t];if(n===void 0){let e=Yl.get(t);if(e!==void 0)n=Fs[e],I(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Jl(n)}var Zl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ql(e){return e.replace(Zl,$l)}function $l(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function eu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var tu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function nu(e){return tu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var ru={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function iu(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:ru[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var au={302:`ENVMAP_MODE_REFRACTION`};function ou(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:au[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var su={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function cu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:su[e.combine]||`ENVMAP_BLENDING_NONE`}function lu(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function uu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=nu(n),l=iu(n),u=ou(n),d=cu(n),f=lu(n),p=Vl(n),m=Hl(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Wl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Wl).join(`
`),_.length>0&&(_+=`
`)):(g=[eu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Wl).join(`
`),_=[eu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Fs.tonemapping_pars_fragment,n.toneMapping===0?``:Rl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Fs.colorspace_pars_fragment,Il(`linearToOutputTexel`,n.outputColorSpace),Bl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Wl).join(`
`)),o=Jl(o),o=Gl(o,n),o=Kl(o,n),s=Jl(s),s=Gl(s,n),s=Kl(s,n),o=Ql(o),s=Ql(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=kl(i,i.VERTEX_SHADER,y),S=kl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Fl(i,x,`vertex`),n=Fl(i,S,`fragment`);Dn(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):I(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Ol(i,h),T=Ul(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Al)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=jl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var du=0,fu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new pu(e),t.set(e,n)),n}},pu=class{constructor(e){this.id=du++,this.code=e,this.usedTimes=0}};function mu(e){return e===1030||e===37490||e===36285}function hu(e,t,n,r,i,a){let o=new xr,s=new fu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&I(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Is[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let ee=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=h.isInstancedMesh===!0,N=h.isBatchedMesh===!0,te=!!i.map,ne=!!i.matcap,re=!!x,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,ue=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=fe&&!!i.anisotropyMap,be=pe&&!!i.clearcoatMap,xe=pe&&!!i.clearcoatNormalMap,Se=pe&&!!i.clearcoatRoughnessMap,Ce=ge&&!!i.iridescenceMap,P=ge&&!!i.iridescenceThicknessMap,we=_e&&!!i.sheenColorMap,Te=_e&&!!i.sheenRoughnessMap,Ee=!!i.specularMap,F=!!i.specularColorMap,De=!!i.specularIntensityMap,Oe=ve&&!!i.transmissionMap,ke=ve&&!!i.thicknessMap,Ae=!!i.gradientMap,je=!!i.alphaMap,Me=i.alphaTest>0,Ne=!!i.alphaHash,Pe=!!i.extensions,Fe=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Fe=e.toneMapping);let Ie={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:N,batchingColor:N&&h._colorsTexture!==null,instancing:M,instancingColor:M&&h.instanceColor!==null,instancingMorph:M&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Yn.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:ne,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:S,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&mu(i.normalMap.format),metalnessMap:ue,roughnessMap:de,anisotropy:fe,anisotropyMap:ye,clearcoat:pe,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:Ce,iridescenceThicknessMap:P,sheen:_e,sheenColorMap:we,sheenRoughnessMap:Te,specularMap:Ee,specularColorMap:F,specularIntensityMap:De,transmission:ve,transmissionMap:Oe,thicknessMap:ke,gradientMap:Ae,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:je,alphaTest:Me,alphaHash:Ne,combine:i.combine,mapUv:te&&m(i.map.channel),aoMapUv:ie&&m(i.aoMap.channel),lightMapUv:ae&&m(i.lightMap.channel),bumpMapUv:oe&&m(i.bumpMap.channel),normalMapUv:se&&m(i.normalMap.channel),displacementMapUv:ce&&m(i.displacementMap.channel),emissiveMapUv:le&&m(i.emissiveMap.channel),metalnessMapUv:ue&&m(i.metalnessMap.channel),roughnessMapUv:de&&m(i.roughnessMap.channel),anisotropyMapUv:ye&&m(i.anisotropyMap.channel),clearcoatMapUv:be&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:P&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:we&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(i.sheenRoughnessMap.channel),specularMapUv:Ee&&m(i.specularMap.channel),specularColorMapUv:F&&m(i.specularColorMap.channel),specularIntensityMapUv:De&&m(i.specularIntensityMap.channel),transmissionMapUv:Oe&&m(i.transmissionMap.channel),thicknessMapUv:ke&&m(i.thicknessMap.channel),alphaMapUv:je&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(se||fe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(te||je),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Fe,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&Yn.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&Yn.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Pe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Pe&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Is[t];n=po.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new uu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function gu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function _u(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function vu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function yu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||_u),r.length>1&&r.sort(t||vu),i.length>1&&i.sort(t||vu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function bu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new yu,e.set(t,[i])):n>=r.length?(i=new yu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function xu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new R,color:new B};break;case`SpotLight`:n={position:new R,direction:new R,color:new B,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new R,color:new B,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new R,skyColor:new B,groundColor:new B};break;case`RectAreaLight`:n={color:new B,position:new R,halfWidth:new R,halfHeight:new R}}return e[t.id]=n,n}}}function Su(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Cu=0;function wu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Tu(e){let t=new xu,n=Su(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new R);let i=new R,a=new z,o=new z;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(wu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=U.LTC_FLOAT_1,r.rectAreaLTC2=U.LTC_FLOAT_2):(r.rectAreaLTC1=U.LTC_HALF_1,r.rectAreaLTC2=U.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Cu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Eu(e){let t=new Tu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Du(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Eu(e),t.set(n,[a])):r>=i.length?(a=new Eu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ou=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ku=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Au=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],ju=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Mu=new z,Nu=new R,Pu=new R;function Fu(e,t,n){let r=new Oa,i=new L,a=new L,o=new or,s=new xo,c=new So,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new go({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new L},radius:{value:4}},vertexShader:Ou,fragmentShader:ku}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Vi;m.setAttribute(`position`,new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new H(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(I(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){I(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){I(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new cr(i.x,i.y,{format:vt,type:at,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Wa(i.x,i.y,it),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=mt,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Ke,d.map.depthTexture.magFilter=Ke}else l.isPointLight?(d.map=new fc(i.x),d.map.depthTexture=new Ga(i.x,rt)):(d.map=new cr(i.x,i.y),d.map.depthTexture=new Wa(i.x,i.y,rt)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=mt,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Ye,d.map.depthTexture.magFilter=Ye):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Ke,d.map.depthTexture.magFilter=Ke);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Nu.setFromMatrixPosition(l.matrixWorld),e.position.copy(Nu),Pu.copy(e.position),Pu.add(Au[t]),e.up.copy(ju[t]),e.lookAt(Pu),e.updateMatrixWorld(),n.makeTranslation(-Nu.x,-Nu.y,-Nu.z),Mu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Mu,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new cr(i.x,i.y,{format:vt,type:at}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Iu(e,t){function n(){let t=!1,n=new or,r=null,i=new or(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ue(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=An[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ue(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new B(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(te)[1]),M=N>=1);let ne=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new or().fromArray(ie),se=new or().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ue(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),ue(e.CULL_FACE),_e(0);function ue(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(de(e.BLEND),g=!1);else if(g===!1&&(ue(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Dn(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Dn(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Dn(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Dn(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):ue(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?de(e.CULL_FACE):(ue(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function xe(t){t!==k&&(M&&e.lineWidth(t),k=t)}function Se(t,n,r){t?(ue(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?ue(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function P(t){t===void 0&&(t=e.TEXTURE0+j-1),ne!==t&&(e.activeTexture(t),ne=t)}function we(t,n,r){r===void 0&&(r=ne===null?e.TEXTURE0+j-1:ne);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(ne!==r&&(e.activeTexture(r),ne=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Te(){let t=re[ne];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){Dn(`WebGLState:`,e)}}function F(){try{e.compressedTexImage3D(...arguments)}catch(e){Dn(`WebGLState:`,e)}}function De(){try{e.texSubImage2D(...arguments)}catch(e){Dn(`WebGLState:`,e)}}function Oe(){try{e.texSubImage3D(...arguments)}catch(e){Dn(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage2D(...arguments)}catch(e){Dn(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage3D(...arguments)}catch(e){Dn(`WebGLState:`,e)}}function je(){try{e.texStorage2D(...arguments)}catch(e){Dn(`WebGLState:`,e)}}function Me(){try{e.texStorage3D(...arguments)}catch(e){Dn(`WebGLState:`,e)}}function Ne(){try{e.texImage2D(...arguments)}catch(e){Dn(`WebGLState:`,e)}}function Pe(){try{e.texImage3D(...arguments)}catch(e){Dn(`WebGLState:`,e)}}function Fe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ie(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Le(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Re(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function ze(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Be(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,re={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new B(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ue,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:P,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:F,texImage2D:Ne,texImage3D:Pe,pixelStorei:Ie,getParameter:Fe,updateUBOMapping:ze,uniformBlockBinding:Be,texStorage2D:je,texStorage3D:Me,texSubImage2D:De,texSubImage3D:Oe,compressedTexSubImage2D:ke,compressedTexSubImage3D:Ae,scissor:Le,viewport:Re,reset:Ve}}function Lu(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new L,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Sn(`canvas`)}function g(e,t,n){let r=1,i=Ee(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),I(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&I(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];I(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||I(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?mn:Yn.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,I(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function ee(e){O=e}function j(){let e=O;return e>=i.maxTextures&&I(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function M(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function N(t,i){let a=r.get(t);if(t.isVideoTexture&&we(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)I(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)I(`WebGLRenderer: Texture marked for update but image is incomplete`);else{de(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function te(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?de(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ne(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?de(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function re(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?fe(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ie={[Ue]:e.REPEAT,[We]:e.CLAMP_TO_EDGE,[Ge]:e.MIRRORED_REPEAT},ae={[Ke]:e.NEAREST,[qe]:e.NEAREST_MIPMAP_NEAREST,[Je]:e.NEAREST_MIPMAP_LINEAR,[Ye]:e.LINEAR,[Xe]:e.LINEAR_MIPMAP_NEAREST,[Ze]:e.LINEAR_MIPMAP_LINEAR},oe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function se(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&I(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ie[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ie[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ie[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ae[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ae[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,oe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ce(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=M(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function le(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ue(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=le(n.start,r.width,4),c=le(t.start,r.width,4);n.start<=i+1&&a===c&&le(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function de(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ce(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Yn.getPrimaries(Yn.workingColorSpace),r=o.colorSpace===``?null:Yn.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=Te(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);se(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===ht,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&ue(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=js(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=js(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=Ee(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=Ee(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function fe(t,o,s){if(o.image.length!==6)return;let c=ce(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Yn.getPrimaries(Yn.workingColorSpace),r=o.colorSpace===``?null:Yn.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Te(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);se(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=Ee(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function pe(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),P(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ce(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function me(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;P(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ce(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ce(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);P(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ce(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ce(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function he(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),se(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else N(i.depthTexture,0);let u=l.__webglTexture,d=Ce(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)P(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)P(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ge(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)he(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?he(i.__webglFramebuffer[0],t,0):he(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),me(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),me(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function _e(t,n,i){let a=r.get(t);n!==void 0&&pe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ge(t)}function ve(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&P(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ce(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),me(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),se(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)pe(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else pe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),se(c,a),pe(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),se(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)pe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else pe(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&ge(t)}function ye(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let be=[],xe=[];function Se(t){if(t.samples>0){if(P(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(be.length=0,xe.length=0,be.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(be.push(l),xe.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,xe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,be))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ce(e){return Math.min(i.maxSamples,e.samples)}function P(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function we(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Te(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Yn.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&I(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Dn(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ee(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=j,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=ee,this.setTexture2D=N,this.setTexture2DArray=te,this.setTexture3D=ne,this.setTextureCube=re,this.rebindTextures=_e,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=P,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Ru(e,t){function n(n,r=``){let i,a=Yn.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var zu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Vu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ka(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new go({vertexShader:zu,fragmentShader:Bu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new H(new ro(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hu=class extends jn{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Vu,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new L,C=null,w=null,T=new ts;T.viewport=new or;let E=new ts;E.viewport=new or;let D=[T,E],O=new ds,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Br,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Br,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Br,b[e]=t),t.getHandSpace()};function ee(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function j(){r.removeEventListener(`select`,ee),r.removeEventListener(`selectstart`,ee),r.removeEventListener(`selectend`,ee),r.removeEventListener(`squeeze`,ee),r.removeEventListener(`squeezestart`,ee),r.removeEventListener(`squeezeend`,ee),r.removeEventListener(`end`,j),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,ee),r.addEventListener(`selectstart`,ee),r.addEventListener(`selectend`,ee),r.addEventListener(`squeeze`,ee),r.addEventListener(`squeezestart`,ee),r.addEventListener(`squeezeend`,ee),r.addEventListener(`end`,j),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?ht:mt,a=_.stencil?ct:rt);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new cr(d.textureWidth,d.textureHeight,{format:pt,type:Qe,depthTexture:new Wa(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new cr(f.framebufferWidth,f.framebufferHeight,{format:pt,type:Qe,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),se.setContext(r),se.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let N=new R,te=new R;function ne(e,t,n){N.setFromMatrixPosition(t.matrixWorld),te.setFromMatrixPosition(n.matrixWorld);let r=N.distanceTo(te),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function re(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;re(O,i);for(let e=0;e<a.length;e++)re(a[e],i);a.length===2?ne(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ie(e,O,i)};function ie(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Pn*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ae=null;function oe(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new ts,o.layers.enable(n),o.viewport=new or,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Ka,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ae&&ae(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let se=new Ns;se.setAnimationLoop(oe),this.setAnimationLoop=function(e){ae=e},this.dispose=function(){}}},Uu=new z,Wu=new Wn;Wu.set(-1,0,0,0,1,0,0,0,1);function Gu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,fo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Uu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Wu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ku(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return Dn(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?I(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):I(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var qu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ju=null;function Yu(){return Ju===null&&(Ju=new ha(qu,16,16,vt,at),Ju.name=`DFG_LUT`,Ju.minFilter=Ye,Ju.magFilter=Ye,Ju.wrapS=We,Ju.wrapT=We,Ju.generateMipmaps=!1,Ju.needsUpdate=!0),Ju}var Xu=class{constructor(e={}){let{canvas:t=Cn(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Qe}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([bt,yt,_t]),g=new Set([Qe,rt,tt,ct,ot,st]),_=new Uint32Array(4),v=new Int32Array(4),y=new R,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=fn;let ee=0,j=0,M=null,N=-1,te=null,ne=new or,re=new or,ie=null,ae=new B(0),oe=0,se=t.width,ce=t.height,le=1,ue=null,de=null,fe=new or(0,0,se,ce),pe=new or(0,0,se,ce),me=!1,he=new Oa,ge=!1,_e=!1,ve=new z,ye=new R,be=new or,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function Ce(){return M===null?le:1}let P=n;function we(e,n){return t.getContext(e,n)}let Te,Ee,F,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,Ye,!1),t.addEventListener(`webglcontextrestored`,Xe,!1),t.addEventListener(`webglcontextcreationerror`,$e,!1),P===null){let t=`webgl2`;if(P=we(t,e),P===null)throw we(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}qe()}catch(e){throw t.removeEventListener(`webglcontextlost`,Ye,!1),t.removeEventListener(`webglcontextrestored`,Xe,!1),t.removeEventListener(`webglcontextcreationerror`,$e,!1),Dn(`WebGLRenderer: `+e.message),e}function qe(){Te=new mc(P),Te.init(),We=new Ru(P,Te),Ee=new Us(P,Te,e,We),F=new Iu(P,Te),Ee.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),O=P.createFramebuffer(),k=P.createFramebuffer(),A=P.createFramebuffer(),De=new _c(P),Oe=new gu,ke=new Lu(P,Te,F,Oe,Ee,We,De),Ae=new pc(T),je=new Ps(P),Ge=new Vs(P,je),Me=new hc(P,je,De,Ge),Ne=new yc(P,Me,je,Ge,De),Ve=new vc(P,Ee,ke),Re=new Ws(Oe),Pe=new hu(T,Ae,Te,Ee,Ge,Re),Fe=new Gu(T,Oe),Ie=new bu,Le=new Du(Te),Be=new Bs(T,Ae,F,Ne,p,s),ze=new Fu(T,Ne,Ee),Ke=new Ku(P,De,Ee,F),He=new Hs(P,Te,De),Ue=new gc(P,Te,De),De.programs=Pe.programs,T.capabilities=Ee,T.extensions=Te,T.properties=Oe,T.renderLists=Ie,T.shadowMap=ze,T.state=F,T.info=De}m!==1009&&(w=new xc(m,t.width,t.height,o,r,i));let Je=new Hu(T,P);this.xr=Je,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Te.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Te.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(e){e!==void 0&&(le=e,this.setSize(se,ce,!1))},this.getSize=function(e){return e.set(se,ce)},this.setSize=function(e,n,r=!0){Je.isPresenting?I(`WebGLRenderer: Can't change size while VR device is presenting.`):(se=e,ce=n,t.width=Math.floor(e*le),t.height=Math.floor(n*le),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(se*le,ce*le).floor()},this.setDrawingBufferSize=function(e,n,r){se=e,ce=n,le=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)Dn(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){I(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ne)},this.getViewport=function(e){return e.copy(fe)},this.setViewport=function(e,t,n,r){e.isVector4?fe.set(e.x,e.y,e.z,e.w):fe.set(e,t,n,r),F.viewport(ne.copy(fe).multiplyScalar(le).round())},this.getScissor=function(e){return e.copy(pe)},this.setScissor=function(e,t,n,r){e.isVector4?pe.set(e.x,e.y,e.z,e.w):pe.set(e,t,n,r),F.scissor(re.copy(pe).multiplyScalar(le).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(e){F.setScissorTest(me=e)},this.setOpaqueSort=function(e){ue=e},this.setTransparentSort=function(e){de=e},this.getClearColor=function(e){return e.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=Be.getClearColor(),r=Be.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,P.clearBufferuiv(P.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,P.clearBufferiv(P.COLOR,0,v))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ye,!1),t.removeEventListener(`webglcontextrestored`,Xe,!1),t.removeEventListener(`webglcontextcreationerror`,$e,!1),Be.dispose(),Ie.dispose(),Le.dispose(),Oe.dispose(),Ae.dispose(),Ne.dispose(),Ge.dispose(),Ke.dispose(),Pe.dispose(),Je.dispose(),Je.removeEventListener(`sessionstart`,ft),Je.removeEventListener(`sessionend`,pt),mt.stop()};function Ye(e){e.preventDefault(),Tn(`WebGLRenderer: Context Lost.`),E=!0}function Xe(){Tn(`WebGLRenderer: Context Restored.`),E=!1;let e=De.autoReset,t=ze.enabled,n=ze.autoUpdate,r=ze.needsUpdate,i=ze.type;qe(),De.autoReset=e,ze.enabled=t,ze.autoUpdate=n,ze.needsUpdate=r,ze.type=i}function $e(e){Dn(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function et(e){let t=e.target;t.removeEventListener(`dispose`,et),nt(t)}function nt(e){it(e),Oe.remove(e)}function it(e){let t=Oe.get(e).programs;t!==void 0&&(t.forEach(function(e){Pe.releaseProgram(e)}),e.isShaderMaterial&&Pe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=xe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Dt(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Me.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ge.setup(i,r,s,n,c);let h,g=He;if(c!==null&&(h=je.get(c),g=Ue,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*Ce()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*Ce()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Te.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?je.get(c).bytesPerElement:1,o=Oe.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function lt(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),ge===!0&&Re.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ct(e,t,r),e.side=0,e.needsUpdate=!0,Ct(e,t,r),e.side=2):Ct(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Le.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),_e=this.localClippingEnabled,ge=Re.init(this.clippingPlanes,_e),ge===!0&&Re.setGlobalState(this.clippingPlanes,t),D!==null&&ze.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];lt(o,n,t,e),r.add(o)}else lt(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=Oe.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Te.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ut=null;function dt(e){ut&&ut(e)}function ft(){mt.stop()}function pt(){mt.start()}let mt=new Ns;mt.setAnimationLoop(dt),typeof self<`u`&&mt.setContext(self),this.setAnimationLoop=function(e){ut=e,Je.setAnimationLoop(e),e===null?mt.stop():mt.start()},Je.addEventListener(`sessionstart`,ft),Je.addEventListener(`sessionend`,pt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){Dn(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Je.enabled===!0&&Je.isPresenting===!0,r=w!==null&&(M===null||n)&&w.begin(T,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Je.enabled===!0&&Je.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Je.cameraAutoUpdate===!0&&Je.updateCamera(t),t=Je.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,M),x=Le.get(e,C.length),x.init(t),x.state.textureUnits=ke.getTextureUnits(),C.push(x),ve.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),he.setFromProjectionMatrix(ve,yn,t.reversedDepth),_e=this.localClippingEnabled,ge=Re.init(this.clippingPlanes,_e),b=Ie.get(e,S.length),b.init(),S.push(b),Je.enabled===!0&&Je.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&ht(e,t,-1/0,T.sortObjects)}ht(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(ue,de),Se=Je.enabled===!1||Je.isPresenting===!1||Je.hasDepthSensing()===!1,Se&&Be.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ge===!0&&Re.beginShadows();let i=x.state.shadowsArray;if(ze.render(i,e,t),ge===!0&&Re.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];vt(n,r,e,a)}Se&&Be.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];gt(b,e,n,n.viewport)}}else r.length>0&&vt(n,r,e,t),Se&&Be.render(e),gt(b,e,t)}M!==null&&j===0&&(ke.updateMultisampleRenderTarget(M),ke.updateRenderTargetMipmap(M)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Ge.resetDefaultState(),N=-1,te=null,C.pop(),C.length>0?(x=C[C.length-1],ke.setTextureUnits(x.state.textureUnits),ge===!0&&Re.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function ht(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(he)){r&&be.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ve);let i=Ne.update(e),a=e.material;a.visible&&b.push(e,i,a,n,be.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(he))){let i=Ne.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),be.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),be.copy(e.boundingSphere.center)),be.applyMatrix4(e.matrixWorld).applyMatrix4(ve)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,be.z,s,t)}}else a.visible&&b.push(e,i,a,n,be.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)ht(i[e],t,n,r)}function gt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),ge===!0&&Re.setGlobalState(T.clippingPlanes,n),r&&F.viewport(ne.copy(r)),i.length>0&&xt(i,t,n),a.length>0&&xt(a,t,n),o.length>0&&xt(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function vt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Te.has(`EXT_color_buffer_half_float`)||Te.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new cr(1,1,{generateMipmaps:!0,type:e?at:Qe,minFilter:Ze,samples:Math.max(4,Ee.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Yn.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||ne;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ae),oe=T.getClearAlpha(),oe<1&&T.setClearColor(16777215,.5),T.clear(),Se&&Be.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),ge===!0&&Re.setGlobalState(T.clippingPlanes,r),xt(e,n,r),ke.updateMultisampleRenderTarget(a),ke.updateRenderTargetMipmap(a),Te.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,St(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(ke.updateMultisampleRenderTarget(a),ke.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ae,oe),d!==void 0&&(r.viewport=d),T.toneMapping=u}function xt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&St(o,t,n,s,l,c)}}function St(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function Ct(e,t,n){t.isScene!==!0&&(t=xe);let r=Oe.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Pe.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Pe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ae.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,et),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Tt(e,s),d}else s.uniforms=Pe.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Pe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Re.uniform),Tt(e,s),r.needsLights=kt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function wt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Ol.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Tt(e,t){let n=Oe.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Et(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function Dt(e,t,n,r,i){t.isScene!==!0&&(t=xe),ke.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Yn.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ae.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Oe.get(r),y=x.state.lights;if(ge===!0&&(_e===!0||e!==te)){let t=e===te&&r.id===N;Re.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Re.numPlanes||v.numIntersection!==Re.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=Ct(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(F.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==N&&(N=r.id,w=!0),v.needsLights){let e=Et(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||te!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(P,`projectionMatrix`,e.projectionMatrix),O.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(P,ye.setFromMatrixPosition(e.matrixWorld)),Ee.logarithmicDepthBuffer&&O.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),te!==e&&(te=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(P,`sunShadowMap`,y.state.sunShadowMap,ke),y.state.directionalShadowMap.length>0&&O.setValue(P,`directionalShadowMap`,y.state.directionalShadowMap,ke),y.state.spotShadowMap.length>0&&O.setValue(P,`spotShadowMap`,y.state.spotShadowMap,ke),y.state.pointShadowMap.length>0&&O.setValue(P,`pointShadowMap`,y.state.pointShadowMap,ke)),i.isSkinnedMesh){O.setOptional(P,i,`bindMatrix`),O.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(P,`boneTexture`,e.boneTexture,ke))}i.isBatchedMesh&&(O.setOptional(P,i,`batchingTexture`),O.setValue(P,`batchingTexture`,i._matricesTexture,ke),O.setOptional(P,i,`batchingIdTexture`),O.setValue(P,`batchingIdTexture`,i._indirectTexture,ke),O.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(P,`batchingColorTexture`,i._colorsTexture,ke));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Ve.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=Yu()),w){if(O.setValue(P,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&Ot(k,E),a&&r.fog===!0&&Fe.refreshFogUniforms(k,a),Fe.refreshMaterialUniforms(k,r,le,ce,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}Ol.upload(P,wt(v),k,ke)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Ol.upload(P,wt(v),k,ke),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(P,`center`,i.center),O.setValue(P,`modelViewMatrix`,i.modelViewMatrix),O.setValue(P,`normalMatrix`,i.normalMatrix),O.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ke.update(n,S),Ke.bind(n,S)}}return S}function Ot(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function kt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=Oe.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Oe.get(e.texture).__webglTexture=t,Oe.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Oe.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,ee=t,j=n;let r=null,i=!1,a=!1;if(e){let o=Oe.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),ne.copy(e.viewport),re.copy(e.scissor),ie=e.scissorTest,F.viewport(ne),F.scissor(re),F.setScissorTest(ie),N=-1;return}if(o.__webglFramebuffer===void 0)ke.setupRenderTarget(e);else if(o.__hasExternalTextures)ke.rebindTextures(e,Oe.get(e.texture).__webglTexture,Oe.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Oe.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);ke.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Oe.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&ke.useMultisampledRTT(e)===!1?Oe.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ne.copy(e.viewport),re.copy(e.scissor),ie=e.scissorTest}else ne.copy(fe).multiplyScalar(le).floor(),re.copy(pe).multiplyScalar(le).floor(),ie=me;if(n!==0&&(r=O),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(ne),F.scissor(re),F.setScissorTest(ie),i){let r=Oe.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Oe.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Oe.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}N=-1};function At(e){let t=Oe.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ee.textureFormatReadable(e.format),t.__typeReadable=Ee.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){Dn(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Oe.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=At(o);if(u.__formatReadable===!1){Dn(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){Dn(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,We.convert(c),We.convert(l),a)}finally{let e=M===null?null:Oe.get(M).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Oe.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=At(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,We.convert(l),We.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=M===null?null:Oe.get(M).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await kn(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;ke.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=We.convert(t.format),_=We.convert(t.type),v;t.isData3DTexture?(ke.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(ke.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(ke.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Oe.get(e),r=Oe.get(t),h=Oe.get(n.__renderTarget),g=Oe.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Oe.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Oe.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,o,s,f,p,o,s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Oe.has(e)){let n=Oe.get(e),r=Oe.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,k),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,o,s,f,p,o,s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){Oe.get(e).__webglFramebuffer===void 0&&ke.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?ke.setTextureCube(e,0):e.isData3DTexture?ke.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?ke.setTexture2DArray(e,0):ke.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){ee=0,j=0,M=null,F.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Yn._getDrawingBufferColorSpace(e),t.unpackColorSpace=Yn._getUnpackColorSpace()}};function Zu(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Vi,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Qu(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Qu(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Qu(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Ei(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function $u(e,t=1e-4){t=Math.max(t,2**-52);let n={},r=e.getIndex(),i=e.getAttribute(`position`),a=r?r.count:i.count,o=0,s=Object.keys(e.attributes),c={},l={},u=[],d=[`getX`,`getY`,`getZ`,`getW`],f=[`setX`,`setY`,`setZ`,`setW`];for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.attributes[n];c[n]=new r.constructor(new r.array.constructor(r.count*r.itemSize),r.itemSize,r.normalized);let i=e.morphAttributes[n];i&&(l[n]||(l[n]=[]),i.forEach((e,t)=>{let r=new e.array.constructor(e.count*e.itemSize);l[n][t]=new e.constructor(r,e.itemSize,e.normalized)}))}let p=t*.5,m=10**Math.log10(1/t),h=p*m;for(let t=0;t<a;t++){let i=r?r.getX(t):t,a=``;for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),o=r.itemSize;for(let e=0;e<o;e++)a+=`${Math.trunc(r[d[e]](i)*m+h)},`}if(a in n)u.push(n[a]);else{for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),a=e.morphAttributes[n],u=r.itemSize,p=c[n],m=l[n];for(let e=0;e<u;e++){let t=d[e],n=f[e];if(p[n](o,r[t](i)),a)for(let e=0,r=a.length;e<r;e++)m[e][n](o,a[e][t](i))}}n[a]=o,u.push(o),o++}}let g=e.clone();for(let t in e.attributes){let e=c[t];if(g.setAttribute(t,new e.constructor(e.array.slice(0,o*e.itemSize),e.itemSize,e.normalized)),t in l)for(let e=0;e<l[t].length;e++){let n=l[t][e];g.morphAttributes[t][e]=new n.constructor(n.array.slice(0,o*n.itemSize),n.itemSize,n.normalized)}}return g.setIndex(u),g}var ed=[`#eef0f8`,`#7ddc8a`,`#62a8ff`,`#c58bff`,`#ffb347`],td=[`common`,`uncommon`,`rare`,`epic`,`legendary`],nd=new B(`#ffffff`),rd=22,id=1.1,ad=10,od=.32,sd=96,cd=[0,0,3.2,4.2,6];function ld(e){let t=e.crystal?.grade??e.weapon?.rarity??`common`;return Math.max(0,td.indexOf(t))}function ud(){let e=new qa(.07,.62,.025);e.translate(0,.2,0);let t=new qa(.24,.05,.06);t.translate(0,-.12,0);let n=new qa(.05,.16,.05);return n.translate(0,-.22,0),Zu([e,t,n])??e}function dd(){let e=new Xa(.1,.16,1,10,1,!0);e.translate(0,.5,0);let t=e.getAttribute(`position`),n=[];for(let e=0;e<t.count;e++){let r=t.getY(e)>.5;n.push(1,1,1,r?0:.85)}return e.setAttribute(`color`,new ki(n,4)),e}var fd=class{group=new Rr;#e;#t;#n;#r=new z;#i=new Vn;#a=new R;#o=new R;#s=new br(0,0,0,`YXZ`);#c=ed.map(e=>new B(e));constructor(){let e=e=>new vo({color:`#ffffff`,emissive:`#ffffff`,emissiveIntensity:e,roughness:.3});this.#e=new wa(new no(.16),e(.9),sd),this.#t=new wa(ud(),e(.5),sd),this.#n=new wa(dd(),new V({vertexColors:!0,transparent:!0,blending:2,depthWrite:!1,side:2}),sd);for(let e of[this.#e,this.#t,this.#n])e.instanceMatrix.setUsage(vn),e.frustumCulled=!1,e.count=0,this.group.add(e)}show(e,t,n){let r=0,i=0,a=0;e.forEach((e,o)=>{if(r+i>=sd)return;let s=t-e.at,c=ld(e),l=this.#c[c]??nd,u=e.x,d=e.y,f=od+.05*Math.sin(t*.05+o);if(s<rd){let t=Math.max(0,s)/rd;u=e.fromX+(e.x-e.fromX)*t,d=e.fromY+(e.y-e.fromY)*t,f=od+4*id*t*(1-t)}else if(s<32){let e=(s-rd)/ad;f=od+.25*Math.sin(Math.PI*e)*(1-e)}let p=n(u,d),m=t*.03+o*1.7;e.weapon?(this.#i.setFromEuler(this.#s.set(1.15,m,.2)),this.#r.compose(this.#a.set(u,p+f,d),this.#i,this.#o.set(1,1,1)),this.#t.setMatrixAt(i,this.#r),this.#t.setColorAt(i++,l)):(this.#r.makeRotationY(m).setPosition(u,p+f,d),this.#e.setMatrixAt(r,this.#r),this.#e.setColorAt(r++,l));let h=cd[c]??0;h>0&&s>=rd&&(this.#r.makeScale(1,h,1).setPosition(u,p,d),this.#n.setMatrixAt(a,this.#r),this.#n.setColorAt(a++,l))});for(let[e,t]of[[this.#e,r],[this.#t,i],[this.#n,a]])e.count=t,e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0)}},pd=(e,t,n)=>e+(t-e)*n,md={yaw:55,pitch:-25,reach:0};function hd(e,t,n,r,i,a,o){let s=t>=0?e[t]:void 0;if(!s)return null;let c=o?.recovery??0,l=i>0||c>0?{...s,...S(s,i,c)}:s;s.reacts&&o?.quakeReach&&(a*=1+o.quakeReach/1e3);let u=md,d=n-1+r,f=l.hitbox,p=f.kind===`arc`?f.arcDeg:360,m=t%2==0?1:-1,h=Math.min(1,d/Math.max(1,l.activeFrom)),g=Math.min(1,Math.max(0,(d-l.activeFrom)/Math.max(1,l.activeTo-l.activeFrom))),_=Math.max(0,(d-l.activeTo)/Math.max(1,l.frames-l.activeTo)),v,y,b=u.reach,x=null;if(f.kind===`line`)v=pd(u.yaw,0,h),y=-8,b=d<l.activeFrom?-.3*h:d<=l.activeTo?.9:.9*(1-_);else if(p>=360){v=d<l.activeFrom?pd(u.yaw,90,h):90+360*g,y=-5;let e=90+360*g;x={tail:e-Math.min(360*g,300),head:e,radius:f.radius*a}}else{let e=m*(p/2+20),t=-m*(p/2);v=d<l.activeFrom?pd(u.yaw,e,h):pd(e,t,g),d>l.activeTo&&(v=pd(t,u.yaw,_)),y=-12,x={tail:e,head:pd(e,t,g),radius:f.radius*a}}return{index:t,step:l,f:d,yaw:v,pitch:y,reach:b,windUp:h,swing:g,recover:_,side:m,widen:a,slash:x}}var gd=(e,t,n)=>{let r=e[t];return typeof r==`number`?r:n},_d=(e,t)=>{let n=e.color;return typeof n==`string`?n:t};function vd(e){return new vo({color:e,roughness:.55,metalness:.1})}var yd={capsule(e){let t=gd(e,`radius`,.45),n=Math.max(gd(e,`height`,1.4),t*2),r=new H(new Ja(t,n-t*2,6,16),vd(_d(e,`#4aa3ff`)));r.position.y=n/2;let i=new H(new qa(t*.9,t*.35,t*.5),vd(`#e8f1ff`));i.position.set(0,n*.72,t*.75);let a=new Rr;return a.add(r,i),a},cone(e){let t=gd(e,`radius`,.45),n=gd(e,`height`,1.1),r=new H(new Za(t,n,20),vd(_d(e,`#e05555`)));r.position.y=n/2;let i=new H(new qa(t*.8,t*.25,t*.3),vd(`#ffe08a`));i.position.set(0,n*.45,t*.55);let a=new Rr;return a.add(r,i),a},blade(e){let t=gd(e,`length`,1.2),n=new H(new qa(.07,.03,t),vd(_d(e,`#e8e8f0`)));n.position.z=t/2+.15;let r=new H(new qa(.28,.05,.06),vd(`#9a7b3c`));r.position.z=.12;let i=new Rr;return i.add(n,r),i},turret(e){let t=gd(e,`radius`,.4),n=gd(e,`height`,1.15),r=_d(e,`#a35cff`),i=new H(new Xa(t,t*1.15,n*.55,18),vd(r));i.position.y=n*.275;let a=new H(new no(t*.8,0),vd(r));a.position.y=n*.72;let o=new H(new qa(t*.35,t*.35,t*1.3),vd(`#2b1840`));o.position.set(0,n*.72,t*.75);let s=new H(new qa(t*.7,t*.2,t*.2),vd(`#ffe08a`));s.position.set(0,n*.86,t*.55);let c=new Rr;return c.add(i,a,o,s),c},orb(e){let t=gd(e,`radius`,.25),n=_d(e,`#ff6bd5`),r=new H(new eo(t*.6,1),new V({color:`#ffffff`})),i=new H(new eo(t,1),new V({color:n,transparent:!0,opacity:.75,blending:2,depthWrite:!1})),a=new Rr;a.add(i,r);let o=gd(e,`trail`,0);for(let e=1;e<=o;e++){let r=new H(new eo(t*(1-e/(o+1.5)),1),new V({color:n,transparent:!0,opacity:.55*(1-e/(o+1)),blending:2,depthWrite:!1}));r.position.z=-t*1.1*e,a.add(r)}return a},crystal(e){let t=gd(e,`size`,.3),n=new H(new no(t),vd(_d(e,`#4a90e2`)));return n.position.y=t,n}};Object.keys(yd);function bd(e){let t=e?yd[e.gen]:void 0;if(e&&t)return t(e.params);let n=new H(new qa(.6,.6,.6),vd(`#ff00ff`));return n.position.y=.3,n}function xd(e){let t=[];return e.traverse(e=>{e instanceof H&&e.material instanceof vo&&t.push(e.material)}),t}var Sd=[`#5fd37a`,`#b98cff`,`#ffb648`],Cd=.85,wd=.7,Td=new B(`#ff3030`),Ed=new B(`#ffffff`),Dd=class{#e;#t;#n;#r=[];constructor(e,t,n){this.#e=e,this.#t=t,this.#n=n}place(e,t,n,r,i,a,o){let s=this.#i(e);if(s.group.visible=t!==null&&!t.dead,!t||t.dead)return;s.group.position.set(n,0,r),s.group.rotation.y=Math.atan2(t.fx,t.fy);let c=s.pivot;if(c.position.y=wd,c.rotation.set(0,0,0),t.downed)c.rotation.x=-Math.PI/2,c.position.y=.3;else if(t.dodgeFrame>=0){let e=Math.max(0,Math.min(1,(t.dodgeFrame-1+o)/this.#n.player.dodgeFrames));c.rotation.x=Math.PI*2*e,c.position.y=wd-.25*Math.sin(Math.PI*e)}else t.dash?(c.rotation.x=.55,c.position.y=.58):t.hurt>0&&(c.rotation.x=-.35*(t.hurt/12));let l=t.invulnerable>0&&t.dodgeFrame<0&&!t.dash&&Math.floor(a/4)%2==1;for(let e of s.materials)e.emissive.copy(t.hurt>0?Td:Ed),e.emissiveIntensity=t.hurt>0?t.hurt/12:l?.35:0;let u=t.downed?md:i??md,d=Math.PI/180;s.sword.rotation.set(-u.pitch*d,u.yaw*d,0,`YXZ`),s.sword.position.set(0,.20000000000000007,u.reach)}#i(e){let t=this.#r[e-1];if(t)return t;let n=new B(Sd[(e-1)%Sd.length]),r=bd(this.#t.visuals.get(this.#n.player.visual)),i=xd(r);for(let e of i)e.color.lerp(n,Cd);r.position.y=-.7;let a=new Rr;a.add(bd(this.#t.visuals.get(this.#n.weapon.visual)));let o=new Rr;o.add(r,a);let s=new H(new Ya(this.#n.player.radius*1.1,24),new V({color:`#000000`,transparent:!0,opacity:.35,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.01;let c=new Rr;c.add(o,s),this.#e.add(c);let l={group:c,pivot:o,sword:a,materials:i};return this.#r[e-1]=l,l}},Od=`#ffd166`,kd=`#3c4250`,Ad=`#b07a3a`,jd=`#3a3026`,Md=`#8a96a8`,Nd=`#8fd8ff`,Pd=`#ffd34a`,Fd=`#8a5a32`,Id=`#7fe8ff`,Ld=`#4a3a2a`,Rd=class{group=new Rr;#e=``;#t=[];#n=[];#r=null;#i=[];showCarts(e){for(;this.#i.length<e.length;){let e=new Rr,t=new H(new qa(.8,.5,1.1),new vo({color:Fd,roughness:.8}));t.position.y=.45;let n=new H(new qa(.6,.2,.8),new vo({color:Id,emissive:Id,emissiveIntensity:.8}));n.position.y=.75,e.add(t,n),this.#i.push(e),this.group.add(e)}this.#i.forEach((t,n)=>{let r=e[n];t.visible=r!==void 0&&!r.broken,r&&(t.position.set(r.x,0,r.y),t.rotation.y=Math.atan2(r.dx,r.dy))})}showMiners(e){for(;this.#n.length<e.length;){this.#r??=new vo({color:Pd,roughness:.7});let e=new H(new qa(.45,1.1,.35),this.#r);this.#n.push(e),this.group.add(e)}this.#n.forEach((t,n)=>{let r=e[n];t.visible=r!==void 0,r&&t.position.set(r.x,.55,r.y)})}update(e,t){let n=[e.altars.map(e=>`${e.x},${e.y},${+!!e.lit}${+!!e.using}`).join(`|`),e.chests.map(e=>`${e.x},${e.y},${+!!e.big}${+!!e.opened}`).join(`|`),e.lift?`${e.lift.x},${e.lift.y},${+!!e.lift.mended}`:``,e.shrines.map(e=>`${e.x},${e.y},${+!!e.used}`).join(`|`),e.tracks.map(e=>`${e.length}:${e[0]},${e[1]}`).join(`|`)].join(`/`);if(n===this.#e)return;this.#s(),this.#e=n;for(let n of e.altars){let e=n.lit?Od:kd,r=n.using?1.2:n.lit?.45:0,i=this.#o([.5,.9,.5],e,r);i.position.set(n.x,.45,n.y);let a=new H(new io(t-.12,t,40),this.#a(e,r*.6,n.lit?.7:.35));a.rotation.x=-Math.PI/2,a.position.set(n.x,.03,n.y),this.group.add(i,a)}for(let t of e.chests){let e=t.big?.9:.6,n=this.#o([e,e*.6,e*.7],t.opened?jd:Ad,0);n.position.set(t.x,e*.3,t.y),this.group.add(n)}for(let t of e.shrines){let e=this.#o([.4,1.2,.4],t.used?kd:Nd,t.used?0:.6);e.position.set(t.x,.6,t.y),this.group.add(e)}let r=e.lift;if(r){let e=this.#o([1.6,.12,1.6],r.mended?Od:Md,r.mended?.5:0);e.position.set(r.x,.06,r.y),this.group.add(e)}for(let t of e.tracks)for(let e=2;e+1<t.length;e+=2){let n=t[e-2]??0,r=t[e-1]??0,i=(t[e]??0)-n,a=(t[e+1]??0)-r,o=Math.sqrt(i*i+a*a),s=this.#o([.7,.02,o],Ld,0);s.position.set(n+i/2,.02,r+a/2),s.rotation.y=Math.atan2(i,a),this.group.add(s)}}clear(){this.#e!==``&&(this.#s(),this.#e=``)}#a(e,t,n=1){let r=new vo({color:e,emissive:e,emissiveIntensity:t,roughness:.6,transparent:n<1,opacity:n});return this.#t.push(r),r}#o(e,t,n){return new H(new qa(e[0],e[1],e[2]),this.#a(t,n))}#s(){for(let e of[...this.group.children])e instanceof H&&this.#n.includes(e)||e instanceof Rr&&this.#i.includes(e)||(this.group.remove(e),e instanceof H&&e.geometry.dispose());for(let e of this.#t)e.dispose();this.#t.length=0}},zd=56,Bd=7,Vd=5.5,Hd=1.05,Ud=.38,Wd=.045,Gd=40,Kd=[{delay:0,frames:22,reach:3.8},{delay:8,frames:24,reach:2.6}],qd={radius:1.9,frames:44},Jd=new B(`#ffc94a`),Yd=new B(`#fff6d6`),Xd=new B(`#ffe7a8`),Zd=class{group=new Rr;#e=-1e3;#t;#n;#r;#i;#a;constructor(){let e=(e,t)=>new V({color:e,...t?{map:t}:{},transparent:!0,blending:2,depthWrite:!1}),t=Qd(),n=new Xa(1,1,1,40,1,!0);n.translate(0,.5,0);let r=e(Jd,t),i=e(Yd,t);r.side=2,i.side=2,this.#t=new H(n,r),this.#n=new H(n,i);let a=new Ya(1,48);a.rotateX(-Math.PI/2);let o=e(Jd,$d());this.#r=new H(a,o),this.#r.position.y=.04;let s=new io(.86,1,72);s.rotateX(-Math.PI/2);let c=Kd.map(()=>e(Xd));this.#i=c.map(e=>{let t=new H(s,e);return t.position.y=.07,t}),this.#a={column:r,core:i,foot:o,rings:c};for(let e of[this.#r,...this.#i,this.#t,this.#n])e.renderOrder=20;this.group.add(this.#r,...this.#i,this.#t,this.#n),this.group.visible=!1}play(e){this.#e=e}bodyGlow(e){let t=e-this.#e;return t>=0&&t<Gd?(1-t/Gd)**2:0}update(e,t,n){let r=e-this.#e;if(this.group.visible=r>=0&&r<zd,!this.group.visible)return;this.group.position.set(t,0,n);let i=r/zd,a=Math.min(1,r/Bd),o=Vd*(1-(1-a)**3),s=Hd*(1+.3*(1-a))*(1-.4*i);this.#t.scale.set(s,o,s),this.#n.scale.set(s*Ud,o*1.08,s*Ud),this.#t.rotation.y=r*Wd,this.#n.rotation.y=-r*Wd*1.6,this.#a.column.opacity=.95*(1-i)**1.4,this.#a.core.opacity=(1-i)**2;let c=Math.min(1,r/qd.frames);this.#r.scale.setScalar(qd.radius*(.6+.4*Math.sqrt(c))),this.#a.foot.opacity=.85*(1-c)**1.5,Kd.forEach((e,t)=>{let n=this.#i[t],i=this.#a.rings[t],a=(r-e.delay)/e.frames;n.visible=a>=0&&a<1,n.visible&&(n.scale.setScalar(.3+e.reach*(1-(1-a)**2)),i.opacity=.9*(1-a))})}clear(){this.#e=-1e3,this.group.visible=!1}};function Qd(){let e=document.createElement(`canvas`);e.width=64,e.height=128;let t=e.getContext(`2d`);if(t){let e=t.createImageData(64,128);for(let t=0;t<128;t++){let n=(t/127)**1.6;for(let r=0;r<64;r++){let i=.5+.5*Math.cos(r/64*Math.PI*2*5),a=.45+.55*i*i,o=(t*64+r)*4;e.data[o]=255,e.data[o+1]=255,e.data[o+2]=255,e.data[o+3]=Math.round(255*n*a)}}t.putImageData(e,0,0)}return new Ua(e)}function $d(){let e=document.createElement(`canvas`);e.width=64,e.height=64;let t=e.getContext(`2d`);if(t){let e=t.createImageData(64,64);for(let t=0;t<64;t++)for(let n=0;n<64;n++){let r=n/63*2-1,i=t/63*2-1,a=Math.max(0,1-Math.sqrt(r*r+i*i))**1.5,o=(t*64+n)*4;e.data[o]=255,e.data[o+1]=255,e.data[o+2]=255,e.data[o+3]=Math.round(255*a)}t.putImageData(e,0,0)}return new Ua(e)}function ef(e){let t=e.clone();return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec3 instanceEmissive;
varying vec3 vInstanceEmissive;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vInstanceEmissive = instanceEmissive;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vInstanceEmissive;`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
totalEmissiveRadiance += vInstanceEmissive;`)},t.customProgramCacheKey=()=>`instance-emissive`,t}function tf(e){return e.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float instanceOpacity;
varying float vInstanceOpacity;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vInstanceOpacity = instanceOpacity;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vInstanceOpacity;`).replace(`#include <alphamap_fragment>`,`#include <alphamap_fragment>
diffuseColor.a *= vInstanceOpacity;`)},e.customProgramCacheKey=()=>`instance-opacity`,e}var nf=new z,rf=new z,af=new B(1,1,1),of=`
uniform sampler2D uDrape;
uniform vec4 uDrapeBox;
float drapeHeight(vec2 xz) {
  vec2 uv = (xz - uDrapeBox.xy) * uDrapeBox.zw;
  if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return 0.0;
  return texture2D(uDrape, uv).r;
}`,sf=`
vec4 drapeWorld = vec4(transformed, 1.0);
vec4 drapeOrigin = vec4(0.0, 0.0, 0.0, 1.0);
#ifdef USE_INSTANCING
drapeWorld = instanceMatrix * drapeWorld;
drapeOrigin = instanceMatrix * drapeOrigin;
#endif
drapeWorld = modelMatrix * drapeWorld;
drapeOrigin = modelMatrix * drapeOrigin;
drapeWorld.y += drapeHeight(drapeWorld.xz) - drapeHeight(drapeOrigin.xz);
vec4 mvPosition = viewMatrix * drapeWorld;
gl_Position = projectionMatrix * mvPosition;`;function cf(e,t){let n=t?.height;if(!n)return e;let r=e.elements,i=n(r[12]??0,r[14]??0);return i===0?e:(rf.copy(e),rf.elements[13]=(rf.elements[13]??0)+i,rf)}var lf=class{#e;#t=[];#n;#r;#i=0;constructor(e,t,n=32,r){this.#e=e,this.#r=n,this.#n=r,t.updateMatrixWorld(!0),t.traverse(e=>{if(!(e instanceof H))return;let t=e.material instanceof vo,r=t?ef(e.material):e.material.clone(),i={mesh:this.#a(e.geometry,r,e.renderOrder),local:e.matrixWorld.clone(),emissive:null};t&&(i.emissive=this.#o(i.mesh,n)),this.#t.push(i)})}#a(e,t,n){let r=new wa(e,t,this.#r);return r.instanceMatrix.setUsage(vn),r.frustumCulled=!1,r.renderOrder=n,r.count=0,this.#e.add(r),r}#o(e,t){let n=new ga(new Float32Array(t*3),3);return n.setUsage(vn),e.geometry=e.geometry.clone(),e.geometry.setAttribute(`instanceEmissive`,n),n}#s(){let e=this.#r*2;for(let t of this.#t){let n=t.mesh;this.#r=e;let r=this.#a(n.geometry,n.material,n.renderOrder);if(r.instanceMatrix.array.set(n.instanceMatrix.array),this.#e.remove(n),n.dispose(),t.mesh=r,t.emissive){let n=t.emissive;t.emissive=this.#o(r,e),t.emissive.array.set(n.array)}}this.#r=e}begin(){this.#i=0}add(e,t){this.#i===this.#r&&this.#s();let n=this.#i++,r=cf(e,this.#n);for(let e of this.#t)e.mesh.setMatrixAt(n,nf.multiplyMatrices(r,e.local)),e.emissive&&(t?e.emissive.setXYZ(n,t.r,t.g,t.b):e.emissive.setXYZ(n,0,0,0))}end(){for(let e of this.#t)e.mesh.count=this.#i,e.mesh.instanceMatrix.needsUpdate=!0,e.emissive&&(e.emissive.needsUpdate=!0)}dispose(){for(let e of this.#t)this.#e.remove(e.mesh),e.mesh.dispose()}},uf=class{#e;#t;#n;#r;#i;#a=0;constructor(e,t,n,r=64,i){this.#e=e,this.#i=r,this.#t=i,tf(n),this.#n=this.#o(t.clone(),n),this.#r=this.#s()}#o(e,t){let n=new wa(e,t,this.#i);return n.instanceMatrix.setUsage(vn),n.frustumCulled=!1,n.count=0,this.#e.add(n),n}#s(){let e=new ga(new Float32Array(this.#i),1);return e.setUsage(vn),this.#n.geometry.setAttribute(`instanceOpacity`,e),e}set renderOrder(e){this.#n.renderOrder=e}#c(){let e=this.#n,t=this.#r,n=e.instanceColor;this.#i*=2,this.#n=this.#o(e.geometry.clone(),e.material),this.#n.renderOrder=e.renderOrder,this.#n.instanceMatrix.array.set(e.instanceMatrix.array),this.#r=this.#s(),this.#r.array.set(t.array),n&&(this.#n.setColorAt(0,af),this.#n.instanceColor?.array.set(n.array)),this.#e.remove(e),e.dispose()}begin(){this.#a=0}drape(e,t){let n=this.#n.material,r=n.onBeforeCompile;n.onBeforeCompile=(e,i)=>{r.call(n,e,i),e.uniforms.uDrape=t.uDrape,e.uniforms.uDrapeBox=t.uDrapeBox,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
${of}`).replace(`#include <project_vertex>`,sf)},n.customProgramCacheKey=()=>`instance-opacity-drape`,n.needsUpdate=!0;let i=this.#n.geometry,a=e.clone();a.setAttribute(`instanceOpacity`,this.#r),this.#n.geometry=a,i.dispose()}add(e,t,n){this.#a===this.#i&&this.#c();let r=this.#a++;this.#n.setMatrixAt(r,cf(e,this.#t)),this.#r.setX(r,t),n&&this.#n.setColorAt(r,n)}end(){this.#n.count=this.#a,this.#n.instanceMatrix.needsUpdate=!0,this.#r.needsUpdate=!0,this.#n.instanceColor&&(this.#n.instanceColor.needsUpdate=!0)}},df={combat:`#7fb2ff`,elite:`#ff6b6b`,shop:`#ffd166`,boss:`#c77dff`},ff=1.6,pf=class{#e=new Rr;#t=[];#n;constructor(e,t){this.#n=t,e.add(this.#e)}update(e,t){for(;this.#t.length<e.length;)this.#t.push(this.#r());this.#t.forEach((n,r)=>{let i=e[r];if(n.group.visible=i!==void 0,!i)return;n.group.position.set(i.x,0,i.y);let a=i.size??1;n.group.scale.set(a,1,a),n.ring.color.set(df[i.kind]),n.column.color.set(df[i.kind]);let o=.5+.5*Math.sin(t*.08+r*2);n.ring.opacity=.55+.3*o,n.column.opacity=.16+.12*o})}#r(){let e=this.#n,t=()=>new V({transparent:!0,depthWrite:!1,blending:2}),n=t(),r=new H(new io(e*.72,e,40),n);r.rotation.x=-Math.PI/2,r.position.y=.03;let i=t(),a=new H(new Xa(e*.78,e*.78,ff,28,1,!0),i);a.position.y=ff/2;let o=new Rr;return o.add(r,a),this.#e.add(o),{group:o,ring:n,column:i}}},mf=60,hf=.618033988749,gf=.754877666247,_f=class{mesh;#e;#t=new z;#n=new B;#r;#i=0;#a=0;constructor(e,t){this.mesh=new wa(new no(1,0),new V({color:`#ffffff`}),e),this.mesh.count=0,this.mesh.frustumCulled=!1,this.#e=_(t),this.#r=Array.from({length:e},()=>({start:0,life:-1,x:0,y:0,z:0,vx:0,vy:0,vz:0,gravity:0,size:0,r:1,g:1,b:1}))}get live(){return this.#a}sparks(e,t,n,r,i,a){let o=this.#e;this.#n.set(a);for(let a=0;a<i;a++){let i=(o.float()-.5)*1.6,a=3+o.float()*4,s=n-r*i,c=r+n*i,l=Math.hypot(s,c)||1,u=this.#o();u.start=e,u.life=10+o.int(0,8),u.x=t.x,u.y=t.y,u.z=t.z,u.vx=s/l*a,u.vy=1+o.float()*3,u.vz=c/l*a,u.gravity=9,u.size=.05+o.float()*.04,this.#s(u)}}glint(e,t,n){let r=this.#e;this.#n.set(n);for(let n=0;n<9;n++){let n=this.#o();n.start=e,n.life=12+r.int(0,8),n.x=t.x+(r.float()-.5)*.4,n.y=t.y+(r.float()-.5)*.3,n.z=t.z+(r.float()-.5)*.4,n.vx=(r.float()-.5)*.8,n.vy=.6+r.float()*.8,n.vz=(r.float()-.5)*.8,n.gravity=-1,n.size=.035+r.float()*.03,this.#s(n)}}rise(e,t,n,r){this.#n.set(r);for(let r=0;r<n;r++){let n=r*hf%1*Math.PI*2,i=Math.cos(n),a=Math.sin(n),o=r*gf%1,s=this.#o();s.start=e+r%4*3,s.life=32+Math.round(o*20),s.x=t.x+i*.8,s.y=t.y,s.z=t.z+a*.8,s.vx=i*(.5+.9*o),s.vy=2.4+2.6*o,s.vz=a*(.5+.9*o),s.gravity=-3,s.size=.07+.06*o,this.#s(s)}}burst(e,t,n,r){let i=this.#e;this.#n.set(r);for(let r=0;r<n;r++){let n=i.float()*2-1,r=i.float()*2-1,a=1.5+i.float()*3,o=Math.hypot(n,r)||1,s=this.#o();s.start=e,s.life=22+i.int(0,14),s.x=t.x,s.y=t.y,s.z=t.z,s.vx=n/o*a,s.vy=2+i.float()*4,s.vz=r/o*a,s.gravity=8,s.size=.08+i.float()*.07,this.#s(s)}}ambient(e,t,n,r){let i=this.#e;this.#n.set(`#7fd3ff`);let a=Math.floor((e+1)*t/mf)-Math.floor(e*t/mf);for(let t=0;t<a;t++){let t=this.#o();t.start=e,t.life=mf,t.x=i.float()*n,t.y=.1+i.float()*.4,t.z=i.float()*r,t.vx=(i.float()-.5)*.4,t.vy=.4+i.float()*.6,t.vz=(i.float()-.5)*.4,t.gravity=0,t.size=.04+i.float()*.03,this.#s(t)}}#o(){let e=this.#r[this.#i];return this.#i=(this.#i+1)%this.#r.length,e}#s(e){e.r=this.#n.r,e.g=this.#n.g,e.b=this.#n.b}update(e){let t=0;for(let n of this.#r){let r=e-n.start;if(r<0||r>n.life)continue;let i=r/60,a=n.size*(1-r/n.life);this.#t.makeScale(a,a,a).setPosition(n.x+n.vx*i,Math.max(.02,n.y+n.vy*i-.5*n.gravity*i*i),n.z+n.vz*i),this.mesh.setMatrixAt(t,this.#t),this.mesh.setColorAt(t,this.#n.setRGB(n.r,n.g,n.b)),t++}this.#a=t,this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}reset(e){this.#e=_(e),this.clear()}clear(){for(let e of this.#r)e.life=-1;this.#i=0,this.#a=0,this.mesh.count=0}};function vf(){let e=document.createElement(`canvas`);e.width=64,e.height=64;let t=e.getContext(`2d`);if(t){let e=t.createImageData(64,64);for(let t=0;t<64;t++)for(let n=0;n<64;n++){let r=n/63*2-1,i=t/63*2-1,a=Math.sqrt(r*r+i*i),o=Math.max(0,1-a*2.2)**2,s=Math.max(Math.exp(-((r/.05)**2))*Math.max(0,1-Math.abs(i))**1.5,Math.exp(-((i/.05)**2))*Math.max(0,1-Math.abs(r))**1.5),c=(t*64+n)*4;e.data[c]=255,e.data[c+1]=255,e.data[c+2]=255,e.data[c+3]=Math.round(255*Math.min(1,o*.9+s))}t.putImageData(e,0,0)}return new Ua(e)}function yf(e,t){let n=Math.min(t,360)/2*(Math.PI/180),r=new io(Math.min(.35,e*.3),e,48,1,-Math.PI/2-n,n*2);return r.rotateX(-Math.PI/2),r}function bf(){let e=new ro(1,1);return e.rotateX(-Math.PI/2),e.translate(0,0,.5),e}function xf(){let e=document.createElement(`canvas`);e.width=32,e.height=128;let t=e.getContext(`2d`);if(t){let e=t.createImageData(32,128);for(let t=0;t<128;t++){let n=t/127,r=.25+.75*n*n;for(let n=0;n<32;n++){let i=Math.abs(n/31-.5)*2,a=(1-i*i)**2,o=(t*32+n)*4;e.data[o]=255,e.data[o+1]=255,e.data[o+2]=255,e.data[o+3]=Math.round(255*a*r)}}t.putImageData(e,0,0)}return new Ua(e)}var Sf=[`#1a2029`,`#27313f`,`#344156`,`#41516b`],Cf={stairs:`#2f3d2c`,bridge:`#4a3a28`,chasm:`#06080b`,wall:`#2c3646`,breakable:`#46382a`,cliff:`#c08a3a`,step:`#6f8f5e`},wf=1.2;function Tf(e){let t=new Rr,n=[],r=[],i=[];for(let t=0;t<e.height;t++)for(let a=0;a<e.width;a++){let o=t*e.width+a,s=l[e.kinds[o]??1];if(s===`chasm`)r.push([a,t]);else if(s===`wall`||s===`breakable`)Ef(e,a,t)&&i.push([a,t,s===`wall`?Cf.wall:Cf.breakable]);else{let r=Math.max(0,e.levels[o]??0),i=s===`stairs`?Cf.stairs:e.bridges[o]?Cf.bridge:Sf[Math.min(r,Sf.length-1)]??Cf.wall;n.push([a,t,i])}}return t.add(Df(n,.1,-.05)),t.add(Df(r.map(([e,t])=>[e,t,Cf.chasm]),.1,-1.5)),t.add(Df(i,wf,wf/2)),t.add(Of(kf(e),Cf.cliff)),t.add(Of(Af(e),Cf.step)),t}function Ef(e,t,n){for(let r=-1;r<=1;r++)for(let i=-1;i<=1;i++){let o=t+i,s=n+r;if(!(o<0||s<0||o>=e.width||s>=e.height)&&!a(e,o,s))return!0}return!1}function Df(e,t,n){let r=new wa(new qa(1,t,1),new vo({color:`#ffffff`,roughness:.9}),Math.max(1,e.length)),i=new z,a=new B;return e.forEach(([e,t,o],s)=>{r.setMatrixAt(s,i.makeTranslation(e+.5,n,t+.5)),r.setColorAt(s,a.set(o))}),r.count=e.length,r}function Of(e,t){let n=[];for(let t=0;t+3<e.length;t+=4)n.push(e[t]??0,.02,e[t+1]??0,e[t+2]??0,.02,e[t+3]??0);let r=new Vi;return r.setAttribute(`position`,new ki(n,3)),new Va(r,new ka({color:t}))}function kf(e){let t=[];for(let n=0;n<e.height;n++)for(let r=0;r<e.width;r++)a(e,r,n)||(r>0&&!a(e,r-1,n)&&h(e,r,n)&&t.push(r,n,r,n+1),n>0&&!a(e,r,n-1)&&d(e,r,n)&&t.push(r,n,r+1,n));return t}function Af(e){let t=[];for(let n=0;n<e.height;n++)for(let r=0;r<e.width;r++){let i=e.rise[n*e.width+r]??0;if(i!==0)for(let e of[1/3,2/3])i===1||i===3?t.push(r,n+e,r+1,n+e):t.push(r+e,n,r+e,n+1)}return t}var jf=1.3;function Mf(e,t,n){return e<=0||t<=0?-1:Math.max(0,Math.min(1,(t-e-1+n)/t))}function Nf(e,t,n){let r=Mf(e,t,n);return r<0?0:4*jf*r*(1-r)}function Pf(e,t){let n={},r=[];return t.forEach(([t,i,a],o)=>{if(t in n)throw Error(`rig ${e}: joint ${t} twice`);let s=-1;if(i!==null){let r=n[i];if(r===void 0)throw Error(`rig ${e}: ${t}'s parent ${i} not before it`);s=r}else if(o>0)throw Error(`rig ${e}: only the first joint can be the root`);n[t]=o,r.push({name:t,parent:s,at:a})}),{id:e,joints:r,bone:n,subtree:r.map((e,t)=>{let n=new Set([t]),i=[t];for(let e=t+1;e<r.length;e++){let t=r[e]?.parent??-1;n.has(t)&&(n.add(e),i.push(e))}return i})}}function W(e,t){let n=e.bone[t];if(n===void 0)throw Error(`rig ${e.id} has no joint ${t}`);return n}var Ff=Pf(`hunter`,[[`root`,null,[0,0,0]],[`hips`,`root`,[0,.8,0]],[`spine`,`hips`,[0,.1,0]],[`chest`,`spine`,[0,.2,0]],[`neck`,`chest`,[0,.17,0]],[`head`,`neck`,[0,.07,0]],[`cape`,`chest`,[0,.14,-.15]],[`cape.low`,`cape`,[0,-.36,0]],[`shoulder.l`,`chest`,[.24,.12,0]],[`elbow.l`,`shoulder.l`,[0,-.26,0]],[`hand.l`,`elbow.l`,[0,-.24,0]],[`shoulder.r`,`chest`,[-.24,.12,0]],[`elbow.r`,`shoulder.r`,[0,-.26,0]],[`hand.r`,`elbow.r`,[0,-.24,0]],[`sword`,`hand.r`,[0,-.05,0]],[`hip.l`,`hips`,[.11,-.04,0]],[`knee.l`,`hip.l`,[0,-.38,0]],[`ankle.l`,`knee.l`,[0,-.36,0]],[`hip.r`,`hips`,[-.11,-.04,0]],[`knee.r`,`hip.r`,[0,-.38,0]],[`ankle.r`,`knee.r`,[0,-.36,0]]]);function If(e){let t=e===1?`l`:`r`;return[{joint:`shoulder.${t}`,shape:`capsule`,size:[.14,.28,.14],at:[0,-.13,0],role:`cloth`},{joint:`shoulder.${t}`,shape:`gem`,size:[.24,.16,.24],at:[.03*e,.03,0],role:`armor`},{joint:`elbow.${t}`,shape:`capsule`,size:[.12,.25,.12],at:[0,-.12,0],role:`cloth`},{joint:`elbow.${t}`,shape:`box`,size:[.15,.14,.15],at:[0,-.13,0],role:`armor`},{joint:`hand.${t}`,shape:`box`,size:[.1,.11,.1],at:[0,-.04,0],role:`trim`}]}function Lf(e){let t=e===1?`l`:`r`;return[{joint:`hip.${t}`,shape:`capsule`,size:[.18,.4,.18],at:[0,-.19,0],role:`cloth`},{joint:`knee.${t}`,shape:`capsule`,size:[.15,.36,.15],at:[0,-.18,0],role:`trim`},{joint:`knee.${t}`,shape:`gem`,size:[.14,.13,.12],at:[0,0,.05],role:`armor`},{joint:`ankle.${t}`,shape:`box`,size:[.15,.11,.27],at:[0,-.03,.05],role:`trim`}]}var Rf={rig:Ff,parts:[{joint:`hips`,shape:`box`,size:[.36,.2,.24],role:`cloth`},{joint:`hips`,shape:`slab`,size:[.4,.07,.28],at:[0,.08,0],role:`trim`},{joint:`spine`,shape:`capsule`,size:[.36,.26,.25],at:[0,.09,0],role:`cloth`},{joint:`chest`,shape:`box`,size:[.46,.32,.3],at:[0,.04,.01],role:`armor`},{joint:`chest`,shape:`gem`,size:[.13,.16,.07],at:[0,.05,.16],role:`crystal`},{joint:`neck`,shape:`capsule`,size:[.12,.12,.12],at:[0,.03,0],role:`cloth`},{joint:`head`,shape:`orb`,size:[.22,.24,.2],at:[0,.12,.05],role:`skin`},{joint:`head`,shape:`orb`,size:[.34,.36,.34],at:[0,.15,-.03],role:`cloak`},{joint:`head`,shape:`cone`,size:[.17,.22,.17],at:[0,.31,-.11],turn:[-.65,0,0],role:`cloak`},{joint:`head`,shape:`slab`,size:[.18,.035,.03],at:[0,.14,.15],role:`eye`},{joint:`cape`,shape:`shell`,size:[.5,.4,.14],at:[0,-.18,0],role:`cloak`},{joint:`cape.low`,shape:`shell`,size:[.54,.44,.14],at:[0,-.2,0],role:`cloak`},...If(1),...If(-1),...Lf(1),...Lf(-1),{joint:`sword`,shape:`box`,size:[.05,.05,.18],at:[0,0,-.03],role:`trim`},{joint:`sword`,shape:`slab`,size:[.28,.05,.06],at:[0,0,.08],role:`armor`},{joint:`sword`,shape:`slab`,size:[.09,.026,1.05],at:[0,0,.64],role:`blade`}]},zf=Pf(`charger`,[[`root`,null,[0,0,0]],[`body`,`root`,[0,.52,0]],[`chest`,`body`,[0,.04,.24]],[`neck`,`chest`,[0,.06,.2]],[`head`,`neck`,[0,-.03,.12]],[`tail`,`body`,[0,.1,-.34]],[`leg.fl`,`chest`,[.19,-.1,.04]],[`leg.fr`,`chest`,[-.19,-.1,.04]],[`leg.bl`,`body`,[.19,-.08,-.24]],[`leg.br`,`body`,[-.19,-.08,-.24]]]);function Bf(e){return[{joint:e,shape:`capsule`,size:[.14,.44,.14],at:[0,-.2,0],role:`hide`},{joint:e,shape:`box`,size:[.13,.08,.15],at:[0,-.4,.02],role:`horn`}]}var Vf={rig:zf,parts:[{joint:`body`,shape:`box`,size:[.5,.42,.62],at:[0,0,-.06],role:`hide`},{joint:`chest`,shape:`box`,size:[.52,.46,.34],at:[0,.02,0],role:`hide`},{joint:`body`,shape:`gem`,size:[.13,.32,.13],at:[0,.3,.12],turn:[0,0,.15],role:`crystal`},{joint:`body`,shape:`gem`,size:[.11,.26,.11],at:[.08,.27,-.1],turn:[0,0,-.35],role:`crystal`},{joint:`body`,shape:`gem`,size:[.1,.22,.1],at:[-.09,.25,-.26],turn:[0,0,.4],role:`crystal`},{joint:`head`,shape:`box`,size:[.32,.28,.32],at:[0,0,.12],role:`hide`},{joint:`head`,shape:`cone`,size:[.06,.2,.06],at:[.12,-.06,.28],turn:[-1.3,0,-.3],role:`horn`},{joint:`head`,shape:`cone`,size:[.06,.2,.06],at:[-.12,-.06,.28],turn:[-1.3,0,.3],role:`horn`},{joint:`head`,shape:`box`,size:[.06,.04,.03],at:[.09,.06,.28],role:`eye`},{joint:`head`,shape:`box`,size:[.06,.04,.03],at:[-.09,.06,.28],role:`eye`},{joint:`tail`,shape:`cone`,size:[.08,.24,.08],at:[0,0,-.1],turn:[-1.9,0,0],role:`hide`},...Bf(`leg.fl`),...Bf(`leg.fr`),...Bf(`leg.bl`),...Bf(`leg.br`)]},Hf=Pf(`dummy`,[[`root`,null,[0,0,0]],[`post`,`root`,[0,.05,0]],[`body`,`post`,[0,.55,0]],[`head`,`body`,[0,.46,0]]]),Uf={rig:Hf,parts:[{joint:`root`,shape:`box`,size:[.5,.1,.5],at:[0,.05,0],role:`horn`},{joint:`post`,shape:`capsule`,size:[.13,.62,.13],at:[0,.3,0],role:`horn`},{joint:`body`,shape:`box`,size:[.44,.52,.32],at:[0,.2,0],role:`hide`},{joint:`body`,shape:`slab`,size:[.86,.07,.08],at:[0,.34,0],role:`horn`},{joint:`body`,shape:`gem`,size:[.17,.17,.05],at:[0,.2,.17],role:`crystal`},{joint:`head`,shape:`orb`,size:[.28,.28,.26],at:[0,.1,0],role:`hide`},{joint:`head`,shape:`slab`,size:[.14,.03,.03],at:[0,.12,.13],role:`eye`}]},Wf=Pf(`shooter`,[[`root`,null,[0,0,0]],[`hover`,`root`,[0,.66,0]],[`ring`,`hover`,[0,0,0]],[`barrel`,`hover`,[0,.02,.2]]]);function Gf(e){let t=Math.sin(e)*.27,n=Math.cos(e)*.27;return[{joint:`ring`,shape:`box`,size:[.14,.38,.06],at:[t,0,n],turn:[e,0,0],role:`hide`},{joint:`ring`,shape:`cone`,size:[.06,.16,.06],at:[t*1.35,.2,n*1.35],turn:[e,.5,0],role:`horn`}]}var Kf={rig:Wf,parts:[{joint:`hover`,shape:`gem`,size:[.3,.44,.3],role:`crystal`},{joint:`hover`,shape:`cone`,size:[.1,.26,.1],at:[0,-.32,0],turn:[0,Math.PI,0],role:`horn`},...Gf(Math.PI/3),...Gf(Math.PI),...Gf(-Math.PI/3),{joint:`barrel`,shape:`capsule`,size:[.14,.32,.14],at:[0,0,.14],turn:[0,Math.PI/2,0],role:`hide`},{joint:`barrel`,shape:`orb`,size:[.11,.11,.11],at:[0,0,.32],role:`eye`}]},qf=Pf(`guardian`,[[`root`,null,[0,0,0]],[`hips`,`root`,[0,1,0]],[`spine`,`hips`,[0,.22,0]],[`chest`,`spine`,[0,.38,0]],[`head`,`chest`,[0,.52,.12]],[`core`,`chest`,[0,.08,.38]],[`spikes`,`chest`,[0,.34,-.3]],[`shoulder.l`,`chest`,[.66,.26,0]],[`elbow.l`,`shoulder.l`,[.04,-.5,0]],[`fist.l`,`elbow.l`,[0,-.46,.04]],[`shoulder.r`,`chest`,[-.66,.26,0]],[`elbow.r`,`shoulder.r`,[-.04,-.5,0]],[`fist.r`,`elbow.r`,[0,-.46,.04]],[`hip.l`,`hips`,[.3,-.08,0]],[`knee.l`,`hip.l`,[0,-.46,.02]],[`foot.l`,`knee.l`,[0,-.42,-.02]],[`hip.r`,`hips`,[-.3,-.08,0]],[`knee.r`,`hip.r`,[0,-.46,.02]],[`foot.r`,`knee.r`,[0,-.42,-.02]]]);function Jf(e){let t=e===1?`l`:`r`;return[{joint:`shoulder.${t}`,shape:`gem`,size:[.52,.38,.52],at:[.06*e,.08,0],role:`horn`},{joint:`shoulder.${t}`,shape:`capsule`,size:[.3,.52,.3],at:[.02*e,-.24,0],role:`hide`},{joint:`elbow.${t}`,shape:`capsule`,size:[.36,.5,.36],at:[0,-.22,0],role:`hide`},{joint:`fist.${t}`,shape:`box`,size:[.48,.42,.48],at:[0,-.12,0],role:`horn`},{joint:`fist.${t}`,shape:`gem`,size:[.16,.2,.16],at:[0,-.06,.25],role:`crystal`}]}function Yf(e){let t=e===1?`l`:`r`;return[{joint:`hip.${t}`,shape:`capsule`,size:[.36,.5,.36],at:[0,-.22,0],role:`hide`},{joint:`knee.${t}`,shape:`capsule`,size:[.32,.46,.32],at:[0,-.2,0],role:`hide`},{joint:`knee.${t}`,shape:`gem`,size:[.22,.2,.16],at:[0,0,.14],role:`horn`},{joint:`foot.${t}`,shape:`box`,size:[.44,.18,.58],at:[0,-.02,.08],role:`horn`}]}var Xf={rig:qf,parts:[{joint:`hips`,shape:`box`,size:[.84,.42,.56],role:`hide`},{joint:`spine`,shape:`box`,size:[.78,.4,.54],at:[0,.16,0],role:`hide`},{joint:`chest`,shape:`box`,size:[1.3,.74,.8],at:[0,.14,0],role:`hide`},{joint:`chest`,shape:`slab`,size:[1.4,.12,.86],at:[0,.5,0],role:`horn`},{joint:`core`,shape:`gem`,size:[.34,.44,.16],role:`crystal`},{joint:`chest`,shape:`gem`,size:[.16,.42,.16],at:[.28,.48,-.32],turn:[0,-.4,.3],role:`crystal`},{joint:`chest`,shape:`gem`,size:[.14,.34,.14],at:[-.3,.44,-.3],turn:[0,-.3,-.35],role:`crystal`},{joint:`spikes`,shape:`gem`,size:[.26,.86,.26],at:[0,.36,0],turn:[0,-.25,0],role:`crystal`},{joint:`spikes`,shape:`gem`,size:[.22,.7,.22],at:[.5,.22,.05],turn:[0,-.2,-.55],role:`crystal`},{joint:`spikes`,shape:`gem`,size:[.22,.7,.22],at:[-.5,.22,.05],turn:[0,-.2,.55],role:`crystal`},{joint:`head`,shape:`box`,size:[.46,.42,.46],at:[0,.14,0],role:`hide`},{joint:`head`,shape:`slab`,size:[.32,.05,.04],at:[0,.18,.24],role:`eye`},{joint:`head`,shape:`cone`,size:[.12,.34,.12],at:[.17,.4,-.04],turn:[0,-.2,-.3],role:`horn`},{joint:`head`,shape:`cone`,size:[.12,.34,.12],at:[-.17,.4,-.04],turn:[0,-.2,.3],role:`horn`},...Jf(1),...Jf(-1),...Yf(1),...Yf(-1)]},Zf=Pf(`prison`,[[`root`,null,[0,0,0]],[`crystal`,`root`,[0,0,0]]]),Qf=Pf(`shieldbearer`,[[`root`,null,[0,0,0]],[`hips`,`root`,[0,.78,0]],[`chest`,`hips`,[0,.3,0]],[`head`,`chest`,[0,.42,.02]],[`shoulder.l`,`chest`,[.32,.26,0]],[`elbow.l`,`shoulder.l`,[.02,-.3,0]],[`shield`,`elbow.l`,[-.2,-.12,.32]],[`shoulder.r`,`chest`,[-.32,.26,0]],[`elbow.r`,`shoulder.r`,[-.02,-.3,0]],[`club`,`elbow.r`,[0,-.26,.04]],[`hip.l`,`hips`,[.14,-.06,0]],[`knee.l`,`hip.l`,[0,-.36,.02]],[`hip.r`,`hips`,[-.14,-.06,0]],[`knee.r`,`hip.r`,[0,-.36,.02]]]),$f=Pf(`bomber`,[[`root`,null,[0,0,0]],[`body`,`root`,[0,.22,0]],[`sac`,`body`,[0,.12,-.05]],[`head`,`body`,[0,-.01,.21]],[`leg.l1`,`body`,[.15,-.04,.12]],[`leg.l2`,`body`,[.17,-.04,0]],[`leg.l3`,`body`,[.15,-.04,-.12]],[`leg.r1`,`body`,[-.15,-.04,.12]],[`leg.r2`,`body`,[-.17,-.04,0]],[`leg.r3`,`body`,[-.15,-.04,-.12]]]),ep=Pf(`summoner`,[[`root`,null,[0,0,0]],[`hips`,`root`,[0,.86,0]],[`chest`,`hips`,[0,.3,0]],[`head`,`chest`,[0,.4,.02]],[`shoulder.l`,`chest`,[.26,.24,0]],[`elbow.l`,`shoulder.l`,[0,-.28,0]],[`shoulder.r`,`chest`,[-.26,.24,0]],[`elbow.r`,`shoulder.r`,[0,-.28,0]],[`staff`,`elbow.r`,[0,-.26,.04]],[`hip.l`,`hips`,[.12,-.06,0]],[`knee.l`,`hip.l`,[0,-.38,0]],[`hip.r`,`hips`,[-.12,-.06,0]],[`knee.r`,`hip.r`,[0,-.38,0]]]),tp=Pf(`puppet`,[[`root`,null,[0,0,0]],[`body`,`root`,[0,.42,0]],[`head`,`body`,[0,.25,.02]],[`arm.l`,`body`,[.2,.09,0]],[`arm.r`,`body`,[-.2,.09,0]],[`leg.l`,`body`,[.09,-.15,0]],[`leg.r`,`body`,[-.09,-.15,0]]]),np=Pf(`thorn_trap`,[[`root`,null,[0,0,0]],[`base`,`root`,[0,0,0]],[`core`,`base`,[0,.16,0]],[`shard.0`,`base`,[.26,.12,.05]],[`shard.1`,`base`,[.05,.12,.27]],[`shard.2`,`base`,[-.24,.12,.1]],[`shard.3`,`base`,[-.15,.12,-.22]],[`shard.4`,`base`,[.16,.12,-.23]]]),rp=Pf(`rampant_crystal`,[[`root`,null,[0,0,0]],[`base`,`root`,[0,0,0]],[`core`,`base`,[0,.3,0]],[`ring`,`base`,[0,.25,0]],[`shard.0`,`ring`,[.95,0,.15]],[`shard.1`,`ring`,[-.2,0,.95]],[`shard.2`,`ring`,[-.9,0,-.25]],[`shard.3`,`ring`,[.25,0,-.9]]]),ip={"rig.hunter":Rf,"rig.charger":Vf,"rig.dummy":Uf,"rig.shooter":Kf,"rig.guardian":Xf},ap={skin:`skin`,cloth:`cloth`,cloak:`cloak`,armor:`metal`,trim:`trim`,crystal:`crystal`,eye:`eye`,blade:`blade`,hide:`hide`,horn:`horn`};function op(){let e=[{joint:`hips`,size:[.42,.22,.24],at:[0,.02,0],role:`cloth`},{joint:`chest`,size:[.44,.42,.24],at:[0,-.02,0],role:`cloth`,bands:[{from:0,to:.06,role:`trim`}]},{joint:`chest`,size:[.38,.22,.04],at:[0,.07,.13],role:`armor`},{joint:`chest`,size:[.1,.1,.04],at:[0,.06,.16],role:`crystal`},{joint:`head`,size:[.4,.4,.4],at:[0,.18,.01],role:`cloak`,face:`hood`},{joint:`cape`,size:[.44,.42,.04],at:[0,-.2,-.02],role:`cloak`},{joint:`cape.low`,size:[.46,.4,.04],at:[0,-.2,0],role:`cloak`,bands:[{from:0,to:.05,role:`trim`}]},{joint:`sword`,size:[.07,.07,.06],at:[0,0,-.14],role:`armor`},{joint:`sword`,size:[.05,.05,.18],at:[0,0,-.03],role:`trim`},{joint:`sword`,size:[.26,.05,.06],at:[0,0,.08],role:`armor`},{joint:`sword`,size:[.06,.07,.07],at:[0,0,.08],role:`crystal`},{joint:`sword`,size:[.08,.03,1],at:[0,0,.62],role:`blade`}];for(let t of[`l`,`r`]){let n=t===`l`?1:-1;e.push({joint:`shoulder.${t}`,size:[.15,.27,.15],at:[0,-.12,0],role:`cloth`},{joint:`shoulder.${t}`,size:[.2,.1,.2],at:[.01*n,.01,0],role:`armor`},{joint:`elbow.${t}`,size:[.14,.27,.14],at:[0,-.12,0],role:`armor`,bands:[{from:0,to:.08,role:`trim`}]},{joint:`hip.${t}`,size:[.18,.4,.2],at:[0,-.19,0],role:`cloth`},{joint:`knee.${t}`,size:[.17,.38,.19],at:[0,-.18,0],role:`cloth`,bands:[{from:0,to:.14,role:`trim`}]})}return e}function sp(){let e=[{joint:`hips`,size:[.4,.22,.24],at:[0,.02,0],role:`cloth`},{joint:`chest`,size:[.42,.4,.24],at:[0,-.02,0],role:`cloak`,bands:[{from:0,to:.18,role:`cloth`}]},{joint:`chest`,size:[.3,.2,.03],at:[0,-.02,.13],role:`cloth`},{joint:`head`,size:[.36,.36,.36],at:[0,.17,.01],role:`skin`,face:`hood`},{joint:`head`,size:[.4,.12,.4],at:[0,.39,.01],role:`armor`},{joint:`head`,size:[.46,.04,.46],at:[0,.33,.03],role:`armor`},{joint:`head`,size:[.1,.08,.05],at:[0,.38,.22],role:`crystal`},{joint:`sword`,size:[.05,.05,.75],at:[0,0,.22],role:`trim`},{joint:`sword`,size:[.08,.5,.07],at:[0,0,.58],role:`blade`}];for(let t of[`l`,`r`])e.push({joint:`shoulder.${t}`,size:[.14,.26,.14],at:[0,-.12,0],role:`cloak`},{joint:`elbow.${t}`,size:[.13,.26,.13],at:[0,-.12,0],role:`skin`,bands:[{from:0,to:.07,role:`trim`}]},{joint:`hip.${t}`,size:[.17,.4,.19],at:[0,-.19,0],role:`cloth`},{joint:`knee.${t}`,size:[.16,.38,.18],at:[0,-.18,0],role:`cloth`,bands:[{from:0,to:.13,role:`trim`}]});return e}function cp(){let e=[{joint:`hips`,size:[.44,.24,.28],at:[0,.02,0],role:`cloak`},{joint:`hips`,size:[.48,.5,.32],at:[0,-.26,0],role:`cloak`,bands:[{from:0,to:.06,role:`trim`}]},{joint:`chest`,size:[.46,.42,.28],at:[0,-.02,0],role:`cloak`,bands:[{from:0,to:.06,role:`cloth`}]},{joint:`chest`,size:[.08,.3,.03],at:[0,-.02,.145],role:`cloth`},{joint:`head`,size:[.36,.36,.36],at:[0,.17,.01],role:`skin`,face:`hood`},{joint:`head`,size:[.26,.2,.06],at:[0,.04,.2],role:`trim`},{joint:`head`,size:[.6,.04,.6],at:[0,.36,.01],role:`cloak`},{joint:`head`,size:[.32,.16,.32],at:[0,.45,-.01],role:`cloak`},{joint:`head`,size:[.2,.16,.2],at:[0,.58,-.05],turn:[-.3,0,0],role:`cloak`},{joint:`sword`,size:[.06,.06,1.3],at:[0,0,.32],role:`trim`,surface:`wood`},{joint:`sword`,size:[.14,.14,.14],at:[0,0,1],turn:[.7,.7,0],role:`crystal`}];for(let t of[`l`,`r`])e.push({joint:`shoulder.${t}`,size:[.17,.28,.17],at:[0,-.12,0],role:`cloak`},{joint:`elbow.${t}`,size:[.15,.26,.15],at:[0,-.12,0],role:`cloak`,bands:[{from:0,to:.07,role:`skin`}]},{joint:`hip.${t}`,size:[.17,.4,.19],at:[0,-.19,0],role:`cloth`},{joint:`knee.${t}`,size:[.16,.38,.18],at:[0,-.18,0],role:`cloth`,bands:[{from:0,to:.12,role:`trim`}]});return e}function lp(){let e=[{joint:`hips`,size:[.42,.22,.26],at:[0,.02,0],role:`cloth`},{joint:`chest`,size:[.44,.42,.26],at:[0,-.02,0],role:`cloth`,bands:[{from:0,to:.07,role:`trim`}]},{joint:`chest`,size:[.34,.36,.03],at:[0,-.05,.14],role:`armor`,surface:`sack`},{joint:`hips`,size:[.36,.34,.03],at:[0,-.16,.14],role:`armor`,surface:`sack`},{joint:`chest`,size:[.38,.42,.22],at:[0,.02,-.24],role:`cloak`,surface:`sack`},{joint:`chest`,size:[.44,.12,.14],at:[0,.27,-.24],role:`trim`,surface:`cloth`},{joint:`head`,size:[.36,.36,.36],at:[0,.17,.01],role:`skin`,face:`hood`},{joint:`head`,size:[.64,.04,.64],at:[0,.35,.01],role:`armor`,surface:`sack`},{joint:`head`,size:[.34,.14,.34],at:[0,.43,.01],role:`armor`,surface:`sack`},{joint:`sword`,size:[.2,.04,.26],at:[0,0,.1],role:`trim`,surface:`wood`}];for(let t of[`l`,`r`])e.push({joint:`shoulder.${t}`,size:[.15,.27,.15],at:[0,-.12,0],role:`cloth`},{joint:`elbow.${t}`,size:[.14,.26,.14],at:[0,-.12,0],role:`skin`,bands:[{from:.17,to:.26,role:`cloth`}]},{joint:`hip.${t}`,size:[.17,.4,.19],at:[0,-.19,0],role:`trim`},{joint:`knee.${t}`,size:[.16,.38,.18],at:[0,-.18,0],role:`trim`,bands:[{from:0,to:.12,role:`cloak`}]});return e}function up(){let e=[{joint:`body`,size:[.52,.44,.62],at:[0,0,-.06],role:`hide`},{joint:`chest`,size:[.56,.5,.34],at:[0,.02,0],role:`hide`},{joint:`body`,size:[.12,.26,.12],at:[0,.32,.12],role:`crystal`},{joint:`body`,size:[.1,.2,.1],at:[.1,.28,-.1],role:`crystal`},{joint:`body`,size:[.1,.18,.1],at:[-.1,.27,-.26],role:`crystal`},{joint:`head`,size:[.34,.3,.34],at:[0,0,.12],role:`hide`,face:`muzzle`},{joint:`head`,size:[.06,.06,.2],at:[.13,-.05,.32],role:`horn`},{joint:`head`,size:[.06,.06,.2],at:[-.13,-.05,.32],role:`horn`},{joint:`tail`,size:[.08,.08,.26],at:[0,0,-.12],role:`hide`}];for(let t of[`leg.fl`,`leg.fr`,`leg.bl`,`leg.br`])e.push({joint:t,size:[.15,.46,.15],at:[0,-.21,0],role:`hide`,bands:[{from:0,to:.08,role:`horn`}]});return e}function dp(){let e=[{joint:`body`,size:[.36,.32,.6],at:[0,-.04,-.06],role:`hide`},{joint:`chest`,size:[.4,.38,.3],at:[0,0,.02],role:`hide`},{joint:`body`,size:[.08,.16,.08],at:[0,.18,.12],role:`crystal`},{joint:`body`,size:[.08,.2,.08],at:[0,.2,-.04],role:`crystal`},{joint:`body`,size:[.07,.14,.07],at:[0,.16,-.2],role:`crystal`},{joint:`head`,size:[.26,.24,.26],at:[0,.02,.1],role:`hide`,face:`muzzle`},{joint:`head`,size:[.14,.12,.16],at:[0,-.04,.3],role:`hide`},{joint:`head`,size:[.07,.12,.05],at:[.08,.18,.04],role:`horn`},{joint:`head`,size:[.07,.12,.05],at:[-.08,.18,.04],role:`horn`},{joint:`tail`,size:[.08,.08,.4],at:[0,.04,-.2],role:`hide`}];for(let t of[`leg.fl`,`leg.fr`,`leg.bl`,`leg.br`])e.push({joint:t,size:[.1,.44,.1],at:[0,-.2,0],role:`hide`,bands:[{from:0,to:.06,role:`horn`}]});return e}function fp(){return[{joint:`root`,size:[.5,.1,.5],at:[0,.05,0],role:`horn`,surface:`planks`},{joint:`post`,size:[.12,.6,.12],at:[0,.3,0],role:`horn`,surface:`wood`},{joint:`body`,size:[.44,.5,.3],at:[0,.2,0],role:`hide`,surface:`sack`,bands:[{from:.08,to:.14,role:`trim`,surface:`rope`},{from:.4,to:.45,role:`trim`,surface:`rope`}]},{joint:`body`,size:[.86,.08,.08],at:[0,.34,0],role:`horn`,surface:`wood`},{joint:`body`,size:[.18,.18,.04],at:[0,.18,.16],role:`crystal`},{joint:`head`,size:[.3,.3,.28],at:[0,.1,0],role:`hide`,face:`sack`},{joint:`head`,size:[.14,.06,.12],at:[0,.28,-.02],role:`trim`,surface:`rope`}]}function pp(){let e=[{joint:`hover`,size:[.28,.4,.28],at:[0,0,0],role:`crystal`,surface:`geode`},{joint:`hover`,size:[.18,.08,.18],at:[0,.24,0],role:`horn`,surface:`stone`},{joint:`hover`,size:[.16,.12,.16],at:[0,-.26,0],role:`horn`,surface:`stone`},{joint:`hover`,size:[.08,.12,.08],at:[0,-.37,0],role:`horn`,surface:`stone`},{joint:`barrel`,size:[.13,.13,.3],at:[0,0,.14],role:`hide`,surface:`metal`},{joint:`barrel`,size:[.09,.09,.03],at:[0,0,.3],role:`eye`}];for(let t of[Math.PI/3,Math.PI,-Math.PI/3]){let n=Math.sin(t)*.27,r=Math.cos(t)*.27;e.push({joint:`ring`,size:[.16,.42,.07],at:[n,0,r],turn:[0,t,0],role:`hide`,surface:`plate`},{joint:`ring`,size:[.06,.14,.06],at:[n*1.05,.27,r*1.05],turn:[0,t,0],role:`horn`})}return e}function mp(){let e=e=>({...e,role:`hide`,surface:`golem`}),t=e=>({...e,role:`horn`,surface:`cobble`}),n=[e({joint:`hips`,size:[.84,.42,.56],at:[0,0,0]}),e({joint:`spine`,size:[.78,.4,.54],at:[0,.16,0]}),e({joint:`chest`,size:[1.3,.74,.8],at:[0,.14,0]}),t({joint:`chest`,size:[1.4,.12,.86],at:[0,.5,0]}),{joint:`core`,size:[.34,.44,.16],at:[0,0,0],role:`crystal`},{joint:`chest`,size:[.16,.42,.16],at:[.28,.6,-.3],turn:[0,-.4,.3],role:`crystal`},{joint:`chest`,size:[.14,.34,.14],at:[-.3,.56,-.28],turn:[0,-.3,-.35],role:`crystal`},{joint:`spikes`,size:[.26,.86,.26],at:[0,.36,0],turn:[0,-.25,0],role:`crystal`},{joint:`spikes`,size:[.22,.7,.22],at:[.5,.22,.05],turn:[0,-.2,-.55],role:`crystal`},{joint:`spikes`,size:[.22,.7,.22],at:[-.5,.22,.05],turn:[0,-.2,.55],role:`crystal`},e({joint:`head`,size:[.46,.42,.46],at:[0,.14,0],face:`visor`}),t({joint:`head`,size:[.1,.3,.1],at:[.18,.42,-.04],turn:[0,-.2,-.3]}),t({joint:`head`,size:[.1,.3,.1],at:[-.18,.42,-.04],turn:[0,-.2,.3]})];for(let r of[`l`,`r`]){let i=r===`l`?1:-1;n.push(t({joint:`shoulder.${r}`,size:[.52,.38,.52],at:[.06*i,.08,0]}),e({joint:`shoulder.${r}`,size:[.3,.52,.3],at:[.02*i,-.24,0]}),e({joint:`elbow.${r}`,size:[.36,.5,.36],at:[0,-.22,0]}),t({joint:`fist.${r}`,size:[.48,.42,.48],at:[0,-.12,0]}),{joint:`fist.${r}`,size:[.16,.2,.08],at:[0,-.06,.26],role:`crystal`},e({joint:`hip.${r}`,size:[.36,.5,.36],at:[0,-.22,0]}),e({joint:`knee.${r}`,size:[.32,.46,.32],at:[0,-.2,0]}),t({joint:`knee.${r}`,size:[.22,.2,.16],at:[0,0,.14]}),t({joint:`foot.${r}`,size:[.44,.18,.58],at:[0,-.02,.08]}))}return n}function hp(){return[{joint:`crystal`,size:[.62,1.15,.56],at:[0,.575,0],role:`crystal`,surface:`geode`,face:`prisoner`},{joint:`crystal`,size:[.32,.8,.32],at:[.42,.4,.06],turn:[0,.3,-.25],role:`crystal`,surface:`geode`},{joint:`crystal`,size:[.28,.62,.28],at:[-.42,.31,-.04],turn:[0,-.2,.3],role:`crystal`,surface:`geode`},{joint:`crystal`,size:[.22,.36,.22],at:[-.22,.18,.36],turn:[.3,.5,.1],role:`crystal`,surface:`geode`},{joint:`crystal`,size:[.3,.7,.3],at:[.05,.35,-.4],turn:[-.25,0,0],role:`crystal`,surface:`geode`},{joint:`crystal`,size:[.3,.12,.3],at:[0,1.2,.04],role:`horn`,surface:`metal`},{joint:`crystal`,size:[.08,.06,.03],at:[0,1.2,.205],role:`eye`}]}function gp(){let e=e=>({...e,role:`hide`,surface:`metal`}),t=e=>({...e,role:`horn`,surface:`metal`}),n=[e({joint:`hips`,size:[.42,.24,.28],at:[0,.02,0],bands:[{from:.16,to:.24,role:`trim`,surface:`rope`}]}),{joint:`chest`,size:[.52,.44,.32],at:[0,.12,0],role:`hide`,surface:`plate`},{joint:`chest`,size:[.12,.12,.04],at:[0,.16,.17],role:`crystal`},t({joint:`head`,size:[.36,.36,.36],at:[0,.12,0],face:`visor`}),{joint:`head`,size:[.08,.14,.32],at:[0,.36,-.02],role:`crystal`,surface:`geode`},{joint:`shield`,size:[.68,.96,.08],at:[0,0,0],role:`trim`,surface:`planks`},t({joint:`shield`,size:[.74,.06,.12],at:[0,.5,0]}),t({joint:`shield`,size:[.74,.06,.12],at:[0,-.5,0]}),t({joint:`shield`,size:[.06,.96,.12],at:[.37,0,0]}),t({joint:`shield`,size:[.06,.96,.12],at:[-.37,0,0]}),{joint:`shield`,size:[.2,.2,.06],at:[0,.06,.06],role:`crystal`,surface:`geode`},{joint:`club`,size:[.06,.36,.06],at:[0,-.06,0],role:`trim`,surface:`wood`},{joint:`club`,size:[.2,.22,.2],at:[0,-.3,0],role:`horn`,surface:`cobble`},{joint:`club`,size:[.09,.09,.09],at:[0,-.3,.11],role:`crystal`}];for(let r of[`l`,`r`]){let i=r===`l`?1:-1;n.push(t({joint:`shoulder.${r}`,size:[.24,.16,.3],at:[.04*i,.04,0]}),e({joint:`shoulder.${r}`,size:[.16,.3,.16],at:[0,-.15,0]}),e({joint:`elbow.${r}`,size:[.15,.28,.15],at:[0,-.14,0],bands:[{from:0,to:.08,role:`horn`,surface:`metal`}]}),e({joint:`hip.${r}`,size:[.17,.36,.18],at:[0,-.18,0]}),e({joint:`knee.${r}`,size:[.17,.38,.2],at:[0,-.18,.01],bands:[{from:0,to:.1,role:`horn`,surface:`metal`}]}))}return n}function _p(){let e=[{joint:`body`,size:[.36,.16,.42],at:[0,0,-.02],role:`hide`},{joint:`sac`,size:[.3,.24,.3],at:[0,.08,0],role:`crystal`,surface:`geode`},{joint:`head`,size:[.22,.14,.16],at:[0,0,.06],role:`hide`,face:`visor`},{joint:`head`,size:[.04,.04,.1],at:[.06,-.04,.16],role:`horn`},{joint:`head`,size:[.04,.04,.1],at:[-.06,-.04,.16],role:`horn`}];for(let t of[`l1`,`l2`,`l3`,`r1`,`r2`,`r3`]){let n=t.startsWith(`l`)?1:-1;e.push({joint:`leg.${t}`,size:[.045,.26,.045],at:[.03*n,-.11,0],role:`hide`,bands:[{from:0,to:.07,role:`horn`}]})}return e}function vp(){let e=[{joint:`hips`,size:[.4,.24,.28],at:[0,.02,0],role:`cloak`},{joint:`hips`,size:[.5,.72,.38],at:[0,-.4,0],role:`cloak`,bands:[{from:0,to:.06,role:`trim`}]},{joint:`chest`,size:[.44,.42,.28],at:[0,-.02,0],role:`cloak`,bands:[{from:0,to:.05,role:`cloth`}]},{joint:`chest`,size:[.1,.1,.04],at:[0,.04,.15],turn:[0,0,.785],role:`crystal`},{joint:`head`,size:[.36,.36,.36],at:[0,.16,0],role:`cloak`,face:`visor`},{joint:`head`,size:[.22,.2,.22],at:[0,.38,-.06],turn:[-.35,0,0],role:`cloak`},{joint:`head`,size:[.12,.14,.12],at:[0,.5,-.14],turn:[-.6,0,0],role:`cloak`},{joint:`staff`,size:[.06,1.5,.06],at:[0,.3,0],role:`cloth`,surface:`wood`},{joint:`staff`,size:[.2,.2,.2],at:[0,1.15,0],turn:[.785,.785,0],role:`crystal`,surface:`geode`},{joint:`staff`,size:[.04,.22,.04],at:[.1,1.08,0],turn:[0,0,-.35],role:`horn`},{joint:`staff`,size:[.04,.22,.04],at:[-.1,1.08,0],turn:[0,0,.35],role:`horn`}];for(let t of[`l`,`r`]){let n=t===`l`?1:-1;e.push({joint:`shoulder.${t}`,size:[.2,.16,.3],at:[.02*n,.03,0],role:`cloak`},{joint:`shoulder.${t}`,size:[.08,.2,.08],at:[.06*n,.16,-.04],turn:[0,0,-.4*n],role:`crystal`,surface:`geode`},{joint:`shoulder.${t}`,size:[.16,.28,.16],at:[0,-.13,0],role:`cloak`},{joint:`elbow.${t}`,size:[.18,.26,.18],at:[0,-.12,0],role:`cloak`,bands:[{from:0,to:.07,role:`skin`}]},{joint:`hip.${t}`,size:[.15,.38,.16],at:[0,-.19,0],role:`cloth`},{joint:`knee.${t}`,size:[.14,.38,.16],at:[0,-.18,.01],role:`cloth`})}return e}function yp(){let e=[{joint:`body`,size:[.32,.3,.24],at:[0,0,0],role:`hide`,surface:`cobble`},{joint:`body`,size:[.1,.1,.04],at:[0,.02,.13],role:`crystal`},{joint:`body`,size:[.06,.18,.06],at:[.07,.16,-.1],turn:[-.5,0,-.3],role:`crystal`,surface:`geode`},{joint:`body`,size:[.06,.22,.06],at:[-.06,.18,-.11],turn:[-.45,0,.25],role:`crystal`,surface:`geode`},{joint:`head`,size:[.22,.2,.2],at:[0,.08,0],role:`hide`,surface:`cobble`,face:`visor`},{joint:`head`,size:[.06,.14,.06],at:[0,.22,0],turn:[0,.785,.2],role:`crystal`,surface:`geode`}];for(let t of[`l`,`r`]){let n=t===`l`?1:-1;e.push({joint:`arm.${t}`,size:[.1,.26,.1],at:[.02*n,-.1,0],role:`hide`,surface:`cobble`},{joint:`arm.${t}`,size:[.07,.12,.07],at:[.02*n,-.27,.03],turn:[.4,0,0],role:`crystal`},{joint:`leg.${t}`,size:[.11,.24,.13],at:[0,-.12,0],role:`hide`,surface:`cobble`})}return e}function bp(){let e=[{joint:`base`,size:[.86,.16,.8],at:[0,.08,0],role:`hide`,surface:`cobble`},{joint:`base`,size:[.5,.14,.46],at:[.05,.2,-.04],turn:[0,.4,0],role:`hide`,surface:`cobble`},{joint:`core`,size:[.24,.42,.24],at:[0,.2,0],turn:[0,.785,0],role:`crystal`,surface:`geode`}];for(let t=0;t<5;t++)e.push({joint:`shard.${t}`,size:[.11,.42,.11],at:[0,.2,0],turn:[0,.785,0],role:`crystal`,surface:`geode`});return e}function xp(){let e=[{joint:`base`,size:[1.9,.3,1.7],at:[0,.15,0],role:`hide`,surface:`cobble`},{joint:`base`,size:[1.2,.26,1.3],at:[.1,.4,-.05],turn:[0,.5,0],role:`hide`,surface:`cobble`},{joint:`core`,size:[.72,2,.72],at:[0,1,0],turn:[.08,.785,.06],role:`crystal`,surface:`geode`},{joint:`core`,size:[.4,1.1,.4],at:[.38,.6,.12],turn:[0,.3,-.35],role:`crystal`,surface:`geode`}];for(let t=0;t<4;t++)e.push({joint:`shard.${t}`,size:[.3,.9,.3],at:[0,.45,0],turn:[0,.785,0],role:`crystal`,surface:`geode`});return e}var Sp={"rig.hunter":{rig:Ff,parts:op},"rig.charger":{rig:zf,parts:up},"rig.wolf":{rig:zf,parts:dp},"rig.dummy":{rig:Hf,parts:fp},"rig.shooter":{rig:Wf,parts:pp},"rig.guardian":{rig:qf,parts:mp},"rig.prison":{rig:Zf,parts:hp},"rig.shieldbearer":{rig:Qf,parts:gp},"rig.bomber":{rig:$f,parts:_p},"rig.summoner":{rig:ep,parts:vp},"rig.puppet":{rig:tp,parts:yp},"rig.thorn_trap":{rig:np,parts:bp},"rig.rampant_crystal":{rig:rp,parts:xp},"rig.miner":{rig:Ff,parts:sp},"rig.mentor":{rig:Ff,parts:cp},"rig.merchant":{rig:Ff,parts:lp}},Cp=Object.keys(Sp),wp=[{side:`front`,normal:[0,0,1],right:[1,0,0],up:[0,1,0]},{side:`back`,normal:[0,0,-1],right:[-1,0,0],up:[0,1,0]},{side:`right`,normal:[1,0,0],right:[0,0,-1],up:[0,1,0]},{side:`left`,normal:[-1,0,0],right:[0,0,1],up:[0,1,0]},{side:`top`,normal:[0,1,0],right:[1,0,0],up:[0,0,-1]},{side:`bottom`,normal:[0,-1,0],right:[1,0,0],up:[0,0,1]}];function Tp(e,t){let n=e=>Math.abs(e[0])*t[0]+Math.abs(e[1])*t[1]+Math.abs(e[2])*t[2];return[n(e.right),n(e.up)]}function Ep(e,t){let n=e.map((e,t)=>t).sort((t,n)=>(e[n]?.h??0)-(e[t]?.h??0)),r=Array(e.length),i=0,a=0,o=0;for(let s of n){let{w:n,h:c}=e[s];i+n>t&&(i=0,a+=o,o=0),r[s]={x:i,y:a,w:n,h:c},i+=n,o=Math.max(o,c)}return{at:r,height:a+o}}function Dp(e){let t=new ha(e.data,e.width,e.height,pt);return t.magFilter=Ke,t.minFilter=Ke,t.generateMipmaps=!1,t.colorSpace=fn,t.needsUpdate=!0,t}function Op(e,t,n,r,i,a){let{part:o,face:s,area:c}=n,l=e=>k(r[e]??`#ff00ff`),u=l(r.crystal?`crystal`:o.role);if(s.side===`front`&&o.face){kp(e,t,c,o.face,o.role,l,a);return}let d=o.bands??[],f=o.size[1],p=o;s.side===`top`&&(p=d.find(e=>e.to>=f-1e-6)??o),s.side===`bottom`&&(p=d.find(e=>e.from<=1e-6)??o);let m=e=>e.surface??ap[e.role];te(e,t,c,m(p),l(p.role),a,u),s.side!==`top`&&s.side!==`bottom`&&d.forEach((n,r)=>{let o=Math.max(0,c.h-Math.round(n.to*i)),s=Math.min(c.h,c.h-Math.round(n.from*i));s<=o||te(e,t,{x:c.x,y:c.y+o,w:c.w,h:s-o},m(n),l(n.role),a+5+r,u)})}function kp(e,t,n,r,i,a,o){switch(r){case`hood`:ae(e,t,n,{skin:a(`skin`),hood:a(i),eye:a(`eye`)},o);return;case`muzzle`:le(e,t,n,{hide:a(i),eye:a(`eye`)},o);return;case`sack`:oe(e,n,{sack:a(i),stitch:a(`eye`)},o);return;case`visor`:se(e,t,n,{stone:a(i),vein:a(`crystal`),eye:a(`eye`)},o);return;case`prisoner`:ce(e,t,n,{crystal:a(i),figure:a(`hide`),lamp:a(`eye`)},o);return}}var Ap=new z,jp=new br(0,0,0,`YXZ`),Mp=new R;function Np(e,t,n){for(let{part:r,face:i,area:a}of e){let[e,o]=Tp(i,r.size),s=Math.abs(i.normal[0])*r.size[0]+Math.abs(i.normal[1])*r.size[1]+Math.abs(i.normal[2])*r.size[2],c=r.turn??[0,0,0];Ap.makeRotationFromEuler(jp.set(c[0],c[1],c[2],`YXZ`));let l=(t,n)=>{let a=r=>i.normal[r]*(s/2)+i.right[r]*(t-.5)*e+i.up[r]*(n-.5)*o;return Mp.set(a(0),a(1),a(2)).applyMatrix4(Ap),[r.at[0]+Mp.x,r.at[1]+Mp.y,r.at[2]+Mp.z]};Mp.set(i.normal[0],i.normal[1],i.normal[2]).applyMatrix4(Ap);let u=[Mp.x,Mp.y,Mp.z],d=a.x/t.w,f=(a.x+a.w)/t.w,p=a.y/t.h,m=(a.y+a.h)/t.h,h=[[0,0,d,m],[1,0,f,m],[1,1,f,p],[0,0,d,m],[1,1,f,p],[0,1,d,p]];for(let[e,t,r,i]of h)n.position.push(...l(e,t)),n.normal.push(...u),n.uv.push(r,i)}}function Pp(e,t,n,r,i){let a=Sp[e];if(!a)return null;let o=a.parts(),s=n.texels/n.block,c=[];for(let e of o)for(let t of wp)c.push({part:e,face:t});let l=c.map(({part:e,face:t})=>{let[n,r]=Tp(t,e.size);return{w:Math.max(1,Math.round(n*s)),h:Math.max(1,Math.round(r*s))}}),u=Math.max(32,Math.ceil(Math.sqrt(l.reduce((e,t)=>e+t.w*t.h,0))*1.4)),{at:d,height:f}=Ep(l,u),p=O(u,Math.max(1,f)),m=O(u,Math.max(1,f)),h=c.map((e,t)=>({...e,area:d[t]}));h.forEach((e,n)=>{Op(p,m,e,t,s,i*131+o.indexOf(e.part)*17+n%6)});let g=r.body(Dp(p),Dp(m)),_=new Map;for(let e of h){let t=W(a.rig,e.part.joint),n=_.get(t)??[];n.push(e),_.set(t,n)}let v=[];for(let[e,t]of _){let n={position:[],normal:[],uv:[]};Np(t,{w:p.width,h:p.height},n);let r=new Vi;r.setAttribute(`position`,new ki(n.position,3)),r.setAttribute(`normal`,new ki(n.normal,3)),r.setAttribute(`uv`,new ki(n.uv,2)),v.push({joint:e,geometry:r,material:g})}return{rig:a.rig,parts:v}}var Fp=[`fx.fireball`,`fx.ice`,`fx.blade`,`fx.bolt`,`fx.shard`];function Ip(e,t){return new V({color:new B(e).multiplyScalar(t)})}function Lp(e,t,n){return new V({color:new B(e).multiplyScalar(t),transparent:!0,opacity:n,blending:2,depthWrite:!1})}function Rp(e,t,n=0){let r=new H(e,t);return r.renderOrder=n,r}function zp(e,t){return new no(e,0).scale(1,.8,t/e/2)}function Bp(e){let t=new Rr;switch(e){case`fx.fireball`:return t.add(Rp(new eo(.12,2),Ip(`#fff1c4`,2.2))),t.add(Rp(new eo(.21,3),Lp(`#ff9a3a`,1.3,.45),1)),t;case`fx.ice`:return t.add(Rp(zp(.11,.62),Ip(`#e8fbff`,1.6))),t.add(Rp(zp(.18,.9),Lp(`#7fd8ff`,1.4,.35),1)),t;case`fx.blade`:{let e=new oo(.34,.045,6,18,Math.PI).rotateX(Math.PI/2);t.add(Rp(e,Ip(`#fff6d0`,2.4)));let n=new oo(.34,.12,6,18,Math.PI).rotateX(Math.PI/2);return t.add(Rp(n,Lp(`#ffd86a`,1.3,.4),1)),t}case`fx.bolt`:{let e=new Ja(.075,.3,4,8).rotateX(Math.PI/2);t.add(Rp(e,Ip(`#ffe0f4`,2.2)));let n=new Ja(.18,.4,4,8).rotateX(Math.PI/2);return t.add(Rp(n,Lp(`#ff4fc8`,1.5,.45),1)),t}case`fx.shard`:return t.add(Rp(zp(.14,.7),Ip(`#f0dcff`,1.8))),t.add(Rp(zp(.24,1),Lp(`#a45cff`,1.5,.4),1)),t;default:return null}}function Vp(e,t,n,r,i){let a=Math.max(4,Math.round(r*i.texels/i.block)),o=O(a,a);return te(o,null,{x:0,y:0,w:a,h:a},e,k(t),a*7),new V({map:Dp(o),color:new B(n,n,n)})}function Hp(e,t,n){return new V({color:new B(e).multiplyScalar(t),transparent:!0,opacity:n,blending:2,depthWrite:!1})}function Up(e,t,n=0){let[r,i,a]=e.size,o=new H(new qa(r,i,a),t),[s,c,l]=e.at??[0,0,0];return o.position.set(s,c,l),o.rotation.set(0,e.yaw??0,e.roll??0,`YXZ`),o.renderOrder=n,o}function Wp(e,t,n,r){let i=new Rr;for(let n of e)i.add(Up(n,t));for(let t of e){let[e,a,o]=t.size;i.add(Up({...t,size:[e*r,a*r,o*r]},n,1))}return i}function Gp(e,t){let n=Math.PI/4;switch(e){case`fx.fireball`:return Wp([{size:[.24,.24,.24],roll:n,yaw:n},{size:[.12,.12,.12]}],Vp(`flame`,`#ff9a3a`,1.9,.24,t),Hp(`#ff8a2a`,1.3,.35),1.6);case`fx.ice`:return Wp([{size:[.11,.11,.52]},{size:[.08,.08,.34],at:[0,0,-.04],roll:n}],Vp(`crystal`,`#bff0ff`,1.4,.11,t),Hp(`#7fd8ff`,1.4,.3),1.7);case`fx.blade`:{let e=[];for(let t=0;t<=6;t++){let n=-Math.PI/2+Math.PI*t/6,r=.05+.05*Math.cos(n);e.push({size:[r,.05,r],at:[Math.sin(n)*.32,0,Math.cos(n)*.32],yaw:n})}return Wp(e,Vp(`crystal`,`#fff3b0`,2.2,.1,t),Hp(`#ffd86a`,1.3,.35),2.2)}case`fx.bolt`:return Wp([{size:[.12,.12,.34]}],Vp(`crystal`,`#ffb0e6`,2,.12,t),Hp(`#ff4fc8`,1.5,.4),1.9);case`fx.shard`:return Wp([{size:[.16,.16,.3]},{size:[.1,.1,.2],at:[0,0,.24]},{size:[.05,.05,.12],at:[0,0,.39]}],Vp(`crystal`,`#e4c8ff`,1.7,.16,t),Hp(`#a45cff`,1.5,.35),1.7);default:return null}}var Kp=2,qp=`#9a7448`,Jp=235,Yp=170,Xp=64,Zp=`#24180a`,Qp=new R,$p=new Vn,em=new R,tm=new R(0,1,0),nm=new z,rm=class{group=new Rr;#e;#t;#n;#r=null;constructor(e){this.#e=e.block;let t=e.texels,n=O(t,t);te(n,null,{x:0,y:0,w:t,h:t},`cobble`,k(qp),41);for(let e=0;e<t;e++)for(let r=0;r<t;r++){let i=Math.min(r,e,t-1-r,t-1-e),a=(e*t+r)*4,o=i===0?1.35:1;for(let e=0;e<3;e++)n.data[a+e]=Math.round((n.data[a+e]??0)*o);n.data[a+3]=i===0?Jp:i===1?Yp:Xp}this.#t=new vo({map:Dp(n),roughness:.95,emissive:Zp,transparent:!0,depthWrite:!1}),this.#n=new qa(1,1,1)}#i(e){if(this.#r&&this.#r.instanceMatrix.count>=e)return this.#r;this.#r&&(this.group.remove(this.#r),this.#r.dispose());let t=new wa(this.#n,this.#t,Math.max(64,e*2));return t.instanceMatrix.setUsage(vn),t.frustumCulled=!1,t.count=0,this.group.add(t),this.#r=t,t}show(e,t){let n=this.#e,r=0,i=e.filter(e=>e.rise>0).map(e=>{let t=Math.max(1,Math.round(e.length/n));return r+=t*Kp,{w:e,along:t}});if(r===0&&!this.#r)return;let a=this.#i(r),o=0;for(let{w:e,along:r}of i){let i=e.length/r;$p.setFromAxisAngle(tm,Math.atan2(e.dx,e.dy));let s=t?.(e.x+e.dx*e.length/2,e.y+e.dy*e.length/2)??0,c=(1-e.rise)*Kp*n-s;for(let t=0;t<r;t++){let r=(t+.5)*i;for(let t=0;t<Kp;t++)Qp.set(e.x+e.dx*r,(t+.5)*n-c,e.y+e.dy*r),em.set(Math.max(n,e.radius*2),n,i),a.setMatrixAt(o++,nm.compose(Qp,$p,em))}}a.count=o,a.instanceMatrix.needsUpdate=!0}dispose(){this.#r?.dispose(),this.#n.dispose(),this.#t.map?.dispose(),this.#t.dispose()}},im=`instanceGlow`;function am(e){e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\nattribute vec3 ${im};\nvarying vec3 vLookGlow;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>\nvLookGlow = ${im};`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vLookGlow;`).replace(`#include <opaque_fragment>`,`outgoingLight += vLookGlow;
#include <opaque_fragment>`)}var om={key:`glow`,apply:am};function sm(e,t,n,r){let i=new B(e).multiplyScalar(t);return{key:`rim${r?`s`:``}`,apply(e){e.uniforms.lookRim={value:i},e.uniforms.lookRimPower={value:n};let t=r?`step(0.62, 1.0 - max(dot(normal, normalize(vViewPosition)), 0.0))`:`pow(1.0 - max(dot(normal, normalize(vViewPosition)), 0.0), lookRimPower)`;e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform vec3 lookRim;
uniform float lookRimPower;`).replace(`#include <opaque_fragment>`,`outgoingLight += lookRim * ${t};\n#include <opaque_fragment>`)}}}function cm(e){return{key:`hull${e.toFixed(4)}`,apply(t){t.vertexShader=t.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>\ntransformed += normalize(normal) * ${e.toFixed(4)};`)}}}var lm=new WeakMap;function um(e,t){lm.set(e,t),e.onBeforeCompile=e=>{for(let n of t)n.apply(e)};let n=`look:${t.map(e=>e.key).join(`+`)}`;return e.customProgramCacheKey=()=>n,e}function dm(e){let t=lm.get(e)??[];return um(e.clone(),[...t,om])}function fm(e,t){return um(new V({color:e,side:1}),[cm(t)])}function pm(e,t){let n=e.flatMap((e,t)=>e.hull?[]:[t]);if(t===void 0||t>=n.length)return new Set(n);let r=t=>{let n=e[t]?.geometry;return n?(n.boundingSphere||n.computeBoundingSphere(),n.boundingSphere?.radius??0):0};return new Set([...n].sort((e,t)=>r(t)-r(e)||e-t).slice(0,t))}var mm=class{#e;#t;#n;#r;#i=0;#a=null;constructor(e,t,n=32,r){this.#e=e,this.#r=n,this.#n=r?{material:new V({color:r.color,depthFunc:6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-8}),renderOrder:r.renderOrder}:null;let i=r?pm(t.parts,r.parts):new Set;this.#t=t.parts.map((e,t)=>{let n=dm(e.material),r=this.#s(e.geometry.clone(),n,e.renderOrder??0),a={mesh:r,glow:this.#c(r),joint:e.joint,shadow:null};return i.has(t)&&(a.shadow=this.#o(r)),a})}#o(e){let t=this.#n;if(!t)return null;let n=new wa(e.geometry,t.material,this.#r);return n.instanceMatrix=e.instanceMatrix,n.frustumCulled=!1,n.renderOrder=t.renderOrder,n.count=0,this.#e.add(n),n}#s(e,t,n){let r=new wa(e,t,this.#r);return r.instanceMatrix.setUsage(vn),r.frustumCulled=!1,r.renderOrder=n,r.count=0,this.#e.add(r),r}#c(e){let t=new ga(new Float32Array(this.#r*3),3);return t.setUsage(vn),e.geometry.setAttribute(im,t),t}#l(){this.#r*=2;for(let e of this.#t){let t=e.mesh,n=e.glow;e.mesh=this.#s(t.geometry,t.material,t.renderOrder),e.mesh.instanceMatrix.array.set(t.instanceMatrix.array),e.glow=this.#c(e.mesh),e.glow.array.set(n.array),this.#e.remove(t),t.dispose(),e.shadow&&=(this.#e.remove(e.shadow),e.shadow.dispose(),this.#o(e.mesh))}}get count(){return this.#i}get meshes(){return this.#t.map(e=>e.mesh)}begin(){this.#i=0,this.#a=null}unshaded(){this.#a??=this.#i}add(e,t,n=0){this.#i===this.#r&&this.#l();let r=this.#i++;for(let i of this.#t){let a=i.mesh.instanceMatrix.array;a.set(e.subarray(i.joint*16,i.joint*16+16),r*16),n!==0&&(a[r*16+13]=(a[r*16+13]??0)+n),i.glow.setXYZ(r,t?.r??0,t?.g??0,t?.b??0)}}addPieces(e,t,n=0){this.#i===this.#r&&this.#l();let r=this.#i++;this.#t.forEach((i,a)=>{let o=i.mesh.instanceMatrix.array;o.set(e.subarray(a*16,a*16+16),r*16),n!==0&&(o[r*16+13]=(o[r*16+13]??0)+n),i.glow.setXYZ(r,t?.r??0,t?.g??0,t?.b??0)})}end(){for(let e of this.#t)e.mesh.count=this.#i,e.mesh.instanceMatrix.needsUpdate=!0,e.glow.needsUpdate=!0,e.shadow&&(e.shadow.count=this.#a??this.#i)}dispose(){for(let e of this.#t)this.#e.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.dispose(),e.shadow&&(this.#e.remove(e.shadow),e.shadow.dispose());this.#n?.material.dispose()}},hm=new z,gm=new z,_m=new z,vm=new br(0,0,0,`YXZ`),ym=new Vn,bm=new R,xm=new R;function Sm(e,t,n,r){return e.joints.forEach((e,i)=>{let a=i*3;bm.set(e.at[0]+(t.shift[a]??0),e.at[1]+(t.shift[a+1]??0),e.at[2]+(t.shift[a+2]??0)),vm.set(t.euler[a]??0,t.euler[a+1]??0,t.euler[a+2]??0,`YXZ`),ym.setFromEuler(vm);let o=t.scale[i]??1;xm.set(o,o,o),hm.compose(bm,ym,xm),e.parent<0?_m.multiplyMatrices(n,hm):_m.multiplyMatrices(gm.fromArray(r,e.parent*16),hm),_m.toArray(r,i*16)}),r}function Cm(e,t,n){let r=t*16;return n.set(e[r+12]??0,e[r+13]??0,e[r+14]??0)}var wm=.5,Tm=.35,Em=class{#e=new Map;step(e,t,n,r,i){let a=this.#e.get(e);if(!a){let r={x:t,y:n,frame:i,gait:{distance:0,previous:0,speed:0,dirX:0,dirY:1}};return this.#e.set(e,r),r}if(i<=a.frame)return a;let o=i-a.frame,s=t-a.x,c=n-a.y,l=Math.sqrt(s*s+c*c),u=a.gait;return u.previous=u.distance,r&&l<=wm*o?(u.distance+=l,u.speed+=(l/o*60-u.speed)*Tm,l>1e-6&&(u.dirX=s/l,u.dirY=c/l)):u.speed-=u.speed*Tm,a.x=t,a.y=n,a.frame=i,a}get(e){return this.#e.get(e)}sweep(e){for(let[t,n]of this.#e)n.frame<e&&this.#e.delete(t)}clear(){this.#e.clear()}};function Dm(e,t){return e.previous+(e.distance-e.previous)*t}var Om=class{count;euler;shift;scale;constructor(e){this.count=e,this.euler=new Float64Array(e*3),this.shift=new Float64Array(e*3),this.scale=new Float64Array(e).fill(1)}clear(){this.euler.fill(0),this.shift.fill(0),this.scale.fill(1)}turn(e,t,n,r){let i=e*3;this.euler[i]=(this.euler[i]??0)+t,this.euler[i+1]=(this.euler[i+1]??0)+n,this.euler[i+2]=(this.euler[i+2]??0)+r}move(e,t,n,r){let i=e*3;this.shift[i]=(this.shift[i]??0)+t,this.shift[i+1]=(this.shift[i+1]??0)+n,this.shift[i+2]=(this.shift[i+2]??0)+r}grow(e,t){this.scale[e]=(this.scale[e]??1)*t}blend(e,t,n){let r=n??Array.from({length:this.count},(e,t)=>t);for(let n of r){for(let r=n*3;r<n*3+3;r++){let n=this.euler[r]??0,i=this.shift[r]??0;this.euler[r]=n+((e.euler[r]??0)-n)*t,this.shift[r]=i+((e.shift[r]??0)-i)*t}let r=this.scale[n]??1;this.scale[n]=r+((e.scale[n]??1)-r)*t}}},km=(e,t,n)=>e<t?t:e>n?n:e,G=(e,t,n)=>e+(t-e)*n,K=e=>{let t=km(e,0,1);return t*t*(3-2*t)},Am=(e,t,n)=>K((n-e)/(t-e)),jm=Math.PI/180;function Mm(e){let t=e%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<=-Math.PI&&(t+=Math.PI*2),t}var Nm=e=>e-Math.floor(e),Pm=new R(0,1,0),Fm=new R,Im=new R,Lm=new Vn,Rm=new z;function zm(e,t,n){Rm.fromArray(e,t*16),Rm.decompose(Fm,Lm,Im),Lm.setFromAxisAngle(Pm,n),Rm.compose(Fm,Lm,Im),Rm.toArray(e,t*16)}function Bm(e,t,n,r){Rm.compose(n,r,Im.set(1,1,1)),Rm.toArray(e,t*16)}var Vm=$f,Hm={body:W(Vm,`body`),sac:W(Vm,`sac`),head:W(Vm,`head`)},Um=[`l1`,`r1`,`l2`,`r2`,`l3`,`r3`].map((e,t)=>({joint:W(Vm,`leg.${e}`),side:e.startsWith(`l`)?1:-1,tripod:(t+Math.floor(t/2))%2})),Wm=.42,Gm=.75,Km=new z,qm=new z,Jm=class{#e=new Om(Vm.joints.length);world=new Float32Array(Vm.joints.length*16);pose(e){let t=this.#e;t.clear();let n=km((e.gait?.speed??0)/4.8,0,1),r=e.gait?Dm(e.gait,e.alpha)/Wm:0,i=0,a=.55,o=0,s=1+.04*Math.sin(e.time*.12),c=0;if(e.state===`windup`){let t=km(e.frame/Math.max(1,e.warn),0,1);i=.07*K(t*2),a=.55+.35*K(t*2),s=1+Gm*t*t+.06*t*Math.sin(e.time*(.6+2.2*t)),o=.012*(.3+t)*Math.sin(e.time*(1.2+3*t)),c=.3*K(t*2),n=0}let l=.5*n;for(let e of Um){let i=Math.sin(2*Math.PI*r+Math.PI*e.tripod),o=Math.max(0,Math.cos(2*Math.PI*r+Math.PI*e.tripod));t.turn(e.joint,-.25*o*n,l*i*e.side,(a+.2*o*n)*e.side)}let u=.015*n*Math.abs(Math.cos(2*Math.PI*r*2)),d=-.35*e.flash*Math.max(0,-e.pushZ),f=-.35*e.flash*e.pushX;return t.move(Hm.body,o,u-i,0),t.turn(Hm.body,d,0,f),t.turn(Hm.head,c,0,0),t.grow(Hm.sac,s),Km.makeTranslation(e.x,e.lift,e.y),Km.multiply(qm.makeRotationY(e.yaw)),e.air>=0&&(Km.multiply(qm.makeTranslation(0,.25,0)),Km.multiply(qm.makeRotationX(-Math.PI*2*K(e.air))),Km.multiply(qm.makeTranslation(0,-.25,0))),e.size!==1&&Km.multiply(qm.makeScale(e.size,e.size,e.size)),Sm(Vm,t,Km,this.world)}},Ym=zf,Xm={body:W(Ym,`body`),chest:W(Ym,`chest`),neck:W(Ym,`neck`),head:W(Ym,`head`),tail:W(Ym,`tail`),fl:W(Ym,`leg.fl`),fr:W(Ym,`leg.fr`),bl:W(Ym,`leg.bl`),br:W(Ym,`leg.br`)},Zm=1.15,Qm=1.5,$m=new z,eh=new z,th=class{#e=new Om(Ym.joints.length);world=new Float32Array(Ym.joints.length*16);pose(e){let t=this.#e;t.clear();let n=km((e.gait?.speed??0)/3.2,0,1),r=e.gait?Dm(e.gait,e.alpha)/Zm:0,i=0,a=0,o=0,s=0,c=0,l=-.25,u=[0,0,0,0];if(e.state===`windup`){let t=km(e.frame/Math.max(1,e.warn),0,1);i=-.09*K(t*1.5),a=.12*t,c=.38*K(t*1.4),u[1]=t<.85?-.35+.45*Math.sin(e.frame*.55):-.1,u[2]=.28*t,u[3]=.28*t,l=-.25-.5*t,s=.035*Math.max(0,(t-.66)*3)*Math.sin(e.time*2.6)}else if(e.state===`attack`){let t=e.travelled/Qm,n=Math.sin(2*Math.PI*t);u[0]=-.85*n,u[1]=-.85*n,u[2]=.85*Math.sin(2*Math.PI*t+1.2),u[3]=.85*Math.sin(2*Math.PI*t+1.2),a=.14*Math.sin(2*Math.PI*t+.6),i=.05*Math.abs(n),c=.32,l=-.9}else if(e.state===`recover`){let t=1-K(km(e.frame/Math.max(1,e.recover),0,1)/.4);a=-.22*t,u[0]=-.55*t,u[1]=-.55*t,u[2]=.2*t,u[3]=.2*t,c=.12*Math.sin(e.time*.5)*(1-t)-.15*t}else{let t=Math.sin(2*Math.PI*r),a=.55*n;u[0]=-a*t,u[3]=-a*t,u[1]=a*t,u[2]=a*t,i=.02*n*Math.cos(4*Math.PI*r),c=.05*Math.sin(e.time*.08)*(1-n),l=-.25+.15*Math.sin(e.time*.2)}a-=.3*e.flash*Math.max(0,-e.pushZ),o-=.22*e.flash*e.pushX,c-=.25*e.flash,t.move(Xm.body,s,i,0),t.turn(Xm.body,a,0,o),t.turn(Xm.head,c,0,0),t.turn(Xm.neck,c*.4,0,0),t.turn(Xm.tail,l,0,0);let d=e.air>=0?.6*Math.sin(e.time*.8):0,f=e.air<0&&e.stun>0?K(e.stun/18):0,p=f*.25*Math.sin(e.time*.9);return t.turn(Xm.fl,u[0]+d+p,0,0),t.turn(Xm.fr,u[1]-d,0,0),t.turn(Xm.bl,u[2]-d-p,0,0),t.turn(Xm.br,u[3]+d,0,0),$m.makeTranslation(e.x,e.lift,e.y),$m.multiply(eh.makeRotationY(e.yaw)),e.air>=0?($m.multiply(eh.makeTranslation(0,.5,0)),$m.multiply(eh.makeRotationX(-Math.PI*2*K(e.air))),$m.multiply(eh.makeTranslation(0,-.5,0))):f>0&&($m.multiply(eh.makeTranslation(0,.22*f,0)),$m.multiply(eh.makeRotationZ(1.35*f)),$m.multiply(eh.makeTranslation(0,-.3*f,0))),e.size!==1&&$m.multiply(eh.makeScale(e.size,e.size,e.size)),Sm(Ym,t,$m,this.world)}},nh=Hf,rh={post:W(nh,`post`),body:W(nh,`body`),head:W(nh,`head`)},ih=new z,ah=new z,oh=.34,sh=16,ch=.32,lh=class{#e=new Om(nh.joints.length);world=new Float32Array(nh.joints.length*16);pose(e){let t=this.#e;t.clear();let n=0,r=0,i=e.hit;if(i&&i.age>=0){let e=oh*Math.exp(-i.age/sh)*Math.cos(i.age*ch);n=e*i.z,r=-e*i.x}else n=.25*e.flash*e.pushZ,r=-.25*e.flash*e.pushX;let a=.015*Math.sin(e.time*.05);return t.turn(rh.post,n*.45,0,r*.45+a),t.turn(rh.body,n*.55,0,r*.55),t.turn(rh.head,n*.4,0,r*.4-a),ih.makeTranslation(e.x,e.lift,e.y),ih.multiply(ah.makeRotationY(e.yaw)),e.air>=0&&(ih.multiply(ah.makeTranslation(0,.6,0)),ih.multiply(ah.makeRotationX(-Math.PI*2*K(e.air))),ih.multiply(ah.makeTranslation(0,-.6,0))),e.size!==1&&ih.multiply(ah.makeScale(e.size,e.size,e.size)),Sm(nh,t,ih,this.world)}},uh=.88;function dh(e){let t=Math.acos(km(1-e/uh,-1,1)),n={hip:-t,knee:2*t};return{legL:n,legR:n,drop:e}}var fh=(e,t,n,r)=>({pitch:e,roll:t,yaw:n,elbow:r}),ph=e=>({armL:e,armR:e}),mh={...ph(fh(-.15,.2,0,-.35)),...dh(0),lean:0,hipsYaw:0,chestYaw:0,chestRoll:0,headPitch:0,swell:1,core:1,walk:1},hh=e=>({...mh,walk:0,...e}),gh=hh({armR:fh(-.25,1.2,-.95,-.55),armL:fh(-.95,.35,.35,-.95),...dh(.22),lean:.12,hipsYaw:-.3,chestYaw:-.8,chestRoll:.08}),_h=hh({armR:fh(-.35,1.2,1.9,-.2),armL:fh(.35,.4,-.4,-.6),...dh(.22),lean:.25,hipsYaw:.3,chestYaw:.85,chestRoll:-.06}),vh=hh({..._h,armR:fh(-.4,1.15,2.1,-.45),chestYaw:1,walk:0}),yh=hh({armR:fh(-.3,1.3,-.35,-.15),armL:fh(-.6,.35,.2,-.8),...dh(.22),lean:.2,hipsYaw:-.25,chestYaw:-.75,chestRoll:.06}),bh=hh({...ph(fh(-2.75,.08,0,-.45)),...dh(.05),lean:-.3,headPitch:-.25,swell:1.05}),xh=hh({...ph(fh(-.65,.05,0,-.1)),...dh(.38),lean:.62,headPitch:.3}),Sh=hh({...ph(fh(-.4,1.2,.15,-.3)),legR:{hip:-1.45,knee:.95},legL:{hip:0,knee:.08},drop:-.04,lean:-.12,chestRoll:-.05,headPitch:.1}),Ch=hh({...ph(fh(.1,.65,0,-.45)),...dh(.26),lean:.22,headPitch:.25}),wh=hh({...ph(fh(.95,.25,0,-.4)),...dh(.5),lean:.35,headPitch:-.3,swell:1.03}),Th=hh({...ph(fh(-2.6,.3,0,-.3)),legL:{hip:-1,knee:1.6},legR:{hip:-1.1,knee:1.5},drop:0,lean:-.15,headPitch:-.15}),Eh=hh({...ph(fh(-1.45,.12,0,-.2)),legL:{hip:-.45,knee:.7},legR:{hip:-.4,knee:.6},drop:0,lean:.35,headPitch:.15}),Dh=hh({...ph(fh(-.55,.18,0,-.1)),...dh(.55),lean:.55,headPitch:.35}),Oh=hh({...ph(fh(-.75,1.35,-.2,-.15)),...dh(.08),lean:-.38,headPitch:-.35,swell:1.12,core:1.25}),kh=hh({...ph(fh(-.5,1.55,-.5,-.05)),...dh(.12),lean:.15,headPitch:-.1,swell:1.2,core:1.45}),Ah=hh({armR:fh(.35,.3,0,-.75),armL:fh(.6,.2,0,-.7),...dh(.26),lean:.3,chestRoll:.18,headPitch:.55}),jh=hh({...ph(fh(.75,.25,0,-.7)),...dh(.12),lean:.5,chestRoll:.1,headPitch:.3,walk:1}),Mh=hh({...ph(fh(-.4,.6,0,-.4)),...dh(.2),lean:-.15,headPitch:.1}),Nh=hh({...ph(fh(.1,.15,0,-.2)),legL:{hip:-1.3,knee:1.45},legR:{hip:.25,knee:1.6},drop:.5,lean:.45,headPitch:.4}),Ph=hh({...ph(fh(-.45,.12,.15,-.05)),legL:{hip:-1.3,knee:1.45},legR:{hip:.25,knee:1.6},drop:.5,lean:.55,headPitch:.25}),Fh=hh({...ph(fh(-2.3,1,0,-.1)),...dh(.3),lean:-.5,headPitch:-.5,swell:1.15,core:1.6});function Ih(e,t,n){return{pitch:G(e.pitch,t.pitch,n),roll:G(e.roll,t.roll,n),yaw:G(e.yaw,t.yaw,n),elbow:G(e.elbow,t.elbow,n)}}var Lh=(e,t,n)=>({hip:G(e.hip,t.hip,n),knee:G(e.knee,t.knee,n)});function Rh(e,t,n){return n<=0?e:n>=1?t:{armL:Ih(e.armL,t.armL,n),armR:Ih(e.armR,t.armR,n),legL:Lh(e.legL,t.legL,n),legR:Lh(e.legR,t.legR,n),drop:G(e.drop,t.drop,n),lean:G(e.lean,t.lean,n),hipsYaw:G(e.hipsYaw,t.hipsYaw,n),chestYaw:G(e.chestYaw,t.chestYaw,n),chestRoll:G(e.chestRoll,t.chestRoll,n),headPitch:G(e.headPitch,t.headPitch,n),swell:G(e.swell,t.swell,n),core:G(e.core,t.core,n),walk:G(e.walk,t.walk,n)}}function zh(e,t,n,r,i){return Rh(Rh(e,t,K(r/(1-i))),n,Am(1-i,1,r))}function Bh(e,t,n){return Rh(e,mh,Am(n,1,t))}function Vh(e,t){let n=km(e.frame/Math.max(1,e.length),0,1),r=e.stage===1,i=e.stage===3;switch(e.move){case`sweep`:return r?zh(mh,gh,_h,n,.14):i?Bh(_h,n,.3):_h;case`backsweep`:return r?zh(_h,vh,yh,n,.35):yh;case`smash`:if(r){let t=e.step>=2;return zh(t?yh:mh,bh,xh,n,t?.25:.12)}return i?Bh(xh,n,.7):xh;case`stomp`:return r?zh(mh,Sh,Ch,n,.15):i?Bh(Ch,n,.35):Ch;case`leap`:return r?Rh(mh,wh,K(n/.8)):e.stage===2?Rh(Rh(wh,Th,K(n/.25)),Eh,Am(.5,1,n)):i?Bh(Dh,n,.45):Dh;case`barrage`:if(r){let e=Rh(mh,Oh,K(n/.85));return{...e,chestRoll:e.chestRoll+.03*n*Math.sin(t*1.9)}}if(e.stage===2){let t=Math.max(1,e.beat);return Rh(Oh,kh,1-K((e.frame-Math.floor(e.frame/t)*t)/t))}return i?Bh(Oh,n,.1):Oh;case`rush`:if(r){if(e.step>0)return Rh(jh,Ah,K(n/.4));let t=Rh(mh,Ah,K(n/.4)),r=Math.max(0,Math.sin(2*Math.PI*2*Am(.3,.95,n)));return{...t,legR:{hip:t.legR.hip+.55*r,knee:t.legR.knee+.6*r}}}return e.stage===2?jh:i?Bh(Mh,n,.3):Mh;case`pulse`:if(r){let e=Rh(mh,Ph,K(n/.28)),r=n*n;return{...e,chestRoll:e.chestRoll+.05*r*Math.sin(t*2.3),lean:e.lean+.03*r*Math.sin(t*3.1),core:1+.55*n,swell:1+.06*n}}return i?Rh(Rh(Ph,Fh,K(n/.12)),mh,Am(.35,1,n)):Fh;default:return mh}}function Hh(e,t,n,r){e.move(t.hips,0,r-n.drop,0),e.turn(t.hips,0,n.hipsYaw,0),e.turn(t.spine,n.lean*.5,n.chestYaw*.4,0),e.turn(t.chest,n.lean*.5,n.chestYaw*.6,-n.chestRoll),e.grow(t.chest,n.swell),e.grow(t.core,n.core),e.turn(t.head,n.headPitch-n.lean*.3,-n.chestYaw*.3,0),e.turn(t.shoulderL,n.armL.pitch,-n.armL.yaw,n.armL.roll),e.turn(t.shoulderR,n.armR.pitch,n.armR.yaw,-n.armR.roll),e.turn(t.elbowL,n.armL.elbow,0,0),e.turn(t.elbowR,n.armR.elbow,0,0),e.turn(t.hipL,n.legL.hip,0,0),e.turn(t.kneeL,n.legL.knee,0,0),e.turn(t.hipR,n.legR.hip,0,0),e.turn(t.kneeR,n.legR.knee,0,0)}var Uh=qf,Wh={hips:W(Uh,`hips`),spine:W(Uh,`spine`),chest:W(Uh,`chest`),head:W(Uh,`head`),core:W(Uh,`core`),spikes:W(Uh,`spikes`),shoulderL:W(Uh,`shoulder.l`),elbowL:W(Uh,`elbow.l`),shoulderR:W(Uh,`shoulder.r`),elbowR:W(Uh,`elbow.r`),hipL:W(Uh,`hip.l`),kneeL:W(Uh,`knee.l`),hipR:W(Uh,`hip.r`),kneeR:W(Uh,`knee.r`)},Gh=2.4,Kh=26,qh=new z,Jh=new z,Yh=class{#e=new Om(Uh.joints.length);world=new Float32Array(Uh.joints.length*16);pose(e){let t=this.#e;if(t.clear(),e.warden)return this.#t(e,e.warden);let n=e.boss??null,r=km((e.gait?.speed??0)/2.4,0,1),i=e.gait?Dm(e.gait,e.alpha)/Gh:0,a={pitch:-.15,roll:.2,elbow:-.35},o=0,s=0,c=0,l=0,u=1+.015*Math.sin(e.time*.04),d=0;if(n?.mode===`warn`&&n.kind===`slam`){let e=km(n.frame/Math.max(1,n.warn),0,1),t=K(e/.75),i=K((e-.9)/.1);a.pitch=G(G(a.pitch,-2.7,t),-.75,i),a.elbow=G(G(a.elbow,-.5,t),-.12,i),a.roll=G(a.roll,.05,t),d=t*(1-i),o=-.25*t*(1-i)+.55*i,s=.1*t+.3*i,c=-.2*t+.3*i,r=0}else if(n?.mode===`warn`&&n.kind===`ring`){let t=K(km(n.frame/Math.max(1,n.warn),0,1));a.pitch=G(a.pitch,-.5,t),a.roll=G(a.roll,1.4,t),a.elbow=G(a.elbow,-.1,t),o=-.18*t,c=-.25*t,u+=.06*t,l=.12*Math.sin(e.time*.3)*t,r=0}else if(n?.mode===`warn`&&n.kind===`charge`){let i=K(km(n.frame/Math.max(1,n.warn),0,1));a.pitch=G(a.pitch,.6,i),a.elbow=G(a.elbow,-.6,i),o=-.12*i,s=.18*i,c=.15*i,r=0,t.turn(Wh.hipR,-.35*i*(.5+.5*Math.sin(e.time*.45)),0,0),t.turn(Wh.kneeR,.45*i*(.5+.5*Math.sin(e.time*.45)),0,0)}else n?.mode===`charge`&&(a.pitch=.75,a.elbow=-.7,o=.5,s=.12,r=1,i=e.time/14);if(n&&n.struck>=0&&n.struck<Kh&&n.mode!==`warn`){let e=1-K(n.struck/Kh);a.pitch=G(a.pitch,-.75,e),a.elbow=G(a.elbow,-.12,e),a.roll=G(a.roll,.05,e),o=G(o,.55,e),s=G(s,.3,e),r*=1-e}let f=Math.sin(2*Math.PI*i),p=Math.cos(2*Math.PI*i),m=(n?.mode===`charge`?.75:.45)*r;t.turn(Wh.hipL,-m*f,0,0),t.turn(Wh.hipR,m*f,0,0),t.turn(Wh.kneeL,.6*r*Math.max(0,p),0,0),t.turn(Wh.kneeR,.6*r*Math.max(0,-p),0,0);let h=.06*r*Math.abs(p)-.03*r;l+=.08*r*f;let g=.3*r*f*(n?.mode===`charge`?.4:1),_=n?.broken??0;return _>0&&(t.turn(Wh.hipL,-1.3*_,0,0),t.turn(Wh.kneeL,1.45*_,0,0),t.turn(Wh.hipR,.25*_,0,0),t.turn(Wh.kneeR,1.6*_,0,0),a.pitch=G(a.pitch,.1,_),a.roll=G(a.roll,.15,_),a.elbow=G(a.elbow,-.2,_),o=G(o,.45,_),c=G(c,.4,_),s=G(s,.5,_)),o+=.1*e.flash*e.pushZ,t.move(Wh.hips,0,h-s,0),t.turn(Wh.spine,o*.5,0,-.06*e.flash*e.pushX),t.turn(Wh.chest,o*.5,l,0),t.grow(Wh.chest,u),t.turn(Wh.head,c-o*.3,0,0),t.turn(Wh.shoulderL,a.pitch-g,0,a.roll-.25*d),t.turn(Wh.shoulderR,a.pitch+g,0,-a.roll+.25*d),t.turn(Wh.elbowL,a.elbow,0,0),t.turn(Wh.elbowR,a.elbow,0,0),t.grow(Wh.spikes,Math.max(.001,n?.grown??0)),t.grow(Wh.core,1+.08*Math.sin(e.time*.12)*(n?.grown??0)),this.#n(e)}#t(e,t){let n=this.#e,r=Vh(t,e.time);t.broken>0&&(r=Rh(r,Nh,t.broken));let i=t.move===`rush`&&t.stage===2,a=i?1:km((e.gait?.speed??0)/2.4,0,1)*r.walk,o=i?e.time/14:e.gait?Dm(e.gait,e.alpha)/Gh:0,s=Math.sin(2*Math.PI*o),c=Math.cos(2*Math.PI*o),l=(i?.75:.45)*a;n.turn(Wh.hipL,-l*s,0,0),n.turn(Wh.hipR,l*s,0,0),n.turn(Wh.kneeL,.6*a*Math.max(0,c),0,0),n.turn(Wh.kneeR,.6*a*Math.max(0,-c),0,0);let u=.3*a*s*(i?.4:1);return n.turn(Wh.shoulderL,-u,0,0),n.turn(Wh.shoulderR,u,0,0),n.turn(Wh.chest,0,.08*a*s,0),n.grow(Wh.chest,1+.015*Math.sin(e.time*.04)),n.turn(Wh.spine,.05*e.flash*e.pushZ,0,-.06*e.flash*e.pushX),Hh(n,Wh,r,.06*a*Math.abs(c)-.03*a),n.grow(Wh.spikes,Math.max(.001,t.grown)),n.grow(Wh.core,1+.08*Math.sin(e.time*.12)*t.grown),this.#n(e)}#n(e){return qh.makeTranslation(e.x,e.lift,e.y),qh.multiply(Jh.makeRotationY(e.yaw)),e.size!==1&&qh.multiply(Jh.makeScale(e.size,e.size,e.size)),Sm(Uh,this.#e,qh,this.world)}},Xh=Zf,Zh={crystal:W(Xh,`crystal`)},Qh=new z,$h=new z,eg=.06,tg=7,ng=1.9,rg=class{#e=new Om(Xh.joints.length);world=new Float32Array(Xh.joints.length*16);pose(e){let t=this.#e;t.clear();let n=e.hit;if(n&&n.age>=0){let e=eg*Math.exp(-n.age/tg)*Math.cos(n.age*ng);t.move(Zh.crystal,n.x*e,0,n.z*e),t.turn(Zh.crystal,.12*e*n.z,0,-.12*e*n.x)}return t.move(Zh.crystal,0,.01*Math.sin(e.time*.04),0),Qh.makeTranslation(e.x,e.lift,e.y),Qh.multiply($h.makeRotationY(e.yaw)),e.air>=0&&(Qh.multiply($h.makeTranslation(0,.7,0)),Qh.multiply($h.makeRotationX(-Math.PI*2*K(e.air))),Qh.multiply($h.makeTranslation(0,-.7,0))),e.size!==1&&Qh.multiply($h.makeScale(e.size,e.size,e.size)),Sm(Xh,t,Qh,this.world)}},ig=tp,ag={body:W(ig,`body`),head:W(ig,`head`),armL:W(ig,`arm.l`),armR:W(ig,`arm.r`),legL:W(ig,`leg.l`),legR:W(ig,`leg.r`)},og=.55,sg=.45,cg=.95,lg=new z,ug=new z,dg=class{#e=new Om(ig.joints.length);world=new Float32Array(ig.joints.length*16);pose(e){let t=this.#e;t.clear();let n=km((e.gait?.speed??0)/3.6,0,1),r=e.gait?Dm(e.gait,e.alpha)/og:0,i=.15,a=.25,o=.2*n,s=0,c=0;if(e.state===`windup`){let t=km(e.frame/Math.max(1,e.warn),0,1),r=K(t*1.6);i=G(i,1.1,r),a=G(a,.6,r),o=G(o,.35,r),s=.08*r,c=.01*t*Math.sin(e.time*2.2),n=0}else if(e.state===`attack`)i=-1.5,a=.2,o=.6,n=1,r=e.travelled/sg;else if(e.state===`recover`){let t=1-K((km(e.frame/Math.max(1,e.recover),0,1)-.7)/.3);i=G(i,.35,t),o=G(o,-.12+.06*Math.sin(e.time*.5),t),n*=1-t}let l=K(e.rise??1),u=cg*(1-l);l<1&&(i=G(-2.7,i,K((l-.45)/.55)),a=G(.45,a,l),o=G(-.25,o,l),c=.02*(1-l)*Math.sin(e.time*3.1),n=0);let d=Math.sin(2*Math.PI*r),f=Math.cos(2*Math.PI*r),p=.55*n;t.turn(ag.legL,-p*d,0,0),t.turn(ag.legR,p*d,0,0);let m=.45*n;t.turn(ag.armL,i+m*d,0,a),t.turn(ag.armR,i-m*d,0,-a);let h=.03*n*Math.abs(f);o-=.3*e.flash*Math.max(0,-e.pushZ);let g=-.25*e.flash*e.pushX;return t.move(ag.body,c,h-s,0),t.turn(ag.body,o,0,g),t.turn(ag.head,-o*.5,0,0),lg.makeTranslation(e.x,e.lift-u,e.y),lg.multiply(ug.makeRotationY(e.yaw)),e.air>=0&&(lg.multiply(ug.makeTranslation(0,.4,0)),lg.multiply(ug.makeRotationX(-Math.PI*2*K(e.air))),lg.multiply(ug.makeTranslation(0,-.4,0))),e.size!==1&&lg.multiply(ug.makeScale(e.size,e.size,e.size)),Sm(ig,t,lg,this.world)}},fg=rp,pg=W(fg,`core`),mg=W(fg,`ring`),hg=[0,1,2,3].map(e=>{let t=W(fg,`shard.${e}`),[n,,r]=fg.joints[t]?.at??[0,0,0],i=Math.hypot(n,r)||1;return{joint:t,out:[n/i,r/i]}}),gg=new z,_g=new z,vg=class{#e=new Om(fg.joints.length);world=new Float32Array(fg.joints.length*16);pose(e){let t=this.#e;t.clear();let n=!e.asleep,r=n?.18:.42,i=0;n&&(i=.025*Math.sin(e.time*2.9)+.015*Math.sin(e.time*4.3),t.grow(pg,1+.05*Math.sin(e.time*.35)),t.turn(mg,0,e.time*.03,0));for(let[i,a]of hg.entries()){let[o,s]=a.out,c=n?.06*Math.sin(e.time*.21+i*1.6):0;t.turn(a.joint,(r+c)*s,0,-(r+c)*o)}return i+=.04*e.flash*Math.sin(e.time*3.7),gg.makeTranslation(e.x+i,e.lift,e.y),gg.multiply(_g.makeRotationY(e.yaw)),e.size!==1&&gg.multiply(_g.makeScale(e.size,e.size,e.size)),Sm(fg,t,gg,this.world)}},yg=Qf,bg={hips:W(yg,`hips`),chest:W(yg,`chest`),head:W(yg,`head`),shoulderL:W(yg,`shoulder.l`),elbowL:W(yg,`elbow.l`),shield:W(yg,`shield`),shoulderR:W(yg,`shoulder.r`),elbowR:W(yg,`elbow.r`),club:W(yg,`club`),hipL:W(yg,`hip.l`),kneeL:W(yg,`knee.l`),hipR:W(yg,`hip.r`),kneeR:W(yg,`knee.r`)},xg=1.5,Sg=1.1,Cg=new z,wg=new z,Tg=class{#e=new Om(yg.joints.length);world=new Float32Array(yg.joints.length*16);pose(e){let t=this.#e;t.clear();let n=km((e.gait?.speed??0)/2.1,0,1),r=e.gait?Dm(e.gait,e.alpha)/xg:0,i={pitch:-.62,roll:.12,elbow:-.95},a={pitch:.15,roll:.15,elbow:-.6},o=.08,s=.02,c=0,l=0,u=0;if(e.state===`windup`){let t=km(e.frame/Math.max(1,e.warn),0,1),r=K(t*1.3);i.pitch=G(i.pitch,-.78,r),i.elbow=G(i.elbow,-.8,r),a.pitch=G(a.pitch,-2.3,r),a.elbow=G(a.elbow,-.9,r),a.roll=G(a.roll,.35,r),o=G(o,-.1,r),s=G(s,.14,r),c=.12*r,l=.02*Math.max(0,(t-.65)*3)*Math.sin(e.time*2.4),n=0}else if(e.state===`attack`)i.pitch=-1.15,i.elbow=-.35,a.pitch=-1.6,a.elbow=-1.1,o=.45,s=.1,n=1,r=e.travelled/Sg;else if(e.state===`recover`||e.stun>0&&e.air<0){let t=e.state===`recover`?km(e.frame/Math.max(1,e.recover),0,1):.5,r=K(t/.2)*(1-K((t-.85)/.15)),l=.05*Math.sin(e.time*.45);i.pitch=G(i.pitch,.1,r),i.elbow=G(i.elbow,-.15,r),i.roll=G(i.roll,.45,r),u=1.1*r,a.pitch=G(a.pitch,.25,r),a.elbow=G(a.elbow,-.2,r),o=G(o,.28+l,r),s=G(s,.08,r),c=G(c,.45+l,r),n*=1-r}let d=Math.sin(2*Math.PI*r),f=Math.cos(2*Math.PI*r),p=(e.state===`attack`?.7:.42)*n;t.turn(bg.hipL,-p*d,0,0),t.turn(bg.hipR,p*d,0,0),t.turn(bg.kneeL,.7*n*Math.max(0,f),0,0),t.turn(bg.kneeR,.7*n*Math.max(0,-f),0,0);let m=.04*n*Math.abs(f)-.02*n;o-=.22*e.flash*Math.max(0,-e.pushZ);let h=-.16*e.flash*e.pushX;return t.move(bg.hips,l,m-s,0),t.turn(bg.hips,o*.4,0,h),t.turn(bg.chest,o*.6,.06*n*d,0),t.turn(bg.head,c-o*.4,0,0),t.turn(bg.shoulderL,i.pitch,u,i.roll),t.turn(bg.elbowL,i.elbow,0,0),t.turn(bg.shield,-(i.pitch+i.elbow+o),0,-i.roll),t.turn(bg.shoulderR,a.pitch+.2*n*d,0,-a.roll),t.turn(bg.elbowR,a.elbow,0,0),t.turn(bg.club,.4,0,0),Cg.makeTranslation(e.x,e.lift,e.y),Cg.multiply(wg.makeRotationY(e.yaw)),e.air>=0&&(Cg.multiply(wg.makeTranslation(0,.9,0)),Cg.multiply(wg.makeRotationX(-Math.PI*2*K(e.air))),Cg.multiply(wg.makeTranslation(0,-.9,0))),e.size!==1&&Cg.multiply(wg.makeScale(e.size,e.size,e.size)),Sm(yg,t,Cg,this.world)}},Eg=Wf,Dg={hover:W(Eg,`hover`),ring:W(Eg,`ring`),barrel:W(Eg,`barrel`)},Og=new z,kg=new z,Ag=class{#e=new Om(Eg.joints.length);world=new Float32Array(Eg.joints.length*16);pose(e){let t=this.#e;t.clear();let n=.06*Math.sin(e.time*.08),r=e.time*.03,i=1,a=0,o=0;if(e.state===`windup`){let t=km(e.frame/Math.max(1,e.warn),0,1);r+=9*t*t,i=1+.28*K(t),a=-.12*t,n*=1-t}else if(e.state===`attack`||e.state===`recover`){let t=1-K(e.state===`attack`?0:km(e.frame/Math.max(1,e.recover),0,1));o=.18*t,a=-.3*t,r+=9}a+=.32*e.flash*e.pushZ;let s=-.3*e.flash*e.pushX,c=e.air<0&&e.stun>0?K(e.stun/18):0;return t.move(Dg.hover,0,n-.32*c,-o),t.turn(Dg.hover,a+.3*c*Math.sin(e.time*.6),0,s),t.turn(Dg.ring,0,r,0),t.grow(Dg.ring,i),t.turn(Dg.barrel,-.5*a,0,0),Og.makeTranslation(e.x,e.lift,e.y),Og.multiply(kg.makeRotationY(e.yaw)),e.air>=0&&(Og.multiply(kg.makeTranslation(0,.66,0)),Og.multiply(kg.makeRotationX(-Math.PI*2*K(e.air))),Og.multiply(kg.makeRotationZ(Math.PI*K(e.air))),Og.multiply(kg.makeTranslation(0,-.66,0))),e.size!==1&&Og.multiply(kg.makeScale(e.size,e.size,e.size)),Sm(Eg,t,Og,this.world)}},jg=ep,Mg={hips:W(jg,`hips`),chest:W(jg,`chest`),head:W(jg,`head`),shoulderL:W(jg,`shoulder.l`),elbowL:W(jg,`elbow.l`),shoulderR:W(jg,`shoulder.r`),elbowR:W(jg,`elbow.r`),staff:W(jg,`staff`),hipL:W(jg,`hip.l`),kneeL:W(jg,`knee.l`),hipR:W(jg,`hip.r`),kneeR:W(jg,`knee.r`)},Ng=1.1,Pg=new z,Fg=new z,Ig=class{#e=new Om(jg.joints.length);world=new Float32Array(jg.joints.length*16);pose(e){let t=this.#e;t.clear();let n=km((e.gait?.speed??0)/2.4,0,1),r=e.gait?Dm(e.gait,e.alpha)/Ng:0,i={pitch:-.3,roll:.12,elbow:-.55},a={pitch:.12,roll:.18,elbow:-.35},o=.05,s=.06,c=0,l=0;if(e.state===`windup`){let t=km(e.frame/Math.max(1,e.warn),0,1),r=K(t*1.5);i.pitch=G(i.pitch,-2.75,r),i.elbow=G(i.elbow,-.2,r),i.roll=G(i.roll,.05,r),a.pitch=G(a.pitch,-2.5,r),a.roll=G(a.roll,.45,r),a.elbow=G(a.elbow,-.45,r),o=G(o,-.16,r),s=G(s,-.42,r),l=.014*Math.max(0,(t-.6)*2.5)*Math.sin(e.time*2.6),n=0}else if(e.state===`recover`||e.stun>0&&e.air<0){let t=e.state===`recover`?km(e.frame/Math.max(1,e.recover),0,1):.5,r=K(t/.2)*(1-K((t-.8)/.2));i.pitch=G(i.pitch,-.75,r),i.elbow=G(i.elbow,-.3,r),a.pitch=G(a.pitch,.25,r),o=G(o,.32,r),s=G(s,.45,r),c=.07*r,n*=1-r}let u=Math.sin(2*Math.PI*r),d=Math.cos(2*Math.PI*r),f=.32*n;t.turn(Mg.hipL,-f*u,0,0),t.turn(Mg.hipR,f*u,0,0),t.turn(Mg.kneeL,.45*n*Math.max(0,d),0,0),t.turn(Mg.kneeR,.45*n*Math.max(0,-d),0,0);let p=.02*Math.sin(e.time*.07)+.02*n*Math.abs(d);o-=.22*e.flash*Math.max(0,-e.pushZ);let m=-.16*e.flash*e.pushX;return t.move(Mg.hips,l,p-c,0),t.turn(Mg.hips,o*.4,0,m),t.turn(Mg.chest,o*.6,.05*n*u,0),t.turn(Mg.head,s-o*.3,0,0),t.turn(Mg.shoulderL,a.pitch-.15*n*u,0,a.roll),t.turn(Mg.elbowL,a.elbow,0,0),t.turn(Mg.shoulderR,i.pitch,0,-i.roll),t.turn(Mg.elbowR,i.elbow,0,0),t.turn(Mg.staff,-(i.pitch+i.elbow+o),0,i.roll),Pg.makeTranslation(e.x,e.lift,e.y),Pg.multiply(Fg.makeRotationY(e.yaw)),e.air>=0&&(Pg.multiply(Fg.makeTranslation(0,.9,0)),Pg.multiply(Fg.makeRotationX(-Math.PI*2*K(e.air))),Pg.multiply(Fg.makeTranslation(0,-.9,0))),e.size!==1&&Pg.multiply(Fg.makeScale(e.size,e.size,e.size)),Sm(jg,t,Pg,this.world)}},Lg=np,Rg=W(Lg,`core`),zg=[0,1,2,3,4].map(e=>{let t=W(Lg,`shard.${e}`),[n,,r]=Lg.joints[t]?.at??[0,0,0],i=Math.hypot(n,r)||1;return{joint:t,out:[n/i,r/i]}}),Bg=new z,Vg=new z,Hg=class{#e=new Om(Lg.joints.length);world=new Float32Array(Lg.joints.length*16);pose(e){let t=this.#e;t.clear();let n=e.asleep?.45:1+.05*Math.sin(e.time*.09),r=e.asleep?1.05:.45,i=e.asleep?.7:1,a=0;if(e.state===`windup`){let t=km(e.frame/Math.max(1,e.warn),0,1),o=K(t*1.4);n=G(n,1.35,o),r=G(r,.75,o),i=G(i,1.25,o),a=.012*(.3+t)*Math.sin(e.time*(1.6+2.4*t))}else if(e.state===`recover`){let t=km(e.frame/Math.max(1,e.recover),0,1);n=G(.35,1,K(t)),r=G(1.1,.45,K(t))}a+=.03*e.flash*Math.sin(e.time*3.3);for(let[i,a]of zg.entries()){let[o,s]=a.out,c=.05*Math.sin(e.time*.07+i*1.9);t.turn(a.joint,(r+c)*s,0,-(r+c)*o),t.grow(a.joint,n)}return t.grow(Rg,i),Bg.makeTranslation(e.x+a,e.lift,e.y),Bg.multiply(Vg.makeRotationY(e.yaw)),e.size!==1&&Bg.multiply(Vg.makeScale(e.size,e.size,e.size)),Sm(Lg,t,Bg,this.world)}};function Ug(e){switch(e){case`rig.dummy`:return new lh;case`rig.shooter`:return new Ag;case`rig.guardian`:return new Yh;case`rig.prison`:return new rg;case`rig.shieldbearer`:return new Tg;case`rig.bomber`:return new Jm;case`rig.summoner`:return new Ig;case`rig.puppet`:return new dg;case`rig.thorn_trap`:return new Hg;case`rig.rampant_crystal`:return new vg;default:return new th}}var Wg={yaw:0,pitch:0,roll:0,gx:0,gy:0,gz:0,hips:0,chest:0,lean:0,bank:0,crouch:0,lunge:0,lift:0,stride:0,armPitch:0,armRoll:0,hands:0},Gg=Object.keys(Wg);function Kg(e){return{...Wg,...e}}var qg=Kg,Jg=qg({yaw:-32,pitch:-38,gx:-.2,gy:-.28,gz:.14,armPitch:0,armRoll:8}),Yg={readyAt:.7,strike:2.5,followFor:3,holdFor:3,ready:qg({yaw:-150,pitch:34,roll:-40,gx:-.34,gy:.32,gz:-.12,hips:-22,chest:-42,lean:-4,bank:-10,crouch:.08,lunge:-.06,stride:.4,armPitch:-70,armRoll:14}),coil:qg({yaw:-160,pitch:38,roll:-42,gx:-.35,gy:.34,gz:-.15,hips:-26,chest:-48,lean:-6,bank:-12,crouch:.1,lunge:-.08,stride:.45,armPitch:-74,armRoll:16}),contact:qg({yaw:-5,pitch:-14,roll:-30,gx:-.08,gy:.02,gz:.4,hips:18,chest:14,lean:26,bank:8,crouch:.18,lunge:.3,stride:1,armPitch:30,armRoll:30}),through:qg({yaw:100,pitch:-38,roll:-35,gx:.02,gy:-.12,gz:.26,hips:34,chest:38,lean:32,bank:10,crouch:.22,lunge:.34,stride:1,armPitch:42,armRoll:34}),follow:qg({yaw:122,pitch:-48,roll:-38,gx:0,gy:-.16,gz:.22,hips:38,chest:44,lean:34,bank:11,crouch:.24,lunge:.34,stride:1,armPitch:46,armRoll:36}),hold:qg({yaw:126,pitch:-50,roll:-38,gx:0,gy:-.17,gz:.21,hips:39,chest:45,lean:34,bank:11,crouch:.24,lunge:.33,stride:1,armPitch:45,armRoll:34})},Xg={readyAt:.7,strike:2.5,followFor:3,holdFor:3,ready:qg({yaw:140,pitch:-40,roll:40,gx:.02,gy:-.14,gz:.14,hips:30,chest:42,lean:22,bank:12,crouch:.18,lunge:.1,stride:.75,armPitch:10,armRoll:-25}),coil:qg({yaw:150,pitch:-44,roll:42,gx:.03,gy:-.16,gz:.12,hips:34,chest:48,lean:24,bank:13,crouch:.2,lunge:.08,stride:.75,armPitch:12,armRoll:-28}),contact:qg({yaw:5,pitch:6,roll:30,gx:-.14,gy:.1,gz:.4,hips:-8,chest:-10,lean:12,bank:-2,crouch:.12,lunge:.26,stride:1,armPitch:30,armRoll:35}),through:qg({yaw:-100,pitch:36,roll:38,gx:-.4,gy:.3,gz:.14,hips:-26,chest:-34,lean:-4,bank:-8,crouch:.02,lunge:.28,stride:1,armPitch:40,armRoll:45}),follow:qg({yaw:-124,pitch:52,roll:42,gx:-.4,gy:.4,gz:.06,hips:-30,chest:-40,lean:-12,bank:-10,crouch:-.04,lunge:.24,stride:1,armPitch:45,armRoll:50}),hold:qg({yaw:-127,pitch:54,roll:42,gx:-.4,gy:.41,gz:.05,hips:-31,chest:-41,lean:-12,bank:-10,crouch:-.04,lunge:.23,stride:1,armPitch:44,armRoll:48})},Zg={readyAt:.7,strike:2.5,followFor:3,holdFor:3,ready:qg({yaw:-160,pitch:6,gx:-.4,gy:-.04,gz:-.1,hips:-36,chest:-52,lean:14,bank:-6,crouch:.2,lunge:-.06,stride:.9,armPitch:-85,armRoll:8}),coil:qg({yaw:-172,pitch:8,gx:-.42,gy:-.02,gz:-.14,hips:-40,chest:-58,lean:16,bank:-7,crouch:.22,lunge:-.08,stride:.95,armPitch:-88,armRoll:6}),contact:qg({yaw:0,pitch:2,gx:-.1,gy:-.04,gz:.38,hips:24,chest:16,lean:20,bank:4,crouch:.24,lunge:.32,stride:1,armPitch:35,armRoll:45}),through:qg({yaw:108,pitch:0,gx:.04,gy:-.08,gz:.26,hips:44,chest:50,lean:20,bank:6,crouch:.24,lunge:.36,stride:1,armPitch:50,armRoll:55}),follow:qg({yaw:140,pitch:-4,gx:.04,gy:-.1,gz:.2,hips:50,chest:60,lean:18,bank:6,crouch:.22,lunge:.36,stride:1,armPitch:52,armRoll:58}),hold:qg({yaw:143,pitch:-5,gx:.04,gy:-.1,gz:.19,hips:51,chest:61,lean:18,bank:6,crouch:.22,lunge:.35,stride:1,armPitch:52,armRoll:56}),link:[{at:.55,pose:qg({yaw:30,pitch:82,roll:90,gx:-.1,gy:.44,gz:.06,chest:-10,lean:-6,crouch:.04,lunge:.1,stride:.6,armPitch:-60,hands:.7})}]},Qg={readyAt:.7,strike:3,followFor:3,holdFor:5,ready:qg({yaw:-158,pitch:32,roll:-60,gx:-.22,gy:.36,gz:-.06,hips:-30,chest:-50,lean:-16,bank:-10,crouch:.02,lunge:-.14,stride:.55,hands:1}),coil:qg({yaw:-166,pitch:40,roll:-64,gx:-.24,gy:.4,gz:-.08,hips:-34,chest:-56,lean:-20,bank:-12,crouch:-.04,lunge:-.16,stride:.55,hands:1}),contact:qg({yaw:-2,pitch:-22,roll:-55,gx:-.08,gy:-.02,gz:.4,hips:18,chest:14,lean:32,bank:6,crouch:.24,lunge:.4,stride:1,hands:1}),through:qg({yaw:112,pitch:-52,roll:-55,gx:-.02,gy:-.18,gz:.24,hips:36,chest:42,lean:42,bank:8,crouch:.32,lunge:.44,stride:1,hands:1}),follow:qg({yaw:130,pitch:-60,roll:-55,gx:-.02,gy:-.2,gz:.2,hips:40,chest:46,lean:45,bank:9,crouch:.34,lunge:.44,stride:1,hands:1}),hold:qg({yaw:132,pitch:-61,roll:-55,gx:-.02,gy:-.2,gz:.2,hips:40,chest:47,lean:45,bank:9,crouch:.34,lunge:.43,stride:1,hands:1}),link:[{at:.5,pose:qg({yaw:10,pitch:-50,roll:-30,gx:0,gy:-.16,gz:.24,hips:5,lean:30,crouch:.2,lunge:.1,stride:.8,hands:1})}]},$g={readyAt:.3,strike:2.5,followFor:3,holdFor:7,ready:qg({yaw:-105,pitch:-32,roll:-20,gx:-.08,gy:-.16,gz:.14,hips:-22,chest:-34,lean:30,bank:-6,crouch:.3,lunge:-.06,stride:.8,hands:1}),windup:[{at:.4,pose:qg({yaw:-40,pitch:40,roll:60,gx:-.16,gy:.22,gz:.2,hips:-6,chest:-10,lean:6,crouch:.02,lift:.38,stride:.5,hands:1})},{at:.85,pose:qg({yaw:0,pitch:112,roll:90,gx:-.08,gy:.42,gz:-.02,lean:-22,crouch:-.04,lift:.72,stride:.35,hands:1})}],coil:qg({yaw:0,pitch:118,roll:90,gx:-.08,gy:.44,gz:-.04,lean:-25,crouch:-.05,lift:.74,stride:.35,hands:1}),contact:qg({yaw:0,pitch:-18,roll:90,gx:-.05,gy:-.18,gz:.3,lean:46,crouch:.36,lunge:.24,stride:1,hands:1}),through:qg({yaw:0,pitch:-16,roll:90,gx:-.05,gy:-.17,gz:.3,lean:44,crouch:.35,lunge:.24,stride:1,hands:1}),follow:qg({yaw:0,pitch:-15,roll:90,gx:-.05,gy:-.17,gz:.3,lean:43,crouch:.34,lunge:.24,stride:1,hands:1}),hold:qg({yaw:0,pitch:-14,roll:90,gx:-.05,gy:-.16,gz:.3,lean:42,crouch:.33,lunge:.23,stride:1,hands:1})},e_={readyAt:.7,strike:2,followFor:2,holdFor:3,ready:qg({yaw:-10,pitch:2,roll:90,gx:-.3,gy:-.12,gz:-.12,hips:-14,chest:-24,lean:4,crouch:.08,lunge:-.06,stride:.6,armPitch:-60}),coil:qg({yaw:-8,pitch:2,roll:90,gx:-.32,gy:-.12,gz:-.16,hips:-16,chest:-27,lean:5,crouch:.09,lunge:-.07,stride:.6,armPitch:-62}),contact:qg({yaw:0,pitch:-2,roll:90,gx:-.08,gy:.02,gz:.44,hips:10,chest:12,lean:16,crouch:.1,lunge:.3,stride:1,armPitch:30,armRoll:20}),through:qg({yaw:0,pitch:-3,roll:90,gx:-.08,gy:.02,gz:.44,hips:10,chest:12,lean:16,crouch:.1,lunge:.3,stride:1,armPitch:30,armRoll:20}),follow:qg({yaw:0,pitch:-4,roll:90,gx:-.08,gy:.02,gz:.42,hips:10,chest:12,lean:15,crouch:.1,lunge:.28,stride:1,armPitch:28,armRoll:18}),hold:qg({yaw:0,pitch:-4,roll:90,gx:-.08,gy:.01,gz:.41,hips:10,chest:12,lean:15,crouch:.1,lunge:.27,stride:1,armPitch:27,armRoll:18})},t_={slash:Yg,backslash:Xg,sweep:Zg,heavy:Qg,quake:$g};function n_(e,t){return t_[e.id]||(e.hitbox.kind===`line`?e_:e.hitbox.kind===`circle`?$g:t%2==0?Yg:Xg)}function r_(e,t){let n=t.activeFrom+1,r=n-Math.min(e.strike,n*.6),i=Math.max(n,t.activeTo+1),a=Math.max(0,t.frames-i),o=i+Math.min(e.followFor,a*.25),s=o+Math.min(e.holdFor,a*.3);return{ready:r*e.readyAt,coil:r,contact:n,through:i,follow:o,hold:s,end:Math.max(s,t.frames)}}var i_=e=>e<0?0:e>1?1:e,a_=e=>e,o_=e=>e*e,s_=e=>1-(1-e)*(1-e),c_=e=>1-(1-e)**3,l_=e=>e*e*(3-2*e);function u_(e,t,n,r){for(let i of Gg)e[i]=t[i]+(n[i]-t[i])*r}function d_(e,t,n){let r={...Wg};return u_(r,e,t,n),r}function f_(e,t){let n=e[0];if(!n||t<=n.t)return n?.pose??Wg;for(let n=1;n<e.length;n++){let r=e[n],i=e[n-1];if(r&&i&&t<=r.t){let e=r.t-i.t,n=e>1e-9?i_((t-i.t)/e):1;return d_(i.pose,r.pose,r.ease(n))}}return e[e.length-1]?.pose??Wg}function p_(e){let t=n_(e.step,e.index),n=r_(t,e.step),r=e.steps[e.index+1],i=r?n_(r,e.index+1):null,a=e.index>0?t.ready:Jg;if(e.f<n.hold)return f_([{t:0,pose:a,ease:a_},{t:n.ready,pose:t.ready,ease:s_},...(t.windup??[]).map(e=>({t:n.ready+(n.coil-n.ready)*e.at,pose:e.pose,ease:l_})),{t:n.coil,pose:t.coil,ease:l_},{t:n.contact,pose:t.contact,ease:o_},{t:n.through,pose:t.through,ease:s_},{t:n.follow,pose:t.follow,ease:c_},{t:n.hold,pose:t.hold,ease:a_}],e.f);let o=n.end-n.hold,s=o>1e-9?i_((e.f-n.hold)/o):1,c=d_(t.hold,Jg,l_(s)),l=i_(e.chain);if(!i||l<=0)return c;let u=f_([{t:0,pose:t.hold,ease:a_},...(t.link??[]).map(e=>({t:e.at,pose:e.pose,ease:l_})),{t:1,pose:i.ready,ease:l_}],s);return l>=1?u:d_(c,u,l)}function m_(e){let t=r_(n_(e.step,e.index),e.step),n=t.coil;if(e.f<n)return{from:n,tail:e.f,opacity:0};let r=Math.max(0,e.f-t.follow),i=Math.max(0,1-r/5);return{from:n,tail:Math.min(e.f,Math.max(n,e.f-4)+r*1.2),opacity:i}}var h_=new R,g_=new R,__=new R,v_=new R,y_=new R,b_=new R,x_=new R,S_=new R,C_=new R,w_=new Vn,T_=new z,E_=new z,D_=new z;function O_(e,t,n,r,i){T_.makeTranslation(r.x,r.y,r.z),T_.multiply(E_.makeRotationFromQuaternion(i)),T_.multiply(E_.makeTranslation(-r.x,-r.y,-r.z));for(let r of e.subtree[n]??[])D_.fromArray(t,r*16),D_.premultiply(T_),D_.toArray(t,r*16)}function k_(e,t,n,r,i,a,o){Cm(t,n,h_),Cm(t,r,g_),Cm(t,i,__);let s=h_.distanceTo(g_),c=g_.distanceTo(__);if(s<1e-6||c<1e-6)return;y_.subVectors(a,h_);let l=y_.length();if(l<1e-6||(y_.divideScalar(l),l=Math.min(Math.max(l,Math.abs(s-c)+1e-4),s+c-1e-4),v_.copy(h_).addScaledVector(y_,l),b_.subVectors(o,h_),b_.addScaledVector(y_,-b_.dot(y_)),b_.lengthSq()<1e-10&&(b_.subVectors(g_,h_),b_.addScaledVector(y_,-b_.dot(y_))),b_.lengthSq()<1e-10))return;b_.normalize();let u=(s*s-c*c+l*l)/(2*l),d=Math.sqrt(Math.max(0,s*s-u*u));x_.copy(h_).addScaledVector(y_,u).addScaledVector(b_,d),S_.subVectors(g_,h_).normalize(),C_.subVectors(x_,h_).normalize(),w_.setFromUnitVectors(S_,C_),O_(e,t,n,h_,w_),Cm(t,r,g_),Cm(t,i,__),S_.subVectors(__,g_).normalize(),C_.subVectors(v_,g_).normalize(),w_.setFromUnitVectors(S_,C_),O_(e,t,r,g_,w_)}var A_=Ff,j_={hips:W(A_,`hips`),spine:W(A_,`spine`),chest:W(A_,`chest`),neck:W(A_,`neck`),head:W(A_,`head`),cape:W(A_,`cape`),capeLow:W(A_,`cape.low`),shoulderL:W(A_,`shoulder.l`),elbowL:W(A_,`elbow.l`),handL:W(A_,`hand.l`),shoulderR:W(A_,`shoulder.r`),elbowR:W(A_,`elbow.r`),handR:W(A_,`hand.r`),sword:W(A_,`sword`),hipL:W(A_,`hip.l`),kneeL:W(A_,`knee.l`),ankleL:W(A_,`ankle.l`),hipR:W(A_,`hip.r`),kneeR:W(A_,`knee.r`),ankleR:W(A_,`ankle.r`)},M_=1.7,N_=1.165,P_=Kg({yaw:-90,pitch:4,roll:90,gx:-.42,gy:-.12,gz:.1,lean:10,bank:-8,crouch:.18,stride:.5,armPitch:-10,armRoll:75}),F_=Kg({yaw:0,pitch:-6,roll:90,gx:-.1,gy:0,gz:.42,lean:26,crouch:.12,stride:1,armPitch:50,armRoll:30}),I_=new z,L_=new z,R_=new z,z_=new Vn,B_=new Vn,V_=new R,H_=new R,U_=new R,W_=new R,G_=new R,K_=new R,q_=new R,J_=new Vn,Y_=new R,X_=new z;function Z_(e,t,n){return L_.makeRotationY(e+t.yaw*jm),L_.multiply(X_.makeRotationX(-t.pitch*jm)),L_.multiply(X_.makeRotationZ(t.roll*jm)),n.setFromRotationMatrix(L_)}var Q_=class{#e=new Om(A_.joints.length);world=new Float32Array(A_.joints.length*16);#t=new Float32Array(A_.joints.length*16);lift=0;pose(e){let t=$_(e),n=this.world,r=this.#n(t,n);return this.lift=r.act.lift,t.dead?(Cm(n,j_.handR,q_),Z_(t.yaw,Kg({yaw:70,pitch:-2}),B_),Bm(n,j_.sword,q_.setY(.05),B_),n):(t.dodge||this.#r(t,r,n),t.dodge?(X_.fromArray(n,j_.handR*16),X_.decompose(q_,J_,Y_),z_.setFromAxisAngle(K_.set(1,0,0),Math.PI/2),J_.multiply(z_),Bm(n,j_.sword,q_,J_),n):(this.#i(t,r,n),n))}blade(e,t,n){let r=$_(e),i=this.#n(r,this.#t);ev(this.#t,i.act,t),n.set(0,0,1).applyQuaternion(Z_(r.yaw,i.act,B_))}#n(e,t){let n=this.#e;n.clear();let r=e.gait,i=e.dodge||e.dash||e.dead?0:r?.speed??0,a=km(i/5.5,0,1),o=1-Am(.15,1.2,i),s=r?Dm(r,e.alpha)/M_:0,c=r?.dirX??Math.sin(e.yaw),l=r?.dirY??Math.cos(e.yaw),u=Mm(Math.atan2(c,l)-e.yaw),d=km((Math.abs(u)>1.75?Mm(u-Math.PI*Math.sign(u)):u)*.5,-.85,.85)*a,f=Math.cos(u)*a,p=Math.sin(u)*a,m=e.dead||e.dodge?null:e.swing,h=Jg,g=0;m&&(h=p_({step:m.step,index:m.index,steps:e.steps,f:m.f,chain:e.chain}),g=1),e.dash&&(h=F_,g=1),e.whirl&&!m&&!e.dash&&!e.dead&&!e.dodge&&(h=P_,g=1);let _=1-g,v=e.cast&&!e.dodge&&!e.dead&&h.hands<1?Math.sin(Math.PI*km(e.cast.t,0,1)):0;n.move(j_.hips,0,-.06*a+.035*a*(.5+.5*Math.cos(4*Math.PI*s))-h.crouch,h.lunge),n.turn(j_.hips,0,d+h.hips*jm,0),n.turn(j_.spine,.16*f+h.lean*jm*.6-.3*e.hurt,0,-.12*p-h.bank*jm);let y=.025*o*_*Math.sin(e.time*.06);n.turn(j_.chest,h.lean*jm*.4+y+.08*v,h.chest*jm-d*.85+.4*v,0),n.grow(j_.chest,1+.012*o*_*Math.sin(e.time*.06)),n.turn(j_.head,-.35*h.lean*jm-.2*e.hurt,-(h.hips+h.chest)*jm*.6,0);let b=Math.sin(e.time*.35),x=1.1*km(h.lift,0,1);if(n.turn(j_.cape,.1+.45*a-.6*h.lean*jm+.05*a*b+(e.dash?.5:0)+x,0,0),n.turn(j_.capeLow,.06+.45*a+.14*a*Math.sin(e.time*.35+1.2)+(e.dash?.6:0)+x,0,.04*a*b),h.hands<1){let e=-.55*a*Math.sin(2*Math.PI*(s+.5))*_;n.turn(j_.shoulderL,G(h.armPitch*jm+e,-1.5,v),0,G(h.armRoll*jm,.12,v)),n.turn(j_.elbowL,G(-(.35+.55*a)*_-.45*g,-.06,v),0,0)}if(I_.makeTranslation(e.x,h.lift,e.y),e.dodge){let t=e.dodge.t;K_.set(e.dodge.dy,0,-e.dodge.dx).normalize(),I_.multiply(L_.makeTranslation(0,.5-.2*Math.sin(Math.PI*t),0)),I_.multiply(L_.makeRotationAxis(K_,Math.PI*2*K(t))),I_.multiply(L_.makeTranslation(0,-.5,0));let r=Math.min(1,Math.sin(Math.PI*t)*1.8);n.turn(j_.spine,.7*r,0,0),n.turn(j_.head,.5*r,0,0);for(let[e,t]of[[j_.hipL,j_.kneeL],[j_.hipR,j_.kneeR]])n.turn(e,-1.7*r,0,0),n.turn(t,2.3*r,0,0);n.turn(j_.shoulderL,-1.3*r,0,.2),n.turn(j_.elbowL,-1.5*r,0,0),n.turn(j_.cape,1.1*r,0,0)}return e.dead&&(I_.multiply(L_.makeRotationY(e.yaw)),I_.multiply(L_.makeTranslation(0,.14,0)),I_.multiply(L_.makeRotationX(-Math.PI/2)),I_.multiply(L_.makeRotationY(-e.yaw)),n.turn(j_.shoulderL,-.4,0,.9),n.turn(j_.shoulderR,-.4,0,-.9),n.turn(j_.hipL,-.3,0,.25),n.turn(j_.hipR,.1,0,-.2),n.turn(j_.kneeR,.5,0,0),n.turn(j_.head,0,.5,0)),I_.multiply(L_.makeRotationY(e.yaw)),Sm(A_,n,I_,t),{act:h,acting:g,run:a,idle:o,phase:s,dirX:c,dirY:l,hipYaw:d}}#r(e,t,n){let{act:r,run:i,idle:a,phase:o,dirX:s,dirY:c}=t,l=e.yaw+t.hipYaw,u=Math.cos(l),d=-Math.sin(l),f=Math.sin(e.yaw),p=Math.cos(e.yaw),m=Math.cos(e.yaw),h=-Math.sin(e.yaw),g=.55-.17*i,_=t.acting>0&&!e.dash?r.stride:0,v=[[j_.hipL,j_.kneeL,j_.ankleL,1,0],[j_.hipR,j_.kneeR,j_.ankleR,-1,.5]];for(let[t,y,b,x,S]of v){let v=Nm(o+S),C,w=0;if(v<g)C=g*M_*(.5-v/g);else{let e=(v-g)/(1-g);C=g*M_*(K(e)-.5),w=(.08+.12*i)*Math.sin(Math.PI*e)}let T=e.x+u*.11*x+s*C,E=e.y+d*.11*x+c*C,D=e.dash?0:a,O=x>0?.06+.3*_:-(.05+.15*_),k=e.dash?x*.42:O,A=.12+.04*_,ee=e.x+m*A*x+f*k,j=e.y+h*A*x+p*k;e.dash?(T=ee,E=j):(T=G(T,ee,D),E=G(E,j,D),w*=1-D),U_.set(T,.075+w+r.lift*.55,E),W_.set(T+Math.sin(l),.9+r.lift,E+Math.cos(l)),k_(A_,n,t,y,b,U_,W_),zm(n,b,l)}}#i(e,t,n){let r=t.act;Z_(e.yaw,r,B_),V_.set(0,0,1).applyQuaternion(B_),ev(n,r,H_),Cm(n,j_.shoulderR,G_),W_.set(-Math.cos(e.yaw),0,Math.sin(e.yaw)).multiplyScalar(.5).add(G_).addScaledVector(Pm,-.9),k_(A_,n,j_.shoulderR,j_.elbowR,j_.handR,H_,W_),Bm(n,j_.handR,H_,B_),Bm(n,j_.sword,H_,B_),r.hands>0&&(Cm(n,j_.handL,q_),U_.copy(H_).addScaledVector(V_,-.13),q_.lerp(U_,km(r.hands,0,1)),Cm(n,j_.shoulderL,G_),W_.set(Math.cos(e.yaw),0,-Math.sin(e.yaw)).multiplyScalar(.5).add(G_).addScaledVector(Pm,-.9),k_(A_,n,j_.shoulderL,j_.elbowL,j_.handL,q_,W_))}};function $_(e){return e.whirl&&!e.dodge&&!e.dead&&!e.dash&&!e.swing?{...e,yaw:e.yaw-e.whirl.turn}:e}function ev(e,t,n){return R_.fromArray(e,j_.chest*16),n.set(t.gx,t.gy,t.gz).applyMatrix4(R_)}function tv(e){let t=e.index?e.toNonIndexed():e.clone();for(let e of Object.keys(t.attributes))e!==`position`&&e!==`normal`&&t.deleteAttribute(e);return t.getAttribute(`normal`)||t.computeVertexNormals(),t}function nv(e){let t=e.clone();t.deleteAttribute(`normal`);let n=$u(t,1e-4);return n.computeVertexNormals(),n}function rv(e,t,n,r){let i=new Map,a=new z;e.parts.forEach((n,o)=>{let s=W(e.rig,n.joint),c=tv(t.shape(n.shape,n.size,r*97+o));if(n.turn){let[e,t,r]=n.turn;c.applyMatrix4(a.makeRotationFromEuler(new br(e,t,r,`YXZ`)))}n.at&&c.translate(n.at[0],n.at[1],n.at[2]);let l=`${s}|${n.role}`,u=i.get(l)??{joint:s,role:n.role,shapes:[]};u.shapes.push(c),i.set(l,u)});let o=new Map,s=t.outline,c=s?fm(new B(n.edge??s.color).multiplyScalar(s.intensity),s.width):null,l=[],u=new Map;for(let e of i.values()){let r=e.shapes.length===1?e.shapes[0]:Zu(e.shapes),i=o.get(e.role);if(i||(i=t.material(e.role,n[e.role]??`#ff00ff`,n),o.set(e.role,i)),l.push({joint:e.joint,geometry:r,material:i}),c&&s?.roles.includes(e.role)){let t=u.get(e.joint)??[];t.push(nv(r)),u.set(e.joint,t)}}for(let[e,t]of u){let n=t.length===1?t[0]:Zu(t);l.push({joint:e,geometry:n,material:c,hull:!0})}return{rig:e.rig,parts:l}}function iv(e){let t=e.index?e.toNonIndexed():e;for(let e of Object.keys(t.attributes))e!==`position`&&e!==`normal`&&t.deleteAttribute(e);return t.getAttribute(`normal`)||t.computeVertexNormals(),t}function av(){let e=document.createElement(`canvas`);e.width=64,e.height=64;let t=e.getContext(`2d`);if(t){let e=t.createImageData(64,64);for(let t=0;t<64;t++)for(let n=0;n<64;n++){let r=n/63*2-1,i=t/63*2-1,a=Math.max(0,1-Math.sqrt(r*r+i*i))**2,o=(t*64+n)*4;e.data[o]=255,e.data[o+1]=255,e.data[o+2]=255,e.data[o+3]=Math.round(255*a)}t.putImageData(e,0,0)}return new Ua(e)}var ov=.5,sv=.25;function cv(e,t,n){return Math.max(e,n)/2+sv*Math.min(e,t,n)}function lv(e,t){return e*(.45+.5*Math.abs(Math.sin(t)))}function uv(e,t,n){let r=_(p(n,`scenery:${e}x${t}`)),i=[],a=[],o=[],s=(e,t,n,a,o)=>i.push({x:e,z:t,w:n,h:a,d:o,turn:r.float()*Math.PI});for(let t=-3;t<=e+3;t+=.9+r.float()*.6){let e=1+r.float()*.9,n=1.1+r.float()*.7,i=1.6+r.float()*2;s(t,-cv(e,i,n)-r.float()*.3,e,i,n)}for(let n of[-1,1]){let i=n<0?0:e;for(let e=0;e<=t+1;e+=.9+r.float()*.6){let a=1.1+r.float()*.7,o=1+r.float()*.6,c=Math.max(0,1-e/t),l=ov+(1.2+r.float()*1.6)*c;s(i+n*(cv(a,l,o)+r.float()*.3),e,a,l,o)}}for(let t of[-1.4,e+1.4])for(let e=0;e<3;e++)s(t,-1.4,1.1-e*.2,1.4+e*.9,1.1-e*.2);for(let n=-2;n<=e+2;n+=1.1+r.float()*.8){let e=.7+r.float()*.6,i=.2+r.float()*.3;s(n,t+cv(e,i,.6)+r.float()*.4,e,i,.6)}let c=[[2.6,-.45,`north`],[e*.62,-.5,`north`],[-.5,t*.45,`west`],[e+.5,t*.3,`east`]];for(let[t,n,i]of c){let s=3+Math.floor(r.float()*3);for(let o=0;o<s;o++){let o=t+(r.float()-.5)*.9,s=n+(r.float()-.5)*.5,c=.45+r.float()*.75,l=(r.float()-.5)*.9,u=lv(c,l);i===`north`?s=Math.min(s,-u):o=i===`west`?Math.min(o,-u):Math.max(o,e+u),a.push({x:o,z:s,size:c,lean:l,turn:r.float()*Math.PI*2})}o.push({x:t,z:n+(n<0?.7:0),radius:2.2})}return{rocks:i,crystals:a,pools:o}}function dv(e,t,n){return{rocks:t.rocks.map((t,r)=>{let i=iv(e.scenery.boulder([t.w,t.h,t.d],n*131+r));return i.rotateY(t.turn),i.translate(t.x,t.h/2,t.z),i}),gems:t.crystals.map((t,r)=>{let i=iv(e.gem([t.size*.38,t.size,t.size*.38],n*173+r));return i.rotateZ(t.lean),i.rotateY(t.turn),i.translate(t.x,t.size*.38,t.z),i})}}function fv(e,t,n,r){let i=new Rr,a=uv(t,n,r),o=e.scenery,s=new H(new ro(t+18,n+18),o.floor);s.rotation.x=-Math.PI/2,s.position.set(t/2,0,n/2),i.add(s);let c=o.marks?o.markGeometry(t,n,r):null;if(c&&o.marks){let e=new H(c,o.marks);e.position.y=.01,i.add(e)}let{rocks:l,gems:u}=dv(e,a,r);l.length>0&&i.add(new H(Zu(l),o.rock)),u.length>0&&i.add(new H(Zu(u),o.crystal));let d=new V({map:av(),color:new B(o.glow),transparent:!0,opacity:o.pool,blending:2,depthWrite:!1});for(let e of a.pools){let t=new H(new ro(e.radius*2,e.radius*2),d);t.rotation.x=-Math.PI/2,t.position.set(e.x,.01,e.z),i.add(t)}return i.userData.glow=d,i}var pv=(e,t,n)=>({crystal:new B(e),glow:new B(t),marks:new B(n)}),mv={elite:pv(`#ff6ad5`,`#b0349e`,`#4a1a45`),shop:pv(`#ffd166`,`#e6a92f`,`#574317`),boss:pv(`#9a7dff`,`#5a3fd6`,`#2a1a57`)};function hv(e,t){if(!e)return;let n=e;n.color?.copy(t),n.emissive?.copy(t)}function gv(e,t){let n=t-(e.frame-1),r=0;for(let t of e.enemies){let e=t.boss?.warden;if(e?.move!==`pulse`)continue;let i=e.frame-1+n;e.stage===1?r=Math.max(r,Math.min(1,Math.max(0,i/Math.max(1,e.length)))):e.stage===3&&(r=Math.max(r,1-Math.min(1,Math.max(0,i/12))))}return r}var _v=class{#e;#t;#n;#r=null;#i=null;constructor(e){this.#e=e;let t=(e,t)=>e?.color?.clone()??new B(t);this.#t={crystal:t(e.crystal,`#ffffff`),glow:new B(e.glow),marks:t(e.marks,`#ffffff`)},this.#n={crystal:this.#t.crystal.clone(),glow:this.#t.glow.clone(),marks:this.#t.marks.clone()}}stage(e){this.#r=e,hv(e,this.#n.glow)}crystals(e){this.#i=e,hv(e,this.#n.crystal)}update(e,t){let n=e.build?.route?.rooms,r=n?.at(-1),i=this.#a(r?.plan.kind),a=this.#a(n?.at(-2)?.plan.kind),o=r?Math.min(1,Math.max(0,(t-r.enteredAt)/45)):1,s=o*o*(3-2*o);this.#n.crystal.copy(a.crystal).lerp(i.crystal,s),this.#n.glow.copy(a.glow).lerp(i.glow,s),this.#n.marks.copy(a.marks).lerp(i.marks,s);let c=gv(e,t);if(c>0){let e=1+2.5*c*c;this.#n.crystal.multiplyScalar(e),this.#n.glow.multiplyScalar(e)}hv(this.#e.crystal,this.#n.crystal),hv(this.#e.marks,this.#n.marks),hv(this.#r,this.#n.glow),hv(this.#i,this.#n.crystal)}#a(e){return(e?mv[e]:void 0)??this.#t}},vv={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},yv=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},bv=new is(-1,1,1,-1,0,1),xv=new class extends Vi{constructor(){super(),this.setAttribute(`position`,new ki([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new ki([0,2,0,0,2,0],2))}},Sv=class{constructor(e){this._mesh=new H(xv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,bv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Cv=class extends yv{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof go?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=po.clone(e.uniforms),this.material=new go({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Sv(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},wv=class extends yv{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Tv=class extends yv{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Ev=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new L);this._width=n.width,this._height=n.height,t=new cr(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:at}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Cv(vv),this.copyPass.material.blending=0,this.timer=new fs}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}wv!==void 0&&(r instanceof wv?n=!0:r instanceof Tv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new L);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Dv={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Ov=class extends yv{constructor(){super(),this.isOutputPass=!0,this.uniforms=po.clone(Dv.uniforms),this.material=new _o({name:Dv.name,uniforms:this.uniforms,vertexShader:Dv.vertexShader,fragmentShader:Dv.fragmentShader}),this._fsQuad=new Sv(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Yn.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},kv=class extends yv{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new B}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Av={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new B(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},jv=class e extends yv{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new L(256,256):new L(e.x,e.y),this.clearColor=new B(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new cr(i,a,{type:at,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new cr(i,a,{type:at,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new cr(i,a,{type:at,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Av;this.highPassUniforms=po.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new go({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new L(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=po.clone(vv.uniforms),this.blendMaterial=new go({uniforms:this.copyUniforms,vertexShader:vv.vertexShader,fragmentShader:vv.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new B,this._oldClearAlpha=1,this._basic=new V,this._fsQuad=new Sv(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new L(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new go({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new L(.5,.5)},direction:{value:new L(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new go({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};jv.BlurDirectionX=new L(1,0),jv.BlurDirectionY=new L(0,1);var Mv=2.2,Nv=`#8696c8`,Pv=1.5,Fv=`#c4d2ff`,Iv=3.4,Lv=`#d4e6ff`,Rv=`#4f6e3c`,zv=2.3,Bv=`#fff0d6`,Vv=class{#e;#t;#n;#r;#i;#a;#o;#s;constructor(e,t){this.#e=e,this.#t=t;let{renderer:n,scene:r,camera:i}=e;for(let t of e.proto.lights)t.visible=!1;r.background=new B(t.background),t.fog&&(r.fog=new Kr(t.fog.color,t.fog.near,t.fog.far)),this.#o=new Uo(t.sky.color,t.sky.ground,t.sky.intensity),r.add(this.#o);let a=new os(t.key.color,t.key.intensity);if(a.position.set(...t.key.at),r.add(a),this.#s=a,t.rim){let e=new os(t.rim.color,t.rim.intensity);e.position.set(...t.rim.at),r.add(e)}if(this.#i=t.follow?new rs(t.follow.color,t.follow.intensity,t.follow.distance,1.4):null,this.#a=t.follow?.height??0,this.#i&&r.add(this.#i),n.toneMapping=7,n.toneMappingExposure=t.exposure,n.info.autoReset=!1,t.bloom){let e=n.getSize(new L),a=new Ev(n,new cr(e.x,e.y,{type:at,samples:4}));a.addPass(new kv(r,i));let o=new jv(e,t.bloom.strength,t.bloom.radius,t.bloom.threshold);a.addPass(o),a.addPass(new Ov),this.#n=a,this.#r=o}else this.#n=null,this.#r=null}outdoors(e){let t=this.#t,n=e===`day`,r=e===`night`;this.#o.intensity=t.sky.intensity*(n?Iv:r?Mv:1),this.#o.color.set(n?Lv:r?Nv:t.sky.color),this.#o.groundColor.set(n?Rv:t.sky.ground),this.#s.intensity=t.key.intensity*(n?zv:r?Pv:1),this.#s.color.set(n?Bv:r?Fv:t.key.color)}follow(e,t,n=0){this.#i?.position.set(e,this.#a+n,t)}draw(){let{renderer:e,scene:t,camera:n}=this.#e;e.info.reset(),this.#n?this.#n.render():e.render(t,n)}resize(e,t){this.#n?.setSize(e,t),this.#r?.setSize(e,t)}stats(){let{calls:e,triangles:t}=this.#e.renderer.info.render;return{calls:e,triangles:t}}dispose(){this.#n?.dispose(),this.#r?.dispose()}},Hv=[`floorA`,`floorB`,`floorC`,`slate`,`cobble`,`dirt`,`gravel`,`rock`,`rockB`,`ore`,`moss`,`wallTop`,`cliff`,`stairTop`,`stairRiser`,`plankTop`,`plankSide`,`chasm`,`chasmBed`,`waterBed`,`cracked`,`dark`,`water`,`grass`],Uv=[...Hv,`leaves`,`leavesB`,`leavesC`,`leafSide`,`treeLine`,`crystalLeaves`,`bushTop`,`bushSide`,`forestFloor`,`meadow`,`petals`,`petalsB`,`meadowB`],Wv=32,Gv={floorA:{surface:`stone`,color:`stone`,seam:!0,vary:.06},floorB:{surface:`stone`,color:`stone`,tone:.94,seam:!0,vary:.06},floorC:{surface:`stone`,color:`stone`,tone:1.05,seam:!0,vary:.05},slate:{surface:`stone`,color:`slate`,seam:!0,vary:.05},cobble:{surface:`cobble`,color:`cobble`},dirt:{surface:`dirt`,color:`dirt`,vary:.04},gravel:{surface:`dirt`,color:`slate`,tone:.9,vary:.08},rock:{surface:`stone`,color:`rock`,vary:.07},rockB:{surface:`cobble`,color:`rock`,tone:.92},ore:{surface:`ore`,color:`ore`,sparse:!0},moss:{surface:`dirt`,color:`moss`,vary:.06},wallTop:{surface:`stone`,color:`rock`,tone:.62,vary:.1},cliff:{surface:`stone`,color:`slate`,tone:.82,vary:.08},stairTop:{surface:`cobble`,color:`stone`,tone:1.04},stairRiser:{surface:`cobble`,color:`slate`,tone:.8},plankTop:{surface:`planks`,color:`planks`},plankSide:{surface:`planks`,color:`planks`,tone:.75},chasm:{surface:`deep`,color:`deep`},chasmBed:{surface:`deep`,color:`deep`,tone:.6},waterBed:{surface:`dirt`,color:`deep`,tone:.9},cracked:{surface:`golem`,color:`rock`,tone:.97},dark:{surface:`deep`,color:`deep`,tone:.5},water:{surface:`stone`,color:`water`,tone:1.1,vary:.04},grass:{surface:`dirt`,color:`moss`,tone:1.1,vary:.06},leaves:{surface:`leaves`,color:`leaves`,vary:.05},leavesB:{surface:`leaves`,color:`pine`,vary:.05},leavesC:{surface:`leaves`,color:`leaves`,tone:1.16,vary:.05},leafSide:{surface:`leaves`,color:`leaves`,tone:.84,vary:.05},treeLine:{surface:`bark`,color:`bark`,trunks:!0},crystalLeaves:{surface:`glowLeaves`,color:`pine`,tone:1.1,vary:.05},bushTop:{surface:`leaves`,color:`pine`,tone:1.12,vary:.06},bushSide:{surface:`leaves`,color:`pine`,tone:.9,vary:.06},forestFloor:{surface:`moss`,color:`pine`,tone:.62,vary:.05},meadow:{surface:`grass`,color:`grass`,vary:.05},petals:{surface:`petals`,color:`grass`,accent:`flower`,vary:.05},petalsB:{surface:`petals`,color:`grass`,accent:`flowerB`,vary:.05},meadowB:{surface:`grass`,color:`grass`,tone:.9,vary:.05}};function Kv(e,t,n=Hv){let r=O(256,Math.ceil(n.length/8)*Wv),i=O(r.width,r.height);return n.forEach((n,a)=>{let o=Gv[n],s=a%8*Wv,c=Math.floor(a/8)*Wv,l=A(k(e[o.color]),o.tone??1);for(let n=0;n<2;n++)for(let u=0;u<2;u++){let d=t*131+a*17+n*2+u,f=1+(d*7919%5-2)*(o.vary??0)*.5,p={x:s+u*16,y:c+n*16,w:16,h:16},m=o.sparse&&n*2+u!==(t+a)%4,h=k(e[o.accent??`ore`]);m?te(r,i,p,`stone`,A(k(e.rock),f),d):te(r,i,p,o.surface,A(l,f),d,h),o.trunks&&qv(r,p,k(e.pine),d),o.seam&&Jv(r,p)}}),{picture:r,glow:i}}function qv(e,t,n,r){let i=Math.floor((r*2654435761>>>0)%7)+2,a=4+r%2;for(let o=0;o<t.h;o++)for(let s=0;s<t.w;s++){if(s>=i&&s<i+a)continue;let c=.42+.06*((s*7+o*13+r)%5/4),l=((t.y+o)*e.width+t.x+s)*4;e.data[l]=Math.round((n[0]??0)*c),e.data[l+1]=Math.round((n[1]??0)*c),e.data[l+2]=Math.round((n[2]??0)*c)}}function Jv(e,t){for(let n=0;n<t.w;n++)Yv(e,t.x+n,t.y+t.h-1,.86),Yv(e,t.x+t.w-1,t.y+n,.86)}function Yv(e,t,n,r){let i=(n*e.width+t)*4;for(let t=0;t<3;t++)e.data[i+t]=Math.round((e.data[i+t]??0)*r)}function Xv(e,t=Hv){let n=t.indexOf(e),r=Math.ceil(t.length/8),i=n%8,a=Math.floor(n/8);return{u0:i/8,u1:(i+1)/8,vTop:a/r,vBottom:(a+1)/r}}var Zv=2.5,Qv=3,$v=[3.5,4,4.5,5],ey=[1,1.5],ty=.35,ny=.25,q={none:0,floor:1,wall:2,chasm:3,water:4,stairs:5,bridge:6,breakable:7,shaft:8,wood:9},ry=[[0,-1],[1,0],[0,1],[-1,0]];function iy(e,t=()=>!1,n=!1){let{width:r,height:i}=e,a=r*i,o=new Uint8Array(a),s=new Float32Array(a),c=new Float32Array(a),u=new Uint8Array(a),d=new Uint8Array(a).fill(255),f=[],p=new Set;for(let t of y)for(let n of e.marks.get(t)??[])p.add(n);for(let n=0;n<a;n++){let r=l[e.kinds[n]??1];if(r===`wall`&&!p.has(n)||r===`breakable`)continue;d[n]=0,f.push(n);let i=(e.levels[n]??0)*1;if(s[n]=i,r===`chasm`){let e=t(n);o[n]=e?q.water:q.chasm,c[n]=i-(e?1.9500000000000002:6)}else r===`stairs`?(o[n]=q.stairs,u[n]=e.rise[n]??0,c[n]=i):(o[n]=e.bridges[n]?q.bridge:q.floor,c[n]=e.bridges[n]?i-6:i)}for(let t of e.marks.get(`x`)??[])o[t]=q.shaft,c[t]=(s[t]??0)-2;for(let t of f){if(o[t]!==q.chasm&&o[t]!==q.water&&o[t]!==q.bridge)continue;let n=sy(e,o,s,t,e=>e===q.floor||e===q.stairs);if(n===null)continue;let r=o[t]===q.water?1.9500000000000002:6;s[t]=Math.max(s[t]??0,n),c[t]=(s[t]??0)-r}let m=f,h=n?6:2;for(let t=1;t<=h;t++){let a=[];for(let e of m){let n=e%r,o=(e-n)/r;for(let c=-1;c<=1;c++)for(let l=-1;l<=1;l++){let u=n+l,f=o+c;if(u<0||f<0||u>=r||f>=i)continue;let p=f*r+u,m=d[p]??0;m<t||(m===255?(d[p]=t,s[p]=s[e]??0,a.push(p)):s[p]=Math.max(s[p]??0,s[e]??0))}}for(let t of a)o[t]=e.kinds[t]===4?q.breakable:n?q.wood:q.wall;m=a}if(n)return ay(r,i,o,s,c,d),{width:r,height:i,drawn:o,base:s,top:c,rise:u};let g=oy(e,o);for(let e=0;e<a;e++){if(o[e]!==q.wall&&o[e]!==q.breakable)continue;if(g[e]){c[e]=(s[e]??0)+Zv;continue}let t=e%r,n=(e-t)/r,i=!1;for(let e=1;e<=2&&!i;e++)for(let a=-1;a<=1;a++){let o=t+a,s=n-e;o<0||s<0||o>=r||(d[s*r+o]??255)===0&&(i=!0)}c[e]=(s[e]??0)+(i?1:3)}return{width:r,height:i,drawn:o,base:s,top:c,rise:u}}function ay(e,t,n,r,i,a){for(let o=0;o<e*t;o++){if(n[o]!==q.wood)continue;let t=o%e,s=(o-t)/e,c=!1;for(let n=1;n<=2&&!c;n++)for(let r=-1;r<=1;r++){let i=t+r,o=s-n;i<0||o<0||i>=e||(a[o*e+i]??255)===0&&(c=!0)}let l=(e,t)=>e[Math.min(e.length-1,Math.floor(t*e.length))]??0;i[o]=(r[o]??0)+(c?l(ey,j(t,s,13)):l($v,j(t>>1,s>>1,29)))}}function oy(e,t){let{width:n,height:r}=e,i=new Uint8Array(n*r),a=new Uint8Array(n*r),o=e=>t[e]===q.wall||t[e]===q.breakable;for(let s=0;s<n*r;s++){if(a[s]||!o(s))continue;let c=[s];a[s]=1;let l=!0;for(let i=0;i<c.length;i++){let s=c[i]??0,u=s%n,d=(s-u)/n;for(let[i,s]of ry){let f=u+i,p=d+s;if(f<0||p<0||f>=n||p>=r){l=!1;continue}let m=p*n+f;t[m]===q.none&&e.kinds[m]!==0&&(l=!1),!a[m]&&o(m)&&(a[m]=1,c.push(m))}c.length>9&&(l=!1)}if(!l)continue;let u=c.map(e=>e%n),d=c.map(e=>Math.floor(e/n));if(!(Math.max(Math.max(...u)-Math.min(...u),Math.max(...d)-Math.min(...d))+1>Qv))for(let e of c)i[e]=1}return i}function sy(e,t,n,r,i){let a=r%e.width,o=(r-a)/e.width,s=null;for(let r=1;r<=3&&s===null;r++)for(let c=-r;c<=r;c++)for(let l=-r;l<=r;l++){let r=a+l,u=o+c;if(r<0||u<0||r>=e.width||u>=e.height)continue;let d=u*e.width+r;i(t[d]??0)&&(s=Math.max(s??-1/0,n[d]??0))}return s}function cy(e,t,n){let r=Math.floor(t),i=Math.floor(n);if(r<0||i<0||r>=e.width||i>=e.height)return 0;let a=i*e.width+r,o=e.base[a]??0;if(e.drawn[a]!==q.stairs)return o;let s=t-r,c=n-i,l=e.rise[a],u=l===1?1-c:l===2?s:l===3?c:1-s;return o+Math.min(1,Math.max(0,u))*1}function ly(e,t,n){let r=e.drawn[t]??q.none;if(r===q.none)return-1/0;if(r!==q.stairs)return e.top[t]??0;let i=(e.rise[t]??0)-1,a=e.base[t]??0;return n===i?a+1:a+1/2}function uy(){return{uFog:{value:dy(new Uint8Array([255]),1,1)},uFogBox:{value:new or(0,0,1,1)},uFogOn:{value:0}}}function dy(e,t,n){let r=new ha(e,t,n,gt,Qe);return r.magFilter=Ye,r.minFilter=Ye,r.unpackAlignment=1,r.needsUpdate=!0,r}var fy=`
uniform sampler2D uFog;
uniform vec4 uFogBox;
uniform float uFogOn;
varying vec3 vFogWorld;
float fogSeen() {
  if (uFogOn < 0.5) return 1.0;
  vec2 uv = (vFogWorld.xz - uFogBox.xy) * uFogBox.zw;
  if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return 0.0;
  return smoothstep(0.1, 0.9, texture2D(uFog, uv).r);
}`,py=`
vec4 fogWorld = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
fogWorld = instanceMatrix * fogWorld;
#endif
vFogWorld = (modelMatrix * fogWorld).xyz;`;function my(e,t){let n=e.onBeforeCompile,r=e.customProgramCacheKey();e.onBeforeCompile=(r,i)=>{n.call(e,r,i),Object.assign(r.uniforms,t),r.vertexShader=r.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vFogWorld;`).replace(`#include <project_vertex>`,`#include <project_vertex>\n${py}`),r.fragmentShader=r.fragmentShader.replace(`#include <common>`,`#include <common>\n${fy}`).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
gl_FragColor.rgb *= fogSeen();`)},e.customProgramCacheKey=()=>`${r}|fog`,e.needsUpdate=!0}var hy={color:[1,.6,.28],power:1.25,reach:7,height:1.7},gy={color:[.3,.9,1],power:.85,reach:5,height:.6},_y={color:[1,.55,.22],power:1.9,reach:9,height:.9},vy={color:[1,.72,.38],power:1.2,reach:6,height:1.9};function yy(e,t,n){let r=n?_y:vy,i=t%e.width,a=Math.floor(t/e.width),o=t;for(let[t,n]of[[0,1],[1,0],[-1,0],[0,-1]]){let r=i+t,s=a+n;if(!u(e,r,s)){o=s*e.width+r;break}}return{kind:`lamp`,x:i+.5,y:a+.5,h:r.height,face:-1,cell:o,color:r.color,power:r.power,reach:r.reach}}var by=6,xy=7;function Sy(e,t,n=()=>.12){let r=[],i=(e,t,n,i)=>r.some(r=>r.kind===n&&Math.abs(r.x-e)<i&&Math.abs(r.y-t)<i),{width:a,height:o}=e,s=[];for(let t=0;t<a*o;t++)e.drawn[t]!==q.none&&s.push(t);let c=e=>j(e%a,Math.floor(e/a),t+401);s.sort((e,t)=>c(e)-c(t)||e-t);for(let t of s){if(e.drawn[t]!==q.wall)continue;let n=t%a,s=(t-n)/a;for(let t of[2,1,3]){let[c,l]=ry[t]??[0,0],u=n+c,d=s+l;if(u<0||d<0||u>=a||d>=o)continue;let f=d*a+u;if(e.drawn[f]!==q.floor)continue;let p=n+.5+c*.5,m=s+.5+l*.5;if(!i(p,m,`torch`,by)){r.push({kind:`torch`,x:p,y:m,h:hy.height,face:t,cell:f,color:hy.color,power:hy.power,reach:hy.reach});break}}}for(let c of s){if(e.drawn[c]!==q.floor)continue;let s=c%a,l=(c-s)/a,u=0;for(let[t,n]of ry){let r=s+t,i=l+n;r<0||i<0||r>=a||i>=o||e.drawn[i*a+r]===q.wall&&u++}let d=u>=2?n(c):u===1?n(c)*.3:0;j(s,l,t+409)>=d||i(s+.5,l+.5,`crystal`,xy*(1-Math.min(.7,n(c))))||r.push({kind:`crystal`,x:s+.5,y:l+.5,h:gy.height,face:-1,cell:c,color:gy.color,power:gy.power,reach:gy.reach})}return r}function Cy(e,t,n){let{width:r,height:i}=t,a=new Float32Array(r*i*3);for(let o of n){let n=o.cell%r+.5,s=Math.floor(o.cell/r)+.5,c=Math.ceil(o.reach);for(let l=Math.max(0,Math.floor(o.y)-c);l<=Math.min(i-1,Math.floor(o.y)+c);l++)for(let i=Math.max(0,Math.floor(o.x)-c);i<=Math.min(r-1,Math.floor(o.x)+c);i++){let c=l*r+i,u=t.drawn[c];if(u===q.none||u===q.wall||u===q.breakable)continue;let d=i+.5-o.x,f=l+.5-o.y,p=Math.sqrt(d*d+f*f);if(p>=o.reach||!T(e,n,s,i+.5,l+.5))continue;let m=1-p/o.reach,h=o.power*m*m;a[c*3]=(a[c*3]??0)+o.color[0]*h,a[c*3+1]=(a[c*3+1]??0)+o.color[1]*h,a[c*3+2]=(a[c*3+2]??0)+o.color[2]*h}}let o=a.slice();for(let e=0;e<r*i;e++){let n=t.drawn[e];if(n!==q.wall&&n!==q.breakable)continue;let s=e%r,c=(e-s)/r;for(let n=-1;n<=1;n++)for(let l=-1;l<=1;l++){let u=s+l,d=c+n;if(u<0||d<0||u>=r||d>=i)continue;let f=d*r+u,p=t.drawn[f];if(p!==q.none&&p!==q.wall&&p!==q.breakable)for(let t=0;t<3;t++)o[e*3+t]=Math.max(o[e*3+t]??0,.9*(a[f*3+t]??0))}}return o}function wy(e,t,n,r,i){let a=n-.5,o=r-.5,s=Math.floor(a),c=Math.floor(o),l=a-s,u=o-c;i[0]=0,i[1]=0,i[2]=0;for(let[n,r,a]of[[s,c,(1-l)*(1-u)],[s+1,c,l*(1-u)],[s,c+1,(1-l)*u],[s+1,c+1,l*u]]){if(n<0||r<0||n>=e.width||r>=e.height||a===0)continue;let o=(r*e.width+n)*3;i[0]+=(t[o]??0)*a,i[1]+=(t[o+1]??0)*a,i[2]+=(t[o+2]??0)*a}}var Ty=3,Ey=[1,.84,.7,.56],Dy=.66,Oy=.3,ky=.35,Ay=class{positions=[];normals=[];uvs=[];colors=[];bakes=[];index=[];#e=[0,0,0];g;field;tiles;constructor(e,t,n=Hv){this.g=e,this.field=t,this.tiles=n}quad(e,t,n,r,i){let[a,o,s,c]=e,l=s[0]-a[0],u=s[1]-a[1],d=s[2]-a[2],f=o[0]-a[0],p=o[1]-a[1],m=o[2]-a[2],h=u*m-d*p,g=d*f-l*m,_=l*p-u*f,v=Math.sqrt(h*h+g*g+_*_)||1;h/=v,g/=v,_/=v;let y=Xv(t,this.tiles),[b,x,S,C]=n,w=e=>y.u0+(y.u1-y.u0)*e,T=e=>y.vTop+(y.vBottom-y.vTop)*e,E=this.positions.length/3,D=[[a,w(b),T(S),r[0]],[s,w(b),T(C),r[2]],[c,w(x),T(C),r[3]],[o,w(x),T(S),r[1]]];for(let[e,t,n,r]of D){this.positions.push(e[0],e[1],e[2]),this.normals.push(h,g,_),this.uvs.push(t,n),this.colors.push(r,r,r),wy(this.g,this.field,e[0]+h*ky,e[2]+_*ky,this.#e);let a=jy(e[1],i);this.bakes.push((this.#e[0]??0)*a,(this.#e[1]??0)*a,(this.#e[2]??0)*a)}this.index.push(E,E+1,E+2,E,E+2,E+3)}arrays(){return{positions:new Float32Array(this.positions),normals:new Float32Array(this.normals),uvs:new Float32Array(this.uvs),colors:new Float32Array(this.colors),bakes:new Float32Array(this.bakes),index:new Uint32Array(this.index)}}};function jy(e,t){let n=Math.max(0,e-t-2)*.25,r=Math.max(0,t-e)*.18;return Math.min(1,Math.max(.12,1-n-r))}function My(e,t,n,r,i=`mine`,a={}){let o=i===`forest`?Uv:Hv,s=new Ay(e,t,o),c=new Ay(e,t,o);for(let e=n.y0;e<n.y1;e++)for(let t=n.x0;t<n.x1;t++)Ny(s,c,t,e,r,i,a);return{solid:s.arrays(),water:c.arrays()}}function Ny(e,t,n,r,i,a,o){let s=e.g,c=r*s.width+n,l=s.drawn[c]??q.none;if(l===q.none)return;let u=s.base[c]??0,d=s.top[c]??0;if(l===q.stairs){Gy(e,n,r,i);return}let f=o.crystal?.(c)??!1;if(Hy(e,n,r,d,l===q.wood?zy(n,r,i,d-u,f):a===`forest`&&l===q.floor?Ly(n,r,i,o.road?.(c)??!1):a===`camp`&&l===q.floor&&u<=0?Vy(n,r,i):Iy(l,n,r,i),u),l===q.water){let e=u-ty;t.quad([[n,e,r],[n+1,e,r],[n,e,r+1],[n+1,e,r+1]],`water`,[0,1,0,1],[1,1,1,1],u)}l===q.bridge&&Yy(e,n,r,u);for(let t=0;t<4;t++){let a=Fy(s,n,r,t);a>=d-1e-4||Uy(e,n,r,t,a,d,[0,1],l,i,u,Py(s,n,r,t),f)}}function Py(e,t,n,r){let[i,a]=ry[r]??[0,0],o=t+i,s=n+a;return o<0||s<0||o>=e.width||s>=e.height?q.none:e.drawn[s*e.width+o]??q.none}function Fy(e,t,n,r){let[i,a]=ry[r]??[0,0],o=t+i,s=n+a,c=n*e.width+t;if(o<0||s<0||o>=e.width||s>=e.height)return(e.base[c]??0)-Ty;let l=s*e.width+o;return e.drawn[l]===q.none?(e.base[c]??0)-Ty:ly(e,l,(r+2)%4)}function Iy(e,t,n,r){if(e===q.wall||e===q.breakable)return`wallTop`;if(e===q.chasm||e===q.bridge)return`chasmBed`;if(e===q.water)return`waterBed`;if(e===q.shaft)return`dark`;let i=j(t>>2,n>>2,r+21),a=j(t,n,r+5);return i>.78?a>.5?`slate`:`gravel`:i<.08?`cobble`:a>.97?`dirt`:a>.6?`floorA`:a>.3?`floorB`:`floorC`}function Ly(e,t,n,r){let i=j(e,t,n+7);return r?i>.95?`gravel`:`dirt`:i>.975?`petals`:i>.955?`petalsB`:j(e>>1,t>>1,n+23)<.22?`meadowB`:`meadow`}function Ry(e){return e<=(ey.at(-1)??1.5)+.001}function zy(e,t,n,r,i){if(Ry(r))return`bushTop`;if(i)return`crystalLeaves`;let a=j(e>>1,t>>1,n+51);return a<.4?`leaves`:a<.75?`leavesB`:`leavesC`}function By(e,t,n,r,i,a){return Ry(n-r)?`bushSide`:(i===q.floor||i===q.stairs||i===q.bridge)&&e<t+2?`treeLine`:a?`crystalLeaves`:`leafSide`}function Vy(e,t,n){let r=j(e>>1,t>>1,n+33),i=j(e,t,n+7);return r>.86?i>.85?`gravel`:`dirt`:i>.97?`gravel`:i>.55?`moss`:`grass`}function Hy(e,t,n,r,i,a){let o=e.g,s=(e,t)=>{if(e<0||t<0||e>=o.width||t>=o.height)return 0;let n=t*o.width+e;return o.drawn[n]===q.none?0:+((o.top[n]??0)>r+.05)},c=(e,r)=>{let i=s(t+e,n),a=s(t,n+r),o=s(t+e,n+r);return Ey[i&&a?3:i+a+o]??1};e.quad([[t,r,n],[t+1,r,n],[t,r,n+1],[t+1,r,n+1]],i,[0,1,0,1],[c(-1,-1),c(1,-1),c(-1,1),c(1,1)],a)}function Uy(e,t,n,r,i,a,o,s,c,l,u,d=!1){let[[f,p],[m,h]]=r===0?[[t+1,n],[t,n]]:r===1?[[t+1,n+1],[t+1,n]]:r===2?[[t,n+1],[t+1,n+1]]:[[t,n],[t,n+1]],g=f+(m-f)*o[0],_=p+(h-p)*o[0],v=f+(m-f)*o[1],y=p+(h-p)*o[1],b=u===q.none||u===q.chasm||u===q.water||u===q.shaft?Oy:Dy,x=e=>b+(1-b)*Math.min(1,Math.max(0,(e-i)/1)),S=a;for(;S>i+1e-4;){let f=Math.ceil(S-1e-4)-1,p=Math.max(i,f),m=s===q.wood&&u!==q.none?By(f,i,a,l,u,d):Wy(s,t,n,r,f,i,c,u);e.quad([[g,S,_],[v,S,y],[g,p,_],[v,p,y]],m,[o[0],o[1],f+1-S,f+1-p],[x(S),x(S),x(p),x(p)],l),S=p}}function Wy(e,t,n,r,i,a,o,s){if(s===q.none)return`dark`;if(e===q.breakable)return`cracked`;if(e===q.bridge)return`plankSide`;if(e===q.wall){let e=j(t*4+r,n*4+i,o+77);return e>.9?`ore`:i<a+1&&e<.08?`moss`:e>.55?`rockB`:`rock`}return i<(s===q.chasm||s===q.water?a+4:a)?`chasm`:`cliff`}function Gy(e,t,n,r){let i=e.g,a=n*i.width+t,o=i.base[a]??0,s=(i.rise[a]??1)-1,c=o+1/2,l=o+1,u=Ky(s);for(let[r,i]of[[0,c],[1,l]]){let a=u[r];if(!a)continue;let[s,c,l,d]=a;e.quad([[t+s,i,n+c],[t+l,i,n+c],[t+s,i,n+d],[t+l,i,n+d]],`stairTop`,[s,l,c,d],[1,1,1,1],o)}let d=(s+2)%4;Jy(e,t,n,s,c,l,o);for(let a=0;a<4;a++){let u=Fy(i,t,n,a),f=Py(i,t,n,a);if(a===s)u<l-1e-4&&Uy(e,t,n,a,u,l,[0,1],q.floor,r,o,f);else if(a===d)u<c-1e-4&&Uy(e,t,n,a,u,c,[0,1],q.floor,r,o,f);else{let i=qy(a,s)?[[[0,.5],c],[[.5,1],l]]:[[[0,.5],l],[[.5,1],c]];for(let[s,c]of i)u<c-1e-4&&Uy(e,t,n,a,u,c,s,q.floor,r,o,f)}}}function Ky(e){return e===0?[[0,.5,1,1],[0,0,1,.5]]:e===1?[[0,0,.5,1],[.5,0,1,1]]:e===2?[[0,0,1,.5],[0,.5,1,1]]:[[.5,0,1,1],[0,0,.5,1]]}function qy(e,t){return([1,2,3,0][e]??0)!==t}function Jy(e,t,n,r,i,a,o){let[[s,c],[l,u]]=r===0?[[t,n+.5],[t+1,n+.5]]:r===1?[[t+.5,n],[t+.5,n+1]]:r===2?[[t+1,n+.5],[t,n+.5]]:[[t+.5,n+1],[t+.5,n]];e.quad([[s,a,c],[l,a,u],[s,i,c],[l,i,u]],`stairRiser`,[0,1,0,.5],[1,1,Dy,Dy],o)}function Yy(e,t,n,r){let i=e.g,a=r,o=r-ny,s=Py(i,t,n,1)!==q.chasm&&Py(i,t,n,3)!==q.chasm;e.quad(s?[[t+1,a,n],[t+1,a,n+1],[t,a,n],[t,a,n+1]]:[[t,a,n],[t+1,a,n],[t,a,n+1],[t+1,a,n+1]],`plankTop`,[0,1,0,1],[1,1,1,1],r);for(let s=0;s<4;s++){let c=Py(i,t,n,s);(c===q.chasm||c===q.water)&&Uy(e,t,n,s,o,a,[0,1],q.bridge,0,r,q.floor)}}function Xy(e,t){let n=[];for(let r=0;r<e.height;r+=t)for(let i=0;i<e.width;i+=t)n.push({x0:i,y0:r,x1:Math.min(e.width,i+t),y1:Math.min(e.height,r+t)});return n}var Zy=`groundBake`,Qy=`
uniform float uCutOn;
uniform vec4 uCutAt;
uniform float uCutAbove;
uniform float uCutDepth;
varying vec3 vCutWorld;
varying vec4 vCutClip;
float cutBayer2(vec2 a) { a = floor(a); return fract(dot(a, vec2(0.5, a.y * 0.75))); }
float cutBayer4(vec2 a) { return cutBayer2(0.5 * a) * 0.25 + cutBayer2(a); }`,$y=`
if (uCutOn > 0.5 && vCutWorld.y > uCutAbove && vCutClip.w < uCutDepth) {
  vec2 ndc = vCutClip.xy / vCutClip.w;
  float d = length(vec2((ndc.x - uCutAt.x) * uCutAt.w, ndc.y - uCutAt.y));
  if (d < uCutAt.z) {
    // Thinner toward the middle: a little of the rock stays, so its shape still shows.
    float keep = 0.18 + 0.82 * smoothstep(uCutAt.z * 0.5, uCutAt.z, d);
    if (cutBayer4(gl_FragCoord.xy) >= keep) discard;
  }
}`;function eb(e,t=1){let n={uCutOn:{value:0},uCutAt:{value:new or(0,0,0,1)},uCutAbove:{value:0},uCutDepth:{value:0}},r=tb(e,Kv(e.palette,t),n),i=tb(e,Kv(e.palette,t,Uv),n),a=new vo({map:r.map,emissive:e.water,emissiveIntensity:.35,roughness:.15,metalness:.1,transparent:!0,opacity:.62,depthWrite:!1}),o=new vo({color:e.flame,emissive:e.flame,emissiveIntensity:1.4,roughness:1}),s=new vo({color:e.palette.planks,roughness:.9}),c=new vo({color:e.crystal,emissive:e.crystal,emissiveIntensity:.55,roughness:.3,flatShading:!0}),l=uy();for(let e of[r,i,a,o,s,c])my(e,l);return{solid:r,forest:i,cut:n,fog:l,water:a,flame:o,stick:s,crystal:c}}function tb(e,t,n){let r=new vo({map:Dp(t.picture),emissiveMap:Dp(t.glow),emissive:`#ffffff`,emissiveIntensity:e.glow,roughness:e.roughness,metalness:0,vertexColors:!0});return r.onBeforeCompile=e=>{Object.assign(e.uniforms,n),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\nattribute vec3 ${Zy};\nvarying vec3 vGroundBake;\nvarying vec3 vCutWorld;\nvarying vec4 vCutClip;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>\nvGroundBake = ${Zy};`).replace(`#include <project_vertex>`,`#include <project_vertex>
vCutWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
vCutClip = gl_Position;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\nvarying vec3 vGroundBake;\n${Qy}`).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>\n${$y}`).replace(`#include <opaque_fragment>`,`outgoingLight += diffuseColor.rgb * vGroundBake;
#include <opaque_fragment>`)},r.customProgramCacheKey=()=>`groundBake`,r}function nb(e,t){return .82+.12*Math.sin(e*.31+t)+.06*Math.sin(e*.77+t*2.3)}var rb=new z,ib=new Vn,ab=new R,ob=new R,sb=new R(0,1,0),cb=new B,lb=class{group=new Rr;#e;#t;#n;#r;#i;#a;#o;#s=[];#c;#l=[];constructor(e,t){this.#a=e,this.#o=t,this.#n=e.rows,this.#t=s(e.rows),this.#e=iy(this.#t,e.flooded,e.theme===`forest`),this.#i=[...Sy(this.#e,e.seed,e.crystals),...e.lights?.(this.#e)??[]],this.#r=Cy(this.#t,this.#e,this.#i),this.group.position.set(e.offset[0],0,e.offset[1]);for(let e of Xy(this.#e,16)){let t={box:e,solid:null,water:null};this.#s.push(t),this.#u(t)}this.#c=this.#f(),this.#p()}get cells(){return this.#e}get spots(){return this.#i}height(e,t){return cy(this.#e,e-this.#a.offset[0],t-this.#a.offset[1])}refresh(e){if(e===this.#n)return!1;let t=this.#e;this.#n=e,this.#t=s(e),this.#e=iy(this.#t,this.#a.flooded,this.#a.theme===`forest`),this.#r=Cy(this.#t,this.#e,this.#i);for(let e of this.#s)ub(t,this.#e,e.box)&&this.#u(e);return!0}update(e){this.#o.water.emissiveIntensity=.32+.08*Math.sin(e*.045);let t=this.#c;if(t){for(let n=0;n<t.count;n++){let r=nb(e,this.#l[n]??0);t.setColorAt(n,cb.setRGB(r,r*.92,r*.8))}t.instanceColor&&(t.instanceColor.needsUpdate=!0)}}dispose(){for(let e of this.#s)e.solid?.geometry.dispose(),e.water?.geometry.dispose();this.group.traverse(e=>{e instanceof wa&&e.geometry.dispose()}),this.group.clear()}#u(e){for(let t of[e.solid,e.water])t&&(this.group.remove(t),t.geometry.dispose());let{solid:t,water:n}=My(this.#e,this.#r,e.box,this.#a.seed,this.#a.theme,this.#a.marks),r=this.#a.theme===`forest`?this.#o.forest:this.#o.solid;e.solid=t.index.length>0?this.#d(t,r):null,e.water=n.index.length>0?this.#d(n,this.#o.water):null,e.water&&(e.water.renderOrder=-4)}heightMap(){let e=this.#e,t=e.width*4,n=e.height*4,r=new Float32Array(t*n);for(let i=0;i<n;i++)for(let n=0;n<t;n++)r[i*t+n]=cy(e,(n+.5)/4,(i+.5)/4);let[i,a]=this.#a.offset;return{data:r,width:t,height:n,box:[i,a,e.width,e.height]}}#d(e,t){let n=new Vi;n.setAttribute(`position`,new Ei(e.positions,3)),n.setAttribute(`normal`,new Ei(e.normals,3)),n.setAttribute(`uv`,new Ei(e.uvs,2)),n.setAttribute(`color`,new Ei(e.colors,3)),n.setAttribute(Zy,new Ei(e.bakes,3)),n.setIndex(new Ei(e.index,1)),n.computeBoundingSphere();let r=new H(n,t);return r.renderOrder=-10,this.group.add(r),r}#f(){let e=this.#i.filter(e=>e.kind===`torch`);if(e.length===0)return null;let t=new wa(new qa(.1,.5,.1),this.#o.stick,e.length),n=new wa(new qa(.15,.18,.15),this.#o.flame,e.length);return n.instanceMatrix.setUsage(vn),e.forEach((e,r)=>{let[i,a]=ry[e.face]??[0,1],o=this.#e.base[e.cell]??0,s=new R(-a,0,i);ib.setFromAxisAngle(s,.35),ab.set(e.x+i*.12,o+e.h-.25,e.y+a*.12),t.setMatrixAt(r,rb.compose(ab,ib,ob.set(1,1,1))),ab.set(e.x+i*.22,o+e.h+.05,e.y+a*.22),n.setMatrixAt(r,rb.compose(ab,ib.identity(),ob.set(1,1,1))),n.setColorAt(r,cb.setRGB(1,1,1)),this.#l.push(j(r,3,this.#a.seed)*6.283)}),this.group.add(t,n),n}#p(){let e=this.#i.filter(e=>e.kind===`crystal`);if(e.length===0)return;let t=[];e.forEach((e,n)=>{let r=this.#e.base[e.cell]??0,i=3+Math.floor(j(n,1,this.#a.seed)*3);for(let a=0;a<i;a++){let i=e=>j(n*7+a,e,this.#a.seed+31),o=.25+i(1)*.4,s=.08+i(2)*.07,c=i(3)*6.283,l=.15+i(4)*.2;ab.set(e.x+Math.cos(c)*l,r+o/2-.05,e.y+Math.sin(c)*l),ib.setFromAxisAngle(new R(Math.sin(c),0,-Math.cos(c)),(i(5)-.5)*.7),ib.multiply(new Vn().setFromAxisAngle(sb,i(6)*1.5)),t.push(new z().compose(ab,ib,ob.set(s,o,s)))}});let n=new wa(new qa(1,1,1),this.#o.crystal,t.length);t.forEach((e,t)=>{n.setMatrixAt(t,e)}),this.group.add(n)}};function ub(e,t,n){if(e.width!==t.width||e.height!==t.height)return!0;for(let r=Math.max(0,n.y0-1);r<Math.min(e.height,n.y1+1);r++)for(let i=Math.max(0,n.x0-1);i<Math.min(e.width,n.x1+1);i++){let n=r*e.width+i;if(e.drawn[n]!==t.drawn[n]||e.top[n]!==t.top[n]||e.base[n]!==t.base[n])return!0}return!1}function db(e,t){let n=Math.ceil(e),r=Math.ceil(t),i=n+14,a=r+14,o=[];for(let e=0;e<a;e++)o.push(Array.from({length:i},()=>`#`));let s=(e,t,n)=>{let r=o[t];r&&e>=0&&e<i&&(r[e]=n)};for(let e=6;e<7+r+3;e++)for(let t=6;t<7+n+1;t++)s(t,e,`0`);let c=7+Math.floor(r/2);for(let e=7;e<7+r;e++)for(let t=3;t<=5;t++)s(t,e,`~`);for(let e=3;e<=5;e++)s(e,c,`=`);for(let e=c-1;e<=c+1;e++)s(2,e,`0`);let l=Math.max(1,Math.floor(r/3));for(let e=7;e<7+r;e++)for(let t=7+n+1;t<=7+n+4;t++)s(t,e,`1`);for(let e=7+l;e<7+2*l;e++)s(7+n,e,`>`);return{rows:o.map(e=>e.join(``)),offset:[-7,-7]}}var fb=14,pb=24,mb=2.1,hb=[-.375,-.125,.125,.375],gb=[.55,1.5],_b=3,vb=[1.2,2.2],yb=[.16,.3],bb=.35,xb=new R,Sb=new z,Cb=new Vn,wb=new R,Tb=new R,Eb=new R(0,1,0);function Db(e,t,n){let r=new Map;for(let n of[...e.children]){let i=n;if(!i.isMesh||t.has(i)||!(i.geometry instanceof qa))continue;i.updateMatrix();let a=i.material,o=r.get(a)??[];o.push(i.geometry.clone().applyMatrix4(i.matrix)),r.set(a,o),e.remove(i)}for(let[t,i]of r){let r=Zu(i);for(let e of i)e.dispose();r&&(n.push(r),e.add(new H(r,t)))}}function Ob(e,t){return j(e,t,977)}function kb(e,t,n,r=!1){let i=O(16,16),a=O(16,16);return te(i,r?a:null,{x:0,y:0,w:16,h:16},e,k(t),n),{map:Dp(i),glow:r?Dp(a):null}}function Ab(){let e=new Uint8Array(16384);for(let t=0;t<64;t++)for(let n=0;n<64;n++){let r=n+.5-32,i=t+.5-32,a=Math.sqrt(r*r+i*i),o=Math.round((Math.atan2(i,r)/Math.PI*4+4)*2)%2==0,s=a>28&&a<=31||o&&a>25&&a<=27,c=(t*64+n)*4;e[c]=255,e[c+1]=255,e[c+2]=255,e[c+3]=s?255:0}let t=new ha(e,64,64,pt);return t.magFilter=Ke,t.minFilter=Ke,t.needsUpdate=!0,t}var jb=.15,Mb=10,Nb=class{group=new Rr;#e=[];#t=[];#n=[];#r=[];#i=null;#a=null;#o=null;#s=[];#c=[];#l;#u;#d;#f;#p;#m;#h;#g;#_;#v;#y;#b;#x;#S;#C;constructor(e,t,n,r,i,a=()=>!1){this.#S=t,this.#C=n;let o=e=>{let t=new vo({roughness:.85,...e});return this.#s.push(t),t},s=(e,t,n)=>o({map:kb(e,t,n).map});this.#h=s(`cobble`,r.stone,3),this.#g=s(`stone`,r.pale,5),this.#_=s(`planks`,r.wood,7),this.#v=s(`metal`,r.iron,9),this.#y=o({color:r.gold,emissive:r.gold,emissiveIntensity:.25,metalness:.3,roughness:.5}),this.#l=o({color:r.altar,emissive:r.altar,emissiveIntensity:1.2,flatShading:!0}),this.#u=o({color:`#4a4e5a`,roughness:.6,flatShading:!0}),this.#d=o({color:r.rune,emissive:r.rune,emissiveIntensity:1.3}),this.#f=o({color:`#3a4250`}),this.#p=o({color:r.lantern,emissive:r.lantern,emissiveIntensity:1.5}),this.#m=o({color:`#3a3026`});for(let t of e.altars)this.#T(t.x,t.y);for(let t of e.chests)this.#E(t.x,t.y,t.big);for(let[t,n]of e.shrines)this.#D(t,n);e.lift&&this.#O(e.lift[0],e.lift[1]);for(let e of t.marks.get(`x`)??[])this.#k(e,r.way);this.#A(e,t,r.crystal,a),e.boss&&this.#N(e.boss[0],e.boss[1],r.boss);for(let t of e.carts)this.#j(t.track),this.#M(t.track,r.crystal);let c=new qa(1,1,1);if(this.#c.push(c),this.#b=new wa(c,this.#v,64),this.#b.instanceMatrix.setUsage(vn),this.#b.count=0,this.#b.frustumCulled=!1,this.group.add(this.#b),e.roads){let t=Math.max(1,...e.pieces.map(e=>e.gates.length)),n=o({color:r.crystal,emissive:r.crystal,emissiveIntensity:.9,roughness:.3,flatShading:!0});this.#x=new wa(c,n,t*_b),this.#x.instanceMatrix.setUsage(vn),this.#x.count=0,this.#x.frustumCulled=!1,this.group.add(this.#x)}else this.#x=null;if(i)for(let e of this.#s)my(e,i)}get bars(){return this.#b}get spikes(){return this.#x}get carts(){return this.#n}#w(e,t,n,r,i,a,o,s=this.group){let c=new qa(e,t,n);this.#c.push(c);let l=new H(c,r);return l.position.set(i,a,o),s.add(l),l}#T(e,t){let n=this.#C(e,t);this.#w(1,.3,1,this.#h,e,n+.15,t),this.#w(.55,.7,.55,this.#g,e,n+.65,t),this.#w(.85,.18,.85,this.#h,e,n+1.09,t);let r=this.#w(.32,.32,.32,this.#u,e,n+1.55,t);r.rotation.set(Math.PI/4,0,Math.PI/4);let i=new V({map:Ab(),color:`#ffd166`,transparent:!0,opacity:0,blending:2,depthWrite:!1,side:2});this.#s.push(i);let a=new ro(x*2,x*2);this.#c.push(a);let o=new H(a,i);o.rotation.x=-Math.PI/2,o.position.set(e,n+.03,t),o.renderOrder=-2,this.group.add(o),this.#e.push({crystal:r,ring:o,ringMaterial:i,y:n+1.55})}#E(e,t,n){let r=this.#C(e,t),i=n?1.25:1,a=new Rr;a.position.set(e,r,t),a.scale.setScalar(i),this.group.add(a),this.#w(.9,.48,.58,this.#_,0,.24,0,a);for(let e of[-.3,.3])this.#w(.08,.5,.6,n?this.#y:this.#v,e,.25,0,a);this.#w(.12,.14,.04,this.#y,0,.42,.3,a);let o=new Rr;o.position.set(0,.48,-.29),a.add(o),this.#w(.92,.16,.6,this.#_,0,.08,.3,o);for(let e of[-.3,.3])this.#w(.08,.17,.62,n?this.#y:this.#v,e,.08,.3,o);let s=this.#w(.7,.04,.4,this.#y,0,.44,0,a);s.visible=!1,this.#t.push({lid:o,glow:s})}#D(e,t){let n=this.#C(e,t);this.#w(.85,.2,.85,this.#h,e,n+.1,t),this.#w(.46,1.5,.46,this.#g,e,n+.95,t),this.#w(.58,.16,.58,this.#h,e,n+1.78,t);for(let[r,i,a]of[[0,.24,0],[.24,0,Math.PI/2],[-.24,0,Math.PI/2]]){let o=this.#w(.16,.3,.02,this.#d,e+r,n+1.05,t+i);o.rotation.y=a,this.#r.push(o)}}#O(e,t){let n=this.#C(e,t);this.#w(1.5,.16,1.5,this.#_,e,n+.08,t);for(let r of[-.68,.68])this.#w(.14,2.6,.14,this.#_,e+r,n+1.3,t-.68);this.#w(1.6,.16,.16,this.#_,e,n+2.6,t-.68);for(let r of[-.6,.6])this.#w(.05,2.4,.05,this.#v,e+r,n+1.35,t);this.#i=this.#w(.2,.26,.2,this.#m,e,n+2.3,t-.68)}#k(e,t){let n=this.#S.width,r=e%n,i=(e-r)/n,o=r+.5,s=i+.5,c=this.#C(o,s),l=[[0,-1],[1,0],[0,1],[-1,0]],[u,d]=l.find(([e,t])=>!a(this.#S,r+e,i+t))??l[2];for(let e=0;e<4;e++){let t=.5-(e+.5)*.25;this.#w(u===0?1:.25,.25,d===0?1:.25,this.#h,o+u*t,c-.375-e*.45,s+d*t)}for(let[e,t,n,r]of[[0,-.56,1.24,.12],[0,.56,1.24,.12],[-.56,0,.12,1],[.56,0,.12,1]])this.#w(n,.16,r,this.#g,o+e,c+.08,s+t);let f=new V({color:t,transparent:!0,opacity:.35,blending:2,depthWrite:!1});this.#s.push(f);let p=this.#w(.9,3,.9,f,o,c+1.2,s);p.visible=!1,this.#a=p}#A(e,t,n,r){let i=[],o=t.width;for(let n of e.pieces){if(!r(n.template))continue;let e=new Set;for(let r=n.y+1;r<n.y+n.h-1;r++)for(let s=n.x+1;s<n.x+n.w-1;s++){let n=r*o+s;if(e.has(n)||!a(t,s,r)||t.kinds[n]!==1)continue;for(let t of[n,n+1,n+o,n+o+1])e.add(t);let c=s+1,l=r+1,u=this.#C(c,l)+2.5;for(let e=0;e<5;e++){let t=t=>Ob(s*13+e,t+r*7),n=.6+t(1)*.9,a=.16+t(2)*.14,o=t(3)*6.283,d=e===0?0:.3+t(4)*.35;wb.set(c+Math.cos(o)*d,u+n/2-.1,l+Math.sin(o)*d),Cb.setFromAxisAngle(new R(Math.sin(o),0,-Math.cos(o)),e===0?0:.25+t(5)*.35),i.push(new z().compose(wb,Cb,Tb.set(a,n,a)))}}}if(i.length===0)return;let s=new qa(1,1,1);this.#c.push(s);let c=new vo({color:n,emissive:n,emissiveIntensity:.42,roughness:.3,flatShading:!0});this.#s.push(c);let l=new wa(s,c,i.length);i.forEach((e,t)=>{l.setMatrixAt(t,e)}),this.group.add(l)}#j(e){let t=e.length/2;if(t<2)return;let n=new qa(1,1,1);this.#c.push(n);let r=new wa(n,this.#_,t*2),i=new wa(n,this.#v,t*2),a=(e,t,n,r,i,a)=>{Cb.setFromAxisAngle(Eb,a),wb.set(n,r,i),e.setMatrixAt(t,Sb.compose(wb,Cb,Tb))};for(let n=0;n<t;n++){let o=e[n*2]??0,s=e[n*2+1]??0,c=n+1<t?n+1:n-1,l=n+1<t?1:-1,u=((e[c*2]??o)-o)*l,d=((e[c*2+1]??s)-s)*l,f=Math.atan2(u,d),p=this.#C(o,s);for(let[e,t]of[-.25,.25].entries())Tb.set(.95,.08,.2),a(r,n*2+e,o+u*t,p+.04,s+d*t,f);for(let[e,t]of[-.3,.3].entries())Tb.set(.07,.08,1),a(i,n*2+e,o+d*t,p+.12,s-u*t,f)}this.group.add(r,i);let o=t-1,s=e[o*2]??0,c=e[o*2+1]??0,l=s-(e[o*2-2]??s),u=c-(e[o*2-1]??c),d=this.#C(s,c),f=this.#w(1.1,.3,.26,this.#_,s+l*.62,d+.3,c+u*.62);f.rotation.y=Math.atan2(l,u);for(let e of[-.3,.3]){let t=this.#w(.16,.16,.1,this.#v,s+l*.46+u*e,d+.34,c+u*.46-l*e);t.rotation.y=Math.atan2(l,u)}}#M(e,t){let n=new Rr,r=new Rr;n.add(r),this.group.add(n),this.#w(.8,.48,1.1,this.#_,0,.56,0,r);for(let e of[-.32,.32])this.#w(.84,.5,.07,this.#v,0,.56,e,r);this.#w(.86,.06,.08,this.#v,0,.82,-.55,r),this.#w(.86,.06,.08,this.#v,0,.82,.55,r),this.#w(.08,.06,1.18,this.#v,-.41,.82,0,r),this.#w(.08,.06,1.18,this.#v,.41,.82,0,r);let i=new vo({color:t,emissive:t,emissiveIntensity:.7,roughness:.3,flatShading:!0});this.#s.push(i);for(let e=0;e<9;e++){let t=t=>Ob(e*7+3,t);this.#w(.14+t(1)*.12,.16+t(2)*.2,.14+t(3)*.1,i,-.24+e%3*.24+(t(4)-.5)*.08,.84+t(5)*.1,-.34+Math.floor(e/3)*.34+(t(6)-.5)*.1,r).rotation.set((t(7)-.5)*.8,t(8)*3,(t(9)-.5)*.8)}let a=[];for(let e of[-.33,.33]){this.#w(.9,.06,.06,this.#v,0,.16999999999999998,e,n);for(let t of[-.44,.44])a.push(this.#w(.08,jb*2,jb*2,this.#v,t,.16999999999999998,e,n))}let o=new Rr;o.visible=!1,this.group.add(o);for(let e=0;e<5;e++){let t=t=>Ob(e*11+5,t+20),n=t(1)*6.283,r=.2+t(2)*.6;this.#w(.7-t(3)*.3,.07,.2,this.#_,Math.cos(n)*r,.05+e*.02,Math.sin(n)*r,o).rotation.set((t(4)-.5)*.4,t(5)*3,(t(6)-.5)*.4)}let s=this.#w(jb*2,.08,jb*2,this.#v,.5,.04,-.3,o);s.rotation.y=.5;for(let e=0;e<4;e++){let t=t=>Ob(e*13+7,t+40);this.#w(.12,.12,.12,i,(t(1)-.5)*1.4,.06,(t(2)-.5)*1.4,o).rotation.set(t(3),t(4)*3,t(5))}Db(r,new Set,this.#c),Db(n,new Set(a),this.#c),Db(o,new Set,this.#c),this.#n.push({track:e,group:n,body:r,wheels:a,load:i,wreck:o})}#N(e,t,n){let r=new V({map:Ab(),color:n,transparent:!0,opacity:.4,blending:2,depthWrite:!1,side:2});this.#s.push(r);let i=new ro(7,7);this.#c.push(i);let a=new H(i,r);a.rotation.x=-Math.PI/2,a.position.set(e,this.#C(e,t)+.025,t),a.renderOrder=-2,this.group.add(a),this.#o=a}update(e,t){this.#e.forEach((n,r)=>{let i=e.altars[r],a=i?.lit??!1,o=i?.using??!1;n.crystal.material=a?this.#l:this.#u,n.crystal.position.y=n.y+(a?.06*Math.sin(t*.05+r):0),n.crystal.rotation.y=a?t*.02:0,n.ringMaterial.opacity=o?.55+.15*Math.sin(t*.12):a?.22:.06,n.ring.rotation.z=t*(o?.01:.003)}),this.#t.forEach((t,n)=>{let r=e.chests[n]??!1;t.lid.rotation.x=r?-1.9:0,t.glow.visible=r}),this.#r.forEach((t,n)=>{t.material=e.shrines[Math.floor(n/3)]??!1?this.#f:this.#d}),this.#i&&(this.#i.material=e.lift?this.#p:this.#m),this.#a&&(this.#a.visible=e.exit),this.#o&&(this.#o.rotation.z=t*.002),this.#F(e,t),this.#P(e,t)}#P(e,n){this.#n.forEach((r,i)=>{let a=e.carts[i],o=a?.phase===3;if(r.group.visible=a!==void 0&&!o,r.wreck.visible=o,!a)return;let s=this.#C(a.x,a.y);if(o){r.wreck.position.set(a.x,s,a.y);return}let c=t(r.track,a.at);r.group.position.set(a.x,s,a.y),r.group.rotation.y=Math.atan2(c.dx,c.dy);for(let e of r.wheels)e.rotation.x=a.at/jb;let l=n-e.cartHit.frame,u=e.cartHit.power>=10?.09:.03,d=a.phase===1&&l>=0&&l<Mb,f=d?(1-l/Mb)*u:0;r.body.position.x=d?f*Math.sin(l*2.7):0,r.body.rotation.z=d?f*1.6*Math.sin(l*2.1+1):0,r.load.emissiveIntensity=a.phase===2?1.5+.4*Math.sin(n*.15):.7+.15*Math.sin(n*.06+i)})}#F(e,t){let n=e.shut,r=Math.max(0,t-e.since),i=n?Math.min(1,r/fb):1-Math.min(1,r/pb),a=this.#b;if(i<=0||e.gates.length===0){a.count=0,this.#x&&(this.#x.count=0);return}let o=n?1-(1-i)**3+.08*Math.sin(Math.PI*i):i*i;if(this.#x){this.#I(this.#x,e.gates,o);return}let s=(1-o)*mb,c=this.#S.width,l=new Set(e.gates),u=0,d=(e,t,n,r,i,o)=>{u>=64||(wb.set(e,t,n),a.setMatrixAt(u++,Sb.compose(wb,Cb.identity(),Tb.set(r,i,o))))};for(let t of e.gates){let e=t%c,n=(t-e)/c,r=e+.5,i=n+.5,a=this.#C(r,i)-s,o=!l.has(t-c)&&!l.has(t+c);for(let e of hb)o?d(r+e,a+mb/2,i,.08,mb,.08):d(r,a+mb/2,i+e,.08,mb,.08);for(let e of gb)o?d(r,a+e,i,1,.08,.1):d(r,a+e,i,.1,.08,1)}a.count=u,a.instanceMatrix.needsUpdate=!0}#I(e,t,n){let r=this.#S.width,i=0;for(let a of t){let t=a%r,o=(a-t)/r;for(let r=0;r<_b&&i<e.instanceMatrix.count;r++){let s=e=>j(a,r*7+e,61),c=vb[0]+s(1)*(vb[1]-vb[0]),l=yb[0]+s(2)*(yb[1]-yb[0]),u=t+.2+s(3)*.6,d=o+.2+s(4)*.6,f=s(5)*Math.PI*2;xb.set(Math.cos(f),0,Math.sin(f)),Cb.setFromAxisAngle(xb,(s(6)-.5)*2*bb),wb.set(u,this.#C(u,d)-(1-n)*c+c/2,d),e.setMatrixAt(i++,Sb.compose(wb,Cb,Tb.set(l,c,l)))}}e.count=i,e.instanceMatrix.needsUpdate=!0}dispose(){for(let e of this.#c)e.dispose();for(let e of this.#s)e.map?.dispose(),e.dispose();this.group.clear()}},Pb={m:[-.18,-.05],g:[0,-.2],n:[-.4,.1]},Fb=.3,Ib=class{group=new Rr;#e=[];#t=[];#n=[];#r;#i;#a;#o;#s;#c;#l;#u=[];#d=new Set;#f=null;#p=null;#m=null;#h=null;#g=null;#_=0;constructor(e,t,n){this.#r=e,this.#i=t;let r=(e,t,n)=>this.#y({map:this.#b(e,t,n)});this.#a=r(`planks`,n.wood,3),this.#o=r(`cobble`,n.stone,5),this.#s=r(`metal`,n.iron,7),this.#c=r(`cloth`,n.cloth,9),this.#l=this.#y({color:n.crystal,emissive:n.crystal,emissiveIntensity:.9,roughness:.3,flatShading:!0});let i=t=>e.marks.get(t)??[];for(let e of i(`m`))this.#w(e,n);for(let e of i(`w`))this.#T(e);for(let e of i(`g`))this.#E(e,n);for(let e of i(`p`))this.#D(e);for(let e of i(`n`))this.#O(e);for(let e of i(`f`))this.#k(e,n);for(let e of i(`k`))this.#A(e);for(let e of i(`l`))this.#j(e,n);for(let t of Lb(e,i(`T`)))this.#M(t);this.#N(i(`e`),n),this.#v()}#v(){let e=new Map,t=[];for(let n of[...this.group.children]){let r=n;if(!r.isMesh||this.#d.has(r)||!(r.geometry instanceof qa))continue;let i=r.material;r.updateMatrix();let a=r.geometry.clone().applyMatrix4(r.matrix),o=e.get(i)??[];o.push(a),e.set(i,o),t.push(r)}for(let e of t)this.group.remove(e);for(let[t,n]of e){let e=Zu(n);for(let e of n)e.dispose();e&&(this.#e.push(e),this.group.add(new H(e,t)))}}update(e,t){this.#u.forEach((e,n)=>{let r=.85+.15*Math.sin(t*.31+n*1.7)+.08*Math.sin(t*.77+n);e.scale.set(1,r,1)}),this.#f&&(this.#f.rotation.y=t*.02,this.#f.position.y=this.#f.userData.base+.06*Math.sin(t*.05)),this.#p&&(this.#p.visible=e.stall),this.#m&&(this.#m.visible=!e.stall),this.#h&&(this.#h.position.y=this.#_-Fb*e.lift),this.#g&&(this.#g.opacity=e.lift>0?.35+.6*e.lift:.18+.05*Math.sin(t*.08))}dispose(){for(let e of this.#e)e.dispose();for(let e of this.#n)e.dispose();for(let e of this.#t)e.dispose();this.group.clear()}#y(e){let t=new vo({roughness:.85,...e});return this.#t.push(t),t}#b(e,t,n){let r=kb(e,t,n).map;return this.#n.push(r),r}#x(e,t,n,r,i,a,o,s=this.group){let c=new qa(e,t,n);this.#e.push(c);let l=new H(c,r);return l.position.set(i,a,o),s.add(l),l}#S(e){let t=e%this.#r.width+.5,n=Math.floor(e/this.#r.width)+.5;return{x:t,z:n,base:this.#i(t,n)}}#C(e,t,n,r,i,a){let o=Ab();this.#n.push(o);let s=new V({map:o,color:i,transparent:!0,opacity:a,blending:2,depthWrite:!1,side:2});this.#t.push(s);let c=new ro(r,r);this.#e.push(c);let l=new H(c,s);l.rotation.x=-Math.PI/2,l.position.set(e,n+.03,t),l.renderOrder=-2,this.group.add(l)}#w(e,t){let{x:n,z:r,base:i}=this.#S(e),a=n+.32;this.#x(.12,.9,.12,this.#a,a,i+.45,r);let o=this.#x(.42,.04,.32,this.#y({color:`#1b2446`,emissive:t.star,emissiveIntensity:.25}),a,i+.95,r+.04);o.rotation.x=.5;let s=this.#x(.18,.18,.18,this.#y({color:t.star,emissive:t.star,emissiveIntensity:1.4,flatShading:!0}),a,i+1.45,r);s.rotation.set(Math.PI/4,0,Math.PI/4),s.userData.base=i+1.45,this.#f=s,this.#d.add(s),this.#C(n,r,i,2.4,t.star,.35)}#T(e){let{x:t,z:n,base:r}=this.#S(e);this.#x(1.1,.12,.66,this.#a,t,r+.78,n);for(let[e,i]of[[-.46,-.24],[.46,-.24],[-.46,.24],[.46,.24]])this.#x(.1,.72,.1,this.#a,t+e,r+.36,n+i);this.#x(.34,.22,.26,this.#o,t-.18,r+.95,n);let i=this.#x(.12,.2,.12,this.#l,t-.18,r+1.16,n);i.rotation.y=.6,this.#x(.07,.12,.07,this.#l,t+.22,r+.9,n-.12),this.#x(.06,.09,.06,this.#l,t+.34,r+.88,n+.1),this.#x(.05,.05,.3,this.#a,t+.12,r+.87,n+.14),this.#x(.1,.07,.14,this.#s,t+.12,r+.88,n+.3)}#E(e,t){let{x:n,z:r,base:i}=this.#S(e);this.#x(1.2,.85,.36,this.#a,n,i+.425,r+.32),this.#x(1.26,.06,.42,this.#a,n,i+.88,r+.32);for(let e of[-.58,.58])this.#x(.08,2.2,.08,this.#a,n+e,i+1.1,r+.48),this.#x(.08,2.4,.08,this.#a,n+e,i+1.2,r-.4);let a=t.awning.map(e=>this.#y({color:e}));for(let e=0;e<6;e++){let t=this.#x(.22,.04,1.1,a[e%2]??this.#c,n-.55+.22*e,i+2.28,r+.04);t.rotation.x=-.18}this.#x(.1,.16,.1,this.#l,n-.32,i+.99,r+.3),this.#x(.22,.14,.16,this.#s,n+.3,i+.98,r+.3)}#D(e){let{x:t,z:n,base:r}=this.#S(e);for(let e of[-.55,.55])this.#x(.1,2,.1,this.#a,t+e,r+1,n);this.#x(1.3,1.5,.08,this.#a,t,r+1.25,n-.02);let i=Dp(F({regions:[{open:!0,floors:3,reached:0,lifts:0,beaten:!1,rock:`#5d5146`,light:`#5ef0ff`},{open:!1,floors:4,reached:-1,lifts:0,beaten:!1,rock:`#24384a`,light:`#5fd0ff`},{open:!1,floors:4,reached:-1,lifts:0,beaten:!1,rock:`#3a1e16`,light:`#ff8a3d`},{open:!1,floors:4,reached:-1,lifts:0,beaten:!1,rock:`#1d1430`,light:`#b88cff`}],chosen:null}));this.#n.push(i);let a=new vo({map:i,emissiveMap:i,emissive:`#ffffff`,emissiveIntensity:.35,roughness:.9});this.#t.push(a);let o=new ro(1.1,1.36);this.#e.push(o);let s=new H(o,a);s.position.set(t,r+1.25,n+.03),this.group.add(s)}#O(e){let{x:t,z:n,base:r}=this.#S(e),i=t+.15;this.#x(.9,.42,.6,this.#a,i,r+.48,n),this.#x(.94,.06,.64,this.#s,i,r+.7,n);for(let[e,t]of[[-.3,-.32],[.3,-.32],[-.3,.32],[.3,.32]])this.#x(.2,.2,.06,this.#s,i+e,r+.18,n+t);let a=new Rr;for(let e=0;e<7;e++)this.#x(.1+j(e,1,5)*.08,.14+j(e,2,5)*.16,.1,this.#l,i-.3+.1*e,r+.76+j(e,3,5)*.08,n-.1+j(e,4,5)*.2,a).rotation.set(j(e,5,5)*.6,j(e,6,5)*3,j(e,7,5)*.6);this.group.add(a),this.#p=a;let o=new Rr;this.#x(.06,1,.06,this.#a,i+.5,r+.5,n+.25,o),this.#x(.5,.3,.04,this.#a,i+.5,r+.95,n+.28,o),this.group.add(o),this.#m=o}#k(e,t){let{x:n,z:r,base:i}=this.#S(e);for(let e=0;e<8;e++){let t=e/8*Math.PI*2;this.#x(.2,.14,.2,this.#o,n+Math.cos(t)*.44,i+.07,r+Math.sin(t)*.44)}let a=e=>{let t=this.#x(.7,.1,.1,this.#a,n,i+.12,r);t.rotation.y=e};a(.5),a(-.6),a(1.6);let o=this.#y({color:t.flame,emissive:t.flame,emissiveIntensity:2.2,transparent:!0,opacity:.9});for(let[e,t,a]of[[0,0,.55],[.12,.08,.38],[-.1,.06,.32],[.04,-.12,.3]]){let s=this.#x(.16,a,.16,o,n+e,i+.15+a/2,r+t);this.#u.push(s),this.#d.add(s)}}#A(e){let{x:t,z:n,base:r}=this.#S(e);this.#x(.56,.56,.56,this.#a,t-.12,r+.28,n+.1),this.#x(.36,.36,.36,this.#a,t+.24,r+.18,n-.18),this.#x(.3,.46,.3,this.#s,t+.2,r+.23,n+.26)}#j(e,t){let{x:n,z:r,base:i}=this.#S(e);this.#x(.12,2,.12,this.#a,n,i+1,r),this.#x(.3,.06,.06,this.#a,n+.12,i+1.95,r),this.#x(.16,.24,.16,this.#s,n+.24,i+1.78,r),this.#x(.1,.16,.1,this.#y({color:t.lamp,emissive:t.lamp,emissiveIntensity:2}),n+.24,i+1.78,r)}#M(e){let t=this.#r.width,n=e.map(e=>e%t),r=e.map(e=>Math.floor(e/t)),i=Math.min(...n),a=Math.max(...n)+1,o=Math.min(...r),s=Math.max(...r)+1,c=(i+a)/2,l=(o+s)/2,u=this.#i(c,l),d=(a-i)/2,f=1.6,p=Math.sqrt(d*d+f*f),m=Math.atan2(f,d);for(let e of[-1,1]){let t=this.#x(p,.06,s-o,this.#c,c+e*d/2,u+f/2,l);t.rotation.z=e*m}this.#x(.08,.08,s-o+.2,this.#a,c,u+f,l),this.#x(a-i-.1,f*.9,.04,this.#c,c,u+f*.45,o+.05).scale.set(1,1,1),this.#x(.5,f*.7,.04,this.#y({color:`#120e0a`}),c,u+f*.35,s-.06)}#N(e,t){if(e.length===0)return;let n=this.#r.width,r=e.map(e=>e%n),i=e.map(e=>Math.floor(e/n)),a=Math.min(...r),o=Math.max(...r)+1,s=Math.min(...i),c=Math.max(...i)+1,l=(a+o)/2,u=(s+c)/2,d=this.#i(l,u);this.#_=d;let f=new Rr;this.#x(o-a-.1,.12,c-s-.1,this.#a,l,.06,u,f);for(let e of[a+.1,o-.1])for(let t of[s+.1,c-.1])this.#x(.08,1.1,.08,this.#s,e,.6,t,f);this.#x(o-a,.08,.08,this.#s,l,1.12,s+.1,f),this.#x(o-a,.08,.08,this.#s,l,1.12,c-.1,f),f.position.y=d,this.group.add(f),this.#h=f;for(let e of[a-.1,o+.1])this.#x(.22,3.4,.22,this.#a,e,d+1.7,c+.05);this.#x(o-a+.6,.24,.24,this.#a,l,d+3.3,c+.05);let p=this.#x(.8,.8,.1,this.#s,l,d+3.3,c+.2);p.rotation.z=Math.PI/4,this.#x(.04,2.2,.04,this.#s,l,d+2.2,u);let m=new V({color:t.lift,transparent:!0,opacity:.2,blending:2,depthWrite:!1,side:2});this.#t.push(m);let h=new ro(o-a+.6,c-s+.6);this.#e.push(h);let g=new H(h,m);g.rotation.x=-Math.PI/2,g.position.set(l,d+.04,u),g.renderOrder=-2,this.group.add(g),this.#g=m}};function Lb(e,t){let n=new Set(t),r=[];for(let i of t){if(!n.has(i))continue;let t=[],a=[i];for(n.delete(i);a.length>0;){let r=a.pop()??i;t.push(r);let o=r%e.width;for(let t of[r-1,r+1,r-e.width,r+e.width])n.has(t)&&(t===r-1&&o===0||t===r+1&&o===e.width-1||(n.delete(t),a.push(t)))}r.push(t.sort((e,t)=>e-t))}return r}var Rb=new B(1,1,1),zb=48;function Bb(e){let t=document.createElement(`canvas`);t.width=128,t.height=32;let n=t.getContext(`2d`);if(n){let t=n.createImageData(128,32);for(let n=0;n<32;n++){let r=1-n/31;for(let i=0;i<128;i++){let a=i/127,o=e?a**1.6*Math.exp(-(((r-.84)/.12)**2)):a**1.2*(.3+.7*r**1.5),s=(n*128+i)*4;t.data[s]=255,t.data[s+1]=255,t.data[s+2]=255,t.data[s+3]=Math.round(255*Math.min(1,o))}}n.putImageData(t,0,0)}return new Ua(t)}var Vb=class{group=new Rr;#e;#t;#n;#r;constructor(){this.#e=new Float32Array(294);let e=new Float32Array(196),t=[];for(let n=0;n<=zb;n++){let r=n/zb;if(e.set([r,0,r,1],n*4),n<zb){let e=n*2;t.push(e,e+1,e+2,e+1,e+3,e+2)}}this.#t=new Vi,this.#t.setAttribute(`position`,new Ei(this.#e,3)),this.#t.setAttribute(`uv`,new Ei(e,2)),this.#t.setIndex(t);let n=e=>new V({map:Bb(e),transparent:!0,opacity:0,blending:2,depthWrite:!1,depthTest:!1,side:2});this.#n=n(!1),this.#r=n(!0);let r=new H(this.#t,this.#n),i=new H(this.#t,this.#r);r.renderOrder=20,i.renderOrder=21,r.frustumCulled=!1,i.frustumCulled=!1,this.group.add(r,i),this.group.visible=!1}show(e,t,n,r,i,a){let o=this.#e;for(let i=0;i<=zb;i++){let a=(e+(t-e)*i/zb)*Math.PI/180,s=Math.sin(a),c=Math.cos(a);o.set([s*n,0,c*n,s*r,0,c*r],i*6)}let s=this.#t.getAttribute(`position`);s.needsUpdate=!0,this.#n.color.copy(a),this.#r.color.copy(a).lerp(Rb,.6),this.#n.opacity=i,this.#r.opacity=i,this.group.visible=i>0}hide(){this.group.visible=!1}paint(e,t){this.#n.color.copy(e),this.#r.color.copy(t)}},Hb=24,Ub=7;function Wb(e){let t=new Uint8Array(672);for(let n=0;n<Ub;n++){let r=(n+.5)/Ub;for(let i=0;i<Hb;i++){let a=(i+.5)/Hb,o=Math.min(1,Math.max(0,(r-.4)/.4)),s=e?a**1.6*Math.exp(-(((r-.86)/.12)**2)):a**1.3*o*o*.85,c=Math.round(Math.min(1,s)*4)/4;t.set([255,255,255,Math.round(255*c)],(n*Hb+i)*4)}}let n=new ha(t,Hb,Ub,pt);return n.magFilter=Ke,n.minFilter=Ke,n.generateMipmaps=!1,n.needsUpdate=!0,n}var Gb=class{group=new Rr;samples;#e;#t;#n;#r;constructor(e=28,t){this.samples=e,this.#e=new Float32Array(e*2*3);let n=new Float32Array(e*2*2),r=[];for(let t=0;t<e;t++){let i=t/(e-1);if(n.set([i,0,i,1],t*4),t<e-1){let e=t*2;r.push(e,e+1,e+2,e+1,e+3,e+2)}}this.#t=new Vi,this.#t.setAttribute(`position`,new Ei(this.#e,3)),this.#t.setAttribute(`uv`,new Ei(n,2)),this.#t.setIndex(r);let i=e=>new V({map:t?Wb(e):Bb(e),transparent:!0,opacity:0,blending:2,depthWrite:!1,side:2});this.#n=i(!1),this.#r=i(!0);let a=new H(this.#t,this.#n),o=new H(this.#t,this.#r);a.renderOrder=20,o.renderOrder=21,a.frustumCulled=!1,o.frustumCulled=!1,this.group.add(a,o),this.group.visible=!1}show(e,t,n,r){this.#e.set(e.subarray(0,this.#e.length)),this.#t.getAttribute(`position`).needsUpdate=!0,this.#n.color.copy(n),this.#r.color.copy(r),this.#n.opacity=.6*t,this.#r.opacity=.9*t,this.group.visible=t>0}hide(){this.group.visible=!1}dispose(){this.#t.dispose(),this.#n.map?.dispose(),this.#r.map?.dispose(),this.#n.dispose(),this.#r.dispose()}},Kb={hit:`core:hit`,death:`core:death`,arc:`core:arc`,gust:`core:gust`,burn:`core:burn`,poison:`core:poison`,decay:`core:decay`,radiate:`core:radiate`,stun:`core:stun`,hurt:`core:hurt`,dodge:`core:dodge`,explode:`core:explode`,strike:`core:strike`,beam:`core:beam`,bossBreak:`core:boss_break`},J={glow:0,spark:1,flame:2,smoke:3,star:4,bubble:5,ring:6,flake:7,mote:8,drop:9,streak:10,feather:11,rune:20,cross:21,bolt:22,plague:23,cloud:24,shock:30,runeRing:31,cracks:32,ripples:33,scorch:34,target:35,pool:36,disc:37},qb=`
float pixelShape(float shape, vec2 q, float seed, float phase, vec2 cells) {
  if (cells.x <= 0.0) return shapeAlpha(shape, q, seed, phase);
  vec2 cell = (floor((q * 0.5 + 0.5) * cells) + 0.5) / cells * 2.0 - 1.0;
  return floor(shapeAlpha(shape, cell, seed, phase) * 4.0 + 0.5) / 4.0;
}
`,Jb=`
float vfxNoise(vec2 p) { return texture2D(uNoise, p).r; }

float ringAt(float r, float at, float width) {
  return smoothstep(at - width, at, r) * (1.0 - smoothstep(at, at + width, r));
}

float shapeAlpha(float shape, vec2 q, float seed, float phase) {
  float r = length(q);
  float a = atan(q.y, q.x);
  if (shape < 0.5) return exp(-r * r * 4.5);
  if (shape < 1.5) return exp(-r * r * 5.5);
  if (shape < 2.5) {
    // Flame: wide and bright at the base, licking up to a point, soft at its edge, which the
    // noise eats away as it rises.
    vec2 p = vec2(q.x, q.y + 0.35);
    float h = clamp((p.y + 1.0) * 0.5, 0.0, 1.0);
    float w = mix(0.9, 0.15, h * h);
    float n = vfxNoise(vec2(q.x * 0.3 + seed, q.y * 0.3 - phase * 1.7 + seed * 3.1));
    float d = length(vec2(p.x / w, (p.y + 0.15) * 0.75)) + (n - 0.5) * 0.6;
    float body = smoothstep(1.0, 0.15, d);
    return body * body;
  }
  if (shape < 3.5) {
    float n = vfxNoise(q * 0.28 + vec2(seed * 7.0, seed * 3.0 + phase * 0.3));
    return smoothstep(1.0, 0.1, r + (n - 0.5) * 0.8) * 0.85;
  }
  if (shape < 4.5) {
    float rays = exp(-abs(q.x) * 16.0) * exp(-abs(q.y) * 2.4) + exp(-abs(q.y) * 16.0) * exp(-abs(q.x) * 2.4);
    return clamp(rays + exp(-r * r * 14.0), 0.0, 1.0);
  }
  if (shape < 5.5) {
    float rim = smoothstep(0.72, 0.88, r) * (1.0 - smoothstep(0.9, 1.0, r));
    vec2 h = q - vec2(-0.35, 0.38);
    float shine = exp(-dot(h, h) * 28.0);
    return clamp(rim * 0.9 + shine + 0.1 * (1.0 - step(0.9, r)), 0.0, 1.0);
  }
  if (shape < 6.5) return ringAt(r, 0.8, 0.14);
  if (shape < 7.5) return smoothstep(1.0, 0.82, abs(q.x) + abs(q.y));
  if (shape < 8.5) return exp(-r * r * 16.0);
  if (shape < 9.5) {
    // A drop, round at the bottom and drawn out above.
    vec2 p = vec2(q.x / mix(1.0, 0.45, clamp(q.y, 0.0, 1.0)), q.y);
    return smoothstep(1.0, 0.7, length(p));
  }
  if (shape < 10.5) return exp(-q.x * q.x * 14.0) * smoothstep(1.0, 0.4, abs(q.y));
  if (shape < 11.5) {
    // A feather: a vane tapering along its quill.
    float along = (q.y + 1.0) * 0.5;
    float w = 0.55 * sin(3.14159 * clamp(along, 0.0, 1.0));
    float vane = smoothstep(w, w - 0.12, abs(q.x - 0.15 * (along - 0.5)));
    float quill = exp(-q.x * q.x * 220.0) * step(abs(q.y), 0.95);
    return clamp(vane * 0.85 + quill, 0.0, 1.0);
  }
  if (shape < 20.5) {
    // A rune circle: two rings and six marks between them, turning with the phase.
    float rings = ringAt(r, 0.92, 0.05) + ringAt(r, 0.62, 0.05);
    float marks = step(0.66, r) * step(r, 0.88) * smoothstep(0.7, 0.98, cos((a + phase) * 6.0));
    float tri = 1.0 - smoothstep(0.02, 0.07, abs(cos(3.0 * (a - phase * 0.5)) * r - 0.28));
    return clamp(rings + marks + tri * step(r, 0.6), 0.0, 1.0);
  }
  if (shape < 21.5) {
    float x1 = abs(q.x - q.y) * 0.7071;
    float x2 = abs(q.x + q.y) * 0.7071;
    return (1.0 - smoothstep(0.08, 0.16, min(x1, x2))) * step(r, 0.85) + ringAt(r, 0.9, 0.06);
  }
  if (shape < 22.5) {
    // A lightning mark: a zigzag down the middle inside a ring.
    float zig = abs(q.x - 0.35 * sign(sin(q.y * 5.0)) * fract(q.y * 2.5 + 0.5));
    return (1.0 - smoothstep(0.06, 0.14, zig)) * step(abs(q.y), 0.8) + ringAt(r, 0.9, 0.06);
  }
  if (shape < 23.5) {
    vec2 e1 = q - vec2(-0.32, 0.12);
    vec2 e2 = q - vec2(0.32, 0.12);
    vec2 m = q - vec2(0.0, -0.4);
    float eyes = exp(-dot(e1, e1) * 30.0) + exp(-dot(e2, e2) * 30.0) + exp(-dot(m, m) * 40.0);
    return clamp(eyes + ringAt(r, 0.85, 0.08), 0.0, 1.0);
  }
  if (shape < 24.5) {
    float n = vfxNoise(q * 0.25 + vec2(seed * 5.0 + phase * 0.05, seed));
    vec2 p = vec2(q.x, q.y * 1.6);
    return smoothstep(1.0, 0.3, length(p) + (n - 0.5) * 0.9);
  }
  if (shape < 30.5) {
    // A shockwave: a bright thin front with a fading wake inside.
    return ringAt(r, 0.94, 0.05) + smoothstep(0.55, 0.94, r) * (1.0 - step(0.94, r)) * 0.35;
  }
  if (shape < 31.5) {
    float outer = ringAt(r, 0.96, 0.025) + ringAt(r, 0.84, 0.02);
    float glyphs = step(0.86, r) * step(r, 0.94) * smoothstep(0.55, 0.95, cos((a - phase) * 12.0));
    float inner = ringAt(r, 0.5, 0.015) * 0.6;
    return clamp(outer + glyphs + inner, 0.0, 1.0);
  }
  if (shape < 32.5) {
    // Cracks radiating from the middle: thin dark-bright lines from the noise.
    float n = vfxNoise(vec2(a * 0.6 + seed * 9.0, r * 0.08));
    float line = 1.0 - smoothstep(0.0, 0.05, abs(fract(a * 1.6 + n * 1.5 + seed) - 0.5) * r);
    return line * smoothstep(1.0, 0.7, r) * smoothstep(0.05, 0.2, r);
  }
  if (shape < 33.5) {
    float waves = 0.5 + 0.5 * cos((r - phase * 0.6) * 22.0);
    return pow(waves, 6.0) * smoothstep(1.0, 0.75, r);
  }
  if (shape < 34.5) {
    float n = vfxNoise(q * 0.22 + vec2(seed * 11.0, seed * 4.0));
    return smoothstep(1.0, 0.2, r + (n - 0.5) * 0.6) * 0.9;
  }
  if (shape < 35.5) {
    float rings = ringAt(r, 0.92, 0.04) + ringAt(r, 0.55, 0.035) + exp(-r * r * 60.0);
    float cross = (1.0 - smoothstep(0.02, 0.05, min(abs(q.x), abs(q.y)))) * step(0.62, r) * step(r, 0.9);
    return clamp(rings + cross, 0.0, 1.0);
  }
  if (shape < 36.5) {
    float n = vfxNoise(q * 0.2 + vec2(phase * 0.02, seed * 6.0));
    float edge = smoothstep(1.0, 0.88, r + (n - 0.5) * 0.12);
    return edge * (0.55 + 0.45 * n);
  }
  return smoothstep(1.0, 0.0, r);
}
`,Y=(e,t=1)=>new B(e).multiplyScalar(t),X=(e,t,n)=>t+(n-t)*e.float(),Yb=e=>.55+.45*Math.min(2,Math.max(.5,e)),Xb=e=>.85+.15*Math.min(2,Math.max(.5,e)),Zb=(e,t)=>Math.max(1,Math.round(e*t)),Qb=e=>Math.min(1,e/30),$b=(e,t,n)=>e%Math.max(1,Math.round(t/Math.max(.35,Qb(n))))===0;function Z(e,t){let n=e.float()*Math.PI*2,r=X(e,-1,1)*(1-t),i=Math.sqrt(Math.max(0,1-r*r));return new R(Math.cos(n)*i,r,Math.sin(n)*i)}function ex(e,t,n=.15,r=.85){let i=e.float()*Math.PI*2,a=t.radius*X(e,.3,.9);return{x:t.x+Math.cos(i)*a,y:t.lift+t.height*X(e,n,r),z:t.z+Math.sin(i)*a}}function Q(e,t,n,r,i,a=7){e.sparks.emit(t,{...n,life:a,size:i,grow:1.5,color:r,alpha:.75,alpha2:0,shape:J.glow})}function $(e,t,n,r,i,a,o=0){e.mark(t,{layer:`ground`,x:n.x,y:.03,z:n.z,size:i*.25,size2:i,alpha:.85,life:a,delay:o,r:r.r,g:r.g,b:r.b,shape:J.shock,flat:!0})}function tx(e,t,n,r,i,a){e.sparks.emit(t,{...n,life:a,size:i*.2,grow:5,color:r,alpha:.9,alpha2:0,shape:J.ring})}var nx=Y(`#ffe08a`,2.4),rx=Y(`#ff9a3a`,1.7),ix=Y(`#d0401a`,.7),ax=Y(`#ffb050`,1.5),ox=Y(`#3a2a24`),sx={id:`fire`,glow:Y(`#ff8a2a`,1.6),core:Y(`#fff0c0`,2.6),hit(e,t,n,r,i,a,o){let s=Yb(o),c=Xb(o);Q(e,t,r,ax,.7*c,8);for(let o=0;o<Zb(7,s);o++)e.sparks.emit(t,{x:r.x+X(n,-.3,.3),y:r.y+X(n,-.2,.15),z:r.z+X(n,-.3,.3),vx:i*X(n,.6,1.6)+X(n,-.4,.4),vy:X(n,1.6,2.8),vz:a*X(n,.6,1.6)+X(n,-.4,.4),drag:1.6,life:X(n,16,26),size:X(n,.2,.32)*c,grow:.45,color:nx,color2:ix,shape:J.flame,seed:n.float()});for(let o=0;o<Zb(14,s);o++){let o=Z(n,.3),s=X(n,3,6.5);e.sparks.emit(t,{...r,vx:(o.x+i)*s,vy:Math.abs(o.y)*s+X(n,1.5,3.5),vz:(o.z+a)*s,ay:1.5,drag:2.2,life:X(n,22,40),size:X(n,.03,.05),color:nx,color2:ix,shape:J.spark,stretch:1.4})}for(let i=0;i<3;i++)e.shade.emit(t,{...r,vx:X(n,-.4,.4),vy:X(n,.6,1),vz:X(n,-.4,.4),drag:1,life:44,delay:5+i,size:.28*c,grow:2.6,color:ox,alpha:.4,shape:J.smoke,seed:n.float()});e.mark(t,{layer:`groundShade`,x:r.x,y:.012,z:r.z,size:.4*c,size2:.5*c,alpha:.5,life:90,r:.45,g:.34,b:.28,shape:J.scorch,seed:n.float(),flat:!0})},aura(e,t,n,r,i){$b(t,2,i)&&(e.ambience.emit(t,{...ex(n,r,.05,.8),vx:X(n,-.2,.2),vy:X(n,1.1,1.9),vz:X(n,-.2,.2),life:X(n,14,22),size:X(n,.11,.19),grow:.35,color:rx,color2:ix,shape:J.flame,seed:n.float()}),t%6==0&&e.ambience.emit(t,{...ex(n,r,.3,.9),vx:X(n,-.5,.5),vy:X(n,1.6,2.6),vz:X(n,-.5,.5),drag:1,life:X(n,26,34),size:X(n,.025,.035),color:nx,color2:ix,shape:J.mote}),t%14==0&&e.shade.emit(t,{...ex(n,r,.7,1),vy:.8,life:40,size:.16,grow:2.4,color:ox,alpha:.25,shape:J.smoke,seed:n.float()}))}},cx=Y(`#cfefff`,1.8),lx=Y(`#3a8bff`,1.1),ux=Y(`#bfe8ff`,1.2),dx=Y(`#8fc8ff`,.35),fx={id:`water`,glow:Y(`#4aa0ff`,1.4),core:Y(`#e0f6ff`,2),hit(e,t,n,r,i,a,o){let s=Yb(o),c=Xb(o);Q(e,t,r,ux,.55*c,6),tx(e,t,r,ux,1.1*c,12);for(let o=0;o<Zb(18,s);o++){let o=Z(n,.25),s=X(n,2.2,4.8);e.sparks.emit(t,{...r,vx:(o.x+i*.6)*s,vy:Math.abs(o.y)*s+X(n,2.2,3.4),vz:(o.z+a*.6)*s,ay:-9.8,drag:.6,life:X(n,22,34),size:X(n,.04,.065),color:cx,color2:lx,shape:J.spark,stretch:1.1})}for(let o=0;o<3;o++)e.ambience.emit(t,{x:r.x+X(n,-.25,.25),y:r.y+X(n,-.2,.2),z:r.z+X(n,-.25,.25),vx:X(n,-.4,.4)+i*.5,vz:X(n,-.4,.4)+a*.5,drag:1.5,life:34,size:.3*c,grow:2.4,color:dx,alpha:.35,shape:J.smoke,seed:n.float()});e.mark(t,{layer:`ground`,x:r.x,y:.02,z:r.z,size:.45*c,size2:1.7*c,alpha:.9,life:40,r:cx.r*.5,g:cx.g*.5,b:cx.b*.5,shape:J.ripples,phaseRate:1.4,flat:!0})},aura(e,t,n,r,i){$b(t,4,i)&&e.ambience.emit(t,{...ex(n,r,.25,.85),vy:-.4,ay:-9.8,life:20,size:.045,color:cx,color2:lx,shape:J.drop}),$b(t,12,i)&&e.ambience.emit(t,{x:r.x+X(n,-.3,.3),y:r.lift+.12,z:r.z+X(n,-.3,.3),vx:X(n,-.2,.2),vz:X(n,-.2,.2),life:44,size:.28,grow:1.8,color:dx,alpha:.35,shape:J.smoke,seed:n.float()})}},px=Y(`#e8fff6`,1.6),mx=Y(`#7fe0b0`,1.1),hx=Y(`#a6e88a`,1.1),gx=Y(`#a8f0d0`,.9),_x=Y(`#a8f0d0`,.63),vx=Y(`#7fe0b0`,.55);function yx(e,t,n,r,i,a,o,s,c=0){for(let l=0;l<14;l++)e.sparks.emit(t,{x:n.x+Math.cos(i)*r,y:n.y,z:n.z+Math.sin(i)*r,cx:n.x,cz:n.z,swirl:a,pull:-.9,delay:c+l*.5,life:o,size:s*(1-.5*l/14),color:px,color2:mx,alpha:1-.7*l/14,alpha2:0,shape:J.spark,stretch:1.2})}var bx={id:`wind`,glow:Y(`#8ff0c0`,1.3),core:Y(`#f0fff8`,1.8),hit(e,t,n,r,i,a,o){let s=Yb(o),c=Xb(o);Q(e,t,r,gx,.5*c,6),$(e,t,r,_x,1.5*c,16),tx(e,t,r,vx,1.3*c,12);let l=n.float()<.5?1:-1;for(let i=0;i<Zb(5,s);i++)yx(e,t,{x:r.x,y:r.y+X(n,-.35,.3),z:r.z},X(n,.45,.8)*c,n.float()*Math.PI*2,l*X(n,9,12),X(n,18,24),.07,n.int(0,3));for(let o=0;o<Zb(8,s);o++){let o=Z(n,.35);e.sparks.emit(t,{...r,vx:o.x*3.5+i*2,vy:Math.abs(o.y)*3+1.2,vz:o.z*3.5+a*2,ay:-3,drag:1.2,life:X(n,30,46),size:X(n,.08,.11),color:hx,shape:J.feather,spin:X(n,-12,12),angle:n.float()*6})}},aura(){}};function xx(e,t,n,r,i){let a=i.x-r.x,o=i.z-r.z,s=Math.sqrt(a*a+o*o)||1,c=s/8*60;for(let i=0;i<3;i++){let l=(i-1)*.18+X(n,-.05,.05),u=X(n,-.2,.2);for(let n=0;n<5;n++)e.sparks.emit(t,{x:r.x-o/s*l,y:r.y+u,z:r.z+a/s*l,vx:a/s*c,vz:o/s*c,delay:i+n,life:9,size:.05*(1-n/8),color:px,color2:mx,alpha:1-n/6,shape:J.glow})}let l=n.float()<.5?1:-1;for(let r=0;r<2;r++)yx(e,t,i,.4,n.float()*Math.PI*2,l*11,14,.045,7);$(e,t,i,gx,.9,14,7)}var Sx=Y(`#f0fdff`,3),Cx=Y(`#4ae0ff`,2),wx=Y(`#9ff0ff`,2),Tx={id:`lightning`,glow:Cx,core:Sx,hit(e,t,n,r,i,a,o){let s=Yb(o),c=Xb(o);Q(e,t,r,wx,.6*c,6);let l=new R(r.x,r.y,r.z);for(let o=0;o<Zb(3,s);o++){let o=Z(n,.2),s=X(n,.8,1.4)*c;e.bolts.add(t,{from:l,to:new R(r.x+(o.x+i*.5)*s,Math.max(.05,r.y+o.y*s*.6),r.z+(o.z+a*.5)*s),life:7,width:.03,glow:Cx,core:Sx,jag:.25,branches:1,seed:n.u32()})}for(let i=0;i<Zb(16,s);i++){let i=Z(n,.1),a=X(n,6,10);e.sparks.emit(t,{...r,vx:i.x*a,vy:i.y*a+1,vz:i.z*a,ay:-6,drag:4,life:X(n,8,14),size:.035,color:Sx,color2:Cx,shape:J.spark,stretch:2.5})}},aura(e,t,n,r){let i=ex(n,r);for(let r=0;r<2;r++){let r=Z(n,0);e.ambience.emit(t,{...i,vx:r.x*3,vy:r.y*3,vz:r.z*3,drag:4,life:6,size:.03,color:Sx,color2:Cx,shape:J.spark,stretch:2})}if(t%3==0&&e.ambience.emit(t,{x:r.x,y:r.lift+r.height*.5,z:r.z,life:6,size:r.height*.55,color:Cx,alpha:.3,alpha2:0,shape:J.glow}),t%4==0){let a=ex(n,r);e.bolts.add(t,{from:new R(i.x,i.y,i.z),to:new R(a.x,a.y,a.z),life:4,width:.018,glow:Cx,core:Sx,jag:.3,branches:0,seed:n.u32()})}}},Ex=Y(`#6a5644`),Dx=Y(`#e8c888`,1.2),Ox=Y(`#e0b880`,1.2),kx=Y(`#c8a070`,.45),Ax={id:`earth`,glow:Y(`#d9b070`,1.2),core:Y(`#ffe2b0`,1.6),hit(e,t,n,r,i,a,o){let s=Yb(o),c=Xb(o);Q(e,t,r,Y(`#ffe2b0`,1),.5*c,5),$(e,t,r,Dx,1.3*c,14);for(let o=0;o<Zb(7,s);o++){let o=Z(n,.4),s=X(n,2.5,5);e.chunks.add(t,{kind:`rock`,...r,vx:(o.x+i)*s,vy:Math.abs(o.y)*s+X(n,2.5,4.5),vz:(o.z+a)*s,life:X(n,45,65),size:X(n,.09,.18)*c,spin:X(n,6,14),axis:Z(n,0),color:Y(n.float()<.5?`#b08a62`:`#9a8a72`)})}for(let o=0;o<Zb(10,s);o++){let o=Z(n,.3),s=X(n,2,4);e.sparks.emit(t,{...r,vx:(o.x+i*.5)*s,vy:Math.abs(o.y)*s+1.5,vz:(o.z+a*.5)*s,ay:-9.8,life:X(n,18,28),size:.03,color:Ox,shape:J.flake,spin:10})}for(let o=0;o<5;o++){let s={x:r.x+X(n,-.3,.3),y:.2,z:r.z+X(n,-.3,.3),vx:X(n,-1,1)+i,vy:.4,vz:X(n,-1,1)+a,drag:1.5,life:X(n,40,56),size:.32*c,grow:2.6,shape:J.smoke,seed:n.float()};e.shade.emit(t,{...s,color:Ex,alpha:.5}),o<3&&e.ambience.emit(t,{...s,grow:2.2,color:kx,alpha:.35})}e.mark(t,{layer:`groundShade`,x:r.x,y:.015,z:r.z,size:.65*c,size2:.85*c,alpha:.95,life:90,r:.35,g:.28,b:.22,shape:J.cracks,seed:n.float(),flat:!0})},aura(){}};function jx(e,t,n,r){e.shade.emit(t,{x:r.x+X(n,-.2,.2),y:.12,z:r.z+X(n,-.2,.2),vy:.3,drag:1,life:30,size:.18,grow:2.2,color:Ex,alpha:.35,shape:J.smoke,seed:n.float()})}var Mx=Y(`#a6e85a`,1.5),Nx=Y(`#4a8a2a`,.9),Px=Y(`#7ac04a`,.35),Fx=Y(`#4a6a3a`),Ix={id:`poison`,glow:Y(`#8ed14f`,1.3),core:Y(`#e0ffb0`,1.8),hit(e,t,n,r,i,a,o){let s=Yb(o),c=Xb(o);Q(e,t,r,Y(`#b0f070`,1),.5*c,6);for(let o=0;o<Zb(12,s);o++){let o=Z(n,.3);e.sparks.emit(t,{x:r.x+o.x*.3,y:r.y+o.y*.25,z:r.z+o.z*.3,vx:o.x*.8+i*.4,vy:X(n,.5,1.4),vz:o.z*.8+a*.4,drag:1.2,life:X(n,24,42),size:X(n,.06,.11)*c,grow:1.3,color:Mx,color2:Nx,shape:J.bubble})}for(let o=0;o<Zb(8,s);o++){let o=Z(n,.3),s=X(n,2,3.5);e.sparks.emit(t,{...r,vx:(o.x+i*.5)*s,vy:Math.abs(o.y)*s+1.5,vz:(o.z+a*.5)*s,ay:-9.8,life:X(n,18,26),size:.045,color:Mx,color2:Nx,shape:J.drop})}for(let i=0;i<3;i++)e.ambience.emit(t,{x:r.x+X(n,-.3,.3),y:r.y*.7,z:r.z+X(n,-.3,.3),vx:X(n,-.3,.3),vz:X(n,-.3,.3),ay:-.3,life:44,size:.32*c,grow:2.4,color:Px,alpha:.55,shape:J.smoke,seed:n.float()});for(let i=0;i<2;i++)e.shade.emit(t,{x:r.x+X(n,-.3,.3),y:r.y*.5,z:r.z+X(n,-.3,.3),vx:X(n,-.3,.3),vz:X(n,-.3,.3),ay:-.4,life:50,size:.35*c,grow:2,color:Fx,alpha:.35,shape:J.smoke,seed:n.float()})},aura(e,t,n,r,i,a){let o=Math.max(1,Math.min(5,a));$b(t,7-o,i)&&e.ambience.emit(t,{...ex(n,r,.2,.85),vx:X(n,-.1,.1),vy:X(n,.5,.9),vz:X(n,-.1,.1),life:X(n,22,32),size:X(n,.045,.08),grow:1.4,color:Mx,color2:Nx,shape:J.bubble}),$b(t,12,i)&&e.ambience.emit(t,{...ex(n,r,.3,.6),ay:-9.8,life:16,size:.04,color:Mx,color2:Nx,shape:J.drop}),$b(t,10,i)&&e.ambience.emit(t,{x:r.x+X(n,-.3,.3),y:r.lift+.15,z:r.z+X(n,-.3,.3),vx:X(n,-.15,.15),vz:X(n,-.15,.15),life:40,size:.3,grow:1.6,color:Px,alpha:.2+.05*o,shape:J.smoke,seed:n.float()})}},Lx=Y(`#fff0c0`,2.2),Rx=Y(`#ffcf6a`,1.4),zx=Y(`#ffe6a0`,1.3),Bx={id:`holy`,glow:Rx,core:Lx,hit(e,t,n,r,i,a,o){let s=Yb(o),c=Xb(o);Q(e,t,r,Y(`#fff0c0`,1.4),.65*c,8),$(e,t,r,Rx,1.2*c,18),e.mark(t,{layer:`over`,x:r.x,y:r.y+.5,z:r.z,size:1.1*c,size2:1.4*c,wide:.2,alpha:.8,life:16,r:zx.r,g:zx.g,b:zx.b,shape:J.streak});for(let i=0;i<Zb(12,s);i++){let i=Z(n,.6);e.sparks.emit(t,{x:r.x+i.x*.35,y:r.y+X(n,-.3,.2),z:r.z+i.z*.35,vx:i.x*.6,vy:X(n,1.2,2.6),vz:i.z*.6,drag:1.2,life:X(n,30,46),size:X(n,.05,.09),color:Lx,color2:Rx,shape:n.float()<.4?J.star:J.mote,spin:3})}},aura(){}};function Vx(e,t,n,r,i){for(let a=0;a<8;a++){let o=20+a%4;e.sparks.emit(t,{x:r.x+X(n,-.2,.2),y:r.y+X(n,-.1,.3),z:r.z+X(n,-.2,.2),vx:(i.x-r.x)/o*60,vy:(i.y+.3-r.y)/o*60+1.2,vz:(i.z-r.z)/o*60,ay:60/o*-2.4,life:o,delay:Math.floor(a/2),size:.07,color:Lx,color2:Rx,shape:J.mote})}e.sparks.emit(t,{...i,delay:20,life:12,size:.45,grow:1.3,color:Y(`#ffe6a0`,1.1),alpha:.7,alpha2:0,shape:J.glow}),$(e,t,i,Rx,.9,16,20)}var Hx=Y(`#ff3a5a`,2.2),Ux=Y(`#a01838`,1),Wx=Y(`#3a0a18`),Gx=Y(`#c0203a`,.4),Kx={id:`unholy`,glow:Hx,core:Y(`#ffb0c0`,2),hit(e,t,n,r,i,a,o){let s=Yb(o),c=Xb(o);Q(e,t,r,Y(`#ff4060`,1.2),.5*c,6);for(let i=0;i<Zb(18,s);i++){let i=n.float()*Math.PI*2,a=X(n,.7,1.1)*c;e.sparks.emit(t,{x:r.x+Math.cos(i)*a,y:r.y+X(n,-.4,.5),z:r.z+Math.sin(i)*a,cx:r.x,cz:r.z,swirl:5,pull:a*3.5,vy:-.3,life:X(n,16,20),size:X(n,.06,.08),color:Hx,color2:Ux,shape:J.spark,stretch:1.2})}e.ambience.emit(t,{...r,delay:8,life:30,size:.3*c,grow:1.6,color:Gx,alpha:.45,shape:J.smoke,seed:n.float()});for(let i=0;i<2;i++)e.shade.emit(t,{...r,vx:X(n,-.3,.3),vy:.5,vz:X(n,-.3,.3),life:40,delay:3*i,size:.35*c,grow:2.2,color:Y(`#2a0812`),alpha:.55,shape:J.smoke,seed:n.float()});e.mark(t,{layer:`ground`,x:r.x,y:.025,z:r.z,size:.6*c,size2:.75*c,alpha:.9,life:30,r:Hx.r*.7,g:Hx.g*.7,b:Hx.b*.7,shape:J.runeRing,spin:1.5,phaseRate:1,flat:!0})},aura(e,t,n,r,i){$b(t,8,i)&&e.shade.emit(t,{...ex(n,r,.5,1),vy:.7,life:36,size:.14,grow:2,color:Wx,alpha:.55,shape:J.smoke,seed:n.float()}),$b(t,6,i)&&e.ambience.emit(t,{...ex(n,r,.4,.95),vy:-.6,vx:X(n,-.1,.1),vz:X(n,-.1,.1),life:24,size:.035,color:Hx,color2:Ux,shape:J.mote})}},qx=Y(`#ffffff`,3),Jx=Y(`#fff2c8`,1.8),Yx={id:`light`,glow:Jx,core:qx,hit(e,t,n,r,i,a,o){let s=Yb(o),c=Xb(o);e.sparks.emit(t,{...r,life:10,size:.75*c,grow:.35,color:qx,alpha:.85,shape:J.star,angle:X(n,-.2,.2)}),tx(e,t,r,Jx,1.2*c,10);for(let i=0;i<Zb(10,s);i++){let i=Z(n,.2);e.sparks.emit(t,{...r,vx:i.x*9,vy:i.y*6,vz:i.z*9,drag:5,life:10,size:.04,color:qx,color2:Jx,shape:J.spark,stretch:3.5})}for(let i=0;i<Zb(8,s);i++){let i=Z(n,.3);e.sparks.emit(t,{x:r.x+i.x*.6,y:r.y+i.y*.45,z:r.z+i.z*.6,life:X(n,12,22),delay:n.int(0,8),size:X(n,.08,.12),color:qx,shape:J.star,spin:4})}},aura(e,t,n,r,i){if(!$b(t,5,i))return;let a=n.float()*Math.PI*2;e.ambience.emit(t,{x:r.x+Math.cos(a)*.35,y:r.lift+r.height*X(n,.8,1.05),z:r.z+Math.sin(a)*.35,life:12,size:X(n,.06,.1),color:qx,shape:J.star,spin:3})}},Xx=Y(`#a07aff`,2),Zx=Y(`#5a2aa0`,.9),Qx=Y(`#8a5aff`,1.5),$x=Y(`#6a3ad0`,.6),eS={id:`dark`,glow:Xx,core:Y(`#d8c8ff`,1.6),hit(e,t,n,r,i,a,o){let s=Yb(o),c=Xb(o);for(let i=0;i<Zb(16,s);i++){let i=Z(n,0),a=X(n,.8,1.3)*s;e.sparks.emit(t,{x:r.x+i.x*a,y:r.y+i.y*a*.7,z:r.z+i.z*a,vx:-i.x*a*3.2,vy:-i.y*a*2.2,vz:-i.z*a*3.2,drag:.4,life:X(n,16,20),size:X(n,.06,.08),color:Xx,color2:Zx,shape:J.mote})}e.sparks.emit(t,{...r,delay:4,life:14,size:.6*c,grow:.3,color:$x,alpha:.8,shape:J.glow}),e.sparks.emit(t,{...r,life:14,size:.95*c,grow:.15,color:Qx,alpha:.9,shape:J.ring}),e.shade.emit(t,{...r,life:26,size:.5*c,grow:.5,color:Y(`#1a0830`),alpha:.85,shape:J.smoke,seed:n.float()});for(let i=0;i<Zb(8,s);i++){let i=Z(n,.3);e.sparks.emit(t,{...r,vx:i.x*1.6,vy:i.y*1.2+.4,vz:i.z*1.6,drag:1.5,delay:12,life:X(n,20,28),size:.05,color:Xx,color2:Zx,shape:J.mote})}},aura(e,t,n,r,i){$b(t,4,i)&&e.ambience.emit(t,{x:r.x,y:r.lift+r.height*.5,z:r.z,life:8,size:r.height*.5,color:$x,alpha:.25,alpha2:0,shape:J.glow}),$b(t,5,i)&&e.ambience.emit(t,{...ex(n,r,.5,1),vx:X(n,-.1,.1),vy:-.6,vz:X(n,-.1,.1),life:26,size:.05,color:Xx,color2:Zx,shape:J.mote}),$b(t,12,i)&&e.shade.emit(t,{x:r.x+X(n,-.25,.25),y:r.lift+.15,z:r.z+X(n,-.25,.25),life:40,size:.26,grow:1.8,color:Y(`#2a1440`),alpha:.45,shape:J.smoke,seed:n.float()})}},tS={fire:sx,water:fx,wind:bx,lightning:Tx,earth:Ax,poison:Ix,holy:Bx,unholy:Kx,light:Yx,dark:eS};Object.keys(tS);function nS(e,t=`#ffffff`){let n=e.includes(`:`)?e.slice(e.indexOf(`:`)+1):e;return tS[n]??rS(n,t)}function rS(e,t){let n=Y(t,1.4);return{id:e,glow:n,core:Y(t,2),hit(e,t,r,i,a,o,s){let c=Yb(s),l=Xb(s);Q(e,t,i,n,.5*l,6);for(let a=0;a<Zb(12,c);a++){let a=Z(r,.2);e.sparks.emit(t,{...i,vx:a.x*4,vy:a.y*4+1,vz:a.z*4,drag:3,life:14,size:.045,color:n,shape:J.spark,stretch:1})}},aura(){}}}var iS=17,aS=`
attribute vec4 aColor;
attribute float aAcross;
varying vec4 vColor;
varying float vAcross;
void main() {
  vColor = aColor;
  vAcross = aAcross;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,oS=`
varying vec4 vColor;
varying float vAcross;
void main() {
  float cover = exp(-vAcross * vAcross * 4.0) * vColor.a;
  if (cover <= 0.002) discard;
  gl_FragColor = vec4(vColor.rgb, cover);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,sS=new R,cS=new R,lS=new R,uS=new R,dS=new R,fS=new R,pS=new R;function mS(e,t,n,r,i){i[0]?.copy(e),i[16]?.copy(t),lS.subVectors(t,e);let a=lS.length();fS.set(0,1,0).cross(lS),fS.lengthSq()<1e-8&&fS.set(1,0,0),fS.normalize(),pS.crossVectors(lS,fS).normalize();let o=16,s=r*a;for(;o>1;){let e=o/2;for(let t=e;t<16;t+=o){let r=i[t],a=i[t-e],o=i[t+e];r&&a&&o&&(r.addVectors(a,o).multiplyScalar(.5),r.addScaledVector(fS,(n.float()-.5)*2*s),r.addScaledVector(pS,(n.float()-.5)*2*s))}o=e,s*=.55}}var hS=class{lift=null;mesh;#e=[];#t=[];#n;#r;#i;#a;#o=Array.from({length:iS},()=>new R);#s=Array.from({length:iS},()=>new R);constructor(e){let t=36864;this.#n=new Float32Array(t*3),this.#r=new Float32Array(t*4),this.#i=new Float32Array(t);let n=[];for(let e=0;e<9216;e++){let t=e*4;n.push(t,t+1,t+2,t,t+2,t+3)}let r=new Vi,i=new Ei(this.#n,3).setUsage(vn),a=new Ei(this.#r,4).setUsage(vn),o=new Ei(this.#i,1).setUsage(vn);r.setAttribute(`position`,i),r.setAttribute(`aColor`,a),r.setAttribute(`aAcross`,o),r.setIndex(n),r.setDrawRange(0,0),this.#a=r;let s=new go({vertexShader:aS,fragmentShader:oS,transparent:!0,depthWrite:!1,blending:2});this.mesh=new H(r,s),this.mesh.frustumCulled=!1,this.mesh.renderOrder=e}add(e,t){this.#e.length>=96&&this.#e.shift(),this.#e.push({...t,from:gS(t.from,this.lift),to:gS(t.to,this.lift),birth:e+(t.delay??0)})}hold(e){this.#t.push({...e,from:gS(e.from,this.lift),to:gS(e.to,this.lift)})}get live(){return this.#e.length}update(e,t){for(let t=this.#e.length-1;t>=0;t--){let n=this.#e[t];n&&e-n.birth>=n.life&&this.#e.splice(t,1)}let n=0,r=Math.floor(e/2);for(let e of this.#t){let i=_(b([e.seed,r]));mS(e.from,e.to,i,e.jag??0,this.#o),n=this.#c(this.#o,iS,e,e.alpha??1,t,n,1,e.taper??0)}this.#t.length=0;for(let r of this.#e){let i=e-r.birth;if(i<0)continue;let a=i/r.life,o=Math.floor(i/2),s=a<.4?1:1-(a-.4)/.6,c=_(b([r.seed,o]));mS(r.from,r.to,c,r.jag??.12,this.#o),n=this.#c(this.#o,iS,r,s,t,n);for(let e=0;e<(r.branches??1);e++){let e=3+c.int(0,9),i=this.#o[e];if(!i)continue;sS.copy(r.to).sub(r.from);let a=sS.length()*(.2+.2*c.float());cS.set(c.float()-.5,c.float()*.6-.3,c.float()-.5).normalize(),sS.normalize().add(cS).normalize().multiplyScalar(a).add(i),mS(i,sS,c,.18,this.#s),n=this.#c(this.#s,iS,r,s*.6,t,n,.6)}}this.#a.setDrawRange(0,n*6);for(let e of[`position`,`aColor`,`aAcross`]){let t=this.#a.getAttribute(e);t.clearUpdateRanges(),n>0&&t.addUpdateRange(0,n*4*t.itemSize),t.needsUpdate=!0}}#c(e,t,n,r,i,a,o=1,s=.6){let c=a,l=[{width:n.width*4*o,color:n.glow,alpha:.55*r},{width:n.width*o,color:n.core,alpha:r}];for(let n of l)for(let r=0;r<t-1;r++){if(c>=9216)return c;let a=e[r],o=e[r+1];if(!a||!o||(lS.subVectors(o,a),dS.subVectors(i,a),uS.crossVectors(lS,dS),uS.lengthSq()<1e-10))continue;uS.normalize().multiplyScalar(n.width);let l=1-s*r/(t-1),u=1-s*(r+1)/(t-1);this.#l(c*4,a,uS,-l,n.color,n.alpha,-1),this.#l(c*4+1,a,uS,l,n.color,n.alpha,1),this.#l(c*4+2,o,uS,u,n.color,n.alpha,1),this.#l(c*4+3,o,uS,-u,n.color,n.alpha,-1),c++}return c}#l(e,t,n,r,i,a,o){this.#n[e*3]=t.x+n.x*r,this.#n[e*3+1]=t.y+n.y*r,this.#n[e*3+2]=t.z+n.z*r,this.#r[e*4]=i.r,this.#r[e*4+1]=i.g,this.#r[e*4+2]=i.b,this.#r[e*4+3]=a,this.#i[e]=o}clear(){this.#e.length=0,this.#t.length=0,this.#a.setDrawRange(0,0)}dispose(){this.#a.dispose(),this.mesh.material.dispose()}};function gS(e,t){let n=e.clone();return t&&(n.y+=t(n.x,n.z)),n}var _S=new R;function vS(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;_S.copy(t),_S[r]=0,_S.normalize();let l=.5*o/(o+s),u=1-_S.angleTo(e)/c;return Math.sign(_S[n])===1?u*l:s/(o+s)+l+l*(1-u)}var yS=class e extends qa{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new R,c=new R,l=new R(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new R,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=vS(m,c,`z`,`y`,i,n),f[a+1]=1-vS(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-vS(m,c,`z`,`y`,i,n),f[a+1]=1-vS(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-vS(m,c,`x`,`z`,i,e),f[a+1]=vS(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-vS(m,c,`x`,`z`,i,e),f[a+1]=1-vS(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-vS(m,c,`x`,`y`,i,e),f[a+1]=1-vS(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=vS(m,c,`x`,`y`,i,e),f[a+1]=1-vS(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},bS=.06;function xS(e,t,n){let r=e.index?e.toNonIndexed():e;r.deleteAttribute(`uv`);let i=_(t),a=r.getAttribute(`position`),o=new Map;for(let e=0;e<a.count;e++){let t=a.getX(e),r=a.getY(e),s=a.getZ(e),c=`${t.toFixed(4)},${r.toFixed(4)},${s.toFixed(4)}`,l=o.get(c);l||(l=[(i.float()-.5)*n,(i.float()-.5)*n,(i.float()-.5)*n],o.set(c,l)),a.setXYZ(e,t+l[0],r+l[1],s+l[2])}return r.computeVertexNormals(),r}function SS(e,t){let[n,r,i]=e,a=.5,o=new to([new L(.001,-.5),new L(a*.72,-.36),new L(a,-.05),new L(a*.8,.34),new L(.001,.5)],t);return o.scale(n,r,i),o}function CS(e,t){let n=new Za(.5,.62,t,1,!0).toNonIndexed();n.translate(0,.19,0);let r=new Za(.5,.38,t,1,!0).toNonIndexed();r.rotateX(Math.PI),r.translate(0,-.31,0);for(let e of[n,r])e.deleteAttribute(`uv`);let i=Zu([n,r]);return i.scale(e[0],e[1],e[2]),i.computeVertexNormals(),i}function wS(e,t){let n=new Xa(.5,.56,1,t,1,!0,Math.PI*.6,Math.PI*.8);n.deleteAttribute(`uv`),n.translate(0,0,.155);let r=n.toNonIndexed(),i=r.clone(),a=i.getAttribute(`position`);for(let e=0;e<a.count;e+=3){let t=a.getX(e+1),n=a.getY(e+1),r=a.getZ(e+1);a.setXYZ(e+1,a.getX(e+2),a.getY(e+2),a.getZ(e+2)),a.setXYZ(e+2,t,n,r)}let o=Zu([r,i]);return o.scale(e[0]/.95,e[1],e[2]/.35),o.computeVertexNormals(),o}function TS(e,t,n){let r=Math.min(t[0],t[1],t[2])*.18;switch(e){case`capsule`:return xS(SS(t,6),n,r);case`box`:return xS(Math.min(...t)<bS?new qa(t[0],t[1],t[2]):new yS(t[0],t[1],t[2],1,Math.min(...t)*.2),n,r);case`gem`:return xS(CS(t,5),n,r*.6);case`orb`:{let e=new eo(.5,0);return e.scale(t[0],t[1],t[2]),xS(e,n,r)}case`slab`:return xS(new yS(t[0],t[1],t[2],1,Math.min(...t)*.3),n,r*.4);case`cone`:{let e=new Za(.5,1,5);return e.scale(t[0],t[1],t[2]),xS(e,n,r)}case`shell`:return wS(t,5)}}function ES(e,t){let[n,r,i]=t;switch(e){case`capsule`:{let e=.5,t=new Ja(e*.9,1-e*1.8,2,8);return t.scale(n,r,i),t}case`box`:return Math.min(n,r,i)<bS?new qa(n,r,i):new yS(n,r,i,1,Math.min(n,r,i)*.3);case`gem`:{let e=new no(.5,0);return e.scale(n,r,i),e}case`orb`:{let e=new ao(.5,10,8);return e.scale(n,r,i),e}case`slab`:return new yS(n,r,i,1,Math.min(n,r,i)*.45);case`cone`:{let e=new Za(.5,1,8);return e.scale(n,r,i),e}case`shell`:return wS(t,8)}}var DS=new R,OS=new Vn,kS=new R,AS=new z,jS=class{mesh;chunks=[];constructor(e,t,n){this.mesh=new wa(e,t,256),this.mesh.instanceMatrix.setUsage(vn),this.mesh.setColorAt(0,new B(1,1,1)),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=n}};function MS(e){let t=O(6,6);return te(t,null,{x:0,y:0,w:6,h:6},e,[200,200,200],e.length),Dp(t)}var NS=class{lift=null;#e;constructor(e=!1){let t=e?new qa(.62,.62,.62):xS(new $a(.5,0),11,.22),n=e?new qa(.5,.9,.5):new no(.5,0);e||n.scale(.7,1.3,.7);let r=e?new qa(.34,.9,.34):new no(.5,0);e||r.scale(.45,1.4,.45),this.#e={rock:new jS(t,new vo({roughness:.9,metalness:.05,flatShading:!0,...e?{map:MS(`stone`)}:{}}),0),ice:new jS(n,new vo({roughness:.2,metalness:.1,flatShading:!0,emissive:new B(`#2a5a90`),emissiveIntensity:.6,...e?{map:MS(`crystal`)}:{}}),0),glow:new jS(r,new V,0)}}get meshes(){return Object.values(this.#e).map(e=>e.mesh)}get live(){let e=0;for(let t of Object.values(this.#e))e+=t.chunks.length;return e}liveOf(e){return this.#e[e].chunks.length}add(e,t){let n=this.#e[t.kind];n.chunks.length>=256&&n.chunks.shift();let r=this.lift?.(t.x,t.z)??0;n.chunks.push({...t,birth:e+(t.delay??0),floor:r})}update(e){for(let t of Object.values(this.#e)){let n=0,r=t.chunks;for(let t=r.length-1;t>=0;t--){let n=r[t];n&&e-n.birth>=n.life&&r.splice(t,1)}for(let i of r){let r=e-i.birth;if(r<0)continue;let a=r/60,o=i.gravity??-9.8,s=i.size*.35,c=i.y+i.vy*a+.5*o*a*a,l=a;if(c<s){c=s;let e=PS(i.y-s,i.vy,o);l=e+Math.min(a-e,.25)*.5}DS.set(i.x+i.vx*l,c+i.floor,i.z+i.vz*l);let u=c<=s?Math.min(a,PS(i.y-s,i.vy,o)):a;OS.setFromAxisAngle(i.axis,i.spin*u);let d=r/i.life,f=d<.75?1:Math.max(0,1-(d-.75)/.25);kS.setScalar(i.size*f),AS.compose(DS,OS,kS),t.mesh.setMatrixAt(n,AS),t.mesh.setColorAt(n,i.color),n++}t.mesh.count=n,t.mesh.instanceMatrix.needsUpdate=!0,t.mesh.instanceColor&&(t.mesh.instanceColor.needsUpdate=!0)}}clear(){for(let e of Object.values(this.#e))e.chunks.length=0,e.mesh.count=0}dispose(){for(let e of Object.values(this.#e))e.mesh.geometry.dispose(),e.mesh.material.dispose()}};function PS(e,t,n){if(e<=0&&t<=0)return 0;let r=t*t-2*n*e;return(-t-Math.sqrt(Math.max(0,r)))/n}function FS(e,t,n,r){let i=(e%n+n)%n,a=(t%n+n)%n;return b([i,a,r])/4294967296}var IS=e=>e*e*(3-2*e);function LS(e,t,n){let r=0,i=0,a=1;for(let o=0;o<4;o++){let s=4<<o,c=e/n*s,l=t/n*s,u=Math.floor(c),d=Math.floor(l),f=IS(c-u),p=IS(l-d),m=FS(u,d,s,o),h=FS(u+1,d,s,o),g=FS(u,d+1,s,o),_=FS(u+1,d+1,s,o),v=m+(h-m)*f,y=g+(_-g)*f;r+=(v+(y-v)*p)*a,i+=a,a*=.5}return r/i}function RS(e=64){let t=new Uint8Array(e*e);for(let n=0;n<e;n++)for(let r=0;r<e;r++)t[n*e+r]=Math.round(LS(r,n,e)*255);let n=new ha(t,e,e,gt,Qe);return n.wrapS=Ue,n.wrapT=Ue,n.magFilter=Ye,n.minFilter=Ye,n.needsUpdate=!0,n}var zS=32,BS=65536,VS=`
uniform float uTime;
uniform float uPixels;
attribute vec4 aStart;   // x y z birth
attribute vec4 aVel;     // vx vy vz life
attribute vec4 aAcc;     // ax ay az drag
attribute vec4 aSwirl;   // cx cz turn pull
attribute vec4 aSize;    // size grow spin stretch
attribute vec4 aColor;   // rgb alpha at birth
attribute vec4 aColor2;  // rgb alpha at death
attribute vec4 aShape;   // shape seed angle -
varying vec2 vQ;
varying vec4 vColor;
varying float vShape;
varying float vSeed;
varying float vPhase;
varying vec2 vCells;

void main() {
  float age = mod(uTime - aStart.w, ${BS.toFixed(1)});
  float life = aVel.w;
  if (age > ${(BS/2).toFixed(1)} || age >= life || life <= 0.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }
  float t = age / 60.0;
  float k = age / life;
  float drag = aAcc.w;
  float carried = drag > 0.0 ? (1.0 - exp(-drag * t)) / drag : t;
  vec3 p = aStart.xyz + aVel.xyz * carried + 0.5 * aAcc.xyz * t * t;
  if (aSwirl.z != 0.0 || aSwirl.w != 0.0) {
    vec2 off = p.xz - aSwirl.xy;
    float radius = max(0.0, length(off) - aSwirl.w * t);
    float turn = atan(off.y, off.x) + aSwirl.z * t;
    p.xz = aSwirl.xy + vec2(cos(turn), sin(turn)) * radius;
  }
  float size = aSize.x * mix(1.0, aSize.y, k);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vec2 corner = position.xy;
  float tall = size;
  if (aSize.w > 0.0) {
    // Stretched along where it is heading on screen, its turn about the axis included.
    vec3 vel = aVel.xyz * exp(-drag * t) + aAcc.xyz * t;
    if (aSwirl.z != 0.0) {
      vec2 fromAxis = p.xz - aSwirl.xy;
      vel.xz += vec2(-fromAxis.y, fromAxis.x) * aSwirl.z;
    }
    vec3 ahead = (modelViewMatrix * vec4(p + vel * 0.02, 1.0)).xyz - mv.xyz;
    vec2 dir = length(ahead.xy) > 1e-5 ? normalize(ahead.xy) : vec2(0.0, 1.0);
    float along = size * (1.0 + aSize.w * length(vel) * 0.1);
    tall = along;
    // Across to the right of the heading, so the quad keeps its winding.
    mv.xy += dir * corner.y * along + vec2(dir.y, -dir.x) * corner.x * size;
  } else {
    float turn = aShape.z + aSize.z * t;
    float c = cos(turn);
    float s = sin(turn);
    mv.xy += vec2(c * corner.x - s * corner.y, s * corner.x + c * corner.y) * size;
  }
  gl_Position = projectionMatrix * mv;
  vQ = corner;
  vColor = mix(aColor, aColor2, k);
  // In quickly, out over the last third; nothing below the floor.
  vColor.a *= smoothstep(0.0, 0.06, k) * (1.0 - smoothstep(0.66, 1.0, k));
  vColor.a *= smoothstep(-0.04, 0.03, p.y);
  vShape = aShape.x;
  vSeed = aShape.y;
  vPhase = t;
  vCells = uPixels > 0.0 ? clamp(floor(2.0 * vec2(size, tall) * uPixels + 0.5), 3.0, 14.0) : vec2(0.0);
}
`,HS=e=>`
uniform sampler2D uNoise;
varying vec2 vQ;
varying vec4 vColor;
varying float vShape;
varying float vSeed;
varying float vPhase;
varying vec2 vCells;
${Jb}
${qb}
void main() {
  float cover = pixelShape(vShape, vQ, vSeed, vPhase, vCells) * vColor.a;
  if (cover <= 0.002) discard;
  ${e?`gl_FragColor = vec4(vColor.rgb * cover, cover);`:`vec3 rgb = vColor.rgb;
  // A flame burns white-hot at its heart.
  if (vShape > 1.5 && vShape < 2.5) {
    rgb = mix(rgb, max(rgb, vec3(1.7, 1.45, 1.0)), smoothstep(0.5, 1.0, cover) * 0.7);
  }
  gl_FragColor = vec4(rgb, cover);`}
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,US=class{lift=null;mesh;capacity;#e;#t;#n;#r;#i={value:0};#a=0;#o=0;#s=0;#c=0;constructor(e,t,n,r,i=0){this.capacity=e,this.#e=new Float32Array(e*zS),this.#t=new Es(this.#e,zS,1);let a=new ss;a.setAttribute(`position`,new Ei(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),a.setIndex([0,1,2,0,2,3]),[`aStart`,`aVel`,`aAcc`,`aSwirl`,`aSize`,`aColor`,`aColor2`,`aShape`].forEach((e,t)=>{a.setAttribute(e,new Wi(this.#t,4,t*4))}),a.instanceCount=0,this.#n=a;let o=t===`multiply`;this.#r=new go({uniforms:{uTime:this.#i,uNoise:{value:n},uPixels:{value:i}},vertexShader:VS,fragmentShader:HS(o),transparent:!0,depthWrite:!1,side:2,blending:o?4:2,premultipliedAlpha:o}),this.mesh=new H(a,this.#r),this.mesh.frustumCulled=!1,this.mesh.renderOrder=r}emit(e,t){let n=this.#a;this.#a=(n+1)%this.capacity,this.#o<this.capacity&&this.#o++,this.#c===0&&(this.#s=n),this.#c=Math.min(this.capacity,this.#c+1);let r=this.#e,i=n*zS,a=t.color2??t.color,o=t.alpha??1;r[i]=t.x,r[i+1]=t.y+(this.lift?.(t.x,t.z)??0),r[i+2]=t.z,r[i+3]=((e+(t.delay??0))%BS+BS)%BS,r[i+4]=t.vx??0,r[i+5]=t.vy??0,r[i+6]=t.vz??0,r[i+7]=t.life,r[i+8]=t.ax??0,r[i+9]=t.ay??0,r[i+10]=t.az??0,r[i+11]=t.drag??0,r[i+12]=t.cx??0,r[i+13]=t.cz??0,r[i+14]=t.swirl??0,r[i+15]=t.pull??0,r[i+16]=t.size,r[i+17]=t.grow??1,r[i+18]=t.spin??0,r[i+19]=t.stretch??0,r[i+20]=t.color.r,r[i+21]=t.color.g,r[i+22]=t.color.b,r[i+23]=o,r[i+24]=a.r,r[i+25]=a.g,r[i+26]=a.b,r[i+27]=t.alpha2??o,r[i+28]=t.shape,r[i+29]=t.seed??0,r[i+30]=t.angle??0,r[i+31]=0}read(e){return this.#e.subarray(e*zS,(e+1)*zS)}get next(){return this.#a}get used(){return this.#o}live(e){let t=(e%BS+BS)%BS,n=this.#e,r=0;for(let e=0;e<this.#o;e++){let i=e*zS,a=((t-(n[i+3]??0))%BS+BS)%BS;a<=32768&&a<(n[i+7]??0)&&r++}return r}update(e){if(this.#i.value=(e%BS+BS)%BS,this.#n.instanceCount=this.#o,this.#c===0)return;let t=this.#t;t.clearUpdateRanges();let n=this.#s+this.#c;n<=this.capacity?t.addUpdateRange(this.#s*zS,this.#c*zS):(t.addUpdateRange(this.#s*zS,(this.capacity-this.#s)*zS),t.addUpdateRange(0,(n-this.capacity)*zS)),t.needsUpdate=!0,this.#c=0}clear(){this.#e.fill(0),this.#a=0,this.#o=0,this.#c=0,this.#t.clearUpdateRanges(),this.#t.needsUpdate=!0,this.#n.instanceCount=0}dispose(){this.#n.dispose(),this.#r.dispose()}},WS=`
uniform float uPixels;
uniform float uDrapeOn;
${of}
attribute vec4 aPos;    // x y z size
attribute vec4 aColor;  // rgb alpha
attribute vec4 aShape;  // shape seed phase angle
attribute vec4 aMode;   // flat wide - -
varying vec2 vQ;
varying vec4 vColor;
varying float vShape;
varying float vSeed;
varying float vPhase;
varying vec2 vCells;
void main() {
  vec2 corner = position.xy;
  float c = cos(aShape.w);
  float s = sin(aShape.w);
  vec2 turned = vec2(c * corner.x * aMode.y - s * corner.y, s * corner.x * aMode.y + c * corner.y);
  vec4 mv;
  if (aMode.x > 0.5) {
    vec3 p = aPos.xyz + vec3(turned.x, 0.0, turned.y) * aPos.w;
    // On a ground of steps: each point up or down by the ground under it against the middle's.
    if (uDrapeOn > 0.5) p.y += drapeHeight(p.xz) - drapeHeight(aPos.xz);
    mv = modelViewMatrix * vec4(p, 1.0);
  } else {
    mv = modelViewMatrix * vec4(aPos.xyz, 1.0);
    mv.xy += turned * aPos.w;
  }
  gl_Position = projectionMatrix * mv;
  vQ = corner;
  vColor = aColor;
  vShape = aShape.x;
  vSeed = aShape.y;
  vPhase = aShape.z;
  vCells = uPixels > 0.0 ? clamp(floor(2.0 * aPos.w * vec2(aMode.y, 1.0) * uPixels + 0.5), 3.0, 512.0) : vec2(0.0);
}
`,GS=e=>`
uniform sampler2D uNoise;
varying vec2 vQ;
varying vec4 vColor;
varying float vShape;
varying float vSeed;
varying float vPhase;
varying vec2 vCells;
${Jb}
${qb}
void main() {
  float cover = pixelShape(vShape, vQ, vSeed, vPhase, vCells) * vColor.a;
  if (cover <= 0.002) discard;
  ${e?`gl_FragColor = vec4(vColor.rgb * cover, cover);`:`gl_FragColor = vec4(vColor.rgb, cover);`}
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,KS=10;function qS(){let e=new ha(new Float32Array(1),1,1,gt,it);return e.needsUpdate=!0,e}var JS=class{lift=null;mesh;#e;#t=0;#n;#r;#i;#a;#o;constructor(e,t,n,r,i=0){this.#e=e;let a=new ss;a.setAttribute(`position`,new Ei(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),a.setIndex([0,1,2,0,2,3]),this.#n=a,this.#r=this.#s(`aPos`,e),this.#i=this.#s(`aColor`,e),this.#a=this.#s(`aShape`,e),this.#o=this.#s(`aMode`,e),a.instanceCount=0;let o=t===`multiply`,s=new go({uniforms:{uNoise:{value:n},uPixels:{value:i},uDrape:{value:qS()},uDrapeBox:{value:new or(0,0,1,1)},uDrapeOn:{value:0}},vertexShader:WS,fragmentShader:GS(o),transparent:!0,depthWrite:!1,side:2,blending:o?4:2,premultipliedAlpha:o});this.mesh=new H(a,s),this.mesh.frustumCulled=!1,this.mesh.renderOrder=r}drape(e){let t=this.mesh.material.uniforms;t.uDrape=e.uDrape,t.uDrapeBox=e.uDrapeBox,t.uDrapeOn.value=1;let n=KS,r=new Float32Array(363);for(let e=0;e<=n;e++)for(let t=0;t<=n;t++){let i=(e*11+t)*3;r[i]=t/n*2-1,r[i+1]=e/n*2-1}let i=[];for(let e=0;e<n;e++)for(let t=0;t<n;t++){let r=e*11+t;i.push(r,r+1,r+n+2,r,r+n+2,r+n+1)}this.#n.setAttribute(`position`,new Ei(r,3)),this.#n.setIndex(i)}#s(e,t){let n=new ga(new Float32Array(t*4),4);return n.setUsage(vn),this.#n.setAttribute(e,n),n}begin(){this.#t=0}add(e){this.#t>=this.#e&&this.#c();let t=this.#t++;this.#r.setXYZW(t,e.x,e.y+(this.lift?.(e.x,e.z)??0),e.z,e.size),this.#i.setXYZW(t,e.r,e.g,e.b,e.alpha),this.#a.setXYZW(t,e.shape,e.seed??0,e.phase??0,e.angle??0),this.#o.setXYZW(t,+!!e.flat,e.wide??1,0,0)}end(){this.#n.instanceCount=this.#t;for(let e of[this.#r,this.#i,this.#a,this.#o])e.clearUpdateRanges(),this.#t>0&&e.addUpdateRange(0,this.#t*4),e.needsUpdate=!0}get count(){return this.#t}#c(){let e=this.#e*2,t=(t,n)=>{let r=new ga(new Float32Array(e*4),4);return r.setUsage(vn),r.array.set(t.array),this.#n.setAttribute(n,r),r};this.#r=t(this.#r,`aPos`),this.#i=t(this.#i,`aColor`),this.#a=t(this.#a,`aShape`),this.#o=t(this.#o,`aMode`),this.#e=e}dispose(){this.#n.dispose(),this.mesh.material.dispose()}},YS=96,XS={sparks:8192,ambience:4096,shade:3072},ZS=class{group=new Rr;noise;sparks;ambience;shade;ground;groundShade;over;bolts;chunks;#e=[];setLift(e){for(let t of[this.sparks,this.ambience,this.shade])t.lift=e;for(let t of[this.ground,this.groundShade,this.over])t.lift=e;this.bolts.lift=e,this.chunks.lift=e}setDrape(e){this.ground.drape(e),this.groundShade.drape(e)}constructor(e=0){this.noise=RS(),this.groundShade=new JS(32,`multiply`,this.noise,-3,e),this.ground=new JS(64,`add`,this.noise,-2,e),this.shade=new US(XS.shade,`multiply`,this.noise,24,e),this.sparks=new US(XS.sparks,`add`,this.noise,25,e),this.ambience=new US(XS.ambience,`add`,this.noise,25,e),this.over=new JS(64,`add`,this.noise,26,e),this.bolts=new hS(27),this.chunks=new NS(e>0),this.group.add(this.groundShade.mesh,this.ground.mesh,this.shade.mesh,this.sparks.mesh,this.ambience.mesh,this.over.mesh,this.bolts.mesh,...this.chunks.meshes)}static rng(e,...t){return _(b([e,...t]))}begin(){this.groundShade.begin(),this.ground.begin(),this.over.begin()}mark(e,t){this.#e.length>=YS&&this.#e.shift(),this.#e.push({...t,birth:e+(t.delay??0)})}end(e,t){for(let t=this.#e.length-1;t>=0;t--){let n=this.#e[t];n&&e-n.birth>=n.life&&this.#e.splice(t,1)}for(let t of this.#e){let n=e-t.birth;if(n<0)continue;let r=n/t.life,i=n/60,a=1-(1-r)*(1-r);(t.layer===`ground`?this.ground:t.layer===`over`?this.over:this.groundShade).add({...t,size:t.size+((t.size2??t.size)-t.size)*a,alpha:(t.alpha+((t.alpha2??0)-t.alpha)*r)*Math.min(1,n/2),angle:(t.angle??0)+(t.spin??0)*i,phase:(t.phase??0)+(t.phaseRate??0)*i})}this.groundShade.end(),this.ground.end(),this.over.end(),this.shade.update(e),this.sparks.update(e),this.ambience.update(e),this.bolts.update(e,t),this.chunks.update(e)}get load(){return{particles:this.sparks.used+this.ambience.used+this.shade.used,bolts:this.bolts.live,chunks:this.chunks.live,quads:this.ground.count+this.groundShade.count+this.over.count}}clear(){this.#e.length=0,this.sparks.clear(),this.ambience.clear(),this.shade.clear(),this.bolts.clear(),this.chunks.clear()}dispose(){this.sparks.dispose(),this.ambience.dispose(),this.shade.dispose(),this.ground.dispose(),this.groundShade.dispose(),this.over.dispose(),this.bolts.dispose(),this.chunks.dispose(),this.noise.dispose()}},QS=.9,$S=3,eC=14,tC=Y(`#ffe08a`,2.4),nC=Y(`#ff9a3a`,1.7),rC=Y(`#d0401a`,.7),iC=Y(`#3a2a24`),aC=Y(`#dff8ff`,1.8),oC=Y(`#5ab8ff`,1),sC=Y(`#9fd8ff`,.3),cC=Y(`#fff4c8`,2.2),lC=Y(`#ffcf6a`,1.2),uC=Y(`#ffd0ef`,2.2),dC=Y(`#ff4fc8`,1.4),fC=Y(`#f0dcff`,1.8),pC=Y(`#a45cff`,1.2),mC=Y(`#e8fff6`,1.5),hC=Y(`#7fe0b0`,1),gC=Y(`#a6e88a`,1),_C=Y(`#6a5644`),vC=Y(`#e6fbff`,2.6),yC=Y(`#4ae0ff`,1.6),bC=Y(`#e8d0ff`,2.2),xC=Y(`#a45cff`,1.4),SC=Y(`#ff5a6a`,1.8),CC=Y(`#ffe0e4`,2);function wC(e,t,n,r){for(let i=1;i<=n;i++){let a=i/n;r({x:e.x+(t.x-e.x)*a,y:e.y+(t.y-e.y)*a,z:e.z+(t.z-e.z)*a},a)}}var TC={"fx.fireball":(e,t,n,r,i,a,o)=>{wC(r,i,2,(r,i)=>{e.sparks.emit(t,{x:r.x+X(n,-.05,.05),y:r.y+X(n,-.04,.04),z:r.z+X(n,-.05,.05),vx:-a*1.6+X(n,-.3,.3),vy:X(n,.5,1),vz:-o*1.6+X(n,-.3,.3),drag:2,delay:i,life:X(n,8,12),size:X(n,.12,.19),grow:.3,color:nC,color2:rC,shape:J.flame,seed:n.float()})}),e.sparks.emit(t,{...i,vx:X(n,-1.5,1.5)-a,vy:X(n,.5,2),vz:X(n,-1.5,1.5)-o,ay:1,drag:1.5,delay:1,life:X(n,16,26),size:.028,color:tC,color2:rC,shape:J.spark,stretch:1}),t%2==0&&e.shade.emit(t,{...r,vy:.5,delay:1,life:30,size:.16,grow:2.2,color:iC,alpha:.3,shape:J.smoke,seed:n.float()})},"fx.ice":(e,t,n,r,i)=>{wC(r,i,2,(r,i)=>{e.sparks.emit(t,{x:r.x+X(n,-.08,.08),y:r.y+X(n,-.08,.08),z:r.z+X(n,-.08,.08),vx:X(n,-.3,.3),vy:X(n,-.2,.3),vz:X(n,-.3,.3),delay:i,life:X(n,10,16),size:X(n,.03,.05),color:aC,color2:oC,shape:n.float()<.5?J.flake:J.mote,spin:8})}),t%2==0&&e.ambience.emit(t,{...r,delay:1,life:26,size:.14,grow:2.4,color:sC,alpha:.6,shape:J.smoke,seed:n.float()})},"fx.blade":(e,t,n,r,i)=>{wC(r,i,3,(r,i)=>{e.sparks.emit(t,{...r,delay:i,life:9,size:X(n,.08,.11),grow:.3,color:cC,color2:lC,shape:J.glow})})},"fx.bolt":(e,t,n,r,i)=>{wC(r,i,2,(r,i)=>{e.sparks.emit(t,{...r,delay:i,life:8,size:X(n,.06,.08),grow:.4,color:uC,color2:dC,shape:J.glow})})},"fx.shard":(e,t,n,r,i)=>{wC(r,i,2,(r,i)=>{e.sparks.emit(t,{x:r.x+X(n,-.08,.08),y:r.y+X(n,-.08,.08),z:r.z+X(n,-.08,.08),vy:X(n,-.4,.2),delay:i,life:X(n,10,14),size:X(n,.035,.055),color:fC,color2:pC,shape:J.flake,spin:10})})}};function EC(e,t,n,r,i){Q(e,t,r,Y(`#ffb050`,1.6),.55+.25*i,9),$(e,t,r,Y(`#ff9a3a`,1.1),i+.4,16);for(let a=0;a<12;a++){let a=Z(n,.25),o=X(n,1.5,3.2)*(.6+.4*i);e.sparks.emit(t,{x:r.x+a.x*.2,y:r.y+a.y*.1,z:r.z+a.z*.2,vx:a.x*o,vy:Math.abs(a.y)*o+X(n,1.2,2.4),vz:a.z*o,drag:2.5,life:X(n,14,24),size:X(n,.2,.32),grow:.4,color:tC,color2:rC,shape:J.flame,seed:n.float()})}for(let i=0;i<16;i++){let i=Z(n,.2),a=X(n,3.5,7);e.sparks.emit(t,{...r,vx:i.x*a,vy:Math.abs(i.y)*a+2,vz:i.z*a,ay:-4,drag:1.8,life:X(n,20,34),size:X(n,.025,.04),color:tC,color2:rC,shape:J.spark,stretch:1.4})}for(let i=0;i<3;i++)e.shade.emit(t,{x:r.x+X(n,-.2,.2),y:r.y,z:r.z+X(n,-.2,.2),vy:X(n,.6,1),drag:1,delay:4+i,life:44,size:.3,grow:2.6,color:iC,alpha:.4,shape:J.smoke,seed:n.float()});e.mark(t,{layer:`groundShade`,x:r.x,y:.012,z:r.z,size:.5+.2*i,alpha:.5,life:100,r:.45,g:.34,b:.28,shape:J.scorch,seed:n.float(),flat:!0})}function DC(e,t,n,r,i,a){Q(e,t,r,Y(`#c8f0ff`,1.4),.5,7),tx(e,t,r,Y(`#bfe8ff`,1),.9,10);for(let o=0;o<6;o++){let o=Z(n,.3),s=X(n,2,4);e.chunks.add(t,{kind:`ice`,...r,vx:(o.x+i*.8)*s,vy:Math.abs(o.y)*s+X(n,1.5,3),vz:(o.z+a*.8)*s,life:X(n,34,50),size:X(n,.06,.13),spin:X(n,8,16),axis:Z(n,0),color:Y(`#cfefff`,1.1)})}for(let o=0;o<14;o++){let o=Z(n,.2),s=X(n,2,5);e.sparks.emit(t,{...r,vx:(o.x+i*.5)*s,vy:o.y*s+1,vz:(o.z+a*.5)*s,ay:-6,drag:2,life:X(n,14,24),size:X(n,.03,.05),color:aC,color2:oC,shape:J.flake,spin:12})}e.ambience.emit(t,{...r,life:34,size:.35,grow:2,color:sC,alpha:.7,shape:J.smoke,seed:n.float()})}function OC(e,t,n,r,i){Q(e,t,r,bC,.45+.35*i,8),$(e,t,r,xC,i,14),tx(e,t,r,Y(`#c8a0ff`,1),i*.9,10);for(let a=0;a<16;a++){let a=Z(n,.15),o=X(n,4,8)*(.5+.3*i);e.sparks.emit(t,{...r,vx:a.x*o,vy:a.y*o+1,vz:a.z*o,drag:3.5,life:X(n,10,18),size:.035,color:bC,color2:xC,shape:J.spark,stretch:2})}for(let i=0;i<4;i++){let i=Z(n,.4),a=X(n,2,4);e.chunks.add(t,{kind:`glow`,...r,vx:i.x*a,vy:Math.abs(i.y)*a+2,vz:i.z*a,life:X(n,30,44),size:X(n,.05,.09),spin:12,axis:Z(n,0),color:Y(`#c8a0ff`,1.6),gravity:-6})}}function kC(e,t,n,r,i,a,o){let s=o===`fx.ice`?aC:o===`fx.blade`?cC:tC,c=o===`fx.ice`?oC:o===`fx.blade`?lC:nC;Q(e,t,r,c,.35,6);for(let o=0;o<6;o++){let o=Z(n,.3);e.sparks.emit(t,{...r,vx:i*2.5+o.x*1.5,vy:o.y*1.5+.5,vz:a*2.5+o.z*1.5,drag:3,life:X(n,8,14),size:.03,color:s,color2:c,shape:J.spark,stretch:1})}}var AC=class{#e=new Map;#t=null;#n=()=>void 0;attach(e){this.#n=e}observe(e,t,n){let r=null,i=new Map;for(let a of t.projectiles){let t=this.#n(a.visual)??``,o=this.#e.get(a.id),s={x:a.x,y:QS,z:a.y};o?TC[t]?.(e,n,ZS.rng(n,40,a.id),{x:o.x,y:QS,z:o.y},s,a.dx,a.dy):a.team===`player`&&t!==`fx.blade`&&(r??={dx:a.dx,dy:a.dy},kC(e,n,ZS.rng(n,41,a.id),s,a.dx,a.dy,t)),i.set(a.id,{x:a.x,y:a.y,gen:t})}return this.#e=i,this.#r(e,t,n),this.#i(e,t,n),r}#r(e,t,n){let r=t.areas[0];if(!r)return;let i=t.player,a=ZS.rng(n,42,r.id),o=2*Math.PI*$S,s=Math.min(1,(r.frames-r.frame)/10);if(!(s<=0)){for(let t=0;t<2;t++){let t=a.float()*Math.PI*2,c=X(a,.6,r.radius);e.sparks.emit(n,{x:i.x+Math.cos(t)*c,y:X(a,.4,1.2),z:i.y+Math.sin(t)*c,cx:i.x,cz:i.y,swirl:o*.8,pull:-.6,life:X(a,8,12),size:.05,color:mC,color2:hC,alpha:s,shape:J.spark,stretch:1.4})}if(n%2==0){let t=a.float()*Math.PI*2,s=X(a,1,r.radius);e.sparks.emit(n,{x:i.x+Math.cos(t)*s,y:X(a,.2,.9),z:i.y+Math.sin(t)*s,vy:X(a,.8,1.6),cx:i.x,cz:i.y,swirl:o*.6,pull:-.8,life:X(a,18,26),size:X(a,.06,.09),color:gC,shape:J.feather,spin:X(a,-10,10),angle:a.float()*6})}if(n%3==0){let t=a.float()*Math.PI*2,s=r.radius*X(a,.7,1);e.shade.emit(n,{x:i.x+Math.cos(t)*s,y:.12,z:i.y+Math.sin(t)*s,cx:i.x,cz:i.y,swirl:o*.3,life:26,size:.22,grow:2,color:_C,alpha:.35,shape:J.smoke,seed:a.float()})}}}#i(e,t,n){let r=t.player,i=r.dash,a=this.#t;if(!i){a&&!a.end&&(a.end={x:r.x,y:r.y,frame:n});return}(!a||a.id!==i.id)&&(this.#t={id:i.id,x0:i.x0,y0:i.y0,dx:i.dx,dy:i.dy,width:i.width,end:null});let o=ZS.rng(n,43,i.id);for(let t=0;t<3;t++){let t=Z(o,.2);e.sparks.emit(n,{x:r.x+X(o,-.2,.2),y:X(o,.4,1.3),z:r.y+X(o,-.2,.2),vx:t.x*2-i.dx*3,vy:t.y*2,vz:t.z*2-i.dy*3,drag:3,life:X(o,8,14),size:.03,color:vC,color2:yC,shape:J.spark,stretch:2})}let s=Math.min(1.6,i.step*2);e.bolts.add(n,{from:new R(r.x-i.dx*s,.5+o.float()*.6,r.y-i.dy*s),to:new R(r.x,.6+o.float()*.6,r.y),life:4,width:.02,glow:yC,core:vC,jag:.3,branches:0,seed:o.u32()})}draw(e,t,n,r){let i=t.areas[0];if(i){let a=jC(i.frame,n-(t.frame-1)),o=Math.min(1,(i.frame+1)/4)*Math.min(1,(i.frames-i.frame)/10);for(let t=0;t<3;t++){let n=i.radius*(.5+.17*t),s=a+t*2*Math.PI/3,c=1.9;for(let i=0;i<9;i++){let a=s-c*i/9,l=1-i/9;e.over.add({x:r.x+Math.cos(a)*n,y:.75+.12*t,z:r.y+Math.sin(a)*n,size:n*c/9*.75,wide:.34,r:mC.r*l,g:mC.g*l,b:mC.b*l,alpha:.85*o*l,shape:J.streak,angle:a,flat:!0})}}e.ground.add({x:r.x,y:.03,z:r.y,size:i.radius,r:hC.r*.5,g:hC.g*.5,b:hC.b*.5,alpha:.25*o,shape:J.shock,flat:!0})}let a=this.#t;if(a){let t=a.end??{x:r.x,y:r.y,frame:n},i=a.end?1-(n-a.end.frame)/eC:1;if(i<=0)this.#t=null;else{let n=t.x-a.x0,r=t.y-a.y0,o=Math.sqrt(n*n+r*r);if(o>.05){let s=Math.atan2(n,r),c={x:(a.x0+t.x)/2,z:(a.y0+t.y)/2};for(let[t,n,r]of[[a.width*.9,yC,.3],[a.width*.22,vC,.55]])e.ground.add({x:c.x,y:.04,z:c.z,size:o/2,wide:t/o,r:n.r,g:n.g,b:n.b,alpha:r*i,shape:J.streak,angle:-s,flat:!0})}}}for(let n of t.lines){let t=n.length*Math.min(1,(n.frame+1)/Math.max(1,n.frames)),i=Math.atan2(n.dx,n.dy);e.over.add({x:r.x+n.dx*t/2,y:.9,z:r.y+n.dy*t/2,size:t/2,wide:n.width/Math.max(.1,t),r:cC.r,g:cC.g,b:cC.b,alpha:.8,shape:J.streak,angle:-i,flat:!0})}}cue(e,t,n){let r=ZS.rng(n,44,Math.round(t.x*100),Math.round(t.y*100)),i={x:t.x,y:.75,z:t.y};switch(t.cue){case`core:fire_hit`:return EC(e,n,r,i,.8),sx.hit(e,n,r,i,t.dx,t.dy,1.2),!0;case`core:ice_hit`:return DC(e,n,r,i,t.dx,t.dy),!0;case`core:explode`:return OC(e,n,r,i,t.strength),!0;case`core:fireball`:case`core:ice_shard`:return!0;case`core:whirlwind`:return $(e,n,i,Y(`#7fe0b0`,.6),2.6,14),tx(e,n,{...i,y:.9},Y(`#c8f8e0`,.8),2.2,10),!0;case`core:pierce`:return Q(e,n,{x:t.x+t.dx*.6,y:.95,z:t.y+t.dy*.6},yC,.3,6),!0;case`core:enemy_shot`:{let i={x:t.x+t.dx*.55,y:.7,z:t.y+t.dy*.55};Q(e,n,i,dC,.4,6),tx(e,n,i,Y(`#ff7ae6`,.9),.6,8);for(let a=0;a<6;a++){let a=Z(r,.3);e.sparks.emit(n,{...i,vx:t.dx*4+a.x*1.5,vy:a.y*1.5,vz:t.dy*4+a.z*1.5,drag:4,life:X(r,6,10),size:.03,color:uC,color2:dC,shape:J.spark,stretch:1.5})}return!0}case`core:enemy_dash`:for(let i=0;i<5;i++){let a=X(r,-.4,.4),o={x:t.x-t.dx*.4-t.dy*a,y:.15,z:t.y-t.dy*.4+t.dx*a,vx:-t.dx*X(r,1,2.5)+X(r,-.5,.5),vy:X(r,.3,.8),vz:-t.dy*X(r,1,2.5)+X(r,-.5,.5),drag:2,life:X(r,26,38),size:.22,grow:2.2,shape:J.smoke,seed:r.float()};e.shade.emit(n,{...o,color:_C,alpha:.45}),i<3&&e.ambience.emit(n,{...o,color:Y(`#c8a070`,.35),alpha:.4})}return!0;case`core:hurt`:{let i={x:t.x,y:.95,z:t.y};Q(e,n,i,SC,.55,7);for(let a=0;a<12;a++){let a=Z(r,.2),o=X(r,3,6);e.sparks.emit(n,{...i,vx:(a.x+t.dx)*o,vy:a.y*o+1,vz:(a.z+t.dy)*o,ay:-6,drag:2.5,life:X(r,10,16),size:.03,color:CC,color2:SC,shape:J.spark,stretch:1.5})}return!0}default:return!1}}reset(){this.#e.clear(),this.#t=null}};function jC(e,t){return 2*Math.PI*$S*(e-1+t)/60}var MC=Y(`#e6fbff`,2.6),NC=Y(`#4ae0ff`,1.6),PC=Y(`#ffb060`,1.6),FC=Y(`#e8c888`,1.1),IC=Y(`#6a5644`),LC=Y(`#dff8ff`,1.8),RC=Y(`#5ab8ff`,1.1),zC=Y(`#9fd8ff`,.3),BC=Y(`#ffe9a0`,2),VC=Y(`#ffc84a`,1.3),HC=Y(`#c8a0ff`,1.8),UC=Y(`#7b52d6`,1.2),WC=Y(`#ffd27a`,2.4),GC=Y(`#ff5a1a`,1.4),KC=Y(`#f0dcff`,1.8),qC=Y(`#a45cff`,1.3),JC=Y(`#f0c8ff`,2.2),YC=Y(`#b040ff`,1.4),XC=Y(`#d8ffa0`,1.8),ZC=Y(`#5ccf2a`,1.1),QC=Y(`#ffb0c0`,2),$C=Y(`#ff2a5a`,1.3),ew=Y(`#f2fcff`,2),tw=Y(`#ffd08a`,2.2),nw=Y(`#ff7a2a`,1.4),rw=Y(`#e8b8ff`,2),iw=Y(`#8a3cff`,1.3),aw=Y(`#a24cff`,.75),ow=Y(`#6e6a7c`),sw=Y(`#f4d0ff`,2.2),cw=Y(`#c040ff`,1.3),lw=Y(`#e08aff`,1.4),uw=Y(`#ffd0e8`,2),dw=Y(`#ff3d9a`,1.3),fw=Y(`#ff8fc4`,1.4);function pw(e){let t=Math.min(1,e.stateFrame/Math.max(1,e.warnFrames)),n=e.state===`windup`?Math.min(1,t*1.5):0,r=n*n*(3-2*n);return{x:e.x-e.aimY*.3,y:2+1*r,z:e.y+e.aimX*.3}}var mw=e=>e.endsWith(`:mortar`)||e.endsWith(`:bombard`)||hw(e),hw=e=>e.endsWith(`:crystal_rain`);function gw(e,t,n,r,i,a,o,s=4){for(let c=0;c<i;c++){let i=Z(n,.2),c=X(n,s*.5,s);e.sparks.emit(t,{...r,vx:i.x*c,vy:Math.abs(i.y)*c+1.5,vz:i.z*c,ay:-6,drag:1.5,life:X(n,12,20),size:.04,color:a,color2:o,shape:J.spark,stretch:1.6})}}var _w=3.2,vw=5,yw=2.4;function bw(e,t,n,r,i,a){Q(e,t,r,a,.45,8);for(let o=0;o<12;o++){let o=Z(n,.2),s=X(n,.7,1.1);e.sparks.emit(t,{x:r.x+o.x*s,y:r.y+o.y*s*.6,z:r.z+o.z*s,vx:-o.x*s*3,vy:-o.y*s*1.8,vz:-o.z*s*3,drag:.5,life:X(n,14,18),size:.04,color:i,color2:a,shape:J.spark,stretch:1.4})}}function xw(e,t,n,r,i,a){for(let a=0;a<2;a++)e.bolts.add(t,{from:new R(r+X(n,-.6,.6),7,i+X(n,-.6,.6)),to:new R(r,.05,i),life:8,delay:a,width:.06,glow:NC,core:MC,jag:.12,branches:2,seed:n.u32()});Q(e,t,{x:r,y:.6,z:i},Y(`#9ff0ff`,2),1.1,8),$(e,t,{x:r,z:i},NC,a+.4,14);for(let a=0;a<18;a++){let a=Z(n,.2),o=X(n,3,7);e.sparks.emit(t,{x:r,y:.2,z:i,vx:a.x*o,vy:Math.abs(a.y)*o+2,vz:a.z*o,ay:-9,drag:2,life:X(n,10,18),size:.03,color:MC,color2:NC,shape:J.spark,stretch:2})}e.mark(t,{layer:`groundShade`,x:r,y:.012,z:i,size:a*.6,alpha:.6,life:90,r:.4,g:.42,b:.5,shape:J.scorch,seed:n.float(),flat:!0})}function Sw(e,t,n,r,i,a){e.mark(t,{layer:`ground`,x:r,y:.03,z:i,size:a*.8,size2:a,alpha:.9,life:40,r:VC.r*.7,g:VC.g*.7,b:VC.b*.7,shape:J.runeRing,spin:2,phaseRate:1,flat:!0}),Q(e,t,{x:r,y:.5,z:i},VC,.7,8);for(let o=0;o<4;o++){let s=o/4*Math.PI*2+n.float()*.4,c=a*.75;for(let n=0;n<6;n++)e.sparks.emit(t,{x:r+Math.cos(s)*c*(1-n*.08),y:.05,z:i+Math.sin(s)*c*(1-n*.08),vy:2.6,drag:3,delay:n,life:22,size:.06,color:BC,color2:VC,shape:J.ring})}}var Cw=class{#e=new Map;observe(e,t,n){let r=new Map(t.enemies.map(e=>[e.id,e])),i=new Set;for(let a of t.hazards??[]){if(!mw(a.affix))continue;if(i.add(a.id),!this.#e.has(a.id)){let e=r.get(a.source);this.#e.set(a.id,{x:e?.x??a.x,y:e?.y??a.y})}let t=this.#t(a,1);if(t&&hw(a.affix)){let r=ZS.rng(n,66,a.id);e.sparks.emit(n,{...t,vx:X(r,-.4,.4),vy:X(r,-.2,.6),vz:X(r,-.4,.4),drag:1,life:X(r,10,16),size:.035,color:sw,color2:cw,shape:r.float()<.4?J.star:J.mote,spin:5})}else if(t&&n%2==0){let r=ZS.rng(n,60,a.id);e.shade.emit(n,{...t,vy:.3,life:24,size:.12,grow:2.2,color:IC,alpha:.4,shape:J.smoke,seed:r.float()}),e.sparks.emit(n,{...t,vx:X(r,-.5,.5),vy:X(r,0,1),vz:X(r,-.5,.5),life:14,size:.03,color:PC,color2:GC,shape:J.mote})}}for(let e of[...this.#e.keys()])i.has(e)||this.#e.delete(e);for(let r of t.enemies){if((r.warnRadius??0)<=0||r.state!==`windup`)continue;let t=Math.min(1,r.stateFrame/Math.max(1,r.warnFrames));if(t<.6&&n%2==1)continue;let i=ZS.rng(n,63,r.id);e.sparks.emit(n,{x:r.x+X(i,-.08,.08),y:.48+.15*t,z:r.y+X(i,-.08,.08),vx:X(i,-1.2,1.2),vy:X(i,1.2,2.6),vz:X(i,-1.2,1.2),ay:-6,drag:1.5,life:X(i,8,14),size:.03,color:tw,color2:nw,shape:J.spark,stretch:1.4})}for(let r of t.enemies){let t=r.calls;if(!t||t.length===0||r.state!==`windup`)continue;let i=ZS.rng(n,64,r.id),a=pw(r),o=i.float()*Math.PI*2;e.sparks.emit(n,{x:a.x+Math.cos(o)*.5,y:a.y+X(i,-.3,.2),z:a.z+Math.sin(o)*.5,vx:-Math.cos(o)*1.6,vy:X(i,.2,.8),vz:-Math.sin(o)*1.6,drag:1,life:14,size:.04,color:rw,color2:iw,shape:J.spark,stretch:1.3});for(let a=0;a+1<t.length;a+=2){let o=X(i,.1,.5),s=i.float()*Math.PI*2;e.ambience.emit(n,{x:(t[a]??r.x)+Math.cos(s)*o,y:.05,z:(t[a+1]??r.y)+Math.sin(s)*o,vy:X(i,.8,1.6),drag:.5,life:X(i,18,26),size:.035,color:rw,color2:iw,shape:i.float()<.3?J.star:J.mote,spin:4})}}for(let r of t.enemies){let t=r.arms??0;if(t===0||r.state!==`windup`||n%2!=0)continue;let i=ZS.rng(n,65,r.id);for(let a=0;a<t;a++){let o=2*Math.PI*a/t,s=r.aimX*Math.cos(o)-r.aimY*Math.sin(o),c=r.aimX*Math.sin(o)+r.aimY*Math.cos(o),l=X(i,.5,Math.max(.6,r.reach?.[a]??r.warnLength));e.sparks.emit(n,{x:r.x+s*l+X(i,-.15,.15),y:.04,z:r.y+c*l+X(i,-.15,.15),vy:X(i,.4,1),drag:1,life:X(i,12,18),size:.035,color:uw,color2:dw,shape:i.float()<.4?J.star:J.mote,spin:5})}}this.#n(e,t,n)}#t(e,t){let n=this.#e.get(e.id);if(!n)return null;let r=Math.min(1,Math.max(0,(e.frame-1+t)/Math.max(1,e.warn))),i=hw(e.affix),a=i?yw:.8;return{x:n.x+(e.x-n.x)*r,y:a+4*(i?vw:_w)*r*(1-r)-(a-.2)*r,z:n.y+(e.y-n.y)*r}}#n(e,t,n){let r=t.player;if(r.dead)return;let i=ZS.rng(n,61);if(r.slow&&r.slow.frames>0&&n%3==0){let t=i.float()*Math.PI*2;e.ambience.emit(n,{x:r.x+Math.cos(t)*.35,y:X(i,.05,.5),z:r.y+Math.sin(t)*.35,vy:X(i,.2,.6),life:22,size:X(i,.03,.05),color:LC,color2:RC,shape:J.flake,spin:6}),n%9==0&&e.ambience.emit(n,{x:r.x,y:.12,z:r.y,life:36,size:.3,grow:1.8,color:zC,alpha:.6,shape:J.smoke,seed:i.float()})}if((r.root??0)>0&&n%4==0){let t=i.float()*Math.PI*2;e.ambience.emit(n,{x:r.x+Math.cos(t)*.5,y:.1,z:r.y+Math.sin(t)*.5,vy:X(i,.6,1.2),life:20,size:.04,color:BC,color2:VC,shape:J.mote})}let a=r.pull;if(a&&a.frames>0){let o=t.enemies.find(e=>e.id===a.source);if(o){let t=o.x-r.x,a=o.y-r.y,s=Math.sqrt(t*t+a*a)||1;for(let o=0;o<2;o++){let o=i.float();e.sparks.emit(n,{x:r.x+t*o+X(i,-.2,.2),y:X(i,.3,1.1),z:r.y+a*o+X(i,-.2,.2),vx:t/s*6,vz:a/s*6,life:10,size:.05,color:HC,color2:UC,shape:J.spark,stretch:2})}}}}draw(e,t,n,r){let i=n-(t.frame-1);for(let r of t.hazards??[]){if(!mw(r.affix))continue;let t=this.#t(r,i);t&&(hw(r.affix)?(e.over.add({...t,size:.32,r:cw.r,g:cw.g,b:cw.b,alpha:.8,shape:J.glow}),e.over.add({...t,size:.16,r:sw.r,g:sw.g,b:sw.b,alpha:1,shape:J.flake,angle:n*.2+r.id})):(e.over.add({...t,size:.2,r:PC.r,g:PC.g,b:PC.b,alpha:.9,shape:J.glow}),e.over.add({...t,size:.09,r:WC.r,g:WC.g,b:WC.b,alpha:1,shape:J.mote})))}for(let r of t.enemies){let t=r.calls;if(!t||t.length===0||r.state!==`windup`)continue;let a=Math.min(1,Math.max(0,(r.stateFrame-1+i)/Math.max(1,r.warnFrames)));for(let i=0;i+1<t.length;i+=2)e.ground.add({x:t[i]??r.x,y:.03,z:t[i+1]??r.y,size:.55*a,r:aw.r*.6,g:aw.g*.6,b:aw.b*.6,alpha:.6*a,shape:J.disc,flat:!0}),e.ground.add({x:t[i]??r.x,y:.03,z:t[i+1]??r.y,size:.35+.35*a,r:aw.r,g:aw.g,b:aw.b,alpha:.5+.4*a,shape:J.runeRing,angle:n*.05*(i%4==0?1:-1),phase:n/60,flat:!0});e.over.add({...pw(r),size:.3+.2*a,r:rw.r*.5,g:rw.g*.5,b:rw.b*.5,alpha:.5+.4*a,shape:J.glow})}let a=t.player;if(a.dead)return;if(a.slow&&a.slow.frames>0){let t=Math.min(1,a.slow.frames/20);e.ground.add({x:r.x,y:.03,z:r.y,size:.55,r:RC.r*.5,g:RC.g*.5,b:RC.b*.5,alpha:.55*t,shape:J.ripples,phase:n/60,flat:!0})}let o=a.root??0;if(o>0){let t=Math.min(1,o/12);e.ground.add({x:r.x,y:.03,z:r.y,size:.6,r:VC.r*.7,g:VC.g*.7,b:VC.b*.7,alpha:.8*t,shape:J.runeRing,angle:n*.04,phase:n/60,flat:!0});for(let i=0;i<4;i++){let a=i/4*Math.PI*2+n*.01;e.over.add({x:r.x+Math.cos(a)*.45,y:.45,z:r.y+Math.sin(a)*.45,size:.42,wide:.14,r:BC.r,g:BC.g,b:BC.b,alpha:.75*t,shape:J.streak,angle:i%2==0?.35:-.35})}}let s=a.freeze??0;if(s>0){let t=Math.min(1,s/12);e.ground.add({x:r.x,y:.03,z:r.y,size:.7,r:RC.r*.6,g:RC.g*.6,b:RC.b*.6,alpha:.8*t,shape:J.ripples,phase:0,flat:!0});for(let n=0;n<6;n++){let i=n/6*Math.PI*2;e.over.add({x:r.x+Math.cos(i)*.38,y:.55+n%2*.25,z:r.y+Math.sin(i)*.38,size:.5,wide:.22,r:ew.r*.5,g:ew.g*.5,b:ew.b*.5,alpha:.55*t,shape:J.streak,angle:n%2==0?.2:-.2})}}a.pull&&a.pull.frames>0&&e.ground.add({x:r.x,y:.03,z:r.y,size:.6,r:UC.r*.7,g:UC.g*.7,b:UC.b*.7,alpha:.6,shape:J.shock,flat:!0})}cue(e,t,n){let r=ZS.rng(n,62,Math.round(t.x*100),Math.round(t.y*100)),i={x:t.x,y:.8,z:t.y},a={x:t.x,y:.4,z:t.y},o=t.strength;switch(t.cue.slice(t.cue.indexOf(`:`)+1)){case`elite_thunder`:return bw(e,n,r,i,MC,NC),e.bolts.add(n,{from:new R(t.x,1.3,t.y),to:new R(t.x+X(r,-.3,.3),2.6,t.y+X(r,-.3,.3)),life:8,width:.03,glow:NC,core:MC,jag:.25,branches:1,seed:r.u32()}),!0;case`thunder_strike`:return xw(e,n,r,t.x,t.y,o),!0;case`elite_mortar`:{let i=Math.hypot(t.dx,t.dy)||1,a={x:t.x+t.dx/i*.5,y:1,z:t.y+t.dy/i*.5};Q(e,n,a,PC,.45,7);for(let t=0;t<3;t++)e.shade.emit(n,{...a,vx:X(r,-.4,.4),vy:X(r,.6,1.2),vz:X(r,-.4,.4),drag:1.2,life:34,size:.2,grow:2.4,color:IC,alpha:.45,shape:J.smoke,seed:r.float()});return!0}case`mortar_blast`:return Ax.hit(e,n,r,a,0,0,1.6),Q(e,n,a,PC,.7,8),$(e,n,a,FC,o+.3,16),!0;case`elite_frost`:return bw(e,n,r,i,LC,RC),$(e,n,a,RC,2,18),!0;case`frost_burst`:DC(e,n,r,a,0,0),$(e,n,a,RC,o+.2,16);for(let i=0;i<5;i++){let a=i/5*Math.PI*2+r.float();e.chunks.add(n,{kind:`ice`,x:t.x+Math.cos(a)*o*.4,y:.05,z:t.y+Math.sin(a)*o*.4,vx:Math.cos(a)*.8,vy:X(r,3,4.5),vz:Math.sin(a)*.8,life:X(r,34,46),size:X(r,.1,.16),spin:6,axis:Z(r,0),color:Y(`#cfefff`,1.1)})}return!0;case`elite_jailer`:return bw(e,n,r,i,BC,VC),!0;case`jailer_bind`:return Sw(e,n,r,t.x,t.y,o),!0;case`elite_vortex`:return bw(e,n,r,i,HC,UC),!0;case`vortex_pull`:for(let i=0;i<16;i++){let i=X(r,-1,1)*3;e.sparks.emit(n,{x:t.x+t.dx*i+X(r,-.3,.3),y:X(r,.3,1.2),z:t.y+t.dy*i+X(r,-.3,.3),vx:-t.dx*X(r,4,8),vz:-t.dy*X(r,4,8),drag:1,life:X(r,10,16),size:.05,color:HC,color2:UC,shape:J.spark,stretch:2.5})}return!0;case`elite_molten`:for(let i=0;i<5;i++){let i=Z(r,.5);e.sparks.emit(n,{x:t.x+i.x*.4,y:.15,z:t.y+i.z*.4,vx:i.x,vy:X(r,1,2),vz:i.z,ay:1,drag:1.5,life:X(r,16,24),size:.03,color:WC,color2:GC,shape:J.mote})}return!0;case`molten_burst`:EC(e,n,r,a,o);for(let t=0;t<8;t++){let t=Z(r,.2),i=X(r,2,4);e.sparks.emit(n,{...a,vx:t.x*i,vy:Math.abs(t.y)*i+2.5,vz:t.z*i,ay:-9.8,life:X(r,20,30),size:.05,color:WC,color2:GC,shape:J.drop})}return!0;case`block`:{let i={x:t.x+t.dx*.6,y:.95,z:t.y+t.dy*.6};Q(e,n,i,BC,.35,5);for(let a=0;a<9;a++){let a=Z(r,.35),o=X(r,2.5,5);e.sparks.emit(n,{...i,vx:(t.dx+a.x)*o,vy:Math.abs(a.y)*o+1,vz:(t.dy+a.z)*o,ay:-9,drag:1.2,life:X(r,8,14),size:.03,color:BC,color2:PC,shape:J.spark,stretch:1.8})}return!0}case`shield_bash`:for(let i=0;i<5;i++){let i=X(r,-.45,.45);e.shade.emit(n,{x:t.x-t.dx*.5-t.dy*i,y:.15,z:t.y-t.dy*.5+t.dx*i,vx:-t.dx*X(r,1,2.2)+X(r,-.5,.5),vy:X(r,.3,.8),vz:-t.dy*X(r,1,2.2)+X(r,-.5,.5),drag:2,life:X(r,26,38),size:.24,grow:2.2,color:IC,alpha:.45,shape:J.smoke,seed:r.float()})}return!0;case`fuse`:return Q(e,n,{x:t.x,y:.45,z:t.y},tw,.3,6),!0;case`bomber_burst`:EC(e,n,r,a,o*.6),$(e,n,a,nw,o,16),Q(e,n,i,tw,.9,9);for(let i=0;i<7;i++){let a=i/7*Math.PI*2+r.float();e.chunks.add(n,{kind:`glow`,x:t.x+Math.cos(a)*.2,y:.3,z:t.y+Math.sin(a)*.2,vx:Math.cos(a)*X(r,2,3.5),vy:X(r,3,5.5),vz:Math.sin(a)*X(r,2,3.5),life:X(r,30,44),size:X(r,.05,.1),spin:12,axis:Z(r,0),color:nw,gravity:-9})}return!0;case`summon`:return Q(e,n,{x:t.x,y:2.2,z:t.y},iw,.5,8),!0;case`summon_rise`:{let i={x:t.x,y:.2,z:t.y};Q(e,n,i,rw,.6,8),$(e,n,i,iw,1,12),Ax.hit(e,n,r,i,0,0,1);for(let i=0;i<6;i++){let a=i/6*Math.PI*2+r.float();e.chunks.add(n,{kind:`rock`,x:t.x+Math.cos(a)*.25,y:.1,z:t.y+Math.sin(a)*.25,vx:Math.cos(a)*X(r,1,2),vy:X(r,2.5,4),vz:Math.sin(a)*X(r,1,2),life:X(r,30,44),size:X(r,.06,.12),spin:8,axis:Z(r,0),color:ow})}return e.mark(n,{layer:`groundShade`,x:t.x,y:.012,z:t.y,size:.5,alpha:.7,life:90,r:.35,g:.32,b:.4,shape:J.cracks,seed:r.float(),flat:!0}),!0}case`rampage_start`:{let i={x:t.x,y:2,z:t.y};Q(e,n,i,sw,2,14),tx(e,n,i,cw,3.4,16),$(e,n,{x:t.x,z:t.y},cw,6,22);for(let i=0;i<10;i++){let i=Z(r,.3),a=X(r,3,6);e.chunks.add(n,{kind:`glow`,x:t.x,y:1.6,z:t.y,vx:i.x*a,vy:Math.abs(i.y)*a+2,vz:i.z*a,life:X(r,34,48),size:X(r,.1,.18),spin:10,axis:Z(r,0),color:lw,gravity:-9.8})}return!0}case`rampage_volley`:return Q(e,n,{x:t.x,y:2.4,z:t.y},cw,.9,8),gw(e,n,r,{x:t.x,y:2.4,z:t.y},8,sw,cw,4),!0;case`rampage_strike`:{let i={x:t.x,y:.3,z:t.y};Q(e,n,i,sw,.8,8),$(e,n,i,cw,o+.3,14);for(let i=0;i<6;i++){let a=i/6*Math.PI*2+r.float();e.chunks.add(n,{kind:`glow`,x:t.x+Math.cos(a)*.2,y:.2,z:t.y+Math.sin(a)*.2,vx:Math.cos(a)*X(r,1.5,3),vy:X(r,2.5,4.5),vz:Math.sin(a)*X(r,1.5,3),life:X(r,26,38),size:X(r,.07,.13),spin:10,axis:Z(r,0),color:lw,gravity:-9.8})}return gw(e,n,r,i,8,sw,cw,3),!0}case`rampage_escape`:Ax.hit(e,n,r,{x:t.x,y:.5,z:t.y},0,0,2),$(e,n,{x:t.x,z:t.y},FC,2.4,20);for(let i=0;i<10;i++){let a=i/10*Math.PI*2+r.float()*.5;e.shade.emit(n,{x:t.x+Math.cos(a)*.9,y:.3,z:t.y+Math.sin(a)*.9,vx:Math.cos(a)*.8,vy:X(r,.6,1.4),vz:Math.sin(a)*.8,drag:1,life:X(r,40,60),size:.4,grow:2.4,color:IC,alpha:.5,shape:J.smoke,seed:r.float()})}return!0;case`thorn_burst`:return Q(e,n,{x:t.x,y:.5,z:t.y},dw,.7,8),$(e,n,{x:t.x,z:t.y},dw,1.4,12),!0;case`spike_line`:{let i=t.strength,a=Math.max(2,Math.round(i/.45));for(let o=0;o<a;o++){let s=.45+(i-.45)*(o/Math.max(1,a-1)),c=t.x+t.dx*s+X(r,-.08,.08),l=t.y+t.dy*s+X(r,-.08,.08);e.chunks.add(n,{kind:`glow`,x:c,y:.05,z:l,vx:t.dx*.3,vy:X(r,3.2,4.4),vz:t.dy*.3,delay:o,life:X(r,24,32),size:X(r,.1,.16),spin:6,axis:Z(r,0),color:fw,gravity:-12}),e.sparks.emit(n,{x:c,y:.1,z:l,vx:X(r,-.8,.8),vy:X(r,1,2.2),vz:X(r,-.8,.8),ay:-6,drag:1.2,delay:o,life:X(r,10,16),size:.03,color:uw,color2:dw,shape:J.spark,stretch:1.5}),o%2==0&&e.shade.emit(n,{x:c,y:.15,z:l,vy:X(r,.3,.7),drag:1.2,delay:o,life:26,size:.18,grow:2,color:IC,alpha:.4,shape:J.smoke,seed:r.float()})}let o=i/2;return e.mark(n,{layer:`groundShade`,x:t.x+t.dx*o,y:.012,z:t.y+t.dy*o,size:o,wide:.3/o,alpha:.6,life:70,r:.4,g:.35,b:.4,shape:J.streak,angle:Math.atan2(-t.dx,t.dy),flat:!0}),!0}case`crystal_shard`:case`shard_burst`:OC(e,n,r,a,o);for(let i=0;i<5;i++){let a=i/5*Math.PI*2+r.float();e.chunks.add(n,{kind:`glow`,x:t.x+Math.cos(a)*.3,y:.05,z:t.y+Math.sin(a)*.3,vx:Math.cos(a)*1.2,vy:X(r,3,5),vz:Math.sin(a)*1.2,life:X(r,30,44),size:X(r,.06,.11),spin:10,axis:Z(r,0),color:KC,gravity:-8})}return!0;case`elite_arcane`:return bw(e,n,r,i,JC,YC),!0;case`arcane_beam`:return Q(e,n,i,JC,.5,6),gw(e,n,r,i,8,JC,YC),!0;case`elite_frozen`:return bw(e,n,r,i,ew,RC),$(e,n,a,RC,2.4,18),!0;case`frozen_burst`:DC(e,n,r,a,0,0),Q(e,n,a,ew,1.1,9),$(e,n,a,RC,o+.3,18);for(let i=0;i<7;i++){let a=i/7*Math.PI*2+r.float();e.chunks.add(n,{kind:`ice`,x:t.x+Math.cos(a)*o*.5,y:.05,z:t.y+Math.sin(a)*o*.5,vx:Math.cos(a)*1.2,vy:X(r,3.5,5),vz:Math.sin(a)*1.2,life:X(r,36,50),size:X(r,.12,.2),spin:6,axis:Z(r,0),color:Y(`#dff6ff`,1.2)})}return!0;case`elite_waller`:return bw(e,n,r,i,PC,FC),!0;case`wall_rise`:Ax.hit(e,n,r,a,0,0,1.6),Q(e,n,a,FC,.8,8);for(let i=-3;i<=3;i++)e.shade.emit(n,{x:t.x+t.dx*i,y:.3,z:t.y+t.dy*i,vy:X(r,.5,1),drag:1.2,life:30,size:.3,grow:2,color:IC,alpha:.5,shape:J.smoke,seed:r.float()});return!0;case`chain_ignite`:return!0;case`chain_burn`:return gw(e,n,r,i,6,WC,GC,3),!0;case`elite_bubble`:return Q(e,n,{x:t.x,y:1,z:t.y},BC,1.2,10),tx(e,n,{x:t.x,y:1,z:t.y},VC,1.6,12),!0;case`elite_reflect`:return Q(e,n,{x:t.x,y:1,z:t.y},QC,1.1,10),tx(e,n,{x:t.x,y:1,z:t.y},$C,1.6,12),!0;case`elite_illusion`:return Q(e,n,i,JC,1.2,10),OC(e,n,r,i,1.4),!0;case`elite_blink`:return bw(e,n,r,i,HC,UC),!0;case`blink_land`:return Q(e,n,i,HC,1.2,9),$(e,n,a,UC,o+.4,16),gw(e,n,r,a,14,HC,UC,5),!0;case`elite_plague`:return bw(e,n,r,i,XC,ZC),!0;case`plague_pool`:for(let i=0;i<6;i++){let i=Z(r,.8);e.shade.emit(n,{x:t.x+i.x*.6,y:.2,z:t.y+i.z*.6,vy:X(r,.3,.8),drag:1,life:34,size:.25,grow:2,color:Y(`#2a5a1a`),alpha:.4,shape:J.smoke,seed:r.float()})}return gw(e,n,r,a,6,XC,ZC,2.5),!0;case`elite_lattice`:return bw(e,n,r,i,KC,qC),!0;case`lattice_spikes`:for(let i=-4;i<=4;i++)e.chunks.add(n,{kind:`glow`,x:t.x+t.dx*i,y:.05,z:t.y+t.dy*i,vx:0,vy:X(r,3,4.5),vz:0,life:X(r,26,36),size:X(r,.08,.14),spin:8,axis:Z(r,0),color:KC,gravity:-9.8});return!0;case`boss_slam`:{let i={x:t.x,y:.3,z:t.y};Q(e,n,{...i,y:.8},Y(`#e8d0ff`,2),1.4,10),$(e,n,i,qC,o+.6,18),$(e,n,i,FC,o*.8,24,3),Ax.hit(e,n,r,i,0,0,2);for(let i=0;i<8;i++){let a=i/8*Math.PI*2+r.float()*.3;e.chunks.add(n,{kind:`glow`,x:t.x+Math.cos(a)*o*.8,y:.05,z:t.y+Math.sin(a)*o*.8,vx:Math.cos(a)*1.5,vy:X(r,3.5,5.5),vz:Math.sin(a)*1.5,life:X(r,34,48),size:X(r,.1,.18),spin:8,axis:Z(r,0),color:KC,gravity:-9.8})}return e.mark(n,{layer:`groundShade`,x:t.x,y:.015,z:t.y,size:o*.9,size2:o,alpha:.95,life:120,r:.35,g:.3,b:.4,shape:J.cracks,seed:r.float(),flat:!0}),!0}case`boss_ring`:return Q(e,n,{x:t.x,y:1.6,z:t.y},HC,1,9),tx(e,n,{x:t.x,y:1.6,z:t.y},qC,2.4,12),$(e,n,{x:t.x,z:t.y},qC,3,16),!0;case`boss_phase`:return Q(e,n,{x:t.x,y:1.5,z:t.y},HC,2,16),tx(e,n,{x:t.x,y:1.4,z:t.y},UC,4,18),$(e,n,{x:t.x,z:t.y},qC,4.5,24),OC(e,n,r,{x:t.x,y:1.4,z:t.y},2.5),!0;case`boss_break`:Q(e,n,{x:t.x,y:1.6,z:t.y},VC,1.4,12),tx(e,n,{x:t.x,y:1.6,z:t.y},BC,2.6,12);for(let i=0;i<10;i++){let i=Z(r,.3),a=X(r,2.5,5);e.chunks.add(n,{kind:`glow`,x:t.x,y:1.7,z:t.y,vx:i.x*a,vy:Math.abs(i.y)*a+2,vz:i.z*a,life:X(r,36,50),size:X(r,.08,.15),spin:12,axis:Z(r,0),color:KC,gravity:-9.8})}return!0;default:return!1}}reset(){this.#e.clear()}},ww=`core:elite_thunder.core:thunder_strike.core:elite_mortar.core:mortar_blast.core:elite_frost.core:frost_burst.core:elite_jailer.core:jailer_bind.core:elite_vortex.core:vortex_pull.core:elite_molten.core:molten_burst.core:crystal_shard.core:shard_burst.core:elite_arcane.core:arcane_beam.core:elite_frozen.core:frozen_burst.core:elite_waller.core:wall_rise.core:chain_ignite.core:chain_burn.core:elite_bubble.core:elite_reflect.core:elite_illusion.core:elite_blink.core:blink_land.core:elite_plague.core:plague_pool.core:elite_lattice.core:lattice_spikes.core:boss_slam.core:boss_ring.core:boss_phase.core:boss_break.core:block.core:shield_bash.core:fuse.core:bomber_burst.core:summon.core:summon_rise.core:thorn_burst.core:spike_line.core:rampage_start.core:rampage_volley.core:rampage_strike.core:rampage_escape`.split(`.`),Tw=Y(`#f0c8ff`,2.2),Ew=Y(`#b040ff`,1.4),Dw=Y(`#fff0ff`,2.6),Ow=Y(`#9a3cff`,.7),kw=Y(`#ffe0ff`,1.8),Aw=Y(`#d070ff`,.8),jw=Y(`#ffffff`,1.3),Mw=Y(`#b040ff`,.55),Nw=Y(`#c65cff`,1.15),Pw=Y(`#ffd8ff`,1.5),Fw=Y(`#ffe08a`,2.4),Iw=Y(`#ff5a1a`,1.4),Lw=Y(`#ff9a3a`,1.7),Rw=Y(`#d0401a`,.7),zw=Y(`#ff8a30`,1.25),Bw=Y(`#6a5644`),Vw=Y(`#3a1c14`),Hw=Y(`#b8401a`),Uw=Y(`#ff8a2a`,.95),Ww=Y(`#b040ff`,.84),Gw=Y(`#ff5a1a`,.7),Kw=1.15,qw=.34,Jw=4,Yw=.42,Xw=.09,Zw=1.0499999999999998,Qw=.75,$w=.45,eT=.2,tT=.16,nT=.2,rT=.12,iT=.045,aT=640,oT=10,sT=10,cT=new Vn().setFromUnitVectors(new R(1,1,1).normalize(),new R(0,1,0)),lT=new R(0,1,0),uT=new R(1,0,0),dT=new Vn,fT=new Vn,pT=new Vn,mT=new R,hT=new R,gT=new R,_T=new z,vT=new R,yT=new R,bT=new B;function xT(e,t){let n=-(e.turn??0)*t*Math.PI/180,r=Math.cos(n),i=Math.sin(n);return{x:e.dx*r-e.dy*i,z:e.dx*i+e.dy*r}}var ST=e=>Zw+-.2999999999999998*e;function CT(e,t){return{a:{x:e.x,y:e.lift+Math.max(.35,e.height*$w),z:e.z},b:{x:t.x,y:t.lift+Math.max(.35,t.height*$w),z:t.z}}}function wT(e,t){let{a:n,b:r}=e;return{x:n.x+(r.x-n.x)*t,y:n.y+(r.y-n.y)*t-eT*4*t*(1-t),z:n.z+(r.z-n.z)*t}}function TT(e,t,n,r,i,a,o,s){let c=n.x-t.x,l=n.z-t.z,u=Math.sqrt(c*c+l*l);if(u<.05)return;let d=Math.max(1,Math.round(u)),f=u/d*.75,p=Math.atan2(-c,l);for(let n=0;n<d;n++){let u=(n+.5)/d;e.ground.add({x:t.x+c*u,y:.03,z:t.z+l*u,size:f,wide:r/(.31*f),r:i.r,g:i.g,b:i.b,alpha:a*(.85+.15*Math.sin(o*.5+n*1.7+s)),shape:J.streak,angle:p,flat:!0})}}function ET(e,t,n){let r=new wa(t?new no(.62,0):new qa(1,1,1),new V,n);return r.instanceMatrix.setUsage(vn),r.setColorAt(0,new B(1,1,1)),r.count=0,r.frustumCulled=!1,e?.add(r),r}function DT(e,t){e.count=t,e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0)}var OT=class{#e=new Map;#t=new Set;#n;#r;constructor(e=null,t=!1){this.#n=ET(e,!t,60),this.#r=ET(e,!1,aT)}observe(e,t,n,r){let i=new Set,a=new Set,o=null;for(let s of t.hazards??[])if(s.form===`sweep`)i.add(s.id),this.#e.has(s.id)||jT(e,n,s),this.#e.set(s.id,{x:s.x,z:s.y}),NT(e,n,s);else if(s.form===`tether`&&s.ends){o??=new Map(t.enemies.map(e=>[e.id,e]));let i=o.get(s.ends[0]),c=o.get(s.ends[1]);if(!i||!c)continue;let l=CT(r(i),r(c)),u=s.frame>=s.warn;u&&(a.add(s.id),this.#t.has(s.id)||PT(e,n,s,l)),FT(e,n,s,l,u)}for(let[t,r]of this.#e)i.has(t)||(MT(e,n,t,r),this.#e.delete(t));this.#t=a}draw(e,t,n,r,i){let a=n-(t.frame-1),o=0,s=0,c=null;for(let l of t.hazards??[]){if(l.form===`sweep`){o<60&&(o=this.#i(e,l,n,a,o));continue}if(l.form!==`tether`||!l.ends)continue;c??=new Map(t.enemies.map(e=>[e.id,e]));let u=c.get(l.ends[0]),d=c.get(l.ends[1]);if(!u||!d)continue;let f=r.get(u.id)??i(u),p=r.get(d.id)??i(d);s=this.#a(e,l,CT(f,p),n,s)}DT(this.#n,o),DT(this.#r,s)}#i(e,t,n,r,i){let a=t.frame>=t.warn,o=t.frame-1+r,s=t.linger??0,c=Math.min(1,Math.max(0,o/oT)),l=t.warn+s-o,u=a?Math.min(1,Math.max(0,l/sT)):1,d=a?1:Math.min(1,Math.max(0,o/Math.max(1,t.warn))),f=Math.sign(t.turn??1)||1,p=Kw+.06*Math.sin(n*.08+t.id),m=e.over.lift?.(t.x,t.y)??0,h=c*(.6+.4*u);dT.setFromAxisAngle(lT,n*(a?.09:.03+.04*d)*f),fT.copy(dT).multiply(cT),mT.set(t.x,p+m,t.y),_T.compose(mT,fT,hT.setScalar(qw*h)),this.#n.setMatrixAt(i,_T),this.#n.setColorAt(i,Nw);let g=i+1;for(let e=0;e<Jw;e++){let r=n*.07*f+e*Math.PI*2/Jw;mT.set(t.x+Math.cos(r)*Yw*h,p+m+(e%2==0?.1:-.1),t.y+Math.sin(r)*Yw*h),dT.setFromAxisAngle(lT,-r*2),_T.compose(mT,dT,hT.setScalar(Xw*h)),this.#n.setMatrixAt(g,_T),this.#n.setColorAt(g,Pw),g++}if(e.over.add({x:t.x,y:p,z:t.y,size:(.42+.05*Math.sin(n*.2+t.id))*c,r:Mw.r,g:Mw.g,b:Mw.b,alpha:(.4+.3*d)*u,shape:J.glow}),e.ground.add({x:t.x,y:.03,z:t.y,size:(.45+.45*d)*c,r:Ew.r*.7,g:Ew.g*.7,b:Ew.b*.7,alpha:.85*u,shape:J.runeRing,angle:n*.03*f,phase:n/60,flat:!0}),!a||u<=0)return g;let _=xT(t,1-r),v=t.length,y=1+.12*Math.sin(n*.6+t.id);vT.set(t.x+_.x*.18,p-.1,t.y+_.z*.18),yT.set(t.x+_.x*v,Qw,t.y+_.z*v),e.bolts.hold({from:vT,to:yT,width:.065*y,glow:Ow,core:kw,seed:t.id,alpha:u});for(let n=0;n<2;n++)e.bolts.hold({from:vT,to:yT,width:.016,glow:Aw,core:jw,jag:.035,seed:t.id*7+n+1,alpha:.75*u});return TT(e,{x:t.x,z:t.y},{x:yT.x,z:yT.z},t.radius,Ww,.85*u,n,t.id),e.over.add({x:yT.x,y:Qw,z:yT.z,size:.2*y,r:Tw.r*.5,g:Tw.g*.5,b:Tw.b*.5,alpha:.8*u,shape:J.glow}),e.over.add({x:vT.x,y:p-.1,z:vT.z,size:.22*y,r:Dw.r*.6,g:Dw.g*.6,b:Dw.b*.6,alpha:.6*u,shape:J.star,angle:n*.05}),g}#a(e,t,n,r,i){let a=t.frame>=t.warn,o=a?1:Math.min(1,t.frame/Math.max(1,t.warn)),s=n.b.x-n.a.x,c=n.b.z-n.a.z,l=Math.sqrt(s*s+c*c),u=Math.min(aT-i,Math.max(2,Math.round(l/tT))),d=e.over.lift;a?bT.copy(Uw):o<.6?bT.copy(Vw).lerp(Hw,o/.6):bT.copy(Hw).lerp(Uw,(o-.6)/.4*.5);let f=i;for(let e=0;e<u;e++){let i=(e+.5)/u,o=wT(n,i),s=wT(n,Math.min(1,i+.01)),c=wT(n,Math.max(0,i-.01));gT.set(s.x-c.x,s.y-c.y,s.z-c.z),gT.lengthSq()<1e-10&&gT.set(1,0,0),fT.setFromUnitVectors(uT,gT.normalize()),pT.setFromAxisAngle(uT,e%2==0?0:Math.PI/2),fT.multiply(pT),mT.set(o.x,o.y+(d?.(o.x,o.z)??0),o.z),_T.compose(mT,fT,hT.set(nT,rT,iT)),this.#r.setMatrixAt(f,_T),this.#r.setColorAt(f,a?AT(.85+.3*Math.sin(r*.7+e*1.3+t.id)):bT),f++}if(!a)return f;let p=Math.max(2,Math.round(l/(tT*3)));for(let i=0;i<p;i++){let a=wT(n,(i+.5)/p);e.over.add({x:a.x,y:a.y+.16,z:a.z,size:.22+.04*Math.sin(r*.3+i*2.1+t.id),r:zw.r,g:zw.g,b:zw.b,alpha:.85,shape:J.flame,seed:(i*.37+t.id*.11)%1,phase:r/60+i*.7})}TT(e,n.a,n.b,t.radius,Gw,.75,r,t.id);for(let i of[n.a,n.b])e.over.add({...i,size:.2+.04*Math.sin(r*.4+t.id),r:Lw.r*.6,g:Lw.g*.6,b:Lw.b*.6,alpha:.6,shape:J.glow});return f}get drawn(){return{crystals:this.#n.count,links:this.#r.count}}reset(){this.#e.clear(),this.#t=new Set,this.#n.count=0,this.#r.count=0}dispose(){for(let e of[this.#n,this.#r])e.geometry.dispose(),e.material.dispose()}},kT=new B;function AT(e){return kT.copy(Uw).multiplyScalar(e)}function jT(e,t,n){let r=ZS.rng(t,81,n.id);Q(e,t,{x:n.x,y:Kw,z:n.y},Ew,.7,10),$(e,t,{x:n.x,z:n.y},Ew,1.2,16);for(let i=0;i<8;i++){let i=Z(r,.2);e.sparks.emit(t,{x:n.x+i.x*.25,y:.1,z:n.y+i.z*.25,vx:i.x*.6,vy:X(r,2,3.5),vz:i.z*.6,drag:2.5,life:X(r,14,20),size:.04,color:Tw,color2:Ew,shape:J.star,spin:6})}}function MT(e,t,n,r){let i=ZS.rng(t,82,n),a={x:r.x,y:Kw,z:r.z};Q(e,t,a,Tw,.6,8),tx(e,t,a,Ew,1.2,10);for(let n=0;n<14;n++){let n=Z(i,0),r=X(i,1.5,3.5);e.sparks.emit(t,{...a,vx:n.x*r,vy:n.y*r+.5,vz:n.z*r,drag:2,life:X(i,14,22),size:.04,color:Dw,color2:Ew,shape:J.mote})}}function NT(e,t,n){let r=ZS.rng(t,80,n.id),i={x:n.x,y:Kw,z:n.y};if(n.frame<n.warn){for(let n=0;n<2;n++){let n=Z(r,.3),a=X(r,.8,1.2);e.sparks.emit(t,{x:i.x+n.x*a,y:i.y+n.y*a*.6,z:i.z+n.z*a,vx:-n.x*a*4,vy:-n.y*a*2.4,vz:-n.z*a*4,drag:.5,life:14,size:.035,color:Tw,color2:Ew,shape:J.spark,stretch:1.4})}return}let a=n.length,o=e=>({x:n.x+n.dx*a*e,y:ST(e),z:n.y+n.dy*a*e});if(n.frame===n.warn){Q(e,t,i,Tw,.9,9),tx(e,t,i,Ew,1.4,12);for(let i=0;i<12;i++){let i=X(r,.05,1);e.sparks.emit(t,{...o(i),vx:n.dx*5,vy:X(r,-.3,.6),vz:n.dy*5,drag:3,delay:Math.round(i*6),life:X(r,10,16),size:.05,color:Dw,color2:Ew,shape:J.star,spin:5})}}for(let i=0;i<3;i++){let i=o(r.float()),a=X(r,2,4);e.sparks.emit(t,{x:i.x+X(r,-.06,.06),y:i.y+X(r,-.06,.06),z:i.z+X(r,-.06,.06),vx:n.dx*a,vy:X(r,0,.4),vz:n.dy*a,drag:1.5,life:X(r,12,18),size:X(r,.03,.05),color:Dw,color2:Ew,shape:r.float()<.3?J.star:J.mote,spin:4})}let s=o(r.float());e.sparks.emit(t,{x:s.x,y:.05,z:s.z,vx:X(r,-.3,.3),vy:X(r,.6,1.3),vz:X(r,-.3,.3),drag:1,life:X(r,18,26),size:.03,color:Tw,color2:Ew,shape:J.mote});let c=o(1);for(let i=0;i<2;i++){let i=Z(r,.4),a=X(r,1.5,3.5);e.sparks.emit(t,{...c,vx:(n.dx+i.x)*a,vy:Math.abs(i.y)*a+1,vz:(n.dy+i.z)*a,ay:-7,drag:1.5,life:X(r,10,16),size:.03,color:Dw,color2:Ew,shape:J.spark,stretch:1.6})}if(t%4==0){let r=a*.5;e.mark(t,{layer:`ground`,x:n.x+n.dx*r,y:.03,z:n.y+n.dy*r,size:r,wide:n.radius*1.2/(.31*r),alpha:.4,life:26,r:Ew.r*.45,g:Ew.g*.45,b:Ew.b*.45,shape:J.streak,angle:Math.atan2(-n.dx,n.dy),flat:!0})}}function PT(e,t,n,r){let i=ZS.rng(t,84,n.id),a=Math.min(24,Math.max(3,Math.round(n.length/.45)));for(let n=0;n<a;n++){let o=(n+.5)/a;e.sparks.emit(t,{...wT(r,o),vx:X(i,-.3,.3),vy:X(i,1,1.8),vz:X(i,-.3,.3),drag:1.4,delay:Math.round(Math.abs(o-.5)*10),life:X(i,16,24),size:X(i,.16,.24),grow:.5,color:Fw,color2:Iw,shape:J.flame,seed:i.float()})}Q(e,t,wT(r,.5),Lw,.7,8)}function FT(e,t,n,r,i){let a=ZS.rng(t,83,n.id);if(!i){let i=Math.min(1,n.frame/Math.max(1,n.warn));t%3==0&&e.shade.emit(t,{...wT(r,a.float()),vy:X(a,.3,.6),drag:.8,life:26,size:.1,grow:2,color:Bw,alpha:.3,shape:J.smoke,seed:a.float()}),a.float()<i*.7&&e.sparks.emit(t,{...wT(r,a.float()),vx:X(a,-.3,.3),vy:X(a,.5,1.2),vz:X(a,-.3,.3),drag:1,life:X(a,12,20),size:.025,color:Fw,color2:Iw,shape:J.mote});return}let o=2+Math.min(4,Math.floor(n.length/2));for(let n=0;n<o;n++){let n=wT(r,a.float());e.sparks.emit(t,{x:n.x+X(a,-.05,.05),y:n.y,z:n.z+X(a,-.05,.05),vx:X(a,-.2,.2),vy:X(a,.4,.9),vz:X(a,-.2,.2),drag:1.2,life:X(a,12,20),size:X(a,.1,.17),grow:.45,color:zw,color2:Rw,shape:J.flame,seed:a.float()})}if(e.sparks.emit(t,{...wT(r,a.float()),vx:X(a,-.4,.4),vy:X(a,1,2),vz:X(a,-.4,.4),drag:.8,life:X(a,20,30),size:.025,color:Fw,color2:Iw,shape:J.mote}),t%3==0){let n=wT(r,a.float());e.shade.emit(t,{x:n.x,y:n.y+.3,z:n.z,vy:X(a,.4,.8),drag:.6,life:30,size:.13,grow:2.2,color:Bw,alpha:.35,shape:J.smoke,seed:a.float()})}t%5==0&&e.sparks.emit(t,{...wT(r,X(a,.2,.8)),vy:-.5,ay:-9.8,life:12,size:.035,color:Fw,color2:Iw,shape:J.drop})}var IT=[`core:level_up`,`core:stone_found`,`core:unlock`,`core:weapon_equip`,`core:door_enter`,`core:crystal_shatter`,`core:gates_shut`,`core:miner_freed`,`core:miner_saved`,`core:secret_found`,`core:lift_fixed`,`core:shrine_bless`,`core:cart_start`,`core:cart_hit`,`core:cart_broken`,`core:cart_arrive`],LT=36,RT=16,zT=56,BT={combat:`#6ad8ff`,elite:`#ff6ad5`,shop:`#ffd166`,boss:`#9a7dff`},VT=Y(`#7fe8ff`,2.2),HT=Y(`#ffe08a`,2.4),UT=Y(`#ffd27a`,1.6),WT=Y(`#ff9a3a`,1),GT=Y(`#fff6d8`,2.2),KT=Y(`#bff6ff`,2),qT=Y(`#4ab8ff`,1.2),JT=Y(`#c8a8ff`,1.6),YT=Y(`#6a4ab8`,.8),XT=Y(`#8a5a32`,.9),ZT=Y(`#4a2e18`,.7),QT=Y(`#9aa4b2`,1.1),$T=Y(`#7fe8ff`,2.2),eE=Y(`#ffc070`,2.2),tE=Y(`#6a5a48`,.8);function nE(e){let t=e.build,n=t?.route;if(!n||t?.phase!==`doors`)return[];let r=n.doors.map(e=>({x:e.x,y:e.y,kind:e.plan.kind,size:1}));return n.shop&&r.push({x:n.shop.x,y:n.shop.y,kind:`shop`,size:D/i}),r}function rE(e,t,n,r){let i=t*t;return{x:e.x+(n-e.x)*i,y:.6+.4*i+5.6*t*(1-t),z:e.y+(r-e.y)*i}}var iE=new z,aE=new Vn,oE=new R(0,1,0),sE=new R,cE=new R,lE=class{#e=[];#t;#n=new B;#r=new B;#i=null;constructor(e,t=!1){let n=t?new qa(.16,.16,.16).rotateX(Math.PI/4).rotateZ(Math.PI/4):new no(.15,0);t||n.scale(.8,1.35,.8);let r=new V({color:16777215,blending:2});this.#t=new wa(n,r,RT),this.#t.instanceMatrix.setUsage(vn),this.#t.setColorAt(0,new B(1,1,1)),this.#t.count=0,this.#t.frustumCulled=!1,this.#t.renderOrder=19,this.#r.copy(VT),this.#n.copy(HT),e.add(this.#t)}observe(e,t,n,r){for(let e of n)e.type===`loot`&&e.seat===void 0&&this.#a({start:r,x:e.x,y:e.y,stone:!1});let a=t.player;for(let t of this.#e){let n=r-t.start;if(n<0||n>=LT)continue;let i=ZS.rng(r,81,t.start,Math.round(t.x*100)),o=rE(t,n/LT,a.x,a.y);if(e.sparks.emit(r,{...o,vx:X(i,-.3,.3),vy:X(i,-.2,.4),vz:X(i,-.3,.3),life:14,size:t.stone?.06:.045,color:t.stone?HT:VT,shape:J.star,spin:6}),n===35){let n={x:a.x,y:.9,z:a.y};Q(e,r,n,t.stone?UT:KT,t.stone?.7:.45,8),tx(e,r,n,t.stone?UT:KT,t.stone?1.2:.8,10)}}for(let e=this.#e.length-1;e>=0;e--){let t=this.#e[e];t&&r-t.start>=LT&&this.#e.splice(e,1)}nE(t).forEach((t,n)=>{let a=ZS.rng(r,82,n),o=Y(BT[t.kind],1.8),s=i*t.size;if(r%2==0){let n=a.float()*Math.PI*2;e.ambience.emit(r,{x:t.x+Math.cos(n)*s,y:.05,z:t.y+Math.sin(n)*s,vy:X(a,.8,1.6),life:34,size:.045,color:o,alpha:.9,alpha2:0,shape:J.mote})}r%6==0&&e.ambience.emit(r,{x:t.x+s*.5,y:.1,z:t.y,cx:t.x,cz:t.y,swirl:2.5,vy:X(a,.9,1.3),life:50,size:.07,color:o,alpha:.9,alpha2:0,shape:J.flake,spin:4})})}#a(e){this.#e.push(e),this.#e.length>RT&&this.#e.shift()}cue(e,t,n){let r=ZS.rng(n,83,Math.round(t.x*100),Math.round(t.y*100));switch(t.cue){case`core:level_up`:case`core:miner_saved`:case`core:shrine_bless`:return this.#u(e,n,r,t),!0;case`core:stone_found`:return this.#d(e,n,r,t),!0;case`core:unlock`:case`core:miner_freed`:case`core:lift_fixed`:return this.#f(e,n,r,t),!0;case`core:weapon_equip`:return this.#p(e,n,r,t),!0;case`core:door_enter`:case`core:gates_shut`:return this.#m(e,n,r,t),!0;case`core:crystal_shatter`:case`core:secret_found`:return this.#h(e,n,r,t),!0;case`core:cart_start`:return this.#o(e,n,r,t),!0;case`core:cart_hit`:return this.#s(e,n,r,t),!0;case`core:cart_broken`:return this.#c(e,n,r,t),!0;case`core:cart_arrive`:return this.#l(e,n,r,t),!0;default:return!1}}#o(e,t,n,r){for(let i=0;i<18;i++){let i=Z(n,.85),a=X(n,1.5,3.5);e.sparks.emit(t,{x:r.x+i.x*.45,y:.12,z:r.y+i.z*.45,vx:i.x*a,vy:X(n,.6,1.8),vz:i.z*a,ay:-6,drag:1.2,delay:n.int(0,10),life:X(n,12,22),size:.04,color:eE,shape:J.spark,stretch:1.8})}for(let i=0;i<8;i++){let i=Z(n,1);e.shade.emit(t,{x:r.x+i.x*.7,y:.2,z:r.y+i.z*.7,vx:i.x*.4,vy:X(n,.2,.5),vz:i.z*.4,delay:n.int(0,6),life:30,size:.18,grow:2,color:tE,alpha:.4,shape:J.smoke,seed:n.float()})}}#s(e,t,n,r){let i=r.strength>=10,a={x:r.x,y:.55,z:r.y},o=i?12:3;for(let s=0;s<o;s++){let o=Z(n,.3),c=X(n,i?2.5:1.2,i?5:2.4);e.chunks.add(t,{kind:`rock`,...a,vx:(o.x-r.dx*.8)*c,vy:Math.abs(o.y)*c+1.4,vz:(o.z-r.dy*.8)*c,life:X(n,24,40),size:X(n,.05,i?.12:.08),spin:10,axis:Z(n,0),color:s%3==0?ZT:XT})}if(e.sparks.emit(t,{...a,vx:-r.dx*1.5,vy:1.5,vz:-r.dy*1.5,ay:-5,life:16,size:.04,color:$T,shape:J.flake,spin:10}),i){Q(e,t,a,Y(`#ffe0b0`,1.4),.9,8),$(e,t,a,Y(`#c8a070`,.7),1.8,16);for(let i=0;i<6;i++){let i=Z(n,1);e.shade.emit(t,{x:r.x+i.x*.5,y:.4,z:r.y+i.z*.5,vx:i.x*.6,vy:X(n,.3,.7),vz:i.z*.6,life:34,size:.22,grow:2.2,color:tE,alpha:.45,shape:J.smoke,seed:n.float()})}}}#c(e,t,n,r){let i={x:r.x,y:.6,z:r.y};Q(e,t,i,Y(`#ffe6c0`,1.6),1.3,10),$(e,t,i,Y(`#c8a070`,.8),3,22);for(let r=0;r<26;r++){let a=Z(n,.35),o=X(n,2.5,6),s=r%4==0,c=r%7==1;e.chunks.add(t,{kind:s?`glow`:`rock`,...i,vx:a.x*o,vy:Math.abs(a.y)*o+2,vz:a.z*o,life:X(n,40,70),size:s?X(n,.07,.12):X(n,.08,.2),spin:9,axis:Z(n,0),color:s?$T:c?QT:r%2==0?XT:ZT})}for(let i=0;i<14;i++){let i=Z(n,1);e.shade.emit(t,{x:r.x+i.x*.6,y:X(n,.2,.8),z:r.y+i.z*.6,vx:i.x*1.2,vy:X(n,.3,.8),vz:i.z*1.2,drag:1,delay:n.int(0,6),life:X(n,40,60),size:.28,grow:2.4,color:tE,alpha:.5,shape:J.smoke,seed:n.float()})}for(let r=0;r<16;r++){let r=Z(n,.2),a=X(n,1.5,4);e.sparks.emit(t,{...i,vx:r.x*a,vy:Math.abs(r.y)*a+1,vz:r.z*a,ay:-5,drag:1,life:X(n,24,40),size:X(n,.04,.07),color:$T,shape:J.flake,spin:10})}}#l(e,t,n,r){let i={x:r.x,y:1,z:r.y};Q(e,t,i,Y(`#fff0c0`,1.8),1.4,14),tx(e,t,i,UT,2.2,16),$(e,t,i,Y(`#ffd27a`,.9),3.6,24);for(let i=0;i<36;i++){let a=n.float()*Math.PI*2,o=X(n,.1,.5);e.sparks.emit(t,{x:r.x+Math.cos(a)*o,y:X(n,.8,1.1),z:r.y+Math.sin(a)*o,cx:r.x,cz:r.y,swirl:i%2==0?2.5:-2.5,vy:X(n,1.4,3),drag:.4,delay:n.int(0,14),life:X(n,36,56),size:X(n,.04,.07),color:i%3==0?$T:UT,color2:WT,shape:i%4==0?J.star:J.mote,spin:3})}}#u(e,t,n,r){this.#i=t;let i={x:r.x,y:.9,z:r.y};Q(e,t,i,Y(`#ffe8a0`,1.6),1.2,14),$(e,t,i,Y(`#ffd27a`,.9),3.8,24),$(e,t,i,Y(`#9ff0ff`,.8),2.6,26,8);for(let i=0;i<40;i++){let a=n.float()*Math.PI*2,o=X(n,.3,.9);e.sparks.emit(t,{x:r.x+Math.cos(a)*o,y:X(n,.1,.7),z:r.y+Math.sin(a)*o,cx:r.x,cz:r.y,swirl:i%2==0?3:-3,vy:X(n,1.6,3.4),drag:.4,delay:n.int(0,12),life:X(n,40,60),size:X(n,.04,.07),color:i%3==0?GT:UT,color2:WT,shape:i%4==0?J.star:J.mote,spin:3})}for(let i=0;i<12;i++){let a=i/12*Math.PI*2;e.sparks.emit(t,{x:r.x+Math.cos(a)*.6,y:.2,z:r.y+Math.sin(a)*.6,cx:r.x,cz:r.y,swirl:2,vy:X(n,2.2,3.2),drag:.3,delay:i,life:50,size:.09,color:KT,color2:UT,shape:J.flake,spin:5})}}#d(e,t,n,r){let i={x:r.x,y:.8,z:r.y};Q(e,t,i,Y(`#fff0b0`,1.6),.9,12),tx(e,t,i,UT,1.5,14),$(e,t,i,Y(`#ffd27a`,.8),2.2,20);for(let r=0;r<18;r++){let a=Z(n,.2),o=X(n,2,4.5);e.sparks.emit(t,{...i,vx:a.x*o,vy:Math.abs(a.y)*o+1.5,vz:a.z*o,ay:-3,drag:1.5,life:X(n,24,36),size:.06,color:r%2==0?GT:KT,color2:UT,shape:J.star,spin:6})}this.#a({start:t,x:r.x,y:r.y,stone:!0})}#f(e,t,n,r){e.mark(t,{layer:`ground`,x:r.x,y:.035,z:r.y,size:.5,size2:1.5,alpha:.85,life:40,r:.85,g:.7,b:.35,shape:J.runeRing,spin:1.2,phaseRate:1,flat:!0}),Q(e,t,{x:r.x,y:.9,z:r.y},Y(`#ffe8a0`,1.2),.6,10);for(let i=0;i<24;i++){let a=n.float()*Math.PI*2,o=X(n,.3,.8);e.sparks.emit(t,{x:r.x+Math.cos(a)*o,y:X(n,.05,.4),z:r.y+Math.sin(a)*o,vy:X(n,1.5,2.6),delay:n.int(0,8),life:X(n,30,45),size:.05,color:i%2==0?UT:KT,shape:J.mote})}}#p(e,t,n,r){let i={x:r.x,y:1,z:r.y};Q(e,t,i,KT,.9,10),tx(e,t,i,KT,1.6,12),$(e,t,i,Y(`#7fd8ff`,.8),2,18);for(let i=0;i<24;i++){let i=n.float()*Math.PI*2;e.sparks.emit(t,{x:r.x+Math.cos(i)*.35,y:X(n,.1,.6),z:r.y+Math.sin(i)*.35,vy:X(n,2,4),drag:1,delay:n.int(0,6),life:X(n,20,32),size:.045,color:KT,color2:qT,shape:J.spark,stretch:1.6})}}#m(e,t,n,r){let a={x:r.x,y:.8,z:r.y};e.mark(t,{layer:`over`,x:r.x,y:2,z:r.y,size:2.2,size2:2.8,wide:.22,alpha:.75,life:18,r:1.4,g:1.6,b:1.8,shape:J.streak}),Q(e,t,a,Y(`#e0f6ff`,1.4),.9,10),$(e,t,a,Y(`#9fe8ff`,.85),2.4,18);for(let a=0;a<32;a++){let o=n.float()*Math.PI*2,s=i*X(n,.6,1);e.sparks.emit(t,{x:r.x+Math.cos(o)*s,y:.1,z:r.y+Math.sin(o)*s,vy:X(n,4,7),drag:1.2,life:X(n,18,28),size:.05,color:a%2==0?GT:KT,shape:J.spark,stretch:2})}}#h(e,t,n,r){let i={x:r.x,y:.9,z:r.y};Q(e,t,i,JT,.6,9);for(let r=0;r<20;r++){let a=Z(n,.2),o=X(n,2,4.5);e.sparks.emit(t,{...i,vx:a.x*o,vy:a.y*o+1,vz:a.z*o,ay:-6,drag:1.5,life:X(n,20,30),size:X(n,.05,.08),color:r%2==0?KT:JT,color2:YT,shape:J.flake,spin:12})}for(let i=0;i<16;i++)e.ambience.emit(t,{x:r.x+X(n,-.6,.6),y:X(n,.3,1.2),z:r.y+X(n,-.6,.6),vy:X(n,.3,.7),delay:n.int(0,10),life:X(n,40,60),size:.04,color:JT,color2:YT,shape:J.mote})}draw(e,t,n,r){for(let r of nE(t))this.#g(e,r,n);let i=0;for(let t of this.#e){let a=n-t.start;if(a<0||a>=LT)continue;let o=a/LT,s=rE(t,o,r.x,r.y),c=(t.stone?1.4:1)*(1-.5*o*o);aE.setFromAxisAngle(oE,n*.25+i),iE.compose(sE.set(s.x,s.y,s.z),aE,cE.setScalar(c)),this.#t.setMatrixAt(i,iE),this.#t.setColorAt(i,t.stone?this.#n:this.#r);let l=t.stone?HT:VT;e.over.add({...s,size:.3*c,r:l.r*.5,g:l.g*.5,b:l.b*.5,alpha:.8,shape:J.glow}),i++}this.#t.count=i,this.#t.instanceMatrix.needsUpdate=!0,this.#t.instanceColor&&(this.#t.instanceColor.needsUpdate=!0);let a=this.#i;if(a!==null&&n-a<zT&&!t.player.dead){let t=Math.max(0,(n-a)/zT);e.ground.add({x:r.x,y:.04,z:r.y,size:.9+.5*Math.min(1,t*3),r:.9,g:.72,b:.32,alpha:.85*(1-t),shape:J.runeRing,angle:n*.03,phase:n/60,flat:!0})}}#g(e,t,n){let r=new B(BT[t.kind]),a=i*t.size,o=.85+.15*Math.sin(n*.12);e.ground.add({x:t.x,y:.04,z:t.y,size:a*1.05,r:r.r*.8,g:r.g*.8,b:r.b*.8,alpha:.9,shape:J.runeRing,angle:n*.02,phase:n/60,flat:!0}),e.ground.add({x:t.x,y:.03,z:t.y,size:a,r:r.r*.5,g:r.g*.5,b:r.b*.5,alpha:.35*o,shape:J.disc,flat:!0}),e.over.add({x:t.x,y:1.3,z:t.y,size:1.4,wide:.3*t.size,r:r.r*1.2,g:r.g*1.2,b:r.b*1.2,alpha:.32*o,shape:J.streak});for(let i=0;i<3;i++){let o=n*.04+i*Math.PI*2/3;e.over.add({x:t.x+Math.cos(o)*a*.75,y:.9+.35*Math.sin(n*.05+i*2),z:t.y+Math.sin(o)*a*.75,size:.1,r:r.r*1.8,g:r.g*1.8,b:r.b*1.8,alpha:.95,shape:J.flake,angle:n*.08+i})}}reset(){this.#e.length=0,this.#i=null,this.#t.count=0}dispose(){this.#t.geometry.dispose(),this.#t.material.dispose()}},uE=e=>e.slice(e.indexOf(`:`)+1),dE=14,fE={x:1.6,y:7,z:-1.2},pE=6,mE=24,hE=6,gE=.35,_E=32,vE=.85,yE=[`#ff8ad8`,`#8affd8`,`#8ac8ff`],bE=[`#ff6a6a`,`#ffb34a`,`#fff36a`,`#6aff8a`,`#6ad8ff`,`#8a6aff`,`#ff6ae0`],xE=Y(`#ffb050`,1.7),SE=Y(`#d0401a`,.6),CE=Y(`#cfefff`,1.5),wE=Y(`#3a8bff`,1),TE=Y(`#e8fff6`,1.4),EE=Y(`#7fe0b0`,.9),DE=Y(`#f0fdff`,2.6),OE=Y(`#4ae0ff`,1.6),kE=Y(`#a6e85a`,1.4),AE=Y(`#4a8a2a`,.9),jE=Y(`#fff0c0`,2),ME=Y(`#ffcf6a`,1.3),NE=Y(`#ff3a5a`,2),PE=Y(`#a01838`,1),FE=Y(`#a07aff`,1.8),IE=Y(`#5a2aa0`,.9),LE=Y(`#6a5644`);function RE(e,t,n,r,i,a){switch(r){case`fire`:e.ambience.emit(t,{...i,vx:X(n,-.15,.15),vy:X(n,.9,1.5),vz:X(n,-.15,.15),life:X(n,14,20),size:X(n,.12,.2),grow:.35,color:xE,color2:SE,shape:J.flame,seed:n.float()});return;case`water`:e.ambience.emit(t,{...i,y:.05,vx:X(n,-.4,.4),vy:X(n,1.2,2),vz:X(n,-.4,.4),ay:-9.8,life:14,size:.035,color:CE,color2:wE,shape:J.drop});return;case`wind`:e.ambience.emit(t,{...i,y:X(n,.2,1),cx:i.x+X(n,-.3,.3),cz:i.z+X(n,-.3,.3),swirl:n.float()<.5?-8:8,life:12,size:.04,color:TE,color2:EE,shape:J.spark,stretch:1.5});return;case`lightning`:e.ambience.emit(t,{...i,y:X(n,.1,.6),vx:X(n,-2,2),vy:X(n,0,2),vz:X(n,-2,2),drag:4,life:7,size:.03,color:DE,color2:OE,shape:J.spark,stretch:2});return;case`earth`:e.shade.emit(t,{...i,y:.12,vy:.3,life:30,size:.16,grow:2,color:LE,alpha:.35,shape:J.smoke,seed:n.float()});return;case`poison`:e.ambience.emit(t,{...i,y:.08,vy:X(n,.3,.7),life:X(n,18,28),size:X(n,.04,.08),grow:1.4,color:kE,color2:AE,shape:J.bubble});return;case`holy`:e.ambience.emit(t,{...i,vy:X(n,.6,1.4),life:X(n,24,36),size:.05,color:jE,color2:ME,shape:n.float()<.3?J.star:J.mote,spin:3});return;case`unholy`:e.ambience.emit(t,{...i,y:X(n,.3,1),vy:-.5,life:20,size:.035,color:NE,color2:PE,shape:J.mote});return;case`light`:e.ambience.emit(t,{...i,y:X(n,.2,1.2),life:X(n,8,14),size:X(n,.06,.1),color:Y(`#ffffff`,2.4),shape:J.star,spin:4});return;case`dark`:e.ambience.emit(t,{...i,y:X(n,.3,1),vy:-.4,life:22,size:.05,color:FE,color2:IE,shape:J.mote});return;default:e.ambience.emit(t,{...i,vy:.8,life:20,size:.05,color:a.bright,shape:J.mote})}}function zE(e,t,n,r,i=.1){let a=e.float()*Math.PI*2,o=r*Math.sqrt(e.float());return{x:t+Math.cos(a)*o,y:i,z:n+Math.sin(a)*o}}function BE(e,t,n,r,i=.1){let a=e.float()*Math.PI*2;return{x:t+Math.cos(a)*r,y:i,z:n+Math.sin(a)*r}}function VE(e){return Math.max(0,Math.min(1,(e.frame+1)/8,(e.frames-e.frame)/15))}function HE(e,t,n,r,i,a,o){e.ambience.emit(t,{...r,vx:X(n,-.3,.3),vy:.35,vz:X(n,-.3,.3),life:50,size:a,grow:2.2,color:i,alpha:o,shape:J.smoke,seed:n.float()})}function UE(e,t,n,r,i,a,o){e.shade.emit(t,{...r,vx:X(n,-.2,.2),vy:.4,vz:X(n,-.2,.2),life:40,size:a,grow:2,color:i,alpha:o,shape:J.smoke,seed:n.float()})}function WE(e,t,n,r,i){e.mark(t,{layer:`ground`,x:n.x,y:.02,z:n.z,size:i*.3,size2:i,alpha:.6,life:18,r:r.r,g:r.g,b:r.b,shape:J.ripples,phaseRate:1,flat:!0})}function GE(e,t,n,r,i,a,o){e.bolts.add(t,{from:new R(r.x,r.y,r.z),to:new R(i.x,i.y,i.z),life:a,width:o,glow:OE,core:DE,jag:.16,branches:1,seed:n.u32()})}function KE(e,t,n,r){for(let i=0;i<3;i++)e.ambience.emit(t,{...zE(n,r.x,r.y,r.radius,4),vy:-14,life:17,size:.02,color:Y(`#cfefff`,1.2),alpha:.7,shape:J.spark,stretch:3});t%5==0&&WE(e,t,zE(n,r.x,r.y,r.radius),Y(`#5a7a9a`),.35)}var qE={holy_spring:(e,t,n,r)=>{t%7==0&&WE(e,t,zE(n,r.x,r.y,r.radius*.8),Y(`#6ab0d0`),.5)},sanctuary:(e,t,n,r)=>{e.ambience.emit(t,{...BE(n,r.x,r.y,r.radius*.97,.05),vy:X(n,1.2,1.8),life:26,size:.05,color:jE,color2:ME,alpha:.9,alpha2:0,shape:J.mote})},fallen_light:(e,t,n,r)=>{e.sparks.emit(t,{...zE(n,r.x,r.y,r.radius*.6,X(n,2.2,3)),vy:-5,life:24,size:.05,color:Y(`#ff6a8a`,2.2),color2:PE,shape:J.spark,stretch:2})},abyss:(e,t,n,r)=>{e.ambience.emit(t,{...BE(n,r.x,r.y,r.radius*X(n,.6,1),X(n,.05,.5)),cx:r.x,cz:r.y,swirl:2.5,pull:r.radius*.8,life:40,size:.05,color:n.float()<.5?FE:NE,color2:IE,shape:J.mote})},styx:(e,t,n,r,i,a,o,s)=>{if(!s||i.effect.kind!==`zone`||r.frame%i.effect.every!==0)return;let c=o.player;for(let i=0;i<4;i++){let a=zE(n,r.x,r.y,r.radius*.7,.3),o=X(n,.35,.5);e.sparks.emit(t,{...a,vx:(c.x-a.x)/o,vy:(.9-a.y)/o,vz:(c.y-a.z)/o,delay:i*2,life:o*60,size:.06,color:NE,color2:Y(`#ff8aa0`,1.6),shape:J.mote})}},grave_soil:(e,t,n,r)=>{t%4==0&&UE(e,t,n,zE(n,r.x,r.y,r.radius*.8),LE,.2,.3)},black_fire:(e,t,n,r)=>{e.sparks.emit(t,{...zE(n,r.x,r.y,r.radius*.85,.05),vy:X(n,1,1.7),life:X(n,16,22),size:X(n,.16,.24),grow:.35,color:Y(`#c070ff`,1.6),color2:Y(`#4a1080`,.6),shape:J.flame,seed:n.float()})},gravity:(e,t,n,r)=>{t%5==0&&e.chunks.add(t,{kind:`rock`,...zE(n,r.x,r.y,r.radius*.8,.1),vx:0,vy:.3,vz:0,life:50,size:X(n,.07,.13),spin:X(n,1,3),axis:Z(n,0),color:Y(`#8a80a8`),gravity:.6}),t%12==0&&e.mark(t,{layer:`ground`,x:r.x,y:.025,z:r.y,size:r.radius,size2:r.radius*.2,alpha:.5,alpha2:.2,life:30,r:.3,g:.3,b:.55,shape:J.shock,flat:!0})},shock_field:(e,t,n,r)=>{if(t%4==0){let i=zE(n,r.x,r.y,r.radius*.8,.1),a=zE(n,i.x,i.z,.8,.1);e.bolts.add(t,{from:new R(i.x,i.y,i.z),to:new R(a.x,a.y,a.z),life:4,width:.02,glow:OE,core:DE,jag:.3,branches:0,seed:n.u32()})}t%9==0&&WE(e,t,zE(n,r.x,r.y,r.radius*.8),Y(`#3a8ab0`),.5)},steam:(e,t,n,r,i,a)=>{t%3==0&&HE(e,t,n,zE(n,r.x,r.y,r.radius*.7,X(n,.2,.9)),Y(`#e8f0f4`,.4),.3+r.radius*.12,.55*a)},fire_tornado:(e,t,n,r)=>{for(let i=0;i<3;i++){let i=n.float()*Math.PI*2,a=X(n,.2,.6);e.sparks.emit(t,{x:r.x+Math.cos(i)*a,y:X(n,.05,.4),z:r.y+Math.sin(i)*a,vy:X(n,3,4.5),cx:r.x,cz:r.y,swirl:10,pull:-.7,life:X(n,18,26),size:X(n,.15,.24),grow:.5,color:xE,color2:SE,shape:J.flame,seed:n.float()})}if(t%3==0){let i=Z(n,.6);e.sparks.emit(t,{x:r.x,y:X(n,.5,2),z:r.y,vx:i.x*4,vy:1,vz:i.z*4,ay:-4,drag:1.5,life:24,size:.03,color:Y(`#ffe08a`,2.4),color2:SE,shape:J.spark,stretch:1.4})}t%8==0&&e.mark(t,{layer:`groundShade`,x:r.x,y:.012,z:r.y,size:.6,alpha:.45,life:90,r:.5,g:.38,b:.3,shape:J.scorch,seed:n.float(),flat:!0})},lava:(e,t,n,r)=>{t%4==0&&e.sparks.emit(t,{...zE(n,r.x,r.y,r.radius*.8,.05),vy:X(n,1.5,2.6),ay:-9.8,life:18,size:.05,color:Y(`#ffd27a`,2.2),color2:Y(`#ff5a1a`,1.2),shape:J.drop})},rainstorm:(e,t,n,r)=>KE(e,t,n,r),mire:(e,t,n,r)=>{t%3==0&&e.ambience.emit(t,{...zE(n,r.x,r.y,r.radius*.85,.03),vy:.15,life:30,size:X(n,.06,.1),grow:1.5,color:Y(`#b0905a`,.9),alpha:.8,alpha2:0,shape:J.bubble})},poison_pool:(e,t,n,r)=>{t%6==0&&HE(e,t,n,zE(n,r.x,r.y,r.radius*.7,.15),Y(`#8acc4a`,.25),.3,.5)},sandstorm:(e,t,n,r)=>{for(let i=0;i<3;i++){let i=n.float()*Math.PI*2,a=r.radius*X(n,.2,1);e.ambience.emit(t,{x:r.x+Math.cos(i)*a,y:X(n,.1,1.4),z:r.y+Math.sin(i)*a,cx:r.x,cz:r.y,swirl:3.5,life:24,size:.035,color:Y(`#ffe0a0`,1.3),color2:Y(`#a07a40`,.8),shape:J.flake,spin:10})}t%4==0&&UE(e,t,n,zE(n,r.x,r.y,r.radius*.8,.5),Y(`#7a6040`),.4,.3)},poison_fog:(e,t,n,r,i,a)=>{t%3==0&&HE(e,t,n,zE(n,r.x,r.y,r.radius*.75,X(n,.2,.8)),Y(`#8acc4a`,.4),.3+r.radius*.12,.55*a)},thorns:(e,t,n,r)=>{t%3==0&&e.chunks.add(t,{kind:`rock`,...zE(n,r.x,r.y,r.radius*.85,0),vx:0,vy:X(n,2,3),vz:0,life:26,size:X(n,.06,.1),spin:2,axis:Z(n,0),color:Y(`#5a8a3a`,1.2)})},black_hole:(e,t,n,r)=>{t%2==0&&e.shade.emit(t,{x:r.x+X(n,-.1,.1),y:X(n,.4,.8),z:r.y+X(n,-.1,.1),life:12,size:.55+r.radius*.06,grow:1.2,color:Y(`#050208`),alpha:.85,shape:J.glow});for(let i=0;i<5;i++){let a=BE(n,r.x,r.y,r.radius*X(n,.45,1),X(n,.2,.9));e.sparks.emit(t,{...a,cx:r.x,cz:r.y,swirl:4,pull:r.radius*1.6,life:30,size:.05,color:i%2==0?Y(`#e0c8ff`,2):Y(`#7a3aff`,1.6),color2:Y(`#3a1a6a`,.8),shape:J.spark,stretch:1.5})}},thundercloud:(e,t,n,r,i,a,o,s)=>{if(KE(e,t,n,r),t%5==0&&UE(e,t,n,zE(n,r.x,r.y,r.radius*.7,3.2),Y(`#3a3a4a`),.5+r.radius*.15,.4*a),s&&r.frame%20==0){let i=zE(n,r.x,r.y,r.radius*.8,.05);GE(e,t,n,{x:i.x+X(n,-.4,.4),y:3.2,z:i.z},i,7,.045),Q(e,t,{...i,y:.4},Y(`#9ff0ff`,1.6),.6,6)}},death_domain:(e,t,n,r)=>{t%3==0&&e.ambience.emit(t,{...zE(n,r.x,r.y,r.radius*.85,.1),vx:X(n,-.2,.2),vy:X(n,.4,.8),vz:X(n,-.2,.2),life:X(n,40,60),size:X(n,.07,.11),color:n.float()<.5?Y(`#9fe07a`,1.8):Y(`#c07aff`,1.8),alpha:.9,alpha2:0,shape:J.glow})}},JE=new R,YE=new Vn,XE=new R,ZE=new R,QE=new z,$E=new Set([`holy_spring`,`styx`,`mire`,`poison_pool`,`lava`]),eD=new Set([`abyss`,`gravity`,`grave_soil`,`black_hole`,`death_domain`]),tD=class{#e=null;#t=new Map;#n=new Map;#r=new Map;#i=[];#a;constructor(e,t=!1){let n=t?new qa(.5,.9,.5):new no(.5,0);t||n.scale(.7,1.3,.7);let r=new vo({color:`#d8f0ff`,roughness:.2,metalness:.1,flatShading:!0,emissive:`#2a5a90`,emissiveIntensity:.6});this.#a=new wa(n,r,192),this.#a.instanceMatrix.setUsage(vn),this.#a.count=0,this.#a.frustumCulled=!1,e.add(this.#a)}#o=null;#s=new Set;#c=new Set;#l=new Set;#u=new Map;attach(e){this.#e=e,this.#t.clear()}#d(e){let t=this.#t.get(e);if(t)return t;let n=this.#e,r=n?.reactions.get(e);if(!n||!r)return null;let i={id:uE(e),effect:r.effect,color:Y(r.color,1.3),bright:Y(r.color,2.2),floor:Y(r.color,.5),ring:Y(r.color,.85),styles:r.elements.map(e=>nS(e,n.elements.get(e)?.color)),elements:r.elements.map(uE)};return this.#t.set(e,i),i}drew(e){return e.cue===Kb.explode&&this.#s.has(`${e.x},${e.y}`)}observe(e,t,n,r,i){this.#s.clear();let a=t.zones??[];for(let e of a){let t=this.#d(e.reaction);if(t?.effect.kind!==`strike`)continue;let n=r+e.frames-e.frame+1;this.#n.set(e.id,{look:t,x:e.x,y:e.y,reach:e.radius,until:n})}let o=null,s=0,c=new Set,l=new Set;n.forEach((n,u)=>{if(n.type===`reaction`){let a=this.#d(n.reaction);if(!a)return;a.effect.kind===`beam`&&(o=a,s=0);let l=!c.has(n.reaction);c.add(n.reaction),this.#f(e,t,r,u,a,n,l,i);return}if(n.type!==`cue`)return;let d=ZS.rng(r,71,u);if(n.cue===Kb.beam)this.#C(e,r,d,o,s++,n);else if(n.cue===Kb.strike){let t=`${Math.round(n.x*10)},${Math.round(n.y*10)}`;l.has(t)||this.#S(e,r,d,this.#x(n),n),l.add(t)}else n.cue===Kb.explode&&this.#D(e,r,d,a,n)});for(let[e,t]of this.#n)t.until<r&&this.#n.delete(e);for(let n of a){let i=this.#d(n.reaction);if(!i)continue;let a=ZS.rng(r,72,n.id),o=i.effect.kind,s=this.#u.get(n.id)!==n.frame;this.#u.set(n.id,n.frame),o===`burst`?this.#_(e,r,a,i,n):o===`wave`?this.#g(e,r,a,i,n):o===`zone`?this.#v(e,r,a,i,n,t,s):o===`strike`&&this.#y(e,r,a,i,n,s)}for(let e of[...this.#u.keys()])a.some(t=>t.id===e)||this.#u.delete(e);this.#O(t,r,i),this.#A(e,t,r)}#f(e,t,n,r,i,a,o,s){let c=ZS.rng(n,70,r),l={x:a.x,y:.75,z:a.y},u=i.effect.kind;if(o||u===`burst`||u===`wave`||u===`mark`)switch(u){case`burst`:this.#p(e,n,c,i,a.x,a.y,a.radius,o);return;case`wave`:this.#h(e,n,c,i,a.x,a.y,a.radius,o);return;case`zone`:Q(e,n,l,i.color,.5,8),$(e,n,l,i.ring,a.radius,14);for(let t of i.styles)t.hit(e,n,c,l,0,0,.8);return;case`mark`:this.#T(e,t,n,c,i,a,o,s);return;case`strike`:Q(e,n,l,i.color,.4,8),$(e,n,l,i.ring,i.effect.radius,20);return;case`beam`:Q(e,n,l,i.bright,.5,6);return;case`volley`:this.#w(e,n,c,i,l);return;case`chain`:Q(e,n,l,i.color,.5,8),tx(e,n,l,i.color,.9,9);return;case`ward`:{this.#o=i;let r=t.player,a={x:r.x,y:.9,z:r.y};Q(e,n,a,i.bright,.9,12),tx(e,n,a,i.color,1.8,14),$(e,n,a,i.ring,1.6,18),i.id===`heavens_gate`&&this.#j(e,n,c,a);return}}}#p(e,t,n,r,i,a,o,s){if(r.id===`supernova`){s&&this.#m(e,t,n,i,a);return}let c={x:i,y:.7,z:a};if($(e,t,c,r.ring,o+.2,16),tx(e,t,c,r.color,o,11),s){Q(e,t,c,r.color,.5+.3*o,9);for(let i of r.styles)i.hit(e,t,n,c,0,0,1.5)}for(let i=0;i<(s?14:6);i++){let i=Z(n,.2),a=X(n,3.5,7)*(.6+.25*o);e.sparks.emit(t,{...c,vx:i.x*a,vy:i.y*a+1,vz:i.z*a,drag:3,life:X(n,12,20),size:.04,color:r.bright,color2:r.color,shape:J.spark,stretch:1.8})}if(s||r.id===`inferno`)switch(r.id){case`inferno`:s&&EC(e,t,n,{x:i,y:.4,z:a},o);for(let r=0;r<5;r++)UE(e,t,n,zE(n,i,a,.5,.8+r*.3),Y(`#2a0a10`),.4,.55);return;case`thunderblast`:for(let r=0;r<6;r++){let s=r/6*Math.PI*2+n.float()*.5,c={x:i+Math.cos(s)*o,y:.2,z:a+Math.sin(s)*o};GE(e,t,n,{x:i,y:.7,z:a},c,9,.035)}EC(e,t,n,{x:i,y:.4,z:a},o*.5);return;case`solar_flare`:e.sparks.emit(t,{...c,life:12,size:1.4,grow:1.3,color:Y(`#fff3c0`,2.2),alpha:.9,alpha2:0,shape:J.star,angle:n.float()});for(let r=0;r<14;r++){let i=r/14*Math.PI*2;e.sparks.emit(t,{...c,vx:Math.cos(i)*11,vy:X(n,-1,2),vz:Math.sin(i)*11,drag:4,life:12,size:.07,color:Y(`#fff6d0`,2.6),color2:Y(`#ffa040`,1.2),shape:J.spark,stretch:4})}return;case`miasma`:for(let r=0;r<7;r++)HE(e,t,n,zE(n,i,a,o*.6,.5),Y(`#b5d94a`,.35),.5,.6);return;case`chaos`:for(let r=0;r<24;r++){let s=r%2==0,c=n.float()*Math.PI*2;e.sparks.emit(t,{x:i+Math.cos(c)*.3,y:X(n,.3,1.2),z:a+Math.sin(c)*.3,cx:i,cz:a,swirl:s?7:-7,pull:-o*2.2,life:X(n,16,24),size:.05,color:s?jE:NE,color2:s?ME:PE,shape:J.spark,stretch:1.2})}return;default:return}}#m(e,t,n,r,i){let a={x:r,y:1,z:i};Q(e,t,{x:r,y:2.6,z:i},Y(`#ffffff`,1.4),2.6,8),Q(e,t,{x:r,y:1.6,z:i},Y(`#fff6e0`,1.1),1.6,18),bE.forEach((n,r)=>{$(e,t,a,Y(n,.5),6+r*1.1,30+r*3,r*3)});for(let r=0;r<48;r++){let i=Z(n,.3),o=X(n,6,14);e.sparks.emit(t,{...a,vx:i.x*o,vy:i.y*o+2,vz:i.z*o,drag:1.5,life:X(n,24,40),size:.06,color:Y(bE[r%bE.length]??`#ffffff`,2.2),shape:J.spark,stretch:2})}}#h(e,t,n,r,i,a,o,s){if(!s)return;let c={x:i,y:.7,z:a};Q(e,t,c,r.color,.6,8);for(let i of r.styles)i.hit(e,t,n,c,0,0,1.2);r.id===`quake`?e.mark(t,{layer:`groundShade`,x:i,y:.015,z:a,size:o*.6,size2:o*.9,alpha:.9,life:100,r:.35,g:.28,b:.22,shape:J.cracks,seed:n.float(),flat:!0}):r.id===`revelation`&&e.mark(t,{layer:`over`,x:i,y:1.8,z:a,size:2,size2:2.4,wide:.16,alpha:.9,life:18,r:2,g:1.85,b:1.2,shape:J.streak})}#g(e,t,n,r,i){let a=i.radius;if(a<=.1)return;let o=Math.min(10,Math.max(4,Math.round(a*2.5)));for(let s=0;s<o;s++){let o=BE(n,i.x,i.y,a,.15);r.id===`grudge_wind`&&s%2==0?e.ambience.emit(t,{...o,y:X(n,.2,1),cx:i.x,cz:i.y,swirl:5,pull:-4,life:10,size:.05,color:Y(`#b08aff`,1.6),color2:Y(`#4a1a6a`,.8),shape:J.spark,stretch:1.8}):RE(e,t,n,r.elements[s%r.elements.length]??``,o,r)}if(r.id===`quake`&&t%2==0){let r=n.float()*Math.PI*2;e.chunks.add(t,{kind:`rock`,x:i.x+Math.cos(r)*a,y:.1,z:i.y+Math.sin(r)*a,vx:Math.cos(r)*1.2,vy:X(n,2.5,4),vz:Math.sin(r)*1.2,life:40,size:X(n,.08,.14),spin:10,axis:Z(n,0),color:Y(`#b08a62`)})}}#_(e,t,n,r,i){let a=(i.frames>0?i.frame/i.frames:1)>.6?2:1;for(let o=0;o<a;o++){let a=Z(n,.3),o=i.radius*X(n,.8,1.2);e.sparks.emit(t,{x:i.x+a.x*o,y:.7+a.y*.5,z:i.y+a.z*o,vx:-a.x*o*4,vy:-a.y*2,vz:-a.z*o*4,drag:.5,life:14,size:.05,color:r.bright,color2:r.color,shape:J.spark,stretch:1.4})}r.id===`inferno`&&t%3==0&&UE(e,t,n,zE(n,i.x,i.y,.4,.3),Y(`#2a0a10`),.25,.4)}#v(e,t,n,r,i,a,o){let s=VE(i);if(!(s<=0||i.radius<=0)){if(t%2==0){let a=Math.min(4,Math.max(1,Math.round(i.radius*i.radius*.35)));for(let o=0;o<a;o++)RE(e,t,n,r.elements[(t/2+o)%r.elements.length]??``,zE(n,i.x,i.y,i.radius*.9),r)}qE[r.id]?.(e,t,n,i,r,s,a,o)}}#y(e,t,n,r,i,a){let o=r.effect;if(o.kind!==`strike`||(r.id===`thunderstorm`&&t%4==0&&UE(e,t,n,zE(n,i.x,i.y,o.radius*.6,3.4),Y(`#2e3442`),.7,.35),!o.scatter||!a))return;let s=i.frame+dE-1-o.delay,c=s/o.every;if(!(s<0||s%o.every!==0||c>=o.volleys))for(let r of nD(o,i,c))this.#b(e,t,n,r)}#b(e,t,n,r){let i={x:r.x+fE.x,y:fE.y,z:r.z+fE.z},a=dE/60,o={vx:-fE.x/a,vy:(.3-fE.y)/a,vz:-fE.z/a};e.sparks.emit(t,{...i,...o,life:dE,size:.22,color:Y(`#ffe08a`,1.8),color2:Y(`#ff8a3a`,1.5),shape:J.glow}),e.sparks.emit(t,{...i,...o,life:dE,size:.16,color:Y(`#fff6d0`,2.4),shape:J.flame,seed:n.float()});for(let r=1;r<dE;r++){let a=r/dE;e.sparks.emit(t,{x:i.x-fE.x*a+X(n,-.06,.06),y:i.y+(.3-fE.y)*a,z:i.z-fE.z*a+X(n,-.06,.06),vy:.6,drag:1,delay:r,life:X(n,10,16),size:X(n,.12,.2),grow:.4,color:xE,color2:SE,shape:J.flame,seed:n.float()})}}#x(e){let t=null,n=1/0;for(let r of this.#n.values()){let i=(r.x-e.x)**2+(r.y-e.y)**2;i>(r.reach+e.strength+1)**2||i>=n||(n=i,t=r.look)}return t}#S(e,t,n,r,i){let a=i.x,o=i.y,s=Math.max(.8,i.strength),c={x:a,y:.5,z:o};if(r?.id===`volcano`){e.mark(t,{layer:`over`,x:a+fE.x*.25,y:1.9,z:o+fE.z*.25,size:1.8,wide:.1,alpha:.8,life:8,r:2.2,g:1.1,b:.4,shape:J.streak,angle:-.3}),EC(e,t,n,c,s);for(let r=0;r<4;r++){let r=Z(n,.4);e.chunks.add(t,{kind:`rock`,...c,vx:r.x*3,vy:X(n,2.5,4),vz:r.z*3,life:36,size:X(n,.07,.12),spin:12,axis:Z(n,0),color:Y(`#ff7a3a`,1.4)})}}else if(r?.id===`judgment`){e.mark(t,{layer:`over`,x:a,y:2,z:o,size:2.2,size2:2.6,wide:.16,alpha:.55,life:14,r:1.5,g:1.3,b:.65,shape:J.streak}),e.bolts.add(t,{from:new R(a,6,o),to:new R(a,.05,o),life:8,width:.06,glow:Y(`#ffd86a`,1.6),core:Y(`#fffbe0`,2.6),jag:.08,branches:1,seed:n.u32()}),Q(e,t,c,Y(`#fff3b0`,1.1),.7,10),$(e,t,c,Y(`#ffd86a`,.9),s+.3,16);for(let r=0;r<12;r++)e.sparks.emit(t,{...zE(n,a,o,s*.6,.1),vy:X(n,1.5,3),life:X(n,18,28),size:.05,color:jE,color2:ME,shape:J.mote})}else{e.bolts.add(t,{from:new R(a+X(n,-.6,.6),6,o+X(n,-.6,.6)),to:new R(a,.05,o),life:8,width:.05,glow:r?r.color:OE,core:DE,jag:.14,branches:2,seed:n.u32()}),Q(e,t,c,Y(`#9ff0ff`,1.8),.8,8),$(e,t,c,Y(`#4ae0ff`,.85),s+.2,14);for(let r=0;r<12;r++){let r=Z(n,.3);e.sparks.emit(t,{...c,vx:r.x*5,vy:Math.abs(r.y)*4+1,vz:r.z*5,ay:-8,drag:2,life:X(n,8,14),size:.03,color:DE,color2:OE,shape:J.spark,stretch:2})}}}#C(e,t,n,r,i,a){let o=a.strength,s={x:a.x,y:vE,z:a.y},c={x:a.x+a.dx*o,y:vE,z:a.y+a.dy*o},l=r?.id===`prism`,u=Y(l?yE[i%yE.length]??`#ffffff`:`#5ad8ff`,1.5);if(e.bolts.add(t,{from:new R(s.x,s.y,s.z),to:new R(c.x,c.y,c.z),life:l?14:16,width:l?.05:.1,glow:u,core:Y(`#f4fdff`,2.6),jag:0,branches:0,seed:n.u32()}),!l)for(let r=0;r<2;r++)e.bolts.add(t,{from:new R(s.x,s.y,s.z),to:new R(c.x,c.y,c.z),life:10,delay:r*3,width:.022,glow:OE,core:DE,jag:.06,branches:1,seed:n.u32()});e.mark(t,{layer:`ground`,x:(s.x+c.x)/2,y:.03,z:(s.z+c.z)/2,size:o/2,wide:.12,alpha:.7,life:18,r:u.r*.4,g:u.g*.4,b:u.b*.4,shape:J.streak,angle:Math.atan2(-a.dx,a.dy),flat:!0});for(let r=0;r<8;r++){let r=n.float();e.sparks.emit(t,{x:s.x+(c.x-s.x)*r,y:vE+X(n,-.1,.1),z:s.z+(c.z-s.z)*r,vx:X(n,-.8,.8),vy:X(n,.2,1.2),vz:X(n,-.8,.8),delay:n.int(0,8),life:X(n,10,16),size:l?.07:.04,color:l?u:DE,shape:l?J.star:J.mote,spin:4})}Q(e,t,c,u,.4,8)}#w(e,t,n,r,i){Q(e,t,i,r.bright,.7,8),tx(e,t,i,r.color,1.6,10),$(e,t,i,r.ring,1.4,12);for(let a=0;a<12;a++){let o=a/12*Math.PI*2;e.sparks.emit(t,{...i,vx:Math.cos(o)*6,vy:X(n,-.5,.5),vz:Math.sin(o)*6,drag:5,life:10,size:.06,color:Y(`#fffbe0`,2.4),color2:r.color,shape:J.star,spin:6})}}#T(e,t,n,r,i,a,o,s){let{x:c,y:l,radius:u}=a;o&&(this.#l.clear(),$(e,n,{x:c,z:l},i.ring,Math.max(.8,u)+.2,16),Q(e,n,{x:c,y:.8,z:l},i.color,.5,8));for(let a of t.enemies){if(a.hp<=0||this.#l.has(a.id))continue;let t=u+a.radius;if((a.x-c)**2+(a.y-l)**2>t*t)continue;this.#l.add(a.id);let o=s(a),d={x:o.x,y:o.lift+o.height*.6,z:o.z};if(Q(e,n,d,i.bright,.35,7),tx(e,n,d,i.color,.8,9),this.#l.size<=pE)for(let t of i.styles)t.hit(e,n,r,d,0,0,.5);this.#E(e,n,r,i,a,o,d)}}#E(e,t,n,r,i,a,o){switch(r.id){case`crystallize`:this.#r.set(i.id,t+90);for(let r=0;r<6;r++){let r=Z(n,.4);e.chunks.add(t,{kind:`ice`,...o,vx:r.x*2.5,vy:Math.abs(r.y)*2+1.5,vz:r.z*2.5,life:30,size:X(n,.05,.09),spin:12,axis:Z(n,0),color:Y(`#cfefff`,1.1)})}return;case`void`:for(let r=0;r<7;r++){let r=Z(n,.3);e.chunks.add(t,{kind:`glow`,...o,vx:r.x*3,vy:Math.abs(r.y)*3+1.5,vz:r.z*3,life:30,size:.07,spin:12,axis:Z(n,0),color:Y(`#e0e0ff`,1.6),gravity:-8})}return;case`purify`:e.mark(t,{layer:`over`,x:a.x,y:a.lift+a.height,z:a.z,size:a.height,wide:.18,alpha:.8,life:16,r:1.8,g:2,b:1.8,shape:J.streak});return;case`thunder_curse`:GE(e,t,n,{x:a.x,y:3.5,z:a.z},o,7,.03);return;case`nightfall`:UE(e,t,n,{...o,y:a.lift+a.height+.2},Y(`#20203a`),.35,.5);return;default:return}}#D(e,t,n,r,i){for(let a of r){let r=this.#d(a.reaction),o=r?.effect;if(!r||o?.kind!==`zone`||!o.deathBurst)continue;let s=a.radius+1;if((a.x-i.x)**2+(a.y-i.y)**2>s*s)continue;let c={x:i.x,y:.6,z:i.y},l=i.strength;Q(e,t,c,r.bright,.4+.25*l,9),$(e,t,c,r.ring,l+.2,16);for(let i of r.styles)i.hit(e,t,n,c,0,0,1.3);for(let r=0;r<4;r++)UE(e,t,n,zE(n,i.x,i.y,.4,.5),Y(`#2a1a2a`),.35,.5);this.#s.add(`${i.x},${i.y}`);return}}#O(e,t,n){if(this.#i=[],this.#r.size===0)return;let r=new Set;for(let i of e.enemies){let e=this.#r.get(i.id);e===void 0||e<=t||i.stun<=0||i.hp<=0||(r.add(i.id),this.#i.length<_E&&this.#i.push({id:i.id,body:n(i)}))}for(let e of[...this.#r.keys()])r.has(e)||this.#r.delete(e)}#k(){let e=0;for(let{id:t,body:n}of this.#i){let r=ZS.rng(t,73);for(let t=0;t<hE;t++){let i=t/hE*Math.PI*2+r.float()*.4,a=n.radius*X(r,.95,1.2),o=n.lift+n.height*X(r,.15,.35),s=n.height*X(r,.5,.75);JE.set(Math.sin(i),0,-Math.cos(i)),YE.setFromAxisAngle(JE,gE),XE.set(n.x+Math.cos(i)*a,o,n.z+Math.sin(i)*a),QE.compose(XE,YE,ZE.setScalar(s)),this.#a.setMatrixAt(e++,QE)}}this.#a.count=e,this.#a.instanceMatrix.needsUpdate=!0}#A(e,t,n){let r=t.player,i=this.#o;if(!r.ward||r.ward.frames<=0||!i||r.dead)return;let a=ZS.rng(n,74);if(i.id===`heavens_gate`){e.ambience.emit(n,{x:r.x+X(a,-.5,.5),y:X(a,0,.4),z:r.y+X(a,-.5,.5),vy:X(a,1.4,2.4),life:30,size:.05,color:Y(`#fff6d0`,2.2),color2:ME,shape:a.float()<.3?J.star:J.mote,spin:3});return}let o=a.float()*Math.PI*2;e.ambience.emit(n,{x:r.x+Math.cos(o)*.7,y:X(a,.3,1.3),z:r.y+Math.sin(o)*.7,cx:r.x,cz:r.y,swirl:8,life:12,size:.05,color:TE,color2:EE,shape:J.spark,stretch:1.5}),n%8==0&&e.ambience.emit(n,{x:r.x+X(a,-.6,.6),y:X(a,1.1,1.7),z:r.y+X(a,-.6,.6),vx:X(a,-.3,.3),vy:-.45,life:44,size:.09,color:Y(`#f4fff8`,1.4),shape:J.feather,spin:X(a,-4,4),angle:a.float()*6})}#j(e,t,n,r){e.mark(t,{layer:`over`,x:r.x,y:2.4,z:r.z,size:3,size2:3.4,wide:.26,alpha:.6,life:24,r:1.6,g:1.4,b:.85,shape:J.streak});for(let i=0;i<10;i++)e.sparks.emit(t,{x:r.x+X(n,-.8,.8),y:X(n,2,3),z:r.z+X(n,-.8,.8),vx:X(n,-.4,.4),vy:-.8,life:X(n,40,60),size:.1,color:Y(`#ffe8a0`,1.6),shape:J.feather,spin:X(n,-4,4),angle:n.float()*6})}arc(e,t,n,r){if(r.reaction&&this.#d(r.reaction))for(let i=0;i<5;i++){let a=(i+n.float())/5;UE(e,t,n,{x:r.fromX+(r.toX-r.fromX)*a,y:.85,z:r.fromY+(r.toY-r.fromY)*a},Y(`#1a1030`),.18,.55)}}draw(e,t,n,r){this.#c.clear();for(let r of t.zones??[]){let i=this.#d(r.reaction);if(!i)continue;let a=r.frames>0?Math.min(1,r.frame/r.frames):1;switch(i.effect.kind){case`burst`:this.#M(e,i,r,a,n);break;case`wave`:e.ground.add({x:r.x,y:.04,z:r.y,size:Math.max(.2,r.radius),r:i.ring.r,g:i.ring.g,b:i.ring.b,alpha:.9*(1-a*.6),shape:J.shock,flat:!0});break;case`zone`:this.#N(e,i,r,n);break;case`strike`:this.#P(e,t,i,r,n)}}for(let n of t.enemies)!this.#r.has(n.id)||n.stun<=0||e.over.add({x:n.x,y:.5,z:n.y,size:.9,r:.45,g:.65,b:1,alpha:.3*Math.min(1,n.stun/20),shape:J.glow});this.#k(),this.#F(e,t,n,r)}#M(e,t,n,r,i){let a=.85+.15*Math.sin(i*(.3+r*.6));e.ground.add({x:n.x,y:.035,z:n.y,size:Math.max(.2,n.radius*(1-r)),r:t.ring.r,g:t.ring.g,b:t.ring.b,alpha:.9,shape:J.shock,flat:!0}),e.ground.add({x:n.x,y:.03,z:n.y,size:n.radius,r:t.floor.r,g:t.floor.g,b:t.floor.b,alpha:.55,shape:J.target,flat:!0}),e.over.add({x:n.x,y:.7,z:n.y,size:.25+.45*r,r:t.color.r,g:t.color.g,b:t.color.b,alpha:.7*a,shape:J.glow})}#N(e,t,n,r){let i=VE(n);if(!(i<=0||n.radius<=0)){if(e.ground.add({x:n.x,y:.03,z:n.y,size:n.radius,r:t.floor.r,g:t.floor.g,b:t.floor.b,alpha:.8*i,shape:J.runeRing,angle:r*.01+n.id,phase:r/60,flat:!0}),$E.has(t.id)){let a=t.id===`lava`;e.ground.add({x:n.x,y:.025,z:n.y,size:n.radius*.92,r:a?.5:t.floor.r,g:a?.22:t.floor.g,b:a?.04:t.floor.b,alpha:(a?.3:.32)*i,shape:J.pool,phase:r,seed:n.id%97/97,flat:!0}),a&&e.ground.add({x:n.x,y:.028,z:n.y,size:n.radius*.85,r:.95,g:.62,b:.18,alpha:.8*i*(.8+.2*Math.sin(r*.1)),shape:J.cracks,seed:n.id%89/89,flat:!0})}else if(eD.has(t.id)){let r=t.id===`black_hole`;e.groundShade.add({x:n.x,y:.02,z:n.y,size:r?n.radius*.4:n.radius,r:r?.04:.4,g:r?.02:.32,b:r?.08:.5,alpha:(r?.95:.6)*i,shape:J.disc,flat:!0}),r&&(e.ground.add({x:n.x,y:.03,z:n.y,size:1.2,r:.6,g:.35,b:.95,alpha:.8*i,shape:J.ring,flat:!0}),e.over.add({x:n.x,y:.6,z:n.y,size:.8,r:1.2,g:.7,b:2,alpha:.6*i,shape:J.ring}))}else e.ground.add({x:n.x,y:.025,z:n.y,size:n.radius,r:t.floor.r,g:t.floor.g,b:t.floor.b,alpha:.16*i,shape:J.disc,flat:!0});t.id===`fallen_light`&&e.over.add({x:n.x,y:1.6,z:n.y,size:1.8,wide:.25,r:1.6,g:.4,b:.6,alpha:.45*i,shape:J.streak})}}#P(e,t,n,r,i){let a=n.effect;if(a.kind!==`strike`)return;let o=r.frame-a.delay,s=o<0?0:Math.ceil(o/a.every);if(s>=a.volleys)return;let c=s*a.every-o;if(c>mE)return;let l=1-c/mE,u=n.id===`thunderstorm`?n.ring:Y(`#ffd86a`,.9),d=a.scatter?nD(a,r,s):rD(t,r,a.radius,a.targets).map(e=>({x:e.x,z:e.y}));for(let t of d){let n=`${Math.round(t.x*10)},${Math.round(t.z*10)}`;this.#c.has(n)||(this.#c.add(n),e.ground.add({x:t.x,y:.035,z:t.z,size:a.blast*(1.6-.6*l),r:u.r,g:u.g,b:u.b,alpha:.25+.5*l,shape:J.target,angle:i*.04,flat:!0}))}}#F(e,t,n,r){let i=t.player.ward,a=this.#o;if(!i||i.frames<=0||t.player.dead)return;let o=Math.min(1,i.frames/20);if(a?.id===`heavens_gate`){let t=.85+.15*Math.sin(n*.15);e.over.add({x:r.x,y:1.7,z:r.y,size:2,wide:.26,r:1.6,g:1.4,b:.9,alpha:.28*o*t,shape:J.streak});for(let t of[-1,1])for(let i=0;i<3;i++)e.over.add({x:r.x+t*(.5+i*.2),y:1.35+i*.08,z:r.y-.2,size:.6-i*.1,r:1.4,g:1.15,b:.7,alpha:.38*o,shape:J.feather,angle:-t*(.55+i*.35+.05*Math.sin(n*.12))});e.ground.add({x:r.x,y:.04,z:r.y,size:1.1,r:.9,g:.75,b:.35,alpha:.6*o,shape:J.runeRing,angle:n*.02,phase:n/60,flat:!0})}else e.ground.add({x:r.x,y:.04,z:r.y,size:1.05+.05*Math.sin(n*.2),r:a?a.floor.r:.45,g:a?a.floor.g:.7,b:a?a.floor.b:.55,alpha:.6*o,shape:J.shock,flat:!0})}dispose(){this.#a.geometry.dispose(),this.#a.material.dispose()}reset(){this.#n.clear(),this.#r.clear(),this.#i=[],this.#a.count=0,this.#s.clear(),this.#u.clear(),this.#o=null}};function nD(e,t,n){let r=[];for(let i=0;i<e.targets;i++){let a=n*e.targets+i,o=e.radius*Math.sqrt((a%7+1)/8);r.push({x:t.x+m(a*137.5)*o,z:t.y+c(a*137.5)*o})}return r}function rD(e,t,n,r){return e.enemies.filter(e=>e.hp>0&&(e.x-t.x)**2+(e.y-t.y)**2<=(n+e.radius)**2).map(e=>({e,d:(e.x-t.x)**2+(e.y-t.y)**2})).sort((e,t)=>e.d-t.d||e.e.id-t.e.id).slice(0,r).map(({e})=>e)}var iD=[Kb.strike,Kb.beam];Object.keys(qE);var aD=[`burn`,`stun`,`slow`,`weaken`,`curse`,`blind`,`wet`,`poison`,`suppress`,`deathArc`,`plague`,`radiate`,`silence`,`decay`,`neurotoxin`];function oD(e,t){if(t===`burn`)return e.burn;if(t===`stun`)return e.stun;let n=e.status;return n?t===`poison`?n.poison>0?n.poisonFrames:0:n[t]:0}var sD={[Kb.burn]:`burn`,[Kb.poison]:`poison`,[Kb.decay]:`decay`,[Kb.radiate]:`radiate`},cD=(e,t)=>Math.abs(e-t)<1e-6,lD=class{#e=new Map;#t=!1;reset(){this.#e.clear(),this.#t=!1}read(e,t){let n=[],r=[],i=[],a=null,o=[],s=[],c=[];for(let t of e)t.type===`death`&&c.push({target:t.target,x:t.x,y:t.y});let l=null;return e.forEach((t,u)=>{if(t.type===`damage`){l=t;return}if(t.type!==`cue`){a=null;return}let d={x:t.x,y:t.y,dx:t.dx,dy:t.dy,strength:t.strength};if(t.cue!==Kb.hit&&(a=null),t.cue===Kb.hit){let e=l;a&&e&&a.targets.push({x:t.x,y:t.y}),n.push({...d,target:e?.target??-1,...e?.element?{element:e.element}:{},...e?.reaction?{reaction:e.reaction}:{},crit:e?.crit===!0}),l=null}else if(t.cue===Kb.arc)r.push(uD(e,u,d,c));else if(t.cue===Kb.gust)a={...d,targets:[]},i.push(a);else if(t.cue===Kb.stun)s.push(d);else{let e=sD[t.cue];e&&o.push({...d,kind:e})}}),{hits:n,arcs:r,gusts:i,ticks:o,stuns:s,rises:this.#n(t),deaths:c}}#n(e){let t=[],n=new Map;for(let r of e.enemies){let e=new Map,i=this.#e.get(r.id);for(let n of aD){let a=oD(r,n);a<=0||(e.set(n,a),this.#t&&a>(i?.get(n)??0)&&t.push({target:r.id,key:n,x:r.x,y:r.y}))}n.set(r.id,e)}return this.#e=n,this.#t=!0,t}};function uD(e,t,n,r){let i={fromX:n.x,fromY:n.y,toX:n.x+n.dx*n.strength,toY:n.y+n.dy*n.strength};for(let n=t+1;n<e.length;n++){let t=e[n];if(t?.type===`damage`){if(t.reaction)return{...i,kind:`chain`,reaction:t.reaction};if(t.element)return{...i,kind:`fork`,element:t.element};break}}let a=r.some(e=>cD(e.x,n.x)&&cD(e.y,n.y));return{...i,kind:a?`death`:`fork`}}var dD=[{left:e=>e.burn,style:sx},{left:e=>e.status?.slow??0,style:fx},{left:e=>e.status?.wet??0,style:fx},{left:e=>(e.status?.poison??0)>0?e.status?.poisonFrames??0:0,style:Ix,power:e=>e.status?.poison??1},{left:e=>e.status?.blind??0,style:Yx},{left:e=>e.status?.weaken??0,style:eS},{left:e=>e.status?.curse??0,style:Kx},{left:e=>e.stun>0&&(e.status?.paralyzeReady??0)>0?e.stun:0,style:Tx}],fD=Y(`#c8fff0`,2.4),pD=Y(`#6af0c0`,1.4),mD=Y(`#d070b0`,1.6),hD=Y(`#6a2a5a`,.8),gD=Y(`#7aa040`,.35),_D=Y(`#a06aff`,1.6),vD=Y(`#f0e0ff`,2.2),yD=Y(`#d8ff8a`,2),bD=Y(`#8ac83a`,1),xD=Y(`#1c1c34`),SD=Y(`#f0fff4`,1.8),CD=[{left:e=>e.neurotoxin,aura:(e,t,n,r,i)=>{$b(t,3,i)&&e.ambience.emit(t,{x:r.x+X(n,-.3,.3),y:r.lift+r.height*X(n,.3,.9),z:r.z+X(n,-.3,.3),vx:X(n,-2,2),vy:X(n,-1,2),vz:X(n,-2,2),drag:4,life:6,size:.03,color:fD,color2:pD,shape:J.spark,stretch:2})}},{left:e=>e.decay,aura:(e,t,n,r,i)=>{$b(t,5,i)&&e.ambience.emit(t,{x:r.x+X(n,-.3,.3),y:r.lift+r.height*X(n,.5,.95),z:r.z+X(n,-.3,.3),vy:-1.2,ay:-3,life:20,size:.04,color:mD,color2:hD,shape:J.flake,spin:6})}},{left:e=>e.plague,aura:(e,t,n,r,i)=>{$b(t,8,i)&&e.ambience.emit(t,{x:r.x+X(n,-.2,.2),y:r.lift+r.height*.8,z:r.z+X(n,-.2,.2),vy:.4,life:40,size:.2,grow:2,color:gD,alpha:.6,shape:J.smoke,seed:n.float()})}},{left:e=>e.deathArc,aura:(e,t,n,r,i)=>{if(!$b(t,10,i))return;let a=r.lift+r.height;e.bolts.add(t,{from:new R(r.x+X(n,-.3,.3),a+.2,r.z),to:new R(r.x+X(n,-.3,.3),r.lift+r.height*.4,r.z+X(n,-.3,.3)),life:4,width:.018,glow:_D,core:vD,jag:.3,branches:0,seed:n.u32()})}},{left:e=>e.radiate,aura:(e,t,n,r,i)=>{if(!$b(t,4,i))return;let a=n.float()*Math.PI*2;e.ambience.emit(t,{x:r.x,y:r.lift+r.height*X(n,.3,.8),z:r.z,vx:Math.cos(a)*1.6,vz:Math.sin(a)*1.6,drag:1.5,life:18,size:.04,color:yD,color2:bD,shape:J.mote})}},{left:e=>e.silence,aura:(e,t,n,r,i)=>{$b(t,6,i)&&e.shade.emit(t,{x:r.x+X(n,-.15,.15),y:r.lift+r.height+.25,z:r.z+X(n,-.15,.15),vy:.1,life:24,size:.22,grow:1.4,color:xD,alpha:.5,shape:J.cloud,seed:n.float()})}},{left:e=>e.suppress,aura:(e,t,n,r,i)=>{$b(t,8,i)&&e.ambience.emit(t,{x:r.x+X(n,-.3,.3),y:r.lift+.1,z:r.z+X(n,-.3,.3),vy:X(n,.8,1.4),life:28,size:.04,color:SD,shape:J.mote})}}];function wD(e){if(dD.some(t=>t.left(e)>0))return!0;let t=e.status;return t!==void 0&&CD.some(e=>e.left(t)>0)}function TD(e,t,n,r){let i=0;for(let e of n)e.hp>0&&wD(e)&&i++;let a=Math.ceil(i/10);for(let i of n){if(i.hp<=0||a>1&&b([i.id,t])%a!==0)continue;let n=null;dD.forEach((a,o)=>{let s=a.left(i);s<=0||(n??=r(i),a.style.aura(e,t,ZS.rng(t,i.id,31+o),n,s,a.power?.(i)??1))});let o=i.status;o&&CD.forEach((a,s)=>{let c=a.left(o);c<=0||(n??=r(i),a.aura(e,t,ZS.rng(t,i.id,51+s),n,c))})}}function ED(e,t,n,r,i){let a={x:i.x,y:i.lift+i.height*.55,z:i.z};if(r.kind===`burn`)for(let r=0;r<4;r++)e.sparks.emit(t,{...a,vx:(n.float()-.5)*2,vy:1.5+n.float()*1.5,vz:(n.float()-.5)*2,drag:2,life:16,size:.035,color:sx.core,color2:sx.glow,shape:J.spark,stretch:1});else if(r.kind===`decay`)for(let r=0;r<5;r++)e.sparks.emit(t,{x:a.x+(n.float()-.5)*.5,y:a.y+n.float()*.4,z:a.z+(n.float()-.5)*.5,vy:-1,ay:-4,life:18,size:.045,color:mD,color2:hD,shape:J.flake,spin:8});else if(r.kind===`radiate`)e.mark(t,{layer:`ground`,x:r.x,y:.03,z:r.y,size:r.strength*.3,size2:r.strength,alpha:.85,life:14,r:.55,g:.75,b:.2,shape:J.shock,flat:!0}),e.sparks.emit(t,{...a,life:8,size:.45,grow:1.4,color:yD,alpha:.6,alpha2:0,shape:J.glow});else if(r.kind===`poison`)for(let r=0;r<3;r++)e.sparks.emit(t,{x:a.x+(n.float()-.5)*.4,y:a.y+(n.float()-.5)*.4,z:a.z+(n.float()-.5)*.4,vy:.6,life:12,size:.06,grow:1.6,color:Ix.glow,alpha:.9,alpha2:0,shape:J.ring})}var DD=[{left:e=>e.status?.curse??0,shape:J.rune,size:.26,color:null},{left:e=>e.status?.suppress??0,shape:J.cross,size:.22,color:Y(`#e8fff0`,1.5)},{left:e=>e.status?.deathArc??0,shape:J.bolt,size:.22,color:Y(`#b08aff`,1.9)},{left:e=>e.status?.plague??0,shape:J.plague,size:.24,color:Y(`#9ad04a`,1.6)},{left:e=>e.status?.silence??0,shape:J.cloud,size:.26,color:Y(`#6a6ab8`,1.1)}],OD=new R,kD={r:2.4,g:2.1,b:1.1},AD={r:2.4,g:2.3,b:1.9};function jD(e,t,n,r,i){for(let a of n){let n=t.get(a.id);if(!n)continue;let o=n.lift+n.height+.3;if(a.stun>0&&a.air<=0)for(let t=0;t<3;t++){let i=r*.2+t*Math.PI*2/3;OD.set(n.x+Math.cos(i)*.42,o+.05*Math.sin(r*.3+t),n.z+Math.sin(i)*.42),e.over.add({...OD,size:.17,...kD,alpha:.95,shape:J.star,angle:r*.1})}let s=DD.filter(e=>e.left(a)>0);s.forEach((t,c)=>{let l=Math.min(1,t.left(a)/30),u=t.color??i;e.over.add({x:n.x+(c-(s.length-1)/2)*.36,y:o+.25,z:n.z,size:t.size,r:u.r,g:u.g,b:u.b,alpha:.85*l,shape:t.shape,phase:r*.03,seed:a.id%13/13})});let c=a.status?.radiate??0;c>0&&e.ground.add({x:n.x,y:.03,z:n.z,size:(a.status?.radiateRadius??1)/.8,r:.45,g:.62,b:.16,alpha:(.18+.08*Math.sin(r*.2))*Math.min(1,c/30),shape:J.ring,flat:!0});let l=a.status?.blind??0;if(l>0){let t=Math.min(1,l/30);for(let i=0;i<4;i++){let a=-r*.15+i*Math.PI/2;e.over.add({x:n.x+Math.cos(a)*.3,y:n.lift+n.height*.92,z:n.z+Math.sin(a)*.3,size:.08+.03*Math.sin(r*.4+i),...AD,alpha:.9*t,shape:J.star})}}}}var MD={rings:[],spikes:[],shards:[]},ND=1/60;function PD(e,t,n){let r=null,i=null,a=null;for(let o of e.enemies){let e=o.boss?.warden;if(!e||!e.waves&&!e.spikes&&!e.shards)continue;let s=t.enemies.get(o.def)?.boss?.moves?.skills??[],c=s.find(e=>e.kind===`leap`),l=s.find(e=>e.kind===`rush`);if(c?.kind===`leap`&&e.waves?.forEach((e,t)=>{e.delay>0||(r??=[],r.push({id:o.id,index:t,x:e.x,y:e.y,r:e.r+c.wave.speed*ND*n,width:c.wave.width}))}),l?.kind===`rush`)for(let t of e.spikes??[])i??=[],i.push({x:t.x,y:t.y,r:l.trail.radius,k:Math.min(1,Math.max(0,1-(t.fuse-n)/l.trail.fuse))});let u=e.shards??[];for(let e=0;e+1<u.length;e+=2)a??=[],a.push([u[e]??0,u[e+1]??0])}return!r&&!i&&!a?MD:{rings:r??[],spikes:i??[],shards:a??[]}}var FD=`#b26bff`,ID=`#7dffb0`,LD=32,RD=class{group=new Rr;#e=new V({color:FD,transparent:!0,opacity:.75,side:2,depthWrite:!1});#t=[];#n=[];#r;#i;#a=new z;#o=new z;constructor(){let e=new Za(.22,1,5);e.translate(0,.5,0),this.#r=new wa(e,new vo({color:FD,emissive:FD,emissiveIntensity:.6}),LD),this.#i=new wa(new no(.22),new vo({color:ID,emissive:ID,emissiveIntensity:.9}),LD);for(let e of[this.#r,this.#i])e.instanceMatrix.setUsage(vn),e.frustumCulled=!1,e.count=0,this.group.add(e)}show(e,t){for(;this.#t.length<e.rings.length;){let e=new H(new io(.5,1,96),this.#e);e.rotation.x=-Math.PI/2,e.renderOrder=-1,this.#t.push(e),this.#n.push(-1),this.group.add(e)}this.#t.forEach((t,n)=>{let r=e.rings[n];t.visible=r!==void 0,r&&(Math.abs((this.#n[n]??-1)-r.r)>.01&&(t.geometry.dispose(),t.geometry=new io(Math.max(.01,r.r-r.width/2),r.r+r.width/2,96),this.#n[n]=r.r),t.position.set(r.x,.04,r.y))});let n=this.#a,r=this.#o,i=0;for(let t of e.spikes){if(i>=LD)break;let e=.15+.85*t.k*t.k;n.makeTranslation(t.x,0,t.y).multiply(r.makeScale(t.r*.6,e,t.r*.6)),this.#r.setMatrixAt(i++,n)}this.#r.count=i,this.#r.instanceMatrix.needsUpdate=!0,i=0;for(let[a,o]of e.shards){if(i>=LD)break;n.makeTranslation(a,.55+.12*Math.sin(t*.08+i),o),n.multiply(r.makeRotationY(t*.04+i)),this.#i.setMatrixAt(i++,n)}this.#i.count=i,this.#i.instanceMatrix.needsUpdate=!0}},zD=Y(`#e8d0ff`,2),BD=Y(`#8a4cff`,1.3),VD=Y(`#f0dcff`,1.8),HD=Y(`#b26bff`,1.2),UD=Y(`#6a5644`),WD=Y(`#e8c888`,1.1),GD=Y(`#d0ffe6`,2),KD=Y(`#3fdc8a`,1.3),qD=Y(`#fff0ff`,2.6),JD=[`core:warden_windup`,`core:warden_strike`,`core:warden_land`,`core:warden_wave`,`core:warden_spike`,`core:warden_pulse`,`core:warden_shed`,`core:warden_shard`],YD=e=>({x:e.x+e.aimX*.45,y:1.85,z:e.y+e.aimY*.45}),XD=e=>({x:e.x-e.aimX*.35,y:2.05,z:e.y-e.aimY*.35});function ZD(e,t,n,r,i){for(let a=0;a<i;a++){let i=Z(n,.25),a=X(n,.9,1.5);e.sparks.emit(t,{x:r.x+i.x*a,y:r.y+i.y*a*.6,z:r.z+i.z*a,vx:-i.x*a*3.2,vy:-i.y*a*1.9,vz:-i.z*a*3.2,drag:.5,life:X(n,14,18),size:.045,color:zD,color2:BD,shape:J.spark,stretch:1.4})}}function QD(e,t,n,r,i,a){for(let o=0;o<a;o++){let a=Z(n,0);e.shade.emit(t,{x:r+a.x*.3,y:.15,z:i+a.z*.3,vx:a.x*X(n,.6,1.6),vy:X(n,.3,.9),vz:a.z*X(n,.6,1.6),drag:1.5,life:X(n,22,34),size:X(n,.18,.3),grow:2.2,color:UD,alpha:.45,shape:J.smoke,seed:n.float()})}}function $D(e,t,n,r,i,a,o){for(let s=0;s<o;s++){let o=n.float()*Math.PI*2,s=a*Math.sqrt(n.float());e.chunks.add(t,{kind:`glow`,x:r+Math.cos(o)*s,y:.05,z:i+Math.sin(o)*s,vx:Math.cos(o)*X(n,.8,2),vy:X(n,3.5,6),vz:Math.sin(o)*X(n,.8,2),life:X(n,30,44),size:X(n,.1,.18),spin:9,axis:Z(n,0),color:VD,gravity:-11})}}function eO(e,t,n,r,i,a){e.mark(t,{layer:`groundShade`,x:r,y:.015,z:i,size:a*.85,size2:a,alpha:.95,life:110,r:.35,g:.3,b:.4,shape:J.cracks,seed:n.float(),flat:!0})}var tO=class{observe(e,t,n,r){let i=!1;for(let r of t.enemies){let t=r.boss?.warden;if(!t)continue;i=!0;let a=ZS.rng(n,71,r.id),o=t.length>0?Math.min(1,t.frame/t.length):0;if(t.stage===1&&t.move===`leap`){let t=XD(r);for(let r=0;r<2;r++)e.sparks.emit(n,{x:t.x+X(a,-.4,.4),y:t.y+X(a,-.2,.3),z:t.z+X(a,-.4,.4),vy:X(a,1,2.2),drag:1,life:X(a,12,18),size:.04,color:zD,color2:BD,shape:a.float()<.5?J.star:J.mote,spin:5});n%4==0&&QD(e,n,a,r.x,r.y,2)}else if(t.stage===1&&t.move===`barrage`&&n%2==0)ZD(e,n,a,YD(r),2+Math.round(3*o));else if(t.stage===1&&t.move===`pulse`){ZD(e,n,a,YD(r),1+Math.round(3*o));let t=1+Math.round(7*o*o);for(let i=0;i<t;i++){let t=a.float()*Math.PI*2,i=X(a,1.5,13);e.ambience.emit(n,{x:r.x+Math.cos(t)*i,y:.05,z:r.y+Math.sin(t)*i,vy:X(a,1.2,2.6)*(.6+o),drag:.4,life:X(a,20,30),size:.045,color:zD,color2:BD,shape:a.float()<.35?J.star:J.mote,spin:4})}}else t.stage===1&&t.move===`rush`&&t.step===0&&n%5==0&&o>.3?QD(e,n,a,r.x-r.aimY*.35-r.aimX*.4,r.y+r.aimX*.35-r.aimY*.4,2):t.stage===2&&t.move===`rush`?(QD(e,n,a,r.x-r.aimX*.6,r.y-r.aimY*.6,1),Ax.hit(e,n,a,{x:r.x,y:.3,z:r.y},-r.aimX,-r.aimY,.4)):t.air&&e.sparks.emit(n,{x:r.x+X(a,-.4,.4),y:2+X(a,0,2),z:r.y+X(a,-.4,.4),vy:-.5,drag:1,life:16,size:.05,color:zD,color2:BD,shape:J.mote})}if(!i)return;let a=PD(t,r,0),o=ZS.rng(n,72);for(let t of a.rings){let r=Math.min(26,Math.max(8,Math.round(t.r*1.2)));for(let i=0;i<r;i++){let r=o.float()*Math.PI*2,a=t.x+Math.cos(r)*t.r,s=t.y+Math.sin(r)*t.r;e.sparks.emit(n,{x:a,y:.05,z:s,vx:Math.cos(r)*1.6,vy:X(o,1.6,3.2),vz:Math.sin(r)*1.6,ay:-9,drag:1.2,life:X(o,12,18),size:.045,color:VD,color2:BD,shape:J.spark,stretch:1.3}),i%4==0&&QD(e,n,o,a,s,1)}}for(let t of a.spikes)n%3==0&&e.sparks.emit(n,{x:t.x+X(o,-.4,.4),y:.05,z:t.y+X(o,-.4,.4),vy:X(o,.6,1.4)*(.5+t.k),drag:1,life:14,size:.035,color:zD,color2:BD,shape:J.star,spin:6});for(let[t,r]of a.shards)n%4==0&&e.ambience.emit(n,{x:t+X(o,-.25,.25),y:.4,z:r+X(o,-.25,.25),vy:X(o,.5,1),drag:.5,life:22,size:.04,color:GD,color2:KD,shape:J.star,spin:5})}draw(e,t,n,r){let i=n-(t.frame-1),a=PD(t,r,i);for(let t of a.rings)e.ground.add({x:t.x,y:.035,z:t.y,size:t.r/.94,r:HD.r,g:HD.g,b:HD.b,alpha:.95,shape:J.shock,flat:!0});for(let t of a.spikes)e.ground.add({x:t.x,y:.025,z:t.y,size:t.r*(.6+.4*t.k),r:BD.r,g:BD.g,b:BD.b,alpha:.35+.6*t.k,shape:J.cracks,seed:(t.x*7.3+t.y*3.1)%1,flat:!0});a.shards.forEach(([t,r],i)=>{let a={x:t,y:.6+.1*Math.sin(n*.08+i),z:r};e.over.add({...a,size:.4,r:KD.r,g:KD.g,b:KD.b,alpha:.7,shape:J.glow}),e.over.add({...a,size:.2,r:GD.r,g:GD.g,b:GD.b,alpha:1,shape:J.flake,angle:n*.06+i})});for(let r of t.enemies){let t=r.boss?.warden;if(t?.move!==`pulse`||t.stage!==1)continue;let a=Math.min(1,Math.max(0,(t.frame-1+i)/Math.max(1,t.length)));e.ground.add({x:r.x,y:.03,z:r.y,size:2+10*a,r:BD.r,g:BD.g,b:BD.b,alpha:.35+.55*a,shape:J.runeRing,angle:n*.03,phase:n*.05,flat:!0}),e.ground.add({x:r.x,y:.028,z:r.y,size:2.4,r:zD.r,g:zD.g,b:zD.b,alpha:.2+.5*a,shape:J.disc,flat:!0})}}cue(e,t,n){let r=t.cue.slice(t.cue.indexOf(`:`)+1),i=ZS.rng(n,73,Math.round(t.x*100),Math.round(t.y*100)),a={x:t.x,y:.4,z:t.y};switch(r){case`warden_windup`:{let r=E(t.strength);return r===`pulse`?(Q(e,n,{x:t.x,y:1.6,z:t.y},BD,1.2,12),$(e,n,a,HD,3,20)):r===`leap`&&QD(e,n,i,t.x,t.y,6),!0}case`warden_strike`:return this.#e(e,t,n,i),!0;case`warden_land`:{let r=t.strength;return Q(e,n,{x:t.x,y:.9,z:t.y},Y(`#f0d8ff`,2.2),1.8,12),$(e,n,a,HD,r+.8,18),$(e,n,a,WD,r*.9,26,2),Ax.hit(e,n,i,a,0,0,2),$D(e,n,i,t.x,t.y,r*.8,14),QD(e,n,i,t.x,t.y,10),eO(e,n,i,t.x,t.y,r),!0}case`warden_wave`:return Q(e,n,{x:t.x,y:.5,z:t.y},BD,1.2,8),tx(e,n,{x:t.x,y:.6,z:t.y},HD,3,10),!0;case`warden_spike`:{let r=t.strength;Q(e,n,{x:t.x,y:.5,z:t.y},zD,.7,7);for(let a=0;a<5;a++){let o=a/5*Math.PI*2+i.float(),s=r*X(i,.1,.7);e.chunks.add(n,{kind:`glow`,x:t.x+Math.cos(o)*s,y:.05,z:t.y+Math.sin(o)*s,vx:Math.cos(o)*.5,vy:X(i,3.6,5),vz:Math.sin(o)*.5,life:X(i,22,30),size:X(i,.12,.18),spin:6,axis:Z(i,0),color:VD,gravity:-12})}return QD(e,n,i,t.x,t.y,2),!0}case`warden_pulse`:{let r={x:t.x,y:1.8,z:t.y};Q(e,n,r,qD,1.8,14),tx(e,n,r,zD,6,16),$(e,n,a,HD,26,34),$(e,n,a,BD,14,24,3);for(let r=0;r<40;r++){let r=i.float()*Math.PI*2,a=X(i,.5,14);e.sparks.emit(n,{x:t.x+Math.cos(r)*a,y:.1,z:t.y+Math.sin(r)*a,vy:X(i,3,6),drag:1.2,delay:Math.round(a*1.2),life:X(i,14,22),size:.05,color:zD,color2:BD,shape:J.spark,stretch:2})}return!0}case`warden_shed`:Q(e,n,{x:t.x,y:1.6,z:t.y},KD,1.1,10);for(let r=0;r<16;r++){let r=Z(i,.3),a=X(i,2,4.5);e.sparks.emit(n,{x:t.x,y:1.6,z:t.y,vx:r.x*a,vy:Math.abs(r.y)*a+1.5,vz:r.z*a,ay:-7,drag:1.2,life:X(i,16,24),size:.05,color:GD,color2:KD,shape:J.spark,stretch:1.5})}return!0;case`warden_shard`:Q(e,n,{x:t.x,y:.8,z:t.y},KD,.9,10),$(e,n,a,KD,1.2,16);for(let r=0;r<14;r++){let a=i.float()*Math.PI*2;e.sparks.emit(n,{x:t.x+Math.cos(a)*.4,y:.2,z:t.y+Math.sin(a)*.4,vy:X(i,1.5,3),drag:1,delay:r%4,life:X(i,16,24),size:.045,color:GD,color2:KD,shape:i.float()<.4?J.star:J.mote,spin:5})}return!0;default:return!1}}#e(e,t,n,r){let i=E(t.strength),a={x:t.x,y:.4,z:t.y};if(i===`sweep`||i===`backsweep`){let a=Math.atan2(t.dy,t.dx),o=i===`sweep`?1:-1;for(let i=0;i<14;i++){let s=a+o*(-1.3+2.6*i/13),c=X(r,2.6,4),l=t.x+Math.cos(s)*c,u=t.y+Math.sin(s)*c;e.sparks.emit(n,{x:l,y:X(r,.4,1.4),z:u,vx:-Math.sin(s)*o*4,vy:X(r,0,1),vz:Math.cos(s)*o*4,drag:2,delay:Math.floor(i/3),life:X(r,10,15),size:.05,color:WD,color2:UD,shape:J.streak,stretch:2.4}),i%3==0&&QD(e,n,r,l,u,1)}}else if(i===`smash`||i===`stomp`){let o=i===`smash`?2.4:3.8;Q(e,n,{x:t.x,y:.7,z:t.y},Y(`#ead8ff`,1.8),1.3,9),$(e,n,a,HD,o+.4,16),$(e,n,a,WD,o*.8,22,2),Ax.hit(e,n,r,a,0,0,1.6),$D(e,n,r,t.x,t.y,o*.7,i===`smash`?10:7),QD(e,n,r,t.x,t.y,6),eO(e,n,r,t.x,t.y,o*.9)}else if(i===`leap`)QD(e,n,r,t.x,t.y,8),$(e,n,a,WD,2.2,14);else if(i===`barrage`){let r={x:t.x+t.dx*.45,y:1.85,z:t.y+t.dy*.45};Q(e,n,r,zD,1.1,8),tx(e,n,r,HD,2.4,10)}else i===`rush`&&(QD(e,n,r,t.x-t.dx*.6,t.y-t.dy*.6,6),Ax.hit(e,n,r,a,-t.dx,-t.dy,1))}},nO=new Set([Kb.hit,Kb.death,Kb.arc,Kb.gust,Kb.burn,Kb.poison,Kb.stun,Kb.explode,Kb.hurt,Kb.dodge,Kb.decay,Kb.radiate,...iD,...IT,`core:fireball`,`core:fire_hit`,`core:ice_shard`,`core:ice_hit`,`core:whirlwind`,`core:lunge`,`core:pierce`,`core:enemy_shot`,`core:enemy_dash`,...ww,...JD]),rO=new Set([`core:fire_hit`,`core:ice_hit`]),iO=6,aO=`core:thunder_curse`,oO=.62,sO=(e,t=1)=>new B(e).multiplyScalar(t),cO=class{vfx;#e=new lD;#t=new Map;#n;#r;#i;#a=null;#o=()=>1;#s=new R;#c=new AC;#l=new Cw;#u=new tO;#d;#f;#p;#m=null;#h=null;constructor(e,t){this.vfx=new ZS(t??0),this.#n=sO(e.spark,1.6),this.#r=sO(e.impact,1.4),this.#i=sO(e.shatter,1.4);let n=t!==void 0;this.#d=new OT(this.vfx.group,n),this.#f=new tD(this.vfx.group,n),this.#p=new lE(this.vfx.group,n)}attach(e,t,n){this.#a=e,this.#o=t,this.#c.attach(n),this.#f.attach(e)}get cast(){return this.#m}claims(e){return nO.has(e)}#g(e){let t=this.#a?.enemies.get(e.def),n=t?e.radius/t.radius:1;return{x:e.x,z:e.y,lift:Nf(e.air,e.airTotal,1),height:this.#o(e.visual)*n,radius:e.radius}}observe(e,t,n){let r=this.#a;if(!r)return;let i=this.#e.read(t,e),a=this.vfx,o=new Map(e.enemies.map(e=>[e.id,e])),s=e.player;this.#h=s.dead&&s.hp<=0?{x:s.x,y:s.y}:null;let c=this.#c.observe(a,e,n);this.#l.observe(a,e,n),this.#u.observe(a,e,n,r),this.#d.observe(a,e,n,e=>this.#g(e)),this.#f.observe(a,e,t,n,e=>this.#g(e)),this.#p.observe(a,e,t,n),c&&(this.#m={frame:n,...c});let l=new Set;for(let e of t)e.type===`cue`&&rO.has(e.cue)&&l.add(lO(e.x,e.y));let u=i.hits.filter(e=>e.element).length,d=u>iO?Math.sqrt(iO/u):1;if(i.hits.forEach((t,i)=>{let s=o.get(t.target),c=s?this.#g(s):null,u={x:t.x,y:(c?.lift??0)+(c?.height??1.2)*oO,z:t.y},f=t.element?nS(t.element,r.elements.get(t.element)?.color):null;if(this.#_(n,i,u,t.dx,t.dy,t.strength,f,l.has(lO(t.x,t.y))),f&&(f.hit(a,n,ZS.rng(n,11,i),u,t.dx,t.dy,t.strength*d),f===Bx)){let t=e.player;Vx(a,n,ZS.rng(n,12,i),u,{x:t.x,y:.9,z:t.y})}}),i.arcs.forEach((e,t)=>{this.#v(n,t,e)}),i.gusts.forEach((e,t)=>{e.targets.forEach((r,i)=>{let o={x:e.x,y:.75,z:e.y};xx(a,n,ZS.rng(n,13,t,i),o,{x:r.x,y:.75,z:r.y})})}),n%2==0)for(let t of e.enemies)t.knock<=0||t.air>0||t.hp<=0||jx(a,n,ZS.rng(n,t.id,17),this.#g(t));i.ticks.forEach((t,r)=>{let i=null;for(let n of e.enemies)Math.abs(n.x-t.x)<1e-6&&Math.abs(n.y-t.y)<1e-6&&(i=n);let o=i?this.#g(i):{x:t.x,z:t.y,lift:0,height:1.2,radius:.4};ED(a,n,ZS.rng(n,14,r),t,o)}),TD(a,n,e.enemies,e=>this.#g(e))}#_(e,t,n,r,i,a,o,s=!1){let c=ZS.rng(e,10,t),l=o?4:6+Math.round(a*5);for(let t=0;t<l;t++){let t=(c.float()-.5)*1.4,a=r-i*t,s=i+r*t,l=4+c.float()*5;this.vfx.sparks.emit(e,{...n,vx:a*l,vy:1+c.float()*3,vz:s*l,ay:-9.8,drag:2.5,life:10+c.float()*8,size:.03,color:o?.core??this.#n,shape:J.spark,stretch:1.6})}o||s||this.vfx.sparks.emit(e,{x:n.x-r*.3,y:n.y,z:n.z-i*.3,life:7,size:.35+.1*Math.min(2,a),grow:1.5,color:this.#r,shape:J.star,angle:c.float()*3})}#v(e,t,n){let r=this.#a,i=n.kind===`chain`?n.reaction:n.kind===`death`?aO:n.element,a=(n.kind===`fork`?r?.elements.get(n.element??``)?.color:void 0)??(i?r?.reactions.get(i)?.color:void 0)??`#4ae0ff`,o=sO(a,1.4),s=sO(a,.5).add(sO(`#ffffff`,2)),c=ZS.rng(e,15,t);this.vfx.bolts.add(e,{from:new R(n.fromX,.85,n.fromY),to:new R(n.toX,.85,n.toY),life:12,width:.04,glow:o,core:s,jag:.14,branches:2,seed:c.u32()});for(let[t,r,i]of[[n.fromX,n.fromY,.22],[n.toX,n.toY,.32]])this.vfx.sparks.emit(e,{x:t,y:.85,z:r,life:9,size:i,grow:1.4,color:o,alpha:.45,shape:J.glow});for(let t=0;t<8;t++){let t=c.float()*Math.PI*2,r=3+c.float()*4;this.vfx.sparks.emit(e,{x:n.toX,y:.85,z:n.toY,vx:Math.cos(t)*r,vy:1+c.float()*2,vz:Math.sin(t)*r,ay:-6,drag:3,life:8+c.float()*6,size:.03,color:s,color2:o,shape:J.spark,stretch:2})}n.kind===`chain`&&this.#f.arc(this.vfx,e,ZS.rng(e,19,t),n)}cue(e,t){if(!nO.has(e.cue))return!1;if(this.#f.drew(e)||this.#p.cue(this.vfx,e,t)||this.#c.cue(this.vfx,e,t)||this.#l.cue(this.vfx,e,t)||this.#u.cue(this.vfx,e,t))return!0;let n=this.#h;if(e.cue===Kb.death&&n&&uO(n.x,e.x)&&uO(n.y,e.y))return this.#y(e,t),!0;if(e.cue===Kb.death){let n=ZS.rng(t,16,Math.round(e.x*100),Math.round(e.y*100));for(let r=0;r<18;r++){let r=n.float()*Math.PI*2,i=1.5+n.float()*3;this.vfx.sparks.emit(t,{x:e.x,y:.5,z:e.y,vx:Math.cos(r)*i,vy:1+n.float()*3,vz:Math.sin(r)*i,ay:-6,drag:1.5,life:26+n.float()*14,size:.05,color:this.#i,shape:J.flake,spin:8})}}return!0}#y(e,t){let n=this.vfx,r=ZS.rng(t,18),i={x:e.x,y:.5,z:e.y};n.sparks.emit(t,{...i,life:14,size:.9,grow:1.4,color:this.#r,alpha:.7,alpha2:0,shape:J.glow}),n.mark(t,{layer:`ground`,x:i.x,y:.03,z:i.z,size:.4,size2:2.2,alpha:.8,life:30,r:this.#n.r*.6,g:this.#n.g*.6,b:this.#n.b*.6,shape:J.shock,flat:!0});for(let e=0;e<24;e++){let e=r.float()*Math.PI*2,a=.2+r.float()*.5;n.sparks.emit(t,{x:i.x+Math.cos(e)*a,y:.2+r.float()*.8,z:i.z+Math.sin(e)*a,vy:.6+r.float()*1.2,drag:.8,delay:r.int(0,10),life:40+r.float()*30,size:.04,color:this.#n,shape:J.mote})}}beginFrame(){this.#t.clear()}anchor(e,t,n){this.#t.set(e.id,{id:e.id,x:t.x,z:t.y,lift:t.lift,height:n*t.size,radius:e.radius})}draw(e,t,n,r){let i=this.vfx;i.begin();let a=this.#a?.elements.get(`core:unholy`)?.color??`#c0304a`;jD(i,this.#t,e.enemies,t,sO(a,1.6)),this.#c.draw(i,e,t,r),this.#l.draw(i,e,t,r),this.#a&&this.#u.draw(i,e,t,this.#a),this.#d.draw(i,e,t,this.#t,e=>this.#g(e)),this.#f.draw(i,e,t,r),this.#p.draw(i,e,t,r),i.end(t,this.#s.copy(n))}reset(){this.#e.reset(),this.#t.clear(),this.#c.reset(),this.#l.reset(),this.#d.reset(),this.#f.reset(),this.#p.reset(),this.#m=null,this.#h=null,this.vfx.clear()}dispose(){this.#d.dispose(),this.#p.dispose(),this.#f.dispose(),this.vfx.dispose()}};function lO(e,t){return`${e},${t}`}var uO=(e,t)=>Math.abs(e-t)<1e-6,dO=-1,fO=e=>dO-e,pO=-100,mO=new B,hO=new B;function gO(e,t){let[n,r]=t[0]??[e.width/2,e.height/2],i=[];for(let t=0;t<6;t++){let o=[],s=3.2+t%3*.8;for(let i=0;i<4;i++){let c=t*1.37+Math.PI/2*i+i%2*.3,l=n+Math.cos(c)*s,u=r+Math.sin(c)*s;if(a(e,Math.floor(l),Math.floor(u)))continue;let d=o[o.length-1];(!d||w(e,d[0],d[1],l,u,.35))&&o.push([l,u])}let c=o[0],l=o[o.length-1];if(o.length<2||!c||!l||!w(e,l[0],l[1],c[0],c[1],.35))continue;let u=o.map((e,t)=>{let n=o[(t+1)%o.length]??e;return Math.max(1,Math.round(Math.hypot(n[0]-e[0],n[1]-e[1])/tk))}),d=u.reduce((e,t)=>e+t+nk,0);i.push({spots:o,legs:u,period:d})}return i}function _O(e,t){let n=e.period,r=(t%n+n)%n,i=0,a=Math.floor(t/n),o=e.legs.reduce((e,t)=>e+t*tk,0);for(let t=0;t<e.spots.length;t++){let n=e.spots[t]??[0,0],s=e.spots[(t+1)%e.spots.length]??n,c=e.legs[t]??1,l=Math.atan2(s[0]-n[0],s[1]-n[1]);if(r<nk)return{x:n[0],y:n[1],yaw:l,distance:a*o+i,moving:!1};if(r-=nk,r<c){let e=r/c;return{x:n[0]+(s[0]-n[0])*e,y:n[1]+(s[1]-n[1])*e,yaw:l,distance:a*o+i+r*tk,moving:!0}}r-=c,i+=c*tk}let s=e.spots[0]??[0,0];return{x:s[0],y:s[1],yaw:0,distance:(a+1)*o,moving:!1}}var vO=`#a66bff`,yO=5,bO=.4,xO=new R;function SO(e,t,n){let r=t[0]?.length??0,i=r*t.length,a=new Uint8Array(i);for(let t of e.roads??[])for(let e of t.cells)a[e]=1;let o=new Uint8Array(i),s=e.pieces.find(e=>e.role===`boss`);if(s){let e=Math.min(t.length,s.y+s.h+jO),n=Math.min(r,s.x+s.w+jO);for(let t=Math.max(0,s.y-jO);t<e;t++)for(let e=Math.max(0,s.x-jO);e<n;e++)o[t*r+e]=1}return{rows:t,offset:[0,0],seed:n,theme:`forest`,crystals:()=>AO,marks:{road:e=>a[e]===1,crystal:e=>o[e]===1}}}function CO(){let e=new ha(new Float32Array(1),1,1,gt,it);return e.needsUpdate=!0,e}var wO=[{cloak:`#3f9e4d`,cloth:`#9a7b2f`},{cloak:`#8e4fc0`,cloth:`#2f7f9a`},{cloak:`#d98a26`,cloth:`#5d4a9a`}],TO=12,EO=8,DO={height:1.7,fling:2.4},OO=42,kO=.12,AO=.06,jO=4,MO=9.8,NO=.025,PO=3,FO=12,IO=16,LO=.3,RO=new B(`#ff3344`),zO=new B(`#ffc94a`),BO=new B(`#ffffff`);function VO(e,t){let n=e.hitbox;return n.kind===`arc`?Math.min(2.6,Math.max(N_,n.radius*t-.45)):N_*1.12}var HO=new R,UO=new R,WO=new z,GO=new z,KO=new z,qO=new Vn,JO=new R,YO=new R,XO=new Vn,ZO=new R,QO=new Oa,$O=new Ni,ek=1.5,tk=1.1/60,nk=150,rk=new Set([`rig.prison`,`rig.thorn_trap`,`rig.rampant_crystal`]),ik=new Set([`rig.thorn_trap`]),ak=class{id;#e;#t;#n;#r;#i;#a;#o;#s;height;drape;#c=null;#l=null;#u=null;#d=null;#f=null;#p;#m=null;#h=null;#g={fight:-1,shut:!1,since:-1/0};#_={frame:-1/0,power:0};#v;#y=null;#b;#x;#S=null;#C=null;#w=null;#T;#E=null;#D=[];#O=[];#k={x:0,y:0};#A=new Map;#j=new Em;#M=new Map;#N=[];#P=[];#F=[];#I=[];#L=new Map;#R=new Map;#z=-1;#B=0;#V=0;#H;#U;#W=new B;#G;#K;#q=null;player;enemies;replaces={reaction:()=>!0,ward:!0,stuns:!0,debuffs:!0,areas:!0,beams:!0,doors:!0,loot:!0,walls:!1,lasting:!0,calls:!0,warden:!0};#J;#Y=null;constructor(e){this.id=e.id,this.#e=e.mine,this.#T=new _v(e.mine.scenery),this.#t=e.hunter,this.#n=e.foes,this.#r=e.mine.stage,this.#i=e.hitArea??1,this.#a=e.model,this.#o=e.projectile,this.#s=e.ground,this.#v=e.miner,this.#p=e.camp,this.height=e.ground?(e,t)=>this.#ue(e,t):void 0,this.drape=e.ground?{uDrape:{value:CO()},uDrapeBox:{value:new or(0,0,1,1)}}:void 0,this.#b=e.allies??wO,this.#J=e.walls,this.replaces={...this.replaces,walls:e.walls!==void 0},this.#x=e.pixels,this.#H=new Gb(28,e.pixels),this.#U=new Float32Array(this.#H.samples*6);let t=this.#t.fx;this.#G={glow:new B(t.slash),core:new B(t.slashCore),finisher:new B(t.finisher)},this.#K=new cO({spark:t.spark,impact:t.impact,shatter:this.#n.fx.shatter},e.pixels),this.player={update:(e,t,n,r,i)=>this.#xe(e,t,n,r,i),ally:(e,t,n,r,i,a)=>this.#Se(e,t,n,r,i,a)},this.enemies={handles:e=>this.#X(e)!==null,begin:()=>{this.#K.beginFrame(),this.#P.length=0},add:(e,t,n,r)=>this.#re(e,t,n,r),anchor:(e,t,n)=>this.#K.anchor(e,t,n),end:()=>{}}}attach(e){this.#S=e,this.#B=e.seed,this.#C=new Vv(e,this.#r),e.proto.playerPivot.visible=!1,e.scene.add(this.#K.vfx.group),this.#s&&this.#K.vfx.setLift((e,t)=>this.#ue(e,t)),this.drape&&this.#K.vfx.setDrape(this.drape),this.#K.attach(e.content,t=>e.skin.visuals.get(t)?.params.height||1.2,t=>e.skin.visuals.get(t)?.gen);let t=e.skin.visuals.get(e.content.player.visual),n=t?ip[t.gen]:void 0;if(n&&t){let r=this.#t,i=this.#a?.(t.gen,r.palette,1)??rv(n,r,r.palette,1),a=new V({color:0,transparent:!0,blending:2,depthWrite:!1}),o={rig:i.rig,parts:i.parts.filter(e=>!e.hull).map(e=>({...e,material:a,renderOrder:23}))};this.#E={batch:new mm(e.scene,i,1,this.#le(r.palette)),animator:new Q_,ghosts:new mm(e.scene,o,6)},e.scene.add(this.#H.group)}else e.proto.playerPivot.visible=!0;for(let t of e.content.enemies.values())this.#X(t.visual);e.renderer.compile(e.scene,e.camera)}#X(e){let t=this.#A.get(e);if(t!==void 0)return t;let n=this.#S,r=n?.skin.visuals.get(e),i=null;if(n&&r&&r.gen!==`rig.hunter`){let e=this.#n,t=e.palettes[r.gen]??{},a=ip[r.gen],o=this.#a?.(r.gen,t,7)??(a?rv(a,e,t,7):null);o&&(i={style:e,model:o,batch:new mm(n.scene,o,32,this.#s&&!ik.has(r.gen)?{color:vO,renderOrder:-5,parts:yO}:void 0),animator:Ug(r.gen)})}return this.#A.set(e,i),i}observe(e,t,n){this.#s&&this.#fe(e);let r=e.player;if(e.hitstop<=0){let t=r.dodgeFrame<0&&!r.dash&&!r.pull&&!r.dead;this.#j.step(dO,r.x,r.y,t,e.frame),e.party?.forEach((t,n)=>{let r=t.player,i=r.dodgeFrame<0&&!r.dash&&!r.pull&&!r.dead&&!r.downed;this.#j.step(fO(n+1),r.x,r.y,i,e.frame)});for(let t of e.enemies){if(!this.#X(t.visual))continue;let n=t.state===`free`&&t.knock<=0&&t.stun<=0&&t.air<=0;this.#j.step(t.id,t.x,t.y,n,e.frame)}e.map?.rescues?.forEach((t,n)=>{t.phase>0&&this.#j.step(pO-n,t.x,t.y,!0,e.frame)}),this.#j.sweep(e.frame)}this.#s&&this.#ye(e,n),e.camp&&this.#p&&this.#ve(n,this.#_e(e));let i=e.map?.fight,a=this.#g;i!==void 0!==a.shut&&(this.#g={fight:i??a.fight,shut:i!==void 0,since:e.frame});let o=-1;for(let r of t)r.type===`cue`&&r.cue===`core:cart_hit`&&(this.#_={frame:e.frame,power:r.strength}),r.type===`damage`?o=r.target:r.type===`cue`&&r.cue===Kb.hit&&o>=0?this.#L.set(o,{frame:n,dx:r.dx,dy:r.dy}):r.type===`cue`&&r.cue===`core:boss_slam`&&(this.#z=n);for(let t of e.enemies)t.boss&&t.boss.phase>=2&&!this.#R.has(t.id)&&this.#R.set(t.id,n);for(let e of t){if(e.type!==`death`)continue;let t=this.#M.get(e.target),r=t?this.#X(t.visual):null;if(!t||!r)continue;let i=new Float32Array(r.animator.pose({...t.motion,x:0,y:0,yaw:0,lift:0})),a=e.launch,o=a?n+1+a.hold:n;this.#N.push({beast:r,local:i,x:e.x,y:e.y,yaw:t.motion.yaw,dx:a?.dx??0,dy:a?.dy??0,start:o,land:a&&a.total>0?o+a.air:o,from:a&&a.total>0?(a.total-a.air)/a.total:1,seed:p(this.#B,`remains:${e.target}:${n}`)})}let s=new Map;for(let t of e.enemies){if(!this.#X(t.visual))continue;let n=this.#Z(t,r.x,r.y);s.set(t.id,{visual:t.visual,motion:this.#ee(t,{x:t.x,y:t.y,lift:0,yaw:n,size:this.#$(t)},1,e.frame)})}this.#M=s,this.#K.observe(e,t,n)}#Z(e,t,n){if(this.#Q(e))return 0;if(e.boss?.warden)return Math.atan2(e.aimX,e.aimY);let r=e.bulwark!==void 0||(e.boss?e.boss.mode!==`walk`:e.state!==`free`);return Math.atan2(r?e.aimX:t-e.x,r?e.aimY:n-e.y)}#Q(e){let t=this.#S?.skin.visuals.get(e.visual)?.gen;return t!==void 0&&rk.has(t)}#$(e){let t=this.#S?.content.enemies.get(e.def);return t?e.radius/t.radius:1}#ee(e,t,n,r){let i=this.#S?.content.enemies.get(e.def)?.attack,a=e.knock>0?e.kx:0,o=e.knock>0?e.ky:0,s=Math.sqrt(a*a+o*o);s>1e-6&&(a/=s,o/=s);let c=Math.cos(t.yaw),l=Math.sin(t.yaw),u=this.#L.get(e.id),d=null;return u&&(d={age:r-u.frame,x:u.dx*c-u.dy*l,z:u.dx*l+u.dy*c}),{hit:d,boss:e.boss&&!e.boss.warden?this.#te(e,n,r):null,warden:e.boss?.warden?this.#ne(e,n,r):null,x:t.x,y:t.y,lift:t.lift,yaw:t.yaw,size:t.size,gait:this.#j.get(e.id)?.gait??null,alpha:n,state:e.state,frame:e.stateFrame-1+n,warn:e.warnFrames,recover:i?.recover??30,travelled:e.travelled,flash:e.flash/EO,pushX:a*c-o*l,pushZ:a*l+o*c,air:e.air<=0||e.airTotal<=0?-1:km((e.airTotal-e.air-1+n)/e.airTotal,0,1),stun:e.stun,time:r,...e.rise?{rise:km((30-e.rise-1+n)/30,0,1)}:{},...e.sleep?{asleep:!0}:{}}}#te(e,t,n){let r=e.boss;if(!r)return null;let i=this.#S?.content.enemies.get(e.def),a=(r.pattern>=0?i?.boss?.patterns[r.pattern]:void 0)?.kind,o=this.#R.get(e.id),s=r.breakStun-e.stun;return{kind:a===`slam`||a===`ring`||a===`charge`?a:null,mode:r.mode,frame:r.frame-1+t,warn:r.warn,grown:o===void 0?0:K((n-o)/30),struck:this.#z>=0?n-this.#z:-1,broken:e.stun>0?K(s/10)*K(e.stun/15):0}}#ne(e,t,n){let r=e.boss,i=r?.warden;if(!r||!i)return null;let a=this.#S?.content.enemies.get(e.def)?.boss?.moves?.skills.find(e=>e.kind===`barrage`),o=this.#R.get(e.id),s=r.breakStun-e.stun;return{move:i.move,stage:i.stage,frame:Math.max(0,i.frame-1+t),length:i.length,step:i.step,beat:a?.kind===`barrage`?a.gap:18,grown:o===void 0?0:K((n-o)/30),broken:e.stun>0?K(s/10)*K(e.stun/15):0}}#re(e,t,n,r){let i=this.#X(e.visual);if(!i)return;let a=null;if(n){let e=this.#P.length;a=this.#F[e]??new B,this.#F[e]=a,a.copy(n).multiplyScalar(i.style.fx.flash)}this.#P.push({e,at:t,glow:a,clock:r})}#ie(e){let t=this.#S;if(!t)return;let n=t.camera;n.updateMatrixWorld(),QO.setFromProjectionMatrix(WO.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse));for(let e of this.#A.values())e?.batch.begin();for(let{e,at:n,glow:r,clock:i}of this.#P){let a=(t.skin.visuals.get(e.visual)?.params.height||2)*n.size,o=this.#ue(n.x,n.y);$O.center.set(n.x,o+n.lift+a/2,n.y),$O.radius=a+e.radius*n.size+ek,QO.intersectsSphere($O)&&this.#ae(e,n,r,i)}this.#P.length=0,this.#oe(e);for(let e of this.#I)e.beast.batch.unshaded(),e.beast.batch.add(e.joints,e.glow,e.lift);this.#I.length=0;for(let e of this.#A.values())e?.batch.end()}#ae(e,t,n,r){let i=this.#X(e.visual);if(!i)return;let a=this.#Q(e)?{...t,yaw:0}:t;if(this.#V>0&&e.flash>0){let n=(r.frame%2==0?1.2:-1.2)*NO,i=Math.sqrt(e.kx*e.kx+e.ky*e.ky),[o,s]=i>1e-6?[e.kx/i,e.ky/i]:[1,0];a={...t,x:t.x+o*n,y:t.y+s*n}}let o=i.animator.pose(this.#ee(e,a,r.alpha,r.time)),s=this.#ue(a.x,a.y);e.rise?this.#I.push({beast:i,joints:o.slice(),glow:n?.clone()??null,lift:s}):i.batch.add(o,n,s)}#oe(e){let t=e.time;this.#N=this.#N.filter(e=>t<e.land+OO);for(let e of this.#N){let n=e.beast.batch,r=e.local.length/16,i=new Float32Array(e.local.length);if(t<e.land){let a=Math.max(0,(t-e.start)/Math.max(1,e.land-e.start)),o=e.from+(1-e.from)*a,s=DO.fling*(1-e.from)*(1-(1-a)**2);KO.makeTranslation(e.x+e.dx*s,4*DO.height*o*(1-o),e.y+e.dy*s),KO.multiply(WO.makeRotationY(e.yaw)),KO.multiply(WO.makeTranslation(0,.5,0)),KO.multiply(WO.makeRotationX(-Math.PI*2*a)),KO.multiply(WO.makeTranslation(0,-.5,0));for(let t=0;t<r;t++)WO.fromArray(e.local,t*16).premultiply(KO).toArray(i,t*16);let c=1-Math.min(1,Math.max(0,t-e.start)/10),l=.9*c*e.beast.style.fx.flash,u=this.#ue(e.x+e.dx*s,e.y+e.dy*s);n.add(i,c>0?this.#W.copy(BO).multiplyScalar(l):null,u);continue}let a=DO.fling*(1-e.from);KO.makeTranslation(e.x+e.dx*a,0,e.y+e.dy*a),KO.multiply(WO.makeRotationY(e.yaw));let o=(t-e.land)/60,s=1-K((t-e.land)/OO),c=e.beast.model.parts,l=new Float32Array(c.length*16),u=_(e.seed),d=Array.from({length:r},()=>({vx:(u.float()-.5)*5,vy:2+u.float()*3,vz:(u.float()-.5)*5,ax:u.float()-.5,ay:u.float()-.5,az:u.float()-.5,w:6+u.float()*10}));c.forEach((t,n)=>{let r=d[t.joint];if(!r)return;WO.fromArray(e.local,t.joint*16).premultiply(KO),WO.decompose(YO,XO,ZO);let i=Math.max(.05,YO.y+r.vy*o-.5*MO*o*o);JO.set(r.ax,r.ay,r.az).normalize(),qO.setFromAxisAngle(JO,r.w*o).multiply(XO),YO.set(YO.x+r.vx*o,i,YO.z+r.vz*o),GO.compose(YO,qO,ZO.multiplyScalar(Math.max(.001,s))),GO.toArray(l,n*16)}),n.addPieces(l,null,this.#ue(e.x+e.dx*a,e.y+e.dy*a))}}cue(e,t,n){let r=this.#S;if(!r||!this.#K.claims(e.cue))return!1;if((e.cue===Kb.dodge||e.cue===`core:lunge`)&&this.#se(e,n),e.cue===`core:level_up`&&r.fx.ascension.play(n),e.cue===Kb.hit){let t=e.strength>=2.5?.42:Math.min(.22,.04+.07*e.strength);r.fx.shake(n,t)}return this.#K.cue(e,n)}#se(e,t){let n=this.#S,r=this.#E;if(!n||!r)return;let i=e.cue!==Kb.dodge,a=i?e.strength:n.content.player.dodgeDistance,o=Math.atan2(e.dx,e.dy);for(let s=0;s<PO;s++){let c=(s+.5)/PO,l={x:e.x+e.dx*a*(s/PO),y:e.y+e.dy*a*(s/PO),yaw:o,gait:null,alpha:1,swing:null,steps:n.content.action.steps,chain:0,dodge:i?null:{t:c,dx:e.dx,dy:e.dy},dash:i?{t:c,dx:e.dx,dy:e.dy}:null,hurt:0,dead:!1,time:t};this.#O.push({joints:new Float32Array(r.animator.pose(l)),start:t+s*(i?2:3),lift:this.#ue(l.x,l.y)})}this.#O=this.#O.slice(-6)}#ce(e){let t=this.#E;if(t){this.#O=this.#O.filter(t=>e-t.start<FO),t.ghosts.begin();for(let n of this.#O){let r=e-n.start;if(r<0)continue;let i=.55*(1-r/FO);t.ghosts.add(n.joints,this.#W.copy(this.#G.glow).multiplyScalar(i),n.lift)}t.ghosts.end()}}fog(e){let t=this.#c?.fog;if(!t||!e){this.#h=null,t&&(t.uFogOn.value=0);return}let n=this.#h;if(n?.key===e.key&&n.version===e.version)return;let r=t.uFog.value;(r.image.width!==e.width||r.image.height!==e.height)&&(r.dispose(),r=dy(new Uint8Array(e.width*e.height),e.width,e.height),t.uFog.value=r);let i=r.image.data;for(let t=0;t<i.length;t++)i[t]=e.seen[t]?255:0;r.needsUpdate=!0,t.uFogBox.value.set(0,0,1/e.width,1/e.height),t.uFogOn.value=1,this.#h={key:e.key,version:e.version,width:e.width,height:e.height,seen:e.seen}}hidden(e,t){let n=this.#h;if(!n)return!1;let r=Math.floor(e),i=Math.floor(t);return r<0||i<0||r>=n.width||i>=n.height||n.seen[i*n.width+r]!==1}walls(e){e.length>0&&!this.#Y&&this.#J&&this.#S&&(this.#Y=this.#J(),this.#S.scene.add(this.#Y.group)),this.#Y?.show(e,(e,t)=>this.#ue(e,t))}model(e){return e?this.#o?.(e.gen)??Bp(e.gen):null}stage(e,t){let n=this.#S;if(!n)return;if(this.#q=e,this.#V=e.hitstop,this.#T.update(e,t.time),this.#s){this.#de(e,t);return}let r=`${e.arena}|${e.width}x${e.height}|${e.seed}`;if(this.#w?.key===r)return;this.#w&&n.scene.remove(this.#w.group);let i=fv(this.#e,e.width,e.height,e.seed);n.scene.add(i),this.#w={key:r,group:i},this.#T.stage(i.userData.glow??null)}#le(e){if(this.#s)return{color:e.cloth??`#9fdcff`,renderOrder:-5}}#ue(e,t){return this.#l?.height(e,t)??0}#de(e,t){this.#fe(e),this.#l?.update(t.time),this.#u&&this.#u.props.update(ok(e,this.#u.floor,this.#g,this.#_),t.time),this.#d&&e.camp&&this.#d.props.update({stall:e.build?.stall!==void 0,lift:Math.max(0,Math.min(1,e.camp.lift/45))},t.time),this.#be(e,t),this.#pe(e,t)}#fe(t){let r=this.#S,i=this.#s;if(!r||!i)return;let a=r.content,o=a.arenas.get(t.arena),c,l,u=null,d=t.map?.floor??0,f=t.camp?o?.camp:void 0,p=o?.dungeon&&!f?n(a.pieces,o.dungeon,d,t.seed):null;if(f){let e=f.rows;c=`${t.arena}|camp`,l=()=>({rows:e,offset:[0,0],seed:11,theme:`camp`,crystals:()=>0,lights:()=>{let t=s(e);return[...(t.marks.get(`f`)??[]).map(e=>yy(t,e,!0)),...(t.marks.get(`l`)??[]).map(e=>yy(t,e,!1))]}})}else if(p){u=e(p,null,t.map?.broken??[]),c=`${t.arena}|${d}|${t.seed}`;let n=p.rows[0]?.length??0,i=new Uint8Array(n*p.rows.length),a=new Float32Array(n*p.rows.length).fill(kO);for(let e of p.pieces){let t=r.content.pieces.get(e.template);if(t&&(t.water||t.crystals!==void 0))for(let r=e.y;r<e.y+e.h;r++)for(let o=e.x;o<e.x+e.w;o++)t.water&&(i[r*n+o]=1),t.crystals!==void 0&&(a[r*n+o]=t.crystals)}let o=u;l=p.roads?()=>SO(p,o,t.seed+d*101):()=>({rows:o,offset:[0,0],seed:t.seed+d*101,flooded:e=>i[e]===1,crystals:e=>a[e]??kO})}else if(o?.map){let e=o.map.rows;c=t.arena,l=()=>({rows:e,offset:[0,0],seed:t.seed})}else c=`${t.arena}|${t.width}x${t.height}`,l=()=>{let e=db(t.width,t.height);return{rows:e.rows,offset:e.offset,seed:t.seed}};if(this.#w?.key!==c){this.#w&&r.scene.remove(this.#w.group),this.#l?.dispose(),this.#c??=eb(i);let e=new lb(l(),this.#c);if(r.scene.add(e.group),this.#w={key:c,group:e.group},this.#l=e,this.#T.stage(null),this.#T.crystals(this.#c.crystal),this.#ge(e),this.#he(f&&this.#p?this.#p.fog:p?.roads&&i.forestFog?i.forestFog:i.fogs?.[p?Math.min(d,i.fogs.length-1):0]),this.#d&&=(r.scene.remove(this.#d.props.group),this.#d.props.dispose(),null),this.#C?.outdoors(f?`night`:p?.roads?`day`:null),f&&this.#p){let t=s(f.rows),n=new Ib(t,(t,n)=>e.height(t,n),this.#p.colours);r.scene.add(n.group);let i=(t.marks.get(`f`)??[]).map(e=>[e%t.width+.5,Math.floor(e/t.width)+.5]);this.#d={props:n,terrain:t,walkers:gO(t,i),fire:i}}if(this.#u&&=(r.scene.remove(this.#u.props.group),this.#u.props.dispose(),null),p){let t=new Nb(p,s(p.rows),(t,n)=>e.height(t,n),i.props,this.#c.fog,e=>r.content.pieces.get(e)?.crowns===!0);r.scene.add(t.group),this.#u={floor:p,props:t}}}else u&&this.#l?.refresh(u)&&this.#ge(this.#l)}#pe(e,t){let n=this.#S,r=this.#d,i=this.#f;if(!n||!r||!e.camp){if(i)for(let e of[i.mentor,i.merchant,i.miners])e?.batch.begin(),e?.batch.end();return}let a=(e,t,r)=>{let i=t?this.#a?.(e,t,3):null;return i?{batch:new mm(n.scene,i,r),animator:new Q_}:null};this.#f??={mentor:a(`rig.mentor`,this.#p?.mentor,1),merchant:a(`rig.merchant`,this.#p?.merchant,1),miners:a(`rig.miner`,this.#v,7)};let o=e.player,s=r.terrain,c=(e,r)=>{let i=s.marks.get(r)?.[0];if(!e||i===void 0)return;let[a,c]=Pb[r]??[0,0],l=i%s.width+.5+a,u=Math.floor(i/s.width)+.5+c,d=(o.x-l)**2+(o.y-u)**2<25;e.batch.add(e.animator.pose(this.#me(n,l,u,d?Math.atan2(o.x-l,o.y-u):0,t)),null,this.#ue(l,u))},{mentor:l,merchant:u,miners:d}=this.#f;l?.batch.begin(),c(l,`m`),l?.batch.end(),u?.batch.begin(),c(u,`g`),u?.batch.end(),d?.batch.begin();let f=e.camp.miners??0;f>0&&e.build?.stall&&c(d,`n`);let p=Math.min(6,Math.max(0,f-1),r.walkers.length);for(let e=0;e<p;e++){let i=r.walkers[e];if(!i||!d)continue;let a=_O(i,t.time),o=_O(i,t.time-1),s=this.#me(n,a.x,a.y,a.yaw,t),c=a.moving?{distance:a.distance,previous:o.distance,speed:tk*60,dirX:Math.sin(a.yaw),dirY:Math.cos(a.yaw)}:null;d.batch.add(d.animator.pose({...s,gait:c}),null,this.#ue(a.x,a.y))}d?.batch.end()}#me(e,t,n,r,i){return{x:t,y:n,yaw:r,gait:null,alpha:i.alpha,swing:null,steps:e.content.action.steps,chain:0,dodge:null,dash:null,hurt:0,dead:!1,time:i.time}}#he(e){let t=this.#S?.scene;t&&e&&(t.fog?.color.set(e),t.background instanceof B&&t.background.set(e))}#ge(e){let t=this.drape;if(!t)return;let n=e.heightMap(),r=new ha(n.data,n.width,n.height,gt,it);r.magFilter=Ke,r.minFilter=Ke,r.needsUpdate=!0,t.uDrape.value.dispose(),t.uDrape.value=r;let[i,a,o,s]=n.box;t.uDrapeBox.value.set(i,a,1/o,1/s)}#_e(e){let t=this.#S?.content.arenas.get(e.arena)?.camp?.rows;if(!t)return[];if(this.#m?.rows!==t){let e=s(t),n=(e.marks.get(`f`)??[]).map(t=>[t%e.width+.5,Math.floor(t/e.width)+.5]);this.#m={rows:t,spots:n}}return this.#m.spots}#ve(e,t){for(let[n,r]of t){let t=_(p(this.#B,`ember:${e}:${n}`));for(let i=0;i<2;i++)this.#K.vfx.ambience.emit(e,{x:n+(t.float()-.5)*.5,y:.4+t.float()*.3,z:r+(t.float()-.5)*.5,vx:(t.float()-.5)*.3,vy:.6+t.float()*.6,vz:(t.float()-.5)*.3,life:50+Math.floor(t.float()*50),size:.04+t.float()*.03,color:hO.setRGB(1.6,.6+t.float()*.3,.15),alpha:.9,alpha2:0,shape:J.mote})}}#ye(e,t){let n=_(p(this.#B,`dust:${t}`)),r=e.player,i=.5+n.float()*.3;this.#K.vfx.ambience.emit(t,{x:r.x+(n.float()-.5)*18,y:.3+n.float()*2.6,z:r.y+(n.float()-.5)*14,vx:(n.float()-.5)*.12,vy:.03+n.float()*.08,vz:(n.float()-.5)*.12,life:180+Math.floor(n.float()*120),size:.025+n.float()*.02,color:mO.setRGB(i,i*.92,i*.82),alpha:.35,alpha2:0,shape:J.mote})}#be(e,t){let n=this.#S,r=this.#v,i=e.map?.rescues??[];if(!n||!r||!this.#y&&!i.some(e=>e.phase>0))return;if(!this.#y){let e=this.#a?.(`rig.miner`,r,1);if(!e)return;this.#y={batch:new mm(n.scene,e,4),animator:new Q_}}let{batch:a,animator:o}=this.#y,s=e.player;a.begin(),i.forEach((e,r)=>{if(e.phase===0)return;let i=this.#j.get(pO-r)?.gait??null,c=i!==null&&i.speed>.3?Math.atan2(i.dirX,i.dirY):Math.atan2(s.x-e.x,s.y-e.y),l={x:e.x,y:e.y,yaw:c,gait:i,alpha:t.alpha,swing:null,steps:n.content.action.steps,chain:0,dodge:null,dash:null,hurt:0,dead:!1,time:t.time};a.add(o.pose(l),null,this.#ue(e.x,e.y))}),a.end()}#xe(e,t,n,r,i){let a=this.#S,o=this.#E;if(!a||!o)return;let s=e.player,c=a.content;this.#k.x=t,this.#k.y=n;let l=e.hitstop>0?e.frame%2==0?NO:-.025:0,u=this.#K.cast,d=e.areas.find(e=>(e.owner??0)===0),f={x:t+s.fx*l,y:n+s.fy*l,yaw:Math.atan2(s.fx,s.fy),gait:this.#j.get(dO)?.gait??null,alpha:i.alpha,swing:r,steps:c.action.steps,chain:km(s.attackBuffer/4,0,1),dodge:s.dodgeFrame>=0?{t:km((s.dodgeFrame-1+i.alpha)/c.player.dodgeFrames,0,1),dx:s.dodgeX,dy:s.dodgeY}:null,dash:s.dash?{t:s.dash.frame/Math.max(1,s.dash.frames),dx:s.dash.dx,dy:s.dash.dy}:null,hurt:s.hurt/TO,dead:s.dead,time:i.time,cast:u&&i.time-u.frame<IO?{t:(i.time-u.frame)/IO}:null,whirl:d?{turn:jC(d.frame,i.alpha)}:null};this.#we(this.#H,this.#U,o.animator,f,r),this.#ce(i.time);let p=o.animator.pose(f),m=s.invulnerable>0&&s.dodgeFrame<0&&!s.dash&&Math.floor(e.frame/4)%2==1,h=a.fx.ascension.bodyGlow(i.time),g=null;s.hurt>0?g=this.#W.copy(RO).multiplyScalar(s.hurt/TO):h>0&&!m?g=this.#W.copy(zO).multiplyScalar(.9*h):m&&(g=this.#W.copy(BO).multiplyScalar(.35));let _=this.#ue(t,n);if(this.#H.group.position.y=_,o.batch.begin(),o.batch.add(p,g,_),o.batch.end(),this.#C?.follow(t,n,o.animator.lift+_),a.fx.slash.hide(),r){let e=r.index===c.action.steps.length-1;a.fx.hitArea.color.copy(e?this.#G.finisher:this.#G.glow),a.fx.hitArea.opacity*=this.#i,a.fx.shockwave.color.copy(this.#G.finisher)}}#Se(e,t,n,r,i,a){let o=e.party?.[t-1],s=o?this.#Ce(t):null,c=this.#S;if(!c||!o||!s)return;if(s.batch.begin(),o.gone){s.trail.hide(),s.batch.end();return}let l=o.player,u=c.content,d=e.areas.find(e=>e.owner===t),f={x:n,y:r,yaw:Math.atan2(l.fx,l.fy),gait:this.#j.get(fO(t))?.gait??null,alpha:a.alpha,swing:i,steps:u.action.steps,chain:km(l.attackBuffer/4,0,1),dodge:l.dodgeFrame>=0?{t:km((l.dodgeFrame-1+a.alpha)/u.player.dodgeFrames,0,1),dx:l.dodgeX,dy:l.dodgeY}:null,dash:l.dash?{t:l.dash.frame/Math.max(1,l.dash.frames),dx:l.dash.dx,dy:l.dash.dy}:null,hurt:l.hurt/TO,dead:l.dead||l.downed!==void 0,time:a.time,whirl:d?{turn:jC(d.frame,a.alpha)}:null};this.#we(s.trail,s.points,s.animator,f,i);let p=l.invulnerable>0&&l.dodgeFrame<0&&!l.dash&&Math.floor(e.frame/4)%2==1,m=null;l.hurt>0?m=this.#W.copy(RO).multiplyScalar(l.hurt/TO):p&&(m=this.#W.copy(BO).multiplyScalar(.35));let h=this.#ue(n,r);s.trail.group.position.y=h,s.batch.add(s.animator.pose(f),m,h),s.batch.end()}#Ce(e){let t=this.#D[e-1];if(t!==void 0)return t;let n=this.#S,r=n?.skin.visuals.get(n.content.player.visual),i=r?ip[r.gen]:void 0,a=null;if(n&&r&&i){let t=this.#t,o=this.#b[(e-1)%this.#b.length],s={...t.palette,...o},c=this.#a?.(r.gen,s,1)??rv(i,t,s,1),l=new Gb(28,this.#x);n.scene.add(l.group),a={batch:new mm(n.scene,c,1,this.#le(s)),animator:new Q_,trail:l,points:new Float32Array(l.samples*6)}}return this.#D[e-1]=a,a}#we(e,t,n,r,i){if(!i||r.dodge||r.dead||r.dash){e.hide();return}let a=m_(i);if(a.opacity<=0||i.f-a.tail<.05){e.hide();return}let o=VO(i.step,i.widen),s=e.samples;for(let e=0;e<s;e++){let c=a.tail+(i.f-a.tail)*e/(s-1);n.blade({...r,swing:{index:i.index,step:i.step,f:c}},HO,UO);let l=e*6;t[l]=HO.x+UO.x*LO,t[l+1]=HO.y+UO.y*LO,t[l+2]=HO.z+UO.z*LO,t[l+3]=HO.x+UO.x*o,t[l+4]=HO.y+UO.y*o,t[l+5]=HO.z+UO.z*o}let c=i.index===r.steps.length-1;e.show(t,a.opacity,c?this.#G.finisher:this.#G.glow,this.#G.core)}draw(e){let t=this.#S;this.#ie(e),t&&this.#q&&this.#K.draw(this.#q,e.time,t.camera.position,this.#k),this.#Te(),this.#C?.draw()}#Te(){let e=this.#S,t=this.#c?.cut;if(!e||!t)return;let{x:n,y:r}=this.#k,i=this.#ue(n,r),a=e.camera;a.updateMatrixWorld(),xO.set(n,i+1,r);let o=-xO.clone().applyMatrix4(a.matrixWorldInverse).z;xO.project(a),t.uCutOn.value=+!this.#q?.player.dead,t.uCutAt.value.set(xO.x,xO.y,bO,a.aspect),t.uCutAbove.value=i+.35,t.uCutDepth.value=o-.4}resize(e,t){this.#C?.resize(e,t)}reset(e){this.#j.clear(),this.#M.clear(),this.#N=[],this.#O=[],this.#L.clear(),this.#R.clear(),this.#z=-1,this.#g={fight:-1,shut:!1,since:-1/0},this.#_={frame:-1/0,power:0},this.#K.reset()}stats(){return this.#C?.stats()??{calls:0,triangles:0}}dispose(){this.#K.dispose(),this.#Y?.dispose(),this.#H.dispose(),this.#C?.dispose(),this.#E?.batch.dispose(),this.#E?.ghosts.dispose();for(let e of this.#D)e?.batch.dispose(),e?.trail.dispose();for(let e of this.#A.values())e?.batch.dispose()}};function ok(e,t,n,i){let a=((e.map?.won??0)>>t.encounters.length-1&1)==1,o=e.build?.altar,s=e.build?.chests??0,c=e.build?.shrines??0,l=n.fight<0?void 0:t.pieces[r(t,n.fight)??-1];return{altars:t.altars.map((e,t)=>({lit:e.role!==`exit`||a,using:o===t})),chests:t.chests.map((e,t)=>(s>>t&1)==1),shrines:t.shrines.map((e,t)=>(c>>t&1)==1),lift:((e.map?.lifts??0)>>(e.map?.floor??0)&1)==1,exit:a,gates:l?.gates??[],shut:n.shut,since:n.since,carts:e.map?.carts??[],cartHit:i}}var sk={block:.5,texels:16},ck=sk.texels/sk.block,lk={block:{name:`方塊`,blurb:`場景和光照照地城方塊（暖色的火把、晶石發光、霧），角色手腳兩節；方塊 0.5 公尺。`}},uk={skin:`#e2b48c`,cloth:`#3f82d6`,cloak:`#34548f`,armor:`#c8c6bd`,trim:`#6b4a2e`,crystal:`#6fe9ff`,eye:`#a6f6ff`,blade:`#e9eef6`,edge:`#000000`},dk={skin:`#d9a77f`,cloth:`#4f6a8f`,cloak:`#a3502c`,armor:`#e8c040`,trim:`#5b3d22`,crystal:`#fff3b0`,eye:`#3a2a1a`,blade:`#9aa3ad`,edge:`#000000`},fk={skin:`#d9a77f`,cloth:`#c9b48a`,cloak:`#2c3f7a`,armor:`#e8c040`,trim:`#eceff4`,crystal:`#ffd166`,eye:`#2a2a3a`,blade:`#9aa3ad`,edge:`#000000`},pk={skin:`#c98f6a`,cloth:`#3f7a4f`,cloak:`#7a5232`,armor:`#d9c27a`,trim:`#4a3a2a`,crystal:`#5ef0ff`,eye:`#2a2018`,blade:`#9aa3ad`,edge:`#000000`},mk=[{cloak:`#2f7a3c`,cloth:`#58b04a`},{cloak:`#6a3a96`,cloth:`#a865d8`},{cloak:`#a85a18`,cloth:`#e8962e`}],hk={"rig.charger":{hide:`#7f6ca8`,horn:`#d9ccb0`,crystal:`#ff5fd6`,eye:`#ffa2f2`},"rig.dummy":{hide:`#c9a46a`,horn:`#7a5634`,trim:`#d9b860`,crystal:`#ffcf5a`,eye:`#3a2a1a`},"rig.shooter":{hide:`#4f6a8a`,horn:`#9aa8b8`,crystal:`#7affc8`,eye:`#c8fff0`},"rig.guardian":{hide:`#7d7392`,horn:`#a99fc2`,crystal:`#c97bff`,eye:`#f0c8ff`},"rig.prison":{crystal:`#6fe9ff`,hide:`#1e2a3c`,horn:`#e8c040`,eye:`#fff3b0`},"rig.shieldbearer":{hide:`#5b6170`,horn:`#b8893e`,trim:`#7a5634`,crystal:`#5ef0ff`,eye:`#ffcf6a`},"rig.bomber":{hide:`#3f3550`,horn:`#d8c48e`,crystal:`#ff8a3a`,eye:`#ffe28a`},"rig.summoner":{cloak:`#3b2458`,cloth:`#24183a`,trim:`#c9a048`,skin:`#b9a6cc`,horn:`#c9a048`,crystal:`#d070ff`,eye:`#ff9af0`},"rig.puppet":{hide:`#8c879c`,horn:`#a99fc2`,crystal:`#c49cff`,eye:`#f4dcff`},"rig.wolf":{hide:`#8592a6`,horn:`#d9d4c4`,crystal:`#5ef0ff`,eye:`#bff6ff`},"rig.thorn_trap":{hide:`#6c6c74`,horn:`#8a8a92`,crystal:`#ff6fb0`,eye:`#ffd0e8`},"rig.rampant_crystal":{hide:`#5d5b68`,horn:`#8a8a92`,crystal:`#e05cff`,eye:`#ffd8ff`}},gk={stone:`#7b7b83`,slate:`#6a6e7a`,cobble:`#6c6c74`,dirt:`#5e5144`,rock:`#5d5b68`,deep:`#3b3a46`,ore:`#5ef0ff`,moss:`#3d5531`,planks:`#9b7447`,water:`#2f7ea3`,leaves:`#4f7d3a`,pine:`#2f5530`,bark:`#5a4330`,grass:`#5d8a3f`,flower:`#f2d36b`,flowerB:`#e87ab0`},_k={background:`#120e18`,sky:{color:`#8a7a9a`,ground:`#1a1210`,intensity:.55},key:{color:`#ffd9a8`,intensity:.85,at:[-6,14,8]},rim:{color:`#ffb36b`,intensity:.5,at:[4,6,-10]},follow:{color:`#ffc890`,intensity:1.6,distance:7,height:2.6},bloom:{strength:.75,radius:.5,threshold:.85},exposure:1.05,fog:{color:`#120e18`,near:16,far:40}},vk=.85,yk=1.8;function bk(){return{shape:(e,t)=>new qa(t[0],t[1],t[2]),material:(e,t)=>new vo({color:t,roughness:vk,flatShading:!0}),outline:null}}function xk(){let e=(e,t)=>new vo({map:e,emissiveMap:t,emissive:`#ffffff`,emissiveIntensity:yk,roughness:vk,metalness:0}),t={body:e,blocks:e},n={...bk(),palette:uk,fx:{slash:`#9fdcff`,slashCore:`#ffffff`,finisher:`#ffd166`,spark:`#fff3c4`,impact:`#fff1b8`}},r={...bk(),palettes:hk,fx:{flash:.3,shatter:`#d9b8ff`}};return new ak({id:`block`,mine:{stage:_k,gem:e=>new qa(e[0],e[1],e[2]),scenery:{floor:new V,marks:null,markGeometry:()=>null,rock:new V,crystal:new V({color:gk.ore}),glow:gk.ore,pool:0,boulder:e=>new qa(e[0],e[1],e[2])}},hunter:n,foes:r,hitArea:.3,allies:mk,miner:dk,pixels:ck,model:(e,n,r)=>Pp(e,n,sk,t,r),projectile:e=>Gp(e,sk),walls:()=>new rm(sk),ground:{palette:gk,flame:`#ffb347`,crystal:`#5ef0ff`,water:`#1d5a7a`,glow:.8,fogs:[`#120e18`,`#0c1322`,`#170b22`],forestFog:`#22392a`,props:{stone:`#6c6c74`,pale:`#b8b4c6`,wood:`#9b7447`,iron:`#4a4d58`,gold:`#e8b84a`,altar:`#ffd166`,rune:`#8fd8ff`,lantern:`#ffb347`,way:`#9fdcff`,crystal:`#5ef0ff`,boss:`#9a7dff`},roughness:vk},camp:{fog:`#0d1426`,mentor:fk,merchant:pk,colours:{stone:`#7b7b83`,wood:`#9b7447`,cloth:`#c9b48a`,awning:[`#c0392b`,`#ece4d4`],iron:`#4a4d58`,star:`#ffd166`,crystal:`#5ef0ff`,lamp:`#ffc46b`,flame:`#ff9a3c`,lift:`#9fdcff`}}})}function Sk(e,t,n,r,i,a){let o=r-t,s=i-n,c=Math.sqrt(o*o+s*s);if(c<1e-6)return;let l=-s/c*(a/2),u=o/c*(a/2);e.push(t-l,0,n-u,r+l,0,i+u,r-l,0,i-u),e.push(t-l,0,n-u,t+l,0,n+u,r+l,0,i+u)}function Ck(e){let t=new Vi;t.setAttribute(`position`,new ki(e,3));let n=new Float32Array(e.length);for(let e=1;e<n.length;e+=3)n[e]=1;return t.setAttribute(`normal`,new ki(n,3)),t}function wk(e,t,n,r){let i=_(p(n,`marks:veins`)),a=[];for(let n=0;n<r;n++){let n=-2+i.float()*(e+4),r=-2+i.float()*(t+4),o=i.float()*Math.PI*2,s=.02+i.float()*.03,c=5+Math.floor(i.float()*7);for(let e=0;e<c;e++){o+=(i.float()-.5)*1.1;let e=.45+i.float()*.8,t=n+Math.sin(o)*e,c=r+Math.cos(o)*e;if(Sk(a,n,r,t,c,s),i.float()<.18){let e=o+(i.float()<.5?.9:-.9);Sk(a,t,c,t+Math.sin(e)*.6,c+Math.cos(e)*.6,s*.6)}n=t,r=c,s*=.92}}return Ck(a)}function Tk(){let e=sm(`#7fdcff`,.38,3,!1);return{stage:{background:`#0a0c12`,sky:{color:`#8ea4d6`,ground:`#151822`,intensity:.85},key:{color:`#e6eeff`,intensity:1.45,at:[-6,14,8]},rim:{color:`#7fdcff`,intensity:.9,at:[4,6,-10]},follow:{color:`#a8dcff`,intensity:2.2,distance:7,height:2.4},bloom:{strength:.55,radius:.4,threshold:1},exposure:1},gem:(e,t)=>TS(`gem`,e,t),scenery:{floor:new vo({color:`#1d2029`,roughness:.92}),marks:new V({color:`#174a57`}),markGeometry:(e,t,n)=>wk(e,t,n,11),rock:(t=>um(new vo({color:t,roughness:.86,metalness:.06,flatShading:!0}),[e]))(`#2a2d37`),crystal:((e,t)=>new vo({color:e,emissive:e,emissiveIntensity:t,roughness:.25,metalness:.1,flatShading:!0}))(`#5ef0ff`,1.5),glow:`#2fbfe6`,pool:.22,boulder:(e,t)=>{let n=new $a(.5,0);return n.scale(e[0],e[1],e[2]),xS(n,t,Math.min(...e)*.22)}}}}var Ek=[`crystal`,`eye`];function Dk(){let e=e=>new V({color:new B(e).multiplyScalar(2.4)}),t=(e,t)=>um(new bo({color:e}),[sm(t,1.3,3.5,!1)]);return{shape:(e,t)=>ES(e,t),material(n,r,i){return Ek.includes(n)?e(r):t(r,i.edge??`#36e2ff`)},outline:{color:`#36e2ff`,intensity:1.4,width:.014,roles:[`hide`,`horn`]},palettes:{"rig.charger":{hide:`#120d17`,horn:`#170f1e`,crystal:`#ff4fd8`,eye:`#ff7ae6`,edge:`#ff3fd2`},"rig.dummy":{hide:`#100f1a`,horn:`#141322`,crystal:`#b8a8ff`,eye:`#d8ccff`,edge:`#8a7dff`},"rig.shooter":{hide:`#110c16`,horn:`#1a1022`,crystal:`#ff4fd8`,eye:`#ffd0f4`,edge:`#ff3fd2`},"rig.guardian":{hide:`#100b1a`,horn:`#181026`,crystal:`#b06bff`,eye:`#e6c8ff`,edge:`#a45cff`}},fx:{flash:.2,shatter:`#ff7ae6`}}}function Ok(){let e=new ha(new Uint8Array([70,150,255]),3,1,gt);return e.minFilter=Ke,e.magFilter=Ke,e.generateMipmaps=!1,e.needsUpdate=!0,e}function kk(){let e=Ok(),t=sm(`#ffffff`,.3,1,!0),n=(n,r=0)=>um(new yo({color:n,gradientMap:e,emissive:n,emissiveIntensity:r}),[t]);return{shape:(e,t)=>ES(e,t),material(e,t){return e===`eye`?new V({color:t}):e===`crystal`?n(t,.55):n(t)},outline:{color:`#1a1422`,intensity:1,width:.022,roles:[`skin`,`cloth`,`cloak`,`armor`,`trim`,`crystal`,`blade`]},palette:{skin:`#f2c9a0`,cloth:`#2f8f86`,cloak:`#3b5bb5`,armor:`#e9dcc0`,trim:`#6a4930`,crystal:`#6fe9ff`,eye:`#232033`,blade:`#eef3fa`},fx:{slash:`#9fdcff`,slashCore:`#ffffff`,finisher:`#ffd166`,spark:`#fff3c4`,impact:`#fff1b8`}}}var Ak={name:`晶格獵人`,blurb:`晶體幾何的礦坑、卡通的獵人、霓虹的怪物（10/20 選定）。`};function jk(){return new ak({id:`lattice`,mine:Tk(),hunter:kk(),foes:Dk(),hitArea:.45})}var Mk={lattice:Ak,...lk},Nk={lattice:jk,block:xk},Pk=Object.keys(Nk),Fk=[`rig.hunter`,`rig.charger`,`rig.dummy`,`rig.shooter`,`rig.guardian`];[...Fk,...Fp],[...new Set([...Fk,...Cp]),...Fp];function Ik(e){let t=e.theme===void 0?void 0:Nk[e.theme];return t?t():null}var Lk=1.2,Rk=`#7a5a3a`,zk=.7,Bk=class{group=new Rr;#e=[];#t=null;#n=null;show(e){for(;this.#e.length<e.length;){this.#t??=new vo({color:Rk,roughness:.95,transparent:!0,opacity:zk}),this.#n||(this.#n=new qa(1,1,1),this.#n.translate(0,.5,.5));let e=new H(this.#n,this.#t);this.#e.push(e),this.group.add(e)}this.#e.forEach((t,n)=>{let r=e[n];t.visible=r!==void 0&&r.rise>0,r&&t.visible&&(t.position.set(r.x,0,r.y),t.rotation.set(0,Math.atan2(r.dx,r.dy),0),t.scale.set(r.radius*2,Lk*r.rise,r.length))})}};function Vk(e){return{player:[e.player.x,e.player.y],...e.party?{allies:e.party.map(e=>[e.player.x,e.player.y])}:{},enemies:new Map(e.enemies.map(e=>[e.id,[e.x,e.y]])),projectiles:new Map(e.projectiles.map(e=>[e.id,[e.x,e.y]]))}}var Hk={pitchDeg:50,fov:35,distance:17,minWidth:15,lead:1.2,ease:.12},Uk=3,Wk=2048,Gk=.7,Kk=.4,qk=12,Jk=(e,t,n)=>e+(t-e)*n,Yk=new B(`#ffffff`),Xk=new B(`#ff3344`),Zk=new B(`#ff6a1a`),Qk=new B(`#ff3d3d`),$k=new B(`#ff5a46`),eA=new B(`#ffb4a6`),tA=new B(`#8fd8ff`),nA=new B(`#ffd34a`),rA=new B(`#9b6bff`),iA=new B(`#dff6ff`),aA=new B(`#ffe27a`),oA=new B(`#ff3a6a`),sA=new B(`#b48cff`),cA=new B(`#ff7a2a`),lA=new B(`#b46bff`),uA=new B(`#7a3cd6`),dA=.55,fA=new B(`#ffffff`),pA=new B(`#ffd166`),mA=new B(`#9fe8ff`),hA=new B(`#bfe6ff`),gA=new B(`#ffcf5a`),_A=new B(`#fff3c4`),vA=new B(`#ffd98a`),yA=new B(`#e8f6ff`),bA=new B(`#ffe26b`),xA=new B(`#ffe7a8`),SA=new B(`#ffc94a`),CA=12,wA=36,TA=16,EA=new B(`#8fd0ff`),DA={height:1.7,fling:2.4,turns:1},OA=7,kA=7,AA=32,jA=16,MA=9,NA=5,PA=12,FA=12,IA=14,LA={neurotoxin:new B(`#4ae0ff`),radiate:new B(`#c8ff5a`),decay:new B(`#b04a8a`),deathArc:new B(`#a0d0ff`),plague:new B(`#8ed14f`),silence:new B(`#8080ff`),suppress:new B(`#ffffff`)},RA=new B(`#ffe08a`);function zA(e){let t=Math.sin(e*12.9898)*43758.5453;return(t-Math.floor(t))*2-1}var BA=(e,t)=>Math.atan2(e,t),VA=.5,HA=new B(`#b46bff`);function UA(e){let t=new H(new Ya(e,24),new V({color:`#000000`,transparent:!0,opacity:.35,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t.position.y=.01,t}var WA=`#ff6b6b`,GA=`#8fb8ff`,KA=1.4,qA=new Set([`core:loot_drop`,`core:loot_grab`,`core:loot`]),JA=2.6;function YA(e,t){let n=e.boss?.warden;if(!n?.air)return 0;let r=Math.min(1,Math.max(0,(n.frame-1+t)/Math.max(1,n.length)));return 4*JA*r*(1-r)}var XA=class{#e;#t;#n=new qr;#r;#i=new R;#a=Hk.distance;#o=!1;#s=new Rr;#c;#l=new Rr;#u;#d=null;#f=new Rr;#p;#m;#h;#g;#_;#v;#y;#b;#x;#S=new Map;#C=new Map;#w;#T;#E;#D;#O;#k;#A;#j;#M;#N=new z;#P=new z;#F=new B;#I={pitch:0,sx:1,sy:1,sz:1,dx:0};#L=new R;#R=new Vb;#z=Array.from({length:AA},()=>({start:-1e3,x:0,y:0,z:0,size:1,color:new B}));#B=0;#V;#H=Array.from({length:jA},()=>({start:-1e3,x:0,y:0,dx:0,dy:0,length:0,beam:!1,color:new B}));#U=0;#W;#G=Array.from({length:PA},()=>({start:-1e3,x:0,y:0,radius:0,color:new B}));#K=0;#q;#J=new Map;#Y;#X;#Z;#Q=new Map;#$=new Map;#ee=new Vb;#te;#ne;#re;#ie=new Rr;#ae;#oe=[];#se=[];#ce=[];#le=new Map;#ue=0;#de=bf();#fe=null;#pe=``;#me=null;#he=null;#ge=null;#_e=null;#ve=[];#ye;#be;#xe=new Zd;#Se={height:null};#Ce=0;#we={start:-1e3,strength:0};#Te=new Os;#Ee=new Ji(new R(0,1,0),0);#De;#Oe;#ke;constructor(e){this.#e=e;let{canvas:t,skin:n,content:r}=e;this.#t=new Xu({canvas:t,antialias:!0}),this.#t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.#n.background=new B(`#0d1016`),this.#r=new ts(e.view?.fov??Hk.fov,16/9,.1,200);let a=new Uo(`#d7e6ff`,`#1a1f2a`,1.1);this.#n.add(a);let o=new os(`#ffffff`,1.6);o.position.set(-6,14,8),this.#n.add(o),this.#De=[a,o],this.#c=bd(n.visuals.get(r.player.visual)),this.#u=xd(this.#c);let s=bd(n.visuals.get(r.weapon.visual));this.#f.position.y=.20000000000000007,this.#f.add(s),this.#c.position.y=-.7,this.#l.position.y=Gk,this.#l.add(this.#c,this.#f),this.#Oe=UA(r.player.radius*1.1),this.#s.add(this.#l,this.#Oe),this.#n.add(this.#s);let c=this.#de;this.#h=r.action.steps.map(e=>{let t=e.hitbox;return t.kind===`line`?c:yf(t.radius,t.kind===`circle`?360:t.arcDeg)}),this.#m=new V({color:`#ffffff`,transparent:!0,opacity:0,depthWrite:!1}),this.#p=new H(this.#h[0],this.#m),this.#p.position.y=.03,this.#s.add(this.#p),this.#R.group.position.y=.9,this.#s.add(this.#R.group);let l=(e,t)=>new V({map:t,color:e,transparent:!0,opacity:0,blending:2,depthWrite:!1,depthTest:!1}),u=xf();this.#y=l(`#3fb4ff`,u),this.#v=new H(c,this.#y),this.#_=l(`#e9fcff`,u),this.#g=new H(c,this.#_),this.#x=new V({color:`#f2fdff`,transparent:!0,opacity:0,blending:2,depthWrite:!1,depthTest:!1}),this.#b=new H(new no(1,0),this.#x),this.#v.renderOrder=20,this.#g.renderOrder=21,this.#b.renderOrder=22,this.#s.add(this.#v,this.#g,this.#b);let d=new V({color:`#9fe8ff`,transparent:!0,opacity:0,depthWrite:!1}),f=new H(c,d);f.position.y=.03;let p=l(`#3fb4ff`,u),m=l(`#e9fcff`,u),h=new V({color:`#f2fdff`,transparent:!0,opacity:0,blending:2,depthWrite:!1,depthTest:!1}),g=new H(c,p),_=new H(c,m),v=new H(new no(1,0),h);g.renderOrder=20,_.renderOrder=21,v.renderOrder=22,this.#ie.add(f,g,_,v),this.#ie.visible=!1,this.#n.add(this.#ie),this.#ae={zone:f,zoneMaterial:d,glow:g,glowMaterial:p,core:_,coreMaterial:m,tip:v,tipMaterial:h},this.#ee.group.position.y=.55,this.#s.add(this.#ee.group);let y=new io(.86,1,72);y.rotateX(-Math.PI/2),this.#ne=new V({color:xA,transparent:!0,opacity:0,blending:2,depthWrite:!1});let b=new no(.17,0),x=new V({color:EA});for(let e=0;e<TA;e++){let e=new H(b,x);e.visible=!1,e.renderOrder=19,this.#se.push(e),this.#n.add(e)}this.#te=new H(y,this.#ne),this.#te.position.y=.06,this.#te.visible=!1,this.#s.add(this.#te);for(let e=0;e<Uk;e++){let e=bd(n.visuals.get(r.player.visual)),t=xd(e);for(let e of t)e.transparent=!0,e.depthWrite=!1,e.color.set(`#8fd3ff`);e.visible=!1,this.#n.add(e),this.#ve.push({mesh:e,materials:t,start:-1e3,x:0,y:0,angle:0})}this.#be=new _f(Wk,e.seed),this.#n.add(this.#be.mesh),this.#n.add(this.#xe.group);let S=new Ya(1,24);S.rotateX(-Math.PI/2),this.#w=new uf(this.#n,S,new V({color:`#000000`,transparent:!0,opacity:.35,depthWrite:!1}),void 0,this.#Se);let C=new ro(1,1);C.translate(.5,0,0);let w=e=>new V({color:e,transparent:!0,depthTest:!1});this.#T=new uf(this.#n,C,w(`#2a0d10`),void 0,this.#Se),this.#E=new uf(this.#n,C,w(`#ff5d6c`),void 0,this.#Se),this.#T.renderOrder=10,this.#E.renderOrder=11,this.#O=new uf(this.#n,C,w(GA),void 0,this.#Se),this.#O.renderOrder=12;let T=new io(.8,1,40);T.rotateX(-Math.PI/2),this.#D=new uf(this.#n,T,new V({color:`#ffffff`,transparent:!0,depthWrite:!1,blending:2}),void 0,this.#Se);let E=()=>new V({color:`#ffffff`,transparent:!0,depthWrite:!1});this.#k=new uf(this.#n,this.#de,E(),void 0,this.#Se),this.#A=new uf(this.#n,this.#de,E(),void 0,this.#Se);let D=new Ya(1,48);D.rotateX(-Math.PI/2),this.#j=new uf(this.#n,D,E(),void 0,this.#Se),this.#M=new uf(this.#n,D,E(),void 0,this.#Se),this.#k.renderOrder=1,this.#A.renderOrder=2,this.#V=new uf(this.#n,new ro(1,1),new V({map:vf(),transparent:!0,blending:2,depthWrite:!1,depthTest:!1}),AA,this.#Se),this.#V.renderOrder=23,this.#re=new uf(this.#n,new ro(1,1),new V({map:vf(),transparent:!0,blending:2,depthWrite:!1,depthTest:!1}),void 0,this.#Se),this.#re.renderOrder=24;let O=()=>new V({color:`#ffffff`,transparent:!0,blending:2,depthWrite:!1,depthTest:!1});this.#W=new uf(this.#n,this.#de,O(),160,this.#Se),this.#W.renderOrder=22;let k=new io(.8,1,48);k.rotateX(-Math.PI/2),this.#q=new uf(this.#n,k,O(),PA,this.#Se),this.#q.renderOrder=3;for(let e of r.elements.values()){let t=e.status.kind;this.#J.has(t)||this.#J.set(t,new B(e.color))}for(let e of r.reactions.values())this.#Q.set(e.id,new B(e.color));let A=()=>new V({color:`#ffffff`,transparent:!0,depthWrite:!1}),ee=new Ya(1,48);ee.rotateX(-Math.PI/2),this.#Y=new uf(this.#n,ee,A(),void 0,this.#Se),this.#Y.renderOrder=1;let j=new io(.93,1,64);j.rotateX(-Math.PI/2),this.#X=new uf(this.#n,j,O(),void 0,this.#Se),this.#X.renderOrder=2;let M=new io(.55,.75,16,1,0,Math.PI/2.5);M.rotateX(-Math.PI/2),this.#Z=new uf(this.#n,M,O(),void 0,this.#Se),this.#Z.renderOrder=3,this.#ye=new pf(this.#n,i),this.#ke=e.look===void 0?Ik(n):e.look,this.#ke?.attach(this.#je());let N=this.#ke;N?.height&&(this.#Se.height=(e,t)=>N.height?.(e,t)??0);let te=N?.drape;if(te){let e=ZA(),t=QA();this.#k.drape(e,te),this.#A.drape(e,te),this.#j.drape(t,te),this.#M.drape(t,te)}this.#ke&&this.#Ae(),this.resize()}#Ae(){this.#k.renderOrder=28,this.#j.renderOrder=28,this.#A.renderOrder=29,this.#M.renderOrder=29,this.#T.renderOrder=30,this.#E.renderOrder=31,this.#O.renderOrder=32}#je(){return{renderer:this.#t,scene:this.#n,camera:this.#r,skin:this.#e.skin,content:this.#e.content,seed:this.#e.seed,proto:{lights:this.#De,playerPivot:this.#l,playerShadow:this.#Oe},fx:{particles:this.#be,ascension:this.#xe,slash:this.#R,whirl:this.#ee,impact:(e,t,n,r)=>this.#yt(e,t,n,r),shake:(e,t)=>{t>=this.#bt(e)&&(this.#we={start:e,strength:t})},ring:(e,t,n,r,i)=>{let a=this.#G[this.#K];this.#K=(this.#K+1)%PA,a.start=e,a.x=t,a.y=n,a.radius=r,a.color.set(i)},hitArea:this.#m,shockwave:this.#ne}}}#Me(e,n){this.#me||(this.#me=new Rd,this.#n.add(this.#me.group));let r=e.map?.won??0,i=n.encounters.length-1,a=e.build?.altar,o=n.altars.map((e,t)=>({x:e.x,y:e.y,lit:e.role!==`exit`||(r>>i&1)==1,using:a===t})),s=e.build?.chests??0,c=n.chests.map((e,t)=>({...e,opened:(s>>t&1)==1})),l=e.map?.lifts??0,u=e.map?.floor??0,d=n.lift?{x:n.lift[0],y:n.lift[1],mended:(l>>u&1)==1}:null,f=e.build?.shrines??0,p=n.shrines.map(([e,t],n)=>({x:e,y:t,used:(f>>n&1)==1})),m=n.carts.map(e=>e.track);this.#me.update({altars:o,chests:c,lift:d,shrines:p,tracks:m},x),this.#me.showMiners(e.map?.rescues??[]),this.#me.showCarts((e.map?.carts??[]).map((e,r)=>{let i=t(n.carts[r]?.track??[e.x,e.y],e.at);return{x:e.x,y:e.y,dx:i.dx,dy:i.dy,broken:e.phase===3}}))}#Ne(e,t){e!==this.#pe&&(this.#pe=e,this.#fe&&this.#n.remove(this.#fe),this.#fe=Tf(s(t)),this.#n.add(this.#fe))}#Pe(e,t){let n=`${e}x${t}`;if(n===this.#pe)return;this.#pe=n,this.#fe&&this.#n.remove(this.#fe);let r=new Rr;this.#fe=r,this.#n.add(r);let i=new H(new ro(e,t),new vo({color:`#1a2029`,roughness:.95}));i.rotation.x=-Math.PI/2,i.position.set(e/2,0,t/2),r.add(i);let a=[];for(let n=0;n<=e;n++)a.push(n,.005,0,n,.005,t);for(let n=0;n<=t;n++)a.push(0,.005,n,e,.005,n);let o=new Vi;o.setAttribute(`position`,new ki(a,3)),r.add(new Va(o,new ka({color:`#262f3c`})));let s=new vo({color:`#2c3646`,roughness:.8}),c=.3,l=.6,u=[[e/2,-.3/2,e+c*2,c],[e/2,t+c/2,e+c*2,c],[-.3/2,t/2,c,t],[e+c/2,t/2,c,t]];for(let[e,t,n,i]of u){let a=new H(new qa(n,l,i),s);a.position.set(e,l/2,t),r.add(a)}}#Fe(e,t){let n=e.get(t);if(!n){let r=this.#e.skin.visuals.get(t);n=new lf(this.#n,this.#ke?.model(r)??bd(r),void 0,this.#Se),e.set(t,n)}return n}#Ie(e){return this.#e.skin.visuals.get(e)?.params.height||1.2}#Le(e,t,n,r,i){let a=e.player,o=i?this.#ke?.enemies??null:null;for(let e of this.#S.values())e.begin();this.#w.begin(),this.#D.begin(),this.#k.begin(),this.#j.begin(),this.#M.begin(),this.#A.begin(),o?.begin();let s=this.#N,c=this.#P,[l,u]=t?.player??[a.x,a.y],d=Jk(l,a.x,n),f=Jk(u,a.y,n),p=++this.#ue;for(let a of e.enemies){let[e,l]=t?.enemies.get(a.id)??[a.x,a.y],u=Jk(e,a.x,n),m=Jk(l,a.y,n),h=a.state!==`free`||a.boss?.warden?BA(a.aimX,a.aimY):BA(d-u,f-m),g=this.#le.get(a.id);if(g?(g.visual=a.visual,g.radius=a.radius,g.yaw=h,g.drawn=p):this.#le.set(a.id,{visual:a.visual,radius:a.radius,yaw:h,drawn:p}),a.sleep&&this.hidden(u,m))continue;if(o?.anchor&&i){let e=this.#ft(a,n),t={x:u,y:m,lift:(e<0?0:4*jf*e*(1-e))+YA(a,n),yaw:h,size:this.#Be(a)};o.anchor(a,t,this.#Ie(a.visual),i)}if(o&&i&&o.handles(a.visual)){let e=this.#ft(a,n),t={x:u,y:m,lift:(e<0?0:4*jf*e*(1-e))+YA(a,n),yaw:h,size:this.#Be(a)};o.add(a,t,this.#Re(a,r),i)}else{let e=this.#Ie(a.visual)*Kk,t=this.#Dt(a,n,r),i=this.#ft(a,n),o=(i<0?0:4*jf*i*(1-i))+YA(a,n);s.makeTranslation(u,o,m);let l=this.#Be(a);l!==1&&s.multiply(c.makeScale(l,l,l)),s.multiply(c.makeRotationY(h)),s.multiply(c.makeTranslation(t.dx,e,0)),s.multiply(c.makeRotationX(t.pitch)),s.multiply(c.makeScale(t.sx,t.sy,t.sz)),s.multiply(c.makeTranslation(0,-e,0)),this.#Fe(this.#S,a.visual).add(s,this.#Re(a,r))}let _=a.radius*1.1;s.makeTranslation(u,.01,m).multiply(c.makeScale(_,1,_)),this.#w.add(s,1),this.#Je(a,u,m,r),this.#tt(a,u,m,n),this.#Qe(a,u,m,n)}this.#He(e,n,r),this.#et(e,n,r),this.#$e(e,r),this.#qe(a,d,f,r);for(let[e,t]of this.#le)t.drawn!==p&&this.#le.delete(e);for(let e of this.#ce)o?.handles(e.visual)||this.#Ye(e,r);o&&i&&o.end(i);for(let e of this.#S.values())e.end();this.#w.end(),this.#D.end(),this.#k.end(),this.#A.end(),this.#j.end(),this.#M.end()}#Re(e,t){if(e.flash>0)return this.#F.copy(Yk).multiplyScalar(e.flash/8*.9);if((e.warnRadius??0)>0&&e.state===`windup`){let n=Math.min(1,e.stateFrame/Math.max(1,e.warnFrames)),r=.5+.5*Math.sin(t*(.35+1.4*n));return this.#F.copy(cA).multiplyScalar(.2+.7*n*r)}let n=e.elite;return n?.guard?this.#F.copy(aA).multiplyScalar(.45+.1*Math.sin(t*.5)):n?.mirror?this.#F.copy(oA).multiplyScalar(.4+.15*Math.sin(t*.7)):e.burn>0?this.#F.copy(Zk).multiplyScalar(.35+.15*Math.sin(t*.35)):e.status&&this.#ze(e.status,e.stun>0,t)?this.#F:e.boss?.phase===2?this.#F.copy(HA).multiplyScalar(.3+.12*Math.sin(t*.18)):e.illusion?this.#F.copy(sA).multiplyScalar(.18+.1*Math.sin(t*.3+e.id)):null}#ze(e,t,n){let r=(e,t)=>{let n=this.#J.get(e);return n&&this.#F.copy(n).multiplyScalar(t),n!==void 0},i=.3+.12*Math.sin(n*.3);if(t&&e.paralyzeReady>0)return r(`paralyze`,Math.floor(n/3)%2==0?.75:.25);if(e.poison>0)return r(`poison`,i);if(e.slow>0)return r(`slow`,i);if(e.weaken>0)return r(`weaken`,i);if(e.curse>0)return r(`curse`,i);if(e.blind>0)return r(`blind`,i);let a=(e,t)=>{let n=LA[e];return n&&this.#F.copy(n).multiplyScalar(t),n!==void 0};return e.neurotoxin>0&&t?a(`neurotoxin`,Math.floor(n/3)%2==0?.75:.25):e.radiate>0?a(`radiate`,i):e.decay>0?a(`decay`,i):e.deathArc>0?a(`deathArc`,i):e.plague>0?a(`plague`,i):e.silence>0?a(`silence`,i):e.suppress>0&&a(`suppress`,.35)}#Be(e){let t=this.#e.content.enemies.get(e.def)?.radius;return t?e.radius/t:1}#Ve(e){let t=this.#$.get(e);return t||(t=new B(this.#e.content.affixes.get(e)?.color??WA),this.#$.set(e,t)),t}#He(e,t,n){let r=e.hazards,i=[];for(let e of r??[])e.form===`wall`&&e.frame>=e.warn&&i.push(this.#Ke(e,t));if(this.#ke?.replaces?.walls?this.#ke.walls?.(i):(i.length>0&&!this.#he&&(this.#he=new Bk,this.#n.add(this.#he.group)),this.#he?.show(i)),!r)return;let a=this.#N,o=this.#P;for(let e of r){let r=Math.min(e.warn,e.frame-1+t),i=Math.max(0,Math.min(1,r/Math.max(1,e.warn))),s=e.warn-e.frame,c=s<=6&&Math.floor(s/2)%2==0,l=this.#Ve(e.affix);if(e.form===`sweep`)this.#Ue(e,l,i,c,t,n);else if(e.form===`tether`)this.#We(e,l,n);else if(!(e.form===`wall`&&e.frame>=e.warn)){if(e.linger!==void 0&&e.frame>=e.warn)this.#Ge(e,l,n);else if(e.line){let t=BA(e.dx,e.dy),n=e.radius*2;a.makeTranslation(e.x,.02,e.y).multiply(o.makeRotationY(t)),a.multiply(o.makeScale(n,1,e.length)),this.#k.add(a,.18+.1*i,l),a.makeTranslation(e.x,.025,e.y).multiply(o.makeRotationY(t)),a.multiply(o.makeScale(n,1,e.length*Math.max(.001,i))),this.#A.add(a,c?.7:.4,c?eA:$k)}else{a.makeTranslation(e.x,.02,e.y).multiply(o.makeScale(e.radius,1,e.radius)),this.#j.add(a,.2+.1*i,l);let t=e.radius*Math.max(.001,i);a.makeTranslation(e.x,.025,e.y).multiply(o.makeScale(t,1,t)),this.#M.add(a,c?.7:.4,c?eA:$k)}}}}#Ue(e,t,n,r,i,a){let o=this.#N,s=this.#P,c=this.#ke?.replaces?.lasting===!0;c||(o.makeTranslation(e.x,.03,e.y).multiply(s.makeScale(.45,1,.45)),this.#M.add(o,.85,t));let l=e.frame>=e.warn,u=e.turn??0,d=t=>{let n=t*Math.PI/180,r=Math.cos(n),i=Math.sin(n);return BA(e.dx*r-e.dy*i,e.dx*i+e.dy*r)},f=l?-u*(1-i):0,p=e.radius*2,m=(t,n,r,i,a=1)=>{o.makeTranslation(e.x,.025,e.y).multiply(s.makeRotationY(n)),o.multiply(s.makeScale(p,1,e.length*a)),t.add(o,r,i)};for(let e=1;e<=3;e++)m(this.#k,d(f+u*10*e),.2-.05*e,t);l?c||m(this.#A,d(f),.75+.2*Math.sin(a*1.3),t):(m(this.#k,d(0),.2+.1*n,t),m(this.#A,d(0),r?.7:.4,r?eA:$k,Math.max(.001,n)))}#We(e,t,n){let r=e.frame<e.warn;if(!r&&this.#ke?.replaces?.lasting)return;let i=this.#N,a=this.#P;i.makeTranslation(e.x,.04,e.y).multiply(a.makeRotationY(BA(e.dx,e.dy))),i.multiply(a.makeScale(e.radius*2,1,Math.max(.001,e.length))),r?this.#k.add(i,.24+.08*Math.sin(n*.5),t):this.#A.add(i,.7+.25*Math.sin(n*.9+e.id),t)}#Ge(e,t,n){let r=this.#N,i=this.#P,a=e.warn+(e.linger??0)-e.frame,o=Math.max(0,Math.min(1,a/20));r.makeTranslation(e.x,.02,e.y).multiply(i.makeScale(e.radius,1,e.radius)),this.#j.add(r,(.35+.08*Math.sin(n*.25+e.id))*o,t);let s=e.radius*(.82+.06*Math.sin(n*.4+e.id));r.makeTranslation(e.x,.025,e.y).multiply(i.makeScale(s,1,s)),this.#M.add(r,.32*o,t)}#Ke(e,t){let n=Math.min(1,(e.frame-e.warn+t)/6),r=e.warn+(e.linger??0)-e.frame,i=Math.max(0,Math.min(n,r/10));return{x:e.x,y:e.y,dx:e.dx,dy:e.dy,length:e.length,radius:e.radius,rise:i}}#qe(e,t,n,r){if(this.#ke?.replaces?.debuffs)return;let i=[];e.slow&&i.push(tA),e.root!==void 0&&i.push(nA),e.pull&&i.push(rA),e.freeze!==void 0&&i.push(iA);let a=this.#N,o=this.#P;i.forEach((i,s)=>{let c=e.radius*(1.5+.3*s);a.makeTranslation(t,.03+.005*s,n).multiply(o.makeScale(c,1,c)),this.#D.add(a,.65+.25*Math.sin(r*.3+s*1.3),i)})}#Je(e,t,n,r){let i=e.elite?.affixes??[],a=this.#N,o=this.#P;i.forEach((i,s)=>{let c=this.#Ve(i),l=e.radius*(1.35+.3*s);a.makeTranslation(t,.02+.005*s,n).multiply(o.makeScale(l,1,l)),this.#D.add(a,.55+.25*Math.sin(r*.12+s*1.7),c)});let s=e.elite;if(!s)return;let c=(e,r,i)=>{a.makeTranslation(t,.04,n).multiply(o.makeScale(e,1,e)),this.#D.add(a,r,i)};s.guard&&c(e.radius*2.1,.85+.15*Math.sin(r*.5),aA),s.mirror&&c(e.radius*1.95,.75+.2*Math.sin(r*.7),oA),s.active?.forEach((t,n)=>{let a=i[n],o=a===void 0?void 0:this.#e.content.affixes.get(a);if(o?.kind!==`bubble`&&o?.kind!==`reflect`||t<=o.frames)return;let s=Math.floor(r/4)%2==0?.95:.3;c(e.radius*2,s,o.kind===`bubble`?aA:oA)})}#Ye(e,t){if(t>=e.land)return;let n=Math.max(0,(t-e.start)/(e.land-e.start)),r=e.from+(1-e.from)*n,i=4*DA.height*r*(1-r),a=DA.fling*(1-e.from)*(1-(1-n)**2),o=e.x+e.dx*a,s=e.y+e.dy*a,c=this.#N,l=this.#P,u=this.#Ie(e.visual)*Kk;c.makeTranslation(o,i,s),c.multiply(l.makeRotationY(e.yaw)),c.multiply(l.makeTranslation(0,u,0)),c.multiply(l.makeRotationX(-Math.PI*2*DA.turns*n)),c.multiply(l.makeTranslation(0,-u,0));let d=1-Math.min(1,Math.max(0,t-e.start)/10);this.#Fe(this.#S,e.visual).add(c,d>0?this.#F.copy(Yk).multiplyScalar(.9*d):null);let f=e.radius*1.1*(1-.4*i/DA.height);c.makeTranslation(o,.01,s).multiply(l.makeScale(f,1,f)),this.#w.add(c,1)}#Xe(e,t,n){let r=this.#N,i=this.#P,a=Math.min(e.warnFrames,e.stateFrame-1+n),o=Math.max(0,Math.min(1,a/Math.max(1,e.warnFrames))),s=e.warnFrames-e.stateFrame,c=s<=6&&Math.floor(s/2)%2==0;r.makeTranslation(e.x,.02,e.y).multiply(i.makeScale(t,1,t)),this.#j.add(r,.16+.1*o,Qk);let l=t*Math.max(.001,o);r.makeTranslation(e.x,.025,e.y).multiply(i.makeScale(l,1,l)),this.#M.add(r,c?.7:.4,c?eA:$k)}#Ze(e,t,n){let r=this.#N,i=this.#P,a=Math.min(e.warnFrames,e.stateFrame-1+n),o=Math.max(0,Math.min(1,a/Math.max(1,e.warnFrames)));for(let n=0;n+1<t.length;n+=2){let a=t[n]??e.x,s=t[n+1]??e.y;r.makeTranslation(a,.02,s).multiply(i.makeScale(dA,1,dA)),this.#j.add(r,.25+.15*o,lA);let c=dA*Math.max(.001,o);r.makeTranslation(a,.025,s).multiply(i.makeScale(c,1,c)),this.#M.add(r,.35,uA)}}#Qe(e,t,n,r){let i=e.boss,a=i?.warden;if(!i||(a?a.stage!==1||i.cr<=0:i.mode!==`warn`))return;let o=a?a.length:i.warn,s=a?a.frame:i.frame,l=Math.min(o,s-1+r),u=Math.max(0,Math.min(1,l/Math.max(1,o))),d=o-s,f=d<=6&&Math.floor(d/2)%2==0,p=this.#N,h=this.#P;if(i.cr>0){p.makeTranslation(i.cx,.02,i.cy).multiply(h.makeScale(i.cr,1,i.cr)),this.#j.add(p,.16+.1*u,Qk);let e=i.cr*Math.max(.001,u);p.makeTranslation(i.cx,.025,i.cy).multiply(h.makeScale(e,1,e)),this.#M.add(p,f?.7:.4,f?eA:$k)}for(let e=0;e<i.rays;e++){let r=i.rayAngle+360*e/i.rays,a=BA(m(r),c(r));p.makeTranslation(t,.02,n).multiply(h.makeRotationY(a)),p.multiply(h.makeScale(VA,1,i.rayLength)),this.#k.add(p,.1+.08*u,Qk),p.makeTranslation(t,.025,n).multiply(h.makeRotationY(a)),p.multiply(h.makeScale(VA,1,i.rayLength*Math.max(.001,u))),this.#A.add(p,f?.6:.3,f?eA:$k)}}#$e(e,t){let n=e.build?.ground??[];n.length>0&&!this.#_e&&(this.#_e=new fd,this.#n.add(this.#_e.group)),this.#_e?.show(n,t,(e,t)=>this.#ke?.height?.(e,t)??0)}#et(e,t,n){if(this.#ke?.replaces?.warden)return;let r=PD(e,this.#e.content,t);r.rings.length+r.spikes.length+r.shards.length>0&&!this.#ge&&(this.#ge=new RD,this.#n.add(this.#ge.group)),this.#ge?.show(r,n)}#tt(e,t,n,r){let i=e.warnRadius??0;if(i>0&&e.state===`windup`){this.#Xe(e,i,r);return}let a=e.calls;if(a&&a.length>0&&e.state===`windup`){this.#ke?.replaces?.calls||this.#Ze(e,a,r);return}if(e.warnLength<=0||e.state!==`windup`&&e.state!==`attack`)return;let o=e.arms??1;if(o>1)for(let i=0;i<o;i++){let a=2*Math.PI*i/o,s=Math.cos(a),c=Math.sin(a),l=e.aimX*s-e.aimY*c,u=e.aimX*c+e.aimY*s;this.#nt(e,t,n,r,l,u,e.reach?.[i]??e.warnLength)}else this.#nt(e,t,n,r,e.aimX,e.aimY,e.warnLength)}#nt(e,t,n,r,i,a,o){let s=this.#N,c=this.#P,l=BA(i,a);if(s.makeTranslation(t,.02,n).multiply(c.makeRotationY(l)),s.multiply(c.makeScale(e.warnWidth,1,o)),e.state===`attack`){this.#k.add(s,.1,Qk);return}let u=Math.min(e.warnFrames,e.stateFrame-1+r),d=Math.max(0,Math.min(1,u/Math.max(1,e.warnFrames))),f=e.warnFrames-e.stateFrame,p=f<=6&&Math.floor(f/2)%2==0;this.#k.add(s,.14+.1*d,Qk),s.makeTranslation(t,.025,n).multiply(c.makeRotationY(l)),s.multiply(c.makeScale(e.warnWidth,1,o*Math.max(.001,d))),this.#A.add(s,p?.7:.4,p?eA:$k)}#rt(e,t,n){this.#T.begin(),this.#E.begin(),this.#O.begin();let r=this.#N,i=this.#P,a=this.#it.makeRotationFromQuaternion(this.#r.quaternion);for(let o of e.enemies){let e=o.elite;if(o.hp>=o.maxHp&&!e||o.boss||o.sleep&&this.hidden(o.x,o.y))continue;let[s,c]=t?.enemies.get(o.id)??[o.x,o.y],l=e?KA:1,u=Jk(s,o.x,n)-l/2,d=this.#Ie(o.visual)*this.#Be(o)+.35,f=Jk(c,o.y,n);r.makeTranslation(u,d,f).multiply(a),this.#T.add(i.copy(r).multiply(this.#ot(l,.09)),1),this.#E.add(i.copy(r).multiply(this.#ot(l*Math.max(.001,o.hp/o.maxHp),.09)),1),e&&e.shieldMax>0&&e.shield>0&&(r.makeTranslation(u,d+.12,f).multiply(a),this.#T.add(i.copy(r).multiply(this.#ot(l,.06)),1),this.#O.add(r.multiply(this.#ot(l*e.shield/e.shieldMax,.06)),1))}this.#T.end(),this.#E.end(),this.#O.end()}#it=new z;#at=new z;#ot(e,t){return this.#at.makeScale(e,t,1)}#st(e,t,n){for(let e of this.#C.values())e.begin();let r=this.#N,i=this.#P;for(let a of e.projectiles){let[e,o]=t?.projectiles.get(a.id)??[a.x,a.y];r.makeTranslation(Jk(e,a.x,n),.9,Jk(o,a.y,n)),r.multiply(i.makeRotationY(BA(a.dx,a.dy))),this.#Fe(this.#C,a.visual).add(r,null)}for(let e of this.#C.values())e.end()}#ct(e,t){let n=e.areas[0];if(!n||this.#ke?.replaces?.areas){this.#ee.hide();return}let r=360*(n.frame-1+t)/n.every,i=Math.min(1,(n.frame+1)/4),a=Math.min(1,(n.frames-n.frame)/10);this.#ee.show(r-300,r,n.radius*.55,n.radius,Math.min(i,a),yA)}#lt(e,t,n){this.#oe=this.#oe.filter(e=>n-e.start<wA),this.#se.forEach((r,i)=>{let a=this.#oe[i];if(r.visible=!1,!a)return;let o=Math.max(0,(n-a.start)/wA),s=o*o;r.visible=!0,r.position.set(Jk(a.x,e,s),.6+.4*s+5.6*o*(1-o),Jk(a.y,t,s)),r.rotation.set(0,n*.25+i,.5),r.scale.setScalar(1-.5*s)})}#ut(e,t,n,r){let i=this.#ie;if(i.visible=!1,this.#ke?.replaces?.beams)return;let a=e.lines[0];if(!a){this.#dt(e,t,n);return}let o=a.frame-2+r,s=a.frames-1,c=a.length*C(0,s,o),l=o<=s?1:Math.max(0,1-(o-s)/6);if(o<-1||c<=0||l<=0)return;let u=this.#ae;i.visible=!0,i.position.set(t,0,n),i.rotation.y=BA(a.dx,a.dy);let d=.6+.4*l;u.zone.scale.set(a.width,1,c),u.zoneMaterial.opacity=.22*l,u.core.position.set(0,.9,.3),u.core.scale.set(a.width*.45*d,1,c),u.coreMaterial.opacity=l,u.glow.position.set(0,.88,.3),u.glow.scale.set(a.width*1.5*d,1,c),u.glowMaterial.opacity=.7*l,u.tip.position.set(0,.9,.3+c),u.tip.scale.set(.22,.1,.75),u.tipMaterial.opacity=l}#dt(e,t,n){let r=e.player.dash;if(!r)return;let i=Math.hypot(t-r.x0,n-r.y0);if(i<=.01)return;let a=1-r.frame/(r.frames+1),o=this.#ae,s=this.#ie;s.visible=!0,s.position.set(r.x0,0,r.y0),s.rotation.y=BA(r.dx,r.dy),o.zone.scale.set(r.width,1,i),o.zoneMaterial.opacity=.3*a,o.core.scale.set(r.width*.25,1,i),o.core.position.set(0,.05,0),o.coreMaterial.opacity=.5*a,o.glow.scale.set(r.width*.8,1,i),o.glow.position.set(0,.04,0),o.glowMaterial.opacity=.35*a,o.tipMaterial.opacity=0}#ft(e,t){return Mf(e.air,e.airTotal,t)}#pt(e,t,n,r){let i=this.#N,a=this.#P;this.#re.begin();let o=this.#ke?.replaces?.stuns===!0;for(let s of e.enemies){if(o||s.stun<=0||s.air>0)continue;let[e,c]=t?.enemies.get(s.id)??[s.x,s.y],l=Jk(e,s.x,n),u=Jk(c,s.y,n),d=this.#Ie(s.visual)+.35;for(let e=0;e<3;e++){let t=r*.2+e*Math.PI*2/3;i.makeTranslation(l+Math.cos(t)*.48,d,u+Math.sin(t)*.48),i.multiply(a.makeRotationFromQuaternion(this.#r.quaternion)),i.multiply(a.makeScale(.55,.55,1)),this.#re.add(i,.95,bA)}}this.#re.end()}play(e,t,n){n&&this.#ke?.observe(n,e,t),n&&this.#mt(n),this.#gt(t);let r=null;for(let n of e)if(n.type===`death`&&n.launch)r=this.#ht(n.target,n.x,n.y,n.launch,t);else if(n.type===`loot`){if(n.seat!==void 0)continue;this.#oe.push({start:t,x:n.x,y:n.y}),this.#oe.length>TA&&this.#oe.shift()}else n.type===`reaction`?this.#ke?.replaces?.reaction(n.reaction)||this.#_t(n,t):n.type===`cue`&&(n.seat!==void 0&&qA.has(n.cue)||(r&&r.cue===null&&n.x===r.x&&n.y===r.y?r.cue=n:this.#vt(n,t)))}#mt(e){let t=e.player;for(let n of e.enemies){if(this.#le.has(n.id))continue;let e=n.state===`free`?BA(t.x-n.x,t.y-n.y):BA(n.aimX,n.aimY);this.#le.set(n.id,{visual:n.visual,radius:n.radius,yaw:e,drawn:this.#ue})}}#ht(e,t,n,r,i){let a=this.#le.get(e);if(!a||r.total<=0)return null;let o=i+1+r.hold,s={visual:a.visual,radius:a.radius,yaw:a.yaw,x:t,y:n,dx:r.dx,dy:r.dy,start:o,land:o+r.air,from:(r.total-r.air)/r.total,cue:null,landed:!1};return this.#ce.push(s),s}#gt(e){if(this.#ce.length!==0){for(let t of this.#ce){if(t.landed||t.land>e+1||(t.landed=!0,!t.cue))continue;let n=DA.fling*(1-t.from);this.#vt({...t.cue,x:t.x+t.dx*n,y:t.y+t.dy*n},t.land)}this.#ce=this.#ce.filter(t=>!t.landed||t.land>e)}}#_t(e,t){let n=this.#e.content.reactions.get(e.reaction)?.color??`#ffffff`,r={x:e.x,y:.7,z:e.y};if(this.#be.burst(t,r,12+Math.round(e.radius*6),n),e.radius<=0)return;let i=this.#G[this.#K];this.#K=(this.#K+1)%PA,i.start=t,i.x=e.x,i.y=e.y,i.radius=e.radius,i.color.set(n)}#vt(e,t){let n=this.#e.skin.cues.get(e.cue);if(this.#ke?.cue(e,n,t))return;let r=n?.vfx??`none`,i=n?.color,a={x:e.x,y:.9,z:e.y};if(r===`flash`){let n=e.strength>=2;this.#be.sparks(t,a,e.dx,e.dy,8+Math.round(e.strength*6),`#fff1b8`);let r={x:e.x-e.dx*.45,y:1,z:e.y-e.dy*.45};this.#yt(t,r,1.6+.5*e.strength,n?vA:_A);let i=e.strength>=2.5?.42:Math.min(.22,.04+.07*e.strength);i>=this.#bt(t)&&(this.#we={start:t,strength:i})}else if(r===`pierce`){let n={x:e.x+e.dx*.6,y:.95,z:e.y+e.dy*.6};this.#be.glint(t,n,`#9fe8ff`)}else if(r===`burst`)this.#be.burst(t,{...a,y:.6},26,`#ff9f7a`);else if(r===`hurt`)this.#be.sparks(t,a,e.dx,e.dy,12,`#ff4d5e`),this.#we={start:t,strength:.25};else if(r===`dust`)this.#be.sparks(t,{...a,y:.2},-e.dx,-e.dy,10,`#d9b38c`);else if(r===`muzzle`||r===`cast`){let n={x:e.x+e.dx*.7,y:.9,z:e.y+e.dy*.7};this.#be.glint(t,n,i??`#ff9be6`)}else if(r===`explode`)this.#be.burst(t,a,10+Math.round(e.strength*6),i??`#ff7a1a`);else if(r===`embers`)this.#be.glint(t,{...a,y:.7},i??`#ff9b3d`);else if(r===`shatter`)this.#be.sparks(t,a,e.dx,e.dy,8,i??`#bdeeff`);else if(r===`arc`||r===`beam`){let n=this.#H[this.#U];this.#U=(this.#U+1)%jA,n.start=t,n.x=e.x,n.y=e.y,n.dx=e.dx,n.dy=e.dy,n.length=e.strength,n.beam=r===`beam`,n.color.set(i??`#bfe8ff`);let a={x:e.x+e.dx*e.strength,y:.9,z:e.y+e.dy*e.strength};this.#be.glint(t,a,i??`#bfe8ff`)}else if(r===`strike`){let n=i??`#ffe7a8`;this.#yt(t,{x:e.x,y:1.2,z:e.y},2.4,this.#F.set(n)),this.#be.burst(t,{x:e.x,y:.4,z:e.y},14,n);let r=this.#G[this.#K];this.#K=(this.#K+1)%PA,r.start=t,r.x=e.x,r.y=e.y,r.radius=e.strength,r.color.set(n)}else if(r===`gust`){let n=this.#G[this.#K];this.#K=(this.#K+1)%PA,n.start=t,n.x=e.x,n.y=e.y,n.radius=e.strength,n.color.set(i??`#7fe0b0`),this.#be.burst(t,{x:e.x,y:.5,z:e.y},10,i??`#7fe0b0`)}else if(r===`stun`)this.#be.glint(t,{x:e.x,y:1.4,z:e.y},i??`#ffe26b`);else if(r===`glow`)this.#be.burst(t,{x:e.x,y:.3,z:e.y},34,i??`#ffe7a8`),this.#be.glint(t,{x:e.x,y:1.9,z:e.y},i??`#ffe7a8`);else if(r===`ascend`)this.#be.burst(t,{x:e.x,y:.3,z:e.y},34,`#ffe7a8`),this.#be.glint(t,{x:e.x,y:1.9,z:e.y},`#ffe7a8`),this.#be.rise(t,{x:e.x,y:.15,z:e.y},44,i??`#ffd166`),this.#yt(t,{x:e.x,y:1.3,z:e.y},3.6,vA),this.#xe.play(t);else if(r===`shards`)this.#be.burst(t,{x:e.x,y:1,z:e.y},18,i??`#9fd8ff`);else if(r===`afterimage`||r===`dash`){let n=r===`dash`,i=n?e.strength:this.#e.content.player.dodgeDistance;this.#ve.forEach((r,a)=>{r.start=t+a*(n?2:3),r.x=e.x+e.dx*(i*a)/Uk,r.y=e.y+e.dy*(i*a)/Uk,r.angle=BA(e.dx,e.dy)})}}#yt(e,t,n,r){let i=this.#z[this.#B];this.#B=(this.#B+1)%AA,i.start=e,i.x=t.x,i.y=t.y,i.z=t.z,i.size=n,i.color.copy(r)}#bt(e){let t=e-this.#we.start;return t>=0&&t<10?this.#we.strength*(1-t/10):0}#xt(e){let t=this.#N,n=this.#P;this.#V.begin(),this.#z.forEach((r,i)=>{let a=e-r.start;if(a<0||a>=kA)return;let o=a/kA,s=r.size*(.6+.5*Math.sqrt(o));t.makeTranslation(r.x,r.y,r.z),t.multiply(n.makeRotationFromQuaternion(this.#r.quaternion)),t.multiply(n.makeRotationZ(i*.7)),t.multiply(n.makeScale(s,s,1)),this.#V.add(t,(1-o)**1.5,r.color)}),this.#V.end()}#St(e){let t=this.#N,n=this.#P;this.#W.begin(),this.#H.forEach((r,i)=>{let a=e-r.start,o=r.beam?IA:MA;if(a<0||a>=o||r.length<=0)return;let s=1-a/o;if(r.beam){let e=BA(r.dx,r.dy);t.makeTranslation(r.x,.9,r.y).multiply(n.makeRotationY(e)),t.multiply(n.makeScale(.9*(.6+.4*s),1,r.length)),this.#W.add(t,.55*s,r.color),t.makeTranslation(r.x,.91,r.y).multiply(n.makeRotationY(e)),t.multiply(n.makeScale(.2,1,r.length)),this.#W.add(t,s,Yk);return}let c=Math.floor(a/2),l=Math.min(.3,.1*r.length),u=r.x,d=r.y;for(let e=1;e<=NA;e++){let a=r.length*e/NA,o=e===NA?0:l*zA(i*7+e*3+c*11),f=r.x+r.dx*a-r.dy*o,p=r.y+r.dy*a+r.dx*o,m=Math.hypot(f-u,p-d),h=BA(f-u,p-d);t.makeTranslation(u,.9,d).multiply(n.makeRotationY(h)),t.multiply(n.makeScale(.26,1,m)),this.#W.add(t,.6*s,r.color),t.makeTranslation(u,.91,d).multiply(n.makeRotationY(h)),t.multiply(n.makeScale(.06,1,m)),this.#W.add(t,s,Yk),u=f,d=p}}),this.#W.end()}#Ct(e,t,n,r){let i=this.#N,a=this.#P;this.#Y.begin(),this.#X.begin(),this.#Z.begin();let o=e.player.ward,s=this.#ke?.replaces;if(o&&!e.player.dead&&!s?.ward){let e=1.1+.08*Math.sin(r*.2);i.makeTranslation(t,.04,n).multiply(a.makeScale(e,1,e)),this.#X.add(i,.8*Math.min(1,o.frames/20),RA)}for(let t of e.zones??[]){if(s?.reaction(t.reaction))continue;let e=this.#e.content.reactions.get(t.reaction),n=this.#Q.get(t.reaction);if(!e||!n||t.radius<=0)continue;let o=t.frames>0?Math.min(1,t.frame/t.frames):1,c=t.radius,l=(e,r,o,s=.02)=>{i.makeTranslation(t.x,s,t.y).multiply(a.makeScale(e,1,e)),o.add(i,r,n)},u=e.effect;if(u.kind===`burst`){l(c,.12,this.#Y),l(c*o,.3,this.#Y,.025),l(c,.7,this.#X,.03);continue}if(u.kind===`wave`){l(c,.9*(1-o),this.#X,.04);continue}if(u.kind===`strike`){l(c,.25*(1-o),this.#X,.03);continue}if(u.kind!==`zone`)continue;let d=Math.min(1,t.frame/6,(t.frames-t.frame)/12),f=.85+.15*Math.sin(r*.15+t.id);if(l(c,.2*d*f,this.#Y),l(c,.55*d,this.#X,.03),u.pull>0)for(let e=0;e<3;e++){let o=-r*.12+e*Math.PI*2/3;i.makeTranslation(t.x,.05,t.y).multiply(a.makeRotationY(o)),i.multiply(a.makeScale(c,1,c)),this.#Z.add(i,.6*d,n)}}this.#Y.end(),this.#X.end(),this.#Z.end()}#wt(e){let t=this.#N,n=this.#P;this.#q.begin();for(let r of this.#G){let i=e-r.start;if(i<0||i>=FA)continue;let a=i/FA,o=.4+r.radius*(1-(1-a)*(1-a));t.makeTranslation(r.x,.08,r.y).multiply(n.makeScale(o,1,o)),this.#q.add(t,.8*(1-a),r.color)}this.#q.end()}render(t,r,a){let o=this.#ke,s=o&&t.hitstop>0?1:a,c=t.frame-1+s,l=o?{frame:t.frame,time:c,alpha:s}:null;if(o&&l)o.stage(t,l);else{let r=this.#e.content.arenas.get(t.arena),i=t.map?.floor??0,a=t.camp?r?.camp:void 0,o=r?.dungeon&&!a?n(this.#e.content.pieces,r.dungeon,i,t.seed):null,s=t.map?.fight??null,c=t.map?.broken??[],l=o?e(o,s,c):a?.rows??r?.map?.rows,u=o?`${t.arena}|${i}|${t.seed}|${s??-1}|${c.length}`:a?`${t.arena}|camp`:t.arena;l?this.#Ne(u,l):this.#Pe(t.width,t.height),o?this.#Me(t,o):(this.#me?.clear(),this.#me?.showMiners([]),this.#me?.showCarts([]))}let u=t.player,[d,f]=r?.player??[u.x,u.y],p=Jk(d,u.x,s),m=Jk(f,u.y,s);if(this.#Ce=this.#Se.height?.(p,m)??0,this.#s.position.set(p,this.#Ce,m),this.#s.rotation.y=BA(u.fx,u.fy),this.#s.visible=o?!0:!u.dead,!o){let e=u.invulnerable>0&&u.dodgeFrame<0&&!u.dash&&Math.floor(t.frame/4)%2==1,n=this.#xe.bodyGlow(c);for(let t of this.#u)u.hurt>0?(t.emissive.copy(Xk),t.emissiveIntensity=u.hurt/12):n>0&&!e?(t.emissive.copy(SA),t.emissiveIntensity=.9*n):(t.emissive.copy(Yk),t.emissiveIntensity=e?.35:0);this.#Et(t,s)}let h=this.#kt(t,s);o&&l&&o.player.update(t,p,m,h,l),t.party&&this.#Tt(t,r,s,l),this.#Le(t,r,s,c,l),this.#st(t,r,s),this.#ct(t,s),this.#ut(t,p,m,s);let g=t.build?.route,_=g&&t.build?.phase===`doors`?[...g.doors.map(e=>({x:e.x,y:e.y,kind:e.plan.kind})),...g.shop?[{x:g.shop.x,y:g.shop.y,kind:`shop`,size:D/i}]:[]]:[];this.#ye.update(this.#ke?.replaces?.doors?[]:_,c);for(let e of this.#ve){let t=c-e.start,n=t>=0&&t<qk;if(e.mesh.visible=n,n){e.mesh.position.set(e.x,0,e.y),e.mesh.rotation.y=e.angle;for(let n of e.materials)n.opacity=.45*(1-t/qk)}}this.#be.update(c),this.#xe.update(c,p,m),this.#xe.group.position.y=this.#Ce,this.#Mt(p,m,u.fx,u.fy,c),this.#rt(t,r,s),this.#xt(c),this.#St(c),this.#wt(c),this.#Ct(t,p,m,c),this.#pt(t,r,s,c),this.#ke?.replaces?.loot||this.#lt(p,m,c),o&&l?o.draw(l):this.#t.render(this.#n,this.#r)}#Tt(e,t,n,r){let i=this.#e.content.action.steps,a=this.#ke;e.party?.forEach((o,s)=>{let c=s+1,l=o.player,[u,d]=t?.allies?.[s]??[l.x,l.y],f=Jk(u,l.x,n),p=Jk(d,l.y,n),m=o.build?.gear?.kit.core.areaMult??1,h={recovery:l.stats.recovery??0,quakeReach:o.build?.stars?.quakeReach??0},g=l.dodgeFrame<0&&!l.dead&&!l.downed?hd(i,l.step,l.stepFrame,n,l.stats.haste,m,h):null;a&&r?a.player.ally?.(e,c,f,p,g,r):(this.#d??=new Dd(this.#n,this.#e.skin,this.#e.content),this.#d.place(c,o.gone?null:l,f,p,g,e.frame,n))})}#Et(e,t){let n=e.player,r=this.#l,{dodgeFrames:i}=this.#e.content.player;if(r.position.y=Gk,r.rotation.set(0,0,0),n.dodgeFrame>=0){let e=Math.max(0,Math.min(1,(n.dodgeFrame-1+t)/i));r.rotation.x=Math.PI*2*e,r.position.y=Gk-.25*Math.sin(Math.PI*e)}else n.dash?(r.rotation.x=.55,r.position.y=.58):n.hurt>0&&(r.rotation.x=-.35*(n.hurt/12))}#Dt(e,t,n){let r=this.#Ot(e,t,n),i=this.#ft(e,t);if(i>=0&&(r.pitch-=1.6*Math.sin(Math.PI*i)),e.flash>0){let t=e.flash/8,n=e.state===`windup`||e.state===`attack`?.35:1;r.pitch-=.4*t*n,r.sx*=1+.08*t,r.sy*=1-.14*t,r.sz*=1+.08*t}return r}#Ot(e,t,n){let r=this.#I;if(r.pitch=0,r.sx=1,r.sy=1,r.sz=1,r.dx=0,e.state===`windup`){let i=Math.max(0,Math.min(1,(e.stateFrame-1+t)/Math.max(1,e.warnFrames)));return r.pitch=-.3*i,r.sx=1+.08*i,r.sy=1-.14*i,r.sz=1+.08*i,r.dx=.04*Math.max(0,(i-.66)*3)*Math.sin(n*2.6),r}if(e.state===`attack`)return r.pitch=.5,r.sx=.92,r.sy=1.04,r.sz=1.12,r;if(e.state!==`recover`)return r;let i=this.#e.content.enemies.get(e.def)?.attack;if(!i)return r;let a=1-Math.min(1,(e.stateFrame-1+t)/Math.max(1,i.recover));return i.kind===`dash`?(r.pitch=.25*a,r.sy=1-.08*a):r.pitch=-.35*a*a,r}#kt(e,t){let n=e.player,r=this.#e.content.action.steps,i=this.#f,a=md.yaw,o=md.pitch,s=md.reach;this.#m.opacity=0,this.#p.scale.set(1,1,1),this.#_.opacity=0,this.#y.opacity=0,this.#x.opacity=0,this.#R.hide(),this.#te.visible=!1;let c=e.build?.gear?.kit.core.areaMult??1,l={recovery:n.stats.recovery??0,quakeReach:e.build?.stars?.quakeReach??0},u=n.dodgeFrame<0?hd(r,n.step,n.stepFrame,t,n.stats.haste,c,l):null;if(u){let{step:e,f:t,slash:i}=u,l=e.hitbox;a=u.yaw,o=u.pitch,s=u.reach,l.kind===`line`?this.#jt(l.length,l.width,e.activeFrom,e.activeTo,t-1):i&&this.#At(e,t,i.tail,i.head,i.radius,n.step);let d=(t-e.activeFrom)/CA;if(e.stun>0&&l.kind!==`line`&&d>=0&&d<1){let e=.6+(l.radius*c+.4-.6)*(1-(1-d)**3);this.#te.visible=!0,this.#te.scale.set(e,1,e),this.#ne.opacity=.85*(1-d)**1.5}let f=this.#h[n.step];if(f&&(this.#p.geometry=f),l.kind!==`line`&&t>=e.activeFrom-1&&t<=e.activeTo+4){let i=t<=e.activeTo?1:1-(t-e.activeTo)/5;this.#p.scale.set(c,1,c),this.#m.opacity=.2*i,this.#m.color.copy(n.step===r.length-1?pA:fA)}}let d=Math.PI/180;return i.rotation.set(o*d*-1,a*d,0,`YXZ`),i.position.set(0,.20000000000000007,s),u}#At(e,t,n,r,i,a){if(t<e.activeFrom-.5)return;let o=(t-e.activeTo)/OA;if(o>=1)return;let s=Math.max(0,o),c=a===this.#e.content.action.steps.length-1;this.#R.show(Jk(n,r,s),r,i*.55,i,(1-s)**1.3,c?gA:hA)}#jt(e,t,n,r,i){let a=e*C(n,r,i),o=i<=r?1:Math.max(0,1-(i-r)/6);if(i<n-1||a<=0||o<=0)return;this.#p.scale.set(t,1,a),this.#m.opacity=.22*o,this.#m.color.copy(mA);let s=.6+.4*o;this.#g.position.set(0,.9,.3),this.#g.scale.set(t*.45*s,1,a),this.#_.opacity=o,this.#v.position.set(0,.88,.3),this.#v.scale.set(t*1.5*s,1,a),this.#y.opacity=.7*o,this.#b.position.set(0,.9,.3+a),this.#b.scale.set(.22,.1,.75),this.#x.opacity=o}#Mt(e,t,n,r,i){let a=this.#e.view,o=a?a.lead:this.#ke?0:Hk.lead,s=this.#L.set(e+n*o,(a?a.height:0)+this.#Ce,t+r*o);this.#e.stable||!this.#o?this.#i.copy(s):this.#i.lerp(s,Hk.ease),this.#o=!0;let c=(a?a.pitchDeg:Hk.pitchDeg)*Math.PI/180,l=i-this.#we.start,u=l>=0&&l<10?this.#we.strength*(1-l/10):0;if(a){let e=a.yawDeg*Math.PI/180+(a.facing?Math.atan2(n,r):0),t=a.distance*Math.cos(c);this.#r.position.set(this.#i.x+t*Math.sin(e),this.#i.y+a.distance*Math.sin(c),this.#i.z+t*Math.cos(e))}else this.#r.position.set(this.#i.x+u*Math.sin(l*2.3),this.#i.y+this.#a*Math.sin(c),this.#i.z+this.#a*Math.cos(c)+u*Math.cos(l*1.9));this.#r.lookAt(this.#i)}groundAt(e,t){let n=this.#e.canvas.getBoundingClientRect();if(n.width===0||n.height===0)return null;let r=new L((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);this.#Te.setFromCamera(r,this.#r),this.#Ee.constant=-this.#Ce;let i=this.#Te.ray.intersectPlane(this.#Ee,new R);return i?{x:i.x,y:i.z}:null}fog(e){this.#ke?.fog?.(e)}hidden(e,t){return this.#ke?.hidden?.(e,t)??!1}project(e,t,n){let r=new R(e,n+(this.#Se.height?.(e,t)??0),t).project(this.#r);if(r.z>1)return null;let i=this.#e.canvas.getBoundingClientRect();return{x:(r.x+1)/2*i.width,y:(1-r.y)/2*i.height}}resize(){let e=this.#e.canvas,t=e.clientWidth||1280,n=e.clientHeight||720;this.#t.setSize(t,n,!1),this.#r.aspect=t/n,this.#r.updateProjectionMatrix();let r=Hk.fov/2*Math.PI/180;this.#a=Math.max(Hk.distance,Hk.minWidth/(2*Math.tan(r)*this.#r.aspect)),this.#ke?.resize(t,n)}reset(e){this.#ee.hide(),this.#ie.visible=!1,this.#ce=[],this.#oe=[],this.#le.clear(),this.#be.reset(e);for(let e of this.#ve)e.start=-1e3;for(let e of this.#z)e.start=-1e3;for(let e of this.#H)e.start=-1e3;for(let e of this.#G)e.start=-1e3;this.#xe.clear(),this.#we={start:-1e3,strength:0},this.#o=!1,this.#ke?.reset(e)}ambient(e,t,n,r){this.#be.ambient(e,t,n,r)}stats(){let e=this.#ke?.stats()??this.#t.info.render;return{calls:e.calls,triangles:e.triangles,particles:this.#be.live}}dispose(){this.#ke?.dispose(),this.#t.dispose()}};function ZA(){let e=new ro(1,1,2,24);return e.rotateX(-Math.PI/2),e.translate(0,0,.5),e}function QA(){let e=new io(0,1,48,12);return e.rotateX(-Math.PI/2),e}export{ed as a,ze as c,F as d,O as f,Mk as i,Re as l,k as m,Vk as n,ld as o,M as p,Pk as r,Be as s,XA as t,He as u};