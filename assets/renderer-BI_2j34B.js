import{B as e,Gt as t,Jt as n,V as r,qt as i}from"./game-BDT7hJft.js";import{S as a,St as o,T as s,Y as c,_t as l,a as u,b as d,ct as f,gt as p,ht as m,i as h,n as g,o as _,pt as v,ut as y,yt as b}from"./globSources-BMV8-kXz.js";var x=`proto`,S=`lattice`;function C(e){let t=u(g(e));if(!t.skin)throw Error(`外觀包 ${e} 有錯：${t.errors.join(`；`)}`);return t.skin}function w(e,t){let n=h(C(x),t);return e===`proto`?n:_(h(C(e),t),n)}var T=1e3,E=1001,D=1002,O=1003,ee=1004,k=1005,A=1006,te=1007,ne=1008,re=1009,j=1010,ie=1011,ae=1012,oe=1013,se=1014,ce=1015,le=1016,ue=1017,de=1018,fe=1020,pe=35902,me=35899,he=1021,ge=1022,_e=1023,ve=1026,ye=1027,be=1028,xe=1029,Se=1030,Ce=1031,we=1033,Te=33776,Ee=33777,De=33778,Oe=33779,ke=35840,Ae=35841,je=35842,Me=35843,Ne=36196,Pe=37492,Fe=37496,Ie=37488,M=37489,Le=37490,Re=37491,ze=37808,N=37809,Be=37810,P=37811,Ve=37812,He=37813,Ue=37814,We=37815,Ge=37816,Ke=37817,qe=37818,Je=37819,Ye=37820,Xe=37821,Ze=36492,Qe=36494,$e=36495,et=36283,tt=36284,nt=36285,rt=36286,it=2300,at=2301,ot=2302,st=2303,ct=2400,lt=2401,ut=2402,dt=3200,ft=`srgb`,pt=`srgb-linear`,mt=`linear`,ht=`srgb`,gt=7680,_t=35044,vt=35048,yt=2e3;function bt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function xt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function St(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ct(){let e=St(`canvas`);return e.style.display=`block`,e}var wt={};function Tt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Et(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function F(...e){e=Et(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function I(...e){e=Et(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Dt(...e){let t=e.join(` `);t in wt||(wt[t]=!0,F(...e))}function Ot(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var kt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},At=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},jt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Mt=Math.PI/180,Nt=180/Math.PI;function Pt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(jt[e&255]+jt[e>>8&255]+jt[e>>16&255]+jt[e>>24&255]+`-`+jt[t&255]+jt[t>>8&255]+`-`+jt[t>>16&15|64]+jt[t>>24&255]+`-`+jt[n&63|128]+jt[n>>8&255]+`-`+jt[n>>16&255]+jt[n>>24&255]+jt[r&255]+jt[r>>8&255]+jt[r>>16&255]+jt[r>>24&255]).toLowerCase()}function Ft(e,t,n){return Math.max(t,Math.min(n,e))}function It(e,t){return(e%t+t)%t}function Lt(e,t,n){return(1-n)*e+n*t}function Rt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function zt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var L=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:F(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ht.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ht.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this.z=Ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this.z=Ft(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vt.copy(this).projectOnVector(e),this.sub(Vt)}reflect(e){return this.sub(Vt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vt=new R,Ht=new Bt,z=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Dt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Ut.makeScale(e,t)),this}rotate(e){return Dt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Ut.makeRotation(-e)),this}translate(e,t){return Dt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Ut.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ut=new z,Wt=new z().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gt=new z().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kt(){let e={enabled:!0,workingColorSpace:pt,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Jt(e.r),e.g=Jt(e.g),e.b=Jt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Yt(e.r),e.g=Yt(e.g),e.b=Yt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?mt:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Dt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Dt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[pt]:{primaries:t,whitePoint:r,transfer:mt,toXYZ:Wt,fromXYZ:Gt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ft},outputColorSpaceConfig:{drawingBufferColorSpace:ft}},[ft]:{primaries:t,whitePoint:r,transfer:ht,toXYZ:Wt,fromXYZ:Gt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ft}}}),e}var qt=Kt();function Jt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Yt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Xt,Zt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xt===void 0&&(Xt=St(`canvas`)),Xt.width=e.width,Xt.height=e.height;let t=Xt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Xt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=St(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Jt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Jt(t[e]/255)*255):t[e]=Jt(t[e]);return{data:t,width:e.width,height:e.height}}return F(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Qt=0,$t=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qt++}),this.uuid=Pt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(en(r[t].image)):e.push(en(r[t]))}else e=en(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function en(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Zt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(F(`Texture: Unable to serialize Texture.`),{})}var tn=0,nn=new R,rn=class e extends At{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=E,i=E,a=A,o=ne,s=_e,c=re,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tn++}),this.uuid=Pt(),this.name=``,this.source=new $t(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new L(0,0),this.repeat=new L(1,1),this.center=new L(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new z,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nn).x}get height(){return this.source.getSize(nn).y}get depth(){return this.source.getSize(nn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){F(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?F(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case T:e.x-=Math.floor(e.x);break;case E:e.x=e.x<0?0:1;break;case D:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case T:e.y-=Math.floor(e.y);break;case E:e.y=e.y<0?0:1;break;case D:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null,rn.DEFAULT_MAPPING=300,rn.DEFAULT_ANISOTROPY=1;var an=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this.z=Ft(this.z,e.z,t.z),this.w=Ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this.z=Ft(this.z,e,t),this.w=Ft(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},on=class extends At{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:A,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t),this.textures=[];let r=new rn({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:A,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new $t(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},sn=class extends on{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},cn=class extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=O,this.minFilter=O,this.wrapR=E,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},ln=class extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=O,this.minFilter=O,this.wrapR=E,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},B=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/un.setFromMatrixColumn(e,0).length(),i=1/un.setFromMatrixColumn(e,1).length(),a=1/un.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fn,e,pn)}lookAt(e,t,n){let r=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),mn.crossVectors(n,gn),mn.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),mn.crossVectors(n,gn)),mn.normalize(),hn.crossVectors(gn,mn),r[0]=mn.x,r[4]=hn.x,r[8]=gn.x,r[1]=mn.y,r[5]=hn.y,r[9]=gn.y,r[2]=mn.z,r[6]=hn.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],k=r[6],A=r[10],te=r[14],ne=r[3],re=r[7],j=r[11],ie=r[15];return i[0]=a*x+o*T+s*ee+c*ne,i[4]=a*S+o*E+s*k+c*re,i[8]=a*C+o*D+s*A+c*j,i[12]=a*w+o*O+s*te+c*ie,i[1]=l*x+u*T+d*ee+f*ne,i[5]=l*S+u*E+d*k+f*re,i[9]=l*C+u*D+d*A+f*j,i[13]=l*w+u*O+d*te+f*ie,i[2]=p*x+m*T+h*ee+g*ne,i[6]=p*S+m*E+h*k+g*re,i[10]=p*C+m*D+h*A+g*j,i[14]=p*w+m*O+h*te+g*ie,i[3]=_*x+v*T+y*ee+b*ne,i[7]=_*S+v*E+y*k+b*re,i[11]=_*C+v*D+y*A+b*j,i[15]=_*w+v*O+y*te+b*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,ee=_*O-v*D+y*E+b*T-x*w+S*C;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/ee;return e[0]=(o*O-s*D+c*E)*k,e[1]=(r*D-n*O-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*O-c*w)*k,e[5]=(t*O-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=un.set(r[0],r[1],r[2]).length(),o=un.set(r[4],r[5],r[6]).length(),s=un.set(r[8],r[9],r[10]).length();i<0&&(a=-a),dn.copy(this);let c=1/a,l=1/o,u=1/s;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=l,dn.elements[5]*=l,dn.elements[6]*=l,dn.elements[8]*=u,dn.elements[9]*=u,dn.elements[10]*=u,t.setFromRotationMatrix(dn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=yt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=yt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},un=new R,dn=new B,fn=new R(0,0,0),pn=new R(1,1,1),mn=new R,hn=new R,gn=new R,_n=new B,vn=new Bt,yn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Ft(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Ft(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:F(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _n.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_n,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vn.setFromEuler(this),this.setFromQuaternion(vn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yn.DEFAULT_ORDER=`XYZ`;var bn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},xn=0,Sn=new R,Cn=new Bt,wn=new B,Tn=new R,En=new R,Dn=new R,On=new Bt,kn=new R(1,0,0),An=new R(0,1,0),jn=new R(0,0,1),Mn={type:`added`},Nn={type:`removed`},Pn={type:`childadded`,child:null},Fn={type:`childremoved`,child:null},In=class e extends At{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xn++}),this.uuid=Pt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new R,n=new yn,r=new Bt,i=new R(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new B},normalMatrix:{value:new z}}),this.matrix=new B,this.matrixWorld=new B,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cn.setFromAxisAngle(e,t),this.quaternion.multiply(Cn),this}rotateOnWorldAxis(e,t){return Cn.setFromAxisAngle(e,t),this.quaternion.premultiply(Cn),this}rotateX(e){return this.rotateOnAxis(kn,e)}rotateY(e){return this.rotateOnAxis(An,e)}rotateZ(e){return this.rotateOnAxis(jn,e)}translateOnAxis(e,t){return Sn.copy(e).applyQuaternion(this.quaternion),this.position.add(Sn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kn,e)}translateY(e){return this.translateOnAxis(An,e)}translateZ(e){return this.translateOnAxis(jn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Tn.copy(e):Tn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),En.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(En,Tn,this.up):wn.lookAt(Tn,En,this.up),this.quaternion.setFromRotationMatrix(wn),r&&(wn.extractRotation(r.matrixWorld),Cn.setFromRotationMatrix(wn),this.quaternion.premultiply(Cn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(I(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mn),Pn.child=e,this.dispatchEvent(Pn),Pn.child=null):I(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nn),Fn.child=e,this.dispatchEvent(Fn),Fn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mn),Pn.child=e,this.dispatchEvent(Pn),Pn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(En,e,Dn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(En,On,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};In.DEFAULT_UP=new R(0,1,0),In.DEFAULT_MATRIX_AUTO_UPDATE=!0,In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ln=class extends In{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Rn={type:`move`},zn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ln;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Bn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Hn={h:0,s:0,l:0};function Un(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var V=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,qt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=qt.workingColorSpace){if(e=It(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Un(i,r,e+1/3),this.g=Un(i,r,e),this.b=Un(i,r,e-1/3)}return qt.colorSpaceToWorking(this,r),this}setStyle(e,t=ft){function n(t){t!==void 0&&parseFloat(t)<1&&F(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:F(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);F(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){let n=Bn[e.toLowerCase()];return n===void 0?F(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jt(e.r),this.g=Jt(e.g),this.b=Jt(e.b),this}copyLinearToSRGB(e){return this.r=Yt(e.r),this.g=Yt(e.g),this.b=Yt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return qt.workingToColorSpace(Wn.copy(this),e),Math.round(Ft(Wn.r*255,0,255))*65536+Math.round(Ft(Wn.g*255,0,255))*256+Math.round(Ft(Wn.b*255,0,255))}getHexString(e=ft){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.workingToColorSpace(Wn.copy(this),t);let n=Wn.r,r=Wn.g,i=Wn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=qt.workingColorSpace){return qt.workingToColorSpace(Wn.copy(this),t),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=ft){qt.workingToColorSpace(Wn.copy(this),e);let t=Wn.r,n=Wn.g,r=Wn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(Hn);let n=Lt(Vn.h,Hn.h,t),r=Lt(Vn.s,Hn.s,t),i=Lt(Vn.l,Hn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wn=new V;V.NAMES=Bn;var Gn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new V(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Kn=class extends In{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},qn=new R,Jn=new R,Yn=new R,Xn=new R,Zn=new R,Qn=new R,$n=new R,er=new R,tr=new R,nr=new R,rr=new an,ir=new an,ar=new an,or=class e{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),qn.subVectors(e,t),r.cross(qn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){qn.subVectors(r,t),Jn.subVectors(n,t),Yn.subVectors(e,t);let a=qn.dot(qn),o=qn.dot(Jn),s=qn.dot(Yn),c=Jn.dot(Jn),l=Jn.dot(Yn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Xn)!==null&&Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Xn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Xn.x),s.addScaledVector(a,Xn.y),s.addScaledVector(o,Xn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return rr.setScalar(0),ir.setScalar(0),ar.setScalar(0),rr.fromBufferAttribute(e,t),ir.fromBufferAttribute(e,n),ar.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(rr,i.x),a.addScaledVector(ir,i.y),a.addScaledVector(ar,i.z),a}static isFrontFacing(e,t,n,r){return qn.subVectors(n,t),Jn.subVectors(e,t),qn.cross(Jn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),qn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Zn.subVectors(r,n),Qn.subVectors(i,n),er.subVectors(e,n);let s=Zn.dot(er),c=Qn.dot(er);if(s<=0&&c<=0)return t.copy(n);tr.subVectors(e,r);let l=Zn.dot(tr),u=Qn.dot(tr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Zn,a);nr.subVectors(e,i);let f=Zn.dot(nr),p=Qn.dot(nr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Qn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return $n.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector($n,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Zn,a).addScaledVector(Qn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},sr=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(lr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(lr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=lr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,lr):lr.fromBufferAttribute(r,t),lr.applyMatrix4(e.matrixWorld),this.expandByPoint(lr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),ur.copy(e.boundingBox)),ur.applyMatrix4(e.matrixWorld),this.union(ur)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,lr),lr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),vr.subVectors(this.max,_r),dr.subVectors(e.a,_r),fr.subVectors(e.b,_r),pr.subVectors(e.c,_r),mr.subVectors(fr,dr),hr.subVectors(pr,fr),gr.subVectors(dr,pr);let t=[0,-mr.z,mr.y,0,-hr.z,hr.y,0,-gr.z,gr.y,mr.z,0,-mr.x,hr.z,0,-hr.x,gr.z,0,-gr.x,-mr.y,mr.x,0,-hr.y,hr.x,0,-gr.y,gr.x,0];return!xr(t,dr,fr,pr,vr)||(t=[1,0,0,0,1,0,0,0,1],!xr(t,dr,fr,pr,vr))?!1:(yr.crossVectors(mr,hr),t=[yr.x,yr.y,yr.z],xr(t,dr,fr,pr,vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,lr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(lr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},cr=[new R,new R,new R,new R,new R,new R,new R,new R],lr=new R,ur=new sr,dr=new R,fr=new R,pr=new R,mr=new R,hr=new R,gr=new R,_r=new R,vr=new R,yr=new R,br=new R;function xr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){br.fromArray(e,a);let o=i.x*Math.abs(br.x)+i.y*Math.abs(br.y)+i.z*Math.abs(br.z),s=t.dot(br),c=n.dot(br),l=r.dot(br);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Sr=new R,Cr=new L,wr=0,Tr=class extends At{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=_t,this.updateRanges=[],this.gpuType=ce,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix3(e),this.setXY(t,Cr.x,Cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXYZ(t,Sr.x,Sr.y,Sr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix4(e),this.setXYZ(t,Sr.x,Sr.y,Sr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyNormalMatrix(e),this.setXYZ(t,Sr.x,Sr.y,Sr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.transformDirection(e),this.setXYZ(t,Sr.x,Sr.y,Sr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rt(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rt(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rt(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),r=zt(r,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Er=class extends Tr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Dr=class extends Tr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},H=class extends Tr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Or=new sr,kr=new R,Ar=new R,jr=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Or.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);let t=kr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(kr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ar.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(Ar)),this.expandByPoint(kr.copy(e.center).sub(Ar))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Mr=0,Nr=new B,Pr=new In,Fr=new R,Ir=new sr,Lr=new sr,Rr=new R,zr=class e extends At{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mr++}),this.uuid=Pt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(bt(e)?Dr:Er)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new z().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Nr.makeRotationFromQuaternion(e),this.applyMatrix4(Nr),this}rotateX(e){return Nr.makeRotationX(e),this.applyMatrix4(Nr),this}rotateY(e){return Nr.makeRotationY(e),this.applyMatrix4(Nr),this}rotateZ(e){return Nr.makeRotationZ(e),this.applyMatrix4(Nr),this}translate(e,t,n){return Nr.makeTranslation(e,t,n),this.applyMatrix4(Nr),this}scale(e,t,n){return Nr.makeScale(e,t,n),this.applyMatrix4(Nr),this}lookAt(e){return Pr.lookAt(e),Pr.updateMatrix(),this.applyMatrix4(Pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new H(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&F(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)I(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ir.setFromBufferAttribute(n),this.morphTargetsRelative?(Rr.addVectors(this.boundingBox.min,Ir.min),this.boundingBox.expandByPoint(Rr),Rr.addVectors(this.boundingBox.max,Ir.max),this.boundingBox.expandByPoint(Rr)):(this.boundingBox.expandByPoint(Ir.min),this.boundingBox.expandByPoint(Ir.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&I(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)I(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new R,1/0);else if(e){let n=this.boundingSphere.center;if(Ir.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Lr.setFromBufferAttribute(n),this.morphTargetsRelative?(Rr.addVectors(Ir.min,Lr.min),Ir.expandByPoint(Rr),Rr.addVectors(Ir.max,Lr.max),Ir.expandByPoint(Rr)):(Ir.expandByPoint(Lr.min),Ir.expandByPoint(Lr.max))}Ir.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Rr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Rr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Rr.fromBufferAttribute(a,t),o&&(Fr.fromBufferAttribute(e,t),Rr.add(Fr)),r=Math.max(r,n.distanceToSquared(Rr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&I(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){I(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Tr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new R,s[e]=new R;let c=new R,l=new R,u=new R,d=new L,f=new L,p=new L,m=new R,h=new R;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new R,y=new R,b=new R,x=new R;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Tr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new R,i=new R,a=new R,o=new R,s=new R,c=new R,l=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rr.fromBufferAttribute(e,t),Rr.normalize(),e.setXYZ(t,Rr.x,Rr.y,Rr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Tr(a,r,i)}if(this.index===null)return F(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Br=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=_t,this.updateRanges=[],this.version=0,this.uuid=Pt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Vr=new R,Hr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix4(e),this.setXYZ(t,Vr.x,Vr.y,Vr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.applyNormalMatrix(e),this.setXYZ(t,Vr.x,Vr.y,Vr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.transformDirection(e),this.setXYZ(t,Vr.x,Vr.y,Vr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Rt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),r=zt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),r=zt(r,this.array),i=zt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Tt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Tr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Tt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ur=new R,Wr=new R,Gr=new z,Kr=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ur.subVectors(n,t).cross(Wr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Ur),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Gr.getNormalMatrix(e),r=this.coplanarPoint(Ur).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},qr=0,Jr=class extends At{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qr++}),this.uuid=Pt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new V(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gt,this.stencilZFail=gt,this.stencilZPass=gt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){F(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?F(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new V().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Kr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new L().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new L().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Yr=new R,Xr=new R,Zr=new R,Qr=new R,$r=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yr.copy(this.origin).addScaledVector(this.direction,t),Yr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Xr.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),Qr.copy(this.origin).sub(Xr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Zr),o=Qr.dot(this.direction),s=-Qr.dot(Zr),c=Qr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Xr).addScaledVector(Zr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Yr.subVectors(e.center,this.origin);let n=Yr.dot(this.direction),r=Yr.dot(Yr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Yr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,ee,k,A,te,ne;if(y>=b&&y>=x?(w=s,D=u,k=p,ne=g,s>=0?(S=c,C=l,T=d,E=f,O=m,ee=h,A=_,te=v):(S=l,C=c,T=f,E=d,O=h,ee=m,A=v,te=_)):b>=x?(w=c,D=d,k=m,ne=_,c>=0?(S=l,C=s,T=f,E=u,O=h,ee=p,A=v,te=g):(S=s,C=l,T=u,E=f,O=p,ee=h,A=g,te=v)):(w=l,D=f,k=h,ne=v,l>=0?(S=s,C=c,T=u,E=d,O=p,ee=m,A=g,te=_):(S=c,C=s,T=d,E=u,O=m,ee=p,A=_,te=g)),w===0)return null;let re=S/w,j=C/w,ie=1/w,ae=T-re*D,oe=E-j*D,se=O-re*k,ce=ee-j*k,le=A-re*ne,ue=te-j*ne,de=le*ce-ue*se,fe=ae*ue-oe*le,pe=se*oe-ce*ae;if(r){if(de<0||fe<0||pe<0)return null}else if((de<0||fe<0||pe<0)&&(de>0||fe>0||pe>0))return null;let me=de+fe+pe;if(me===0)return null;let he=ie*(de*D+fe*k+pe*ne);return(me>0?he<0:he>0)?null:this.at(he/me,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},U=class extends Jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new V(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ei=new B,ti=new $r,ni=new jr,ri=new R,ii=new R,ai=new R,oi=new R,si=new R,ci=new R,li=new R,ui=new R,W=class extends In{constructor(e=new zr,t=new U){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ci.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(si.fromBufferAttribute(s,e),a?ci.addScaledVector(si,r):ci.addScaledVector(si.sub(t),r))}t.add(ci)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ni.copy(n.boundingSphere),ni.applyMatrix4(i),ti.copy(e.ray).recast(e.near),!(ni.containsPoint(ti.origin)===!1&&(ti.intersectSphere(ni,ri)===null||ti.origin.distanceToSquared(ri)>(e.far-e.near)**2))&&(ei.copy(i).invert(),ti.copy(e.ray).applyMatrix4(ei),(n.boundingBox===null||ti.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=fi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=fi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=fi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=fi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function di(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ui.copy(s),ui.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ui);return l<n.near||l>n.far?null:{distance:l,point:ui.clone(),object:e}}function fi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ii),e.getVertexPosition(c,ai),e.getVertexPosition(l,oi);let u=di(e,t,n,r,ii,ai,oi,li);if(u){let e=new R;or.getBarycoord(li,ii,ai,oi,e),i&&(u.uv=or.getInterpolatedAttribute(i,s,c,l,e,new L)),a&&(u.uv1=or.getInterpolatedAttribute(a,s,c,l,e,new L)),o&&(u.normal=or.getInterpolatedAttribute(o,s,c,l,e,new R),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new R,materialIndex:0};or.getNormal(ii,ai,oi,t.normal),u.face=t,u.barycoord=e}return u}var pi=class extends rn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=O,l=O,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},mi=class extends Tr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},hi=new B,gi=new B,_i=[],vi=new sr,yi=new B,bi=new W,xi=new jr,Si=class extends W{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,yi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hi),vi.copy(e.boundingBox).applyMatrix4(hi),this.boundingBox.union(vi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hi),xi.copy(e.boundingSphere).applyMatrix4(hi),this.boundingSphere.union(xi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(bi.geometry=this.geometry,bi.material=this.material,bi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xi.copy(this.boundingSphere),xi.applyMatrix4(n),e.ray.intersectsSphere(xi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,hi),gi.multiplyMatrices(n,hi),bi.matrixWorld=gi,bi.raycast(e,_i);for(let e=0,n=_i.length;e<n;e++){let n=_i[e];n.instanceId=i,n.object=this,t.push(n)}_i.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new mi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new pi(new Float32Array(r*this.count),r,this.count,be,ce));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ci=new jr,wi=new L(.5,.5),Ti=new R,Ei=class{constructor(e=new Kr,t=new Kr,n=new Kr,r=new Kr,i=new Kr,a=new Kr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476+wi.distanceTo(e.center),Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ti.x=r.normal.x>0?e.max.x:e.min.x,Ti.y=r.normal.y>0?e.max.y:e.min.y,Ti.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ti)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Di=class extends Jr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new V(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Oi=new R,ki=new R,Ai=new B,ji=new $r,Mi=new jr,Ni=new R,Pi=new R,Fi=class extends In{constructor(e=new zr,t=new Di){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Oi.fromBufferAttribute(t,e-1),ki.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Oi.distanceTo(ki);e.setAttribute(`lineDistance`,new H(n,1))}else F(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mi.copy(n.boundingSphere),Mi.applyMatrix4(r),Mi.radius+=i,e.ray.intersectsSphere(Mi)===!1)return;Ai.copy(r).invert(),ji.copy(e.ray).applyMatrix4(Ai);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Ii(this,e,ji,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Ii(this,e,ji,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Ii(this,e,ji,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Ii(this,e,ji,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ii(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Oi.fromBufferAttribute(s,i),ki.fromBufferAttribute(s,a),n.distanceSqToSegment(Oi,ki,Ni,Pi)>r)return;Ni.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Ni);if(!(c<t.near||c>t.far))return{distance:c,point:Pi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Li=new R,Ri=new R,zi=class extends Fi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Li.fromBufferAttribute(t,e),Ri.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Li.distanceTo(Ri);e.setAttribute(`lineDistance`,new H(n,1))}else F(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Bi=class extends rn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vi=class extends rn{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hi=class extends rn{constructor(e,t,n=se,r,i,a,o=O,s=O,c,l=ve,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $t(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ui=class extends Hi{constructor(e,t=se,n=301,r,i,a=O,o=O,s,c=ve){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Wi=class extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Gi=class e extends zr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new H(c,3)),this.setAttribute(`normal`,new H(l,3)),this.setAttribute(`uv`,new H(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new R;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ki=class e extends zr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new R,g=new R;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new H(o,3)),this.setAttribute(`normal`,new H(s,3)),this.setAttribute(`uv`,new H(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},qi=class e extends zr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new R,l=new L;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new H(a,3)),this.setAttribute(`normal`,new H(o,3)),this.setAttribute(`uv`,new H(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ji=class e extends zr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new H(u,3)),this.setAttribute(`normal`,new H(d,3)),this.setAttribute(`uv`,new H(f,2));function _(){let a=new R,_=new R,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new L,m=new R,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Yi=class e extends Ji{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xi=class e extends zr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new H(i,3)),this.setAttribute(`normal`,new H(i.slice(),3)),this.setAttribute(`uv`,new H(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new R,r=new R,i=new R;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new R;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new R;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new R,t=new R,n=new R,r=new R,o=new L,s=new L,c=new L;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Zi=class e extends Xi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Qi=class e extends Xi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},$i=class e extends zr{constructor(e=[new L(0,-.5),new L(.5,0),new L(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Ft(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new R,d=new L,f=new R,p=new R,m=new R,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new H(a,3)),this.setAttribute(`uv`,new H(o,2)),this.setAttribute(`normal`,new H(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},ea=class e extends Xi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ta=class e extends zr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new H(p,3)),this.setAttribute(`normal`,new H(m,3)),this.setAttribute(`uv`,new H(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},na=class e extends zr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new R,p=new L;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new H(s,3)),this.setAttribute(`normal`,new H(c,3)),this.setAttribute(`uv`,new H(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ra=class e extends zr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new R,d=new R,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new H(p,3)),this.setAttribute(`normal`,new H(m,3)),this.setAttribute(`uv`,new H(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},ia=class e extends zr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new R,f=new R,p=new R;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new H(c,3)),this.setAttribute(`normal`,new H(l,3)),this.setAttribute(`uv`,new H(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function aa(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(sa(i))i.isRenderTargetTexture?(F(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(sa(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function oa(e){let t={};for(let n=0;n<e.length;n++){let r=aa(e[n]);for(let e in r)t[e]=r[e]}return t}function sa(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ca(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function la(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var ua={clone:aa,merge:oa},da=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fa=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pa=class extends Jr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=da,this.fragmentShader=fa,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=aa(e.uniforms),this.uniformsGroups=ca(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new V().setHex(r.value);break;case`v2`:this.uniforms[n].value=new L().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new R().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new an().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new z().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new B().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ma=class extends pa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},ha=class extends Jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new V(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new V(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new L(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ga=class extends Jr{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:``},this.type=`MeshToonMaterial`,this.color=new V(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new V(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new L(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_a=class extends Jr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new V(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new V(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new L(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},va=class extends Jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=dt,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ya=class extends Jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ba(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function xa(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Sa=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Ca=class extends Sa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ct,endingEnd:ct}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case lt:i=e,o=2*t-n;break;case ut:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case lt:a=e,s=2*n-t;break;case ut:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},wa=class extends Sa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ta=class extends Sa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ea=class extends Sa{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ka(n,t,g,y,r);i[p]=Da(x,o,_,b,m)}return i}};function Da(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Oa(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ka(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Da(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Oa(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Aa=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=ba(t,this.TimeBufferType),this.values=ba(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ba(e.times,Array),values:ba(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),xa(e.settings)&&(n.settings={inTangents:ba(e.settings.inTangents,Array),outTangents:ba(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ta(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ea(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case it:t=this.InterpolantFactoryMethodDiscrete;break;case at:t=this.InterpolantFactoryMethodLinear;break;case ot:t=this.InterpolantFactoryMethodSmooth;break;case st:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return F(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return it;case this.InterpolantFactoryMethodLinear:return at;case this.InterpolantFactoryMethodSmooth:return ot;case this.InterpolantFactoryMethodBezier:return st}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;xa(this.settings)&&(ja(this.settings.inTangents,e),ja(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(I(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(I(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){I(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){I(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&xt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){I(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ot,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,xa(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ja(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Aa.prototype.ValueTypeName=``,Aa.prototype.TimeBufferType=Float32Array,Aa.prototype.ValueBufferType=Float32Array,Aa.prototype.DefaultInterpolation=at;var Ma=class extends Aa{constructor(e,t,n){super(e,t,n)}};Ma.prototype.ValueTypeName=`bool`,Ma.prototype.ValueBufferType=Array,Ma.prototype.DefaultInterpolation=it,Ma.prototype.InterpolantFactoryMethodLinear=void 0,Ma.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends Aa{constructor(e,t,n,r){super(e,t,n,r)}};Na.prototype.ValueTypeName=`color`;var Pa=class extends Aa{constructor(e,t,n,r){super(e,t,n,r)}};Pa.prototype.ValueTypeName=`number`;var Fa=class extends Sa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Bt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ia=class extends Aa{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Fa(this.times,this.values,this.getValueSize(),e)}};Ia.prototype.ValueTypeName=`quaternion`,Ia.prototype.InterpolantFactoryMethodSmooth=void 0;var La=class extends Aa{constructor(e,t,n){super(e,t,n)}};La.prototype.ValueTypeName=`string`,La.prototype.ValueBufferType=Array,La.prototype.DefaultInterpolation=it,La.prototype.InterpolantFactoryMethodLinear=void 0,La.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends Aa{constructor(e,t,n,r){super(e,t,n,r)}};Ra.prototype.ValueTypeName=`vector`;var za=class extends In{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new V(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ba=class extends za{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.groundColor=new V(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Va=new B,Ha=new R,Ua=new R,Wa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new L(512,512),this.mapType=re,this.map=null,this.mapPass=null,this.matrix=new B,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ei,this._frameExtents=new L(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ha.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ha),Ua.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ua),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Va.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Va,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Va)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ga=new R,Ka=new Bt,qa=new R,Ja=class extends In{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new B,this.projectionMatrix=new B,this.projectionMatrixInverse=new B,this.coordinateSystem=yt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ga,Ka,qa),qa.x===1&&qa.y===1&&qa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Ka,qa.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ga,Ka,qa),qa.x===1&&qa.y===1&&qa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Ka,qa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ya=new R,Xa=new L,Za=new L,Qa=class extends Ja{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Nt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Mt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nt*2*Math.atan(Math.tan(Mt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ya.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ya.x,Ya.y).multiplyScalar(-e/Ya.z),Ya.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ya.x,Ya.y).multiplyScalar(-e/Ya.z)}getViewSize(e,t){return this.getViewBounds(e,Xa,Za),t.subVectors(Za,Xa)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Mt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},$a=class extends Wa{constructor(){super(new Qa(90,1,.5,500)),this.isPointLightShadow=!0}},eo=class extends za{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new $a}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},to=class extends Ja{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},no=class extends Wa{constructor(){super(new to(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ro=class extends za{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.target=new In,this.shadow=new no}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},io=class extends zr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},ao=-90,oo=1,so=class extends In{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Qa(ao,oo,e,t);r.layers=this.layers,this.add(r);let i=new Qa(ao,oo,e,t);i.layers=this.layers,this.add(i);let a=new Qa(ao,oo,e,t);a.layers=this.layers,this.add(a);let o=new Qa(ao,oo,e,t);o.layers=this.layers,this.add(o);let s=new Qa(ao,oo,e,t);s.layers=this.layers,this.add(s);let c=new Qa(ao,oo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},co=class extends Qa{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},lo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=uo.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function uo(){this._document.hidden===!1&&this.reset()}var fo=`\\[\\]\\.:\\/`,po=RegExp(`[\\[\\]\\.:\\/]`,`g`),mo=`[^\\[\\]\\.:\\/]`,ho=`[^`+fo.replace(`\\.`,``)+`]`,go=`((?:WC+[\\/:])*)`.replace(`WC`,mo),_o=`(WCOD+)?`.replace(`WCOD`,ho),vo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,mo),yo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,mo),bo=RegExp(`^`+go+_o+vo+yo+`$`),xo=[`material`,`materials`,`bones`,`map`],So=class{constructor(e,t,n){let r=n||Co.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Co=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(po,``)}static parseTrackName(e){let t=bo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);xo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){F(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){I(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){I(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){I(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){I(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){I(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){I(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){I(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;I(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){I(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){I(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Co.Composite=So,Co.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Co.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Co.prototype.GetterByBindingType=[Co.prototype._getValue_direct,Co.prototype._getValue_array,Co.prototype._getValue_arrayElement,Co.prototype._getValue_toArray],Co.prototype.SetterByBindingTypeAndVersioning=[[Co.prototype._setValue_direct,Co.prototype._setValue_direct_setNeedsUpdate,Co.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Co.prototype._setValue_array,Co.prototype._setValue_array_setNeedsUpdate,Co.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Co.prototype._setValue_arrayElement,Co.prototype._setValue_arrayElement_setNeedsUpdate,Co.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Co.prototype._setValue_fromArray,Co.prototype._setValue_fromArray_setNeedsUpdate,Co.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wo=class extends Br{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},To=new B,Eo=class{constructor(e,t,n=0,r=1/0){this.ray=new $r(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new bn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):I(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return To.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(To),this}intersectObject(e,t=!0,n=[]){return Oo(e,this,n,t),n.sort(Do),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Oo(e[r],this,n,t);return n.sort(Do),n}};function Do(e,t){return e.distance-t.distance}function Oo(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Oo(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function ko(e,t,n,r){let i=Ao(r);switch(n){case he:return e*t;case be:return e*t/i.components*i.byteLength;case xe:return e*t/i.components*i.byteLength;case Se:return e*t*2/i.components*i.byteLength;case Ce:return e*t*2/i.components*i.byteLength;case ge:return e*t*3/i.components*i.byteLength;case _e:return e*t*4/i.components*i.byteLength;case we:return e*t*4/i.components*i.byteLength;case Te:case Ee:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case De:case Oe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ae:case Me:return Math.max(e,16)*Math.max(t,8)/4;case ke:case je:return Math.max(e,8)*Math.max(t,8)/2;case Ne:case Pe:case Ie:case M:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Fe:case Le:case Re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ze:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case N:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Be:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case P:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ve:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case He:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ue:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case We:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ge:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ke:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case qe:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Je:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ye:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Xe:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ze:case Qe:case $e:return Math.ceil(e/4)*Math.ceil(t/4)*16;case et:case tt:return Math.ceil(e/4)*Math.ceil(t/4)*8;case nt:case rt:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ao(e){switch(e){case re:case j:return{byteLength:1,components:1};case ae:case ie:case le:return{byteLength:2,components:1};case ue:case de:return{byteLength:2,components:4};case se:case oe:case ce:return{byteLength:4,components:1};case pe:case me:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?F(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function jo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Mo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var No={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},G={common:{diffuse:{value:new V(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new z},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new z}},envmap:{envMap:{value:null},envMapRotation:{value:new z},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new z}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new z}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new z},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new z},normalScale:{value:new L(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new z},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new z}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new z}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new z}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new V(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new V(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0},uvTransform:{value:new z}},sprite:{diffuse:{value:new V(16777215)},opacity:{value:1},center:{value:new L(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new z},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0}}},Po={basic:{uniforms:oa([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.fog]),vertexShader:No.meshbasic_vert,fragmentShader:No.meshbasic_frag},lambert:{uniforms:oa([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new V(0)},envMapIntensity:{value:1}}]),vertexShader:No.meshlambert_vert,fragmentShader:No.meshlambert_frag},phong:{uniforms:oa([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new V(0)},specular:{value:new V(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:No.meshphong_vert,fragmentShader:No.meshphong_frag},standard:{uniforms:oa([G.common,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.roughnessmap,G.metalnessmap,G.fog,G.lights,{emissive:{value:new V(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:No.meshphysical_vert,fragmentShader:No.meshphysical_frag},toon:{uniforms:oa([G.common,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.gradientmap,G.fog,G.lights,{emissive:{value:new V(0)}}]),vertexShader:No.meshtoon_vert,fragmentShader:No.meshtoon_frag},matcap:{uniforms:oa([G.common,G.bumpmap,G.normalmap,G.displacementmap,G.fog,{matcap:{value:null}}]),vertexShader:No.meshmatcap_vert,fragmentShader:No.meshmatcap_frag},points:{uniforms:oa([G.points,G.fog]),vertexShader:No.points_vert,fragmentShader:No.points_frag},dashed:{uniforms:oa([G.common,G.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:No.linedashed_vert,fragmentShader:No.linedashed_frag},depth:{uniforms:oa([G.common,G.displacementmap]),vertexShader:No.depth_vert,fragmentShader:No.depth_frag},normal:{uniforms:oa([G.common,G.bumpmap,G.normalmap,G.displacementmap,{opacity:{value:1}}]),vertexShader:No.meshnormal_vert,fragmentShader:No.meshnormal_frag},sprite:{uniforms:oa([G.sprite,G.fog]),vertexShader:No.sprite_vert,fragmentShader:No.sprite_frag},background:{uniforms:{uvTransform:{value:new z},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:No.background_vert,fragmentShader:No.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new z}},vertexShader:No.backgroundCube_vert,fragmentShader:No.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:No.cube_vert,fragmentShader:No.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:No.equirect_vert,fragmentShader:No.equirect_frag},distance:{uniforms:oa([G.common,G.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:No.distance_vert,fragmentShader:No.distance_frag},shadow:{uniforms:oa([G.lights,G.fog,{color:{value:new V(0)},opacity:{value:1}}]),vertexShader:No.shadow_vert,fragmentShader:No.shadow_frag}};Po.physical={uniforms:oa([Po.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new z},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new z},clearcoatNormalScale:{value:new L(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new z},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new z},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new z},sheen:{value:0},sheenColor:{value:new V(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new z},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new z},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new z},transmissionSamplerSize:{value:new L},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new z},attenuationDistance:{value:0},attenuationColor:{value:new V(0)},specularColor:{value:new V(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new z},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new z},anisotropyVector:{value:new L},anisotropyMap:{value:null},anisotropyMapTransform:{value:new z}}]),vertexShader:No.meshphysical_vert,fragmentShader:No.meshphysical_frag};var Fo={r:0,b:0,g:0},Io=new B,Lo=new z;Lo.set(-1,0,0,0,1,0,0,0,1);function Ro(e,t,n,r,i,a){let o=new V(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new W(new Gi(1,1,1),new pa({name:`BackgroundCubeMaterial`,uniforms:aa(Po.backgroundCube.uniforms),vertexShader:Po.backgroundCube.vertexShader,fragmentShader:Po.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Io.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Lo),l.material.toneMapped=qt.getTransfer(i.colorSpace)!==ht,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new W(new ta(2,2),new pa({name:`BackgroundMaterial`,uniforms:aa(Po.background.uniforms),vertexShader:Po.background.vertexShader,fragmentShader:Po.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=qt.getTransfer(i.colorSpace)!==ht,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Fo,la(e)),n.buffers.color.setClear(Fo.r,Fo.g,Fo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function zo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Bo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Vo(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(F(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&F(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Ho(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Kr,s=new z,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Uo=4,Wo=6,Go=20,Ko=256,qo=new to,Jo=new V,Yo=null,Xo=0,Zo=0,Qo=!1,$o=new R,es=new R,ts=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=$o}=i;Yo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ss(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yo,Xo,Zo),this._renderer.xr.enabled=Qo,e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:A,minFilter:A,generateMipmaps:!1,type:le,format:_e,colorSpace:pt,depthBuffer:!1},r=rs(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rs(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ns(r)),this._blurMaterial=os(r,e,t),this._ggxMaterial=as(r,e,t)}return r}_compileMaterial(e){let t=new W(new zr,e);this._renderer.compile(t,qo)}_sceneToCubeUV(e,t,n,r,i){let a=new Qa(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Jo),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new W(new Gi,new U({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Jo),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;is(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ss());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;is(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,qo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Uo?n-d+Uo:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,is(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,qo),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,is(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,qo)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];is(t,3*l*(r>this._lodMax-Uo?r-this._lodMax+Uo:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,qo)}};function ns(e){let t=[],n=[],r=e,i=e-Uo+1+Wo;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?es.set(1,r,n):e===1?es.set(-n,1,-r):e===2?es.set(-n,r,1):e===3?es.set(-1,r,-n):e===4?es.set(-n,-1,r):es.set(n,r,-1),es.toArray(l,(e*6+t)*3)}}let u=new zr;u.setAttribute(`position`,new Tr(c,3)),u.setAttribute(`outputDirection`,new Tr(l,3)),n.push(new W(u,null)),r>Uo&&r--}return{lodMeshes:n,sizeLods:t}}function rs(e,t,n){let r=new sn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function is(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function as(e,t,n){return new pa({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Ko,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ls(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function os(e,t,n){return new pa({name:`SphericalGaussianBlur`,defines:{SAMPLES:Go,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ls(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ss(){return new pa({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ls(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function cs(){return new pa({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ls(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ls(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var us=class extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Bi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gi(5,5,5),i=new pa({name:`CubemapFromEquirect`,uniforms:aa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new W(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=A),new so(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function ds(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new us(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ts(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ts(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function fs(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Dt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function ps(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Dr:Er)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function ms(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function hs(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:I(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function gs(e,t,n){let r=new WeakMap,i=new an;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new cn(h,p,m,u);g.type=ce,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new L(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function _s(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var vs={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ys(e,t,n,r,i,a){let o=new sn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new zr;l.setAttribute(`position`,new H([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new H([0,2,0,0,2,0],2));let u=new ma({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new W(l,u),f=new to(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new sn(t,n,{type:le,depthBuffer:!1,stencilBuffer:!1}),c=new sn(t,n,{type:le,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},qt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=vs[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var bs=new rn,xs=new Hi(1,1),Ss=new cn,Cs=new ln,ws=new Bi,Ts=[],Es=[],Ds=new Float32Array(16),Os=new Float32Array(9),ks=new Float32Array(4);function As(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ts[i];if(a===void 0&&(a=new Float32Array(i),Ts[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function js(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ms(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ns(e,t){let n=Es[t];n===void 0&&(n=new Int32Array(t),Es[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ps(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Fs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(js(n,t))return;e.uniform2fv(this.addr,t),Ms(n,t)}}function Is(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(js(n,t))return;e.uniform3fv(this.addr,t),Ms(n,t)}}function Ls(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(js(n,t))return;e.uniform4fv(this.addr,t),Ms(n,t)}}function Rs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(js(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ms(n,t)}else{if(js(n,r))return;ks.set(r),e.uniformMatrix2fv(this.addr,!1,ks),Ms(n,r)}}function zs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(js(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ms(n,t)}else{if(js(n,r))return;Os.set(r),e.uniformMatrix3fv(this.addr,!1,Os),Ms(n,r)}}function Bs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(js(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ms(n,t)}else{if(js(n,r))return;Ds.set(r),e.uniformMatrix4fv(this.addr,!1,Ds),Ms(n,r)}}function Vs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Hs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(js(n,t))return;e.uniform2iv(this.addr,t),Ms(n,t)}}function Us(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(js(n,t))return;e.uniform3iv(this.addr,t),Ms(n,t)}}function Ws(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(js(n,t))return;e.uniform4iv(this.addr,t),Ms(n,t)}}function Gs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ks(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(js(n,t))return;e.uniform2uiv(this.addr,t),Ms(n,t)}}function qs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(js(n,t))return;e.uniform3uiv(this.addr,t),Ms(n,t)}}function Js(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(js(n,t))return;e.uniform4uiv(this.addr,t),Ms(n,t)}}function Ys(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(xs.compareFunction=n.isReversedDepthBuffer()?518:515,a=xs):a=bs,n.setTexture2D(t||a,i)}function Xs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Cs,i)}function Zs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ws,i)}function Qs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Ss,i)}function $s(e){switch(e){case 5126:return Ps;case 35664:return Fs;case 35665:return Is;case 35666:return Ls;case 35674:return Rs;case 35675:return zs;case 35676:return Bs;case 5124:case 35670:return Vs;case 35667:case 35671:return Hs;case 35668:case 35672:return Us;case 35669:case 35673:return Ws;case 5125:return Gs;case 36294:return Ks;case 36295:return qs;case 36296:return Js;case 35678:case 36198:case 36298:case 36306:case 35682:return Ys;case 35679:case 36299:case 36307:return Xs;case 35680:case 36300:case 36308:case 36293:return Zs;case 36289:case 36303:case 36311:case 36292:return Qs}}function ec(e,t){e.uniform1fv(this.addr,t)}function tc(e,t){let n=As(t,this.size,2);e.uniform2fv(this.addr,n)}function nc(e,t){let n=As(t,this.size,3);e.uniform3fv(this.addr,n)}function rc(e,t){let n=As(t,this.size,4);e.uniform4fv(this.addr,n)}function ic(e,t){let n=As(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ac(e,t){let n=As(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function oc(e,t){let n=As(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function sc(e,t){e.uniform1iv(this.addr,t)}function cc(e,t){e.uniform2iv(this.addr,t)}function lc(e,t){e.uniform3iv(this.addr,t)}function uc(e,t){e.uniform4iv(this.addr,t)}function dc(e,t){e.uniform1uiv(this.addr,t)}function fc(e,t){e.uniform2uiv(this.addr,t)}function pc(e,t){e.uniform3uiv(this.addr,t)}function mc(e,t){e.uniform4uiv(this.addr,t)}function hc(e,t,n){let r=this.cache,i=t.length,a=Ns(n,i);js(r,a)||(e.uniform1iv(this.addr,a),Ms(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?xs:bs;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function gc(e,t,n){let r=this.cache,i=t.length,a=Ns(n,i);js(r,a)||(e.uniform1iv(this.addr,a),Ms(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Cs,a[e])}function _c(e,t,n){let r=this.cache,i=t.length,a=Ns(n,i);js(r,a)||(e.uniform1iv(this.addr,a),Ms(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ws,a[e])}function vc(e,t,n){let r=this.cache,i=t.length,a=Ns(n,i);js(r,a)||(e.uniform1iv(this.addr,a),Ms(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Ss,a[e])}function yc(e){switch(e){case 5126:return ec;case 35664:return tc;case 35665:return nc;case 35666:return rc;case 35674:return ic;case 35675:return ac;case 35676:return oc;case 5124:case 35670:return sc;case 35667:case 35671:return cc;case 35668:case 35672:return lc;case 35669:case 35673:return uc;case 5125:return dc;case 36294:return fc;case 36295:return pc;case 36296:return mc;case 35678:case 36198:case 36298:case 36306:case 35682:return hc;case 35679:case 36299:case 36307:return gc;case 35680:case 36300:case 36308:case 36293:return _c;case 36289:case 36303:case 36311:case 36292:return vc}}var bc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$s(t.type)}},xc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yc(t.type)}},Sc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Cc=/(\w+)(\])?(\[|\.)?/g;function wc(e,t){e.seq.push(t),e.map[t.id]=t}function Tc(e,t,n){let r=e.name,i=r.length;for(Cc.lastIndex=0;;){let a=Cc.exec(r),o=Cc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){wc(n,l===void 0?new bc(s,e,t):new xc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Sc(s),wc(n,e)),n=e}}}var Ec=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Tc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Dc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Oc=37297,kc=0;function Ac(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var jc=new z;function Mc(e){qt._getMatrix(jc,qt.workingColorSpace,e);let t=`mat3( ${jc.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(e)){case mt:return[t,`LinearTransferOETF`];case ht:return[t,`sRGBTransferOETF`];default:return F(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Nc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ac(e.getShaderSource(t),r)}return i}function Pc(e,t){let n=Mc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Fc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Ic(e,t){let n=Fc[t];return n===void 0?(F(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Lc=new R;function Rc(){return qt.getLuminanceCoefficients(Lc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Lc.x.toFixed(4)}, ${Lc.y.toFixed(4)}, ${Lc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function zc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Hc).join(`
`)}function Bc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Vc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Hc(e){return e!==``}function Uc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(e){return e.replace(Gc,Jc)}var qc=new Map;function Jc(e,t){let n=No[t];if(n===void 0){let e=qc.get(t);if(e!==void 0)n=No[e],F(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Kc(n)}var Yc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xc(e){return e.replace(Yc,Zc)}function Zc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Qc(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var $c={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function el(e){return $c[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var tl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function nl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:tl[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var rl={302:`ENVMAP_MODE_REFRACTION`};function il(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:rl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var al={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function ol(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:al[e.combine]||`ENVMAP_BLENDING_NONE`}function sl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function cl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=el(n),l=nl(n),u=il(n),d=ol(n),f=sl(n),p=zc(n),m=Bc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Hc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Hc).join(`
`),_.length>0&&(_+=`
`)):(g=[Qc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Hc).join(`
`),_=[Qc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:No.tonemapping_pars_fragment,n.toneMapping===0?``:Ic(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,No.colorspace_pars_fragment,Pc(`linearToOutputTexel`,n.outputColorSpace),Rc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Hc).join(`
`)),o=Kc(o),o=Uc(o,n),o=Wc(o,n),s=Kc(s),s=Uc(s,n),s=Wc(s,n),o=Xc(o),s=Xc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Dc(i,i.VERTEX_SHADER,y),S=Dc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Nc(i,x,`vertex`),n=Nc(i,S,`fragment`);I(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):F(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Ec(i,h),T=Vc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Oc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var ll=0,ul=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new dl(e),t.set(e,n)),n}},dl=class{constructor(e){this.id=ll++,this.code=e,this.usedTimes=0}};function fl(e){return e===1030||e===37490||e===36285}function pl(e,t,n,r,i,a){let o=new bn,s=new ul,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&F(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,ee,k;if(C){let e=Po[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),ee=e.id,k=t.id}let A=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),ne=h.isInstancedMesh===!0,re=h.isBatchedMesh===!0,j=!!i.map,ie=!!i.matcap,ae=!!x,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,fe=!!i.metalnessMap,pe=!!i.roughnessMap,me=i.anisotropy>0,he=i.clearcoat>0,ge=i.dispersion>0,_e=i.retroreflectivity>0,ve=i.iridescence>0,ye=i.sheen>0,be=i.transmission>0,xe=me&&!!i.anisotropyMap,Se=he&&!!i.clearcoatMap,Ce=he&&!!i.clearcoatNormalMap,we=he&&!!i.clearcoatRoughnessMap,Te=ve&&!!i.iridescenceMap,Ee=ve&&!!i.iridescenceThicknessMap,De=ye&&!!i.sheenColorMap,Oe=ye&&!!i.sheenRoughnessMap,ke=!!i.specularMap,Ae=!!i.specularColorMap,je=!!i.specularIntensityMap,Me=be&&!!i.transmissionMap,Ne=be&&!!i.thicknessMap,Pe=!!i.gradientMap,Fe=!!i.alphaMap,Ie=i.alphaTest>0,M=!!i.alphaHash,Le=!!i.extensions,Re=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Re=e.toneMapping);let ze={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:re,batchingColor:re&&h._colorsTexture!==null,instancing:ne,instancingColor:ne&&h.instanceColor!==null,instancingMorph:ne&&h.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:qt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:j,matcap:ie,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&fl(i.normalMap.format),metalnessMap:fe,roughnessMap:pe,anisotropy:me,anisotropyMap:xe,clearcoat:he,clearcoatMap:Se,clearcoatNormalMap:Ce,clearcoatRoughnessMap:we,dispersion:ge,retroreflection:_e,iridescence:ve,iridescenceMap:Te,iridescenceThicknessMap:Ee,sheen:ye,sheenColorMap:De,sheenRoughnessMap:Oe,specularMap:ke,specularColorMap:Ae,specularIntensityMap:je,transmission:be,transmissionMap:Me,thicknessMap:Ne,gradientMap:Pe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Ie,alphaHash:M,combine:i.combine,mapUv:j&&m(i.map.channel),aoMapUv:oe&&m(i.aoMap.channel),lightMapUv:se&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:le&&m(i.normalMap.channel),displacementMapUv:ue&&m(i.displacementMap.channel),emissiveMapUv:de&&m(i.emissiveMap.channel),metalnessMapUv:fe&&m(i.metalnessMap.channel),roughnessMapUv:pe&&m(i.roughnessMap.channel),anisotropyMapUv:xe&&m(i.anisotropyMap.channel),clearcoatMapUv:Se&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:De&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&m(i.sheenRoughnessMap.channel),specularMapUv:ke&&m(i.specularMap.channel),specularColorMapUv:Ae&&m(i.specularColorMap.channel),specularIntensityMapUv:je&&m(i.specularIntensityMap.channel),transmissionMapUv:Me&&m(i.transmissionMap.channel),thicknessMapUv:Ne&&m(i.thicknessMap.channel),alphaMapUv:Fe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(le||me),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(j||Fe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Re,decodeVideoTexture:j&&i.map.isVideoTexture===!0&&qt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&qt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Le&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Le&&i.extensions.multiDraw===!0||re)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Po[t];n=ua.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new cl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function ml(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function hl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function gl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function _l(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||hl),r.length>1&&r.sort(t||gl),i.length>1&&i.sort(t||gl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function vl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new _l,e.set(t,[i])):n>=r.length?(i=new _l,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function yl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new R,color:new V};break;case`SpotLight`:n={position:new R,direction:new R,color:new V,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new R,color:new V,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new R,skyColor:new V,groundColor:new V};break;case`RectAreaLight`:n={color:new V,position:new R,halfWidth:new R,halfHeight:new R}}return e[t.id]=n,n}}}function bl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var xl=0;function Sl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Cl(e){let t=new yl,n=bl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new R);let i=new R,a=new B,o=new B;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Sl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=G.LTC_FLOAT_1,r.rectAreaLTC2=G.LTC_FLOAT_2):(r.rectAreaLTC1=G.LTC_HALF_1,r.rectAreaLTC2=G.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=xl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function wl(e){let t=new Cl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Tl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new wl(e),t.set(n,[a])):r>=i.length?(a=new wl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var El=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dl=`uniform sampler2D shadow_pass;
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
}`,Ol=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],kl=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Al=new B,jl=new R,Ml=new R;function Nl(e,t,n){let r=new Ei,i=new L,a=new L,o=new an,s=new va,c=new ya,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new pa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new L},radius:{value:4}},vertexShader:El,fragmentShader:Dl}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new zr;m.setAttribute(`position`,new Tr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new W(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(F(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){F(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){F(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new sn(i.x,i.y,{format:Se,type:le,minFilter:A,magFilter:A,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Hi(i.x,i.y,ce),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ve,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=O,d.map.depthTexture.magFilter=O}else l.isPointLight?(d.map=new us(i.x),d.map.depthTexture=new Ui(i.x,se)):(d.map=new sn(i.x,i.y),d.map.depthTexture=new Hi(i.x,i.y,se)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ve,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=A,d.map.depthTexture.magFilter=A):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=O,d.map.depthTexture.magFilter=O);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),jl.setFromMatrixPosition(l.matrixWorld),e.position.copy(jl),Ml.copy(e.position),Ml.add(Ol[t]),e.up.copy(kl[t]),e.lookAt(Ml),e.updateMatrixWorld(),n.makeTranslation(-jl.x,-jl.y,-jl.z),Al.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Al,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new sn(i.x,i.y,{format:Se,type:le}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Pl(e,t){function n(){let t=!1,n=new an,r=null,i=new an(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?fe(e.DEPTH_TEST):pe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=kt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?fe(e.STENCIL_TEST):pe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new V(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,A=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,re=0,j=e.getParameter(e.VERSION);j.indexOf(`WebGL`)===-1?j.indexOf(`OpenGL ES`)!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),ne=re>=2):(re=parseFloat(/^WebGL (\d)/.exec(j)[1]),ne=re>=1);let ie=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new an().fromArray(oe),le=new an().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),fe(e.DEPTH_TEST),o.setFunc(3),xe(!1),Se(1),fe(e.CULL_FACE),ye(0);function fe(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function pe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function me(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function he(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ge(t){return h!==t&&(e.useProgram(t),h=t,!0)}let _e={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};_e[103]=e.MIN,_e[104]=e.MAX;let ve={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ye(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(pe(e.BLEND),g=!1);else if(g===!1&&(fe(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:I(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:I(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:I(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:I(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(_e[n],_e[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ve[r],ve[i],ve[o],ve[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function be(t,n){t.side===2?pe(e.CULL_FACE):fe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),xe(r),t.blending===1&&t.transparent===!1?ye(0):ye(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),we(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?fe(e.SAMPLE_ALPHA_TO_COVERAGE):pe(e.SAMPLE_ALPHA_TO_COVERAGE)}function xe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function Se(t){t===0?pe(e.CULL_FACE):(fe(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function Ce(t){t!==ee&&(ne&&e.lineWidth(t),ee=t)}function we(t,n,r){t?(fe(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(k=n,A=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):pe(e.POLYGON_OFFSET_FILL)}function Te(t){t?fe(e.SCISSOR_TEST):pe(e.SCISSOR_TEST)}function Ee(t){t===void 0&&(t=e.TEXTURE0+te-1),ie!==t&&(e.activeTexture(t),ie=t)}function De(t,n,r){r===void 0&&(r=ie===null?e.TEXTURE0+te-1:ie);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(ie!==r&&(e.activeTexture(r),ie=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function Oe(){let t=ae[ie];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ke(){try{e.compressedTexImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Ae(){try{e.compressedTexImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function je(){try{e.texSubImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Me(){try{e.texSubImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Pe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Fe(){try{e.texStorage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Ie(){try{e.texStorage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function M(){try{e.texImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Le(){try{e.texImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Re(t){return d[t]===void 0?e.getParameter(t):d[t]}function ze(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function N(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function Be(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function P(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ve(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function He(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ie=null,ae={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new V(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,A=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:fe,disable:pe,bindFramebuffer:me,drawBuffers:he,useProgram:ge,setBlending:ye,setMaterial:be,setFlipSided:xe,setCullFace:Se,setLineWidth:Ce,setPolygonOffset:we,setScissorTest:Te,activeTexture:Ee,bindTexture:De,unbindTexture:Oe,compressedTexImage2D:ke,compressedTexImage3D:Ae,texImage2D:M,texImage3D:Le,pixelStorei:ze,getParameter:Re,updateUBOMapping:P,uniformBlockBinding:Ve,texStorage2D:Fe,texStorage3D:Ie,texSubImage2D:je,texSubImage3D:Me,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Pe,scissor:N,viewport:Be,reset:He}}function Fl(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new L,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):St(`canvas`)}function g(e,t,n){let r=1,i=Re(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),F(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&F(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];F(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||F(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?mt:qt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,F(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),re(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),ie(t)}function re(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&j(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function j(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function ie(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let ae=0;function oe(){ae=0}function se(){return ae}function ce(e){ae=e}function le(){let e=ae;return e>=i.maxTextures&&F(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ae+=1,e}function ue(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function de(t,i){let a=r.get(t);if(t.isVideoTexture&&M(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)F(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)F(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ce(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function fe(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Ce(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function pe(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Ce(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function me(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?we(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let he={[T]:e.REPEAT,[E]:e.CLAMP_TO_EDGE,[D]:e.MIRRORED_REPEAT},ge={[O]:e.NEAREST,[ee]:e.NEAREST_MIPMAP_NEAREST,[k]:e.NEAREST_MIPMAP_LINEAR,[A]:e.LINEAR,[te]:e.LINEAR_MIPMAP_NEAREST,[ne]:e.LINEAR_MIPMAP_LINEAR},_e={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ve(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&F(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,he[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,he[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,he[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ge[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ge[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,_e[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function be(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=ue(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&j(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function xe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Se(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=xe(n.start,r.width,4),c=xe(t.start,r.width,4);n.start<=i+1&&a===c&&xe(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function Ce(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=be(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=qt.getPrimaries(qt.workingColorSpace),r=o.colorSpace===``?null:qt.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=Le(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);ve(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===ye,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&Se(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=ko(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else F(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?F(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=ko(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=Re(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=Re(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function we(t,o,s){if(o.image.length!==6)return;let c=be(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=qt.getPrimaries(qt.workingColorSpace),r=o.colorSpace===``?null:qt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Le(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);ve(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?F(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=Re(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Te(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Ie(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Fe(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ie(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Fe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Fe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);Ie(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Fe(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Fe(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function De(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ve(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else de(i.depthTexture,0);let u=l.__webglTexture,d=Fe(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Ie(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Ie(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Oe(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)De(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?De(i.__webglFramebuffer[0],t,0):De(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Ee(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Ee(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ke(t,n,i){let a=r.get(t);n!==void 0&&Te(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Oe(t)}function Ae(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Ie(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Fe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Ee(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ve(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Te(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Te(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ve(c,a),Te(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ve(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Te(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Te(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&Oe(t)}function je(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let Me=[],Ne=[];function Pe(t){if(t.samples>0){if(Ie(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Me.length=0,Ne.length=0,Me.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Me.push(l),Ne.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ne)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Me))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Fe(e){return Math.min(i.maxSamples,e.samples)}function Ie(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function M(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Le(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(qt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&F(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):I(`WebGLTextures: Unsupported texture color space:`,n)),t}function Re(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=le,this.resetTextureUnits=oe,this.getTextureUnits=se,this.setTextureUnits=ce,this.setTexture2D=de,this.setTexture2DArray=fe,this.setTexture3D=pe,this.setTextureCube=me,this.rebindTextures=ke,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Il(e,t){function n(n,r=``){let i,a=qt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Ll=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rl=`
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

}`,zl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Wi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new pa({vertexShader:Ll,fragmentShader:Rl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new W(new ta(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bl=class extends At{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new zl,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new L,C=null,w=null,T=new Qa;T.viewport=new an;let E=new Qa;E.viewport=new an;let D=[T,E],O=new co,ee=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new zn,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new zn,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new zn,b[e]=t),t.getHandSpace()};function A(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function te(){r.removeEventListener(`select`,A),r.removeEventListener(`selectstart`,A),r.removeEventListener(`selectend`,A),r.removeEventListener(`squeeze`,A),r.removeEventListener(`squeezestart`,A),r.removeEventListener(`squeezeend`,A),r.removeEventListener(`end`,te),r.removeEventListener(`inputsourceschange`,ne);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}ee=null,k=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&F(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&F(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,A),r.addEventListener(`selectstart`,A),r.addEventListener(`selectend`,A),r.addEventListener(`squeeze`,A),r.addEventListener(`squeezestart`,A),r.addEventListener(`squeezeend`,A),r.addEventListener(`end`,te),r.addEventListener(`inputsourceschange`,ne),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?ye:ve,a=_.stencil?fe:se);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new sn(d.textureWidth,d.textureHeight,{format:_e,type:re,depthTexture:new Hi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new sn(f.framebufferWidth,f.framebufferHeight,{format:_e,type:re,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function ne(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let j=new R,ie=new R;function ae(e,t,n){j.setFromMatrixPosition(t.matrixWorld),ie.setFromMatrixPosition(n.matrixWorld);let r=j.distanceTo(ie),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function oe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(ee!==O.near||k!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),ee=O.near,k=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;oe(O,i);for(let e=0;e<a.length;e++)oe(a[e],i);a.length===2?ae(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ce(e,O,i)};function ce(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Nt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let le=null;function ue(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Qa,o.layers.enable(n),o.viewport=new an,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Wi,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}le&&le(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let de=new jo;de.setAnimationLoop(ue),this.setAnimationLoop=function(e){le=e},this.dispose=function(){}}},Vl=new B,Hl=new z;Hl.set(-1,0,0,0,1,0,0,0,1);function Ul(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,la(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Vl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Hl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Wl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return I(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?F(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):F(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Gl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Kl=null;function ql(){return Kl===null&&(Kl=new pi(Gl,16,16,Se,le),Kl.name=`DFG_LUT`,Kl.minFilter=A,Kl.magFilter=A,Kl.wrapS=E,Kl.wrapT=E,Kl.generateMipmaps=!1,Kl.needsUpdate=!0),Kl}var Jl=class{constructor(e={}){let{canvas:t=Ct(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=re}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([we,Ce,xe]),g=new Set([re,se,ae,fe,ue,de]),_=new Uint32Array(4),v=new Int32Array(4),y=new R,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,ee=null,k=null;this._outputColorSpace=ft;let A=0,te=0,j=null,ie=-1,oe=null,ce=new an,pe=new an,me=null,he=new V(0),ge=0,_e=t.width,ve=t.height,ye=1,be=null,Se=null,Te=new an(0,0,_e,ve),Ee=new an(0,0,_e,ve),De=!1,Oe=new Ei,ke=!1,Ae=!1,je=new B,Me=new R,Ne=new an,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function Ie(){return j===null?ye:1}let M=n;function Le(e,n){return t.getContext(e,n)}let Re,ze,N,Be,P,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,st,!1),t.addEventListener(`webglcontextrestored`,ct,!1),t.addEventListener(`webglcontextcreationerror`,lt,!1),M===null){let t=`webgl2`;if(M=Le(t,e),M===null)throw Le(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}at()}catch(e){throw t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),I(`WebGLRenderer: `+e.message),e}function at(){Re=new fs(M),Re.init(),nt=new Il(M,Re),ze=new Vo(M,Re,e,nt),N=new Pl(M,Re),ze.reversedDepthBuffer&&d&&N.buffers.depth.setReversed(!0),O=M.createFramebuffer(),ee=M.createFramebuffer(),k=M.createFramebuffer(),Be=new hs(M),P=new ml,Ve=new Fl(M,Re,N,P,ze,nt,Be),He=new ds(T),Ue=new Mo(M),rt=new zo(M,Ue),We=new ps(M,Ue,Be,rt),Ge=new _s(M,We,Ue,rt,Be),$e=new gs(M,ze,Ve),Xe=new Ho(P),Ke=new pl(T,He,Re,ze,rt,Xe),qe=new Ul(T,P),Je=new vl,Ye=new Tl(Re),Qe=new Ro(T,He,N,Ge,p,s),Ze=new Nl(T,Ge,ze),it=new Wl(M,Be,ze,N),et=new Bo(M,Re,Be),tt=new ms(M,Re,Be),Be.programs=Ke.programs,T.capabilities=ze,T.extensions=Re,T.properties=P,T.renderLists=Je,T.shadowMap=Ze,T.state=N,T.info=Be}m!==1009&&(w=new ys(m,t.width,t.height,o,r,i));let ot=new Bl(T,M);this.xr=ot,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){let e=Re.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Re.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(e){e!==void 0&&(ye=e,this.setSize(_e,ve,!1))},this.getSize=function(e){return e.set(_e,ve)},this.setSize=function(e,n,r=!0){ot.isPresenting?F(`WebGLRenderer: Can't change size while VR device is presenting.`):(_e=e,ve=n,t.width=Math.floor(e*ye),t.height=Math.floor(n*ye),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(_e*ye,ve*ye).floor()},this.setDrawingBufferSize=function(e,n,r){_e=e,ve=n,ye=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)I(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){F(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ce)},this.getViewport=function(e){return e.copy(Te)},this.setViewport=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),N.viewport(ce.copy(Te).multiplyScalar(ye).round())},this.getScissor=function(e){return e.copy(Ee)},this.setScissor=function(e,t,n,r){e.isVector4?Ee.set(e.x,e.y,e.z,e.w):Ee.set(e,t,n,r),N.scissor(pe.copy(Ee).multiplyScalar(ye).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(e){N.setScissorTest(De=e)},this.setOpaqueSort=function(e){be=e},this.setTransparentSort=function(e){Se=e},this.getClearColor=function(e){return e.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(j!==null){let t=j.texture.format;e=h.has(t)}if(e){let e=j.texture.type,t=g.has(e),n=Qe.getClearColor(),r=Qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,M.clearBufferuiv(M.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,M.clearBufferiv(M.COLOR,0,v))}else r|=M.COLOR_BUFFER_BIT}t&&(r|=M.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&M.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),Qe.dispose(),Je.dispose(),Ye.dispose(),P.dispose(),He.dispose(),Ge.dispose(),rt.dispose(),it.dispose(),Ke.dispose(),ot.dispose(),ot.removeEventListener(`sessionstart`,_t),ot.removeEventListener(`sessionend`,vt),bt.stop()};function st(e){e.preventDefault(),Tt(`WebGLRenderer: Context Lost.`),E=!0}function ct(){Tt(`WebGLRenderer: Context Restored.`),E=!1;let e=Be.autoReset,t=Ze.enabled,n=Ze.autoUpdate,r=Ze.needsUpdate,i=Ze.type;at(),Be.autoReset=e,Ze.enabled=t,Ze.autoUpdate=n,Ze.needsUpdate=r,Ze.type=i}function lt(e){I(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ut(e){let t=e.target;t.removeEventListener(`dispose`,ut),dt(t)}function dt(e){pt(e),P.remove(e)}function pt(e){let t=P.get(e).programs;t!==void 0&&(t.forEach(function(e){Ke.releaseProgram(e)}),e.isShaderMaterial&&Ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Pe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Nt(e,t,n,r,i);N.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=We.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;rt.setup(i,r,s,n,c);let h,g=et;if(c!==null&&(h=Ue.get(c),g=tt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(N.setLineWidth(r.wireframeLinewidth*Ie()),g.setMode(M.LINES)):g.setMode(M.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),N.setLineWidth(e*Ie()),i.isLineSegments?g.setMode(M.LINES):i.isLineLoop?g.setMode(M.LINE_LOOP):g.setMode(M.LINE_STRIP)}else i.isPoints?g.setMode(M.POINTS):i.isSprite&&g.setMode(M.TRIANGLES);if(i.isBatchedMesh){if(Re.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ue.get(c).bytesPerElement:1,o=P.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(M,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function mt(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),ke===!0&&Xe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,kt(e,t,r),e.side=0,e.needsUpdate=!0,kt(e,t,r),e.side=2):kt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Ye.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),Ae=this.localClippingEnabled,ke=Xe.init(this.clippingPlanes,Ae),ke===!0&&Xe.setGlobalState(this.clippingPlanes,t),D!==null&&Ze.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];mt(o,n,t,e),r.add(o)}else mt(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=P.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Re.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ht=null;function gt(e){ht&&ht(e)}function _t(){bt.stop()}function vt(){bt.start()}let bt=new jo;bt.setAnimationLoop(gt),typeof self<`u`&&bt.setContext(self),this.setAnimationLoop=function(e){ht=e,ot.setAnimationLoop(e),e===null?bt.stop():bt.start()},ot.addEventListener(`sessionstart`,_t),ot.addEventListener(`sessionend`,vt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){I(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=ot.enabled===!0&&ot.isPresenting===!0,r=w!==null&&(j===null||n)&&w.begin(T,j);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(t),t=ot.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,j),x=Ye.get(e,C.length),x.init(t),x.state.textureUnits=Ve.getTextureUnits(),C.push(x),je.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Oe.setFromProjectionMatrix(je,yt,t.reversedDepth),Ae=this.localClippingEnabled,ke=Xe.init(this.clippingPlanes,Ae),b=Je.get(e,S.length),b.init(),S.push(b),ot.enabled===!0&&ot.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&xt(e,t,-1/0,T.sortObjects)}xt(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(be,Se),Fe=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Fe&&Qe.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ke===!0&&Xe.beginShadows();let i=x.state.shadowsArray;if(Ze.render(i,e,t),ke===!0&&Xe.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];wt(n,r,e,a)}Fe&&Qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];St(b,e,n,n.viewport)}}else r.length>0&&wt(n,r,e,t),Fe&&Qe.render(e),St(b,e,t)}j!==null&&te===0&&(Ve.updateMultisampleRenderTarget(j),Ve.updateRenderTargetMipmap(j)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),rt.resetDefaultState(),ie=-1,oe=null,C.pop(),C.length>0?(x=C[C.length-1],Ve.setTextureUnits(x.state.textureUnits),ke===!0&&Xe.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function xt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Oe)){r&&Ne.setFromMatrixPosition(e.matrixWorld).applyMatrix4(je);let i=Ge.update(e),a=e.material;a.visible&&b.push(e,i,a,n,Ne.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Oe))){let i=Ge.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ne.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ne.copy(e.boundingSphere.center)),Ne.applyMatrix4(e.matrixWorld).applyMatrix4(je)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,Ne.z,s,t)}}else a.visible&&b.push(e,i,a,n,Ne.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)xt(i[e],t,n,r)}function St(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),ke===!0&&Xe.setGlobalState(T.clippingPlanes,n),r&&N.viewport(ce.copy(r)),i.length>0&&Et(i,t,n),a.length>0&&Et(a,t,n),o.length>0&&Et(o,t,n),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function wt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Re.has(`EXT_color_buffer_half_float`)||Re.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new sn(1,1,{generateMipmaps:!0,type:e?le:re,minFilter:ne,samples:Math.max(4,ze.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qt.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||ce;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(he),ge=T.getClearAlpha(),ge<1&&T.setClearColor(16777215,.5),T.clear(),Fe&&Qe.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),ke===!0&&Xe.setGlobalState(T.clippingPlanes,r),Et(e,n,r),Ve.updateMultisampleRenderTarget(a),Ve.updateRenderTargetMipmap(a),Re.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Dt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ve.updateMultisampleRenderTarget(a),Ve.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(he,ge),d!==void 0&&(r.viewport=d),T.toneMapping=u}function Et(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Dt(o,t,n,s,l,c)}}function Dt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function kt(e,t,n){t.isScene!==!0&&(t=Pe);let r=P.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ke.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=He.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ut),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return jt(e,s),d}else s.uniforms=Ke.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Xe.uniform),jt(e,s),r.needsLights=Ft(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function At(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Ec.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function jt(e,t){let n=P.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Mt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function Nt(e,t,n,r,i){t.isScene!==!0&&(t=Pe),Ve.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=j===null?T.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:qt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=He.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=P.get(r),y=x.state.lights;if(ke===!0&&(Ae===!0||e!==oe)){let t=e===oe&&r.id===ie;Xe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Xe.numPlanes||v.numIntersection!==Xe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=kt(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),ee=v.uniforms;if(N.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==ie&&(ie=r.id,w=!0),v.needsLights){let e=Mt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||oe!==e){N.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(M,`projectionMatrix`,e.projectionMatrix),O.setValue(M,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(M,Me.setFromMatrixPosition(e.matrixWorld)),ze.logarithmicDepthBuffer&&O.setValue(M,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(M,`isOrthographic`,e.isOrthographicCamera===!0),oe!==e&&(oe=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(M,`sunShadowMap`,y.state.sunShadowMap,Ve),y.state.directionalShadowMap.length>0&&O.setValue(M,`directionalShadowMap`,y.state.directionalShadowMap,Ve),y.state.spotShadowMap.length>0&&O.setValue(M,`spotShadowMap`,y.state.spotShadowMap,Ve),y.state.pointShadowMap.length>0&&O.setValue(M,`pointShadowMap`,y.state.pointShadowMap,Ve)),i.isSkinnedMesh){O.setOptional(M,i,`bindMatrix`),O.setOptional(M,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(M,`boneTexture`,e.boneTexture,Ve))}i.isBatchedMesh&&(O.setOptional(M,i,`batchingTexture`),O.setValue(M,`batchingTexture`,i._matricesTexture,Ve),O.setOptional(M,i,`batchingIdTexture`),O.setValue(M,`batchingIdTexture`,i._indirectTexture,Ve),O.setOptional(M,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(M,`batchingColorTexture`,i._colorsTexture,Ve));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&$e.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(M,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(ee.envMapIntensity.value=t.environmentIntensity),ee.dfgLUT!==void 0&&(ee.dfgLUT.value=ql()),w){if(O.setValue(M,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&Pt(ee,E),a&&r.fog===!0&&qe.refreshFogUniforms(ee,a),qe.refreshMaterialUniforms(ee,r,ye,ve,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;ee.probesSH.value=e.texture,ee.probesMin.value.copy(e.boundingBox.min),ee.probesMax.value.copy(e.boundingBox.max),ee.probesResolution.value.copy(e.resolution)}Ec.upload(M,At(v),ee,Ve)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Ec.upload(M,At(v),ee,Ve),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(M,`center`,i.center),O.setValue(M,`modelViewMatrix`,i.modelViewMatrix),O.setValue(M,`normalMatrix`,i.normalMatrix),O.setValue(M,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];it.update(n,S),it.bind(n,S)}}return S}function Pt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ft(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(e,t,n){let r=P.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),P.get(e.texture).__webglTexture=t,P.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=P.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){j=e,A=t,te=n;let r=null,i=!1,a=!1;if(e){let o=P.get(e);if(o.__useDefaultFramebuffer!==void 0){N.bindFramebuffer(M.FRAMEBUFFER,o.__webglFramebuffer),ce.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest,N.viewport(ce),N.scissor(pe),N.setScissorTest(me),ie=-1;return}if(o.__webglFramebuffer===void 0)Ve.setupRenderTarget(e);else if(o.__hasExternalTextures)Ve.rebindTextures(e,P.get(e.texture).__webglTexture,P.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&P.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ve.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=P.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ve.useMultisampledRTT(e)===!1?P.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ce.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest}else ce.copy(Te).multiplyScalar(ye).floor(),pe.copy(Ee).multiplyScalar(ye).floor(),me=De;if(n!==0&&(r=O),N.bindFramebuffer(M.FRAMEBUFFER,r)&&N.drawBuffers(e,r),N.viewport(ce),N.scissor(pe),N.setScissorTest(me),i){let r=P.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=P.get(e.textures[t]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=P.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,t.__webglTexture,n)}ie=-1};function It(e){let t=P.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=ze.textureFormatReadable(e.format),t.__typeReadable=ze.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=P.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){N.bindFramebuffer(M.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s);let u=It(o);if(u.__formatReadable===!1){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&M.readPixels(t,n,r,i,nt.convert(c),nt.convert(l),a)}finally{let e=j===null?null:P.get(j).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=P.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){N.bindFramebuffer(M.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s);let d=It(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,f),M.bufferData(M.PIXEL_PACK_BUFFER,a.byteLength,M.STREAM_READ),M.readPixels(t,n,r,i,nt.convert(l),nt.convert(u),0),M.bindBuffer(M.PIXEL_PACK_BUFFER,null);let p=j===null?null:P.get(j).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,p);let m=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await Ot(M,m,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,f),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,a),M.bindBuffer(M.PIXEL_PACK_BUFFER,null),M.deleteBuffer(f),M.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ve.setTexture2D(e,0),M.copyTexSubImage2D(M.TEXTURE_2D,n,0,0,o,s,i,a),N.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=nt.convert(t.format),_=nt.convert(t.type),v;t.isData3DTexture?(Ve.setTexture3D(t,0),v=M.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ve.setTexture2DArray(t,0),v=M.TEXTURE_2D_ARRAY):(Ve.setTexture2D(t,0),v=M.TEXTURE_2D),N.activeTexture(M.TEXTURE0),N.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,t.flipY),N.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),N.pixelStorei(M.UNPACK_ALIGNMENT,t.unpackAlignment);let y=N.getParameter(M.UNPACK_ROW_LENGTH),b=N.getParameter(M.UNPACK_IMAGE_HEIGHT),x=N.getParameter(M.UNPACK_SKIP_PIXELS),S=N.getParameter(M.UNPACK_SKIP_ROWS),C=N.getParameter(M.UNPACK_SKIP_IMAGES);N.pixelStorei(M.UNPACK_ROW_LENGTH,h.width),N.pixelStorei(M.UNPACK_IMAGE_HEIGHT,h.height),N.pixelStorei(M.UNPACK_SKIP_PIXELS,l),N.pixelStorei(M.UNPACK_SKIP_ROWS,u),N.pixelStorei(M.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=P.get(e),r=P.get(t),h=P.get(n.__renderTarget),g=P.get(r.__renderTarget);N.bindFramebuffer(M.READ_FRAMEBUFFER,h.__webglFramebuffer),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,P.get(e).__webglTexture,i,d+n),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,P.get(t).__webglTexture,a,m+n)),M.blitFramebuffer(l,u,o,s,f,p,o,s,M.DEPTH_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||P.has(e)){let n=P.get(e),r=P.get(t);N.bindFramebuffer(M.READ_FRAMEBUFFER,ee),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,k);for(let e=0;e<c;e++)w?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,n.__webglTexture,i),T?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,r.__webglTexture,a),i===0?T?M.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):M.copyTexSubImage2D(v,a,f,p,l,u,o,s):M.blitFramebuffer(l,u,o,s,f,p,o,s,M.COLOR_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?M.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h);N.pixelStorei(M.UNPACK_ROW_LENGTH,y),N.pixelStorei(M.UNPACK_IMAGE_HEIGHT,b),N.pixelStorei(M.UNPACK_SKIP_PIXELS,x),N.pixelStorei(M.UNPACK_SKIP_ROWS,S),N.pixelStorei(M.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&M.generateMipmap(v),N.unbindTexture()},this.initRenderTarget=function(e){P.get(e).__webglFramebuffer===void 0&&Ve.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ve.setTextureCube(e,0):e.isData3DTexture?Ve.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ve.setTexture2DArray(e,0):Ve.setTexture2D(e,0),N.unbindTexture()},this.resetState=function(){A=0,te=0,j=null,N.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return yt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(e),t.unpackColorSpace=qt._getUnpackColorSpace()}},Yl=(e,t,n)=>e+(t-e)*n,Xl={yaw:55,pitch:-25,reach:0};function Zl(e,t,n,i,a,o){let s=t>=0?e[t]:void 0;if(!s)return null;let c=a>0?{...s,...r(s,a)}:s,l=Xl,u=n-1+i,d=c.hitbox,f=d.kind===`arc`?d.arcDeg:360,p=t%2==0?1:-1,m=Math.min(1,u/Math.max(1,c.activeFrom)),h=Math.min(1,Math.max(0,(u-c.activeFrom)/Math.max(1,c.activeTo-c.activeFrom))),g=Math.max(0,(u-c.activeTo)/Math.max(1,c.frames-c.activeTo)),_,v,y=l.reach,b=null;if(d.kind===`line`)_=Yl(l.yaw,0,m),v=-8,y=u<c.activeFrom?-.3*m:u<=c.activeTo?.9:.9*(1-g);else if(f>=360){_=u<c.activeFrom?Yl(l.yaw,90,m):90+360*h,v=-5;let e=90+360*h;b={tail:e-Math.min(360*h,300),head:e,radius:d.radius*o}}else{let e=p*(f/2+20),t=-p*(f/2);_=u<c.activeFrom?Yl(l.yaw,e,m):Yl(e,t,h),u>c.activeTo&&(_=Yl(t,l.yaw,g)),v=-12,b={tail:e,head:Yl(e,t,h),radius:d.radius*o}}return{index:t,step:c,f:u,yaw:_,pitch:v,reach:y,windUp:m,swing:h,recover:g,side:p,widen:o,slash:b}}var Ql=(e,t,n)=>{let r=e[t];return typeof r==`number`?r:n},$l=(e,t)=>{let n=e.color;return typeof n==`string`?n:t};function eu(e){return new ha({color:e,roughness:.55,metalness:.1})}var tu={capsule(e){let t=Ql(e,`radius`,.45),n=Math.max(Ql(e,`height`,1.4),t*2),r=new W(new Ki(t,n-t*2,6,16),eu($l(e,`#4aa3ff`)));r.position.y=n/2;let i=new W(new Gi(t*.9,t*.35,t*.5),eu(`#e8f1ff`));i.position.set(0,n*.72,t*.75);let a=new Ln;return a.add(r,i),a},cone(e){let t=Ql(e,`radius`,.45),n=Ql(e,`height`,1.1),r=new W(new Yi(t,n,20),eu($l(e,`#e05555`)));r.position.y=n/2;let i=new W(new Gi(t*.8,t*.25,t*.3),eu(`#ffe08a`));i.position.set(0,n*.45,t*.55);let a=new Ln;return a.add(r,i),a},blade(e){let t=Ql(e,`length`,1.2),n=new W(new Gi(.07,.03,t),eu($l(e,`#e8e8f0`)));n.position.z=t/2+.15;let r=new W(new Gi(.28,.05,.06),eu(`#9a7b3c`));r.position.z=.12;let i=new Ln;return i.add(n,r),i},turret(e){let t=Ql(e,`radius`,.4),n=Ql(e,`height`,1.15),r=$l(e,`#a35cff`),i=new W(new Ji(t,t*1.15,n*.55,18),eu(r));i.position.y=n*.275;let a=new W(new ea(t*.8,0),eu(r));a.position.y=n*.72;let o=new W(new Gi(t*.35,t*.35,t*1.3),eu(`#2b1840`));o.position.set(0,n*.72,t*.75);let s=new W(new Gi(t*.7,t*.2,t*.2),eu(`#ffe08a`));s.position.set(0,n*.86,t*.55);let c=new Ln;return c.add(i,a,o,s),c},orb(e){let t=Ql(e,`radius`,.25),n=$l(e,`#ff6bd5`),r=new W(new Qi(t*.6,1),new U({color:`#ffffff`})),i=new W(new Qi(t,1),new U({color:n,transparent:!0,opacity:.75,blending:2,depthWrite:!1})),a=new Ln;a.add(i,r);let o=Ql(e,`trail`,0);for(let e=1;e<=o;e++){let r=new W(new Qi(t*(1-e/(o+1.5)),1),new U({color:n,transparent:!0,opacity:.55*(1-e/(o+1)),blending:2,depthWrite:!1}));r.position.z=-t*1.1*e,a.add(r)}return a},crystal(e){let t=Ql(e,`size`,.3),n=new W(new ea(t),eu($l(e,`#4a90e2`)));return n.position.y=t,n}};Object.keys(tu);function nu(e){let t=e?tu[e.gen]:void 0;if(e&&t)return t(e.params);let n=new W(new Gi(.6,.6,.6),eu(`#ff00ff`));return n.position.y=.3,n}function ru(e){let t=[];return e.traverse(e=>{e instanceof W&&e.material instanceof ha&&t.push(e.material)}),t}var iu=[`#5fd37a`,`#b98cff`,`#ffb648`],au=.85,ou=.7,su=new V(`#ff3030`),cu=new V(`#ffffff`),lu=class{#e;#t;#n;#r=[];constructor(e,t,n){this.#e=e,this.#t=t,this.#n=n}place(e,t,n,r,i,a,o){let s=this.#i(e);if(s.group.visible=t!==null&&!t.dead,!t||t.dead)return;s.group.position.set(n,0,r),s.group.rotation.y=Math.atan2(t.fx,t.fy);let c=s.pivot;if(c.position.y=ou,c.rotation.set(0,0,0),t.downed)c.rotation.x=-Math.PI/2,c.position.y=.3;else if(t.dodgeFrame>=0){let e=Math.max(0,Math.min(1,(t.dodgeFrame-1+o)/this.#n.player.dodgeFrames));c.rotation.x=Math.PI*2*e,c.position.y=ou-.25*Math.sin(Math.PI*e)}else t.dash?(c.rotation.x=.55,c.position.y=.58):t.hurt>0&&(c.rotation.x=-.35*(t.hurt/12));let l=t.invulnerable>0&&t.dodgeFrame<0&&!t.dash&&Math.floor(a/4)%2==1;for(let e of s.materials)e.emissive.copy(t.hurt>0?su:cu),e.emissiveIntensity=t.hurt>0?t.hurt/12:l?.35:0;let u=t.downed?Xl:i??Xl,d=Math.PI/180;s.sword.rotation.set(-u.pitch*d,u.yaw*d,0,`YXZ`),s.sword.position.set(0,.20000000000000007,u.reach)}#i(e){let t=this.#r[e-1];if(t)return t;let n=new V(iu[(e-1)%iu.length]),r=nu(this.#t.visuals.get(this.#n.player.visual)),i=ru(r);for(let e of i)e.color.lerp(n,au);r.position.y=-.7;let a=new Ln;a.add(nu(this.#t.visuals.get(this.#n.weapon.visual)));let o=new Ln;o.add(r,a);let s=new W(new qi(this.#n.player.radius*1.1,24),new U({color:`#000000`,transparent:!0,opacity:.35,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.01;let c=new Ln;c.add(o,s),this.#e.add(c);let l={group:c,pivot:o,sword:a,materials:i};return this.#r[e-1]=l,l}},uu=`#ffd166`,du=`#3c4250`,fu=`#b07a3a`,pu=`#3a3026`,mu=`#8a96a8`,hu=`#8fd8ff`,gu=`#ffd34a`,_u=class{group=new Ln;#e=``;#t=[];#n=[];#r=null;showMiners(e){for(;this.#n.length<e.length;){this.#r??=new ha({color:gu,roughness:.7});let e=new W(new Gi(.45,1.1,.35),this.#r);this.#n.push(e),this.group.add(e)}this.#n.forEach((t,n)=>{let r=e[n];t.visible=r!==void 0,r&&t.position.set(r.x,.55,r.y)})}update(e,t){let n=[e.altars.map(e=>`${e.x},${e.y},${+!!e.lit}${+!!e.using}`).join(`|`),e.chests.map(e=>`${e.x},${e.y},${+!!e.big}${+!!e.opened}`).join(`|`),e.lift?`${e.lift.x},${e.lift.y},${+!!e.lift.mended}`:``,e.shrines.map(e=>`${e.x},${e.y},${+!!e.used}`).join(`|`)].join(`/`);if(n===this.#e)return;this.#o(),this.#e=n;for(let n of e.altars){let e=n.lit?uu:du,r=n.using?1.2:n.lit?.45:0,i=this.#a([.5,.9,.5],e,r);i.position.set(n.x,.45,n.y);let a=new W(new na(t-.12,t,40),this.#i(e,r*.6,n.lit?.7:.35));a.rotation.x=-Math.PI/2,a.position.set(n.x,.03,n.y),this.group.add(i,a)}for(let t of e.chests){let e=t.big?.9:.6,n=this.#a([e,e*.6,e*.7],t.opened?pu:fu,0);n.position.set(t.x,e*.3,t.y),this.group.add(n)}for(let t of e.shrines){let e=this.#a([.4,1.2,.4],t.used?du:hu,t.used?0:.6);e.position.set(t.x,.6,t.y),this.group.add(e)}let r=e.lift;if(r){let e=this.#a([1.6,.12,1.6],r.mended?uu:mu,r.mended?.5:0);e.position.set(r.x,.06,r.y),this.group.add(e)}}clear(){this.#e!==``&&(this.#o(),this.#e=``)}#i(e,t,n=1){let r=new ha({color:e,emissive:e,emissiveIntensity:t,roughness:.6,transparent:n<1,opacity:n});return this.#t.push(r),r}#a(e,t,n){return new W(new Gi(e[0],e[1],e[2]),this.#i(t,n))}#o(){for(let e of[...this.group.children])e instanceof W&&this.#n.includes(e)||(this.group.remove(e),e instanceof W&&e.geometry.dispose());for(let e of this.#t)e.dispose();this.#t.length=0}},vu=56,yu=7,bu=5.5,xu=1.05,Su=.38,Cu=.045,wu=40,Tu=[{delay:0,frames:22,reach:3.8},{delay:8,frames:24,reach:2.6}],Eu={radius:1.9,frames:44},Du=new V(`#ffc94a`),Ou=new V(`#fff6d6`),ku=new V(`#ffe7a8`),Au=class{group=new Ln;#e=-1e3;#t;#n;#r;#i;#a;constructor(){let e=(e,t)=>new U({color:e,...t?{map:t}:{},transparent:!0,blending:2,depthWrite:!1}),t=ju(),n=new Ji(1,1,1,40,1,!0);n.translate(0,.5,0);let r=e(Du,t),i=e(Ou,t);r.side=2,i.side=2,this.#t=new W(n,r),this.#n=new W(n,i);let a=new qi(1,48);a.rotateX(-Math.PI/2);let o=e(Du,Mu());this.#r=new W(a,o),this.#r.position.y=.04;let s=new na(.86,1,72);s.rotateX(-Math.PI/2);let c=Tu.map(()=>e(ku));this.#i=c.map(e=>{let t=new W(s,e);return t.position.y=.07,t}),this.#a={column:r,core:i,foot:o,rings:c};for(let e of[this.#r,...this.#i,this.#t,this.#n])e.renderOrder=20;this.group.add(this.#r,...this.#i,this.#t,this.#n),this.group.visible=!1}play(e){this.#e=e}bodyGlow(e){let t=e-this.#e;return t>=0&&t<wu?(1-t/wu)**2:0}update(e,t,n){let r=e-this.#e;if(this.group.visible=r>=0&&r<vu,!this.group.visible)return;this.group.position.set(t,0,n);let i=r/vu,a=Math.min(1,r/yu),o=bu*(1-(1-a)**3),s=xu*(1+.3*(1-a))*(1-.4*i);this.#t.scale.set(s,o,s),this.#n.scale.set(s*Su,o*1.08,s*Su),this.#t.rotation.y=r*Cu,this.#n.rotation.y=-r*Cu*1.6,this.#a.column.opacity=.95*(1-i)**1.4,this.#a.core.opacity=(1-i)**2;let c=Math.min(1,r/Eu.frames);this.#r.scale.setScalar(Eu.radius*(.6+.4*Math.sqrt(c))),this.#a.foot.opacity=.85*(1-c)**1.5,Tu.forEach((e,t)=>{let n=this.#i[t],i=this.#a.rings[t],a=(r-e.delay)/e.frames;n.visible=a>=0&&a<1,n.visible&&(n.scale.setScalar(.3+e.reach*(1-(1-a)**2)),i.opacity=.9*(1-a))})}clear(){this.#e=-1e3,this.group.visible=!1}};function ju(){let e=document.createElement(`canvas`);e.width=64,e.height=128;let t=e.getContext(`2d`);if(t){let e=t.createImageData(64,128);for(let t=0;t<128;t++){let n=(t/127)**1.6;for(let r=0;r<64;r++){let i=.5+.5*Math.cos(r/64*Math.PI*2*5),a=.45+.55*i*i,o=(t*64+r)*4;e.data[o]=255,e.data[o+1]=255,e.data[o+2]=255,e.data[o+3]=Math.round(255*n*a)}}t.putImageData(e,0,0)}return new Vi(e)}function Mu(){let e=document.createElement(`canvas`);e.width=64,e.height=64;let t=e.getContext(`2d`);if(t){let e=t.createImageData(64,64);for(let t=0;t<64;t++)for(let n=0;n<64;n++){let r=n/63*2-1,i=t/63*2-1,a=Math.max(0,1-Math.sqrt(r*r+i*i))**1.5,o=(t*64+n)*4;e.data[o]=255,e.data[o+1]=255,e.data[o+2]=255,e.data[o+3]=Math.round(255*a)}t.putImageData(e,0,0)}return new Vi(e)}function Nu(e){let t=e.clone();return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec3 instanceEmissive;
varying vec3 vInstanceEmissive;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vInstanceEmissive = instanceEmissive;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vInstanceEmissive;`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
totalEmissiveRadiance += vInstanceEmissive;`)},t.customProgramCacheKey=()=>`instance-emissive`,t}function Pu(e){return e.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float instanceOpacity;
varying float vInstanceOpacity;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vInstanceOpacity = instanceOpacity;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vInstanceOpacity;`).replace(`#include <alphamap_fragment>`,`#include <alphamap_fragment>
diffuseColor.a *= vInstanceOpacity;`)},e.customProgramCacheKey=()=>`instance-opacity`,e}var Fu=new B,Iu=new V(1,1,1),Lu=class{#e;#t=[];#n;#r=0;constructor(e,t,n=32){this.#e=e,this.#n=n,t.updateMatrixWorld(!0),t.traverse(e=>{if(!(e instanceof W))return;let t=e.material instanceof ha,r=t?Nu(e.material):e.material.clone(),i={mesh:this.#i(e.geometry,r,e.renderOrder),local:e.matrixWorld.clone(),emissive:null};t&&(i.emissive=this.#a(i.mesh,n)),this.#t.push(i)})}#i(e,t,n){let r=new Si(e,t,this.#n);return r.instanceMatrix.setUsage(vt),r.frustumCulled=!1,r.renderOrder=n,r.count=0,this.#e.add(r),r}#a(e,t){let n=new mi(new Float32Array(t*3),3);return n.setUsage(vt),e.geometry=e.geometry.clone(),e.geometry.setAttribute(`instanceEmissive`,n),n}#o(){let e=this.#n*2;for(let t of this.#t){let n=t.mesh;this.#n=e;let r=this.#i(n.geometry,n.material,n.renderOrder);if(r.instanceMatrix.array.set(n.instanceMatrix.array),this.#e.remove(n),n.dispose(),t.mesh=r,t.emissive){let n=t.emissive;t.emissive=this.#a(r,e),t.emissive.array.set(n.array)}}this.#n=e}begin(){this.#r=0}add(e,t){this.#r===this.#n&&this.#o();let n=this.#r++;for(let r of this.#t)r.mesh.setMatrixAt(n,Fu.multiplyMatrices(e,r.local)),r.emissive&&(t?r.emissive.setXYZ(n,t.r,t.g,t.b):r.emissive.setXYZ(n,0,0,0))}end(){for(let e of this.#t)e.mesh.count=this.#r,e.mesh.instanceMatrix.needsUpdate=!0,e.emissive&&(e.emissive.needsUpdate=!0)}dispose(){for(let e of this.#t)this.#e.remove(e.mesh),e.mesh.dispose()}},Ru=class{#e;#t;#n;#r;#i=0;constructor(e,t,n,r=64){this.#e=e,this.#r=r,Pu(n),this.#t=this.#a(t.clone(),n),this.#n=this.#o()}#a(e,t){let n=new Si(e,t,this.#r);return n.instanceMatrix.setUsage(vt),n.frustumCulled=!1,n.count=0,this.#e.add(n),n}#o(){let e=new mi(new Float32Array(this.#r),1);return e.setUsage(vt),this.#t.geometry.setAttribute(`instanceOpacity`,e),e}set renderOrder(e){this.#t.renderOrder=e}#s(){let e=this.#t,t=this.#n,n=e.instanceColor;this.#r*=2,this.#t=this.#a(e.geometry.clone(),e.material),this.#t.renderOrder=e.renderOrder,this.#t.instanceMatrix.array.set(e.instanceMatrix.array),this.#n=this.#o(),this.#n.array.set(t.array),n&&(this.#t.setColorAt(0,Iu),this.#t.instanceColor?.array.set(n.array)),this.#e.remove(e),e.dispose()}begin(){this.#i=0}add(e,t,n){this.#i===this.#r&&this.#s();let r=this.#i++;this.#t.setMatrixAt(r,e),this.#n.setX(r,t),n&&this.#t.setColorAt(r,n)}end(){this.#t.count=this.#i,this.#t.instanceMatrix.needsUpdate=!0,this.#n.needsUpdate=!0,this.#t.instanceColor&&(this.#t.instanceColor.needsUpdate=!0)}},zu={combat:`#7fb2ff`,elite:`#ff6b6b`,shop:`#ffd166`,boss:`#c77dff`},Bu=1.6,Vu=class{#e=new Ln;#t=[];#n;constructor(e,t){this.#n=t,e.add(this.#e)}update(e,t){for(;this.#t.length<e.length;)this.#t.push(this.#r());this.#t.forEach((n,r)=>{let i=e[r];if(n.group.visible=i!==void 0,!i)return;n.group.position.set(i.x,0,i.y);let a=i.size??1;n.group.scale.set(a,1,a),n.ring.color.set(zu[i.kind]),n.column.color.set(zu[i.kind]);let o=.5+.5*Math.sin(t*.08+r*2);n.ring.opacity=.55+.3*o,n.column.opacity=.16+.12*o})}#r(){let e=this.#n,t=()=>new U({transparent:!0,depthWrite:!1,blending:2}),n=t(),r=new W(new na(e*.72,e,40),n);r.rotation.x=-Math.PI/2,r.position.y=.03;let i=t(),a=new W(new Ji(e*.78,e*.78,Bu,28,1,!0),i);a.position.y=Bu/2;let o=new Ln;return o.add(r,a),this.#e.add(o),{group:o,ring:n,column:i}}},Hu=60,Uu=.618033988749,Wu=.754877666247,Gu=class{mesh;#e;#t=new B;#n=new V;#r;#i=0;#a=0;constructor(e,t){this.mesh=new Si(new ea(1,0),new U({color:`#ffffff`}),e),this.mesh.count=0,this.mesh.frustumCulled=!1,this.#e=f(t),this.#r=Array.from({length:e},()=>({start:0,life:-1,x:0,y:0,z:0,vx:0,vy:0,vz:0,gravity:0,size:0,r:1,g:1,b:1}))}get live(){return this.#a}sparks(e,t,n,r,i,a){let o=this.#e;this.#n.set(a);for(let a=0;a<i;a++){let i=(o.float()-.5)*1.6,a=3+o.float()*4,s=n-r*i,c=r+n*i,l=Math.hypot(s,c)||1,u=this.#o();u.start=e,u.life=10+o.int(0,8),u.x=t.x,u.y=t.y,u.z=t.z,u.vx=s/l*a,u.vy=1+o.float()*3,u.vz=c/l*a,u.gravity=9,u.size=.05+o.float()*.04,this.#s(u)}}glint(e,t,n){let r=this.#e;this.#n.set(n);for(let n=0;n<9;n++){let n=this.#o();n.start=e,n.life=12+r.int(0,8),n.x=t.x+(r.float()-.5)*.4,n.y=t.y+(r.float()-.5)*.3,n.z=t.z+(r.float()-.5)*.4,n.vx=(r.float()-.5)*.8,n.vy=.6+r.float()*.8,n.vz=(r.float()-.5)*.8,n.gravity=-1,n.size=.035+r.float()*.03,this.#s(n)}}rise(e,t,n,r){this.#n.set(r);for(let r=0;r<n;r++){let n=r*Uu%1*Math.PI*2,i=Math.cos(n),a=Math.sin(n),o=r*Wu%1,s=this.#o();s.start=e+r%4*3,s.life=32+Math.round(o*20),s.x=t.x+i*.8,s.y=t.y,s.z=t.z+a*.8,s.vx=i*(.5+.9*o),s.vy=2.4+2.6*o,s.vz=a*(.5+.9*o),s.gravity=-3,s.size=.07+.06*o,this.#s(s)}}burst(e,t,n,r){let i=this.#e;this.#n.set(r);for(let r=0;r<n;r++){let n=i.float()*2-1,r=i.float()*2-1,a=1.5+i.float()*3,o=Math.hypot(n,r)||1,s=this.#o();s.start=e,s.life=22+i.int(0,14),s.x=t.x,s.y=t.y,s.z=t.z,s.vx=n/o*a,s.vy=2+i.float()*4,s.vz=r/o*a,s.gravity=8,s.size=.08+i.float()*.07,this.#s(s)}}ambient(e,t,n,r){let i=this.#e;this.#n.set(`#7fd3ff`);let a=Math.floor((e+1)*t/Hu)-Math.floor(e*t/Hu);for(let t=0;t<a;t++){let t=this.#o();t.start=e,t.life=Hu,t.x=i.float()*n,t.y=.1+i.float()*.4,t.z=i.float()*r,t.vx=(i.float()-.5)*.4,t.vy=.4+i.float()*.6,t.vz=(i.float()-.5)*.4,t.gravity=0,t.size=.04+i.float()*.03,this.#s(t)}}#o(){let e=this.#r[this.#i];return this.#i=(this.#i+1)%this.#r.length,e}#s(e){e.r=this.#n.r,e.g=this.#n.g,e.b=this.#n.b}update(e){let t=0;for(let n of this.#r){let r=e-n.start;if(r<0||r>n.life)continue;let i=r/60,a=n.size*(1-r/n.life);this.#t.makeScale(a,a,a).setPosition(n.x+n.vx*i,Math.max(.02,n.y+n.vy*i-.5*n.gravity*i*i),n.z+n.vz*i),this.mesh.setMatrixAt(t,this.#t),this.mesh.setColorAt(t,this.#n.setRGB(n.r,n.g,n.b)),t++}this.#a=t,this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}reset(e){this.#e=f(e),this.clear()}clear(){for(let e of this.#r)e.life=-1;this.#i=0,this.#a=0,this.mesh.count=0}};function Ku(){let e=document.createElement(`canvas`);e.width=64,e.height=64;let t=e.getContext(`2d`);if(t){let e=t.createImageData(64,64);for(let t=0;t<64;t++)for(let n=0;n<64;n++){let r=n/63*2-1,i=t/63*2-1,a=Math.sqrt(r*r+i*i),o=Math.max(0,1-a*2.2)**2,s=Math.max(Math.exp(-((r/.05)**2))*Math.max(0,1-Math.abs(i))**1.5,Math.exp(-((i/.05)**2))*Math.max(0,1-Math.abs(r))**1.5),c=(t*64+n)*4;e.data[c]=255,e.data[c+1]=255,e.data[c+2]=255,e.data[c+3]=Math.round(255*Math.min(1,o*.9+s))}t.putImageData(e,0,0)}return new Vi(e)}function qu(e,t){let n=Math.min(t,360)/2*(Math.PI/180),r=new na(Math.min(.35,e*.3),e,48,1,-Math.PI/2-n,n*2);return r.rotateX(-Math.PI/2),r}function Ju(){let e=new ta(1,1);return e.rotateX(-Math.PI/2),e.translate(0,0,.5),e}function Yu(){let e=document.createElement(`canvas`);e.width=32,e.height=128;let t=e.getContext(`2d`);if(t){let e=t.createImageData(32,128);for(let t=0;t<128;t++){let n=t/127,r=.25+.75*n*n;for(let n=0;n<32;n++){let i=Math.abs(n/31-.5)*2,a=(1-i*i)**2,o=(t*32+n)*4;e.data[o]=255,e.data[o+1]=255,e.data[o+2]=255,e.data[o+3]=Math.round(255*a*r)}}t.putImageData(e,0,0)}return new Vi(e)}var Xu=[`#1a2029`,`#27313f`,`#344156`,`#41516b`],Zu={stairs:`#2f3d2c`,bridge:`#4a3a28`,chasm:`#06080b`,wall:`#2c3646`,breakable:`#46382a`,cliff:`#c08a3a`,step:`#6f8f5e`},Qu=1.2;function $u(e){let t=new Ln,n=[],r=[],i=[];for(let t=0;t<e.height;t++)for(let a=0;a<e.width;a++){let o=t*e.width+a,s=m[e.kinds[o]??1];if(s===`chasm`)r.push([a,t]);else if(s===`wall`||s===`breakable`)ed(e,a,t)&&i.push([a,t,s===`wall`?Zu.wall:Zu.breakable]);else{let r=Math.max(0,e.levels[o]??0),i=s===`stairs`?Zu.stairs:e.bridges[o]?Zu.bridge:Xu[Math.min(r,Xu.length-1)]??Zu.wall;n.push([a,t,i])}}return t.add(td(n,.1,-.05)),t.add(td(r.map(([e,t])=>[e,t,Zu.chasm]),.1,-1.5)),t.add(td(i,Qu,Qu/2)),t.add(nd(rd(e),Zu.cliff)),t.add(nd(id(e),Zu.step)),t}function ed(e,t,n){for(let r=-1;r<=1;r++)for(let i=-1;i<=1;i++){let a=t+i,o=n+r;if(!(a<0||o<0||a>=e.width||o>=e.height)&&!b(e,a,o))return!0}return!1}function td(e,t,n){let r=new Si(new Gi(1,t,1),new ha({color:`#ffffff`,roughness:.9}),Math.max(1,e.length)),i=new B,a=new V;return e.forEach(([e,t,o],s)=>{r.setMatrixAt(s,i.makeTranslation(e+.5,n,t+.5)),r.setColorAt(s,a.set(o))}),r.count=e.length,r}function nd(e,t){let n=[];for(let t=0;t+3<e.length;t+=4)n.push(e[t]??0,.02,e[t+1]??0,e[t+2]??0,.02,e[t+3]??0);let r=new zr;return r.setAttribute(`position`,new H(n,3)),new zi(r,new Di({color:t}))}function rd(e){let t=[];for(let n=0;n<e.height;n++)for(let r=0;r<e.width;r++)b(e,r,n)||(r>0&&!b(e,r-1,n)&&p(e,r,n)&&t.push(r,n,r,n+1),n>0&&!b(e,r,n-1)&&l(e,r,n)&&t.push(r,n,r+1,n));return t}function id(e){let t=[];for(let n=0;n<e.height;n++)for(let r=0;r<e.width;r++){let i=e.rise[n*e.width+r]??0;if(i!==0)for(let e of[1/3,2/3])i===1||i===3?t.push(r,n+e,r+1,n+e):t.push(r+e,n,r+e,n+1)}return t}var ad=1.3;function od(e,t,n){return e<=0||t<=0?-1:Math.max(0,Math.min(1,(t-e-1+n)/t))}function sd(e,t,n){let r=od(e,t,n);return r<0?0:4*ad*r*(1-r)}var cd=[`fx.fireball`,`fx.ice`,`fx.blade`,`fx.bolt`,`fx.shard`];function ld(e,t){return new U({color:new V(e).multiplyScalar(t)})}function ud(e,t,n){return new U({color:new V(e).multiplyScalar(t),transparent:!0,opacity:n,blending:2,depthWrite:!1})}function dd(e,t,n=0){let r=new W(e,t);return r.renderOrder=n,r}function fd(e,t){return new ea(e,0).scale(1,.8,t/e/2)}function pd(e){let t=new Ln;switch(e){case`fx.fireball`:return t.add(dd(new Qi(.12,2),ld(`#fff1c4`,2.2))),t.add(dd(new Qi(.21,3),ud(`#ff9a3a`,1.3,.45),1)),t;case`fx.ice`:return t.add(dd(fd(.11,.62),ld(`#e8fbff`,1.6))),t.add(dd(fd(.18,.9),ud(`#7fd8ff`,1.4,.35),1)),t;case`fx.blade`:{let e=new ia(.34,.045,6,18,Math.PI).rotateX(Math.PI/2);t.add(dd(e,ld(`#fff6d0`,2.4)));let n=new ia(.34,.12,6,18,Math.PI).rotateX(Math.PI/2);return t.add(dd(n,ud(`#ffd86a`,1.3,.4),1)),t}case`fx.bolt`:{let e=new Ki(.075,.3,4,8).rotateX(Math.PI/2);t.add(dd(e,ld(`#ffe0f4`,2.2)));let n=new Ki(.18,.4,4,8).rotateX(Math.PI/2);return t.add(dd(n,ud(`#ff4fc8`,1.5,.45),1)),t}case`fx.shard`:return t.add(dd(fd(.14,.7),ld(`#f0dcff`,1.8))),t.add(dd(fd(.24,1),ud(`#a45cff`,1.5,.4),1)),t;default:return null}}function md(e,t){return{width:e,height:t,data:new Uint8Array(e*t*4)}}function hd(e){let t=Number.parseInt(e.replace(`#`,``),16);return[t>>16&255,t>>8&255,t&255]}function gd(e,t){let n=e=>Math.max(0,Math.min(255,Math.round(e*t)));return[n(e[0]),n(e[1]),n(e[2])]}function _d(e,t,n){let r=(e,t)=>Math.round(e+(t-e)*n);return[r(e[0],t[0]),r(e[1],t[1]),r(e[2],t[2])]}function vd(e,t,n){let r=Math.imul(e|0,374761393)^Math.imul(t|0,668265263)^Math.imul(n|0,1442695041);return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296}function yd(e,t,n,r,i=255){if(t<0||n<0||t>=e.width||n>=e.height)return;let a=(n*e.width+t)*4;e.data[a]=r[0],e.data[a+1]=r[1],e.data[a+2]=r[2],e.data[a+3]=i}function bd(e,t,n,r,i){return gd(e,1+(vd(t,n,r)*2-1)*i)}function xd(e,t,n,r,i,a){let{x:o,y:s,w:c,h:l}=n;for(let n=0;n<l;n++)for(let u=0;u<c;u++){let d=o+u,f=s+n;yd(e,d,f,Sd(r,i,u,n,c,l,a,e=>{t&&yd(t,d,f,e)}))}}function Sd(e,t,n,r,i,a,o,s){let c=vd(n,r,o);switch(e){case`skin`:return bd(t,n,r,o,.04);case`hair`:{let e=(n+Math.floor(vd(n,0,o)*3))%3==0?.82:1;return gd(bd(t,n,r>>1,o,.08),e)}case`cloth`:{let e=a>4&&r===a-1?.78:1,i=(n+r)%2==0?1.03:.98;return gd(bd(t,n,r,o,.06),e*i)}case`cloak`:{let e=n%3==0?.84:n%3==1?1.04:.96;return gd(bd(t,n,r,o,.05),e)}case`metal`:{let e=r===0||n===0?1.22:r===a-1||n===i-1?.72:1-.04*(n+r&1);return i>=6&&a>=6&&(n===1||n===i-2)&&(r===1||r===a-2)?gd(t,1.35):gd(bd(t,n,r,o,.03),e)}case`trim`:{let e=r===0||r===a-1?.8:(n+2*r)%5==0?1.15:1;return gd(bd(t,n,r,o,.07),e)}case`hide`:{let e=vd(n>>1,r>>1,o+7)>.78?.8:1;return gd(bd(t,n,r,o,.1),e)}case`horn`:{let e=r%3==0?.82:1;return gd(bd(t,n,r,o,.05),e)}case`crystal`:{let e=gd(t,(n+r)%4==0?1.35:(n-r+64)%4==0?.85:1);return s(gd(e,.85)),e}case`blade`:{let e=n===i-1||r===0?1.25:n===0?.86:1;return gd(bd(t,n,r,o,.02),e)}case`eye`:return s(t),t;case`flame`:{let e=_d(t,[255,245,200],r<a/2?.5*c:0);return s(e),e}case`stone`:{let e=vd(n,r>>1,o+3)>.93?.72:1;return gd(bd(t,n,r,o,.09),e)}case`deep`:return gd(bd(t,n,r,o,.12),.6);case`cobble`:{let e=(n+Math.floor(vd(0,r>>2,o)*3))%4,i=r%4,a=e===0||i===0?.66:1,s=.9+vd(n+1>>2,r>>2,o+1)*.25;return gd(bd(t,n,r,o,.06),a*s)}case`dirt`:{let e=c>.9?1.25:c<.08?.75:1;return gd(bd(t,n,r,o+1,.1),e)}case`ore`:{let e=Cd(n,r,i,a,o);if(e>0){let n=e===2?gd(t,1.4):t;return s(gd(n,.9)),n}return gd(bd([118,118,124],n,r,o,.09),1)}case`planks`:{let e=r%4==3?.68:1,i=(n+Math.floor(r/4)*5)%8==0&&r%4!=3?.78:1,a=vd(n>>2,r,o)>.7?.92:1;return gd(bd(t,n,r,o,.05),e*i*a)}}}function Cd(e,t,n,r,i){let a=2+Math.floor(vd(1,1,i)*3);for(let o=0;o<a;o++){let a=Math.floor(vd(o,11,i)*n),s=Math.floor(vd(o,13,i)*r),c=Math.max(1,Math.round((n+r)/16)),l=e-a,u=t-s;if(l===0&&u===0)return 2;if(l*l+u*u<=c*c)return 1}return 0}function wd(e,t,n,r,i){let{x:a,y:o,w:s,h:c}=n,l=Math.max(1,Math.round(c*.3)),u=+(s>=6),d=Math.min(c-1,l+Math.max(0,Math.round(c*.12))),f=s>=10?2:1,p=Math.max(u,Math.round(s*.25)-(f>>1)),m=Math.min(s-1-u-(f-1),s-1-p-(f-1));for(let n=0;n<c;n++)for(let h=0;h<s;h++){let g=n<l||h<u||h>=s-u?gd(bd(r.hood,h,n,i,.05),n===l-1?.8:1):bd(r.skin,h,n,i,.04);n===d&&(h>=p&&h<p+f||h>=m&&h<m+f)&&(g=r.eye,t&&yd(t,a+h,o+n,r.eye)),c>=8&&n===d+Math.max(2,Math.round(c*.25))&&h>s*.35&&h<s*.65&&(g=gd(r.skin,.7)),yd(e,a+h,o+n,g)}}function Td(e,t,n,r,i){xd(e,null,n,`hide`,r.hide,i);let{x:a,y:o,w:s,h:c}=n,l=Math.max(0,Math.round(c*.3));for(let n of[Math.round(s*.2),s-1-Math.round(s*.2)])yd(e,a+n,o+l,r.eye),t&&yd(t,a+n,o+l,r.eye);for(let t=Math.round(c*.6);t<c;t++)for(let n=Math.round(s*.3);n<s-Math.round(s*.3);n++)yd(e,a+n,o+t,gd(r.hide,.7))}function Ed(e,t){let n={},r=[];return t.forEach(([t,i,a],o)=>{if(t in n)throw Error(`rig ${e}: joint ${t} twice`);let s=-1;if(i!==null){let r=n[i];if(r===void 0)throw Error(`rig ${e}: ${t}'s parent ${i} not before it`);s=r}else if(o>0)throw Error(`rig ${e}: only the first joint can be the root`);n[t]=o,r.push({name:t,parent:s,at:a})}),{id:e,joints:r,bone:n,subtree:r.map((e,t)=>{let n=new Set([t]),i=[t];for(let e=t+1;e<r.length;e++){let t=r[e]?.parent??-1;n.has(t)&&(n.add(e),i.push(e))}return i})}}function K(e,t){let n=e.bone[t];if(n===void 0)throw Error(`rig ${e.id} has no joint ${t}`);return n}var Dd=Ed(`hunter`,[[`root`,null,[0,0,0]],[`hips`,`root`,[0,.8,0]],[`spine`,`hips`,[0,.1,0]],[`chest`,`spine`,[0,.2,0]],[`neck`,`chest`,[0,.17,0]],[`head`,`neck`,[0,.07,0]],[`cape`,`chest`,[0,.14,-.15]],[`cape.low`,`cape`,[0,-.36,0]],[`shoulder.l`,`chest`,[.24,.12,0]],[`elbow.l`,`shoulder.l`,[0,-.26,0]],[`hand.l`,`elbow.l`,[0,-.24,0]],[`shoulder.r`,`chest`,[-.24,.12,0]],[`elbow.r`,`shoulder.r`,[0,-.26,0]],[`hand.r`,`elbow.r`,[0,-.24,0]],[`sword`,`hand.r`,[0,-.05,0]],[`hip.l`,`hips`,[.11,-.04,0]],[`knee.l`,`hip.l`,[0,-.38,0]],[`ankle.l`,`knee.l`,[0,-.36,0]],[`hip.r`,`hips`,[-.11,-.04,0]],[`knee.r`,`hip.r`,[0,-.38,0]],[`ankle.r`,`knee.r`,[0,-.36,0]]]);function Od(e){let t=e===1?`l`:`r`;return[{joint:`shoulder.${t}`,shape:`capsule`,size:[.14,.28,.14],at:[0,-.13,0],role:`cloth`},{joint:`shoulder.${t}`,shape:`gem`,size:[.24,.16,.24],at:[.03*e,.03,0],role:`armor`},{joint:`elbow.${t}`,shape:`capsule`,size:[.12,.25,.12],at:[0,-.12,0],role:`cloth`},{joint:`elbow.${t}`,shape:`box`,size:[.15,.14,.15],at:[0,-.13,0],role:`armor`},{joint:`hand.${t}`,shape:`box`,size:[.1,.11,.1],at:[0,-.04,0],role:`trim`}]}function kd(e){let t=e===1?`l`:`r`;return[{joint:`hip.${t}`,shape:`capsule`,size:[.18,.4,.18],at:[0,-.19,0],role:`cloth`},{joint:`knee.${t}`,shape:`capsule`,size:[.15,.36,.15],at:[0,-.18,0],role:`trim`},{joint:`knee.${t}`,shape:`gem`,size:[.14,.13,.12],at:[0,0,.05],role:`armor`},{joint:`ankle.${t}`,shape:`box`,size:[.15,.11,.27],at:[0,-.03,.05],role:`trim`}]}var Ad={rig:Dd,parts:[{joint:`hips`,shape:`box`,size:[.36,.2,.24],role:`cloth`},{joint:`hips`,shape:`slab`,size:[.4,.07,.28],at:[0,.08,0],role:`trim`},{joint:`spine`,shape:`capsule`,size:[.36,.26,.25],at:[0,.09,0],role:`cloth`},{joint:`chest`,shape:`box`,size:[.46,.32,.3],at:[0,.04,.01],role:`armor`},{joint:`chest`,shape:`gem`,size:[.13,.16,.07],at:[0,.05,.16],role:`crystal`},{joint:`neck`,shape:`capsule`,size:[.12,.12,.12],at:[0,.03,0],role:`cloth`},{joint:`head`,shape:`orb`,size:[.22,.24,.2],at:[0,.12,.05],role:`skin`},{joint:`head`,shape:`orb`,size:[.34,.36,.34],at:[0,.15,-.03],role:`cloak`},{joint:`head`,shape:`cone`,size:[.17,.22,.17],at:[0,.31,-.11],turn:[-.65,0,0],role:`cloak`},{joint:`head`,shape:`slab`,size:[.18,.035,.03],at:[0,.14,.15],role:`eye`},{joint:`cape`,shape:`shell`,size:[.5,.4,.14],at:[0,-.18,0],role:`cloak`},{joint:`cape.low`,shape:`shell`,size:[.54,.44,.14],at:[0,-.2,0],role:`cloak`},...Od(1),...Od(-1),...kd(1),...kd(-1),{joint:`sword`,shape:`box`,size:[.05,.05,.18],at:[0,0,-.03],role:`trim`},{joint:`sword`,shape:`slab`,size:[.28,.05,.06],at:[0,0,.08],role:`armor`},{joint:`sword`,shape:`slab`,size:[.09,.026,1.05],at:[0,0,.64],role:`blade`}]},jd=Ed(`charger`,[[`root`,null,[0,0,0]],[`body`,`root`,[0,.52,0]],[`chest`,`body`,[0,.04,.24]],[`neck`,`chest`,[0,.06,.2]],[`head`,`neck`,[0,-.03,.12]],[`tail`,`body`,[0,.1,-.34]],[`leg.fl`,`chest`,[.19,-.1,.04]],[`leg.fr`,`chest`,[-.19,-.1,.04]],[`leg.bl`,`body`,[.19,-.08,-.24]],[`leg.br`,`body`,[-.19,-.08,-.24]]]);function Md(e){return[{joint:e,shape:`capsule`,size:[.14,.44,.14],at:[0,-.2,0],role:`hide`},{joint:e,shape:`box`,size:[.13,.08,.15],at:[0,-.4,.02],role:`horn`}]}var Nd={rig:jd,parts:[{joint:`body`,shape:`box`,size:[.5,.42,.62],at:[0,0,-.06],role:`hide`},{joint:`chest`,shape:`box`,size:[.52,.46,.34],at:[0,.02,0],role:`hide`},{joint:`body`,shape:`gem`,size:[.13,.32,.13],at:[0,.3,.12],turn:[0,0,.15],role:`crystal`},{joint:`body`,shape:`gem`,size:[.11,.26,.11],at:[.08,.27,-.1],turn:[0,0,-.35],role:`crystal`},{joint:`body`,shape:`gem`,size:[.1,.22,.1],at:[-.09,.25,-.26],turn:[0,0,.4],role:`crystal`},{joint:`head`,shape:`box`,size:[.32,.28,.32],at:[0,0,.12],role:`hide`},{joint:`head`,shape:`cone`,size:[.06,.2,.06],at:[.12,-.06,.28],turn:[-1.3,0,-.3],role:`horn`},{joint:`head`,shape:`cone`,size:[.06,.2,.06],at:[-.12,-.06,.28],turn:[-1.3,0,.3],role:`horn`},{joint:`head`,shape:`box`,size:[.06,.04,.03],at:[.09,.06,.28],role:`eye`},{joint:`head`,shape:`box`,size:[.06,.04,.03],at:[-.09,.06,.28],role:`eye`},{joint:`tail`,shape:`cone`,size:[.08,.24,.08],at:[0,0,-.1],turn:[-1.9,0,0],role:`hide`},...Md(`leg.fl`),...Md(`leg.fr`),...Md(`leg.bl`),...Md(`leg.br`)]},Pd=Ed(`dummy`,[[`root`,null,[0,0,0]],[`post`,`root`,[0,.05,0]],[`body`,`post`,[0,.55,0]],[`head`,`body`,[0,.46,0]]]),Fd={rig:Pd,parts:[{joint:`root`,shape:`box`,size:[.5,.1,.5],at:[0,.05,0],role:`horn`},{joint:`post`,shape:`capsule`,size:[.13,.62,.13],at:[0,.3,0],role:`horn`},{joint:`body`,shape:`box`,size:[.44,.52,.32],at:[0,.2,0],role:`hide`},{joint:`body`,shape:`slab`,size:[.86,.07,.08],at:[0,.34,0],role:`horn`},{joint:`body`,shape:`gem`,size:[.17,.17,.05],at:[0,.2,.17],role:`crystal`},{joint:`head`,shape:`orb`,size:[.28,.28,.26],at:[0,.1,0],role:`hide`},{joint:`head`,shape:`slab`,size:[.14,.03,.03],at:[0,.12,.13],role:`eye`}]},Id=Ed(`shooter`,[[`root`,null,[0,0,0]],[`hover`,`root`,[0,.66,0]],[`ring`,`hover`,[0,0,0]],[`barrel`,`hover`,[0,.02,.2]]]);function Ld(e){let t=Math.sin(e)*.27,n=Math.cos(e)*.27;return[{joint:`ring`,shape:`box`,size:[.14,.38,.06],at:[t,0,n],turn:[e,0,0],role:`hide`},{joint:`ring`,shape:`cone`,size:[.06,.16,.06],at:[t*1.35,.2,n*1.35],turn:[e,.5,0],role:`horn`}]}var Rd={rig:Id,parts:[{joint:`hover`,shape:`gem`,size:[.3,.44,.3],role:`crystal`},{joint:`hover`,shape:`cone`,size:[.1,.26,.1],at:[0,-.32,0],turn:[0,Math.PI,0],role:`horn`},...Ld(Math.PI/3),...Ld(Math.PI),...Ld(-Math.PI/3),{joint:`barrel`,shape:`capsule`,size:[.14,.32,.14],at:[0,0,.14],turn:[0,Math.PI/2,0],role:`hide`},{joint:`barrel`,shape:`orb`,size:[.11,.11,.11],at:[0,0,.32],role:`eye`}]},zd=Ed(`guardian`,[[`root`,null,[0,0,0]],[`hips`,`root`,[0,1,0]],[`spine`,`hips`,[0,.22,0]],[`chest`,`spine`,[0,.38,0]],[`head`,`chest`,[0,.52,.12]],[`core`,`chest`,[0,.08,.38]],[`spikes`,`chest`,[0,.34,-.3]],[`shoulder.l`,`chest`,[.66,.26,0]],[`elbow.l`,`shoulder.l`,[.04,-.5,0]],[`fist.l`,`elbow.l`,[0,-.46,.04]],[`shoulder.r`,`chest`,[-.66,.26,0]],[`elbow.r`,`shoulder.r`,[-.04,-.5,0]],[`fist.r`,`elbow.r`,[0,-.46,.04]],[`hip.l`,`hips`,[.3,-.08,0]],[`knee.l`,`hip.l`,[0,-.46,.02]],[`foot.l`,`knee.l`,[0,-.42,-.02]],[`hip.r`,`hips`,[-.3,-.08,0]],[`knee.r`,`hip.r`,[0,-.46,.02]],[`foot.r`,`knee.r`,[0,-.42,-.02]]]);function Bd(e){let t=e===1?`l`:`r`;return[{joint:`shoulder.${t}`,shape:`gem`,size:[.52,.38,.52],at:[.06*e,.08,0],role:`horn`},{joint:`shoulder.${t}`,shape:`capsule`,size:[.3,.52,.3],at:[.02*e,-.24,0],role:`hide`},{joint:`elbow.${t}`,shape:`capsule`,size:[.36,.5,.36],at:[0,-.22,0],role:`hide`},{joint:`fist.${t}`,shape:`box`,size:[.48,.42,.48],at:[0,-.12,0],role:`horn`},{joint:`fist.${t}`,shape:`gem`,size:[.16,.2,.16],at:[0,-.06,.25],role:`crystal`}]}function Vd(e){let t=e===1?`l`:`r`;return[{joint:`hip.${t}`,shape:`capsule`,size:[.36,.5,.36],at:[0,-.22,0],role:`hide`},{joint:`knee.${t}`,shape:`capsule`,size:[.32,.46,.32],at:[0,-.2,0],role:`hide`},{joint:`knee.${t}`,shape:`gem`,size:[.22,.2,.16],at:[0,0,.14],role:`horn`},{joint:`foot.${t}`,shape:`box`,size:[.44,.18,.58],at:[0,-.02,.08],role:`horn`}]}var Hd={"rig.hunter":Ad,"rig.charger":Nd,"rig.dummy":Fd,"rig.shooter":Rd,"rig.guardian":{rig:zd,parts:[{joint:`hips`,shape:`box`,size:[.84,.42,.56],role:`hide`},{joint:`spine`,shape:`box`,size:[.78,.4,.54],at:[0,.16,0],role:`hide`},{joint:`chest`,shape:`box`,size:[1.3,.74,.8],at:[0,.14,0],role:`hide`},{joint:`chest`,shape:`slab`,size:[1.4,.12,.86],at:[0,.5,0],role:`horn`},{joint:`core`,shape:`gem`,size:[.34,.44,.16],role:`crystal`},{joint:`chest`,shape:`gem`,size:[.16,.42,.16],at:[.28,.48,-.32],turn:[0,-.4,.3],role:`crystal`},{joint:`chest`,shape:`gem`,size:[.14,.34,.14],at:[-.3,.44,-.3],turn:[0,-.3,-.35],role:`crystal`},{joint:`spikes`,shape:`gem`,size:[.26,.86,.26],at:[0,.36,0],turn:[0,-.25,0],role:`crystal`},{joint:`spikes`,shape:`gem`,size:[.22,.7,.22],at:[.5,.22,.05],turn:[0,-.2,-.55],role:`crystal`},{joint:`spikes`,shape:`gem`,size:[.22,.7,.22],at:[-.5,.22,.05],turn:[0,-.2,.55],role:`crystal`},{joint:`head`,shape:`box`,size:[.46,.42,.46],at:[0,.14,0],role:`hide`},{joint:`head`,shape:`slab`,size:[.32,.05,.04],at:[0,.18,.24],role:`eye`},{joint:`head`,shape:`cone`,size:[.12,.34,.12],at:[.17,.4,-.04],turn:[0,-.2,-.3],role:`horn`},{joint:`head`,shape:`cone`,size:[.12,.34,.12],at:[-.17,.4,-.04],turn:[0,-.2,.3],role:`horn`},...Bd(1),...Bd(-1),...Vd(1),...Vd(-1)]}},Ud={skin:`skin`,cloth:`cloth`,cloak:`cloak`,armor:`metal`,trim:`trim`,crystal:`crystal`,eye:`eye`,blade:`blade`,hide:`hide`,horn:`horn`};function Wd(e){let t=e===`dungeon`,n=e===`classic`?.44:t?.48:.4,r=t?.19:.16,i=t?.21:.18,a=t?[.5,.44,.3]:[.44,.42,.24],o=[{joint:`hips`,size:[a[0]-.02,.2,a[2]],at:[0,.02,0],role:`cloth`},{joint:`chest`,size:a,at:[0,-.02,0],role:`armor`},{joint:`chest`,size:[.1,.1,.06],at:[0,.02,a[2]/2+.02],role:`crystal`},{joint:`head`,size:[n,n,n],at:[0,n/2-.02,.01],role:`cloak`,face:`hood`},{joint:`cape`,size:[a[0],.42,.04],at:[0,-.2,-.02],role:`cloak`},{joint:`cape.low`,size:[a[0]+.02,.4,.04],at:[0,-.2,0],role:`cloak`},{joint:`sword`,size:[.05,.05,.18],at:[0,0,-.03],role:`trim`},{joint:`sword`,size:[.26,.05,.06],at:[0,0,.08],role:`armor`},{joint:`sword`,size:[.08,.03,1],at:[0,0,.62],role:`blade`}];for(let t of[`l`,`r`])e===`jointed`?o.push({joint:`shoulder.${t}`,size:[r,.27,r],at:[0,-.12,0],role:`cloth`},{joint:`elbow.${t}`,size:[r-.01,.27,r-.01],at:[0,-.12,0],role:`armor`,foot:{height:.08,role:`trim`}},{joint:`hip.${t}`,size:[i,.4,i+.02],at:[0,-.19,0],role:`cloth`},{joint:`knee.${t}`,size:[i-.01,.38,i+.01],at:[0,-.18,0],role:`cloth`,foot:{height:.13,role:`trim`}}):o.push({joint:`shoulder.${t}`,size:[r,.52,r],at:[0,-.23,0],role:`cloth`,foot:{height:.1,role:`trim`}},{joint:`hip.${t}`,size:[i,.78,i+.02],at:[0,-.38,0],role:`cloth`,foot:{height:.16,role:`trim`}});return o}function Gd(e){let t=e===`dungeon`?1.08:1,n=[{joint:`body`,size:[.52*t,.44,.62],at:[0,0,-.06],role:`hide`},{joint:`chest`,size:[.56*t,.5,.34],at:[0,.02,0],role:`hide`},{joint:`body`,size:[.12,.26,.12],at:[0,.32,.12],role:`crystal`},{joint:`body`,size:[.1,.2,.1],at:[.1,.28,-.1],role:`crystal`},{joint:`body`,size:[.1,.18,.1],at:[-.1,.27,-.26],role:`crystal`},{joint:`head`,size:[.34,.3,.34],at:[0,0,.12],role:`hide`,face:`muzzle`},{joint:`head`,size:[.06,.06,.2],at:[.13,-.05,.32],role:`horn`},{joint:`head`,size:[.06,.06,.2],at:[-.13,-.05,.32],role:`horn`},{joint:`tail`,size:[.08,.08,.26],at:[0,0,-.12],role:`hide`}];for(let e of[`leg.fl`,`leg.fr`,`leg.bl`,`leg.br`])n.push({joint:e,size:[.15,.46,.15],at:[0,-.21,0],role:`hide`,foot:{height:.08,role:`horn`}});return n}var Kd={"rig.hunter":{rig:Dd,parts:Wd},"rig.charger":{rig:jd,parts:Gd}},qd=[{side:`front`,normal:[0,0,1],right:[1,0,0],up:[0,1,0]},{side:`back`,normal:[0,0,-1],right:[-1,0,0],up:[0,1,0]},{side:`right`,normal:[1,0,0],right:[0,0,-1],up:[0,1,0]},{side:`left`,normal:[-1,0,0],right:[0,0,1],up:[0,1,0]},{side:`top`,normal:[0,1,0],right:[1,0,0],up:[0,0,-1]},{side:`bottom`,normal:[0,-1,0],right:[1,0,0],up:[0,0,1]}];function Jd(e,t){let n=e=>Math.abs(e[0])*t[0]+Math.abs(e[1])*t[1]+Math.abs(e[2])*t[2];return[n(e.right),n(e.up)]}function Yd(e,t){let n=e.map((e,t)=>t).sort((t,n)=>(e[n]?.h??0)-(e[t]?.h??0)),r=Array(e.length),i=0,a=0,o=0;for(let s of n){let{w:n,h:c}=e[s];i+n>t&&(i=0,a+=o,o=0),r[s]={x:i,y:a,w:n,h:c},i+=n,o=Math.max(o,c)}return{at:r,height:a+o}}function Xd(e){let t=new pi(e.data,e.width,e.height,_e);return t.magFilter=O,t.minFilter=O,t.generateMipmaps=!1,t.colorSpace=ft,t.needsUpdate=!0,t}function Zd(e,t,n,r,i,a){let{part:o,face:s,area:c}=n,l=e=>hd(r[e]??`#ff00ff`);if(s.side===`front`&&o.face===`hood`){wd(e,t,c,{skin:l(`skin`),hood:l(o.role),eye:l(`eye`)},a);return}if(s.side===`front`&&o.face===`muzzle`){Td(e,t,c,{hide:l(o.role),eye:l(`eye`)},a);return}let u=o.foot;if(u&&s.side===`bottom`)xd(e,t,c,Ud[u.role],l(u.role),a+5);else if(xd(e,t,c,Ud[o.role],l(o.role),a),u&&s.side!==`top`){let n=Math.min(c.h,Math.max(1,Math.round(u.height*i)));xd(e,t,{x:c.x,y:c.y+c.h-n,w:c.w,h:n},Ud[u.role],l(u.role),a+5)}}function Qd(e,t,n){for(let{part:r,face:i,area:a}of e){let[e,o]=Jd(i,r.size),s=Math.abs(i.normal[0])*r.size[0]+Math.abs(i.normal[1])*r.size[1]+Math.abs(i.normal[2])*r.size[2],c=(t,n)=>{let a=a=>r.at[a]+i.normal[a]*(s/2)+i.right[a]*(t-.5)*e+i.up[a]*(n-.5)*o;return[a(0),a(1),a(2)]},l=a.x/t.w,u=(a.x+a.w)/t.w,d=a.y/t.h,f=(a.y+a.h)/t.h,p=[[0,0,l,f],[1,0,u,f],[1,1,u,d],[0,0,l,f],[1,1,u,d],[0,1,l,d]];for(let[e,t,r,a]of p)n.position.push(...c(e,t)),n.normal.push(...i.normal),n.uv.push(r,a)}}function $d(e,t,n,r,i){let a=Kd[e];if(!a)return null;let o=a.parts(n.kind),s=n.texels/n.block,c=[];for(let e of o)for(let t of qd)c.push({part:e,face:t});let l=c.map(({part:e,face:t})=>{let[n,r]=Jd(t,e.size);return{w:Math.max(1,Math.round(n*s)),h:Math.max(1,Math.round(r*s))}}),u=Math.max(32,Math.ceil(Math.sqrt(l.reduce((e,t)=>e+t.w*t.h,0))*1.4)),{at:d,height:f}=Yd(l,u),p=md(u,Math.max(1,f)),m=md(u,Math.max(1,f)),h=c.map((e,t)=>({...e,area:d[t]}));h.forEach((e,n)=>{Zd(p,m,e,t,s,i*131+o.indexOf(e.part)*17+n%6)});let g=r.body(Xd(p),Xd(m)),_=new Map;for(let e of h){let t=K(a.rig,e.part.joint),n=_.get(t)??[];n.push(e),_.set(t,n)}let v=[];for(let[e,t]of _){let n={position:[],normal:[],uv:[]};Qd(t,{w:p.width,h:p.height},n);let r=new zr;r.setAttribute(`position`,new H(n.position,3)),r.setAttribute(`normal`,new H(n.normal,3)),r.setAttribute(`uv`,new H(n.uv,2)),v.push({joint:e,geometry:r,material:g})}return{rig:a.rig,parts:v}}var ef=[`stone`,`slate`,`cobble`,`ore`,`deep`,`dirt`,`planks`,`stick`,`flame`];function tf(e,t,n,r,i,a){let o=r.block,s=Math.max(4,r.texels),c=md(s*ef.length,s),l=md(s*ef.length,s),u={stone:[`stone`,i.stone],slate:[`stone`,i.slate],cobble:[`cobble`,i.cobble],ore:[`ore`,i.ore],deep:[`deep`,i.deep],dirt:[`dirt`,i.dirt],planks:[`planks`,i.planks],stick:[`planks`,i.planks],flame:[`flame`,i.flame]};ef.forEach((e,t)=>{let[r,i]=u[e];xd(c,l,{x:t*s,y:0,w:s,h:s},r,hd(i),n*7+t)});let d=a.blocks(Xd(c),Xd(l)),f={stone:[],slate:[],cobble:[],ore:[],deep:[],dirt:[],planks:[],stick:[],flame:[]},p=[],m=Math.ceil(e/o),h=Math.ceil(t/o),g=Math.ceil(6/o),_=(e,t,n)=>[(e+.5)*o,(n-.5)*o,(t+.5)*o],v=Math.ceil(1/o),y=-v-1,b=y-Math.ceil(3/o)+1,x=Math.floor(h/2);for(let e=-g;e<m+g;e++)for(let t=-g;t<h+g;t++){let r=vd(e,t,n),i=e>=0&&e<m&&t>=0&&t<h;if(e>=b&&e<=y&&t>=1&&t<h-1){t===x&&f.planks.push([(e+.5)*o,-.25*o,(t+.5)*o]);for(let n=-4;n<=-1;n++)(e===b||e===y)&&f.deep.push(_(e,t,n));f[vd(e,t,n+13)>.85?`ore`:`deep`].push(_(e,t,-4));continue}let a=vd(Math.floor(e/4),Math.floor(t/4),n+21)>.55;if(f[i?a?`slate`:`stone`:r>.8?`dirt`:r>.65?`cobble`:a?`slate`:`stone`].push(_(e,t,0)),t<-v&&t>=-g){let r=Math.ceil(3/o)+ +(vd(e,99,n)>.6);for(let i=1;i<=r;i++)f[vd(e,i*31+t,n)>.86?`ore`:`cobble`].push(_(e,t,i))}e>=m+v+1&&t>=1&&f[vd(e,t,n+5)>.9?`ore`:`stone`].push(_(e,t,1)),e===m+v&&t>=1&&t%3!=0&&f.planks.push([(e+.5)*o,.25*o,(t+.5)*o]),t>=h+v+1&&vd(e,t,n+9)>.9&&f.stone.push(_(e,t,1))}for(let e=1;e<m;e+=Math.max(3,Math.round(5/o))){let t=[(e+.5)*o,1.6,-v*o+.08];f.stick.push([t[0],t[1]-.25,t[2]]),f.flame.push([t[0],t[1],t[2]]),p.push([t[0],t[1]+.2,t[2]+.6])}let S=new Ln,C=new B,w={stone:[o,o,o],slate:[o,o,o],cobble:[o,o,o],ore:[o,o,o],deep:[o,o,o],dirt:[o,o,o],planks:[o,o/2,o],stick:[.08,.5,.08],flame:[.16,.16,.16]};ef.forEach((e,t)=>{let n=f[e];if(n.length===0)return;let[r,i,a]=w[e],o=new Gi(r,i,a),s=o.getAttribute(`uv`);for(let e=0;e<s.count;e++)s.setXY(e,(t+s.getX(e))/ef.length,1-s.getY(e));let c=new Si(o,d,n.length);n.forEach((e,t)=>{c.setMatrixAt(t,C.makeTranslation(e[0],e[1],e[2]))}),c.instanceMatrix.needsUpdate=!0,S.add(c)});let T=i.torch;if(T)for(let[e,t,n]of p){let r=new eo(new V(T.color),T.intensity,T.distance,1.6);r.position.set(e,t,n),S.add(r)}return S}var nf=`instanceGlow`;function rf(e){e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\nattribute vec3 ${nf};\nvarying vec3 vLookGlow;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>\nvLookGlow = ${nf};`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vLookGlow;`).replace(`#include <opaque_fragment>`,`outgoingLight += vLookGlow;
#include <opaque_fragment>`)}var af={key:`glow`,apply:rf};function of(e,t,n,r){let i=new V(e).multiplyScalar(t);return{key:`rim${r?`s`:``}`,apply(e){e.uniforms.lookRim={value:i},e.uniforms.lookRimPower={value:n};let t=r?`step(0.62, 1.0 - max(dot(normal, normalize(vViewPosition)), 0.0))`:`pow(1.0 - max(dot(normal, normalize(vViewPosition)), 0.0), lookRimPower)`;e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform vec3 lookRim;
uniform float lookRimPower;`).replace(`#include <opaque_fragment>`,`outgoingLight += lookRim * ${t};\n#include <opaque_fragment>`)}}}function sf(e){return{key:`hull${e.toFixed(4)}`,apply(t){t.vertexShader=t.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>\ntransformed += normalize(normal) * ${e.toFixed(4)};`)}}}var cf=new WeakMap;function lf(e,t){cf.set(e,t),e.onBeforeCompile=e=>{for(let n of t)n.apply(e)};let n=`look:${t.map(e=>e.key).join(`+`)}`;return e.customProgramCacheKey=()=>n,e}function uf(e){let t=cf.get(e)??[];return lf(e.clone(),[...t,af])}function df(e,t){return lf(new U({color:e,side:1}),[sf(t)])}var ff=class{#e;#t;#n;#r=0;constructor(e,t,n=32){this.#e=e,this.#n=n,this.#t=t.parts.map(e=>{let t=uf(e.material),n=this.#i(e.geometry.clone(),t,e.renderOrder??0);return{mesh:n,glow:this.#a(n),joint:e.joint}})}#i(e,t,n){let r=new Si(e,t,this.#n);return r.instanceMatrix.setUsage(vt),r.frustumCulled=!1,r.renderOrder=n,r.count=0,this.#e.add(r),r}#a(e){let t=new mi(new Float32Array(this.#n*3),3);return t.setUsage(vt),e.geometry.setAttribute(nf,t),t}#o(){this.#n*=2;for(let e of this.#t){let t=e.mesh,n=e.glow;e.mesh=this.#i(t.geometry,t.material,t.renderOrder),e.mesh.instanceMatrix.array.set(t.instanceMatrix.array),e.glow=this.#a(e.mesh),e.glow.array.set(n.array),this.#e.remove(t),t.dispose()}}get count(){return this.#r}get meshes(){return this.#t.map(e=>e.mesh)}begin(){this.#r=0}add(e,t){this.#r===this.#n&&this.#o();let n=this.#r++;for(let r of this.#t)r.mesh.instanceMatrix.array.set(e.subarray(r.joint*16,r.joint*16+16),n*16),r.glow.setXYZ(n,t?.r??0,t?.g??0,t?.b??0)}addPieces(e,t){this.#r===this.#n&&this.#o();let n=this.#r++;this.#t.forEach((r,i)=>{r.mesh.instanceMatrix.array.set(e.subarray(i*16,i*16+16),n*16),r.glow.setXYZ(n,t?.r??0,t?.g??0,t?.b??0)})}end(){for(let e of this.#t)e.mesh.count=this.#r,e.mesh.instanceMatrix.needsUpdate=!0,e.glow.needsUpdate=!0}dispose(){for(let e of this.#t)this.#e.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.dispose()}},pf=new B,mf=new B,hf=new B,gf=new yn(0,0,0,`YXZ`),_f=new Bt,vf=new R,yf=new R;function bf(e,t,n,r){return e.joints.forEach((e,i)=>{let a=i*3;vf.set(e.at[0]+(t.shift[a]??0),e.at[1]+(t.shift[a+1]??0),e.at[2]+(t.shift[a+2]??0)),gf.set(t.euler[a]??0,t.euler[a+1]??0,t.euler[a+2]??0,`YXZ`),_f.setFromEuler(gf);let o=t.scale[i]??1;yf.set(o,o,o),pf.compose(vf,_f,yf),e.parent<0?hf.multiplyMatrices(n,pf):hf.multiplyMatrices(mf.fromArray(r,e.parent*16),pf),hf.toArray(r,i*16)}),r}function xf(e,t,n){let r=t*16;return n.set(e[r+12]??0,e[r+13]??0,e[r+14]??0)}var Sf=.5,Cf=.35,wf=class{#e=new Map;step(e,t,n,r,i){let a=this.#e.get(e);if(!a){let r={x:t,y:n,frame:i,gait:{distance:0,previous:0,speed:0,dirX:0,dirY:1}};return this.#e.set(e,r),r}if(i<=a.frame)return a;let o=i-a.frame,s=t-a.x,c=n-a.y,l=Math.sqrt(s*s+c*c),u=a.gait;return u.previous=u.distance,r&&l<=Sf*o?(u.distance+=l,u.speed+=(l/o*60-u.speed)*Cf,l>1e-6&&(u.dirX=s/l,u.dirY=c/l)):u.speed-=u.speed*Cf,a.x=t,a.y=n,a.frame=i,a}get(e){return this.#e.get(e)}sweep(e){for(let[t,n]of this.#e)n.frame<e&&this.#e.delete(t)}clear(){this.#e.clear()}};function Tf(e,t){return e.previous+(e.distance-e.previous)*t}var Ef=class{count;euler;shift;scale;constructor(e){this.count=e,this.euler=new Float64Array(e*3),this.shift=new Float64Array(e*3),this.scale=new Float64Array(e).fill(1)}clear(){this.euler.fill(0),this.shift.fill(0),this.scale.fill(1)}turn(e,t,n,r){let i=e*3;this.euler[i]=(this.euler[i]??0)+t,this.euler[i+1]=(this.euler[i+1]??0)+n,this.euler[i+2]=(this.euler[i+2]??0)+r}move(e,t,n,r){let i=e*3;this.shift[i]=(this.shift[i]??0)+t,this.shift[i+1]=(this.shift[i+1]??0)+n,this.shift[i+2]=(this.shift[i+2]??0)+r}grow(e,t){this.scale[e]=(this.scale[e]??1)*t}blend(e,t,n){let r=n??Array.from({length:this.count},(e,t)=>t);for(let n of r){for(let r=n*3;r<n*3+3;r++){let n=this.euler[r]??0,i=this.shift[r]??0;this.euler[r]=n+((e.euler[r]??0)-n)*t,this.shift[r]=i+((e.shift[r]??0)-i)*t}let r=this.scale[n]??1;this.scale[n]=r+((e.scale[n]??1)-r)*t}}},Df=(e,t,n)=>e<t?t:e>n?n:e,Of=(e,t,n)=>e+(t-e)*n,kf=e=>{let t=Df(e,0,1);return t*t*(3-2*t)},Af=(e,t,n)=>kf((n-e)/(t-e)),jf=Math.PI/180;function Mf(e){let t=e%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<=-Math.PI&&(t+=Math.PI*2),t}var Nf=e=>e-Math.floor(e),Pf=new R(0,1,0),Ff=new R,If=new R,Lf=new Bt,Rf=new B;function zf(e,t,n){Rf.fromArray(e,t*16),Rf.decompose(Ff,Lf,If),Lf.setFromAxisAngle(Pf,n),Rf.compose(Ff,Lf,If),Rf.toArray(e,t*16)}function Bf(e,t,n,r){Rf.compose(n,r,If.set(1,1,1)),Rf.toArray(e,t*16)}var Vf=jd,Hf={body:K(Vf,`body`),chest:K(Vf,`chest`),neck:K(Vf,`neck`),head:K(Vf,`head`),tail:K(Vf,`tail`),fl:K(Vf,`leg.fl`),fr:K(Vf,`leg.fr`),bl:K(Vf,`leg.bl`),br:K(Vf,`leg.br`)},Uf=1.15,Wf=1.5,Gf=new B,Kf=new B,qf=class{#e=new Ef(Vf.joints.length);world=new Float32Array(Vf.joints.length*16);pose(e){let t=this.#e;t.clear();let n=Df((e.gait?.speed??0)/3.2,0,1),r=e.gait?Tf(e.gait,e.alpha)/Uf:0,i=0,a=0,o=0,s=0,c=0,l=-.25,u=[0,0,0,0];if(e.state===`windup`){let t=Df(e.frame/Math.max(1,e.warn),0,1);i=-.09*kf(t*1.5),a=.12*t,c=.38*kf(t*1.4),u[1]=t<.85?-.35+.45*Math.sin(e.frame*.55):-.1,u[2]=.28*t,u[3]=.28*t,l=-.25-.5*t,s=.035*Math.max(0,(t-.66)*3)*Math.sin(e.time*2.6)}else if(e.state===`attack`){let t=e.travelled/Wf,n=Math.sin(2*Math.PI*t);u[0]=-.85*n,u[1]=-.85*n,u[2]=.85*Math.sin(2*Math.PI*t+1.2),u[3]=.85*Math.sin(2*Math.PI*t+1.2),a=.14*Math.sin(2*Math.PI*t+.6),i=.05*Math.abs(n),c=.32,l=-.9}else if(e.state===`recover`){let t=1-kf(Df(e.frame/Math.max(1,e.recover),0,1)/.4);a=-.22*t,u[0]=-.55*t,u[1]=-.55*t,u[2]=.2*t,u[3]=.2*t,c=.12*Math.sin(e.time*.5)*(1-t)-.15*t}else{let t=Math.sin(2*Math.PI*r),a=.55*n;u[0]=-a*t,u[3]=-a*t,u[1]=a*t,u[2]=a*t,i=.02*n*Math.cos(4*Math.PI*r),c=.05*Math.sin(e.time*.08)*(1-n),l=-.25+.15*Math.sin(e.time*.2)}a-=.3*e.flash*Math.max(0,-e.pushZ),o-=.22*e.flash*e.pushX,c-=.25*e.flash,t.move(Hf.body,s,i,0),t.turn(Hf.body,a,0,o),t.turn(Hf.head,c,0,0),t.turn(Hf.neck,c*.4,0,0),t.turn(Hf.tail,l,0,0);let d=e.air>=0?.6*Math.sin(e.time*.8):0,f=e.air<0&&e.stun>0?kf(e.stun/18):0,p=f*.25*Math.sin(e.time*.9);return t.turn(Hf.fl,u[0]+d+p,0,0),t.turn(Hf.fr,u[1]-d,0,0),t.turn(Hf.bl,u[2]-d-p,0,0),t.turn(Hf.br,u[3]+d,0,0),Gf.makeTranslation(e.x,e.lift,e.y),Gf.multiply(Kf.makeRotationY(e.yaw)),e.air>=0?(Gf.multiply(Kf.makeTranslation(0,.5,0)),Gf.multiply(Kf.makeRotationX(-Math.PI*2*kf(e.air))),Gf.multiply(Kf.makeTranslation(0,-.5,0))):f>0&&(Gf.multiply(Kf.makeTranslation(0,.22*f,0)),Gf.multiply(Kf.makeRotationZ(1.35*f)),Gf.multiply(Kf.makeTranslation(0,-.3*f,0))),e.size!==1&&Gf.multiply(Kf.makeScale(e.size,e.size,e.size)),bf(Vf,t,Gf,this.world)}},Jf=Pd,Yf={post:K(Jf,`post`),body:K(Jf,`body`),head:K(Jf,`head`)},Xf=new B,Zf=new B,Qf=.34,$f=16,ep=.32,tp=class{#e=new Ef(Jf.joints.length);world=new Float32Array(Jf.joints.length*16);pose(e){let t=this.#e;t.clear();let n=0,r=0,i=e.hit;if(i&&i.age>=0){let e=Qf*Math.exp(-i.age/$f)*Math.cos(i.age*ep);n=e*i.z,r=-e*i.x}else n=.25*e.flash*e.pushZ,r=-.25*e.flash*e.pushX;let a=.015*Math.sin(e.time*.05);return t.turn(Yf.post,n*.45,0,r*.45+a),t.turn(Yf.body,n*.55,0,r*.55),t.turn(Yf.head,n*.4,0,r*.4-a),Xf.makeTranslation(e.x,e.lift,e.y),Xf.multiply(Zf.makeRotationY(e.yaw)),e.air>=0&&(Xf.multiply(Zf.makeTranslation(0,.6,0)),Xf.multiply(Zf.makeRotationX(-Math.PI*2*kf(e.air))),Xf.multiply(Zf.makeTranslation(0,-.6,0))),e.size!==1&&Xf.multiply(Zf.makeScale(e.size,e.size,e.size)),bf(Jf,t,Xf,this.world)}},np=zd,rp={hips:K(np,`hips`),spine:K(np,`spine`),chest:K(np,`chest`),head:K(np,`head`),core:K(np,`core`),spikes:K(np,`spikes`),shoulderL:K(np,`shoulder.l`),elbowL:K(np,`elbow.l`),shoulderR:K(np,`shoulder.r`),elbowR:K(np,`elbow.r`),hipL:K(np,`hip.l`),kneeL:K(np,`knee.l`),hipR:K(np,`hip.r`),kneeR:K(np,`knee.r`)},ip=2.4,ap=26,op=new B,sp=new B,cp=class{#e=new Ef(np.joints.length);world=new Float32Array(np.joints.length*16);pose(e){let t=this.#e;t.clear();let n=e.boss??null,r=Df((e.gait?.speed??0)/2.4,0,1),i=e.gait?Tf(e.gait,e.alpha)/ip:0,a={pitch:-.15,roll:.2,elbow:-.35},o=0,s=0,c=0,l=0,u=1+.015*Math.sin(e.time*.04),d=0;if(n?.mode===`warn`&&n.kind===`slam`){let e=Df(n.frame/Math.max(1,n.warn),0,1),t=kf(e/.75),i=kf((e-.9)/.1);a.pitch=Of(Of(a.pitch,-2.7,t),-.75,i),a.elbow=Of(Of(a.elbow,-.5,t),-.12,i),a.roll=Of(a.roll,.05,t),d=t*(1-i),o=-.25*t*(1-i)+.55*i,s=.1*t+.3*i,c=-.2*t+.3*i,r=0}else if(n?.mode===`warn`&&n.kind===`ring`){let t=kf(Df(n.frame/Math.max(1,n.warn),0,1));a.pitch=Of(a.pitch,-.5,t),a.roll=Of(a.roll,1.4,t),a.elbow=Of(a.elbow,-.1,t),o=-.18*t,c=-.25*t,u+=.06*t,l=.12*Math.sin(e.time*.3)*t,r=0}else if(n?.mode===`warn`&&n.kind===`charge`){let i=kf(Df(n.frame/Math.max(1,n.warn),0,1));a.pitch=Of(a.pitch,.6,i),a.elbow=Of(a.elbow,-.6,i),o=-.12*i,s=.18*i,c=.15*i,r=0,t.turn(rp.hipR,-.35*i*(.5+.5*Math.sin(e.time*.45)),0,0),t.turn(rp.kneeR,.45*i*(.5+.5*Math.sin(e.time*.45)),0,0)}else n?.mode===`charge`&&(a.pitch=.75,a.elbow=-.7,o=.5,s=.12,r=1,i=e.time/14);if(n&&n.struck>=0&&n.struck<ap&&n.mode!==`warn`){let e=1-kf(n.struck/ap);a.pitch=Of(a.pitch,-.75,e),a.elbow=Of(a.elbow,-.12,e),a.roll=Of(a.roll,.05,e),o=Of(o,.55,e),s=Of(s,.3,e),r*=1-e}let f=Math.sin(2*Math.PI*i),p=Math.cos(2*Math.PI*i),m=(n?.mode===`charge`?.75:.45)*r;t.turn(rp.hipL,-m*f,0,0),t.turn(rp.hipR,m*f,0,0),t.turn(rp.kneeL,.6*r*Math.max(0,p),0,0),t.turn(rp.kneeR,.6*r*Math.max(0,-p),0,0);let h=.06*r*Math.abs(p)-.03*r;l+=.08*r*f;let g=.3*r*f*(n?.mode===`charge`?.4:1),_=n?.broken??0;return _>0&&(t.turn(rp.hipL,-1.3*_,0,0),t.turn(rp.kneeL,1.45*_,0,0),t.turn(rp.hipR,.25*_,0,0),t.turn(rp.kneeR,1.6*_,0,0),a.pitch=Of(a.pitch,.1,_),a.roll=Of(a.roll,.15,_),a.elbow=Of(a.elbow,-.2,_),o=Of(o,.45,_),c=Of(c,.4,_),s=Of(s,.5,_)),o+=.1*e.flash*e.pushZ,t.move(rp.hips,0,h-s,0),t.turn(rp.spine,o*.5,0,-.06*e.flash*e.pushX),t.turn(rp.chest,o*.5,l,0),t.grow(rp.chest,u),t.turn(rp.head,c-o*.3,0,0),t.turn(rp.shoulderL,a.pitch-g,0,a.roll-.25*d),t.turn(rp.shoulderR,a.pitch+g,0,-a.roll+.25*d),t.turn(rp.elbowL,a.elbow,0,0),t.turn(rp.elbowR,a.elbow,0,0),t.grow(rp.spikes,Math.max(.001,n?.grown??0)),t.grow(rp.core,1+.08*Math.sin(e.time*.12)*(n?.grown??0)),op.makeTranslation(e.x,e.lift,e.y),op.multiply(sp.makeRotationY(e.yaw)),e.size!==1&&op.multiply(sp.makeScale(e.size,e.size,e.size)),bf(np,t,op,this.world)}},lp=Id,up={hover:K(lp,`hover`),ring:K(lp,`ring`),barrel:K(lp,`barrel`)},dp=new B,fp=new B,pp=class{#e=new Ef(lp.joints.length);world=new Float32Array(lp.joints.length*16);pose(e){let t=this.#e;t.clear();let n=.06*Math.sin(e.time*.08),r=e.time*.03,i=1,a=0,o=0;if(e.state===`windup`){let t=Df(e.frame/Math.max(1,e.warn),0,1);r+=9*t*t,i=1+.28*kf(t),a=-.12*t,n*=1-t}else if(e.state===`attack`||e.state===`recover`){let t=1-kf(e.state===`attack`?0:Df(e.frame/Math.max(1,e.recover),0,1));o=.18*t,a=-.3*t,r+=9}a+=.32*e.flash*e.pushZ;let s=-.3*e.flash*e.pushX,c=e.air<0&&e.stun>0?kf(e.stun/18):0;return t.move(up.hover,0,n-.32*c,-o),t.turn(up.hover,a+.3*c*Math.sin(e.time*.6),0,s),t.turn(up.ring,0,r,0),t.grow(up.ring,i),t.turn(up.barrel,-.5*a,0,0),dp.makeTranslation(e.x,e.lift,e.y),dp.multiply(fp.makeRotationY(e.yaw)),e.air>=0&&(dp.multiply(fp.makeTranslation(0,.66,0)),dp.multiply(fp.makeRotationX(-Math.PI*2*kf(e.air))),dp.multiply(fp.makeRotationZ(Math.PI*kf(e.air))),dp.multiply(fp.makeTranslation(0,-.66,0))),e.size!==1&&dp.multiply(fp.makeScale(e.size,e.size,e.size)),bf(lp,t,dp,this.world)}};function mp(e){switch(e){case`rig.dummy`:return new tp;case`rig.shooter`:return new pp;case`rig.guardian`:return new cp;default:return new qf}}var hp={yaw:0,pitch:0,roll:0,gx:0,gy:0,gz:0,hips:0,chest:0,lean:0,bank:0,crouch:0,lunge:0,lift:0,stride:0,armPitch:0,armRoll:0,hands:0},gp=Object.keys(hp);function _p(e){return{...hp,...e}}var q=_p,vp=q({yaw:-32,pitch:-38,gx:-.2,gy:-.28,gz:.14,armPitch:0,armRoll:8}),yp={readyAt:.7,strike:2.5,followFor:3,holdFor:3,ready:q({yaw:-150,pitch:34,roll:-40,gx:-.34,gy:.32,gz:-.12,hips:-22,chest:-42,lean:-4,bank:-10,crouch:.08,lunge:-.06,stride:.4,armPitch:-70,armRoll:14}),coil:q({yaw:-160,pitch:38,roll:-42,gx:-.35,gy:.34,gz:-.15,hips:-26,chest:-48,lean:-6,bank:-12,crouch:.1,lunge:-.08,stride:.45,armPitch:-74,armRoll:16}),contact:q({yaw:-5,pitch:-14,roll:-30,gx:-.08,gy:.02,gz:.4,hips:18,chest:14,lean:26,bank:8,crouch:.18,lunge:.3,stride:1,armPitch:30,armRoll:30}),through:q({yaw:100,pitch:-38,roll:-35,gx:.02,gy:-.12,gz:.26,hips:34,chest:38,lean:32,bank:10,crouch:.22,lunge:.34,stride:1,armPitch:42,armRoll:34}),follow:q({yaw:122,pitch:-48,roll:-38,gx:0,gy:-.16,gz:.22,hips:38,chest:44,lean:34,bank:11,crouch:.24,lunge:.34,stride:1,armPitch:46,armRoll:36}),hold:q({yaw:126,pitch:-50,roll:-38,gx:0,gy:-.17,gz:.21,hips:39,chest:45,lean:34,bank:11,crouch:.24,lunge:.33,stride:1,armPitch:45,armRoll:34})},bp={readyAt:.7,strike:2.5,followFor:3,holdFor:3,ready:q({yaw:140,pitch:-40,roll:40,gx:.02,gy:-.14,gz:.14,hips:30,chest:42,lean:22,bank:12,crouch:.18,lunge:.1,stride:.75,armPitch:10,armRoll:-25}),coil:q({yaw:150,pitch:-44,roll:42,gx:.03,gy:-.16,gz:.12,hips:34,chest:48,lean:24,bank:13,crouch:.2,lunge:.08,stride:.75,armPitch:12,armRoll:-28}),contact:q({yaw:5,pitch:6,roll:30,gx:-.14,gy:.1,gz:.4,hips:-8,chest:-10,lean:12,bank:-2,crouch:.12,lunge:.26,stride:1,armPitch:30,armRoll:35}),through:q({yaw:-100,pitch:36,roll:38,gx:-.4,gy:.3,gz:.14,hips:-26,chest:-34,lean:-4,bank:-8,crouch:.02,lunge:.28,stride:1,armPitch:40,armRoll:45}),follow:q({yaw:-124,pitch:52,roll:42,gx:-.4,gy:.4,gz:.06,hips:-30,chest:-40,lean:-12,bank:-10,crouch:-.04,lunge:.24,stride:1,armPitch:45,armRoll:50}),hold:q({yaw:-127,pitch:54,roll:42,gx:-.4,gy:.41,gz:.05,hips:-31,chest:-41,lean:-12,bank:-10,crouch:-.04,lunge:.23,stride:1,armPitch:44,armRoll:48})},xp={readyAt:.7,strike:2.5,followFor:3,holdFor:3,ready:q({yaw:-160,pitch:6,gx:-.4,gy:-.04,gz:-.1,hips:-36,chest:-52,lean:14,bank:-6,crouch:.2,lunge:-.06,stride:.9,armPitch:-85,armRoll:8}),coil:q({yaw:-172,pitch:8,gx:-.42,gy:-.02,gz:-.14,hips:-40,chest:-58,lean:16,bank:-7,crouch:.22,lunge:-.08,stride:.95,armPitch:-88,armRoll:6}),contact:q({yaw:0,pitch:2,gx:-.1,gy:-.04,gz:.38,hips:24,chest:16,lean:20,bank:4,crouch:.24,lunge:.32,stride:1,armPitch:35,armRoll:45}),through:q({yaw:108,pitch:0,gx:.04,gy:-.08,gz:.26,hips:44,chest:50,lean:20,bank:6,crouch:.24,lunge:.36,stride:1,armPitch:50,armRoll:55}),follow:q({yaw:140,pitch:-4,gx:.04,gy:-.1,gz:.2,hips:50,chest:60,lean:18,bank:6,crouch:.22,lunge:.36,stride:1,armPitch:52,armRoll:58}),hold:q({yaw:143,pitch:-5,gx:.04,gy:-.1,gz:.19,hips:51,chest:61,lean:18,bank:6,crouch:.22,lunge:.35,stride:1,armPitch:52,armRoll:56}),link:[{at:.55,pose:q({yaw:30,pitch:82,roll:90,gx:-.1,gy:.44,gz:.06,chest:-10,lean:-6,crouch:.04,lunge:.1,stride:.6,armPitch:-60,hands:.7})}]},Sp={readyAt:.7,strike:3,followFor:3,holdFor:5,ready:q({yaw:-158,pitch:32,roll:-60,gx:-.22,gy:.36,gz:-.06,hips:-30,chest:-50,lean:-16,bank:-10,crouch:.02,lunge:-.14,stride:.55,hands:1}),coil:q({yaw:-166,pitch:40,roll:-64,gx:-.24,gy:.4,gz:-.08,hips:-34,chest:-56,lean:-20,bank:-12,crouch:-.04,lunge:-.16,stride:.55,hands:1}),contact:q({yaw:-2,pitch:-22,roll:-55,gx:-.08,gy:-.02,gz:.4,hips:18,chest:14,lean:32,bank:6,crouch:.24,lunge:.4,stride:1,hands:1}),through:q({yaw:112,pitch:-52,roll:-55,gx:-.02,gy:-.18,gz:.24,hips:36,chest:42,lean:42,bank:8,crouch:.32,lunge:.44,stride:1,hands:1}),follow:q({yaw:130,pitch:-60,roll:-55,gx:-.02,gy:-.2,gz:.2,hips:40,chest:46,lean:45,bank:9,crouch:.34,lunge:.44,stride:1,hands:1}),hold:q({yaw:132,pitch:-61,roll:-55,gx:-.02,gy:-.2,gz:.2,hips:40,chest:47,lean:45,bank:9,crouch:.34,lunge:.43,stride:1,hands:1}),link:[{at:.5,pose:q({yaw:10,pitch:-50,roll:-30,gx:0,gy:-.16,gz:.24,hips:5,lean:30,crouch:.2,lunge:.1,stride:.8,hands:1})}]},Cp={readyAt:.3,strike:2.5,followFor:3,holdFor:7,ready:q({yaw:-105,pitch:-32,roll:-20,gx:-.08,gy:-.16,gz:.14,hips:-22,chest:-34,lean:30,bank:-6,crouch:.3,lunge:-.06,stride:.8,hands:1}),windup:[{at:.4,pose:q({yaw:-40,pitch:40,roll:60,gx:-.16,gy:.22,gz:.2,hips:-6,chest:-10,lean:6,crouch:.02,lift:.38,stride:.5,hands:1})},{at:.85,pose:q({yaw:0,pitch:112,roll:90,gx:-.08,gy:.42,gz:-.02,lean:-22,crouch:-.04,lift:.72,stride:.35,hands:1})}],coil:q({yaw:0,pitch:118,roll:90,gx:-.08,gy:.44,gz:-.04,lean:-25,crouch:-.05,lift:.74,stride:.35,hands:1}),contact:q({yaw:0,pitch:-18,roll:90,gx:-.05,gy:-.18,gz:.3,lean:46,crouch:.36,lunge:.24,stride:1,hands:1}),through:q({yaw:0,pitch:-16,roll:90,gx:-.05,gy:-.17,gz:.3,lean:44,crouch:.35,lunge:.24,stride:1,hands:1}),follow:q({yaw:0,pitch:-15,roll:90,gx:-.05,gy:-.17,gz:.3,lean:43,crouch:.34,lunge:.24,stride:1,hands:1}),hold:q({yaw:0,pitch:-14,roll:90,gx:-.05,gy:-.16,gz:.3,lean:42,crouch:.33,lunge:.23,stride:1,hands:1})},wp={readyAt:.7,strike:2,followFor:2,holdFor:3,ready:q({yaw:-10,pitch:2,roll:90,gx:-.3,gy:-.12,gz:-.12,hips:-14,chest:-24,lean:4,crouch:.08,lunge:-.06,stride:.6,armPitch:-60}),coil:q({yaw:-8,pitch:2,roll:90,gx:-.32,gy:-.12,gz:-.16,hips:-16,chest:-27,lean:5,crouch:.09,lunge:-.07,stride:.6,armPitch:-62}),contact:q({yaw:0,pitch:-2,roll:90,gx:-.08,gy:.02,gz:.44,hips:10,chest:12,lean:16,crouch:.1,lunge:.3,stride:1,armPitch:30,armRoll:20}),through:q({yaw:0,pitch:-3,roll:90,gx:-.08,gy:.02,gz:.44,hips:10,chest:12,lean:16,crouch:.1,lunge:.3,stride:1,armPitch:30,armRoll:20}),follow:q({yaw:0,pitch:-4,roll:90,gx:-.08,gy:.02,gz:.42,hips:10,chest:12,lean:15,crouch:.1,lunge:.28,stride:1,armPitch:28,armRoll:18}),hold:q({yaw:0,pitch:-4,roll:90,gx:-.08,gy:.01,gz:.41,hips:10,chest:12,lean:15,crouch:.1,lunge:.27,stride:1,armPitch:27,armRoll:18})},Tp={slash:yp,backslash:bp,sweep:xp,heavy:Sp,quake:Cp};function Ep(e,t){return Tp[e.id]||(e.hitbox.kind===`line`?wp:e.hitbox.kind===`circle`?Cp:t%2==0?yp:bp)}function Dp(e,t){let n=t.activeFrom+1,r=n-Math.min(e.strike,n*.6),i=Math.max(n,t.activeTo+1),a=Math.max(0,t.frames-i),o=i+Math.min(e.followFor,a*.25),s=o+Math.min(e.holdFor,a*.3);return{ready:r*e.readyAt,coil:r,contact:n,through:i,follow:o,hold:s,end:Math.max(s,t.frames)}}var Op=e=>e<0?0:e>1?1:e,kp=e=>e,Ap=e=>e*e,jp=e=>1-(1-e)*(1-e),Mp=e=>1-(1-e)**3,Np=e=>e*e*(3-2*e);function Pp(e,t,n,r){for(let i of gp)e[i]=t[i]+(n[i]-t[i])*r}function Fp(e,t,n){let r={...hp};return Pp(r,e,t,n),r}function Ip(e,t){let n=e[0];if(!n||t<=n.t)return n?.pose??hp;for(let n=1;n<e.length;n++){let r=e[n],i=e[n-1];if(r&&i&&t<=r.t){let e=r.t-i.t,n=e>1e-9?Op((t-i.t)/e):1;return Fp(i.pose,r.pose,r.ease(n))}}return e[e.length-1]?.pose??hp}function Lp(e){let t=Ep(e.step,e.index),n=Dp(t,e.step),r=e.steps[e.index+1],i=r?Ep(r,e.index+1):null,a=e.index>0?t.ready:vp;if(e.f<n.hold)return Ip([{t:0,pose:a,ease:kp},{t:n.ready,pose:t.ready,ease:jp},...(t.windup??[]).map(e=>({t:n.ready+(n.coil-n.ready)*e.at,pose:e.pose,ease:Np})),{t:n.coil,pose:t.coil,ease:Np},{t:n.contact,pose:t.contact,ease:Ap},{t:n.through,pose:t.through,ease:jp},{t:n.follow,pose:t.follow,ease:Mp},{t:n.hold,pose:t.hold,ease:kp}],e.f);let o=n.end-n.hold,s=o>1e-9?Op((e.f-n.hold)/o):1,c=Fp(t.hold,vp,Np(s)),l=Op(e.chain);if(!i||l<=0)return c;let u=Ip([{t:0,pose:t.hold,ease:kp},...(t.link??[]).map(e=>({t:e.at,pose:e.pose,ease:Np})),{t:1,pose:i.ready,ease:Np}],s);return l>=1?u:Fp(c,u,l)}function Rp(e){let t=Dp(Ep(e.step,e.index),e.step),n=t.coil;if(e.f<n)return{from:n,tail:e.f,opacity:0};let r=Math.max(0,e.f-t.follow),i=Math.max(0,1-r/5);return{from:n,tail:Math.min(e.f,Math.max(n,e.f-4)+r*1.2),opacity:i}}var zp=new R,Bp=new R,Vp=new R,Hp=new R,Up=new R,Wp=new R,Gp=new R,Kp=new R,qp=new R,Jp=new Bt,Yp=new B,Xp=new B,Zp=new B;function Qp(e,t,n,r,i){Yp.makeTranslation(r.x,r.y,r.z),Yp.multiply(Xp.makeRotationFromQuaternion(i)),Yp.multiply(Xp.makeTranslation(-r.x,-r.y,-r.z));for(let r of e.subtree[n]??[])Zp.fromArray(t,r*16),Zp.premultiply(Yp),Zp.toArray(t,r*16)}function $p(e,t,n,r,i,a,o){xf(t,n,zp),xf(t,r,Bp),xf(t,i,Vp);let s=zp.distanceTo(Bp),c=Bp.distanceTo(Vp);if(s<1e-6||c<1e-6)return;Up.subVectors(a,zp);let l=Up.length();if(l<1e-6||(Up.divideScalar(l),l=Math.min(Math.max(l,Math.abs(s-c)+1e-4),s+c-1e-4),Hp.copy(zp).addScaledVector(Up,l),Wp.subVectors(o,zp),Wp.addScaledVector(Up,-Wp.dot(Up)),Wp.lengthSq()<1e-10&&(Wp.subVectors(Bp,zp),Wp.addScaledVector(Up,-Wp.dot(Up))),Wp.lengthSq()<1e-10))return;Wp.normalize();let u=(s*s-c*c+l*l)/(2*l),d=Math.sqrt(Math.max(0,s*s-u*u));Gp.copy(zp).addScaledVector(Up,u).addScaledVector(Wp,d),Kp.subVectors(Bp,zp).normalize(),qp.subVectors(Gp,zp).normalize(),Jp.setFromUnitVectors(Kp,qp),Qp(e,t,n,zp,Jp),xf(t,r,Bp),xf(t,i,Vp),Kp.subVectors(Vp,Bp).normalize(),qp.subVectors(Hp,Bp).normalize(),Jp.setFromUnitVectors(Kp,qp),Qp(e,t,r,Bp,Jp)}var em=Dd,J={hips:K(em,`hips`),spine:K(em,`spine`),chest:K(em,`chest`),neck:K(em,`neck`),head:K(em,`head`),cape:K(em,`cape`),capeLow:K(em,`cape.low`),shoulderL:K(em,`shoulder.l`),elbowL:K(em,`elbow.l`),handL:K(em,`hand.l`),shoulderR:K(em,`shoulder.r`),elbowR:K(em,`elbow.r`),handR:K(em,`hand.r`),sword:K(em,`sword`),hipL:K(em,`hip.l`),kneeL:K(em,`knee.l`),ankleL:K(em,`ankle.l`),hipR:K(em,`hip.r`),kneeR:K(em,`knee.r`),ankleR:K(em,`ankle.r`)},tm=1.7,nm=1.165,rm=_p({yaw:-90,pitch:4,roll:90,gx:-.42,gy:-.12,gz:.1,lean:10,bank:-8,crouch:.18,stride:.5,armPitch:-10,armRoll:75}),im=_p({yaw:0,pitch:-6,roll:90,gx:-.1,gy:0,gz:.42,lean:26,crouch:.12,stride:1,armPitch:50,armRoll:30}),am=new B,om=new B,sm=new B,cm=new Bt,lm=new Bt,um=new R,dm=new R,fm=new R,pm=new R,mm=new R,hm=new R,gm=new R,_m=new Bt,vm=new R,ym=new B;function bm(e,t,n){return om.makeRotationY(e+t.yaw*jf),om.multiply(ym.makeRotationX(-t.pitch*jf)),om.multiply(ym.makeRotationZ(t.roll*jf)),n.setFromRotationMatrix(om)}var xm=class{#e=new Ef(em.joints.length);world=new Float32Array(em.joints.length*16);#t=new Float32Array(em.joints.length*16);lift=0;pose(e){let t=Sm(e),n=this.world,r=this.#n(t,n);return this.lift=r.act.lift,t.dead?(xf(n,J.handR,gm),bm(t.yaw,_p({yaw:70,pitch:-2}),lm),Bf(n,J.sword,gm.setY(.05),lm),n):(t.dodge||this.#r(t,r,n),t.dodge?(ym.fromArray(n,J.handR*16),ym.decompose(gm,_m,vm),cm.setFromAxisAngle(hm.set(1,0,0),Math.PI/2),_m.multiply(cm),Bf(n,J.sword,gm,_m),n):(this.#i(t,r,n),n))}blade(e,t,n){let r=Sm(e),i=this.#n(r,this.#t);Cm(this.#t,i.act,t),n.set(0,0,1).applyQuaternion(bm(r.yaw,i.act,lm))}#n(e,t){let n=this.#e;n.clear();let r=e.gait,i=e.dodge||e.dash||e.dead?0:r?.speed??0,a=Df(i/5.5,0,1),o=1-Af(.15,1.2,i),s=r?Tf(r,e.alpha)/tm:0,c=r?.dirX??Math.sin(e.yaw),l=r?.dirY??Math.cos(e.yaw),u=Mf(Math.atan2(c,l)-e.yaw),d=Df((Math.abs(u)>1.75?Mf(u-Math.PI*Math.sign(u)):u)*.5,-.85,.85)*a,f=Math.cos(u)*a,p=Math.sin(u)*a,m=e.dead||e.dodge?null:e.swing,h=vp,g=0;m&&(h=Lp({step:m.step,index:m.index,steps:e.steps,f:m.f,chain:e.chain}),g=1),e.dash&&(h=im,g=1),e.whirl&&!m&&!e.dash&&!e.dead&&!e.dodge&&(h=rm,g=1);let _=1-g,v=e.cast&&!e.dodge&&!e.dead&&h.hands<1?Math.sin(Math.PI*Df(e.cast.t,0,1)):0;n.move(J.hips,0,-.06*a+.035*a*(.5+.5*Math.cos(4*Math.PI*s))-h.crouch,h.lunge),n.turn(J.hips,0,d+h.hips*jf,0),n.turn(J.spine,.16*f+h.lean*jf*.6-.3*e.hurt,0,-.12*p-h.bank*jf);let y=.025*o*_*Math.sin(e.time*.06);n.turn(J.chest,h.lean*jf*.4+y+.08*v,h.chest*jf-d*.85+.4*v,0),n.grow(J.chest,1+.012*o*_*Math.sin(e.time*.06)),n.turn(J.head,-.35*h.lean*jf-.2*e.hurt,-(h.hips+h.chest)*jf*.6,0);let b=Math.sin(e.time*.35),x=1.1*Df(h.lift,0,1);if(n.turn(J.cape,.1+.45*a-.6*h.lean*jf+.05*a*b+(e.dash?.5:0)+x,0,0),n.turn(J.capeLow,.06+.45*a+.14*a*Math.sin(e.time*.35+1.2)+(e.dash?.6:0)+x,0,.04*a*b),h.hands<1){let e=-.55*a*Math.sin(2*Math.PI*(s+.5))*_;n.turn(J.shoulderL,Of(h.armPitch*jf+e,-1.5,v),0,Of(h.armRoll*jf,.12,v)),n.turn(J.elbowL,Of(-(.35+.55*a)*_-.45*g,-.06,v),0,0)}if(am.makeTranslation(e.x,h.lift,e.y),e.dodge){let t=e.dodge.t;hm.set(e.dodge.dy,0,-e.dodge.dx).normalize(),am.multiply(om.makeTranslation(0,.5-.2*Math.sin(Math.PI*t),0)),am.multiply(om.makeRotationAxis(hm,Math.PI*2*kf(t))),am.multiply(om.makeTranslation(0,-.5,0));let r=Math.min(1,Math.sin(Math.PI*t)*1.8);n.turn(J.spine,.7*r,0,0),n.turn(J.head,.5*r,0,0);for(let[e,t]of[[J.hipL,J.kneeL],[J.hipR,J.kneeR]])n.turn(e,-1.7*r,0,0),n.turn(t,2.3*r,0,0);n.turn(J.shoulderL,-1.3*r,0,.2),n.turn(J.elbowL,-1.5*r,0,0),n.turn(J.cape,1.1*r,0,0)}return e.dead&&(am.multiply(om.makeRotationY(e.yaw)),am.multiply(om.makeTranslation(0,.14,0)),am.multiply(om.makeRotationX(-Math.PI/2)),am.multiply(om.makeRotationY(-e.yaw)),n.turn(J.shoulderL,-.4,0,.9),n.turn(J.shoulderR,-.4,0,-.9),n.turn(J.hipL,-.3,0,.25),n.turn(J.hipR,.1,0,-.2),n.turn(J.kneeR,.5,0,0),n.turn(J.head,0,.5,0)),am.multiply(om.makeRotationY(e.yaw)),bf(em,n,am,t),{act:h,acting:g,run:a,idle:o,phase:s,dirX:c,dirY:l,hipYaw:d}}#r(e,t,n){let{act:r,run:i,idle:a,phase:o,dirX:s,dirY:c}=t,l=e.yaw+t.hipYaw,u=Math.cos(l),d=-Math.sin(l),f=Math.sin(e.yaw),p=Math.cos(e.yaw),m=Math.cos(e.yaw),h=-Math.sin(e.yaw),g=.55-.17*i,_=t.acting>0&&!e.dash?r.stride:0,v=[[J.hipL,J.kneeL,J.ankleL,1,0],[J.hipR,J.kneeR,J.ankleR,-1,.5]];for(let[t,y,b,x,S]of v){let v=Nf(o+S),C,w=0;if(v<g)C=g*tm*(.5-v/g);else{let e=(v-g)/(1-g);C=g*tm*(kf(e)-.5),w=(.08+.12*i)*Math.sin(Math.PI*e)}let T=e.x+u*.11*x+s*C,E=e.y+d*.11*x+c*C,D=e.dash?0:a,O=x>0?.06+.3*_:-(.05+.15*_),ee=e.dash?x*.42:O,k=.12+.04*_,A=e.x+m*k*x+f*ee,te=e.y+h*k*x+p*ee;e.dash?(T=A,E=te):(T=Of(T,A,D),E=Of(E,te,D),w*=1-D),fm.set(T,.075+w+r.lift*.55,E),pm.set(T+Math.sin(l),.9+r.lift,E+Math.cos(l)),$p(em,n,t,y,b,fm,pm),zf(n,b,l)}}#i(e,t,n){let r=t.act;bm(e.yaw,r,lm),um.set(0,0,1).applyQuaternion(lm),Cm(n,r,dm),xf(n,J.shoulderR,mm),pm.set(-Math.cos(e.yaw),0,Math.sin(e.yaw)).multiplyScalar(.5).add(mm).addScaledVector(Pf,-.9),$p(em,n,J.shoulderR,J.elbowR,J.handR,dm,pm),Bf(n,J.handR,dm,lm),Bf(n,J.sword,dm,lm),r.hands>0&&(xf(n,J.handL,gm),fm.copy(dm).addScaledVector(um,-.13),gm.lerp(fm,Df(r.hands,0,1)),xf(n,J.shoulderL,mm),pm.set(Math.cos(e.yaw),0,-Math.sin(e.yaw)).multiplyScalar(.5).add(mm).addScaledVector(Pf,-.9),$p(em,n,J.shoulderL,J.elbowL,J.handL,gm,pm))}};function Sm(e){return e.whirl&&!e.dodge&&!e.dead&&!e.dash&&!e.swing?{...e,yaw:e.yaw-e.whirl.turn}:e}function Cm(e,t,n){return sm.fromArray(e,J.chest*16),n.set(t.gx,t.gy,t.gz).applyMatrix4(sm)}function wm(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new zr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Tm(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Tm(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Tm(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Tr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Em(e,t=1e-4){t=Math.max(t,2**-52);let n={},r=e.getIndex(),i=e.getAttribute(`position`),a=r?r.count:i.count,o=0,s=Object.keys(e.attributes),c={},l={},u=[],d=[`getX`,`getY`,`getZ`,`getW`],f=[`setX`,`setY`,`setZ`,`setW`];for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.attributes[n];c[n]=new r.constructor(new r.array.constructor(r.count*r.itemSize),r.itemSize,r.normalized);let i=e.morphAttributes[n];i&&(l[n]||(l[n]=[]),i.forEach((e,t)=>{let r=new e.array.constructor(e.count*e.itemSize);l[n][t]=new e.constructor(r,e.itemSize,e.normalized)}))}let p=t*.5,m=10**Math.log10(1/t),h=p*m;for(let t=0;t<a;t++){let i=r?r.getX(t):t,a=``;for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),o=r.itemSize;for(let e=0;e<o;e++)a+=`${Math.trunc(r[d[e]](i)*m+h)},`}if(a in n)u.push(n[a]);else{for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),a=e.morphAttributes[n],u=r.itemSize,p=c[n],m=l[n];for(let e=0;e<u;e++){let t=d[e],n=f[e];if(p[n](o,r[t](i)),a)for(let e=0,r=a.length;e<r;e++)m[e][n](o,a[e][t](i))}}n[a]=o,u.push(o),o++}}let g=e.clone();for(let t in e.attributes){let e=c[t];if(g.setAttribute(t,new e.constructor(e.array.slice(0,o*e.itemSize),e.itemSize,e.normalized)),t in l)for(let e=0;e<l[t].length;e++){let n=l[t][e];g.morphAttributes[t][e]=new n.constructor(n.array.slice(0,o*n.itemSize),n.itemSize,n.normalized)}}return g.setIndex(u),g}function Dm(e){let t=e.index?e.toNonIndexed():e.clone();for(let e of Object.keys(t.attributes))e!==`position`&&e!==`normal`&&t.deleteAttribute(e);return t.getAttribute(`normal`)||t.computeVertexNormals(),t}function Om(e){let t=e.clone();t.deleteAttribute(`normal`);let n=Em(t,1e-4);return n.computeVertexNormals(),n}function km(e,t,n,r){let i=new Map,a=new B;e.parts.forEach((n,o)=>{let s=K(e.rig,n.joint),c=Dm(t.shape(n.shape,n.size,r*97+o));if(n.turn){let[e,t,r]=n.turn;c.applyMatrix4(a.makeRotationFromEuler(new yn(e,t,r,`YXZ`)))}n.at&&c.translate(n.at[0],n.at[1],n.at[2]);let l=`${s}|${n.role}`,u=i.get(l)??{joint:s,role:n.role,shapes:[]};u.shapes.push(c),i.set(l,u)});let o=new Map,s=t.outline,c=s?df(new V(n.edge??s.color).multiplyScalar(s.intensity),s.width):null,l=[],u=new Map;for(let e of i.values()){let r=e.shapes.length===1?e.shapes[0]:wm(e.shapes),i=o.get(e.role);if(i||(i=t.material(e.role,n[e.role]??`#ff00ff`,n),o.set(e.role,i)),l.push({joint:e.joint,geometry:r,material:i}),c&&s?.roles.includes(e.role)){let t=u.get(e.joint)??[];t.push(Om(r)),u.set(e.joint,t)}}for(let[e,t]of u){let n=t.length===1?t[0]:wm(t);l.push({joint:e,geometry:n,material:c,hull:!0})}return{rig:e.rig,parts:l}}function Am(e){let t=e.index?e.toNonIndexed():e;for(let e of Object.keys(t.attributes))e!==`position`&&e!==`normal`&&t.deleteAttribute(e);return t.getAttribute(`normal`)||t.computeVertexNormals(),t}function jm(){let e=document.createElement(`canvas`);e.width=64,e.height=64;let t=e.getContext(`2d`);if(t){let e=t.createImageData(64,64);for(let t=0;t<64;t++)for(let n=0;n<64;n++){let r=n/63*2-1,i=t/63*2-1,a=Math.max(0,1-Math.sqrt(r*r+i*i))**2,o=(t*64+n)*4;e.data[o]=255,e.data[o+1]=255,e.data[o+2]=255,e.data[o+3]=Math.round(255*a)}t.putImageData(e,0,0)}return new Vi(e)}var Mm=.5,Nm=.25;function Pm(e,t,n){return Math.max(e,n)/2+Nm*Math.min(e,t,n)}function Fm(e,t){return e*(.45+.5*Math.abs(Math.sin(t)))}function Im(e,t,n){let r=f(y(n,`scenery:${e}x${t}`)),i=[],a=[],o=[],s=(e,t,n,a,o)=>i.push({x:e,z:t,w:n,h:a,d:o,turn:r.float()*Math.PI});for(let t=-3;t<=e+3;t+=.9+r.float()*.6){let e=1+r.float()*.9,n=1.1+r.float()*.7,i=1.6+r.float()*2;s(t,-Pm(e,i,n)-r.float()*.3,e,i,n)}for(let n of[-1,1]){let i=n<0?0:e;for(let e=0;e<=t+1;e+=.9+r.float()*.6){let a=1.1+r.float()*.7,o=1+r.float()*.6,c=Math.max(0,1-e/t),l=Mm+(1.2+r.float()*1.6)*c;s(i+n*(Pm(a,l,o)+r.float()*.3),e,a,l,o)}}for(let t of[-1.4,e+1.4])for(let e=0;e<3;e++)s(t,-1.4,1.1-e*.2,1.4+e*.9,1.1-e*.2);for(let n=-2;n<=e+2;n+=1.1+r.float()*.8){let e=.7+r.float()*.6,i=.2+r.float()*.3;s(n,t+Pm(e,i,.6)+r.float()*.4,e,i,.6)}let c=[[2.6,-.45,`north`],[e*.62,-.5,`north`],[-.5,t*.45,`west`],[e+.5,t*.3,`east`]];for(let[t,n,i]of c){let s=3+Math.floor(r.float()*3);for(let o=0;o<s;o++){let o=t+(r.float()-.5)*.9,s=n+(r.float()-.5)*.5,c=.45+r.float()*.75,l=(r.float()-.5)*.9,u=Fm(c,l);i===`north`?s=Math.min(s,-u):o=i===`west`?Math.min(o,-u):Math.max(o,e+u),a.push({x:o,z:s,size:c,lean:l,turn:r.float()*Math.PI*2})}o.push({x:t,z:n+(n<0?.7:0),radius:2.2})}return{rocks:i,crystals:a,pools:o}}function Lm(e,t,n){return{rocks:t.rocks.map((t,r)=>{let i=Am(e.scenery.boulder([t.w,t.h,t.d],n*131+r));return i.rotateY(t.turn),i.translate(t.x,t.h/2,t.z),i}),gems:t.crystals.map((t,r)=>{let i=Am(e.gem([t.size*.38,t.size,t.size*.38],n*173+r));return i.rotateZ(t.lean),i.rotateY(t.turn),i.translate(t.x,t.size*.38,t.z),i})}}function Rm(e,t,n,r){let i=new Ln,a=Im(t,n,r),o=e.scenery,s=new W(new ta(t+18,n+18),o.floor);s.rotation.x=-Math.PI/2,s.position.set(t/2,0,n/2),i.add(s);let c=o.marks?o.markGeometry(t,n,r):null;if(c&&o.marks){let e=new W(c,o.marks);e.position.y=.01,i.add(e)}let{rocks:l,gems:u}=Lm(e,a,r);l.length>0&&i.add(new W(wm(l),o.rock)),u.length>0&&i.add(new W(wm(u),o.crystal));let d=new U({map:jm(),color:new V(o.glow),transparent:!0,opacity:o.pool,blending:2,depthWrite:!1});for(let e of a.pools){let t=new W(new ta(e.radius*2,e.radius*2),d);t.rotation.x=-Math.PI/2,t.position.set(e.x,.01,e.z),i.add(t)}return i.userData.glow=d,i}var zm=(e,t,n)=>({crystal:new V(e),glow:new V(t),marks:new V(n)}),Bm={elite:zm(`#ff6ad5`,`#b0349e`,`#4a1a45`),shop:zm(`#ffd166`,`#e6a92f`,`#574317`),boss:zm(`#9a7dff`,`#5a3fd6`,`#2a1a57`)};function Vm(e,t){if(!e)return;let n=e;n.color?.copy(t),n.emissive?.copy(t)}var Hm=class{#e;#t;#n;#r=null;constructor(e){this.#e=e;let t=(e,t)=>e?.color?.clone()??new V(t);this.#t={crystal:t(e.crystal,`#ffffff`),glow:new V(e.glow),marks:t(e.marks,`#ffffff`)},this.#n={crystal:this.#t.crystal.clone(),glow:this.#t.glow.clone(),marks:this.#t.marks.clone()}}stage(e){this.#r=e,Vm(e,this.#n.glow)}update(e,t){let n=e.build?.route?.rooms,r=n?.at(-1),i=this.#i(r?.plan.kind),a=this.#i(n?.at(-2)?.plan.kind),o=r?Math.min(1,Math.max(0,(t-r.enteredAt)/45)):1,s=o*o*(3-2*o);this.#n.crystal.copy(a.crystal).lerp(i.crystal,s),this.#n.glow.copy(a.glow).lerp(i.glow,s),this.#n.marks.copy(a.marks).lerp(i.marks,s),Vm(this.#e.crystal,this.#n.crystal),Vm(this.#e.marks,this.#n.marks),Vm(this.#r,this.#n.glow)}#i(e){return(e?Bm[e]:void 0)??this.#t}},Um={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},Wm=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Gm=new to(-1,1,1,-1,0,1),Km=new class extends zr{constructor(){super(),this.setAttribute(`position`,new H([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new H([0,2,0,0,2,0],2))}},qm=class{constructor(e){this._mesh=new W(Km,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Gm)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Jm=class extends Wm{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof pa?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ua.clone(e.uniforms),this.material=new pa({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new qm(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Ym=class extends Wm{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Xm=class extends Wm{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Zm=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new L);this._width=n.width,this._height=n.height,t=new sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:le}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Jm(Um),this.copyPass.material.blending=0,this.timer=new lo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Ym!==void 0&&(r instanceof Ym?n=!0:r instanceof Xm&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new L);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Qm={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`},$m=class extends Wm{constructor(){super(),this.isOutputPass=!0,this.uniforms=ua.clone(Qm.uniforms),this.material=new ma({name:Qm.name,uniforms:this.uniforms,vertexShader:Qm.vertexShader,fragmentShader:Qm.fragmentShader}),this._fsQuad=new qm(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},eh=class extends Wm{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new V}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},th={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new V(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`},nh=class e extends Wm{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new L(256,256):new L(e.x,e.y),this.clearColor=new V(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new sn(i,a,{type:le,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new sn(i,a,{type:le,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new sn(i,a,{type:le,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=th;this.highPassUniforms=ua.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pa({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new L(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ua.clone(Um.uniforms),this.blendMaterial=new pa({uniforms:this.copyUniforms,vertexShader:Um.vertexShader,fragmentShader:Um.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new V,this._oldClearAlpha=1,this._basic=new U,this._fsQuad=new qm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new L(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new pa({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new L(.5,.5)},direction:{value:new L(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new pa({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};nh.BlurDirectionX=new L(1,0),nh.BlurDirectionY=new L(0,1);var rh=class{#e;#t;#n;#r;#i;constructor(e,t){this.#e=e;let{renderer:n,scene:r,camera:i}=e;for(let t of e.proto.lights)t.visible=!1;r.background=new V(t.background),t.fog&&(r.fog=new Gn(t.fog.color,t.fog.near,t.fog.far)),r.add(new Ba(t.sky.color,t.sky.ground,t.sky.intensity));let a=new ro(t.key.color,t.key.intensity);if(a.position.set(...t.key.at),r.add(a),t.rim){let e=new ro(t.rim.color,t.rim.intensity);e.position.set(...t.rim.at),r.add(e)}if(this.#r=t.follow?new eo(t.follow.color,t.follow.intensity,t.follow.distance,1.4):null,this.#i=t.follow?.height??0,this.#r&&r.add(this.#r),n.toneMapping=7,n.toneMappingExposure=t.exposure,n.info.autoReset=!1,t.bloom){let e=n.getSize(new L),a=new Zm(n,new sn(e.x,e.y,{type:le,samples:4}));a.addPass(new eh(r,i));let o=new nh(e,t.bloom.strength,t.bloom.radius,t.bloom.threshold);a.addPass(o),a.addPass(new $m),this.#t=a,this.#n=o}else this.#t=null,this.#n=null}follow(e,t,n=0){this.#r?.position.set(e,this.#i+n,t)}draw(){let{renderer:e,scene:t,camera:n}=this.#e;e.info.reset(),this.#t?this.#t.render():e.render(t,n)}resize(e,t){this.#t?.setSize(e,t),this.#n?.setSize(e,t)}stats(){let{calls:e,triangles:t}=this.#e.renderer.info.render;return{calls:e,triangles:t}}dispose(){this.#t?.dispose(),this.#n?.dispose()}},ih=new V(1,1,1),ah=48;function oh(e){let t=document.createElement(`canvas`);t.width=128,t.height=32;let n=t.getContext(`2d`);if(n){let t=n.createImageData(128,32);for(let n=0;n<32;n++){let r=1-n/31;for(let i=0;i<128;i++){let a=i/127,o=e?a**1.6*Math.exp(-(((r-.84)/.12)**2)):a**1.2*(.3+.7*r**1.5),s=(n*128+i)*4;t.data[s]=255,t.data[s+1]=255,t.data[s+2]=255,t.data[s+3]=Math.round(255*Math.min(1,o))}}n.putImageData(t,0,0)}return new Vi(t)}var sh=class{group=new Ln;#e;#t;#n;#r;constructor(){this.#e=new Float32Array(294);let e=new Float32Array(196),t=[];for(let n=0;n<=ah;n++){let r=n/ah;if(e.set([r,0,r,1],n*4),n<ah){let e=n*2;t.push(e,e+1,e+2,e+1,e+3,e+2)}}this.#t=new zr,this.#t.setAttribute(`position`,new Tr(this.#e,3)),this.#t.setAttribute(`uv`,new Tr(e,2)),this.#t.setIndex(t);let n=e=>new U({map:oh(e),transparent:!0,opacity:0,blending:2,depthWrite:!1,depthTest:!1,side:2});this.#n=n(!1),this.#r=n(!0);let r=new W(this.#t,this.#n),i=new W(this.#t,this.#r);r.renderOrder=20,i.renderOrder=21,r.frustumCulled=!1,i.frustumCulled=!1,this.group.add(r,i),this.group.visible=!1}show(e,t,n,r,i,a){let o=this.#e;for(let i=0;i<=ah;i++){let a=(e+(t-e)*i/ah)*Math.PI/180,s=Math.sin(a),c=Math.cos(a);o.set([s*n,0,c*n,s*r,0,c*r],i*6)}let s=this.#t.getAttribute(`position`);s.needsUpdate=!0,this.#n.color.copy(a),this.#r.color.copy(a).lerp(ih,.6),this.#n.opacity=i,this.#r.opacity=i,this.group.visible=i>0}hide(){this.group.visible=!1}paint(e,t){this.#n.color.copy(e),this.#r.color.copy(t)}},ch=class{group=new Ln;samples;#e;#t;#n;#r;constructor(e=28){this.samples=e,this.#e=new Float32Array(e*2*3);let t=new Float32Array(e*2*2),n=[];for(let r=0;r<e;r++){let i=r/(e-1);if(t.set([i,0,i,1],r*4),r<e-1){let e=r*2;n.push(e,e+1,e+2,e+1,e+3,e+2)}}this.#t=new zr,this.#t.setAttribute(`position`,new Tr(this.#e,3)),this.#t.setAttribute(`uv`,new Tr(t,2)),this.#t.setIndex(n);let r=e=>new U({map:oh(e),transparent:!0,opacity:0,blending:2,depthWrite:!1,side:2});this.#n=r(!1),this.#r=r(!0);let i=new W(this.#t,this.#n),a=new W(this.#t,this.#r);i.renderOrder=20,a.renderOrder=21,i.frustumCulled=!1,a.frustumCulled=!1,this.group.add(i,a),this.group.visible=!1}show(e,t,n,r){this.#e.set(e.subarray(0,this.#e.length)),this.#t.getAttribute(`position`).needsUpdate=!0,this.#n.color.copy(n),this.#r.color.copy(r),this.#n.opacity=.6*t,this.#r.opacity=.9*t,this.group.visible=t>0}hide(){this.group.visible=!1}dispose(){this.#t.dispose(),this.#n.map?.dispose(),this.#r.map?.dispose(),this.#n.dispose(),this.#r.dispose()}},lh={hit:`core:hit`,death:`core:death`,arc:`core:arc`,gust:`core:gust`,burn:`core:burn`,poison:`core:poison`,decay:`core:decay`,radiate:`core:radiate`,stun:`core:stun`,hurt:`core:hurt`,dodge:`core:dodge`,explode:`core:explode`,strike:`core:strike`,beam:`core:beam`,bossBreak:`core:boss_break`},Y={glow:0,spark:1,flame:2,smoke:3,star:4,bubble:5,ring:6,flake:7,mote:8,drop:9,streak:10,feather:11,rune:20,cross:21,bolt:22,plague:23,cloud:24,shock:30,runeRing:31,cracks:32,ripples:33,scorch:34,target:35,pool:36,disc:37},uh=`
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
`,X=(e,t=1)=>new V(e).multiplyScalar(t),Z=(e,t,n)=>t+(n-t)*e.float(),dh=e=>.55+.45*Math.min(2,Math.max(.5,e)),fh=e=>.85+.15*Math.min(2,Math.max(.5,e)),ph=(e,t)=>Math.max(1,Math.round(e*t)),mh=e=>Math.min(1,e/30),hh=(e,t,n)=>e%Math.max(1,Math.round(t/Math.max(.35,mh(n))))===0;function Q(e,t){let n=e.float()*Math.PI*2,r=Z(e,-1,1)*(1-t),i=Math.sqrt(Math.max(0,1-r*r));return new R(Math.cos(n)*i,r,Math.sin(n)*i)}function gh(e,t,n=.15,r=.85){let i=e.float()*Math.PI*2,a=t.radius*Z(e,.3,.9);return{x:t.x+Math.cos(i)*a,y:t.lift+t.height*Z(e,n,r),z:t.z+Math.sin(i)*a}}function $(e,t,n,r,i,a=7){e.sparks.emit(t,{...n,life:a,size:i,grow:1.5,color:r,alpha:.75,alpha2:0,shape:Y.glow})}function _h(e,t,n,r,i,a,o=0){e.mark(t,{layer:`ground`,x:n.x,y:.03,z:n.z,size:i*.25,size2:i,alpha:.85,life:a,delay:o,r:r.r,g:r.g,b:r.b,shape:Y.shock,flat:!0})}function vh(e,t,n,r,i,a){e.sparks.emit(t,{...n,life:a,size:i*.2,grow:5,color:r,alpha:.9,alpha2:0,shape:Y.ring})}var yh=X(`#ffe08a`,2.4),bh=X(`#ff9a3a`,1.7),xh=X(`#d0401a`,.7),Sh=X(`#ffb050`,1.5),Ch=X(`#3a2a24`),wh={id:`fire`,glow:X(`#ff8a2a`,1.6),core:X(`#fff0c0`,2.6),hit(e,t,n,r,i,a,o){let s=dh(o),c=fh(o);$(e,t,r,Sh,.7*c,8);for(let o=0;o<ph(7,s);o++)e.sparks.emit(t,{x:r.x+Z(n,-.3,.3),y:r.y+Z(n,-.2,.15),z:r.z+Z(n,-.3,.3),vx:i*Z(n,.6,1.6)+Z(n,-.4,.4),vy:Z(n,1.6,2.8),vz:a*Z(n,.6,1.6)+Z(n,-.4,.4),drag:1.6,life:Z(n,16,26),size:Z(n,.2,.32)*c,grow:.45,color:yh,color2:xh,shape:Y.flame,seed:n.float()});for(let o=0;o<ph(14,s);o++){let o=Q(n,.3),s=Z(n,3,6.5);e.sparks.emit(t,{...r,vx:(o.x+i)*s,vy:Math.abs(o.y)*s+Z(n,1.5,3.5),vz:(o.z+a)*s,ay:1.5,drag:2.2,life:Z(n,22,40),size:Z(n,.03,.05),color:yh,color2:xh,shape:Y.spark,stretch:1.4})}for(let i=0;i<3;i++)e.shade.emit(t,{...r,vx:Z(n,-.4,.4),vy:Z(n,.6,1),vz:Z(n,-.4,.4),drag:1,life:44,delay:5+i,size:.28*c,grow:2.6,color:Ch,alpha:.4,shape:Y.smoke,seed:n.float()});e.mark(t,{layer:`groundShade`,x:r.x,y:.012,z:r.z,size:.4*c,size2:.5*c,alpha:.5,life:90,r:.45,g:.34,b:.28,shape:Y.scorch,seed:n.float(),flat:!0})},aura(e,t,n,r,i){hh(t,2,i)&&(e.ambience.emit(t,{...gh(n,r,.05,.8),vx:Z(n,-.2,.2),vy:Z(n,1.1,1.9),vz:Z(n,-.2,.2),life:Z(n,14,22),size:Z(n,.11,.19),grow:.35,color:bh,color2:xh,shape:Y.flame,seed:n.float()}),t%6==0&&e.ambience.emit(t,{...gh(n,r,.3,.9),vx:Z(n,-.5,.5),vy:Z(n,1.6,2.6),vz:Z(n,-.5,.5),drag:1,life:Z(n,26,34),size:Z(n,.025,.035),color:yh,color2:xh,shape:Y.mote}),t%14==0&&e.shade.emit(t,{...gh(n,r,.7,1),vy:.8,life:40,size:.16,grow:2.4,color:Ch,alpha:.25,shape:Y.smoke,seed:n.float()}))}},Th=X(`#cfefff`,1.8),Eh=X(`#3a8bff`,1.1),Dh=X(`#bfe8ff`,1.2),Oh=X(`#8fc8ff`,.35),kh={id:`water`,glow:X(`#4aa0ff`,1.4),core:X(`#e0f6ff`,2),hit(e,t,n,r,i,a,o){let s=dh(o),c=fh(o);$(e,t,r,Dh,.55*c,6),vh(e,t,r,Dh,1.1*c,12);for(let o=0;o<ph(18,s);o++){let o=Q(n,.25),s=Z(n,2.2,4.8);e.sparks.emit(t,{...r,vx:(o.x+i*.6)*s,vy:Math.abs(o.y)*s+Z(n,2.2,3.4),vz:(o.z+a*.6)*s,ay:-9.8,drag:.6,life:Z(n,22,34),size:Z(n,.04,.065),color:Th,color2:Eh,shape:Y.spark,stretch:1.1})}for(let o=0;o<3;o++)e.ambience.emit(t,{x:r.x+Z(n,-.25,.25),y:r.y+Z(n,-.2,.2),z:r.z+Z(n,-.25,.25),vx:Z(n,-.4,.4)+i*.5,vz:Z(n,-.4,.4)+a*.5,drag:1.5,life:34,size:.3*c,grow:2.4,color:Oh,alpha:.35,shape:Y.smoke,seed:n.float()});e.mark(t,{layer:`ground`,x:r.x,y:.02,z:r.z,size:.45*c,size2:1.7*c,alpha:.9,life:40,r:Th.r*.5,g:Th.g*.5,b:Th.b*.5,shape:Y.ripples,phaseRate:1.4,flat:!0})},aura(e,t,n,r,i){hh(t,4,i)&&e.ambience.emit(t,{...gh(n,r,.25,.85),vy:-.4,ay:-9.8,life:20,size:.045,color:Th,color2:Eh,shape:Y.drop}),hh(t,12,i)&&e.ambience.emit(t,{x:r.x+Z(n,-.3,.3),y:r.lift+.12,z:r.z+Z(n,-.3,.3),vx:Z(n,-.2,.2),vz:Z(n,-.2,.2),life:44,size:.28,grow:1.8,color:Oh,alpha:.35,shape:Y.smoke,seed:n.float()})}},Ah=X(`#e8fff6`,1.6),jh=X(`#7fe0b0`,1.1),Mh=X(`#a6e88a`,1.1),Nh=X(`#a8f0d0`,.9),Ph=X(`#a8f0d0`,.63),Fh=X(`#7fe0b0`,.55);function Ih(e,t,n,r,i,a,o,s,c=0){for(let l=0;l<14;l++)e.sparks.emit(t,{x:n.x+Math.cos(i)*r,y:n.y,z:n.z+Math.sin(i)*r,cx:n.x,cz:n.z,swirl:a,pull:-.9,delay:c+l*.5,life:o,size:s*(1-.5*l/14),color:Ah,color2:jh,alpha:1-.7*l/14,alpha2:0,shape:Y.spark,stretch:1.2})}var Lh={id:`wind`,glow:X(`#8ff0c0`,1.3),core:X(`#f0fff8`,1.8),hit(e,t,n,r,i,a,o){let s=dh(o),c=fh(o);$(e,t,r,Nh,.5*c,6),_h(e,t,r,Ph,1.5*c,16),vh(e,t,r,Fh,1.3*c,12);let l=n.float()<.5?1:-1;for(let i=0;i<ph(5,s);i++)Ih(e,t,{x:r.x,y:r.y+Z(n,-.35,.3),z:r.z},Z(n,.45,.8)*c,n.float()*Math.PI*2,l*Z(n,9,12),Z(n,18,24),.07,n.int(0,3));for(let o=0;o<ph(8,s);o++){let o=Q(n,.35);e.sparks.emit(t,{...r,vx:o.x*3.5+i*2,vy:Math.abs(o.y)*3+1.2,vz:o.z*3.5+a*2,ay:-3,drag:1.2,life:Z(n,30,46),size:Z(n,.08,.11),color:Mh,shape:Y.feather,spin:Z(n,-12,12),angle:n.float()*6})}},aura(){}};function Rh(e,t,n,r,i){let a=i.x-r.x,o=i.z-r.z,s=Math.sqrt(a*a+o*o)||1,c=s/8*60;for(let i=0;i<3;i++){let l=(i-1)*.18+Z(n,-.05,.05),u=Z(n,-.2,.2);for(let n=0;n<5;n++)e.sparks.emit(t,{x:r.x-o/s*l,y:r.y+u,z:r.z+a/s*l,vx:a/s*c,vz:o/s*c,delay:i+n,life:9,size:.05*(1-n/8),color:Ah,color2:jh,alpha:1-n/6,shape:Y.glow})}let l=n.float()<.5?1:-1;for(let r=0;r<2;r++)Ih(e,t,i,.4,n.float()*Math.PI*2,l*11,14,.045,7);_h(e,t,i,Nh,.9,14,7)}var zh=X(`#f0fdff`,3),Bh=X(`#4ae0ff`,2),Vh=X(`#9ff0ff`,2),Hh={id:`lightning`,glow:Bh,core:zh,hit(e,t,n,r,i,a,o){let s=dh(o),c=fh(o);$(e,t,r,Vh,.6*c,6);let l=new R(r.x,r.y,r.z);for(let o=0;o<ph(3,s);o++){let o=Q(n,.2),s=Z(n,.8,1.4)*c;e.bolts.add(t,{from:l,to:new R(r.x+(o.x+i*.5)*s,Math.max(.05,r.y+o.y*s*.6),r.z+(o.z+a*.5)*s),life:7,width:.03,glow:Bh,core:zh,jag:.25,branches:1,seed:n.u32()})}for(let i=0;i<ph(16,s);i++){let i=Q(n,.1),a=Z(n,6,10);e.sparks.emit(t,{...r,vx:i.x*a,vy:i.y*a+1,vz:i.z*a,ay:-6,drag:4,life:Z(n,8,14),size:.035,color:zh,color2:Bh,shape:Y.spark,stretch:2.5})}},aura(e,t,n,r){let i=gh(n,r);for(let r=0;r<2;r++){let r=Q(n,0);e.ambience.emit(t,{...i,vx:r.x*3,vy:r.y*3,vz:r.z*3,drag:4,life:6,size:.03,color:zh,color2:Bh,shape:Y.spark,stretch:2})}if(t%3==0&&e.ambience.emit(t,{x:r.x,y:r.lift+r.height*.5,z:r.z,life:6,size:r.height*.55,color:Bh,alpha:.3,alpha2:0,shape:Y.glow}),t%4==0){let a=gh(n,r);e.bolts.add(t,{from:new R(i.x,i.y,i.z),to:new R(a.x,a.y,a.z),life:4,width:.018,glow:Bh,core:zh,jag:.3,branches:0,seed:n.u32()})}}},Uh=X(`#6a5644`),Wh=X(`#e8c888`,1.2),Gh=X(`#e0b880`,1.2),Kh=X(`#c8a070`,.45),qh={id:`earth`,glow:X(`#d9b070`,1.2),core:X(`#ffe2b0`,1.6),hit(e,t,n,r,i,a,o){let s=dh(o),c=fh(o);$(e,t,r,X(`#ffe2b0`,1),.5*c,5),_h(e,t,r,Wh,1.3*c,14);for(let o=0;o<ph(7,s);o++){let o=Q(n,.4),s=Z(n,2.5,5);e.chunks.add(t,{kind:`rock`,...r,vx:(o.x+i)*s,vy:Math.abs(o.y)*s+Z(n,2.5,4.5),vz:(o.z+a)*s,life:Z(n,45,65),size:Z(n,.09,.18)*c,spin:Z(n,6,14),axis:Q(n,0),color:X(n.float()<.5?`#b08a62`:`#9a8a72`)})}for(let o=0;o<ph(10,s);o++){let o=Q(n,.3),s=Z(n,2,4);e.sparks.emit(t,{...r,vx:(o.x+i*.5)*s,vy:Math.abs(o.y)*s+1.5,vz:(o.z+a*.5)*s,ay:-9.8,life:Z(n,18,28),size:.03,color:Gh,shape:Y.flake,spin:10})}for(let o=0;o<5;o++){let s={x:r.x+Z(n,-.3,.3),y:.2,z:r.z+Z(n,-.3,.3),vx:Z(n,-1,1)+i,vy:.4,vz:Z(n,-1,1)+a,drag:1.5,life:Z(n,40,56),size:.32*c,grow:2.6,shape:Y.smoke,seed:n.float()};e.shade.emit(t,{...s,color:Uh,alpha:.5}),o<3&&e.ambience.emit(t,{...s,grow:2.2,color:Kh,alpha:.35})}e.mark(t,{layer:`groundShade`,x:r.x,y:.015,z:r.z,size:.65*c,size2:.85*c,alpha:.95,life:90,r:.35,g:.28,b:.22,shape:Y.cracks,seed:n.float(),flat:!0})},aura(){}};function Jh(e,t,n,r){e.shade.emit(t,{x:r.x+Z(n,-.2,.2),y:.12,z:r.z+Z(n,-.2,.2),vy:.3,drag:1,life:30,size:.18,grow:2.2,color:Uh,alpha:.35,shape:Y.smoke,seed:n.float()})}var Yh=X(`#a6e85a`,1.5),Xh=X(`#4a8a2a`,.9),Zh=X(`#7ac04a`,.35),Qh=X(`#4a6a3a`),$h={id:`poison`,glow:X(`#8ed14f`,1.3),core:X(`#e0ffb0`,1.8),hit(e,t,n,r,i,a,o){let s=dh(o),c=fh(o);$(e,t,r,X(`#b0f070`,1),.5*c,6);for(let o=0;o<ph(12,s);o++){let o=Q(n,.3);e.sparks.emit(t,{x:r.x+o.x*.3,y:r.y+o.y*.25,z:r.z+o.z*.3,vx:o.x*.8+i*.4,vy:Z(n,.5,1.4),vz:o.z*.8+a*.4,drag:1.2,life:Z(n,24,42),size:Z(n,.06,.11)*c,grow:1.3,color:Yh,color2:Xh,shape:Y.bubble})}for(let o=0;o<ph(8,s);o++){let o=Q(n,.3),s=Z(n,2,3.5);e.sparks.emit(t,{...r,vx:(o.x+i*.5)*s,vy:Math.abs(o.y)*s+1.5,vz:(o.z+a*.5)*s,ay:-9.8,life:Z(n,18,26),size:.045,color:Yh,color2:Xh,shape:Y.drop})}for(let i=0;i<3;i++)e.ambience.emit(t,{x:r.x+Z(n,-.3,.3),y:r.y*.7,z:r.z+Z(n,-.3,.3),vx:Z(n,-.3,.3),vz:Z(n,-.3,.3),ay:-.3,life:44,size:.32*c,grow:2.4,color:Zh,alpha:.55,shape:Y.smoke,seed:n.float()});for(let i=0;i<2;i++)e.shade.emit(t,{x:r.x+Z(n,-.3,.3),y:r.y*.5,z:r.z+Z(n,-.3,.3),vx:Z(n,-.3,.3),vz:Z(n,-.3,.3),ay:-.4,life:50,size:.35*c,grow:2,color:Qh,alpha:.35,shape:Y.smoke,seed:n.float()})},aura(e,t,n,r,i,a){let o=Math.max(1,Math.min(5,a));hh(t,7-o,i)&&e.ambience.emit(t,{...gh(n,r,.2,.85),vx:Z(n,-.1,.1),vy:Z(n,.5,.9),vz:Z(n,-.1,.1),life:Z(n,22,32),size:Z(n,.045,.08),grow:1.4,color:Yh,color2:Xh,shape:Y.bubble}),hh(t,12,i)&&e.ambience.emit(t,{...gh(n,r,.3,.6),ay:-9.8,life:16,size:.04,color:Yh,color2:Xh,shape:Y.drop}),hh(t,10,i)&&e.ambience.emit(t,{x:r.x+Z(n,-.3,.3),y:r.lift+.15,z:r.z+Z(n,-.3,.3),vx:Z(n,-.15,.15),vz:Z(n,-.15,.15),life:40,size:.3,grow:1.6,color:Zh,alpha:.2+.05*o,shape:Y.smoke,seed:n.float()})}},eg=X(`#fff0c0`,2.2),tg=X(`#ffcf6a`,1.4),ng=X(`#ffe6a0`,1.3),rg={id:`holy`,glow:tg,core:eg,hit(e,t,n,r,i,a,o){let s=dh(o),c=fh(o);$(e,t,r,X(`#fff0c0`,1.4),.65*c,8),_h(e,t,r,tg,1.2*c,18),e.mark(t,{layer:`over`,x:r.x,y:r.y+.5,z:r.z,size:1.1*c,size2:1.4*c,wide:.2,alpha:.8,life:16,r:ng.r,g:ng.g,b:ng.b,shape:Y.streak});for(let i=0;i<ph(12,s);i++){let i=Q(n,.6);e.sparks.emit(t,{x:r.x+i.x*.35,y:r.y+Z(n,-.3,.2),z:r.z+i.z*.35,vx:i.x*.6,vy:Z(n,1.2,2.6),vz:i.z*.6,drag:1.2,life:Z(n,30,46),size:Z(n,.05,.09),color:eg,color2:tg,shape:n.float()<.4?Y.star:Y.mote,spin:3})}},aura(){}};function ig(e,t,n,r,i){for(let a=0;a<8;a++){let o=20+a%4;e.sparks.emit(t,{x:r.x+Z(n,-.2,.2),y:r.y+Z(n,-.1,.3),z:r.z+Z(n,-.2,.2),vx:(i.x-r.x)/o*60,vy:(i.y+.3-r.y)/o*60+1.2,vz:(i.z-r.z)/o*60,ay:60/o*-2.4,life:o,delay:Math.floor(a/2),size:.07,color:eg,color2:tg,shape:Y.mote})}e.sparks.emit(t,{...i,delay:20,life:12,size:.45,grow:1.3,color:X(`#ffe6a0`,1.1),alpha:.7,alpha2:0,shape:Y.glow}),_h(e,t,i,tg,.9,16,20)}var ag=X(`#ff3a5a`,2.2),og=X(`#a01838`,1),sg=X(`#3a0a18`),cg=X(`#c0203a`,.4),lg={id:`unholy`,glow:ag,core:X(`#ffb0c0`,2),hit(e,t,n,r,i,a,o){let s=dh(o),c=fh(o);$(e,t,r,X(`#ff4060`,1.2),.5*c,6);for(let i=0;i<ph(18,s);i++){let i=n.float()*Math.PI*2,a=Z(n,.7,1.1)*c;e.sparks.emit(t,{x:r.x+Math.cos(i)*a,y:r.y+Z(n,-.4,.5),z:r.z+Math.sin(i)*a,cx:r.x,cz:r.z,swirl:5,pull:a*3.5,vy:-.3,life:Z(n,16,20),size:Z(n,.06,.08),color:ag,color2:og,shape:Y.spark,stretch:1.2})}e.ambience.emit(t,{...r,delay:8,life:30,size:.3*c,grow:1.6,color:cg,alpha:.45,shape:Y.smoke,seed:n.float()});for(let i=0;i<2;i++)e.shade.emit(t,{...r,vx:Z(n,-.3,.3),vy:.5,vz:Z(n,-.3,.3),life:40,delay:3*i,size:.35*c,grow:2.2,color:X(`#2a0812`),alpha:.55,shape:Y.smoke,seed:n.float()});e.mark(t,{layer:`ground`,x:r.x,y:.025,z:r.z,size:.6*c,size2:.75*c,alpha:.9,life:30,r:ag.r*.7,g:ag.g*.7,b:ag.b*.7,shape:Y.runeRing,spin:1.5,phaseRate:1,flat:!0})},aura(e,t,n,r,i){hh(t,8,i)&&e.shade.emit(t,{...gh(n,r,.5,1),vy:.7,life:36,size:.14,grow:2,color:sg,alpha:.55,shape:Y.smoke,seed:n.float()}),hh(t,6,i)&&e.ambience.emit(t,{...gh(n,r,.4,.95),vy:-.6,vx:Z(n,-.1,.1),vz:Z(n,-.1,.1),life:24,size:.035,color:ag,color2:og,shape:Y.mote})}},ug=X(`#ffffff`,3),dg=X(`#fff2c8`,1.8),fg={id:`light`,glow:dg,core:ug,hit(e,t,n,r,i,a,o){let s=dh(o),c=fh(o);e.sparks.emit(t,{...r,life:10,size:.75*c,grow:.35,color:ug,alpha:.85,shape:Y.star,angle:Z(n,-.2,.2)}),vh(e,t,r,dg,1.2*c,10);for(let i=0;i<ph(10,s);i++){let i=Q(n,.2);e.sparks.emit(t,{...r,vx:i.x*9,vy:i.y*6,vz:i.z*9,drag:5,life:10,size:.04,color:ug,color2:dg,shape:Y.spark,stretch:3.5})}for(let i=0;i<ph(8,s);i++){let i=Q(n,.3);e.sparks.emit(t,{x:r.x+i.x*.6,y:r.y+i.y*.45,z:r.z+i.z*.6,life:Z(n,12,22),delay:n.int(0,8),size:Z(n,.08,.12),color:ug,shape:Y.star,spin:4})}},aura(e,t,n,r,i){if(!hh(t,5,i))return;let a=n.float()*Math.PI*2;e.ambience.emit(t,{x:r.x+Math.cos(a)*.35,y:r.lift+r.height*Z(n,.8,1.05),z:r.z+Math.sin(a)*.35,life:12,size:Z(n,.06,.1),color:ug,shape:Y.star,spin:3})}},pg=X(`#a07aff`,2),mg=X(`#5a2aa0`,.9),hg=X(`#8a5aff`,1.5),gg=X(`#6a3ad0`,.6),_g={id:`dark`,glow:pg,core:X(`#d8c8ff`,1.6),hit(e,t,n,r,i,a,o){let s=dh(o),c=fh(o);for(let i=0;i<ph(16,s);i++){let i=Q(n,0),a=Z(n,.8,1.3)*s;e.sparks.emit(t,{x:r.x+i.x*a,y:r.y+i.y*a*.7,z:r.z+i.z*a,vx:-i.x*a*3.2,vy:-i.y*a*2.2,vz:-i.z*a*3.2,drag:.4,life:Z(n,16,20),size:Z(n,.06,.08),color:pg,color2:mg,shape:Y.mote})}e.sparks.emit(t,{...r,delay:4,life:14,size:.6*c,grow:.3,color:gg,alpha:.8,shape:Y.glow}),e.sparks.emit(t,{...r,life:14,size:.95*c,grow:.15,color:hg,alpha:.9,shape:Y.ring}),e.shade.emit(t,{...r,life:26,size:.5*c,grow:.5,color:X(`#1a0830`),alpha:.85,shape:Y.smoke,seed:n.float()});for(let i=0;i<ph(8,s);i++){let i=Q(n,.3);e.sparks.emit(t,{...r,vx:i.x*1.6,vy:i.y*1.2+.4,vz:i.z*1.6,drag:1.5,delay:12,life:Z(n,20,28),size:.05,color:pg,color2:mg,shape:Y.mote})}},aura(e,t,n,r,i){hh(t,4,i)&&e.ambience.emit(t,{x:r.x,y:r.lift+r.height*.5,z:r.z,life:8,size:r.height*.5,color:gg,alpha:.25,alpha2:0,shape:Y.glow}),hh(t,5,i)&&e.ambience.emit(t,{...gh(n,r,.5,1),vx:Z(n,-.1,.1),vy:-.6,vz:Z(n,-.1,.1),life:26,size:.05,color:pg,color2:mg,shape:Y.mote}),hh(t,12,i)&&e.shade.emit(t,{x:r.x+Z(n,-.25,.25),y:r.lift+.15,z:r.z+Z(n,-.25,.25),life:40,size:.26,grow:1.8,color:X(`#2a1440`),alpha:.45,shape:Y.smoke,seed:n.float()})}},vg={fire:wh,water:kh,wind:Lh,lightning:Hh,earth:qh,poison:$h,holy:rg,unholy:lg,light:fg,dark:_g};Object.keys(vg);function yg(e,t=`#ffffff`){let n=e.includes(`:`)?e.slice(e.indexOf(`:`)+1):e;return vg[n]??bg(n,t)}function bg(e,t){let n=X(t,1.4);return{id:e,glow:n,core:X(t,2),hit(e,t,r,i,a,o,s){let c=dh(s),l=fh(s);$(e,t,i,n,.5*l,6);for(let a=0;a<ph(12,c);a++){let a=Q(r,.2);e.sparks.emit(t,{...i,vx:a.x*4,vy:a.y*4+1,vz:a.z*4,drag:3,life:14,size:.045,color:n,shape:Y.spark,stretch:1})}},aura(){}}}var xg=17,Sg=`
attribute vec4 aColor;
attribute float aAcross;
varying vec4 vColor;
varying float vAcross;
void main() {
  vColor = aColor;
  vAcross = aAcross;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Cg=`
varying vec4 vColor;
varying float vAcross;
void main() {
  float cover = exp(-vAcross * vAcross * 4.0) * vColor.a;
  if (cover <= 0.002) discard;
  gl_FragColor = vec4(vColor.rgb, cover);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,wg=new R,Tg=new R,Eg=new R,Dg=new R,Og=new R,kg=new R,Ag=new R;function jg(e,t,n,r,i){i[0]?.copy(e),i[16]?.copy(t),Eg.subVectors(t,e);let a=Eg.length();kg.set(0,1,0).cross(Eg),kg.lengthSq()<1e-8&&kg.set(1,0,0),kg.normalize(),Ag.crossVectors(Eg,kg).normalize();let o=16,s=r*a;for(;o>1;){let e=o/2;for(let t=e;t<16;t+=o){let r=i[t],a=i[t-e],o=i[t+e];r&&a&&o&&(r.addVectors(a,o).multiplyScalar(.5),r.addScaledVector(kg,(n.float()-.5)*2*s),r.addScaledVector(Ag,(n.float()-.5)*2*s))}o=e,s*=.55}}var Mg=class{mesh;#e=[];#t;#n;#r;#i;#a=Array.from({length:xg},()=>new R);#o=Array.from({length:xg},()=>new R);constructor(e){let t=36864;this.#t=new Float32Array(t*3),this.#n=new Float32Array(t*4),this.#r=new Float32Array(t);let n=[];for(let e=0;e<9216;e++){let t=e*4;n.push(t,t+1,t+2,t,t+2,t+3)}let r=new zr,i=new Tr(this.#t,3).setUsage(vt),a=new Tr(this.#n,4).setUsage(vt),o=new Tr(this.#r,1).setUsage(vt);r.setAttribute(`position`,i),r.setAttribute(`aColor`,a),r.setAttribute(`aAcross`,o),r.setIndex(n),r.setDrawRange(0,0),this.#i=r;let s=new pa({vertexShader:Sg,fragmentShader:Cg,transparent:!0,depthWrite:!1,blending:2});this.mesh=new W(r,s),this.mesh.frustumCulled=!1,this.mesh.renderOrder=e}add(e,t){this.#e.length>=96&&this.#e.shift(),this.#e.push({...t,from:t.from.clone(),to:t.to.clone(),birth:e+(t.delay??0)})}get live(){return this.#e.length}update(e,t){for(let t=this.#e.length-1;t>=0;t--){let n=this.#e[t];n&&e-n.birth>=n.life&&this.#e.splice(t,1)}let n=0;for(let r of this.#e){let i=e-r.birth;if(i<0)continue;let a=i/r.life,o=Math.floor(i/2),s=a<.4?1:1-(a-.4)/.6,c=f(v([r.seed,o]));jg(r.from,r.to,c,r.jag??.12,this.#a),n=this.#s(this.#a,xg,r,s,t,n);for(let e=0;e<(r.branches??1);e++){let e=3+c.int(0,9),i=this.#a[e];if(!i)continue;wg.copy(r.to).sub(r.from);let a=wg.length()*(.2+.2*c.float());Tg.set(c.float()-.5,c.float()*.6-.3,c.float()-.5).normalize(),wg.normalize().add(Tg).normalize().multiplyScalar(a).add(i),jg(i,wg,c,.18,this.#o),n=this.#s(this.#o,xg,r,s*.6,t,n,.6)}}this.#i.setDrawRange(0,n*6);for(let e of[`position`,`aColor`,`aAcross`]){let t=this.#i.getAttribute(e);t.clearUpdateRanges(),n>0&&t.addUpdateRange(0,n*4*t.itemSize),t.needsUpdate=!0}}#s(e,t,n,r,i,a,o=1){let s=a,c=[{width:n.width*4*o,color:n.glow,alpha:.55*r},{width:n.width*o,color:n.core,alpha:r}];for(let n of c)for(let r=0;r<t-1;r++){if(s>=9216)return s;let a=e[r],o=e[r+1];if(!a||!o||(Eg.subVectors(o,a),Og.subVectors(i,a),Dg.crossVectors(Eg,Og),Dg.lengthSq()<1e-10))continue;Dg.normalize().multiplyScalar(n.width);let c=1-.6*r/(t-1),l=1-.6*(r+1)/(t-1);this.#c(s*4,a,Dg,-c,n.color,n.alpha,-1),this.#c(s*4+1,a,Dg,c,n.color,n.alpha,1),this.#c(s*4+2,o,Dg,l,n.color,n.alpha,1),this.#c(s*4+3,o,Dg,-l,n.color,n.alpha,-1),s++}return s}#c(e,t,n,r,i,a,o){this.#t[e*3]=t.x+n.x*r,this.#t[e*3+1]=t.y+n.y*r,this.#t[e*3+2]=t.z+n.z*r,this.#n[e*4]=i.r,this.#n[e*4+1]=i.g,this.#n[e*4+2]=i.b,this.#n[e*4+3]=a,this.#r[e]=o}clear(){this.#e.length=0,this.#i.setDrawRange(0,0)}dispose(){this.#i.dispose(),this.mesh.material.dispose()}},Ng=new R;function Pg(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;Ng.copy(t),Ng[r]=0,Ng.normalize();let l=.5*o/(o+s),u=1-Ng.angleTo(e)/c;return Math.sign(Ng[n])===1?u*l:s/(o+s)+l+l*(1-u)}var Fg=class e extends Gi{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new R,c=new R,l=new R(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new R,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=Pg(m,c,`z`,`y`,i,n),f[a+1]=1-Pg(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-Pg(m,c,`z`,`y`,i,n),f[a+1]=1-Pg(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-Pg(m,c,`x`,`z`,i,e),f[a+1]=Pg(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-Pg(m,c,`x`,`z`,i,e),f[a+1]=1-Pg(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-Pg(m,c,`x`,`y`,i,e),f[a+1]=1-Pg(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=Pg(m,c,`x`,`y`,i,e),f[a+1]=1-Pg(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},Ig=.06;function Lg(e,t,n){let r=e.index?e.toNonIndexed():e;r.deleteAttribute(`uv`);let i=f(t),a=r.getAttribute(`position`),o=new Map;for(let e=0;e<a.count;e++){let t=a.getX(e),r=a.getY(e),s=a.getZ(e),c=`${t.toFixed(4)},${r.toFixed(4)},${s.toFixed(4)}`,l=o.get(c);l||(l=[(i.float()-.5)*n,(i.float()-.5)*n,(i.float()-.5)*n],o.set(c,l)),a.setXYZ(e,t+l[0],r+l[1],s+l[2])}return r.computeVertexNormals(),r}function Rg(e,t){let[n,r,i]=e,a=.5,o=new $i([new L(.001,-.5),new L(a*.72,-.36),new L(a,-.05),new L(a*.8,.34),new L(.001,.5)],t);return o.scale(n,r,i),o}function zg(e,t){let n=new Yi(.5,.62,t,1,!0).toNonIndexed();n.translate(0,.19,0);let r=new Yi(.5,.38,t,1,!0).toNonIndexed();r.rotateX(Math.PI),r.translate(0,-.31,0);for(let e of[n,r])e.deleteAttribute(`uv`);let i=wm([n,r]);return i.scale(e[0],e[1],e[2]),i.computeVertexNormals(),i}function Bg(e,t){let n=new Ji(.5,.56,1,t,1,!0,Math.PI*.6,Math.PI*.8);n.deleteAttribute(`uv`),n.translate(0,0,.155);let r=n.toNonIndexed(),i=r.clone(),a=i.getAttribute(`position`);for(let e=0;e<a.count;e+=3){let t=a.getX(e+1),n=a.getY(e+1),r=a.getZ(e+1);a.setXYZ(e+1,a.getX(e+2),a.getY(e+2),a.getZ(e+2)),a.setXYZ(e+2,t,n,r)}let o=wm([r,i]);return o.scale(e[0]/.95,e[1],e[2]/.35),o.computeVertexNormals(),o}function Vg(e,t,n){let r=Math.min(t[0],t[1],t[2])*.18;switch(e){case`capsule`:return Lg(Rg(t,6),n,r);case`box`:return Lg(Math.min(...t)<Ig?new Gi(t[0],t[1],t[2]):new Fg(t[0],t[1],t[2],1,Math.min(...t)*.2),n,r);case`gem`:return Lg(zg(t,5),n,r*.6);case`orb`:{let e=new Qi(.5,0);return e.scale(t[0],t[1],t[2]),Lg(e,n,r)}case`slab`:return Lg(new Fg(t[0],t[1],t[2],1,Math.min(...t)*.3),n,r*.4);case`cone`:{let e=new Yi(.5,1,5);return e.scale(t[0],t[1],t[2]),Lg(e,n,r)}case`shell`:return Bg(t,5)}}function Hg(e,t){let[n,r,i]=t;switch(e){case`capsule`:{let e=.5,t=new Ki(e*.9,1-e*1.8,2,8);return t.scale(n,r,i),t}case`box`:return Math.min(n,r,i)<Ig?new Gi(n,r,i):new Fg(n,r,i,1,Math.min(n,r,i)*.3);case`gem`:{let e=new ea(.5,0);return e.scale(n,r,i),e}case`orb`:{let e=new ra(.5,10,8);return e.scale(n,r,i),e}case`slab`:return new Fg(n,r,i,1,Math.min(n,r,i)*.45);case`cone`:{let e=new Yi(.5,1,8);return e.scale(n,r,i),e}case`shell`:return Bg(t,8)}}var Ug=new R,Wg=new Bt,Gg=new R,Kg=new B,qg=class{mesh;chunks=[];constructor(e,t,n){this.mesh=new Si(e,t,256),this.mesh.instanceMatrix.setUsage(vt),this.mesh.setColorAt(0,new V(1,1,1)),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=n}},Jg=class{#e;constructor(){let e=Lg(new Zi(.5,0),11,.22),t=new ea(.5,0);t.scale(.7,1.3,.7);let n=new ea(.5,0);n.scale(.45,1.4,.45),this.#e={rock:new qg(e,new ha({roughness:.9,metalness:.05,flatShading:!0}),0),ice:new qg(t,new ha({roughness:.2,metalness:.1,flatShading:!0,emissive:new V(`#2a5a90`),emissiveIntensity:.6}),0),glow:new qg(n,new U,0)}}get meshes(){return Object.values(this.#e).map(e=>e.mesh)}get live(){let e=0;for(let t of Object.values(this.#e))e+=t.chunks.length;return e}liveOf(e){return this.#e[e].chunks.length}add(e,t){let n=this.#e[t.kind];n.chunks.length>=256&&n.chunks.shift(),n.chunks.push({...t,birth:e+(t.delay??0)})}update(e){for(let t of Object.values(this.#e)){let n=0,r=t.chunks;for(let t=r.length-1;t>=0;t--){let n=r[t];n&&e-n.birth>=n.life&&r.splice(t,1)}for(let i of r){let r=e-i.birth;if(r<0)continue;let a=r/60,o=i.gravity??-9.8,s=i.size*.35,c=i.y+i.vy*a+.5*o*a*a,l=a;if(c<s){c=s;let e=Yg(i.y-s,i.vy,o);l=e+Math.min(a-e,.25)*.5}Ug.set(i.x+i.vx*l,c,i.z+i.vz*l);let u=c<=s?Math.min(a,Yg(i.y-s,i.vy,o)):a;Wg.setFromAxisAngle(i.axis,i.spin*u);let d=r/i.life,f=d<.75?1:Math.max(0,1-(d-.75)/.25);Gg.setScalar(i.size*f),Kg.compose(Ug,Wg,Gg),t.mesh.setMatrixAt(n,Kg),t.mesh.setColorAt(n,i.color),n++}t.mesh.count=n,t.mesh.instanceMatrix.needsUpdate=!0,t.mesh.instanceColor&&(t.mesh.instanceColor.needsUpdate=!0)}}clear(){for(let e of Object.values(this.#e))e.chunks.length=0,e.mesh.count=0}dispose(){for(let e of Object.values(this.#e))e.mesh.geometry.dispose(),e.mesh.material.dispose()}};function Yg(e,t,n){if(e<=0&&t<=0)return 0;let r=t*t-2*n*e;return(-t-Math.sqrt(Math.max(0,r)))/n}function Xg(e,t,n,r){let i=(e%n+n)%n,a=(t%n+n)%n;return v([i,a,r])/4294967296}var Zg=e=>e*e*(3-2*e);function Qg(e,t,n){let r=0,i=0,a=1;for(let o=0;o<4;o++){let s=4<<o,c=e/n*s,l=t/n*s,u=Math.floor(c),d=Math.floor(l),f=Zg(c-u),p=Zg(l-d),m=Xg(u,d,s,o),h=Xg(u+1,d,s,o),g=Xg(u,d+1,s,o),_=Xg(u+1,d+1,s,o),v=m+(h-m)*f,y=g+(_-g)*f;r+=(v+(y-v)*p)*a,i+=a,a*=.5}return r/i}function $g(e=64){let t=new Uint8Array(e*e);for(let n=0;n<e;n++)for(let r=0;r<e;r++)t[n*e+r]=Math.round(Qg(r,n,e)*255);let n=new pi(t,e,e,be,re);return n.wrapS=T,n.wrapT=T,n.magFilter=A,n.minFilter=A,n.needsUpdate=!0,n}var e_=32,t_=65536,n_=`
uniform float uTime;
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

void main() {
  float age = mod(uTime - aStart.w, ${t_.toFixed(1)});
  float life = aVel.w;
  if (age > ${(t_/2).toFixed(1)} || age >= life || life <= 0.0) {
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
}
`,r_=e=>`
uniform sampler2D uNoise;
varying vec2 vQ;
varying vec4 vColor;
varying float vShape;
varying float vSeed;
varying float vPhase;
${uh}
void main() {
  float cover = shapeAlpha(vShape, vQ, vSeed, vPhase) * vColor.a;
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
`,i_=class{mesh;capacity;#e;#t;#n;#r;#i={value:0};#a=0;#o=0;#s=0;#c=0;constructor(e,t,n,r){this.capacity=e,this.#e=new Float32Array(e*e_),this.#t=new wo(this.#e,e_,1);let i=new io;i.setAttribute(`position`,new Tr(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),i.setIndex([0,1,2,0,2,3]),[`aStart`,`aVel`,`aAcc`,`aSwirl`,`aSize`,`aColor`,`aColor2`,`aShape`].forEach((e,t)=>{i.setAttribute(e,new Hr(this.#t,4,t*4))}),i.instanceCount=0,this.#n=i;let a=t===`multiply`;this.#r=new pa({uniforms:{uTime:this.#i,uNoise:{value:n}},vertexShader:n_,fragmentShader:r_(a),transparent:!0,depthWrite:!1,side:2,blending:a?4:2,premultipliedAlpha:a}),this.mesh=new W(i,this.#r),this.mesh.frustumCulled=!1,this.mesh.renderOrder=r}emit(e,t){let n=this.#a;this.#a=(n+1)%this.capacity,this.#o<this.capacity&&this.#o++,this.#c===0&&(this.#s=n),this.#c=Math.min(this.capacity,this.#c+1);let r=this.#e,i=n*e_,a=t.color2??t.color,o=t.alpha??1;r[i]=t.x,r[i+1]=t.y,r[i+2]=t.z,r[i+3]=((e+(t.delay??0))%t_+t_)%t_,r[i+4]=t.vx??0,r[i+5]=t.vy??0,r[i+6]=t.vz??0,r[i+7]=t.life,r[i+8]=t.ax??0,r[i+9]=t.ay??0,r[i+10]=t.az??0,r[i+11]=t.drag??0,r[i+12]=t.cx??0,r[i+13]=t.cz??0,r[i+14]=t.swirl??0,r[i+15]=t.pull??0,r[i+16]=t.size,r[i+17]=t.grow??1,r[i+18]=t.spin??0,r[i+19]=t.stretch??0,r[i+20]=t.color.r,r[i+21]=t.color.g,r[i+22]=t.color.b,r[i+23]=o,r[i+24]=a.r,r[i+25]=a.g,r[i+26]=a.b,r[i+27]=t.alpha2??o,r[i+28]=t.shape,r[i+29]=t.seed??0,r[i+30]=t.angle??0,r[i+31]=0}read(e){return this.#e.subarray(e*e_,(e+1)*e_)}get next(){return this.#a}get used(){return this.#o}live(e){let t=(e%t_+t_)%t_,n=this.#e,r=0;for(let e=0;e<this.#o;e++){let i=e*e_,a=((t-(n[i+3]??0))%t_+t_)%t_;a<=32768&&a<(n[i+7]??0)&&r++}return r}update(e){if(this.#i.value=(e%t_+t_)%t_,this.#n.instanceCount=this.#o,this.#c===0)return;let t=this.#t;t.clearUpdateRanges();let n=this.#s+this.#c;n<=this.capacity?t.addUpdateRange(this.#s*e_,this.#c*e_):(t.addUpdateRange(this.#s*e_,(this.capacity-this.#s)*e_),t.addUpdateRange(0,(n-this.capacity)*e_)),t.needsUpdate=!0,this.#c=0}clear(){this.#e.fill(0),this.#a=0,this.#o=0,this.#c=0,this.#t.clearUpdateRanges(),this.#t.needsUpdate=!0,this.#n.instanceCount=0}dispose(){this.#n.dispose(),this.#r.dispose()}},a_=`
attribute vec4 aPos;    // x y z size
attribute vec4 aColor;  // rgb alpha
attribute vec4 aShape;  // shape seed phase angle
attribute vec4 aMode;   // flat wide - -
varying vec2 vQ;
varying vec4 vColor;
varying float vShape;
varying float vSeed;
varying float vPhase;
void main() {
  vec2 corner = position.xy;
  float c = cos(aShape.w);
  float s = sin(aShape.w);
  vec2 turned = vec2(c * corner.x * aMode.y - s * corner.y, s * corner.x * aMode.y + c * corner.y);
  vec4 mv;
  if (aMode.x > 0.5) {
    vec3 p = aPos.xyz + vec3(turned.x, 0.0, turned.y) * aPos.w;
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
}
`,o_=e=>`
uniform sampler2D uNoise;
varying vec2 vQ;
varying vec4 vColor;
varying float vShape;
varying float vSeed;
varying float vPhase;
${uh}
void main() {
  float cover = shapeAlpha(vShape, vQ, vSeed, vPhase) * vColor.a;
  if (cover <= 0.002) discard;
  ${e?`gl_FragColor = vec4(vColor.rgb * cover, cover);`:`gl_FragColor = vec4(vColor.rgb, cover);`}
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,s_=class{mesh;#e;#t=0;#n;#r;#i;#a;#o;constructor(e,t,n,r){this.#e=e;let i=new io;i.setAttribute(`position`,new Tr(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),i.setIndex([0,1,2,0,2,3]),this.#n=i,this.#r=this.#s(`aPos`,e),this.#i=this.#s(`aColor`,e),this.#a=this.#s(`aShape`,e),this.#o=this.#s(`aMode`,e),i.instanceCount=0;let a=t===`multiply`,o=new pa({uniforms:{uNoise:{value:n}},vertexShader:a_,fragmentShader:o_(a),transparent:!0,depthWrite:!1,side:2,blending:a?4:2,premultipliedAlpha:a});this.mesh=new W(i,o),this.mesh.frustumCulled=!1,this.mesh.renderOrder=r}#s(e,t){let n=new mi(new Float32Array(t*4),4);return n.setUsage(vt),this.#n.setAttribute(e,n),n}begin(){this.#t=0}add(e){this.#t>=this.#e&&this.#c();let t=this.#t++;this.#r.setXYZW(t,e.x,e.y,e.z,e.size),this.#i.setXYZW(t,e.r,e.g,e.b,e.alpha),this.#a.setXYZW(t,e.shape,e.seed??0,e.phase??0,e.angle??0),this.#o.setXYZW(t,+!!e.flat,e.wide??1,0,0)}end(){this.#n.instanceCount=this.#t;for(let e of[this.#r,this.#i,this.#a,this.#o])e.clearUpdateRanges(),this.#t>0&&e.addUpdateRange(0,this.#t*4),e.needsUpdate=!0}get count(){return this.#t}#c(){let e=this.#e*2,t=(t,n)=>{let r=new mi(new Float32Array(e*4),4);return r.setUsage(vt),r.array.set(t.array),this.#n.setAttribute(n,r),r};this.#r=t(this.#r,`aPos`),this.#i=t(this.#i,`aColor`),this.#a=t(this.#a,`aShape`),this.#o=t(this.#o,`aMode`),this.#e=e}dispose(){this.#n.dispose(),this.mesh.material.dispose()}},c_=96,l_={sparks:8192,ambience:4096,shade:3072},u_=class{group=new Ln;noise;sparks;ambience;shade;ground;groundShade;over;bolts;chunks;#e=[];constructor(){this.noise=$g(),this.groundShade=new s_(32,`multiply`,this.noise,-3),this.ground=new s_(64,`add`,this.noise,-2),this.shade=new i_(l_.shade,`multiply`,this.noise,24),this.sparks=new i_(l_.sparks,`add`,this.noise,25),this.ambience=new i_(l_.ambience,`add`,this.noise,25),this.over=new s_(64,`add`,this.noise,26),this.bolts=new Mg(27),this.chunks=new Jg,this.group.add(this.groundShade.mesh,this.ground.mesh,this.shade.mesh,this.sparks.mesh,this.ambience.mesh,this.over.mesh,this.bolts.mesh,...this.chunks.meshes)}static rng(e,...t){return f(v([e,...t]))}begin(){this.groundShade.begin(),this.ground.begin(),this.over.begin()}mark(e,t){this.#e.length>=c_&&this.#e.shift(),this.#e.push({...t,birth:e+(t.delay??0)})}end(e,t){for(let t=this.#e.length-1;t>=0;t--){let n=this.#e[t];n&&e-n.birth>=n.life&&this.#e.splice(t,1)}for(let t of this.#e){let n=e-t.birth;if(n<0)continue;let r=n/t.life,i=n/60,a=1-(1-r)*(1-r);(t.layer===`ground`?this.ground:t.layer===`over`?this.over:this.groundShade).add({...t,size:t.size+((t.size2??t.size)-t.size)*a,alpha:(t.alpha+((t.alpha2??0)-t.alpha)*r)*Math.min(1,n/2),angle:(t.angle??0)+(t.spin??0)*i,phase:(t.phase??0)+(t.phaseRate??0)*i})}this.groundShade.end(),this.ground.end(),this.over.end(),this.shade.update(e),this.sparks.update(e),this.ambience.update(e),this.bolts.update(e,t),this.chunks.update(e)}get load(){return{particles:this.sparks.used+this.ambience.used+this.shade.used,bolts:this.bolts.live,chunks:this.chunks.live,quads:this.ground.count+this.groundShade.count+this.over.count}}clear(){this.#e.length=0,this.sparks.clear(),this.ambience.clear(),this.shade.clear(),this.bolts.clear(),this.chunks.clear()}dispose(){this.sparks.dispose(),this.ambience.dispose(),this.shade.dispose(),this.ground.dispose(),this.groundShade.dispose(),this.over.dispose(),this.bolts.dispose(),this.chunks.dispose(),this.noise.dispose()}},d_=.9,f_=3,p_=14,m_=X(`#ffe08a`,2.4),h_=X(`#ff9a3a`,1.7),g_=X(`#d0401a`,.7),__=X(`#3a2a24`),v_=X(`#dff8ff`,1.8),y_=X(`#5ab8ff`,1),b_=X(`#9fd8ff`,.3),x_=X(`#fff4c8`,2.2),S_=X(`#ffcf6a`,1.2),C_=X(`#ffd0ef`,2.2),w_=X(`#ff4fc8`,1.4),T_=X(`#f0dcff`,1.8),E_=X(`#a45cff`,1.2),D_=X(`#e8fff6`,1.5),O_=X(`#7fe0b0`,1),k_=X(`#a6e88a`,1),A_=X(`#6a5644`),j_=X(`#e6fbff`,2.6),M_=X(`#4ae0ff`,1.6),N_=X(`#e8d0ff`,2.2),P_=X(`#a45cff`,1.4),F_=X(`#ff5a6a`,1.8),I_=X(`#ffe0e4`,2);function L_(e,t,n,r){for(let i=1;i<=n;i++){let a=i/n;r({x:e.x+(t.x-e.x)*a,y:e.y+(t.y-e.y)*a,z:e.z+(t.z-e.z)*a},a)}}var R_={"fx.fireball":(e,t,n,r,i,a,o)=>{L_(r,i,2,(r,i)=>{e.sparks.emit(t,{x:r.x+Z(n,-.05,.05),y:r.y+Z(n,-.04,.04),z:r.z+Z(n,-.05,.05),vx:-a*1.6+Z(n,-.3,.3),vy:Z(n,.5,1),vz:-o*1.6+Z(n,-.3,.3),drag:2,delay:i,life:Z(n,8,12),size:Z(n,.12,.19),grow:.3,color:h_,color2:g_,shape:Y.flame,seed:n.float()})}),e.sparks.emit(t,{...i,vx:Z(n,-1.5,1.5)-a,vy:Z(n,.5,2),vz:Z(n,-1.5,1.5)-o,ay:1,drag:1.5,delay:1,life:Z(n,16,26),size:.028,color:m_,color2:g_,shape:Y.spark,stretch:1}),t%2==0&&e.shade.emit(t,{...r,vy:.5,delay:1,life:30,size:.16,grow:2.2,color:__,alpha:.3,shape:Y.smoke,seed:n.float()})},"fx.ice":(e,t,n,r,i)=>{L_(r,i,2,(r,i)=>{e.sparks.emit(t,{x:r.x+Z(n,-.08,.08),y:r.y+Z(n,-.08,.08),z:r.z+Z(n,-.08,.08),vx:Z(n,-.3,.3),vy:Z(n,-.2,.3),vz:Z(n,-.3,.3),delay:i,life:Z(n,10,16),size:Z(n,.03,.05),color:v_,color2:y_,shape:n.float()<.5?Y.flake:Y.mote,spin:8})}),t%2==0&&e.ambience.emit(t,{...r,delay:1,life:26,size:.14,grow:2.4,color:b_,alpha:.6,shape:Y.smoke,seed:n.float()})},"fx.blade":(e,t,n,r,i)=>{L_(r,i,3,(r,i)=>{e.sparks.emit(t,{...r,delay:i,life:9,size:Z(n,.08,.11),grow:.3,color:x_,color2:S_,shape:Y.glow})})},"fx.bolt":(e,t,n,r,i)=>{L_(r,i,2,(r,i)=>{e.sparks.emit(t,{...r,delay:i,life:8,size:Z(n,.06,.08),grow:.4,color:C_,color2:w_,shape:Y.glow})})},"fx.shard":(e,t,n,r,i)=>{L_(r,i,2,(r,i)=>{e.sparks.emit(t,{x:r.x+Z(n,-.08,.08),y:r.y+Z(n,-.08,.08),z:r.z+Z(n,-.08,.08),vy:Z(n,-.4,.2),delay:i,life:Z(n,10,14),size:Z(n,.035,.055),color:T_,color2:E_,shape:Y.flake,spin:10})})}};function z_(e,t,n,r,i){$(e,t,r,X(`#ffb050`,1.6),.55+.25*i,9),_h(e,t,r,X(`#ff9a3a`,1.1),i+.4,16);for(let a=0;a<12;a++){let a=Q(n,.25),o=Z(n,1.5,3.2)*(.6+.4*i);e.sparks.emit(t,{x:r.x+a.x*.2,y:r.y+a.y*.1,z:r.z+a.z*.2,vx:a.x*o,vy:Math.abs(a.y)*o+Z(n,1.2,2.4),vz:a.z*o,drag:2.5,life:Z(n,14,24),size:Z(n,.2,.32),grow:.4,color:m_,color2:g_,shape:Y.flame,seed:n.float()})}for(let i=0;i<16;i++){let i=Q(n,.2),a=Z(n,3.5,7);e.sparks.emit(t,{...r,vx:i.x*a,vy:Math.abs(i.y)*a+2,vz:i.z*a,ay:-4,drag:1.8,life:Z(n,20,34),size:Z(n,.025,.04),color:m_,color2:g_,shape:Y.spark,stretch:1.4})}for(let i=0;i<3;i++)e.shade.emit(t,{x:r.x+Z(n,-.2,.2),y:r.y,z:r.z+Z(n,-.2,.2),vy:Z(n,.6,1),drag:1,delay:4+i,life:44,size:.3,grow:2.6,color:__,alpha:.4,shape:Y.smoke,seed:n.float()});e.mark(t,{layer:`groundShade`,x:r.x,y:.012,z:r.z,size:.5+.2*i,alpha:.5,life:100,r:.45,g:.34,b:.28,shape:Y.scorch,seed:n.float(),flat:!0})}function B_(e,t,n,r,i,a){$(e,t,r,X(`#c8f0ff`,1.4),.5,7),vh(e,t,r,X(`#bfe8ff`,1),.9,10);for(let o=0;o<6;o++){let o=Q(n,.3),s=Z(n,2,4);e.chunks.add(t,{kind:`ice`,...r,vx:(o.x+i*.8)*s,vy:Math.abs(o.y)*s+Z(n,1.5,3),vz:(o.z+a*.8)*s,life:Z(n,34,50),size:Z(n,.06,.13),spin:Z(n,8,16),axis:Q(n,0),color:X(`#cfefff`,1.1)})}for(let o=0;o<14;o++){let o=Q(n,.2),s=Z(n,2,5);e.sparks.emit(t,{...r,vx:(o.x+i*.5)*s,vy:o.y*s+1,vz:(o.z+a*.5)*s,ay:-6,drag:2,life:Z(n,14,24),size:Z(n,.03,.05),color:v_,color2:y_,shape:Y.flake,spin:12})}e.ambience.emit(t,{...r,life:34,size:.35,grow:2,color:b_,alpha:.7,shape:Y.smoke,seed:n.float()})}function V_(e,t,n,r,i){$(e,t,r,N_,.45+.35*i,8),_h(e,t,r,P_,i,14),vh(e,t,r,X(`#c8a0ff`,1),i*.9,10);for(let a=0;a<16;a++){let a=Q(n,.15),o=Z(n,4,8)*(.5+.3*i);e.sparks.emit(t,{...r,vx:a.x*o,vy:a.y*o+1,vz:a.z*o,drag:3.5,life:Z(n,10,18),size:.035,color:N_,color2:P_,shape:Y.spark,stretch:2})}for(let i=0;i<4;i++){let i=Q(n,.4),a=Z(n,2,4);e.chunks.add(t,{kind:`glow`,...r,vx:i.x*a,vy:Math.abs(i.y)*a+2,vz:i.z*a,life:Z(n,30,44),size:Z(n,.05,.09),spin:12,axis:Q(n,0),color:X(`#c8a0ff`,1.6),gravity:-6})}}function H_(e,t,n,r,i,a,o){let s=o===`fx.ice`?v_:o===`fx.blade`?x_:m_,c=o===`fx.ice`?y_:o===`fx.blade`?S_:h_;$(e,t,r,c,.35,6);for(let o=0;o<6;o++){let o=Q(n,.3);e.sparks.emit(t,{...r,vx:i*2.5+o.x*1.5,vy:o.y*1.5+.5,vz:a*2.5+o.z*1.5,drag:3,life:Z(n,8,14),size:.03,color:s,color2:c,shape:Y.spark,stretch:1})}}var U_=class{#e=new Map;#t=null;#n=()=>void 0;attach(e){this.#n=e}observe(e,t,n){let r=null,i=new Map;for(let a of t.projectiles){let t=this.#n(a.visual)??``,o=this.#e.get(a.id),s={x:a.x,y:d_,z:a.y};o?R_[t]?.(e,n,u_.rng(n,40,a.id),{x:o.x,y:d_,z:o.y},s,a.dx,a.dy):a.team===`player`&&t!==`fx.blade`&&(r??={dx:a.dx,dy:a.dy},H_(e,n,u_.rng(n,41,a.id),s,a.dx,a.dy,t)),i.set(a.id,{x:a.x,y:a.y,gen:t})}return this.#e=i,this.#r(e,t,n),this.#i(e,t,n),r}#r(e,t,n){let r=t.areas[0];if(!r)return;let i=t.player,a=u_.rng(n,42,r.id),o=2*Math.PI*f_,s=Math.min(1,(r.frames-r.frame)/10);if(!(s<=0)){for(let t=0;t<2;t++){let t=a.float()*Math.PI*2,c=Z(a,.6,r.radius);e.sparks.emit(n,{x:i.x+Math.cos(t)*c,y:Z(a,.4,1.2),z:i.y+Math.sin(t)*c,cx:i.x,cz:i.y,swirl:o*.8,pull:-.6,life:Z(a,8,12),size:.05,color:D_,color2:O_,alpha:s,shape:Y.spark,stretch:1.4})}if(n%2==0){let t=a.float()*Math.PI*2,s=Z(a,1,r.radius);e.sparks.emit(n,{x:i.x+Math.cos(t)*s,y:Z(a,.2,.9),z:i.y+Math.sin(t)*s,vy:Z(a,.8,1.6),cx:i.x,cz:i.y,swirl:o*.6,pull:-.8,life:Z(a,18,26),size:Z(a,.06,.09),color:k_,shape:Y.feather,spin:Z(a,-10,10),angle:a.float()*6})}if(n%3==0){let t=a.float()*Math.PI*2,s=r.radius*Z(a,.7,1);e.shade.emit(n,{x:i.x+Math.cos(t)*s,y:.12,z:i.y+Math.sin(t)*s,cx:i.x,cz:i.y,swirl:o*.3,life:26,size:.22,grow:2,color:A_,alpha:.35,shape:Y.smoke,seed:a.float()})}}}#i(e,t,n){let r=t.player,i=r.dash,a=this.#t;if(!i){a&&!a.end&&(a.end={x:r.x,y:r.y,frame:n});return}(!a||a.id!==i.id)&&(this.#t={id:i.id,x0:i.x0,y0:i.y0,dx:i.dx,dy:i.dy,width:i.width,end:null});let o=u_.rng(n,43,i.id);for(let t=0;t<3;t++){let t=Q(o,.2);e.sparks.emit(n,{x:r.x+Z(o,-.2,.2),y:Z(o,.4,1.3),z:r.y+Z(o,-.2,.2),vx:t.x*2-i.dx*3,vy:t.y*2,vz:t.z*2-i.dy*3,drag:3,life:Z(o,8,14),size:.03,color:j_,color2:M_,shape:Y.spark,stretch:2})}let s=Math.min(1.6,i.step*2);e.bolts.add(n,{from:new R(r.x-i.dx*s,.5+o.float()*.6,r.y-i.dy*s),to:new R(r.x,.6+o.float()*.6,r.y),life:4,width:.02,glow:M_,core:j_,jag:.3,branches:0,seed:o.u32()})}draw(e,t,n,r){let i=t.areas[0];if(i){let a=W_(i.frame,n-(t.frame-1)),o=Math.min(1,(i.frame+1)/4)*Math.min(1,(i.frames-i.frame)/10);for(let t=0;t<3;t++){let n=i.radius*(.5+.17*t),s=a+t*2*Math.PI/3,c=1.9;for(let i=0;i<9;i++){let a=s-c*i/9,l=1-i/9;e.over.add({x:r.x+Math.cos(a)*n,y:.75+.12*t,z:r.y+Math.sin(a)*n,size:n*c/9*.75,wide:.34,r:D_.r*l,g:D_.g*l,b:D_.b*l,alpha:.85*o*l,shape:Y.streak,angle:a,flat:!0})}}e.ground.add({x:r.x,y:.03,z:r.y,size:i.radius,r:O_.r*.5,g:O_.g*.5,b:O_.b*.5,alpha:.25*o,shape:Y.shock,flat:!0})}let a=this.#t;if(a){let t=a.end??{x:r.x,y:r.y,frame:n},i=a.end?1-(n-a.end.frame)/p_:1;if(i<=0)this.#t=null;else{let n=t.x-a.x0,r=t.y-a.y0,o=Math.sqrt(n*n+r*r);if(o>.05){let s=Math.atan2(n,r),c={x:(a.x0+t.x)/2,z:(a.y0+t.y)/2};for(let[t,n,r]of[[a.width*.9,M_,.3],[a.width*.22,j_,.55]])e.ground.add({x:c.x,y:.04,z:c.z,size:o/2,wide:t/o,r:n.r,g:n.g,b:n.b,alpha:r*i,shape:Y.streak,angle:-s,flat:!0})}}}for(let n of t.lines){let t=n.length*Math.min(1,(n.frame+1)/Math.max(1,n.frames)),i=Math.atan2(n.dx,n.dy);e.over.add({x:r.x+n.dx*t/2,y:.9,z:r.y+n.dy*t/2,size:t/2,wide:n.width/Math.max(.1,t),r:x_.r,g:x_.g,b:x_.b,alpha:.8,shape:Y.streak,angle:-i,flat:!0})}}cue(e,t,n){let r=u_.rng(n,44,Math.round(t.x*100),Math.round(t.y*100)),i={x:t.x,y:.75,z:t.y};switch(t.cue){case`core:fire_hit`:return z_(e,n,r,i,.8),wh.hit(e,n,r,i,t.dx,t.dy,1.2),!0;case`core:ice_hit`:return B_(e,n,r,i,t.dx,t.dy),!0;case`core:explode`:return V_(e,n,r,i,t.strength),!0;case`core:fireball`:case`core:ice_shard`:return!0;case`core:whirlwind`:return _h(e,n,i,X(`#7fe0b0`,.6),2.6,14),vh(e,n,{...i,y:.9},X(`#c8f8e0`,.8),2.2,10),!0;case`core:pierce`:return $(e,n,{x:t.x+t.dx*.6,y:.95,z:t.y+t.dy*.6},M_,.3,6),!0;case`core:enemy_shot`:{let i={x:t.x+t.dx*.55,y:.7,z:t.y+t.dy*.55};$(e,n,i,w_,.4,6),vh(e,n,i,X(`#ff7ae6`,.9),.6,8);for(let a=0;a<6;a++){let a=Q(r,.3);e.sparks.emit(n,{...i,vx:t.dx*4+a.x*1.5,vy:a.y*1.5,vz:t.dy*4+a.z*1.5,drag:4,life:Z(r,6,10),size:.03,color:C_,color2:w_,shape:Y.spark,stretch:1.5})}return!0}case`core:enemy_dash`:for(let i=0;i<5;i++){let a=Z(r,-.4,.4),o={x:t.x-t.dx*.4-t.dy*a,y:.15,z:t.y-t.dy*.4+t.dx*a,vx:-t.dx*Z(r,1,2.5)+Z(r,-.5,.5),vy:Z(r,.3,.8),vz:-t.dy*Z(r,1,2.5)+Z(r,-.5,.5),drag:2,life:Z(r,26,38),size:.22,grow:2.2,shape:Y.smoke,seed:r.float()};e.shade.emit(n,{...o,color:A_,alpha:.45}),i<3&&e.ambience.emit(n,{...o,color:X(`#c8a070`,.35),alpha:.4})}return!0;case`core:hurt`:{let i={x:t.x,y:.95,z:t.y};$(e,n,i,F_,.55,7);for(let a=0;a<12;a++){let a=Q(r,.2),o=Z(r,3,6);e.sparks.emit(n,{...i,vx:(a.x+t.dx)*o,vy:a.y*o+1,vz:(a.z+t.dy)*o,ay:-6,drag:2.5,life:Z(r,10,16),size:.03,color:I_,color2:F_,shape:Y.spark,stretch:1.5})}return!0}default:return!1}}reset(){this.#e.clear(),this.#t=null}};function W_(e,t){return 2*Math.PI*f_*(e-1+t)/60}var G_=X(`#e6fbff`,2.6),K_=X(`#4ae0ff`,1.6),q_=X(`#ffb060`,1.6),J_=X(`#e8c888`,1.1),Y_=X(`#6a5644`),X_=X(`#dff8ff`,1.8),Z_=X(`#5ab8ff`,1.1),Q_=X(`#9fd8ff`,.3),$_=X(`#ffe9a0`,2),ev=X(`#ffc84a`,1.3),tv=X(`#c8a0ff`,1.8),nv=X(`#7b52d6`,1.2),rv=X(`#ffd27a`,2.4),iv=X(`#ff5a1a`,1.4),av=X(`#f0dcff`,1.8),ov=X(`#a45cff`,1.3),sv=3.2;function cv(e,t,n,r,i,a){$(e,t,r,a,.45,8);for(let o=0;o<12;o++){let o=Q(n,.2),s=Z(n,.7,1.1);e.sparks.emit(t,{x:r.x+o.x*s,y:r.y+o.y*s*.6,z:r.z+o.z*s,vx:-o.x*s*3,vy:-o.y*s*1.8,vz:-o.z*s*3,drag:.5,life:Z(n,14,18),size:.04,color:i,color2:a,shape:Y.spark,stretch:1.4})}}function lv(e,t,n,r,i,a){for(let a=0;a<2;a++)e.bolts.add(t,{from:new R(r+Z(n,-.6,.6),7,i+Z(n,-.6,.6)),to:new R(r,.05,i),life:8,delay:a,width:.06,glow:K_,core:G_,jag:.12,branches:2,seed:n.u32()});$(e,t,{x:r,y:.6,z:i},X(`#9ff0ff`,2),1.1,8),_h(e,t,{x:r,z:i},K_,a+.4,14);for(let a=0;a<18;a++){let a=Q(n,.2),o=Z(n,3,7);e.sparks.emit(t,{x:r,y:.2,z:i,vx:a.x*o,vy:Math.abs(a.y)*o+2,vz:a.z*o,ay:-9,drag:2,life:Z(n,10,18),size:.03,color:G_,color2:K_,shape:Y.spark,stretch:2})}e.mark(t,{layer:`groundShade`,x:r,y:.012,z:i,size:a*.6,alpha:.6,life:90,r:.4,g:.42,b:.5,shape:Y.scorch,seed:n.float(),flat:!0})}function uv(e,t,n,r,i,a){e.mark(t,{layer:`ground`,x:r,y:.03,z:i,size:a*.8,size2:a,alpha:.9,life:40,r:ev.r*.7,g:ev.g*.7,b:ev.b*.7,shape:Y.runeRing,spin:2,phaseRate:1,flat:!0}),$(e,t,{x:r,y:.5,z:i},ev,.7,8);for(let o=0;o<4;o++){let s=o/4*Math.PI*2+n.float()*.4,c=a*.75;for(let n=0;n<6;n++)e.sparks.emit(t,{x:r+Math.cos(s)*c*(1-n*.08),y:.05,z:i+Math.sin(s)*c*(1-n*.08),vy:2.6,drag:3,delay:n,life:22,size:.06,color:$_,color2:ev,shape:Y.ring})}}var dv=class{#e=new Map;observe(e,t,n){let r=new Map(t.enemies.map(e=>[e.id,e])),i=new Set;for(let a of t.hazards??[]){if(!a.affix.endsWith(`:mortar`))continue;if(i.add(a.id),!this.#e.has(a.id)){let e=r.get(a.source);this.#e.set(a.id,{x:e?.x??a.x,y:e?.y??a.y})}let t=this.#t(a,1);if(t&&n%2==0){let r=u_.rng(n,60,a.id);e.shade.emit(n,{...t,vy:.3,life:24,size:.12,grow:2.2,color:Y_,alpha:.4,shape:Y.smoke,seed:r.float()}),e.sparks.emit(n,{...t,vx:Z(r,-.5,.5),vy:Z(r,0,1),vz:Z(r,-.5,.5),life:14,size:.03,color:q_,color2:iv,shape:Y.mote})}}for(let e of[...this.#e.keys()])i.has(e)||this.#e.delete(e);this.#n(e,t,n)}#t(e,t){let n=this.#e.get(e.id);if(!n)return null;let r=Math.min(1,Math.max(0,(e.frame-1+t)/Math.max(1,e.warn)));return{x:n.x+(e.x-n.x)*r,y:.8+4*sv*r*(1-r)-.6*r,z:n.y+(e.y-n.y)*r}}#n(e,t,n){let r=t.player;if(r.dead)return;let i=u_.rng(n,61);if(r.slow&&r.slow.frames>0&&n%3==0){let t=i.float()*Math.PI*2;e.ambience.emit(n,{x:r.x+Math.cos(t)*.35,y:Z(i,.05,.5),z:r.y+Math.sin(t)*.35,vy:Z(i,.2,.6),life:22,size:Z(i,.03,.05),color:X_,color2:Z_,shape:Y.flake,spin:6}),n%9==0&&e.ambience.emit(n,{x:r.x,y:.12,z:r.y,life:36,size:.3,grow:1.8,color:Q_,alpha:.6,shape:Y.smoke,seed:i.float()})}if((r.root??0)>0&&n%4==0){let t=i.float()*Math.PI*2;e.ambience.emit(n,{x:r.x+Math.cos(t)*.5,y:.1,z:r.y+Math.sin(t)*.5,vy:Z(i,.6,1.2),life:20,size:.04,color:$_,color2:ev,shape:Y.mote})}let a=r.pull;if(a&&a.frames>0){let o=t.enemies.find(e=>e.id===a.source);if(o){let t=o.x-r.x,a=o.y-r.y,s=Math.sqrt(t*t+a*a)||1;for(let o=0;o<2;o++){let o=i.float();e.sparks.emit(n,{x:r.x+t*o+Z(i,-.2,.2),y:Z(i,.3,1.1),z:r.y+a*o+Z(i,-.2,.2),vx:t/s*6,vz:a/s*6,life:10,size:.05,color:tv,color2:nv,shape:Y.spark,stretch:2})}}}}draw(e,t,n,r){let i=n-(t.frame-1);for(let n of t.hazards??[]){if(!n.affix.endsWith(`:mortar`))continue;let t=this.#t(n,i);t&&(e.over.add({...t,size:.2,r:q_.r,g:q_.g,b:q_.b,alpha:.9,shape:Y.glow}),e.over.add({...t,size:.09,r:rv.r,g:rv.g,b:rv.b,alpha:1,shape:Y.mote}))}let a=t.player;if(a.dead)return;if(a.slow&&a.slow.frames>0){let t=Math.min(1,a.slow.frames/20);e.ground.add({x:r.x,y:.03,z:r.y,size:.55,r:Z_.r*.5,g:Z_.g*.5,b:Z_.b*.5,alpha:.55*t,shape:Y.ripples,phase:n/60,flat:!0})}let o=a.root??0;if(o>0){let t=Math.min(1,o/12);e.ground.add({x:r.x,y:.03,z:r.y,size:.6,r:ev.r*.7,g:ev.g*.7,b:ev.b*.7,alpha:.8*t,shape:Y.runeRing,angle:n*.04,phase:n/60,flat:!0});for(let i=0;i<4;i++){let a=i/4*Math.PI*2+n*.01;e.over.add({x:r.x+Math.cos(a)*.45,y:.45,z:r.y+Math.sin(a)*.45,size:.42,wide:.14,r:$_.r,g:$_.g,b:$_.b,alpha:.75*t,shape:Y.streak,angle:i%2==0?.35:-.35})}}a.pull&&a.pull.frames>0&&e.ground.add({x:r.x,y:.03,z:r.y,size:.6,r:nv.r*.7,g:nv.g*.7,b:nv.b*.7,alpha:.6,shape:Y.shock,flat:!0})}cue(e,t,n){let r=u_.rng(n,62,Math.round(t.x*100),Math.round(t.y*100)),i={x:t.x,y:.8,z:t.y},a={x:t.x,y:.4,z:t.y},o=t.strength;switch(t.cue.slice(t.cue.indexOf(`:`)+1)){case`elite_thunder`:return cv(e,n,r,i,G_,K_),e.bolts.add(n,{from:new R(t.x,1.3,t.y),to:new R(t.x+Z(r,-.3,.3),2.6,t.y+Z(r,-.3,.3)),life:8,width:.03,glow:K_,core:G_,jag:.25,branches:1,seed:r.u32()}),!0;case`thunder_strike`:return lv(e,n,r,t.x,t.y,o),!0;case`elite_mortar`:{let i=Math.hypot(t.dx,t.dy)||1,a={x:t.x+t.dx/i*.5,y:1,z:t.y+t.dy/i*.5};$(e,n,a,q_,.45,7);for(let t=0;t<3;t++)e.shade.emit(n,{...a,vx:Z(r,-.4,.4),vy:Z(r,.6,1.2),vz:Z(r,-.4,.4),drag:1.2,life:34,size:.2,grow:2.4,color:Y_,alpha:.45,shape:Y.smoke,seed:r.float()});return!0}case`mortar_blast`:return qh.hit(e,n,r,a,0,0,1.6),$(e,n,a,q_,.7,8),_h(e,n,a,J_,o+.3,16),!0;case`elite_frost`:return cv(e,n,r,i,X_,Z_),_h(e,n,a,Z_,2,18),!0;case`frost_burst`:B_(e,n,r,a,0,0),_h(e,n,a,Z_,o+.2,16);for(let i=0;i<5;i++){let a=i/5*Math.PI*2+r.float();e.chunks.add(n,{kind:`ice`,x:t.x+Math.cos(a)*o*.4,y:.05,z:t.y+Math.sin(a)*o*.4,vx:Math.cos(a)*.8,vy:Z(r,3,4.5),vz:Math.sin(a)*.8,life:Z(r,34,46),size:Z(r,.1,.16),spin:6,axis:Q(r,0),color:X(`#cfefff`,1.1)})}return!0;case`elite_jailer`:return cv(e,n,r,i,$_,ev),!0;case`jailer_bind`:return uv(e,n,r,t.x,t.y,o),!0;case`elite_vortex`:return cv(e,n,r,i,tv,nv),!0;case`vortex_pull`:for(let i=0;i<16;i++){let i=Z(r,-1,1)*3;e.sparks.emit(n,{x:t.x+t.dx*i+Z(r,-.3,.3),y:Z(r,.3,1.2),z:t.y+t.dy*i+Z(r,-.3,.3),vx:-t.dx*Z(r,4,8),vz:-t.dy*Z(r,4,8),drag:1,life:Z(r,10,16),size:.05,color:tv,color2:nv,shape:Y.spark,stretch:2.5})}return!0;case`elite_molten`:for(let i=0;i<5;i++){let i=Q(r,.5);e.sparks.emit(n,{x:t.x+i.x*.4,y:.15,z:t.y+i.z*.4,vx:i.x,vy:Z(r,1,2),vz:i.z,ay:1,drag:1.5,life:Z(r,16,24),size:.03,color:rv,color2:iv,shape:Y.mote})}return!0;case`molten_burst`:z_(e,n,r,a,o);for(let t=0;t<8;t++){let t=Q(r,.2),i=Z(r,2,4);e.sparks.emit(n,{...a,vx:t.x*i,vy:Math.abs(t.y)*i+2.5,vz:t.z*i,ay:-9.8,life:Z(r,20,30),size:.05,color:rv,color2:iv,shape:Y.drop})}return!0;case`crystal_shard`:case`shard_burst`:V_(e,n,r,a,o);for(let i=0;i<5;i++){let a=i/5*Math.PI*2+r.float();e.chunks.add(n,{kind:`glow`,x:t.x+Math.cos(a)*.3,y:.05,z:t.y+Math.sin(a)*.3,vx:Math.cos(a)*1.2,vy:Z(r,3,5),vz:Math.sin(a)*1.2,life:Z(r,30,44),size:Z(r,.06,.11),spin:10,axis:Q(r,0),color:av,gravity:-8})}return!0;case`boss_slam`:{let i={x:t.x,y:.3,z:t.y};$(e,n,{...i,y:.8},X(`#e8d0ff`,2),1.4,10),_h(e,n,i,ov,o+.6,18),_h(e,n,i,J_,o*.8,24,3),qh.hit(e,n,r,i,0,0,2);for(let i=0;i<8;i++){let a=i/8*Math.PI*2+r.float()*.3;e.chunks.add(n,{kind:`glow`,x:t.x+Math.cos(a)*o*.8,y:.05,z:t.y+Math.sin(a)*o*.8,vx:Math.cos(a)*1.5,vy:Z(r,3.5,5.5),vz:Math.sin(a)*1.5,life:Z(r,34,48),size:Z(r,.1,.18),spin:8,axis:Q(r,0),color:av,gravity:-9.8})}return e.mark(n,{layer:`groundShade`,x:t.x,y:.015,z:t.y,size:o*.9,size2:o,alpha:.95,life:120,r:.35,g:.3,b:.4,shape:Y.cracks,seed:r.float(),flat:!0}),!0}case`boss_ring`:return $(e,n,{x:t.x,y:1.6,z:t.y},tv,1,9),vh(e,n,{x:t.x,y:1.6,z:t.y},ov,2.4,12),_h(e,n,{x:t.x,z:t.y},ov,3,16),!0;case`boss_phase`:return $(e,n,{x:t.x,y:1.5,z:t.y},tv,2,16),vh(e,n,{x:t.x,y:1.4,z:t.y},nv,4,18),_h(e,n,{x:t.x,z:t.y},ov,4.5,24),V_(e,n,r,{x:t.x,y:1.4,z:t.y},2.5),!0;case`boss_break`:$(e,n,{x:t.x,y:1.6,z:t.y},ev,1.4,12),vh(e,n,{x:t.x,y:1.6,z:t.y},$_,2.6,12);for(let i=0;i<10;i++){let i=Q(r,.3),a=Z(r,2.5,5);e.chunks.add(n,{kind:`glow`,x:t.x,y:1.7,z:t.y,vx:i.x*a,vy:Math.abs(i.y)*a+2,vz:i.z*a,life:Z(r,36,50),size:Z(r,.08,.15),spin:12,axis:Q(r,0),color:av,gravity:-9.8})}return!0;default:return!1}}reset(){this.#e.clear()}},fv=[`core:elite_thunder`,`core:thunder_strike`,`core:elite_mortar`,`core:mortar_blast`,`core:elite_frost`,`core:frost_burst`,`core:elite_jailer`,`core:jailer_bind`,`core:elite_vortex`,`core:vortex_pull`,`core:elite_molten`,`core:molten_burst`,`core:crystal_shard`,`core:shard_burst`,`core:boss_slam`,`core:boss_ring`,`core:boss_phase`,`core:boss_break`],pv=[`core:level_up`,`core:stone_found`,`core:unlock`,`core:weapon_equip`,`core:door_enter`,`core:crystal_shatter`],mv=36,hv=16,gv=56,_v={combat:`#6ad8ff`,elite:`#ff6ad5`,shop:`#ffd166`,boss:`#9a7dff`},vv=X(`#7fe8ff`,2.2),yv=X(`#ffe08a`,2.4),bv=X(`#ffd27a`,1.6),xv=X(`#ff9a3a`,1),Sv=X(`#fff6d8`,2.2),Cv=X(`#bff6ff`,2),wv=X(`#4ab8ff`,1.2),Tv=X(`#c8a8ff`,1.6),Ev=X(`#6a4ab8`,.8);function Dv(e){let t=e.build,r=t?.route;if(!r||t?.phase!==`doors`)return[];let i=r.doors.map(e=>({x:e.x,y:e.y,kind:e.plan.kind,size:1}));return r.shop&&i.push({x:r.shop.x,y:r.shop.y,kind:`shop`,size:n/c}),i}function Ov(e,t,n,r){let i=t*t;return{x:e.x+(n-e.x)*i,y:.6+.4*i+5.6*t*(1-t),z:e.y+(r-e.y)*i}}var kv=new B,Av=new Bt,jv=new R(0,1,0),Mv=new R,Nv=new R,Pv=class{#e=[];#t;#n=new V;#r=new V;#i=null;constructor(e){let t=new ea(.15,0);t.scale(.8,1.35,.8);let n=new U({color:16777215,blending:2});this.#t=new Si(t,n,hv),this.#t.instanceMatrix.setUsage(vt),this.#t.setColorAt(0,new V(1,1,1)),this.#t.count=0,this.#t.frustumCulled=!1,this.#t.renderOrder=19,this.#r.copy(vv),this.#n.copy(yv),e.add(this.#t)}observe(e,t,n,r){for(let e of n)e.type===`loot`&&this.#a({start:r,x:e.x,y:e.y,stone:!1});let i=t.player;for(let t of this.#e){let n=r-t.start;if(n<0||n>=mv)continue;let a=u_.rng(r,81,t.start,Math.round(t.x*100)),o=Ov(t,n/mv,i.x,i.y);if(e.sparks.emit(r,{...o,vx:Z(a,-.3,.3),vy:Z(a,-.2,.4),vz:Z(a,-.3,.3),life:14,size:t.stone?.06:.045,color:t.stone?yv:vv,shape:Y.star,spin:6}),n===35){let n={x:i.x,y:.9,z:i.y};$(e,r,n,t.stone?bv:Cv,t.stone?.7:.45,8),vh(e,r,n,t.stone?bv:Cv,t.stone?1.2:.8,10)}}for(let e=this.#e.length-1;e>=0;e--){let t=this.#e[e];t&&r-t.start>=mv&&this.#e.splice(e,1)}Dv(t).forEach((t,n)=>{let i=u_.rng(r,82,n),a=X(_v[t.kind],1.8),o=c*t.size;if(r%2==0){let n=i.float()*Math.PI*2;e.ambience.emit(r,{x:t.x+Math.cos(n)*o,y:.05,z:t.y+Math.sin(n)*o,vy:Z(i,.8,1.6),life:34,size:.045,color:a,alpha:.9,alpha2:0,shape:Y.mote})}r%6==0&&e.ambience.emit(r,{x:t.x+o*.5,y:.1,z:t.y,cx:t.x,cz:t.y,swirl:2.5,vy:Z(i,.9,1.3),life:50,size:.07,color:a,alpha:.9,alpha2:0,shape:Y.flake,spin:4})})}#a(e){this.#e.push(e),this.#e.length>hv&&this.#e.shift()}cue(e,t,n){let r=u_.rng(n,83,Math.round(t.x*100),Math.round(t.y*100));switch(t.cue){case`core:level_up`:return this.#o(e,n,r,t),!0;case`core:stone_found`:return this.#s(e,n,r,t),!0;case`core:unlock`:return this.#c(e,n,r,t),!0;case`core:weapon_equip`:return this.#l(e,n,r,t),!0;case`core:door_enter`:return this.#u(e,n,r,t),!0;case`core:crystal_shatter`:return this.#d(e,n,r,t),!0;default:return!1}}#o(e,t,n,r){this.#i=t;let i={x:r.x,y:.9,z:r.y};$(e,t,i,X(`#ffe8a0`,1.6),1.2,14),_h(e,t,i,X(`#ffd27a`,.9),3.8,24),_h(e,t,i,X(`#9ff0ff`,.8),2.6,26,8);for(let i=0;i<40;i++){let a=n.float()*Math.PI*2,o=Z(n,.3,.9);e.sparks.emit(t,{x:r.x+Math.cos(a)*o,y:Z(n,.1,.7),z:r.y+Math.sin(a)*o,cx:r.x,cz:r.y,swirl:i%2==0?3:-3,vy:Z(n,1.6,3.4),drag:.4,delay:n.int(0,12),life:Z(n,40,60),size:Z(n,.04,.07),color:i%3==0?Sv:bv,color2:xv,shape:i%4==0?Y.star:Y.mote,spin:3})}for(let i=0;i<12;i++){let a=i/12*Math.PI*2;e.sparks.emit(t,{x:r.x+Math.cos(a)*.6,y:.2,z:r.y+Math.sin(a)*.6,cx:r.x,cz:r.y,swirl:2,vy:Z(n,2.2,3.2),drag:.3,delay:i,life:50,size:.09,color:Cv,color2:bv,shape:Y.flake,spin:5})}}#s(e,t,n,r){let i={x:r.x,y:.8,z:r.y};$(e,t,i,X(`#fff0b0`,1.6),.9,12),vh(e,t,i,bv,1.5,14),_h(e,t,i,X(`#ffd27a`,.8),2.2,20);for(let r=0;r<18;r++){let a=Q(n,.2),o=Z(n,2,4.5);e.sparks.emit(t,{...i,vx:a.x*o,vy:Math.abs(a.y)*o+1.5,vz:a.z*o,ay:-3,drag:1.5,life:Z(n,24,36),size:.06,color:r%2==0?Sv:Cv,color2:bv,shape:Y.star,spin:6})}this.#a({start:t,x:r.x,y:r.y,stone:!0})}#c(e,t,n,r){e.mark(t,{layer:`ground`,x:r.x,y:.035,z:r.y,size:.5,size2:1.5,alpha:.85,life:40,r:.85,g:.7,b:.35,shape:Y.runeRing,spin:1.2,phaseRate:1,flat:!0}),$(e,t,{x:r.x,y:.9,z:r.y},X(`#ffe8a0`,1.2),.6,10);for(let i=0;i<24;i++){let a=n.float()*Math.PI*2,o=Z(n,.3,.8);e.sparks.emit(t,{x:r.x+Math.cos(a)*o,y:Z(n,.05,.4),z:r.y+Math.sin(a)*o,vy:Z(n,1.5,2.6),delay:n.int(0,8),life:Z(n,30,45),size:.05,color:i%2==0?bv:Cv,shape:Y.mote})}}#l(e,t,n,r){let i={x:r.x,y:1,z:r.y};$(e,t,i,Cv,.9,10),vh(e,t,i,Cv,1.6,12),_h(e,t,i,X(`#7fd8ff`,.8),2,18);for(let i=0;i<24;i++){let i=n.float()*Math.PI*2;e.sparks.emit(t,{x:r.x+Math.cos(i)*.35,y:Z(n,.1,.6),z:r.y+Math.sin(i)*.35,vy:Z(n,2,4),drag:1,delay:n.int(0,6),life:Z(n,20,32),size:.045,color:Cv,color2:wv,shape:Y.spark,stretch:1.6})}}#u(e,t,n,r){let i={x:r.x,y:.8,z:r.y};e.mark(t,{layer:`over`,x:r.x,y:2,z:r.y,size:2.2,size2:2.8,wide:.22,alpha:.75,life:18,r:1.4,g:1.6,b:1.8,shape:Y.streak}),$(e,t,i,X(`#e0f6ff`,1.4),.9,10),_h(e,t,i,X(`#9fe8ff`,.85),2.4,18);for(let i=0;i<32;i++){let a=n.float()*Math.PI*2,o=c*Z(n,.6,1);e.sparks.emit(t,{x:r.x+Math.cos(a)*o,y:.1,z:r.y+Math.sin(a)*o,vy:Z(n,4,7),drag:1.2,life:Z(n,18,28),size:.05,color:i%2==0?Sv:Cv,shape:Y.spark,stretch:2})}}#d(e,t,n,r){let i={x:r.x,y:.9,z:r.y};$(e,t,i,Tv,.6,9);for(let r=0;r<20;r++){let a=Q(n,.2),o=Z(n,2,4.5);e.sparks.emit(t,{...i,vx:a.x*o,vy:a.y*o+1,vz:a.z*o,ay:-6,drag:1.5,life:Z(n,20,30),size:Z(n,.05,.08),color:r%2==0?Cv:Tv,color2:Ev,shape:Y.flake,spin:12})}for(let i=0;i<16;i++)e.ambience.emit(t,{x:r.x+Z(n,-.6,.6),y:Z(n,.3,1.2),z:r.y+Z(n,-.6,.6),vy:Z(n,.3,.7),delay:n.int(0,10),life:Z(n,40,60),size:.04,color:Tv,color2:Ev,shape:Y.mote})}draw(e,t,n,r){for(let r of Dv(t))this.#f(e,r,n);let i=0;for(let t of this.#e){let a=n-t.start;if(a<0||a>=mv)continue;let o=a/mv,s=Ov(t,o,r.x,r.y),c=(t.stone?1.4:1)*(1-.5*o*o);Av.setFromAxisAngle(jv,n*.25+i),kv.compose(Mv.set(s.x,s.y,s.z),Av,Nv.setScalar(c)),this.#t.setMatrixAt(i,kv),this.#t.setColorAt(i,t.stone?this.#n:this.#r);let l=t.stone?yv:vv;e.over.add({...s,size:.3*c,r:l.r*.5,g:l.g*.5,b:l.b*.5,alpha:.8,shape:Y.glow}),i++}this.#t.count=i,this.#t.instanceMatrix.needsUpdate=!0,this.#t.instanceColor&&(this.#t.instanceColor.needsUpdate=!0);let a=this.#i;if(a!==null&&n-a<gv&&!t.player.dead){let t=Math.max(0,(n-a)/gv);e.ground.add({x:r.x,y:.04,z:r.y,size:.9+.5*Math.min(1,t*3),r:.9,g:.72,b:.32,alpha:.85*(1-t),shape:Y.runeRing,angle:n*.03,phase:n/60,flat:!0})}}#f(e,t,n){let r=new V(_v[t.kind]),i=c*t.size,a=.85+.15*Math.sin(n*.12);e.ground.add({x:t.x,y:.04,z:t.y,size:i*1.05,r:r.r*.8,g:r.g*.8,b:r.b*.8,alpha:.9,shape:Y.runeRing,angle:n*.02,phase:n/60,flat:!0}),e.ground.add({x:t.x,y:.03,z:t.y,size:i,r:r.r*.5,g:r.g*.5,b:r.b*.5,alpha:.35*a,shape:Y.disc,flat:!0}),e.over.add({x:t.x,y:1.3,z:t.y,size:1.4,wide:.3*t.size,r:r.r*1.2,g:r.g*1.2,b:r.b*1.2,alpha:.32*a,shape:Y.streak});for(let a=0;a<3;a++){let o=n*.04+a*Math.PI*2/3;e.over.add({x:t.x+Math.cos(o)*i*.75,y:.9+.35*Math.sin(n*.05+a*2),z:t.y+Math.sin(o)*i*.75,size:.1,r:r.r*1.8,g:r.g*1.8,b:r.b*1.8,alpha:.95,shape:Y.flake,angle:n*.08+a})}}reset(){this.#e.length=0,this.#i=null,this.#t.count=0}dispose(){this.#t.geometry.dispose(),this.#t.material.dispose()}},Fv=e=>e.slice(e.indexOf(`:`)+1),Iv=14,Lv={x:1.6,y:7,z:-1.2},Rv=6,zv=24,Bv=6,Vv=.35,Hv=32,Uv=.85,Wv=[`#ff8ad8`,`#8affd8`,`#8ac8ff`],Gv=[`#ff6a6a`,`#ffb34a`,`#fff36a`,`#6aff8a`,`#6ad8ff`,`#8a6aff`,`#ff6ae0`],Kv=X(`#ffb050`,1.7),qv=X(`#d0401a`,.6),Jv=X(`#cfefff`,1.5),Yv=X(`#3a8bff`,1),Xv=X(`#e8fff6`,1.4),Zv=X(`#7fe0b0`,.9),Qv=X(`#f0fdff`,2.6),$v=X(`#4ae0ff`,1.6),ey=X(`#a6e85a`,1.4),ty=X(`#4a8a2a`,.9),ny=X(`#fff0c0`,2),ry=X(`#ffcf6a`,1.3),iy=X(`#ff3a5a`,2),ay=X(`#a01838`,1),oy=X(`#a07aff`,1.8),sy=X(`#5a2aa0`,.9),cy=X(`#6a5644`);function ly(e,t,n,r,i,a){switch(r){case`fire`:e.ambience.emit(t,{...i,vx:Z(n,-.15,.15),vy:Z(n,.9,1.5),vz:Z(n,-.15,.15),life:Z(n,14,20),size:Z(n,.12,.2),grow:.35,color:Kv,color2:qv,shape:Y.flame,seed:n.float()});return;case`water`:e.ambience.emit(t,{...i,y:.05,vx:Z(n,-.4,.4),vy:Z(n,1.2,2),vz:Z(n,-.4,.4),ay:-9.8,life:14,size:.035,color:Jv,color2:Yv,shape:Y.drop});return;case`wind`:e.ambience.emit(t,{...i,y:Z(n,.2,1),cx:i.x+Z(n,-.3,.3),cz:i.z+Z(n,-.3,.3),swirl:n.float()<.5?-8:8,life:12,size:.04,color:Xv,color2:Zv,shape:Y.spark,stretch:1.5});return;case`lightning`:e.ambience.emit(t,{...i,y:Z(n,.1,.6),vx:Z(n,-2,2),vy:Z(n,0,2),vz:Z(n,-2,2),drag:4,life:7,size:.03,color:Qv,color2:$v,shape:Y.spark,stretch:2});return;case`earth`:e.shade.emit(t,{...i,y:.12,vy:.3,life:30,size:.16,grow:2,color:cy,alpha:.35,shape:Y.smoke,seed:n.float()});return;case`poison`:e.ambience.emit(t,{...i,y:.08,vy:Z(n,.3,.7),life:Z(n,18,28),size:Z(n,.04,.08),grow:1.4,color:ey,color2:ty,shape:Y.bubble});return;case`holy`:e.ambience.emit(t,{...i,vy:Z(n,.6,1.4),life:Z(n,24,36),size:.05,color:ny,color2:ry,shape:n.float()<.3?Y.star:Y.mote,spin:3});return;case`unholy`:e.ambience.emit(t,{...i,y:Z(n,.3,1),vy:-.5,life:20,size:.035,color:iy,color2:ay,shape:Y.mote});return;case`light`:e.ambience.emit(t,{...i,y:Z(n,.2,1.2),life:Z(n,8,14),size:Z(n,.06,.1),color:X(`#ffffff`,2.4),shape:Y.star,spin:4});return;case`dark`:e.ambience.emit(t,{...i,y:Z(n,.3,1),vy:-.4,life:22,size:.05,color:oy,color2:sy,shape:Y.mote});return;default:e.ambience.emit(t,{...i,vy:.8,life:20,size:.05,color:a.bright,shape:Y.mote})}}function uy(e,t,n,r,i=.1){let a=e.float()*Math.PI*2,o=r*Math.sqrt(e.float());return{x:t+Math.cos(a)*o,y:i,z:n+Math.sin(a)*o}}function dy(e,t,n,r,i=.1){let a=e.float()*Math.PI*2;return{x:t+Math.cos(a)*r,y:i,z:n+Math.sin(a)*r}}function fy(e){return Math.max(0,Math.min(1,(e.frame+1)/8,(e.frames-e.frame)/15))}function py(e,t,n,r,i,a,o){e.ambience.emit(t,{...r,vx:Z(n,-.3,.3),vy:.35,vz:Z(n,-.3,.3),life:50,size:a,grow:2.2,color:i,alpha:o,shape:Y.smoke,seed:n.float()})}function my(e,t,n,r,i,a,o){e.shade.emit(t,{...r,vx:Z(n,-.2,.2),vy:.4,vz:Z(n,-.2,.2),life:40,size:a,grow:2,color:i,alpha:o,shape:Y.smoke,seed:n.float()})}function hy(e,t,n,r,i){e.mark(t,{layer:`ground`,x:n.x,y:.02,z:n.z,size:i*.3,size2:i,alpha:.6,life:18,r:r.r,g:r.g,b:r.b,shape:Y.ripples,phaseRate:1,flat:!0})}function gy(e,t,n,r,i,a,o){e.bolts.add(t,{from:new R(r.x,r.y,r.z),to:new R(i.x,i.y,i.z),life:a,width:o,glow:$v,core:Qv,jag:.16,branches:1,seed:n.u32()})}function _y(e,t,n,r){for(let i=0;i<3;i++)e.ambience.emit(t,{...uy(n,r.x,r.y,r.radius,4),vy:-14,life:17,size:.02,color:X(`#cfefff`,1.2),alpha:.7,shape:Y.spark,stretch:3});t%5==0&&hy(e,t,uy(n,r.x,r.y,r.radius),X(`#5a7a9a`),.35)}var vy={holy_spring:(e,t,n,r)=>{t%7==0&&hy(e,t,uy(n,r.x,r.y,r.radius*.8),X(`#6ab0d0`),.5)},sanctuary:(e,t,n,r)=>{e.ambience.emit(t,{...dy(n,r.x,r.y,r.radius*.97,.05),vy:Z(n,1.2,1.8),life:26,size:.05,color:ny,color2:ry,alpha:.9,alpha2:0,shape:Y.mote})},fallen_light:(e,t,n,r)=>{e.sparks.emit(t,{...uy(n,r.x,r.y,r.radius*.6,Z(n,2.2,3)),vy:-5,life:24,size:.05,color:X(`#ff6a8a`,2.2),color2:ay,shape:Y.spark,stretch:2})},abyss:(e,t,n,r)=>{e.ambience.emit(t,{...dy(n,r.x,r.y,r.radius*Z(n,.6,1),Z(n,.05,.5)),cx:r.x,cz:r.y,swirl:2.5,pull:r.radius*.8,life:40,size:.05,color:n.float()<.5?oy:iy,color2:sy,shape:Y.mote})},styx:(e,t,n,r,i,a,o,s)=>{if(!s||i.effect.kind!==`zone`||r.frame%i.effect.every!==0)return;let c=o.player;for(let i=0;i<4;i++){let a=uy(n,r.x,r.y,r.radius*.7,.3),o=Z(n,.35,.5);e.sparks.emit(t,{...a,vx:(c.x-a.x)/o,vy:(.9-a.y)/o,vz:(c.y-a.z)/o,delay:i*2,life:o*60,size:.06,color:iy,color2:X(`#ff8aa0`,1.6),shape:Y.mote})}},grave_soil:(e,t,n,r)=>{t%4==0&&my(e,t,n,uy(n,r.x,r.y,r.radius*.8),cy,.2,.3)},black_fire:(e,t,n,r)=>{e.sparks.emit(t,{...uy(n,r.x,r.y,r.radius*.85,.05),vy:Z(n,1,1.7),life:Z(n,16,22),size:Z(n,.16,.24),grow:.35,color:X(`#c070ff`,1.6),color2:X(`#4a1080`,.6),shape:Y.flame,seed:n.float()})},gravity:(e,t,n,r)=>{t%5==0&&e.chunks.add(t,{kind:`rock`,...uy(n,r.x,r.y,r.radius*.8,.1),vx:0,vy:.3,vz:0,life:50,size:Z(n,.07,.13),spin:Z(n,1,3),axis:Q(n,0),color:X(`#8a80a8`),gravity:.6}),t%12==0&&e.mark(t,{layer:`ground`,x:r.x,y:.025,z:r.y,size:r.radius,size2:r.radius*.2,alpha:.5,alpha2:.2,life:30,r:.3,g:.3,b:.55,shape:Y.shock,flat:!0})},shock_field:(e,t,n,r)=>{if(t%4==0){let i=uy(n,r.x,r.y,r.radius*.8,.1),a=uy(n,i.x,i.z,.8,.1);e.bolts.add(t,{from:new R(i.x,i.y,i.z),to:new R(a.x,a.y,a.z),life:4,width:.02,glow:$v,core:Qv,jag:.3,branches:0,seed:n.u32()})}t%9==0&&hy(e,t,uy(n,r.x,r.y,r.radius*.8),X(`#3a8ab0`),.5)},steam:(e,t,n,r,i,a)=>{t%3==0&&py(e,t,n,uy(n,r.x,r.y,r.radius*.7,Z(n,.2,.9)),X(`#e8f0f4`,.4),.3+r.radius*.12,.55*a)},fire_tornado:(e,t,n,r)=>{for(let i=0;i<3;i++){let i=n.float()*Math.PI*2,a=Z(n,.2,.6);e.sparks.emit(t,{x:r.x+Math.cos(i)*a,y:Z(n,.05,.4),z:r.y+Math.sin(i)*a,vy:Z(n,3,4.5),cx:r.x,cz:r.y,swirl:10,pull:-.7,life:Z(n,18,26),size:Z(n,.15,.24),grow:.5,color:Kv,color2:qv,shape:Y.flame,seed:n.float()})}if(t%3==0){let i=Q(n,.6);e.sparks.emit(t,{x:r.x,y:Z(n,.5,2),z:r.y,vx:i.x*4,vy:1,vz:i.z*4,ay:-4,drag:1.5,life:24,size:.03,color:X(`#ffe08a`,2.4),color2:qv,shape:Y.spark,stretch:1.4})}t%8==0&&e.mark(t,{layer:`groundShade`,x:r.x,y:.012,z:r.y,size:.6,alpha:.45,life:90,r:.5,g:.38,b:.3,shape:Y.scorch,seed:n.float(),flat:!0})},lava:(e,t,n,r)=>{t%4==0&&e.sparks.emit(t,{...uy(n,r.x,r.y,r.radius*.8,.05),vy:Z(n,1.5,2.6),ay:-9.8,life:18,size:.05,color:X(`#ffd27a`,2.2),color2:X(`#ff5a1a`,1.2),shape:Y.drop})},rainstorm:(e,t,n,r)=>_y(e,t,n,r),mire:(e,t,n,r)=>{t%3==0&&e.ambience.emit(t,{...uy(n,r.x,r.y,r.radius*.85,.03),vy:.15,life:30,size:Z(n,.06,.1),grow:1.5,color:X(`#b0905a`,.9),alpha:.8,alpha2:0,shape:Y.bubble})},poison_pool:(e,t,n,r)=>{t%6==0&&py(e,t,n,uy(n,r.x,r.y,r.radius*.7,.15),X(`#8acc4a`,.25),.3,.5)},sandstorm:(e,t,n,r)=>{for(let i=0;i<3;i++){let i=n.float()*Math.PI*2,a=r.radius*Z(n,.2,1);e.ambience.emit(t,{x:r.x+Math.cos(i)*a,y:Z(n,.1,1.4),z:r.y+Math.sin(i)*a,cx:r.x,cz:r.y,swirl:3.5,life:24,size:.035,color:X(`#ffe0a0`,1.3),color2:X(`#a07a40`,.8),shape:Y.flake,spin:10})}t%4==0&&my(e,t,n,uy(n,r.x,r.y,r.radius*.8,.5),X(`#7a6040`),.4,.3)},poison_fog:(e,t,n,r,i,a)=>{t%3==0&&py(e,t,n,uy(n,r.x,r.y,r.radius*.75,Z(n,.2,.8)),X(`#8acc4a`,.4),.3+r.radius*.12,.55*a)},thorns:(e,t,n,r)=>{t%3==0&&e.chunks.add(t,{kind:`rock`,...uy(n,r.x,r.y,r.radius*.85,0),vx:0,vy:Z(n,2,3),vz:0,life:26,size:Z(n,.06,.1),spin:2,axis:Q(n,0),color:X(`#5a8a3a`,1.2)})},black_hole:(e,t,n,r)=>{t%2==0&&e.shade.emit(t,{x:r.x+Z(n,-.1,.1),y:Z(n,.4,.8),z:r.y+Z(n,-.1,.1),life:12,size:.55+r.radius*.06,grow:1.2,color:X(`#050208`),alpha:.85,shape:Y.glow});for(let i=0;i<5;i++){let a=dy(n,r.x,r.y,r.radius*Z(n,.45,1),Z(n,.2,.9));e.sparks.emit(t,{...a,cx:r.x,cz:r.y,swirl:4,pull:r.radius*1.6,life:30,size:.05,color:i%2==0?X(`#e0c8ff`,2):X(`#7a3aff`,1.6),color2:X(`#3a1a6a`,.8),shape:Y.spark,stretch:1.5})}},thundercloud:(e,t,n,r,i,a,o,s)=>{if(_y(e,t,n,r),t%5==0&&my(e,t,n,uy(n,r.x,r.y,r.radius*.7,3.2),X(`#3a3a4a`),.5+r.radius*.15,.4*a),s&&r.frame%20==0){let i=uy(n,r.x,r.y,r.radius*.8,.05);gy(e,t,n,{x:i.x+Z(n,-.4,.4),y:3.2,z:i.z},i,7,.045),$(e,t,{...i,y:.4},X(`#9ff0ff`,1.6),.6,6)}},death_domain:(e,t,n,r)=>{t%3==0&&e.ambience.emit(t,{...uy(n,r.x,r.y,r.radius*.85,.1),vx:Z(n,-.2,.2),vy:Z(n,.4,.8),vz:Z(n,-.2,.2),life:Z(n,40,60),size:Z(n,.07,.11),color:n.float()<.5?X(`#9fe07a`,1.8):X(`#c07aff`,1.8),alpha:.9,alpha2:0,shape:Y.glow})}},yy=new R,by=new Bt,xy=new R,Sy=new R,Cy=new B,wy=new Set([`holy_spring`,`styx`,`mire`,`poison_pool`,`lava`]),Ty=new Set([`abyss`,`gravity`,`grave_soil`,`black_hole`,`death_domain`]),Ey=class{#e=null;#t=new Map;#n=new Map;#r=new Map;#i=[];#a;constructor(e){let t=new ea(.5,0);t.scale(.7,1.3,.7);let n=new ha({color:`#d8f0ff`,roughness:.2,metalness:.1,flatShading:!0,emissive:`#2a5a90`,emissiveIntensity:.6});this.#a=new Si(t,n,192),this.#a.instanceMatrix.setUsage(vt),this.#a.count=0,this.#a.frustumCulled=!1,e.add(this.#a)}#o=null;#s=new Set;#c=new Set;#l=new Set;#u=new Map;attach(e){this.#e=e,this.#t.clear()}#d(e){let t=this.#t.get(e);if(t)return t;let n=this.#e,r=n?.reactions.get(e);if(!n||!r)return null;let i={id:Fv(e),effect:r.effect,color:X(r.color,1.3),bright:X(r.color,2.2),floor:X(r.color,.5),ring:X(r.color,.85),styles:r.elements.map(e=>yg(e,n.elements.get(e)?.color)),elements:r.elements.map(Fv)};return this.#t.set(e,i),i}drew(e){return e.cue===lh.explode&&this.#s.has(`${e.x},${e.y}`)}observe(e,t,n,r,i){this.#s.clear();let a=t.zones??[];for(let e of a){let t=this.#d(e.reaction);if(t?.effect.kind!==`strike`)continue;let n=r+e.frames-e.frame+1;this.#n.set(e.id,{look:t,x:e.x,y:e.y,reach:e.radius,until:n})}let o=null,s=0,c=new Set,l=new Set;n.forEach((n,u)=>{if(n.type===`reaction`){let a=this.#d(n.reaction);if(!a)return;a.effect.kind===`beam`&&(o=a,s=0);let l=!c.has(n.reaction);c.add(n.reaction),this.#f(e,t,r,u,a,n,l,i);return}if(n.type!==`cue`)return;let d=u_.rng(r,71,u);if(n.cue===lh.beam)this.#C(e,r,d,o,s++,n);else if(n.cue===lh.strike){let t=`${Math.round(n.x*10)},${Math.round(n.y*10)}`;l.has(t)||this.#S(e,r,d,this.#x(n),n),l.add(t)}else n.cue===lh.explode&&this.#D(e,r,d,a,n)});for(let[e,t]of this.#n)t.until<r&&this.#n.delete(e);for(let n of a){let i=this.#d(n.reaction);if(!i)continue;let a=u_.rng(r,72,n.id),o=i.effect.kind,s=this.#u.get(n.id)!==n.frame;this.#u.set(n.id,n.frame),o===`burst`?this.#_(e,r,a,i,n):o===`wave`?this.#g(e,r,a,i,n):o===`zone`?this.#v(e,r,a,i,n,t,s):o===`strike`&&this.#y(e,r,a,i,n,s)}for(let e of[...this.#u.keys()])a.some(t=>t.id===e)||this.#u.delete(e);this.#O(t,r,i),this.#A(e,t,r)}#f(e,t,n,r,i,a,o,s){let c=u_.rng(n,70,r),l={x:a.x,y:.75,z:a.y},u=i.effect.kind;if(o||u===`burst`||u===`wave`||u===`mark`)switch(u){case`burst`:this.#p(e,n,c,i,a.x,a.y,a.radius,o);return;case`wave`:this.#h(e,n,c,i,a.x,a.y,a.radius,o);return;case`zone`:$(e,n,l,i.color,.5,8),_h(e,n,l,i.ring,a.radius,14);for(let t of i.styles)t.hit(e,n,c,l,0,0,.8);return;case`mark`:this.#T(e,t,n,c,i,a,o,s);return;case`strike`:$(e,n,l,i.color,.4,8),_h(e,n,l,i.ring,i.effect.radius,20);return;case`beam`:$(e,n,l,i.bright,.5,6);return;case`volley`:this.#w(e,n,c,i,l);return;case`chain`:$(e,n,l,i.color,.5,8),vh(e,n,l,i.color,.9,9);return;case`ward`:{this.#o=i;let r=t.player,a={x:r.x,y:.9,z:r.y};$(e,n,a,i.bright,.9,12),vh(e,n,a,i.color,1.8,14),_h(e,n,a,i.ring,1.6,18),i.id===`heavens_gate`&&this.#j(e,n,c,a);return}}}#p(e,t,n,r,i,a,o,s){if(r.id===`supernova`){s&&this.#m(e,t,n,i,a);return}let c={x:i,y:.7,z:a};if(_h(e,t,c,r.ring,o+.2,16),vh(e,t,c,r.color,o,11),s){$(e,t,c,r.color,.5+.3*o,9);for(let i of r.styles)i.hit(e,t,n,c,0,0,1.5)}for(let i=0;i<(s?14:6);i++){let i=Q(n,.2),a=Z(n,3.5,7)*(.6+.25*o);e.sparks.emit(t,{...c,vx:i.x*a,vy:i.y*a+1,vz:i.z*a,drag:3,life:Z(n,12,20),size:.04,color:r.bright,color2:r.color,shape:Y.spark,stretch:1.8})}if(s||r.id===`inferno`)switch(r.id){case`inferno`:s&&z_(e,t,n,{x:i,y:.4,z:a},o);for(let r=0;r<5;r++)my(e,t,n,uy(n,i,a,.5,.8+r*.3),X(`#2a0a10`),.4,.55);return;case`thunderblast`:for(let r=0;r<6;r++){let s=r/6*Math.PI*2+n.float()*.5,c={x:i+Math.cos(s)*o,y:.2,z:a+Math.sin(s)*o};gy(e,t,n,{x:i,y:.7,z:a},c,9,.035)}z_(e,t,n,{x:i,y:.4,z:a},o*.5);return;case`solar_flare`:e.sparks.emit(t,{...c,life:12,size:1.4,grow:1.3,color:X(`#fff3c0`,2.2),alpha:.9,alpha2:0,shape:Y.star,angle:n.float()});for(let r=0;r<14;r++){let i=r/14*Math.PI*2;e.sparks.emit(t,{...c,vx:Math.cos(i)*11,vy:Z(n,-1,2),vz:Math.sin(i)*11,drag:4,life:12,size:.07,color:X(`#fff6d0`,2.6),color2:X(`#ffa040`,1.2),shape:Y.spark,stretch:4})}return;case`miasma`:for(let r=0;r<7;r++)py(e,t,n,uy(n,i,a,o*.6,.5),X(`#b5d94a`,.35),.5,.6);return;case`chaos`:for(let r=0;r<24;r++){let s=r%2==0,c=n.float()*Math.PI*2;e.sparks.emit(t,{x:i+Math.cos(c)*.3,y:Z(n,.3,1.2),z:a+Math.sin(c)*.3,cx:i,cz:a,swirl:s?7:-7,pull:-o*2.2,life:Z(n,16,24),size:.05,color:s?ny:iy,color2:s?ry:ay,shape:Y.spark,stretch:1.2})}return;default:return}}#m(e,t,n,r,i){let a={x:r,y:1,z:i};$(e,t,{x:r,y:2.6,z:i},X(`#ffffff`,1.4),2.6,8),$(e,t,{x:r,y:1.6,z:i},X(`#fff6e0`,1.1),1.6,18),Gv.forEach((n,r)=>{_h(e,t,a,X(n,.5),6+r*1.1,30+r*3,r*3)});for(let r=0;r<48;r++){let i=Q(n,.3),o=Z(n,6,14);e.sparks.emit(t,{...a,vx:i.x*o,vy:i.y*o+2,vz:i.z*o,drag:1.5,life:Z(n,24,40),size:.06,color:X(Gv[r%Gv.length]??`#ffffff`,2.2),shape:Y.spark,stretch:2})}}#h(e,t,n,r,i,a,o,s){if(!s)return;let c={x:i,y:.7,z:a};$(e,t,c,r.color,.6,8);for(let i of r.styles)i.hit(e,t,n,c,0,0,1.2);r.id===`quake`?e.mark(t,{layer:`groundShade`,x:i,y:.015,z:a,size:o*.6,size2:o*.9,alpha:.9,life:100,r:.35,g:.28,b:.22,shape:Y.cracks,seed:n.float(),flat:!0}):r.id===`revelation`&&e.mark(t,{layer:`over`,x:i,y:1.8,z:a,size:2,size2:2.4,wide:.16,alpha:.9,life:18,r:2,g:1.85,b:1.2,shape:Y.streak})}#g(e,t,n,r,i){let a=i.radius;if(a<=.1)return;let o=Math.min(10,Math.max(4,Math.round(a*2.5)));for(let s=0;s<o;s++){let o=dy(n,i.x,i.y,a,.15);r.id===`grudge_wind`&&s%2==0?e.ambience.emit(t,{...o,y:Z(n,.2,1),cx:i.x,cz:i.y,swirl:5,pull:-4,life:10,size:.05,color:X(`#b08aff`,1.6),color2:X(`#4a1a6a`,.8),shape:Y.spark,stretch:1.8}):ly(e,t,n,r.elements[s%r.elements.length]??``,o,r)}if(r.id===`quake`&&t%2==0){let r=n.float()*Math.PI*2;e.chunks.add(t,{kind:`rock`,x:i.x+Math.cos(r)*a,y:.1,z:i.y+Math.sin(r)*a,vx:Math.cos(r)*1.2,vy:Z(n,2.5,4),vz:Math.sin(r)*1.2,life:40,size:Z(n,.08,.14),spin:10,axis:Q(n,0),color:X(`#b08a62`)})}}#_(e,t,n,r,i){let a=(i.frames>0?i.frame/i.frames:1)>.6?2:1;for(let o=0;o<a;o++){let a=Q(n,.3),o=i.radius*Z(n,.8,1.2);e.sparks.emit(t,{x:i.x+a.x*o,y:.7+a.y*.5,z:i.y+a.z*o,vx:-a.x*o*4,vy:-a.y*2,vz:-a.z*o*4,drag:.5,life:14,size:.05,color:r.bright,color2:r.color,shape:Y.spark,stretch:1.4})}r.id===`inferno`&&t%3==0&&my(e,t,n,uy(n,i.x,i.y,.4,.3),X(`#2a0a10`),.25,.4)}#v(e,t,n,r,i,a,o){let s=fy(i);if(!(s<=0||i.radius<=0)){if(t%2==0){let a=Math.min(4,Math.max(1,Math.round(i.radius*i.radius*.35)));for(let o=0;o<a;o++)ly(e,t,n,r.elements[(t/2+o)%r.elements.length]??``,uy(n,i.x,i.y,i.radius*.9),r)}vy[r.id]?.(e,t,n,i,r,s,a,o)}}#y(e,t,n,r,i,a){let o=r.effect;if(o.kind!==`strike`||(r.id===`thunderstorm`&&t%4==0&&my(e,t,n,uy(n,i.x,i.y,o.radius*.6,3.4),X(`#2e3442`),.7,.35),!o.scatter||!a))return;let s=i.frame+Iv-1-o.delay,c=s/o.every;if(!(s<0||s%o.every!==0||c>=o.volleys))for(let r of Dy(o,i,c))this.#b(e,t,n,r)}#b(e,t,n,r){let i={x:r.x+Lv.x,y:Lv.y,z:r.z+Lv.z},a=Iv/60,o={vx:-Lv.x/a,vy:(.3-Lv.y)/a,vz:-Lv.z/a};e.sparks.emit(t,{...i,...o,life:Iv,size:.22,color:X(`#ffe08a`,1.8),color2:X(`#ff8a3a`,1.5),shape:Y.glow}),e.sparks.emit(t,{...i,...o,life:Iv,size:.16,color:X(`#fff6d0`,2.4),shape:Y.flame,seed:n.float()});for(let r=1;r<Iv;r++){let a=r/Iv;e.sparks.emit(t,{x:i.x-Lv.x*a+Z(n,-.06,.06),y:i.y+(.3-Lv.y)*a,z:i.z-Lv.z*a+Z(n,-.06,.06),vy:.6,drag:1,delay:r,life:Z(n,10,16),size:Z(n,.12,.2),grow:.4,color:Kv,color2:qv,shape:Y.flame,seed:n.float()})}}#x(e){let t=null,n=1/0;for(let r of this.#n.values()){let i=(r.x-e.x)**2+(r.y-e.y)**2;i>(r.reach+e.strength+1)**2||i>=n||(n=i,t=r.look)}return t}#S(e,t,n,r,i){let a=i.x,o=i.y,s=Math.max(.8,i.strength),c={x:a,y:.5,z:o};if(r?.id===`volcano`){e.mark(t,{layer:`over`,x:a+Lv.x*.25,y:1.9,z:o+Lv.z*.25,size:1.8,wide:.1,alpha:.8,life:8,r:2.2,g:1.1,b:.4,shape:Y.streak,angle:-.3}),z_(e,t,n,c,s);for(let r=0;r<4;r++){let r=Q(n,.4);e.chunks.add(t,{kind:`rock`,...c,vx:r.x*3,vy:Z(n,2.5,4),vz:r.z*3,life:36,size:Z(n,.07,.12),spin:12,axis:Q(n,0),color:X(`#ff7a3a`,1.4)})}}else if(r?.id===`judgment`){e.mark(t,{layer:`over`,x:a,y:2,z:o,size:2.2,size2:2.6,wide:.16,alpha:.55,life:14,r:1.5,g:1.3,b:.65,shape:Y.streak}),e.bolts.add(t,{from:new R(a,6,o),to:new R(a,.05,o),life:8,width:.06,glow:X(`#ffd86a`,1.6),core:X(`#fffbe0`,2.6),jag:.08,branches:1,seed:n.u32()}),$(e,t,c,X(`#fff3b0`,1.1),.7,10),_h(e,t,c,X(`#ffd86a`,.9),s+.3,16);for(let r=0;r<12;r++)e.sparks.emit(t,{...uy(n,a,o,s*.6,.1),vy:Z(n,1.5,3),life:Z(n,18,28),size:.05,color:ny,color2:ry,shape:Y.mote})}else{e.bolts.add(t,{from:new R(a+Z(n,-.6,.6),6,o+Z(n,-.6,.6)),to:new R(a,.05,o),life:8,width:.05,glow:r?r.color:$v,core:Qv,jag:.14,branches:2,seed:n.u32()}),$(e,t,c,X(`#9ff0ff`,1.8),.8,8),_h(e,t,c,X(`#4ae0ff`,.85),s+.2,14);for(let r=0;r<12;r++){let r=Q(n,.3);e.sparks.emit(t,{...c,vx:r.x*5,vy:Math.abs(r.y)*4+1,vz:r.z*5,ay:-8,drag:2,life:Z(n,8,14),size:.03,color:Qv,color2:$v,shape:Y.spark,stretch:2})}}}#C(e,t,n,r,i,a){let o=a.strength,s={x:a.x,y:Uv,z:a.y},c={x:a.x+a.dx*o,y:Uv,z:a.y+a.dy*o},l=r?.id===`prism`,u=X(l?Wv[i%Wv.length]??`#ffffff`:`#5ad8ff`,1.5);if(e.bolts.add(t,{from:new R(s.x,s.y,s.z),to:new R(c.x,c.y,c.z),life:l?14:16,width:l?.05:.1,glow:u,core:X(`#f4fdff`,2.6),jag:0,branches:0,seed:n.u32()}),!l)for(let r=0;r<2;r++)e.bolts.add(t,{from:new R(s.x,s.y,s.z),to:new R(c.x,c.y,c.z),life:10,delay:r*3,width:.022,glow:$v,core:Qv,jag:.06,branches:1,seed:n.u32()});e.mark(t,{layer:`ground`,x:(s.x+c.x)/2,y:.03,z:(s.z+c.z)/2,size:o/2,wide:.12,alpha:.7,life:18,r:u.r*.4,g:u.g*.4,b:u.b*.4,shape:Y.streak,angle:Math.atan2(-a.dx,a.dy),flat:!0});for(let r=0;r<8;r++){let r=n.float();e.sparks.emit(t,{x:s.x+(c.x-s.x)*r,y:Uv+Z(n,-.1,.1),z:s.z+(c.z-s.z)*r,vx:Z(n,-.8,.8),vy:Z(n,.2,1.2),vz:Z(n,-.8,.8),delay:n.int(0,8),life:Z(n,10,16),size:l?.07:.04,color:l?u:Qv,shape:l?Y.star:Y.mote,spin:4})}$(e,t,c,u,.4,8)}#w(e,t,n,r,i){$(e,t,i,r.bright,.7,8),vh(e,t,i,r.color,1.6,10),_h(e,t,i,r.ring,1.4,12);for(let a=0;a<12;a++){let o=a/12*Math.PI*2;e.sparks.emit(t,{...i,vx:Math.cos(o)*6,vy:Z(n,-.5,.5),vz:Math.sin(o)*6,drag:5,life:10,size:.06,color:X(`#fffbe0`,2.4),color2:r.color,shape:Y.star,spin:6})}}#T(e,t,n,r,i,a,o,s){let{x:c,y:l,radius:u}=a;o&&(this.#l.clear(),_h(e,n,{x:c,z:l},i.ring,Math.max(.8,u)+.2,16),$(e,n,{x:c,y:.8,z:l},i.color,.5,8));for(let a of t.enemies){if(a.hp<=0||this.#l.has(a.id))continue;let t=u+a.radius;if((a.x-c)**2+(a.y-l)**2>t*t)continue;this.#l.add(a.id);let o=s(a),d={x:o.x,y:o.lift+o.height*.6,z:o.z};if($(e,n,d,i.bright,.35,7),vh(e,n,d,i.color,.8,9),this.#l.size<=Rv)for(let t of i.styles)t.hit(e,n,r,d,0,0,.5);this.#E(e,n,r,i,a,o,d)}}#E(e,t,n,r,i,a,o){switch(r.id){case`crystallize`:this.#r.set(i.id,t+90);for(let r=0;r<6;r++){let r=Q(n,.4);e.chunks.add(t,{kind:`ice`,...o,vx:r.x*2.5,vy:Math.abs(r.y)*2+1.5,vz:r.z*2.5,life:30,size:Z(n,.05,.09),spin:12,axis:Q(n,0),color:X(`#cfefff`,1.1)})}return;case`void`:for(let r=0;r<7;r++){let r=Q(n,.3);e.chunks.add(t,{kind:`glow`,...o,vx:r.x*3,vy:Math.abs(r.y)*3+1.5,vz:r.z*3,life:30,size:.07,spin:12,axis:Q(n,0),color:X(`#e0e0ff`,1.6),gravity:-8})}return;case`purify`:e.mark(t,{layer:`over`,x:a.x,y:a.lift+a.height,z:a.z,size:a.height,wide:.18,alpha:.8,life:16,r:1.8,g:2,b:1.8,shape:Y.streak});return;case`thunder_curse`:gy(e,t,n,{x:a.x,y:3.5,z:a.z},o,7,.03);return;case`nightfall`:my(e,t,n,{...o,y:a.lift+a.height+.2},X(`#20203a`),.35,.5);return;default:return}}#D(e,t,n,r,i){for(let a of r){let r=this.#d(a.reaction),o=r?.effect;if(!r||o?.kind!==`zone`||!o.deathBurst)continue;let s=a.radius+1;if((a.x-i.x)**2+(a.y-i.y)**2>s*s)continue;let c={x:i.x,y:.6,z:i.y},l=i.strength;$(e,t,c,r.bright,.4+.25*l,9),_h(e,t,c,r.ring,l+.2,16);for(let i of r.styles)i.hit(e,t,n,c,0,0,1.3);for(let r=0;r<4;r++)my(e,t,n,uy(n,i.x,i.y,.4,.5),X(`#2a1a2a`),.35,.5);this.#s.add(`${i.x},${i.y}`);return}}#O(e,t,n){if(this.#i=[],this.#r.size===0)return;let r=new Set;for(let i of e.enemies){let e=this.#r.get(i.id);e===void 0||e<=t||i.stun<=0||i.hp<=0||(r.add(i.id),this.#i.length<Hv&&this.#i.push({id:i.id,body:n(i)}))}for(let e of[...this.#r.keys()])r.has(e)||this.#r.delete(e)}#k(){let e=0;for(let{id:t,body:n}of this.#i){let r=u_.rng(t,73);for(let t=0;t<Bv;t++){let i=t/Bv*Math.PI*2+r.float()*.4,a=n.radius*Z(r,.95,1.2),o=n.lift+n.height*Z(r,.15,.35),s=n.height*Z(r,.5,.75);yy.set(Math.sin(i),0,-Math.cos(i)),by.setFromAxisAngle(yy,Vv),xy.set(n.x+Math.cos(i)*a,o,n.z+Math.sin(i)*a),Cy.compose(xy,by,Sy.setScalar(s)),this.#a.setMatrixAt(e++,Cy)}}this.#a.count=e,this.#a.instanceMatrix.needsUpdate=!0}#A(e,t,n){let r=t.player,i=this.#o;if(!r.ward||r.ward.frames<=0||!i||r.dead)return;let a=u_.rng(n,74);if(i.id===`heavens_gate`){e.ambience.emit(n,{x:r.x+Z(a,-.5,.5),y:Z(a,0,.4),z:r.y+Z(a,-.5,.5),vy:Z(a,1.4,2.4),life:30,size:.05,color:X(`#fff6d0`,2.2),color2:ry,shape:a.float()<.3?Y.star:Y.mote,spin:3});return}let o=a.float()*Math.PI*2;e.ambience.emit(n,{x:r.x+Math.cos(o)*.7,y:Z(a,.3,1.3),z:r.y+Math.sin(o)*.7,cx:r.x,cz:r.y,swirl:8,life:12,size:.05,color:Xv,color2:Zv,shape:Y.spark,stretch:1.5}),n%8==0&&e.ambience.emit(n,{x:r.x+Z(a,-.6,.6),y:Z(a,1.1,1.7),z:r.y+Z(a,-.6,.6),vx:Z(a,-.3,.3),vy:-.45,life:44,size:.09,color:X(`#f4fff8`,1.4),shape:Y.feather,spin:Z(a,-4,4),angle:a.float()*6})}#j(e,t,n,r){e.mark(t,{layer:`over`,x:r.x,y:2.4,z:r.z,size:3,size2:3.4,wide:.26,alpha:.6,life:24,r:1.6,g:1.4,b:.85,shape:Y.streak});for(let i=0;i<10;i++)e.sparks.emit(t,{x:r.x+Z(n,-.8,.8),y:Z(n,2,3),z:r.z+Z(n,-.8,.8),vx:Z(n,-.4,.4),vy:-.8,life:Z(n,40,60),size:.1,color:X(`#ffe8a0`,1.6),shape:Y.feather,spin:Z(n,-4,4),angle:n.float()*6})}arc(e,t,n,r){if(r.reaction&&this.#d(r.reaction))for(let i=0;i<5;i++){let a=(i+n.float())/5;my(e,t,n,{x:r.fromX+(r.toX-r.fromX)*a,y:.85,z:r.fromY+(r.toY-r.fromY)*a},X(`#1a1030`),.18,.55)}}draw(e,t,n,r){this.#c.clear();for(let r of t.zones??[]){let i=this.#d(r.reaction);if(!i)continue;let a=r.frames>0?Math.min(1,r.frame/r.frames):1;switch(i.effect.kind){case`burst`:this.#M(e,i,r,a,n);break;case`wave`:e.ground.add({x:r.x,y:.04,z:r.y,size:Math.max(.2,r.radius),r:i.ring.r,g:i.ring.g,b:i.ring.b,alpha:.9*(1-a*.6),shape:Y.shock,flat:!0});break;case`zone`:this.#N(e,i,r,n);break;case`strike`:this.#P(e,t,i,r,n)}}for(let n of t.enemies)!this.#r.has(n.id)||n.stun<=0||e.over.add({x:n.x,y:.5,z:n.y,size:.9,r:.45,g:.65,b:1,alpha:.3*Math.min(1,n.stun/20),shape:Y.glow});this.#k(),this.#F(e,t,n,r)}#M(e,t,n,r,i){let a=.85+.15*Math.sin(i*(.3+r*.6));e.ground.add({x:n.x,y:.035,z:n.y,size:Math.max(.2,n.radius*(1-r)),r:t.ring.r,g:t.ring.g,b:t.ring.b,alpha:.9,shape:Y.shock,flat:!0}),e.ground.add({x:n.x,y:.03,z:n.y,size:n.radius,r:t.floor.r,g:t.floor.g,b:t.floor.b,alpha:.55,shape:Y.target,flat:!0}),e.over.add({x:n.x,y:.7,z:n.y,size:.25+.45*r,r:t.color.r,g:t.color.g,b:t.color.b,alpha:.7*a,shape:Y.glow})}#N(e,t,n,r){let i=fy(n);if(!(i<=0||n.radius<=0)){if(e.ground.add({x:n.x,y:.03,z:n.y,size:n.radius,r:t.floor.r,g:t.floor.g,b:t.floor.b,alpha:.8*i,shape:Y.runeRing,angle:r*.01+n.id,phase:r/60,flat:!0}),wy.has(t.id)){let a=t.id===`lava`;e.ground.add({x:n.x,y:.025,z:n.y,size:n.radius*.92,r:a?.5:t.floor.r,g:a?.22:t.floor.g,b:a?.04:t.floor.b,alpha:(a?.3:.32)*i,shape:Y.pool,phase:r,seed:n.id%97/97,flat:!0}),a&&e.ground.add({x:n.x,y:.028,z:n.y,size:n.radius*.85,r:.95,g:.62,b:.18,alpha:.8*i*(.8+.2*Math.sin(r*.1)),shape:Y.cracks,seed:n.id%89/89,flat:!0})}else if(Ty.has(t.id)){let r=t.id===`black_hole`;e.groundShade.add({x:n.x,y:.02,z:n.y,size:r?n.radius*.4:n.radius,r:r?.04:.4,g:r?.02:.32,b:r?.08:.5,alpha:(r?.95:.6)*i,shape:Y.disc,flat:!0}),r&&(e.ground.add({x:n.x,y:.03,z:n.y,size:1.2,r:.6,g:.35,b:.95,alpha:.8*i,shape:Y.ring,flat:!0}),e.over.add({x:n.x,y:.6,z:n.y,size:.8,r:1.2,g:.7,b:2,alpha:.6*i,shape:Y.ring}))}else e.ground.add({x:n.x,y:.025,z:n.y,size:n.radius,r:t.floor.r,g:t.floor.g,b:t.floor.b,alpha:.16*i,shape:Y.disc,flat:!0});t.id===`fallen_light`&&e.over.add({x:n.x,y:1.6,z:n.y,size:1.8,wide:.25,r:1.6,g:.4,b:.6,alpha:.45*i,shape:Y.streak})}}#P(e,t,n,r,i){let a=n.effect;if(a.kind!==`strike`)return;let o=r.frame-a.delay,s=o<0?0:Math.ceil(o/a.every);if(s>=a.volleys)return;let c=s*a.every-o;if(c>zv)return;let l=1-c/zv,u=n.id===`thunderstorm`?n.ring:X(`#ffd86a`,.9),d=a.scatter?Dy(a,r,s):Oy(t,r,a.radius,a.targets).map(e=>({x:e.x,z:e.y}));for(let t of d){let n=`${Math.round(t.x*10)},${Math.round(t.z*10)}`;this.#c.has(n)||(this.#c.add(n),e.ground.add({x:t.x,y:.035,z:t.z,size:a.blast*(1.6-.6*l),r:u.r,g:u.g,b:u.b,alpha:.25+.5*l,shape:Y.target,angle:i*.04,flat:!0}))}}#F(e,t,n,r){let i=t.player.ward,a=this.#o;if(!i||i.frames<=0||t.player.dead)return;let o=Math.min(1,i.frames/20);if(a?.id===`heavens_gate`){let t=.85+.15*Math.sin(n*.15);e.over.add({x:r.x,y:1.7,z:r.y,size:2,wide:.26,r:1.6,g:1.4,b:.9,alpha:.28*o*t,shape:Y.streak});for(let t of[-1,1])for(let i=0;i<3;i++)e.over.add({x:r.x+t*(.5+i*.2),y:1.35+i*.08,z:r.y-.2,size:.6-i*.1,r:1.4,g:1.15,b:.7,alpha:.38*o,shape:Y.feather,angle:-t*(.55+i*.35+.05*Math.sin(n*.12))});e.ground.add({x:r.x,y:.04,z:r.y,size:1.1,r:.9,g:.75,b:.35,alpha:.6*o,shape:Y.runeRing,angle:n*.02,phase:n/60,flat:!0})}else e.ground.add({x:r.x,y:.04,z:r.y,size:1.05+.05*Math.sin(n*.2),r:a?a.floor.r:.45,g:a?a.floor.g:.7,b:a?a.floor.b:.55,alpha:.6*o,shape:Y.shock,flat:!0})}dispose(){this.#a.geometry.dispose(),this.#a.material.dispose()}reset(){this.#n.clear(),this.#r.clear(),this.#i=[],this.#a.count=0,this.#s.clear(),this.#u.clear(),this.#o=null}};function Dy(e,n,r){let a=[];for(let o=0;o<e.targets;o++){let s=r*e.targets+o,c=e.radius*Math.sqrt((s%7+1)/8);a.push({x:n.x+t(s*137.5)*c,z:n.y+i(s*137.5)*c})}return a}function Oy(e,t,n,r){return e.enemies.filter(e=>e.hp>0&&(e.x-t.x)**2+(e.y-t.y)**2<=(n+e.radius)**2).map(e=>({e,d:(e.x-t.x)**2+(e.y-t.y)**2})).sort((e,t)=>e.d-t.d||e.e.id-t.e.id).slice(0,r).map(({e})=>e)}var ky=[lh.strike,lh.beam];Object.keys(vy);var Ay=[`burn`,`stun`,`slow`,`weaken`,`curse`,`blind`,`wet`,`poison`,`suppress`,`deathArc`,`plague`,`radiate`,`silence`,`decay`,`neurotoxin`];function jy(e,t){if(t===`burn`)return e.burn;if(t===`stun`)return e.stun;let n=e.status;return n?t===`poison`?n.poison>0?n.poisonFrames:0:n[t]:0}var My={[lh.burn]:`burn`,[lh.poison]:`poison`,[lh.decay]:`decay`,[lh.radiate]:`radiate`},Ny=(e,t)=>Math.abs(e-t)<1e-6,Py=class{#e=new Map;#t=!1;reset(){this.#e.clear(),this.#t=!1}read(e,t){let n=[],r=[],i=[],a=null,o=[],s=[],c=[];for(let t of e)t.type===`death`&&c.push({target:t.target,x:t.x,y:t.y});let l=null;return e.forEach((t,u)=>{if(t.type===`damage`){l=t;return}if(t.type!==`cue`){a=null;return}let d={x:t.x,y:t.y,dx:t.dx,dy:t.dy,strength:t.strength};if(t.cue!==lh.hit&&(a=null),t.cue===lh.hit){let e=l;a&&e&&a.targets.push({x:t.x,y:t.y}),n.push({...d,target:e?.target??-1,...e?.element?{element:e.element}:{},...e?.reaction?{reaction:e.reaction}:{},crit:e?.crit===!0}),l=null}else if(t.cue===lh.arc)r.push(Fy(e,u,d,c));else if(t.cue===lh.gust)a={...d,targets:[]},i.push(a);else if(t.cue===lh.stun)s.push(d);else{let e=My[t.cue];e&&o.push({...d,kind:e})}}),{hits:n,arcs:r,gusts:i,ticks:o,stuns:s,rises:this.#n(t),deaths:c}}#n(e){let t=[],n=new Map;for(let r of e.enemies){let e=new Map,i=this.#e.get(r.id);for(let n of Ay){let a=jy(r,n);a<=0||(e.set(n,a),this.#t&&a>(i?.get(n)??0)&&t.push({target:r.id,key:n,x:r.x,y:r.y}))}n.set(r.id,e)}return this.#e=n,this.#t=!0,t}};function Fy(e,t,n,r){let i={fromX:n.x,fromY:n.y,toX:n.x+n.dx*n.strength,toY:n.y+n.dy*n.strength};for(let n=t+1;n<e.length;n++){let t=e[n];if(t?.type===`damage`){if(t.reaction)return{...i,kind:`chain`,reaction:t.reaction};if(t.element)return{...i,kind:`fork`,element:t.element};break}}let a=r.some(e=>Ny(e.x,n.x)&&Ny(e.y,n.y));return{...i,kind:a?`death`:`fork`}}var Iy=[{left:e=>e.burn,style:wh},{left:e=>e.status?.slow??0,style:kh},{left:e=>e.status?.wet??0,style:kh},{left:e=>(e.status?.poison??0)>0?e.status?.poisonFrames??0:0,style:$h,power:e=>e.status?.poison??1},{left:e=>e.status?.blind??0,style:fg},{left:e=>e.status?.weaken??0,style:_g},{left:e=>e.status?.curse??0,style:lg},{left:e=>e.stun>0&&(e.status?.paralyzeReady??0)>0?e.stun:0,style:Hh}],Ly=X(`#c8fff0`,2.4),Ry=X(`#6af0c0`,1.4),zy=X(`#d070b0`,1.6),By=X(`#6a2a5a`,.8),Vy=X(`#7aa040`,.35),Hy=X(`#a06aff`,1.6),Uy=X(`#f0e0ff`,2.2),Wy=X(`#d8ff8a`,2),Gy=X(`#8ac83a`,1),Ky=X(`#1c1c34`),qy=X(`#f0fff4`,1.8),Jy=[{left:e=>e.neurotoxin,aura:(e,t,n,r,i)=>{hh(t,3,i)&&e.ambience.emit(t,{x:r.x+Z(n,-.3,.3),y:r.lift+r.height*Z(n,.3,.9),z:r.z+Z(n,-.3,.3),vx:Z(n,-2,2),vy:Z(n,-1,2),vz:Z(n,-2,2),drag:4,life:6,size:.03,color:Ly,color2:Ry,shape:Y.spark,stretch:2})}},{left:e=>e.decay,aura:(e,t,n,r,i)=>{hh(t,5,i)&&e.ambience.emit(t,{x:r.x+Z(n,-.3,.3),y:r.lift+r.height*Z(n,.5,.95),z:r.z+Z(n,-.3,.3),vy:-1.2,ay:-3,life:20,size:.04,color:zy,color2:By,shape:Y.flake,spin:6})}},{left:e=>e.plague,aura:(e,t,n,r,i)=>{hh(t,8,i)&&e.ambience.emit(t,{x:r.x+Z(n,-.2,.2),y:r.lift+r.height*.8,z:r.z+Z(n,-.2,.2),vy:.4,life:40,size:.2,grow:2,color:Vy,alpha:.6,shape:Y.smoke,seed:n.float()})}},{left:e=>e.deathArc,aura:(e,t,n,r,i)=>{if(!hh(t,10,i))return;let a=r.lift+r.height;e.bolts.add(t,{from:new R(r.x+Z(n,-.3,.3),a+.2,r.z),to:new R(r.x+Z(n,-.3,.3),r.lift+r.height*.4,r.z+Z(n,-.3,.3)),life:4,width:.018,glow:Hy,core:Uy,jag:.3,branches:0,seed:n.u32()})}},{left:e=>e.radiate,aura:(e,t,n,r,i)=>{if(!hh(t,4,i))return;let a=n.float()*Math.PI*2;e.ambience.emit(t,{x:r.x,y:r.lift+r.height*Z(n,.3,.8),z:r.z,vx:Math.cos(a)*1.6,vz:Math.sin(a)*1.6,drag:1.5,life:18,size:.04,color:Wy,color2:Gy,shape:Y.mote})}},{left:e=>e.silence,aura:(e,t,n,r,i)=>{hh(t,6,i)&&e.shade.emit(t,{x:r.x+Z(n,-.15,.15),y:r.lift+r.height+.25,z:r.z+Z(n,-.15,.15),vy:.1,life:24,size:.22,grow:1.4,color:Ky,alpha:.5,shape:Y.cloud,seed:n.float()})}},{left:e=>e.suppress,aura:(e,t,n,r,i)=>{hh(t,8,i)&&e.ambience.emit(t,{x:r.x+Z(n,-.3,.3),y:r.lift+.1,z:r.z+Z(n,-.3,.3),vy:Z(n,.8,1.4),life:28,size:.04,color:qy,shape:Y.mote})}}];function Yy(e){if(Iy.some(t=>t.left(e)>0))return!0;let t=e.status;return t!==void 0&&Jy.some(e=>e.left(t)>0)}function Xy(e,t,n,r){let i=0;for(let e of n)e.hp>0&&Yy(e)&&i++;let a=Math.ceil(i/10);for(let i of n){if(i.hp<=0||a>1&&v([i.id,t])%a!==0)continue;let n=null;Iy.forEach((a,o)=>{let s=a.left(i);s<=0||(n??=r(i),a.style.aura(e,t,u_.rng(t,i.id,31+o),n,s,a.power?.(i)??1))});let o=i.status;o&&Jy.forEach((a,s)=>{let c=a.left(o);c<=0||(n??=r(i),a.aura(e,t,u_.rng(t,i.id,51+s),n,c))})}}function Zy(e,t,n,r,i){let a={x:i.x,y:i.lift+i.height*.55,z:i.z};if(r.kind===`burn`)for(let r=0;r<4;r++)e.sparks.emit(t,{...a,vx:(n.float()-.5)*2,vy:1.5+n.float()*1.5,vz:(n.float()-.5)*2,drag:2,life:16,size:.035,color:wh.core,color2:wh.glow,shape:Y.spark,stretch:1});else if(r.kind===`decay`)for(let r=0;r<5;r++)e.sparks.emit(t,{x:a.x+(n.float()-.5)*.5,y:a.y+n.float()*.4,z:a.z+(n.float()-.5)*.5,vy:-1,ay:-4,life:18,size:.045,color:zy,color2:By,shape:Y.flake,spin:8});else if(r.kind===`radiate`)e.mark(t,{layer:`ground`,x:r.x,y:.03,z:r.y,size:r.strength*.3,size2:r.strength,alpha:.85,life:14,r:.55,g:.75,b:.2,shape:Y.shock,flat:!0}),e.sparks.emit(t,{...a,life:8,size:.45,grow:1.4,color:Wy,alpha:.6,alpha2:0,shape:Y.glow});else if(r.kind===`poison`)for(let r=0;r<3;r++)e.sparks.emit(t,{x:a.x+(n.float()-.5)*.4,y:a.y+(n.float()-.5)*.4,z:a.z+(n.float()-.5)*.4,vy:.6,life:12,size:.06,grow:1.6,color:$h.glow,alpha:.9,alpha2:0,shape:Y.ring})}var Qy=[{left:e=>e.status?.curse??0,shape:Y.rune,size:.26,color:null},{left:e=>e.status?.suppress??0,shape:Y.cross,size:.22,color:X(`#e8fff0`,1.5)},{left:e=>e.status?.deathArc??0,shape:Y.bolt,size:.22,color:X(`#b08aff`,1.9)},{left:e=>e.status?.plague??0,shape:Y.plague,size:.24,color:X(`#9ad04a`,1.6)},{left:e=>e.status?.silence??0,shape:Y.cloud,size:.26,color:X(`#6a6ab8`,1.1)}],$y=new R,eb={r:2.4,g:2.1,b:1.1},tb={r:2.4,g:2.3,b:1.9};function nb(e,t,n,r,i){for(let a of n){let n=t.get(a.id);if(!n)continue;let o=n.lift+n.height+.3;if(a.stun>0&&a.air<=0)for(let t=0;t<3;t++){let i=r*.2+t*Math.PI*2/3;$y.set(n.x+Math.cos(i)*.42,o+.05*Math.sin(r*.3+t),n.z+Math.sin(i)*.42),e.over.add({...$y,size:.17,...eb,alpha:.95,shape:Y.star,angle:r*.1})}let s=Qy.filter(e=>e.left(a)>0);s.forEach((t,c)=>{let l=Math.min(1,t.left(a)/30),u=t.color??i;e.over.add({x:n.x+(c-(s.length-1)/2)*.36,y:o+.25,z:n.z,size:t.size,r:u.r,g:u.g,b:u.b,alpha:.85*l,shape:t.shape,phase:r*.03,seed:a.id%13/13})});let c=a.status?.radiate??0;c>0&&e.ground.add({x:n.x,y:.03,z:n.z,size:(a.status?.radiateRadius??1)/.8,r:.45,g:.62,b:.16,alpha:(.18+.08*Math.sin(r*.2))*Math.min(1,c/30),shape:Y.ring,flat:!0});let l=a.status?.blind??0;if(l>0){let t=Math.min(1,l/30);for(let i=0;i<4;i++){let a=-r*.15+i*Math.PI/2;e.over.add({x:n.x+Math.cos(a)*.3,y:n.lift+n.height*.92,z:n.z+Math.sin(a)*.3,size:.08+.03*Math.sin(r*.4+i),...tb,alpha:.9*t,shape:Y.star})}}}}var rb=new Set([lh.hit,lh.death,lh.arc,lh.gust,lh.burn,lh.poison,lh.stun,lh.explode,lh.hurt,lh.dodge,lh.decay,lh.radiate,...ky,...pv,`core:fireball`,`core:fire_hit`,`core:ice_shard`,`core:ice_hit`,`core:whirlwind`,`core:lunge`,`core:pierce`,`core:enemy_shot`,`core:enemy_dash`,...fv]),ib=new Set([`core:fire_hit`,`core:ice_hit`]),ab=6,ob=`core:thunder_curse`,sb=.62,cb=(e,t=1)=>new V(e).multiplyScalar(t),lb=class{vfx=new u_;#e=new Py;#t=new Map;#n;#r;#i;#a=null;#o=()=>1;#s=new R;#c=new U_;#l=new dv;#u;#d;#f=null;#p=null;constructor(e){this.#n=cb(e.spark,1.6),this.#r=cb(e.impact,1.4),this.#i=cb(e.shatter,1.4),this.#u=new Ey(this.vfx.group),this.#d=new Pv(this.vfx.group)}attach(e,t,n){this.#a=e,this.#o=t,this.#c.attach(n),this.#u.attach(e)}get cast(){return this.#f}claims(e){return rb.has(e)}#m(e){let t=this.#a?.enemies.get(e.def),n=t?e.radius/t.radius:1;return{x:e.x,z:e.y,lift:sd(e.air,e.airTotal,1),height:this.#o(e.visual)*n,radius:e.radius}}observe(e,t,n){let r=this.#a;if(!r)return;let i=this.#e.read(t,e),a=this.vfx,o=new Map(e.enemies.map(e=>[e.id,e])),s=e.player;this.#p=s.dead&&s.hp<=0?{x:s.x,y:s.y}:null;let c=this.#c.observe(a,e,n);this.#l.observe(a,e,n),this.#u.observe(a,e,t,n,e=>this.#m(e)),this.#d.observe(a,e,t,n),c&&(this.#f={frame:n,...c});let l=new Set;for(let e of t)e.type===`cue`&&ib.has(e.cue)&&l.add(ub(e.x,e.y));let u=i.hits.filter(e=>e.element).length,d=u>ab?Math.sqrt(ab/u):1;if(i.hits.forEach((t,i)=>{let s=o.get(t.target),c=s?this.#m(s):null,u={x:t.x,y:(c?.lift??0)+(c?.height??1.2)*sb,z:t.y},f=t.element?yg(t.element,r.elements.get(t.element)?.color):null;if(this.#h(n,i,u,t.dx,t.dy,t.strength,f,l.has(ub(t.x,t.y))),f&&(f.hit(a,n,u_.rng(n,11,i),u,t.dx,t.dy,t.strength*d),f===rg)){let t=e.player;ig(a,n,u_.rng(n,12,i),u,{x:t.x,y:.9,z:t.y})}}),i.arcs.forEach((e,t)=>{this.#g(n,t,e)}),i.gusts.forEach((e,t)=>{e.targets.forEach((r,i)=>{let o={x:e.x,y:.75,z:e.y};Rh(a,n,u_.rng(n,13,t,i),o,{x:r.x,y:.75,z:r.y})})}),n%2==0)for(let t of e.enemies)t.knock<=0||t.air>0||t.hp<=0||Jh(a,n,u_.rng(n,t.id,17),this.#m(t));i.ticks.forEach((t,r)=>{let i=null;for(let n of e.enemies)Math.abs(n.x-t.x)<1e-6&&Math.abs(n.y-t.y)<1e-6&&(i=n);let o=i?this.#m(i):{x:t.x,z:t.y,lift:0,height:1.2,radius:.4};Zy(a,n,u_.rng(n,14,r),t,o)}),Xy(a,n,e.enemies,e=>this.#m(e))}#h(e,t,n,r,i,a,o,s=!1){let c=u_.rng(e,10,t),l=o?4:6+Math.round(a*5);for(let t=0;t<l;t++){let t=(c.float()-.5)*1.4,a=r-i*t,s=i+r*t,l=4+c.float()*5;this.vfx.sparks.emit(e,{...n,vx:a*l,vy:1+c.float()*3,vz:s*l,ay:-9.8,drag:2.5,life:10+c.float()*8,size:.03,color:o?.core??this.#n,shape:Y.spark,stretch:1.6})}o||s||this.vfx.sparks.emit(e,{x:n.x-r*.3,y:n.y,z:n.z-i*.3,life:7,size:.35+.1*Math.min(2,a),grow:1.5,color:this.#r,shape:Y.star,angle:c.float()*3})}#g(e,t,n){let r=this.#a,i=n.kind===`chain`?n.reaction:n.kind===`death`?ob:n.element,a=(n.kind===`fork`?r?.elements.get(n.element??``)?.color:void 0)??(i?r?.reactions.get(i)?.color:void 0)??`#4ae0ff`,o=cb(a,1.4),s=cb(a,.5).add(cb(`#ffffff`,2)),c=u_.rng(e,15,t);this.vfx.bolts.add(e,{from:new R(n.fromX,.85,n.fromY),to:new R(n.toX,.85,n.toY),life:12,width:.04,glow:o,core:s,jag:.14,branches:2,seed:c.u32()});for(let[t,r,i]of[[n.fromX,n.fromY,.22],[n.toX,n.toY,.32]])this.vfx.sparks.emit(e,{x:t,y:.85,z:r,life:9,size:i,grow:1.4,color:o,alpha:.45,shape:Y.glow});for(let t=0;t<8;t++){let t=c.float()*Math.PI*2,r=3+c.float()*4;this.vfx.sparks.emit(e,{x:n.toX,y:.85,z:n.toY,vx:Math.cos(t)*r,vy:1+c.float()*2,vz:Math.sin(t)*r,ay:-6,drag:3,life:8+c.float()*6,size:.03,color:s,color2:o,shape:Y.spark,stretch:2})}n.kind===`chain`&&this.#u.arc(this.vfx,e,u_.rng(e,19,t),n)}cue(e,t){if(!rb.has(e.cue))return!1;if(this.#u.drew(e)||this.#d.cue(this.vfx,e,t)||this.#c.cue(this.vfx,e,t)||this.#l.cue(this.vfx,e,t))return!0;let n=this.#p;if(e.cue===lh.death&&n&&db(n.x,e.x)&&db(n.y,e.y))return this.#_(e,t),!0;if(e.cue===lh.death){let n=u_.rng(t,16,Math.round(e.x*100),Math.round(e.y*100));for(let r=0;r<18;r++){let r=n.float()*Math.PI*2,i=1.5+n.float()*3;this.vfx.sparks.emit(t,{x:e.x,y:.5,z:e.y,vx:Math.cos(r)*i,vy:1+n.float()*3,vz:Math.sin(r)*i,ay:-6,drag:1.5,life:26+n.float()*14,size:.05,color:this.#i,shape:Y.flake,spin:8})}}return!0}#_(e,t){let n=this.vfx,r=u_.rng(t,18),i={x:e.x,y:.5,z:e.y};n.sparks.emit(t,{...i,life:14,size:.9,grow:1.4,color:this.#r,alpha:.7,alpha2:0,shape:Y.glow}),n.mark(t,{layer:`ground`,x:i.x,y:.03,z:i.z,size:.4,size2:2.2,alpha:.8,life:30,r:this.#n.r*.6,g:this.#n.g*.6,b:this.#n.b*.6,shape:Y.shock,flat:!0});for(let e=0;e<24;e++){let e=r.float()*Math.PI*2,a=.2+r.float()*.5;n.sparks.emit(t,{x:i.x+Math.cos(e)*a,y:.2+r.float()*.8,z:i.z+Math.sin(e)*a,vy:.6+r.float()*1.2,drag:.8,delay:r.int(0,10),life:40+r.float()*30,size:.04,color:this.#n,shape:Y.mote})}}beginFrame(){this.#t.clear()}anchor(e,t,n){this.#t.set(e.id,{id:e.id,x:t.x,z:t.y,lift:t.lift,height:n*t.size,radius:e.radius})}draw(e,t,n,r){let i=this.vfx;i.begin();let a=this.#a?.elements.get(`core:unholy`)?.color??`#c0304a`;nb(i,this.#t,e.enemies,t,cb(a,1.6)),this.#c.draw(i,e,t,r),this.#l.draw(i,e,t,r),this.#u.draw(i,e,t,r),this.#d.draw(i,e,t,r),i.end(t,this.#s.copy(n))}reset(){this.#e.reset(),this.#t.clear(),this.#c.reset(),this.#l.reset(),this.#u.reset(),this.#d.reset(),this.#f=null,this.#p=null,this.vfx.clear()}dispose(){this.#d.dispose(),this.#u.dispose(),this.vfx.dispose()}};function ub(e,t){return`${e},${t}`}var db=(e,t)=>Math.abs(e-t)<1e-6,fb=-1,pb=e=>fb-e,mb=[{cloak:`#3f9e4d`,cloth:`#9a7b2f`},{cloak:`#8e4fc0`,cloth:`#2f7f9a`},{cloak:`#d98a26`,cloth:`#5d4a9a`}],hb=12,gb=8,_b={height:1.7,fling:2.4},vb=42,yb=9.8,bb=.025,xb=3,Sb=12,Cb=16,wb=.3,Tb=new V(`#ff3344`),Eb=new V(`#ffc94a`),Db=new V(`#ffffff`);function Ob(e,t){let n=e.hitbox;return n.kind===`arc`?Math.min(2.6,Math.max(nm,n.radius*t-.45)):nm*1.12}var kb=new R,Ab=new R,jb=new B,Mb=new B,Nb=new B,Pb=new Bt,Fb=new R,Ib=new R,Lb=new Bt,Rb=new R,zb=class{id;#e;#t;#n;#r;#i;#a;#o;#s=null;#c=null;#l=null;#u;#d=null;#f=[];#p=[];#m={x:0,y:0};#h=new Map;#g=new wf;#_=new Map;#v=[];#y=new Map;#b=new Map;#x=-1;#S=0;#C=0;#w=new ch;#T=new Float32Array(this.#w.samples*6);#E=new V;#D;#O;#k=null;player;enemies;replaces={reaction:()=>!0,ward:!0,stuns:!0,debuffs:!0,areas:!0,beams:!0,doors:!0,loot:!0};constructor(e){this.id=e.id,this.#e=e.mine,this.#u=new Hm(e.mine.scenery),this.#t=e.hunter,this.#n=e.foes,this.#r=e.mine.stage,this.#i=e.hitArea??1,this.#a=e.model,this.#o=e.terrain;let t=this.#t.fx;this.#D={glow:new V(t.slash),core:new V(t.slashCore),finisher:new V(t.finisher)},this.#O=new lb({spark:t.spark,impact:t.impact,shatter:this.#n.fx.shatter}),this.player={update:(e,t,n,r,i)=>this.#z(e,t,n,r,i),ally:(e,t,n,r,i,a)=>this.#B(e,t,n,r,i,a)},this.enemies={handles:e=>this.#A(e)!==null,begin:()=>{this.#O.beginFrame();for(let e of this.#h.values())e?.batch.begin()},add:(e,t,n,r)=>this.#F(e,t,n,r),anchor:(e,t,n)=>this.#O.anchor(e,t,n),end:e=>{this.#I(e);for(let e of this.#h.values())e?.batch.end()}}}attach(e){this.#s=e,this.#S=e.seed,this.#c=new rh(e,this.#r),e.proto.playerPivot.visible=!1,e.scene.add(this.#O.vfx.group),this.#O.attach(e.content,t=>e.skin.visuals.get(t)?.params.height||1.2,t=>e.skin.visuals.get(t)?.gen);let t=e.skin.visuals.get(e.content.player.visual),n=t?Hd[t.gen]:void 0;if(n&&t){let r=this.#t,i=this.#a?.(t.gen,r.palette,1)??km(n,r,r.palette,1),a=new U({color:0,transparent:!0,blending:2,depthWrite:!1}),o={rig:i.rig,parts:i.parts.filter(e=>!e.hull).map(e=>({...e,material:a,renderOrder:23}))};this.#d={batch:new ff(e.scene,i,1),animator:new xm,ghosts:new ff(e.scene,o,6)},e.scene.add(this.#w.group)}else e.proto.playerPivot.visible=!0;for(let t of e.content.enemies.values())this.#A(t.visual);e.renderer.compile(e.scene,e.camera)}#A(e){let t=this.#h.get(e);if(t!==void 0)return t;let n=this.#s,r=n?.skin.visuals.get(e),i=r&&r.gen!==`rig.hunter`?Hd[r.gen]:void 0,a=null;if(n&&r&&i){let e=this.#n,t=e.palettes[r.gen]??{},o=this.#a?.(r.gen,t,7)??km(i,e,t,7);a={style:e,model:o,batch:new ff(n.scene,o),animator:mp(r.gen)}}return this.#h.set(e,a),a}observe(e,t,n){let r=e.player;if(e.hitstop<=0){let t=r.dodgeFrame<0&&!r.dash&&!r.pull&&!r.dead;this.#g.step(fb,r.x,r.y,t,e.frame),e.party?.forEach((t,n)=>{let r=t.player,i=r.dodgeFrame<0&&!r.dash&&!r.pull&&!r.dead&&!r.downed;this.#g.step(pb(n+1),r.x,r.y,i,e.frame)});for(let t of e.enemies){if(!this.#A(t.visual))continue;let n=t.state===`free`&&t.knock<=0&&t.stun<=0&&t.air<=0;this.#g.step(t.id,t.x,t.y,n,e.frame)}this.#g.sweep(e.frame)}let i=-1;for(let e of t)e.type===`damage`?i=e.target:e.type===`cue`&&e.cue===lh.hit&&i>=0?this.#y.set(i,{frame:n,dx:e.dx,dy:e.dy}):e.type===`cue`&&e.cue===`core:boss_slam`&&(this.#x=n);for(let t of e.enemies)t.boss&&t.boss.phase>=2&&!this.#b.has(t.id)&&this.#b.set(t.id,n);for(let e of t){if(e.type!==`death`)continue;let t=this.#_.get(e.target),r=t?this.#A(t.visual):null;if(!t||!r)continue;let i=new Float32Array(r.animator.pose({...t.motion,x:0,y:0,yaw:0,lift:0})),a=e.launch,o=a?n+1+a.hold:n;this.#v.push({beast:r,local:i,x:e.x,y:e.y,yaw:t.motion.yaw,dx:a?.dx??0,dy:a?.dy??0,start:o,land:a&&a.total>0?o+a.air:o,from:a&&a.total>0?(a.total-a.air)/a.total:1,seed:y(this.#S,`remains:${e.target}:${n}`)})}let a=new Map;for(let t of e.enemies){if(!this.#A(t.visual))continue;let n=this.#j(t,r.x,r.y);a.set(t.id,{visual:t.visual,motion:this.#N(t,{x:t.x,y:t.y,lift:0,yaw:n,size:this.#M(t)},1,e.frame)})}this.#_=a,this.#O.observe(e,t,n)}#j(e,t,n){let r=e.boss?e.boss.mode!==`walk`:e.state!==`free`;return Math.atan2(r?e.aimX:t-e.x,r?e.aimY:n-e.y)}#M(e){let t=this.#s?.content.enemies.get(e.def);return t?e.radius/t.radius:1}#N(e,t,n,r){let i=this.#s?.content.enemies.get(e.def)?.attack,a=e.knock>0?e.kx:0,o=e.knock>0?e.ky:0,s=Math.sqrt(a*a+o*o);s>1e-6&&(a/=s,o/=s);let c=Math.cos(t.yaw),l=Math.sin(t.yaw),u=this.#y.get(e.id),d=null;return u&&(d={age:r-u.frame,x:u.dx*c-u.dy*l,z:u.dx*l+u.dy*c}),{hit:d,boss:e.boss?this.#P(e,n,r):null,x:t.x,y:t.y,lift:t.lift,yaw:t.yaw,size:t.size,gait:this.#g.get(e.id)?.gait??null,alpha:n,state:e.state,frame:e.stateFrame-1+n,warn:e.warnFrames,recover:i?.recover??30,travelled:e.travelled,flash:e.flash/gb,pushX:a*c-o*l,pushZ:a*l+o*c,air:e.air<=0||e.airTotal<=0?-1:Df((e.airTotal-e.air-1+n)/e.airTotal,0,1),stun:e.stun,time:r}}#P(e,t,n){let r=e.boss;if(!r)return null;let i=this.#s?.content.enemies.get(e.def),a=(r.pattern>=0?i?.boss?.patterns[r.pattern]:void 0)?.kind,o=this.#b.get(e.id),s=r.breakStun-e.stun;return{kind:a===`slam`||a===`ring`||a===`charge`?a:null,mode:r.mode,frame:r.frame-1+t,warn:r.warn,grown:o===void 0?0:kf((n-o)/30),struck:this.#x>=0?n-this.#x:-1,broken:e.stun>0?kf(s/10)*kf(e.stun/15):0}}#F(e,t,n,r){let i=this.#A(e.visual);if(!i)return;let a=n?this.#E.copy(n).multiplyScalar(i.style.fx.flash):null,o=t;if(this.#C>0&&e.flash>0){let n=(r.frame%2==0?1.2:-1.2)*bb,i=Math.sqrt(e.kx*e.kx+e.ky*e.ky),[a,s]=i>1e-6?[e.kx/i,e.ky/i]:[1,0];o={...t,x:t.x+a*n,y:t.y+s*n}}i.batch.add(i.animator.pose(this.#N(e,o,r.alpha,r.time)),a)}#I(e){let t=e.time;this.#v=this.#v.filter(e=>t<e.land+vb);for(let e of this.#v){let n=e.beast.batch,r=e.local.length/16,i=new Float32Array(e.local.length);if(t<e.land){let a=Math.max(0,(t-e.start)/Math.max(1,e.land-e.start)),o=e.from+(1-e.from)*a,s=_b.fling*(1-e.from)*(1-(1-a)**2);Nb.makeTranslation(e.x+e.dx*s,4*_b.height*o*(1-o),e.y+e.dy*s),Nb.multiply(jb.makeRotationY(e.yaw)),Nb.multiply(jb.makeTranslation(0,.5,0)),Nb.multiply(jb.makeRotationX(-Math.PI*2*a)),Nb.multiply(jb.makeTranslation(0,-.5,0));for(let t=0;t<r;t++)jb.fromArray(e.local,t*16).premultiply(Nb).toArray(i,t*16);let c=1-Math.min(1,Math.max(0,t-e.start)/10),l=.9*c*e.beast.style.fx.flash;n.add(i,c>0?this.#E.copy(Db).multiplyScalar(l):null);continue}let a=_b.fling*(1-e.from);Nb.makeTranslation(e.x+e.dx*a,0,e.y+e.dy*a),Nb.multiply(jb.makeRotationY(e.yaw));let o=(t-e.land)/60,s=1-kf((t-e.land)/vb),c=e.beast.model.parts,l=new Float32Array(c.length*16),u=f(e.seed),d=Array.from({length:r},()=>({vx:(u.float()-.5)*5,vy:2+u.float()*3,vz:(u.float()-.5)*5,ax:u.float()-.5,ay:u.float()-.5,az:u.float()-.5,w:6+u.float()*10}));c.forEach((t,n)=>{let r=d[t.joint];if(!r)return;jb.fromArray(e.local,t.joint*16).premultiply(Nb),jb.decompose(Ib,Lb,Rb);let i=Math.max(.05,Ib.y+r.vy*o-.5*yb*o*o);Fb.set(r.ax,r.ay,r.az).normalize(),Pb.setFromAxisAngle(Fb,r.w*o).multiply(Lb),Ib.set(Ib.x+r.vx*o,i,Ib.z+r.vz*o),Mb.compose(Ib,Pb,Rb.multiplyScalar(Math.max(.001,s))),Mb.toArray(l,n*16)}),n.addPieces(l,null)}}cue(e,t,n){let r=this.#s;if(!r||!this.#O.claims(e.cue))return!1;if((e.cue===lh.dodge||e.cue===`core:lunge`)&&this.#L(e,n),e.cue===`core:level_up`&&r.fx.ascension.play(n),e.cue===lh.hit){let t=e.strength>=2.5?.42:Math.min(.22,.04+.07*e.strength);r.fx.shake(n,t)}return this.#O.cue(e,n)}#L(e,t){let n=this.#s,r=this.#d;if(!n||!r)return;let i=e.cue!==lh.dodge,a=i?e.strength:n.content.player.dodgeDistance,o=Math.atan2(e.dx,e.dy);for(let s=0;s<xb;s++){let c=(s+.5)/xb,l={x:e.x+e.dx*a*(s/xb),y:e.y+e.dy*a*(s/xb),yaw:o,gait:null,alpha:1,swing:null,steps:n.content.action.steps,chain:0,dodge:i?null:{t:c,dx:e.dx,dy:e.dy},dash:i?{t:c,dx:e.dx,dy:e.dy}:null,hurt:0,dead:!1,time:t};this.#p.push({joints:new Float32Array(r.animator.pose(l)),start:t+s*(i?2:3)})}this.#p=this.#p.slice(-6)}#R(e){let t=this.#d;if(t){this.#p=this.#p.filter(t=>e-t.start<Sb),t.ghosts.begin();for(let n of this.#p){let r=e-n.start;if(r<0)continue;let i=.55*(1-r/Sb);t.ghosts.add(n.joints,this.#E.copy(this.#D.glow).multiplyScalar(i))}t.ghosts.end()}}model(e){return e?pd(e.gen):null}stage(e,t){let n=this.#s;if(!n)return;this.#k=e,this.#C=e.hitstop,this.#u.update(e,t.time);let r=`${e.arena}|${e.width}x${e.height}|${e.seed}`;if(this.#l?.key===r)return;this.#l&&n.scene.remove(this.#l.group);let i=this.#o?this.#o(e.width,e.height,e.seed):Rm(this.#e,e.width,e.height,e.seed);n.scene.add(i),this.#l={key:r,group:i},this.#u.stage(i.userData.glow??null)}#z(e,t,n,r,i){let a=this.#s,o=this.#d;if(!a||!o)return;let s=e.player,c=a.content;this.#m.x=t,this.#m.y=n;let l=e.hitstop>0?e.frame%2==0?bb:-.025:0,u=this.#O.cast,d=e.areas.find(e=>(e.owner??0)===0),f={x:t+s.fx*l,y:n+s.fy*l,yaw:Math.atan2(s.fx,s.fy),gait:this.#g.get(fb)?.gait??null,alpha:i.alpha,swing:r,steps:c.action.steps,chain:Df(s.attackBuffer/4,0,1),dodge:s.dodgeFrame>=0?{t:Df((s.dodgeFrame-1+i.alpha)/c.player.dodgeFrames,0,1),dx:s.dodgeX,dy:s.dodgeY}:null,dash:s.dash?{t:s.dash.frame/Math.max(1,s.dash.frames),dx:s.dash.dx,dy:s.dash.dy}:null,hurt:s.hurt/hb,dead:s.dead,time:i.time,cast:u&&i.time-u.frame<Cb?{t:(i.time-u.frame)/Cb}:null,whirl:d?{turn:W_(d.frame,i.alpha)}:null};this.#H(this.#w,this.#T,o.animator,f,r),this.#R(i.time);let p=o.animator.pose(f),m=s.invulnerable>0&&s.dodgeFrame<0&&!s.dash&&Math.floor(e.frame/4)%2==1,h=a.fx.ascension.bodyGlow(i.time),g=null;if(s.hurt>0?g=this.#E.copy(Tb).multiplyScalar(s.hurt/hb):h>0&&!m?g=this.#E.copy(Eb).multiplyScalar(.9*h):m&&(g=this.#E.copy(Db).multiplyScalar(.35)),o.batch.begin(),o.batch.add(p,g),o.batch.end(),this.#c?.follow(t,n,o.animator.lift),a.fx.slash.hide(),r){let e=r.index===c.action.steps.length-1;a.fx.hitArea.color.copy(e?this.#D.finisher:this.#D.glow),a.fx.hitArea.opacity*=this.#i,a.fx.shockwave.color.copy(this.#D.finisher)}}#B(e,t,n,r,i,a){let o=e.party?.[t-1],s=o?this.#V(t):null,c=this.#s;if(!c||!o||!s)return;if(s.batch.begin(),o.gone){s.trail.hide(),s.batch.end();return}let l=o.player,u=c.content,d=e.areas.find(e=>e.owner===t),f={x:n,y:r,yaw:Math.atan2(l.fx,l.fy),gait:this.#g.get(pb(t))?.gait??null,alpha:a.alpha,swing:i,steps:u.action.steps,chain:Df(l.attackBuffer/4,0,1),dodge:l.dodgeFrame>=0?{t:Df((l.dodgeFrame-1+a.alpha)/u.player.dodgeFrames,0,1),dx:l.dodgeX,dy:l.dodgeY}:null,dash:l.dash?{t:l.dash.frame/Math.max(1,l.dash.frames),dx:l.dash.dx,dy:l.dash.dy}:null,hurt:l.hurt/hb,dead:l.dead||l.downed!==void 0,time:a.time,whirl:d?{turn:W_(d.frame,a.alpha)}:null};this.#H(s.trail,s.points,s.animator,f,i);let p=l.invulnerable>0&&l.dodgeFrame<0&&!l.dash&&Math.floor(e.frame/4)%2==1,m=null;l.hurt>0?m=this.#E.copy(Tb).multiplyScalar(l.hurt/hb):p&&(m=this.#E.copy(Db).multiplyScalar(.35)),s.batch.add(s.animator.pose(f),m),s.batch.end()}#V(e){let t=this.#f[e-1];if(t!==void 0)return t;let n=this.#s,r=n?.skin.visuals.get(n.content.player.visual),i=r?Hd[r.gen]:void 0,a=null;if(n&&r&&i){let t=this.#t,o=mb[(e-1)%mb.length],s={...t.palette,...o},c=this.#a?.(r.gen,s,1)??km(i,t,s,1),l=new ch;n.scene.add(l.group),a={batch:new ff(n.scene,c,1),animator:new xm,trail:l,points:new Float32Array(l.samples*6)}}return this.#f[e-1]=a,a}#H(e,t,n,r,i){if(!i||r.dodge||r.dead||r.dash){e.hide();return}let a=Rp(i);if(a.opacity<=0||i.f-a.tail<.05){e.hide();return}let o=Ob(i.step,i.widen),s=e.samples;for(let e=0;e<s;e++){let c=a.tail+(i.f-a.tail)*e/(s-1);n.blade({...r,swing:{index:i.index,step:i.step,f:c}},kb,Ab);let l=e*6;t[l]=kb.x+Ab.x*wb,t[l+1]=kb.y+Ab.y*wb,t[l+2]=kb.z+Ab.z*wb,t[l+3]=kb.x+Ab.x*o,t[l+4]=kb.y+Ab.y*o,t[l+5]=kb.z+Ab.z*o}let c=i.index===r.steps.length-1;e.show(t,a.opacity,c?this.#D.finisher:this.#D.glow,this.#D.core)}draw(e){let t=this.#s;t&&this.#k&&this.#O.draw(this.#k,e.time,t.camera.position,this.#m),this.#c?.draw()}resize(e,t){this.#c?.resize(e,t)}reset(e){this.#g.clear(),this.#_.clear(),this.#v=[],this.#p=[],this.#y.clear(),this.#b.clear(),this.#x=-1,this.#O.reset()}stats(){return this.#c?.stats()??{calls:0,triangles:0}}dispose(){this.#O.dispose(),this.#w.dispose(),this.#c?.dispose(),this.#d?.batch.dispose(),this.#d?.ghosts.dispose();for(let e of this.#f)e?.batch.dispose(),e?.trail.dispose();for(let e of this.#h.values())e?.batch.dispose()}},Bb={block:.5,texels:16};function Vb(e){Bb={block:e.block,texels:e.texels}}var Hb={block:{name:`選定・方塊`,blurb:`場景和光照 B（暖色的火把、晶石發光、霧），角色照 C（手腳兩節）；方塊 0.5 公尺。`},block_classic:{name:`A・經典方塊`,blurb:`Minecraft 的比例：手腳只有一節（手肘、膝蓋不會彎，連段要另外調），霧面、清楚的光。`},block_dungeon:{name:`B・地城方塊`,blurb:`Minecraft Dungeons 的感覺：方塊厚實，暖色的火把光，晶石發光，遠處有霧。`},block_jointed:{name:`C・關節方塊`,blurb:`手腳兩節，像 Hytale：現在的連段動作保留得最完整；冷色的光。`}},Ub={skin:`#e2b48c`,cloth:`#3f82d6`,cloak:`#34548f`,armor:`#c8c6bd`,trim:`#6b4a2e`,crystal:`#6fe9ff`,eye:`#a6f6ff`,blade:`#e9eef6`,edge:`#000000`},Wb={"rig.charger":{hide:`#6a5a8c`,horn:`#d9ccb0`,crystal:`#ff5fd6`,eye:`#ffa2f2`},"rig.dummy":{hide:`#b08a5e`,horn:`#7a5634`,crystal:`#ffcf5a`,eye:`#3a2a1a`},"rig.shooter":{hide:`#4f6a8a`,horn:`#c9d4e0`,crystal:`#7affc8`,eye:`#c8fff0`},"rig.guardian":{hide:`#5d5470`,horn:`#d6c9e8`,crystal:`#c97bff`,eye:`#f0c8ff`,armor:`#8a83a0`}},Gb={stone:`#7b7b83`,slate:`#6a6e7a`,cobble:`#6c6c74`,deep:`#3b3a46`,dirt:`#6b4f36`,ore:`#5ef0ff`,planks:`#9b7447`,flame:`#ffb347`},Kb={classic:{stage:{background:`#1a1f2b`,sky:{color:`#dfe8ff`,ground:`#3a3530`,intensity:1.25},key:{color:`#fffaf0`,intensity:1.7,at:[-6,14,8]},rim:null,follow:null,bloom:{strength:.25,radius:.2,threshold:1},exposure:1},roughness:1,glow:.9,torch:null},dungeon:{stage:{background:`#120e18`,sky:{color:`#8a7a9a`,ground:`#1a1210`,intensity:.55},key:{color:`#ffd9a8`,intensity:.85,at:[-6,14,8]},rim:{color:`#ffb36b`,intensity:.5,at:[4,6,-10]},follow:{color:`#ffc890`,intensity:1.6,distance:7,height:2.6},bloom:{strength:.75,radius:.5,threshold:.85},exposure:1.05,fog:{color:`#120e18`,near:16,far:40}},roughness:.85,glow:1.8,torch:{color:`#ffa850`,intensity:6,distance:8}},jointed:{stage:{background:`#0c1220`,sky:{color:`#9fb4e0`,ground:`#151a26`,intensity:.8},key:{color:`#eef3ff`,intensity:1.3,at:[-6,14,8]},rim:{color:`#7fdcff`,intensity:.8,at:[4,6,-10]},follow:{color:`#a8dcff`,intensity:1.8,distance:7,height:2.4},bloom:{strength:.5,radius:.4,threshold:.95},exposure:1,fog:{color:`#0c1220`,near:22,far:50}},roughness:.92,glow:1.3,torch:{color:`#ffb870`,intensity:3,distance:6}}};function qb(e){return{shape:(e,t)=>new Gi(t[0],t[1],t[2]),material:(t,n)=>new ha({color:n,roughness:e,flatShading:!0}),outline:null}}function Jb(e,t=e,n=`block_${e}`){let r=Kb[e],i={kind:t,...Bb},a=(e,t)=>new ha({map:e,emissiveMap:t,emissive:`#ffffff`,emissiveIntensity:r.glow,roughness:r.roughness,metalness:0}),o={body:a,blocks:a},s={...qb(r.roughness),palette:Ub,fx:{slash:`#9fdcff`,slashCore:`#ffffff`,finisher:`#ffd166`,spark:`#fff3c4`,impact:`#fff1b8`}},c={...qb(r.roughness),palettes:Wb,fx:{flash:.3,shatter:`#d9b8ff`}},l={stage:r.stage,gem:e=>new Gi(e[0],e[1],e[2]),scenery:{floor:new U,marks:null,markGeometry:()=>null,rock:new U,crystal:new U,glow:Gb.ore,pool:0,boulder:e=>new Gi(e[0],e[1],e[2])}},u={...Gb,torch:r.torch};return new zb({id:n,mine:l,hunter:s,foes:c,hitArea:.45,model:(e,t,n)=>$d(e,t,i,o,n),terrain:(e,t,n)=>tf(e,t,n,i,u,o)})}function Yb(e,t,n,r,i,a){let o=r-t,s=i-n,c=Math.sqrt(o*o+s*s);if(c<1e-6)return;let l=-s/c*(a/2),u=o/c*(a/2);e.push(t-l,0,n-u,r+l,0,i+u,r-l,0,i-u),e.push(t-l,0,n-u,t+l,0,n+u,r+l,0,i+u)}function Xb(e){let t=new zr;t.setAttribute(`position`,new H(e,3));let n=new Float32Array(e.length);for(let e=1;e<n.length;e+=3)n[e]=1;return t.setAttribute(`normal`,new H(n,3)),t}function Zb(e,t,n,r){let i=f(y(n,`marks:veins`)),a=[];for(let n=0;n<r;n++){let n=-2+i.float()*(e+4),r=-2+i.float()*(t+4),o=i.float()*Math.PI*2,s=.02+i.float()*.03,c=5+Math.floor(i.float()*7);for(let e=0;e<c;e++){o+=(i.float()-.5)*1.1;let e=.45+i.float()*.8,t=n+Math.sin(o)*e,c=r+Math.cos(o)*e;if(Yb(a,n,r,t,c,s),i.float()<.18){let e=o+(i.float()<.5?.9:-.9);Yb(a,t,c,t+Math.sin(e)*.6,c+Math.cos(e)*.6,s*.6)}n=t,r=c,s*=.92}}return Xb(a)}function Qb(){let e=of(`#7fdcff`,.38,3,!1);return{stage:{background:`#0a0c12`,sky:{color:`#8ea4d6`,ground:`#151822`,intensity:.85},key:{color:`#e6eeff`,intensity:1.45,at:[-6,14,8]},rim:{color:`#7fdcff`,intensity:.9,at:[4,6,-10]},follow:{color:`#a8dcff`,intensity:2.2,distance:7,height:2.4},bloom:{strength:.55,radius:.4,threshold:1},exposure:1},gem:(e,t)=>Vg(`gem`,e,t),scenery:{floor:new ha({color:`#1d2029`,roughness:.92}),marks:new U({color:`#174a57`}),markGeometry:(e,t,n)=>Zb(e,t,n,11),rock:(t=>lf(new ha({color:t,roughness:.86,metalness:.06,flatShading:!0}),[e]))(`#2a2d37`),crystal:((e,t)=>new ha({color:e,emissive:e,emissiveIntensity:t,roughness:.25,metalness:.1,flatShading:!0}))(`#5ef0ff`,1.5),glow:`#2fbfe6`,pool:.22,boulder:(e,t)=>{let n=new Zi(.5,0);return n.scale(e[0],e[1],e[2]),Lg(n,t,Math.min(...e)*.22)}}}}var $b=[`crystal`,`eye`];function ex(){let e=e=>new U({color:new V(e).multiplyScalar(2.4)}),t=(e,t)=>lf(new _a({color:e}),[of(t,1.3,3.5,!1)]);return{shape:(e,t)=>Hg(e,t),material(n,r,i){return $b.includes(n)?e(r):t(r,i.edge??`#36e2ff`)},outline:{color:`#36e2ff`,intensity:1.4,width:.014,roles:[`hide`,`horn`]},palettes:{"rig.charger":{hide:`#120d17`,horn:`#170f1e`,crystal:`#ff4fd8`,eye:`#ff7ae6`,edge:`#ff3fd2`},"rig.dummy":{hide:`#100f1a`,horn:`#141322`,crystal:`#b8a8ff`,eye:`#d8ccff`,edge:`#8a7dff`},"rig.shooter":{hide:`#110c16`,horn:`#1a1022`,crystal:`#ff4fd8`,eye:`#ffd0f4`,edge:`#ff3fd2`},"rig.guardian":{hide:`#100b1a`,horn:`#181026`,crystal:`#b06bff`,eye:`#e6c8ff`,edge:`#a45cff`}},fx:{flash:.2,shatter:`#ff7ae6`}}}function tx(){let e=new pi(new Uint8Array([70,150,255]),3,1,be);return e.minFilter=O,e.magFilter=O,e.generateMipmaps=!1,e.needsUpdate=!0,e}function nx(){let e=tx(),t=of(`#ffffff`,.3,1,!0),n=(n,r=0)=>lf(new ga({color:n,gradientMap:e,emissive:n,emissiveIntensity:r}),[t]);return{shape:(e,t)=>Hg(e,t),material(e,t){return e===`eye`?new U({color:t}):e===`crystal`?n(t,.55):n(t)},outline:{color:`#1a1422`,intensity:1,width:.022,roles:[`skin`,`cloth`,`cloak`,`armor`,`trim`,`crystal`,`blade`]},palette:{skin:`#f2c9a0`,cloth:`#2f8f86`,cloak:`#3b5bb5`,armor:`#e9dcc0`,trim:`#6a4930`,crystal:`#6fe9ff`,eye:`#232033`,blade:`#eef3fa`},fx:{slash:`#9fdcff`,slashCore:`#ffffff`,finisher:`#ffd166`,spark:`#fff3c4`,impact:`#fff1b8`}}}var rx={name:`晶格獵人`,blurb:`晶體幾何的礦坑、卡通的獵人、霓虹的怪物（10/20 選定）。`};function ix(){return new zb({id:`lattice`,mine:Qb(),hunter:nx(),foes:ex(),hitArea:.45})}var ax={lattice:rx,...Hb},ox={lattice:ix,block:()=>Jb(`dungeon`,`jointed`,`block`),block_classic:()=>Jb(`classic`),block_dungeon:()=>Jb(`dungeon`),block_jointed:()=>Jb(`jointed`)},sx=Object.keys(ox),cx=[`rig.hunter`,`rig.charger`,`rig.dummy`,`rig.shooter`,`rig.guardian`];[...cx,...cd],[...cx,...cd],[...cx,...cd],[...cx,...cd],[...cx,...cd];function lx(e){let t=e.theme===void 0?void 0:ox[e.theme];return t?t():null}function ux(e){return{player:[e.player.x,e.player.y],...e.party?{allies:e.party.map(e=>[e.player.x,e.player.y])}:{},enemies:new Map(e.enemies.map(e=>[e.id,[e.x,e.y]])),projectiles:new Map(e.projectiles.map(e=>[e.id,[e.x,e.y]]))}}var dx={pitchDeg:50,fov:35,distance:17,minWidth:15,lead:1.2,ease:.12},fx=3,px=2048,mx=.7,hx=.4,gx=12,_x=(e,t,n)=>e+(t-e)*n,vx=new V(`#ffffff`),yx=new V(`#ff3344`),bx=new V(`#ff6a1a`),xx=new V(`#ff3d3d`),Sx=new V(`#ff5a46`),Cx=new V(`#ffb4a6`),wx=new V(`#8fd8ff`),Tx=new V(`#ffd34a`),Ex=new V(`#9b6bff`),Dx=new V(`#ffffff`),Ox=new V(`#ffd166`),kx=new V(`#9fe8ff`),Ax=new V(`#bfe6ff`),jx=new V(`#ffcf5a`),Mx=new V(`#fff3c4`),Nx=new V(`#ffd98a`),Px=new V(`#e8f6ff`),Fx=new V(`#ffe26b`),Ix=new V(`#ffe7a8`),Lx=new V(`#ffc94a`),Rx=12,zx=36,Bx=16,Vx=new V(`#8fd0ff`),Hx={height:1.7,fling:2.4,turns:1},Ux=7,Wx=7,Gx=32,Kx=16,qx=9,Jx=5,Yx=12,Xx=12,Zx=14,Qx={neurotoxin:new V(`#4ae0ff`),radiate:new V(`#c8ff5a`),decay:new V(`#b04a8a`),deathArc:new V(`#a0d0ff`),plague:new V(`#8ed14f`),silence:new V(`#8080ff`),suppress:new V(`#ffffff`)},$x=new V(`#ffe08a`);function eS(e){let t=Math.sin(e*12.9898)*43758.5453;return(t-Math.floor(t))*2-1}var tS=(e,t)=>Math.atan2(e,t),nS=.5,rS=new V(`#b46bff`);function iS(e){let t=new W(new qi(e,24),new U({color:`#000000`,transparent:!0,opacity:.35,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t.position.y=.01,t}var aS=`#ff6b6b`,oS=`#8fb8ff`,sS=1.4,cS=class{#e;#t;#n=new Kn;#r;#i=new R;#a=dx.distance;#o=!1;#s=new Ln;#c;#l=new Ln;#u;#d=null;#f=new Ln;#p;#m;#h;#g;#_;#v;#y;#b;#x;#S=new Map;#C=new Map;#w;#T;#E;#D;#O;#k;#A;#j;#M;#N=new B;#P=new B;#F=new V;#I={pitch:0,sx:1,sy:1,sz:1,dx:0};#L=new R;#R=new sh;#z=Array.from({length:Gx},()=>({start:-1e3,x:0,y:0,z:0,size:1,color:new V}));#B=0;#V;#H=Array.from({length:Kx},()=>({start:-1e3,x:0,y:0,dx:0,dy:0,length:0,beam:!1,color:new V}));#U=0;#W;#G=Array.from({length:Yx},()=>({start:-1e3,x:0,y:0,radius:0,color:new V}));#K=0;#q;#J=new Map;#Y;#X;#Z;#Q=new Map;#$=new Map;#ee=new sh;#te;#ne;#re;#ie=new Ln;#ae;#oe=[];#se=[];#ce=[];#le=new Map;#ue=0;#de=Ju();#fe=null;#pe=``;#me=null;#he=[];#ge;#_e;#ve=new Au;#ye={start:-1e3,strength:0};#be=new Eo;#xe=new Kr(new R(0,1,0),0);#Se;#Ce;#we;constructor(e){this.#e=e;let{canvas:t,skin:n,content:r}=e;this.#t=new Jl({canvas:t,antialias:!0}),this.#t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.#n.background=new V(`#0d1016`),this.#r=new Qa(e.view?.fov??dx.fov,16/9,.1,200);let i=new Ba(`#d7e6ff`,`#1a1f2a`,1.1);this.#n.add(i);let a=new ro(`#ffffff`,1.6);a.position.set(-6,14,8),this.#n.add(a),this.#Se=[i,a],this.#c=nu(n.visuals.get(r.player.visual)),this.#u=ru(this.#c);let o=nu(n.visuals.get(r.weapon.visual));this.#f.position.y=.20000000000000007,this.#f.add(o),this.#c.position.y=-.7,this.#l.position.y=mx,this.#l.add(this.#c,this.#f),this.#Ce=iS(r.player.radius*1.1),this.#s.add(this.#l,this.#Ce),this.#n.add(this.#s);let s=this.#de;this.#h=r.action.steps.map(e=>{let t=e.hitbox;return t.kind===`line`?s:qu(t.radius,t.kind===`circle`?360:t.arcDeg)}),this.#m=new U({color:`#ffffff`,transparent:!0,opacity:0,depthWrite:!1}),this.#p=new W(this.#h[0],this.#m),this.#p.position.y=.03,this.#s.add(this.#p),this.#R.group.position.y=.9,this.#s.add(this.#R.group);let l=(e,t)=>new U({map:t,color:e,transparent:!0,opacity:0,blending:2,depthWrite:!1,depthTest:!1}),u=Yu();this.#y=l(`#3fb4ff`,u),this.#v=new W(s,this.#y),this.#_=l(`#e9fcff`,u),this.#g=new W(s,this.#_),this.#x=new U({color:`#f2fdff`,transparent:!0,opacity:0,blending:2,depthWrite:!1,depthTest:!1}),this.#b=new W(new ea(1,0),this.#x),this.#v.renderOrder=20,this.#g.renderOrder=21,this.#b.renderOrder=22,this.#s.add(this.#v,this.#g,this.#b);let d=new U({color:`#9fe8ff`,transparent:!0,opacity:0,depthWrite:!1}),f=new W(s,d);f.position.y=.03;let p=l(`#3fb4ff`,u),m=l(`#e9fcff`,u),h=new U({color:`#f2fdff`,transparent:!0,opacity:0,blending:2,depthWrite:!1,depthTest:!1}),g=new W(s,p),_=new W(s,m),v=new W(new ea(1,0),h);g.renderOrder=20,_.renderOrder=21,v.renderOrder=22,this.#ie.add(f,g,_,v),this.#ie.visible=!1,this.#n.add(this.#ie),this.#ae={zone:f,zoneMaterial:d,glow:g,glowMaterial:p,core:_,coreMaterial:m,tip:v,tipMaterial:h},this.#ee.group.position.y=.55,this.#s.add(this.#ee.group);let y=new na(.86,1,72);y.rotateX(-Math.PI/2),this.#ne=new U({color:Ix,transparent:!0,opacity:0,blending:2,depthWrite:!1});let b=new ea(.17,0),x=new U({color:Vx});for(let e=0;e<Bx;e++){let e=new W(b,x);e.visible=!1,e.renderOrder=19,this.#se.push(e),this.#n.add(e)}this.#te=new W(y,this.#ne),this.#te.position.y=.06,this.#te.visible=!1,this.#s.add(this.#te);for(let e=0;e<fx;e++){let e=nu(n.visuals.get(r.player.visual)),t=ru(e);for(let e of t)e.transparent=!0,e.depthWrite=!1,e.color.set(`#8fd3ff`);e.visible=!1,this.#n.add(e),this.#he.push({mesh:e,materials:t,start:-1e3,x:0,y:0,angle:0})}this.#_e=new Gu(px,e.seed),this.#n.add(this.#_e.mesh),this.#n.add(this.#ve.group);let S=new qi(1,24);S.rotateX(-Math.PI/2),this.#w=new Ru(this.#n,S,new U({color:`#000000`,transparent:!0,opacity:.35,depthWrite:!1}));let C=new ta(1,1);C.translate(.5,0,0);let w=e=>new U({color:e,transparent:!0,depthTest:!1});this.#T=new Ru(this.#n,C,w(`#2a0d10`)),this.#E=new Ru(this.#n,C,w(`#ff5d6c`)),this.#T.renderOrder=10,this.#E.renderOrder=11,this.#O=new Ru(this.#n,C,w(oS)),this.#O.renderOrder=12;let T=new na(.8,1,40);T.rotateX(-Math.PI/2),this.#D=new Ru(this.#n,T,new U({color:`#ffffff`,transparent:!0,depthWrite:!1,blending:2}));let E=()=>new U({color:`#ffffff`,transparent:!0,depthWrite:!1});this.#k=new Ru(this.#n,this.#de,E()),this.#A=new Ru(this.#n,this.#de,E());let D=new qi(1,48);D.rotateX(-Math.PI/2),this.#j=new Ru(this.#n,D,E()),this.#M=new Ru(this.#n,D,E()),this.#k.renderOrder=1,this.#A.renderOrder=2,this.#V=new Ru(this.#n,new ta(1,1),new U({map:Ku(),transparent:!0,blending:2,depthWrite:!1,depthTest:!1}),Gx),this.#V.renderOrder=23,this.#re=new Ru(this.#n,new ta(1,1),new U({map:Ku(),transparent:!0,blending:2,depthWrite:!1,depthTest:!1})),this.#re.renderOrder=24;let O=()=>new U({color:`#ffffff`,transparent:!0,blending:2,depthWrite:!1,depthTest:!1});this.#W=new Ru(this.#n,this.#de,O(),160),this.#W.renderOrder=22;let ee=new na(.8,1,48);ee.rotateX(-Math.PI/2),this.#q=new Ru(this.#n,ee,O(),Yx),this.#q.renderOrder=3;for(let e of r.elements.values()){let t=e.status.kind;this.#J.has(t)||this.#J.set(t,new V(e.color))}for(let e of r.reactions.values())this.#Q.set(e.id,new V(e.color));let k=()=>new U({color:`#ffffff`,transparent:!0,depthWrite:!1}),A=new qi(1,48);A.rotateX(-Math.PI/2),this.#Y=new Ru(this.#n,A,k()),this.#Y.renderOrder=1;let te=new na(.93,1,64);te.rotateX(-Math.PI/2),this.#X=new Ru(this.#n,te,O()),this.#X.renderOrder=2;let ne=new na(.55,.75,16,1,0,Math.PI/2.5);ne.rotateX(-Math.PI/2),this.#Z=new Ru(this.#n,ne,O()),this.#Z.renderOrder=3,this.#ge=new Vu(this.#n,c),this.#we=e.look===void 0?lx(n):e.look,this.#we?.attach(this.#Ee()),this.#we&&this.#Te(),this.resize()}#Te(){this.#k.renderOrder=28,this.#j.renderOrder=28,this.#A.renderOrder=29,this.#M.renderOrder=29,this.#T.renderOrder=30,this.#E.renderOrder=31,this.#O.renderOrder=32}#Ee(){return{renderer:this.#t,scene:this.#n,camera:this.#r,skin:this.#e.skin,content:this.#e.content,seed:this.#e.seed,proto:{lights:this.#Se,playerPivot:this.#l,playerShadow:this.#Ce},fx:{particles:this.#_e,ascension:this.#ve,slash:this.#R,whirl:this.#ee,impact:(e,t,n,r)=>this.#at(e,t,n,r),shake:(e,t)=>{t>=this.#ot(e)&&(this.#ye={start:e,strength:t})},ring:(e,t,n,r,i)=>{let a=this.#G[this.#K];this.#K=(this.#K+1)%Yx,a.start=e,a.x=t,a.y=n,a.radius=r,a.color.set(i)},hitArea:this.#m,shockwave:this.#ne}}}#De(e,t){this.#me||(this.#me=new _u,this.#n.add(this.#me.group));let n=e.map?.won??0,r=t.encounters.length-1,i=e.build?.altar,a=t.altars.map((e,t)=>({x:e.x,y:e.y,lit:e.role!==`exit`||(n>>r&1)==1,using:i===t})),o=e.build?.chests??0,s=t.chests.map((e,t)=>({...e,opened:(o>>t&1)==1})),c=e.map?.lifts??0,l=e.map?.floor??0,u=t.lift?{x:t.lift[0],y:t.lift[1],mended:(c>>l&1)==1}:null,f=e.build?.shrines??0,p=t.shrines.map(([e,t],n)=>({x:e,y:t,used:(f>>n&1)==1}));this.#me.update({altars:a,chests:s,lift:u,shrines:p},d),this.#me.showMiners(e.map?.rescues??[])}#Oe(e,t){e!==this.#pe&&(this.#pe=e,this.#fe&&this.#n.remove(this.#fe),this.#fe=$u(o(t)),this.#n.add(this.#fe))}#ke(e,t){let n=`${e}x${t}`;if(n===this.#pe)return;this.#pe=n,this.#fe&&this.#n.remove(this.#fe);let r=new Ln;this.#fe=r,this.#n.add(r);let i=new W(new ta(e,t),new ha({color:`#1a2029`,roughness:.95}));i.rotation.x=-Math.PI/2,i.position.set(e/2,0,t/2),r.add(i);let a=[];for(let n=0;n<=e;n++)a.push(n,.005,0,n,.005,t);for(let n=0;n<=t;n++)a.push(0,.005,n,e,.005,n);let o=new zr;o.setAttribute(`position`,new H(a,3)),r.add(new zi(o,new Di({color:`#262f3c`})));let s=new ha({color:`#2c3646`,roughness:.8}),c=.3,l=.6,u=[[e/2,-.3/2,e+c*2,c],[e/2,t+c/2,e+c*2,c],[-.3/2,t/2,c,t],[e+c/2,t/2,c,t]];for(let[e,t,n,i]of u){let a=new W(new Gi(n,l,i),s);a.position.set(e,l/2,t),r.add(a)}}#Ae(e,t){let n=e.get(t);if(!n){let r=this.#e.skin.visuals.get(t);n=new Lu(this.#n,this.#we?.model(r)??nu(r)),e.set(t,n)}return n}#je(e){return this.#e.skin.visuals.get(e)?.params.height||1.2}#Me(e,t,n,r,i){let a=e.player,o=i?this.#we?.enemies??null:null;for(let e of this.#S.values())e.begin();this.#w.begin(),this.#D.begin(),this.#k.begin(),this.#j.begin(),this.#M.begin(),this.#A.begin(),o?.begin();let s=this.#N,c=this.#P,[l,u]=t?.player??[a.x,a.y],d=_x(l,a.x,n),f=_x(u,a.y,n),p=++this.#ue;for(let a of e.enemies){let[e,l]=t?.enemies.get(a.id)??[a.x,a.y],u=_x(e,a.x,n),m=_x(l,a.y,n),h=a.state===`free`?tS(d-u,f-m):tS(a.aimX,a.aimY),g=this.#le.get(a.id);if(g?(g.visual=a.visual,g.radius=a.radius,g.yaw=h,g.drawn=p):this.#le.set(a.id,{visual:a.visual,radius:a.radius,yaw:h,drawn:p}),o?.anchor&&i){let e=this.#Qe(a,n),t={x:u,y:m,lift:e<0?0:4*ad*e*(1-e),yaw:h,size:this.#Fe(a)};o.anchor(a,t,this.#je(a.visual),i)}if(o&&i&&o.handles(a.visual)){let e=this.#Qe(a,n),t={x:u,y:m,lift:e<0?0:4*ad*e*(1-e),yaw:h,size:this.#Fe(a)};o.add(a,t,this.#Ne(a,r),i)}else{let e=this.#je(a.visual)*hx,t=this.#pt(a,n,r),i=this.#Qe(a,n),o=i<0?0:4*ad*i*(1-i);s.makeTranslation(u,o,m);let l=this.#Fe(a);l!==1&&s.multiply(c.makeScale(l,l,l)),s.multiply(c.makeRotationY(h)),s.multiply(c.makeTranslation(t.dx,e,0)),s.multiply(c.makeRotationX(t.pitch)),s.multiply(c.makeScale(t.sx,t.sy,t.sz)),s.multiply(c.makeTranslation(0,-e,0)),this.#Ae(this.#S,a.visual).add(s,this.#Ne(a,r))}let _=a.radius*1.1;s.makeTranslation(u,.01,m).multiply(c.makeScale(_,1,_)),this.#w.add(s,1),this.#ze(a,u,m,r),this.#He(a,u,m,n),this.#Ve(a,u,m,n)}this.#Le(e,n),this.#Re(a,d,f,r);for(let[e,t]of this.#le)t.drawn!==p&&this.#le.delete(e);for(let e of this.#ce)o?.handles(e.visual)||this.#Be(e,r);o&&i&&o.end(i);for(let e of this.#S.values())e.end();this.#w.end(),this.#D.end(),this.#k.end(),this.#A.end(),this.#j.end(),this.#M.end()}#Ne(e,t){return e.flash>0?this.#F.copy(vx).multiplyScalar(e.flash/8*.9):e.burn>0?this.#F.copy(bx).multiplyScalar(.35+.15*Math.sin(t*.35)):e.status&&this.#Pe(e.status,e.stun>0,t)?this.#F:e.boss?.phase===2?this.#F.copy(rS).multiplyScalar(.3+.12*Math.sin(t*.18)):null}#Pe(e,t,n){let r=(e,t)=>{let n=this.#J.get(e);return n&&this.#F.copy(n).multiplyScalar(t),n!==void 0},i=.3+.12*Math.sin(n*.3);if(t&&e.paralyzeReady>0)return r(`paralyze`,Math.floor(n/3)%2==0?.75:.25);if(e.poison>0)return r(`poison`,i);if(e.slow>0)return r(`slow`,i);if(e.weaken>0)return r(`weaken`,i);if(e.curse>0)return r(`curse`,i);if(e.blind>0)return r(`blind`,i);let a=(e,t)=>{let n=Qx[e];return n&&this.#F.copy(n).multiplyScalar(t),n!==void 0};return e.neurotoxin>0&&t?a(`neurotoxin`,Math.floor(n/3)%2==0?.75:.25):e.radiate>0?a(`radiate`,i):e.decay>0?a(`decay`,i):e.deathArc>0?a(`deathArc`,i):e.plague>0?a(`plague`,i):e.silence>0?a(`silence`,i):e.suppress>0&&a(`suppress`,.35)}#Fe(e){let t=this.#e.content.enemies.get(e.def)?.radius;return t?e.radius/t:1}#Ie(e){let t=this.#$.get(e);return t||(t=new V(this.#e.content.affixes.get(e)?.color??aS),this.#$.set(e,t)),t}#Le(e,t){let n=e.hazards;if(!n)return;let r=this.#N,i=this.#P;for(let e of n){let n=Math.min(e.warn,e.frame-1+t),a=Math.max(0,Math.min(1,n/Math.max(1,e.warn))),o=e.warn-e.frame,s=o<=6&&Math.floor(o/2)%2==0,c=this.#Ie(e.affix);if(e.line){let t=tS(e.dx,e.dy),n=e.radius*2;r.makeTranslation(e.x,.02,e.y).multiply(i.makeRotationY(t)),r.multiply(i.makeScale(n,1,e.length)),this.#k.add(r,.18+.1*a,c),r.makeTranslation(e.x,.025,e.y).multiply(i.makeRotationY(t)),r.multiply(i.makeScale(n,1,e.length*Math.max(.001,a))),this.#A.add(r,s?.7:.4,s?Cx:Sx)}else{r.makeTranslation(e.x,.02,e.y).multiply(i.makeScale(e.radius,1,e.radius)),this.#j.add(r,.2+.1*a,c);let t=e.radius*Math.max(.001,a);r.makeTranslation(e.x,.025,e.y).multiply(i.makeScale(t,1,t)),this.#M.add(r,s?.7:.4,s?Cx:Sx)}}}#Re(e,t,n,r){if(this.#we?.replaces?.debuffs)return;let i=[];e.slow&&i.push(wx),e.root!==void 0&&i.push(Tx),e.pull&&i.push(Ex);let a=this.#N,o=this.#P;i.forEach((i,s)=>{let c=e.radius*(1.5+.3*s);a.makeTranslation(t,.03+.005*s,n).multiply(o.makeScale(c,1,c)),this.#D.add(a,.65+.25*Math.sin(r*.3+s*1.3),i)})}#ze(e,t,n,r){let i=e.elite?.affixes??[],a=this.#N,o=this.#P;i.forEach((i,s)=>{let c=this.#Ie(i),l=e.radius*(1.35+.3*s);a.makeTranslation(t,.02+.005*s,n).multiply(o.makeScale(l,1,l)),this.#D.add(a,.55+.25*Math.sin(r*.12+s*1.7),c)})}#Be(e,t){if(t>=e.land)return;let n=Math.max(0,(t-e.start)/(e.land-e.start)),r=e.from+(1-e.from)*n,i=4*Hx.height*r*(1-r),a=Hx.fling*(1-e.from)*(1-(1-n)**2),o=e.x+e.dx*a,s=e.y+e.dy*a,c=this.#N,l=this.#P,u=this.#je(e.visual)*hx;c.makeTranslation(o,i,s),c.multiply(l.makeRotationY(e.yaw)),c.multiply(l.makeTranslation(0,u,0)),c.multiply(l.makeRotationX(-Math.PI*2*Hx.turns*n)),c.multiply(l.makeTranslation(0,-u,0));let d=1-Math.min(1,Math.max(0,t-e.start)/10);this.#Ae(this.#S,e.visual).add(c,d>0?this.#F.copy(vx).multiplyScalar(.9*d):null);let f=e.radius*1.1*(1-.4*i/Hx.height);c.makeTranslation(o,.01,s).multiply(l.makeScale(f,1,f)),this.#w.add(c,1)}#Ve(e,n,r,a){let o=e.boss;if(o?.mode!==`warn`)return;let s=Math.min(o.warn,o.frame-1+a),c=Math.max(0,Math.min(1,s/Math.max(1,o.warn))),l=o.warn-o.frame,u=l<=6&&Math.floor(l/2)%2==0,d=this.#N,f=this.#P;if(o.cr>0){d.makeTranslation(o.cx,.02,o.cy).multiply(f.makeScale(o.cr,1,o.cr)),this.#j.add(d,.16+.1*c,xx);let e=o.cr*Math.max(.001,c);d.makeTranslation(o.cx,.025,o.cy).multiply(f.makeScale(e,1,e)),this.#M.add(d,u?.7:.4,u?Cx:Sx)}for(let e=0;e<o.rays;e++){let a=o.rayAngle+360*e/o.rays,s=tS(t(a),i(a));d.makeTranslation(n,.02,r).multiply(f.makeRotationY(s)),d.multiply(f.makeScale(nS,1,o.rayLength)),this.#k.add(d,.1+.08*c,xx),d.makeTranslation(n,.025,r).multiply(f.makeRotationY(s)),d.multiply(f.makeScale(nS,1,o.rayLength*Math.max(.001,c))),this.#A.add(d,u?.6:.3,u?Cx:Sx)}}#He(e,t,n,r){if(e.warnLength<=0||e.state!==`windup`&&e.state!==`attack`)return;let i=this.#N,a=this.#P,o=tS(e.aimX,e.aimY);if(i.makeTranslation(t,.02,n).multiply(a.makeRotationY(o)),i.multiply(a.makeScale(e.warnWidth,1,e.warnLength)),e.state===`attack`){this.#k.add(i,.1,xx);return}let s=Math.min(e.warnFrames,e.stateFrame-1+r),c=Math.max(0,Math.min(1,s/Math.max(1,e.warnFrames))),l=e.warnFrames-e.stateFrame,u=l<=6&&Math.floor(l/2)%2==0;this.#k.add(i,.14+.1*c,xx),i.makeTranslation(t,.025,n).multiply(a.makeRotationY(o)),i.multiply(a.makeScale(e.warnWidth,1,e.warnLength*Math.max(.001,c))),this.#A.add(i,u?.7:.4,u?Cx:Sx)}#Ue(e,t,n){this.#T.begin(),this.#E.begin(),this.#O.begin();let r=this.#N,i=this.#P,a=this.#We.makeRotationFromQuaternion(this.#r.quaternion);for(let o of e.enemies){let e=o.elite;if(o.hp>=o.maxHp&&!e||o.boss)continue;let[s,c]=t?.enemies.get(o.id)??[o.x,o.y],l=e?sS:1,u=_x(s,o.x,n)-l/2,d=this.#je(o.visual)*this.#Fe(o)+.35,f=_x(c,o.y,n);r.makeTranslation(u,d,f).multiply(a),this.#T.add(i.copy(r).multiply(this.#Ke(l,.09)),1),this.#E.add(i.copy(r).multiply(this.#Ke(l*Math.max(.001,o.hp/o.maxHp),.09)),1),e&&e.shieldMax>0&&e.shield>0&&(r.makeTranslation(u,d+.12,f).multiply(a),this.#T.add(i.copy(r).multiply(this.#Ke(l,.06)),1),this.#O.add(r.multiply(this.#Ke(l*e.shield/e.shieldMax,.06)),1))}this.#T.end(),this.#E.end(),this.#O.end()}#We=new B;#Ge=new B;#Ke(e,t){return this.#Ge.makeScale(e,t,1)}#qe(e,t,n){for(let e of this.#C.values())e.begin();let r=this.#N,i=this.#P;for(let a of e.projectiles){let[e,o]=t?.projectiles.get(a.id)??[a.x,a.y];r.makeTranslation(_x(e,a.x,n),.9,_x(o,a.y,n)),r.multiply(i.makeRotationY(tS(a.dx,a.dy))),this.#Ae(this.#C,a.visual).add(r,null)}for(let e of this.#C.values())e.end()}#Je(e,t){let n=e.areas[0];if(!n||this.#we?.replaces?.areas){this.#ee.hide();return}let r=360*(n.frame-1+t)/n.every,i=Math.min(1,(n.frame+1)/4),a=Math.min(1,(n.frames-n.frame)/10);this.#ee.show(r-300,r,n.radius*.55,n.radius,Math.min(i,a),Px)}#Ye(e,t,n){this.#oe=this.#oe.filter(e=>n-e.start<zx),this.#se.forEach((r,i)=>{let a=this.#oe[i];if(r.visible=!1,!a)return;let o=Math.max(0,(n-a.start)/zx),s=o*o;r.visible=!0,r.position.set(_x(a.x,e,s),.6+.4*s+5.6*o*(1-o),_x(a.y,t,s)),r.rotation.set(0,n*.25+i,.5),r.scale.setScalar(1-.5*s)})}#Xe(t,n,r,i){let a=this.#ie;if(a.visible=!1,this.#we?.replaces?.beams)return;let o=t.lines[0];if(!o){this.#Ze(t,n,r);return}let s=o.frame-2+i,c=o.frames-1,l=o.length*e(0,c,s),u=s<=c?1:Math.max(0,1-(s-c)/6);if(s<-1||l<=0||u<=0)return;let d=this.#ae;a.visible=!0,a.position.set(n,0,r),a.rotation.y=tS(o.dx,o.dy);let f=.6+.4*u;d.zone.scale.set(o.width,1,l),d.zoneMaterial.opacity=.22*u,d.core.position.set(0,.9,.3),d.core.scale.set(o.width*.45*f,1,l),d.coreMaterial.opacity=u,d.glow.position.set(0,.88,.3),d.glow.scale.set(o.width*1.5*f,1,l),d.glowMaterial.opacity=.7*u,d.tip.position.set(0,.9,.3+l),d.tip.scale.set(.22,.1,.75),d.tipMaterial.opacity=u}#Ze(e,t,n){let r=e.player.dash;if(!r)return;let i=Math.hypot(t-r.x0,n-r.y0);if(i<=.01)return;let a=1-r.frame/(r.frames+1),o=this.#ae,s=this.#ie;s.visible=!0,s.position.set(r.x0,0,r.y0),s.rotation.y=tS(r.dx,r.dy),o.zone.scale.set(r.width,1,i),o.zoneMaterial.opacity=.3*a,o.core.scale.set(r.width*.25,1,i),o.core.position.set(0,.05,0),o.coreMaterial.opacity=.5*a,o.glow.scale.set(r.width*.8,1,i),o.glow.position.set(0,.04,0),o.glowMaterial.opacity=.35*a,o.tipMaterial.opacity=0}#Qe(e,t){return od(e.air,e.airTotal,t)}#$e(e,t,n,r){let i=this.#N,a=this.#P;this.#re.begin();let o=this.#we?.replaces?.stuns===!0;for(let s of e.enemies){if(o||s.stun<=0||s.air>0)continue;let[e,c]=t?.enemies.get(s.id)??[s.x,s.y],l=_x(e,s.x,n),u=_x(c,s.y,n),d=this.#je(s.visual)+.35;for(let e=0;e<3;e++){let t=r*.2+e*Math.PI*2/3;i.makeTranslation(l+Math.cos(t)*.48,d,u+Math.sin(t)*.48),i.multiply(a.makeRotationFromQuaternion(this.#r.quaternion)),i.multiply(a.makeScale(.55,.55,1)),this.#re.add(i,.95,Fx)}}this.#re.end()}play(e,t,n){n&&this.#we?.observe(n,e,t),n&&this.#et(n),this.#nt(t);let r=null;for(let n of e)n.type===`death`&&n.launch?r=this.#tt(n.target,n.x,n.y,n.launch,t):n.type===`loot`?(this.#oe.push({start:t,x:n.x,y:n.y}),this.#oe.length>Bx&&this.#oe.shift()):n.type===`reaction`?this.#we?.replaces?.reaction(n.reaction)||this.#rt(n,t):n.type===`cue`&&(r&&r.cue===null&&n.x===r.x&&n.y===r.y?r.cue=n:this.#it(n,t))}#et(e){let t=e.player;for(let n of e.enemies){if(this.#le.has(n.id))continue;let e=n.state===`free`?tS(t.x-n.x,t.y-n.y):tS(n.aimX,n.aimY);this.#le.set(n.id,{visual:n.visual,radius:n.radius,yaw:e,drawn:this.#ue})}}#tt(e,t,n,r,i){let a=this.#le.get(e);if(!a||r.total<=0)return null;let o=i+1+r.hold,s={visual:a.visual,radius:a.radius,yaw:a.yaw,x:t,y:n,dx:r.dx,dy:r.dy,start:o,land:o+r.air,from:(r.total-r.air)/r.total,cue:null,landed:!1};return this.#ce.push(s),s}#nt(e){if(this.#ce.length!==0){for(let t of this.#ce){if(t.landed||t.land>e+1||(t.landed=!0,!t.cue))continue;let n=Hx.fling*(1-t.from);this.#it({...t.cue,x:t.x+t.dx*n,y:t.y+t.dy*n},t.land)}this.#ce=this.#ce.filter(t=>!t.landed||t.land>e)}}#rt(e,t){let n=this.#e.content.reactions.get(e.reaction)?.color??`#ffffff`,r={x:e.x,y:.7,z:e.y};if(this.#_e.burst(t,r,12+Math.round(e.radius*6),n),e.radius<=0)return;let i=this.#G[this.#K];this.#K=(this.#K+1)%Yx,i.start=t,i.x=e.x,i.y=e.y,i.radius=e.radius,i.color.set(n)}#it(e,t){let n=this.#e.skin.cues.get(e.cue);if(this.#we?.cue(e,n,t))return;let r=n?.vfx??`none`,i=n?.color,a={x:e.x,y:.9,z:e.y};if(r===`flash`){let n=e.strength>=2;this.#_e.sparks(t,a,e.dx,e.dy,8+Math.round(e.strength*6),`#fff1b8`);let r={x:e.x-e.dx*.45,y:1,z:e.y-e.dy*.45};this.#at(t,r,1.6+.5*e.strength,n?Nx:Mx);let i=e.strength>=2.5?.42:Math.min(.22,.04+.07*e.strength);i>=this.#ot(t)&&(this.#ye={start:t,strength:i})}else if(r===`pierce`){let n={x:e.x+e.dx*.6,y:.95,z:e.y+e.dy*.6};this.#_e.glint(t,n,`#9fe8ff`)}else if(r===`burst`)this.#_e.burst(t,{...a,y:.6},26,`#ff9f7a`);else if(r===`hurt`)this.#_e.sparks(t,a,e.dx,e.dy,12,`#ff4d5e`),this.#ye={start:t,strength:.25};else if(r===`dust`)this.#_e.sparks(t,{...a,y:.2},-e.dx,-e.dy,10,`#d9b38c`);else if(r===`muzzle`||r===`cast`){let n={x:e.x+e.dx*.7,y:.9,z:e.y+e.dy*.7};this.#_e.glint(t,n,i??`#ff9be6`)}else if(r===`explode`)this.#_e.burst(t,a,10+Math.round(e.strength*6),i??`#ff7a1a`);else if(r===`embers`)this.#_e.glint(t,{...a,y:.7},i??`#ff9b3d`);else if(r===`shatter`)this.#_e.sparks(t,a,e.dx,e.dy,8,i??`#bdeeff`);else if(r===`arc`||r===`beam`){let n=this.#H[this.#U];this.#U=(this.#U+1)%Kx,n.start=t,n.x=e.x,n.y=e.y,n.dx=e.dx,n.dy=e.dy,n.length=e.strength,n.beam=r===`beam`,n.color.set(i??`#bfe8ff`);let a={x:e.x+e.dx*e.strength,y:.9,z:e.y+e.dy*e.strength};this.#_e.glint(t,a,i??`#bfe8ff`)}else if(r===`strike`){let n=i??`#ffe7a8`;this.#at(t,{x:e.x,y:1.2,z:e.y},2.4,this.#F.set(n)),this.#_e.burst(t,{x:e.x,y:.4,z:e.y},14,n);let r=this.#G[this.#K];this.#K=(this.#K+1)%Yx,r.start=t,r.x=e.x,r.y=e.y,r.radius=e.strength,r.color.set(n)}else if(r===`gust`){let n=this.#G[this.#K];this.#K=(this.#K+1)%Yx,n.start=t,n.x=e.x,n.y=e.y,n.radius=e.strength,n.color.set(i??`#7fe0b0`),this.#_e.burst(t,{x:e.x,y:.5,z:e.y},10,i??`#7fe0b0`)}else if(r===`stun`)this.#_e.glint(t,{x:e.x,y:1.4,z:e.y},i??`#ffe26b`);else if(r===`glow`)this.#_e.burst(t,{x:e.x,y:.3,z:e.y},34,i??`#ffe7a8`),this.#_e.glint(t,{x:e.x,y:1.9,z:e.y},i??`#ffe7a8`);else if(r===`ascend`)this.#_e.burst(t,{x:e.x,y:.3,z:e.y},34,`#ffe7a8`),this.#_e.glint(t,{x:e.x,y:1.9,z:e.y},`#ffe7a8`),this.#_e.rise(t,{x:e.x,y:.15,z:e.y},44,i??`#ffd166`),this.#at(t,{x:e.x,y:1.3,z:e.y},3.6,Nx),this.#ve.play(t);else if(r===`shards`)this.#_e.burst(t,{x:e.x,y:1,z:e.y},18,i??`#9fd8ff`);else if(r===`afterimage`||r===`dash`){let n=r===`dash`,i=n?e.strength:this.#e.content.player.dodgeDistance;this.#he.forEach((r,a)=>{r.start=t+a*(n?2:3),r.x=e.x+e.dx*(i*a)/fx,r.y=e.y+e.dy*(i*a)/fx,r.angle=tS(e.dx,e.dy)})}}#at(e,t,n,r){let i=this.#z[this.#B];this.#B=(this.#B+1)%Gx,i.start=e,i.x=t.x,i.y=t.y,i.z=t.z,i.size=n,i.color.copy(r)}#ot(e){let t=e-this.#ye.start;return t>=0&&t<10?this.#ye.strength*(1-t/10):0}#st(e){let t=this.#N,n=this.#P;this.#V.begin(),this.#z.forEach((r,i)=>{let a=e-r.start;if(a<0||a>=Wx)return;let o=a/Wx,s=r.size*(.6+.5*Math.sqrt(o));t.makeTranslation(r.x,r.y,r.z),t.multiply(n.makeRotationFromQuaternion(this.#r.quaternion)),t.multiply(n.makeRotationZ(i*.7)),t.multiply(n.makeScale(s,s,1)),this.#V.add(t,(1-o)**1.5,r.color)}),this.#V.end()}#ct(e){let t=this.#N,n=this.#P;this.#W.begin(),this.#H.forEach((r,i)=>{let a=e-r.start,o=r.beam?Zx:qx;if(a<0||a>=o||r.length<=0)return;let s=1-a/o;if(r.beam){let e=tS(r.dx,r.dy);t.makeTranslation(r.x,.9,r.y).multiply(n.makeRotationY(e)),t.multiply(n.makeScale(.9*(.6+.4*s),1,r.length)),this.#W.add(t,.55*s,r.color),t.makeTranslation(r.x,.91,r.y).multiply(n.makeRotationY(e)),t.multiply(n.makeScale(.2,1,r.length)),this.#W.add(t,s,vx);return}let c=Math.floor(a/2),l=Math.min(.3,.1*r.length),u=r.x,d=r.y;for(let e=1;e<=Jx;e++){let a=r.length*e/Jx,o=e===Jx?0:l*eS(i*7+e*3+c*11),f=r.x+r.dx*a-r.dy*o,p=r.y+r.dy*a+r.dx*o,m=Math.hypot(f-u,p-d),h=tS(f-u,p-d);t.makeTranslation(u,.9,d).multiply(n.makeRotationY(h)),t.multiply(n.makeScale(.26,1,m)),this.#W.add(t,.6*s,r.color),t.makeTranslation(u,.91,d).multiply(n.makeRotationY(h)),t.multiply(n.makeScale(.06,1,m)),this.#W.add(t,s,vx),u=f,d=p}}),this.#W.end()}#lt(e,t,n,r){let i=this.#N,a=this.#P;this.#Y.begin(),this.#X.begin(),this.#Z.begin();let o=e.player.ward,s=this.#we?.replaces;if(o&&!e.player.dead&&!s?.ward){let e=1.1+.08*Math.sin(r*.2);i.makeTranslation(t,.04,n).multiply(a.makeScale(e,1,e)),this.#X.add(i,.8*Math.min(1,o.frames/20),$x)}for(let t of e.zones??[]){if(s?.reaction(t.reaction))continue;let e=this.#e.content.reactions.get(t.reaction),n=this.#Q.get(t.reaction);if(!e||!n||t.radius<=0)continue;let o=t.frames>0?Math.min(1,t.frame/t.frames):1,c=t.radius,l=(e,r,o,s=.02)=>{i.makeTranslation(t.x,s,t.y).multiply(a.makeScale(e,1,e)),o.add(i,r,n)},u=e.effect;if(u.kind===`burst`){l(c,.12,this.#Y),l(c*o,.3,this.#Y,.025),l(c,.7,this.#X,.03);continue}if(u.kind===`wave`){l(c,.9*(1-o),this.#X,.04);continue}if(u.kind===`strike`){l(c,.25*(1-o),this.#X,.03);continue}if(u.kind!==`zone`)continue;let d=Math.min(1,t.frame/6,(t.frames-t.frame)/12),f=.85+.15*Math.sin(r*.15+t.id);if(l(c,.2*d*f,this.#Y),l(c,.55*d,this.#X,.03),u.pull>0)for(let e=0;e<3;e++){let o=-r*.12+e*Math.PI*2/3;i.makeTranslation(t.x,.05,t.y).multiply(a.makeRotationY(o)),i.multiply(a.makeScale(c,1,c)),this.#Z.add(i,.6*d,n)}}this.#Y.end(),this.#X.end(),this.#Z.end()}#ut(e){let t=this.#N,n=this.#P;this.#q.begin();for(let r of this.#G){let i=e-r.start;if(i<0||i>=Xx)continue;let a=i/Xx,o=.4+r.radius*(1-(1-a)*(1-a));t.makeTranslation(r.x,.08,r.y).multiply(n.makeScale(o,1,o)),this.#q.add(t,.8*(1-a),r.color)}this.#q.end()}render(e,t,r){let i=this.#we,o=i&&e.hitstop>0?1:r,l=e.frame-1+o,u=i?{frame:e.frame,time:l,alpha:o}:null;if(i&&u)i.stage(e,u);else{let t=this.#e.content.arenas.get(e.arena),n=e.map?.floor??0,r=t?.dungeon?a(this.#e.content.pieces,t.dungeon,n,e.seed):null,i=e.map?.fight??null,o=e.map?.broken??[],c=r?s(r,i,o):t?.map?.rows,l=r?`${e.arena}|${n}|${e.seed}|${i??-1}|${o.length}`:e.arena;c?this.#Oe(l,c):this.#ke(e.width,e.height),r?this.#De(e,r):(this.#me?.clear(),this.#me?.showMiners([]))}let d=e.player,[f,p]=t?.player??[d.x,d.y],m=_x(f,d.x,o),h=_x(p,d.y,o);if(this.#s.position.set(m,0,h),this.#s.rotation.y=tS(d.fx,d.fy),this.#s.visible=i?!0:!d.dead,!i){let t=d.invulnerable>0&&d.dodgeFrame<0&&!d.dash&&Math.floor(e.frame/4)%2==1,n=this.#ve.bodyGlow(l);for(let e of this.#u)d.hurt>0?(e.emissive.copy(yx),e.emissiveIntensity=d.hurt/12):n>0&&!t?(e.emissive.copy(Lx),e.emissiveIntensity=.9*n):(e.emissive.copy(vx),e.emissiveIntensity=t?.35:0);this.#ft(e,o)}let g=this.#ht(e,o);i&&u&&i.player.update(e,m,h,g,u),e.party&&this.#dt(e,t,o,u),this.#Me(e,t,o,l,u),this.#qe(e,t,o),this.#Je(e,o),this.#Xe(e,m,h,o);let _=e.build?.route,v=_&&e.build?.phase===`doors`?[..._.doors.map(e=>({x:e.x,y:e.y,kind:e.plan.kind})),..._.shop?[{x:_.shop.x,y:_.shop.y,kind:`shop`,size:n/c}]:[]]:[];this.#ge.update(this.#we?.replaces?.doors?[]:v,l);for(let e of this.#he){let t=l-e.start,n=t>=0&&t<gx;if(e.mesh.visible=n,n){e.mesh.position.set(e.x,0,e.y),e.mesh.rotation.y=e.angle;for(let n of e.materials)n.opacity=.45*(1-t/gx)}}this.#_e.update(l),this.#ve.update(l,m,h),this.#vt(m,h,d.fx,d.fy,l),this.#Ue(e,t,o),this.#st(l),this.#ct(l),this.#ut(l),this.#lt(e,m,h,l),this.#$e(e,t,o,l),this.#we?.replaces?.loot||this.#Ye(m,h,l),i&&u?i.draw(u):this.#t.render(this.#n,this.#r)}#dt(e,t,n,r){let i=this.#e.content.action.steps,a=this.#we;e.party?.forEach((o,s)=>{let c=s+1,l=o.player,[u,d]=t?.allies?.[s]??[l.x,l.y],f=_x(u,l.x,n),p=_x(d,l.y,n),m=o.build?.gear?.kit.core.areaMult??1,h=l.dodgeFrame<0&&!l.dead&&!l.downed?Zl(i,l.step,l.stepFrame,n,l.stats.haste,m):null;a&&r?a.player.ally?.(e,c,f,p,h,r):(this.#d??=new lu(this.#n,this.#e.skin,this.#e.content),this.#d.place(c,o.gone?null:l,f,p,h,e.frame,n))})}#ft(e,t){let n=e.player,r=this.#l,{dodgeFrames:i}=this.#e.content.player;if(r.position.y=mx,r.rotation.set(0,0,0),n.dodgeFrame>=0){let e=Math.max(0,Math.min(1,(n.dodgeFrame-1+t)/i));r.rotation.x=Math.PI*2*e,r.position.y=mx-.25*Math.sin(Math.PI*e)}else n.dash?(r.rotation.x=.55,r.position.y=.58):n.hurt>0&&(r.rotation.x=-.35*(n.hurt/12))}#pt(e,t,n){let r=this.#mt(e,t,n),i=this.#Qe(e,t);if(i>=0&&(r.pitch-=1.6*Math.sin(Math.PI*i)),e.flash>0){let t=e.flash/8,n=e.state===`windup`||e.state===`attack`?.35:1;r.pitch-=.4*t*n,r.sx*=1+.08*t,r.sy*=1-.14*t,r.sz*=1+.08*t}return r}#mt(e,t,n){let r=this.#I;if(r.pitch=0,r.sx=1,r.sy=1,r.sz=1,r.dx=0,e.state===`windup`){let i=Math.max(0,Math.min(1,(e.stateFrame-1+t)/Math.max(1,e.warnFrames)));return r.pitch=-.3*i,r.sx=1+.08*i,r.sy=1-.14*i,r.sz=1+.08*i,r.dx=.04*Math.max(0,(i-.66)*3)*Math.sin(n*2.6),r}if(e.state===`attack`)return r.pitch=.5,r.sx=.92,r.sy=1.04,r.sz=1.12,r;if(e.state!==`recover`)return r;let i=this.#e.content.enemies.get(e.def)?.attack;if(!i)return r;let a=1-Math.min(1,(e.stateFrame-1+t)/Math.max(1,i.recover));return i.kind===`dash`?(r.pitch=.25*a,r.sy=1-.08*a):r.pitch=-.35*a*a,r}#ht(e,t){let n=e.player,r=this.#e.content.action.steps,i=this.#f,a=Xl.yaw,o=Xl.pitch,s=Xl.reach;this.#m.opacity=0,this.#p.scale.set(1,1,1),this.#_.opacity=0,this.#y.opacity=0,this.#x.opacity=0,this.#R.hide(),this.#te.visible=!1;let c=e.build?.gear?.kit.core.areaMult??1,l=n.dodgeFrame<0?Zl(r,n.step,n.stepFrame,t,n.stats.haste,c):null;if(l){let{step:e,f:t,slash:i}=l,u=e.hitbox;a=l.yaw,o=l.pitch,s=l.reach,u.kind===`line`?this.#_t(u.length,u.width,e.activeFrom,e.activeTo,t-1):i&&this.#gt(e,t,i.tail,i.head,i.radius,n.step);let d=(t-e.activeFrom)/Rx;if(e.stun>0&&u.kind!==`line`&&d>=0&&d<1){let e=.6+(u.radius*c+.4-.6)*(1-(1-d)**3);this.#te.visible=!0,this.#te.scale.set(e,1,e),this.#ne.opacity=.85*(1-d)**1.5}let f=this.#h[n.step];if(f&&(this.#p.geometry=f),u.kind!==`line`&&t>=e.activeFrom-1&&t<=e.activeTo+4){let i=t<=e.activeTo?1:1-(t-e.activeTo)/5;this.#p.scale.set(c,1,c),this.#m.opacity=.2*i,this.#m.color.copy(n.step===r.length-1?Ox:Dx)}}let u=Math.PI/180;return i.rotation.set(o*u*-1,a*u,0,`YXZ`),i.position.set(0,.20000000000000007,s),l}#gt(e,t,n,r,i,a){if(t<e.activeFrom-.5)return;let o=(t-e.activeTo)/Ux;if(o>=1)return;let s=Math.max(0,o),c=a===this.#e.content.action.steps.length-1;this.#R.show(_x(n,r,s),r,i*.55,i,(1-s)**1.3,c?jx:Ax)}#_t(t,n,r,i,a){let o=t*e(r,i,a),s=a<=i?1:Math.max(0,1-(a-i)/6);if(a<r-1||o<=0||s<=0)return;this.#p.scale.set(n,1,o),this.#m.opacity=.22*s,this.#m.color.copy(kx);let c=.6+.4*s;this.#g.position.set(0,.9,.3),this.#g.scale.set(n*.45*c,1,o),this.#_.opacity=s,this.#v.position.set(0,.88,.3),this.#v.scale.set(n*1.5*c,1,o),this.#y.opacity=.7*s,this.#b.position.set(0,.9,.3+o),this.#b.scale.set(.22,.1,.75),this.#x.opacity=s}#vt(e,t,n,r,i){let a=this.#e.view,o=a?a.lead:dx.lead,s=this.#L.set(e+n*o,a?a.height:0,t+r*o);this.#e.stable||!this.#o?this.#i.copy(s):this.#i.lerp(s,dx.ease),this.#o=!0;let c=(a?a.pitchDeg:dx.pitchDeg)*Math.PI/180,l=i-this.#ye.start,u=l>=0&&l<10?this.#ye.strength*(1-l/10):0;if(a){let e=a.yawDeg*Math.PI/180+(a.facing?Math.atan2(n,r):0),t=a.distance*Math.cos(c);this.#r.position.set(this.#i.x+t*Math.sin(e),this.#i.y+a.distance*Math.sin(c),this.#i.z+t*Math.cos(e))}else this.#r.position.set(this.#i.x+u*Math.sin(l*2.3),this.#i.y+this.#a*Math.sin(c),this.#i.z+this.#a*Math.cos(c)+u*Math.cos(l*1.9));this.#r.lookAt(this.#i)}groundAt(e,t){let n=this.#e.canvas.getBoundingClientRect();if(n.width===0||n.height===0)return null;let r=new L((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);this.#be.setFromCamera(r,this.#r);let i=this.#be.ray.intersectPlane(this.#xe,new R);return i?{x:i.x,y:i.z}:null}project(e,t,n){let r=new R(e,n,t).project(this.#r);if(r.z>1)return null;let i=this.#e.canvas.getBoundingClientRect();return{x:(r.x+1)/2*i.width,y:(1-r.y)/2*i.height}}resize(){let e=this.#e.canvas,t=e.clientWidth||1280,n=e.clientHeight||720;this.#t.setSize(t,n,!1),this.#r.aspect=t/n,this.#r.updateProjectionMatrix();let r=dx.fov/2*Math.PI/180;this.#a=Math.max(dx.distance,dx.minWidth/(2*Math.tan(r)*this.#r.aspect)),this.#we?.resize(t,n)}reset(e){this.#ee.hide(),this.#ie.visible=!1,this.#ce=[],this.#oe=[],this.#le.clear(),this.#_e.reset(e);for(let e of this.#he)e.start=-1e3;for(let e of this.#z)e.start=-1e3;for(let e of this.#H)e.start=-1e3;for(let e of this.#G)e.start=-1e3;this.#ve.clear(),this.#ye={start:-1e3,strength:0},this.#o=!1,this.#we?.reset(e)}ambient(e,t,n,r){this.#_e.ambient(e,t,n,r)}stats(){let e=this.#we?.stats()??this.#t.info.render;return{calls:e.calls,triangles:e.triangles,particles:this.#_e.live}}dispose(){this.#we?.dispose(),this.#t.dispose()}};export{Vb as a,w as c,ax as i,ux as n,S as o,sx as r,x as s,cS as t};