import{$ as e,$t as t,A as n,An as r,At as i,Bt as a,C as o,Cn as s,Ct as c,D as l,Dn as u,Dt as d,E as f,En as p,Et as m,F as h,Ft as g,G as _,Gt as v,H as y,Ht as b,I as x,It as S,J as C,Jt as w,K as T,Kt as E,L as D,Lt as O,Mn as k,Mt as A,N as j,Nn as ee,Nt as M,O as N,On as P,Ot as te,P as ne,Pt as re,Q as ie,Qt as ae,R as F,Rt as oe,S as I,Sn as L,St as se,Tn as ce,Tt as le,U as R,Ut as ue,V as de,Vt as fe,W as pe,Wt as me,X as he,Xt as ge,Y as _e,Yt as ve,Z as z,Zt as ye,_t as be,a as xe,an as B,at as Se,b as V,bn as H,bt as Ce,c as we,cn as Te,ct as Ee,dn as De,dt as Oe,en as ke,et as Ae,fn as je,ft as Me,gn as Ne,gt as Pe,hn as Fe,ht as Ie,i as Le,it as Re,j as ze,jn as Be,jt as Ve,k as He,kn as Ue,kt as We,ln as Ge,lt as Ke,mn as qe,mt as Je,n as Ye,nn as Xe,nt as Ze,o as Qe,on as $e,ot as et,pn as tt,pt as nt,q as rt,qt as it,r as at,rn as ot,rt as st,s as ct,sn as lt,st as ut,t as dt,tn as ft,tt as pt,un as mt,ut as ht,vn as gt,vt as _t,w as vt,wn as yt,wt as bt,x as xt,xn as St,xt as Ct,y as wt,yn as Tt,yt as Et,z as Dt,zt as Ot}from"./download-Bbjd4V5q.js";var kt=[`prep`,`shop`],At=[`reshape`,`reforge`,`merge`,`drill`,`points`],jt=[`reshape`,`reforge`,`merge`];function Mt(e){return jt.includes(e)}function Nt(e){let t=0,n=0;for(let[r,i]of e.cells)t+=r,n+=i;t/=e.n,n/=e.n;let r=e.cells[0]??[0,0],i=1/0;for(let a of e.cells){let e=(a[0]-t)**2+(a[1]-n)**2;e<i-1e-9&&(r=a,i=e)}return r}function Pt(e,t,n){let r=e,[i,a]=t;for(let e=0;e<(n%4+4)%4;e++)[i,a]=[r.h-1-a,i],r=me(r,1);return[i,a]}function Ft(e,t){return t.length===0?e:{...Object.fromEntries(t.map(e=>[e.uid,e])),...e}}function It(e){return e.zone===`board`&&e.on===`weapon`?`weapon`:`character`}var Lt=e=>e===`weapon`?{on:`weapon`}:{},Rt=class{focus={zone:`board`,x:2,y:2};page=`prep`;carry=null;message=null;#e;#t;#n=null;#r=null;#i=null;#a=null;constructor(e,t=()=>{}){this.#e=e,this.#t=t}get snapshot(){return this.#e.snapshot()}get craft(){let e=this.#i;return e&&this.focus.zone===`service`&&this.carry?.uid===e.uid?e:null}get drillPick(){return this.#a}reset(){let e=this.snapshot;this.carry=null,this.#n=null,this.#r=null,this.#i=null,this.#a=null,this.message=null;let t=e.mode===`arrange`?e.region:null;this.page=t?.shop&&!t.prep?`shop`:`prep`,this.focus=this.#o()}pages(){let e=this.snapshot;return e.mode===`arrange`&&e.region?.shop?[`prep`,`shop`]:[`prep`]}get tabs(){let e=this.snapshot;return e.mode===`arrange`&&!!e.region&&(!!e.region.shop||!!e.region.prep)}setPage(e,t){this.pages().includes(e)?e!==this.page&&(this.carry&&this.cancel(t),this.page=e,this.#a=null,this.#i=null,this.message=null,this.focus=this.#o(),this.#t({kind:`page`,device:t})):e===`shop`&&this.#k(`商店在清房後才開`,!0)}#o(){let e=this.snapshot;if(this.page===`shop`)return{zone:`shop`,index:0};let t=e.mode===`arrange`;return t&&this.#s()>0?{zone:`drops`,index:0}:t&&(e.weaponOffers?.length??0)>0?{zone:`weapons`,index:0}:e.offers.length>0&&t?{zone:`offers`,index:this.#c(e)}:{zone:`board`,x:Math.floor(e.board.spec.w/2),y:Math.floor(e.board.spec.h/2)}}#s(){let e=this.snapshot.region?.prep;return e?e.drops.length+(this.snapshot.weaponOffers?.length??0):0}#c(e){let t=this.#A(),n=e.offers.findIndex(n=>{let r=e.crystals[n];return r!==void 0&&t.some(e=>b(e,r.shape))});return Math.max(0,n)}move(e,t,n){let r=this.snapshot,i=this.focus,a=this.carry;if(this.#a=null,a){if(i.zone===`shatter`){t<0&&this.#d()?this.#t({kind:`move`,device:n}):e>0&&this.#p()&&(this.#m(`reshape`),this.#t({kind:`move`,device:n}));return}if(i.zone===`service`){if(t<0){this.#d()&&(this.#i=null,this.#t({kind:`move`,device:n}));return}let r=jt.indexOf(i.kind);if(e<0&&r<=0){this.focus={zone:`shatter`},this.#i=null,this.#t({kind:`move`,device:n});return}let a=jt[Math.max(0,Math.min(jt.length-1,r+e))];e!==0&&a&&a!==i.kind&&(this.#m(a),this.#t({kind:`move`,device:n}));return}if(i.zone!==`board`)return;this.#n=null;let r=It(i),o=this.#j(r),s=this.#F(a.uid,a.turns);if(o&&s&&t>0&&i.y-a.grab[1]+s.h>=o.spec.h){this.#r=i,this.focus={zone:`shatter`},this.#t({kind:`move`,device:n});return}let c=this.#M(r);if(o&&s&&c&&e!==0&&r===`character`==e>0){let t=i.x-a.grab[0],r=e>0?t+s.w>=o.spec.w:t<=0,l=this.#j(c);if(r&&l){let t=e>0?a.grab[0]:l.spec.w-s.w+a.grab[0];this.#D(t,i.y,c),this.#t({kind:`move`,device:n});return}}this.#D(i.x+e,i.y+t,r),this.#t({kind:`move`,device:n});return}if(i.zone===`board`){let n=It(i),{w:a,h:o}=(this.#j(n)??r.board).spec,s=this.#M(n),c=i.x+e,l=s?this.#j(s):null;if(l&&s&&(c<0||c>=a)&&n===`character`==e>0){this.focus={zone:`board`,x:e>0?0:l.spec.w-1,y:Math.min(l.spec.h-1,i.y),...Lt(s)};return}let u=Math.max(0,Math.min(a-1,c)),d=i.y+t;if(d<0){let e=r.weaponOffers?.length??0,t=this.#s();t>0&&r.mode===`arrange`?this.focus={zone:`drops`,index:Math.min(t-1,Math.floor(u*t/a))}:r.offers.length>0&&r.mode===`arrange`?this.focus={zone:`offers`,index:Math.min(r.offers.length-1,Math.floor(u*r.offers.length/a))}:r.mode===`arrange`&&e>0?this.focus={zone:`weapons`,index:Math.min(e,Math.floor(u*(e+1)/a))}:this.tabs&&(this.focus=this.#l());return}if(d>=o){this.focus=r.bag.length>0?{zone:`bag`,index:Math.min(r.bag.length-1,u)}:r.mode===`arrange`?{zone:`next`}:i;return}this.focus={zone:`board`,x:u,y:d,...Lt(n)};return}if(i.zone===`tabs`){let r=this.pages(),i=t===0?r[r.indexOf(this.page)+e]:void 0;i?(this.setPage(i,n),this.focus=this.#l()):t>0&&(this.focus=this.#o());return}if(i.zone===`shop`){let n=(r.region?.shop?.wares.length??0)+1,a=Math.floor(i.index/3),o=Math.ceil(n/3);t<0&&a===0?this.tabs&&(this.focus=this.#l()):t===0?this.focus={zone:`shop`,index:Math.max(0,Math.min(n-1,i.index+e))}:a+t>=0&&a+t<o&&(this.focus={zone:`shop`,index:Math.min(n-1,i.index+t*3)});return}if(i.zone===`drops`){let n=this.#s();t>0?this.focus={zone:`board`,x:Math.floor(r.board.spec.w/2),y:0}:t<0&&this.tabs?this.focus=this.#l():t===0&&(this.focus={zone:`drops`,index:Math.max(0,Math.min(n-1,i.index+e))});return}if(i.zone===`offers`||i.zone===`weapons`){let n=r.weaponOffers?.length??0,a=r.offers.length,o=i.zone===`offers`?a:n+1;t>0&&i.zone===`weapons`&&a>0?this.focus={zone:`offers`,index:Math.min(a-1,i.index)}:t>0?this.focus={zone:`board`,x:Math.floor(r.board.spec.w/2),y:0}:t<0&&i.zone===`offers`&&n>0?this.focus={zone:`weapons`,index:Math.min(n,i.index)}:t<0&&this.tabs?this.focus=this.#l():t===0&&(this.focus={zone:i.zone,index:Math.max(0,Math.min(o-1,i.index+e))});return}let{w:o,h:s}=r.board.spec;if(i.zone===`bag`)this.focus=t<0?{zone:`board`,x:Math.min(o-1,i.index),y:s-1}:t>0&&r.mode===`arrange`?{zone:`next`}:e>0&&i.index>=r.bag.length-1&&this.#v()[0]?{zone:`service`,kind:this.#v()[0]??`drill`}:{zone:`bag`,index:Math.max(0,Math.min(r.bag.length-1,i.index+e))};else if(i.zone===`service`){let n=this.#v(),a=t===0?n[n.indexOf(i.kind)+e]:void 0;if(a){this.focus={zone:`service`,kind:a};return}e<0||t<0?this.focus=r.bag.length>0?{zone:`bag`,index:r.bag.length-1}:{zone:`board`,x:Math.floor(o/2),y:s-1}:t>0&&r.mode===`arrange`&&(this.focus={zone:`next`})}else if(i.zone===`shatter`){let n=r.bag.length>0?{zone:`bag`,index:r.bag.length-1}:{zone:`board`,x:Math.floor(o/2),y:s-1};t<0||e<0?this.focus=n:t>0&&r.mode===`arrange`&&(this.focus={zone:`next`})}else t<0&&(this.focus=r.bag.length>0?{zone:`bag`,index:0}:{zone:`board`,x:Math.floor(o/2),y:s-1})}#l(){return{zone:`tabs`,index:Math.max(0,kt.indexOf(this.page))}}switchBoard(e,t){let n=e>0?`weapon`:`character`,r=this.snapshot.gear?this.#j(n):null,i=this.focus;if(!(!r||i.zone===`board`&&It(i)===n)){if(this.carry){if(i.zone!==`board`)return;this.#n=null,this.#D(i.x,i.y,n)}else{let e=i.zone===`board`?i.x:Math.floor(r.spec.w/2),t=i.zone===`board`?i.y:Math.floor(r.spec.h/2);this.focus={zone:`board`,x:Math.min(r.spec.w-1,e),y:Math.min(r.spec.h-1,t),...Lt(n)}}this.#t({kind:`move`,device:t})}}point(e){let t=this.#a;if((!t||e.zone!==`board`||It(e)!==`weapon`||e.x!==t[0]||e.y!==t[1])&&(this.#a=null),this.carry){if(e.zone===`shatter`){this.focus.zone===`board`&&(this.#r=this.focus),this.focus=e,this.#i=null;return}if(e.zone===`service`){(this.focus.zone!==`service`||this.focus.kind!==e.kind)&&this.#m(e.kind);return}if(this.#i=null,e.zone!==`board`)return;this.#n=null,this.#D(e.x,e.y,It(e))}else this.focus=e}confirm(e){let t=this.snapshot;if(t.mode===`view`){this.#k(`戰鬥中只能查看，清房後才能整理`,!0);return}if(this.focus.zone===`shatter`){this.#u(e);return}if(this.focus.zone===`service`){this.#_(this.focus.kind,e);return}if(this.carry){this.#S(e);return}let n=this.focus;if(n.zone===`tabs`){let t=kt[n.index];t&&this.setPage(t,e);return}if(n.zone===`drops`){let r=t.region?.prep?.drops??[],i=r[n.index];if(i){this.#x(i,e);return}let a=t.weaponOffers?.[n.index-r.length];if(!a||!this.#O({type:`equip`,uid:a.uid},e))return;this.#t({kind:`equip`,device:e}),this.#k(`換上新武器：水晶已移植過去`,!1);let o=this.#s();this.focus=o>0?{zone:`drops`,index:Math.min(o-1,n.index)}:this.#o();return}if(n.zone===`weapons`){let r=t.weaponOffers?.[n.index],i=r?{type:`equip`,uid:r.uid}:{type:`keep`};if(!this.#O(i,e))return;this.#t({kind:r?`equip`:`keep`,device:e}),this.#k(r?`換上新武器：水晶已移植過去`:`保留原本的武器`,!1);let a=this.snapshot,o=a.gear?.weapon;this.focus=a.offers.length>0?{zone:`offers`,index:this.#c(a)}:o?{zone:`board`,x:Math.floor(o.spec.w/2),y:Math.floor(o.spec.h/2),on:`weapon`}:{zone:`board`,x:2,y:2};return}if(n.zone===`shop`){this.#C(n.index,e);return}if(n.zone===`offers`){let r=t.offers[n.index];if(!r||!this.#O({type:`pick`,uid:r},e))return;this.#t({kind:`pick`,device:e}),this.#w(r,`bag`,null,e);return}if(n.zone===`bag`){let r=t.bag[n.index];r&&this.#w(r,`bag`,null,e,`character`,!0);return}if(n.zone===`next`){this.next(e);return}let r=It(n),i=this.#L(n.x,n.y,r);if(i){let t=[n.x-i.x,n.y-i.y];this.#w(i.item,`board`,t,e,r);return}let a=this.#j(r);a&&!Te(a.spec,n.x,n.y)&&(r===`weapon`?this.#b(n.x,n.y,e)||this.#k(`武器上只有孔洞能放水晶`,!0):t.unlockPoints<=0?this.#k(`沒有開格點：升級才會得到`,!0):lt(t.board,n.x,n.y)?this.#O({type:`unlock`,x:n.x,y:n.y},e)&&(this.#t({kind:`unlock`,device:e}),this.#k(`開了一格`,!1)):this.#k(`只能開和已開格子相鄰的格子`,!0))}cancel(e){let t=this.carry;return t?(this.#t({kind:`dropped`,uid:t.uid,device:e}),this.carry=null,this.#n=null,this.#i=null,this.message=null,this.#f(t.uid,t.from),!0):!1}rotate(e,t){let n=this.carry,r=this.focus,i=this.#i;if(n&&r.zone===`service`&&i&&i.uid===n.uid){let n=i.options.length;if(n<=1)return;i.index=(i.index+e+n)%n,this.message=null,this.#t({kind:`cycle`,device:t});return}if(!n||r.zone!==`board`)return;let a=this.#F(n.uid,n.turns);if(!a)return;let o=Pt(a,n.grab,e);this.carry={...n,turns:(n.turns+e+4)%4,grab:o},this.#n=null,this.#D(r.x,r.y,It(r)),this.#t({kind:`rotate`,device:t})}cycle(e,t){let n=this.carry;if(!n)return;let r=this.snapshot.crystals[n.uid];if(!r)return;if(!this.#n){let e=this.focus.zone===`board`?[this.focus.x,this.focus.y]:void 0;this.#n={moves:this.#P(n.uid,r.shape,e,It(this.focus)),index:-1}}let{moves:i}=this.#n;if(i.length===0){this.#k(`沒有放得下的位置：先開格或移開其他水晶`,!0);return}this.#n.index=(this.#n.index+e+i.length)%i.length;let a=i[this.#n.index];a&&this.#E(a),this.#t({kind:`cycle`,device:t})}stash(e){if(this.snapshot.mode!==`arrange`)return;let t=this.carry?this.carry.from===`board`?this.carry.uid:null:this.#R();t&&this.#O({type:`stash`,uid:t},e)&&(this.carry=null,this.#n=null,this.#t({kind:`stash`,device:e}),this.#k(`收進晶囊`,!1),this.#f(t,`board`))}#u(e){let t=this.carry;t?this.#O({type:`shatter`,uid:t.uid},e)&&(this.carry=null,this.#n=null,this.#t({kind:`shatter`,device:e}),this.#k(`粉碎成晶塵`,!1),this.#f(t.uid,t.from)):this.#k(e===`mouse`?`把要粉碎的水晶拖到這裡`:`先拿起要粉碎的水晶，再往下推到這裡`,!0)}#d(){let e=this.#r;if(e?.zone===`board`)return this.#r=null,this.#D(e.x,e.y,It(e)),this.focus.zone===`board`;let t=this.carry,n=t?this.snapshot.crystals[t.uid]:void 0,r=n?this.#P(n.uid,n.shape)[0]:void 0;return!t||!n||!r?!1:(this.carry={...t,turns:0},this.#E(r),!0)}#f(e,t){if(this.focus.zone!==`shatter`&&this.focus.zone!==`service`)return;let n=this.#r;this.#r=null;let r=this.snapshot.bag,i=r.indexOf(e);t===`board`&&n?this.focus=n:i>=0?this.focus={zone:`bag`,index:i}:r.length>0&&(this.focus={zone:`bag`,index:r.length-1})}#p(){let e=this.snapshot;return e.mode!==`arrange`||e.region?.prep?null:e.region?.shop?.services??null}#m(e){this.focus.zone===`board`&&(this.#r=this.focus),this.focus={zone:`service`,kind:e},this.#n=null,this.message=null,this.#i=null;let t=this.carry,n=t?this.snapshot.crystals[t.uid]:void 0,r=this.#p();t&&n&&r&&e!==`drill`&&(this.#i={kind:e,uid:t.uid,options:this.#h(e,n,r),index:0})}#h(e,t,n){let r={crystal:t,command:null,price:null},i=t.uid;if(e===`reshape`){let e=Ue(n.prices,t.n),a=Se(t);if(e===null||a.length===0)return[];let o=this.#A().map((e,t)=>this.#I(i,t===0?`character`:`weapon`)),s=this.#g(i);return[r,...a.map((e,t)=>{let n=Ne(e);return{shape:e,order:t,factor:n.factor,fills:s.has(n.id),fits:o.some(t=>b(t,e))}}).sort((e,t)=>Number(t.fills)-Number(e.fills)||Number(t.fits)-Number(e.fits)||t.factor-e.factor||e.order-t.order).map(r=>({crystal:et(t,r.shape,n.stats),command:{type:`reshape`,uid:i,shape:r.shape.key},price:e,fills:r.fills,fits:r.fits}))]}if(e===`reforge`){let e=u(n.prices,t.n),a=st(t,n.pool);return e===null||a.length===0?[]:[r,...a.map(r=>({crystal:Re(t,r,n.stats),command:{type:`reforge`,uid:i,stat:r.stat},price:e}))]}if(e===`merge`){let e=n.skills[t.def];if(!e)return[];let r=this.snapshot;return[...r.board.placements.map(e=>e.item),...r.gear?.weapon.placements.map(e=>e.item)??[],...r.bag].flatMap(a=>{let o=r.crystals[a],s=o?Ae(t,o,e):null,c=s===null?null:ce(n.prices,s);return o&&s!==null&&c!==null?[{level:s,option:{crystal:pt(t,e,s),command:{type:`merge`,uid:i,with:a},price:c,partner:a}}]:[]}).sort((e,t)=>t.level-e.level).map(e=>e.option)}return[]}#g(e){let t=this.snapshot.gear?this.#I(e,`weapon`):null;if(!t)return new Set;let n=new Set;for(let e of t.placements)for(let[t,r]of e.shape.cells)n.add(`${e.x+t},${e.y+r}`);return new Set(tt(t.spec).filter(e=>e.every(([e,t])=>!n.has(`${e},${t}`))).map(e=>Ne(gt(e)).id))}#_(t,n){let r=this.snapshot,i=this.#p(),a=this.carry;if(!i){this.#k(zt.noService??``,!0);return}if(t===`points`){this.#y(i,n);return}if(t===`drill`){if(a){this.#k(`鑽孔不用拿水晶：選武器晶盤上的＋`,!0);return}let t=r.gear?.weapon,n=i.free??0,o=L(i.prices,i.drilled,n),s=t?e(t.spec)[0]:void 0;if(!i.prices.services?.drill)this.#k(zt.noService??``,!0);else if(o===null)this.#k(zt.drillLimit??``,!0);else if(!s)this.#k(`這把武器沒有能鑽的格子`,!0);else{this.focus={zone:`board`,x:s[0],y:s[1],on:`weapon`},this.#a=null;let e=o===0?`免費，還有 ${n} 次`:`金幣 ${o}`;this.#k(`鑽孔（${e}）：選武器晶盤上的＋，按兩次`,!1)}return}if(!a){this.#k(n===`mouse`?`把水晶拖到這裡`:`先拿起水晶，往下推到粉碎區，再往右`,!0);return}(!this.#i||this.#i.uid!==a.uid||this.#i.kind!==t)&&this.#m(t);let o=this.#i,s=o?.options[o.index];if(!o||!s){this.#k(t===`reshape`?`這顆換不了形狀：屬性水晶 3 格以上才能重塑`:t===`reforge`?`只有屬性水晶能重鑄`:`要有另一顆同技能、還沒到最高級的水晶`,!0);return}if(!s.command){this.#k(`先用${n===`pad`?` LB／RB `:n===`mouse`?`滾輪或右鍵`:` R `}選一個新的${t===`reshape`?`形狀`:`屬性`}`,!0);return}if(!this.#O(s.command,n))return;this.#t({kind:`craft`,device:n});let{uid:c,from:l}=a;if(this.carry=null,this.#i=null,this.#n=null,t===`reforge`){this.#k(`重鑄好了`,!1),this.#f(c,l);return}this.#r=null,this.#w(c,`bag`,null,n);let u=t===`reshape`?`重塑好了`:`合成好了`;this.#k(this.carry?`${u}：放上晶盤吧`:`${u}：現在放不下，先收在晶囊`,!1)}#v(){let e=this.#p()?.prices.services;return At.filter(t=>!Mt(t)&&e?.[t]!==void 0)}#y(e,t){if(this.carry){this.#k(`開格不用拿水晶：選「開格」直接買`,!0);return}let n=p(e.prices,e.points??0);if(n===null){this.#k(zt.noService??``,!0);return}if(this.snapshot.unlockPoints>=mt(this.snapshot.board.spec)){this.#k(zt.nothingToUnlock??``,!0);return}if(!this.#O({type:`buyPoint`},t))return;this.#t({kind:`point`,device:t});let r=Fe(this.snapshot.board)[0];r&&t!==`mouse`&&(this.focus={zone:`board`,x:r[0],y:r[1]}),this.#k(`買了 1 個開格點（金幣 ${n}）：${t===`mouse`?`點角色晶盤上的＋開格`:`按確定開這一格`}`,!1)}#b(e,t,n){let r=this.#p(),i=this.snapshot.gear?.weapon;if(!r?.prices.services?.drill||!i)return!1;if(!ie(i.spec,e,t))return this.#k(zt.notDrillable??``,!0),!0;let a=r.free??0,o=L(r.prices,r.drilled,a);if(o===null)return this.#k(zt.drillLimit??``,!0),!0;let s=this.#a;if(!s||s[0]!==e||s[1]!==t){this.#a=[e,t];let n=Ze(i,e,t),r=o===0?`免費（還有 ${a} 次）`:`金幣 ${o}`;return this.#k(`鑽這一格：${r}${n?`（旁邊的水晶會失去完美契合）`:``}，再按一次確定`,!1),!0}return this.#O({type:`drill`,x:e,y:t},n)&&(this.#a=null,this.#t({kind:`drill`,device:n}),this.#k(`鑽好了：武器晶盤多了一格`,!1)),!0}#x(e,t){this.#O({type:`take`,uid:e},t)&&(this.#t({kind:`pick`,device:t}),this.#w(e,`bag`,null,t))}next(e){this.snapshot.mode!==`arrange`||this.carry||this.#O({type:`next`},e)&&this.#t({kind:`next`,device:e})}grab(e,t,n){let r=this.snapshot;if(!(r.mode!==`arrange`||this.carry)){if(r.region?.prep?.drops.includes(e))this.#x(e,n);else if(r.offers.includes(e)){if(!this.#O({type:`pick`,uid:e},n))return;this.#t({kind:`pick`,device:n}),this.#w(e,`bag`,null,n)}else{for(let r of[`character`,`weapon`])if(this.#j(r)?.placements.some(t=>t.item===e)){this.#w(e,`board`,t,n,r);return}this.#w(e,`bag`,t,n,`character`,!0)}}}preview(){let e=this.carry;if(!e||this.focus.zone!==`board`)return null;let t=It(this.focus),n=this.#I(e.uid,t),r=this.#M(t),i=r?{other:this.#I(e.uid,r)}:{},a=null;for(let r of[0,1,3,2]){let o=(e.turns+r)%4,s=this.#F(e.uid,o);if(!s)return null;let[c,l]=r===0?e.grab:Pt(this.#F(e.uid,e.turns)??s,e.grab,r),u=this.focus.x-c,d=this.focus.y-l,f=$e(n,s,u,d);if(f.ok)return{board:je(n,e.uid,s,u,d).board,...Lt(t),...i,shape:s,x:u,y:d,turns:o,ok:!0,reason:null,autoTurned:r!==0};a??={board:n,...Lt(t),...i,shape:s,x:u,y:d,turns:o,ok:!1,reason:f.reason,autoTurned:!1}}return a}#S(e){let t=this.carry,n=this.preview();if(!t||!n)return;if(!n.ok){let t=n.reason??`bounds`;this.#t({kind:`failed`,reason:t,device:e});let r=n.on===`weapon`&&t===`locked`;this.#k(r?`武器上只有孔洞能放水晶`:zt[t]??`放不下`,!0);return}let r=n.on??`character`,i=t.from===`board`&&(t.on??`character`)===r?this.#j(r)?.placements.find(e=>e.item===t.uid):void 0;if(i&&i.x===n.x&&i.y===n.y&&i.shape.key===n.shape.key){this.cancel(e);return}let a={type:`place`,uid:t.uid,x:n.x,y:n.y,turns:n.turns,...r===`weapon`?{board:`weapon`}:{}};this.#O(a,e)&&(this.#t({kind:`placed`,uid:t.uid,autoTurned:n.autoTurned,device:e}),this.carry=null,this.#n=null,this.message=null)}#C(e,t){let n=this.snapshot.region?.shop;if(!n)return;let r=n.wares[e];if(r)r.sold?this.#k(zt.sold??``,!0):this.#O({type:`buy`,index:e},t)&&(this.#t({kind:`buy`,device:t}),r.kind===`crystal`?this.#k(`買好了：放進晶囊，到「整備」擺上晶盤`,!1):r.kind===`weapon`?this.#k(`換上新武器：水晶已移植過去，到「整備」看看`,!1):this.#k(`回復了 ${r.heal??0} 生命`,!1));else{if(!this.#O({type:`refresh`},t))return;this.#t({kind:`refresh`,device:t}),this.#k(`水晶和武器換了一批`,!1)}}#w(e,t,n,r,i=`character`,a=!1){let o=this.snapshot,s=o.crystals[e];if(!s)return;if(this.#n=null,this.message=null,t===`board`){let a=this.#j(i)?.placements.find(t=>t.item===e);if(!a)return;let o=n??Nt(s.shape);this.carry={uid:e,from:t,...Lt(i),turns:0,grab:o},this.focus={zone:`board`,x:a.x+o[0],y:a.y+o[1],...Lt(i)},this.#t({kind:`pickup`,uid:e,from:t,device:r});return}let c=o.gear;if(c){let e=[...o.board.placements,...c.weapon.placements].flatMap(e=>o.crystals[e.item]??[]),t=ot(e,s);if(!t.ok){this.#k(zt[t.reason]??`放不下`,!0),this.#t({kind:`failed`,reason:t.reason,device:r}),a&&this.#T(s,n,r);return}}let l=this.#P(e,s.shape)[0];if(l)this.carry={uid:e,from:t,turns:0,grab:n??Nt(s.shape)},this.#E(l),this.#t({kind:`pickup`,uid:e,from:t,device:r});else{if(a){this.#k(`這顆放不下：可以在粉碎區粉碎，或放回晶囊`,!0),this.#T(s,n,r);return}this.#k(`這顆放不下：先開格，或移開其他水晶`,!0);let t=this.snapshot.bag.indexOf(e);t>=0&&(this.focus={zone:`bag`,index:t})}}#T(e,t,n){this.carry={uid:e.uid,from:`bag`,turns:0,grab:t??Nt(e.shape)},this.#r=null,this.focus={zone:`shatter`},this.#t({kind:`pickup`,uid:e.uid,from:`bag`,device:n})}#E(e){let t=this.carry;if(!t)return;let n=this.#F(t.uid,t.turns);if(!n)return;let r=(e.turns-t.turns+4)%4,i=Pt(n,t.grab,r);this.carry={...t,turns:e.turns,grab:i},this.focus={zone:`board`,x:e.x+i[0],y:e.y+i[1],...Lt(e.on)}}#D(e,t,n){let r=this.carry,i=this.#j(n);if(!r||!i)return;let a=this.#F(r.uid,r.turns);if(!a)return;let{w:o,h:s}=i.spec,c=Math.max(0,Math.min(o-a.w,e-r.grab[0])),l=Math.max(0,Math.min(s-a.h,t-r.grab[1]));this.focus={zone:`board`,x:c+r.grab[0],y:l+r.grab[1],...Lt(n)}}#O(e,t){let n=this.#e.apply(e);return!n||(this.#t({kind:`failed`,reason:n,device:t}),this.#k(Bt(n,this.snapshot),!0),!1)}#k(e,t){this.message={text:e,error:t}}#A(){let e=this.snapshot;return e.gear?[e.board,e.gear.weapon]:[e.board]}#j(e){let t=this.snapshot;return e===`weapon`?t.gear?.weapon??null:t.board}#M(e){return e===`weapon`?`character`:this.snapshot.gear?`weapon`:null}#N(e){let t=this.snapshot.gear;if(!t)return null;let n=this.snapshot.crystals;return(r,i)=>{let o=a(r,{ruleOf:e=>{let i=r.placements.find(t=>t.pid===e),a=i?n[i.item]:void 0;return a?t.rules[a.def]:void 0},...e===`weapon`?{coreTags:t.coreTags}:{}});return{...fe(o,i),perfect:e===`weapon`&&Ge(r,i)}}}#P(e,t,n,r=`character`){let i=this.snapshot.gear?[`character`,`weapon`]:[`character`],a=[];for(let o of i){let i=this.#I(e,o),s=this.#N(o),c=o===r?n:void 0;ue(i,t,{item:e,...s?{judge:s}:{},...c?{anchor:c}:{}}).forEach(({move:e,verdict:t},n)=>{a.push({spot:{...e,on:o},verdict:t,order:n})})}return a.sort((e,t)=>t.verdict.active-e.verdict.active||e.verdict.gray-t.verdict.gray||Number(t.verdict.perfect)-Number(e.verdict.perfect)||Number(t.spot.on===r)-Number(e.spot.on===r)||e.order-t.order),a.map(e=>e.spot)}#F(e,t){let n=this.snapshot.crystals[e];return n?me(n.shape,t):null}#I(e,t=`character`){let n=this.#j(t)??this.snapshot.board,r=n.placements.find(t=>t.item===e);return r?qe(n,r.pid):n}#L(e,t,n=`character`){return this.#j(n)?.placements.find(n=>n.shape.cells.some(([r,i])=>n.x+r===e&&n.y+i===t))}#R(){let e=this.focus;return e.zone===`board`?this.#L(e.x,e.y,It(e))?.item??null:null}},zt={inCombat:`戰鬥中只能查看，清房後才能整理`,bounds:`超出晶盤了`,locked:`那裡還沒開格`,occupied:`那裡已經有水晶`,core:`那是武器核心`,noUnlockPoints:`沒有開格點：升級才會得到`,notUnlockable:`只能開和已開格子相鄰的格子`,pickFirst:`先從獎勵裡挑一顆`,bagOver:`晶囊超過上限：放上晶盤，或放進粉碎區`,offered:`先選這顆獎勵`,finished:`這一局已經結束`,skillLimit:`技能最多 3 個：先收回一個技能`,duplicateSkill:`同一種技能只能放一個：先收回原本那顆`,noWeapon:`這裡沒有武器晶盤`,notOffered:`那不是這一房的獎勵`,doorsOpen:`門已經開了：走進一扇門就出發`,notShop:`這裡不是商店`,sold:`已經賣掉了`,noGold:`金幣不夠`,noService:`這間商店沒有這項服務`,cannotCraft:`這顆水晶不能用這項服務`,badChoice:`先選一個新的形狀或屬性`,maxLevel:`已經是最高級了`,notDrillable:`這格不能鑽：要和孔洞或核心相鄰，而且不能把兩個孔洞連起來`,drillLimit:`這把武器已經鑽滿了`,nothingToUnlock:`角色晶盤已經沒有格子可開了`,notDropped:`那不是這一房的掉落`,noDust:`晶塵不夠：粉碎水晶，或出發時沒拿的掉落會變成晶塵`};function Bt(e,t){return e===`pickFirst`&&(t.weaponOffers?.length??0)>0?`先選一把武器，或保留原本的`:zt[e]??e}function Vt(e,t){if(e.name!==t.name)return[t.name===null?`沒有技能`:`換成 ${t.name}`];if(e.level===null&&t.level!==null)return[`放上晶盤：Lv${t.level}`];if(e.level!==null&&t.level===null)return[`離開晶盤：這個鍵沒有作用`];let n=[];e.level!==t.level&&n.push(`Lv${e.level} → Lv${t.level}`);let r=new Map(e.numbers.map(e=>[e.label,e.value])),i=new Map(t.numbers.map(e=>[e.label,e.value]));for(let[e,t]of i){let i=r.get(e);i===void 0?n.push(`${e} ${t}`):i!==t&&n.push(`${e} ${i} → ${t}`)}for(let[e,t]of r)i.has(e)||n.push(`${e} ${t} → 無`);return n}var Ht=new Set([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`KeyW`,`KeyA`,`KeyS`,`KeyD`,`Enter`,`Space`,`KeyR`,`KeyF`,`KeyB`,`KeyN`,`Escape`,`Tab`,`BracketLeft`,`BracketRight`,`Digit1`,`Digit2`]),Ut={prep:`整備`,shop:`商店`},Wt=new Set([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`KeyW`,`KeyA`,`KeyS`,`KeyD`]),Gt=500,Kt={reshape:`重塑`,reforge:`重鑄`,merge:`合成`,drill:`鑽孔`,points:`開格`},qt=e=>`${(e/10).toFixed(1).replace(/\.0$/,``)}%`;function Jt(e,t,n){return e.on===`weapon`?{character:e.other??t,weapon:e.board}:{character:e.board,weapon:e.other??n}}var Yt=class{element=T(`div`,{class:`board-screen`,hidden:!0});controller;#e;#t=rt(`svg`,{class:`board`});#n=rt(`svg`,{class:`board weapon`});#r=`keys`;#i=!1;#a=null;#o=!1;#s=!1;#c=null;#l=null;#u=null;#d=T(`div`,{class:`bs-ghost`,hidden:!0});#f=``;#p=null;#m;constructor(e){this.#e=e,pe(document),this.controller=new Rt(e.actions,t=>{e.onNotice?.(t)});let t=t=>Math.round((t.speed/e.base.speed-1)*1e3),n=e.caps??{};this.#m=[{key:`attack`,name:`攻擊`,value:e=>e.attack,text:String},{key:`maxHp`,name:`生命`,value:e=>e.maxHp,text:String},{key:`defense`,name:`防禦`,value:e=>e.defense,text:String},{key:`haste`,name:`攻速`,value:e=>e.haste,text:e=>`+${qt(e)}`,cap:n.haste??600},{key:`speed`,name:`移速`,value:t,text:e=>`+${qt(e)}`,cap:n.speed??400},{key:`lifesteal`,name:`吸血`,value:e=>e.lifesteal,text:qt,cap:n.lifesteal??100},{key:`crit`,name:`暴擊`,value:e=>e.crit,text:qt,cap:n.crit??750},{key:`cdr`,name:`冷卻縮減`,value:e=>e.cdr,text:qt,cap:n.cdr??400}],this.#U(),window.addEventListener(`keydown`,e=>this.#H(e))}get open(){return!this.element.hidden}show(e){this.#r=e,this.element.hidden=!1,this.controller.reset();let t=this.controller.snapshot;this.#o=t.offers.length>0,this.#s=(t.weaponOffers?.length??0)>0,this.#l=null,this.#u=null,this.render()}hide(){this.element.hidden=!0,this.#i=!1,this.#p=null,this.#d.hidden=!0}act(e,t){this.#r=e,t(this.controller),this.render()}render(){if(!this.open)return;let e=this.controller,t=e.snapshot,n=t.mode===`arrange`,r=e.preview(),i=e.focus,a=t.gear??null,o=e.tabs,s=o?e.page:`prep`,c=t.region?.prep??null,u=n?t.weaponOffers??[]:[],d=c?.drops.length??0,f=this.#r===`mouse`?this.#l:i.zone===`weapons`?i.index:i.zone===`drops`&&i.index>=d?i.index-d:null,p=n?t.region?.shop??null:null,m=this.#r===`mouse`?this.#u:i.zone===`shop`?i.index:null,h=m===null?void 0:p?.wares[m],g=(f===null?void 0:u[f])??(h&&!h.sold?h.weapon:void 0),v=this.#e.gearFor,y=a&&v?v({character:t.board,weapon:a.weapon}):null,b=a?r?.ok?Jt(r,t.board,a.weapon):g?{character:t.board,weapon:g.board,equip:g.uid}:null:null,x=b&&v?v(b):null,S=x??y,C=r?.ok?`放下後`:g?`換上後`:null;a?(this.#_(this.#t,`character`,b?.character??t.board,S,r),this.#_(this.#n,`weapon`,b?.weapon??a.weapon,S,r)):this.#_(this.#t,`character`,r?.ok?r.board:t.board,null,r);let w=(x??y)?.waste??null,E=!!(r?.ok&&e.carry),D=y?.stats??this.#e.statsFor(t.board),O=x?.stats??(r?.ok&&!a?this.#e.statsFor(r.board):null),k=t.nextXp===null?null:t.nextXp-t.levelXp,A=k?(t.xp-t.levelXp)/k:1,j=t.leaveBlocker,ee=t.room+1>=t.rooms,M=t.region?.doorsOpen===!0,N=T(`p`,{class:`bs-message${e.message?.error?` error`:``}`},e.message?.text??``),P=T(`div`,{class:`bs-bag`},T(`div`,{class:`bs-bag-head`},T(`h3`,null,`晶囊`,T(`small`,{class:t.bag.length>t.bagSize?`warn`:``},`${t.bag.length} / ${t.bagSize}`)),n?this.#R(t,i):null),T(`div`,{class:`bs-bag-row`},...t.bag.map((e,n)=>this.#z(e,n,n>=t.bagSize,i)),...Array.from({length:Math.max(0,t.bagSize-t.bag.length)},()=>T(`div`,{class:`bs-slot empty`})))),te=_(`關閉（Tab）`,()=>this.#e.onClose()),ne=c&&n&&!M&&c.leaveCount>0?T(`small`,{class:`bs-leave`},`沒拿的 ${c.leaveCount} 顆 → 晶塵 +${c.leaveDust}`):null,re=M?T(`div`,{class:`bs-next`},j?T(`span`,{class:`warn`},Bt(j,t)):null,T(`span`,null,c?`走進出口就出發`:`走進一扇門就出發`),te):n?T(`div`,{class:`bs-next`},j?T(`span`,{class:`warn`},Bt(j,t)):null,ne,_(T(`span`,null,t.start||c?`出發 `:ee?`完成`:t.region?`去選門 `:`下一房 `,this.#B(this.#r===`pad`?`Menu`:`N`)),()=>this.act(`mouse`,e=>e.next(`mouse`)),{class:`primary${i.zone===`next`?` focused`:``}`,disabled:j!==null||e.carry!==null})):a?T(`div`,{class:`bs-next`},te):te,ie=n&&a!==null&&!c&&(u.length>0||this.#s)&&(t.offers.length>0||this.#o),ae=a&&p?.services&&!c&&s===`prep`?p.services:null,F=y?.xp??0,oe=x?x.xp??0:F,I=[y?this.#j(y,x,C):null,T(`h3`,null,`屬性`,O?T(`small`,null,C??`放下後`):null),T(`table`,{class:`bs-stats${y?` compact`:``}`},...this.#m.map(e=>{let t=e.value(D),n=O?e.value(O):t,r=n-t;return T(`tr`,{class:r>0?`up`:r<0?`down`:``},T(`th`,null,e.name),T(`td`,null,e.text(n),this.#F(e,n,w)),T(`td`,{class:`delta`},r===0?``:`${r>0?`+`:`−`}${e.text(Math.abs(r)).replace(/^\+/,``)}`))}),F>0||oe>0?this.#P(F,oe,w):null),e.craft?this.#b(e.craft,S):S?this.#L(S,E):null,N];this.element.replaceChildren(T(`div`,{class:`bs-panel${n?``:` viewing`}${y?` m3`:``}${ie?` both`:``}${ae?` services`:``}${o?` paged`:``}`},T(`div`,{class:`bs-head`},T(`h2`,null,M?c?`整理晶盤`:p?`商店`:`選一扇門`:n?t.start?`出發前：把技能放上晶盤`:`第 ${t.room+1} 房清除了`:`晶盤`,T(`small`,null,M?c?`走進出口就出發・遊戲暫停`:p?`買東西、整理晶盤・遊戲暫停；走進一扇門就出發`:`還能整理晶盤・遊戲暫停`:n?t.start?`共 ${t.rooms} 房`:c?.next?`整備・下一房：${l[c.next]}`:`之後還有 ${t.rooms-t.room-1} 房`:`戰鬥中只能查看・遊戲暫停`)),T(`div`,{class:`bs-chips`},T(`span`,{class:`chip lv`},`Lv ${t.level}`),t.region?T(`span`,{class:`chip gold`},`金幣 ${t.region.gold}`):null,T(`span`,{class:`chip xp`},T(`span`,{class:`xp-bar`},T(`span`,{style:`width:${Math.round(A*100)}%`})),t.nextXp===null?`經驗 已滿`:`經驗 ${t.xp} / ${t.nextXp}`),T(`span`,{class:`chip${t.unlockPoints>0?` hot`:``}`},`開格點 ${t.unlockPoints}`),c?.stones?T(`span`,{class:`chip stone`},`這一房：開格石 +${c.stones}`):null,T(`span`,{class:`chip`},`晶塵 ${t.dust}`))),o?this.#T(i):null,...s===`shop`&&p?[T(`div`,{class:`bs-main bs-shop-page`},this.#D(t,p,i),T(`div`,{class:`bs-side`},...I,re))]:[c&&n?this.#C(t,c,a,u,i):null,!c&&n&&a&&(u.length>0||this.#s)?this.#E(t,a,u,i):null,n&&(t.offers.length>0||this.#o)?T(`div`,{class:`bs-offers`},T(`h3`,null,`獎勵三選一`),t.offers.length>0?T(`div`,{class:`bs-offer-row`},...t.offers.map((e,t)=>this.#k(e,t,i))):T(`div`,{class:`bs-offer-row taken`},`獎勵已收進晶囊`)):null,T(`div`,{class:`bs-main`},a?this.#x(a,i,g,P):T(`div`,{class:`bs-board`},this.#t),T(`div`,{class:`bs-side`},...I,ae?this.#y(t,ae,i):null,a?re:P))],T(`div`,{class:`bs-foot`},T(`div`,{class:`bs-hints`},...this.#V(n,a!==null,o?s:null)),a||s===`shop`?null:re)),this.#d),this.#h()}#h(){let e=this.#d,t=this.controller.carry,n=this.#p,r=t?this.controller.snapshot.crystals[t.uid]:void 0;if(!this.#i||!t||!r||!n||n.onSpot){e.hidden=!0;return}let i=me(r.shape,t.turns),a=Math.max(12,Math.round(this.#g())),o=`${t.uid}|${i.key}|${a}`;o!==this.#f&&(this.#f=o,e.replaceChildren(R({shape:i,color:this.#e.colorOf(r)},{maxCell:a,pad:3}))),e.hidden=!1,e.style.left=`${n.x-(t.grab[0]+.5)*a-3}px`,e.style.top=`${n.y-(t.grab[1]+.5)*a-3}px`}#g(){let e=de(this.#t,this.controller.snapshot.board,0,0).cellPx;return e>0?e:40}#_(e,t,n,r,i){let a=this.controller,o=a.snapshot,s=a.focus,c=(i?.on??`character`)===t,l=r?.links.filter(e=>e.on===t)??[],u={board:n,crystalOf:e=>o.crystals[e],colorOf:this.#e.colorOf,labelsOf:this.#e.labelsOf,links:l.map(e=>e.link),linkTitle:e=>l.find(t=>t.link===e)?.title??``,linkLabel:e=>l.find(t=>t.link===e)?.label??null,...r?{dead:new Set([...r.idle,...r.waste.crystals])}:{},unlockable:t===`character`&&o.mode===`arrange`&&o.unlockPoints>0&&!a.carry?Fe(o.board):[],carried:a.carry&&a.carry.from===`board`&&(a.carry.on??`character`)===t&&!i?.ok?a.carry.uid:null,previewUid:i?.ok&&c?a.carry?.uid??null:null,previewTurned:c?i?.autoTurned??!1:!1,invalid:i&&!i.ok&&c?{shape:i.shape,x:i.x,y:i.y}:null,cursor:s.zone===`board`&&It(s)===t&&this.#r!==`mouse`?[s.x,s.y]:null,...t===`weapon`?{solid:!0,perfect:new Set(r?.perfect??[]),...o.gear?.coreTitle?{coreTitle:o.gear.coreTitle}:{},...this.#v(n)}:{}};y(e,u)}#v(t){let n=this.controller,r=n.snapshot,i=r.mode===`arrange`&&!r.region?.prep?r.region?.shop?.services:null,a=i?L(i.prices,i.drilled,i.free??0):null,o=r.gear?.weapon;return!i||a===null||n.carry||!o||o.spec!==t.spec?{drillable:[],drillPick:null,drillTitle:``}:{drillable:e(t.spec),drillPick:n.drillPick,drillTitle:`鑽孔：${a===0?`免費`:`金幣 ${a}`}（點兩下）`,drillPrice:a}}#y(e,t,n){let r=this.controller,i=r.craft,a=r.carry,o=a?e.crystals[a.uid]:void 0,s=t.prices.services,c=e.region?.gold??0,l=n=>{let r=(e,t)=>e?t===void 0?`${e[0]}＋${e[1]}／格`:`金幣 ${e[0]+e[1]*t}`:``,i=o?.category===`stat`?o.n:void 0;if(n===`reshape`)return r(s?.reshape,i);if(n===`reforge`)return r(s?.reforge,i);if(n===`merge`){let e=ce(t.prices,2),n=ce(t.prices,3);return e===null?``:`Lv2 ${e}・Lv3 ${n??e}`}if(n===`points`){if(e.unlockPoints>=mt(e.board.spec))return`晶盤全開了`;let n=p(t.prices,t.points??0);return n===null?``:`金幣 ${n}・開格點 +1`}let a=t.free??0,c=L(t.prices,t.drilled,a),l=(s?.drill?.max??0)-t.drilled;return c===null?`這把鑽滿了`:c===0?`免費・還有 ${a} 次`:`金幣 ${c}・剩 ${l} 次`},u=At.flatMap(e=>{if(!s?.[e])return[];let t=n.zone===`service`&&n.kind===e,r=i?.kind===e?i:null,a=r?.options[r.index],o=r?.options.length??0,u=a?.command?_(`確定（金幣 ${a.price??0}）`,()=>{},{class:`primary${(a.price??0)>c?` short`:``}`,"data-pay":e}):null;return[T(`div`,{class:`bs-service${t?` focused`:``}${r?` active`:``}`,"data-service":e},T(`b`,null,Kt[e]),r&&o>1?T(`span`,{class:`bs-cycle`},_(`‹`,()=>{},{"data-cycle":`-1`,class:`bs-cycle-step`}),T(`small`,{class:`bs-service-note`},a?.command?`${r.index+1} / ${o}`:`現在`),_(`›`,()=>{},{"data-cycle":`1`,class:`bs-cycle-step`})):T(`small`,{class:`bs-service-note`},r&&o===0?`不能用在這顆`:l(e)),u)]}),d=i?this.#r===`pad`?`LB／RB 換選項，A 確定，B 放回`:this.#r===`mouse`?`滾輪或右鍵換選項，按「確定」付錢`:`R 換選項，Enter 確定，Esc 放回`:this.#r===`mouse`?`把水晶拖到服務上；鑽孔點武器晶盤上的＋${s?.points?`；開格點一下就買`:``}`:`拿著水晶推到粉碎區再往右；鑽孔選武器晶盤上的＋${s?.points?`，開格在它右邊`:``}`;return T(`div`,{class:`bs-services`},T(`h3`,null,`晶坊`,T(`small`,null,d)),T(`div`,{class:`bs-service-row${u.length>=5?` five`:``}`},...u))}#b(e,t){let n=this.controller.snapshot,r=n.crystals[e.uid],i=e.options[e.index],a=Kt[e.kind];if(!r||!i)return T(`div`,{class:`bs-details`},T(`div`,{class:`bs-details-head`},T(`b`,null,a)),T(`p`,{class:`warn`},e.kind===`reshape`?`這顆換不了形狀：屬性水晶 3 格以上才能重塑`:e.kind===`reforge`?`只有屬性水晶能重鑄`:`要有另一顆同技能、還沒到最高級的水晶`));let o=i.crystal,s=e=>this.#e.labelsOf(e).map(e=>e.join(` `)).join(`、`),c=[];if(e.kind===`merge`){let e=i.partner?n.crystals[i.partner]:void 0;c.push(T(`p`,null,`${this.#e.nameOf(r)} Lv${r.level??1}＋Lv${e?.level??1} → Lv${o.level??1}`))}else if(i.command){let n=this.#I(r,t,!1),a=t?.waste,l=o.stats.flatMap(t=>{let n=a?.fields[t.stat];return n&&e.kind===`reforge`&&a?.full.includes(n)?[n]:[]}).map(e=>this.#m.find(t=>t.key===e)?.name??e);c.push(T(`p`,null,`現在：${s(r)}`),n?T(`p`,{class:`warn`},n):null,T(`p`,{class:`up`},`之後：${s(o)}`),l.length>0?T(`p`,{class:`warn`},`之後：${l.join(`、`)}也已到上限`):null),e.kind===`reshape`&&(c.push(T(`p`,null,`形狀係數 ×${r.factor} → ×${o.factor}`)),c.push(T(`p`,{class:i.fills||i.fits?``:`warn`},i.fills?`剛好填滿武器的空孔洞`:i.fits?`現在放得下`:`現在放不下`)))}else{let e=this.#I(r,t,!1);c.push(T(`p`,null,`現在：${s(r)}`)),e&&c.push(T(`p`,{class:`warn`},e)),c.push(T(`p`,{class:`muted`},`用旋轉鍵（滾輪、右鍵、R、LB／RB）換選項`))}return T(`div`,{class:`bs-details bs-craft`},T(`div`,{class:`bs-details-head`},T(`b`,null,i.command?`${a}：${this.#e.nameOf(o)}`:`${a}：現在`),T(`small`,null,i.price===null?``:`金幣 ${i.price}`)),T(`div`,{class:`bs-craft-body`},R({shape:o.shape,color:this.#e.colorOf(o),uid:`craft-${o.uid}`},{maxCell:14,box:64}),T(`div`,null,...c)))}#x(e,t,n,r){let i=t.zone===`board`&&this.#r!==`mouse`?It(t):null,a=n??{name:e.label??`武器`,attack:e.attack};return T(`div`,{class:`bs-boards`},T(`div`,{class:`bs-board-block`},T(`h3`,null,`角色晶盤`),T(`div`,{class:`bs-board${i===`character`?` here`:``}`,"data-board":`character`},this.#t)),T(`div`,{class:`bs-board-block`},T(`h3`,null,n?`換上後`:`武器`,T(`small`,null,`${a.name}${a.attack===void 0?``:`・攻擊 ${a.attack}`}`)),T(`div`,{class:`bs-board weapon${i===`weapon`?` here`:``}${n?` trying`:``}`,"data-board":`weapon`},this.#n)),r)}#S(e,t,n,r,i,a=!1){let o=t?.attack===void 0?0:n.attack-t.attack,s=tt(n.board.spec).length;return T(`div`,{class:`bs-offer bs-weapon rarity-${n.rarity}${i?` focused`:``}`,"data-weapon":String(r)},this.#O(n.board),T(`div`,{class:`bs-offer-text`},T(`b`,null,n.name),T(`span`,null,`攻擊 ${n.attack}`,o===0?null:T(`em`,{class:o>0?`up`:`down`},` ${o>0?`+`:`−`}${Math.abs(o)}`),`・孔洞 ${De(n.board.spec)} 格 ${s} 塊`),T(`small`,{class:n.bag>e.bagSize?`nofit`:`fit`},(n.moved+n.toBag===0?`武器上沒有水晶，不用移植`:`移植：${n.moved} 顆放入${n.toBag>0?`、${n.toBag} 顆回晶囊（晶囊 ${n.bag}/${e.bagSize}）`:``}`)+(n.freeDrills?`・免費鑽孔 ×${n.freeDrills}`:``)),a?T(`span`,{class:`bs-take`},`換上`):null))}#C(e,t,n,r,i){let a=e=>i.zone===`drops`&&i.index===e,o=[...t.drops.map((e,t)=>this.#w(e,a(t))),...r.map((r,i)=>this.#S(e,n,r,i,a(t.drops.length+i),!0))];return T(`div`,{class:`bs-offers bs-drops`},T(`h3`,null,`掉落`,T(`small`,null,`點一下拿起來，可以拿好幾顆；沒拿的水晶出發時變成晶塵`)),o.length>0?T(`div`,{class:`bs-offer-row`},...o):T(`div`,{class:`bs-offer-row taken`},e.start?`打倒怪物，掉的水晶和武器會收在這裡`:`這一房的掉落都拿完了`))}#w(e,t){let n=this.controller.snapshot.crystals[e];return n?T(`div`,{class:`bs-offer bs-drop${t?` focused`:``}`,"data-drop":e},R({shape:n.shape,color:this.#e.colorOf(n),uid:e},{maxCell:16,box:64}),T(`div`,{class:`bs-offer-text`},T(`b`,null,this.#e.nameOf(n)),...this.#e.labelsOf(n).map(e=>T(`span`,null,e.join(` `))),this.#A(n),T(`span`,{class:`bs-take`},`拿取`))):T(`div`)}#T(e){let t=this.controller,n=t.pages();return T(`div`,{class:`bs-tabs`},...kt.map((r,i)=>{let a=t.page===r,o=!n.includes(r),s=e.zone===`tabs`&&e.index===i&&this.#r!==`mouse`;return T(`div`,{class:`bs-tab${a?` on`:``}${o?` off`:``}${s?` focused`:``}`,"data-page":r},this.#r===`pad`?Ut[r]:`${i+1} ${Ut[r]}`)}),T(`small`,{class:`bs-tab-hint`},this.#r===`pad`?`往上到這一列，左右換頁`:this.#r===`mouse`?`點分頁換頁`:`按 1、2 換頁`))}#E(e,t,n,r){let i=e=>r.zone===`weapons`&&r.index===e;return T(`div`,{class:`bs-offers bs-weapons`},T(`h3`,null,`換武器`,T(`small`,null,`換上新武器時，舊武器上的水晶會移植過去`)),n.length>0?T(`div`,{class:`bs-offer-row`},...n.map((n,r)=>this.#S(e,t,n,r,i(r))),T(`div`,{class:`bs-offer bs-weapon keep${i(n.length)?` focused`:``}`,"data-weapon":`keep`},this.#O(t.weapon),T(`div`,{class:`bs-offer-text`},T(`b`,null,`保留現在的武器`),T(`span`,null,`${t.label??`武器`}${t.attack===void 0?``:`・攻擊 ${t.attack}`}`),T(`small`,{class:`fit`},`水晶都留在原位`)))):T(`div`,{class:`bs-offer-row taken`},`武器選好了`))}#D(e,t,n){let r=e.region?.gold??0,i=e=>n.zone===`shop`&&n.index===e,a=(e,t,n=!1)=>T(`span`,{class:`bs-price${t?` sold`:n?` free`:e>r?` short`:``}`},t?`已售出`:n?`免費`:`金幣 ${e}`),o=t.wares.some(e=>e.free&&!e.sold),s=t.wares.map((t,n)=>{let r={"data-ware":String(n)},o=`bs-offer bs-ware${t.sold?` sold`:``}${i(n)?` focused`:``}`,s=t.uid?e.crystals[t.uid]:void 0;if(t.kind===`crystal`&&s)return T(`div`,{class:o,...r},R({shape:s.shape,color:this.#e.colorOf(s),uid:s.uid},{maxCell:14,box:56}),T(`div`,{class:`bs-offer-text`},T(`b`,null,this.#e.nameOf(s)),...this.#e.labelsOf(s).map(e=>T(`span`,null,e.join(` `))),this.#A(s),a(t.price,t.sold,t.free)));if(t.kind===`weapon`&&t.weapon){let n=t.weapon;return T(`div`,{class:`${o} bs-weapon bs-ware-weapon rarity-${n.rarity}`,...r},this.#O(n.board),T(`div`,{class:`bs-offer-text`},T(`b`,null,n.name),T(`span`,null,`攻擊 ${n.attack}・孔洞 ${De(n.board.spec)} 格${n.freeDrills?`・免費鑽孔 ×${n.freeDrills}`:``}`),t.sold?null:T(`small`,{class:n.bag>e.bagSize?`nofit`:`fit`},n.moved+n.toBag===0?`換上後：武器上沒有水晶，不用移植`:`換上後：${n.moved} 顆移植過去${n.toBag>0?`、${n.toBag} 顆回晶囊`:``}`),a(t.price,t.sold)))}return T(`div`,{class:o,...r},T(`div`,{class:`bs-heal`},`＋`),T(`div`,{class:`bs-offer-text`},T(`b`,null,`回復`),T(`span`,null,`回復 ${t.heal??0} 生命`),a(t.price,t.sold)))});return T(`div`,{class:`bs-offers bs-shop`},T(`h3`,null,`商品`,T(`small`,null,`金幣 ${r}・晶囊 ${e.bag.length}／${e.bagSize}・`,o?`送你一顆：水晶任選一顆免費，進晶囊`:`買的水晶進晶囊，回「整備」擺上晶盤；武器直接換上，水晶移植過去`)),T(`div`,{class:`bs-offer-row bs-shop-grid`},...s,T(`div`,{class:`bs-offer bs-refresh${i(t.wares.length)?` focused`:``}`,"data-ware":`refresh`},T(`div`,{class:`bs-offer-text`},T(`b`,null,`刷新`),T(`span`,null,`水晶和武器換一批`),a(t.refreshPrice,!1)))))}#O(e){let t=this.controller.snapshot,n=rt(`svg`,{class:`board mini`});return y(n,{board:e,crystalOf:e=>t.crystals[e],colorOf:this.#e.colorOf,labelsOf:()=>[],links:[],linkTitle:()=>``,unlockable:[],solid:!0}),n}#k(e,t,n){let r=this.controller.snapshot.crystals[e];if(!r)return T(`div`);let i=n.zone===`offers`&&n.index===t;return T(`div`,{class:`bs-offer${i?` focused`:``}`,"data-offer":e},R({shape:r.shape,color:this.#e.colorOf(r),uid:e},{maxCell:16,box:64}),T(`div`,{class:`bs-offer-text`},T(`b`,null,this.#e.nameOf(r)),...this.#e.labelsOf(r).map(e=>T(`span`,null,e.join(` `))),this.#A(r)))}#A(e){let t=this.controller.snapshot,n=t.gear,r=n?[t.board,n.weapon]:[t.board];if(n){let n=r.flatMap(e=>e.placements).flatMap(e=>t.crystals[e.item]??[]),i=ot(n,e);if(!i.ok){let t=i.reason===`skillLimit`?`技能已滿`:`要先收回原本那顆`;return T(`small`,{class:`nofit`},`${e.n} 格・${t}`)}}let i=r.some(t=>b(t,e.shape));return T(`small`,{class:i?`fit`:`nofit`},`${e.n} 格・${i?`放得下`:`現在放不下`}`)}#j(e,t,n){let r=this.#e.keyNames?.(this.#r)??[`1`,`2`,`3`],i=t??e;return T(`div`,{class:`bs-skills`},T(`h3`,null,`技能`,t?T(`small`,null,n??`放下後`):null),...i.keys.map((n,i)=>{let a=e.keys[i],o=t&&a?Vt(a,n):[],s=n.level===null?` off`:o.length>0?` changed`:``;return T(`div`,{class:`bs-key${s}`,"data-key":String(i)},T(`kbd`,null,r[i]??String(i+1)),T(`div`,{class:`bs-key-body`},T(`div`,{class:`bs-key-head`},T(`b`,null,n.name??`—`),n.level===null?T(`span`,{class:`off`},n.name?`不在晶盤上`:`空`):T(`span`,{class:`lv`},`Lv${n.level}`),n.on===`weapon`?T(`span`,{class:`on-weapon`},`武器`):null),n.numbers.length>0?T(`div`,{class:`bs-key-numbers`},n.numbers.map(e=>`${e.label} ${e.value}`).join(`・`)):null,n.augments.length>0?T(`div`,{class:`bs-key-links`},...n.augments.map(e=>T(`span`,{class:e.ok?`ok`:`no`,title:e.why},`${e.ok?`✓`:`✕`} ${e.name}`))):null,o.length>0?T(`div`,{class:`bs-key-changes`},o.join(`，`)):null))}),i.core?this.#M(e.core,i.core):null)}#M(e,t){let n=new Map((e?.numbers??[]).map(e=>[e.label,e.value])),r=t.numbers.some(e=>n.get(e.label)!==e.value);return T(`div`,{class:`bs-key core${e&&r?` changed`:``}`},T(`kbd`,null,`普攻`),T(`div`,{class:`bs-key-body`},T(`div`,{class:`bs-key-head`},T(`b`,null,`普攻`),T(`span`,{class:`on-weapon`},`武器核心`)),T(`div`,{class:`bs-key-numbers`},t.numbers.map(e=>`${e.label} ${e.value}`).join(`・`)),t.augments.length>0?T(`div`,{class:`bs-key-links`},...t.augments.map(e=>T(`span`,{class:e.ok?`ok`:`no`,title:e.why},`${e.ok?`✓`:`✕`} ${e.name}`))):null))}#N(){let e=this.controller;if(e.carry)return e.carry.uid;if(this.#r===`mouse`&&this.#c)return this.#c;let t=e.snapshot,n=e.focus;return n.zone===`offers`?t.offers[n.index]??null:n.zone===`drops`?t.region?.prep?.drops[n.index]??null:n.zone===`shop`?t.region?.shop?.wares[n.index]?.uid??null:n.zone===`bag`?t.bag[n.index]??null:n.zone===`board`?(It(n)===`weapon`?t.gear?.weapon:t.board)?.placements.find(e=>e.shape.cells.some(([t,r])=>e.x+t===n.x&&e.y+r===n.y))?.item??null:null}#P(e,t,n){let r=t-e,i=n?.unused.includes(`xp`)&&t>0?T(`small`,{class:`cap idle`},`已經滿級`):t>=1e3?T(`small`,{class:`cap`},`上限`):null;return T(`tr`,{class:r>0?`up`:r<0?`down`:``},T(`th`,null,`經驗`),T(`td`,null,`+${qt(t)}`,i),T(`td`,{class:`delta`},r===0?``:`${r>0?`+`:`−`}${qt(Math.abs(r))}`))}#F(e,t,n){if(n?.unused.includes(e.key)&&t>0)return T(`small`,{class:`cap idle`},`沒帶技能`);if(e.cap===void 0||t<e.cap)return null;let r=n?.over[e.key]??0;return r>0?T(`small`,{class:`cap over`},`上限・多 ${qt(r)}`):T(`small`,{class:`cap`},`上限`)}#I(e,t,n){let r=t?.waste;if(!r||e.category!==`stat`)return null;let i=this.controller.snapshot,a=e.stats.flatMap(e=>r.fields[e.stat]??[]),o=e=>this.#m.find(t=>t.key===e)?.name??(e===`xp`?`經驗`:e),s=e=>e===`xp`?`已經滿級`:`晶盤上沒有技能`,c=a.filter(e=>r.unused.includes(e));if(r.crystals.includes(e.uid))return c.length===a.length?`${[...new Set(c.map(s))].join(`、`)}：${c.map(o).join(`、`)}沒有作用，可以重鑄`:c.length===0?`超過上限：拿掉也不會少，可以重鑄`:`${c.map(e=>`${o(e)}沒有作用（${s(e)}）`).join(`、`)}，其餘超過上限：拿掉也不會少，可以重鑄`;if([...i.board.placements,...i.gear?.weapon.placements??[]].some(t=>t.item===e.uid)||n&&this.controller.carry?.uid===e.uid){let e=[...c.map(e=>`${o(e)}沒有作用（${s(e)}）`),...a.filter(e=>!c.includes(e)&&(r.over[e]??0)>0).map(e=>`${o(e)}超過上限 ${qt(r.over[e]??0)}，多出的沒作用`)];return e.length>0?e.join(`；`):null}return a.length===0||!a.every(e=>r.full.includes(e))?null:`放上晶盤也沒有作用：${a.map(e=>c.includes(e)?`${o(e)}（${s(e)}）`:`${o(e)}已到上限`).join(`、`)}`}#L(e,t=!1){let n=this.#N(),r=n?this.controller.snapshot.crystals[n]:void 0,i=r?this.#e.infoOf?.(r):void 0;if(!n||!r||!i)return T(`div`,{class:`bs-details empty`},`游標或滑鼠移到水晶上，看它的效果`);let a=e.links.filter(e=>e.from===n||e.to===n),o=e.idle.includes(n),s=this.#I(r,e,t);return T(`div`,{class:`bs-details`},T(`div`,{class:`bs-details-head`},T(`b`,null,i.name),T(`small`,null,i.kind)),...i.lines.map(e=>T(`p`,null,e)),e.perfect.includes(n)?T(`p`,{class:`perfect`},`✦ 完美契合：剛好填滿武器的孔洞，強度 ×1.1`):null,a.length>0?T(`ul`,null,...a.map(e=>T(`li`,{class:e.link.status===`active`?`ok`:`no`},`${e.link.status===`active`?`✓`:`✕`} ${e.title}`))):null,o&&a.length===0?T(`p`,{class:`warn`},`旁邊沒有能改造的對象：這顆增幅目前無效`):null,s?T(`p`,{class:`warn`},s):null)}#R(e,t){let n=this.controller.carry,r=t.zone===`shatter`,i=r&&n?e.crystals[n.uid]:void 0,a=this.#r===`pad`?`A`:`Enter`,o=i?`${this.#r===`mouse`?`放開`:`按 ${a} `}粉碎「${this.#e.nameOf(i)}」`:this.#r===`mouse`?`把水晶拖到這裡粉碎`:`拿著水晶往下推到這裡，${a} 粉碎`;return T(`div`,{class:`bs-shatter${r?` focused`:``}${i?` armed`:``}`,"data-shatter":`zone`},i?R({shape:i.shape,color:this.#e.colorOf(i),uid:i.uid},{maxCell:6,box:22}):null,T(`span`,{class:`bs-shatter-title`},`粉碎區`),T(`span`,{class:`bs-shatter-how`},o))}#z(e,t,n,r){let i=this.controller.snapshot.crystals[e],a=this.controller.carry?.uid===e,o=r.zone===`bag`&&r.index===t;return T(`div`,{class:`bs-slot${n?` over`:``}${a?` carried`:``}${o?` focused`:``}`,"data-bag":e,title:i?`${this.#e.nameOf(i)}：${this.#e.labelsOf(i).map(e=>e.join(` `)).join(`、`)}`:``},i?R({shape:i.shape,color:this.#e.colorOf(i),uid:e},{maxCell:12,box:48}):null)}#B(e){return T(`kbd`,null,e)}#V(e,t,n=null){let r=(...e)=>e.map(e=>this.#B(e)),i=(...e)=>T(`span`,null,...e),a=this.#r===`pad`,o=t?[i(...a?r(`LT`,`RT`):r(`[`,`]`),` 換晶盤`)]:[];return e&&n===`shop`?a?[i(...r(`十字鍵`),` 選商品`),i(...r(`A`),` 買`)]:[i(...r(`方向鍵`),` 選商品`),i(...r(`Enter`),` 買`),i(`滑鼠：點一下就買`)]:e?this.controller.focus.zone===`service`&&this.controller.carry?a?[i(...r(`LB`,`RB`),` 換選項`),i(...r(`A`),` 確定（付錢）`),i(...r(`B`),` 放回`)]:[i(...r(`R`),` 換選項`),i(...r(`Enter`),` 確定（付錢）`),i(...r(`←`,`→`),` 換服務`),i(...r(`Esc`),` 放回`),i(`滑鼠：滾輪或右鍵換選項`)]:a?[i(...r(`十字鍵`),` 移動`),...o,i(...r(`A`),` 拿起／放下／開格`),i(...r(`LB`,`RB`),` 旋轉`),i(...r(`Y`),` 下一個能放的位置`),i(...r(`X`),` 收回晶囊`),i(...r(`B`),` 取消`)]:[i(...r(`方向鍵`),` 移動`),...o,i(...r(`Enter`),` 拿起／放下／開格`),i(...r(`R`),` 旋轉`),i(...r(`F`),` 下一個能放的位置`),i(...r(`B`),` 收回晶囊`),i(`滑鼠：拖曳擺放，右鍵或滾輪旋轉，點兩下收回`)]:a?[i(...r(`十字鍵`),` 看格子`),...o,i(...r(`View`,`B`),` 關閉`)]:[i(...r(`方向鍵`),` 看格子`),...o,i(...r(`Tab`,`Esc`),` 關閉`)]}#H(e){if(!this.open||!Ht.has(e.code)||(e.preventDefault(),e.repeat&&!Wt.has(e.code)))return;let t=this.controller.snapshot,n=e=>this.act(`keys`,e);switch(e.code){case`ArrowUp`:case`KeyW`:n(e=>e.move(0,-1,`keys`));break;case`ArrowDown`:case`KeyS`:n(e=>e.move(0,1,`keys`));break;case`ArrowLeft`:case`KeyA`:n(e=>e.move(-1,0,`keys`));break;case`ArrowRight`:case`KeyD`:n(e=>e.move(1,0,`keys`));break;case`BracketLeft`:n(e=>e.switchBoard(-1,`keys`));break;case`BracketRight`:n(e=>e.switchBoard(1,`keys`));break;case`Digit1`:case`Digit2`:{let t=kt[e.code===`Digit1`?0:1];t&&n(e=>e.setPage(t,`keys`));break}case`Enter`:case`Space`:n(e=>e.confirm(`keys`));break;case`KeyR`:n(t=>t.rotate(e.shiftKey?-1:1,`keys`));break;case`KeyF`:n(t=>t.cycle(e.shiftKey?-1:1,`keys`));break;case`KeyB`:n(e=>e.stash(`keys`));break;case`KeyN`:n(e=>e.next(`keys`));break;case`Escape`:!this.controller.cancel(`keys`)&&(t.mode===`view`||t.region?.doorsOpen)?this.#e.onClose():this.render();break;case`Tab`:(t.mode===`view`||t.region?.doorsOpen)&&this.#e.onClose()}}#U(){let e=this.element,t=e=>{let t=this.controller.snapshot,n=[[this.#t,t.board,`character`]];t.gear&&n.push([this.#n,t.gear.weapon,`weapon`]);for(let[t,r,i]of n){let n=de(t,r,e.clientX,e.clientY),{w:a,h:o}=r.spec;if(n.inside&&n.x>=0&&n.y>=0&&n.x<a&&n.y<o)return{zone:`board`,x:n.x,y:n.y,...i===`weapon`?{on:i}:{}}}return null},n=e=>{let t=e.getAttribute(`data-cx`),n=e.getAttribute(`data-cy`);return t===null||n===null?null:[Number(t),Number(n)]},r=e=>{let t=e.closest(`[data-weapon]`)?.getAttribute(`data-weapon`);return t==null?null:t===`keep`?this.controller.snapshot.weaponOffers?.length??0:Number(t)},i=e=>{let t=e.closest(`[data-ware]`)?.getAttribute(`data-ware`);if(t==null)return null;let n=this.controller.snapshot.region?.shop?.wares.length??0;return t===`refresh`?n:Number(t)};e.addEventListener(`pointerdown`,e=>{if(e.button!==0||!(e.target instanceof Element))return;let a=e.target,o=this.controller,c=o.carry!==null&&!this.#i&&o.focus.zone===`service`;if(a.closest(`[data-pay]`)){e.preventDefault(),this.act(`mouse`,e=>e.confirm(`mouse`)),this.#i=this.controller.carry!==null,s(e);return}let l=a.closest(`[data-cycle]`)?.getAttribute(`data-cycle`);if(l){e.preventDefault(),this.act(`mouse`,e=>e.rotate(l===`1`?1:-1,`mouse`));return}let u=a.closest(`[data-page]`)?.getAttribute(`data-page`);if(u){e.preventDefault(),this.act(`mouse`,e=>e.setPage(u,`mouse`));return}let d=a.closest(`[data-service]`)?.getAttribute(`data-service`);if(d&&!o.carry){e.preventDefault(),this.act(`mouse`,e=>{e.point({zone:`service`,kind:d}),e.confirm(`mouse`)});return}c&&!a.closest(`.bs-services`)&&this.act(`mouse`,e=>e.cancel(`mouse`));let f=i(a);if(f!==null){e.preventDefault(),this.#u=null,this.act(`mouse`,e=>{e.point({zone:`shop`,index:f}),e.confirm(`mouse`)}),this.#i=this.controller.carry!==null,s(e);return}let p=r(a);if(p!==null){e.preventDefault(),this.#l=null,this.act(`mouse`,e=>{e.point({zone:`weapons`,index:p}),e.confirm(`mouse`)});return}let m=a.closest(`[data-offer]`)?.getAttribute(`data-offer`)??a.closest(`[data-drop]`)?.getAttribute(`data-drop`),h=a.closest(`[data-bag]`)?.getAttribute(`data-bag`),g=a.closest(`svg.board:not(.mini)`)===null?null:a.closest(`.crystal`)?.getAttribute(`data-uid`),_=this.#a;this.#a=g?{uid:g,at:e.timeStamp}:null;let v=t(e);if(g&&v&&_?.uid===g&&e.timeStamp-_.at<=Gt)e.preventDefault(),this.#a=null,this.act(`mouse`,e=>{e.point(v),e.stash(`mouse`)});else if(m||h||g){let t=m??h??g;e.preventDefault(),this.act(`mouse`,e=>{e.grab(t,m?null:n(a),`mouse`),v&&g&&e.point(v)}),this.#i=this.controller.carry!==null,s(e)}else a.closest(`[data-shatter]`)?this.act(`mouse`,e=>{e.point({zone:`shatter`}),e.confirm(`mouse`)}):v&&(a.classList.contains(`unlockable`)||a.closest(`.drillable`))&&this.act(`mouse`,e=>{e.point(v),e.confirm(`mouse`)})}),e.addEventListener(`pointermove`,e=>{if(this.#i||!(e.target instanceof Element))return;let t=e.target,n=r(t),a=n!==null&&n<(this.controller.snapshot.weaponOffers?.length??0)?n:null,o=i(t),s=(o===null?void 0:this.controller.snapshot.region?.shop?.wares[o])?.uid??t.closest(`[data-offer]`)?.getAttribute(`data-offer`)??t.closest(`[data-drop]`)?.getAttribute(`data-drop`)??t.closest(`[data-bag]`)?.getAttribute(`data-bag`)??(t.closest(`svg.board:not(.mini)`)?t.closest(`.crystal`)?.getAttribute(`data-uid`):null)??null;(s!==this.#c||a!==this.#l||o!==this.#u)&&(this.#c=s,this.#l=a,this.#u=o,this.controller.snapshot.gear&&this.act(`mouse`,()=>{}))});let a=e=>e.target instanceof Element&&e.target.closest(`[data-shatter]`)!==null,o=e=>{let t=e.target instanceof Element?e.target.closest(`[data-service]`)?.getAttribute(`data-service`):null;return t&&Mt(t)?t:null},s=e=>{let n=a(e)||o(e)!==null||t(e)!==null;this.#p={x:e.clientX,y:e.clientY,onSpot:n},this.#h()},c=()=>{this.#i&&(this.#i=!1,this.#p=null,this.act(`mouse`,e=>e.cancel(`mouse`)))};e.addEventListener(`pointermove`,e=>{if(!this.#i)return;if(!(e.buttons&1)){c();return}if(s(e),a(e)){this.controller.focus.zone!==`shatter`&&this.act(`mouse`,e=>e.point({zone:`shatter`}));return}let n=o(e);if(n){let e=this.controller.focus;(e.zone!==`service`||e.kind!==n)&&this.act(`mouse`,e=>e.point({zone:`service`,kind:n}));return}let r=t(e);r&&this.act(`mouse`,e=>e.point(r))}),e.addEventListener(`pointercancel`,()=>c()),window.addEventListener(`blur`,()=>c()),e.addEventListener(`pointerup`,e=>{if(!this.#i)return;this.#i=!1,this.#p=null;let n=a(e),r=o(e),i=t(e),s=e.target instanceof Element&&e.target.closest(`.bs-bag`)!==null;this.act(`mouse`,e=>{r?e.point({zone:`service`,kind:r}):n?(e.point({zone:`shatter`}),e.confirm(`mouse`)):i?(e.point(i),e.confirm(`mouse`)):s&&e.carry?.from===`board`?e.stash(`mouse`):e.cancel(`mouse`)})}),e.addEventListener(`contextmenu`,e=>{this.open&&(e.preventDefault(),this.controller.carry&&this.act(`mouse`,e=>e.rotate(1,`mouse`)))}),e.addEventListener(`wheel`,e=>{this.controller.carry&&(e.preventDefault(),this.act(`mouse`,t=>t.rotate(e.deltaY>0?1:-1,`mouse`)))},{passive:!1})}},Xt=3e4,Zt=class{placements=[];visits=[];#e=0;#t;#n=null;#r=null;#i=!1;#a=0;#o=null;constructor(e){this.#t=e}get time(){let e=this.#n,t=e?[...this.visits,this.#c(e,this.#t())]:[...this.visits],n=e=>t.reduce((t,n)=>t+e(n),0);return{arrangeMs:n(e=>e.mode===`arrange`?e.ms:0),viewMs:n(e=>e.mode===`view`?e.ms:0),opens:this.#e,idleMs:n(e=>e.idleMs),visits:t}}opened(e,t){this.closed(),this.#n={room:t,mode:e,ms:0,idleMs:0,last:this.#t(),away:!1},this.#e++}closed(){let e=this.#n;e&&(this.visits.push(this.#c(e,this.#t())),this.#n=null,this.#l(`dropped`))}active(){let e=this.#n;e&&!e.away&&this.#s(e,this.#t())}away(){let e=this.#t();this.#o===null&&(this.#o=e);let t=this.#n;t&&!t.away&&(this.#s(t,e),t.away=!0)}back(){let e=this.#t();this.#o!==null&&(this.#a+=e-this.#o),this.#o=null;let t=this.#n;t?.away&&(this.#s(t,e),t.away=!1)}notice(e,t,n){this.active();let r=this.#r,i=e=>{r&&r.input!==e&&(r.input=`mixed`)};switch(e.kind){case`pick`:this.#i=!0;return;case`pickup`:this.#l(`dropped`),this.#r={room:t,n:n(e.uid),source:this.#i?`reward`:e.from,input:e.device,start:this.#t(),hiddenAtStart:this.#a,rotations:0,cycles:0,moves:0,failed:0},this.#i=!1;return;case`rotate`:r&&r.rotations++,i(e.device);return;case`cycle`:r&&r.cycles++,i(e.device);return;case`move`:r&&r.moves++,i(e.device);return;case`failed`:r&&r.failed++,i(e.device);return;case`placed`:i(e.device),this.#l(`placed`,e.autoTurned);return;case`dropped`:this.#l(`dropped`);return;case`stash`:this.#l(`stashed`);return;case`shatter`:this.#l(`shattered`);return;default:this.#i=!1}}#s(e,t){let n=Math.max(0,t-e.last),r=e.away?0:Math.min(n,Xt);e.ms+=r,e.idleMs+=n-r,e.last=t}#c(e,t){let n={...e};return this.#s(n,t),{room:e.room,mode:e.mode,ms:Math.round(n.ms),idleMs:Math.round(n.idleMs)}}#l(e,t=!1){let n=this.#r;if(!n)return;this.#r=null;let r=this.#t(),i=this.#a+(this.#o===null?0:r-this.#o)-n.hiddenAtStart;this.placements.push({room:n.room,n:n.n,source:n.source,input:n.input,ms:Math.round(r-n.start-i),rotations:n.rotations,autoTurned:t,cycles:n.cycles,moves:n.moves,failed:n.failed,end:e})}},Qt={a:0,b:1,x:2,y:3,lb:4,rb:5,lt:6,rt:7,view:8,menu:9,ls:10,rs:11,up:12,down:13,left:14,right:15},$t={attack:Qt.x,dodge:Qt.a,skills:[Qt.y,Qt.rb,Qt.rt]},en={deadzone:.2,trigger:.5,assistDeg:45,snapDeg:10,assistRange:9};function tn(e,t=en){let n=new Set;return e.buttons.forEach((e,r)=>{(r===Qt.lt||r===Qt.rt?e.value>=t.trigger:e.pressed)&&n.add(r)}),n}function nn(e){return e.find(e=>e?.connected&&e.mapping===`standard`)??null}function rn(e,t,n){let r=Math.sqrt(e*e+t*t);if(!(r>n))return[0,0];let i=Math.min(1,(r-n)/(1-n));return[e/r*i,t/r*i]}function an(e,t=en){let n=t=>{let n=e.axes[t];return typeof n==`number`&&Number.isFinite(n)?n:0},r=n=>{let r=e.buttons[n];return r?n===Qt.lt||n===Qt.rt?r.value>=t.trigger:r.pressed:!1},i=rn(n(0),n(1),t.deadzone),a=rn(n(2),n(3),t.deadzone),o=a[0]!==0||a[1]!==0?be(a[0],a[1]):null,[s,c,l]=$t.skills,u=[r(s),r(c),r(l)];return{move:i,aim:o,attack:r($t.attack),dodge:r($t.dodge),skills:u,active:i[0]!==0||i[1]!==0||o!==null||e.buttons.some((e,t)=>r(t))}}function on(e,t,n,r,i=en){if(n)return un(e,n,r,i.snapDeg,i.assistRange)??[n[0],n[1]];let a=t[0]!==0||t[1]!==0,o=a?be(t[0],t[1]):[e.fx,e.fy];return un(e,o,r,i.assistDeg,i.assistRange)||(a?o:[0,0])}function sn(e,t,n,r,i){let a=Math.sqrt(t[0]*t[0]+t[1]*t[1]);if(a<1e-9)return[0,0];let o=[t[0]/a,t[1]/a];return r<=0?o:un(e,o,n,r,i)??o}function cn(e,t){return t?[t[0],t[1]]:e[0]!==0||e[1]!==0?be(e[0],e[1]):[0,0]}function ln(e,t,n,r,i){if(t.by===`mouse`){if(!t.toCursor)return[0,0];let a=t.exact?0:i;return sn(e,t.toCursor,n,a,r.assistRange)}let a=t.by===`pad`?t.stick:null;return t.exact?cn(t.move,a):on(e,t.move,a,n,r)}function un(e,t,n,r,i){let a=Pe(r),o=null,s=1/0;for(let r of n){let n=r.x-e.x,c=r.y-e.y,l=Math.sqrt(n*n+c*c);if(l<1e-9||l-r.radius>i)continue;let u=(n*t[0]+c*t[1])/l;if(u<a)continue;let d=l*(2-u);d<s&&(s=d,o=[n/l,c/l])}return o}var dn={repeatDelay:280,repeatEvery:90,stickOn:.5,stickOff:.35},fn=[[Qt.a,{kind:`confirm`}],[Qt.b,{kind:`cancel`}],[Qt.y,{kind:`cycle`}],[Qt.x,{kind:`stash`}],[Qt.lb,{kind:`rotate`,dir:-1}],[Qt.rb,{kind:`rotate`,dir:1}],[Qt.lt,{kind:`board`,dir:-1}],[Qt.rt,{kind:`board`,dir:1}],[Qt.menu,{kind:`next`}],[Qt.view,{kind:`view`}]],pn=class{#e=new Set;#t=null;#n=0;#r=!1;prime(e,t){this.#e=e?tn(e):new Set,this.#t=e?this.#i(e):null,this.#n=t+dn.repeatDelay}poll(e,t){if(!e)return this.prime(null,t),[];let n=tn(e),r=[];for(let[e,t]of fn)n.has(e)&&!this.#e.has(e)&&r.push(t);let i=this.#i(e,n);return i&&(!this.#t||i[0]!==this.#t[0]||i[1]!==this.#t[1])?(r.push({kind:`move`,dx:i[0],dy:i[1]}),this.#n=t+dn.repeatDelay):i&&t>=this.#n&&(r.push({kind:`move`,dx:i[0],dy:i[1]}),this.#n=t+dn.repeatEvery),this.#t=i,this.#e=n,r}#i(e,t=tn(e)){let n=+!!t.has(Qt.right)-!!t.has(Qt.left),r=+!!t.has(Qt.down)-!!t.has(Qt.up);if(n!==0||r!==0)return n===0?[0,r]:[n,0];let i=e.axes[0]??0,a=e.axes[1]??0,o=Math.max(Math.abs(i),Math.abs(a));return this.#r=o>=(this.#r?dn.stickOff:dn.stickOn),this.#r?Math.abs(i)>=Math.abs(a)?[Math.sign(i),0]:[0,Math.sign(a)]:null}};function mn(){return typeof navigator>`u`||typeof navigator.getGamepads!=`function`?null:nn(navigator.getGamepads())}function hn(e,t){let n=e.gear;if(!n)return{...e,board:t.character};let r=t.weapon??n.weapon.board,i=[t.character,r].flatMap(e=>e.placements).flatMap(t=>{let n=e.crystals[t.item];return n?.category===`skill`?[n.def]:[]});return{...e,board:t.character,gear:{...n,slots:Xe(n.slots,i),weapon:{...n.weapon,board:r}}}}function gn(e,t){return e.crystals.get(t)?.name??t}function _n(e,t){let n=e.crystals.get(t);if(n?.category!==`augment`)return null;for(let e of n.effects)if(e.op===`enchant`)return e.element;return null}function vn(e,t,n){if(t.includes(n))return{text:`加強`,color:e.elements.get(n)?.color??`#ffffff`};let r=Ot([...e.reactions.values()],t,[n]),i=e.reactions.get(r[0]??``);return i?{text:r.map(t=>e.reactions.get(t)?.name??t).join(`・`),color:i.color}:null}function yn(e,t,n){if(n===null)return oe(e,e.weapon.tags);let r=e.crystals.get(t.crystals[n]?.def??``);return r?.category===`skill`?oe(e,r.tags):[]}function bn(e,t,n,r,i,a){let o=gn(e,n.crystals[i]?.def??``),s=a===null?`武器核心`:gn(e,n.crystals[a]?.def??``);switch(r.status){case`active`:return`${o} → ${s}：生效`;case`tagMismatch`:return`${o} → ${s}：需要${j(t,r.needs)}`;case`coreLocked`:return`${o} 不能改造武器核心`;case`duplicate`:return`${o} → ${s}：同名增幅只生效一次`}}function xn(e,t,n){let r=e.crystals.get(t.def),i=r?.category===`skill`?r.ability:void 0,a=[{label:`傷害`,value:h(t.power)},{label:`冷卻`,value:x(Be(t.cooldown,n.cdr))}];if(i?.kind===`projectile`){let e=i.projectile;a.push({label:`發數`,value:`${Math.min(12,e.count+t.mods.extraProjectiles)}`});let n=e.pierce+t.mods.pierce;n>0&&a.push({label:`穿透`,value:`${n}`});let r=e.chain+t.mods.chain;r>0&&a.push({label:`彈射`,value:`${r} 次`})}else if(i?.kind===`area`)a.push({label:`範圍`,value:`${ne(i.radius*t.mods.areaMult,1)} 公尺`}),a.push({label:`段數`,value:`${o(i,t.level).hits}`});else if(i?.kind===`line`)a.push({label:`長度`,value:`${ne(i.length,1)} 公尺`});else if(i?.kind===`dash`){let e=i.distance+i.distancePerLevel*(t.level-1);a.push({label:`距離`,value:`${ne(e,1)} 公尺`})}return t.mods.blast&&a.push({label:`爆炸`,value:h(t.mods.blast.share)}),a.push(...Sn(e,t.mods.rider,t.mods.reactions,`組合`)),t.perfect&&a.push({label:`完美契合`,value:`×1.1`}),a}function Sn(e,t,n,r){let i=[];if(t&&t.enchants.length>0){let n=t.enchants.map(t=>({...t,def:e.elements.get(t.element)})).sort((e,t)=>(e.def?.priority??0)-(t.def?.priority??0));i.push({label:`元素`,value:n.map(e=>`${e.def?.name??e.element} +${h(e.damage)}`).join(`、`)})}if(t?.fork&&i.push({label:`分裂`,value:`${t.fork.targets} 道 ${h(t.fork.damage)}`}),n&&n.length>0){let t=n.map(t=>e.reactions.get(t)?.name??t);i.push({label:r,value:t.join(`、`)})}return i}function Cn(e,t,n,r){return n.rider?{numbers:Sn(e,n.rider,n.reactions,`崩山的組合`),augments:r.filter(e=>e.on===`weapon`&&e.to===null).map(n=>({name:gn(e,t.crystals[n.from]?.def??``),ok:n.link.status===`active`,why:n.title.slice(n.title.indexOf(`：`)+1)}))}:null}function wn(e,t,n,r={character:n.board,weapon:n.gear?.weapon.board??null},i){if(!n.gear)return null;let a=hn(n,r),o=a.gear;if(!o)return null;let s=S(e,a),c=se(e,a),l=[],u=[],d=o.weapon.board.placements.filter(e=>a.crystals[e.item]?.category!==`augment`).filter(e=>Ge(o.weapon.board,e.pid)).map(e=>e.item),f=[[`character`,a.board],[`weapon`,o.weapon.board]];for(let[n,r]of f){let i=re(e,a,r,n),o=e=>r.placements.find(t=>t.pid===e)?.item??``;for(let r of i){let i=o(r.from),s=r.to===-1?null:o(r.to),c=bn(e,t,a,r,i,s),u=_n(e,a.crystals[i]?.def??``),d=u!==null&&r.status===`active`?vn(e,yn(e,a,s),u):null;l.push({on:n,link:r,from:i,to:s,...d?{label:d,title:`${c}・${d.text===`加強`?`同元素，只加強`:`組合：${d.text}`}`}:{title:c}})}for(let e of r.placements){let t=i.some(t=>t.from===e.pid&&t.status===`active`);a.crystals[e.item]?.category===`augment`&&!t&&u.push(e.item)}}let p=o.slots.map((t,n)=>{let r=s.skills[n];return t?r?{name:gn(e,t),level:r.level,on:r.on,numbers:xn(e,r,c),augments:l.filter(e=>e.to===r.uid).map(t=>({name:gn(e,a.crystals[t.from]?.def??``),ok:t.link.status===`active`,why:t.title.slice(t.title.indexOf(`：`)+1)}))}:{name:gn(e,t),level:null,on:null,numbers:[],augments:[]}:{name:null,level:null,on:null,numbers:[],augments:[]}}),m={...bt(e,a,i),fields:Et},h=le(e,a);return{keys:p,core:Cn(e,a,s.core,l),links:l,idle:u,perfect:d,stats:c,waste:m,...h>0?{xp:h}:{}}}function Tn(e,t){let n=[];for(let r of e.crystals.values()){if(r.category!==`skill`)continue;let i=oe(e,r.tags),a=i.length>0?vn(e,i,t):null;a&&n.push(`接${r.name} → ${a.text}`)}let r=vn(e,oe(e,e.weapon.tags),t);return r&&n.push(`接武器核心 → ${r.text}（崩山）`),n}function En(e,t,n){let r=e.crystals.get(n.def),i=He(t,n);if(!r||r.category===`stat`)return{name:i,kind:`屬性`,lines:n.stats.map(e=>`${D(t,e.stat)} ${F(t,e.stat,e.value)}`)};if(r.category===`skill`){let e=n.level??1,a=r.ability,s=a?.kind===`area`?`・段數 ${o(a,e).hits}`:a?.kind===`dash`?`・距離 ${ne(a.distance+a.distancePerLevel*(e-1),1)} 公尺`:``;return{name:i,kind:`技能 Lv${e}`,lines:[Dt(t,r.tags),`傷害 ${h(B(r.power,r.perLevel,e))}・冷卻 ${x(r.cooldown)}${s}`]}}return r.category===`augment`?{name:i,kind:`增幅`,lines:[`作用在${j(t,r.targets)}`,...r.effects.map(e=>ze(t,e)),...r.effects.flatMap(t=>t.op===`enchant`?Tn(e,t.element):[]),r.linksCore===!1?`不能改造武器核心`:`標籤符合時也能改造武器核心`]}:{name:i,kind:`特效`,lines:[]}}var Dn=`#4a90e2`,On=class{screen;telemetry=new Zt(()=>performance.now());#e;#t=new pn;#n=null;#r=null;#i=null;#a=!1;#o={room:-1,points:0};constructor(e){this.#e=e;let{host:t,skin:n}=e,r=t.registry,i=()=>t.content();this.screen=new Yt({actions:{snapshot:()=>this.#d(),apply:e=>{let n=t.board(e);return n.ok?(e.type===`next`&&this.close(),null):n.error}},statsFor:e=>{let n=t.world().build;return n?se(i(),{...n,board:e}):Ct(i())},base:Ct(i()),colorOf:e=>{let t=r.crystals.get(e.def)?.visual,i=t?n.visuals.get(t)?.params.color:void 0;return typeof i==`string`?i:Dn},labelsOf:e=>N(r,e),nameOf:e=>He(r,e),onClose:()=>this.close(),gearFor:e=>{let n=t.world().build;if(!n)return null;let a=e.equip?_e(i(),n,e.equip)??n:n,o=c(i(),We(t.world(),i())).length;return wn(i(),r,a,e,o)},infoOf:e=>En(i(),r,e),caps:jn(i()),...e.keyNames?{keyNames:e.keyNames}:{},onNotice:n=>{let r=t.world().build;this.telemetry.notice(n,r?.room??0,e=>r?.crystals[e]?.n??0),e.onNotice?.(n)}}),window.addEventListener(`keydown`,e=>{e.code!==`Tab`||e.repeat||e.defaultPrevented||this.screen.open||(this.#c()||this.#l())&&(e.preventDefault(),this.open())});let a=()=>{this.screen.open&&this.telemetry.active()};for(let e of[`keydown`,`pointerdown`,`pointermove`,`wheel`])window.addEventListener(e,a,{passive:!0});document.addEventListener(`visibilitychange`,()=>{document.hidden?this.telemetry.away():this.telemetry.back()})}get paused(){return this.screen.open}afterStep(){let e=this.#e.host.world(),t=e.build?.phase;!this.screen.open&&e.outcome===null&&(t===`cleared`||t===`ready`)&&this.open();let n=e.build?.route?.shop,r=n?e.player.x-n.x:0,i=n?e.player.y-n.y:0,a=!!n&&t===`doors`&&r*r+i*i<=1.44;a&&!this.#a&&!this.screen.open&&e.outcome===null&&this.open(),this.#a=a}refresh(){this.screen.open&&this.screen.render()}open(){if(this.screen.open||!this.#e.host.world().build)return;this.#e.onPause(),this.#t.prime(mn(),performance.now()),this.screen.show(this.#e.device());let{mode:e,room:t}=this.#d();this.telemetry.opened(e,t)}pollPad(e){if(!this.#e.host.world().build)return!1;let t=this.#t.poll(mn(),e);t.length>0&&this.screen.open&&this.telemetry.active();for(let e of t)this.#s(e);return t.length>0}#s(e){if(!this.screen.open){e.kind===`view`&&this.toggle();return}let t=e=>this.screen.act(`pad`,e);switch(e.kind){case`view`:this.toggle();return;case`cancel`:!this.screen.controller.cancel(`pad`)&&this.#u()?this.close():this.screen.render();return;case`move`:t(t=>t.move(e.dx,e.dy,`pad`));return;case`rotate`:t(t=>t.rotate(e.dir,`pad`));return;case`board`:t(t=>t.switchBoard(e.dir,`pad`));return;case`confirm`:t(e=>e.confirm(`pad`));return;case`cycle`:t(e=>e.cycle(1,`pad`));return;case`stash`:t(e=>e.stash(`pad`));return;case`next`:t(e=>e.next(`pad`));return;default:return}}toggle(){this.screen.open?this.#u()&&this.close():(this.#c()||this.#l())&&this.open()}close(){this.screen.open&&(this.screen.hide(),this.telemetry.closed(),this.#t.prime(mn(),performance.now()),this.#e.onResume())}stone(e){let t=this.#e.host.world().build?.room??-1;this.#o.room!==t&&(this.#o={room:t,points:0}),this.#o.points+=e}reset(){this.screen.hide(),this.#a=!1,this.#o={room:-1,points:0},this.telemetry=new Zt(()=>performance.now())}#c(){let e=this.#e.host.world();return e.outcome===null&&e.build?.phase===`fight`}#l(){let e=this.#e.host.world();return e.outcome===null&&e.build?.phase===`doors`}#u(){return this.#d().mode===`view`||this.#l()}#d(){let{host:e}=this.#e,t=e.world(),n=e.content(),r=t.build;if(!r)throw Error(`board mode without a build`);let i=We(t,n),a=c(n,i),o=[...(r.route?.shop?.wares??[]).flatMap(e=>e.kind===`crystal`?[e.crystal]:[]),...r.drops??[]];return{mode:r.phase!==`fight`&&t.outcome===null?`arrange`:`view`,board:r.board,crystals:Ft(r.crystals,o),bag:r.bag,bagSize:Ce(r,n),offers:r.offers,unlockPoints:r.unlockPoints,leaveBlocker:r.phase===`doors`?ut(t,n):r.phase===`fight`?null:C(t,n,{type:`next`}),room:r.room,rooms:Ve(i),level:r.level,xp:r.xp,levelXp:a[r.level-1]?.xp??0,nextXp:ee(r.level,a),dust:r.dust,start:r.phase===`ready`,gear:r.gear?{rules:this.#_(n),coreTags:n.weapon.tags,weapon:r.gear.weapon.board,label:An(e.registry,r.gear.weapon),attack:r.gear.weapon.attack,coreTitle:`武器核心${Dt(e.registry,n.weapon.tags)}：標籤符合的增幅放在旁邊，就會改造普攻`}:null,weaponOffers:this.#g(n,r),region:r.route?{doorsOpen:r.phase===`doors`,gold:r.route.gold,shop:this.#f(n,t,r),...i.route?.prep?{prep:kn(r,this.#o.room===r.room?this.#o.points:0)}:{}}:null}}#f(e,t,n){let i=n.route?.shop,a=We(t,e).route?.shop;if(!i||!a)return null;let o=i.free??0,s=i.wares.map(i=>{let{price:a,sold:s}=i;if(i.kind===`crystal`){let e=i.crystal.uid;return yt(i.kind,o)?{kind:`crystal`,price:r(i.kind,a,o),sold:s,free:!0,uid:e}:{kind:`crystal`,price:a,sold:s,uid:e}}if(i.kind===`weapon`){let t=this.#m(e,n,i.weapon);return t?{kind:`weapon`,price:a,sold:s,weapon:t}:{kind:`weapon`,price:a,sold:s}}return{kind:`heal`,price:a,sold:s,heal:Math.round(i.share*t.player.maxHp)}}),c=A(a);return{wares:s,refreshPrice:P(c,i.refreshes),...a.services?{services:this.#p(e,t,n,c)}:{}}}#p(e,t,n,r){let i={};for(let t of e.crystals.values())t.category===`skill`&&(i[t.id]=t);return{prices:r,pool:z(t,e),statNames:Object.fromEntries([...e.stats.values()].map(e=>[e.id,e.name])),stats:e.stats,skills:i,drilled:n.gear?.weapon.drilled?.length??0,...n.route?.pointsBought?{points:n.route.pointsBought}:{},...n.gear?.weapon.freeDrills?{free:n.gear.weapon.freeDrills}:{}}}#m(e,t,n){return this.#i?.build!==t&&(this.#i={build:t,card:this.#h(e,t,n)}),this.#i.card}#h(e,t,n){let r=_e(e,t,n.uid),i=r?.gear?.weapon.board;return!r||!i?null:{uid:n.uid,name:An(this.#e.host.registry,n),rarity:n.rarity,attack:n.attack,board:i,moved:i.placements.length,toBag:r.bag.length-t.bag.length,bag:r.bag.length,...r.gear?.weapon.freeDrills?{freeDrills:r.gear.weapon.freeDrills}:{}}}#g(e,t){let n=t.gear?.weaponOffers??[];if(n.length===0)return[];if(this.#r?.build!==t){let r=n.flatMap(n=>this.#h(e,t,n)??[]);this.#r={build:t,cards:r}}return this.#r.cards}#_(e){if(!this.#n){let t={};for(let[n,r]of e.crystals){let e=O(r);e&&(t[n]=e)}this.#n=t}return this.#n}};function kn(e,t){let n=e.drops??[];return{drops:n.map(e=>e.uid),leaveCount:n.length,leaveDust:s(n.reduce((e,t)=>e+t.n,0)),next:e.route?.doors[0]?.plan.kind??null,...t>0?{stones:t}:{}}}function An(e,t){let n=e.weapons.get(t.def)?.name??t.def;return`${f[t.rarity]??t.rarity} ${n}`}function jn(e){let t=t=>e.stats.get(t)?.cap,n=e=>{let n=t(e);return n===void 0?void 0:k(n)},r={},i=n(`core:aspd`),a=n(`core:mspd`),o=n(`core:lifesteal`),s=n(`core:crit`),c=n(`core:cdr`);return i!==void 0&&(r.haste=i),a!==void 0&&(r.speed=a),o!==void 0&&(r.lifesteal=o),s!==void 0&&(r.crit=s),c!==void 0&&(r.cdr=c),r}function Mn(e,t=1e4){let n=[...e].sort((e,t)=>e-t);if(n.length===0)return{count:0,medianMs:null,p90Ms:null,within:null};let r=n.length/2,i=n.length%2==1?n[Math.floor(r)]??0:((n[r-1]??0)+(n[r]??0))/2,a=n[Math.min(n.length-1,Math.ceil(.9*n.length)-1)]??0;return{count:n.length,medianMs:Math.round(i),p90Ms:a,within:n.filter(e=>e<=t).length/n.length}}function Nn(e){let t=e.commands??[],n=Object.entries(e.talents??{}).filter(([,e])=>e>0),r=e.tier??0;return{version:r>0?5:n.length>0?4:t.length>0?3:2,name:e.name,seed:e.seed>>>0,arena:e.arena,packs:[...e.packs],frames:e.inputs.length,inputs:Oe(e.inputs),hash:e.hash,...e.note?{note:e.note}:{},...t.length>0?{commands:t.map(([e,t])=>[e,t])}:{},...n.length>0?{talents:Object.fromEntries(n)}:{},...r>0?{tier:r}:{}}}var Pn=e=>Number.isInteger(e);function Fn(e){let t=e=>({replay:null,error:e});if(typeof e!=`object`||!e)return t(`not an object`);let n=e;if(n.version!==2&&n.version!==3&&n.version!==4&&n.version!==5)return t(`version must be 2, 3, 4 or 5`);if(n.version===4||n.version===5&&n.talents){let e=n.talents;if(typeof e!=`object`||!e||Array.isArray(e))return t(`a version 4 replay needs its talents`);let r=Object.entries(e);if(r.length===0||!r.every(([,e])=>Pn(e)&&e>0))return t(`talents must be levels above 0 by content id`)}else if(n.talents!==void 0)return t(`only version 4 and 5 replays have talents`);if(n.version===5){if(!Pn(n.tier)||n.tier<1)return t(`a version 5 replay needs its 晶蝕 tier (1 or more)`)}else if(n.tier!==void 0)return t(`only version 5 replays have a 晶蝕 tier`);if(typeof n.name!=`string`)return t(`name must be a string`);if(!Pn(n.seed))return t(`seed must be an integer`);if(typeof n.arena!=`string`||!/^[a-z0-9_]+:[a-z0-9_.]+$/.test(n.arena))return t(`arena must be a content id like core:training`);if(!Array.isArray(n.packs)||!n.packs.every(e=>typeof e==`string`))return t(`packs must be a list of "id@version"`);if(!Pn(n.frames)||n.frames<0)return t(`frames must be a whole number`);if(!Array.isArray(n.inputs)||!n.inputs.every(e=>Array.isArray(e)&&e.length===6&&e.every(Pn)))return t(`inputs must be runs of [frames, mx, my, ax, ay, buttons]`);if(typeof n.hash!=`string`||!/^[0-9a-f]{8}$/.test(n.hash))return t(`hash must be 8 hex digits`);if((n.version===3||n.version===4||n.version===5)&&(n.version===3||n.commands!==void 0)){let e=n.frames,r=n.commands;if(!Array.isArray(r)||r.length===0)return t(n.version===3?`a version 3 replay needs board commands`:`a version ${n.version} replay with commands needs some`);let i=0;for(let n of r){if(!(Array.isArray(n)&&n.length===2&&Pn(n[0])&&n[0]>=i&&n[0]<=e&&he(n[1])!==null))return t(`commands must be [frame, command] in frame order, within the frames`);i=n[0]}}else if(n.commands!==void 0)return t(`only version 3, 4 and 5 replays have commands`);return{replay:e,error:null}}var In=`core:board_trial`,Ln={handling:`擺水晶順手嗎？`,fun:`加上成長後更好玩嗎？`},Rn=1e4,zn=e=>Number.isInteger(e),Bn=e=>zn(e)&&e>=1&&e<=5,Vn=e=>typeof e==`object`&&!!e;function Hn(e){if(!Vn(e))return null;let t=e,n=t.version;return n!==2&&n!==3||t.mode!==`board`||typeof t.id!=`string`||typeof t.createdAt!=`string`||!zn(t.seed)||typeof t.arena!=`string`||t.outcome!==`survived`&&t.outcome!==`fell`||!zn(t.frames)||t.frames<0||typeof t.comment!=`string`||!Vn(t.stats)||!Object.values(t.stats).every(zn)||!Vn(t.devices)||!zn(t.devices.keyboard)||!zn(t.devices.pad)||!Vn(t.ratings)||!Bn(t.ratings.handling)||!Bn(t.ratings.fun)||!Vn(t.build)||!zn(t.build.level)||!Vn(t.build.finalStats)||!Array.isArray(t.placements)||!t.placements.every(e=>Vn(e)&&zn(e.ms))||!Vn(t.boardTime)||typeof t.boardTime.arrangeMs!=`number`||n===3&&(typeof t.boardTime.idleMs!=`number`||!Array.isArray(t.boardTime.visits))||t.replay!==null&&!Fn(t.replay).replay?null:e}var Un=2e6;function Wn(e,t=Un){let n=t;return[...e].reverse().map(e=>{let t=JSON.stringify(e).length;if(e.replay!==null&&t<=n)return n-=t,e;let r={...e,replay:null};return n-=JSON.stringify(r).length,r}).reverse()}function Gn(e){let t=e.placements.filter(e=>e.end===`placed`),n=e=>Mn(t.filter(t=>e===void 0||t.input===e).map(e=>e.ms),Rn),r=e.frames/60,i=(e.boardTime.arrangeMs+e.boardTime.viewMs)/1e3,a=e.devices.keyboard+e.devices.pad;return{playSeconds:r,arrangeSeconds:e.boardTime.arrangeMs/1e3,menuShare:r+i>0?i/(r+i):0,pad:n(`pad`),mouse:n(`mouse`),keys:n(`keys`),all:n(),padShare:a>0?e.devices.pad/a:0}}var Kn=`core:build_trial`,qn={predict:`放之前猜得到連結的效果嗎？`,deliberate:`你有朝某個方向刻意構築嗎？`},Jn={linkedAtExit:.7,idle:.5,pickFit:.6};function Yn(e,t,n){for(let{on:r,board:i}of g(t)){let a=i.placements.find(e=>e.item===n);if(a)return fe(re(e,t,i,r),a.pid)}return{active:0}}function Xn(e,t){for(let{on:n,board:r}of g(e))if(r.placements.some(e=>e.item===t))return n;return null}function Zn(e,t){let n=0,r=0,i=0,a=0,o=0,s=0;for(let{on:c,board:l}of g(t)){let u=re(e,t,l,c);for(let e of u)e.status===`active`&&(i++,e.to===-1&&a++);for(let e of l.placements){let i=t.crystals[e.item]?.category;i===`skill`&&n++,i===`augment`?(r++,fe(u,e.pid).active===0&&o++):c===`weapon`&&Ge(l,e.pid)&&s++}}return{room:t.room,level:t.level,openCells:De(t.board.spec),bag:t.bag.length,skills:n,augments:r,activeLinks:i,coreLinks:a,idleAugments:o,perfect:s}}function Qn(e,t,n){let r=t.crystals[n];if(!r||r.category===`stat`||r.category===`special`)return`stat`;let i=[...g(t).flatMap(({board:e})=>e.placements.map(e=>e.item)),...t.bag].filter(e=>e!==n).flatMap(e=>t.crystals[e]??[]);if(r.category===`skill`){let e=i.filter(e=>e.def===r.def).map(e=>e.level??1);return e.length>0?(r.level??1)>Math.max(...e)?`fit`:`off`:new Set(i.filter(e=>e.category===`skill`).map(e=>e.def)).size<3?`fit`:`off`}let a=O(e.crystals.get(r.def));if(a?.category!==`augment`)return`off`;let o=a.targets??[],s=e=>o.length===0||o.some(t=>e.includes(t)),c=i.some(t=>{let n=e.crystals.get(t.def);return n?.category===`skill`&&s(n.tags)}),l=t.gear!==null&&a.linksCore!==!1&&o.length>0&&s(e.weapon.tags);return c||l?`fit`:`off`}var $n=e=>De(e.spec),er=class{#e=[];#t=[];#n=new Map;#r=[];#i=null;before(e,t,n){let r=e.build;if(!r?.gear){this.#i=null;return}let i=null;if(n.type===`pick`){let e=r.crystals[n.uid];e&&(i={def:e.def,category:e.category,n:e.n,fit:Qn(t,r,n.uid),offered:r.offers.flatMap(e=>r.crystals[e]?.def??[])})}let a=n.type===`next`&&r.phase===`cleared`?Zn(t,r):null,o=n.type===`next`?new Map([...this.#n.values()].filter(e=>e.linkedAtExit===void 0).map(e=>[e.uid,Yn(t,r,e.uid).active>0])):null;this.#i={build:r,exit:a,pick:i,settled:o}}after(e,t,n,r){let i=this.#i;this.#i=null;let a=e.build;if(!i||!r||!a?.gear)return;let o=i.build.room;if(i.exit&&this.#e.push(i.exit),i.pick&&this.#t.push({room:o,...i.pick}),n.type===`place`&&!this.#n.has(n.uid)){let e=a.crystals[n.uid];e?.category===`augment`&&this.#n.set(n.uid,{uid:n.uid,def:e.def,room:o,on:n.board??`character`,firstTry:Yn(t,a,n.uid).active>0,linkedLater:!1})}if(n.type===`equip`||n.type===`keep`){let e=a.gear.weapon;this.#r.push({room:o,choice:n.type,rarity:e.rarity,attack:e.attack,holes:$n(e.board),moved:n.type===`equip`?e.board.placements.length:0,toBag:Math.max(0,a.bag.length-i.build.bag.length)})}for(let[e,t]of i.settled??[]){let n=this.#n.get(e);n&&this.#n.set(e,{...n,linkedAtExit:t})}for(let[e,n]of this.#n)n.firstTry||n.linkedLater||Xn(a,e)===null||Yn(t,a,e).active>0&&this.#n.set(e,{...n,linkedLater:!0})}summary(){return{exits:[...this.#e],picks:[...this.#t],augments:[...this.#n.values()],weapons:[...this.#r]}}},tr=e=>e.length===0?null:e.reduce((e,t)=>e+t,0)/e.length,nr=(e,t)=>t===0?null:e/t;function rr(...e){let t=e.flatMap(e=>e.exits),n=e.flatMap(e=>e.augments),r=e.flatMap(e=>e.picks),i=n.filter(e=>!e.firstTry),a=n.filter(e=>e.linkedAtExit!==void 0),o=r.filter(e=>e.fit!==`stat`);return{augments:n.length,linkedAtExit:nr(a.filter(e=>e.linkedAtExit).length,a.length),firstTry:nr(n.filter(e=>e.firstTry).length,n.length),fixedLater:nr(i.filter(e=>e.linkedLater).length,i.length),idlePerRoom:tr(t.map(e=>e.idleAugments)),linksPerRoom:tr(t.map(e=>e.activeLinks)),coreLinksPerRoom:tr(t.map(e=>e.coreLinks)),picks:r.length,pickFit:nr(o.filter(e=>e.fit===`fit`).length,o.length),statPicks:r.length-o.length}}var ir=e=>Number.isInteger(e),ar=e=>ir(e)&&e>=1&&e<=5,or=e=>typeof e==`object`&&!!e;function sr(e){if(!or(e))return null;let t=e;if(t.version!==1&&t.version!==2||t.mode!==`build`||typeof t.id!=`string`||typeof t.createdAt!=`string`||!ir(t.seed)||typeof t.arena!=`string`||t.outcome!==`survived`&&t.outcome!==`fell`||!ir(t.frames)||t.frames<0||typeof t.comment!=`string`||!or(t.stats)||!Object.values(t.stats).every(ir)||!or(t.devices)||!ir(t.devices.keyboard)||!ir(t.devices.pad)||!or(t.ratings)||!ar(t.ratings.predict)||!ar(t.ratings.deliberate)||!or(t.build)||!ir(t.build.level)||!or(t.build.weapon))return null;let n=t.summary;return!or(n)||!Array.isArray(n.exits)||!Array.isArray(n.picks)||!Array.isArray(n.augments)||!Array.isArray(n.weapons)||!Array.isArray(t.placements)||!t.placements.every(e=>or(e)&&ir(e.ms))||!or(t.boardTime)||typeof t.boardTime.arrangeMs!=`number`||t.replay!==null&&!Fn(t.replay).replay?null:e}var cr=[`很無聊`,`有點無聊`,`普通`,`好玩`,`非常好玩`];function lr(e){let t=Math.max(0,Math.ceil(e/60));return`${Math.floor(t/60)}:${String(t%60).padStart(2,`0`)}`}function ur(e){let t=e.keyboard+e.pad,n=t>0?e.pad/t:0;return n>=.8?`手把`:n<=.2?`鍵鼠`:`鍵鼠＋手把`}var dr=e=>`${Math.round(100*e)}%`;function fr(e){let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let n=e=>String(e).padStart(2,`0`);return`${n(t.getMonth()+1)}/${n(t.getDate())} ${n(t.getHours())}:${n(t.getMinutes())}`}var pr=class{element=T(`div`,{class:`trial-backdrop`,hidden:!0});#e;#t=!1;constructor(e){this.#e=e}get waiting(){return this.#t&&!this.element.hidden}close(){this.#t=!1,this.element.hidden=!0,this.element.replaceChildren()}#n(...e){this.element.hidden=!1,this.element.replaceChildren(T(`div`,{class:`trial-modal`},...e))}showIntro(){let{seconds:e,question:t}=this.#e;this.#n(T(`h2`,null,`戰鬥試煉`),T(`p`,null,`${Math.round(e/60)} 分鐘，敵人一波比一波多。沒有任何成長，只靠操作；倒下就結束。`),T(`ul`,{class:`trial-stats`},T(`li`,null,`按住左鍵（手把 X）：劍的 5 段連段，邊打邊走`),T(`li`,null,`右鍵（手把 Y）：火球，打遠處的射手很好用，還會讓敵人燃燒`),T(`li`,null,`空白鍵（手把 A）：閃避，閃避中無敵，可以直接穿過攻擊`)),T(`p`,{class:`trial-question`},`結束後請回答：${t}`),T(`div`,{class:`trial-actions`},_(`紀錄彙整`,()=>this.showReport()),_(`開始`,()=>this.#e.onStart(),{class:`primary`})),T(`p`,{class:`trial-hint`},`按任意鍵或手把按鈕也能開始`)),this.#t=!0}showResult(e){this.#t=!1;let{stats:t}=e,n=e.frames/60,r=t.enemyAttacks>0?1-t.hitsTaken/t.enemyAttacks:1,i=0,a=T(`textarea`,{rows:3,placeholder:`哪裡好玩、哪裡無聊、哪裡不順？（可以不寫）`}),o=_(`送出`,()=>{i!==0&&this.#r(this.#e.onRate(i,a.value.trim()))});o.disabled=!0,o.classList.add(`primary`);let s=cr.map((e,t)=>_(T(`span`,{class:`rate-number`},String(t+1)),()=>{i=t+1,s.forEach((e,n)=>{e.classList.toggle(`chosen`,n===t)}),o.disabled=!1},{class:`rate`,title:e}));s.forEach((e,t)=>{e.append(T(`span`,{class:`rate-label`},cr[t]??``))}),this.#n(T(`h2`,null,e.outcome===`survived`?`撐過 ${lr(e.frames)}！`:`倒下了`),T(`ul`,{class:`trial-stats`},T(`li`,null,`存活 ${lr(e.frames)} · 擊殺 ${t.kills}`),T(`li`,null,`被打中 ${t.hitsTaken} 次（敵人攻擊 ${t.enemyAttacks} 次，躲開 ${dr(r)}）`),T(`li`,null,`閃避穿過攻擊 ${t.dodgeSaves} 次 · 閃避 ${t.dodges} 次`),T(`li`,null,`技能 ${t.casts} 次 · 每秒傷害 ${n>0?Math.round(t.damageDealt/n):0} · 裝置：${ur(e.devices)}`)),T(`p`,{class:`trial-question`},this.#e.question),T(`div`,{class:`rates`},...s),a,T(`div`,{class:`trial-actions`},o))}#r(e){let t=this.#e.store.persistent?`紀錄已存在這個瀏覽器。`:`測試頁不保存紀錄，要留下來請下載 JSON。`;this.#n(T(`h2`,null,`謝謝！評分 ${e.rating} / 5`),T(`p`,null,t),T(`div`,{class:`trial-actions`},_(`下載這場 JSON`,()=>this.#e.download(`${e.id}.json`,e)),_(`紀錄彙整`,()=>this.showReport()),_(`再來一場`,()=>this.#e.onRestart(),{class:`primary`})))}showReport(){let e=this.#t,t=this.#e.store.load(),n=t.slice().reverse().map(e=>{let t=this.#e.metrics(e);return T(`tr`,null,T(`td`,null,fr(e.createdAt)),T(`td`,null,e.outcome===`survived`?`撐過`:`倒下`),T(`td`,null,lr(e.frames)),T(`td`,null,String(e.stats.kills)),T(`td`,null,`${e.stats.hitsTaken}（${dr(t.avoided)}）`),T(`td`,null,String(e.stats.dodgeSaves)),T(`td`,null,ur(e.devices)),T(`td`,null,String(e.rating)),T(`td`,{class:`trial-comment`},e.comment||`—`))}),r=e=>t.length>0?t.reduce((t,n)=>t+e(n),0)/t.length:0,i=t.length===0?`還沒有紀錄。`:[`共 ${t.length} 場`,`平均評分 ${r(e=>e.rating).toFixed(1)}`,`撐過 ${t.filter(e=>e.outcome===`survived`).length} 場`,`平均存活 ${lr(r(e=>e.frames))}`,`平均躲開 ${dr(r(e=>this.#e.metrics(e).avoided))}`].join(` · `);this.#n(T(`h2`,null,`戰鬥試煉紀錄`),T(`p`,null,i),t.length===0?null:T(`div`,{class:`trial-table`},T(`table`,null,T(`thead`,null,T(`tr`,null,...[`時間`,`結果`,`存活`,`擊殺`,`被打中（躲開）`,`閃避穿過`,`裝置`,`評分`,`留言`].map(e=>T(`th`,null,e)))),T(`tbody`,null,...n))),T(`div`,{class:`trial-actions`},t.length===0?null:_(`下載全部 JSON`,()=>this.#e.download(`lattice-hunter-trial-records-${t.length}.json`,{records:t})),t.length===0?null:_(`清除全部`,()=>{window.confirm(`確定要清除這個瀏覽器裡的全部試煉紀錄？清除後無法復原。`)&&(this.#e.store.clear(),this.showReport())}),_(e?`返回`:`關閉`,()=>e?this.showIntro():this.close()))),this.#t=!1}},mr=[`很差`,`有點差`,`普通`,`不錯`,`很好`],hr=e=>e===null?`—`:`${Math.round(e*100)}%`,gr=e=>e===null?`—`:e.toFixed(1);function _r(e,t,n){let r=e.summary,i=e=>e===null?``:e?`（達標）`:`（未達標）`,a=r.augments.filter(e=>e.linkedAtExit!==void 0),o=a.filter(e=>e.linkedAtExit).length,s=r.augments.filter(e=>e.firstTry).length,c=r.picks.filter(e=>e.fit!==`stat`),l=c.filter(e=>e.fit===`fit`).length;return[r.augments.length===0?`增幅：這場沒有把增幅放上晶盤`:a.length===0?`增幅第一次就放在會連上的位置：${s} / ${r.augments.length}（${hr(t.firstTry)}）`:`增幅在擺上的那一房離開時就連上：${o} / ${a.length}（${hr(t.linkedAtExit)}）`+i(t.linkedAtExit===null?null:t.linkedAtExit>=n.linkedAtExit)+`・第一次就放對：${s}`,`離開房間時沒作用的增幅：平均 ${gr(t.idlePerRoom)} 顆`+i(t.idlePerRoom===null?null:t.idlePerRoom<=n.idle),c.length===0?`三選一：挑了 ${r.picks.length} 次，都是屬性水晶`:`三選一挑和構築搭得上的：${l} / ${c.length}（${hr(t.pickFit)}）`+i(t.pickFit===null?null:t.pickFit>=n.pickFit)+(t.statPicks>0?`・屬性 ${t.statPicks} 次`:``),`離開房間時的有效連結：平均 ${gr(t.linksPerRoom)} 條（連到武器核心 ${gr(t.coreLinksPerRoom)} 條）`]}function vr(e){let t=e.summary.weapons;return t.length===0?null:`武器：${t.map(e=>e.choice===`keep`?`第 ${e.room+1} 房保留`:`第 ${e.room+1} 房換成${f[e.rarity]??e.rarity}（移植 ${e.moved} 顆${e.toBag>0?`、${e.toBag} 顆回晶囊`:``}）`).join(`・`)}`}function yr(e){let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let n=e=>String(e).padStart(2,`0`);return`${n(t.getMonth()+1)}/${n(t.getDate())} ${n(t.getHours())}:${n(t.getMinutes())}`}var br=class{element=T(`div`,{class:`trial-backdrop`,hidden:!0});#e;#t=!1;constructor(e){this.#e=e}get waiting(){return this.#t&&!this.element.hidden}close(){this.#t=!1,this.element.hidden=!0,this.element.replaceChildren()}#n(...e){this.element.hidden=!1,this.element.replaceChildren(T(`div`,{class:`trial-modal`},...e))}showIntro(){let{rooms:e,questions:t}=this.#e;this.#n(T(`h2`,null,`構築試煉`),T(`p`,null,`${e} 個房間，敵人一房比一房強，倒下會重生。技能來自晶盤上的技能水晶：開局晶囊裡有火球、旋風斬、突刺，先挑一個放上晶盤再出發。`),T(`ul`,{class:`trial-stats`},T(`li`,null,`增幅水晶放在技能旁邊（同一塊晶盤、邊相鄰）而且標籤符合，就會改造那個技能；連到武器核心的會改造普攻。連上是綠色 ✓，沒作用是灰色 ✕。`),T(`li`,null,`第 3、6、9 房的獎勵是新武器：換上會把舊武器上的水晶移植過去；剛好填滿孔洞的水晶強度 ×1.1。`),T(`li`,null,`晶盤：手把 LT／RT（鍵盤 [ ]）換晶盤、A 拿起／放下、LB／RB 旋轉、Y 跳到下一個能放的位置（連結多的優先）、X 收回、Menu 下一房`),T(`li`,null,`戰鬥中可以按 Tab（手把 View）查看晶盤，遊戲會暫停`)),T(`p`,{class:`trial-question`},`結束後請回答：${t.predict}${t.deliberate}`),T(`div`,{class:`trial-actions`},_(`紀錄彙整`,()=>this.showReport()),_(`開始`,()=>this.#e.onStart(),{class:`primary`})),T(`p`,{class:`trial-hint`},`按任意鍵或手把按鈕也能開始`)),this.#t=!0}showResult(e){this.#t=!1;let t=this.#e.metrics(e),{questions:n}=this.#e,r={predict:0,deliberate:0},i=T(`textarea`,{rows:3,placeholder:`連結的效果和你想的一樣嗎？有沒有想要的構築？哪裡卡住？（可以不寫）`}),a=_(`送出`,()=>{r.predict!==0&&r.deliberate!==0&&this.#r(this.#e.onRate({...r},i.value.trim()))});a.disabled=!0,a.classList.add(`primary`);let o=e=>{let t=mr.map((n,i)=>_(T(`span`,{class:`rate-number`},String(i+1)),()=>{r[e]=i+1,t.forEach((e,t)=>{e.classList.toggle(`chosen`,t===i)}),a.disabled=r.predict===0||r.deliberate===0},{class:`rate`,title:n}));return t.forEach((e,t)=>{e.append(T(`span`,{class:`rate-label`},mr[t]??``))}),T(`div`,{class:`rates`,"data-question":e},...t)},s=e.build,c=Math.round(e.boardTime.arrangeMs/1e3*60),l=vr(e);this.#n(T(`h2`,null,e.outcome===`survived`?`${s.rooms} 房全清！`:`試煉結束`),T(`ul`,{class:`trial-stats`},T(`li`,null,`Lv ${s.level} · 開了 ${s.openCells} 格 · 晶盤上 ${s.placed} 顆水晶 · 武器 ${f[s.weapon.rarity]??s.weapon.rarity}（攻擊 ${s.weapon.attack}）`),T(`li`,null,`戰鬥 ${lr(e.frames)} · 整理晶盤 ${lr(c)} · 擊殺 ${e.stats.kills} · 倒下 ${e.stats.deaths}`),..._r(e,t,this.#e.bars).map(e=>T(`li`,{class:`m3-answer`},e)),l?T(`li`,null,l):null),T(`p`,{class:`trial-question`},n.predict),o(`predict`),T(`p`,{class:`trial-question`},n.deliberate),o(`deliberate`),i,T(`div`,{class:`trial-actions`},a))}#r(e){let t=this.#e.store.persistent?`紀錄已存在這個瀏覽器。`:`測試頁不保存紀錄，要留下來請下載 JSON。`;this.#n(T(`h2`,null,`謝謝！猜得到 ${e.ratings.predict} / 5・刻意構築 ${e.ratings.deliberate} / 5`),T(`p`,null,t),T(`div`,{class:`trial-actions`},_(`下載這場 JSON`,()=>this.#e.download(`${e.id}.json`,e)),_(`紀錄彙整`,()=>this.showReport()),_(`再來一場`,()=>this.#e.onRestart(),{class:`primary`})))}showReport(){let e=this.#t,t=this.#e.store.load(),n=t.slice().reverse().map(e=>{let t=this.#e.metrics(e);return T(`tr`,null,T(`td`,null,yr(e.createdAt)),T(`td`,null,`${e.build.rooms} 房・Lv ${e.build.level}`),T(`td`,null,lr(e.frames)),T(`td`,null,hr(t.linkedAtExit)),T(`td`,null,gr(t.idlePerRoom)),T(`td`,null,hr(t.pickFit)),T(`td`,null,gr(t.linksPerRoom)),T(`td`,null,`${e.ratings.predict} / ${e.ratings.deliberate}`),T(`td`,{class:`trial-comment`},e.comment||`—`))});this.#n(T(`h2`,null,`構築試煉紀錄`),T(`p`,null,t.length===0?`還沒有紀錄。`:`共 ${t.length} 場`),t.length===0?null:T(`div`,{class:`trial-table`},T(`table`,null,T(`thead`,null,T(`tr`,null,...[`時間`,`進度`,`戰鬥`,`增幅離房時連上`,`沒作用的增幅`,`挑得搭`,`每房連結`,`猜得到／刻意`,`留言`].map(e=>T(`th`,null,e)))),T(`tbody`,null,...n))),T(`div`,{class:`trial-actions`},t.length===0?null:_(`下載全部 JSON`,()=>this.#e.download(`lattice-hunter-build-trials-${t.length}.json`,{records:t})),t.length===0?null:_(`清除全部`,()=>{window.confirm(`確定要清除這個瀏覽器裡的全部構築試煉紀錄？清除後無法復原。`)&&(this.#e.store.clear(),this.showReport())}),_(e?`返回`:`關閉`,()=>e?this.showIntro():this.close()))),this.#t=!1}},xr=`lattice-hunter.trial.records`;function Sr(e,t,n=e=>[...e]){let r=!1;try{window.localStorage.setItem(`lattice-hunter.probe`,`1`),window.localStorage.removeItem(`lattice-hunter.probe`),r=!0}catch{r=!1}let i=()=>{try{let n=window.localStorage.getItem(e),r=n===null?[]:JSON.parse(n);return Array.isArray(r)?r.map(t).filter(e=>e!==null):[]}catch{return[]}},a=t=>{try{t.length===0?window.localStorage.removeItem(e):window.localStorage.setItem(e,JSON.stringify(n(t)))}catch{}};return{persistent:r,load:i,add(e){a([...i().filter(t=>t.id!==e.id),e])},clear(){a([])}}}function Cr(){let e=[];return{persistent:!1,load:()=>[...e],add(t){e=[...e.filter(e=>e.id!==t.id),t]},clear(){e=[]}}}function wr(e){return Sr(xr,e)}function Tr(){return Cr()}var Er=`lattice-hunter.build-trial.records`,Dr=class{ui;#e;#t=new er;constructor(e){this.#e=e;let t=e.test?Cr():Sr(Er,sr,Wn);this.ui=new br({store:t,questions:qn,bars:Jn,rooms:e.rooms,metrics:e=>rr(e.summary),onStart:e.onStart,onRestart:e.onRestart,onRate:(e,n)=>{let r=this.record(e,n);return t.add(r),r},download:e.download})}before(e){let{host:t}=this.#e;this.#t.before(t.world(),t.content(),e)}after(e,t){let{host:n}=this.#e;this.#t.after(n.world(),n.content(),e,t)}reset(){this.#t=new er,this.ui.close()}record(e,t){let{host:n}=this.#e,r=n.world(),i=r.build,a=i?.gear?.weapon,o=`build-${r.seed}-${Date.now()}`,s=i&&(i.phase===`cleared`||r.outcome===`survived`),c=this.#e.telemetry();return{version:2,mode:`build`,id:o,createdAt:new Date().toISOString(),seed:r.seed,arena:r.arena,outcome:r.outcome??`fell`,frames:r.frame,stats:{...r.stats},devices:{...this.#e.devices()},build:{level:i?.level??1,rooms:(i?.room??0)+ +!!s,openCells:i?De(i.board.spec):0,placed:(i?.board.placements.length??0)+(a?.board.placements.length??0),dust:i?.dust??0,weapon:{rarity:a?.rarity??`common`,attack:a?.attack??0,holes:a?De(a.board.spec):0},finalStats:{...r.player.stats}},summary:this.#t.summary(),placements:[...c.placements],boardTime:c.time,ratings:e,comment:t,replay:Nn({name:o,seed:r.seed,arena:r.arena,packs:n.registry.packs.map(e=>`${e.id}@${e.version}`),inputs:[...this.#e.inputs()],hash:I(r),commands:[...this.#e.commands()]})}}},Or={room:0,elite:0,boss:0,level:0};function kr(e){let t=(e.build?.route?.rooms??[]).filter(e=>e.clearedAt>=0);return{rooms:t.filter(e=>e.plan.kind===`combat`||e.plan.kind===`elite`).length,elites:t.filter(e=>e.plan.kind===`elite`).length,boss:t.some(e=>e.plan.kind===`boss`),level:e.build?.level??1}}function Ar(e,t){let n=We(e,t).route?.essence??Or,r=w(n,kr(e)),i=Ie(e,t);return i?ft(r,i.essence):r}var jr={fun:`這一局好玩嗎？`,again:`想馬上再來一局嗎？`};function Mr(){return{done:[],doors:[],offered:[],chosen:-1,damageAtStart:0,bought:0}}var Nr=(e,t)=>JSON.stringify(e)===JSON.stringify(t),Pr=new Set([`reshape`,`reforge`,`merge`,`drill`,`buyPoint`]);function Fr(e,t,n){let r=t.build?.route;if(r){for(n?.type===`buy`&&e.bought++,n&&Pr.has(n.type)&&(e.crafted=(e.crafted??0)+1);e.done.length<r.rooms.length-1;){let n=e.done.length;e.done.push(Ir(e,t,n));let i=r.rooms[n+1]?.plan;e.offered=e.doors,e.chosen=i?e.doors.findIndex(e=>Nr(e,i)):-1,e.doors=[],e.damageAtStart=t.stats.damageTaken,e.bought=0,e.crafted=0}r.doors.length>0&&(e.doors=r.doors.map(e=>e.plan))}}function Ir(e,t,n){let r=t.build?.route,i=r?.rooms[n];if(!i)throw RangeError(`No room ${n} in the run.`);return{depth:n,plan:i.plan,offered:[...e.offered],chosen:e.chosen,frames:i.clearedAt>=0?i.clearedAt-i.enteredAt:-1,damageTaken:t.stats.damageTaken-e.damageAtStart,gold:r?.gold??0,bought:e.bought,...e.crafted?{crafted:e.crafted}:{}}}function Lr(e,t){return(t.build?.route?.rooms.length??0)>e.done.length?[...e.done,Ir(e,t,e.done.length)]:[...e.done]}var Rr=e=>typeof e==`number`;function zr(e){if(typeof e!=`object`||!e)return null;let t=e;return t.version!==1||t.mode!==`run`||typeof t.id!=`string`||![`survived`,`fell`,`abandoned`].includes(String(t.outcome))||!Rr(t.frames)||!Array.isArray(t.rooms)||typeof t.essence!=`object`||typeof t.player!=`object`||t.player===null||t.tier!==void 0&&!(Number.isInteger(t.tier)&&t.tier>0)?null:e}function Br(e,t){let n={};for(let r of e)r.player.id===t&&r.outcome===`survived`&&(n[r.arena]=Math.max(n[r.arena]??0,r.tier??0));return n}function Vr(e,t){return{version:2,packs:[...t],world:xt(e),hash:I(e)}}function Hr(e,t){let n=e=>({world:null,error:e});if(typeof e!=`object`||!e)return n(`not a save`);let r=e;if(r.version!==2)return n(`a save of version ${String(r.version)}, not 2`);if(!Array.isArray(r.packs)||r.packs.join(`|`)!==t.join(`|`))return n(`saved with other content`);if(typeof r.world!=`object`||r.world===null||typeof r.hash!=`string`)return n(`no world in it`);try{let e=xt(r.world);return I(e)===r.hash?{world:e,error:null}:n(`its world does not match its hash`)}catch{return n(`its world is broken`)}}var Ur=[`很差`,`有點差`,`普通`,`不錯`,`很好`],Wr={survived:`通關`,fell:`倒下`,abandoned:`放棄`};function Gr(e){return e===null?null:e===0?`通關過`:`最高晶蝕 ${e}`}function Kr(e){let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let n=e=>String(e).padStart(2,`0`);return`${n(t.getMonth()+1)}/${n(t.getDate())} ${n(t.getHours())}:${n(t.getMinutes())}`}var qr=class{element=T(`div`,{class:`trial-backdrop camp`,hidden:!0});#e;#t=null;#n=null;#r=null;constructor(e){this.#e=e}get open(){return!this.element.hidden}get screen(){return this.open?this.#t:null}back(){this.#n?.()}close(){this.#t=null,this.element.hidden=!0,this.element.replaceChildren()}#i(e,t,...n){this.#t=e,this.#n=t,this.element.hidden=!1,this.element.replaceChildren(T(`div`,{class:`trial-modal camp-modal`},...n));let r=this.#r;this.#r=null,((r?this.element.querySelector(r):null)??this.element.querySelector(`button.primary:not([disabled])`))?.focus()}showPlayers(e,t){let n=T(`input`,{type:`text`,maxlength:`16`,placeholder:`名字（例如：爸爸）`}),r=_(`新增玩家`,()=>this.#e.onCreate(n.value),{class:e.length===0?`primary`:``});this.#i(`players`,t?()=>this.#e.onChoose(t):null,T(`h2`,null,`誰要玩？`),T(`p`,null,`每個玩家有自己的晶髓、導師天賦和一局可以繼續的進度。`),e.length===0?T(`p`,{class:`camp-empty`},`還沒有玩家：先取個名字。`):T(`div`,{class:`camp-players`},...e.map(e=>_(T(`span`,null,T(`b`,null,e.name),T(`small`,null,`晶髓 ${e.essence}${e.best===null?``:`・${Gr(e.best)}`}${e.saved?`・有一局可以繼續`:``}`)),()=>this.#e.onChoose(e.id),{class:e.id===t?`primary`:``,"data-player":e.id}))),T(`div`,{class:`camp-new`},n,r))}showCamp(e,t){let{player:n,saved:r}=e,i=T(`input`,{type:`text`,maxlength:`16`,value:n.name}),a=T(`span`,{class:`camp-essence`},`晶髓 ${n.essence}`),o=Gr(n.best);this.#r=t??null,this.#i(`camp`,null,T(`div`,{class:`camp-head`},T(`h2`,null,`營地・${n.name}`),o===null?a:T(`span`,{class:`camp-chips`},T(`span`,{class:`camp-best`},o),a)),T(`h3`,null,`導師的天賦`,T(`small`,null,`天賦在晶脈礦坑裡生效；開哪一格仍由你決定`)),T(`div`,{class:`camp-talents`},...e.talents.map(e=>T(`div`,{class:`camp-talent${e.level>0?` owned`:``}`},T(`div`,null,T(`b`,null,e.name),T(`small`,null,`${e.level} / ${e.max}`),T(`p`,null,e.description)),e.cost===null?T(`span`,{class:`camp-max`},`已學滿`):_(`學習（${e.cost} 晶髓）`,()=>this.#e.onBuy(e.id),{disabled:n.essence<e.cost,"data-talent":e.id})))),...e.tiers?this.#a(e.tiers):[],r?T(`p`,{class:`camp-saved`},`上一局停在第 ${r.room} 房${r.tier>0?`（晶蝕 ${r.tier}）`:``}：可以繼續，或放棄並拿到 ${r.essence} 晶髓。`):null,T(`div`,{class:`trial-actions`},T(`div`,{class:`camp-rename`},i,_(`改名`,()=>this.#e.onRename(i.value))),_(`換玩家`,()=>this.#e.onPlayers()),_(`紀錄`,()=>this.showRecords(()=>this.showCamp(e))),r?_(`放棄這一局`,()=>this.#e.onAbandon()):null,r?_(`繼續（第 ${r.room} 房）`,()=>this.#e.onContinue(),{class:`primary`}):_(`出發`,()=>this.#e.onSetOut(),{class:`primary`})))}#a(e){let t=Array.from({length:e.open+1},(t,n)=>_(n===0?`普通`:String(n),()=>this.#e.onTier(n),{class:`camp-tier${n===e.chosen?` chosen`:``}`,"data-tier":String(n),title:n===0?`原本的晶脈礦坑`:`晶蝕 ${n}`})),n=e.open<e.count?_(`${e.open+1}`,()=>{},{class:`camp-tier locked`,disabled:!0,title:`通關晶蝕 ${e.open} 才解鎖`}):null;return[T(`h3`,null,`晶蝕`,T(`small`,null,`通關一級，解鎖下一級；規則一級一級累加，晶髓每級 +10%`)),T(`div`,{class:`camp-tiers`},...t,n),e.chosen===0?T(`p`,{class:`camp-tier-note`},`普通：原本的晶脈礦坑。`):T(`div`,null,T(`p`,{class:`camp-tier-note`},`晶蝕 ${e.chosen}：晶髓 +${e.essence}%`),T(`ol`,{class:`camp-tier-rules`},...e.rules.map((t,n)=>T(`li`,{class:n===e.rules.length-1?`new`:``},t))))]}showResult(e){let{questions:t}=this.#e,n={fun:0,again:0},r=T(`textarea`,{rows:3,placeholder:`哪裡好玩、哪裡卡住、想要什麼？（可以不寫）`}),i=_(`送出`,()=>{n.fun!==0&&n.again!==0&&this.#o(this.#e.onRate({...n},r.value.trim()))});i.disabled=!0,i.classList.add(`primary`);let a=e=>{let t=Ur.map((r,a)=>_(T(`span`,{class:`rate-number`},String(a+1)),()=>{n[e]=a+1,t.forEach((e,t)=>{e.classList.toggle(`chosen`,t===a)}),i.disabled=n.fun===0||n.again===0},{class:`rate`,title:r}));return t.forEach((e,t)=>{e.append(T(`span`,{class:`rate-label`},Ur[t]??``))}),T(`div`,{class:`rates`,"data-question":e},...t)},o=e.essence,s=[o.rooms>0?`清房 ${o.rooms}`:null,o.elites>0?`精英 ${o.elites}`:null,o.boss>0?`Boss ${o.boss}`:null,o.levels>0?`等級 ${o.levels}`:null,o.tier?`晶蝕 ${o.tier}`:null].filter(e=>e!==null);this.#i(`result`,null,T(`h2`,null,e.outcome===`survived`?e.tier>0?`打倒晶脈守衛，晶蝕 ${e.tier} 通關！`:`打倒晶脈守衛，區域通關！`:`倒下了，這一局結束`),T(`ul`,{class:`trial-stats`},T(`li`,null,`${e.tier>0?`晶蝕 ${e.tier}・`:``}到了第 ${e.rooms} / ${e.of} 房・Lv ${e.level}・${lr(e.frames)}・擊殺 ${e.kills}`),e.unlocked===null?null:T(`li`,{class:`camp-unlock`},`解鎖晶蝕 ${e.unlocked}！下一局就是這一級，在營地可以改。`),T(`li`,{class:`camp-gain`},`晶髓 +${o.total}${s.length>0?`（${s.join(`、`)}）`:``}，現在 ${e.total}`),e.affordable.length>0?T(`li`,null,`回營地可以學：${e.affordable.join(`、`)}`):null),T(`p`,{class:`trial-question`},t.fun),a(`fun`),T(`p`,{class:`trial-question`},t.again),a(`again`),r,T(`div`,{class:`trial-actions`},i))}#o(e){let t=this.#e.persistent?`紀錄已存在這個瀏覽器。`:`測試頁不保存紀錄，要留下來請下載 JSON。`,n=e.ratings;this.#i(`thanks`,null,T(`h2`,null,n?`謝謝！好玩 ${n.fun} / 5・想再來 ${n.again} / 5`:`謝謝！`),T(`p`,null,t),T(`div`,{class:`trial-actions`},_(`下載這局 JSON`,()=>this.#e.download(`${e.id}.json`,e)),_(`回營地`,()=>this.#e.onCamp()),_(`再來一局`,()=>this.#e.onAgain(),{class:`primary`})))}showRecords(e){let t=this.#e.records(),n=this.#e.bests().filter(e=>e.best!==null),r=t.slice().reverse().map(e=>T(`tr`,null,T(`td`,null,Kr(e.createdAt)),T(`td`,null,e.player.name),T(`td`,null,Wr[e.outcome]),T(`td`,null,e.tier?String(e.tier):`—`),T(`td`,null,`${e.rooms.length} 房・Lv ${e.build.level}`),T(`td`,null,lr(e.frames)),T(`td`,null,`+${e.essence.total}`),T(`td`,null,e.ratings?`${e.ratings.fun} / ${e.ratings.again}`:`—`),T(`td`,{class:`trial-comment`},e.comment||`—`)));this.#i(`records`,e,T(`h2`,null,`單局紀錄`),T(`p`,null,t.length===0?`還沒有紀錄。`:`共 ${t.length} 局`),n.length>0?T(`p`,{class:`camp-bests`},`最高晶蝕：${n.map(e=>`${e.name} ${e.best===0?`通關`:e.best}`).join(`・`)}`):null,t.length===0?null:T(`div`,{class:`trial-table`},T(`table`,null,T(`thead`,null,T(`tr`,null,...[`時間`,`玩家`,`結果`,`晶蝕`,`進度`,`戰鬥`,`晶髓`,`好玩／想再來`,`留言`].map(e=>T(`th`,null,e)))),T(`tbody`,null,...r))),T(`div`,{class:`trial-actions`},t.length===0?null:_(`下載全部 JSON`,()=>this.#e.download(`lattice-hunter-runs-${t.length}.json`,{records:t})),_(`返回`,e,{class:`primary`})))}},Jr=class{#e;#t=new pn;#n;constructor(e,t=()=>{}){this.#e=e,this.#n=t}prime(e){this.#t.prime(mn(),e)}poll(e){let t=this.#t.poll(mn(),e);for(let e of t)e.kind===`move`?this.#a(e.dy===0?e.dx:e.dy):e.kind===`confirm`||e.kind===`next`?this.#i()?.click():e.kind===`cancel`&&this.#n();return t.length>0}#r(){return[...this.#e.querySelectorAll(`button:not([disabled])`)].filter(e=>e.offsetParent!==null)}#i(){let e=document.activeElement,t=this.#r();return e instanceof HTMLButtonElement&&t.includes(e)?e:((t.find(e=>e.classList.contains(`primary`))??t[0]??null)?.focus(),null)}#a(e){let t=this.#r();if(t.length===0)return;let n=document.activeElement,r=n instanceof HTMLButtonElement?t.indexOf(n):-1;t[r<0?0:Math.max(0,Math.min(t.length-1,r+Math.sign(e)))]?.focus()}},Yr=`lattice-hunter.players`,Xr=e=>`lattice-hunter.player.${e}`,Zr=e=>`lattice-hunter.player.${e}.run`,Qr=16,$r=e=>e.trim().slice(0,Qr)||`玩家`,ei=e=>typeof e==`number`&&Number.isInteger(e)&&e>=0;function ti(e){if(typeof e!=`object`||!e)return null;let t=e;if(typeof t.id!=`string`||typeof t.name!=`string`||!ei(t.essence))return null;let n=t.talents;if(typeof n!=`object`||!n||Array.isArray(n)||!Object.values(n).every(ei)||!Array.isArray(t.settled)||!t.settled.every(e=>typeof e==`string`))return null;let r=e=>typeof e==`object`&&e&&!Array.isArray(e)&&Object.values(e).every(ei)?{...e}:null,i=r(t.cleared),a=r(t.chosen);return{id:t.id,name:t.name,essence:t.essence,talents:{...n},settled:[...t.settled],...i?{cleared:i}:{},...a?{chosen:a}:{}}}var ni=class{#e;constructor(e){this.#e=e}list(){return this.#t().flatMap(e=>{let t=this.get(e);return t?[t]:[]})}get(e){return ti(this.#n(Xr(e)))}create(e){let t=this.#t(),n=t.length+1;for(;t.includes(`p${n}`);)n++;let r=ge(`p${n}`,$r(e));return this.put(r),this.#e.write(Yr,JSON.stringify([...t,r.id])),r}rename(e,t){let n=this.get(e);if(!n)return null;let r={...n,name:$r(t)};return this.put(r),r}put(e){return this.#e.write(Xr(e.id),JSON.stringify(e))}run(e){return this.#n(Zr(e))}saveRun(e,t){return this.#e.write(Zr(e),JSON.stringify(t))}clearRun(e){this.#e.remove(Zr(e))}#t(){let e=this.#n(Yr);return Array.isArray(e)?e.filter(e=>typeof e==`string`):[]}#n(e){let t=this.#e.read(e);if(t===null)return null;try{return JSON.parse(t)}catch{return null}}},ri=`lattice-hunter.run.records`,ii=`lattice-hunter.player.current`;function ai(e){if(typeof e!=`object`||!e)return null;let t=e;return typeof t.runId==`string`&&typeof t.room==`number`&&typeof t.essence==`number`&&Array.isArray(t.inputs)&&Array.isArray(t.commands)&&typeof t.track==`object`&&t.track!==null?e:null}var oi=class{ui;#e;#t;#n;#r;#i;#a=Mr();#o=``;#s=``;#c={run:0,sinceResultMs:null};#l=0;#u=-1;#d=0;#f=-1;#p=``;#m=!0;#h=null;constructor(e){this.#e=e,this.#t=new ni(e.saves),this.#n=e.test?Cr():Sr(ri,zr,Wn);let t=e.saves.read(ii);this.#i=t&&this.#t.get(t)?t:null,this.ui=new qr({questions:jr,onChoose:e=>this.#T(e),onCreate:e=>this.#T(this.#t.create(e).id),onRename:e=>{this.#i&&this.#t.rename(this.#i,e),this.camp()},onPlayers:()=>this.players(),onBuy:e=>this.#E(e),onTier:e=>this.#y(e),onSetOut:()=>this.#D(),onContinue:()=>this.#O(),onAbandon:()=>this.#A(),onRate:(e,t)=>{let n=this.#h?.(e,t);if(!n)throw Error(`no run to rate`);return this.#n.add(n),this.#h=null,n},onAgain:()=>this.#D(),onCamp:()=>this.camp(),records:()=>this.#n.load(),bests:()=>this.#t.list().map(e=>({name:e.name,best:e.cleared?.[this.#e.arena]??null})),persistent:this.#n.persistent,download:e.download}),this.#r=new Jr(this.ui.element,()=>this.ui.back())}start(){this.#b()?this.camp():this.players()}get waiting(){return this.ui.open}pollPad(e){return this.ui.open?this.#r.poll(e):!1}players(){let e=this.#n.load(),t=this.#t.list().map(t=>{let n=this.#v(t,e);return{id:n.id,name:n.name,essence:n.essence,saved:this.#t.run(n.id)!==null,best:n.cleared?.[this.#e.arena]??null}});this.#C(),this.ui.showPlayers(t,this.#i)}camp(e){let t=this.#b();if(!t){this.players();return}let n=this.#v(t,this.#n.load()),r=[...this.#e.host.content().talents.values()].map(e=>({id:e.id,name:e.name,description:e.description,level:ve(e,n.talents),max:e.costs.length,cost:ye(e,n.talents)})),i=ai(this.#t.run(n.id)),a=n.cleared?.[this.#e.arena]??null;this.#C(),this.ui.showCamp({player:{id:n.id,name:n.name,essence:n.essence,saved:!!i,best:a},talents:r,saved:i?{room:i.room,tier:i.tier??0,essence:i.essence}:null,tiers:a!==null&&!i?this.#_(n,a):null},e)}#g(){return this.#e.host.content().arenas.get(this.#e.arena)?.route?.tiers?.length??0}#_(e,n){let r=this.#e.host.content().arenas.get(this.#e.arena)?.route,i=r?.tiers?.length??0;if(!r||i===0)return null;let a=this.#e.arena,o=t(e,a,i);return{count:i,open:ke(e,a,i),chosen:o,best:n,rules:(r.tiers??[]).slice(0,o).map(e=>e.text),essence:Math.round(M(r,o).essence/10)}}#v(e,t){if(e.cleared!==void 0)return e;let n={...e,cleared:Br(t,e.id)};return this.#t.put(n),n}#y(e){let t=this.#b(),n=this.#e.arena;!t||e<0||e>ke(t,n,this.#g())||(this.#t.put(it(t,n,e)),this.camp(`[data-tier="${e}"]`))}afterStep(){if(this.#m)return;let e=this.#e.host.world();Fr(this.#a,e);let t=e.build?.route?.rooms.length??0,n=e.build?.phase??``,r=t!==this.#f,i=r||n!==this.#p&&n!==`fight`;this.#f=t,this.#p=n,i&&this.saveNow(r)}afterCommand(e,t){this.#m||!t||(Fr(this.#a,this.#e.host.world(),e),this.saveNow())}saveNow(e=!1){let t=this.#i,{host:n}=this.#e,r=n.world();if(this.#m||!t||!this.#o||r.outcome!==null||r.build?.phase===`fight`&&!e)return;let i={runId:this.#o,startedAt:this.#s,session:this.#c,room:(r.build?.room??0)+1,essence:Ar(r,n.content()).total,...r.build?.route?.tier?{tier:r.build.route.tier}:{},save:Vr(r,this.#x()),inputs:Oe(this.#e.inputs()),commands:[...this.#e.commands()],track:this.#a,devices:{...this.#e.devices()},boardMs:this.#S()};this.#t.saveRun(t,i)}finish(){let{host:e}=this.#e,t=e.world(),n=this.#b();if(this.#m||!n||t.outcome===null)return;this.#m=!0;let r=Ar(t,e.content()),i=ae(n,this.#o,r.total),a=t.build?.route?.tier??0,o=null;if(t.outcome===`survived`){let e=this.#e.arena,t=this.#g(),n=ke(i,e,t);i=v(i,e,a);let r=ke(i,e,t);r>n&&(o=r,i=it(i,e,r))}this.#t.put(i),this.#t.clearRun(n.id),this.#u=performance.now();let s=t.outcome;this.#h=(e,n)=>this.#j(t,s,e,n);let c=[...e.content().talents.values()].filter(e=>{let t=ye(e,i.talents);return t!==null&&t<=i.essence}).map(e=>e.name),l=e.content().arenas.get(t.arena);this.#C(),this.ui.showResult({outcome:s,rooms:(t.build?.room??0)+1,of:l?Ve(l):0,level:t.build?.level??1,frames:t.frame,kills:t.stats.kills,essence:r,total:i.essence,affordable:c,tier:a,unlocked:o})}bridge(e){if(e.type===`grant`&&this.#e.test){let t=this.#b();if(t){let n={...t,essence:t.essence+e.essence},r=e.cleared;if(r!==void 0){let e=this.#e.arena;n=v(n,e,r),n=it(n,e,ke(n,e,this.#g()))}this.#t.put(n)}this.ui.screen===`camp`&&this.camp()}return{screen:this.ui.screen,player:this.#b(),saved:this.#i?ai(this.#t.run(this.#i))!==null:!1,records:this.#n.load().length}}#b(){return this.#i?this.#t.get(this.#i):null}#x(){return this.#e.host.registry.packs.map(e=>`${e.id}@${e.version}`)}#S(){let e=this.#e.telemetry().time;return this.#d+e.arrangeMs+e.viewMs}#C(){this.#r.prime(performance.now()),this.#e.onWait()}#w(){this.ui.close(),this.#e.onPlay()}#T(e){this.#i=e,this.#e.saves.write(ii,e),this.camp()}#E(e){let t=this.#b(),n=this.#e.host.content().talents.get(e);if(!t||!n)return;let r=E(t,n);r&&this.#t.put(r),this.camp()}#D(){let e=this.#b();if(!e)return;let n=this.#e.seed(),r=t(e,this.#e.arena,this.#g());this.#e.host.reset(n,this.#e.arena,e.talents,r),this.#l++,this.#o=`run-${n}-${Date.now()}`,this.#s=new Date().toISOString(),this.#c={run:this.#l,sinceResultMs:this.#u<0?null:Math.round(performance.now()-this.#u)},this.#k(Mr(),0),this.#w(),this.saveNow(!0)}#O(){let e=this.#i;if(!e)return;let t=ai(this.#t.run(e)),n=t?Hr(t.save,this.#x()):null;!t||!n?.world?this.#A():(this.#e.host.load(n.world),this.#e.restore(ht(t.inputs),[...t.commands],{...t.devices}),this.#o=t.runId,this.#s=t.startedAt,this.#c=t.session,this.#k(structuredClone(t.track),t.boardMs),this.#w())}#k(e,t){let n=this.#e.host.world();this.#a=e,this.#d=t,this.#f=n.build?.route?.rooms.length??0,this.#p=n.build?.phase??``,this.#m=!1,this.#h=null}#A(){let e=this.#b();if(!e)return;let t=ai(this.#t.run(e.id));if(t){let n=Hr(t.save,this.#x()).world,r=n?Ar(n,this.#e.host.content()):null;this.#t.put(ae(e,t.runId,r?.total??t.essence)),n&&r&&(this.#o=t.runId,this.#s=t.startedAt,this.#c=t.session,this.#a=t.track,this.#d=t.boardMs,this.#n.add(this.#j(n,`abandoned`,null,``,t)))}this.#t.clearRun(e.id),this.camp()}#j(e,t,n,r,i){let{host:a}=this.#e,o=this.#b(),s=e.build,c=s?.gear,l=(s?.board.placements.length??0)+(c?.weapon.board.placements.length??0),u=i?i.commands:this.#e.commands(),d=i?ht(i.inputs):this.#e.inputs();return{version:1,mode:`run`,id:this.#o,player:{id:o?.id??``,name:o?.name??``},createdAt:new Date().toISOString(),seed:e.seed,arena:e.arena,outcome:t,frames:e.frame,stats:{...e.stats},devices:i?{...i.devices}:{...this.#e.devices()},talents:s?.perks?.talents??{},...s?.route?.tier?{tier:s.route.tier}:{},rooms:Lr(this.#a,e),essence:Ar(e,a.content()),build:{level:s?.level??1,openCells:s?De(s.board.spec):0,placed:l,weapon:c?{rarity:c.weapon.rarity,attack:c.weapon.attack}:null},boardMs:i?i.boardMs:this.#S(),session:this.#c,ratings:n,comment:r,replay:Nn({name:this.#o,seed:e.seed,arena:e.arena,packs:this.#x(),inputs:d,hash:I(e),commands:u,talents:s?.perks?.talents??{},tier:s?.route?.tier??0})}}};function si(e,t){if(e.length===0)return 0;let n=Math.ceil(t*e.length)-1;return e[Math.min(e.length-1,Math.max(0,n))]??0}function ci(e){let t=e.slice().sort();return{p50:si(t,.5),p95:si(t,.95),p99:si(t,.99),max:t[t.length-1]??0}}var li=class{#e;#t;#n=0;#r=0;constructor(e=600){this.#e=new Float64Array(e),this.#t=new Float64Array(e)}record(e,t){this.#e[this.#r]=e,this.#t[this.#r]=t,this.#r=(this.#r+1)%this.#e.length,this.#n=Math.min(this.#n+1,this.#e.length)}clear(){this.#n=0,this.#r=0}report(){let e=this.#e.subarray(0,this.#n),t=this.#t.subarray(0,this.#n),n=0,r=0;for(let t of e)n+=t,t>20&&r++;return{frames:this.#n,fps:n>0?1e3*this.#n/n:0,interval:ci(e),work:ci(t),slow:this.#n>0?r/this.#n:0}}},ui=`core:trial`,di=`沒有任何成長時，戰鬥本身好玩嗎？`,fi=e=>Number.isInteger(e);function pi(e){if(typeof e!=`object`||!e)return null;let t=e;if(t.version!==1||typeof t.id!=`string`||typeof t.createdAt!=`string`||!fi(t.seed)||typeof t.arena!=`string`||t.outcome!==`survived`&&t.outcome!==`fell`||!fi(t.frames)||t.frames<0||!fi(t.rating)||t.rating<1||t.rating>5||typeof t.comment!=`string`)return null;let n=t.stats;if(typeof n!=`object`||!n||!Object.values(n).every(fi))return null;let r=t.devices;return typeof r!=`object`||!r||!fi(r.keyboard)||!fi(r.pad)||!Fn(t.replay).replay?null:e}function mi(e){let t=e.frames/60,{stats:n,devices:r}=e,i=r.keyboard+r.pad;return{seconds:t,killsPerMinute:t>0?n.kills*60/t:0,avoided:n.enemyAttacks>0?1-n.hitsTaken/n.enemyAttacks:1,padShare:i>0?r.pad/i:0}}function hi(){let e=new Map;return{read:t=>e.get(t)??null,write(t,n){return e.set(t,n),!0},remove(t){e.delete(t)}}}function gi(){return{read(e){try{return window.localStorage.getItem(e)}catch{return null}},write(e,t){try{return window.localStorage.setItem(e,t),!0}catch{return!1}},remove(e){try{window.localStorage.removeItem(e)}catch{}}}}var _i=`synth:`,vi=3,yi=.06,bi=12,xi={swing(e,t){e.noise({filter:`bandpass`,from:2600,to:650,q:1.4,duration:.11+.03*t,gain:.26}),e.tone({type:`triangle`,from:1500,to:520,duration:.07+.02*t,gain:.05})},pierce(e){e.tone({type:`triangle`,from:600,to:1900,duration:.13,gain:.16}),e.noise({filter:`highpass`,from:4200,to:4200,duration:.05,gain:.12})},hit(e,t){let n=Math.min(3,Math.max(.5,t));e.tone({type:`sine`,from:150/(.6+.4*n),to:45,duration:.07+.035*n,gain:.35+.12*n}),e.noise({filter:`highpass`,from:2400,to:1600,duration:.035+.01*n,gain:.22}),e.noise({filter:`bandpass`,from:4200,to:2600,q:2,duration:.05,gain:.16})},smash(e){e.noise({filter:`lowpass`,from:700,to:160,q:1,duration:.34,gain:.34}),e.tone({type:`sine`,from:95,to:32,duration:.42,gain:.5,delay:.2}),e.noise({filter:`lowpass`,from:1200,to:120,duration:.4,gain:.32,delay:.2})},stun(e){e.tone({type:`sine`,from:260,to:120,duration:.12,gain:.3}),e.tone({type:`triangle`,from:1320,to:1320,duration:.25,gain:.05,delay:.05})},death(e){e.noise({filter:`lowpass`,from:1800,to:180,duration:.3,gain:.32}),e.tone({type:`square`,from:320,to:70,duration:.24,gain:.08})},dodge(e){e.noise({filter:`bandpass`,from:3200,to:1100,q:.9,duration:.14,gain:.12})},hurt(e){e.tone({type:`sine`,from:110,to:40,duration:.13,gain:.45}),e.tone({type:`square`,from:230,to:95,duration:.15,gain:.1})},warn(e){e.tone({type:`sine`,from:720,to:720,duration:.06,gain:.14}),e.tone({type:`sine`,from:1080,to:1080,duration:.08,gain:.14,delay:.07})},dash(e){e.noise({filter:`lowpass`,from:900,to:180,duration:.24,gain:.3})},shot(e){e.tone({type:`square`,from:950,to:280,duration:.1,gain:.09})},burn(e){e.noise({filter:`bandpass`,from:2600,to:2200,q:3,duration:.05,gain:.05})},fireball(e){e.noise({filter:`lowpass`,from:500,to:1900,duration:.24,gain:.22}),e.tone({type:`triangle`,from:170,to:420,duration:.22,gain:.1})},fire_hit(e){e.noise({filter:`lowpass`,from:1500,to:140,duration:.34,gain:.4}),e.tone({type:`sine`,from:90,to:35,duration:.2,gain:.4})},ice(e){e.tone({type:`sine`,from:1500,to:1500,duration:.12,gain:.1}),e.tone({type:`sine`,from:2250,to:2250,duration:.1,gain:.07})},ice_hit(e){e.noise({filter:`highpass`,from:5e3,to:5e3,duration:.08,gain:.18}),e.tone({type:`sine`,from:2600,to:3400,duration:.06,gain:.07})},whirl(e){e.noise({filter:`bandpass`,from:900,to:2400,q:1.2,duration:.22,gain:.18}),e.noise({filter:`bandpass`,from:2400,to:900,q:1.2,duration:.22,gain:.18,delay:.2})},click(e){e.tone({type:`triangle`,from:1400,to:900,duration:.05,gain:.12})},unclick(e){e.tone({type:`triangle`,from:900,to:1300,duration:.05,gain:.1})},shatter(e){e.noise({filter:`highpass`,from:3e3,to:6e3,duration:.18,gain:.2})},unlock(e){e.tone({type:`sine`,from:660,to:660,duration:.08,gain:.12}),e.tone({type:`sine`,from:990,to:990,duration:.12,gain:.12,delay:.08})},level_up(e){for(let[t,n]of[523,659,784,1047].entries())e.tone({type:`triangle`,from:n,to:n,duration:.12,gain:.12,delay:t*.08})}};Object.keys(xi).map(e=>_i+e);var Si=class{#e;#t=null;#n;#r=new Map;constructor(e,t){this.#e=e,this.#n=t}get muted(){return this.#n}set muted(e){this.#n=e,this.#t&&(this.#t.master.gain.value=e?0:.5)}unlock(){if(!this.#t)try{let e=new AudioContext,t=e.createDynamicsCompressor();t.connect(e.destination);let n=e.createGain();n.gain.value=this.#n?0:.5,n.connect(t),this.#t={context:e,master:n,noise:Ci(e)}}catch(e){console.warn(`no audio`,e);return}this.#t.context.state===`suspended`&&this.#t.context.resume()}play(e,t){let n=this.#t;if(!(!n||this.#n||n.context.state!==`running`))for(let r of e){if(r.type!==`cue`)continue;let e=this.#e.cues.get(r.cue)?.sfx;if(!e?.startsWith(_i))continue;let i=xi[e.slice(6)];i&&this.#i(e,n.context.currentTime)&&i(wi(n,Math.max(-.8,Math.min(.8,(r.x-t)/bi))),r.strength)}}#i(e,t){let n=(this.#r.get(e)??[]).filter(e=>t-e<yi);return n.length>=vi?!1:(n.push(t),this.#r.set(e,n),!0)}};function Ci(e){let t=e.createBuffer(1,e.sampleRate,e.sampleRate),n=t.getChannelData(0);for(let e=0;e<n.length;e++)n[e]=Math.random()*2-1;return t}function wi(e,t){let{context:n,master:r,noise:i}=e,a=n.createStereoPanner();a.pan.value=t,a.connect(r);let o=n.currentTime,s=0,c=e=>{s++,e.onended=()=>{--s===0&&a.disconnect()}},l=(e,t,r)=>{let i=n.createGain();return i.gain.setValueAtTime(1e-4,e),i.gain.linearRampToValueAtTime(r,e+Math.min(.01,t/4)),i.gain.exponentialRampToValueAtTime(1e-4,e+t),i.connect(a),i};return{tone(e){let t=o+(e.delay??0),r=n.createOscillator();r.type=e.type,r.frequency.setValueAtTime(e.from,t),r.frequency.exponentialRampToValueAtTime(e.to,t+e.duration),r.connect(l(t,e.duration,e.gain)),c(r),r.start(t),r.stop(t+e.duration+.02)},noise(e){let t=o+(e.delay??0),r=n.createBufferSource();r.buffer=i;let a=Math.random()*(i.duration-e.duration-.05),s=n.createBiquadFilter();s.type=e.filter,s.Q.value=e.q??.8,s.frequency.setValueAtTime(e.from,t),s.frequency.exponentialRampToValueAtTime(e.to,t+e.duration),r.connect(s),s.connect(l(t,e.duration,e.gain)),c(r),r.start(t,Math.max(0,a),e.duration+.02)}}}var Ti=1e3,Ei=1001,Di=1002,Oi=1003,ki=1004,Ai=1005,ji=1006,Mi=1007,Ni=1008,Pi=1009,Fi=1010,Ii=1011,Li=1012,Ri=1013,zi=1014,Bi=1015,Vi=1016,Hi=1017,Ui=1018,Wi=1020,Gi=35902,Ki=35899,qi=1021,Ji=1022,Yi=1023,Xi=1026,Zi=1027,Qi=1028,$i=1029,ea=1030,ta=1031,na=1033,ra=33776,ia=33777,aa=33778,oa=33779,sa=35840,ca=35841,la=35842,ua=35843,da=36196,fa=37492,pa=37496,ma=37488,ha=37489,ga=37490,_a=37491,va=37808,ya=37809,ba=37810,xa=37811,Sa=37812,Ca=37813,wa=37814,Ta=37815,Ea=37816,Da=37817,Oa=37818,ka=37819,Aa=37820,ja=37821,Ma=36492,Na=36494,Pa=36495,Fa=36283,Ia=36284,La=36285,Ra=36286,za=2300,Ba=2301,Va=2302,Ha=2303,Ua=2400,Wa=2401,Ga=2402,Ka=3200,qa=`srgb`,Ja=`srgb-linear`,Ya=`linear`,Xa=`srgb`,Za=7680,Qa=35044,$a=35048,eo=2e3;function to(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function no(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ro(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function io(){let e=ro(`canvas`);return e.style.display=`block`,e}var ao={};function oo(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function so(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function U(...e){e=so(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function W(...e){e=so(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function co(...e){let t=e.join(` `);t in ao||(ao[t]=!0,U(...e))}function lo(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var uo={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},fo=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},po=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),mo=Math.PI/180,ho=180/Math.PI;function go(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(po[e&255]+po[e>>8&255]+po[e>>16&255]+po[e>>24&255]+`-`+po[t&255]+po[t>>8&255]+`-`+po[t>>16&15|64]+po[t>>24&255]+`-`+po[n&63|128]+po[n>>8&255]+`-`+po[n>>16&255]+po[n>>24&255]+po[r&255]+po[r>>8&255]+po[r>>16&255]+po[r>>24&255]).toLowerCase()}function G(e,t,n){return Math.max(t,Math.min(n,e))}function _o(e,t){return(e%t+t)%t}function vo(e,t,n){return(1-n)*e+n*t}function yo(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function bo(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var K=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=G(this.x,e.x,t.x),this.y=G(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=G(this.x,e,t),this.y=G(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(G(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(G(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xo=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:U(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(G(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Co.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Co.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=G(this.x,e.x,t.x),this.y=G(this.y,e.y,t.y),this.z=G(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=G(this.x,e,t),this.y=G(this.y,e,t),this.z=G(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(G(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return So.copy(this).projectOnVector(e),this.sub(So)}reflect(e){return this.sub(So.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(G(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},So=new q,Co=new xo,J=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return co(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(wo.makeScale(e,t)),this}rotate(e){return co(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(wo.makeRotation(-e)),this}translate(e,t){return co(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(wo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},wo=new J,To=new J().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eo=new J().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Do(){let e={enabled:!0,workingColorSpace:Ja,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Oo(e.r),e.g=Oo(e.g),e.b=Oo(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=ko(e.r),e.g=ko(e.g),e.b=ko(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ya:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return co(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return co(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ja]:{primaries:t,whitePoint:r,transfer:Ya,toXYZ:To,fromXYZ:Eo,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:qa},outputColorSpaceConfig:{drawingBufferColorSpace:qa}},[qa]:{primaries:t,whitePoint:r,transfer:Xa,toXYZ:To,fromXYZ:Eo,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:qa}}}),e}var Y=Do();function Oo(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function ko(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ao,jo=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ao===void 0&&(Ao=ro(`canvas`)),Ao.width=e.width,Ao.height=e.height;let t=Ao.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ao}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=ro(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Oo(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Oo(t[e]/255)*255):t[e]=Oo(t[e]);return{data:t,width:e.width,height:e.height}}return U(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Mo=0,No=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mo++}),this.uuid=go(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Po(r[t].image)):e.push(Po(r[t]))}else e=Po(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Po(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?jo.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(U(`Texture: Unable to serialize Texture.`),{})}var Fo=0,Io=new q,Lo=class e extends fo{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Ei,i=Ei,a=ji,o=Ni,s=Yi,c=Pi,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fo++}),this.uuid=go(),this.name=``,this.source=new No(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new J,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Io).x}get height(){return this.source.getSize(Io).y}get depth(){return this.source.getSize(Io).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){U(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?U(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ti:e.x-=Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case Di:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Ti:e.y-=Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case Di:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Lo.DEFAULT_IMAGE=null,Lo.DEFAULT_MAPPING=300,Lo.DEFAULT_ANISOTROPY=1;var Ro=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=G(this.x,e.x,t.x),this.y=G(this.y,e.y,t.y),this.z=G(this.z,e.z,t.z),this.w=G(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=G(this.x,e,t),this.y=G(this.y,e,t),this.z=G(this.z,e,t),this.w=G(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(G(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zo=class extends fo{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ji,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ro(0,0,e,t),this.scissorTest=!1,this.viewport=new Ro(0,0,e,t),this.textures=[];let r=new Lo({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ji,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new No(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Bo=class extends zo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vo=class extends Lo{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Oi,this.minFilter=Oi,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ho=class extends Lo{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Oi,this.minFilter=Oi,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Uo=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Wo.setFromMatrixColumn(e,0).length(),i=1/Wo.setFromMatrixColumn(e,1).length(),a=1/Wo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ko,e,qo)}lookAt(e,t,n){let r=this.elements;return Xo.subVectors(e,t),Xo.lengthSq()===0&&(Xo.z=1),Xo.normalize(),Jo.crossVectors(n,Xo),Jo.lengthSq()===0&&(Math.abs(n.z)===1?Xo.x+=1e-4:Xo.z+=1e-4,Xo.normalize(),Jo.crossVectors(n,Xo)),Jo.normalize(),Yo.crossVectors(Xo,Jo),r[0]=Jo.x,r[4]=Yo.x,r[8]=Xo.x,r[1]=Jo.y,r[5]=Yo.y,r[9]=Xo.y,r[2]=Jo.z,r[6]=Yo.z,r[10]=Xo.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],N=r[7],P=r[11],te=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*j+c*P,i[12]=a*w+o*O+s*ee+c*te,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*j+f*P,i[13]=l*w+u*O+d*ee+f*te,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*j+g*P,i[14]=p*w+m*O+h*ee+g*te,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*j+b*P,i[15]=_*w+v*O+y*ee+b*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Wo.set(r[0],r[1],r[2]).length(),o=Wo.set(r[4],r[5],r[6]).length(),s=Wo.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Go.copy(this);let c=1/a,l=1/o,u=1/s;return Go.elements[0]*=c,Go.elements[1]*=c,Go.elements[2]*=c,Go.elements[4]*=l,Go.elements[5]*=l,Go.elements[6]*=l,Go.elements[8]*=u,Go.elements[9]*=u,Go.elements[10]*=u,t.setFromRotationMatrix(Go),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=eo,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=eo,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Wo=new q,Go=new Uo,Ko=new q(0,0,0),qo=new q(1,1,1),Jo=new q,Yo=new q,Xo=new q,Zo=new Uo,Qo=new xo,$o=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(G(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-G(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(G(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-G(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(G(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-G(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:U(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qo.setFromEuler(this),this.setFromQuaternion(Qo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$o.DEFAULT_ORDER=`XYZ`;var es=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},ts=0,ns=new q,rs=new xo,is=new Uo,as=new q,os=new q,ss=new q,cs=new xo,ls=new q(1,0,0),us=new q(0,1,0),ds=new q(0,0,1),fs={type:`added`},ps={type:`removed`},ms={type:`childadded`,child:null},hs={type:`childremoved`,child:null},gs=class e extends fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ts++}),this.uuid=go(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new q,n=new $o,r=new xo,i=new q(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Uo},normalMatrix:{value:new J}}),this.matrix=new Uo,this.matrixWorld=new Uo,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(ls,e)}rotateY(e){return this.rotateOnAxis(us,e)}rotateZ(e){return this.rotateOnAxis(ds,e)}translateOnAxis(e,t){return ns.copy(e).applyQuaternion(this.quaternion),this.position.add(ns.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ls,e)}translateY(e){return this.translateOnAxis(us,e)}translateZ(e){return this.translateOnAxis(ds,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(is.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?as.copy(e):as.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?is.lookAt(os,as,this.up):is.lookAt(as,os,this.up),this.quaternion.setFromRotationMatrix(is),r&&(is.extractRotation(r.matrixWorld),rs.setFromRotationMatrix(is),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(W(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fs),ms.child=e,this.dispatchEvent(ms),ms.child=null):W(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ps),hs.child=e,this.dispatchEvent(hs),hs.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),is.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),is.multiply(e.parent.matrixWorld)),e.applyMatrix4(is),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fs),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,ss),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,cs,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};gs.DEFAULT_UP=new q(0,1,0),gs.DEFAULT_MATRIX_AUTO_UPDATE=!0,gs.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _s=class extends gs{constructor(){super(),this.isGroup=!0,this.type=`Group`}},vs={type:`move`},ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vs)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new _s;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},bs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function Cs(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var X=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qa){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Y.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Y.workingColorSpace){return this.r=e,this.g=t,this.b=n,Y.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Y.workingColorSpace){if(e=_o(e,1),t=G(t,0,1),n=G(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Cs(i,r,e+1/3),this.g=Cs(i,r,e),this.b=Cs(i,r,e-1/3)}return Y.colorSpaceToWorking(this,r),this}setStyle(e,t=qa){function n(t){t!==void 0&&parseFloat(t)<1&&U(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:U(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);U(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qa){let n=bs[e.toLowerCase()];return n===void 0?U(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oo(e.r),this.g=Oo(e.g),this.b=Oo(e.b),this}copyLinearToSRGB(e){return this.r=ko(e.r),this.g=ko(e.g),this.b=ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qa){return Y.workingToColorSpace(ws.copy(this),e),Math.round(G(ws.r*255,0,255))*65536+Math.round(G(ws.g*255,0,255))*256+Math.round(G(ws.b*255,0,255))}getHexString(e=qa){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Y.workingColorSpace){Y.workingToColorSpace(ws.copy(this),t);let n=ws.r,r=ws.g,i=ws.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Y.workingColorSpace){return Y.workingToColorSpace(ws.copy(this),t),e.r=ws.r,e.g=ws.g,e.b=ws.b,e}getStyle(e=qa){Y.workingToColorSpace(ws.copy(this),e);let t=ws.r,n=ws.g,r=ws.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(xs),this.setHSL(xs.h+e,xs.s+t,xs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xs),e.getHSL(Ss);let n=vo(xs.h,Ss.h,t),r=vo(xs.s,Ss.s,t),i=vo(xs.l,Ss.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ws=new X;X.NAMES=bs;var Ts=class extends gs{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $o,this.environmentIntensity=1,this.environmentRotation=new $o,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Es=new q,Ds=new q,Os=new q,ks=new q,As=new q,js=new q,Ms=new q,Ns=new q,Ps=new q,Fs=new q,Is=new Ro,Ls=new Ro,Rs=new Ro,zs=class e{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Es.subVectors(e,t),r.cross(Es);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Es.subVectors(r,t),Ds.subVectors(n,t),Os.subVectors(e,t);let a=Es.dot(Es),o=Es.dot(Ds),s=Es.dot(Os),c=Ds.dot(Ds),l=Ds.dot(Os),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ks)!==null&&ks.x>=0&&ks.y>=0&&ks.x+ks.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,ks)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,ks.x),s.addScaledVector(a,ks.y),s.addScaledVector(o,ks.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Is.setScalar(0),Ls.setScalar(0),Rs.setScalar(0),Is.fromBufferAttribute(e,t),Ls.fromBufferAttribute(e,n),Rs.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Is,i.x),a.addScaledVector(Ls,i.y),a.addScaledVector(Rs,i.z),a}static isFrontFacing(e,t,n,r){return Es.subVectors(n,t),Ds.subVectors(e,t),Es.cross(Ds).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Es.subVectors(this.c,this.b),Ds.subVectors(this.a,this.b),Es.cross(Ds).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;As.subVectors(r,n),js.subVectors(i,n),Ns.subVectors(e,n);let s=As.dot(Ns),c=js.dot(Ns);if(s<=0&&c<=0)return t.copy(n);Ps.subVectors(e,r);let l=As.dot(Ps),u=js.dot(Ps);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(As,a);Fs.subVectors(e,i);let f=As.dot(Fs),p=js.dot(Fs);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(js,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Ms.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Ms,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(As,a).addScaledVector(js,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Bs=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hs.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hs.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hs.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Hs):Hs.fromBufferAttribute(r,t),Hs.applyMatrix4(e.matrixWorld),this.expandByPoint(Hs);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Us.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Us.copy(e.boundingBox)),Us.applyMatrix4(e.matrixWorld),this.union(Us)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hs),Hs.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),Zs.subVectors(this.max,Xs),Ws.subVectors(e.a,Xs),Gs.subVectors(e.b,Xs),Ks.subVectors(e.c,Xs),qs.subVectors(Gs,Ws),Js.subVectors(Ks,Gs),Ys.subVectors(Ws,Ks);let t=[0,-qs.z,qs.y,0,-Js.z,Js.y,0,-Ys.z,Ys.y,qs.z,0,-qs.x,Js.z,0,-Js.x,Ys.z,0,-Ys.x,-qs.y,qs.x,0,-Js.y,Js.x,0,-Ys.y,Ys.x,0];return!ec(t,Ws,Gs,Ks,Zs)||(t=[1,0,0,0,1,0,0,0,1],!ec(t,Ws,Gs,Ks,Zs))?!1:(Qs.crossVectors(qs,Js),t=[Qs.x,Qs.y,Qs.z],ec(t,Ws,Gs,Ks,Zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hs).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hs).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Vs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vs)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Vs=[new q,new q,new q,new q,new q,new q,new q,new q],Hs=new q,Us=new Bs,Ws=new q,Gs=new q,Ks=new q,qs=new q,Js=new q,Ys=new q,Xs=new q,Zs=new q,Qs=new q,$s=new q;function ec(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){$s.fromArray(e,a);let o=i.x*Math.abs($s.x)+i.y*Math.abs($s.y)+i.z*Math.abs($s.z),s=t.dot($s),c=n.dot($s),l=r.dot($s);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var tc=new q,nc=new K,rc=0,ic=class extends fo{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rc++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Qa,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nc.fromBufferAttribute(this,t),nc.applyMatrix3(e),this.setXY(t,nc.x,nc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tc.fromBufferAttribute(this,t),tc.applyMatrix3(e),this.setXYZ(t,tc.x,tc.y,tc.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tc.fromBufferAttribute(this,t),tc.applyMatrix4(e),this.setXYZ(t,tc.x,tc.y,tc.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tc.fromBufferAttribute(this,t),tc.applyNormalMatrix(e),this.setXYZ(t,tc.x,tc.y,tc.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tc.fromBufferAttribute(this,t),tc.transformDirection(e),this.setXYZ(t,tc.x,tc.y,tc.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bo(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yo(t,this.array)),t}setX(e,t){return this.normalized&&(t=bo(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yo(t,this.array)),t}setY(e,t){return this.normalized&&(t=bo(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bo(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yo(t,this.array)),t}setW(e,t){return this.normalized&&(t=bo(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bo(t,this.array),n=bo(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=bo(t,this.array),n=bo(n,this.array),r=bo(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=bo(t,this.array),n=bo(n,this.array),r=bo(r,this.array),i=bo(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},ac=class extends ic{constructor(e,t,n){super(new Uint16Array(e),t,n)}},oc=class extends ic{constructor(e,t,n){super(new Uint32Array(e),t,n)}},sc=class extends ic{constructor(e,t,n){super(new Float32Array(e),t,n)}},cc=new Bs,lc=new q,uc=new q,dc=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?cc.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lc.subVectors(e,this.center);let t=lc.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(lc,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lc.copy(e.center).add(uc)),this.expandByPoint(lc.copy(e.center).sub(uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},fc=0,pc=new Uo,mc=new gs,hc=new q,gc=new Bs,_c=new Bs,vc=new q,yc=class e extends fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fc++}),this.uuid=go(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(to(e)?oc:ac)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new J().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pc.makeRotationFromQuaternion(e),this.applyMatrix4(pc),this}rotateX(e){return pc.makeRotationX(e),this.applyMatrix4(pc),this}rotateY(e){return pc.makeRotationY(e),this.applyMatrix4(pc),this}rotateZ(e){return pc.makeRotationZ(e),this.applyMatrix4(pc),this}translate(e,t,n){return pc.makeTranslation(e,t,n),this.applyMatrix4(pc),this}scale(e,t,n){return pc.makeScale(e,t,n),this.applyMatrix4(pc),this}lookAt(e){return mc.lookAt(e),mc.updateMatrix(),this.applyMatrix4(mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hc).negate(),this.translate(hc.x,hc.y,hc.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new sc(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&U(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)W(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];gc.setFromBufferAttribute(n),this.morphTargetsRelative?(vc.addVectors(this.boundingBox.min,gc.min),this.boundingBox.expandByPoint(vc),vc.addVectors(this.boundingBox.max,gc.max),this.boundingBox.expandByPoint(vc)):(this.boundingBox.expandByPoint(gc.min),this.boundingBox.expandByPoint(gc.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&W(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dc);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)W(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new q,1/0);else if(e){let n=this.boundingSphere.center;if(gc.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];_c.setFromBufferAttribute(n),this.morphTargetsRelative?(vc.addVectors(gc.min,_c.min),gc.expandByPoint(vc),vc.addVectors(gc.max,_c.max),gc.expandByPoint(vc)):(gc.expandByPoint(_c.min),gc.expandByPoint(_c.max))}gc.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)vc.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(vc));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)vc.fromBufferAttribute(a,t),o&&(hc.fromBufferAttribute(e,t),vc.add(hc)),r=Math.max(r,n.distanceToSquared(vc))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&W(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){W(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new ic(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new q,s[e]=new q;let c=new q,l=new q,u=new q,d=new K,f=new K,p=new K,m=new q,h=new q;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new q,y=new q,b=new q,x=new q;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new ic(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new q,i=new q,a=new q,o=new q,s=new q,c=new q,l=new q,u=new q;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vc.fromBufferAttribute(e,t),vc.normalize(),e.setXYZ(t,vc.x,vc.y,vc.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new ic(a,r,i)}if(this.index===null)return U(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},bc=new q,xc=new q,Sc=new J,Cc=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=bc.subVectors(n,t).cross(xc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(bc),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Sc.getNormalMatrix(e),r=this.coplanarPoint(bc).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},wc=0,Tc=class extends fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=go(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new X(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Za,this.stencilZFail=Za,this.stencilZPass=Za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){U(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?U(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new X().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Cc().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new K().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new K().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Ec=new q,Dc=new q,Oc=new q,kc=new q,Ac=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ec)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ec.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ec.copy(this.origin).addScaledVector(this.direction,t),Ec.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Dc.copy(e).add(t).multiplyScalar(.5),Oc.copy(t).sub(e).normalize(),kc.copy(this.origin).sub(Dc);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Oc),o=kc.dot(this.direction),s=-kc.dot(Oc),c=kc.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Dc).addScaledVector(Oc,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ec.subVectors(e.center,this.origin);let n=Ec.dot(this.direction),r=Ec.dot(Ec)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ec)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let N=S/w,P=C/w,te=1/w,ne=T-N*D,re=E-P*D,ie=O-N*A,ae=k-P*A,F=j-N*M,oe=ee-P*M,I=F*ae-oe*ie,L=ne*oe-re*F,se=ie*re-ae*ne;if(r){if(I<0||L<0||se<0)return null}else if((I<0||L<0||se<0)&&(I>0||L>0||se>0))return null;let ce=I+L+se;if(ce===0)return null;let le=te*(I*D+L*A+se*M);return(ce>0?le<0:le>0)?null:this.at(le/ce,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jc=class extends Tc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new X(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $o,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Mc=new Uo,Nc=new Ac,Pc=new dc,Fc=new q,Ic=new q,Lc=new q,Rc=new q,zc=new q,Bc=new q,Vc=new q,Hc=new q,Z=class extends gs{constructor(e=new yc,t=new jc){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Bc.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(zc.fromBufferAttribute(s,e),a?Bc.addScaledVector(zc,r):Bc.addScaledVector(zc.sub(t),r))}t.add(Bc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pc.copy(n.boundingSphere),Pc.applyMatrix4(i),Nc.copy(e.ray).recast(e.near),!(Pc.containsPoint(Nc.origin)===!1&&(Nc.intersectSphere(Pc,Fc)===null||Nc.origin.distanceToSquared(Fc)>(e.far-e.near)**2))&&(Mc.copy(i).invert(),Nc.copy(e.ray).applyMatrix4(Mc),(n.boundingBox===null||Nc.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Nc)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Wc(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Wc(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Wc(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Wc(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Uc(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Hc.copy(s),Hc.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Hc);return l<n.near||l>n.far?null:{distance:l,point:Hc.clone(),object:e}}function Wc(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Ic),e.getVertexPosition(c,Lc),e.getVertexPosition(l,Rc);let u=Uc(e,t,n,r,Ic,Lc,Rc,Vc);if(u){let e=new q;zs.getBarycoord(Vc,Ic,Lc,Rc,e),i&&(u.uv=zs.getInterpolatedAttribute(i,s,c,l,e,new K)),a&&(u.uv1=zs.getInterpolatedAttribute(a,s,c,l,e,new K)),o&&(u.normal=zs.getInterpolatedAttribute(o,s,c,l,e,new q),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new q,materialIndex:0};zs.getNormal(Ic,Lc,Rc,t.normal),u.face=t,u.barycoord=e}return u}var Gc=class extends Lo{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Oi,l=Oi,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Kc=class extends ic{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qc=new Uo,Jc=new Uo,Yc=[],Xc=new Bs,Zc=new Uo,Qc=new Z,$c=new dc,el=class extends Z{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Kc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Zc)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qc),Xc.copy(e.boundingBox).applyMatrix4(qc),this.boundingBox.union(Xc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new dc),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qc),$c.copy(e.boundingSphere).applyMatrix4(qc),this.boundingSphere.union($c)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Qc.geometry=this.geometry,Qc.material=this.material,Qc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$c.copy(this.boundingSphere),$c.applyMatrix4(n),e.ray.intersectsSphere($c)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,qc),Jc.multiplyMatrices(n,qc),Qc.matrixWorld=Jc,Qc.raycast(e,Yc);for(let e=0,n=Yc.length;e<n;e++){let n=Yc[e];n.instanceId=i,n.object=this,t.push(n)}Yc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Kc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gc(new Float32Array(r*this.count),r,this.count,Qi,Bi));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},tl=new dc,nl=new K(.5,.5),rl=new q,il=class{constructor(e=new Cc,t=new Cc,n=new Cc,r=new Cc,i=new Cc,a=new Cc){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=eo,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tl.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),tl.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tl)}intersectsSprite(e){return tl.center.set(0,0,0),tl.radius=.7071067811865476+nl.distanceTo(e.center),tl.applyMatrix4(e.matrixWorld),this.intersectsSphere(tl)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(rl.x=r.normal.x>0?e.max.x:e.min.x,rl.y=r.normal.y>0?e.max.y:e.min.y,rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(rl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},al=class extends Tc{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new X(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ol=new q,sl=new q,cl=new Uo,ll=new Ac,ul=new dc,dl=new q,fl=new q,pl=class extends gs{constructor(e=new yc,t=new al){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)ol.fromBufferAttribute(t,e-1),sl.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=ol.distanceTo(sl);e.setAttribute(`lineDistance`,new sc(n,1))}else U(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(r),ul.radius+=i,e.ray.intersectsSphere(ul)===!1)return;cl.copy(r).invert(),ll.copy(e.ray).applyMatrix4(cl);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=ml(this,e,ll,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=ml(this,e,ll,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=ml(this,e,ll,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=ml(this,e,ll,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ml(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(ol.fromBufferAttribute(s,i),sl.fromBufferAttribute(s,a),n.distanceSqToSegment(ol,sl,dl,fl)>r)return;dl.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(dl);if(!(c<t.near||c>t.far))return{distance:c,point:fl.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var hl=new q,gl=new q,_l=class extends pl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)hl.fromBufferAttribute(t,e),gl.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+hl.distanceTo(gl);e.setAttribute(`lineDistance`,new sc(n,1))}else U(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},vl=class extends Lo{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yl=class extends Lo{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},bl=class extends Lo{constructor(e,t,n=zi,r,i,a,o=Oi,s=Oi,c,l=Xi,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new No(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},xl=class extends bl{constructor(e,t=zi,n=301,r,i,a=Oi,o=Oi,s,c=Xi){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Sl=class extends Lo{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Cl=class e extends yc{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new sc(c,3)),this.setAttribute(`normal`,new sc(l,3)),this.setAttribute(`uv`,new sc(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new q;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},wl=class e extends yc{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new q,g=new q;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new sc(o,3)),this.setAttribute(`normal`,new sc(s,3)),this.setAttribute(`uv`,new sc(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Tl=class e extends yc{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new q,l=new K;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new sc(a,3)),this.setAttribute(`normal`,new sc(o,3)),this.setAttribute(`uv`,new sc(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},El=class e extends yc{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new sc(u,3)),this.setAttribute(`normal`,new sc(d,3)),this.setAttribute(`uv`,new sc(f,2));function _(){let a=new q,_=new q,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new K,m=new q,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Dl=class e extends El{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ol=class e extends yc{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new sc(i,3)),this.setAttribute(`normal`,new sc(i.slice(),3)),this.setAttribute(`uv`,new sc(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new q,r=new q,i=new q;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new q;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new q;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new q,t=new q,n=new q,r=new q,o=new K,s=new K,c=new K;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},kl=class e extends Ol{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Al=class e extends Ol{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},jl=class e extends yc{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new sc(p,3)),this.setAttribute(`normal`,new sc(m,3)),this.setAttribute(`uv`,new sc(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ml=class e extends yc{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new q,p=new K;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new sc(s,3)),this.setAttribute(`normal`,new sc(c,3)),this.setAttribute(`uv`,new sc(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function Nl(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Fl(i))i.isRenderTargetTexture?(U(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Fl(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Pl(e){let t={};for(let n=0;n<e.length;n++){let r=Nl(e[n]);for(let e in r)t[e]=r[e]}return t}function Fl(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Il(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ll(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Y.workingColorSpace}var Rl={clone:Nl,merge:Pl},zl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vl=class extends Tc{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zl,this.fragmentShader=Bl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nl(e.uniforms),this.uniformsGroups=Il(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new X().setHex(r.value);break;case`v2`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Ro().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new J().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Uo().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Hl=class extends Vl{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ul=class extends Tc{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new X(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new X(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $o,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wl=class extends Tc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ka,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Gl=class extends Tc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Kl(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function ql(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Jl=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Yl=class extends Jl{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ua,endingEnd:Ua}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wa:i=e,o=2*t-n;break;case Ga:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Wa:a=e,s=2*n-t;break;case Ga:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Xl=class extends Jl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Zl=class extends Jl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ql=class extends Jl{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=tu(n,t,g,y,r);i[p]=$l(x,o,_,b,m)}return i}};function $l(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function eu(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function tu(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=$l(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=eu(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var nu=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Kl(t,this.TimeBufferType),this.values=Kl(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Kl(e.times,Array),values:Kl(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),ql(e.settings)&&(n.settings={inTangents:Kl(e.settings.inTangents,Array),outTangents:Kl(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ql(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case za:t=this.InterpolantFactoryMethodDiscrete;break;case Ba:t=this.InterpolantFactoryMethodLinear;break;case Va:t=this.InterpolantFactoryMethodSmooth;break;case Ha:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return U(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return za;case this.InterpolantFactoryMethodLinear:return Ba;case this.InterpolantFactoryMethodSmooth:return Va;case this.InterpolantFactoryMethodBezier:return Ha}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;ql(this.settings)&&(ru(this.settings.inTangents,e),ru(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(W(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(W(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){W(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){W(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&no(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){W(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Va,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,ql(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ru(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}nu.prototype.ValueTypeName=``,nu.prototype.TimeBufferType=Float32Array,nu.prototype.ValueBufferType=Float32Array,nu.prototype.DefaultInterpolation=Ba;var iu=class extends nu{constructor(e,t,n){super(e,t,n)}};iu.prototype.ValueTypeName=`bool`,iu.prototype.ValueBufferType=Array,iu.prototype.DefaultInterpolation=za,iu.prototype.InterpolantFactoryMethodLinear=void 0,iu.prototype.InterpolantFactoryMethodSmooth=void 0;var au=class extends nu{constructor(e,t,n,r){super(e,t,n,r)}};au.prototype.ValueTypeName=`color`;var ou=class extends nu{constructor(e,t,n,r){super(e,t,n,r)}};ou.prototype.ValueTypeName=`number`;var su=class extends Jl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)xo.slerpFlat(i,0,a,c-o,a,c,s);return i}},cu=class extends nu{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new su(this.times,this.values,this.getValueSize(),e)}};cu.prototype.ValueTypeName=`quaternion`,cu.prototype.InterpolantFactoryMethodSmooth=void 0;var lu=class extends nu{constructor(e,t,n){super(e,t,n)}};lu.prototype.ValueTypeName=`string`,lu.prototype.ValueBufferType=Array,lu.prototype.DefaultInterpolation=za,lu.prototype.InterpolantFactoryMethodLinear=void 0,lu.prototype.InterpolantFactoryMethodSmooth=void 0;var uu=class extends nu{constructor(e,t,n,r){super(e,t,n,r)}};uu.prototype.ValueTypeName=`vector`;var du=class extends gs{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new X(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},fu=class extends du{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(gs.DEFAULT_UP),this.updateMatrix(),this.groundColor=new X(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},pu=new Uo,mu=new q,hu=new q,gu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new Uo,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new il,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new Ro(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;mu.setFromMatrixPosition(e.matrixWorld),t.position.copy(mu),hu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){pu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(pu,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(pu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_u=new q,vu=new xo,yu=new q,bu=class extends gs{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Uo,this.projectionMatrix=new Uo,this.projectionMatrixInverse=new Uo,this.coordinateSystem=eo,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_u,vu,yu),yu.x===1&&yu.y===1&&yu.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_u,vu,yu.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(_u,vu,yu),yu.x===1&&yu.y===1&&yu.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_u,vu,yu.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xu=new q,Su=new K,Cu=new K,wu=class extends bu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ho*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ho*2*Math.atan(Math.tan(mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xu.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xu.x,xu.y).multiplyScalar(-e/xu.z),xu.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xu.x,xu.y).multiplyScalar(-e/xu.z)}getViewSize(e,t){return this.getViewBounds(e,Su,Cu),t.subVectors(Cu,Su)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(mo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Tu=class extends bu{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Eu=class extends gu{constructor(){super(new Tu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Du=class extends du{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(gs.DEFAULT_UP),this.updateMatrix(),this.target=new gs,this.shadow=new Eu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ou=-90,ku=1,Au=class extends gs{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new wu(Ou,ku,e,t);r.layers=this.layers,this.add(r);let i=new wu(Ou,ku,e,t);i.layers=this.layers,this.add(i);let a=new wu(Ou,ku,e,t);a.layers=this.layers,this.add(a);let o=new wu(Ou,ku,e,t);o.layers=this.layers,this.add(o);let s=new wu(Ou,ku,e,t);s.layers=this.layers,this.add(s);let c=new wu(Ou,ku,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ju=class extends wu{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Mu=`\\[\\]\\.:\\/`,Nu=RegExp(`[\\[\\]\\.:\\/]`,`g`),Pu=`[^\\[\\]\\.:\\/]`,Fu=`[^`+Mu.replace(`\\.`,``)+`]`,Iu=`((?:WC+[\\/:])*)`.replace(`WC`,Pu),Lu=`(WCOD+)?`.replace(`WCOD`,Fu),Ru=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Pu),zu=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Pu),Bu=RegExp(`^`+Iu+Lu+Ru+zu+`$`),Vu=[`material`,`materials`,`bones`,`map`],Hu=class{constructor(e,t,n){let r=n||Uu.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Uu=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Nu,``)}static parseTrackName(e){let t=Bu.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Vu.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){U(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){W(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){W(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){W(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){W(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){W(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;W(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Uu.Composite=Hu,Uu.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Uu.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Uu.prototype.GetterByBindingType=[Uu.prototype._getValue_direct,Uu.prototype._getValue_array,Uu.prototype._getValue_arrayElement,Uu.prototype._getValue_toArray],Uu.prototype.SetterByBindingTypeAndVersioning=[[Uu.prototype._setValue_direct,Uu.prototype._setValue_direct_setNeedsUpdate,Uu.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Uu.prototype._setValue_array,Uu.prototype._setValue_array_setNeedsUpdate,Uu.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Uu.prototype._setValue_arrayElement,Uu.prototype._setValue_arrayElement_setNeedsUpdate,Uu.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Uu.prototype._setValue_fromArray,Uu.prototype._setValue_fromArray_setNeedsUpdate,Uu.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wu=new Uo,Gu=class{constructor(e,t,n=0,r=1/0){this.ray=new Ac(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new es,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):W(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Wu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wu),this}intersectObject(e,t=!0,n=[]){return qu(e,this,n,t),n.sort(Ku),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)qu(e[r],this,n,t);return n.sort(Ku),n}};function Ku(e,t){return e.distance-t.distance}function qu(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)qu(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function Ju(e,t,n,r){let i=Yu(r);switch(n){case qi:return e*t;case Qi:return e*t/i.components*i.byteLength;case $i:return e*t/i.components*i.byteLength;case ea:return e*t*2/i.components*i.byteLength;case ta:return e*t*2/i.components*i.byteLength;case Ji:return e*t*3/i.components*i.byteLength;case Yi:return e*t*4/i.components*i.byteLength;case na:return e*t*4/i.components*i.byteLength;case ra:case ia:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case aa:case oa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ca:case ua:return Math.max(e,16)*Math.max(t,8)/4;case sa:case la:return Math.max(e,8)*Math.max(t,8)/2;case da:case fa:case ma:case ha:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case pa:case ga:case _a:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case va:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ya:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ba:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case xa:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case wa:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ea:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Da:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ka:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Aa:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ja:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ma:case Na:case Pa:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Fa:case Ia:return Math.ceil(e/4)*Math.ceil(t/4)*8;case La:case Ra:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Yu(e){switch(e){case Pi:case Fi:return{byteLength:1,components:1};case Li:case Ii:case Vi:return{byteLength:2,components:1};case Hi:case Ui:return{byteLength:2,components:4};case zi:case Ri:case Bi:return{byteLength:4,components:1};case Gi:case Ki:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?U(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Xu(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Zu(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Q={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},$={common:{diffuse:{value:new X(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new J}},envmap:{envMap:{value:null},envMapRotation:{value:new J},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new J}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new J}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new J},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new J},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new J},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new J}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new J}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new J}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new X(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new X(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0},uvTransform:{value:new J}},sprite:{diffuse:{value:new X(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}}},Qu={basic:{uniforms:Pl([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:Q.meshbasic_vert,fragmentShader:Q.meshbasic_frag},lambert:{uniforms:Pl([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new X(0)},envMapIntensity:{value:1}}]),vertexShader:Q.meshlambert_vert,fragmentShader:Q.meshlambert_frag},phong:{uniforms:Pl([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new X(0)},specular:{value:new X(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Q.meshphong_vert,fragmentShader:Q.meshphong_frag},standard:{uniforms:Pl([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new X(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag},toon:{uniforms:Pl([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new X(0)}}]),vertexShader:Q.meshtoon_vert,fragmentShader:Q.meshtoon_frag},matcap:{uniforms:Pl([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:Q.meshmatcap_vert,fragmentShader:Q.meshmatcap_frag},points:{uniforms:Pl([$.points,$.fog]),vertexShader:Q.points_vert,fragmentShader:Q.points_frag},dashed:{uniforms:Pl([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Q.linedashed_vert,fragmentShader:Q.linedashed_frag},depth:{uniforms:Pl([$.common,$.displacementmap]),vertexShader:Q.depth_vert,fragmentShader:Q.depth_frag},normal:{uniforms:Pl([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:Q.meshnormal_vert,fragmentShader:Q.meshnormal_frag},sprite:{uniforms:Pl([$.sprite,$.fog]),vertexShader:Q.sprite_vert,fragmentShader:Q.sprite_frag},background:{uniforms:{uvTransform:{value:new J},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Q.background_vert,fragmentShader:Q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new J}},vertexShader:Q.backgroundCube_vert,fragmentShader:Q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Q.cube_vert,fragmentShader:Q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Q.equirect_vert,fragmentShader:Q.equirect_frag},distance:{uniforms:Pl([$.common,$.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Q.distance_vert,fragmentShader:Q.distance_frag},shadow:{uniforms:Pl([$.lights,$.fog,{color:{value:new X(0)},opacity:{value:1}}]),vertexShader:Q.shadow_vert,fragmentShader:Q.shadow_frag}};Qu.physical={uniforms:Pl([Qu.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new J},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new J},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new J},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new J},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new J},sheen:{value:0},sheenColor:{value:new X(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new J},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new J},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new J},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new J},attenuationDistance:{value:0},attenuationColor:{value:new X(0)},specularColor:{value:new X(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new J},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new J},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new J}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag};var $u={r:0,b:0,g:0},ed=new Uo,td=new J;td.set(-1,0,0,0,1,0,0,0,1);function nd(e,t,n,r,i,a){let o=new X(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Z(new Cl(1,1,1),new Vl({name:`BackgroundCubeMaterial`,uniforms:Nl(Qu.backgroundCube.uniforms),vertexShader:Qu.backgroundCube.vertexShader,fragmentShader:Qu.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ed.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(td),l.material.toneMapped=Y.getTransfer(i.colorSpace)!==Xa,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Z(new jl(2,2),new Vl({name:`BackgroundMaterial`,uniforms:Nl(Qu.background.uniforms),vertexShader:Qu.background.vertexShader,fragmentShader:Qu.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Y.getTransfer(i.colorSpace)!==Xa,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB($u,Ll(e)),n.buffers.color.setClear($u.r,$u.g,$u.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function rd(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function id(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function ad(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(U(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&U(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function od(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Cc,s=new J,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var sd=4,cd=6,ld=20,ud=256,dd=new Tu,fd=new X,pd=null,md=0,hd=0,gd=!1,_d=new q,vd=new q,yd=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=_d}=i;pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pd,md,hd),this._renderer.xr.enabled=gd,e.scissorTest=!1,Sd(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ji,minFilter:ji,generateMipmaps:!1,type:Vi,format:Yi,colorSpace:Ja,depthBuffer:!1},r=xd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=bd(r)),this._blurMaterial=wd(r,e,t),this._ggxMaterial=Cd(r,e,t)}return r}_compileMaterial(e){let t=new Z(new yc,e);this._renderer.compile(t,dd)}_sceneToCubeUV(e,t,n,r,i){let a=new wu(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(fd),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Z(new Cl,new jc({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(fd),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Sd(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Td());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Sd(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,dd)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-sd?n-d+sd:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Sd(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,dd),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Sd(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,dd)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Sd(t,3*l*(r>this._lodMax-sd?r-this._lodMax+sd:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,dd)}};function bd(e){let t=[],n=[],r=e,i=e-sd+1+cd;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?vd.set(1,r,n):e===1?vd.set(-n,1,-r):e===2?vd.set(-n,r,1):e===3?vd.set(-1,r,-n):e===4?vd.set(-n,-1,r):vd.set(n,r,-1),vd.toArray(l,(e*6+t)*3)}}let u=new yc;u.setAttribute(`position`,new ic(c,3)),u.setAttribute(`outputDirection`,new ic(l,3)),n.push(new Z(u,null)),r>sd&&r--}return{lodMeshes:n,sizeLods:t}}function xd(e,t,n){let r=new Bo(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Sd(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Cd(e,t,n){return new Vl({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:ud,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dd(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function wd(e,t,n){return new Vl({name:`SphericalGaussianBlur`,defines:{SAMPLES:ld,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Dd(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Td(){return new Vl({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Dd(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ed(){return new Vl({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Dd(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Od=class extends Bo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new vl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cl(5,5,5),i=new Vl({name:`CubemapFromEquirect`,uniforms:Nl(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Z(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=ji),new Au(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function kd(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Od(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new yd(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new yd(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ad(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&co(`WebGLRenderer: `+e+` extension not supported.`),t}}}function jd(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?oc:ac)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Md(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Nd(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:W(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Pd(e,t,n){let r=new WeakMap,i=new Ro;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Vo(h,p,m,u);g.type=Bi,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new K(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Fd(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Id={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Ld(e,t,n,r,i,a){let o=new Bo(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new yc;l.setAttribute(`position`,new sc([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new sc([0,2,0,0,2,0],2));let u=new Hl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Z(l,u),f=new Tu(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new Bo(t,n,{type:Vi,depthBuffer:!1,stencilBuffer:!1}),c=new Bo(t,n,{type:Vi,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Y.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Id[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Rd=new Lo,zd=new bl(1,1),Bd=new Vo,Vd=new Ho,Hd=new vl,Ud=[],Wd=[],Gd=new Float32Array(16),Kd=new Float32Array(9),qd=new Float32Array(4);function Jd(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ud[i];if(a===void 0&&(a=new Float32Array(i),Ud[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Yd(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Xd(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Zd(e,t){let n=Wd[t];n===void 0&&(n=new Int32Array(t),Wd[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Qd(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function $d(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Yd(n,t))return;e.uniform2fv(this.addr,t),Xd(n,t)}}function ef(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Yd(n,t))return;e.uniform3fv(this.addr,t),Xd(n,t)}}function tf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Yd(n,t))return;e.uniform4fv(this.addr,t),Xd(n,t)}}function nf(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Yd(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Xd(n,t)}else{if(Yd(n,r))return;qd.set(r),e.uniformMatrix2fv(this.addr,!1,qd),Xd(n,r)}}function rf(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Yd(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Xd(n,t)}else{if(Yd(n,r))return;Kd.set(r),e.uniformMatrix3fv(this.addr,!1,Kd),Xd(n,r)}}function af(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Yd(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Xd(n,t)}else{if(Yd(n,r))return;Gd.set(r),e.uniformMatrix4fv(this.addr,!1,Gd),Xd(n,r)}}function of(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function sf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Yd(n,t))return;e.uniform2iv(this.addr,t),Xd(n,t)}}function cf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Yd(n,t))return;e.uniform3iv(this.addr,t),Xd(n,t)}}function lf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Yd(n,t))return;e.uniform4iv(this.addr,t),Xd(n,t)}}function uf(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function df(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Yd(n,t))return;e.uniform2uiv(this.addr,t),Xd(n,t)}}function ff(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Yd(n,t))return;e.uniform3uiv(this.addr,t),Xd(n,t)}}function pf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Yd(n,t))return;e.uniform4uiv(this.addr,t),Xd(n,t)}}function mf(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(zd.compareFunction=n.isReversedDepthBuffer()?518:515,a=zd):a=Rd,n.setTexture2D(t||a,i)}function hf(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Vd,i)}function gf(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Hd,i)}function _f(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Bd,i)}function vf(e){switch(e){case 5126:return Qd;case 35664:return $d;case 35665:return ef;case 35666:return tf;case 35674:return nf;case 35675:return rf;case 35676:return af;case 5124:case 35670:return of;case 35667:case 35671:return sf;case 35668:case 35672:return cf;case 35669:case 35673:return lf;case 5125:return uf;case 36294:return df;case 36295:return ff;case 36296:return pf;case 35678:case 36198:case 36298:case 36306:case 35682:return mf;case 35679:case 36299:case 36307:return hf;case 35680:case 36300:case 36308:case 36293:return gf;case 36289:case 36303:case 36311:case 36292:return _f}}function yf(e,t){e.uniform1fv(this.addr,t)}function bf(e,t){let n=Jd(t,this.size,2);e.uniform2fv(this.addr,n)}function xf(e,t){let n=Jd(t,this.size,3);e.uniform3fv(this.addr,n)}function Sf(e,t){let n=Jd(t,this.size,4);e.uniform4fv(this.addr,n)}function Cf(e,t){let n=Jd(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function wf(e,t){let n=Jd(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Tf(e,t){let n=Jd(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ef(e,t){e.uniform1iv(this.addr,t)}function Df(e,t){e.uniform2iv(this.addr,t)}function Of(e,t){e.uniform3iv(this.addr,t)}function kf(e,t){e.uniform4iv(this.addr,t)}function Af(e,t){e.uniform1uiv(this.addr,t)}function jf(e,t){e.uniform2uiv(this.addr,t)}function Mf(e,t){e.uniform3uiv(this.addr,t)}function Nf(e,t){e.uniform4uiv(this.addr,t)}function Pf(e,t,n){let r=this.cache,i=t.length,a=Zd(n,i);Yd(r,a)||(e.uniform1iv(this.addr,a),Xd(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?zd:Rd;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Ff(e,t,n){let r=this.cache,i=t.length,a=Zd(n,i);Yd(r,a)||(e.uniform1iv(this.addr,a),Xd(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Vd,a[e])}function If(e,t,n){let r=this.cache,i=t.length,a=Zd(n,i);Yd(r,a)||(e.uniform1iv(this.addr,a),Xd(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Hd,a[e])}function Lf(e,t,n){let r=this.cache,i=t.length,a=Zd(n,i);Yd(r,a)||(e.uniform1iv(this.addr,a),Xd(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Bd,a[e])}function Rf(e){switch(e){case 5126:return yf;case 35664:return bf;case 35665:return xf;case 35666:return Sf;case 35674:return Cf;case 35675:return wf;case 35676:return Tf;case 5124:case 35670:return Ef;case 35667:case 35671:return Df;case 35668:case 35672:return Of;case 35669:case 35673:return kf;case 5125:return Af;case 36294:return jf;case 36295:return Mf;case 36296:return Nf;case 35678:case 36198:case 36298:case 36306:case 35682:return Pf;case 35679:case 36299:case 36307:return Ff;case 35680:case 36300:case 36308:case 36293:return If;case 36289:case 36303:case 36311:case 36292:return Lf}}var zf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vf(t.type)}},Bf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rf(t.type)}},Vf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Hf=/(\w+)(\])?(\[|\.)?/g;function Uf(e,t){e.seq.push(t),e.map[t.id]=t}function Wf(e,t,n){let r=e.name,i=r.length;for(Hf.lastIndex=0;;){let a=Hf.exec(r),o=Hf.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Uf(n,l===void 0?new zf(s,e,t):new Bf(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Vf(s),Uf(n,e)),n=e}}}var Gf=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Wf(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Kf(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var qf=37297,Jf=0;function Yf(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Xf=new J;function Zf(e){Y._getMatrix(Xf,Y.workingColorSpace,e);let t=`mat3( ${Xf.elements.map(e=>e.toFixed(4))} )`;switch(Y.getTransfer(e)){case Ya:return[t,`LinearTransferOETF`];case Xa:return[t,`sRGBTransferOETF`];default:return U(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Qf(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Yf(e.getShaderSource(t),r)}return i}function $f(e,t){let n=Zf(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var ep={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function tp(e,t){let n=ep[t];return n===void 0?(U(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var np=new q;function rp(){return Y.getLuminanceCoefficients(np),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${np.x.toFixed(4)}, ${np.y.toFixed(4)}, ${np.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ip(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(sp).join(`
`)}function ap(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function op(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function sp(e){return e!==``}function cp(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lp(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var up=/^[ \t]*#include +<([\w\d./]+)>/gm;function dp(e){return e.replace(up,pp)}var fp=new Map;function pp(e,t){let n=Q[t];if(n===void 0){let e=fp.get(t);if(e!==void 0)n=Q[e],U(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return dp(n)}var mp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hp(e){return e.replace(mp,gp)}function gp(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function _p(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var vp={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function yp(e){return vp[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var bp={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function xp(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:bp[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Sp={302:`ENVMAP_MODE_REFRACTION`};function Cp(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Sp[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var wp={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Tp(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:wp[e.combine]||`ENVMAP_BLENDING_NONE`}function Ep(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Dp(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=yp(n),l=xp(n),u=Cp(n),d=Tp(n),f=Ep(n),p=ip(n),m=ap(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(sp).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(sp).join(`
`),_.length>0&&(_+=`
`)):(g=[_p(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(sp).join(`
`),_=[_p(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Q.tonemapping_pars_fragment,n.toneMapping===0?``:tp(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Q.colorspace_pars_fragment,$f(`linearToOutputTexel`,n.outputColorSpace),rp(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(sp).join(`
`)),o=dp(o),o=cp(o,n),o=lp(o,n),s=dp(s),s=cp(s,n),s=lp(s,n),o=hp(o),s=hp(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Kf(i,i.VERTEX_SHADER,y),S=Kf(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Qf(i,x,`vertex`),n=Qf(i,S,`fragment`);W(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):U(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Gf(i,h),T=op(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,qf)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Jf++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Op=0,kp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ap(e),t.set(e,n)),n}},Ap=class{constructor(e){this.id=Op++,this.code=e,this.usedTimes=0}};function jp(e){return e===1030||e===37490||e===36285}function Mp(e,t,n,r,i,a){let o=new es,s=new kp,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&U(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Qu[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),M=h.isInstancedMesh===!0,N=h.isBatchedMesh===!0,P=!!i.map,te=!!i.matcap,ne=!!x,re=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,F=!!i.normalMap,oe=!!i.displacementMap,I=!!i.emissiveMap,L=!!i.metalnessMap,se=!!i.roughnessMap,ce=i.anisotropy>0,le=i.clearcoat>0,R=i.dispersion>0,ue=i.retroreflectivity>0,de=i.iridescence>0,fe=i.sheen>0,pe=i.transmission>0,me=ce&&!!i.anisotropyMap,he=le&&!!i.clearcoatMap,ge=le&&!!i.clearcoatNormalMap,_e=le&&!!i.clearcoatRoughnessMap,ve=de&&!!i.iridescenceMap,z=de&&!!i.iridescenceThicknessMap,ye=fe&&!!i.sheenColorMap,be=fe&&!!i.sheenRoughnessMap,xe=!!i.specularMap,B=!!i.specularColorMap,Se=!!i.specularIntensityMap,V=pe&&!!i.transmissionMap,H=pe&&!!i.thicknessMap,Ce=!!i.gradientMap,we=!!i.alphaMap,Te=i.alphaTest>0,Ee=!!i.alphaHash,De=!!i.extensions,Oe=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Oe=e.toneMapping);let ke={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:N,batchingColor:N&&h._colorsTexture!==null,instancing:M,instancingColor:M&&h.instanceColor!==null,instancingMorph:M&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Y.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:te,envMap:ne,envMapMode:ne&&x.mapping,envMapCubeUVHeight:S,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:F,displacementMap:oe,emissiveMap:I,normalMapObjectSpace:F&&i.normalMapType===1,normalMapTangentSpace:F&&i.normalMapType===0,packedNormalMap:F&&i.normalMapType===0&&jp(i.normalMap.format),metalnessMap:L,roughnessMap:se,anisotropy:ce,anisotropyMap:me,clearcoat:le,clearcoatMap:he,clearcoatNormalMap:ge,clearcoatRoughnessMap:_e,dispersion:R,retroreflection:ue,iridescence:de,iridescenceMap:ve,iridescenceThicknessMap:z,sheen:fe,sheenColorMap:ye,sheenRoughnessMap:be,specularMap:xe,specularColorMap:B,specularIntensityMap:Se,transmission:pe,transmissionMap:V,thicknessMap:H,gradientMap:Ce,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:we,alphaTest:Te,alphaHash:Ee,combine:i.combine,mapUv:P&&m(i.map.channel),aoMapUv:re&&m(i.aoMap.channel),lightMapUv:ie&&m(i.lightMap.channel),bumpMapUv:ae&&m(i.bumpMap.channel),normalMapUv:F&&m(i.normalMap.channel),displacementMapUv:oe&&m(i.displacementMap.channel),emissiveMapUv:I&&m(i.emissiveMap.channel),metalnessMapUv:L&&m(i.metalnessMap.channel),roughnessMapUv:se&&m(i.roughnessMap.channel),anisotropyMapUv:me&&m(i.anisotropyMap.channel),clearcoatMapUv:he&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ge&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:z&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:be&&m(i.sheenRoughnessMap.channel),specularMapUv:xe&&m(i.specularMap.channel),specularColorMapUv:B&&m(i.specularColorMap.channel),specularIntensityMapUv:Se&&m(i.specularIntensityMap.channel),transmissionMapUv:V&&m(i.transmissionMap.channel),thicknessMapUv:H&&m(i.thicknessMap.channel),alphaMapUv:we&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(F||ce),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(P||we),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&F===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Oe,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&Y.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:I&&i.emissiveMap.isVideoTexture===!0&&Y.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:De&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(De&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Qu[t];n=Rl.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Dp(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Np(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Pp(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Fp(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ip(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Pp),r.length>1&&r.sort(t||Fp),i.length>1&&i.sort(t||Fp)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Lp(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Ip,e.set(t,[i])):n>=r.length?(i=new Ip,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Rp(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new q,color:new X};break;case`SpotLight`:n={position:new q,direction:new q,color:new X,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new q,color:new X,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new q,skyColor:new X,groundColor:new X};break;case`RectAreaLight`:n={color:new X,position:new q,halfWidth:new q,halfHeight:new q}}return e[t.id]=n,n}}}function zp(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Bp=0;function Vp(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Hp(e){let t=new Rp,n=zp(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new q);let i=new q,a=new Uo,o=new Uo;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Vp);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=$.LTC_FLOAT_1,r.rectAreaLTC2=$.LTC_FLOAT_2):(r.rectAreaLTC1=$.LTC_HALF_1,r.rectAreaLTC2=$.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Bp++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Up(e){let t=new Hp(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Wp(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Up(e),t.set(n,[a])):r>=i.length?(a=new Up(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Gp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kp=`uniform sampler2D shadow_pass;
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
}`,qp=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],Jp=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Yp=new Uo,Xp=new q,Zp=new q;function Qp(e,t,n){let r=new il,i=new K,a=new K,o=new Ro,s=new Wl,c=new Gl,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Vl({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:Gp,fragmentShader:Kp}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new yc;m.setAttribute(`position`,new ic(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Z(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(U(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){U(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){U(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Bo(i.x,i.y,{format:ea,type:Vi,minFilter:ji,magFilter:ji,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new bl(i.x,i.y,Bi),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Xi,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Oi,d.map.depthTexture.magFilter=Oi}else l.isPointLight?(d.map=new Od(i.x),d.map.depthTexture=new xl(i.x,zi)):(d.map=new Bo(i.x,i.y),d.map.depthTexture=new bl(i.x,i.y,zi)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Xi,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=ji,d.map.depthTexture.magFilter=ji):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Oi,d.map.depthTexture.magFilter=Oi);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Xp.setFromMatrixPosition(l.matrixWorld),e.position.copy(Xp),Zp.copy(e.position),Zp.add(qp[t]),e.up.copy(Jp[t]),e.lookAt(Zp),e.updateMatrixWorld(),n.makeTranslation(-Xp.x,-Xp.y,-Xp.z),Yp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Yp,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Bo(i.x,i.y,{format:ea,type:Vi}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function $p(e,t){function n(){let t=!1,n=new Ro,r=null,i=new Ro(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?L(e.DEPTH_TEST):se(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=uo[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?L(e.STENCIL_TEST):se(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new X(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(P)[1]),M=N>=1);let te=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new Ro().fromArray(re),F=new Ro().fromArray(ie);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let I={};I[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),I[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),I[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),I[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),L(e.DEPTH_TEST),o.setFunc(3),me(!1),he(1),L(e.CULL_FACE),fe(0);function L(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function se(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ce(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function le(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function R(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ue={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ue[103]=e.MIN,ue[104]=e.MAX;let de={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function fe(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(se(e.BLEND),g=!1);else if(g===!1&&(L(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:W(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:W(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:W(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:W(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ue[n],ue[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(de[r],de[i],de[o],de[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function pe(t,n){t.side===2?se(e.CULL_FACE):L(e.CULL_FACE);let r=t.side===1;n&&(r=!r),me(r),t.blending===1&&t.transparent===!1?fe(0):fe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),_e(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?L(e.SAMPLE_ALPHA_TO_COVERAGE):se(e.SAMPLE_ALPHA_TO_COVERAGE)}function me(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function he(t){t===0?se(e.CULL_FACE):(L(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ge(t){t!==k&&(M&&e.lineWidth(t),k=t)}function _e(t,n,r){t?(L(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):se(e.POLYGON_OFFSET_FILL)}function ve(t){t?L(e.SCISSOR_TEST):se(e.SCISSOR_TEST)}function z(t){t===void 0&&(t=e.TEXTURE0+ee-1),te!==t&&(e.activeTexture(t),te=t)}function ye(t,n,r){r===void 0&&(r=te===null?e.TEXTURE0+ee-1:te);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(te!==r&&(e.activeTexture(r),te=r),e.bindTexture(t,n||I[t]),i.type=t,i.texture=n)}function be(){let t=ne[te];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function xe(){try{e.compressedTexImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function B(){try{e.compressedTexImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Se(){try{e.texSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function V(){try{e.texSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function H(){try{e.compressedTexSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ce(){try{e.compressedTexSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function we(){try{e.texStorage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Te(){try{e.texStorage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ee(){try{e.texImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function De(){try{e.texImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Oe(t){return d[t]===void 0?e.getParameter(t):d[t]}function ke(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ae(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function je(t){F.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),F.copy(t))}function Me(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ne(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Pe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},te=null,ne={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new X(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ae.set(0,0,e.canvas.width,e.canvas.height),F.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:L,disable:se,bindFramebuffer:ce,drawBuffers:le,useProgram:R,setBlending:fe,setMaterial:pe,setFlipSided:me,setCullFace:he,setLineWidth:ge,setPolygonOffset:_e,setScissorTest:ve,activeTexture:z,bindTexture:ye,unbindTexture:be,compressedTexImage2D:xe,compressedTexImage3D:B,texImage2D:Ee,texImage3D:De,pixelStorei:ke,getParameter:Oe,updateUBOMapping:Me,uniformBlockBinding:Ne,texStorage2D:we,texStorage3D:Te,texSubImage2D:Se,texSubImage3D:V,compressedTexSubImage2D:H,compressedTexSubImage3D:Ce,scissor:Ae,viewport:je,reset:Pe}}function em(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new K,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):ro(`canvas`)}function g(e,t,n){let r=1,i=xe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),U(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&U(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];U(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||U(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ya:Y.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,U(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function ee(){let e=O;return e>=i.maxTextures&&U(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function M(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function N(t,i){let a=r.get(t);if(t.isVideoTexture&&ye(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)U(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)U(`WebGLRenderer: Texture marked for update but image is incomplete`);else{se(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function P(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?se(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function te(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?se(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ne(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?ce(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let re={[Ti]:e.REPEAT,[Ei]:e.CLAMP_TO_EDGE,[Di]:e.MIRRORED_REPEAT},ie={[Oi]:e.NEAREST,[ki]:e.NEAREST_MIPMAP_NEAREST,[Ai]:e.NEAREST_MIPMAP_LINEAR,[ji]:e.LINEAR,[Mi]:e.LINEAR_MIPMAP_NEAREST,[Ni]:e.LINEAR_MIPMAP_LINEAR},ae={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function F(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&U(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,re[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,re[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,re[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ie[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ie[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ae[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function oe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=M(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function I(e,t,n){return Math.floor(Math.floor(e/n)/t)}function L(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=I(n.start,r.width,4),c=I(t.start,r.width,4);n.start<=i+1&&a===c&&I(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function se(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=oe(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Y.getPrimaries(Y.workingColorSpace),r=o.colorSpace===``?null:Y.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=be(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);F(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===Zi,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&L(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=Ju(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Ju(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=xe(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=xe(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ce(t,o,s){if(o.image.length!==6)return;let c=oe(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Y.getPrimaries(Y.workingColorSpace),r=o.colorSpace===``?null:Y.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=be(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);F(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=xe(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function le(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),z(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,ve(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function R(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;z(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ve(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ve(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);z(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ve(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ve(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ue(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),F(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else N(i.depthTexture,0);let u=l.__webglTexture,d=ve(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)z(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)z(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function de(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)ue(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ue(i.__webglFramebuffer[0],t,0):ue(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),R(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),R(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function fe(t,n,i){let a=r.get(t);n!==void 0&&le(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&de(t)}function pe(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&z(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=ve(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),R(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),F(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)le(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else le(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),F(c,a),le(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),F(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)le(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else le(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&de(t)}function me(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let he=[],ge=[];function _e(t){if(t.samples>0){if(z(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(he.length=0,ge.length=0,he.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(he.push(l),ge.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ge)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,he))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function ve(e){return Math.min(i.maxSamples,e.samples)}function z(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function ye(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function be(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Y.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&U(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):W(`WebGLTextures: Unsupported texture color space:`,n)),t}function xe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ee,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=N,this.setTexture2DArray=P,this.setTexture3D=te,this.setTextureCube=ne,this.rebindTextures=fe,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=le,this.useMultisampledRTT=z,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function tm(e,t){function n(n,r=``){let i,a=Y.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var nm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rm=`
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

}`,im=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Sl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Vl({vertexShader:nm,fragmentShader:rm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Z(new jl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},am=class extends fo{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new im,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new K,C=null,w=null,T=new wu;T.viewport=new Ro;let E=new wu;E.viewport=new Ro;let D=[T,E],O=new ju,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new ys,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new ys,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new ys,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,F.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Zi:Xi,a=_.stencil?Wi:zi);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Bo(d.textureWidth,d.textureHeight,{format:Yi,type:Pi,depthTexture:new bl(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Bo(f.framebufferWidth,f.framebufferHeight,{format:Yi,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),F.setContext(r),F.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let N=new q,P=new q;function te(e,t,n){N.setFromMatrixPosition(t.matrixWorld),P.setFromMatrixPosition(n.matrixWorld);let r=N.distanceTo(P),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ne(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ne(O,i);for(let e=0;e<a.length;e++)ne(a[e],i);a.length===2?te(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),re(e,O,i)};function re(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ho*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ie=null;function ae(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new wu,o.layers.enable(n),o.viewport=new Ro,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Sl,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ie&&ie(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let F=new Xu;F.setAnimationLoop(ae),this.setAnimationLoop=function(e){ie=e},this.dispose=function(){}}},om=new Uo,sm=new J;sm.set(-1,0,0,0,1,0,0,0,1);function cm(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ll(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(om.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(sm),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function lm(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return W(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?U(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):U(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var um=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),dm=null;function fm(){return dm===null&&(dm=new Gc(um,16,16,ea,Vi),dm.name=`DFG_LUT`,dm.minFilter=ji,dm.magFilter=ji,dm.wrapS=Ei,dm.wrapT=Ei,dm.generateMipmaps=!1,dm.needsUpdate=!0),dm}var pm=class{constructor(e={}){let{canvas:t=io(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Pi}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([na,ta,$i]),g=new Set([Pi,zi,Li,Wi,Hi,Ui]),_=new Uint32Array(4),v=new Int32Array(4),y=new q,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=qa;let j=0,ee=0,M=null,N=-1,P=null,te=new Ro,ne=new Ro,re=null,ie=new X(0),ae=0,F=t.width,oe=t.height,I=1,L=null,se=null,ce=new Ro(0,0,F,oe),le=new Ro(0,0,F,oe),R=!1,ue=new il,de=!1,fe=!1,pe=new Uo,me=new q,he=new Ro,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_e=!1;function ve(){return M===null?I:1}let z=n;function ye(e,n){return t.getContext(e,n)}let be,xe,B,Se,V,H,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,He,!1),t.addEventListener(`webglcontextrestored`,Ue,!1),t.addEventListener(`webglcontextcreationerror`,We,!1),z===null){let t=`webgl2`;if(z=ye(t,e),z===null)throw ye(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Be()}catch(e){throw t.removeEventListener(`webglcontextlost`,He,!1),t.removeEventListener(`webglcontextrestored`,Ue,!1),t.removeEventListener(`webglcontextcreationerror`,We,!1),W(`WebGLRenderer: `+e.message),e}function Be(){be=new Ad(z),be.init(),Le=new tm(z,be),xe=new ad(z,be,e,Le),B=new $p(z,be),xe.reversedDepthBuffer&&d&&B.buffers.depth.setReversed(!0),O=z.createFramebuffer(),k=z.createFramebuffer(),A=z.createFramebuffer(),Se=new Nd(z),V=new Np,H=new em(z,be,B,V,xe,Le,Se),Ce=new kd(T),we=new Zu(z),Re=new rd(z,we),Te=new jd(z,we,Se,Re),Ee=new Fd(z,Te,we,Re,Se),Pe=new Pd(z,xe,H),je=new od(V),De=new Mp(T,Ce,be,xe,Re,je),Oe=new cm(T,V),ke=new Lp,Ae=new Wp(be),Ne=new nd(T,Ce,B,Ee,p,s),Me=new Qp(T,Ee,xe),ze=new lm(z,Se,xe,B),Fe=new id(z,be,Se),Ie=new Md(z,be,Se),Se.programs=De.programs,T.capabilities=xe,T.extensions=be,T.properties=V,T.renderLists=ke,T.shadowMap=Me,T.state=B,T.info=Se}m!==1009&&(w=new Ld(m,t.width,t.height,o,r,i));let Ve=new am(T,z);this.xr=Ve,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let e=be.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=be.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(e){e!==void 0&&(I=e,this.setSize(F,oe,!1))},this.getSize=function(e){return e.set(F,oe)},this.setSize=function(e,n,r=!0){Ve.isPresenting?U(`WebGLRenderer: Can't change size while VR device is presenting.`):(F=e,oe=n,t.width=Math.floor(e*I),t.height=Math.floor(n*I),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(F*I,oe*I).floor()},this.setDrawingBufferSize=function(e,n,r){F=e,oe=n,I=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)W(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){U(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(te)},this.getViewport=function(e){return e.copy(ce)},this.setViewport=function(e,t,n,r){e.isVector4?ce.set(e.x,e.y,e.z,e.w):ce.set(e,t,n,r),B.viewport(te.copy(ce).multiplyScalar(I).round())},this.getScissor=function(e){return e.copy(le)},this.setScissor=function(e,t,n,r){e.isVector4?le.set(e.x,e.y,e.z,e.w):le.set(e,t,n,r),B.scissor(ne.copy(le).multiplyScalar(I).round())},this.getScissorTest=function(){return R},this.setScissorTest=function(e){B.setScissorTest(R=e)},this.setOpaqueSort=function(e){L=e},this.setTransparentSort=function(e){se=e},this.getClearColor=function(e){return e.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=Ne.getClearColor(),r=Ne.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,z.clearBufferuiv(z.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,z.clearBufferiv(z.COLOR,0,v))}else r|=z.COLOR_BUFFER_BIT}t&&(r|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&z.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,He,!1),t.removeEventListener(`webglcontextrestored`,Ue,!1),t.removeEventListener(`webglcontextcreationerror`,We,!1),Ne.dispose(),ke.dispose(),Ae.dispose(),V.dispose(),Ce.dispose(),Ee.dispose(),Re.dispose(),ze.dispose(),De.dispose(),Ve.dispose(),Ve.removeEventListener(`sessionstart`,Ze),Ve.removeEventListener(`sessionend`,Qe),$e.stop()};function He(e){e.preventDefault(),oo(`WebGLRenderer: Context Lost.`),E=!0}function Ue(){oo(`WebGLRenderer: Context Restored.`),E=!1;let e=Se.autoReset,t=Me.enabled,n=Me.autoUpdate,r=Me.needsUpdate,i=Me.type;Be(),Se.autoReset=e,Me.enabled=t,Me.autoUpdate=n,Me.needsUpdate=r,Me.type=i}function We(e){W(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ge(e){let t=e.target;t.removeEventListener(`dispose`,Ge),Ke(t)}function Ke(e){qe(e),V.remove(e)}function qe(e){let t=V.get(e).programs;t!==void 0&&(t.forEach(function(e){De.releaseProgram(e)}),e.isShaderMaterial&&De.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ge);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=lt(e,t,n,r,i);B.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Te.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Re.setup(i,r,s,n,c);let h,g=Fe;if(c!==null&&(h=we.get(c),g=Ie,g.setIndex(h)),i.isMesh)r.wireframe===!0?(B.setLineWidth(r.wireframeLinewidth*ve()),g.setMode(z.LINES)):g.setMode(z.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),B.setLineWidth(e*ve()),i.isLineSegments?g.setMode(z.LINES):i.isLineLoop?g.setMode(z.LINE_LOOP):g.setMode(z.LINE_STRIP)}else i.isPoints?g.setMode(z.POINTS):i.isSprite&&g.setMode(z.TRIANGLES);if(i.isBatchedMesh){if(be.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?we.get(c).bytesPerElement:1,o=V.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(z,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Je(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),de===!0&&je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,at(e,t,r),e.side=0,e.needsUpdate=!0,at(e,t,r),e.side=2):at(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Ae.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),fe=this.localClippingEnabled,de=je.init(this.clippingPlanes,fe),de===!0&&je.setGlobalState(this.clippingPlanes,t),D!==null&&Me.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Je(o,n,t,e),r.add(o)}else Je(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=V.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}be.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Ye=null;function Xe(e){Ye&&Ye(e)}function Ze(){$e.stop()}function Qe(){$e.start()}let $e=new Xu;$e.setAnimationLoop(Xe),typeof self<`u`&&$e.setContext(self),this.setAnimationLoop=function(e){Ye=e,Ve.setAnimationLoop(e),e===null?$e.stop():$e.start()},Ve.addEventListener(`sessionstart`,Ze),Ve.addEventListener(`sessionend`,Qe),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){W(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Ve.enabled===!0&&Ve.isPresenting===!0,r=w!==null&&(M===null||n)&&w.begin(T,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(t),t=Ve.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,M),x=Ae.get(e,C.length),x.init(t),x.state.textureUnits=H.getTextureUnits(),C.push(x),pe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ue.setFromProjectionMatrix(pe,eo,t.reversedDepth),fe=this.localClippingEnabled,de=je.init(this.clippingPlanes,fe),b=ke.get(e,S.length),b.init(),S.push(b),Ve.enabled===!0&&Ve.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&et(e,t,-1/0,T.sortObjects)}et(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(L,se),_e=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,_e&&Ne.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),de===!0&&je.beginShadows();let i=x.state.shadowsArray;if(Me.render(i,e,t),de===!0&&je.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];nt(n,r,e,a)}_e&&Ne.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];tt(b,e,n,n.viewport)}}else r.length>0&&nt(n,r,e,t),_e&&Ne.render(e),tt(b,e,t)}M!==null&&ee===0&&(H.updateMultisampleRenderTarget(M),H.updateRenderTargetMipmap(M)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Re.resetDefaultState(),N=-1,P=null,C.pop(),C.length>0?(x=C[C.length-1],H.setTextureUnits(x.state.textureUnits),de===!0&&je.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function et(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(ue)){r&&he.setFromMatrixPosition(e.matrixWorld).applyMatrix4(pe);let i=Ee.update(e),a=e.material;a.visible&&b.push(e,i,a,n,he.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(ue))){let i=Ee.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),he.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),he.copy(e.boundingSphere.center)),he.applyMatrix4(e.matrixWorld).applyMatrix4(pe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,he.z,s,t)}}else a.visible&&b.push(e,i,a,n,he.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)et(i[e],t,n,r)}function tt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),de===!0&&je.setGlobalState(T.clippingPlanes,n),r&&B.viewport(te.copy(r)),i.length>0&&rt(i,t,n),a.length>0&&rt(a,t,n),o.length>0&&rt(o,t,n),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function nt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=be.has(`EXT_color_buffer_half_float`)||be.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Bo(1,1,{generateMipmaps:!0,type:e?Vi:Pi,minFilter:Ni,samples:Math.max(4,xe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Y.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||te;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ie),ae=T.getClearAlpha(),ae<1&&T.setClearColor(16777215,.5),T.clear(),_e&&Ne.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),de===!0&&je.setGlobalState(T.clippingPlanes,r),rt(e,n,r),H.updateMultisampleRenderTarget(a),H.updateRenderTargetMipmap(a),be.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,it(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(H.updateMultisampleRenderTarget(a),H.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ie,ae),d!==void 0&&(r.viewport=d),T.toneMapping=u}function rt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&it(o,t,n,s,l,c)}}function it(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function at(e,t,n){t.isScene!==!0&&(t=ge);let r=V.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=De.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=De.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ce.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ge),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return st(e,s),d}else s.uniforms=De.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=De.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=je.uniform),st(e,s),r.needsLights=dt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Gf.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function st(e,t){let n=V.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ct(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function lt(e,t,n,r,i){t.isScene!==!0&&(t=ge),H.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Y.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ce.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=V.get(r),y=x.state.lights;if(de===!0&&(fe===!0||e!==P)){let t=e===P&&r.id===N;je.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==je.numPlanes||v.numIntersection!==je.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=at(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(B.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==N&&(N=r.id,w=!0),v.needsLights){let e=ct(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||P!==e){B.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(z,`projectionMatrix`,e.projectionMatrix),O.setValue(z,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(z,me.setFromMatrixPosition(e.matrixWorld)),xe.logarithmicDepthBuffer&&O.setValue(z,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(z,`isOrthographic`,e.isOrthographicCamera===!0),P!==e&&(P=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(z,`sunShadowMap`,y.state.sunShadowMap,H),y.state.directionalShadowMap.length>0&&O.setValue(z,`directionalShadowMap`,y.state.directionalShadowMap,H),y.state.spotShadowMap.length>0&&O.setValue(z,`spotShadowMap`,y.state.spotShadowMap,H),y.state.pointShadowMap.length>0&&O.setValue(z,`pointShadowMap`,y.state.pointShadowMap,H)),i.isSkinnedMesh){O.setOptional(z,i,`bindMatrix`),O.setOptional(z,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(z,`boneTexture`,e.boneTexture,H))}i.isBatchedMesh&&(O.setOptional(z,i,`batchingTexture`),O.setValue(z,`batchingTexture`,i._matricesTexture,H),O.setOptional(z,i,`batchingIdTexture`),O.setValue(z,`batchingIdTexture`,i._indirectTexture,H),O.setOptional(z,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(z,`batchingColorTexture`,i._colorsTexture,H));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Pe.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(z,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=fm()),w){if(O.setValue(z,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&ut(k,E),a&&r.fog===!0&&Oe.refreshFogUniforms(k,a),Oe.refreshMaterialUniforms(k,r,I,oe,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}Gf.upload(z,ot(v),k,H)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Gf.upload(z,ot(v),k,H),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(z,`center`,i.center),O.setValue(z,`modelViewMatrix`,i.modelViewMatrix),O.setValue(z,`normalMatrix`,i.normalMatrix),O.setValue(z,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ze.update(n,S),ze.bind(n,S)}}return S}function ut(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function dt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=V.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),V.get(e.texture).__webglTexture=t,V.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=V.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,j=t,ee=n;let r=null,i=!1,a=!1;if(e){let o=V.get(e);if(o.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(z.FRAMEBUFFER,o.__webglFramebuffer),te.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest,B.viewport(te),B.scissor(ne),B.setScissorTest(re),N=-1;return}if(o.__webglFramebuffer===void 0)H.setupRenderTarget(e);else if(o.__hasExternalTextures)H.rebindTextures(e,V.get(e.texture).__webglTexture,V.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&V.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);H.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=V.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&H.useMultisampledRTT(e)===!1?V.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,te.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest}else te.copy(ce).multiplyScalar(I).floor(),ne.copy(le).multiplyScalar(I).floor(),re=R;if(n!==0&&(r=O),B.bindFramebuffer(z.FRAMEBUFFER,r)&&B.drawBuffers(e,r),B.viewport(te),B.scissor(ne),B.setScissorTest(re),i){let r=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=V.get(e.textures[t]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,t.__webglTexture,n)}N=-1};function ft(e){let t=V.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=xe.textureFormatReadable(e.format),t.__typeReadable=xe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){B.bindFramebuffer(z.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s);let u=ft(o);if(u.__formatReadable===!1){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&z.readPixels(t,n,r,i,Le.convert(c),Le.convert(l),a)}finally{let e=M===null?null:V.get(M).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){B.bindFramebuffer(z.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s);let d=ft(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,f),z.bufferData(z.PIXEL_PACK_BUFFER,a.byteLength,z.STREAM_READ),z.readPixels(t,n,r,i,Le.convert(l),Le.convert(u),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let p=M===null?null:V.get(M).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,p);let m=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await lo(z,m,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,f),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,a),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(f),z.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;H.setTexture2D(e,0),z.copyTexSubImage2D(z.TEXTURE_2D,n,0,0,o,s,i,a),B.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Le.convert(t.format),_=Le.convert(t.type),v;t.isData3DTexture?(H.setTexture3D(t,0),v=z.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(H.setTexture2DArray(t,0),v=z.TEXTURE_2D_ARRAY):(H.setTexture2D(t,0),v=z.TEXTURE_2D),B.activeTexture(z.TEXTURE0),B.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,t.flipY),B.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),B.pixelStorei(z.UNPACK_ALIGNMENT,t.unpackAlignment);let y=B.getParameter(z.UNPACK_ROW_LENGTH),b=B.getParameter(z.UNPACK_IMAGE_HEIGHT),x=B.getParameter(z.UNPACK_SKIP_PIXELS),S=B.getParameter(z.UNPACK_SKIP_ROWS),C=B.getParameter(z.UNPACK_SKIP_IMAGES);B.pixelStorei(z.UNPACK_ROW_LENGTH,h.width),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,h.height),B.pixelStorei(z.UNPACK_SKIP_PIXELS,l),B.pixelStorei(z.UNPACK_SKIP_ROWS,u),B.pixelStorei(z.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=V.get(e),r=V.get(t),h=V.get(n.__renderTarget),g=V.get(r.__renderTarget);B.bindFramebuffer(z.READ_FRAMEBUFFER,h.__webglFramebuffer),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(e).__webglTexture,i,d+n),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(t).__webglTexture,a,m+n)),z.blitFramebuffer(l,u,o,s,f,p,o,s,z.DEPTH_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||V.has(e)){let n=V.get(e),r=V.get(t);B.bindFramebuffer(z.READ_FRAMEBUFFER,k),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,n.__webglTexture,i),T?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,r.__webglTexture,a),i===0?T?z.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):z.copyTexSubImage2D(v,a,f,p,l,u,o,s):z.blitFramebuffer(l,u,o,s,f,p,o,s,z.COLOR_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?z.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h);B.pixelStorei(z.UNPACK_ROW_LENGTH,y),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,b),B.pixelStorei(z.UNPACK_SKIP_PIXELS,x),B.pixelStorei(z.UNPACK_SKIP_ROWS,S),B.pixelStorei(z.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&z.generateMipmap(v),B.unbindTexture()},this.initRenderTarget=function(e){V.get(e).__webglFramebuffer===void 0&&H.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?H.setTextureCube(e,0):e.isData3DTexture?H.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?H.setTexture2DArray(e,0):H.setTexture2D(e,0),B.unbindTexture()},this.resetState=function(){j=0,ee=0,M=null,B.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return eo}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Y._getDrawingBufferColorSpace(e),t.unpackColorSpace=Y._getUnpackColorSpace()}};function mm(e){let t=e.clone();return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec3 instanceEmissive;
varying vec3 vInstanceEmissive;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vInstanceEmissive = instanceEmissive;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vInstanceEmissive;`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
totalEmissiveRadiance += vInstanceEmissive;`)},t.customProgramCacheKey=()=>`instance-emissive`,t}function hm(e){return e.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float instanceOpacity;
varying float vInstanceOpacity;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vInstanceOpacity = instanceOpacity;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vInstanceOpacity;`).replace(`#include <alphamap_fragment>`,`#include <alphamap_fragment>
diffuseColor.a *= vInstanceOpacity;`)},e.customProgramCacheKey=()=>`instance-opacity`,e}var gm=new Uo,_m=new X(1,1,1),vm=class{#e;#t=[];#n;#r=0;constructor(e,t,n=32){this.#e=e,this.#n=n,t.updateMatrixWorld(!0),t.traverse(e=>{if(!(e instanceof Z))return;let t=e.material instanceof Ul,r=t?mm(e.material):e.material.clone(),i={mesh:this.#i(e.geometry,r,e.renderOrder),local:e.matrixWorld.clone(),emissive:null};t&&(i.emissive=this.#a(i.mesh,n)),this.#t.push(i)})}#i(e,t,n){let r=new el(e,t,this.#n);return r.instanceMatrix.setUsage($a),r.frustumCulled=!1,r.renderOrder=n,r.count=0,this.#e.add(r),r}#a(e,t){let n=new Kc(new Float32Array(t*3),3);return n.setUsage($a),e.geometry=e.geometry.clone(),e.geometry.setAttribute(`instanceEmissive`,n),n}#o(){let e=this.#n*2;for(let t of this.#t){let n=t.mesh;this.#n=e;let r=this.#i(n.geometry,n.material,n.renderOrder);if(r.instanceMatrix.array.set(n.instanceMatrix.array),this.#e.remove(n),n.dispose(),t.mesh=r,t.emissive){let n=t.emissive;t.emissive=this.#a(r,e),t.emissive.array.set(n.array)}}this.#n=e}begin(){this.#r=0}add(e,t){this.#r===this.#n&&this.#o();let n=this.#r++;for(let r of this.#t)r.mesh.setMatrixAt(n,gm.multiplyMatrices(e,r.local)),r.emissive&&(t?r.emissive.setXYZ(n,t.r,t.g,t.b):r.emissive.setXYZ(n,0,0,0))}end(){for(let e of this.#t)e.mesh.count=this.#r,e.mesh.instanceMatrix.needsUpdate=!0,e.emissive&&(e.emissive.needsUpdate=!0)}dispose(){for(let e of this.#t)this.#e.remove(e.mesh),e.mesh.dispose()}},ym=class{#e;#t;#n;#r;#i=0;constructor(e,t,n,r=64){this.#e=e,this.#r=r,hm(n),this.#t=this.#a(t.clone(),n),this.#n=this.#o()}#a(e,t){let n=new el(e,t,this.#r);return n.instanceMatrix.setUsage($a),n.frustumCulled=!1,n.count=0,this.#e.add(n),n}#o(){let e=new Kc(new Float32Array(this.#r),1);return e.setUsage($a),this.#t.geometry.setAttribute(`instanceOpacity`,e),e}set renderOrder(e){this.#t.renderOrder=e}#s(){let e=this.#t,t=this.#n,n=e.instanceColor;this.#r*=2,this.#t=this.#a(e.geometry.clone(),e.material),this.#t.renderOrder=e.renderOrder,this.#t.instanceMatrix.array.set(e.instanceMatrix.array),this.#n=this.#o(),this.#n.array.set(t.array),n&&(this.#t.setColorAt(0,_m),this.#t.instanceColor?.array.set(n.array)),this.#e.remove(e),e.dispose()}begin(){this.#i=0}add(e,t,n){this.#i===this.#r&&this.#s();let r=this.#i++;this.#t.setMatrixAt(r,e),this.#n.setX(r,t),n&&this.#t.setColorAt(r,n)}end(){this.#t.count=this.#i,this.#t.instanceMatrix.needsUpdate=!0,this.#n.needsUpdate=!0,this.#t.instanceColor&&(this.#t.instanceColor.needsUpdate=!0)}},bm={combat:`#7fb2ff`,elite:`#ff6b6b`,shop:`#ffd166`,boss:`#c77dff`},xm=1.6,Sm=class{#e=new _s;#t=[];#n;constructor(e,t){this.#n=t,e.add(this.#e)}update(e,t){for(;this.#t.length<e.length;)this.#t.push(this.#r());this.#t.forEach((n,r)=>{let i=e[r];if(n.group.visible=i!==void 0,!i)return;n.group.position.set(i.x,0,i.y);let a=i.size??1;n.group.scale.set(a,1,a),n.ring.color.set(bm[i.kind]),n.column.color.set(bm[i.kind]);let o=.5+.5*Math.sin(t*.08+r*2);n.ring.opacity=.55+.3*o,n.column.opacity=.16+.12*o})}#r(){let e=this.#n,t=()=>new jc({transparent:!0,depthWrite:!1,blending:2}),n=t(),r=new Z(new Ml(e*.72,e,40),n);r.rotation.x=-Math.PI/2,r.position.y=.03;let i=t(),a=new Z(new El(e*.78,e*.78,xm,28,1,!0),i);a.position.y=xm/2;let o=new _s;return o.add(r,a),this.#e.add(o),{group:o,ring:n,column:i}}},Cm=60,wm=class{mesh;#e;#t=new Uo;#n=new X;#r;#i=0;#a=0;constructor(e,t){this.mesh=new el(new Al(1,0),new jc({color:`#ffffff`}),e),this.mesh.count=0,this.mesh.frustumCulled=!1,this.#e=H(t),this.#r=Array.from({length:e},()=>({start:0,life:-1,x:0,y:0,z:0,vx:0,vy:0,vz:0,gravity:0,size:0,r:1,g:1,b:1}))}get live(){return this.#a}sparks(e,t,n,r,i,a){let o=this.#e;this.#n.set(a);for(let a=0;a<i;a++){let i=(o.float()-.5)*1.6,a=3+o.float()*4,s=n-r*i,c=r+n*i,l=Math.hypot(s,c)||1,u=this.#o();u.start=e,u.life=10+o.int(0,8),u.x=t.x,u.y=t.y,u.z=t.z,u.vx=s/l*a,u.vy=1+o.float()*3,u.vz=c/l*a,u.gravity=9,u.size=.05+o.float()*.04,this.#s(u)}}glint(e,t,n){let r=this.#e;this.#n.set(n);for(let n=0;n<9;n++){let n=this.#o();n.start=e,n.life=12+r.int(0,8),n.x=t.x+(r.float()-.5)*.4,n.y=t.y+(r.float()-.5)*.3,n.z=t.z+(r.float()-.5)*.4,n.vx=(r.float()-.5)*.8,n.vy=.6+r.float()*.8,n.vz=(r.float()-.5)*.8,n.gravity=-1,n.size=.035+r.float()*.03,this.#s(n)}}burst(e,t,n,r){let i=this.#e;this.#n.set(r);for(let r=0;r<n;r++){let n=i.float()*2-1,r=i.float()*2-1,a=1.5+i.float()*3,o=Math.hypot(n,r)||1,s=this.#o();s.start=e,s.life=22+i.int(0,14),s.x=t.x,s.y=t.y,s.z=t.z,s.vx=n/o*a,s.vy=2+i.float()*4,s.vz=r/o*a,s.gravity=8,s.size=.08+i.float()*.07,this.#s(s)}}ambient(e,t,n,r){let i=this.#e;this.#n.set(`#7fd3ff`);let a=Math.floor((e+1)*t/Cm)-Math.floor(e*t/Cm);for(let t=0;t<a;t++){let t=this.#o();t.start=e,t.life=Cm,t.x=i.float()*n,t.y=.1+i.float()*.4,t.z=i.float()*r,t.vx=(i.float()-.5)*.4,t.vy=.4+i.float()*.6,t.vz=(i.float()-.5)*.4,t.gravity=0,t.size=.04+i.float()*.03,this.#s(t)}}#o(){let e=this.#r[this.#i];return this.#i=(this.#i+1)%this.#r.length,e}#s(e){e.r=this.#n.r,e.g=this.#n.g,e.b=this.#n.b}update(e){let t=0;for(let n of this.#r){let r=e-n.start;if(r<0||r>n.life)continue;let i=r/60,a=n.size*(1-r/n.life);this.#t.makeScale(a,a,a).setPosition(n.x+n.vx*i,Math.max(.02,n.y+n.vy*i-.5*n.gravity*i*i),n.z+n.vz*i),this.mesh.setMatrixAt(t,this.#t),this.mesh.setColorAt(t,this.#n.setRGB(n.r,n.g,n.b)),t++}this.#a=t,this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}reset(e){this.#e=H(e),this.clear()}clear(){for(let e of this.#r)e.life=-1;this.#i=0,this.#a=0,this.mesh.count=0}};function Tm(){let e=document.createElement(`canvas`);e.width=64,e.height=64;let t=e.getContext(`2d`);if(t){let e=t.createImageData(64,64);for(let t=0;t<64;t++)for(let n=0;n<64;n++){let r=n/63*2-1,i=t/63*2-1,a=Math.sqrt(r*r+i*i),o=Math.max(0,1-a*2.2)**2,s=Math.max(Math.exp(-((r/.05)**2))*Math.max(0,1-Math.abs(i))**1.5,Math.exp(-((i/.05)**2))*Math.max(0,1-Math.abs(r))**1.5),c=(t*64+n)*4;e.data[c]=255,e.data[c+1]=255,e.data[c+2]=255,e.data[c+3]=Math.round(255*Math.min(1,o*.9+s))}t.putImageData(e,0,0)}return new yl(e)}function Em(e,t){let n=Math.min(t,360)/2*(Math.PI/180),r=new Ml(Math.min(.35,e*.3),e,48,1,-Math.PI/2-n,n*2);return r.rotateX(-Math.PI/2),r}function Dm(){let e=new jl(1,1);return e.rotateX(-Math.PI/2),e.translate(0,0,.5),e}function Om(){let e=document.createElement(`canvas`);e.width=32,e.height=128;let t=e.getContext(`2d`);if(t){let e=t.createImageData(32,128);for(let t=0;t<128;t++){let n=t/127,r=.25+.75*n*n;for(let n=0;n<32;n++){let i=Math.abs(n/31-.5)*2,a=(1-i*i)**2,o=(t*32+n)*4;e.data[o]=255,e.data[o+1]=255,e.data[o+2]=255,e.data[o+3]=Math.round(255*a*r)}}t.putImageData(e,0,0)}return new yl(e)}var km=new X(1,1,1),Am=48;function jm(e){let t=document.createElement(`canvas`);t.width=128,t.height=32;let n=t.getContext(`2d`);if(n){let t=n.createImageData(128,32);for(let n=0;n<32;n++){let r=1-n/31;for(let i=0;i<128;i++){let a=i/127,o=e?a**1.6*Math.exp(-(((r-.84)/.12)**2)):a**1.2*(.3+.7*r**1.5),s=(n*128+i)*4;t.data[s]=255,t.data[s+1]=255,t.data[s+2]=255,t.data[s+3]=Math.round(255*Math.min(1,o))}}n.putImageData(t,0,0)}return new yl(t)}var Mm=class{group=new _s;#e;#t;#n;#r;constructor(){this.#e=new Float32Array(294);let e=new Float32Array(196),t=[];for(let n=0;n<=Am;n++){let r=n/Am;if(e.set([r,0,r,1],n*4),n<Am){let e=n*2;t.push(e,e+1,e+2,e+1,e+3,e+2)}}this.#t=new yc,this.#t.setAttribute(`position`,new ic(this.#e,3)),this.#t.setAttribute(`uv`,new ic(e,2)),this.#t.setIndex(t);let n=e=>new jc({map:jm(e),transparent:!0,opacity:0,blending:2,depthWrite:!1,depthTest:!1,side:2});this.#n=n(!1),this.#r=n(!0);let r=new Z(this.#t,this.#n),i=new Z(this.#t,this.#r);r.renderOrder=20,i.renderOrder=21,r.frustumCulled=!1,i.frustumCulled=!1,this.group.add(r,i),this.group.visible=!1}show(e,t,n,r,i,a){let o=this.#e;for(let i=0;i<=Am;i++){let a=(e+(t-e)*i/Am)*Math.PI/180,s=Math.sin(a),c=Math.cos(a);o.set([s*n,0,c*n,s*r,0,c*r],i*6)}let s=this.#t.getAttribute(`position`);s.needsUpdate=!0,this.#n.color.copy(a),this.#r.color.copy(a).lerp(km,.6),this.#n.opacity=i,this.#r.opacity=i,this.group.visible=i>0}hide(){this.group.visible=!1}},Nm=(e,t,n)=>{let r=e[t];return typeof r==`number`?r:n},Pm=(e,t)=>{let n=e.color;return typeof n==`string`?n:t};function Fm(e){return new Ul({color:e,roughness:.55,metalness:.1})}var Im={capsule(e){let t=Nm(e,`radius`,.45),n=Math.max(Nm(e,`height`,1.4),t*2),r=new Z(new wl(t,n-t*2,6,16),Fm(Pm(e,`#4aa3ff`)));r.position.y=n/2;let i=new Z(new Cl(t*.9,t*.35,t*.5),Fm(`#e8f1ff`));i.position.set(0,n*.72,t*.75);let a=new _s;return a.add(r,i),a},cone(e){let t=Nm(e,`radius`,.45),n=Nm(e,`height`,1.1),r=new Z(new Dl(t,n,20),Fm(Pm(e,`#e05555`)));r.position.y=n/2;let i=new Z(new Cl(t*.8,t*.25,t*.3),Fm(`#ffe08a`));i.position.set(0,n*.45,t*.55);let a=new _s;return a.add(r,i),a},blade(e){let t=Nm(e,`length`,1.2),n=new Z(new Cl(.07,.03,t),Fm(Pm(e,`#e8e8f0`)));n.position.z=t/2+.15;let r=new Z(new Cl(.28,.05,.06),Fm(`#9a7b3c`));r.position.z=.12;let i=new _s;return i.add(n,r),i},turret(e){let t=Nm(e,`radius`,.4),n=Nm(e,`height`,1.15),r=Pm(e,`#a35cff`),i=new Z(new El(t,t*1.15,n*.55,18),Fm(r));i.position.y=n*.275;let a=new Z(new Al(t*.8,0),Fm(r));a.position.y=n*.72;let o=new Z(new Cl(t*.35,t*.35,t*1.3),Fm(`#2b1840`));o.position.set(0,n*.72,t*.75);let s=new Z(new Cl(t*.7,t*.2,t*.2),Fm(`#ffe08a`));s.position.set(0,n*.86,t*.55);let c=new _s;return c.add(i,a,o,s),c},orb(e){let t=Nm(e,`radius`,.25),n=Pm(e,`#ff6bd5`),r=new Z(new kl(t*.6,1),new jc({color:`#ffffff`})),i=new Z(new kl(t,1),new jc({color:n,transparent:!0,opacity:.75,blending:2,depthWrite:!1})),a=new _s;a.add(i,r);let o=Nm(e,`trail`,0);for(let e=1;e<=o;e++){let r=new Z(new kl(t*(1-e/(o+1.5)),1),new jc({color:n,transparent:!0,opacity:.55*(1-e/(o+1)),blending:2,depthWrite:!1}));r.position.z=-t*1.1*e,a.add(r)}return a},crystal(e){let t=Nm(e,`size`,.3),n=new Z(new Al(t),Fm(Pm(e,`#4a90e2`)));return n.position.y=t,n}};function Lm(e){let t=e?Im[e.gen]:void 0;if(e&&t)return t(e.params);let n=new Z(new Cl(.6,.6,.6),Fm(`#ff00ff`));return n.position.y=.3,n}function Rm(e){let t=[];return e.traverse(e=>{e instanceof Z&&e.material instanceof Ul&&t.push(e.material)}),t}function zm(e){return{player:[e.player.x,e.player.y],enemies:new Map(e.enemies.map(e=>[e.id,[e.x,e.y]])),projectiles:new Map(e.projectiles.map(e=>[e.id,[e.x,e.y]]))}}var Bm={pitchDeg:50,fov:35,distance:17,minWidth:15,lead:1.2,ease:.12},Vm=3,Hm=2048,Um=.7,Wm=.4,Gm=12,Km=(e,t,n)=>e+(t-e)*n,qm=new X(`#ffffff`),Jm=new X(`#ff3344`),Ym=new X(`#ff6a1a`),Xm=new X(`#ff3d3d`),Zm=new X(`#ff5a46`),Qm=new X(`#ffb4a6`),$m=new X(`#8fd8ff`),eh=new X(`#ffd34a`),th=new X(`#9b6bff`),nh=new X(`#ffffff`),rh=new X(`#ffd166`),ih=new X(`#9fe8ff`),ah=new X(`#bfe6ff`),oh=new X(`#ffcf5a`),sh=new X(`#fff3c4`),ch=new X(`#ffd98a`),lh=new X(`#e8f6ff`),uh=new X(`#ffe26b`),dh=new X(`#ffe7a8`),fh=12,ph=1.3,mh=36,hh=16,gh=new X(`#8fd0ff`),_h={height:1.7,fling:2.4,turns:1},vh=7,yh=7,bh=32,xh=16,Sh=9,Ch=5,wh=12,Th=12,Eh=14,Dh={neurotoxin:new X(`#4ae0ff`),radiate:new X(`#c8ff5a`),decay:new X(`#b04a8a`),deathArc:new X(`#a0d0ff`),plague:new X(`#8ed14f`),silence:new X(`#8080ff`),suppress:new X(`#ffffff`)},Oh=new X(`#ffe08a`);function kh(e){let t=Math.sin(e*12.9898)*43758.5453;return(t-Math.floor(t))*2-1}var Ah=(e,t)=>Math.atan2(e,t),jh=.5,Mh=new X(`#b46bff`);function Nh(e){let t=new Z(new Tl(e,24),new jc({color:`#000000`,transparent:!0,opacity:.35,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t.position.y=.01,t}var Ph=`#ff6b6b`,Fh=`#8fb8ff`,Ih=1.4,Lh=class{#e;#t;#n=new Ts;#r;#i=new q;#a=Bm.distance;#o=!1;#s=new _s;#c;#l=new _s;#u;#d=new _s;#f;#p;#m;#h;#g;#_;#v;#y;#b;#x=new Map;#S=new Map;#C;#w;#T;#E;#D;#O;#k;#A;#j;#M=new Uo;#N=new Uo;#P=new X;#F={pitch:0,sx:1,sy:1,sz:1,dx:0};#I=new q;#L=new Mm;#R=Array.from({length:bh},()=>({start:-1e3,x:0,y:0,z:0,size:1,color:new X}));#z=0;#B;#V=Array.from({length:xh},()=>({start:-1e3,x:0,y:0,dx:0,dy:0,length:0,beam:!1,color:new X}));#H=0;#U;#W=Array.from({length:wh},()=>({start:-1e3,x:0,y:0,radius:0,color:new X}));#G=0;#K;#q=new Map;#J;#Y;#X;#Z=new Map;#Q=new Map;#$=new Mm;#ee;#te;#ne;#re=new _s;#ie;#ae=[];#oe=[];#se=[];#ce=new Map;#le=0;#ue=Dm();#de=null;#fe=``;#pe=[];#me;#he;#ge={start:-1e3,strength:0};#_e=new Gu;#ve=new Cc(new q(0,1,0),0);constructor(e){this.#e=e;let{canvas:t,skin:n,content:r}=e;this.#t=new pm({canvas:t,antialias:!0}),this.#t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.#n.background=new X(`#0d1016`),this.#r=new wu(Bm.fov,16/9,.1,200),this.#n.add(new fu(`#d7e6ff`,`#1a1f2a`,1.1));let i=new Du(`#ffffff`,1.6);i.position.set(-6,14,8),this.#n.add(i),this.#c=Lm(n.visuals.get(r.player.visual)),this.#u=Rm(this.#c);let a=Lm(n.visuals.get(r.weapon.visual));this.#d.position.y=.20000000000000007,this.#d.add(a),this.#c.position.y=-.7,this.#l.position.y=Um,this.#l.add(this.#c,this.#d),this.#s.add(this.#l,Nh(r.player.radius*1.1)),this.#n.add(this.#s);let o=this.#ue;this.#m=r.action.steps.map(e=>{let t=e.hitbox;return t.kind===`line`?o:Em(t.radius,t.kind===`circle`?360:t.arcDeg)}),this.#p=new jc({color:`#ffffff`,transparent:!0,opacity:0,depthWrite:!1}),this.#f=new Z(this.#m[0],this.#p),this.#f.position.y=.03,this.#s.add(this.#f),this.#L.group.position.y=.9,this.#s.add(this.#L.group);let s=(e,t)=>new jc({map:t,color:e,transparent:!0,opacity:0,blending:2,depthWrite:!1,depthTest:!1}),c=Om();this.#v=s(`#3fb4ff`,c),this.#_=new Z(o,this.#v),this.#g=s(`#e9fcff`,c),this.#h=new Z(o,this.#g),this.#b=new jc({color:`#f2fdff`,transparent:!0,opacity:0,blending:2,depthWrite:!1,depthTest:!1}),this.#y=new Z(new Al(1,0),this.#b),this.#_.renderOrder=20,this.#h.renderOrder=21,this.#y.renderOrder=22,this.#s.add(this.#_,this.#h,this.#y);let l=new jc({color:`#9fe8ff`,transparent:!0,opacity:0,depthWrite:!1}),u=new Z(o,l);u.position.y=.03;let d=s(`#3fb4ff`,c),f=s(`#e9fcff`,c),p=new jc({color:`#f2fdff`,transparent:!0,opacity:0,blending:2,depthWrite:!1,depthTest:!1}),m=new Z(o,d),h=new Z(o,f),g=new Z(new Al(1,0),p);m.renderOrder=20,h.renderOrder=21,g.renderOrder=22,this.#re.add(u,m,h,g),this.#re.visible=!1,this.#n.add(this.#re),this.#ie={zone:u,zoneMaterial:l,glow:m,glowMaterial:d,core:h,coreMaterial:f,tip:g,tipMaterial:p},this.#$.group.position.y=.55,this.#s.add(this.#$.group);let _=new Ml(.86,1,72);_.rotateX(-Math.PI/2),this.#te=new jc({color:dh,transparent:!0,opacity:0,blending:2,depthWrite:!1});let v=new Al(.17,0),y=new jc({color:gh});for(let e=0;e<hh;e++){let e=new Z(v,y);e.visible=!1,e.renderOrder=19,this.#oe.push(e),this.#n.add(e)}this.#ee=new Z(_,this.#te),this.#ee.position.y=.06,this.#ee.visible=!1,this.#s.add(this.#ee);for(let e=0;e<Vm;e++){let e=Lm(n.visuals.get(r.player.visual)),t=Rm(e);for(let e of t)e.transparent=!0,e.depthWrite=!1,e.color.set(`#8fd3ff`);e.visible=!1,this.#n.add(e),this.#pe.push({mesh:e,materials:t,start:-1e3,x:0,y:0,angle:0})}this.#he=new wm(Hm,e.seed),this.#n.add(this.#he.mesh);let b=new Tl(1,24);b.rotateX(-Math.PI/2),this.#C=new ym(this.#n,b,new jc({color:`#000000`,transparent:!0,opacity:.35,depthWrite:!1}));let x=new jl(1,1);x.translate(.5,0,0);let S=e=>new jc({color:e,transparent:!0,depthTest:!1});this.#w=new ym(this.#n,x,S(`#2a0d10`)),this.#T=new ym(this.#n,x,S(`#ff5d6c`)),this.#w.renderOrder=10,this.#T.renderOrder=11,this.#D=new ym(this.#n,x,S(Fh)),this.#D.renderOrder=12;let C=new Ml(.8,1,40);C.rotateX(-Math.PI/2),this.#E=new ym(this.#n,C,new jc({color:`#ffffff`,transparent:!0,depthWrite:!1,blending:2}));let w=()=>new jc({color:`#ffffff`,transparent:!0,depthWrite:!1});this.#O=new ym(this.#n,this.#ue,w()),this.#k=new ym(this.#n,this.#ue,w());let T=new Tl(1,48);T.rotateX(-Math.PI/2),this.#A=new ym(this.#n,T,w()),this.#j=new ym(this.#n,T,w()),this.#O.renderOrder=1,this.#k.renderOrder=2,this.#B=new ym(this.#n,new jl(1,1),new jc({map:Tm(),transparent:!0,blending:2,depthWrite:!1,depthTest:!1}),bh),this.#B.renderOrder=23,this.#ne=new ym(this.#n,new jl(1,1),new jc({map:Tm(),transparent:!0,blending:2,depthWrite:!1,depthTest:!1})),this.#ne.renderOrder=24;let E=()=>new jc({color:`#ffffff`,transparent:!0,blending:2,depthWrite:!1,depthTest:!1});this.#U=new ym(this.#n,this.#ue,E(),160),this.#U.renderOrder=22;let D=new Ml(.8,1,48);D.rotateX(-Math.PI/2),this.#K=new ym(this.#n,D,E(),wh),this.#K.renderOrder=3;for(let e of r.elements.values()){let t=e.status.kind;this.#q.has(t)||this.#q.set(t,new X(e.color))}for(let e of r.reactions.values())this.#Z.set(e.id,new X(e.color));let O=()=>new jc({color:`#ffffff`,transparent:!0,depthWrite:!1}),k=new Tl(1,48);k.rotateX(-Math.PI/2),this.#J=new ym(this.#n,k,O()),this.#J.renderOrder=1;let A=new Ml(.93,1,64);A.rotateX(-Math.PI/2),this.#Y=new ym(this.#n,A,E()),this.#Y.renderOrder=2;let j=new Ml(.55,.75,16,1,0,Math.PI/2.5);j.rotateX(-Math.PI/2),this.#X=new ym(this.#n,j,E()),this.#X.renderOrder=3,this.#me=new Sm(this.#n,Tt),this.resize()}#ye(e,t){let n=`${e}x${t}`;if(n===this.#fe)return;this.#fe=n,this.#de&&this.#n.remove(this.#de);let r=new _s;this.#de=r,this.#n.add(r);let i=new Z(new jl(e,t),new Ul({color:`#1a2029`,roughness:.95}));i.rotation.x=-Math.PI/2,i.position.set(e/2,0,t/2),r.add(i);let a=[];for(let n=0;n<=e;n++)a.push(n,.005,0,n,.005,t);for(let n=0;n<=t;n++)a.push(0,.005,n,e,.005,n);let o=new yc;o.setAttribute(`position`,new sc(a,3)),r.add(new _l(o,new al({color:`#262f3c`})));let s=new Ul({color:`#2c3646`,roughness:.8}),c=.3,l=.6,u=[[e/2,-.3/2,e+c*2,c],[e/2,t+c/2,e+c*2,c],[-.3/2,t/2,c,t],[e+c/2,t/2,c,t]];for(let[e,t,n,i]of u){let a=new Z(new Cl(n,l,i),s);a.position.set(e,l/2,t),r.add(a)}}#be(e,t){let n=e.get(t);return n||(n=new vm(this.#n,Lm(this.#e.skin.visuals.get(t))),e.set(t,n)),n}#xe(e){return this.#e.skin.visuals.get(e)?.params.height||1.2}#Se(e,t,n,r){let i=e.player;for(let e of this.#x.values())e.begin();this.#C.begin(),this.#E.begin(),this.#O.begin(),this.#A.begin(),this.#j.begin(),this.#k.begin();let a=this.#M,o=this.#N,[s,c]=t?.player??[i.x,i.y],l=Km(s,i.x,n),u=Km(c,i.y,n),d=++this.#le;for(let i of e.enemies){let[e,s]=t?.enemies.get(i.id)??[i.x,i.y],c=Km(e,i.x,n),f=Km(s,i.y,n),p=i.state===`free`?Ah(l-c,u-f):Ah(i.aimX,i.aimY),m=this.#ce.get(i.id);m?(m.visual=i.visual,m.radius=i.radius,m.yaw=p,m.drawn=d):this.#ce.set(i.id,{visual:i.visual,radius:i.radius,yaw:p,drawn:d});let h=this.#xe(i.visual)*Wm,g=this.#et(i,n,r),_=this.#Ve(i,n),v=_<0?0:4*ph*_*(1-_);a.makeTranslation(c,v,f);let y=this.#we(i);y!==1&&a.multiply(o.makeScale(y,y,y)),a.multiply(o.makeRotationY(p)),a.multiply(o.makeTranslation(g.dx,h,0)),a.multiply(o.makeRotationX(g.pitch)),a.multiply(o.makeScale(g.sx,g.sy,g.sz)),a.multiply(o.makeTranslation(0,-h,0));let b=null;i.flash>0?b=this.#P.copy(qm).multiplyScalar(i.flash/8*.9):i.burn>0?b=this.#P.copy(Ym).multiplyScalar(.35+.15*Math.sin(r*.35)):i.status&&this.#Ce(i.status,i.stun>0,r)?b=this.#P:i.boss?.phase===2&&(b=this.#P.copy(Mh).multiplyScalar(.3+.12*Math.sin(r*.18))),this.#be(this.#x,i.visual).add(a,b);let x=i.radius*1.1;a.makeTranslation(c,.01,f).multiply(o.makeScale(x,1,x)),this.#C.add(a,1),this.#Oe(i,c,f,r),this.#je(i,c,f,n),this.#Ae(i,c,f,n)}this.#Ee(e,n),this.#De(i,l,u,r);for(let[e,t]of this.#ce)t.drawn!==d&&this.#ce.delete(e);for(let e of this.#se)this.#ke(e,r);for(let e of this.#x.values())e.end();this.#C.end(),this.#E.end(),this.#O.end(),this.#k.end(),this.#A.end(),this.#j.end()}#Ce(e,t,n){let r=(e,t)=>{let n=this.#q.get(e);return n&&this.#P.copy(n).multiplyScalar(t),n!==void 0},i=.3+.12*Math.sin(n*.3);if(t&&e.paralyzeReady>0)return r(`paralyze`,Math.floor(n/3)%2==0?.75:.25);if(e.poison>0)return r(`poison`,i);if(e.slow>0)return r(`slow`,i);if(e.weaken>0)return r(`weaken`,i);if(e.curse>0)return r(`curse`,i);if(e.blind>0)return r(`blind`,i);let a=(e,t)=>{let n=Dh[e];return n&&this.#P.copy(n).multiplyScalar(t),n!==void 0};return e.neurotoxin>0&&t?a(`neurotoxin`,Math.floor(n/3)%2==0?.75:.25):e.radiate>0?a(`radiate`,i):e.decay>0?a(`decay`,i):e.deathArc>0?a(`deathArc`,i):e.plague>0?a(`plague`,i):e.silence>0?a(`silence`,i):e.suppress>0&&a(`suppress`,.35)}#we(e){let t=this.#e.content.enemies.get(e.def)?.radius;return t?e.radius/t:1}#Te(e){let t=this.#Q.get(e);return t||(t=new X(this.#e.content.affixes.get(e)?.color??Ph),this.#Q.set(e,t)),t}#Ee(e,t){let n=e.hazards;if(!n)return;let r=this.#M,i=this.#N;for(let e of n){let n=Math.min(e.warn,e.frame-1+t),a=Math.max(0,Math.min(1,n/Math.max(1,e.warn))),o=e.warn-e.frame,s=o<=6&&Math.floor(o/2)%2==0,c=this.#Te(e.affix);if(e.line){let t=Ah(e.dx,e.dy),n=e.radius*2;r.makeTranslation(e.x,.02,e.y).multiply(i.makeRotationY(t)),r.multiply(i.makeScale(n,1,e.length)),this.#O.add(r,.18+.1*a,c),r.makeTranslation(e.x,.025,e.y).multiply(i.makeRotationY(t)),r.multiply(i.makeScale(n,1,e.length*Math.max(.001,a))),this.#k.add(r,s?.7:.4,s?Qm:Zm)}else{r.makeTranslation(e.x,.02,e.y).multiply(i.makeScale(e.radius,1,e.radius)),this.#A.add(r,.2+.1*a,c);let t=e.radius*Math.max(.001,a);r.makeTranslation(e.x,.025,e.y).multiply(i.makeScale(t,1,t)),this.#j.add(r,s?.7:.4,s?Qm:Zm)}}}#De(e,t,n,r){let i=[];e.slow&&i.push($m),e.root!==void 0&&i.push(eh),e.pull&&i.push(th);let a=this.#M,o=this.#N;i.forEach((i,s)=>{let c=e.radius*(1.5+.3*s);a.makeTranslation(t,.03+.005*s,n).multiply(o.makeScale(c,1,c)),this.#E.add(a,.65+.25*Math.sin(r*.3+s*1.3),i)})}#Oe(e,t,n,r){let i=e.elite?.affixes??[],a=this.#M,o=this.#N;i.forEach((i,s)=>{let c=this.#Te(i),l=e.radius*(1.35+.3*s);a.makeTranslation(t,.02+.005*s,n).multiply(o.makeScale(l,1,l)),this.#E.add(a,.55+.25*Math.sin(r*.12+s*1.7),c)})}#ke(e,t){if(t>=e.land)return;let n=Math.max(0,(t-e.start)/(e.land-e.start)),r=e.from+(1-e.from)*n,i=4*_h.height*r*(1-r),a=_h.fling*(1-e.from)*(1-(1-n)**2),o=e.x+e.dx*a,s=e.y+e.dy*a,c=this.#M,l=this.#N,u=this.#xe(e.visual)*Wm;c.makeTranslation(o,i,s),c.multiply(l.makeRotationY(e.yaw)),c.multiply(l.makeTranslation(0,u,0)),c.multiply(l.makeRotationX(-Math.PI*2*_h.turns*n)),c.multiply(l.makeTranslation(0,-u,0));let d=1-Math.min(1,Math.max(0,t-e.start)/10);this.#be(this.#x,e.visual).add(c,d>0?this.#P.copy(qm).multiplyScalar(.9*d):null);let f=e.radius*1.1*(1-.4*i/_h.height);c.makeTranslation(o,.01,s).multiply(l.makeScale(f,1,f)),this.#C.add(c,1)}#Ae(e,t,n,r){let i=e.boss;if(i?.mode!==`warn`)return;let a=Math.min(i.warn,i.frame-1+r),o=Math.max(0,Math.min(1,a/Math.max(1,i.warn))),s=i.warn-i.frame,c=s<=6&&Math.floor(s/2)%2==0,l=this.#M,u=this.#N;if(i.cr>0){l.makeTranslation(i.cx,.02,i.cy).multiply(u.makeScale(i.cr,1,i.cr)),this.#A.add(l,.16+.1*o,Xm);let e=i.cr*Math.max(.001,o);l.makeTranslation(i.cx,.025,i.cy).multiply(u.makeScale(e,1,e)),this.#j.add(l,c?.7:.4,c?Qm:Zm)}for(let e=0;e<i.rays;e++){let r=i.rayAngle+360*e/i.rays,a=Ah(Pe(r),_t(r));l.makeTranslation(t,.02,n).multiply(u.makeRotationY(a)),l.multiply(u.makeScale(jh,1,i.rayLength)),this.#O.add(l,.1+.08*o,Xm),l.makeTranslation(t,.025,n).multiply(u.makeRotationY(a)),l.multiply(u.makeScale(jh,1,i.rayLength*Math.max(.001,o))),this.#k.add(l,c?.6:.3,c?Qm:Zm)}}#je(e,t,n,r){if(e.warnLength<=0||e.state!==`windup`&&e.state!==`attack`)return;let i=this.#M,a=this.#N,o=Ah(e.aimX,e.aimY);if(i.makeTranslation(t,.02,n).multiply(a.makeRotationY(o)),i.multiply(a.makeScale(e.warnWidth,1,e.warnLength)),e.state===`attack`){this.#O.add(i,.1,Xm);return}let s=Math.min(e.warnFrames,e.stateFrame-1+r),c=Math.max(0,Math.min(1,s/Math.max(1,e.warnFrames))),l=e.warnFrames-e.stateFrame,u=l<=6&&Math.floor(l/2)%2==0;this.#O.add(i,.14+.1*c,Xm),i.makeTranslation(t,.025,n).multiply(a.makeRotationY(o)),i.multiply(a.makeScale(e.warnWidth,1,e.warnLength*Math.max(.001,c))),this.#k.add(i,u?.7:.4,u?Qm:Zm)}#Me(e,t,n){this.#w.begin(),this.#T.begin(),this.#D.begin();let r=this.#M,i=this.#N,a=this.#Ne.makeRotationFromQuaternion(this.#r.quaternion);for(let o of e.enemies){let e=o.elite;if(o.hp>=o.maxHp&&!e||o.boss)continue;let[s,c]=t?.enemies.get(o.id)??[o.x,o.y],l=e?Ih:1,u=Km(s,o.x,n)-l/2,d=this.#xe(o.visual)*this.#we(o)+.35,f=Km(c,o.y,n);r.makeTranslation(u,d,f).multiply(a),this.#w.add(i.copy(r).multiply(this.#Fe(l,.09)),1),this.#T.add(i.copy(r).multiply(this.#Fe(l*Math.max(.001,o.hp/o.maxHp),.09)),1),e&&e.shieldMax>0&&e.shield>0&&(r.makeTranslation(u,d+.12,f).multiply(a),this.#w.add(i.copy(r).multiply(this.#Fe(l,.06)),1),this.#D.add(r.multiply(this.#Fe(l*e.shield/e.shieldMax,.06)),1))}this.#w.end(),this.#T.end(),this.#D.end()}#Ne=new Uo;#Pe=new Uo;#Fe(e,t){return this.#Pe.makeScale(e,t,1)}#Ie(e,t,n){for(let e of this.#S.values())e.begin();let r=this.#M,i=this.#N;for(let a of e.projectiles){let[e,o]=t?.projectiles.get(a.id)??[a.x,a.y];r.makeTranslation(Km(e,a.x,n),.9,Km(o,a.y,n)),r.multiply(i.makeRotationY(Ah(a.dx,a.dy))),this.#be(this.#S,a.visual).add(r,null)}for(let e of this.#S.values())e.end()}#Le(e,t){let n=e.areas[0];if(!n){this.#$.hide();return}let r=360*(n.frame-1+t)/n.every,i=Math.min(1,(n.frame+1)/4),a=Math.min(1,(n.frames-n.frame)/10);this.#$.show(r-300,r,n.radius*.55,n.radius,Math.min(i,a),lh)}#Re(e,t,n){this.#ae=this.#ae.filter(e=>n-e.start<mh),this.#oe.forEach((r,i)=>{let a=this.#ae[i];if(r.visible=!1,!a)return;let o=Math.max(0,(n-a.start)/mh),s=o*o;r.visible=!0,r.position.set(Km(a.x,e,s),.6+.4*s+5.6*o*(1-o),Km(a.y,t,s)),r.rotation.set(0,n*.25+i,.5),r.scale.setScalar(1-.5*s)})}#ze(e,t,n,r){let i=this.#re;i.visible=!1;let a=e.lines[0];if(!a){this.#Be(e,t,n);return}let o=a.frame-2+r,s=a.frames-1,c=a.length*nt(0,s,o),l=o<=s?1:Math.max(0,1-(o-s)/6);if(o<-1||c<=0||l<=0)return;let u=this.#ie;i.visible=!0,i.position.set(t,0,n),i.rotation.y=Ah(a.dx,a.dy);let d=.6+.4*l;u.zone.scale.set(a.width,1,c),u.zoneMaterial.opacity=.22*l,u.core.position.set(0,.9,.3),u.core.scale.set(a.width*.45*d,1,c),u.coreMaterial.opacity=l,u.glow.position.set(0,.88,.3),u.glow.scale.set(a.width*1.5*d,1,c),u.glowMaterial.opacity=.7*l,u.tip.position.set(0,.9,.3+c),u.tip.scale.set(.22,.1,.75),u.tipMaterial.opacity=l}#Be(e,t,n){let r=e.player.dash;if(!r)return;let i=Math.hypot(t-r.x0,n-r.y0);if(i<=.01)return;let a=1-r.frame/(r.frames+1),o=this.#ie,s=this.#re;s.visible=!0,s.position.set(r.x0,0,r.y0),s.rotation.y=Ah(r.dx,r.dy),o.zone.scale.set(r.width,1,i),o.zoneMaterial.opacity=.3*a,o.core.scale.set(r.width*.25,1,i),o.core.position.set(0,.05,0),o.coreMaterial.opacity=.5*a,o.glow.scale.set(r.width*.8,1,i),o.glow.position.set(0,.04,0),o.glowMaterial.opacity=.35*a,o.tipMaterial.opacity=0}#Ve(e,t){return e.air<=0||e.airTotal<=0?-1:Math.max(0,Math.min(1,(e.airTotal-e.air-1+t)/e.airTotal))}#He(e,t,n,r){let i=this.#M,a=this.#N;this.#ne.begin();for(let o of e.enemies){if(o.stun<=0||o.air>0)continue;let[e,s]=t?.enemies.get(o.id)??[o.x,o.y],c=Km(e,o.x,n),l=Km(s,o.y,n),u=this.#xe(o.visual)+.35;for(let e=0;e<3;e++){let t=r*.2+e*Math.PI*2/3;i.makeTranslation(c+Math.cos(t)*.48,u,l+Math.sin(t)*.48),i.multiply(a.makeRotationFromQuaternion(this.#r.quaternion)),i.multiply(a.makeScale(.55,.55,1)),this.#ne.add(i,.95,uh)}}this.#ne.end()}play(e,t){this.#We(t);let n=null;for(let r of e)r.type===`death`&&r.launch?n=this.#Ue(r.target,r.x,r.y,r.launch,t):r.type===`loot`?(this.#ae.push({start:t,x:r.x,y:r.y}),this.#ae.length>hh&&this.#ae.shift()):r.type===`reaction`?this.#Ge(r,t):r.type===`cue`&&(n&&n.cue===null&&r.x===n.x&&r.y===n.y?n.cue=r:this.#Ke(r,t))}#Ue(e,t,n,r,i){let a=this.#ce.get(e);if(!a||r.total<=0)return null;let o=i+1+r.hold,s={visual:a.visual,radius:a.radius,yaw:a.yaw,x:t,y:n,dx:r.dx,dy:r.dy,start:o,land:o+r.air,from:(r.total-r.air)/r.total,cue:null,landed:!1};return this.#se.push(s),s}#We(e){if(this.#se.length!==0){for(let t of this.#se){if(t.landed||t.land>e+1||(t.landed=!0,!t.cue))continue;let n=_h.fling*(1-t.from);this.#Ke({...t.cue,x:t.x+t.dx*n,y:t.y+t.dy*n},t.land)}this.#se=this.#se.filter(t=>!t.landed||t.land>e)}}#Ge(e,t){let n=this.#e.content.reactions.get(e.reaction)?.color??`#ffffff`,r={x:e.x,y:.7,z:e.y};if(this.#he.burst(t,r,12+Math.round(e.radius*6),n),e.radius<=0)return;let i=this.#W[this.#G];this.#G=(this.#G+1)%wh,i.start=t,i.x=e.x,i.y=e.y,i.radius=e.radius,i.color.set(n)}#Ke(e,t){let n=this.#e.skin.cues.get(e.cue),r=n?.vfx??`none`,i=n?.color,a={x:e.x,y:.9,z:e.y};if(r===`flash`){let n=e.strength>=2;this.#he.sparks(t,a,e.dx,e.dy,8+Math.round(e.strength*6),`#fff1b8`);let r={x:e.x-e.dx*.45,y:1,z:e.y-e.dy*.45};this.#qe(t,r,1.6+.5*e.strength,n?ch:sh);let i=e.strength>=2.5?.42:Math.min(.22,.04+.07*e.strength);i>=this.#Je(t)&&(this.#ge={start:t,strength:i})}else if(r===`pierce`){let n={x:e.x+e.dx*.6,y:.95,z:e.y+e.dy*.6};this.#he.glint(t,n,`#9fe8ff`)}else if(r===`burst`)this.#he.burst(t,{...a,y:.6},26,`#ff9f7a`);else if(r===`hurt`)this.#he.sparks(t,a,e.dx,e.dy,12,`#ff4d5e`),this.#ge={start:t,strength:.25};else if(r===`dust`)this.#he.sparks(t,{...a,y:.2},-e.dx,-e.dy,10,`#d9b38c`);else if(r===`muzzle`||r===`cast`){let n={x:e.x+e.dx*.7,y:.9,z:e.y+e.dy*.7};this.#he.glint(t,n,i??`#ff9be6`)}else if(r===`explode`)this.#he.burst(t,a,10+Math.round(e.strength*6),i??`#ff7a1a`);else if(r===`embers`)this.#he.glint(t,{...a,y:.7},i??`#ff9b3d`);else if(r===`shatter`)this.#he.sparks(t,a,e.dx,e.dy,8,i??`#bdeeff`);else if(r===`arc`||r===`beam`){let n=this.#V[this.#H];this.#H=(this.#H+1)%xh,n.start=t,n.x=e.x,n.y=e.y,n.dx=e.dx,n.dy=e.dy,n.length=e.strength,n.beam=r===`beam`,n.color.set(i??`#bfe8ff`);let a={x:e.x+e.dx*e.strength,y:.9,z:e.y+e.dy*e.strength};this.#he.glint(t,a,i??`#bfe8ff`)}else if(r===`strike`){let n=i??`#ffe7a8`;this.#qe(t,{x:e.x,y:1.2,z:e.y},2.4,this.#P.set(n)),this.#he.burst(t,{x:e.x,y:.4,z:e.y},14,n);let r=this.#W[this.#G];this.#G=(this.#G+1)%wh,r.start=t,r.x=e.x,r.y=e.y,r.radius=e.strength,r.color.set(n)}else if(r===`gust`){let n=this.#W[this.#G];this.#G=(this.#G+1)%wh,n.start=t,n.x=e.x,n.y=e.y,n.radius=e.strength,n.color.set(i??`#7fe0b0`),this.#he.burst(t,{x:e.x,y:.5,z:e.y},10,i??`#7fe0b0`)}else if(r===`stun`)this.#he.glint(t,{x:e.x,y:1.4,z:e.y},i??`#ffe26b`);else if(r===`glow`)this.#he.burst(t,{x:e.x,y:.3,z:e.y},34,i??`#ffe7a8`),this.#he.glint(t,{x:e.x,y:1.9,z:e.y},i??`#ffe7a8`);else if(r===`shards`)this.#he.burst(t,{x:e.x,y:1,z:e.y},18,i??`#9fd8ff`);else if(r===`afterimage`||r===`dash`){let n=r===`dash`,i=n?e.strength:this.#e.content.player.dodgeDistance;this.#pe.forEach((r,a)=>{r.start=t+a*(n?2:3),r.x=e.x+e.dx*(i*a)/Vm,r.y=e.y+e.dy*(i*a)/Vm,r.angle=Ah(e.dx,e.dy)})}}#qe(e,t,n,r){let i=this.#R[this.#z];this.#z=(this.#z+1)%bh,i.start=e,i.x=t.x,i.y=t.y,i.z=t.z,i.size=n,i.color.copy(r)}#Je(e){let t=e-this.#ge.start;return t>=0&&t<10?this.#ge.strength*(1-t/10):0}#Ye(e){let t=this.#M,n=this.#N;this.#B.begin(),this.#R.forEach((r,i)=>{let a=e-r.start;if(a<0||a>=yh)return;let o=a/yh,s=r.size*(.6+.5*Math.sqrt(o));t.makeTranslation(r.x,r.y,r.z),t.multiply(n.makeRotationFromQuaternion(this.#r.quaternion)),t.multiply(n.makeRotationZ(i*.7)),t.multiply(n.makeScale(s,s,1)),this.#B.add(t,(1-o)**1.5,r.color)}),this.#B.end()}#Xe(e){let t=this.#M,n=this.#N;this.#U.begin(),this.#V.forEach((r,i)=>{let a=e-r.start,o=r.beam?Eh:Sh;if(a<0||a>=o||r.length<=0)return;let s=1-a/o;if(r.beam){let e=Ah(r.dx,r.dy);t.makeTranslation(r.x,.9,r.y).multiply(n.makeRotationY(e)),t.multiply(n.makeScale(.9*(.6+.4*s),1,r.length)),this.#U.add(t,.55*s,r.color),t.makeTranslation(r.x,.91,r.y).multiply(n.makeRotationY(e)),t.multiply(n.makeScale(.2,1,r.length)),this.#U.add(t,s,qm);return}let c=Math.floor(a/2),l=Math.min(.3,.1*r.length),u=r.x,d=r.y;for(let e=1;e<=Ch;e++){let a=r.length*e/Ch,o=e===Ch?0:l*kh(i*7+e*3+c*11),f=r.x+r.dx*a-r.dy*o,p=r.y+r.dy*a+r.dx*o,m=Math.hypot(f-u,p-d),h=Ah(f-u,p-d);t.makeTranslation(u,.9,d).multiply(n.makeRotationY(h)),t.multiply(n.makeScale(.26,1,m)),this.#U.add(t,.6*s,r.color),t.makeTranslation(u,.91,d).multiply(n.makeRotationY(h)),t.multiply(n.makeScale(.06,1,m)),this.#U.add(t,s,qm),u=f,d=p}}),this.#U.end()}#Ze(e,t,n,r){let i=this.#M,a=this.#N;this.#J.begin(),this.#Y.begin(),this.#X.begin();let o=e.player.ward;if(o&&!e.player.dead){let e=1.1+.08*Math.sin(r*.2);i.makeTranslation(t,.04,n).multiply(a.makeScale(e,1,e)),this.#Y.add(i,.8*Math.min(1,o.frames/20),Oh)}for(let t of e.zones??[]){let e=this.#e.content.reactions.get(t.reaction),n=this.#Z.get(t.reaction);if(!e||!n||t.radius<=0)continue;let o=t.frames>0?Math.min(1,t.frame/t.frames):1,s=t.radius,c=(e,r,o,s=.02)=>{i.makeTranslation(t.x,s,t.y).multiply(a.makeScale(e,1,e)),o.add(i,r,n)},l=e.effect;if(l.kind===`burst`){c(s,.12,this.#J),c(s*o,.3,this.#J,.025),c(s,.7,this.#Y,.03);continue}if(l.kind===`wave`){c(s,.9*(1-o),this.#Y,.04);continue}if(l.kind===`strike`){c(s,.25*(1-o),this.#Y,.03);continue}if(l.kind!==`zone`)continue;let u=Math.min(1,t.frame/6,(t.frames-t.frame)/12),d=.85+.15*Math.sin(r*.15+t.id);if(c(s,.2*u*d,this.#J),c(s,.55*u,this.#Y,.03),l.pull>0)for(let e=0;e<3;e++){let o=-r*.12+e*Math.PI*2/3;i.makeTranslation(t.x,.05,t.y).multiply(a.makeRotationY(o)),i.multiply(a.makeScale(s,1,s)),this.#X.add(i,.6*u,n)}}this.#J.end(),this.#Y.end(),this.#X.end()}#Qe(e){let t=this.#M,n=this.#N;this.#K.begin();for(let r of this.#W){let i=e-r.start;if(i<0||i>=Th)continue;let a=i/Th,o=.4+r.radius*(1-(1-a)*(1-a));t.makeTranslation(r.x,.08,r.y).multiply(n.makeScale(o,1,o)),this.#K.add(t,.8*(1-a),r.color)}this.#K.end()}render(e,t,n){this.#ye(e.width,e.height);let r=e.frame-1+n,i=e.player,[a,o]=t?.player??[i.x,i.y],s=Km(a,i.x,n),c=Km(o,i.y,n);this.#s.position.set(s,0,c),this.#s.rotation.y=Ah(i.fx,i.fy),this.#s.visible=!i.dead;let l=i.invulnerable>0&&i.dodgeFrame<0&&!i.dash&&Math.floor(e.frame/4)%2==1;for(let e of this.#u)i.hurt>0?(e.emissive.copy(Jm),e.emissiveIntensity=i.hurt/12):(e.emissive.copy(qm),e.emissiveIntensity=l?.35:0);this.#$e(e,n),this.#nt(e,n),this.#Se(e,t,n,r),this.#Ie(e,t,n),this.#Le(e,n),this.#ze(e,s,c,n);let u=e.build?.route,d=u&&e.build?.phase===`doors`?[...u.doors.map(e=>({x:e.x,y:e.y,kind:e.plan.kind})),...u.shop?[{x:u.shop.x,y:u.shop.y,kind:`shop`,size:St/Tt}]:[]]:[];this.#me.update(d,r);for(let e of this.#pe){let t=r-e.start,n=t>=0&&t<Gm;if(e.mesh.visible=n,n){e.mesh.position.set(e.x,0,e.y),e.mesh.rotation.y=e.angle;for(let n of e.materials)n.opacity=.45*(1-t/Gm)}}this.#he.update(r),this.#at(s,c,i.fx,i.fy,r),this.#Me(e,t,n),this.#Ye(r),this.#Xe(r),this.#Qe(r),this.#Ze(e,s,c,r),this.#He(e,t,n,r),this.#Re(s,c,r),this.#t.render(this.#n,this.#r)}#$e(e,t){let n=e.player,r=this.#l,{dodgeFrames:i}=this.#e.content.player;if(r.position.y=Um,r.rotation.set(0,0,0),n.dodgeFrame>=0){let e=Math.max(0,Math.min(1,(n.dodgeFrame-1+t)/i));r.rotation.x=Math.PI*2*e,r.position.y=Um-.25*Math.sin(Math.PI*e)}else n.dash?(r.rotation.x=.55,r.position.y=.58):n.hurt>0&&(r.rotation.x=-.35*(n.hurt/12))}#et(e,t,n){let r=this.#tt(e,t,n),i=this.#Ve(e,t);if(i>=0&&(r.pitch-=1.6*Math.sin(Math.PI*i)),e.flash>0){let t=e.flash/8,n=e.state===`windup`||e.state===`attack`?.35:1;r.pitch-=.4*t*n,r.sx*=1+.08*t,r.sy*=1-.14*t,r.sz*=1+.08*t}return r}#tt(e,t,n){let r=this.#F;if(r.pitch=0,r.sx=1,r.sy=1,r.sz=1,r.dx=0,e.state===`windup`){let i=Math.max(0,Math.min(1,(e.stateFrame-1+t)/Math.max(1,e.warnFrames)));return r.pitch=-.3*i,r.sx=1+.08*i,r.sy=1-.14*i,r.sz=1+.08*i,r.dx=.04*Math.max(0,(i-.66)*3)*Math.sin(n*2.6),r}if(e.state===`attack`)return r.pitch=.5,r.sx=.92,r.sy=1.04,r.sz=1.12,r;if(e.state!==`recover`)return r;let i=this.#e.content.enemies.get(e.def)?.attack;if(!i)return r;let a=1-Math.min(1,(e.stateFrame-1+t)/Math.max(1,i.recover));return i.kind===`dash`?(r.pitch=.25*a,r.sy=1-.08*a):r.pitch=-.35*a*a,r}#nt(e,t){let n=e.player,r=this.#e.content.action.steps,i=n.step>=0?r[n.step]:void 0,a=i&&n.stats.haste>0?{...i,...Je(i,n.stats.haste)}:i,o=this.#d,s={yaw:55,pitch:-25,reach:0},c=s.yaw,l=s.pitch,u=s.reach;if(this.#p.opacity=0,this.#f.scale.set(1,1,1),this.#g.opacity=0,this.#v.opacity=0,this.#b.opacity=0,this.#L.hide(),this.#ee.visible=!1,a&&n.dodgeFrame<0){let i=n.stepFrame-1+t,o=a.hitbox,d=e.build?.gear?.kit.core.areaMult??1,f=o.kind===`arc`?o.arcDeg:360,p=n.step%2==0?1:-1,m=Math.min(1,i/Math.max(1,a.activeFrom)),h=Math.min(1,Math.max(0,(i-a.activeFrom)/Math.max(1,a.activeTo-a.activeFrom))),g=Math.max(0,(i-a.activeTo)/Math.max(1,a.frames-a.activeTo));if(o.kind===`line`)c=Km(s.yaw,0,m),l=-8,u=i<a.activeFrom?-.3*m:i<=a.activeTo?.9:.9*(1-g),this.#it(o.length,o.width,a.activeFrom,a.activeTo,i-1);else if(f>=360){c=i<a.activeFrom?Km(s.yaw,90,m):90+360*h,l=-5;let e=90+360*h,t=o.radius*d;this.#rt(a,i,e-Math.min(360*h,300),e,t,n.step)}else{let e=p*(f/2+20),t=-p*(f/2);c=i<a.activeFrom?Km(s.yaw,e,m):Km(e,t,h),i>a.activeTo&&(c=Km(t,s.yaw,g)),l=-12,this.#rt(a,i,e,Km(e,t,h),o.radius*d,n.step)}let _=(i-a.activeFrom)/fh;if(a.stun>0&&o.kind!==`line`&&_>=0&&_<1){let e=.6+(o.radius*d+.4-.6)*(1-(1-_)**3);this.#ee.visible=!0,this.#ee.scale.set(e,1,e),this.#te.opacity=.85*(1-_)**1.5}let v=this.#m[n.step];if(v&&(this.#f.geometry=v),o.kind!==`line`&&i>=a.activeFrom-1&&i<=a.activeTo+4){let e=i<=a.activeTo?1:1-(i-a.activeTo)/5;this.#f.scale.set(d,1,d),this.#p.opacity=.2*e,this.#p.color.copy(n.step===r.length-1?rh:nh)}}let d=Math.PI/180;o.rotation.set(l*d*-1,c*d,0,`YXZ`),o.position.set(0,.20000000000000007,u)}#rt(e,t,n,r,i,a){if(t<e.activeFrom-.5)return;let o=(t-e.activeTo)/vh;if(o>=1)return;let s=Math.max(0,o),c=a===this.#e.content.action.steps.length-1;this.#L.show(Km(n,r,s),r,i*.55,i,(1-s)**1.3,c?oh:ah)}#it(e,t,n,r,i){let a=e*nt(n,r,i),o=i<=r?1:Math.max(0,1-(i-r)/6);if(i<n-1||a<=0||o<=0)return;this.#f.scale.set(t,1,a),this.#p.opacity=.22*o,this.#p.color.copy(ih);let s=.6+.4*o;this.#h.position.set(0,.9,.3),this.#h.scale.set(t*.45*s,1,a),this.#g.opacity=o,this.#_.position.set(0,.88,.3),this.#_.scale.set(t*1.5*s,1,a),this.#v.opacity=.7*o,this.#y.position.set(0,.9,.3+a),this.#y.scale.set(.22,.1,.75),this.#b.opacity=o}#at(e,t,n,r,i){let a=this.#I.set(e+n*Bm.lead,0,t+r*Bm.lead);this.#e.stable||!this.#o?this.#i.copy(a):this.#i.lerp(a,Bm.ease),this.#o=!0;let o=Bm.pitchDeg*Math.PI/180,s=i-this.#ge.start,c=s>=0&&s<10?this.#ge.strength*(1-s/10):0;this.#r.position.set(this.#i.x+c*Math.sin(s*2.3),this.#i.y+this.#a*Math.sin(o),this.#i.z+this.#a*Math.cos(o)+c*Math.cos(s*1.9)),this.#r.lookAt(this.#i)}groundAt(e,t){let n=this.#e.canvas.getBoundingClientRect();if(n.width===0||n.height===0)return null;let r=new K((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);this.#_e.setFromCamera(r,this.#r);let i=this.#_e.ray.intersectPlane(this.#ve,new q);return i?{x:i.x,y:i.z}:null}project(e,t,n){let r=new q(e,n,t).project(this.#r);if(r.z>1)return null;let i=this.#e.canvas.getBoundingClientRect();return{x:(r.x+1)/2*i.width,y:(1-r.y)/2*i.height}}resize(){let e=this.#e.canvas,t=e.clientWidth||1280,n=e.clientHeight||720;this.#t.setSize(t,n,!1),this.#r.aspect=t/n,this.#r.updateProjectionMatrix();let r=Bm.fov/2*Math.PI/180;this.#a=Math.max(Bm.distance,Bm.minWidth/(2*Math.tan(r)*this.#r.aspect))}reset(e){this.#$.hide(),this.#re.visible=!1,this.#se=[],this.#ae=[],this.#ce.clear(),this.#he.reset(e);for(let e of this.#pe)e.start=-1e3;for(let e of this.#R)e.start=-1e3;for(let e of this.#V)e.start=-1e3;for(let e of this.#W)e.start=-1e3;this.#ge={start:-1e3,strength:0},this.#o=!1}ambient(e,t,n,r){this.#he.ambient(e,t,n,r)}stats(){return{calls:this.#t.info.render.calls,triangles:this.#t.info.render.triangles,particles:this.#he.live}}dispose(){this.#t.dispose()}},Rh=[`很差`,`有點差`,`普通`,`不錯`,`很好`],zh=e=>e===null?`—`:`${(e/1e3).toFixed(1)} 秒`,Bh=e=>e===null?`—`:`${Math.round(e*100)}%`;function Vh(e,t){return t.count===0?`${e}：沒有擺放`:`${e}擺放 ${t.count} 次・中位數 ${zh(t.medianMs)}・90% 在 ${zh(t.p90Ms)} 內・10 秒內 ${Bh(t.within)}`}function Hh(e){let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let n=e=>String(e).padStart(2,`0`);return`${n(t.getMonth()+1)}/${n(t.getDate())} ${n(t.getHours())}:${n(t.getMinutes())}`}var Uh=class{element=T(`div`,{class:`trial-backdrop`,hidden:!0});#e;#t=!1;constructor(e){this.#e=e}get waiting(){return this.#t&&!this.element.hidden}close(){this.#t=!1,this.element.hidden=!0,this.element.replaceChildren()}#n(...e){this.element.hidden=!1,this.element.replaceChildren(T(`div`,{class:`trial-modal`},...e))}showIntro(){let{rooms:e,questions:t}=this.#e;this.#n(T(`h2`,null,`晶盤試煉`),T(`p`,null,`${e} 個房間，一房兩波。打倒敵人會得到經驗和水晶；清完一房會暫停，打開晶盤：三選一拿獎勵、升級得到的開格點用來開格，把水晶擺上晶盤變強，再進下一房。倒下會重生。`),T(`ul`,{class:`trial-stats`},T(`li`,null,`晶盤：手把 A 拿起／放下、LB／RB 旋轉、Y 跳到下一個能放的位置、X 收回、拿著水晶往下推到粉碎區按 A 粉碎、Menu 下一房`),T(`li`,null,`鍵鼠：拖曳或 Enter 拿起／放下、R 旋轉、F 下一個位置、B 收回、拖到粉碎區（或往下推到粉碎區按 Enter）粉碎、N 下一房`),T(`li`,null,`戰鬥中可以按 Tab（手把 View）查看晶盤，遊戲會暫停`)),T(`p`,{class:`trial-question`},`結束後請回答：${t.handling}${t.fun}`),T(`div`,{class:`trial-actions`},_(`紀錄彙整`,()=>this.showReport()),_(`開始`,()=>this.#e.onStart(),{class:`primary`})),T(`p`,{class:`trial-hint`},`按任意鍵或手把按鈕也能開始`)),this.#t=!0}showResult(e){this.#t=!1;let t=this.#e.metrics(e),{questions:n}=this.#e,r={handling:0,fun:0},i=T(`textarea`,{rows:3,placeholder:`擺水晶哪裡卡、哪裡順？成長有沒有感覺？（可以不寫）`}),a=_(`送出`,()=>{r.handling!==0&&r.fun!==0&&this.#r(this.#e.onRate({...r},i.value.trim()))});a.disabled=!0,a.classList.add(`primary`);let o=e=>{let t=Rh.map((n,i)=>_(T(`span`,{class:`rate-number`},String(i+1)),()=>{r[e]=i+1,t.forEach((e,t)=>{e.classList.toggle(`chosen`,t===i)}),a.disabled=r.handling===0||r.fun===0},{class:`rate`,title:n}));return t.forEach((e,t)=>{e.append(T(`span`,{class:`rate-label`},Rh[t]??``))}),T(`div`,{class:`rates`},...t)},s=e.build;this.#n(T(`h2`,null,e.outcome===`survived`?`${s.rooms} 房全清！`:`倒下了`),T(`ul`,{class:`trial-stats`},T(`li`,null,`Lv ${s.level} · 開了 ${s.openCells} 格 · 晶盤上 ${s.placed} 顆水晶 · 晶塵 ${s.dust}`),T(`li`,null,`戰鬥 ${lr(e.frames)} · 整理晶盤 ${lr(Math.round(t.arrangeSeconds*60))}（佔 ${Bh(t.menuShare)}）· 擊殺 ${e.stats.kills} · 倒下 ${e.stats.deaths}`),T(`li`,{class:`m2-answer`},Vh(`手把`,t.pad)),t.mouse.count>0?T(`li`,null,Vh(`滑鼠`,t.mouse)):null,t.keys.count>0?T(`li`,null,Vh(`鍵盤`,t.keys)):null),T(`p`,{class:`trial-question`},n.handling),o(`handling`),T(`p`,{class:`trial-question`},n.fun),o(`fun`),i,T(`div`,{class:`trial-actions`},a))}#r(e){let t=this.#e.store.persistent?`紀錄已存在這個瀏覽器。`:`測試頁不保存紀錄，要留下來請下載 JSON。`;this.#n(T(`h2`,null,`謝謝！順手 ${e.ratings.handling} / 5・好玩 ${e.ratings.fun} / 5`),T(`p`,null,t),T(`div`,{class:`trial-actions`},_(`下載這場 JSON`,()=>this.#e.download(`${e.id}.json`,e)),_(`紀錄彙整`,()=>this.showReport()),_(`再來一場`,()=>this.#e.onRestart(),{class:`primary`})))}showReport(){let e=this.#t,t=this.#e.store.load(),n=t.slice().reverse().map(e=>{let t=this.#e.metrics(e);return T(`tr`,null,T(`td`,null,Hh(e.createdAt)),T(`td`,null,`${e.build.rooms} 房・Lv ${e.build.level}`),T(`td`,null,lr(e.frames)),T(`td`,null,Bh(t.menuShare)),T(`td`,null,t.pad.count===0?`—`:`${t.pad.count} 次・${zh(t.pad.medianMs)}・${Bh(t.pad.within)}`),T(`td`,null,t.mouse.count+t.keys.count===0?`—`:`${t.mouse.count+t.keys.count} 次`),T(`td`,null,`${e.ratings.handling} / ${e.ratings.fun}`),T(`td`,{class:`trial-comment`},e.comment||`—`))});this.#n(T(`h2`,null,`晶盤試煉紀錄`),T(`p`,null,t.length===0?`還沒有紀錄。`:`共 ${t.length} 場`),t.length===0?null:T(`div`,{class:`trial-table`},T(`table`,null,T(`thead`,null,T(`tr`,null,...[`時間`,`進度`,`戰鬥`,`整理佔比`,`手把擺放（中位數・10 秒內）`,`鍵鼠擺放`,`順手／好玩`,`留言`].map(e=>T(`th`,null,e)))),T(`tbody`,null,...n))),T(`div`,{class:`trial-actions`},t.length===0?null:_(`下載全部 JSON`,()=>this.#e.download(`lattice-hunter-board-trials-${t.length}.json`,{records:t})),t.length===0?null:_(`清除全部`,()=>{window.confirm(`確定要清除這個瀏覽器裡的全部晶盤試煉紀錄？清除後無法復原。`)&&(this.#e.store.clear(),this.showReport())}),_(e?`返回`:`關閉`,()=>e?this.showIntro():this.close()))),this.#t=!1}},Wh={up:[`KeyW`,`ArrowUp`],down:[`KeyS`,`ArrowDown`],left:[`KeyA`,`ArrowLeft`],right:[`KeyD`,`ArrowRight`],dodge:[`Space`],skill2:[`KeyQ`],skill3:[`KeyE`],autoAim:[`KeyT`]},Gh=new Set([`INPUT`,`TEXTAREA`,`SELECT`]);function Kh(e){let t=e.target;return typeof t?.tagName==`string`&&Gh.has(t.tagName)||t?.isContentEditable===!0}var qh=6;function Jh(e){let{surface:t,groundAt:n,player:r,targets:i}=e,a=e.pad??en,o=e.mouseSnapDeg??15,s=e.autoAim??!1,c=e.gamepads??(()=>typeof navigator.getGamepads==`function`?navigator.getGamepads():[]),l=new Set,u=null,d=!1,f=!1,p=!1,m=!1,h=[!1,!1,!1],g=`keyboard`,_=!1,v=null,y=t=>{Kh(t)||(_=!0,Wh.dodge.includes(t.code)&&(t.preventDefault(),t.repeat||(m=!0)),!t.repeat&&Wh.skill2.includes(t.code)&&(h[1]=!0),!t.repeat&&Wh.skill3.includes(t.code)&&(h[2]=!0),!t.repeat&&Wh.autoAim.includes(t.code)&&(s=!s,e.onAutoAim?.(s)),l.add(t.code))},b=e=>l.delete(e.code),x=e=>{let t=u;u={x:e.clientX,y:e.clientY},(!t||Math.abs(t.x-u.x)+Math.abs(t.y-u.y)>=qh)&&(_=!0)},S=e=>{u={x:e.clientX,y:e.clientY},_=!0,e.button===0?(d=!0,p=!0):e.button===2&&(f=!0,h[0]=!0)},C=e=>{e.button===0?d=!1:e.button===2&&(f=!1)},w=()=>{l.clear(),d=!1,f=!1},T=e=>e.preventDefault();window.addEventListener(`keydown`,y),window.addEventListener(`keyup`,b),window.addEventListener(`pointermove`,x),t.addEventListener(`pointerdown`,S),window.addEventListener(`pointerup`,C),window.addEventListener(`blur`,w),t.addEventListener(`contextmenu`,T);let E=e=>e.some(e=>l.has(e));return{get autoAim(){return s},read(){v=null;for(let e of c())if(e?.connected&&e.mapping===`standard`){v=e;break}let t=v?an(v,a):null;_&&(g=`keyboard`),t?.active&&(g=`pad`),_=!1;let l=[+!!E(Wh.right)-!!E(Wh.left),+!!E(Wh.down)-!!E(Wh.up)],y=t!==null&&(t.move[0]!==0||t.move[1]!==0)&&t?t.move:l,b=t?.skills??[!1,!1,!1],x=[f||h[0]===!0||b[0],E(Wh.skill2)||h[1]===!0||b[1],E(Wh.skill3)||h[2]===!0||b[2]],S=r(),C=g===`pad`&&t?`pad`:s?`auto`:`mouse`,w=C===`mouse`&&u?n(u.x,u.y):null,T=ln(S,{by:C,exact:e.exactAim?.(x)??!1,move:y,stick:t?.aim??null,toCursor:w?[w.x-S.x,w.y-S.y]:null},i(),a,o),D={moveX:y[0],moveY:y[1],aimX:T[0],aimY:T[1],attack:d||p||t?.attack===!0,dodge:E(Wh.dodge)||m||t?.dodge===!0,skills:x,device:g};return p=!1,m=!1,h.fill(!1),D},rumble(e,t){let n=g===`pad`?v?.vibrationActuator:null;if(!n)return;let r=Math.max(0,Math.min(1,e));n.playEffect(`dual-rumble`,{duration:t,strongMagnitude:r,weakMagnitude:r*.6}).catch(()=>{})},dispose(){window.removeEventListener(`keydown`,y),window.removeEventListener(`keyup`,b),window.removeEventListener(`pointermove`,x),t.removeEventListener(`pointerdown`,S),window.removeEventListener(`pointerup`,C),window.removeEventListener(`blur`,w),t.removeEventListener(`contextmenu`,T)}}}var Yh=8,Xh=3,Zh=45,Qh=1.6,$h=2.4,eg=.45,tg=30,ng=2.5,rg=150,ig=class{element;#e=T(`div`,{class:`hp-fill`});#t=T(`span`,{class:`hp-text`});#n=T(`div`,{class:`combo`});#r=T(`div`,{class:`progress`});#i=T(`div`,{class:`run-info`});#a=T(`div`,{class:`down-banner`,hidden:!0},`倒下了，即將重生…`);#o=T(`div`,{class:`end-banner`,hidden:!0});#s=T(`b`);#c=T(`span`);#l=T(`div`,{class:`boss-hp-fill`});#u=T(`div`,{class:`boss-tick`});#d=T(`span`,{class:`boss-hp-text`});#f=T(`div`,{class:`boss-poise-fill`});#p=T(`div`,{class:`boss-bar`,hidden:!0},T(`div`,{class:`boss-name`},this.#s,this.#c),T(`div`,{class:`boss-hp`},this.#l,this.#u,this.#d),T(`div`,{class:`boss-poise`},this.#f));#m=``;#h=T(`div`,{class:`floaters`});#g=T(`div`,{class:`hurt-vignette`});#_=T(`div`,{class:`build-line`,hidden:!0});#v=T(`b`,{class:`tier-chip`,hidden:!0});#y=T(`div`,{class:`level-toast`,hidden:!0});#b=-1e3;#x=T(`div`,{class:`level-toast stone`,hidden:!0});#S=-1e3;#C=[];#w=``;#T=T(`div`,{class:`controls`});#E=``;#D=[];#O=new Map;#k=null;#A=T(`div`,{class:`door-labels`});#j=T(`div`,{class:`elite-labels`});#M=new Map;#N=[];#P=``;#F;#I=``;constructor(){this.#F=T(`div`,{class:`hud-panel`},T(`div`,{class:`hud-title`},`晶格獵人`,T(`span`,null,`戰鬥原型`),this.#v),T(`div`,{class:`hp-bar`},this.#e,this.#t),this.#n,this.#r,this.#_),this.element=T(`div`,{class:`hud`},this.#g,this.#A,this.#j,this.#F,this.#y,this.#x,this.#i,this.#a,this.#o,this.#p,this.#h,T(`div`,{class:`skill-bar`},...this.#R()),this.#T),this.#L(`keyboard`,!1,!1)}#L(e,t,n){let r=`${e}|${t}|${n}`;if(r===this.#E)return;this.#E=r;let i=(...e)=>e.map(e=>T(`kbd`,null,e)),a=e===`pad`?[T(`span`,null,`左搖桿 移動`),T(`span`,null,`右搖桿 瞄準（不推時自動瞄準）`),T(`span`,null,`按住`,...i(`X`),` 攻擊`),T(`span`,null,...i(`A`),` 閃避`),T(`span`,null,...i(`Y`,`RB`,`RT`),` 技能`),t?T(`span`,null,...i(`View`),` 晶盤`):null]:[T(`span`,null,...i(`WASD`),` 移動`),n?T(`span`,null,`自動瞄準（`,...i(`T`),` 關閉）`):T(`span`,null,`滑鼠 瞄準`),T(`span`,null,`按住`,...i(`左鍵`),` 攻擊（自動接 5 段，可邊打邊走）`),T(`span`,null,...i(`空白鍵`),` 閃避`),T(`span`,null,...i(`右鍵`,`Q`,`E`),` 技能`),t?T(`span`,null,...i(`Tab`),` 晶盤`):null];this.#T.replaceChildren(...a.filter(e=>e!==null))}#R(){for(let e=0;e<Xh;e++){let e=T(`span`,{class:`skill-name`}),t=T(`div`,{class:`skill-shade`}),n=T(`span`,{class:`skill-timer`}),r=T(`kbd`,{class:`skill-key`}),i=T(`div`,{class:`skill-slot`},t,e,n,r);this.#C.push({element:i,name:e,shade:t,timer:n,key:r})}return this.#C.map(e=>e.element)}#z(e,t){let n=e.player.skills,r=[n.map(e=>e.cooldown).join(`|`),t.skillKeys.join(`|`),t.skills.map(e=>e?.name??``).join(`|`)].join(`/`);r!==this.#w&&(this.#w=r,this.#C.forEach((e,r)=>{let i=t.skills[r],a=n[r];e.element.classList.toggle(`empty`,!i),e.key.textContent=t.skillKeys[r]??``,e.name.textContent=i?i.name:`—`;let o=i&&a?a.cooldown:0;e.element.classList.toggle(`cooling`,o>0),e.shade.style.height=i&&o>0?`${100*o/i.cooldown}%`:`0%`,e.timer.textContent=o>0?(o/60).toFixed(1):``}))}update(e,t){let n=e.player,r=e.stats,i=t.timeLeft===null?null:Math.ceil(t.timeLeft/60),a=t.build,o=[n.hp,n.maxHp,n.step,n.dead,r.kills,r.deaths,e.wave,i,e.outcome,a?[a.level,a.xp,a.unlockPoints,a.bag,a.room,a.wave].join(`,`):``,a?.region?[a.region.kind,a.region.gold,a.region.doors.length,a.region.tier??0,a.region.dust??``].join(`,`):``].join(`|`);if(o!==this.#I){this.#I=o,this.#e.style.width=`${100*n.hp/n.maxHp}%`,this.#e.classList.toggle(`low`,n.hp/n.maxHp<.3),this.#t.textContent=`${n.hp} / ${n.maxHp}`;let s=t.stepNames.map((e,t)=>T(`span`,{class:`pip${n.step===t?` on`:``}`,title:e},String(t+1)));this.#n.replaceChildren(T(`span`,{class:`label`},`連段`),...s),this.#r.textContent=a?.region?a.region.kind===`shop`&&a.region.doors.length>0?`第 ${a.room+1}/${a.rooms} 房・商店 · 走到中間的櫃台買東西，門在房間上方`:a.region.doors.length>0?a.region.prep?`第 ${a.room+1}/${a.rooms} 房清除了 · 出口在房間上方，走進出口前往下一房`:`第 ${a.room+1}/${a.rooms} 房清除了 · 門在房間上方，走進一扇門前往下一房`:`第 ${a.room+1}/${a.rooms} 房 · 第 ${Math.min(a.wave+1,a.waves)}/${a.waves} 波 · 擊殺 ${r.kills}`:a?`第 ${a.room+1}/${a.rooms} 房 · 第 ${Math.min(a.wave+1,a.waves)}/${a.waves} 波 · 擊殺 ${r.kills} · 倒下 ${r.deaths}`:i===null?`擊殺 ${r.kills} · 第 ${e.wave+1} 波 · 倒下 ${r.deaths}`:`擊殺 ${r.kills} · 第 ${e.wave+1} 波 · 剩餘 ${Math.floor(i/60)}:${String(i%60).padStart(2,`0`)}`,this.#_.hidden=!a,this.#_.classList.toggle(`prep`,a?.region?.prep===!0);let c=a?.region?.tier??0;if(this.#v.hidden=c===0,this.#v.textContent=c>0?`晶蝕 ${c}`:``,a){let e=a.nextXp===null?0:a.nextXp-a.levelXp,t=e>0?(a.xp-a.levelXp)/e:1;this.#_.replaceChildren(T(`b`,null,`Lv ${a.level}`),T(`span`,{class:`xp-bar`},T(`span`,{style:`width:${Math.round(t*100)}%`})),T(`span`,{class:a.unlockPoints>0?`hot`:``},`開格點 ${a.unlockPoints}`),T(`span`,{class:a.bag>a.bagSize?`warn`:``},`晶囊 ${a.bag}/${a.bagSize}`),...a.region?[T(`span`,{class:`gold`},`金幣 ${a.region.gold}`)]:[],...a.region?.dust===void 0?[]:[T(`span`,null,`晶塵 ${a.region.dust}`)])}this.#a.hidden=!n.dead||e.outcome!==null,this.#o.hidden=!t.endBanner||e.outcome===null,this.#o.hidden||this.#o.replaceChildren(T(`b`,null,e.outcome===`fell`?`倒下了，這一局結束`:a?.region?`打倒 Boss，區域通關！`:`這一局結束了`),T(`span`,null,`按 Enter 再來一局（手把：A 或 X）`))}this.#V(a?.region?.doors??[]),this.#B(t.boss??null),this.#g.style.opacity=n.hurt>0?String(.6*n.hurt/t.hurtFrames):`0`,this.#z(e,t),this.#L(t.device,a!==null,t.autoAim===!0);let s=e.frame-this.#b;this.#y.hidden=s<0||s>rg;let c=e.frame-this.#S;this.#x.hidden=c<0||c>rg,this.#i.textContent=[t.test?`測試模式（只由測試橋推進）`:null,`種子 ${t.seed}`,`幀 ${e.frame}`,t.fps===null?null:`${t.fps} FPS`,t.muted===null?null:t.muted?`已靜音（M）`:`M 靜音`,t.autoAim===null?null:t.autoAim?`自動瞄準中（T）`:`T 自動瞄準`].filter(Boolean).join(` · `)}#B(e){let t=e?[e.name,e.hp,e.maxHp,e.phase,e.poise,e.poiseMax,e.broken].join(`|`):``;t!==this.#m&&(this.#m=t,this.#p.hidden=!e,e&&(this.#s.textContent=e.name,this.#c.textContent=e.broken?`破韌！`:e.phase===2?`第二階段`:``,this.#c.className=e.broken?`broken`:e.phase===2?`phase2`:``,this.#l.style.width=`${100*e.hp/e.maxHp}%`,this.#u.style.left=`${100*e.phaseAt}%`,this.#d.textContent=`${e.hp} / ${e.maxHp}`,this.#f.style.width=`${100*e.poise/e.poiseMax}%`))}#V(e){let t=e.map(e=>`${e.x},${e.y},${e.text}`).join(`|`);t!==this.#P&&(this.#P=t,this.#N=e.map(e=>({element:T(`div`,{class:`door-label ${e.kind}`},e.text),x:e.x,y:e.y})),this.#A.replaceChildren(...this.#N.map(e=>e.element)))}elites(e){let t=new Set;for(let n of e){t.add(n.id);let e=this.#M.get(n.id);e||(e={element:T(`div`,{class:`elite-label`},n.text),x:n.x,y:n.y},this.#M.set(n.id,e),this.#j.append(e.element)),e.x=n.x,e.y=n.y}for(let[e,n]of this.#M)t.has(e)||(n.element.remove(),this.#M.delete(e))}notice(e,t){this.#b=t,this.#y.textContent=e}levelUp(e,t){this.notice(`升級！Lv ${e}・清房後可以開格`,t)}stone(e,t){this.#S=t,this.#x.textContent=`開格石！開格點 +${e}`}damage(e,t,n,r,i,a=!1,o=!1,s=null){let c=T(`div`,{class:`floater${r?` hurt`:``}${a?` crit`:``}${o?` shield`:``}${s?` element`:``}`,style:s?`--element: ${s}`:null},a?`${e}!`:String(e));this.#H(c,i,t,n,Qh)}reaction(e,t,n,r,i){let a=this.#O.get(e);if(a!==void 0&&i>=a&&i-a<tg)return;this.#O.set(e,i);let o=T(`div`,{class:`floater reaction element`,style:`--element: ${t}`},`${e}！`),s=this.#k,c=s!==null&&s.frame===i&&Math.abs(s.x-n)+Math.abs(s.y-r)<1.5&&s?s.count:0;this.#k={frame:i,x:n,y:r,count:c+1},this.#H(o,i,n,r,$h+c*eg)}#H(e,t,n,r,i){this.#h.append(e),this.#D.push({element:e,start:t,x:n,y:r,lift:i}),this.#D.length>40&&this.#D.shift()?.element.remove()}place(e,t){let n=this.element.clientWidth,r=this.element.clientHeight;for(let e of this.#M.values()){let n=t(e.x,e.y,ng);e.element.hidden=!n,n&&(e.element.style.transform=`translate(${n.x}px, ${n.y}px) translate(-50%, -100%)`)}let i=this.element.getBoundingClientRect(),a=this.#F.getBoundingClientRect(),o=a.right-i.left+Yh,s=a.bottom-i.top+Yh;for(let e of this.#N){let i=t(e.x,e.y,2.2),a=i!==null&&i.x>=0&&i.x<=n&&i.y>=0&&i.y<=r;if(e.element.hidden=!a,!i||!a)continue;let c=e.element.offsetWidth/2,l=i.y-e.element.offsetHeight/2<s&&i.x-c<o?o+c:i.x;e.element.style.transform=`translate(${l}px, ${i.y}px) translate(-50%, -50%)`}this.#D=this.#D.filter(n=>{let r=e-n.start;if(r>Zh)return n.element.remove(),!1;let i=t(n.x,n.y,n.lift+Math.max(0,r)*.025);return n.element.hidden=!i||r<0,i&&(n.element.style.transform=`translate(${i.x}px, ${i.y}px) translate(-50%, -50%)`,n.element.style.opacity=String(Math.min(1,1.6-r/Zh))),!0})}clear(){for(let e of this.#D)e.element.remove();this.#D=[],this.#O.clear(),this.elites([]),this.#b=-1e3,this.#S=-1e3}},ag=250,og=e=>e.toFixed(1),sg=class{element=T(`div`,{class:`perf-overlay`,hidden:!0});#e=-1/0;get visible(){return!this.element.hidden}set visible(e){this.element.hidden=!e,this.#e=-1/0}due(e){return this.visible&&e-this.#e>=ag}show(e,t,n){this.#e=e;let{interval:r,work:i}=t,a=[`效能（F3 開關）`,`FPS ${t.fps.toFixed(1)} · 慢幀 ${(100*t.slow).toFixed(1)}%（${t.frames} 幀）`,`幀間隔 p50 ${og(r.p50)} · p95 ${og(r.p95)} · p99 ${og(r.p99)} ms`,`工作 p50 ${og(i.p50)} · p95 ${og(i.p95)} · p99 ${og(i.p99)} ms`,`繪製呼叫 ${n.calls} · 三角形 ${(n.triangles/1e3).toFixed(1)}k`,`敵人 ${n.enemies} · 投射物 ${n.projectiles} · 粒子 ${n.particles}`];this.element.replaceChildren(...a.map(e=>T(`div`,null,e)))}},cg=1e3/60,lg=250,ug=`core:stress`,dg=/^(F\d+|KeyM|Shift|Control|Alt|Meta|Tab|CapsLock)/,fg=`core:region1`,pg=`lattice-hunter.sound-off`,mg=`lattice-hunter.autoaim`;function hg(){try{return window.localStorage.getItem(pg)===`1`}catch{return!1}}function gg(e,t,n,r){let i=Number(e.get(t));return e.has(t)&&Number.isFinite(i)&&i>=0&&i<=r?i:n}var _g={keyboard:[`右鍵`,`Q`,`E`],pad:[`Y`,`RB`,`RT`]};function vg(e){try{window.localStorage.setItem(pg,e?`1`:`0`)}catch{}}function yg(){try{return window.localStorage.getItem(mg)===`1`}catch{return!1}}function bg(e){try{window.localStorage.setItem(mg,e?`1`:`0`)}catch{}}var xg=()=>1e5+Math.floor(Math.random()*9e5);async function Sg(e){let t=new URLSearchParams(window.location.search),r=t.has(`test`),a=t.get(`mode`)===`trial`,o=t.get(`mode`)===`board`,s=t.get(`mode`)===`build`,l=t.get(`mode`)===`run`,u=a||o||s||l,f=Number(t.get(`seed`)),p=t.has(`seed`)&&Number.isInteger(f)&&f>=0?f:xg(),{registry:h,issues:g}=await Le(Ye(),{gameVersion:ct});for(let e of g)e.level===`error`&&console.error(`content error`,e);let _=r&&t.has(`arena`),v=a?ui:o&&!_?In:s&&!_?Kn:l&&!_?fg:V(t.get(`arena`)??`core:training`,`core`),y=h.arenas.has(v)?v:m,b=y===ug,x=gg(t,`particles`,b?500:0,5e3),S=t.get(`skin`)??`proto`,C=Qe(at(S));if(!C.skin)throw Error(`外觀包 ${S} 有錯：${C.errors.join(`；`)}`);let w=xe(C.skin,h.skinAdditions),E=wt(h,{seed:p,arena:y}),D=T(`canvas`,{class:`game-canvas`}),O=new ig,k=new sg;k.visible=b||t.has(`perf`),e.replaceChildren(D,O.element,k.element);let A=new li,j=new Lh({canvas:D,skin:w,content:E.content(),seed:p,stable:r}),ee=r?null:new Si(w,hg());if(ee){let e=()=>ee.unlock();window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t=>{e(),t.code===`KeyM`&&!t.repeat&&!Kh(t)&&(ee.muted=!ee.muted,vg(ee.muted))})}let M={...en,deadzone:gg(t,`deadzone`,en.deadzone,.9),assistDeg:gg(t,`assistDeg`,en.assistDeg,90),snapDeg:gg(t,`snapDeg`,en.snapDeg,45),assistRange:gg(t,`assistRange`,en.assistRange,30)},N=r?null:Jh({surface:D,groundAt:(e,t)=>j.groundAt(e,t),player:()=>E.world().player,targets:()=>E.world().enemies,pad:M,mouseSnapDeg:gg(t,`mouseSnapDeg`,15,45),exactAim:e=>{let t=E.world();return t.player.skills.some((n,r)=>(e[r]===!0||n.buffer>0)&&vt(t,E.content(),r)?.ability.kind===`dash`)},autoAim:yg(),onAutoAim:e=>{bg(e),O.notice(e?`自動瞄準：開（再按 T 改回滑鼠瞄準）`:`自動瞄準：關（滑鼠瞄準）`,E.world().frame)}}),P=`keyboard`,ne=null,re=e=>{let t=E.world(),n=t.frame-1;j.play(e,n),x>0&&j.ambient(n,x,t.width,t.height),ee?.play(e,E.world().player.x);for(let t of e){if(t.type===`damage`){let e=(t.shield??0)>0,r=E.content(),i=t.reaction?r.reactions.get(t.reaction)?.color??null:t.element?r.elements.get(t.element)?.color??null:null;O.damage(t.amount,t.x,t.y,t.target===0,n,t.crit===!0,e,i)}if(t.type===`reaction`){let e=E.content().reactions.get(t.reaction);e&&O.reaction(e.name,e.color,t.x,t.y,n)}t.type===`cue`&&t.cue===d.levelUp&&O.levelUp(t.strength,n),t.type===`stone`&&(O.stone(t.points,n),R.stone(t.points)),t.type===`door`&&t.blocked===`bagOver`&&O.notice(`晶囊太滿了：按 Tab 整理晶盤，再走進門`,n),t.type===`cue`&&t.cue===d.hurt&&N?.rumble(.7,160),t.type===`cue`&&t.cue===d.hit&&t.strength>=2&&N?.rumble(.35,90)}},ie=[],ae=[],F={keyboard:0,pad:0},oe=!u||r,L=!1,se=r?Tr():wr(pi),ce={registry:h,world:()=>E.world(),content:()=>E.content(),reset(e,t,n,i){E.reset(e,t,n,i),ne=null,j.reset(e),O.clear(),ie=[],ae=[],F.keyboard=0,F.pad=0,L=!1,de?.close(),me?.close(),_e?.reset(),R.reset(),u&&!r&&(oe=!1,de?.showIntro(),me?.showIntro(),_e?.ui.showIntro())},step(e){ne=zm(E.world()),u&&E.world().outcome===null&&ie.push(e);let t=E.step(e);return re(t),R.afterStep(),ge?.afterStep(),t},board(e){_e?.before(e);let t=E.board(e);return _e?.after(e,t.ok),t.ok&&(o||s||l)&&ae.push([ie.length,e]),ge?.afterCommand(e,t.ok),t.ok&&(ee?.play(t.events,E.world().player.x),ne=zm(E.world())),R.refresh(),t},spawn(e,t,n,r){E.spawn(e,t,n,r)},give(e){let t=E.give?E.give(e):`noGive`;return R.refresh(),t},teleport(e,t){E.teleport(e,t),ne=null},load(e){E.load(e),ne=null,j.reset(e.seed),O.clear(),L=!1,R.reset()},perf:()=>({...A.report(),...j.stats()})},le=0,R=new On({host:ce,skin:w,onPause:()=>{},onResume:()=>{N?.read(),le=Ee.attack|Ee.dodge|Ee.skill1|Ee.skill2|Ee.skill3,je=performance.now(),Ne=0},device:()=>P===`pad`?`pad`:`keys`,keyNames:e=>_g[e===`pad`?`pad`:`keyboard`]});e.append(R.screen.element),window.addEventListener(`keydown`,e=>{e.code===`F3`&&(e.preventDefault(),k.visible=!k.visible)});let ue=()=>{de?.close(),me?.close(),_e?.ui.close(),N?.read(),oe=!0,je=performance.now(),Ne=0},de=a?new pr({store:se,question:di,seconds:(h.arenas.get(`core:trial`)?.timeLimit??0)/60,metrics:mi,onStart:ue,onRestart:()=>ce.reset(xg(),ui),onRate:(e,t)=>{let n=E.world(),r=`trial-${n.seed}-${Date.now()}`,i={version:1,id:r,createdAt:new Date().toISOString(),seed:n.seed,arena:n.arena,outcome:n.outcome??`fell`,frames:n.frame,stats:{...n.stats},devices:{...F},rating:e,comment:t,replay:Nn({name:r,seed:n.seed,arena:n.arena,packs:h.packs.map(e=>`${e.id}@${e.version}`),inputs:ie,hash:I(n)})};return se.add(i),i},download:dt}):null;de&&(e.append(de.element),r||de.showIntro(),window.addEventListener(`keydown`,e=>{de.waiting&&!e.repeat&&!dg.test(e.code)&&ue()}));let fe=(e,t)=>{let n=E.world(),r=n.build,i=`board-${n.seed}-${Date.now()}`,a=r&&(r.phase===`cleared`||n.outcome===`survived`);return{version:3,mode:`board`,id:i,createdAt:new Date().toISOString(),seed:n.seed,arena:n.arena,outcome:n.outcome??`fell`,frames:n.frame,stats:{...n.stats},devices:{...F},build:{level:r?.level??1,rooms:(r?.room??0)+ +!!a,openCells:r?De(r.board.spec):0,placed:r?.board.placements.length??0,dust:r?.dust??0,finalStats:{...n.player.stats}},placements:[...R.telemetry.placements],boardTime:R.telemetry.time,ratings:e,comment:t,replay:Nn({name:i,seed:n.seed,arena:n.arena,packs:h.packs.map(e=>`${e.id}@${e.version}`),inputs:ie,hash:I(n),commands:ae})}},pe=r?Cr():Sr(`lattice-hunter.board-trial.records`,Hn,Wn),me=o?new Uh({store:pe,questions:Ln,rooms:h.arenas.get(y)?.rooms.length??0,metrics:Gn,onStart:ue,onRestart:()=>ce.reset(xg(),y),onRate:(e,t)=>{let n=fe(e,t);return pe.add(n),n},download:dt}):null;me&&(e.append(me.element),r||me.showIntro(),window.addEventListener(`keydown`,e=>{me.waiting&&!e.repeat&&!dg.test(e.code)&&ue()}));let he=0,ge=l?new oi({host:ce,test:r,arena:y,saves:r?hi():gi(),seed:r?()=>p+he++:xg,telemetry:()=>R.telemetry,inputs:()=>ie,commands:()=>ae,devices:()=>F,restore:(e,t,n)=>{ie=e,ae=t,F.keyboard=n.keyboard,F.pad=n.pad},onPlay:ue,onWait:()=>{oe=r},download:dt}):null;ge&&(e.append(ge.ui.element),ge.start(),document.addEventListener(`visibilitychange`,()=>{document.hidden&&ge.saveNow()}),window.addEventListener(`pagehide`,()=>ge.saveNow()));let _e=s?new Dr({host:ce,test:r,rooms:h.arenas.get(y)?.rooms.length??0,telemetry:()=>R.telemetry,inputs:()=>ie,commands:()=>ae,devices:()=>F,onStart:ue,onRestart:()=>ce.reset(xg(),y),download:dt}):null;_e&&(e.append(_e.ui.element),r||_e.ui.showIntro(),window.addEventListener(`keydown`,e=>{_e.ui.waiting&&!e.repeat&&!dg.test(e.code)&&ue()}));let ve=!1,z=()=>{if(!N)return Ke;let e=N.read();P=e.device,ve=e.device===`pad`&&(e.attack||e.dodge),u&&F[e.device]++;let t=(e.attack?Ee.attack:0)|(e.dodge?Ee.dodge:0)|(e.skills[0]?Ee.skill1:0)|(e.skills[1]?Ee.skill2:0)|(e.skills[2]?Ee.skill3:0);return le&=t,Me({moveX:e.moveX,moveY:e.moveY,aimX:e.aimX,aimY:e.aimY,buttons:t&~le})},ye=()=>{let e=E.world().enemies.find(e=>e.boss),t=e?.boss;return!e||!t?null:{name:h.enemies.get(e.def)?.name??e.def,hp:e.hp,maxHp:e.maxHp,phaseAt:t.phaseHp/e.maxHp,phase:t.phase,poise:t.poise,poiseMax:t.poiseMax,broken:e.stun>0}},be=()=>{let e=E.world(),t=e.build;if(!t)return null;let r=E.content(),a=r.arenas.get(e.arena),o=c(r,a),s=t.route,l=a?.route,u={pickEveryRoom:l?.rewards.pickEveryRoom??!1,stone:l?.rewards.stone??1,freeCrystals:l?.shop?.freeCrystals??0,workshop:l?.shop?.services!==void 0,prep:l?.prep!==void 0},d=l?.bossShop!==void 0&&s!==null&&s.rooms.length===l.length;return{level:t.level,xp:t.xp,levelXp:o[t.level-1]?.xp??0,nextXp:o[t.level]?.xp??null,unlockPoints:t.unlockPoints,bag:t.bag.length,bagSize:Ce(t,r),room:t.room,rooms:a?Ve(a):0,wave:e.wave,waves:i(e,r)?.waves.length??0,region:s?{kind:s.rooms.at(-1)?.plan.kind??`combat`,gold:s.gold,...s.tier?{tier:s.tier}:{},...l?.prep?{prep:!0,dust:t.dust}:{},doors:t.phase===`doors`?[...s.doors.map(e=>({x:e.x,y:e.y,text:n(e.plan,u,d),kind:e.plan.kind})),...s.shop?[{x:s.shop.x,y:s.shop.y,text:`商店・走過來看看`,kind:`shop`}]:[]]:[]}:null}},B=E.content().action.steps.map(e=>e.name),Se=E.content().skills,H=null,Te=[],Oe=()=>{let e=E.world(),t=e.build?.gear?.kit??null,n=e.player.stats.cdr;return H&&H.kit===t&&H.cdr===n||(H={kit:t,cdr:n},Te=t?t.skills.map(e=>e?{name:`${h.crystals.get(e.def)?.name??e.def} Lv${e.level}`,cooldown:Be(e.cooldown,n)}:void 0):Se.map(e=>({name:e.name,cooldown:Be(e.cooldown,n)}))),Te},ke=!0,Ae=()=>{ke=!0,ce.reset(xg(),y)};window.addEventListener(`keydown`,e=>{e.code!==`Enter`||e.repeat||u||E.world().outcome===null||R.screen.open||Ae()});let je=performance.now(),Ne=0,Pe=0,Fe=null,Ie=je,Re=-1,ze=e=>{let t=performance.now();if(R.pollPad(e)&&(P=`pad`),ge?.pollPad(e)&&(P=`pad`),(de?.waiting||me?.waiting||_e?.ui.waiting)&&N){let e=N.read();e.device===`pad`&&(e.attack||e.dodge||e.skills.some(Boolean))&&ue()}if(!r&&oe&&!R.paused)for(Ne+=Math.min(lg,e-je);Ne>=cg&&!R.paused;)ce.step(z()),Ne-=cg;je=e,!u&&E.world().outcome!==null&&!R.screen.open&&(ve?ke||Ae():ke=!1);let n=r?1:Ne/cg,i=E.world();me&&i.outcome&&!L&&(L=!0,oe=!1,me.showResult(fe({handling:0,fun:0},``))),_e&&i.outcome&&!L&&(L=!0,oe=!1,_e.ui.showResult(_e.record({predict:0,deliberate:0},``))),ge&&i.outcome&&!L&&(L=!0,oe=!1,ge.finish()),de&&i.outcome&&!L&&(L=!0,oe=!1,de.showResult({outcome:i.outcome,frames:i.frame,stats:{...i.stats},devices:{...F}})),j.render(i,ne,n),O.elites(i.enemies.flatMap(e=>{if(!e.elite)return[];let[t,r]=ne?.enemies.get(e.id)??[e.x,e.y],i=[`精英`,...e.elite.affixes.map(e=>h.affixes.get(e)?.name??e)].join(`・`);return[{id:e.id,x:t+(e.x-t)*n,y:r+(e.y-r)*n,text:i}]})),O.place(i.frame-1+n,(e,t,n)=>j.project(e,t,n)),Pe++,e-Ie>=1e3&&(Fe=Math.round(Pe*1e3/(e-Ie)),Pe=0,Ie=e),O.update(i,{seed:i.seed,test:r,fps:r?null:Fe,stepNames:B,hurtFrames:te.hurtFrames,skills:Oe(),skillKeys:_g[P],device:P,muted:ee?ee.muted:null,autoAim:N?N.autoAim:null,timeLeft:i.timeLimit===null?null:i.timeLimit-i.frame,build:be(),endBanner:!u,boss:ye()});let a=performance.now();if(Re>=0&&A.record(e-Re,a-t),Re=e,k.due(a)){let e=j.stats();k.show(a,A.report(),{calls:e.calls,triangles:e.triangles,particles:e.particles,enemies:i.enemies.length,projectiles:i.projectiles.length})}requestAnimationFrame(ze)};requestAnimationFrame(ze),window.addEventListener(`resize`,()=>j.resize()),r&&we(ce),r&&(window.__bridge={...window.__bridge,board:()=>({placements:R.telemetry.placements,time:R.telemetry.time}),...ge?{run:e=>ge.bridge(e)}:{}}),document.body.dataset.ready=`true`}var Cg=document.querySelector(`#app`);Cg&&Sg(Cg).catch(e=>{console.error(e),Cg.replaceChildren(T(`p`,{class:`fatal`},`遊戲載入失敗：${e instanceof Error?e.message:String(e)}`))});