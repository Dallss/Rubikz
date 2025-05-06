(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fl="164",Ds={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wm=0,jl=1,Xm=2,ed=1,qm=2,wi=3,ns=0,_n=1,Li=2,ts=0,so=1,$l=2,Zl=3,Kl=4,Ym=5,ys=100,jm=101,$m=102,Zm=103,Km=104,Jm=200,Qm=201,eg=202,tg=203,Vc=204,zc=205,ng=206,ig=207,sg=208,og=209,rg=210,ag=211,cg=212,lg=213,ug=214,hg=0,dg=1,fg=2,Wr=3,pg=4,mg=5,gg=6,_g=7,la=0,xg=1,vg=2,kn=0,td=1,nd=2,id=3,sd=4,yg=5,od=6,Mg=7,rd=300,po=301,mo=302,Bc=303,Hc=304,ua=306,Gc=1e3,Ts=1001,kc=1002,fn=1003,Sg=1004,fr=1005,Qn=1006,Da=1007,Ji=1008,is=1009,Tg=1010,Eg=1011,ad=1012,cd=1013,go=1014,Pi=1015,nr=1016,ld=1017,ud=1018,ir=1020,Ag=35902,Ng=1021,bg=1022,gi=1023,wg=1024,Rg=1025,oo=1026,$o=1027,Cg=1028,hd=1029,Lg=1030,dd=1031,fd=1033,Ua=33776,Oa=33777,Fa=33778,Va=33779,Jl=35840,Ql=35841,eu=35842,tu=35843,nu=36196,iu=37492,su=37496,ou=37808,ru=37809,au=37810,cu=37811,lu=37812,uu=37813,hu=37814,du=37815,fu=37816,pu=37817,mu=37818,gu=37819,_u=37820,xu=37821,za=36492,vu=36494,yu=36495,Pg=36283,Mu=36284,Su=36285,Tu=36286,Ig=3200,Dg=3201,As=0,pd=1,Ki="",Kn="srgb",ci="srgb-linear",pl="display-p3",ha="display-p3-linear",Xr="linear",bt="srgb",qr="rec709",Yr="p3",Os=7680,Eu=519,Ug=512,md=513,Og=514,gd=515,Fg=516,Vg=517,zg=518,Bg=519,jr=35044,Wc=35048,Au="300 es",ti=2e3,_o=2001;class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nu=1234567;const Xo=Math.PI/180,xo=180/Math.PI;function Ii(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function tn(i,e,t){return Math.max(e,Math.min(t,i))}function ml(i,e){return(i%e+e)%e}function Hg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Gg(i,e,t){return i!==e?(t-i)/(e-i):0}function qo(i,e,t){return(1-t)*i+t*e}function kg(i,e,t,n){return qo(i,e,1-Math.exp(-t*n))}function Wg(i,e=1){return e-Math.abs(ml(i,e*2)-e)}function Xg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function qg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Yg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function jg(i,e){return i+Math.random()*(e-i)}function $g(i){return i*(.5-Math.random())}function Zg(i){i!==void 0&&(Nu=i);let e=Nu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kg(i){return i*Xo}function Jg(i){return i*xo}function Qg(i){return(i&i-1)===0&&i!==0}function e_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function t_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function n_(i,e,t,n,s){const o=Math.cos,r=Math.sin,a=o(t/2),c=r(t/2),l=o((e+n)/2),u=r((e+n)/2),h=o((e-n)/2),d=r((e-n)/2),m=o((n-e)/2),g=r((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*m,a*l);break;case"YXY":i.set(c*m,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*m,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ei(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const gl={DEG2RAD:Xo,RAD2DEG:xo,generateUUID:Ii,clamp:tn,euclideanModulo:ml,mapLinear:Hg,inverseLerp:Gg,lerp:qo,damp:kg,pingpong:Wg,smoothstep:Xg,smootherstep:qg,randInt:Yg,randFloat:jg,randFloatSpread:$g,seededRandom:Zg,degToRad:Kg,radToDeg:Jg,isPowerOfTwo:Qg,ceilPowerOfTwo:e_,floorPowerOfTwo:t_,setQuaternionFromProperEuler:n_,normalize:mt,denormalize:ei};class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,r=this.y-e.y;return this.x=o*n-r*s+e.x,this.y=o*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,s,o,r,a,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,r,a,c,l)}set(e,t,n,s,o,r,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=o,u[5]=c,u[6]=n,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],_=s[0],p=s[3],f=s[6],E=s[1],y=s[4],A=s[7],F=s[2],R=s[5],b=s[8];return o[0]=r*_+a*E+c*F,o[3]=r*p+a*y+c*R,o[6]=r*f+a*A+c*b,o[1]=l*_+u*E+h*F,o[4]=l*p+u*y+h*R,o[7]=l*f+u*A+h*b,o[2]=d*_+m*E+g*F,o[5]=d*p+m*y+g*R,o[8]=d*f+m*A+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*r*u-t*a*l-n*o*u+n*a*c+s*o*l-s*r*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*r-a*l,d=a*c-u*o,m=l*o-r*c,g=t*h+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*r)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*o-a*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(r*t-n*o)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+e,-s*l,s*c,-s*(-l*r+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ba.makeScale(e,t)),this}rotate(e){return this.premultiply(Ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ba=new Xe;function _d(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function i_(){const i=$r("canvas");return i.style.display="block",i}const bu={};function xd(i){i in bu||(bu[i]=!0,console.warn(i))}const wu=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ru=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),pr={[ci]:{transfer:Xr,primaries:qr,toReference:i=>i,fromReference:i=>i},[Kn]:{transfer:bt,primaries:qr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ha]:{transfer:Xr,primaries:Yr,toReference:i=>i.applyMatrix3(Ru),fromReference:i=>i.applyMatrix3(wu)},[pl]:{transfer:bt,primaries:Yr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ru),fromReference:i=>i.applyMatrix3(wu).convertLinearToSRGB()}},s_=new Set([ci,ha]),yt={enabled:!0,_workingColorSpace:ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!s_.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=pr[e].toReference,s=pr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return pr[i].primaries},getTransfer:function(i){return i===Ki?Xr:pr[i].transfer}};function ro(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ha(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fs;class o_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fs===void 0&&(Fs=$r("canvas")),Fs.width=e.width,Fs.height=e.height;const n=Fs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$r("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=ro(o[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ro(t[n]/255)*255):t[n]=ro(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let r_=0;class vd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Ga(s[r].image)):o.push(Ga(s[r]))}else o=Ga(s);n.url=o}return t||(e.images[this.uuid]=n),n}}function Ga(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?o_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let a_=0;class xn extends zi{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,n=Ts,s=Ts,o=Qn,r=Ji,a=gi,c=is,l=xn.DEFAULT_ANISOTROPY,u=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=Ii(),this.name="",this.source=new vd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gc:e.x=e.x-Math.floor(e.x);break;case Ts:e.x=e.x<0?0:1;break;case kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gc:e.y=e.y-Math.floor(e.y);break;case Ts:e.y=e.y<0?0:1;break;case kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=rd;xn.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],g=c[9],_=c[2],p=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,A=(m+1)/2,F=(f+1)/2,R=(u+d)/4,b=(h+_)/4,H=(g+p)/4;return y>A&&y>F?y<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(y),s=R/n,o=b/n):A>F?A<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(A),n=R/s,o=H/s):F<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(F),n=b/o,s=H/o),this.set(n,s,o,t),this}let E=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(h-_)/E,this.z=(d-u)/E,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ss extends zi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new xn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new vd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ns extends ss{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _l extends xn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class c_ extends xn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,r,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=o[r+0],m=o[r+1],g=o[r+2],_=o[r+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==m||u!==g){let p=1-a;const f=c*d+l*m+u*g+h*_,E=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const F=Math.sqrt(y),R=Math.atan2(F,f*E);p=Math.sin(p*R)/F,a=Math.sin(a*R)/F}const A=a*E;if(c=c*p+d*A,l=l*p+m*A,u=u*p+g*A,h=h*p+_*A,p===1-a){const F=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=F,l*=F,u*=F,h*=F}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,o,r){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=o[r],d=o[r+1],m=o[r+2],g=o[r+3];return e[t]=a*g+u*h+c*m-l*d,e[t+1]=c*g+u*d+l*h-a*m,e[t+2]=l*g+u*m+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,o=e._z,r=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(o/2),d=c(n/2),m=c(s/2),g=c(o/2);switch(r){case"XYZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"YZX":this._x=d*u*h+l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h-d*m*g;break;case"XZY":this._x=d*u*h-l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],o=t[8],r=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(o-l)*m,this._z=(r-s)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(s+r)/m,this._z=(o+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(o-l)/m,this._x=(s+r)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(r-s)/m,this._x=(o+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,r=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+r*a+s*l-o*c,this._y=s*u+r*c+o*a-n*l,this._z=o*u+r*l+n*c-s*a,this._w=r*u-n*a-s*c-o*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*e._w+n*e._x+s*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*r+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*o+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=r*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=o*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=e.elements,r=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,o=e.x,r=e.y,a=e.z,c=e.w,l=2*(r*s-a*n),u=2*(a*t-o*s),h=2*(o*n-r*t);return this.x=t+c*l+r*h-a*u,this.y=n+c*u+a*l-o*h,this.z=s+c*h+o*u-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,r=t.x,a=t.y,c=t.z;return this.x=s*c-o*a,this.y=o*r-n*c,this.z=n*a-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ka.copy(this).projectOnVector(e),this.sub(ka)}reflect(e){return this.sub(ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ka=new L,Cu=new bs;class sr{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,jn):jn.fromBufferAttribute(o,r),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mr.copy(n.boundingBox)),mr.applyMatrix4(e.matrixWorld),this.union(mr)}const s=e.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),gr.subVectors(this.max,Oo),Vs.subVectors(e.a,Oo),zs.subVectors(e.b,Oo),Bs.subVectors(e.c,Oo),Wi.subVectors(zs,Vs),Xi.subVectors(Bs,zs),us.subVectors(Vs,Bs);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-us.z,us.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,us.z,0,-us.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-us.y,us.x,0];return!Wa(t,Vs,zs,Bs,gr)||(t=[1,0,0,0,1,0,0,0,1],!Wa(t,Vs,zs,Bs,gr))?!1:(_r.crossVectors(Wi,Xi),t=[_r.x,_r.y,_r.z],Wa(t,Vs,zs,Bs,gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ti=[new L,new L,new L,new L,new L,new L,new L,new L],jn=new L,mr=new sr,Vs=new L,zs=new L,Bs=new L,Wi=new L,Xi=new L,us=new L,Oo=new L,gr=new L,_r=new L,hs=new L;function Wa(i,e,t,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){hs.fromArray(i,o);const a=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),c=e.dot(hs),l=t.dot(hs),u=n.dot(hs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const l_=new sr,Fo=new L,Xa=new L;class xl{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):l_.setFromPoints(e).getCenter(n);let s=0;for(let o=0,r=e.length;o<r;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const t=Fo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Fo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(Xa)),this.expandByPoint(Fo.copy(e.center).sub(Xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new L,qa=new L,xr=new L,qi=new L,Ya=new L,vr=new L,ja=new L;class yd{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){qa.copy(e).add(t).multiplyScalar(.5),xr.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(qa);const o=e.distanceTo(t)*.5,r=-this.direction.dot(xr),a=qi.dot(this.direction),c=-qi.dot(xr),l=qi.lengthSq(),u=Math.abs(1-r*r);let h,d,m,g;if(u>0)if(h=r*c-a,d=r*a-c,g=o*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,m=h*(h+r*d+2*a)+d*(r*h+d+2*c)+l}else d=o,h=Math.max(0,-(r*d+a)),m=-h*h+d*(d+2*c)+l;else d=-o,h=Math.max(0,-(r*d+a)),m=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-r*o+a)),d=h>0?-o:Math.min(Math.max(-o,-c),o),m=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-o,-c),o),m=d*(d+2*c)+l):(h=Math.max(0,-(r*o+a)),d=h>0?o:Math.min(Math.max(-o,-c),o),m=-h*h+d*(d+2*c)+l);else d=r>0?-o:o,h=Math.max(0,-(r*d+a)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(qa).addScaledVector(xr,d),m}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);const n=Ei.dot(this.direction),s=Ei.dot(Ei)-n*n,o=e.radius*e.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,r,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(o=(e.min.y-d.y)*u,r=(e.max.y-d.y)*u):(o=(e.max.y-d.y)*u,r=(e.min.y-d.y)*u),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,n,s,o){Ya.subVectors(t,e),vr.subVectors(n,e),ja.crossVectors(Ya,vr);let r=this.direction.dot(ja),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;qi.subVectors(this.origin,e);const c=a*this.direction.dot(vr.crossVectors(qi,vr));if(c<0)return null;const l=a*this.direction.dot(Ya.cross(qi));if(l<0||c+l>r)return null;const u=-a*qi.dot(ja);return u<0?null:this.at(u/r,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,t,n,s,o,r,a,c,l,u,h,d,m,g,_,p){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,r,a,c,l,u,h,d,m,g,_,p)}set(e,t,n,s,o,r,a,c,l,u,h,d,m,g,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=o,f[5]=r,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Hs.setFromMatrixColumn(e,0).length(),o=1/Hs.setFromMatrixColumn(e,1).length(),r=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,o=e.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const d=r*u,m=r*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+m*l,t[10]=r*c}else if(e.order==="YXZ"){const d=c*u,m=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-m,t[8]=r*l,t[1]=r*h,t[5]=r*u,t[9]=-a,t[2]=m*a-g,t[6]=_+d*a,t[10]=r*c}else if(e.order==="ZXY"){const d=c*u,m=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-r*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=r*u,t[9]=_-d*a,t[2]=-r*l,t[6]=a,t[10]=r*c}else if(e.order==="ZYX"){const d=r*u,m=r*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-m,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=r*c}else if(e.order==="YZX"){const d=r*c,m=r*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+m,t[1]=h,t[5]=r*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=r*c,m=r*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=r*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(u_,e,h_)}lookAt(e,t,n){const s=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Yi.crossVectors(n,wn),Yi.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Yi.crossVectors(n,wn)),Yi.normalize(),yr.crossVectors(wn,Yi),s[0]=Yi.x,s[4]=yr.x,s[8]=wn.x,s[1]=Yi.y,s[5]=yr.y,s[9]=wn.y,s[2]=Yi.z,s[6]=yr.z,s[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],E=n[3],y=n[7],A=n[11],F=n[15],R=s[0],b=s[4],H=s[8],T=s[12],M=s[1],G=s[5],J=s[9],I=s[13],ne=s[2],te=s[6],ae=s[10],ce=s[14],j=s[3],ue=s[7],le=s[11],be=s[15];return o[0]=r*R+a*M+c*ne+l*j,o[4]=r*b+a*G+c*te+l*ue,o[8]=r*H+a*J+c*ae+l*le,o[12]=r*T+a*I+c*ce+l*be,o[1]=u*R+h*M+d*ne+m*j,o[5]=u*b+h*G+d*te+m*ue,o[9]=u*H+h*J+d*ae+m*le,o[13]=u*T+h*I+d*ce+m*be,o[2]=g*R+_*M+p*ne+f*j,o[6]=g*b+_*G+p*te+f*ue,o[10]=g*H+_*J+p*ae+f*le,o[14]=g*T+_*I+p*ce+f*be,o[3]=E*R+y*M+A*ne+F*j,o[7]=E*b+y*G+A*te+F*ue,o[11]=E*H+y*J+A*ae+F*le,o[15]=E*T+y*I+A*ce+F*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],r=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15];return g*(+o*c*h-s*l*h-o*a*d+n*l*d+s*a*m-n*c*m)+_*(+t*c*m-t*l*d+o*r*d-s*r*m+s*l*u-o*c*u)+p*(+t*l*h-t*a*m-o*r*h+n*r*m+o*a*u-n*l*u)+f*(-s*a*u-t*c*h+t*a*d+s*r*h-n*r*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],E=h*p*l-_*d*l+_*c*m-a*p*m-h*c*f+a*d*f,y=g*d*l-u*p*l-g*c*m+r*p*m+u*c*f-r*d*f,A=u*_*l-g*h*l+g*a*m-r*_*m-u*a*f+r*h*f,F=g*h*c-u*_*c-g*a*d+r*_*d+u*a*p-r*h*p,R=t*E+n*y+s*A+o*F;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return e[0]=E*b,e[1]=(_*d*o-h*p*o-_*s*m+n*p*m+h*s*f-n*d*f)*b,e[2]=(a*p*o-_*c*o+_*s*l-n*p*l-a*s*f+n*c*f)*b,e[3]=(h*c*o-a*d*o-h*s*l+n*d*l+a*s*m-n*c*m)*b,e[4]=y*b,e[5]=(u*p*o-g*d*o+g*s*m-t*p*m-u*s*f+t*d*f)*b,e[6]=(g*c*o-r*p*o-g*s*l+t*p*l+r*s*f-t*c*f)*b,e[7]=(r*d*o-u*c*o+u*s*l-t*d*l-r*s*m+t*c*m)*b,e[8]=A*b,e[9]=(g*h*o-u*_*o-g*n*m+t*_*m+u*n*f-t*h*f)*b,e[10]=(r*_*o-g*a*o+g*n*l-t*_*l-r*n*f+t*a*f)*b,e[11]=(u*a*o-r*h*o-u*n*l+t*h*l+r*n*m-t*a*m)*b,e[12]=F*b,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*p+t*h*p)*b,e[14]=(g*a*s-r*_*s-g*n*c+t*_*c+r*n*p-t*a*p)*b,e[15]=(r*h*s-u*a*s+u*n*c-t*h*c-r*n*d+t*a*d)*b,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),o=1-n,r=e.x,a=e.y,c=e.z,l=o*r,u=o*a;return this.set(l*r+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*r,0,l*c-s*a,u*c+s*r,o*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,r){return this.set(1,n,o,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,r=t._y,a=t._z,c=t._w,l=o+o,u=r+r,h=a+a,d=o*l,m=o*u,g=o*h,_=r*u,p=r*h,f=a*h,E=c*l,y=c*u,A=c*h,F=n.x,R=n.y,b=n.z;return s[0]=(1-(_+f))*F,s[1]=(m+A)*F,s[2]=(g-y)*F,s[3]=0,s[4]=(m-A)*R,s[5]=(1-(d+f))*R,s[6]=(p+E)*R,s[7]=0,s[8]=(g+y)*b,s[9]=(p-E)*b,s[10]=(1-(d+_))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let o=Hs.set(s[0],s[1],s[2]).length();const r=Hs.set(s[4],s[5],s[6]).length(),a=Hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],$n.copy(this);const l=1/o,u=1/r,h=1/a;return $n.elements[0]*=l,$n.elements[1]*=l,$n.elements[2]*=l,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=h,$n.elements[9]*=h,$n.elements[10]*=h,t.setFromRotationMatrix($n),n.x=o,n.y=r,n.z=a,this}makePerspective(e,t,n,s,o,r,a=ti){const c=this.elements,l=2*o/(t-e),u=2*o/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let m,g;if(a===ti)m=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===_o)m=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,o,r,a=ti){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(r-o),d=(t+e)*l,m=(n+s)*u;let g,_;if(a===ti)g=(r+o)*h,_=-2*h;else if(a===_o)g=o*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hs=new L,$n=new Lt,u_=new L(0,0,0),h_=new L(1,1,1),Yi=new L,yr=new L,wn=new L,Lu=new Lt,Pu=new bs;class Xn{constructor(e=0,t=0,n=0,s=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-tn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pu.setFromEuler(this),this.setFromQuaternion(Pu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class Md{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let d_=0;const Iu=new L,Gs=new bs,Ai=new Lt,Mr=new L,Vo=new L,f_=new L,p_=new bs,Du=new L(1,0,0),Uu=new L(0,1,0),Ou=new L(0,0,1),Fu={type:"added"},m_={type:"removed"},ks={type:"childadded",child:null},$a={type:"childremoved",child:null};class jt extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new L,t=new Xn,n=new bs,s=new L(1,1,1);function o(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Lt},normalMatrix:{value:new Xe}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Md,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(Du,e)}rotateY(e){return this.rotateOnAxis(Uu,e)}rotateZ(e){return this.rotateOnAxis(Ou,e)}translateOnAxis(e,t){return Iu.copy(e).applyQuaternion(this.quaternion),this.position.add(Iu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Du,e)}translateY(e){return this.translateOnAxis(Uu,e)}translateZ(e){return this.translateOnAxis(Ou,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mr.copy(e):Mr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Vo,Mr,this.up):Ai.lookAt(Mr,Vo,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),Gs.setFromRotationMatrix(Ai),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fu),ks.child=e,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(m_),$a.child=e,this.dispatchEvent($a),$a.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fu),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,f_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,p_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const o=t[n];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++){const a=s[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];o(e.shapes,h)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(e.materials,this.material[c]));s.material=a}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(e.animations,c))}}if(t){const a=r(e.geometries),c=r(e.materials),l=r(e.textures),u=r(e.images),h=r(e.shapes),d=r(e.skeletons),m=r(e.animations),g=r(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}jt.DEFAULT_UP=new L(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new L,Ni=new L,Za=new L,bi=new L,Ws=new L,Xs=new L,Vu=new L,Ka=new L,Ja=new L,Qa=new L;class mi{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Zn.subVectors(e,t),s.cross(Zn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){Zn.subVectors(s,t),Ni.subVectors(n,t),Za.subVectors(e,t);const r=Zn.dot(Zn),a=Zn.dot(Ni),c=Zn.dot(Za),l=Ni.dot(Ni),u=Ni.dot(Za),h=r*l-a*a;if(h===0)return o.set(0,0,0),null;const d=1/h,m=(l*c-a*u)*d,g=(r*u-a*c)*d;return o.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,n,s,o,r,a,c){return this.getBarycoord(e,t,n,s,bi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,bi.x),c.addScaledVector(r,bi.y),c.addScaledVector(a,bi.z),c)}static isFrontFacing(e,t,n,s){return Zn.subVectors(n,t),Ni.subVectors(e,t),Zn.cross(Ni).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),Zn.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return mi.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,o=this.c;let r,a;Ws.subVectors(s,n),Xs.subVectors(o,n),Ka.subVectors(e,n);const c=Ws.dot(Ka),l=Xs.dot(Ka);if(c<=0&&l<=0)return t.copy(n);Ja.subVectors(e,s);const u=Ws.dot(Ja),h=Xs.dot(Ja);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return r=c/(c-u),t.copy(n).addScaledVector(Ws,r);Qa.subVectors(e,o);const m=Ws.dot(Qa),g=Xs.dot(Qa);if(g>=0&&m<=g)return t.copy(o);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Xs,a);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Vu.subVectors(o,s),a=(h-u)/(h-u+(m-g)),t.copy(s).addScaledVector(Vu,a);const f=1/(p+_+d);return r=_*f,a=d*f,t.copy(n).addScaledVector(Ws,r).addScaledVector(Xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function ec(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=yt.workingColorSpace){if(e=ml(e,1),t=tn(t,0,1),n=tn(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,r=2*n-o;this.r=ec(r,o,e+1/3),this.g=ec(r,o,e),this.b=ec(r,o,e-1/3)}return yt.toWorkingColorSpace(this,s),this}setStyle(e,t=Kn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kn){const n=Sd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}copyLinearToSRGB(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return yt.fromWorkingColorSpace(hn.copy(this),e),Math.round(tn(hn.r*255,0,255))*65536+Math.round(tn(hn.g*255,0,255))*256+Math.round(tn(hn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(hn.copy(this),t);const n=hn.r,s=hn.g,o=hn.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let c,l;const u=(a+r)/2;if(a===r)c=0,l=0;else{const h=r-a;switch(l=u<=.5?h/(r+a):h/(2-r-a),r){case n:c=(s-o)/h+(s<o?6:0);break;case s:c=(o-n)/h+2;break;case o:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Kn){yt.fromWorkingColorSpace(hn.copy(this),e);const t=hn.r,n=hn.g,s=hn.b;return e!==Kn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(Sr);const n=qo(ji.h,Sr.h,t),s=qo(ji.s,Sr.s,t),o=qo(ji.l,Sr.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new Fe;Fe.NAMES=Sd;let g_=0;class On extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=so,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vc,this.blendDst=zc,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==so&&(n.blending=this.blending),this.side!==ns&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vc&&(n.blendSrc=this.blendSrc),this.blendDst!==zc&&(n.blendDst=this.blendDst),this.blendEquation!==ys&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(t){const o=s(e.textures),r=s(e.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hi extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new L,Tr=new Te;class Wn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return xd("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tr.fromBufferAttribute(this,t),Tr.applyMatrix3(e),this.setXY(t,Tr.x,Tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),o=mt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jr&&(e.usage=this.usage),e}}class Td extends Wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ed extends Wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Di extends Wn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let __=0;const Bn=new Lt,tc=new jt,qs=new L,Rn=new sr,zo=new sr,Jt=new L;class cs extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_d(e)?Ed:Td)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Xe().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this}scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this}lookAt(e){return tc.lookAt(e),tc.updateMatrix(),this.applyMatrix4(tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const o=e[n];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Di(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];Rn.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let o=0,r=t.length;o<r;o++){const a=t[o];zo.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Rn.min,zo.min),Rn.expandByPoint(Jt),Jt.addVectors(Rn.max,zo.max),Rn.expandByPoint(Jt)):(Rn.expandByPoint(zo.min),Rn.expandByPoint(zo.max))}Rn.getCenter(n);let s=0;for(let o=0,r=e.count;o<r;o++)Jt.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(Jt));if(t)for(let o=0,r=t.length;o<r;o++){const a=t[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Jt.fromBufferAttribute(a,l),c&&(qs.fromBufferAttribute(e,l),Jt.add(qs)),s=Math.max(s,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let H=0;H<n.count;H++)a[H]=new L,c[H]=new L;const l=new L,u=new L,h=new L,d=new Te,m=new Te,g=new Te,_=new L,p=new L;function f(H,T,M){l.fromBufferAttribute(n,H),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,M),d.fromBufferAttribute(o,H),m.fromBufferAttribute(o,T),g.fromBufferAttribute(o,M),u.sub(l),h.sub(l),m.sub(d),g.sub(d);const G=1/(m.x*g.y-g.x*m.y);isFinite(G)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(G),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(G),a[H].add(_),a[T].add(_),a[M].add(_),c[H].add(p),c[T].add(p),c[M].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let H=0,T=E.length;H<T;++H){const M=E[H],G=M.start,J=M.count;for(let I=G,ne=G+J;I<ne;I+=3)f(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const y=new L,A=new L,F=new L,R=new L;function b(H){F.fromBufferAttribute(s,H),R.copy(F);const T=a[H];y.copy(T),y.sub(F.multiplyScalar(F.dot(T))).normalize(),A.crossVectors(R,T);const G=A.dot(c[H])<0?-1:1;r.setXYZW(H,y.x,y.y,y.z,G)}for(let H=0,T=E.length;H<T;++H){const M=E[H],G=M.start,J=M.count;for(let I=G,ne=G+J;I<ne;I+=3)b(e.getX(I+0)),b(e.getX(I+1)),b(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new L,o=new L,r=new L,a=new L,c=new L,l=new L,u=new L,h=new L;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,_),r.fromBufferAttribute(t,p),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),o.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*u;for(let f=0;f<u;f++)d[g++]=l[m++]}return new Wn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cs,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const o=e.morphAttributes;for(const l in o){const u=[],h=o[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,u=r.length;l<u;l++){const h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zu=new Lt,ds=new yd,Er=new xl,Bu=new L,Ys=new L,js=new L,$s=new L,nc=new L,Ar=new L,Nr=new Te,br=new Te,wr=new Te,Hu=new L,Gu=new L,ku=new L,Rr=new L,Cr=new L;class ni extends jt{constructor(e=new cs,t=new hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(o&&a){Ar.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const u=a[c],h=o[c];u!==0&&(nc.fromBufferAttribute(h,e),r?Ar.addScaledVector(nc,u):Ar.addScaledVector(nc.sub(t),u))}t.add(Ar)}return t}raycast(e,t){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(o),ds.copy(e.ray).recast(e.near),!(Er.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Er,Bu)===null||ds.origin.distanceToSquared(Bu)>(e.far-e.near)**2))&&(zu.copy(o).invert(),ds.copy(e.ray).applyMatrix4(zu),!(n.boundingBox!==null&&ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,n){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,d=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=r[p.materialIndex],E=Math.max(p.start,m.start),y=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let A=E,F=y;A<F;A+=3){const R=a.getX(A),b=a.getX(A+1),H=a.getX(A+2);s=Lr(this,f,e,n,l,u,h,R,b,H),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const E=a.getX(p),y=a.getX(p+1),A=a.getX(p+2);s=Lr(this,r,e,n,l,u,h,E,y,A),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=r[p.materialIndex],E=Math.max(p.start,m.start),y=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let A=E,F=y;A<F;A+=3){const R=A,b=A+1,H=A+2;s=Lr(this,f,e,n,l,u,h,R,b,H),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const E=p,y=p+1,A=p+2;s=Lr(this,r,e,n,l,u,h,E,y,A),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function x_(i,e,t,n,s,o,r,a){let c;if(e.side===_n?c=n.intersectTriangle(r,o,s,!0,a):c=n.intersectTriangle(s,o,r,e.side===ns,a),c===null)return null;Cr.copy(a),Cr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Cr);return l<t.near||l>t.far?null:{distance:l,point:Cr.clone(),object:i}}function Lr(i,e,t,n,s,o,r,a,c,l){i.getVertexPosition(a,Ys),i.getVertexPosition(c,js),i.getVertexPosition(l,$s);const u=x_(i,e,t,n,Ys,js,$s,Rr);if(u){s&&(Nr.fromBufferAttribute(s,a),br.fromBufferAttribute(s,c),wr.fromBufferAttribute(s,l),u.uv=mi.getInterpolation(Rr,Ys,js,$s,Nr,br,wr,new Te)),o&&(Nr.fromBufferAttribute(o,a),br.fromBufferAttribute(o,c),wr.fromBufferAttribute(o,l),u.uv1=mi.getInterpolation(Rr,Ys,js,$s,Nr,br,wr,new Te)),r&&(Hu.fromBufferAttribute(r,a),Gu.fromBufferAttribute(r,c),ku.fromBufferAttribute(r,l),u.normal=mi.getInterpolation(Rr,Ys,js,$s,Hu,Gu,ku,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new L,materialIndex:0};mi.getNormal(Ys,js,$s,h.normal),u.face=h}return u}class To extends cs{constructor(e=1,t=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,r,o,0),g("z","y","x",1,-1,n,t,-e,r,o,1),g("x","z","y",1,1,e,n,t,s,r,2),g("x","z","y",1,-1,e,n,-t,s,r,3),g("x","y","z",1,-1,e,t,n,s,o,4),g("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new Di(l,3)),this.setAttribute("normal",new Di(u,3)),this.setAttribute("uv",new Di(h,2));function g(_,p,f,E,y,A,F,R,b,H,T){const M=A/b,G=F/H,J=A/2,I=F/2,ne=R/2,te=b+1,ae=H+1;let ce=0,j=0;const ue=new L;for(let le=0;le<ae;le++){const be=le*G-I;for(let et=0;et<te;et++){const dt=et*M-J;ue[_]=dt*E,ue[p]=be*y,ue[f]=ne,l.push(ue.x,ue.y,ue.z),ue[_]=0,ue[p]=0,ue[f]=R>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push(et/b),h.push(1-le/H),ce+=1}}for(let le=0;le<H;le++)for(let be=0;be<b;be++){const et=d+be+te*le,dt=d+be+te*(le+1),K=d+(be+1)+te*(le+1),he=d+(be+1)+te*le;c.push(et,dt,he),c.push(dt,K,he),j+=6}a.addGroup(m,j,T),m+=j,d+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vo(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function gn(i){const e={};for(let t=0;t<i.length;t++){const n=vo(i[t]);for(const s in n)e[s]=n[s]}return e}function v_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ad(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const y_={clone:vo,merge:gn};var M_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,S_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M_,this.fragmentShader=S_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vo(e.uniforms),this.uniformsGroups=v_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nd extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new L,Wu=new Te,Xu=new Te;class Tn extends Nd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xo*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,Wu,Xu),t.subVectors(Xu,Wu)}setViewOffset(e,t,n,s,o,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,t-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zs=-90,Ks=1;class T_ extends jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Tn(Zs,Ks,e,t);s.layers=this.layers,this.add(s);const o=new Tn(Zs,Ks,e,t);o.layers=this.layers,this.add(o);const r=new Tn(Zs,Ks,e,t);r.layers=this.layers,this.add(r);const a=new Tn(Zs,Ks,e,t);a.layers=this.layers,this.add(a);const c=new Tn(Zs,Ks,e,t);c.layers=this.layers,this.add(c);const l=new Tn(Zs,Ks,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,o,r,a,c]=t;for(const l of t)this.remove(l);if(e===ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_o)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,o),e.setRenderTarget(n,1,s),e.render(t,r),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class bd extends xn{constructor(e,t,n,s,o,r,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:po,super(e,t,n,s,o,r,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class E_ extends Ns{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new bd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new To(5,5,5),o=new Oi({name:"CubemapFromEquirect",uniforms:vo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:ts});o.uniforms.tEquirect.value=t;const r=new ni(s,o),a=t.minFilter;return t.minFilter===Ji&&(t.minFilter=Qn),new T_(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,s){const o=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(o)}}const ic=new L,A_=new L,N_=new Xe;class Ri{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ic.subVectors(n,t).cross(A_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ic),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||N_.getNormalMatrix(e),s=this.coplanarPoint(ic).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new xl,Pr=new L;class vl{constructor(e=new Ri,t=new Ri,n=new Ri,s=new Ri,o=new Ri,r=new Ri){this.planes=[e,t,n,s,o,r]}set(e,t,n,s,o,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ti){const n=this.planes,s=e.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],m=s[8],g=s[9],_=s[10],p=s[11],f=s[12],E=s[13],y=s[14],A=s[15];if(n[0].setComponents(c-o,d-l,p-m,A-f).normalize(),n[1].setComponents(c+o,d+l,p+m,A+f).normalize(),n[2].setComponents(c+r,d+u,p+g,A+E).normalize(),n[3].setComponents(c-r,d-u,p-g,A-E).normalize(),n[4].setComponents(c-a,d-h,p-_,A-y).normalize(),t===ti)n[5].setComponents(c+a,d+h,p+_,A+y).normalize();else if(t===_o)n[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Pr.x=s.normal.x>0?e.max.x:e.min.x,Pr.y=s.normal.y>0?e.max.y:e.min.y,Pr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wd(){let i=null,e=!1,t=null,n=null;function s(o,r){t(o,r),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function b_(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c._updateRange,d=c.updateRanges;if(i.bindBuffer(l,a),h.count===-1&&d.length===0&&i.bufferSubData(l,0,u),d.length!==0){for(let m=0,g=d.length;m<g;m++){const _=d[m];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function r(a,c){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class da extends cs{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const o=e/2,r=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,m=[],g=[],_=[],p=[];for(let f=0;f<u;f++){const E=f*d-r;for(let y=0;y<l;y++){const A=y*h-o;g.push(A,-E,0),_.push(0,0,1),p.push(y/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<a;E++){const y=E+l*f,A=E+l*(f+1),F=E+1+l*(f+1),R=E+1+l*f;m.push(y,A,R),m.push(A,F,R)}this.setIndex(m),this.setAttribute("position",new Di(g,3)),this.setAttribute("normal",new Di(_,3)),this.setAttribute("uv",new Di(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.width,e.height,e.widthSegments,e.heightSegments)}}var w_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R_=`#ifdef USE_ALPHAHASH
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
#endif`,C_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D_=`#ifdef USE_AOMAP
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
#endif`,U_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,F_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,V_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,H_=`#ifdef USE_IRIDESCENCE
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
#endif`,G_=`#ifdef USE_BUMPMAP
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
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Z_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,K_=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,J_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Q_=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,e0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,s0="gl_FragColor = linearToOutputTexel( gl_FragColor );",o0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,r0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,c0=`#ifdef USE_ENVMAP
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
#endif`,l0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,h0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,d0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m0=`#ifdef USE_GRADIENTMAP
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
}`,g0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v0=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,y0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,M0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,N0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,b0=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,w0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,R0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,F0=`#if defined( USE_POINTS_UV )
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
#endif`,V0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,H0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,k0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,W0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,X0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Z0=`#ifdef USE_NORMALMAP
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
#endif`,K0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ix=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ox=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,ux=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,dx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,px=`#ifdef USE_SKINNING
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
#endif`,mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gx=`#ifdef USE_SKINNING
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
#endif`,_x=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yx=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mx=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sx=`#ifdef USE_TRANSMISSION
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
#endif`,Tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wx=`uniform sampler2D t2D;
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
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`#include <common>
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
}`,Dx=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ux=`#define DISTANCE
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
}`,Ox=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`uniform float scale;
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
}`,Bx=`uniform vec3 diffuse;
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
}`,Hx=`#include <common>
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
}`,Gx=`uniform vec3 diffuse;
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
}`,kx=`#define LAMBERT
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
}`,Wx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Xx=`#define MATCAP
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
}`,qx=`#define MATCAP
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
}`,Yx=`#define NORMAL
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
}`,jx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$x=`#define PHONG
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
}`,Zx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Kx=`#define STANDARD
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
}`,Jx=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Qx=`#define TOON
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
}`,ev=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,tv=`uniform float size;
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
}`,nv=`uniform vec3 diffuse;
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
}`,iv=`#include <common>
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
}`,sv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ov=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,rv=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:w_,alphahash_pars_fragment:R_,alphamap_fragment:C_,alphamap_pars_fragment:L_,alphatest_fragment:P_,alphatest_pars_fragment:I_,aomap_fragment:D_,aomap_pars_fragment:U_,batching_pars_vertex:O_,batching_vertex:F_,begin_vertex:V_,beginnormal_vertex:z_,bsdfs:B_,iridescence_fragment:H_,bumpmap_pars_fragment:G_,clipping_planes_fragment:k_,clipping_planes_pars_fragment:W_,clipping_planes_pars_vertex:X_,clipping_planes_vertex:q_,color_fragment:Y_,color_pars_fragment:j_,color_pars_vertex:$_,color_vertex:Z_,common:K_,cube_uv_reflection_fragment:J_,defaultnormal_vertex:Q_,displacementmap_pars_vertex:e0,displacementmap_vertex:t0,emissivemap_fragment:n0,emissivemap_pars_fragment:i0,colorspace_fragment:s0,colorspace_pars_fragment:o0,envmap_fragment:r0,envmap_common_pars_fragment:a0,envmap_pars_fragment:c0,envmap_pars_vertex:l0,envmap_physical_pars_fragment:y0,envmap_vertex:u0,fog_vertex:h0,fog_pars_vertex:d0,fog_fragment:f0,fog_pars_fragment:p0,gradientmap_pars_fragment:m0,lightmap_pars_fragment:g0,lights_lambert_fragment:_0,lights_lambert_pars_fragment:x0,lights_pars_begin:v0,lights_toon_fragment:M0,lights_toon_pars_fragment:S0,lights_phong_fragment:T0,lights_phong_pars_fragment:E0,lights_physical_fragment:A0,lights_physical_pars_fragment:N0,lights_fragment_begin:b0,lights_fragment_maps:w0,lights_fragment_end:R0,logdepthbuf_fragment:C0,logdepthbuf_pars_fragment:L0,logdepthbuf_pars_vertex:P0,logdepthbuf_vertex:I0,map_fragment:D0,map_pars_fragment:U0,map_particle_fragment:O0,map_particle_pars_fragment:F0,metalnessmap_fragment:V0,metalnessmap_pars_fragment:z0,morphinstance_vertex:B0,morphcolor_vertex:H0,morphnormal_vertex:G0,morphtarget_pars_vertex:k0,morphtarget_vertex:W0,normal_fragment_begin:X0,normal_fragment_maps:q0,normal_pars_fragment:Y0,normal_pars_vertex:j0,normal_vertex:$0,normalmap_pars_fragment:Z0,clearcoat_normal_fragment_begin:K0,clearcoat_normal_fragment_maps:J0,clearcoat_pars_fragment:Q0,iridescence_pars_fragment:ex,opaque_fragment:tx,packing:nx,premultiplied_alpha_fragment:ix,project_vertex:sx,dithering_fragment:ox,dithering_pars_fragment:rx,roughnessmap_fragment:ax,roughnessmap_pars_fragment:cx,shadowmap_pars_fragment:lx,shadowmap_pars_vertex:ux,shadowmap_vertex:hx,shadowmask_pars_fragment:dx,skinbase_vertex:fx,skinning_pars_vertex:px,skinning_vertex:mx,skinnormal_vertex:gx,specularmap_fragment:_x,specularmap_pars_fragment:xx,tonemapping_fragment:vx,tonemapping_pars_fragment:yx,transmission_fragment:Mx,transmission_pars_fragment:Sx,uv_pars_fragment:Tx,uv_pars_vertex:Ex,uv_vertex:Ax,worldpos_vertex:Nx,background_vert:bx,background_frag:wx,backgroundCube_vert:Rx,backgroundCube_frag:Cx,cube_vert:Lx,cube_frag:Px,depth_vert:Ix,depth_frag:Dx,distanceRGBA_vert:Ux,distanceRGBA_frag:Ox,equirect_vert:Fx,equirect_frag:Vx,linedashed_vert:zx,linedashed_frag:Bx,meshbasic_vert:Hx,meshbasic_frag:Gx,meshlambert_vert:kx,meshlambert_frag:Wx,meshmatcap_vert:Xx,meshmatcap_frag:qx,meshnormal_vert:Yx,meshnormal_frag:jx,meshphong_vert:$x,meshphong_frag:Zx,meshphysical_vert:Kx,meshphysical_frag:Jx,meshtoon_vert:Qx,meshtoon_frag:ev,points_vert:tv,points_frag:nv,shadow_vert:iv,shadow_frag:sv,sprite_vert:ov,sprite_frag:rv},_e={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},di={basic:{uniforms:gn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:gn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Fe(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:gn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:gn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:gn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Fe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:gn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:gn([_e.points,_e.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:gn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:gn([_e.common,_e.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:gn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:gn([_e.sprite,_e.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:gn([_e.common,_e.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:gn([_e.lights,_e.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};di.physical={uniforms:gn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Ir={r:0,b:0,g:0},ps=new Xn,av=new Lt;function cv(i,e,t,n,s,o,r){const a=new Fe(0);let c=o===!0?0:1,l,u,h=null,d=0,m=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function _(E){let y=!1;const A=g(E);A===null?f(a,c):A&&A.isColor&&(f(A,1),y=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,r):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil)}function p(E,y){const A=g(y);A&&(A.isCubeTexture||A.mapping===ua)?(u===void 0&&(u=new ni(new To(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:vo(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ps.copy(y.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(av.makeRotationFromEuler(ps)),u.material.toneMapped=yt.getTransfer(A.colorSpace)!==bt,(h!==A||d!==A.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,m=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new ni(new da(2,2),new Oi({name:"BackgroundMaterial",uniforms:vo(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=yt.getTransfer(A.colorSpace)!==bt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=A,d=A.version,m=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,y){E.getRGB(Ir,Ad(i)),n.buffers.color.setClear(Ir.r,Ir.g,Ir.b,y,r)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),c=y,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(a,c)},render:_,addToRenderList:p}}function lv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,r=!1;function a(M,G,J,I,ne){let te=!1;const ae=h(I,J,G);o!==ae&&(o=ae,l(o.object)),te=m(M,I,J,ne),te&&g(M,I,J,ne),ne!==null&&e.update(ne,i.ELEMENT_ARRAY_BUFFER),(te||r)&&(r=!1,A(M,G,J,I),ne!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,G,J){const I=J.wireframe===!0;let ne=n[M.id];ne===void 0&&(ne={},n[M.id]=ne);let te=ne[G.id];te===void 0&&(te={},ne[G.id]=te);let ae=te[I];return ae===void 0&&(ae=d(c()),te[I]=ae),ae}function d(M){const G=[],J=[],I=[];for(let ne=0;ne<t;ne++)G[ne]=0,J[ne]=0,I[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:J,attributeDivisors:I,object:M,attributes:{},index:null}}function m(M,G,J,I){const ne=o.attributes,te=G.attributes;let ae=0;const ce=J.getAttributes();for(const j in ce)if(ce[j].location>=0){const le=ne[j];let be=te[j];if(be===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(be=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(be=M.instanceColor)),le===void 0||le.attribute!==be||be&&le.data!==be.data)return!0;ae++}return o.attributesNum!==ae||o.index!==I}function g(M,G,J,I){const ne={},te=G.attributes;let ae=0;const ce=J.getAttributes();for(const j in ce)if(ce[j].location>=0){let le=te[j];le===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(le=M.instanceColor));const be={};be.attribute=le,le&&le.data&&(be.data=le.data),ne[j]=be,ae++}o.attributes=ne,o.attributesNum=ae,o.index=I}function _(){const M=o.newAttributes;for(let G=0,J=M.length;G<J;G++)M[G]=0}function p(M){f(M,0)}function f(M,G){const J=o.newAttributes,I=o.enabledAttributes,ne=o.attributeDivisors;J[M]=1,I[M]===0&&(i.enableVertexAttribArray(M),I[M]=1),ne[M]!==G&&(i.vertexAttribDivisor(M,G),ne[M]=G)}function E(){const M=o.newAttributes,G=o.enabledAttributes;for(let J=0,I=G.length;J<I;J++)G[J]!==M[J]&&(i.disableVertexAttribArray(J),G[J]=0)}function y(M,G,J,I,ne,te,ae){ae===!0?i.vertexAttribIPointer(M,G,J,ne,te):i.vertexAttribPointer(M,G,J,I,ne,te)}function A(M,G,J,I){_();const ne=I.attributes,te=J.getAttributes(),ae=G.defaultAttributeValues;for(const ce in te){const j=te[ce];if(j.location>=0){let ue=ne[ce];if(ue===void 0&&(ce==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),ce==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),ue!==void 0){const le=ue.normalized,be=ue.itemSize,et=e.get(ue);if(et===void 0)continue;const dt=et.buffer,K=et.type,he=et.bytesPerElement,Se=K===i.INT||K===i.UNSIGNED_INT||ue.gpuType===cd;if(ue.isInterleavedBufferAttribute){const ge=ue.data,tt=ge.stride,$e=ue.offset;if(ge.isInstancedInterleavedBuffer){for(let z=0;z<j.locationSize;z++)f(j.location+z,ge.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let z=0;z<j.locationSize;z++)p(j.location+z);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let z=0;z<j.locationSize;z++)y(j.location+z,be/j.locationSize,K,le,tt*he,($e+be/j.locationSize*z)*he,Se)}else{if(ue.isInstancedBufferAttribute){for(let ge=0;ge<j.locationSize;ge++)f(j.location+ge,ue.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ge=0;ge<j.locationSize;ge++)p(j.location+ge);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let ge=0;ge<j.locationSize;ge++)y(j.location+ge,be/j.locationSize,K,le,be*he,be/j.locationSize*ge*he,Se)}}else if(ae!==void 0){const le=ae[ce];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(j.location,le);break;case 3:i.vertexAttrib3fv(j.location,le);break;case 4:i.vertexAttrib4fv(j.location,le);break;default:i.vertexAttrib1fv(j.location,le)}}}}E()}function F(){H();for(const M in n){const G=n[M];for(const J in G){const I=G[J];for(const ne in I)u(I[ne].object),delete I[ne];delete G[J]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const G=n[M.id];for(const J in G){const I=G[J];for(const ne in I)u(I[ne].object),delete I[ne];delete G[J]}delete n[M.id]}function b(M){for(const G in n){const J=n[G];if(J[M.id]===void 0)continue;const I=J[M.id];for(const ne in I)u(I[ne].object),delete I[ne];delete J[M.id]}}function H(){T(),r=!0,o!==s&&(o=s,l(o.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:H,resetDefaultState:T,dispose:F,releaseStatesOfGeometry:R,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:p,disableUnusedAttributes:E}}function uv(i,e,t){let n;function s(l){n=l}function o(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function r(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<h;m++)this.render(l[m],u[m]);else{d.multiDrawArraysWEBGL(n,l,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];t.update(m,n,1)}}function c(l,u,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)r(l[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<d.length;_++)t.update(g,n,d[_])}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function hv(i,e,t,n){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(R){return!(R!==gi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const b=R===nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==is&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Pi&&!b)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:f,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:A,maxSamples:F}}function dv(i){const e=this;let t=null,n=0,s=!1,o=!1;const r=new Ri,a=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||s;return s=d,n=h.length,m},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||o&&!p)o?u(null):l();else{const E=o?0:n,y=E*4;let A=f.clippingState||null;c.value=A,A=u(g,d,y,m);for(let F=0;F!==y;++F)A[F]=t[F];f.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const f=m+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let y=0,A=m;y!==_;++y,A+=4)r.copy(h[y]).applyMatrix4(E,a),r.normal.toArray(p,A),p[A+3]=r.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function fv(i){let e=new WeakMap;function t(r,a){return a===Bc?r.mapping=po:a===Hc&&(r.mapping=mo),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Bc||a===Hc)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new E_(c.height);return l.fromEquirectangularTexture(i,r),e.set(r,l),r.addEventListener("dispose",s),t(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class yl extends Nd{constructor(e=-1,t=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-e,r=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qs=4,qu=[.125,.215,.35,.446,.526,.582],Ms=20,sc=new yl,Yu=new Fe;let oc=null,rc=0,ac=0,cc=!1;const xs=(1+Math.sqrt(5))/2,Js=1/xs,ju=[new L(-xs,Js,0),new L(xs,Js,0),new L(-Js,0,xs),new L(Js,0,xs),new L(0,xs,-Js),new L(0,xs,Js),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class $u{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){oc=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oc,rc,ac),this._renderer.xr.enabled=cc,e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===po||e.mapping===mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oc=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:nr,format:gi,colorSpace:ci,depthBuffer:!1},s=Zu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zu(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pv(o)),this._blurMaterial=mv(o,e,t)}return s}_compileMaterial(e){const t=new ni(this._lodPlanes[0],e);this._renderer.compile(t,sc)}_sceneToCubeUV(e,t,n,s){const a=new Tn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Yu),u.toneMapping=kn,u.autoClear=!1;const m=new hi({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new ni(new To,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Yu),_=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):E===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const y=this._cubeSize;Dr(s,E*y,f>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===po||e.mapping===mo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ku());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new ni(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const c=this._cubeSize;Dr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,sc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=ju[(s-o-1)%ju.length];this._blur(e,o-1,o,r,a)}t.autoClear=n}_blur(e,t,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,s,"latitudinal",o),this._halfBlur(r,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ni(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Ms-1),_=o/g,p=isFinite(o)?1+Math.floor(u*_):Ms;p>Ms&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ms}`);const f=[];let E=0;for(let b=0;b<Ms;++b){const H=b/_,T=Math.exp(-H*H/2);f.push(T),b===0?E+=T:b<p&&(E+=2*T)}for(let b=0;b<f.length;b++)f[b]=f[b]/E;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const A=this._sizeLods[s],F=3*A*(s>y-Qs?s-y+Qs:0),R=4*(this._cubeSize-A);Dr(t,F,R,3*A,2*A),c.setRenderTarget(t),c.render(h,sc)}}function pv(i){const e=[],t=[],n=[];let s=i;const o=i-Qs+1+qu.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);t.push(a);let c=1/a;r>i-Qs?c=qu[r-i+Qs-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,p=2,f=1,E=new Float32Array(_*g*m),y=new Float32Array(p*g*m),A=new Float32Array(f*g*m);for(let R=0;R<m;R++){const b=R%3*2/3-1,H=R>2?0:-1,T=[b,H,0,b+2/3,H,0,b+2/3,H+1,0,b,H,0,b+2/3,H+1,0,b,H+1,0];E.set(T,_*g*R),y.set(d,p*g*R);const M=[R,R,R,R,R,R];A.set(M,f*g*R)}const F=new cs;F.setAttribute("position",new Wn(E,_)),F.setAttribute("uv",new Wn(y,p)),F.setAttribute("faceIndex",new Wn(A,f)),e.push(F),s>Qs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zu(i,e,t){const n=new Ns(i,e,t);return n.texture.mapping=ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function mv(i,e,t){const n=new Float32Array(Ms),s=new L(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function Ku(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function Ju(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function Ml(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Bc||c===Hc,u=c===po||c===mo;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new $u(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return l&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new $u(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function _v(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xv(i,e,t,n){const s={},o=new WeakMap;function r(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}d.removeEventListener("dispose",r),delete s[d.id];const m=o.get(d);m&&(e.remove(m),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)e.update(_[p],i.ARRAY_BUFFER)}}function l(h){const d=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let y=0,A=E.length;y<A;y+=3){const F=E[y+0],R=E[y+1],b=E[y+2];d.push(F,R,R,b,b,F)}}else if(g!==void 0){const E=g.array;_=g.version;for(let y=0,A=E.length/3-1;y<A;y+=3){const F=y+0,R=y+1,b=y+2;d.push(F,R,R,b,b,F)}}else return;const p=new(_d(d)?Ed:Td)(d,1);p.version=_;const f=o.get(h);f&&e.remove(f),o.set(h,p)}function u(h){const d=o.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return o.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function vv(i,e,t){let n;function s(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,m){i.drawElements(n,m,o,d*r),t.update(m,n,1)}function l(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,o,d*r,g),t.update(m,n,g))}function u(d,m,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<g;p++)this.render(d[p]/r,m[p]);else{_.multiDrawElementsWEBGL(n,m,0,o,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];t.update(p,n,1)}}function h(d,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)l(d[f]/r,m[f],_[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,o,d,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=m[E];for(let E=0;E<_.length;E++)t.update(f,n,_[E])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function yv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Mv(i,e,t){const n=new WeakMap,s=new at;function o(r,a,c){const l=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let M=function(){H.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var m=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let A=0;g===!0&&(A=1),_===!0&&(A=2),p===!0&&(A=3);let F=a.attributes.position.count*A,R=1;F>e.maxTextureSize&&(R=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const b=new Float32Array(F*R*4*h),H=new _l(b,F,R,h);H.type=Pi,H.needsUpdate=!0;const T=A*4;for(let G=0;G<h;G++){const J=f[G],I=E[G],ne=y[G],te=F*R*4*G;for(let ae=0;ae<J.count;ae++){const ce=ae*T;g===!0&&(s.fromBufferAttribute(J,ae),b[te+ce+0]=s.x,b[te+ce+1]=s.y,b[te+ce+2]=s.z,b[te+ce+3]=0),_===!0&&(s.fromBufferAttribute(I,ae),b[te+ce+4]=s.x,b[te+ce+5]=s.y,b[te+ce+6]=s.z,b[te+ce+7]=0),p===!0&&(s.fromBufferAttribute(ne,ae),b[te+ce+8]=s.x,b[te+ce+9]=s.y,b[te+ce+10]=s.z,b[te+ce+11]=ne.itemSize===4?s.w:1)}}d={count:h,texture:H,size:new Te(F,R)},n.set(a,d),a.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function Sv(i,e,t,n){let s=new WeakMap;function o(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:o,dispose:r}}class or extends xn{constructor(e,t,n,s,o,r,a,c,l,u){if(u=u!==void 0?u:oo,u!==oo&&u!==$o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===oo&&(n=go),n===void 0&&u===$o&&(n=ir),super(null,s,o,r,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:fn,this.minFilter=c!==void 0?c:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Rd=new xn,Cd=new or(1,1);Cd.compareFunction=gd;const Ld=new _l,Pd=new c_,Id=new bd,Qu=[],eh=[],th=new Float32Array(16),nh=new Float32Array(9),ih=new Float32Array(4);function Eo(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let o=Qu[s];if(o===void 0&&(o=new Float32Array(s),Qu[s]=o),e!==0){n.toArray(o,0);for(let r=1,a=0;r!==e;++r)a+=t,i[r].toArray(o,a)}return o}function $t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fa(i,e){let t=eh[e];t===void 0&&(t=new Int32Array(e),eh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Tv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ev(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2fv(this.addr,e),Zt(t,e)}}function Av(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;i.uniform3fv(this.addr,e),Zt(t,e)}}function Nv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4fv(this.addr,e),Zt(t,e)}}function bv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;ih.set(n),i.uniformMatrix2fv(this.addr,!1,ih),Zt(t,n)}}function wv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;nh.set(n),i.uniformMatrix3fv(this.addr,!1,nh),Zt(t,n)}}function Rv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;th.set(n),i.uniformMatrix4fv(this.addr,!1,th),Zt(t,n)}}function Cv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Lv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2iv(this.addr,e),Zt(t,e)}}function Pv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3iv(this.addr,e),Zt(t,e)}}function Iv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4iv(this.addr,e),Zt(t,e)}}function Dv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Uv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2uiv(this.addr,e),Zt(t,e)}}function Ov(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3uiv(this.addr,e),Zt(t,e)}}function Fv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4uiv(this.addr,e),Zt(t,e)}}function Vv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const o=this.type===i.SAMPLER_2D_SHADOW?Cd:Rd;t.setTexture2D(e||o,s)}function zv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Pd,s)}function Bv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Id,s)}function Hv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ld,s)}function Gv(i){switch(i){case 5126:return Tv;case 35664:return Ev;case 35665:return Av;case 35666:return Nv;case 35674:return bv;case 35675:return wv;case 35676:return Rv;case 5124:case 35670:return Cv;case 35667:case 35671:return Lv;case 35668:case 35672:return Pv;case 35669:case 35673:return Iv;case 5125:return Dv;case 36294:return Uv;case 36295:return Ov;case 36296:return Fv;case 35678:case 36198:case 36298:case 36306:case 35682:return Vv;case 35679:case 36299:case 36307:return zv;case 35680:case 36300:case 36308:case 36293:return Bv;case 36289:case 36303:case 36311:case 36292:return Hv}}function kv(i,e){i.uniform1fv(this.addr,e)}function Wv(i,e){const t=Eo(e,this.size,2);i.uniform2fv(this.addr,t)}function Xv(i,e){const t=Eo(e,this.size,3);i.uniform3fv(this.addr,t)}function qv(i,e){const t=Eo(e,this.size,4);i.uniform4fv(this.addr,t)}function Yv(i,e){const t=Eo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jv(i,e){const t=Eo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $v(i,e){const t=Eo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Zv(i,e){i.uniform1iv(this.addr,e)}function Kv(i,e){i.uniform2iv(this.addr,e)}function Jv(i,e){i.uniform3iv(this.addr,e)}function Qv(i,e){i.uniform4iv(this.addr,e)}function ey(i,e){i.uniform1uiv(this.addr,e)}function ty(i,e){i.uniform2uiv(this.addr,e)}function ny(i,e){i.uniform3uiv(this.addr,e)}function iy(i,e){i.uniform4uiv(this.addr,e)}function sy(i,e,t){const n=this.cache,s=e.length,o=fa(t,s);$t(n,o)||(i.uniform1iv(this.addr,o),Zt(n,o));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||Rd,o[r])}function oy(i,e,t){const n=this.cache,s=e.length,o=fa(t,s);$t(n,o)||(i.uniform1iv(this.addr,o),Zt(n,o));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||Pd,o[r])}function ry(i,e,t){const n=this.cache,s=e.length,o=fa(t,s);$t(n,o)||(i.uniform1iv(this.addr,o),Zt(n,o));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||Id,o[r])}function ay(i,e,t){const n=this.cache,s=e.length,o=fa(t,s);$t(n,o)||(i.uniform1iv(this.addr,o),Zt(n,o));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||Ld,o[r])}function cy(i){switch(i){case 5126:return kv;case 35664:return Wv;case 35665:return Xv;case 35666:return qv;case 35674:return Yv;case 35675:return jv;case 35676:return $v;case 5124:case 35670:return Zv;case 35667:case 35671:return Kv;case 35668:case 35672:return Jv;case 35669:case 35673:return Qv;case 5125:return ey;case 36294:return ty;case 36295:return ny;case 36296:return iy;case 35678:case 36198:case 36298:case 36306:case 35682:return sy;case 35679:case 36299:case 36307:return oy;case 35680:case 36300:case 36308:case 36293:return ry;case 36289:case 36303:case 36311:case 36292:return ay}}class ly{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gv(t.type)}}class uy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cy(t.type)}}class hy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(e,t[a.id],n)}}}const lc=/(\w+)(\])?(\[|\.)?/g;function sh(i,e){i.seq.push(e),i.map[e.id]=e}function dy(i,e,t){const n=i.name,s=n.length;for(lc.lastIndex=0;;){const o=lc.exec(n),r=lc.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){sh(t,l===void 0?new ly(a,i,e):new uy(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new hy(a),sh(t,h)),t=h}}}class Br{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),r=e.getUniformLocation(t,o.name);dy(o,r,this)}}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,r=t.length;o!==r;++o){const a=t[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,o=e.length;s!==o;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function oh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const fy=37297;let py=0;function my(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}function gy(i){const e=yt.getPrimaries(yt.workingColorSpace),t=yt.getPrimaries(i);let n;switch(e===t?n="":e===Yr&&t===qr?n="LinearDisplayP3ToLinearSRGB":e===qr&&t===Yr&&(n="LinearSRGBToLinearDisplayP3"),i){case ci:case ha:return[n,"LinearTransferOETF"];case Kn:case pl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function rh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+my(i.getShaderSource(e),r)}else return s}function _y(i,e){const t=gy(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function xy(i,e){let t;switch(e){case td:t="Linear";break;case nd:t="Reinhard";break;case id:t="OptimizedCineon";break;case sd:t="ACESFilmic";break;case od:t="AgX";break;case Mg:t="Neutral";break;case yg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function vy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function yy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function My(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(e,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[r]={type:o.type,location:i.getAttribLocation(e,r),locationSize:a}}return t}function Wo(i){return i!==""}function ah(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ch(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xc(i){return i.replace(Sy,Ey)}const Ty=new Map;function Ey(i,e){let t=je[e];if(t===void 0){const n=Ty.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xc(t)}const Ay=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lh(i){return i.replace(Ay,Ny)}function Ny(i,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function uh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function by(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ed?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===qm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function wy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case po:case mo:e="ENVMAP_TYPE_CUBE";break;case ua:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ry(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case mo:e="ENVMAP_MODE_REFRACTION";break}return e}function Cy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case la:e="ENVMAP_BLENDING_MULTIPLY";break;case xg:e="ENVMAP_BLENDING_MIX";break;case vg:e="ENVMAP_BLENDING_ADD";break}return e}function Ly(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Py(i,e,t,n){const s=i.getContext(),o=t.defines;let r=t.vertexShader,a=t.fragmentShader;const c=by(t),l=wy(t),u=Ry(t),h=Cy(t),d=Ly(t),m=vy(t),g=yy(o),_=s.createProgram();let p,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wo).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wo).join(`
`),f.length>0&&(f+=`
`)):(p=[uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),f=[uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?je.tonemapping_pars_fragment:"",t.toneMapping!==kn?xy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,_y("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wo).join(`
`)),r=Xc(r),r=ah(r,t),r=ch(r,t),a=Xc(a),a=ah(a,t),a=ch(a,t),r=lh(r),a=lh(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=E+p+r,A=E+f+a,F=oh(s,s.VERTEX_SHADER,y),R=oh(s,s.FRAGMENT_SHADER,A);s.attachShader(_,F),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(G){if(i.debug.checkShaderErrors){const J=s.getProgramInfoLog(_).trim(),I=s.getShaderInfoLog(F).trim(),ne=s.getShaderInfoLog(R).trim();let te=!0,ae=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,F,R);else{const ce=rh(s,F,"vertex"),j=rh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+J+`
`+ce+`
`+j)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(I===""||ne==="")&&(ae=!1);ae&&(G.diagnostics={runnable:te,programLog:J,vertexShader:{log:I,prefix:p},fragmentShader:{log:ne,prefix:f}})}s.deleteShader(F),s.deleteShader(R),H=new Br(s,_),T=My(s,_)}let H;this.getUniforms=function(){return H===void 0&&b(this),H};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,fy)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=py++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=F,this.fragmentShader=R,this}let Iy=0;class Dy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Uy(e),t.set(e,n)),n}}class Uy{constructor(e){this.id=Iy++,this.code=e,this.usedTimes=0}}function Oy(i,e,t,n,s,o,r){const a=new Md,c=new Dy,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return l.add(T),T===0?"uv":`uv${T}`}function p(T,M,G,J,I){const ne=J.fog,te=I.geometry,ae=T.isMeshStandardMaterial?J.environment:null,ce=(T.isMeshStandardMaterial?t:e).get(T.envMap||ae),j=ce&&ce.mapping===ua?ce.image.height:null,ue=g[T.type];T.precision!==null&&(m=s.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const le=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,be=le!==void 0?le.length:0;let et=0;te.morphAttributes.position!==void 0&&(et=1),te.morphAttributes.normal!==void 0&&(et=2),te.morphAttributes.color!==void 0&&(et=3);let dt,K,he,Se;if(ue){const rt=di[ue];dt=rt.vertexShader,K=rt.fragmentShader}else dt=T.vertexShader,K=T.fragmentShader,c.update(T),he=c.getVertexShaderID(T),Se=c.getFragmentShaderID(T);const ge=i.getRenderTarget(),tt=I.isInstancedMesh===!0,$e=I.isBatchedMesh===!0,z=!!T.map,_t=!!T.matcap,Pe=!!ce,xt=!!T.aoMap,De=!!T.lightMap,nt=!!T.bumpMap,Ge=!!T.normalMap,it=!!T.displacementMap,Rt=!!T.emissiveMap,w=!!T.metalnessMap,v=!!T.roughnessMap,Y=T.anisotropy>0,ie=T.clearcoat>0,oe=T.dispersion>0,re=T.iridescence>0,Le=T.sheen>0,ve=T.transmission>0,xe=Y&&!!T.anisotropyMap,Ve=ie&&!!T.clearcoatMap,fe=ie&&!!T.clearcoatNormalMap,Ce=ie&&!!T.clearcoatRoughnessMap,st=re&&!!T.iridescenceMap,Ie=re&&!!T.iridescenceThicknessMap,Me=Le&&!!T.sheenColorMap,ke=Le&&!!T.sheenRoughnessMap,Ze=!!T.specularMap,vt=!!T.specularColorMap,qe=!!T.specularIntensityMap,x=ve&&!!T.transmissionMap,O=ve&&!!T.thicknessMap,B=!!T.gradientMap,se=!!T.alphaMap,de=T.alphaTest>0,We=!!T.alphaHash,Ke=!!T.extensions;let It=kn;T.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(It=i.toneMapping);const Kt={shaderID:ue,shaderType:T.type,shaderName:T.name,vertexShader:dt,fragmentShader:K,defines:T.defines,customVertexShaderID:he,customFragmentShaderID:Se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:$e,instancing:tt,instancingColor:tt&&I.instanceColor!==null,instancingMorph:tt&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:ci,alphaToCoverage:!!T.alphaToCoverage,map:z,matcap:_t,envMap:Pe,envMapMode:Pe&&ce.mapping,envMapCubeUVHeight:j,aoMap:xt,lightMap:De,bumpMap:nt,normalMap:Ge,displacementMap:d&&it,emissiveMap:Rt,normalMapObjectSpace:Ge&&T.normalMapType===pd,normalMapTangentSpace:Ge&&T.normalMapType===As,metalnessMap:w,roughnessMap:v,anisotropy:Y,anisotropyMap:xe,clearcoat:ie,clearcoatMap:Ve,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ce,dispersion:oe,iridescence:re,iridescenceMap:st,iridescenceThicknessMap:Ie,sheen:Le,sheenColorMap:Me,sheenRoughnessMap:ke,specularMap:Ze,specularColorMap:vt,specularIntensityMap:qe,transmission:ve,transmissionMap:x,thicknessMap:O,gradientMap:B,opaque:T.transparent===!1&&T.blending===so&&T.alphaToCoverage===!1,alphaMap:se,alphaTest:de,alphaHash:We,combine:T.combine,mapUv:z&&_(T.map.channel),aoMapUv:xt&&_(T.aoMap.channel),lightMapUv:De&&_(T.lightMap.channel),bumpMapUv:nt&&_(T.bumpMap.channel),normalMapUv:Ge&&_(T.normalMap.channel),displacementMapUv:it&&_(T.displacementMap.channel),emissiveMapUv:Rt&&_(T.emissiveMap.channel),metalnessMapUv:w&&_(T.metalnessMap.channel),roughnessMapUv:v&&_(T.roughnessMap.channel),anisotropyMapUv:xe&&_(T.anisotropyMap.channel),clearcoatMapUv:Ve&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:ke&&_(T.sheenRoughnessMap.channel),specularMapUv:Ze&&_(T.specularMap.channel),specularColorMapUv:vt&&_(T.specularColorMap.channel),specularIntensityMapUv:qe&&_(T.specularIntensityMap.channel),transmissionMapUv:x&&_(T.transmissionMap.channel),thicknessMapUv:O&&_(T.thicknessMap.channel),alphaMapUv:se&&_(T.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Ge||Y),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!te.attributes.uv&&(z||se),fog:!!ne,useFog:T.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:et,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:It,useLegacyLights:i._useLegacyLights,decodeVideoTexture:z&&T.map.isVideoTexture===!0&&yt.getTransfer(T.map.colorSpace)===bt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Li,flipSided:T.side===_n,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ke&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ke&&T.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Kt.vertexUv1s=l.has(1),Kt.vertexUv2s=l.has(2),Kt.vertexUv3s=l.has(3),l.clear(),Kt}function f(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const G in T.defines)M.push(G),M.push(T.defines[G]);return T.isRawShaderMaterial===!1&&(E(M,T),y(M,T),M.push(i.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function E(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function y(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),T.push(a.mask)}function A(T){const M=g[T.type];let G;if(M){const J=di[M];G=y_.clone(J.uniforms)}else G=T.uniforms;return G}function F(T,M){let G;for(let J=0,I=u.length;J<I;J++){const ne=u[J];if(ne.cacheKey===M){G=ne,++G.usedTimes;break}}return G===void 0&&(G=new Py(i,M,T,o),u.push(G)),G}function R(T){if(--T.usedTimes===0){const M=u.indexOf(T);u[M]=u[u.length-1],u.pop(),T.destroy()}}function b(T){c.remove(T)}function H(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:A,acquireProgram:F,releaseProgram:R,releaseShaderCache:b,programs:u,dispose:H}}function Fy(){let i=new WeakMap;function e(o){let r=i.get(o);return r===void 0&&(r={},i.set(o,r)),r}function t(o){i.delete(o)}function n(o,r,a){i.get(o)[r]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Vy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function hh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function dh(){const i=[];let e=0;const t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function r(h,d,m,g,_,p){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=p),e++,f}function a(h,d,m,g,_,p){const f=r(h,d,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function c(h,d,m,g,_,p){const f=r(h,d,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||Vy),n.length>1&&n.sort(d||hh),s.length>1&&s.sort(d||hh)}function u(){for(let h=e,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:a,unshift:c,finish:u,sort:l}}function zy(){let i=new WeakMap;function e(n,s){const o=i.get(n);let r;return o===void 0?(r=new dh,i.set(n,[r])):s>=o.length?(r=new dh,o.push(r)):r=o[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function By(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Fe};break;case"SpotLight":t={position:new L,direction:new L,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Hy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Gy=0;function ky(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Wy(i){const e=new By,t=Hy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,o=new Lt,r=new Lt;function a(l,u){let h=0,d=0,m=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let g=0,_=0,p=0,f=0,E=0,y=0,A=0,F=0,R=0,b=0,H=0;l.sort(ky);const T=u===!0?Math.PI:1;for(let G=0,J=l.length;G<J;G++){const I=l[G],ne=I.color,te=I.intensity,ae=I.distance,ce=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=ne.r*te*T,d+=ne.g*te*T,m+=ne.b*te*T;else if(I.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(I.sh.coefficients[j],te);H++}else if(I.isDirectionalLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity*T),I.castShadow){const ue=I.shadow,le=t.get(I);le.shadowBias=ue.bias,le.shadowNormalBias=ue.normalBias,le.shadowRadius=ue.radius,le.shadowMapSize=ue.mapSize,n.directionalShadow[g]=le,n.directionalShadowMap[g]=ce,n.directionalShadowMatrix[g]=I.shadow.matrix,y++}n.directional[g]=j,g++}else if(I.isSpotLight){const j=e.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(ne).multiplyScalar(te*T),j.distance=ae,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,n.spot[p]=j;const ue=I.shadow;if(I.map&&(n.spotLightMap[R]=I.map,R++,ue.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[p]=ue.matrix,I.castShadow){const le=t.get(I);le.shadowBias=ue.bias,le.shadowNormalBias=ue.normalBias,le.shadowRadius=ue.radius,le.shadowMapSize=ue.mapSize,n.spotShadow[p]=le,n.spotShadowMap[p]=ce,F++}p++}else if(I.isRectAreaLight){const j=e.get(I);j.color.copy(ne).multiplyScalar(te),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),n.rectArea[f]=j,f++}else if(I.isPointLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity*T),j.distance=I.distance,j.decay=I.decay,I.castShadow){const ue=I.shadow,le=t.get(I);le.shadowBias=ue.bias,le.shadowNormalBias=ue.normalBias,le.shadowRadius=ue.radius,le.shadowMapSize=ue.mapSize,le.shadowCameraNear=ue.camera.near,le.shadowCameraFar=ue.camera.far,n.pointShadow[_]=le,n.pointShadowMap[_]=ce,n.pointShadowMatrix[_]=I.shadow.matrix,A++}n.point[_]=j,_++}else if(I.isHemisphereLight){const j=e.get(I);j.skyColor.copy(I.color).multiplyScalar(te*T),j.groundColor.copy(I.groundColor).multiplyScalar(te*T),n.hemi[E]=j,E++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=m;const M=n.hash;(M.directionalLength!==g||M.pointLength!==_||M.spotLength!==p||M.rectAreaLength!==f||M.hemiLength!==E||M.numDirectionalShadows!==y||M.numPointShadows!==A||M.numSpotShadows!==F||M.numSpotMaps!==R||M.numLightProbes!==H)&&(n.directional.length=g,n.spot.length=p,n.rectArea.length=f,n.point.length=_,n.hemi.length=E,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=F,n.spotShadowMap.length=F,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=F+R-b,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=H,M.directionalLength=g,M.pointLength=_,M.spotLength=p,M.rectAreaLength=f,M.hemiLength=E,M.numDirectionalShadows=y,M.numPointShadows=A,M.numSpotShadows=F,M.numSpotMaps=R,M.numLightProbes=H,n.version=Gy++)}function c(l,u){let h=0,d=0,m=0,g=0,_=0;const p=u.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){const y=l[f];if(y.isDirectionalLight){const A=n.directional[h];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),h++}else if(y.isSpotLight){const A=n.spot[m];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const A=n.rectArea[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),r.identity(),o.copy(y.matrixWorld),o.premultiply(p),r.extractRotation(o),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(r),A.halfHeight.applyMatrix4(r),g++}else if(y.isPointLight){const A=n.point[d];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const A=n.hemi[_];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function fh(i){const e=new Wy(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function o(u){t.push(u)}function r(u){n.push(u)}function a(u){e.setup(t,u)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function Xy(i){let e=new WeakMap;function t(s,o=0){const r=e.get(s);let a;return r===void 0?(a=new fh(i),e.set(s,[a])):o>=r.length?(a=new fh(i),r.push(a)):a=r[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class qy extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ig,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yy extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$y=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Zy(i,e,t){let n=new vl;const s=new Te,o=new Te,r=new at,a=new qy({depthPacking:Dg}),c=new Yy,l={},u=t.maxTextureSize,h={[ns]:_n,[_n]:ns,[Li]:Li},d=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:jy,fragmentShader:$y}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new cs;g.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ni(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ed;let f=this.type;this.render=function(R,b,H){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const T=i.getRenderTarget(),M=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),J=i.state;J.setBlending(ts),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const I=f!==wi&&this.type===wi,ne=f===wi&&this.type!==wi;for(let te=0,ae=R.length;te<ae;te++){const ce=R[te],j=ce.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const ue=j.getFrameExtents();if(s.multiply(ue),o.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(o.x=Math.floor(u/ue.x),s.x=o.x*ue.x,j.mapSize.x=o.x),s.y>u&&(o.y=Math.floor(u/ue.y),s.y=o.y*ue.y,j.mapSize.y=o.y)),j.map===null||I===!0||ne===!0){const be=this.type!==wi?{minFilter:fn,magFilter:fn}:{};j.map!==null&&j.map.dispose(),j.map=new Ns(s.x,s.y,be),j.map.texture.name=ce.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const le=j.getViewportCount();for(let be=0;be<le;be++){const et=j.getViewport(be);r.set(o.x*et.x,o.y*et.y,o.x*et.z,o.y*et.w),J.viewport(r),j.updateMatrices(ce,be),n=j.getFrustum(),A(b,H,j.camera,ce,this.type)}j.isPointLightShadow!==!0&&this.type===wi&&E(j,H),j.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(T,M,G)};function E(R,b){const H=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ns(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(b,null,H,d,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(b,null,H,m,_,null)}function y(R,b,H,T){let M=null;const G=H.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(G!==void 0)M=G;else if(M=H.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const J=M.uuid,I=b.uuid;let ne=l[J];ne===void 0&&(ne={},l[J]=ne);let te=ne[I];te===void 0&&(te=M.clone(),ne[I]=te,b.addEventListener("dispose",F)),M=te}if(M.visible=b.visible,M.wireframe=b.wireframe,T===wi?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:h[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,H.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const J=i.properties.get(M);J.light=H}return M}function A(R,b,H,T,M){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===wi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,R.matrixWorld);const I=e.update(R),ne=R.material;if(Array.isArray(ne)){const te=I.groups;for(let ae=0,ce=te.length;ae<ce;ae++){const j=te[ae],ue=ne[j.materialIndex];if(ue&&ue.visible){const le=y(R,ue,T,M);R.onBeforeShadow(i,R,b,H,I,le,j),i.renderBufferDirect(H,null,I,le,R,j),R.onAfterShadow(i,R,b,H,I,le,j)}}}else if(ne.visible){const te=y(R,ne,T,M);R.onBeforeShadow(i,R,b,H,I,te,null),i.renderBufferDirect(H,null,I,te,R,null),R.onAfterShadow(i,R,b,H,I,te,null)}}const J=R.children;for(let I=0,ne=J.length;I<ne;I++)A(J[I],b,H,T,M)}function F(R){R.target.removeEventListener("dispose",F);for(const H in l){const T=l[H],M=R.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}function Ky(i){function e(){let x=!1;const O=new at;let B=null;const se=new at(0,0,0,0);return{setMask:function(de){B!==de&&!x&&(i.colorMask(de,de,de,de),B=de)},setLocked:function(de){x=de},setClear:function(de,We,Ke,It,Kt){Kt===!0&&(de*=It,We*=It,Ke*=It),O.set(de,We,Ke,It),se.equals(O)===!1&&(i.clearColor(de,We,Ke,It),se.copy(O))},reset:function(){x=!1,B=null,se.set(-1,0,0,0)}}}function t(){let x=!1,O=null,B=null,se=null;return{setTest:function(de){de?Se(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(de){O!==de&&!x&&(i.depthMask(de),O=de)},setFunc:function(de){if(B!==de){switch(de){case hg:i.depthFunc(i.NEVER);break;case dg:i.depthFunc(i.ALWAYS);break;case fg:i.depthFunc(i.LESS);break;case Wr:i.depthFunc(i.LEQUAL);break;case pg:i.depthFunc(i.EQUAL);break;case mg:i.depthFunc(i.GEQUAL);break;case gg:i.depthFunc(i.GREATER);break;case _g:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}B=de}},setLocked:function(de){x=de},setClear:function(de){se!==de&&(i.clearDepth(de),se=de)},reset:function(){x=!1,O=null,B=null,se=null}}}function n(){let x=!1,O=null,B=null,se=null,de=null,We=null,Ke=null,It=null,Kt=null;return{setTest:function(rt){x||(rt?Se(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(rt){O!==rt&&!x&&(i.stencilMask(rt),O=rt)},setFunc:function(rt,Bt,Nt){(B!==rt||se!==Bt||de!==Nt)&&(i.stencilFunc(rt,Bt,Nt),B=rt,se=Bt,de=Nt)},setOp:function(rt,Bt,Nt){(We!==rt||Ke!==Bt||It!==Nt)&&(i.stencilOp(rt,Bt,Nt),We=rt,Ke=Bt,It=Nt)},setLocked:function(rt){x=rt},setClear:function(rt){Kt!==rt&&(i.clearStencil(rt),Kt=rt)},reset:function(){x=!1,O=null,B=null,se=null,de=null,We=null,Ke=null,It=null,Kt=null}}}const s=new e,o=new t,r=new n,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],m=null,g=!1,_=null,p=null,f=null,E=null,y=null,A=null,F=null,R=new Fe(0,0,0),b=0,H=!1,T=null,M=null,G=null,J=null,I=null;const ne=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,ae=0;const ce=i.getParameter(i.VERSION);ce.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(ce)[1]),te=ae>=1):ce.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),te=ae>=2);let j=null,ue={};const le=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),et=new at().fromArray(le),dt=new at().fromArray(be);function K(x,O,B,se){const de=new Uint8Array(4),We=i.createTexture();i.bindTexture(x,We),i.texParameteri(x,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(x,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<B;Ke++)x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY?i.texImage3D(O,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(O+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return We}const he={};he[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),Se(i.DEPTH_TEST),o.setFunc(Wr),nt(!1),Ge(jl),Se(i.CULL_FACE),xt(ts);function Se(x){l[x]!==!0&&(i.enable(x),l[x]=!0)}function ge(x){l[x]!==!1&&(i.disable(x),l[x]=!1)}function tt(x,O){return u[x]!==O?(i.bindFramebuffer(x,O),u[x]=O,x===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=O),x===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=O),!0):!1}function $e(x,O){let B=d,se=!1;if(x){B=h.get(O),B===void 0&&(B=[],h.set(O,B));const de=x.textures;if(B.length!==de.length||B[0]!==i.COLOR_ATTACHMENT0){for(let We=0,Ke=de.length;We<Ke;We++)B[We]=i.COLOR_ATTACHMENT0+We;B.length=de.length,se=!0}}else B[0]!==i.BACK&&(B[0]=i.BACK,se=!0);se&&i.drawBuffers(B)}function z(x){return m!==x?(i.useProgram(x),m=x,!0):!1}const _t={[ys]:i.FUNC_ADD,[jm]:i.FUNC_SUBTRACT,[$m]:i.FUNC_REVERSE_SUBTRACT};_t[Zm]=i.MIN,_t[Km]=i.MAX;const Pe={[Jm]:i.ZERO,[Qm]:i.ONE,[eg]:i.SRC_COLOR,[Vc]:i.SRC_ALPHA,[rg]:i.SRC_ALPHA_SATURATE,[sg]:i.DST_COLOR,[ng]:i.DST_ALPHA,[tg]:i.ONE_MINUS_SRC_COLOR,[zc]:i.ONE_MINUS_SRC_ALPHA,[og]:i.ONE_MINUS_DST_COLOR,[ig]:i.ONE_MINUS_DST_ALPHA,[ag]:i.CONSTANT_COLOR,[cg]:i.ONE_MINUS_CONSTANT_COLOR,[lg]:i.CONSTANT_ALPHA,[ug]:i.ONE_MINUS_CONSTANT_ALPHA};function xt(x,O,B,se,de,We,Ke,It,Kt,rt){if(x===ts){g===!0&&(ge(i.BLEND),g=!1);return}if(g===!1&&(Se(i.BLEND),g=!0),x!==Ym){if(x!==_||rt!==H){if((p!==ys||y!==ys)&&(i.blendEquation(i.FUNC_ADD),p=ys,y=ys),rt)switch(x){case so:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $l:i.blendFunc(i.ONE,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}else switch(x){case so:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $l:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}f=null,E=null,A=null,F=null,R.set(0,0,0),b=0,_=x,H=rt}return}de=de||O,We=We||B,Ke=Ke||se,(O!==p||de!==y)&&(i.blendEquationSeparate(_t[O],_t[de]),p=O,y=de),(B!==f||se!==E||We!==A||Ke!==F)&&(i.blendFuncSeparate(Pe[B],Pe[se],Pe[We],Pe[Ke]),f=B,E=se,A=We,F=Ke),(It.equals(R)===!1||Kt!==b)&&(i.blendColor(It.r,It.g,It.b,Kt),R.copy(It),b=Kt),_=x,H=!1}function De(x,O){x.side===Li?ge(i.CULL_FACE):Se(i.CULL_FACE);let B=x.side===_n;O&&(B=!B),nt(B),x.blending===so&&x.transparent===!1?xt(ts):xt(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),o.setFunc(x.depthFunc),o.setTest(x.depthTest),o.setMask(x.depthWrite),s.setMask(x.colorWrite);const se=x.stencilWrite;r.setTest(se),se&&(r.setMask(x.stencilWriteMask),r.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),r.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),Rt(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(x){T!==x&&(x?i.frontFace(i.CW):i.frontFace(i.CCW),T=x)}function Ge(x){x!==Wm?(Se(i.CULL_FACE),x!==M&&(x===jl?i.cullFace(i.BACK):x===Xm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),M=x}function it(x){x!==G&&(te&&i.lineWidth(x),G=x)}function Rt(x,O,B){x?(Se(i.POLYGON_OFFSET_FILL),(J!==O||I!==B)&&(i.polygonOffset(O,B),J=O,I=B)):ge(i.POLYGON_OFFSET_FILL)}function w(x){x?Se(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function v(x){x===void 0&&(x=i.TEXTURE0+ne-1),j!==x&&(i.activeTexture(x),j=x)}function Y(x,O,B){B===void 0&&(j===null?B=i.TEXTURE0+ne-1:B=j);let se=ue[B];se===void 0&&(se={type:void 0,texture:void 0},ue[B]=se),(se.type!==x||se.texture!==O)&&(j!==B&&(i.activeTexture(B),j=B),i.bindTexture(x,O||he[x]),se.type=x,se.texture=O)}function ie(){const x=ue[j];x!==void 0&&x.type!==void 0&&(i.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)}function oe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Le(){try{i.texSubImage2D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ve(){try{i.texSubImage3D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function fe(){try{i.texStorage2D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ce(){try{i.texStorage3D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function st(){try{i.texImage2D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ie(){try{i.texImage3D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Me(x){et.equals(x)===!1&&(i.scissor(x.x,x.y,x.z,x.w),et.copy(x))}function ke(x){dt.equals(x)===!1&&(i.viewport(x.x,x.y,x.z,x.w),dt.copy(x))}function Ze(x,O){let B=c.get(O);B===void 0&&(B=new WeakMap,c.set(O,B));let se=B.get(x);se===void 0&&(se=i.getUniformBlockIndex(O,x.name),B.set(x,se))}function vt(x,O){const se=c.get(O).get(x);a.get(O)!==se&&(i.uniformBlockBinding(O,se,x.__bindingPointIndex),a.set(O,se))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},j=null,ue={},u={},h=new WeakMap,d=[],m=null,g=!1,_=null,p=null,f=null,E=null,y=null,A=null,F=null,R=new Fe(0,0,0),b=0,H=!1,T=null,M=null,G=null,J=null,I=null,et.set(0,0,i.canvas.width,i.canvas.height),dt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:Se,disable:ge,bindFramebuffer:tt,drawBuffers:$e,useProgram:z,setBlending:xt,setMaterial:De,setFlipSided:nt,setCullFace:Ge,setLineWidth:it,setPolygonOffset:Rt,setScissorTest:w,activeTexture:v,bindTexture:Y,unbindTexture:ie,compressedTexImage2D:oe,compressedTexImage3D:re,texImage2D:st,texImage3D:Ie,updateUBOMapping:Ze,uniformBlockBinding:vt,texStorage2D:fe,texStorage3D:Ce,texSubImage2D:Le,texSubImage3D:ve,compressedTexSubImage2D:xe,compressedTexSubImage3D:Ve,scissor:Me,viewport:ke,reset:qe}}function Jy(i,e,t,n,s,o,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Te,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return m?new OffscreenCanvas(w,v):$r("canvas")}function _(w,v,Y){let ie=1;const oe=Rt(w);if((oe.width>Y||oe.height>Y)&&(ie=Y/Math.max(oe.width,oe.height)),ie<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const re=Math.floor(ie*oe.width),Le=Math.floor(ie*oe.height);h===void 0&&(h=g(re,Le));const ve=v?g(re,Le):h;return ve.width=re,ve.height=Le,ve.getContext("2d").drawImage(w,0,0,re,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+re+"x"+Le+")."),ve}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),w;return w}function p(w){return w.generateMipmaps&&w.minFilter!==fn&&w.minFilter!==Qn}function f(w){i.generateMipmap(w)}function E(w,v,Y,ie,oe=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let re=v;if(v===i.RED&&(Y===i.FLOAT&&(re=i.R32F),Y===i.HALF_FLOAT&&(re=i.R16F),Y===i.UNSIGNED_BYTE&&(re=i.R8)),v===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(re=i.R8UI),Y===i.UNSIGNED_SHORT&&(re=i.R16UI),Y===i.UNSIGNED_INT&&(re=i.R32UI),Y===i.BYTE&&(re=i.R8I),Y===i.SHORT&&(re=i.R16I),Y===i.INT&&(re=i.R32I)),v===i.RG&&(Y===i.FLOAT&&(re=i.RG32F),Y===i.HALF_FLOAT&&(re=i.RG16F),Y===i.UNSIGNED_BYTE&&(re=i.RG8)),v===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(re=i.RG8UI),Y===i.UNSIGNED_SHORT&&(re=i.RG16UI),Y===i.UNSIGNED_INT&&(re=i.RG32UI),Y===i.BYTE&&(re=i.RG8I),Y===i.SHORT&&(re=i.RG16I),Y===i.INT&&(re=i.RG32I)),v===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),v===i.RGBA){const Le=oe?Xr:yt.getTransfer(ie);Y===i.FLOAT&&(re=i.RGBA32F),Y===i.HALF_FLOAT&&(re=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(re=Le===bt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function y(w,v){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==fn&&w.minFilter!==Qn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function A(w){const v=w.target;v.removeEventListener("dispose",A),R(v),v.isVideoTexture&&u.delete(v)}function F(w){const v=w.target;v.removeEventListener("dispose",F),H(v)}function R(w){const v=n.get(w);if(v.__webglInit===void 0)return;const Y=w.source,ie=d.get(Y);if(ie){const oe=ie[v.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&b(w),Object.keys(ie).length===0&&d.delete(Y)}n.remove(w)}function b(w){const v=n.get(w);i.deleteTexture(v.__webglTexture);const Y=w.source,ie=d.get(Y);delete ie[v.__cacheKey],r.memory.textures--}function H(w){const v=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(v.__webglFramebuffer[ie]))for(let oe=0;oe<v.__webglFramebuffer[ie].length;oe++)i.deleteFramebuffer(v.__webglFramebuffer[ie][oe]);else i.deleteFramebuffer(v.__webglFramebuffer[ie]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[ie])}else{if(Array.isArray(v.__webglFramebuffer))for(let ie=0;ie<v.__webglFramebuffer.length;ie++)i.deleteFramebuffer(v.__webglFramebuffer[ie]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ie=0;ie<v.__webglColorRenderbuffer.length;ie++)v.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[ie]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const Y=w.textures;for(let ie=0,oe=Y.length;ie<oe;ie++){const re=n.get(Y[ie]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),r.memory.textures--),n.remove(Y[ie])}n.remove(w)}let T=0;function M(){T=0}function G(){const w=T;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),T+=1,w}function J(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function I(w,v){const Y=n.get(w);if(w.isVideoTexture&&Ge(w),w.isRenderTargetTexture===!1&&w.version>0&&Y.__version!==w.version){const ie=w.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(Y,w,v);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+v)}function ne(w,v){const Y=n.get(w);if(w.version>0&&Y.__version!==w.version){et(Y,w,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+v)}function te(w,v){const Y=n.get(w);if(w.version>0&&Y.__version!==w.version){et(Y,w,v);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+v)}function ae(w,v){const Y=n.get(w);if(w.version>0&&Y.__version!==w.version){dt(Y,w,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+v)}const ce={[Gc]:i.REPEAT,[Ts]:i.CLAMP_TO_EDGE,[kc]:i.MIRRORED_REPEAT},j={[fn]:i.NEAREST,[Sg]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[Qn]:i.LINEAR,[Da]:i.LINEAR_MIPMAP_NEAREST,[Ji]:i.LINEAR_MIPMAP_LINEAR},ue={[Ug]:i.NEVER,[Bg]:i.ALWAYS,[md]:i.LESS,[gd]:i.LEQUAL,[Og]:i.EQUAL,[zg]:i.GEQUAL,[Fg]:i.GREATER,[Vg]:i.NOTEQUAL};function le(w,v){if(v.type===Pi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Qn||v.magFilter===Da||v.magFilter===fr||v.magFilter===Ji||v.minFilter===Qn||v.minFilter===Da||v.minFilter===fr||v.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ce[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ce[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ce[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,j[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,j[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ue[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===fn||v.minFilter!==fr&&v.minFilter!==Ji||v.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function be(w,v){let Y=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",A));const ie=v.source;let oe=d.get(ie);oe===void 0&&(oe={},d.set(ie,oe));const re=J(v);if(re!==w.__cacheKey){oe[re]===void 0&&(oe[re]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,Y=!0),oe[re].usedTimes++;const Le=oe[w.__cacheKey];Le!==void 0&&(oe[w.__cacheKey].usedTimes--,Le.usedTimes===0&&b(v)),w.__cacheKey=re,w.__webglTexture=oe[re].texture}return Y}function et(w,v,Y){let ie=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ie=i.TEXTURE_3D);const oe=be(w,v),re=v.source;t.bindTexture(ie,w.__webglTexture,i.TEXTURE0+Y);const Le=n.get(re);if(re.version!==Le.__version||oe===!0){t.activeTexture(i.TEXTURE0+Y);const ve=yt.getPrimaries(yt.workingColorSpace),xe=v.colorSpace===Ki?null:yt.getPrimaries(v.colorSpace),Ve=v.colorSpace===Ki||ve===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let fe=_(v.image,!1,s.maxTextureSize);fe=it(v,fe);const Ce=o.convert(v.format,v.colorSpace),st=o.convert(v.type);let Ie=E(v.internalFormat,Ce,st,v.colorSpace,v.isVideoTexture);le(ie,v);let Me;const ke=v.mipmaps,Ze=v.isVideoTexture!==!0,vt=Le.__version===void 0||oe===!0,qe=re.dataReady,x=y(v,fe);if(v.isDepthTexture)Ie=i.DEPTH_COMPONENT16,v.type===Pi?Ie=i.DEPTH_COMPONENT32F:v.type===go?Ie=i.DEPTH_COMPONENT24:v.type===ir&&(Ie=i.DEPTH24_STENCIL8),vt&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,Ie,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Ie,fe.width,fe.height,0,Ce,st,null));else if(v.isDataTexture)if(ke.length>0){Ze&&vt&&t.texStorage2D(i.TEXTURE_2D,x,Ie,ke[0].width,ke[0].height);for(let O=0,B=ke.length;O<B;O++)Me=ke[O],Ze?qe&&t.texSubImage2D(i.TEXTURE_2D,O,0,0,Me.width,Me.height,Ce,st,Me.data):t.texImage2D(i.TEXTURE_2D,O,Ie,Me.width,Me.height,0,Ce,st,Me.data);v.generateMipmaps=!1}else Ze?(vt&&t.texStorage2D(i.TEXTURE_2D,x,Ie,fe.width,fe.height),qe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe.width,fe.height,Ce,st,fe.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,fe.width,fe.height,0,Ce,st,fe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ze&&vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,x,Ie,ke[0].width,ke[0].height,fe.depth);for(let O=0,B=ke.length;O<B;O++)Me=ke[O],v.format!==gi?Ce!==null?Ze?qe&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,Me.width,Me.height,fe.depth,Ce,Me.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,O,Ie,Me.width,Me.height,fe.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?qe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,Me.width,Me.height,fe.depth,Ce,st,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,O,Ie,Me.width,Me.height,fe.depth,0,Ce,st,Me.data)}else{Ze&&vt&&t.texStorage2D(i.TEXTURE_2D,x,Ie,ke[0].width,ke[0].height);for(let O=0,B=ke.length;O<B;O++)Me=ke[O],v.format!==gi?Ce!==null?Ze?qe&&t.compressedTexSubImage2D(i.TEXTURE_2D,O,0,0,Me.width,Me.height,Ce,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,O,Ie,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?qe&&t.texSubImage2D(i.TEXTURE_2D,O,0,0,Me.width,Me.height,Ce,st,Me.data):t.texImage2D(i.TEXTURE_2D,O,Ie,Me.width,Me.height,0,Ce,st,Me.data)}else if(v.isDataArrayTexture)Ze?(vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,x,Ie,fe.width,fe.height,fe.depth),qe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ce,st,fe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,fe.width,fe.height,fe.depth,0,Ce,st,fe.data);else if(v.isData3DTexture)Ze?(vt&&t.texStorage3D(i.TEXTURE_3D,x,Ie,fe.width,fe.height,fe.depth),qe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ce,st,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,fe.width,fe.height,fe.depth,0,Ce,st,fe.data);else if(v.isFramebufferTexture){if(vt)if(Ze)t.texStorage2D(i.TEXTURE_2D,x,Ie,fe.width,fe.height);else{let O=fe.width,B=fe.height;for(let se=0;se<x;se++)t.texImage2D(i.TEXTURE_2D,se,Ie,O,B,0,Ce,st,null),O>>=1,B>>=1}}else if(ke.length>0){if(Ze&&vt){const O=Rt(ke[0]);t.texStorage2D(i.TEXTURE_2D,x,Ie,O.width,O.height)}for(let O=0,B=ke.length;O<B;O++)Me=ke[O],Ze?qe&&t.texSubImage2D(i.TEXTURE_2D,O,0,0,Ce,st,Me):t.texImage2D(i.TEXTURE_2D,O,Ie,Ce,st,Me);v.generateMipmaps=!1}else if(Ze){if(vt){const O=Rt(fe);t.texStorage2D(i.TEXTURE_2D,x,Ie,O.width,O.height)}qe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,st,fe)}else t.texImage2D(i.TEXTURE_2D,0,Ie,Ce,st,fe);p(v)&&f(ie),Le.__version=re.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function dt(w,v,Y){if(v.image.length!==6)return;const ie=be(w,v),oe=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+Y);const re=n.get(oe);if(oe.version!==re.__version||ie===!0){t.activeTexture(i.TEXTURE0+Y);const Le=yt.getPrimaries(yt.workingColorSpace),ve=v.colorSpace===Ki?null:yt.getPrimaries(v.colorSpace),xe=v.colorSpace===Ki||Le===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ve=v.isCompressedTexture||v.image[0].isCompressedTexture,fe=v.image[0]&&v.image[0].isDataTexture,Ce=[];for(let B=0;B<6;B++)!Ve&&!fe?Ce[B]=_(v.image[B],!0,s.maxCubemapSize):Ce[B]=fe?v.image[B].image:v.image[B],Ce[B]=it(v,Ce[B]);const st=Ce[0],Ie=o.convert(v.format,v.colorSpace),Me=o.convert(v.type),ke=E(v.internalFormat,Ie,Me,v.colorSpace),Ze=v.isVideoTexture!==!0,vt=re.__version===void 0||ie===!0,qe=oe.dataReady;let x=y(v,st);le(i.TEXTURE_CUBE_MAP,v);let O;if(Ve){Ze&&vt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,x,ke,st.width,st.height);for(let B=0;B<6;B++){O=Ce[B].mipmaps;for(let se=0;se<O.length;se++){const de=O[se];v.format!==gi?Ie!==null?Ze?qe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,se,0,0,de.width,de.height,Ie,de.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,se,ke,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,se,0,0,de.width,de.height,Ie,Me,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,se,ke,de.width,de.height,0,Ie,Me,de.data)}}}else{if(O=v.mipmaps,Ze&&vt){O.length>0&&x++;const B=Rt(Ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,x,ke,B.width,B.height)}for(let B=0;B<6;B++)if(fe){Ze?qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Ce[B].width,Ce[B].height,Ie,Me,Ce[B].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,ke,Ce[B].width,Ce[B].height,0,Ie,Me,Ce[B].data);for(let se=0;se<O.length;se++){const We=O[se].image[B].image;Ze?qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,se+1,0,0,We.width,We.height,Ie,Me,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,se+1,ke,We.width,We.height,0,Ie,Me,We.data)}}else{Ze?qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Ie,Me,Ce[B]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,ke,Ie,Me,Ce[B]);for(let se=0;se<O.length;se++){const de=O[se];Ze?qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,se+1,0,0,Ie,Me,de.image[B]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,se+1,ke,Ie,Me,de.image[B])}}}p(v)&&f(i.TEXTURE_CUBE_MAP),re.__version=oe.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function K(w,v,Y,ie,oe,re){const Le=o.convert(Y.format,Y.colorSpace),ve=o.convert(Y.type),xe=E(Y.internalFormat,Le,ve,Y.colorSpace);if(!n.get(v).__hasExternalTextures){const fe=Math.max(1,v.width>>re),Ce=Math.max(1,v.height>>re);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,re,xe,fe,Ce,v.depth,0,Le,ve,null):t.texImage2D(oe,re,xe,fe,Ce,0,Le,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),nt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,oe,n.get(Y).__webglTexture,0,De(v)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,oe,n.get(Y).__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(w,v,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer&&!v.stencilBuffer){let ie=i.DEPTH_COMPONENT24;if(Y||nt(v)){const oe=v.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Pi?ie=i.DEPTH_COMPONENT32F:oe.type===go&&(ie=i.DEPTH_COMPONENT24));const re=De(v);nt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,ie,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,re,ie,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,ie,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(v.depthBuffer&&v.stencilBuffer){const ie=De(v);Y&&nt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,v.width,v.height):nt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{const ie=v.textures;for(let oe=0;oe<ie.length;oe++){const re=ie[oe],Le=o.convert(re.format,re.colorSpace),ve=o.convert(re.type),xe=E(re.internalFormat,Le,ve,re.colorSpace),Ve=De(v);Y&&nt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,xe,v.width,v.height):nt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve,xe,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,xe,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),I(v.depthTexture,0);const ie=n.get(v.depthTexture).__webglTexture,oe=De(v);if(v.depthTexture.format===oo)nt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(v.depthTexture.format===$o)nt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function ge(w){const v=n.get(w),Y=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Se(v.__webglFramebuffer,w)}else if(Y){v.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ie]),v.__webglDepthbuffer[ie]=i.createRenderbuffer(),he(v.__webglDepthbuffer[ie],w,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),he(v.__webglDepthbuffer,w,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(w,v,Y){const ie=n.get(w);v!==void 0&&K(ie.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&ge(w)}function $e(w){const v=w.texture,Y=n.get(w),ie=n.get(v);w.addEventListener("dispose",F);const oe=w.textures,re=w.isWebGLCubeRenderTarget===!0,Le=oe.length>1;if(Le||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=v.version,r.memory.textures++),re){Y.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(v.mipmaps&&v.mipmaps.length>0){Y.__webglFramebuffer[ve]=[];for(let xe=0;xe<v.mipmaps.length;xe++)Y.__webglFramebuffer[ve][xe]=i.createFramebuffer()}else Y.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ve=0;ve<v.mipmaps.length;ve++)Y.__webglFramebuffer[ve]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Le)for(let ve=0,xe=oe.length;ve<xe;ve++){const Ve=n.get(oe[ve]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=i.createTexture(),r.memory.textures++)}if(w.samples>0&&nt(w)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ve=0;ve<oe.length;ve++){const xe=oe[ve];Y.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[ve]);const Ve=o.convert(xe.format,xe.colorSpace),fe=o.convert(xe.type),Ce=E(xe.internalFormat,Ve,fe,xe.colorSpace,w.isXRRenderTarget===!0),st=De(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,st,Ce,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),he(Y.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),le(i.TEXTURE_CUBE_MAP,v);for(let ve=0;ve<6;ve++)if(v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)K(Y.__webglFramebuffer[ve][xe],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,xe);else K(Y.__webglFramebuffer[ve],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);p(v)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let ve=0,xe=oe.length;ve<xe;ve++){const Ve=oe[ve],fe=n.get(Ve);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),le(i.TEXTURE_2D,Ve),K(Y.__webglFramebuffer,w,Ve,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,0),p(Ve)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ve=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,ie.__webglTexture),le(ve,v),v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)K(Y.__webglFramebuffer[xe],w,v,i.COLOR_ATTACHMENT0,ve,xe);else K(Y.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,ve,0);p(v)&&f(ve),t.unbindTexture()}w.depthBuffer&&ge(w)}function z(w){const v=w.textures;for(let Y=0,ie=v.length;Y<ie;Y++){const oe=v[Y];if(p(oe)){const re=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Le=n.get(oe).__webglTexture;t.bindTexture(re,Le),f(re),t.unbindTexture()}}}const _t=[],Pe=[];function xt(w){if(w.samples>0){if(nt(w)===!1){const v=w.textures,Y=w.width,ie=w.height;let oe=i.COLOR_BUFFER_BIT;const re=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(w),ve=v.length>1;if(ve)for(let xe=0;xe<v.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let xe=0;xe<v.length;xe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[xe]);const Ve=n.get(v[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ve,0)}i.blitFramebuffer(0,0,Y,ie,0,0,Y,ie,oe,i.NEAREST),c===!0&&(_t.length=0,Pe.length=0,_t.push(i.COLOR_ATTACHMENT0+xe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(_t.push(re),Pe.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Pe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let xe=0;xe<v.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,Le.__webglColorRenderbuffer[xe]);const Ve=n.get(v[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function De(w){return Math.min(s.maxSamples,w.samples)}function nt(w){const v=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ge(w){const v=r.render.frame;u.get(w)!==v&&(u.set(w,v),w.update())}function it(w,v){const Y=w.colorSpace,ie=w.format,oe=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||Y!==ci&&Y!==Ki&&(yt.getTransfer(Y)===bt?(ie!==gi||oe!==is)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),v}function Rt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=M,this.setTexture2D=I,this.setTexture2DArray=ne,this.setTexture3D=te,this.setTextureCube=ae,this.rebindTextures=tt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=K,this.useMultisampledRTT=nt}function Qy(i,e){function t(n,s=Ki){let o;const r=yt.getTransfer(s);if(n===is)return i.UNSIGNED_BYTE;if(n===ld)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ud)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ag)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tg)return i.BYTE;if(n===Eg)return i.SHORT;if(n===ad)return i.UNSIGNED_SHORT;if(n===cd)return i.INT;if(n===go)return i.UNSIGNED_INT;if(n===Pi)return i.FLOAT;if(n===nr)return i.HALF_FLOAT;if(n===Ng)return i.ALPHA;if(n===bg)return i.RGB;if(n===gi)return i.RGBA;if(n===wg)return i.LUMINANCE;if(n===Rg)return i.LUMINANCE_ALPHA;if(n===oo)return i.DEPTH_COMPONENT;if(n===$o)return i.DEPTH_STENCIL;if(n===Cg)return i.RED;if(n===hd)return i.RED_INTEGER;if(n===Lg)return i.RG;if(n===dd)return i.RG_INTEGER;if(n===fd)return i.RGBA_INTEGER;if(n===Ua||n===Oa||n===Fa||n===Va)if(r===bt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ua)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Va)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ua)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Va)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jl||n===Ql||n===eu||n===tu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Jl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ql)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===eu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nu||n===iu||n===su)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===nu||n===iu)return r===bt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===su)return r===bt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ou||n===ru||n===au||n===cu||n===lu||n===uu||n===hu||n===du||n===fu||n===pu||n===mu||n===gu||n===_u||n===xu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ou)return r===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ru)return r===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===au)return r===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cu)return r===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lu)return r===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uu)return r===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hu)return r===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===du)return r===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fu)return r===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pu)return r===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mu)return r===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gu)return r===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_u)return r===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xu)return r===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===za||n===vu||n===yu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===za)return r===bt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pg||n===Mu||n===Su||n===Tu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===za)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Mu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Su)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ir?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class eM extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ur extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tM={type:"move"};class uc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),f=this._getHandJoint(l,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ur;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const nM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iM=`
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

}`;class sM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new xn,o=e.properties.get(s);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,s=new Oi({vertexShader:nM,fragmentShader:iM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ni(new da(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class oM extends zi{constructor(e,t){super();const n=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,g=null;const _=new sM,p=t.getContextAttributes();let f=null,E=null;const y=[],A=[],F=new Te;let R=null;const b=new Tn;b.layers.enable(1),b.viewport=new at;const H=new Tn;H.layers.enable(2),H.viewport=new at;const T=[b,H],M=new eM;M.layers.enable(1),M.layers.enable(2);let G=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let he=y[K];return he===void 0&&(he=new uc,y[K]=he),he.getTargetRaySpace()},this.getControllerGrip=function(K){let he=y[K];return he===void 0&&(he=new uc,y[K]=he),he.getGripSpace()},this.getHand=function(K){let he=y[K];return he===void 0&&(he=new uc,y[K]=he),he.getHandSpace()};function I(K){const he=A.indexOf(K.inputSource);if(he===-1)return;const Se=y[he];Se!==void 0&&(Se.update(K.inputSource,K.frame,l||r),Se.dispatchEvent({type:K.type,data:K.inputSource}))}function ne(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",ne),s.removeEventListener("inputsourceschange",te);for(let K=0;K<y.length;K++){const he=A[K];he!==null&&(A[K]=null,y[K].disconnect(he))}G=null,J=null,_.reset(),e.setRenderTarget(f),m=null,d=null,h=null,s=null,E=null,dt.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",ne),s.addEventListener("inputsourceschange",te),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(F),s.renderState.layers===void 0){const he={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Ns(m.framebufferWidth,m.framebufferHeight,{format:gi,type:is,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let he=null,Se=null,ge=null;p.depth&&(ge=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=p.stencil?$o:oo,Se=p.stencil?ir:go);const tt={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:o};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(tt),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Ns(d.textureWidth,d.textureHeight,{format:gi,type:is,depthTexture:new or(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function te(K){for(let he=0;he<K.removed.length;he++){const Se=K.removed[he],ge=A.indexOf(Se);ge>=0&&(A[ge]=null,y[ge].disconnect(Se))}for(let he=0;he<K.added.length;he++){const Se=K.added[he];let ge=A.indexOf(Se);if(ge===-1){for(let $e=0;$e<y.length;$e++)if($e>=A.length){A.push(Se),ge=$e;break}else if(A[$e]===null){A[$e]=Se,ge=$e;break}if(ge===-1)break}const tt=y[ge];tt&&tt.connect(Se)}}const ae=new L,ce=new L;function j(K,he,Se){ae.setFromMatrixPosition(he.matrixWorld),ce.setFromMatrixPosition(Se.matrixWorld);const ge=ae.distanceTo(ce),tt=he.projectionMatrix.elements,$e=Se.projectionMatrix.elements,z=tt[14]/(tt[10]-1),_t=tt[14]/(tt[10]+1),Pe=(tt[9]+1)/tt[5],xt=(tt[9]-1)/tt[5],De=(tt[8]-1)/tt[0],nt=($e[8]+1)/$e[0],Ge=z*De,it=z*nt,Rt=ge/(-De+nt),w=Rt*-De;he.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(w),K.translateZ(Rt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const v=z+Rt,Y=_t+Rt,ie=Ge-w,oe=it+(ge-w),re=Pe*_t/Y*v,Le=xt*_t/Y*v;K.projectionMatrix.makePerspective(ie,oe,re,Le,v,Y),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function ue(K,he){he===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(he.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;_.texture!==null&&(K.near=_.depthNear,K.far=_.depthFar),M.near=H.near=b.near=K.near,M.far=H.far=b.far=K.far,(G!==M.near||J!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),G=M.near,J=M.far,b.near=G,b.far=J,H.near=G,H.far=J,b.updateProjectionMatrix(),H.updateProjectionMatrix(),K.updateProjectionMatrix());const he=K.parent,Se=M.cameras;ue(M,he);for(let ge=0;ge<Se.length;ge++)ue(Se[ge],he);Se.length===2?j(M,b,H):M.projectionMatrix.copy(b.projectionMatrix),le(K,M,he)};function le(K,he,Se){Se===null?K.matrix.copy(he.matrixWorld):(K.matrix.copy(Se.matrixWorld),K.matrix.invert(),K.matrix.multiply(he.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(he.projectionMatrix),K.projectionMatrixInverse.copy(he.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=xo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null};let be=null;function et(K,he){if(u=he.getViewerPose(l||r),g=he,u!==null){const Se=u.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let ge=!1;Se.length!==M.cameras.length&&(M.cameras.length=0,ge=!0);for(let $e=0;$e<Se.length;$e++){const z=Se[$e];let _t=null;if(m!==null)_t=m.getViewport(z);else{const xt=h.getViewSubImage(d,z);_t=xt.viewport,$e===0&&(e.setRenderTargetTextures(E,xt.colorTexture,d.ignoreDepthValues?void 0:xt.depthStencilTexture),e.setRenderTarget(E))}let Pe=T[$e];Pe===void 0&&(Pe=new Tn,Pe.layers.enable($e),Pe.viewport=new at,T[$e]=Pe),Pe.matrix.fromArray(z.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(z.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(_t.x,_t.y,_t.width,_t.height),$e===0&&(M.matrix.copy(Pe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ge===!0&&M.cameras.push(Pe)}const tt=s.enabledFeatures;if(tt&&tt.includes("depth-sensing")){const $e=h.getDepthInformation(Se[0]);$e&&$e.isValid&&$e.texture&&_.init(e,$e,s.renderState)}}for(let Se=0;Se<y.length;Se++){const ge=A[Se],tt=y[Se];ge!==null&&tt!==void 0&&tt.update(ge,he,l||r)}_.render(e,M),be&&be(K,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),g=null}const dt=new wd;dt.setAnimationLoop(et),this.setAnimationLoop=function(K){be=K},this.dispose=function(){}}}const ms=new Xn,rM=new Lt;function aM(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Ad(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,E,y,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(p,f):f.isMeshToonMaterial?(o(p,f),h(p,f)):f.isMeshPhongMaterial?(o(p,f),u(p,f)):f.isMeshStandardMaterial?(o(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,A)):f.isMeshMatcapMaterial?(o(p,f),g(p,f)):f.isMeshDepthMaterial?o(p,f):f.isMeshDistanceMaterial?(o(p,f),_(p,f)):f.isMeshNormalMaterial?o(p,f):f.isLineBasicMaterial?(r(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,E,y):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===_n&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===_n&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=e.get(f),y=E.envMap,A=E.envMapRotation;if(y&&(p.envMap.value=y,ms.copy(A),ms.x*=-1,ms.y*=-1,ms.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),p.envMapRotation.value.setFromMatrix4(rM.makeRotationFromEuler(ms)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const F=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*F,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function r(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,E,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=y*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===_n&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const E=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cM(i,e,t,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,y){const A=y.program;n.uniformBlockBinding(E,A)}function l(E,y){let A=s[E.id];A===void 0&&(g(E),A=u(E),s[E.id]=A,E.addEventListener("dispose",p));const F=y.program;n.updateUBOMapping(E,F);const R=e.render.frame;o[E.id]!==R&&(d(E),o[E.id]=R)}function u(E){const y=h();E.__bindingPointIndex=y;const A=i.createBuffer(),F=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,F,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,A),A}function h(){for(let E=0;E<a;E++)if(r.indexOf(E)===-1)return r.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const y=s[E.id],A=E.uniforms,F=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let R=0,b=A.length;R<b;R++){const H=Array.isArray(A[R])?A[R]:[A[R]];for(let T=0,M=H.length;T<M;T++){const G=H[T];if(m(G,R,T,F)===!0){const J=G.__offset,I=Array.isArray(G.value)?G.value:[G.value];let ne=0;for(let te=0;te<I.length;te++){const ae=I[te],ce=_(ae);typeof ae=="number"||typeof ae=="boolean"?(G.__data[0]=ae,i.bufferSubData(i.UNIFORM_BUFFER,J+ne,G.__data)):ae.isMatrix3?(G.__data[0]=ae.elements[0],G.__data[1]=ae.elements[1],G.__data[2]=ae.elements[2],G.__data[3]=0,G.__data[4]=ae.elements[3],G.__data[5]=ae.elements[4],G.__data[6]=ae.elements[5],G.__data[7]=0,G.__data[8]=ae.elements[6],G.__data[9]=ae.elements[7],G.__data[10]=ae.elements[8],G.__data[11]=0):(ae.toArray(G.__data,ne),ne+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,J,G.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,y,A,F){const R=E.value,b=y+"_"+A;if(F[b]===void 0)return typeof R=="number"||typeof R=="boolean"?F[b]=R:F[b]=R.clone(),!0;{const H=F[b];if(typeof R=="number"||typeof R=="boolean"){if(H!==R)return F[b]=R,!0}else if(H.equals(R)===!1)return H.copy(R),!0}return!1}function g(E){const y=E.uniforms;let A=0;const F=16;for(let b=0,H=y.length;b<H;b++){const T=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,G=T.length;M<G;M++){const J=T[M],I=Array.isArray(J.value)?J.value:[J.value];for(let ne=0,te=I.length;ne<te;ne++){const ae=I[ne],ce=_(ae),j=A%F;j!==0&&F-j<ce.boundary&&(A+=F-j),J.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=A,A+=ce.storage}}}const R=A%F;return R>0&&(A+=F-R),E.__size=A,E.__cache={},this}function _(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function p(E){const y=E.target;y.removeEventListener("dispose",p);const A=r.indexOf(y.__bindingPointIndex);r.splice(A,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete o[y.id]}function f(){for(const E in s)i.deleteBuffer(s[E]);r=[],s={},o={}}return{bind:c,update:l,dispose:f}}class lM{constructor(e={}){const{canvas:t=i_(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this._useLegacyLights=!1,this.toneMapping=kn,this.toneMappingExposure=1;const y=this;let A=!1,F=0,R=0,b=null,H=-1,T=null;const M=new at,G=new at;let J=null;const I=new Fe(0);let ne=0,te=t.width,ae=t.height,ce=1,j=null,ue=null;const le=new at(0,0,te,ae),be=new at(0,0,te,ae);let et=!1;const dt=new vl;let K=!1,he=!1;const Se=new Lt,ge=new L,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $e(){return b===null?ce:1}let z=n;function _t(S,V){return t.getContext(S,V)}try{const S={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fl}`),t.addEventListener("webglcontextlost",x,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",B,!1),z===null){const V="webgl2";if(z=_t(V,S),z===null)throw _t(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Pe,xt,De,nt,Ge,it,Rt,w,v,Y,ie,oe,re,Le,ve,xe,Ve,fe,Ce,st,Ie,Me,ke,Ze;function vt(){Pe=new _v(z),Pe.init(),Me=new Qy(z,Pe),xt=new hv(z,Pe,e,Me),De=new Ky(z),nt=new yv(z),Ge=new Fy,it=new Jy(z,Pe,De,Ge,xt,Me,nt),Rt=new fv(y),w=new gv(y),v=new b_(z),ke=new lv(z,v),Y=new xv(z,v,nt,ke),ie=new Sv(z,Y,v,nt),Ce=new Mv(z,xt,it),xe=new dv(Ge),oe=new Oy(y,Rt,w,Pe,xt,ke,xe),re=new aM(y,Ge),Le=new zy,ve=new Xy(Pe),fe=new cv(y,Rt,w,De,ie,d,c),Ve=new Zy(y,ie,xt),Ze=new cM(z,nt,xt,De),st=new uv(z,Pe,nt),Ie=new vv(z,Pe,nt),nt.programs=oe.programs,y.capabilities=xt,y.extensions=Pe,y.properties=Ge,y.renderLists=Le,y.shadowMap=Ve,y.state=De,y.info=nt}vt();const qe=new oM(y,z);this.xr=qe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const S=Pe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Pe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(S){S!==void 0&&(ce=S,this.setSize(te,ae,!1))},this.getSize=function(S){return S.set(te,ae)},this.setSize=function(S,V,q=!0){if(qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=S,ae=V,t.width=Math.floor(S*ce),t.height=Math.floor(V*ce),q===!0&&(t.style.width=S+"px",t.style.height=V+"px"),this.setViewport(0,0,S,V)},this.getDrawingBufferSize=function(S){return S.set(te*ce,ae*ce).floor()},this.setDrawingBufferSize=function(S,V,q){te=S,ae=V,ce=q,t.width=Math.floor(S*q),t.height=Math.floor(V*q),this.setViewport(0,0,S,V)},this.getCurrentViewport=function(S){return S.copy(M)},this.getViewport=function(S){return S.copy(le)},this.setViewport=function(S,V,q,W){S.isVector4?le.set(S.x,S.y,S.z,S.w):le.set(S,V,q,W),De.viewport(M.copy(le).multiplyScalar(ce).round())},this.getScissor=function(S){return S.copy(be)},this.setScissor=function(S,V,q,W){S.isVector4?be.set(S.x,S.y,S.z,S.w):be.set(S,V,q,W),De.scissor(G.copy(be).multiplyScalar(ce).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(S){De.setScissorTest(et=S)},this.setOpaqueSort=function(S){j=S},this.setTransparentSort=function(S){ue=S},this.getClearColor=function(S){return S.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor.apply(fe,arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha.apply(fe,arguments)},this.clear=function(S=!0,V=!0,q=!0){let W=0;if(S){let X=!1;if(b!==null){const ye=b.texture.format;X=ye===fd||ye===dd||ye===hd}if(X){const ye=b.texture.type,Ne=ye===is||ye===go||ye===ad||ye===ir||ye===ld||ye===ud,we=fe.getClearColor(),Ue=fe.getClearAlpha(),ze=we.r,Ye=we.g,Je=we.b;Ne?(m[0]=ze,m[1]=Ye,m[2]=Je,m[3]=Ue,z.clearBufferuiv(z.COLOR,0,m)):(g[0]=ze,g[1]=Ye,g[2]=Je,g[3]=Ue,z.clearBufferiv(z.COLOR,0,g))}else W|=z.COLOR_BUFFER_BIT}V&&(W|=z.DEPTH_BUFFER_BIT),q&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",x,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",B,!1),Le.dispose(),ve.dispose(),Ge.dispose(),Rt.dispose(),w.dispose(),ie.dispose(),ke.dispose(),Ze.dispose(),oe.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",rt),qe.removeEventListener("sessionend",Bt),Nt.stop()};function x(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const S=nt.autoReset,V=Ve.enabled,q=Ve.autoUpdate,W=Ve.needsUpdate,X=Ve.type;vt(),nt.autoReset=S,Ve.enabled=V,Ve.autoUpdate=q,Ve.needsUpdate=W,Ve.type=X}function B(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function se(S){const V=S.target;V.removeEventListener("dispose",se),de(V)}function de(S){We(S),Ge.remove(S)}function We(S){const V=Ge.get(S).programs;V!==void 0&&(V.forEach(function(q){oe.releaseProgram(q)}),S.isShaderMaterial&&oe.releaseShaderCache(S))}this.renderBufferDirect=function(S,V,q,W,X,ye){V===null&&(V=tt);const Ne=X.isMesh&&X.matrixWorld.determinant()<0,we=Bm(S,V,q,W,X);De.setMaterial(W,Ne);let Ue=q.index,ze=1;if(W.wireframe===!0){if(Ue=Y.getWireframeAttribute(q),Ue===void 0)return;ze=2}const Ye=q.drawRange,Je=q.attributes.position;let Ht=Ye.start*ze,cn=(Ye.start+Ye.count)*ze;ye!==null&&(Ht=Math.max(Ht,ye.start*ze),cn=Math.min(cn,(ye.start+ye.count)*ze)),Ue!==null?(Ht=Math.max(Ht,0),cn=Math.min(cn,Ue.count)):Je!=null&&(Ht=Math.max(Ht,0),cn=Math.min(cn,Je.count));const bn=cn-Ht;if(bn<0||bn===1/0)return;ke.setup(X,W,we,q,Ue);let Si,lt=st;if(Ue!==null&&(Si=v.get(Ue),lt=Ie,lt.setIndex(Si)),X.isMesh)W.wireframe===!0?(De.setLineWidth(W.wireframeLinewidth*$e()),lt.setMode(z.LINES)):lt.setMode(z.TRIANGLES);else if(X.isLine){let Be=W.linewidth;Be===void 0&&(Be=1),De.setLineWidth(Be*$e()),X.isLineSegments?lt.setMode(z.LINES):X.isLineLoop?lt.setMode(z.LINE_LOOP):lt.setMode(z.LINE_STRIP)}else X.isPoints?lt.setMode(z.POINTS):X.isSprite&&lt.setMode(z.TRIANGLES);if(X.isBatchedMesh)X._multiDrawInstances!==null?lt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances):lt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)lt.renderInstances(Ht,bn,X.count);else if(q.isInstancedBufferGeometry){const Be=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Do=Math.min(q.instanceCount,Be);lt.renderInstances(Ht,bn,Do)}else lt.render(Ht,bn)};function Ke(S,V,q){S.transparent===!0&&S.side===Li&&S.forceSinglePass===!1?(S.side=_n,S.needsUpdate=!0,dr(S,V,q),S.side=ns,S.needsUpdate=!0,dr(S,V,q),S.side=Li):dr(S,V,q)}this.compile=function(S,V,q=null){q===null&&(q=S),p=ve.get(q),p.init(V),E.push(p),q.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),S!==q&&S.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights(y._useLegacyLights);const W=new Set;return S.traverse(function(X){const ye=X.material;if(ye)if(Array.isArray(ye))for(let Ne=0;Ne<ye.length;Ne++){const we=ye[Ne];Ke(we,q,X),W.add(we)}else Ke(ye,q,X),W.add(ye)}),E.pop(),p=null,W},this.compileAsync=function(S,V,q=null){const W=this.compile(S,V,q);return new Promise(X=>{function ye(){if(W.forEach(function(Ne){Ge.get(Ne).currentProgram.isReady()&&W.delete(Ne)}),W.size===0){X(S);return}setTimeout(ye,10)}Pe.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let It=null;function Kt(S){It&&It(S)}function rt(){Nt.stop()}function Bt(){Nt.start()}const Nt=new wd;Nt.setAnimationLoop(Kt),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(S){It=S,qe.setAnimationLoop(S),S===null?Nt.stop():Nt.start()},qe.addEventListener("sessionstart",rt),qe.addEventListener("sessionend",Bt),this.render=function(S,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(V),V=qe.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,V,b),p=ve.get(S,E.length),p.init(V),E.push(p),Se.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),dt.setFromProjectionMatrix(Se),he=this.localClippingEnabled,K=xe.init(this.clippingPlanes,he),_=Le.get(S,f.length),_.init(),f.push(_),Hi(S,V,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(j,ue);const q=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1;q&&fe.addToRenderList(_,S),this.info.render.frame++,K===!0&&xe.beginShadows();const W=p.state.shadowsArray;Ve.render(W,S,V),K===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,ye=_.transmissive;if(p.setupLights(y._useLegacyLights),V.isArrayCamera){const Ne=V.cameras;if(ye.length>0)for(let we=0,Ue=Ne.length;we<Ue;we++){const ze=Ne[we];Gi(X,ye,S,ze)}q&&fe.render(S);for(let we=0,Ue=Ne.length;we<Ue;we++){const ze=Ne[we];Vn(_,S,ze,ze.viewport)}}else ye.length>0&&Gi(X,ye,S,V),q&&fe.render(S),Vn(_,S,V);b!==null&&(it.updateMultisampleRenderTarget(b),it.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(y,S,V),ke.resetDefaultState(),H=-1,T=null,E.pop(),E.length>0?(p=E[E.length-1],K===!0&&xe.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Hi(S,V,q,W){if(S.visible===!1)return;if(S.layers.test(V.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(V);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||dt.intersectsSprite(S)){W&&ge.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Se);const Ne=ie.update(S),we=S.material;we.visible&&_.push(S,Ne,we,q,ge.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||dt.intersectsObject(S))){const Ne=ie.update(S),we=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ge.copy(S.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),ge.copy(Ne.boundingSphere.center)),ge.applyMatrix4(S.matrixWorld).applyMatrix4(Se)),Array.isArray(we)){const Ue=Ne.groups;for(let ze=0,Ye=Ue.length;ze<Ye;ze++){const Je=Ue[ze],Ht=we[Je.materialIndex];Ht&&Ht.visible&&_.push(S,Ne,Ht,q,ge.z,Je)}}else we.visible&&_.push(S,Ne,we,q,ge.z,null)}}const ye=S.children;for(let Ne=0,we=ye.length;Ne<we;Ne++)Hi(ye[Ne],V,q,W)}function Vn(S,V,q,W){const X=S.opaque,ye=S.transmissive,Ne=S.transparent;p.setupLightsView(q),K===!0&&xe.setGlobalState(y.clippingPlanes,q),W&&De.viewport(M.copy(W)),X.length>0&&Mi(X,V,q),ye.length>0&&Mi(ye,V,q),Ne.length>0&&Mi(Ne,V,q),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Gi(S,V,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Ns(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float")?nr:is,minFilter:Ji,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const ye=p.state.transmissionRenderTarget[W.id],Ne=W.viewport||M;ye.setSize(Ne.z,Ne.w);const we=y.getRenderTarget();y.setRenderTarget(ye),y.getClearColor(I),ne=y.getClearAlpha(),ne<1&&y.setClearColor(16777215,.5),y.clear();const Ue=y.toneMapping;y.toneMapping=kn;const ze=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),K===!0&&xe.setGlobalState(y.clippingPlanes,W),Mi(S,q,W),it.updateMultisampleRenderTarget(ye),it.updateRenderTargetMipmap(ye),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Je=0,Ht=V.length;Je<Ht;Je++){const cn=V[Je],bn=cn.object,Si=cn.geometry,lt=cn.material,Be=cn.group;if(lt.side===Li&&bn.layers.test(W.layers)){const Do=lt.side;lt.side=_n,lt.needsUpdate=!0,Io(bn,q,W,Si,lt,Be),lt.side=Do,lt.needsUpdate=!0,Ye=!0}}Ye===!0&&(it.updateMultisampleRenderTarget(ye),it.updateRenderTargetMipmap(ye))}y.setRenderTarget(we),y.setClearColor(I,ne),ze!==void 0&&(W.viewport=ze),y.toneMapping=Ue}function Mi(S,V,q){const W=V.isScene===!0?V.overrideMaterial:null;for(let X=0,ye=S.length;X<ye;X++){const Ne=S[X],we=Ne.object,Ue=Ne.geometry,ze=W===null?Ne.material:W,Ye=Ne.group;we.layers.test(q.layers)&&Io(we,V,q,Ue,ze,Ye)}}function Io(S,V,q,W,X,ye){S.onBeforeRender(y,V,q,W,X,ye),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(y,V,q,W,S,ye),X.transparent===!0&&X.side===Li&&X.forceSinglePass===!1?(X.side=_n,X.needsUpdate=!0,y.renderBufferDirect(q,V,W,X,S,ye),X.side=ns,X.needsUpdate=!0,y.renderBufferDirect(q,V,W,X,S,ye),X.side=Li):y.renderBufferDirect(q,V,W,X,S,ye),S.onAfterRender(y,V,q,W,X,ye)}function dr(S,V,q){V.isScene!==!0&&(V=tt);const W=Ge.get(S),X=p.state.lights,ye=p.state.shadowsArray,Ne=X.state.version,we=oe.getParameters(S,X.state,ye,V,q),Ue=oe.getProgramCacheKey(we);let ze=W.programs;W.environment=S.isMeshStandardMaterial?V.environment:null,W.fog=V.fog,W.envMap=(S.isMeshStandardMaterial?w:Rt).get(S.envMap||W.environment),W.envMapRotation=W.environment!==null&&S.envMap===null?V.environmentRotation:S.envMapRotation,ze===void 0&&(S.addEventListener("dispose",se),ze=new Map,W.programs=ze);let Ye=ze.get(Ue);if(Ye!==void 0){if(W.currentProgram===Ye&&W.lightsStateVersion===Ne)return Xl(S,we),Ye}else we.uniforms=oe.getUniforms(S),S.onBuild(q,we,y),S.onBeforeCompile(we,y),Ye=oe.acquireProgram(we,Ue),ze.set(Ue,Ye),W.uniforms=we.uniforms;const Je=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Je.clippingPlanes=xe.uniform),Xl(S,we),W.needsLights=Gm(S),W.lightsStateVersion=Ne,W.needsLights&&(Je.ambientLightColor.value=X.state.ambient,Je.lightProbe.value=X.state.probe,Je.directionalLights.value=X.state.directional,Je.directionalLightShadows.value=X.state.directionalShadow,Je.spotLights.value=X.state.spot,Je.spotLightShadows.value=X.state.spotShadow,Je.rectAreaLights.value=X.state.rectArea,Je.ltc_1.value=X.state.rectAreaLTC1,Je.ltc_2.value=X.state.rectAreaLTC2,Je.pointLights.value=X.state.point,Je.pointLightShadows.value=X.state.pointShadow,Je.hemisphereLights.value=X.state.hemi,Je.directionalShadowMap.value=X.state.directionalShadowMap,Je.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Je.spotShadowMap.value=X.state.spotShadowMap,Je.spotLightMatrix.value=X.state.spotLightMatrix,Je.spotLightMap.value=X.state.spotLightMap,Je.pointShadowMap.value=X.state.pointShadowMap,Je.pointShadowMatrix.value=X.state.pointShadowMatrix),W.currentProgram=Ye,W.uniformsList=null,Ye}function Wl(S){if(S.uniformsList===null){const V=S.currentProgram.getUniforms();S.uniformsList=Br.seqWithValue(V.seq,S.uniforms)}return S.uniformsList}function Xl(S,V){const q=Ge.get(S);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function Bm(S,V,q,W,X){V.isScene!==!0&&(V=tt),it.resetTextureUnits();const ye=V.fog,Ne=W.isMeshStandardMaterial?V.environment:null,we=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ci,Ue=(W.isMeshStandardMaterial?w:Rt).get(W.envMap||Ne),ze=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ye=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Je=!!q.morphAttributes.position,Ht=!!q.morphAttributes.normal,cn=!!q.morphAttributes.color;let bn=kn;W.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(bn=y.toneMapping);const Si=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,lt=Si!==void 0?Si.length:0,Be=Ge.get(W),Do=p.state.lights;if(K===!0&&(he===!0||S!==T)){const zn=S===T&&W.id===H;xe.setState(W,S,zn)}let Ct=!1;W.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Do.state.version||Be.outputColorSpace!==we||X.isBatchedMesh&&Be.batching===!1||!X.isBatchedMesh&&Be.batching===!0||X.isInstancedMesh&&Be.instancing===!1||!X.isInstancedMesh&&Be.instancing===!0||X.isSkinnedMesh&&Be.skinning===!1||!X.isSkinnedMesh&&Be.skinning===!0||X.isInstancedMesh&&Be.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Be.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Be.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Be.instancingMorph===!1&&X.morphTexture!==null||Be.envMap!==Ue||W.fog===!0&&Be.fog!==ye||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==xe.numPlanes||Be.numIntersection!==xe.numIntersection)||Be.vertexAlphas!==ze||Be.vertexTangents!==Ye||Be.morphTargets!==Je||Be.morphNormals!==Ht||Be.morphColors!==cn||Be.toneMapping!==bn||Be.morphTargetsCount!==lt)&&(Ct=!0):(Ct=!0,Be.__version=W.version);let ls=Be.currentProgram;Ct===!0&&(ls=dr(W,V,X));let ql=!1,Uo=!1,La=!1;const ln=ls.getUniforms(),ki=Be.uniforms;if(De.useProgram(ls.program)&&(ql=!0,Uo=!0,La=!0),W.id!==H&&(H=W.id,Uo=!0),ql||T!==S){ln.setValue(z,"projectionMatrix",S.projectionMatrix),ln.setValue(z,"viewMatrix",S.matrixWorldInverse);const zn=ln.map.cameraPosition;zn!==void 0&&zn.setValue(z,ge.setFromMatrixPosition(S.matrixWorld)),xt.logarithmicDepthBuffer&&ln.setValue(z,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ln.setValue(z,"isOrthographic",S.isOrthographicCamera===!0),T!==S&&(T=S,Uo=!0,La=!0)}if(X.isSkinnedMesh){ln.setOptional(z,X,"bindMatrix"),ln.setOptional(z,X,"bindMatrixInverse");const zn=X.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),ln.setValue(z,"boneTexture",zn.boneTexture,it))}X.isBatchedMesh&&(ln.setOptional(z,X,"batchingTexture"),ln.setValue(z,"batchingTexture",X._matricesTexture,it));const Pa=q.morphAttributes;if((Pa.position!==void 0||Pa.normal!==void 0||Pa.color!==void 0)&&Ce.update(X,q,ls),(Uo||Be.receiveShadow!==X.receiveShadow)&&(Be.receiveShadow=X.receiveShadow,ln.setValue(z,"receiveShadow",X.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ki.envMap.value=Ue,ki.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&V.environment!==null&&(ki.envMapIntensity.value=V.environmentIntensity),Uo&&(ln.setValue(z,"toneMappingExposure",y.toneMappingExposure),Be.needsLights&&Hm(ki,La),ye&&W.fog===!0&&re.refreshFogUniforms(ki,ye),re.refreshMaterialUniforms(ki,W,ce,ae,p.state.transmissionRenderTarget[S.id]),Br.upload(z,Wl(Be),ki,it)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Br.upload(z,Wl(Be),ki,it),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ln.setValue(z,"center",X.center),ln.setValue(z,"modelViewMatrix",X.modelViewMatrix),ln.setValue(z,"normalMatrix",X.normalMatrix),ln.setValue(z,"modelMatrix",X.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const zn=W.uniformsGroups;for(let Ia=0,km=zn.length;Ia<km;Ia++){const Yl=zn[Ia];Ze.update(Yl,ls),Ze.bind(Yl,ls)}}return ls}function Hm(S,V){S.ambientLightColor.needsUpdate=V,S.lightProbe.needsUpdate=V,S.directionalLights.needsUpdate=V,S.directionalLightShadows.needsUpdate=V,S.pointLights.needsUpdate=V,S.pointLightShadows.needsUpdate=V,S.spotLights.needsUpdate=V,S.spotLightShadows.needsUpdate=V,S.rectAreaLights.needsUpdate=V,S.hemisphereLights.needsUpdate=V}function Gm(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(S,V,q){Ge.get(S.texture).__webglTexture=V,Ge.get(S.depthTexture).__webglTexture=q;const W=Ge.get(S);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=q===void 0,W.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,V){const q=Ge.get(S);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(S,V=0,q=0){b=S,F=V,R=q;let W=!0,X=null,ye=!1,Ne=!1;if(S){const Ue=Ge.get(S);Ue.__useDefaultFramebuffer!==void 0?(De.bindFramebuffer(z.FRAMEBUFFER,null),W=!1):Ue.__webglFramebuffer===void 0?it.setupRenderTarget(S):Ue.__hasExternalTextures&&it.rebindTextures(S,Ge.get(S.texture).__webglTexture,Ge.get(S.depthTexture).__webglTexture);const ze=S.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ne=!0);const Ye=Ge.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ye[V])?X=Ye[V][q]:X=Ye[V],ye=!0):S.samples>0&&it.useMultisampledRTT(S)===!1?X=Ge.get(S).__webglMultisampledFramebuffer:Array.isArray(Ye)?X=Ye[q]:X=Ye,M.copy(S.viewport),G.copy(S.scissor),J=S.scissorTest}else M.copy(le).multiplyScalar(ce).floor(),G.copy(be).multiplyScalar(ce).floor(),J=et;if(De.bindFramebuffer(z.FRAMEBUFFER,X)&&W&&De.drawBuffers(S,X),De.viewport(M),De.scissor(G),De.setScissorTest(J),ye){const Ue=Ge.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ue.__webglTexture,q)}else if(Ne){const Ue=Ge.get(S.texture),ze=V||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ue.__webglTexture,q||0,ze)}H=-1},this.readRenderTargetPixels=function(S,V,q,W,X,ye,Ne){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ge.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ne!==void 0&&(we=we[Ne]),we){De.bindFramebuffer(z.FRAMEBUFFER,we);try{const Ue=S.texture,ze=Ue.format,Ye=Ue.type;if(!xt.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=S.width-W&&q>=0&&q<=S.height-X&&z.readPixels(V,q,W,X,Me.convert(ze),Me.convert(Ye),ye)}finally{const Ue=b!==null?Ge.get(b).__webglFramebuffer:null;De.bindFramebuffer(z.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(S,V,q=0){const W=Math.pow(2,-q),X=Math.floor(V.image.width*W),ye=Math.floor(V.image.height*W);it.setTexture2D(V,0),z.copyTexSubImage2D(z.TEXTURE_2D,q,0,0,S.x,S.y,X,ye),De.unbindTexture()},this.copyTextureToTexture=function(S,V,q,W=0){const X=V.image.width,ye=V.image.height,Ne=Me.convert(q.format),we=Me.convert(q.type);it.setTexture2D(q,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment),V.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,W,S.x,S.y,X,ye,Ne,we,V.image.data):V.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,W,S.x,S.y,V.mipmaps[0].width,V.mipmaps[0].height,Ne,V.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,W,S.x,S.y,Ne,we,V.image),W===0&&q.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(S,V,q,W,X=0){const ye=S.max.x-S.min.x,Ne=S.max.y-S.min.y,we=S.max.z-S.min.z,Ue=Me.convert(W.format),ze=Me.convert(W.type);let Ye;if(W.isData3DTexture)it.setTexture3D(W,0),Ye=z.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)it.setTexture2DArray(W,0),Ye=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const Je=z.getParameter(z.UNPACK_ROW_LENGTH),Ht=z.getParameter(z.UNPACK_IMAGE_HEIGHT),cn=z.getParameter(z.UNPACK_SKIP_PIXELS),bn=z.getParameter(z.UNPACK_SKIP_ROWS),Si=z.getParameter(z.UNPACK_SKIP_IMAGES),lt=q.isCompressedTexture?q.mipmaps[X]:q.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,lt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,lt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,S.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,S.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,S.min.z),q.isDataTexture||q.isData3DTexture?z.texSubImage3D(Ye,X,V.x,V.y,V.z,ye,Ne,we,Ue,ze,lt.data):W.isCompressedArrayTexture?z.compressedTexSubImage3D(Ye,X,V.x,V.y,V.z,ye,Ne,we,Ue,lt.data):z.texSubImage3D(Ye,X,V.x,V.y,V.z,ye,Ne,we,Ue,ze,lt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Je),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ht),z.pixelStorei(z.UNPACK_SKIP_PIXELS,cn),z.pixelStorei(z.UNPACK_SKIP_ROWS,bn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Si),X===0&&W.generateMipmaps&&z.generateMipmap(Ye),De.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?it.setTextureCube(S,0):S.isData3DTexture?it.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?it.setTexture2DArray(S,0):it.setTexture2D(S,0),De.unbindTexture()},this.resetState=function(){F=0,R=0,b=null,De.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===pl?"display-p3":"srgb",t.unpackColorSpace=yt.workingColorSpace===ha?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class uM extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Dd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return xd("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,o=this.stride;s<o;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const mn=new L;class Sl{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ei(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),o=mt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return new Wn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Sl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class hM extends On{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class dM extends Wn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Ud extends On{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}class Od extends On{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class Fd extends xn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=fn,this.minFilter=fn,this.generateMipmaps=!1,this.needsUpdate=!0}}class fM extends On{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Fe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Vd extends On{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=As,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pM extends Vd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class mM extends On{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Fe(16777215),this.specular=new Fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=As,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gM extends On{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=As,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class _M extends On{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=As,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zd extends Ud{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class rr extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class xM extends rr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const hc=new Lt,ph=new L,mh=new L;class Tl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vl,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ph.setFromMatrixPosition(e.matrixWorld),t.position.copy(ph),mh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mh),t.updateMatrixWorld(),hc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vM extends Tl{constructor(){super(new Tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=xo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(n!==t.fov||s!==t.aspect||o!==t.far)&&(t.fov=n,t.aspect=s,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Bd extends rr{constructor(e,t,n=0,s=Math.PI/3,o=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.distance=n,this.angle=s,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new vM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const gh=new Lt,Bo=new L,dc=new L;class yM extends Tl{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Bo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Bo),dc.copy(n.position),dc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(dc),n.updateMatrixWorld(),s.makeTranslation(-Bo.x,-Bo.y,-Bo.z),gh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gh)}}class MM extends rr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new yM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class SM extends Tl{constructor(){super(new yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class TM extends rr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new SM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class EM extends rr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class AM extends Dd{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class _h{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(tn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fl);const xh={VERTEX:"vertex",FRAGMENT:"fragment"},St={NONE:"none",FRAME:"frame",RENDER:"render",OBJECT:"object"},pa=["x","y","z","w"];function Hd(i,e=!1){let t="{";i.isNode===!0&&(t+=i.id);for(const{property:n,childNode:s}of Zr(i))t+=","+n.slice(0,-4)+":"+s.getCacheKey(e);return t+="}",t}function*Zr(i,e=!1){for(const t in i){if(t.startsWith("_")===!0)continue;const n=i[t];if(Array.isArray(n)===!0)for(let s=0;s<n.length;s++){const o=n[s];o&&(o.isNode===!0||e&&typeof o.toJSON=="function")&&(yield{property:t,index:s,childNode:o})}else if(n&&n.isNode===!0)yield{property:t,childNode:n};else if(typeof n=="object")for(const s in n){const o=n[s];o&&(o.isNode===!0||e&&typeof o.toJSON=="function")&&(yield{property:t,index:s,childNode:o})}}}function Qi(i){if(i==null)return null;const e=typeof i;return i.isNode===!0?"node":e==="number"?"float":e==="boolean"?"bool":e==="string"?"string":e==="function"?"shader":i.isVector2===!0?"vec2":i.isVector3===!0?"vec3":i.isVector4===!0?"vec4":i.isMatrix3===!0?"mat3":i.isMatrix4===!0?"mat4":i.isColor===!0?"color":i instanceof ArrayBuffer?"ArrayBuffer":null}function Gd(i,...e){const t=i?i.slice(-4):void 0;return e.length===1&&(t==="vec2"?e=[e[0],e[0]]:t==="vec3"?e=[e[0],e[0],e[0]]:t==="vec4"&&(e=[e[0],e[0],e[0],e[0]])),i==="color"?new Fe(...e):t==="vec2"?new Te(...e):t==="vec3"?new L(...e):t==="vec4"?new at(...e):t==="mat3"?new Xe(...e):t==="mat4"?new Lt(...e):i==="bool"?e[0]||!1:i==="float"||i==="int"||i==="uint"?e[0]||0:i==="string"?e[0]||"":i==="ArrayBuffer"?Wd(e[0]):null}function kd(i){let e="";const t=new Uint8Array(i);for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function Wd(i){return Uint8Array.from(atob(i),e=>e.charCodeAt(0)).buffer}const vh=new Map;let NM=0;class Re extends zi{constructor(e=null){super(),this.nodeType=e,this.updateType=St.NONE,this.updateBeforeType=St.NONE,this.uuid=gl.generateUUID(),this.version=0,this._cacheKey=null,this._cacheKeyVersion=0,this.isNode=!0,Object.defineProperty(this,"id",{value:NM++})}set needsUpdate(e){e===!0&&this.version++}get type(){return this.constructor.type}onUpdate(e,t){return this.updateType=t,this.update=e.bind(this.getSelf()),this}onFrameUpdate(e){return this.onUpdate(e,St.FRAME)}onRenderUpdate(e){return this.onUpdate(e,St.RENDER)}onObjectUpdate(e){return this.onUpdate(e,St.OBJECT)}onReference(e){return this.updateReference=e.bind(this.getSelf()),this}getSelf(){return this.self||this}updateReference(){return this}isGlobal(){return!1}*getChildren(){for(const{childNode:e}of Zr(this))yield e}dispose(){this.dispatchEvent({type:"dispose"})}traverse(e){e(this);for(const t of this.getChildren())t.traverse(e)}getCacheKey(e=!1){return e=e||this.version!==this._cacheKeyVersion,(e===!0||this._cacheKey===null)&&(this._cacheKey=Hd(this,e),this._cacheKeyVersion=this.version),this._cacheKey}getHash(){return this.uuid}getUpdateType(){return this.updateType}getUpdateBeforeType(){return this.updateBeforeType}getNodeType(e){const t=e.getNodeProperties(this);return t.outputNode?t.outputNode.getNodeType(e):this.nodeType}getShared(e){const t=this.getHash(e);return e.getNodeFromHash(t)||this}setup(e){const t=e.getNodeProperties(this);for(const n of this.getChildren())t["_node"+n.id]=n;return null}construct(e){return console.warn("THREE.Node: construct() is deprecated. Use setup() instead."),this.setup(e)}increaseUsage(e){const t=e.getDataFromNode(this);return t.usageCount=t.usageCount===void 0?1:t.usageCount+1,t.usageCount}analyze(e){if(this.increaseUsage(e)===1){const n=e.getNodeProperties(this);for(const s of Object.values(n))s&&s.isNode===!0&&s.build(e)}}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);if(n&&n.isNode===!0)return n.build(e,t)}updateBefore(){console.warn("Abstract function.")}update(){console.warn("Abstract function.")}build(e,t=null){const n=this.getShared(e);if(this!==n)return n.build(e,t);e.addNode(this),e.addChain(this);let s=null;const o=e.getBuildStage();if(o==="setup"){this.updateReference(e);const r=e.getNodeProperties(this);if(r.initialized!==!0||e.context.tempRead===!1){const a=e.stack.nodes.length;r.initialized=!0,r.outputNode=this.setup(e),r.outputNode!==null&&e.stack.nodes.length!==a&&(r.outputNode=e.stack);for(const c of Object.values(r))c&&c.isNode===!0&&c.build(e)}}else if(o==="analyze")this.analyze(e);else if(o==="generate")if(this.generate.length===1){const a=this.getNodeType(e),c=e.getDataFromNode(this);s=c.snippet,s===void 0&&(s=this.generate(e)||"",c.snippet=s),s=e.format(s,a,t)}else s=this.generate(e,t)||"";return e.removeChain(this),s}getSerializeChildren(){return Zr(this)}serialize(e){const t=this.getSerializeChildren(),n={};for(const{property:s,index:o,childNode:r}of t)o!==void 0?(n[s]===void 0&&(n[s]=Number.isInteger(o)?[]:{}),n[s][o]=r.toJSON(e.meta).uuid):n[s]=r.toJSON(e.meta).uuid;Object.keys(n).length>0&&(e.inputNodes=n)}deserialize(e){if(e.inputNodes!==void 0){const t=e.meta.nodes;for(const n in e.inputNodes)if(Array.isArray(e.inputNodes[n])){const s=[];for(const o of e.inputNodes[n])s.push(t[o]);this[n]=s}else if(typeof e.inputNodes[n]=="object"){const s={};for(const o in e.inputNodes[n]){const r=e.inputNodes[n][o];s[o]=t[r]}this[n]=s}else{const s=e.inputNodes[n];this[n]=t[s]}}}toJSON(e){const{uuid:t,type:n}=this,s=e===void 0||typeof e=="string";s&&(e={textures:{},images:{},nodes:{}});let o=e.nodes[t];o===void 0&&(o={uuid:t,type:n,meta:e,metadata:{version:4.6,type:"Node",generator:"Node.toJSON"}},s!==!0&&(e.nodes[o.uuid]=o),this.serialize(o),delete o.meta);function r(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}if(s){const a=r(e.textures),c=r(e.images),l=r(e.nodes);a.length>0&&(o.textures=a),c.length>0&&(o.images=c),l.length>0&&(o.nodes=l)}return o}}function Q(i,e){if(typeof e!="function"||!i)throw new Error(`Node class ${i} is not a class`);if(vh.has(i)){console.warn(`Redefinition of node class ${i}`);return}vh.set(i,e),e.type=i}class Et extends Re{constructor(e){super(e),this.isTempNode=!0}hasDependencies(e){return e.getDataFromNode(this).usageCount>1}build(e,t){if(e.getBuildStage()==="generate"){const s=e.getVectorType(this.getNodeType(e,t)),o=e.getDataFromNode(this);if(e.context.tempRead!==!1&&o.propertyName!==void 0)return e.format(o.propertyName,s,t);if(e.context.tempWrite!==!1&&s!=="void"&&t!=="void"&&this.hasDependencies(e)){const r=super.build(e,s),a=e.getVarFromNode(this,null,s),c=e.getPropertyName(a);return e.addLineFlowCode(`${c} = ${r}`),o.snippet=r,o.propertyName=c,e.format(o.propertyName,s,t)}}return super.build(e,t)}}Q("TempNode",Et);class Ao extends Re{constructor(e,t){super(),this.node=e,this.indexNode=t,this.isArrayElementNode=!0}getNodeType(e){return this.node.getNodeType(e)}generate(e){const t=this.node.build(e),n=this.indexNode.build(e,"uint");return`${t}[ ${n} ]`}}Q("ArrayElementNode",Ao);class El extends Re{constructor(e,t){super(),this.node=e,this.convertTo=t}getNodeType(e){const t=this.node.getNodeType(e);let n=null;for(const s of this.convertTo.split("|"))(n===null||e.getTypeLength(t)===e.getTypeLength(s))&&(n=s);return n}serialize(e){super.serialize(e),e.convertTo=this.convertTo}deserialize(e){super.deserialize(e),this.convertTo=e.convertTo}generate(e,t){const n=this.node,s=this.getNodeType(e),o=n.build(e,s);return e.format(o,s,t)}}Q("ConvertNode",El);class Xd extends Et{constructor(e=[],t=null){super(t),this.nodes=e}getNodeType(e){return this.nodeType!==null?e.getVectorType(this.nodeType):e.getTypeFromLength(this.nodes.reduce((t,n)=>t+e.getTypeLength(n.getNodeType(e)),0))}generate(e,t){const n=this.getNodeType(e),s=this.nodes,o=e.getComponentType(n),r=[];for(const c of s){let l=c.build(e);const u=e.getComponentType(c.getNodeType(e));u!==o&&(l=e.format(l,u,o)),r.push(l)}const a=`${e.getType(n)}( ${r.join(", ")} )`;return e.format(a,n,t)}}Q("JoinNode",Xd);const bM=pa.join("");class qc extends Re{constructor(e,t="x"){super(),this.node=e,this.components=t,this.isSplitNode=!0}getVectorLength(){let e=this.components.length;for(const t of this.components)e=Math.max(pa.indexOf(t)+1,e);return e}getComponentType(e){return e.getComponentType(this.node.getNodeType(e))}getNodeType(e){return e.getTypeFromLength(this.components.length,this.getComponentType(e))}generate(e,t){const n=this.node,s=e.getTypeLength(n.getNodeType(e));let o=null;if(s>1){let r=null;this.getVectorLength()>=s&&(r=e.getTypeFromLength(this.getVectorLength(),this.getComponentType(e)));const c=n.build(e,r);this.components.length===s&&this.components===bM.slice(0,this.components.length)?o=e.format(c,r,t):o=e.format(`${c}.${this.components}`,this.getNodeType(e),t)}else o=n.build(e,t);return o}serialize(e){super.serialize(e),e.components=this.components}deserialize(e){super.deserialize(e),this.components=e.components}}Q("SplitNode",qc);class qd extends Et{constructor(e,t,n){super(),this.sourceNode=e,this.components=t,this.targetNode=n}getNodeType(e){return this.sourceNode.getNodeType(e)}generate(e){const{sourceNode:t,components:n,targetNode:s}=this,o=this.getNodeType(e),r=e.getTypeFromLength(n.length),a=s.build(e,r),c=t.build(e,o),l=e.getTypeLength(o),u=[];for(let h=0;h<l;h++){const d=pa[h];d===n[0]?(u.push(a),h+=n.length-1):u.push(c+"."+d)}return`${e.getType(o)}( ${u.join(", ")} )`}}Q("SetNode",qd);class ma extends Re{constructor(e,t=null){super(t),this.isInputNode=!0,this.value=e,this.precision=null}getNodeType(){return this.nodeType===null?Qi(this.value):this.nodeType}getInputType(e){return this.getNodeType(e)}setPrecision(e){return this.precision=e,this}serialize(e){super.serialize(e),e.value=this.value,this.value&&this.value.toArray&&(e.value=this.value.toArray()),e.valueType=Qi(this.value),e.nodeType=this.nodeType,e.valueType==="ArrayBuffer"&&(e.value=kd(e.value)),e.precision=this.precision}deserialize(e){super.deserialize(e),this.nodeType=e.nodeType,this.value=Array.isArray(e.value)?Gd(e.valueType,...e.value):e.value,this.precision=e.precision||null,this.value&&this.value.fromArray&&(this.value=this.value.fromArray(e.value))}generate(){console.warn("Abstract function.")}}Q("InputNode",ma);class qn extends ma{constructor(e,t=null){super(e,t),this.isConstNode=!0}generateConst(e){return e.generateConst(this.getNodeType(e),this.value)}generate(e,t){const n=this.getNodeType(e);return e.format(this.generateConst(e),n,t)}}Q("ConstNode",qn);let yo=null;const eo=new Map;function U(i,e){if(eo.has(i)){console.warn(`Redefinition of node element ${i}`);return}if(typeof e!="function")throw new Error(`Node element ${i} is not a function`);eo.set(i,e)}const yh=i=>i.replace(/r|s/g,"x").replace(/g|t/g,"y").replace(/b|p/g,"z").replace(/a|q/g,"w"),Yd={setup(i,e){const t=e.shift();return i(xa(t),...e)},get(i,e,t){if(typeof e=="string"&&i[e]===void 0){if(i.isStackNode!==!0&&e==="assign")return(...n)=>(yo.assign(t,...n),t);if(eo.has(e)){const n=eo.get(e);return i.isStackNode?(...s)=>t.add(n(...s)):(...s)=>n(t,...s)}else{if(e==="self")return i;if(e.endsWith("Assign")&&eo.has(e.slice(0,e.length-6))){const n=eo.get(e.slice(0,e.length-6));return i.isStackNode?(...s)=>t.assign(s[0],n(...s)):(...s)=>t.assign(n(t,...s))}else{if(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0)return e=yh(e),pe(new qc(t,e));if(/^set[XYZWRGBASTPQ]{1,4}$/.test(e)===!0)return e=yh(e.slice(3).toLowerCase()),e=e.split("").sort().join(""),n=>pe(new qd(i,e,n));if(e==="width"||e==="height"||e==="depth")return e==="width"?e="x":e==="height"?e="y":e==="depth"&&(e="z"),pe(new qc(i,e));if(/^\d+$/.test(e)===!0)return pe(new Ao(t,new qn(Number(e),"uint")))}}}return Reflect.get(i,e,t)},set(i,e,t,n){return typeof e=="string"&&i[e]===void 0&&(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0||e==="width"||e==="height"||e==="depth"||/^\d+$/.test(e)===!0)?(n[e].assign(t),!0):Reflect.set(i,e,t,n)}},fc=new WeakMap,Mh=new WeakMap,wM=function(i,e=null){const t=Qi(i);if(t==="node"){let n=fc.get(i);return n===void 0&&(n=new Proxy(i,Yd),fc.set(i,n),fc.set(n,n)),n}else{if(e===null&&(t==="float"||t==="boolean")||t&&t!=="shader"&&t!=="string")return pe(Yc(i,e));if(t==="shader")return $(i)}return i},RM=function(i,e=null){for(const t in i)i[t]=pe(i[t],e);return i},CM=function(i,e=null){const t=i.length;for(let n=0;n<t;n++)i[n]=pe(i[n],e);return i},LM=function(i,e=null,t=null,n=null){const s=o=>pe(n!==null?Object.assign(o,n):o);return e===null?(...o)=>s(new i(...ao(o))):t!==null?(t=pe(t),(...o)=>s(new i(e,...ao(o),t))):(...o)=>s(new i(e,...ao(o)))},PM=function(i,...e){return pe(new i(...ao(e)))};class IM extends Re{constructor(e,t){super(),this.shaderNode=e,this.inputNodes=t}getNodeType(e){const{outputNode:t}=e.getNodeProperties(this);return t?t.getNodeType(e):super.getNodeType(e)}call(e){const{shaderNode:t,inputNodes:n}=this;if(t.layout){let r=Mh.get(e.constructor);r===void 0&&(r=new WeakMap,Mh.set(e.constructor,r));let a=r.get(t);return a===void 0&&(a=pe(e.buildFunctionNode(t)),r.set(t,a)),e.currentFunctionNode!==null&&e.currentFunctionNode.includes.push(a),pe(a.call(n))}const s=t.jsFunc,o=n!==null?s(n,e.stack,e):s(e.stack,e);return pe(o)}setup(e){return e.addStack(),e.stack.outputNode=this.call(e),e.removeStack()}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);return n===null?this.call(e).build(e,t):super.generate(e,t)}}class DM extends Re{constructor(e){super(),this.jsFunc=e,this.layout=null}get isArrayInput(){return/^\((\s+)?\[/.test(this.jsFunc.toString())}setLayout(e){return this.layout=e,this}call(e=null){return xa(e),pe(new IM(this,e))}setup(){return this.call()}}const UM=[!1,!0],OM=[0,1,2,3],FM=[-1,-2],jd=[.5,1.5,1/3,1e-6,1e6,Math.PI,Math.PI*2,1/Math.PI,2/Math.PI,1/(Math.PI*2),Math.PI/2],Al=new Map;for(const i of UM)Al.set(i,new qn(i));const Nl=new Map;for(const i of OM)Nl.set(i,new qn(i,"uint"));const bl=new Map([...Nl].map(i=>new qn(i.value,"int")));for(const i of FM)bl.set(i,new qn(i,"int"));const ga=new Map([...bl].map(i=>new qn(i.value)));for(const i of jd)ga.set(i,new qn(i));for(const i of jd)ga.set(-i,new qn(-i));const _a={bool:Al,uint:Nl,ints:bl,float:ga},Sh=new Map([...Al,...ga]),Yc=(i,e)=>Sh.has(i)?Sh.get(i):i.isNode===!0?i:new qn(i,e),VM=i=>{try{return i.getNodeType()}catch{return}},gt=function(i,e=null){return(...t)=>{if((t.length===0||!["bool","float","int","uint"].includes(i)&&t.every(s=>typeof s!="object"))&&(t=[Gd(i,...t)]),t.length===1&&e!==null&&e.has(t[0]))return pe(e.get(t[0]));if(t.length===1){const s=Yc(t[0],i);return VM(s)===i?pe(s):pe(new El(s,i))}const n=t.map(s=>Yc(s));return pe(new Xd(n,i))}},Th=i=>i&&i.value,zM=i=>i!=null?i.nodeType||i.convertTo||(typeof i=="string"?i:null):null;function Yo(i){return new Proxy(new DM(i),Yd)}const pe=(i,e=null)=>wM(i,e),xa=(i,e=null)=>new RM(i,e),ao=(i,e=null)=>new CM(i,e),k=(...i)=>new LM(...i),ee=(...i)=>new PM(...i),$=i=>{const e=new Yo(i),t=(...n)=>{let s;return xa(n),n[0]&&n[0].isNode?s=[...n]:s=n[0],e.call(s)};return t.shaderNode=e,t.setLayout=n=>(e.setLayout(n),t),t};Q("ShaderNode",Yo);const Eh=i=>{yo=i},BM=()=>yo,Qe=(...i)=>yo.if(...i);function HM(i){return yo&&yo.add(i),i}U("append",HM);const GM=new gt("color"),N=new gt("float",_a.float),C=new gt("int",_a.ints),me=new gt("uint",_a.uint),ws=new gt("bool",_a.bool),Ae=new gt("vec2"),Es=new gt("ivec2"),kM=new gt("uvec2"),WM=new gt("bvec2"),D=new gt("vec3"),XM=new gt("ivec3"),ar=new gt("uvec3"),$d=new gt("bvec3"),Ee=new gt("vec4"),qM=new gt("ivec4"),YM=new gt("uvec4"),jM=new gt("bvec4"),wl=new gt("mat2"),$M=new gt("imat2"),ZM=new gt("umat2"),KM=new gt("bmat2"),oi=new gt("mat3"),JM=new gt("imat3"),QM=new gt("umat3"),eS=new gt("bmat3"),co=new gt("mat4"),tS=new gt("imat4"),nS=new gt("umat4"),iS=new gt("bmat4"),sS=(i="")=>pe(new qn(i,"string")),oS=i=>pe(new qn(i,"ArrayBuffer"));U("color",GM);U("float",N);U("int",C);U("uint",me);U("bool",ws);U("vec2",Ae);U("ivec2",Es);U("uvec2",kM);U("bvec2",WM);U("vec3",D);U("ivec3",XM);U("uvec3",ar);U("bvec3",$d);U("vec4",Ee);U("ivec4",qM);U("uvec4",YM);U("bvec4",jM);U("mat2",wl);U("imat2",$M);U("umat2",ZM);U("bmat2",KM);U("mat3",oi);U("imat3",JM);U("umat3",QM);U("bmat3",eS);U("mat4",co);U("imat4",tS);U("umat4",nS);U("bmat4",iS);U("string",sS);U("arrayBuffer",oS);const rS=k(Ao),aS=(i,e)=>pe(new El(pe(i),e));U("element",rS);U("convert",aS);class Zd extends Et{constructor(e,t){super(),this.targetNode=e,this.sourceNode=t}hasDependencies(){return!1}getNodeType(e,t){return t!=="void"?this.targetNode.getNodeType(e):"void"}needsSplitAssign(e){const{targetNode:t}=this;if(e.isAvailable("swizzleAssign")===!1&&t.isSplitNode&&t.components.length>1){const n=e.getTypeLength(t.node.getNodeType(e));return pa.join("").slice(0,n)!==t.components}return!1}generate(e,t){const{targetNode:n,sourceNode:s}=this,o=this.needsSplitAssign(e),r=n.getNodeType(e),a=n.context({assign:!0}).build(e),c=s.build(e,r),l=s.getNodeType(e),u=e.getDataFromNode(this);let h;if(u.initialized===!0)t!=="void"&&(h=a);else if(o){const d=e.getVarFromNode(this,null,r),m=e.getPropertyName(d);e.addLineFlowCode(`${m} = ${c}`);const g=n.node.context({assign:!0}).build(e);for(let _=0;_<n.components.length;_++){const p=n.components[_];e.addLineFlowCode(`${g}.${p} = ${m}[ ${_} ]`)}t!=="void"&&(h=a)}else h=`${a} = ${c}`,(t==="void"||l==="void")&&(e.addLineFlowCode(h),t!=="void"&&(h=a));return u.initialized=!0,e.format(h,r,t)}}const cS=k(Zd);Q("AssignNode",Zd);U("assign",cS);class Kd extends Re{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVaryingNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{name:t,node:n}=this,s=this.getNodeType(e),o=e.getVaryingFromNode(this,t,s);o.needsInterpolation||(o.needsInterpolation=e.shaderStage==="fragment");const r=e.getPropertyName(o,xh.VERTEX);return e.flowNodeFromShaderStage(xh.VERTEX,n,s,r),e.getPropertyName(o)}}const Ot=k(Kd);U("varying",Ot);Q("VaryingNode",Kd);class va extends Re{constructor(e,t=null){super(t),this._attributeName=e}isGlobal(){return!0}getHash(e){return this.getAttributeName(e)}getNodeType(e){let t=super.getNodeType(e);if(t===null){const n=this.getAttributeName(e);if(e.hasGeometryAttribute(n)){const s=e.geometry.getAttribute(n);t=e.getTypeFromAttribute(s)}else t="float"}return t}setAttributeName(e){return this._attributeName=e,this}getAttributeName(){return this._attributeName}generate(e){const t=this.getAttributeName(e),n=this.getNodeType(e);if(e.hasGeometryAttribute(t)===!0){const o=e.geometry.getAttribute(t),r=e.getTypeFromAttribute(o),a=e.getAttribute(t,r);return e.shaderStage==="vertex"?e.format(a.name,r,n):Ot(this).build(e,n)}else return console.warn(`AttributeNode: Vertex attribute "${t}" not found on geometry.`),e.generateConst(n)}}const dn=(i,e)=>pe(new va(i,e));Q("AttributeNode",va);class Jd extends Re{constructor(e,t){super(),this.isBypassNode=!0,this.outputNode=e,this.callNode=t}getNodeType(e){return this.outputNode.getNodeType(e)}generate(e){const t=this.callNode.build(e,"void");return t!==""&&e.addLineFlowCode(t),this.outputNode.build(e)}}const Qd=k(Jd);U("bypass",Qd);Q("BypassNode",Jd);let lS=0;class uS{constructor(){this.id=lS++,this.nodesData=new WeakMap}getNodeData(e){return this.nodesData.get(e)}setNodeData(e,t){this.nodesData.set(e,t)}}class ef extends Re{constructor(e,t=new uS){super(),this.isCacheNode=!0,this.node=e,this.cache=t}getNodeType(e){return this.node.getNodeType(e)}build(e,...t){const n=e.getCache(),s=this.cache||e.globalCache;e.setCache(s);const o=this.node.build(e,...t);return e.setCache(n),o}}const Kr=k(ef),hS=i=>Kr(i,null);U("cache",Kr);U("globalCache",hS);Q("CacheNode",ef);class Rl extends Re{constructor(e,t={}){super(),this.isContextNode=!0,this.node=e,this.context=t}getNodeType(e){return this.node.getNodeType(e)}setup(e){const t=e.getContext();e.setContext({...e.context,...this.context});const n=this.node.build(e);return e.setContext(t),n}generate(e,t){const n=e.getContext();e.setContext({...e.context,...this.context});const s=this.node.build(e,t);return e.setContext(n),s}}const Ui=k(Rl),dS=(i,e)=>Ui(i,{label:e});U("context",Ui);U("label",dS);Q("ContextNode",Rl);class xi extends Re{constructor(e){super("uint"),this.scope=e,this.isInstanceIndexNode=!0}generate(e){const t=this.getNodeType(e),n=this.scope;let s;if(n===xi.VERTEX)s=e.getVertexIndex();else if(n===xi.INSTANCE)s=e.getInstanceIndex();else throw new Error("THREE.IndexNode: Unknown scope: "+n);let o;return e.shaderStage==="vertex"||e.shaderStage==="compute"?o=s:o=Ot(this).build(e,t),o}}xi.VERTEX="vertex";xi.INSTANCE="instance";const fS=ee(xi,xi.VERTEX),tf=ee(xi,xi.INSTANCE);Q("IndexNode",xi);class Cl{start(){}finish(){}direct(){}indirectDiffuse(){}indirectSpecular(){}ambientOcclusion(){}}class nf extends Re{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVarNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{node:t,name:n}=this,s=e.getVarFromNode(this,n,e.getVectorType(this.getNodeType(e))),o=e.getPropertyName(s),r=t.build(e,s.type);return e.addLineFlowCode(`${o} = ${r}`),o}}const Zo=k(nf);U("temp",Zo);U("toVar",(...i)=>Zo(...i).append());Q("VarNode",nf);class ht extends Re{constructor(e,t=null,n=!1){super(e),this.name=t,this.varying=n,this.isPropertyNode=!0}getHash(e){return this.name||super.getHash(e)}isGlobal(){return!0}generate(e){let t;return this.varying===!0?(t=e.getVaryingFromNode(this,this.name),t.needsInterpolation=!0):t=e.getVarFromNode(this,this.name),e.getPropertyName(t)}}const nn=(i,e)=>pe(new ht(i,e)),ui=(i,e)=>pe(new ht(i,e,!0)),Dt=ee(ht,"vec4","DiffuseColor"),es=ee(ht,"float","Roughness"),Jr=ee(ht,"float","Metalness"),jc=ee(ht,"float","Clearcoat"),Qr=ee(ht,"float","ClearcoatRoughness"),to=ee(ht,"vec3","Sheen"),Ll=ee(ht,"float","SheenRoughness"),Pl=ee(ht,"float","Iridescence"),sf=ee(ht,"float","IridescenceIOR"),of=ee(ht,"float","IridescenceThickness"),$c=ee(ht,"float","AlphaT"),vs=ee(ht,"float","Anisotropy"),Hr=ee(ht,"vec3","AnisotropyT"),lo=ee(ht,"vec3","AnisotropyB"),Jn=ee(ht,"color","SpecularColor"),ea=ee(ht,"float","SpecularF90"),Zc=ee(ht,"float","Shininess"),pS=ee(ht,"vec4","Output"),uo=ee(ht,"float","dashSize"),ta=ee(ht,"float","gapSize");ee(ht,"float","pointWidth");const Gr=ee(ht,"float","IOR"),Kc=ee(ht,"float","Transmission"),rf=ee(ht,"float","Thickness"),af=ee(ht,"float","AttenuationDistance"),cf=ee(ht,"color","AttenuationColor");Q("PropertyNode",ht);class mS extends ht{constructor(e,t=null){super(e,t),this.isParameterNode=!0}getHash(){return this.uuid}generate(){return this.name}}Q("ParameterNode",mS);class Il extends Re{constructor(e="",t=[],n=""){super("code"),this.isCodeNode=!0,this.code=e,this.language=n,this.includes=t}isGlobal(){return!0}setIncludes(e){return this.includes=e,this}getIncludes(){return this.includes}generate(e){const t=this.getIncludes(e);for(const s of t)s.build(e);const n=e.getCodeFromNode(this,this.getNodeType(e));return n.code=this.code,n.code}serialize(e){super.serialize(e),e.code=this.code,e.language=this.language}deserialize(e){super.deserialize(e),this.code=e.code,this.language=e.language}}k(Il);Q("CodeNode",Il);class gS extends Il{constructor(e="",t=[],n=""){super(e,t,n),this.keywords={}}getNodeType(e){return this.getNodeFunction(e).type}getInputs(e){return this.getNodeFunction(e).inputs}getNodeFunction(e){const t=e.getDataFromNode(this);let n=t.nodeFunction;return n===void 0&&(n=e.parser.parseFunction(this.code),t.nodeFunction=n),n}generate(e,t){super.generate(e);const n=this.getNodeFunction(e),s=n.name,o=n.type,r=e.getCodeFromNode(this,o);s!==""&&(r.name=s);const a=e.getPropertyName(r);let c=this.getNodeFunction(e).getCode(a);const l=this.keywords,u=Object.keys(l);if(u.length>0)for(const h of u){const d=new RegExp(`\\b${h}\\b`,"g"),m=l[h].build(e,"property");c=c.replace(d,m)}return r.code=c+`
`,t==="property"?a:e.format(`${a}()`,o,t)}}Q("FunctionNode",gS);class Dl extends Re{constructor(e,t=!1){super("string"),this.name=e,this.version=0,this.shared=t,this.isUniformGroup=!0}set needsUpdate(e){e===!0&&this.version++}}const _S=i=>new Dl(i),lf=i=>new Dl(i,!0);lf("frame");lf("render");const xS=_S("object");Q("UniformGroupNode",Dl);class Ls extends ma{constructor(e,t=null){super(e,t),this.isUniformNode=!0,this.groupNode=xS}setGroup(e){return this.groupNode=e,this}getGroup(){return this.groupNode}getUniformHash(e){return this.getHash(e)}onUpdate(e,t){const n=this.getSelf();return e=e.bind(n),super.onUpdate(s=>{const o=e(s,n);o!==void 0&&(this.value=o)},t)}generate(e,t){const n=this.getNodeType(e),s=this.getUniformHash(e);let o=e.getNodeFromHash(s);o===void 0&&(e.setHashNode(this,s),o=this);const r=o.getInputType(e),a=e.getUniformFromNode(o,r,e.shaderStage,e.context.label),c=e.getPropertyName(a);return e.context.label!==void 0&&delete e.context.label,e.format(c,n,t)}}const Tt=(i,e)=>{const t=zM(e||i),n=i&&i.isNode===!0?i.node&&i.node.value||i.value:i;return pe(new Ls(n,t))};Q("UniformNode",Ls);class uf extends va{constructor(e=0){super(null,"vec2"),this.isUVNode=!0,this.index=e}getAttributeName(){const e=this.index;return"uv"+(e>0?e:"")}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}const yi=(...i)=>pe(new uf(...i));Q("UVNode",uf);class hf extends Re{constructor(e,t=null){super("uvec2"),this.isTextureSizeNode=!0,this.textureNode=e,this.levelNode=t}generate(e,t){const n=this.textureNode.build(e,"property"),s=this.levelNode.build(e,"int");return e.format(`${e.getMethod("textureDimensions")}( ${n}, ${s} )`,this.getNodeType(e),t)}}const Ul=k(hf);U("textureSize",Ul);Q("TextureSizeNode",hf);class Pt extends Et{constructor(e,t,n,...s){if(super(),this.op=e,s.length>0){let o=n;for(let r=0;r<s.length;r++)o=new Pt(e,o,s[r]);n=o}this.aNode=t,this.bNode=n}getNodeType(e,t){const n=this.op,s=this.aNode,o=this.bNode,r=s.getNodeType(e),a=typeof o<"u"?o.getNodeType(e):null;if(r==="void"||a==="void")return"void";if(n==="%")return r;if(n==="~"||n==="&"||n==="|"||n==="^"||n===">>"||n==="<<")return e.getIntegerType(r);if(n==="!"||n==="=="||n==="&&"||n==="||"||n==="^^")return"bool";if(n==="<"||n===">"||n==="<="||n===">="){const c=t?e.getTypeLength(t):Math.max(e.getTypeLength(r),e.getTypeLength(a));return c>1?`bvec${c}`:"bool"}else return r==="float"&&e.isMatrix(a)?a:e.isMatrix(r)&&e.isVector(a)?e.getVectorFromMatrix(r):e.isVector(r)&&e.isMatrix(a)?e.getVectorFromMatrix(a):e.getTypeLength(a)>e.getTypeLength(r)?a:r}generate(e,t){const n=this.op,s=this.aNode,o=this.bNode,r=this.getNodeType(e,t);let a=null,c=null;r!=="void"?(a=s.getNodeType(e),c=typeof o<"u"?o.getNodeType(e):null,n==="<"||n===">"||n==="<="||n===">="||n==="=="?e.isVector(a)?c=a:a=c="float":n===">>"||n==="<<"?(a=r,c=e.changeComponentType(c,"uint")):e.isMatrix(a)&&e.isVector(c)?c=e.getVectorFromMatrix(a):e.isVector(a)&&e.isMatrix(c)?a=e.getVectorFromMatrix(c):a=c=r):a=c=r;const l=s.build(e,a),u=typeof o<"u"?o.build(e,c):null,h=e.getTypeLength(t),d=e.getFunctionOperator(n);if(t!=="void")return n==="<"&&h>1?e.format(`${e.getMethod("lessThan")}( ${l}, ${u} )`,r,t):n==="<="&&h>1?e.format(`${e.getMethod("lessThanEqual")}( ${l}, ${u} )`,r,t):n===">"&&h>1?e.format(`${e.getMethod("greaterThan")}( ${l}, ${u} )`,r,t):n===">="&&h>1?e.format(`${e.getMethod("greaterThanEqual")}( ${l}, ${u} )`,r,t):n==="!"||n==="~"?e.format(`(${n}${l})`,a,t):d?e.format(`${d}( ${l}, ${u} )`,r,t):e.format(`( ${l} ${n} ${u} )`,r,t);if(a!=="void")return d?e.format(`${d}( ${l}, ${u} )`,r,t):e.format(`${l} ${n} ${u}`,r,t)}serialize(e){super.serialize(e),e.op=this.op}deserialize(e){super.deserialize(e),this.op=e.op}}const Dn=k(Pt,"+"),zt=k(Pt,"-"),ot=k(Pt,"*"),os=k(Pt,"/"),vS=k(Pt,"%"),yS=k(Pt,"=="),MS=k(Pt,"!="),SS=k(Pt,"<"),df=k(Pt,">"),TS=k(Pt,"<="),ES=k(Pt,">="),AS=k(Pt,"&&"),NS=k(Pt,"||"),bS=k(Pt,"!"),wS=k(Pt,"^^"),RS=k(Pt,"&"),CS=k(Pt,"~"),LS=k(Pt,"|"),PS=k(Pt,"^"),IS=k(Pt,"<<"),DS=k(Pt,">>");U("add",Dn);U("sub",zt);U("mul",ot);U("div",os);U("remainder",vS);U("equal",yS);U("notEqual",MS);U("lessThan",SS);U("greaterThan",df);U("lessThanEqual",TS);U("greaterThanEqual",ES);U("and",AS);U("or",NS);U("not",bS);U("xor",wS);U("bitAnd",RS);U("bitNot",CS);U("bitOr",LS);U("bitXor",PS);U("shiftLeft",IS);U("shiftRight",DS);Q("OperatorNode",Pt);class P extends Et{constructor(e,t,n=null,s=null){super(),this.method=e,this.aNode=t,this.bNode=n,this.cNode=s}getInputType(e){const t=this.aNode.getNodeType(e),n=this.bNode?this.bNode.getNodeType(e):null,s=this.cNode?this.cNode.getNodeType(e):null,o=e.isMatrix(t)?0:e.getTypeLength(t),r=e.isMatrix(n)?0:e.getTypeLength(n),a=e.isMatrix(s)?0:e.getTypeLength(s);return o>r&&o>a?t:r>a?n:a>o?s:t}getNodeType(e){const t=this.method;return t===P.LENGTH||t===P.DISTANCE||t===P.DOT?"float":t===P.CROSS?"vec3":t===P.ALL?"bool":t===P.EQUALS?e.changeComponentType(this.aNode.getNodeType(e),"bool"):t===P.MOD?this.aNode.getNodeType(e):this.getInputType(e)}generate(e,t){const n=this.method,s=this.getNodeType(e),o=this.getInputType(e),r=this.aNode,a=this.bNode,c=this.cNode,l=e.renderer.isWebGLRenderer===!0;if(n===P.TRANSFORM_DIRECTION){let u=r,h=a;e.isMatrix(u.getNodeType(e))?h=Ee(D(h),0):u=Ee(D(u),0);const d=ot(u,h).xyz;return vn(d).build(e,t)}else{if(n===P.NEGATE)return e.format("( - "+r.build(e,o)+" )",s,t);if(n===P.ONE_MINUS)return zt(1,r).build(e,t);if(n===P.RECIPROCAL)return os(1,r).build(e,t);if(n===P.DIFFERENCE)return kt(zt(r,a)).build(e,t);{const u=[];return n===P.CROSS||n===P.MOD?u.push(r.build(e,s),a.build(e,s)):n===P.STEP?u.push(r.build(e,e.getTypeLength(r.getNodeType(e))===1?"float":o),a.build(e,o)):l&&(n===P.MIN||n===P.MAX)||n===P.MOD?u.push(r.build(e,o),a.build(e,e.getTypeLength(a.getNodeType(e))===1?"float":o)):n===P.REFRACT?u.push(r.build(e,o),a.build(e,o),c.build(e,"float")):n===P.MIX?u.push(r.build(e,o),a.build(e,o),c.build(e,e.getTypeLength(c.getNodeType(e))===1?"float":o)):(u.push(r.build(e,o)),a!==null&&u.push(a.build(e,o)),c!==null&&u.push(c.build(e,o))),e.format(`${e.getMethod(n,s)}( ${u.join(", ")} )`,s,t)}}}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}P.ALL="all";P.ANY="any";P.EQUALS="equals";P.RADIANS="radians";P.DEGREES="degrees";P.EXP="exp";P.EXP2="exp2";P.LOG="log";P.LOG2="log2";P.SQRT="sqrt";P.INVERSE_SQRT="inversesqrt";P.FLOOR="floor";P.CEIL="ceil";P.NORMALIZE="normalize";P.FRACT="fract";P.SIN="sin";P.COS="cos";P.TAN="tan";P.ASIN="asin";P.ACOS="acos";P.ATAN="atan";P.ABS="abs";P.SIGN="sign";P.LENGTH="length";P.NEGATE="negate";P.ONE_MINUS="oneMinus";P.DFDX="dFdx";P.DFDY="dFdy";P.ROUND="round";P.RECIPROCAL="reciprocal";P.TRUNC="trunc";P.FWIDTH="fwidth";P.BITCAST="bitcast";P.ATAN2="atan2";P.MIN="min";P.MAX="max";P.MOD="mod";P.STEP="step";P.REFLECT="reflect";P.DISTANCE="distance";P.DIFFERENCE="difference";P.DOT="dot";P.CROSS="cross";P.POW="pow";P.TRANSFORM_DIRECTION="transformDirection";P.MIX="mix";P.CLAMP="clamp";P.REFRACT="refract";P.SMOOTHSTEP="smoothstep";P.FACEFORWARD="faceforward";const ff=N(1e-6);N(1e6);const Ah=N(Math.PI);N(Math.PI*2);const pf=k(P,P.ALL),US=k(P,P.ANY),OS=k(P,P.EQUALS),FS=k(P,P.RADIANS),VS=k(P,P.DEGREES),mf=k(P,P.EXP),Jc=k(P,P.EXP2),gf=k(P,P.LOG),ya=k(P,P.LOG2),Ps=k(P,P.SQRT),zS=k(P,P.INVERSE_SQRT),No=k(P,P.FLOOR),_f=k(P,P.CEIL),vn=k(P,P.NORMALIZE),Ma=k(P,P.FRACT),Ci=k(P,P.SIN),Zi=k(P,P.COS),BS=k(P,P.TAN),HS=k(P,P.ASIN),GS=k(P,P.ACOS),kS=k(P,P.ATAN),kt=k(P,P.ABS),Ol=k(P,P.SIGN),jo=k(P,P.LENGTH),WS=k(P,P.NEGATE),XS=k(P,P.ONE_MINUS),qS=k(P,P.DFDX),YS=k(P,P.DFDY),jS=k(P,P.ROUND),$S=k(P,P.RECIPROCAL),xf=k(P,P.TRUNC),ZS=k(P,P.FWIDTH);k(P,P.BITCAST);const KS=k(P,P.ATAN2),Mo=k(P,P.MIN),Un=k(P,P.MAX),JS=k(P,P.MOD),QS=k(P,P.STEP),eT=k(P,P.REFLECT),tT=k(P,P.DISTANCE),nT=k(P,P.DIFFERENCE),bo=k(P,P.DOT),vf=k(P,P.CROSS),_i=k(P,P.POW),yf=k(P,P.POW,2),iT=k(P,P.POW,3),sT=k(P,P.POW,4),oT=k(P,P.TRANSFORM_DIRECTION),rT=i=>ot(Ol(i),_i(kt(i),1/3)),aT=i=>bo(i,i),rn=k(P,P.MIX),So=(i,e=0,t=1)=>pe(new P(P.CLAMP,pe(i),pe(e),pe(t))),cT=i=>So(i),Mf=k(P,P.REFRACT),Fi=k(P,P.SMOOTHSTEP),lT=k(P,P.FACEFORWARD),uT=(i,e,t)=>rn(e,t,i),hT=(i,e,t)=>Fi(e,t,i);U("all",pf);U("any",US);U("equals",OS);U("radians",FS);U("degrees",VS);U("exp",mf);U("exp2",Jc);U("log",gf);U("log2",ya);U("sqrt",Ps);U("inverseSqrt",zS);U("floor",No);U("ceil",_f);U("normalize",vn);U("fract",Ma);U("sin",Ci);U("cos",Zi);U("tan",BS);U("asin",HS);U("acos",GS);U("atan",kS);U("abs",kt);U("sign",Ol);U("length",jo);U("lengthSq",aT);U("negate",WS);U("oneMinus",XS);U("dFdx",qS);U("dFdy",YS);U("round",jS);U("reciprocal",$S);U("trunc",xf);U("fwidth",ZS);U("atan2",KS);U("min",Mo);U("max",Un);U("mod",JS);U("step",QS);U("reflect",eT);U("distance",tT);U("dot",bo);U("cross",vf);U("pow",_i);U("pow2",yf);U("pow3",iT);U("pow4",sT);U("transformDirection",oT);U("mix",uT);U("clamp",So);U("refract",Mf);U("smoothstep",hT);U("faceForward",lT);U("difference",nT);U("saturate",cT);U("cbrt",rT);Q("MathNode",P);const dT=$(i=>{const{value:e}=i,{rgb:t}=e,n=t.mul(.9478672986).add(.0521327014).pow(2.4),s=t.mul(.0773993808),o=t.lessThanEqual(.04045),r=rn(n,s,o);return Ee(r,e.a)}),fT=$(i=>{const{value:e}=i,{rgb:t}=e,n=t.pow(.41666).mul(1.055).sub(.055),s=t.mul(12.92),o=t.lessThanEqual(.0031308),r=rn(n,s,o);return Ee(r,e.a)}),Nh=i=>{let e=null;return i===ci?e="Linear":i===Kn&&(e="sRGB"),e},Sf=(i,e)=>Nh(i)+"To"+Nh(e);class Nn extends Et{constructor(e,t){super("vec4"),this.method=e,this.node=t}setup(){const{method:e,node:t}=this;return e===Nn.LINEAR_TO_LINEAR?t:pT[e]({value:t})}}Nn.LINEAR_TO_LINEAR="LinearToLinear";Nn.LINEAR_TO_sRGB="LinearTosRGB";Nn.sRGB_TO_LINEAR="sRGBToLinear";const pT={[Nn.LINEAR_TO_sRGB]:fT,[Nn.sRGB_TO_LINEAR]:dT},mT=(i,e)=>pe(new Nn(Sf(ci,e),pe(i))),Tf=(i,e)=>pe(new Nn(Sf(e,ci),pe(i))),gT=k(Nn,Nn.LINEAR_TO_sRGB),_T=k(Nn,Nn.sRGB_TO_LINEAR);U("linearTosRGB",gT);U("sRGBToLinear",_T);U("linearToColorSpace",mT);U("colorSpaceToLinear",Tf);Q("ColorSpaceNode",Nn);class Ef extends Re{constructor(e="",t="void"){super(t),this.snippet=e}generate(e,t){const n=this.getNodeType(e),s=this.snippet;if(n==="void")e.addLineFlowCode(s);else return e.format(`( ${s} )`,n,t)}}const Sa=k(Ef);Q("ExpressionNode",Ef);class Af extends Ls{constructor(e){super(0),this.textureNode=e,this.updateType=St.FRAME}get texture(){return this.textureNode.value}update(){const e=this.texture,t=e.images,n=t&&t.length>0?t[0]&&t[0].image||t[0]:e.image;if(n&&n.width!==void 0){const{width:s,height:o}=n;this.value=Math.log2(Math.max(s,o))}}}const xT=k(Af);Q("MaxMipLevelNode",Af);class wo extends Ls{constructor(e,t=null,n=null){super(e),this.isTextureNode=!0,this.uvNode=t,this.levelNode=n,this.compareNode=null,this.depthNode=null,this.gradNode=null,this.sampler=!0,this.updateMatrix=!1,this.updateType=St.NONE,this.referenceNode=null,this._value=e,this.setUpdateMatrix(t===null)}set value(e){this.referenceNode?this.referenceNode.value=e:this._value=e}get value(){return this.referenceNode?this.referenceNode.value:this._value}getUniformHash(){return this.value.uuid}getNodeType(){return this.value.isDepthTexture===!0?"float":"vec4"}getInputType(){return"texture"}getDefaultUV(){return yi(this.value.channel)}updateReference(){return this.value}getTransformedUV(e){const t=this.value;return Tt(t.matrix).mul(D(e,1)).xy}setUpdateMatrix(e){return this.updateMatrix=e,this.updateType=e?St.FRAME:St.NONE,this}setupUV(e,t){const n=this.value;return e.isFlipY()&&(n.isRenderTargetTexture===!0||n.isFramebufferTexture===!0||n.isDepthTexture===!0)&&(t=t.setY(t.y.oneMinus())),t}setup(e){const t=e.getNodeProperties(this);let n=this.uvNode;(n===null||e.context.forceUVContext===!0)&&e.context.getUV&&(n=e.context.getUV(this)),n||(n=this.getDefaultUV()),this.updateMatrix===!0&&(n=this.getTransformedUV(n)),n=this.setupUV(e,n);let s=this.levelNode;s===null&&e.context.getTextureLevel&&(s=e.context.getTextureLevel(this)),t.uvNode=n,t.levelNode=s,t.compareNode=this.compareNode,t.gradNode=this.gradNode,t.depthNode=this.depthNode}generateUV(e,t){return t.build(e,this.sampler===!0?"vec2":"ivec2")}generateSnippet(e,t,n,s,o,r,a){const c=this.value;let l;return s?l=e.generateTextureLevel(c,t,n,s,o):a?l=e.generateTextureGrad(c,t,n,a,o):r?l=e.generateTextureCompare(c,t,n,r,o):this.sampler===!1?l=e.generateTextureLoad(c,t,n,o):l=e.generateTexture(c,t,n,o),l}generate(e,t){const n=e.getNodeProperties(this),s=this.value;if(!s||s.isTexture!==!0)throw new Error("TextureNode: Need a three.js texture.");const o=super.generate(e,"property");if(t==="sampler")return o+"_sampler";if(e.isReference(t))return o;{const r=e.getDataFromNode(this);let a=r.propertyName;if(a===void 0){const{uvNode:u,levelNode:h,compareNode:d,depthNode:m,gradNode:g}=n,_=this.generateUV(e,u),p=h?h.build(e,"float"):null,f=m?m.build(e,"int"):null,E=d?d.build(e,"float"):null,y=g?[g[0].build(e,"vec2"),g[1].build(e,"vec2")]:null,A=e.getVarFromNode(this);a=e.getPropertyName(A);const F=this.generateSnippet(e,o,_,p,f,E,y);e.addLineFlowCode(`${a} = ${F}`),e.context.tempWrite!==!1&&(r.snippet=F,r.propertyName=a)}let c=a;const l=this.getNodeType(e);return e.needsColorSpaceToLinear(s)&&(c=Tf(Sa(c,l),s.colorSpace).setup(e).build(e,l)),e.format(c,l,t)}}setSampler(e){return this.sampler=e,this}getSampler(){return this.sampler}uv(e){const t=this.clone();return t.uvNode=e,t.referenceNode=this,pe(t)}blur(e){const t=this.clone();return t.levelNode=e.mul(xT(t)),t.referenceNode=this,pe(t)}level(e){const t=this.clone();return t.levelNode=e,t.referenceNode=this,t}size(e){return Ul(this,e)}compare(e){const t=this.clone();return t.compareNode=pe(e),t.referenceNode=this,pe(t)}grad(e,t){const n=this.clone();return n.gradNode=[pe(e),pe(t)],n.referenceNode=this,pe(n)}depth(e){const t=this.clone();return t.depthNode=pe(e),t.referenceNode=this,pe(t)}serialize(e){super.serialize(e),e.value=this.value.toJSON(e.meta).uuid}deserialize(e){super.deserialize(e),this.value=e.meta.textures[e.value]}update(){const e=this.value;e.matrixAutoUpdate===!0&&e.updateMatrix()}clone(){const e=new this.constructor(this.value,this.uvNode,this.levelNode);return e.sampler=this.sampler,e}}const In=k(wo),Ss=(...i)=>In(...i).setSampler(!1);U("texture",In);Q("TextureNode",wo);class Ta extends Ls{constructor(e,t,n=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferCount=n}getInputType(){return"buffer"}}const Fl=(i,e,t)=>pe(new Ta(i,e,t));Q("BufferNode",Ta);class vT extends Ao{constructor(e,t){super(e,t),this.isArrayBufferElementNode=!0}getNodeType(e){return this.node.getElementType(e)}generate(e){const t=super.generate(e),n=this.getNodeType();return e.format(t,"vec4",n)}}class Nf extends Ta{constructor(e,t=null){super(null,"vec4"),this.array=e,this.elementType=t,this._elementType=null,this._elementLength=0,this.updateType=St.RENDER,this.isArrayBufferNode=!0}getElementType(){return this.elementType||this._elementType}getElementLength(){return this._elementLength}update(){const{array:e,value:t}=this,n=this.getElementLength(),s=this.getElementType();if(n===1)for(let o=0;o<e.length;o++){const r=o*4;t[r]=e[o]}else if(s==="color")for(let o=0;o<e.length;o++){const r=o*4,a=e[o];t[r]=a.r,t[r+1]=a.g,t[r+2]=a.b||0}else for(let o=0;o<e.length;o++){const r=o*4,a=e[o];t[r]=a.x,t[r+1]=a.y,t[r+2]=a.z||0,t[r+3]=a.w||0}}setup(e){const t=this.array.length;return this._elementType=this.elementType===null?Qi(this.array[0]):this.elementType,this._elementLength=e.getTypeLength(this._elementType),this.value=new Float32Array(t*4),this.bufferCount=t,super.setup(e)}element(e){return pe(new vT(this,pe(e)))}}const Qc=(i,e)=>pe(new Nf(i,e));Q("UniformsNode",Nf);class yT extends Ao{constructor(e,t){super(e,t),this.referenceNode=e,this.isReferenceElementNode=!0}getNodeType(){return this.referenceNode.uniformType}generate(e){const t=super.generate(e),n=this.referenceNode.getNodeType(),s=this.getNodeType();return e.format(t,n,s)}}class Ro extends Re{constructor(e,t,n=null,s=null){super(),this.property=e,this.uniformType=t,this.object=n,this.count=s,this.properties=e.split("."),this.reference=null,this.node=null,this.updateType=St.OBJECT}element(e){return pe(new yT(this,pe(e)))}setNodeType(e){let t=null;this.count!==null?t=Fl(null,e,this.count):Array.isArray(this.getValueFromReference())?t=Qc(null,e):e==="texture"?t=In(null):t=Tt(null,e),this.node=t}getNodeType(e){return this.node.getNodeType(e)}getValueFromReference(e=this.reference){const{properties:t}=this;let n=e[t[0]];for(let s=1;s<t.length;s++)n=n[t[s]];return n}updateReference(e){return this.reference=this.object!==null?this.object:e.object,this.reference}setup(){return this.updateValue(),this.node}update(){this.updateValue()}updateValue(){this.node===null&&this.setNodeType(this.uniformType);const e=this.getValueFromReference();Array.isArray(e)?this.node.array=e:this.node.value=e}}const ri=(i,e,t)=>pe(new Ro(i,e,t)),MT=(i,e,t,n)=>pe(new Ro(i,e,n,t));Q("ReferenceNode",Ro);class bf extends Ro{constructor(e,t,n=null){super(e,t,n),this.material=n}updateReference(e){return this.reference=this.material!==null?this.material:e.material,this.reference}}const wf=(i,e,t)=>pe(new bf(i,e,t));Q("MaterialReferenceNode",bf);class Oe extends Re{constructor(e=Oe.VIEW_MATRIX,t=null){super(),this.scope=e,this.object3d=t,this.updateType=St.OBJECT,this._uniformNode=new Ls(null)}getNodeType(){const e=this.scope;if(e===Oe.WORLD_MATRIX||e===Oe.VIEW_MATRIX)return"mat4";if(e===Oe.NORMAL_MATRIX)return"mat3";if(e===Oe.POSITION||e===Oe.VIEW_POSITION||e===Oe.DIRECTION||e===Oe.SCALE)return"vec3"}update(e){const t=this.object3d,n=this._uniformNode,s=this.scope;if(s===Oe.VIEW_MATRIX)n.value=t.modelViewMatrix;else if(s===Oe.NORMAL_MATRIX)n.value=t.normalMatrix;else if(s===Oe.WORLD_MATRIX)n.value=t.matrixWorld;else if(s===Oe.POSITION)n.value=n.value||new L,n.value.setFromMatrixPosition(t.matrixWorld);else if(s===Oe.SCALE)n.value=n.value||new L,n.value.setFromMatrixScale(t.matrixWorld);else if(s===Oe.DIRECTION)n.value=n.value||new L,t.getWorldDirection(n.value);else if(s===Oe.VIEW_POSITION){const o=e.camera;n.value=n.value||new L,n.value.setFromMatrixPosition(t.matrixWorld),n.value.applyMatrix4(o.matrixWorldInverse)}}generate(e){const t=this.scope;return t===Oe.WORLD_MATRIX||t===Oe.VIEW_MATRIX?this._uniformNode.nodeType="mat4":t===Oe.NORMAL_MATRIX?this._uniformNode.nodeType="mat3":(t===Oe.POSITION||t===Oe.VIEW_POSITION||t===Oe.DIRECTION||t===Oe.SCALE)&&(this._uniformNode.nodeType="vec3"),this._uniformNode.build(e)}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Oe.VIEW_MATRIX="viewMatrix";Oe.NORMAL_MATRIX="normalMatrix";Oe.WORLD_MATRIX="worldMatrix";Oe.POSITION="position";Oe.SCALE="scale";Oe.VIEW_POSITION="viewPosition";Oe.DIRECTION="direction";k(Oe,Oe.DIRECTION);k(Oe,Oe.VIEW_MATRIX);k(Oe,Oe.NORMAL_MATRIX);k(Oe,Oe.WORLD_MATRIX);const el=k(Oe,Oe.POSITION);k(Oe,Oe.SCALE);const Rf=k(Oe,Oe.VIEW_POSITION);Q("Object3DNode",Oe);class He extends Oe{constructor(e=He.POSITION){super(e),this.updateType=St.RENDER}getNodeType(e){const t=this.scope;return t===He.PROJECTION_MATRIX||t===He.PROJECTION_MATRIX_INVERSE?"mat4":t===He.NEAR||t===He.FAR||t===He.LOG_DEPTH?"float":super.getNodeType(e)}update(e){const t=e.camera,n=this._uniformNode,s=this.scope;s===He.VIEW_MATRIX?n.value=t.matrixWorldInverse:s===He.PROJECTION_MATRIX?n.value=t.projectionMatrix:s===He.PROJECTION_MATRIX_INVERSE?n.value=t.projectionMatrixInverse:s===He.NEAR?n.value=t.near:s===He.FAR?n.value=t.far:s===He.LOG_DEPTH?n.value=2/(Math.log(t.far+1)/Math.LN2):(this.object3d=t,super.update(e))}generate(e){const t=this.scope;return t===He.PROJECTION_MATRIX||t===He.PROJECTION_MATRIX_INVERSE?this._uniformNode.nodeType="mat4":(t===He.NEAR||t===He.FAR||t===He.LOG_DEPTH)&&(this._uniformNode.nodeType="float"),super.generate(e)}}He.PROJECTION_MATRIX="projectionMatrix";He.PROJECTION_MATRIX_INVERSE="projectionMatrixInverse";He.NEAR="near";He.FAR="far";He.LOG_DEPTH="logDepth";const fi=ee(He,He.PROJECTION_MATRIX);ee(He,He.PROJECTION_MATRIX_INVERSE);const pc=ee(He,He.NEAR),mc=ee(He,He.FAR),ST=ee(He,He.LOG_DEPTH),Bi=ee(He,He.VIEW_MATRIX);ee(He,He.NORMAL_MATRIX);ee(He,He.WORLD_MATRIX);const TT=ee(He,He.POSITION);Q("CameraNode",He);class an extends Oe{constructor(e=an.VIEW_MATRIX){super(e)}update(e){this.object3d=e.object,super.update(e)}}ee(an,an.DIRECTION);const Rs=ee(an,an.VIEW_MATRIX).label("modelViewMatrix").temp("ModelViewMatrix"),Cf=ee(an,an.NORMAL_MATRIX),Ko=ee(an,an.WORLD_MATRIX);ee(an,an.POSITION);ee(an,an.SCALE);ee(an,an.VIEW_POSITION);Q("ModelNode",an);class Xt extends Re{constructor(e=Xt.LOCAL){super("vec3"),this.scope=e}isGlobal(){return!0}getHash(){return`normal-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===Xt.GEOMETRY)e.hasGeometryAttribute("normal")===!1?n=D(0,1,0):n=dn("normal","vec3");else if(t===Xt.LOCAL)n=Ot(na);else if(t===Xt.VIEW){const s=Cf.mul(ai);n=vn(Ot(s))}else if(t===Xt.WORLD){const s=rs.transformDirection(Bi);n=vn(Ot(s))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Xt.GEOMETRY="geometry";Xt.LOCAL="local";Xt.VIEW="view";Xt.WORLD="world";const na=ee(Xt,Xt.GEOMETRY),ai=ee(Xt,Xt.LOCAL).temp("Normal"),rs=ee(Xt,Xt.VIEW),Lf=ee(Xt,Xt.WORLD),Ft=nn("vec3","TransformedNormalView"),Pf=Ft.transformDirection(Bi).normalize(),no=nn("vec3","TransformedClearcoatNormalView");Q("NormalNode",Xt);const bh=new Map;class Z extends Re{constructor(e){super(),this.scope=e}getCache(e,t){let n=bh.get(e);return n===void 0&&(n=wf(e,t),bh.set(e,n)),n}getFloat(e){return this.getCache(e,"float")}getColor(e){return this.getCache(e,"color")}getTexture(e){return this.getCache(e==="map"?"map":e+"Map","texture")}setup(e){const t=e.context.material,n=this.scope;let s=null;if(n===Z.COLOR){const o=this.getColor(n);t.map&&t.map.isTexture===!0?s=o.mul(this.getTexture("map")):s=o}else if(n===Z.OPACITY){const o=this.getFloat(n);t.alphaMap&&t.alphaMap.isTexture===!0?s=o.mul(this.getTexture("alpha")):s=o}else if(n===Z.SPECULAR_STRENGTH)t.specularMap&&t.specularMap.isTexture===!0?s=this.getTexture("specular").r:s=N(1);else if(n===Z.SPECULAR_INTENSITY){const o=this.getFloat(n);t.specularMap?s=o.mul(this.getTexture(n).a):s=o}else if(n===Z.SPECULAR_COLOR){const o=this.getColor(n);t.specularColorMap&&t.specularColorMap.isTexture===!0?s=o.mul(this.getTexture(n).rgb):s=o}else if(n===Z.ROUGHNESS){const o=this.getFloat(n);t.roughnessMap&&t.roughnessMap.isTexture===!0?s=o.mul(this.getTexture(n).g):s=o}else if(n===Z.METALNESS){const o=this.getFloat(n);t.metalnessMap&&t.metalnessMap.isTexture===!0?s=o.mul(this.getTexture(n).b):s=o}else if(n===Z.EMISSIVE){const o=this.getColor(n);t.emissiveMap&&t.emissiveMap.isTexture===!0?s=o.mul(this.getTexture(n)):s=o}else if(n===Z.NORMAL)t.normalMap?s=this.getTexture("normal").normalMap(this.getCache("normalScale","vec2")):t.bumpMap?s=this.getTexture("bump").r.bumpMap(this.getFloat("bumpScale")):s=rs;else if(n===Z.CLEARCOAT){const o=this.getFloat(n);t.clearcoatMap&&t.clearcoatMap.isTexture===!0?s=o.mul(this.getTexture(n).r):s=o}else if(n===Z.CLEARCOAT_ROUGHNESS){const o=this.getFloat(n);t.clearcoatRoughnessMap&&t.clearcoatRoughnessMap.isTexture===!0?s=o.mul(this.getTexture(n).r):s=o}else if(n===Z.CLEARCOAT_NORMAL)t.clearcoatNormalMap?s=this.getTexture(n).normalMap(this.getCache(n+"Scale","vec2")):s=rs;else if(n===Z.SHEEN){const o=this.getColor("sheenColor").mul(this.getFloat("sheen"));t.sheenColorMap&&t.sheenColorMap.isTexture===!0?s=o.mul(this.getTexture("sheenColor").rgb):s=o}else if(n===Z.SHEEN_ROUGHNESS){const o=this.getFloat(n);t.sheenRoughnessMap&&t.sheenRoughnessMap.isTexture===!0?s=o.mul(this.getTexture(n).a):s=o,s=s.clamp(.07,1)}else if(n===Z.ANISOTROPY)if(t.anisotropyMap&&t.anisotropyMap.isTexture===!0){const o=this.getTexture(n);s=wl(Ho.x,Ho.y,Ho.y.negate(),Ho.x).mul(o.rg.mul(2).sub(Ae(1)).normalize().mul(o.b))}else s=Ho;else if(n===Z.IRIDESCENCE_THICKNESS){const o=ri("1","float",t.iridescenceThicknessRange);if(t.iridescenceThicknessMap){const r=ri("0","float",t.iridescenceThicknessRange);s=o.sub(r).mul(this.getTexture(n).g).add(r)}else s=o}else if(n===Z.TRANSMISSION){const o=this.getFloat(n);t.transmissionMap?s=o.mul(this.getTexture(n).r):s=o}else if(n===Z.THICKNESS){const o=this.getFloat(n);t.thicknessMap?s=o.mul(this.getTexture(n).g):s=o}else if(n===Z.IOR)s=this.getFloat(n);else{const o=this.getNodeType(e);s=this.getCache(n,o)}return s}}Z.ALPHA_TEST="alphaTest";Z.COLOR="color";Z.OPACITY="opacity";Z.SHININESS="shininess";Z.SPECULAR="specular";Z.SPECULAR_STRENGTH="specularStrength";Z.SPECULAR_INTENSITY="specularIntensity";Z.SPECULAR_COLOR="specularColor";Z.REFLECTIVITY="reflectivity";Z.ROUGHNESS="roughness";Z.METALNESS="metalness";Z.NORMAL="normal";Z.CLEARCOAT="clearcoat";Z.CLEARCOAT_ROUGHNESS="clearcoatRoughness";Z.CLEARCOAT_NORMAL="clearcoatNormal";Z.EMISSIVE="emissive";Z.ROTATION="rotation";Z.SHEEN="sheen";Z.SHEEN_ROUGHNESS="sheenRoughness";Z.ANISOTROPY="anisotropy";Z.IRIDESCENCE="iridescence";Z.IRIDESCENCE_IOR="iridescenceIOR";Z.IRIDESCENCE_THICKNESS="iridescenceThickness";Z.IOR="ior";Z.TRANSMISSION="transmission";Z.THICKNESS="thickness";Z.ATTENUATION_DISTANCE="attenuationDistance";Z.ATTENUATION_COLOR="attenuationColor";Z.LINE_SCALE="scale";Z.LINE_DASH_SIZE="dashSize";Z.LINE_GAP_SIZE="gapSize";Z.LINE_WIDTH="linewidth";Z.LINE_DASH_OFFSET="dashOffset";Z.POINT_WIDTH="pointWidth";const ET=ee(Z,Z.ALPHA_TEST),Jo=ee(Z,Z.COLOR),AT=ee(Z,Z.SHININESS),NT=ee(Z,Z.EMISSIVE),If=ee(Z,Z.OPACITY),bT=ee(Z,Z.SPECULAR),wh=ee(Z,Z.SPECULAR_INTENSITY),wT=ee(Z,Z.SPECULAR_COLOR),RT=ee(Z,Z.SPECULAR_STRENGTH);ee(Z,Z.REFLECTIVITY);const CT=ee(Z,Z.ROUGHNESS),LT=ee(Z,Z.METALNESS),PT=ee(Z,Z.NORMAL),IT=ee(Z,Z.CLEARCOAT),DT=ee(Z,Z.CLEARCOAT_ROUGHNESS),UT=ee(Z,Z.CLEARCOAT_NORMAL),OT=ee(Z,Z.ROTATION),FT=ee(Z,Z.SHEEN),VT=ee(Z,Z.SHEEN_ROUGHNESS),zT=ee(Z,Z.ANISOTROPY),BT=ee(Z,Z.IRIDESCENCE),HT=ee(Z,Z.IRIDESCENCE_IOR),GT=ee(Z,Z.IRIDESCENCE_THICKNESS),kT=ee(Z,Z.TRANSMISSION),WT=ee(Z,Z.THICKNESS),XT=ee(Z,Z.IOR),qT=ee(Z,Z.ATTENUATION_DISTANCE),YT=ee(Z,Z.ATTENUATION_COLOR),tl=ee(Z,Z.LINE_SCALE),Df=ee(Z,Z.LINE_DASH_SIZE),Uf=ee(Z,Z.LINE_GAP_SIZE),gc=ee(Z,Z.LINE_WIDTH),Rh=ee(Z,Z.LINE_DASH_OFFSET),jT=ee(Z,Z.POINT_WIDTH),Ho=Tt(new Te).onReference(function(i){return i.material}).onRenderUpdate(function({material:i}){this.value.set(i.anisotropy*Math.cos(i.anisotropyRotation),i.anisotropy*Math.sin(i.anisotropyRotation))});Q("MaterialNode",Z);class Mt extends Re{constructor(e=Mt.LOCAL){super("vec3"),this.scope=e}isGlobal(){return!0}getHash(){return`position-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===Mt.GEOMETRY)n=dn("position","vec3");else if(t===Mt.LOCAL)n=Ot(Mn);else if(t===Mt.WORLD){const s=Ko.mul(pn);n=Ot(s)}else if(t===Mt.VIEW){const s=Rs.mul(pn);n=Ot(s)}else if(t===Mt.VIEW_DIRECTION){const s=Ln.negate();n=vn(Ot(s))}else if(t===Mt.WORLD_DIRECTION){const s=pn.transformDirection(Ko);n=vn(Ot(s))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Mt.GEOMETRY="geometry";Mt.LOCAL="local";Mt.WORLD="world";Mt.WORLD_DIRECTION="worldDirection";Mt.VIEW="view";Mt.VIEW_DIRECTION="viewDirection";const Mn=ee(Mt,Mt.GEOMETRY),pn=ee(Mt,Mt.LOCAL).temp("Position"),nl=ee(Mt,Mt.WORLD),$T=ee(Mt,Mt.WORLD_DIRECTION),Ln=ee(Mt,Mt.VIEW),Ut=ee(Mt,Mt.VIEW_DIRECTION);Q("PositionNode",Mt);class Of extends Et{constructor(e=null){super("vec4"),this.positionNode=e}setup(e){if(e.shaderStage==="fragment")return Ot(e.context.mvp);const t=this.positionNode||pn;return fi.mul(Rs).mul(t)}}const Ch=k(Of);Q("ModelViewProjectionNode",Of);class Ff extends ma{constructor(e,t=null,n=0,s=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferStride=n,this.bufferOffset=s,this.usage=jr,this.instanced=!1,this.attribute=null,e&&e.isBufferAttribute===!0&&(this.attribute=e,this.usage=e.usage,this.instanced=e.isInstancedBufferAttribute)}getNodeType(e){return this.bufferType===null&&(this.bufferType=e.getTypeFromAttribute(this.attribute)),this.bufferType}setup(e){if(this.attribute!==null)return;const t=this.getNodeType(e),n=this.value,s=e.getTypeLength(t),o=this.bufferStride||s,r=this.bufferOffset,a=n.isInterleavedBuffer===!0?n:new Dd(n,o),c=new Sl(a,s,r);a.setUsage(this.usage),this.attribute=c,this.attribute.isInstancedBufferAttribute=this.instanced}generate(e){const t=this.getNodeType(e),n=e.getBufferAttributeFromNode(this,t),s=e.getPropertyName(n);let o=null;return e.shaderStage==="vertex"||e.shaderStage==="compute"?(this.name=s,o=s):o=Ot(this).build(e,t),o}getInputType(){return"bufferAttribute"}setUsage(e){return this.usage=e,this}setInstanced(e){return this.instanced=e,this}}const Ea=(i,e,t,n)=>pe(new Ff(i,e,t,n)),ZT=(i,e,t,n)=>Ea(i,e,t,n).setUsage(Wc),Lh=(i,e,t,n)=>Ea(i,e,t,n).setInstanced(!0),Ph=(i,e,t,n)=>ZT(i,e,t,n).setInstanced(!0);U("toAttribute",i=>Ea(i.value));Q("BufferAttributeNode",Ff);class Vf extends Re{constructor(e){super("void"),this.instanceMesh=e,this.instanceMatrixNode=null,this.instanceColorNode=null}setup(){let e=this.instanceMatrixNode;const t=this.instanceMesh;if(e===null){const c=t.instanceMatrix,l=new AM(c.array,16,1),u=c.usage===Wc?Ph:Lh,h=[u(l,"vec4",16,0),u(l,"vec4",16,4),u(l,"vec4",16,8),u(l,"vec4",16,12)];e=co(...h),this.instanceMatrixNode=e}const n=t.instanceColor;if(n&&this.instanceColorNode===null){const c=new dM(n.array,3),l=n.usage===Wc?Ph:Lh;this.instanceColorNode=D(l(c,"vec3",3,0))}const s=e.mul(pn).xyz,o=oi(e[0].xyz,e[1].xyz,e[2].xyz),r=ai.div(D(o[0].dot(o[0]),o[1].dot(o[1]),o[2].dot(o[2]))),a=o.mul(r).xyz;pn.assign(s),ai.assign(a),this.instanceColorNode!==null&&ui("vec3","vInstanceColor").assign(this.instanceColorNode)}}const KT=k(Vf);Q("InstanceNode",Vf);class Wt extends Re{constructor(e=Wt.LOCAL){super(),this.scope=e}getHash(){return`tangent-${this.scope}`}getNodeType(){return this.scope===Wt.GEOMETRY?"vec4":"vec3"}generate(e){const t=this.scope;let n=null;if(t===Wt.GEOMETRY)n=dn("tangent","vec4"),e.geometry.hasAttribute("tangent")===!1&&e.geometry.computeTangents();else if(t===Wt.LOCAL)n=Ot(ia.xyz);else if(t===Wt.VIEW){const s=Rs.mul(Ee(Aa,0)).xyz;n=vn(Ot(s))}else if(t===Wt.WORLD){const s=Na.transformDirection(Bi);n=vn(Ot(s))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Wt.GEOMETRY="geometry";Wt.LOCAL="local";Wt.VIEW="view";Wt.WORLD="world";const ia=ee(Wt,Wt.GEOMETRY),Aa=ee(Wt,Wt.LOCAL),Na=ee(Wt,Wt.VIEW),JT=ee(Wt,Wt.WORLD),zf=Zo(Na,"TransformedTangentView");vn(zf.transformDirection(Bi));Q("TangentNode",Wt);class Bf extends Re{constructor(e){super("void"),this.batchMesh=e,this.instanceColorNode=null,this.batchingIdNode=null}setup(e){this.batchingIdNode===null&&(this.batchingIdNode=dn("batchId"));const t=this.batchMesh._matricesTexture,n=Ul(Ss(t),0),s=N(C(this.batchingIdNode)).mul(4).toVar(),o=C(s.mod(n)),r=C(s).div(C(n)),a=co(Ss(t,Es(o,r)),Ss(t,Es(o.add(1),r)),Ss(t,Es(o.add(2),r)),Ss(t,Es(o.add(3),r))),c=oi(a[0].xyz,a[1].xyz,a[2].xyz);pn.assign(a.mul(pn));const l=ai.div(D(c[0].dot(c[0]),c[1].dot(c[1]),c[2].dot(c[2]))),u=c.mul(l).xyz;ai.assign(u),e.hasGeometryAttribute("tangent")&&Aa.mulAssign(c)}}const QT=k(Bf);Q("batch",Bf);class Hf extends Re{constructor(e,t=!1){super("void"),this.skinnedMesh=e,this.useReference=t,this.updateType=St.OBJECT,this.skinIndexNode=dn("skinIndex","uvec4"),this.skinWeightNode=dn("skinWeight","vec4");let n,s,o;t?(n=ri("bindMatrix","mat4"),s=ri("bindMatrixInverse","mat4"),o=MT("skeleton.boneMatrices","mat4",e.skeleton.bones.length)):(n=Tt(e.bindMatrix,"mat4"),s=Tt(e.bindMatrixInverse,"mat4"),o=Fl(e.skeleton.boneMatrices,"mat4",e.skeleton.bones.length)),this.bindMatrixNode=n,this.bindMatrixInverseNode=s,this.boneMatricesNode=o}setup(e){const{skinIndexNode:t,skinWeightNode:n,bindMatrixNode:s,bindMatrixInverseNode:o,boneMatricesNode:r}=this,a=r.element(t.x),c=r.element(t.y),l=r.element(t.z),u=r.element(t.w),h=s.mul(pn),d=Dn(a.mul(n.x).mul(h),c.mul(n.y).mul(h),l.mul(n.z).mul(h),u.mul(n.w).mul(h)),m=o.mul(d).xyz;let g=Dn(n.x.mul(a),n.y.mul(c),n.z.mul(l),n.w.mul(u));g=o.mul(g).mul(s);const _=g.transformDirection(ai).xyz;pn.assign(m),ai.assign(_),e.hasGeometryAttribute("tangent")&&Aa.assign(_)}generate(e,t){if(t!=="void")return pn.build(e,t)}update(e){(this.useReference?e.object:this.skinnedMesh).skeleton.update()}}const eE=i=>pe(new Hf(i,!0));Q("SkinningNode",Hf);class Gf extends Re{constructor(e=[]){super(),this.params=e}getVarName(e){return String.fromCharCode("i".charCodeAt()+e)}getProperties(e){const t=e.getNodeProperties(this);if(t.stackNode!==void 0)return t;const n={};for(let s=0,o=this.params.length-1;s<o;s++){const r=this.params[s],a=r.isNode!==!0&&r.name||this.getVarName(s),c=r.isNode!==!0&&r.type||"int";n[a]=Sa(a,c)}return t.returnsNode=this.params[this.params.length-1](n,e.addStack(),e),t.stackNode=e.removeStack(),t}getNodeType(e){const{returnsNode:t}=this.getProperties(e);return t?t.getNodeType(e):"void"}setup(e){this.getProperties(e)}generate(e){const t=this.getProperties(e),n={tempWrite:!1},s=this.params,o=t.stackNode;for(let c=0,l=s.length-1;c<l;c++){const u=s[c];let h=null,d=null,m=null,g=null,_=null,p=null;u.isNode?(g="int",m=this.getVarName(c),h="0",d=u.build(e,g),_="<"):(g=u.type||"int",m=u.name||this.getVarName(c),h=u.start,d=u.end,_=u.condition,p=u.update,typeof h=="number"?h=h.toString():h&&h.isNode&&(h=h.build(e,g)),typeof d=="number"?d=d.toString():d&&d.isNode&&(d=d.build(e,g)),h!==void 0&&d===void 0?(h=h+" - 1",d="0",_=">="):d!==void 0&&h===void 0&&(h="0",_="<"),_===void 0&&(Number(h)>Number(d)?_=">=":_="<"));const f={start:h,end:d,condition:_},E=f.start,y=f.end;let A="",F="",R="";p||(g==="int"||g==="uint"?_.includes("<")?p="++":p="--":_.includes("<")?p="+= 1.":p="-= 1."),A+=e.getVar(g,m)+" = "+E,F+=m+" "+_+" "+y,R+=m+" "+p;const b=`for ( ${A}; ${F}; ${R} )`;e.addFlowCode((c===0?`
`:"")+e.tab+b+` {

`).addFlowTab()}const r=Ui(o,n).build(e,"void"),a=t.returnsNode?t.returnsNode.build(e):"";e.removeFlowTab().addFlowCode(`
`+e.tab+r);for(let c=0,l=this.params.length-1;c<l;c++)e.addFlowCode((c===0?"":e.tab)+`}

`).removeFlowTab();return e.addFlowTab(),a}}const At=(...i)=>pe(new Gf(ao(i,"int"))).append(),tE=()=>Sa("break").append();U("loop",(i,...e)=>Qd(i,At(...e)));Q("LoopNode",Gf);const _c=new WeakMap,Cn=new at,Ih=$(({bufferMap:i,influence:e,stride:t,width:n,depth:s,offset:o})=>{const r=C(fS).mul(t).add(o),a=r.div(n),c=r.sub(a.mul(n));return Ss(i,Es(c,a)).depth(s).mul(e)});function nE(i){const e=i.morphAttributes.position!==void 0,t=i.morphAttributes.normal!==void 0,n=i.morphAttributes.color!==void 0,s=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,o=s!==void 0?s.length:0;let r=_c.get(i);if(r===void 0||r.count!==o){let E=function(){p.dispose(),_c.delete(i),i.removeEventListener("dispose",E)};var a=E;r!==void 0&&r.texture.dispose();const c=i.morphAttributes.position||[],l=i.morphAttributes.normal||[],u=i.morphAttributes.color||[];let h=0;e===!0&&(h=1),t===!0&&(h=2),n===!0&&(h=3);let d=i.attributes.position.count*h,m=1;const g=4096;d>g&&(m=Math.ceil(d/g),d=g);const _=new Float32Array(d*m*4*o),p=new _l(_,d,m,o);p.type=Pi,p.needsUpdate=!0;const f=h*4;for(let y=0;y<o;y++){const A=c[y],F=l[y],R=u[y],b=d*m*4*y;for(let H=0;H<A.count;H++){const T=H*f;e===!0&&(Cn.fromBufferAttribute(A,H),_[b+T+0]=Cn.x,_[b+T+1]=Cn.y,_[b+T+2]=Cn.z,_[b+T+3]=0),t===!0&&(Cn.fromBufferAttribute(F,H),_[b+T+4]=Cn.x,_[b+T+5]=Cn.y,_[b+T+6]=Cn.z,_[b+T+7]=0),n===!0&&(Cn.fromBufferAttribute(R,H),_[b+T+8]=Cn.x,_[b+T+9]=Cn.y,_[b+T+10]=Cn.z,_[b+T+11]=R.itemSize===4?Cn.w:1)}}r={count:o,texture:p,stride:h,size:new Te(d,m)},_c.set(i,r),i.addEventListener("dispose",E)}return r}class kf extends Re{constructor(e){super("void"),this.mesh=e,this.morphBaseInfluence=Tt(1),this.updateType=St.OBJECT}setup(e){const{geometry:t}=e,n=t.morphAttributes.position!==void 0,s=t.morphAttributes.normal!==void 0,o=t.morphAttributes.position||t.morphAttributes.normal||t.morphAttributes.color,r=o!==void 0?o.length:0,{texture:a,stride:c,size:l}=nE(t);n===!0&&pn.mulAssign(this.morphBaseInfluence),s===!0&&ai.mulAssign(this.morphBaseInfluence);const u=C(l.width);At(r,({i:h})=>{const d=N(0).toVar();this.mesh.isInstancedMesh===!0&&this.mesh.morphTexture!==null&&this.mesh.morphTexture!==void 0?d.assign(Ss(this.mesh.morphTexture,Es(C(h).add(1),C(tf))).r):d.assign(ri("morphTargetInfluences","float").element(h).toVar()),n===!0&&pn.addAssign(Ih({bufferMap:a,influence:d,stride:c,width:u,depth:h,offset:C(0)})),s===!0&&ai.addAssign(Ih({bufferMap:a,influence:d,stride:c,width:u,depth:h,offset:C(1)}))})}update(){const e=this.morphBaseInfluence;this.mesh.geometry.morphTargetsRelative?e.value=1:e.value=1-this.mesh.morphTargetInfluences.reduce((t,n)=>t+n,0)}}const iE=k(kf);Q("MorphNode",kf);class Wf extends Re{constructor(){super("vec3")}getHash(){return"reflectVector"}setup(){return Ut.negate().reflect(Ft).transformDirection(Bi)}}const sE=ee(Wf);Q("ReflectVectorNode",Wf);class Xf extends wo{constructor(e,t=null,n=null){super(e,t,n),this.isCubeTextureNode=!0}getInputType(){return"cubeTexture"}getDefaultUV(){return sE}setUpdateMatrix(){}setupUV(e,t){const n=this.value;return e.renderer.coordinateSystem===_o||!n.isRenderTargetTexture?D(t.x.negate(),t.yz):t}generateUV(e,t){return t.build(e,"vec3")}}const qf=k(Xf);U("cubeTexture",qf);Q("CubeTextureNode",Xf);class cr extends Re{constructor(){super("vec3")}generate(){console.warn("Abstract function.")}}Q("LightingNode",cr);let Go=null;class Is extends cr{constructor(e=null){super(),this.updateType=St.FRAME,this.light=e,this.rtt=null,this.shadowNode=null,this.shadowMaskNode=null,this.color=new Fe,this._defaultColorNode=Tt(this.color),this.colorNode=this._defaultColorNode,this.isAnalyticLightNode=!0}getCacheKey(){return super.getCacheKey()+"-"+(this.light.id+"-"+(this.light.castShadow?"1":"0"))}getHash(){return this.light.uuid}setupShadow(e){const{object:t}=e;if(t.receiveShadow===!1)return;let n=this.shadowNode;if(n===null){Go===null&&(Go=e.createNodeMaterial(),Go.fragmentNode=Ee(0,0,0,1),Go.isShadowNodeMaterial=!0);const s=this.light.shadow,o=e.createRenderTarget(s.mapSize.width,s.mapSize.height),r=new or;r.minFilter=fn,r.magFilter=fn,r.image.width=s.mapSize.width,r.image.height=s.mapSize.height,r.compareFunction=md,o.depthTexture=r,s.camera.updateProjectionMatrix();const a=ri("bias","float",s),c=ri("normalBias","float",s),l=t.material.shadowPositionNode||nl;let u=Tt(s.matrix).mul(l.add(Lf.mul(c)));u=u.xyz.div(u.w);const h=u.x.greaterThanEqual(0).and(u.x.lessThanEqual(1)).and(u.y.greaterThanEqual(0)).and(u.y.lessThanEqual(1)).and(u.z.lessThanEqual(1));let d=u.z.add(a);e.renderer.coordinateSystem===_o&&(d=d.mul(2).sub(1)),u=D(u.x,u.y.oneMinus(),d),n=((p,f,E)=>In(p,f).compare(E))(r,u.xy,u.z);const g=In(o.texture,u),_=h.mix(1,n.mix(g.a.mix(1,g),1));this.rtt=o,this.colorNode=this.colorNode.mul(_),this.shadowNode=n,this.shadowMaskNode=_,this.updateBeforeType=St.RENDER}}setup(e){this.light.castShadow?this.setupShadow(e):this.shadowNode!==null&&this.disposeShadow()}updateShadow(e){const{rtt:t,light:n}=this,{renderer:s,scene:o}=e,r=o.overrideMaterial;o.overrideMaterial=Go,t.setSize(n.shadow.mapSize.width,n.shadow.mapSize.height),n.shadow.updateMatrices(n);const a=s.toneMapping,c=s.getRenderTarget(),l=s.getRenderObjectFunction();s.setRenderObjectFunction((u,...h)=>{u.castShadow===!0&&s.renderObject(u,...h)}),s.setRenderTarget(t),s.toneMapping=kn,s.render(o,n.shadow.camera),s.setRenderTarget(c),s.setRenderObjectFunction(l),s.toneMapping=a,o.overrideMaterial=r}disposeShadow(){this.rtt.dispose(),this.shadowNode=null,this.shadowMaskNode=null,this.rtt=null,this.colorNode=this._defaultColorNode}updateBefore(e){const{light:t}=this;t.castShadow&&this.updateShadow(e)}update(){const{light:e}=this;this.color.copy(e.color).multiplyScalar(e.intensity)}}Q("AnalyticLightNode",Is);const sa=new WeakMap,oE=i=>i.sort((e,t)=>e.id-t.id);class rE extends Re{constructor(e=[]){super("vec3"),this.totalDiffuseNode=D().temp("totalDiffuse"),this.totalSpecularNode=D().temp("totalSpecular"),this.outgoingLightNode=D().temp("outgoingLight"),this.lightNodes=e,this._hash=null}get hasLight(){return this.lightNodes.length>0}getHash(){if(this._hash===null){const e=[];for(const t of this.lightNodes)e.push(t.getHash());this._hash="lights-"+e.join(",")}return this._hash}setup(e){const t=e.context,n=t.lightingModel;let s=this.outgoingLightNode;if(n){const{lightNodes:o,totalDiffuseNode:r,totalSpecularNode:a}=this;t.outgoingLight=s;const c=e.addStack();n.start(t,c,e);for(const p of o)p.build(e);n.indirectDiffuse(t,c,e),n.indirectSpecular(t,c,e),n.ambientOcclusion(t,c,e);const{backdrop:l,backdropAlpha:u}=t,{directDiffuse:h,directSpecular:d,indirectDiffuse:m,indirectSpecular:g}=t.reflectedLight;let _=h.add(m);l!==null&&(u!==null?_=D(u.mix(_,l)):_=D(l),t.material.transparent=!0),r.assign(_),a.assign(d.add(g)),s.assign(r.add(a)),n.finish(t,c,e),s=s.bypass(e.removeStack())}return s}_getLightNodeById(e){for(const t of this.lightNodes)if(t.isAnalyticLightNode&&t.light.id===e)return t;return null}fromLights(e=[]){const t=[];e=oE(e);for(const n of e){let s=this._getLightNodeById(n.id);if(s===null){const o=n.constructor,r=sa.has(o)?sa.get(o):Is;s=pe(new r(n))}t.push(s)}return this.lightNodes=t,this._hash=null,this}}const aE=k(rE);function Co(i,e){if(sa.has(i)){console.warn(`Redefinition of light node ${e.type}`);return}if(typeof i!="function")throw new Error(`Light ${i.name} is not a class`);if(typeof e!="function"||!e.type)throw new Error(`Light node ${e.type} is not a class`);sa.set(i,e)}class Yf extends cr{constructor(e=null){super(),this.aoNode=e}setup(e){const n=this.aoNode.x.sub(1).mul(1).add(1);e.context.ambientOcclusion.mulAssign(n)}}Q("AONode",Yf);class jf extends Rl{constructor(e,t=null,n=null,s=null){super(e),this.lightingModel=t,this.backdropNode=n,this.backdropAlphaNode=s,this._context=null}getContext(){const{backdropNode:e,backdropAlphaNode:t}=this,n=D().temp("directDiffuse"),s=D().temp("directSpecular"),o=D().temp("indirectDiffuse"),r=D().temp("indirectSpecular"),a={directDiffuse:n,directSpecular:s,indirectDiffuse:o,indirectSpecular:r};return{radiance:D().temp("radiance"),irradiance:D().temp("irradiance"),iblIrradiance:D().temp("iblIrradiance"),ambientOcclusion:N(1).temp("ambientOcclusion"),reflectedLight:a,backdrop:e,backdropAlpha:t}}setup(e){return this.context=this._context||(this._context=this.getContext()),this.context.lightingModel=this.lightingModel||e.context.lightingModel,super.setup(e)}}const $f=k(jf);U("lightingContext",$f);Q("LightingContextNode",jf);class qt extends Re{constructor(e=qt.LOCAL){super("vec3"),this.scope=e}getHash(){return`bitangent-${this.scope}`}generate(e){const t=this.scope;let n;t===qt.GEOMETRY?n=na.cross(ia):t===qt.LOCAL?n=ai.cross(Aa):t===qt.VIEW?n=rs.cross(Na):t===qt.WORLD&&(n=Lf.cross(JT));const s=n.mul(ia.w).xyz;return vn(Ot(s)).build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}qt.GEOMETRY="geometry";qt.LOCAL="local";qt.VIEW="view";qt.WORLD="world";ee(qt,qt.GEOMETRY);ee(qt,qt.LOCAL);const cE=ee(qt,qt.VIEW);ee(qt,qt.WORLD);const lE=vn(Ft.cross(zf).mul(ia.w));vn(lE.transformDirection(Bi));Q("BitangentNode",qt);const io=oi(Na,cE,rs);Ut.mul(io);const uE=(()=>{let i=lo.cross(Ut);return i=i.cross(lo).normalize(),i=rn(i,Ft,vs.mul(es.oneMinus()).oneMinus().pow2().pow2()).normalize(),i})();class Vl extends Re{constructor(e,t,n=null){super(),this.condNode=e,this.ifNode=t,this.elseNode=n}getNodeType(e){const t=this.ifNode.getNodeType(e);if(this.elseNode!==null){const n=this.elseNode.getNodeType(e);if(e.getTypeLength(n)>e.getTypeLength(t))return n}return t}generate(e,t){const n=this.getNodeType(e),s={tempWrite:!1},o=e.getDataFromNode(this);if(o.nodeProperty!==void 0)return o.nodeProperty;const{ifNode:r,elseNode:a}=this,c=t!=="void",l=c?nn(n).build(e):"";o.nodeProperty=l;const u=Ui(this.condNode).build(e,"bool");e.addFlowCode(`
${e.tab}if ( ${u} ) {

`).addFlowTab();let h=Ui(r,s).build(e,n);if(h&&(c?h=l+" = "+h+";":h="return "+h+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+h+`

`+e.tab+"}"),a!==null){e.addFlowCode(` else {

`).addFlowTab();let d=Ui(a,s).build(e,n);d&&(c?d=l+" = "+d+";":d="return "+d+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+d+`

`+e.tab+`}

`)}else e.addFlowCode(`

`);return e.format(l,n,t)}}const Pn=k(Vl);U("cond",Pn);Q("CondNode",Vl);const Dh=N(1),il=N(-2),Or=N(.8),xc=N(-1),Fr=N(.4),vc=N(2),Vr=N(.305),yc=N(3),Uh=N(.21),hE=N(4),Oh=N(4),dE=N(16),fE=$(([i])=>{const e=D(kt(i)).toVar(),t=N(-1).toVar();return Qe(e.x.greaterThan(e.z),()=>{Qe(e.x.greaterThan(e.y),()=>{t.assign(Pn(i.x.greaterThan(0),0,3))}).else(()=>{t.assign(Pn(i.y.greaterThan(0),1,4))})}).else(()=>{Qe(e.z.greaterThan(e.y),()=>{t.assign(Pn(i.z.greaterThan(0),2,5))}).else(()=>{t.assign(Pn(i.y.greaterThan(0),1,4))})}),t}).setLayout({name:"getFace",type:"float",inputs:[{name:"direction",type:"vec3"}]}),pE=$(([i,e])=>{const t=Ae().toVar();return Qe(e.equal(0),()=>{t.assign(Ae(i.z,i.y).div(kt(i.x)))}).elseif(e.equal(1),()=>{t.assign(Ae(i.x.negate(),i.z.negate()).div(kt(i.y)))}).elseif(e.equal(2),()=>{t.assign(Ae(i.x.negate(),i.y).div(kt(i.z)))}).elseif(e.equal(3),()=>{t.assign(Ae(i.z.negate(),i.y).div(kt(i.x)))}).elseif(e.equal(4),()=>{t.assign(Ae(i.x.negate(),i.z).div(kt(i.y)))}).else(()=>{t.assign(Ae(i.x,i.y).div(kt(i.z)))}),ot(.5,t.add(1))}).setLayout({name:"getUV",type:"vec2",inputs:[{name:"direction",type:"vec3"},{name:"face",type:"float"}]}),mE=$(([i])=>{const e=N(0).toVar();return Qe(i.greaterThanEqual(Or),()=>{e.assign(Dh.sub(i).mul(xc.sub(il)).div(Dh.sub(Or)).add(il))}).elseif(i.greaterThanEqual(Fr),()=>{e.assign(Or.sub(i).mul(vc.sub(xc)).div(Or.sub(Fr)).add(xc))}).elseif(i.greaterThanEqual(Vr),()=>{e.assign(Fr.sub(i).mul(yc.sub(vc)).div(Fr.sub(Vr)).add(vc))}).elseif(i.greaterThanEqual(Uh),()=>{e.assign(Vr.sub(i).mul(hE.sub(yc)).div(Vr.sub(Uh)).add(yc))}).else(()=>{e.assign(N(-2).mul(ya(ot(1.16,i))))}),e}).setLayout({name:"roughnessToMip",type:"float",inputs:[{name:"roughness",type:"float"}]});$(([i,e])=>{const t=i.toVar();t.assign(ot(2,t).sub(1));const n=D(t,1).toVar();return Qe(e.equal(0),()=>{n.assign(n.zyx)}).elseif(e.equal(1),()=>{n.assign(n.xzy),n.xz.mulAssign(-1)}).elseif(e.equal(2),()=>{n.x.mulAssign(-1)}).elseif(e.equal(3),()=>{n.assign(n.zyx),n.xz.mulAssign(-1)}).elseif(e.equal(4),()=>{n.assign(n.xzy),n.xy.mulAssign(-1)}).elseif(e.equal(5),()=>{n.z.mulAssign(-1)}),n}).setLayout({name:"getDirection",type:"vec3",inputs:[{name:"uv",type:"vec2"},{name:"face",type:"float"}]});const gE=$(([i,e,t,n,s,o])=>{const r=N(t),a=D(e),c=So(mE(r),il,o),l=Ma(c),u=No(c),h=D(sl(i,a,u,n,s,o)).toVar();return Qe(l.notEqual(0),()=>{const d=D(sl(i,a,u.add(1),n,s,o)).toVar();h.assign(rn(h,d,l))}),h}),sl=$(([i,e,t,n,s,o])=>{const r=N(t).toVar(),a=D(e),c=N(fE(a)).toVar(),l=N(Un(Oh.sub(r),0)).toVar();r.assign(Un(r,Oh));const u=N(Jc(r)).toVar(),h=Ae(pE(a,c).mul(u.sub(2)).add(1)).toVar();return Qe(c.greaterThan(2),()=>{h.y.addAssign(u),c.subAssign(3)}),h.x.addAssign(c.mul(u)),h.x.addAssign(l.mul(ot(3,dE))),h.y.addAssign(ot(4,Jc(o).sub(u))),h.x.mulAssign(n),h.y.mulAssign(s),i.uv(h).grad(Ae(),Ae())}),Mc=$(({envMap:i,mipInt:e,outputDirection:t,theta:n,axis:s,CUBEUV_TEXEL_WIDTH:o,CUBEUV_TEXEL_HEIGHT:r,CUBEUV_MAX_MIP:a})=>{const c=Zi(n),l=t.mul(c).add(s.cross(t).mul(Ci(n))).add(s.mul(s.dot(t).mul(c.oneMinus())));return sl(i,l,e,o,r,a)});$(({n:i,latitudinal:e,poleAxis:t,outputDirection:n,weights:s,samples:o,dTheta:r,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h})=>{const d=D(Pn(e,t,vf(t,n))).toVar();Qe(pf(d.equals(D(0))),()=>{d.assign(D(n.z,0,n.x.negate()))}),d.assign(vn(d));const m=D().toVar();return m.addAssign(s.element(C(0)).mul(Mc({theta:0,axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h}))),At({start:C(1),end:i},({i:g})=>{Qe(g.greaterThanEqual(o),()=>{tE()});const _=N(r.mul(N(g))).toVar();m.addAssign(s.element(g).mul(Mc({theta:_.mul(-1),axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h}))),m.addAssign(s.element(g).mul(Mc({theta:_,axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h})))}),Ee(m,1)});let oa=null;const Fh=new WeakMap;function _E(i){const e=Math.log2(i)-2,t=1/i;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:t,maxMip:e}}function xE(i){let e=Fh.get(i);if((e!==void 0?e.pmremVersion:-1)!==i.pmremVersion){if(i.isCubeTexture){if(i.source.data.some(n=>n===void 0))throw new Error("PMREMNode: Undefined texture in CubeTexture. Use onLoad callback or async loader");e=oa.fromCubemap(i,e)}else{if(i.image===void 0)throw new Error("PMREMNode: Undefined image in Texture. Use onLoad callback or async loader");e=oa.fromEquirectangular(i,e)}e.pmremVersion=i.pmremVersion,Fh.set(i,e)}return e.texture}class Zf extends Et{constructor(e,t=null,n=null){super("vec3"),this._value=e,this._pmrem=null,this.uvNode=t,this.levelNode=n,this._generator=null,this._texture=In(null),this._width=Tt(0),this._height=Tt(0),this._maxMip=Tt(0),this.updateBeforeType=St.RENDER}set value(e){this._value=e,this._pmrem=null}get value(){return this._value}updateFromTexture(e){const t=_E(e.image.height);this._texture.value=e,this._width.value=t.texelWidth,this._height.value=t.texelHeight,this._maxMip.value=t.maxMip}updateBefore(){let e=this._pmrem;const t=e?e.pmremVersion:-1,n=this._value;t!==n.pmremVersion&&(n.isPMREMTexture===!0?e=n:e=xE(n),this._pmrem=e,this.updateFromTexture(e))}setup(e){oa===null&&(oa=e.createPMREMGenerator()),this.updateBefore(e);let t=this.uvNode;t===null&&e.context.getUV&&(t=e.context.getUV(this));const n=this.value;e.renderer.coordinateSystem===ti&&n.isPMREMTexture!==!0&&n.isRenderTargetTexture===!0&&(t=D(t.x.negate(),t.yz));let s=this.levelNode;return s===null&&e.context.getTextureLevel&&(s=e.context.getTextureLevel(this)),gE(this._texture,t,s,this._width,this._height,this._maxMip)}}const vE=k(Zf);Q("PMREMNode",Zf);const Vh=new WeakMap;class Kf extends cr{constructor(e=null){super(),this.envNode=e}setup(e){let t=this.envNode;if(t.isTextureNode){let d=Vh.get(t.value);d===void 0&&(d=vE(t.value),Vh.set(t.value,d)),t=d}const{material:n}=e,o=n.envMap?ri("envMapIntensity","float",e.material):ri("environmentIntensity","float",e.scene),a=n.useAnisotropy===!0||n.anisotropy>0?uE:Ft,c=Ui(t,zh(es,a)).mul(o),l=Ui(t,yE(Pf)).mul(Math.PI).mul(o),u=Kr(c);e.context.radiance.addAssign(u),e.context.iblIrradiance.addAssign(l);const h=e.context.lightingModel.clearcoatRadiance;if(h){const d=Ui(t,zh(Qr,no)).mul(o),m=Kr(d);h.addAssign(m)}}}const zh=(i,e)=>{let t=null;return{getUV:()=>(t===null&&(t=Ut.negate().reflect(e),t=i.mul(i).mix(t,e).normalize(),t=t.transformDirection(Bi)),t),getTextureLevel:()=>i}},yE=i=>({getUV:()=>i,getTextureLevel:()=>N(1)});Q("EnvironmentNode",Kf);class Jf extends cr{constructor(e){super(),this.node=e}setup(e){e.context.irradiance.addAssign(this.node)}}Q("IrradianceNode",Jf);let Sc,Tc;class ct extends Re{constructor(e){super(),this.scope=e,this.isViewportNode=!0}getNodeType(){return this.scope===ct.VIEWPORT?"vec4":this.scope===ct.COORDINATE?"vec3":"vec2"}getUpdateType(){let e=St.NONE;return(this.scope===ct.RESOLUTION||this.scope===ct.VIEWPORT)&&(e=St.FRAME),this.updateType=e,e}update({renderer:e}){this.scope===ct.VIEWPORT?e.getViewport(Tc):e.getDrawingBufferSize(Sc)}setup(){const e=this.scope;let t=null;if(e===ct.RESOLUTION)t=Tt(Sc||(Sc=new Te));else if(e===ct.VIEWPORT)t=Tt(Tc||(Tc=new at));else{t=ME.div(ol);let n=t.x,s=t.y;/bottom/i.test(e)&&(s=s.oneMinus()),/right/i.test(e)&&(n=n.oneMinus()),t=Ae(n,s)}return t}generate(e){if(this.scope===ct.COORDINATE){let t=e.getFragCoord();if(e.isFlipY()){const n=e.getNodeProperties(ol).outputNode.build(e);t=`${e.getType("vec3")}( ${t}.x, ${n}.y - ${t}.y, ${t}.z )`}return t}return super.generate(e)}}ct.COORDINATE="coordinate";ct.RESOLUTION="resolution";ct.VIEWPORT="viewport";ct.TOP_LEFT="topLeft";ct.BOTTOM_LEFT="bottomLeft";ct.TOP_RIGHT="topRight";ct.BOTTOM_RIGHT="bottomRight";const ME=ee(ct,ct.COORDINATE),ol=ee(ct,ct.RESOLUTION),ho=ee(ct,ct.VIEWPORT),Qo=ee(ct,ct.TOP_LEFT);ee(ct,ct.BOTTOM_LEFT);ee(ct,ct.TOP_RIGHT);ee(ct,ct.BOTTOM_RIGHT);Q("ViewportNode",ct);const ko=new Te;class lr extends wo{constructor(e=Qo,t=null,n=null){n===null&&(n=new Fd,n.minFilter=Ji),super(n,e,t),this.generateMipmaps=!1,this.isOutputTextureNode=!0,this.updateBeforeType=St.FRAME}updateBefore(e){const t=e.renderer;t.getDrawingBufferSize(ko);const n=this.value;(n.image.width!==ko.width||n.image.height!==ko.height)&&(n.image.width=ko.width,n.image.height=ko.height,n.needsUpdate=!0);const s=n.generateMipmaps;n.generateMipmaps=this.generateMipmaps,t.copyFramebufferToTexture(n),n.generateMipmaps=s}clone(){const e=new this.constructor(this.uvNode,this.levelNode,this.value);return e.generateMipmaps=this.generateMipmaps,e}}const SE=k(lr),Qf=k(lr,null,null,{generateMipmaps:!0});U("viewportTexture",SE);U("viewportMipTexture",Qf);Q("ViewportTextureNode",lr);let Ec=null;class ep extends lr{constructor(e=Qo,t=null){Ec===null&&(Ec=new or),super(e,t,Ec)}}const tp=k(ep);U("viewportDepthTexture",tp);Q("ViewportDepthTextureNode",ep);class sn extends Re{constructor(e,t=null){super("float"),this.scope=e,this.valueNode=t,this.isViewportDepthNode=!0}generate(e){const{scope:t}=this;return t===sn.DEPTH_PIXEL?e.getFragDepth():super.generate(e)}setup(){const{scope:e}=this;let t=null;if(e===sn.DEPTH)t=rl(Ln.z,pc,mc);else if(e===sn.DEPTH_TEXTURE){const n=this.valueNode||tp(),s=np(n,pc,mc);t=rl(s,pc,mc)}else e===sn.DEPTH_PIXEL&&this.valueNode!==null&&(t=ip().assign(this.valueNode));return t}}const rl=(i,e,t)=>i.add(e).div(e.sub(t)),np=(i,e,t)=>e.mul(t).div(t.sub(e).mul(i).sub(t));sn.DEPTH="depth";sn.DEPTH_TEXTURE="depthTexture";sn.DEPTH_PIXEL="depthPixel";const ip=k(sn,sn.DEPTH_PIXEL);ee(sn,sn.DEPTH);k(sn,sn.DEPTH_TEXTURE);const sp=ee(sn,sn.DEPTH_PIXEL);sp.assign=i=>ip(i);Q("ViewportDepthNode",sn);class as extends Re{constructor(e=as.DEFAULT){super(),this.scope=e}setup(e){super.setup(e);const t=e.clippingContext,{localClipIntersection:n,localClippingCount:s,globalClippingCount:o}=t,r=o+s,a=n?r-s:r;return this.scope===as.ALPHA_TO_COVERAGE?this.setupAlphaToCoverage(t.planes,r,a):this.setupDefault(t.planes,r,a)}setupAlphaToCoverage(e,t,n){return $(()=>{const s=Qc(e),o=nn("float","distanceToPlane"),r=nn("float","distanceToGradient"),a=nn("float","clipOpacity");a.assign(1);let c;if(At(n,({i:l})=>{c=s.element(l),o.assign(Ln.dot(c.xyz).negate().add(c.w)),r.assign(o.fwidth().div(2)),a.mulAssign(Fi(r.negate(),r,o)),a.equal(0).discard()}),n<t){const l=nn("float","unionclipOpacity");l.assign(1),At({start:n,end:t},({i:u})=>{c=s.element(u),o.assign(Ln.dot(c.xyz).negate().add(c.w)),r.assign(o.fwidth().div(2)),l.mulAssign(Fi(r.negate(),r,o).oneMinus())}),a.mulAssign(l.oneMinus())}Dt.a.mulAssign(a),Dt.a.equal(0).discard()})()}setupDefault(e,t,n){return $(()=>{const s=Qc(e);let o;if(At(n,({i:r})=>{o=s.element(r),Ln.dot(o.xyz).greaterThan(o.w).discard()}),n<t){const r=nn("bool","clipped");r.assign(!0),At({start:n,end:t},({i:a})=>{o=s.element(a),r.assign(Ln.dot(o.xyz).greaterThan(o.w).and(r))}),r.discard()}})()}}as.ALPHA_TO_COVERAGE="alphaToCoverage";as.DEFAULT="default";const TE=()=>pe(new as),EE=()=>pe(new as(as.ALPHA_TO_COVERAGE));class op extends Re{constructor(){super("bool"),this.isFrontFacingNode=!0}generate(e){const{renderer:t,material:n}=e;return t.coordinateSystem===ti&&n.side===_n?"false":e.getFrontFacing()}}const AE=ee(op),ra=N(AE).mul(2).sub(1);Q("FrontFacingNode",op);const al=new Map;class Fn extends Oi{constructor(){super(),this.isNodeMaterial=!0,this.type=this.constructor.type,this.forceSinglePass=!1,this.fog=!0,this.lights=!0,this.normals=!0,this.lightsNode=null,this.envNode=null,this.aoNode=null,this.colorNode=null,this.normalNode=null,this.opacityNode=null,this.backdropNode=null,this.backdropAlphaNode=null,this.alphaTestNode=null,this.positionNode=null,this.depthNode=null,this.shadowNode=null,this.shadowPositionNode=null,this.outputNode=null,this.fragmentNode=null,this.vertexNode=null}customProgramCacheKey(){return this.type+Hd(this)}build(e){this.setup(e)}setup(e){e.addStack(),e.stack.outputNode=this.vertexNode||this.setupPosition(e),e.addFlow("vertex",e.removeStack()),e.addStack();let t;const n=this.setupClipping(e);if(this.depthWrite===!0&&this.setupDepth(e),this.fragmentNode===null){this.normals===!0&&this.setupNormal(e),this.setupDiffuseColor(e),this.setupVariants(e);const s=this.setupLighting(e);n!==null&&e.stack.add(n);const o=Ee(s,Dt.a).max(0);t=this.setupOutput(e,o),pS.assign(t),this.outputNode!==null&&(t=this.outputNode)}else{let s=this.fragmentNode;s.isOutputStructNode!==!0&&(s=Ee(s)),t=this.setupOutput(e,s)}e.stack.outputNode=t,e.addFlow("fragment",e.removeStack())}setupClipping(e){if(e.clippingContext===null)return null;const{globalClippingCount:t,localClippingCount:n}=e.clippingContext;let s=null;return(t||n)&&(this.alphaToCoverage?s=EE():e.stack.add(TE())),s}setupDepth(e){const{renderer:t}=e;let n=this.depthNode;n===null&&t.logarithmicDepthBuffer===!0&&(n=Ch().w.add(1).log2().mul(ST).mul(.5)),n!==null&&sp.assign(n).append()}setupPosition(e){const{object:t}=e,n=t.geometry;e.addStack(),(n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color)&&iE(t).append(),t.isSkinnedMesh===!0&&eE(t).append(),t.isBatchedMesh&&QT(t).append(),t.instanceMatrix&&t.instanceMatrix.isInstancedBufferAttribute===!0&&e.isAvailable("instance")===!0&&KT(t).append(),this.positionNode!==null&&pn.assign(this.positionNode);const s=Ch();return e.context.vertex=e.removeStack(),e.context.mvp=s,s}setupDiffuseColor({object:e,geometry:t}){let n=this.colorNode?Ee(this.colorNode):Jo;this.vertexColors===!0&&t.hasAttribute("color")&&(n=Ee(n.xyz.mul(dn("color","vec3")),n.a)),e.instanceColor&&(n=ui("vec3","vInstanceColor").mul(n)),Dt.assign(n);const s=this.opacityNode?N(this.opacityNode):If;if(Dt.a.assign(Dt.a.mul(s)),this.alphaTestNode!==null||this.alphaTest>0){const o=this.alphaTestNode!==null?N(this.alphaTestNode):ET;Dt.a.lessThanEqual(o).discard()}}setupVariants(){}setupNormal(){if(this.flatShading===!0){const e=Ln.dFdx().cross(Ln.dFdy()).normalize();Ft.assign(e.mul(ra))}else{const e=this.normalNode?D(this.normalNode):PT;Ft.assign(e.mul(ra))}}getEnvNode(e){let t=null;return this.envNode?t=this.envNode:this.envMap?t=this.envMap.isCubeTexture?qf(this.envMap):In(this.envMap):e.environmentNode&&(t=e.environmentNode),t}setupLights(e){const t=this.getEnvNode(e),n=[];if(t&&n.push(new Kf(t)),e.material.lightMap&&n.push(new Jf(wf("lightMap","texture"))),this.aoNode!==null||e.material.aoMap){const o=this.aoNode!==null?this.aoNode:In(e.material.aoMap);n.push(new Yf(o))}let s=this.lightsNode||e.lightsNode;return n.length>0&&(s=aE([...s.lightNodes,...n])),s}setupLightingModel(){}setupLighting(e){const{material:t}=e,{backdropNode:n,backdropAlphaNode:s,emissiveNode:o}=this,a=this.lights===!0||this.lightsNode!==null?this.setupLights(e):null;let c=Dt.rgb;if(a&&a.hasLight!==!1){const l=this.setupLightingModel(e);c=$f(a,l,n,s)}else n!==null&&(c=D(s!==null?rn(c,n,s):n));return(o&&o.isNode===!0||t.emissive&&t.emissive.isColor===!0)&&(c=c.add(D(o||NT))),c}setupOutput(e,t){const n=e.fogNode;return n&&(t=Ee(n.mix(t.rgb,n.colorNode),t.a)),t}setDefaultValues(e){for(const n in e){const s=e[n];this[n]===void 0&&(this[n]=s,s&&s.clone&&(this[n]=s.clone()))}Object.assign(this.defines,e.defines);const t=Object.getOwnPropertyDescriptors(e.constructor.prototype);for(const n in t)Object.getOwnPropertyDescriptor(this.constructor.prototype,n)===void 0&&t[n].get!==void 0&&Object.defineProperty(this.constructor.prototype,n,t[n])}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{},nodes:{}});const n=On.prototype.toJSON.call(this,e),s=Zr(this);n.inputNodes={};for(const{property:r,childNode:a}of s)n.inputNodes[r]=a.toJSON(e).uuid;function o(r){const a=[];for(const c in r){const l=r[c];delete l.metadata,a.push(l)}return a}if(t){const r=o(e.textures),a=o(e.images),c=o(e.nodes);r.length>0&&(n.textures=r),a.length>0&&(n.images=a),c.length>0&&(n.nodes=c)}return n}copy(e){return this.lightsNode=e.lightsNode,this.envNode=e.envNode,this.colorNode=e.colorNode,this.normalNode=e.normalNode,this.opacityNode=e.opacityNode,this.backdropNode=e.backdropNode,this.backdropAlphaNode=e.backdropAlphaNode,this.alphaTestNode=e.alphaTestNode,this.positionNode=e.positionNode,this.depthNode=e.depthNode,this.shadowNode=e.shadowNode,this.shadowPositionNode=e.shadowPositionNode,this.outputNode=e.outputNode,this.fragmentNode=e.fragmentNode,this.vertexNode=e.vertexNode,super.copy(e)}static fromMaterial(e){if(e.isNodeMaterial===!0)return e;const t=e.type.replace("Material","NodeMaterial"),n=NE(t);if(n===void 0)throw new Error(`NodeMaterial: Material "${e.type}" is not compatible.`);for(const s in e)n[s]=e[s];return n}}function yn(i,e){if(typeof e!="function"||!i)throw new Error(`Node material ${i} is not a class`);if(al.has(i)){console.warn(`Redefinition of node material ${i}`);return}al.set(i,e),e.type=i}function NE(i){const e=al.get(i);if(e!==void 0)return new e}yn("NodeMaterial",Fn);class rp extends Re{constructor(e=null){super(),this.nodes=[],this.outputNode=null,this.parent=e,this._currentCond=null,this.isStackNode=!0}getNodeType(e){return this.outputNode?this.outputNode.getNodeType(e):"void"}add(e){return this.nodes.push(e),this}if(e,t){const n=new Yo(t);return this._currentCond=Pn(e,n),this.add(this._currentCond)}elseif(e,t){const n=new Yo(t),s=Pn(e,n);return this._currentCond.elseNode=s,this._currentCond=s,this}else(e){return this._currentCond.elseNode=new Yo(e),this}build(e,...t){const n=BM();Eh(this);for(const s of this.nodes)s.build(e,"void");return Eh(n),this.outputNode?this.outputNode.build(e,...t):super.build(e,...t)}}k(rp);Q("StackNode",rp);class ap extends Et{constructor(e=$T){super("vec2"),this.dirNode=e}setup(){const e=this.dirNode,t=e.z.atan2(e.x).mul(1/(Math.PI*2)).add(.5),n=e.y.clamp(-1,1).asin().mul(1/Math.PI).add(.5);return Ae(t,n)}}k(ap);Q("EquirectUVNode",ap);class cp extends Re{constructor(e){super(),this.types=e,this.isStructTypeNode=!0}getMemberTypes(){return this.types}}Q("StructTypeNode",cp);class lp extends Re{constructor(...e){super(),this.members=e,this.isOutputStructNode=!0}setup(e){super.setup(e);const t=this.members,n=[];for(let s=0;s<t.length;s++)n.push(t[s].getNodeType(e));this.nodeType=e.getStructTypeFromNode(new cp(n)).name}generate(e,t){const n=e.getVarFromNode(this);n.isOutputStructVar=!0;const s=e.getPropertyName(n),o=this.members,r=s!==""?s+".":"";for(let a=0;a<o.length;a++){const c=o[a].build(e,t);e.addLineFlowCode(`${r}m${a} = ${c}`)}return s}}k(lp);Q("OutputStructNode",lp);class up extends Re{constructor(e){super(),this.seedNode=e}setup(){const e=this.seedNode.uint().mul(747796405).add(2891336453),t=e.shiftRight(e.shiftRight(28).add(4)).bitXor(e).mul(277803737);return t.shiftRight(22).bitXor(t).float().mul(1/2**32)}}const bE=k(up);U("hash",bE);Q("HashNode",up);const cl=(i,e)=>_i(ot(4,i.mul(zt(1,i))),e),wE=(i,e)=>i.lessThan(.5)?cl(i.mul(2),e).div(2):zt(1,cl(ot(zt(1,i),2),e).div(2)),RE=(i,e,t)=>_i(os(_i(i,e),Dn(_i(i,e),_i(zt(1,i),t))),1/e),CE=(i,e)=>Ci(Ah.mul(e.mul(i).sub(1))).div(Ah.mul(e.mul(i).sub(1)));U("parabola",cl);U("gain",wE);U("pcurve",RE);U("sinc",CE);const pi=$(([i])=>i.fract().sub(.5).abs()),hp=$(([i])=>D(pi(i.z.add(pi(i.y.mul(1)))),pi(i.z.add(pi(i.x.mul(1)))),pi(i.y.add(pi(i.x.mul(1)))))),LE=$(([i,e,t])=>{const n=D(i).toVar(),s=N(1.4).toVar(),o=N(0).toVar(),r=D(n).toVar();return At({start:N(0),end:N(3),type:"float",condition:"<="},()=>{const a=D(hp(r.mul(2))).toVar();n.addAssign(a.add(t.mul(N(.1).mul(e)))),r.mulAssign(1.8),s.mulAssign(1.5),n.mulAssign(1.2);const c=N(pi(n.z.add(pi(n.x.add(pi(n.y)))))).toVar();o.addAssign(c.div(s)),r.addAssign(.14)}),o});pi.setLayout({name:"tri",type:"float",inputs:[{name:"x",type:"float"}]});hp.setLayout({name:"tri3",type:"vec3",inputs:[{name:"p",type:"vec3"}]});LE.setLayout({name:"triNoise3D",type:"float",inputs:[{name:"p",type:"vec3"},{name:"spd",type:"float"},{name:"time",type:"float"}]});let Ac;class dp extends Vl{constructor(e){Ac=Ac||Sa("discard"),super(e,Ac)}}const PE=k(dp),IE=i=>PE(i).append();U("discard",IE);Q("DiscardNode",dp);class fp extends Re{constructor(e=[],...t){super(),this.functionNodes=e,this.parametersNodes=t,this._candidateFnCall=null}getNodeType(){return this.functionNodes[0].shaderNode.layout.type}setup(e){const t=this.parametersNodes;let n=this._candidateFnCall;if(n===null){let s=null,o=-1;for(const r of this.functionNodes){const c=r.shaderNode.layout;if(c===null)throw new Error("FunctionOverloadingNode: FunctionNode must be a layout.");const l=c.inputs;if(t.length===l.length){let u=0;for(let h=0;h<t.length;h++){const d=t[h],m=l[h];d.getNodeType(e)===m.type?u++:u=0}u>o&&(s=r,o=u)}}this._candidateFnCall=n=s(...t)}return n}}const DE=k(fp),Yn=i=>(...e)=>DE(i,...e);Q("FunctionOverloadingNode",fp);class pp extends Et{constructor(){super("vec2")}setup(){const e=D(Ut.z,0,Ut.x.negate()).normalize(),t=Ut.cross(e);return Ae(e.dot(Ft),t.dot(Ft)).mul(.495).add(.5)}}ee(pp);Q("MatcapUVNode",pp);class En extends Ls{constructor(e=En.LOCAL,t=1,n=0){super(n),this.scope=e,this.scale=t,this.updateType=St.FRAME}update(e){const t=this.scope,n=this.scale;t===En.LOCAL?this.value+=e.deltaTime*n:t===En.DELTA?this.value=e.deltaTime*n:t===En.FRAME?this.value=e.frameId:this.value=e.time*n}serialize(e){super.serialize(e),e.scope=this.scope,e.scale=this.scale}deserialize(e){super.deserialize(e),this.scope=e.scope,this.scale=e.scale}}En.LOCAL="local";En.GLOBAL="global";En.DELTA="delta";En.FRAME="frame";const UE=(i,e=0)=>pe(new En(En.LOCAL,i,e));ee(En,En.FRAME).uint();Q("TimerNode",En);class Yt extends Re{constructor(e=Yt.SINE,t=UE()){super(),this.method=e,this.timeNode=t}getNodeType(e){return this.timeNode.getNodeType(e)}setup(){const e=this.method,t=pe(this.timeNode);let n=null;return e===Yt.SINE?n=t.add(.75).mul(Math.PI*2).sin().mul(.5).add(.5):e===Yt.SQUARE?n=t.fract().round():e===Yt.TRIANGLE?n=t.add(.5).fract().mul(2).sub(1).abs():e===Yt.SAWTOOTH&&(n=t.fract()),n}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}Yt.SINE="sine";Yt.SQUARE="square";Yt.TRIANGLE="triangle";Yt.SAWTOOTH="sawtooth";k(Yt,Yt.SINE);k(Yt,Yt.SQUARE);k(Yt,Yt.TRIANGLE);k(Yt,Yt.SAWTOOTH);Q("OscNode",Yt);class vi extends Et{constructor(e,t){super(),this.scope=e,this.node=t}getNodeType(e){return this.node.getNodeType(e)}setup(){const{scope:e,node:t}=this;let n=null;return e===vi.DIRECTION_TO_COLOR?n=t.mul(.5).add(.5):e===vi.COLOR_TO_DIRECTION&&(n=t.mul(2).sub(1)),n}}vi.DIRECTION_TO_COLOR="directionToColor";vi.COLOR_TO_DIRECTION="colorToDirection";const mp=k(vi,vi.DIRECTION_TO_COLOR),OE=k(vi,vi.COLOR_TO_DIRECTION);U("directionToColor",mp);U("colorToDirection",OE);Q("PackingNode",vi);class zl extends Re{constructor(e,t,n,s=N(0),o=N(1)){super(),this.node=e,this.inLowNode=t,this.inHighNode=n,this.outLowNode=s,this.outHighNode=o,this.doClamp=!0}setup(){const{node:e,inLowNode:t,inHighNode:n,outLowNode:s,outHighNode:o,doClamp:r}=this;let a=e.sub(t).div(n.sub(t));return r===!0&&(a=a.clamp()),a.mul(o.sub(s)).add(s)}}const FE=k(zl,null,null,{doClamp:!1}),VE=k(zl);U("remap",FE);U("remapClamp",VE);Q("RemapNode",zl);class gp extends Et{constructor(e,t,n=Ae(.5)){super("vec2"),this.uvNode=e,this.rotationNode=t,this.centerNode=n}setup(){const{uvNode:e,rotationNode:t,centerNode:n}=this;return e.sub(n).rotate(t).add(n)}}const zE=k(gp);U("rotateUV",zE);Q("RotateUVNode",gp);class _p extends Et{constructor(e,t){super(),this.positionNode=e,this.rotationNode=t}getNodeType(e){return this.positionNode.getNodeType(e)}setup(e){const{rotationNode:t,positionNode:n}=this;if(this.getNodeType(e)==="vec2"){const o=t.cos(),r=t.sin();return wl(o,r,r.negate(),o).mul(n)}else{const o=t,r=co(Ee(1,0,0,0),Ee(0,Zi(o.x),Ci(o.x).negate(),0),Ee(0,Ci(o.x),Zi(o.x),0),Ee(0,0,0,1)),a=co(Ee(Zi(o.y),0,Ci(o.y),0),Ee(0,1,0,0),Ee(Ci(o.y).negate(),0,Zi(o.y),0),Ee(0,0,0,1)),c=co(Ee(Zi(o.z),Ci(o.z).negate(),0,0),Ee(Ci(o.z),Zi(o.z),0,0),Ee(0,0,1,0),Ee(0,0,0,1));return r.mul(a).mul(c).mul(Ee(n,1)).xyz}}}const BE=k(_p);U("rotate",BE);Q("RotateNode",_p);class xp extends Re{constructor(e,t=yi(),n=N(0)){super("vec2"),this.countNode=e,this.uvNode=t,this.frameNode=n}setup(){const{frameNode:e,uvNode:t,countNode:n}=this,{width:s,height:o}=n,r=e.mod(s.mul(o)).floor(),a=r.mod(s),c=o.sub(r.add(1).div(s).ceil()),l=n.reciprocal(),u=Ae(a,c);return t.add(u).mul(l)}}k(xp);Q("SpriteSheetUVNode",xp);class vp extends Ao{constructor(e,t){super(e,t),this.isStorageArrayElementNode=!0}set storageBufferNode(e){this.node=e}get storageBufferNode(){return this.node}setup(e){return e.isAvailable("storageBuffer")===!1&&!this.node.instanceIndex&&this.node.bufferObject===!0&&e.setupPBO(this.node),super.setup(e)}generate(e,t){let n;const s=e.context.assign;if(e.isAvailable("storageBuffer")===!1){const{node:o}=this;!o.instanceIndex&&this.node.bufferObject===!0&&s!==!0?n=e.generatePBO(this):n=o.build(e)}else n=super.generate(e);if(s!==!0){const o=this.getNodeType(e);n=e.format(n,o,t)}return n}}const yp=k(vp);U("storageElement",yp);Q("StorageArrayElementNode",vp);class Mp extends Re{constructor(e,t=null,n=null,s=N(1),o=pn,r=ai){super("vec4"),this.textureXNode=e,this.textureYNode=t,this.textureZNode=n,this.scaleNode=s,this.positionNode=o,this.normalNode=r}setup(){const{textureXNode:e,textureYNode:t,textureZNode:n,scaleNode:s,positionNode:o,normalNode:r}=this;let a=r.abs().normalize();a=a.div(a.dot(D(1)));const c=o.yz.mul(s),l=o.zx.mul(s),u=o.xy.mul(s),h=e.value,d=t!==null?t.value:h,m=n!==null?n.value:h,g=In(h,c).mul(a.x),_=In(d,l).mul(a.y),p=In(m,u).mul(a.z);return Dn(g,_,p)}}const HE=k(Mp),GE=(...i)=>HE(...i);U("triplanarTexture",GE);Q("TriplanarTexturesNode",Mp);new Ri;new L;new L;new L;new Lt;new L(0,0,-1);new at;new L;new L;new at;new Te;new ss;Ae(Qo.x.oneMinus(),Qo.y);class kE extends va{constructor(e=0){super(null,"vec4"),this.isVertexColorNode=!0,this.index=e}getAttributeName(){const e=this.index;return"color"+(e>0?e:"")}generate(e){const t=this.getAttributeName(e),n=e.hasGeometryAttribute(t);let s;return n===!0?s=super.generate(e):s=e.generateConst(this.nodeType,new at(1,1,1,1)),s}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}Q("VertexColorNode",kE);class Sp extends Ro{constructor(e,t,n=null){super(e,t,n),this.renderer=n}updateReference(e){return this.reference=this.renderer!==null?this.renderer:e.renderer,this.reference}}const WE=(i,e,t)=>pe(new Sp(i,e,t));Q("RendererReferenceNode",Sp);const ba=1/6,Tp=i=>ot(ba,ot(i,ot(i,i.negate().add(3)).sub(3)).add(1)),ll=i=>ot(ba,ot(i,ot(i,ot(3,i).sub(6))).add(4)),Ep=i=>ot(ba,ot(i,ot(i,ot(-3,i).add(3)).add(3)).add(1)),ul=i=>ot(ba,_i(i,3)),Bh=i=>Tp(i).add(ll(i)),Hh=i=>Ep(i).add(ul(i)),Gh=i=>Dn(-1,ll(i).div(Tp(i).add(ll(i)))),kh=i=>Dn(1,ul(i).div(Ep(i).add(ul(i)))),Wh=(i,e,t)=>{const n=i.uvNode,s=ot(n,e.zw).add(.5),o=No(s),r=Ma(s),a=Bh(r.x),c=Hh(r.x),l=Gh(r.x),u=kh(r.x),h=Gh(r.y),d=kh(r.y),m=Ae(o.x.add(l),o.y.add(h)).sub(.5).mul(e.xy),g=Ae(o.x.add(u),o.y.add(h)).sub(.5).mul(e.xy),_=Ae(o.x.add(l),o.y.add(d)).sub(.5).mul(e.xy),p=Ae(o.x.add(u),o.y.add(d)).sub(.5).mul(e.xy),f=Bh(r.y).mul(Dn(a.mul(i.uv(m).level(t)),c.mul(i.uv(g).level(t)))),E=Hh(r.y).mul(Dn(a.mul(i.uv(_).level(t)),c.mul(i.uv(p).level(t))));return f.add(E)},XE=(i,e)=>{const t=Ae(i.size(C(e))),n=Ae(i.size(C(e.add(1)))),s=os(1,t),o=os(1,n),r=Wh(i,Ee(s,t),No(e)),a=Wh(i,Ee(o,n),_f(e));return Ma(e).mix(r,a)};class Ap extends Et{constructor(e,t=N(3)){super("vec4"),this.textureNode=e,this.blurNode=t}setup(){return XE(this.textureNode,this.blurNode)}}const qE=k(Ap);U("bicubic",qE);Q("TextureBicubicNode",Ap);class Np extends Re{constructor(){super("vec2"),this.isPointUVNode=!0}generate(){return"vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y )"}}ee(Np);Q("PointUVNode",Np);class ii extends Re{constructor(e=ii.BACKGROUND_BLURRINESS,t=null){super(),this.scope=e,this.scene=t}setup(e){const t=this.scope,n=this.scene!==null?this.scene:e.scene;let s;return t===ii.BACKGROUND_BLURRINESS?s=ri("backgroundBlurriness","float",n):t===ii.BACKGROUND_INTENSITY?s=ri("backgroundIntensity","float",n):console.error("THREE.SceneNode: Unknown scope:",t),s}}ii.BACKGROUND_BLURRINESS="backgroundBlurriness";ii.BACKGROUND_INTENSITY="backgroundIntensity";ee(ii,ii.BACKGROUND_BLURRINESS);ee(ii,ii.BACKGROUND_INTENSITY);Q("SceneNode",ii);class YE extends Ta{constructor(e,t,n=0){super(e,t,n),this.isStorageBufferNode=!0,this.bufferObject=!1,this._attribute=null,this._varying=null,e.isStorageBufferAttribute!==!0&&e.isStorageInstancedBufferAttribute!==!0&&(e.isInstancedBufferAttribute?e.isStorageInstancedBufferAttribute=!0:e.isStorageBufferAttribute=!0)}getInputType(){return"storageBuffer"}element(e){return yp(this,e)}setBufferObject(e){return this.bufferObject=e,this}generate(e){if(e.isAvailable("storageBuffer"))return super.generate(e);const t=this.getNodeType(e);this._attribute===null&&(this._attribute=Ea(this.value),this._varying=Ot(this._attribute));const n=this._varying.build(e,t);return e.registerTransform(n,this._attribute),n}}Q("StorageBufferNode",YE);class bp extends wo{constructor(e,t,n=null){super(e,t),this.storeNode=n,this.isStoreTextureNode=!0}getInputType(){return"storageTexture"}setup(e){super.setup(e);const t=e.getNodeProperties(this);t.storeNode=this.storeNode}generate(e,t){let n;return this.storeNode!==null?n=this.generateStore(e):n=super.generate(e,t),n}generateStore(e){const t=e.getNodeProperties(this),{uvNode:n,storeNode:s}=t,o=super.generate(e,"property"),r=n.build(e,"uvec2"),a=s.build(e,"vec4"),c=e.generateTextureStore(e,o,r,a);e.addLineFlowCode(c)}}k(bp);Q("TextureStoreNode",bp);class jE extends Ro{constructor(e,t,n=null){super(e,t,n),this.userData=n}update(e){this.reference=this.userData!==null?this.userData:e.object.userData,super.update(e)}}Q("UserDataNode",jE);const $E=$(({base:i,blend:e})=>{const t=n=>e[n].lessThan(ff).cond(e[n],i[n].oneMinus().div(e[n]).oneMinus().max(0));return D(t("x"),t("y"),t("z"))}).setLayout({name:"burnColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),ZE=$(({base:i,blend:e})=>{const t=n=>e[n].equal(1).cond(e[n],i[n].div(e[n].oneMinus()).max(0));return D(t("x"),t("y"),t("z"))}).setLayout({name:"dodgeColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),KE=$(({base:i,blend:e})=>{const t=n=>i[n].oneMinus().mul(e[n].oneMinus()).oneMinus();return D(t("x"),t("y"),t("z"))}).setLayout({name:"screenColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),JE=$(({base:i,blend:e})=>{const t=n=>i[n].lessThan(.5).cond(i[n].mul(e[n],2),i[n].oneMinus().mul(e[n].oneMinus()).oneMinus());return D(t("x"),t("y"),t("z"))}).setLayout({name:"overlayColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]});class en extends Et{constructor(e,t,n){super(),this.blendMode=e,this.baseNode=t,this.blendNode=n}setup(){const{blendMode:e,baseNode:t,blendNode:n}=this,s={base:t,blend:n};let o=null;return e===en.BURN?o=$E(s):e===en.DODGE?o=ZE(s):e===en.SCREEN?o=KE(s):e===en.OVERLAY&&(o=JE(s)),o}}en.BURN="burn";en.DODGE="dodge";en.SCREEN="screen";en.OVERLAY="overlay";const QE=k(en,en.BURN),eA=k(en,en.DODGE),tA=k(en,en.OVERLAY),nA=k(en,en.SCREEN);U("burn",QE);U("dodge",eA);U("overlay",tA);U("screen",nA);Q("BlendModeNode",en);const iA=$(({textureNode:i,bumpScale:e})=>{const t=s=>i.cache().context({getUV:o=>s(o.uvNode||yi()),forceUVContext:!0}),n=N(t(s=>s));return Ae(N(t(s=>s.add(s.dFdx()))).sub(n),N(t(s=>s.add(s.dFdy()))).sub(n)).mul(e)}),sA=$(i=>{const{surf_pos:e,surf_norm:t,dHdxy:n}=i,s=e.dFdx().normalize(),o=e.dFdy().normalize(),r=t,a=o.cross(r),c=r.cross(s),l=s.dot(a).mul(ra),u=l.sign().mul(n.x.mul(a).add(n.y.mul(c)));return l.abs().mul(t).sub(u).normalize()});class wp extends Et{constructor(e,t=null){super("vec3"),this.textureNode=e,this.scaleNode=t}setup(){const e=this.scaleNode!==null?this.scaleNode:1,t=iA({textureNode:this.textureNode,bumpScale:e});return sA({surf_pos:Ln,surf_norm:rs,dHdxy:t})}}const oA=k(wp);U("bumpMap",oA);Q("BumpMapNode",wp);const rA=$(({color:i,adjustment:e})=>e.mix(Rp(i.rgb),i.rgb)),aA=$(({color:i,adjustment:e})=>{const t=Dn(i.r,i.g,i.b).div(3),n=i.r.max(i.g.max(i.b)),s=n.sub(t).mul(e).mul(-3);return rn(i.rgb,n,s)}),cA=$(({color:i,adjustment:e})=>{const t=D(.57735,.57735,.57735),n=e.cos();return D(i.rgb.mul(n).add(t.cross(i.rgb).mul(e.sin()).add(t.mul(bo(t,i.rgb).mul(n.oneMinus())))))});class An extends Et{constructor(e,t,n=N(1)){super("vec3"),this.method=e,this.colorNode=t,this.adjustmentNode=n}setup(){const{method:e,colorNode:t,adjustmentNode:n}=this,s={color:t,adjustment:n};let o=null;return e===An.SATURATION?o=rA(s):e===An.VIBRANCE?o=aA(s):e===An.HUE?o=cA(s):console.error(`${this.type}: Method "${this.method}" not supported!`),o}}An.SATURATION="saturation";An.VIBRANCE="vibrance";An.HUE="hue";const lA=k(An,An.SATURATION),uA=k(An,An.VIBRANCE),hA=k(An,An.HUE),dA=D(.2125,.7154,.0721),Rp=(i,e=dA)=>bo(i,e),Cp=(i,e)=>rn(D(0),i,Rp(i).sub(e).max(0));U("saturation",lA);U("vibrance",uA);U("hue",hA);U("threshold",Cp);Q("ColorAdjustmentNode",An);const fA=$(i=>{const{eye_pos:e,surf_norm:t,mapN:n,uv:s}=i,o=e.dFdx(),r=e.dFdy(),a=s.dFdx(),c=s.dFdy(),l=t,u=r.cross(l),h=l.cross(o),d=u.mul(a.x).add(h.mul(c.x)),m=u.mul(a.y).add(h.mul(c.y)),g=d.dot(d).max(m.dot(m)),_=ra.mul(g.inverseSqrt());return Dn(d.mul(n.x,_),m.mul(n.y,_),l.mul(n.z)).normalize()});class Lp extends Et{constructor(e,t=null){super("vec3"),this.node=e,this.scaleNode=t,this.normalMapType=As}setup(e){const{normalMapType:t,scaleNode:n}=this;let s=this.node.mul(2).sub(1);n!==null&&(s=D(s.xy.mul(n),s.z));let o=null;return t===pd?o=Cf.mul(s).normalize():t===As&&(e.hasGeometryAttribute("tangent")===!0?o=io.mul(s).normalize():o=fA({eye_pos:Ln,surf_norm:rs,mapN:s,uv:yi()})),o}}const pA=k(Lp);U("normalMap",pA);Q("NormalMapNode",Lp);class Pp extends Et{constructor(e,t){super(),this.sourceNode=e,this.stepsNode=t}setup(){const{sourceNode:e,stepsNode:t}=this;return e.mul(t).floor().div(t)}}const mA=k(Pp);U("posterize",mA);Q("PosterizeNode",Pp);const gA=$(({color:i,exposure:e})=>i.mul(e).clamp()),_A=$(({color:i,exposure:e})=>(i=i.mul(e),i.div(i.add(1)).clamp())),xA=$(({color:i,exposure:e})=>{i=i.mul(e),i=i.sub(.004).max(0);const t=i.mul(i.mul(6.2).add(.5)),n=i.mul(i.mul(6.2).add(1.7)).add(.06);return t.div(n).pow(2.2)}),vA=$(({color:i})=>{const e=i.mul(i.add(.0245786)).sub(90537e-9),t=i.mul(i.add(.432951).mul(.983729)).add(.238081);return e.div(t)}),yA=$(({color:i,exposure:e})=>{const t=oi(.59719,.35458,.04823,.076,.90834,.01566,.0284,.13383,.83777),n=oi(1.60475,-.53108,-.07367,-.10208,1.10813,-.00605,-.00327,-.07276,1.07602);return i=i.mul(e).div(.6),i=t.mul(i),i=vA({color:i}),i=n.mul(i),i.clamp()}),MA=oi(D(1.6605,-.1246,-.0182),D(-.5876,1.1329,-.1006),D(-.0728,-.0083,1.1187)),SA=oi(D(.6274,.0691,.0164),D(.3293,.9195,.088),D(.0433,.0113,.8956)),TA=$(([i])=>{const e=D(i).toVar(),t=D(e.mul(e)).toVar(),n=D(t.mul(t)).toVar();return N(15.5).mul(n.mul(t)).sub(ot(40.14,n.mul(e))).add(ot(31.96,n).sub(ot(6.868,t.mul(e))).add(ot(.4298,t).add(ot(.1191,e).sub(.00232))))}),EA=$(({color:i,exposure:e})=>{const t=D(i).toVar(),n=oi(D(.856627153315983,.137318972929847,.11189821299995),D(.0951212405381588,.761241990602591,.0767994186031903),D(.0482516061458583,.101439036467562,.811302368396859)),s=oi(D(1.1271005818144368,-.1413297634984383,-.14132976349843826),D(-.11060664309660323,1.157823702216272,-.11060664309660294),D(-.016493938717834573,-.016493938717834257,1.2519364065950405)),o=N(-12.47393),r=N(4.026069);return t.mulAssign(e),t.assign(SA.mul(t)),t.assign(n.mul(t)),t.assign(Un(t,1e-10)),t.assign(ya(t)),t.assign(t.sub(o).div(r.sub(o))),t.assign(So(t,0,1)),t.assign(TA(t)),t.assign(s.mul(t)),t.assign(_i(Un(D(0),t),D(2.2))),t.assign(MA.mul(t)),t.assign(So(t,0,1)),t}),AA={[td]:gA,[nd]:_A,[id]:xA,[sd]:yA,[od]:EA};class Ip extends Et{constructor(e=kn,t=bA,n=null){super("vec3"),this.toneMapping=e,this.exposureNode=t,this.colorNode=n}getCacheKey(){let e=super.getCacheKey();return e="{toneMapping:"+this.toneMapping+",nodes:"+e+"}",e}setup(e){const t=this.colorNode||e.context.color,n=this.toneMapping;if(n===kn)return t;const s={exposure:this.exposureNode,color:t},o=AA[n];let r=null;return o?r=o(s):(console.error("ToneMappingNode: Unsupported Tone Mapping configuration.",n),r=t),r}}const NA=(i,e,t)=>pe(new Ip(i,pe(e),pe(t))),bA=WE("toneMappingExposure","float");U("toneMapping",(i,e,t)=>NA(e,t,i));Q("ToneMappingNode",Ip);let Nc=null;class Dp extends lr{constructor(e=Qo,t=null){Nc===null&&(Nc=new Fd),super(e,t,Nc)}updateReference(){return this}}const wA=k(Dp);U("viewportSharedTexture",wA);Q("ViewportSharedTextureNode",Dp);class hl extends wo{constructor(e,t){super(t),this.passNode=e,this.setUpdateMatrix(!1)}setup(e){return this.passNode.build(e),super.setup(e)}clone(){return new this.constructor(this.passNode,this.value)}}class ur extends Et{constructor(e,t,n){super("vec4"),this.scope=e,this.scene=t,this.camera=n,this._pixelRatio=1,this._width=1,this._height=1;const s=new or;s.isRenderTargetTexture=!0,s.name="PostProcessingDepth";const o=new ss(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nr});o.texture.name="PostProcessing",o.depthTexture=s,this.renderTarget=o,this.updateBeforeType=St.FRAME,this._textureNode=pe(new hl(this,o.texture)),this._depthTextureNode=pe(new hl(this,s)),this._depthNode=null,this._viewZNode=null,this._cameraNear=Tt(0),this._cameraFar=Tt(0),this.isPassNode=!0}isGlobal(){return!0}getTextureNode(){return this._textureNode}getTextureDepthNode(){return this._depthTextureNode}getViewZNode(){if(this._viewZNode===null){const e=this._cameraNear,t=this._cameraFar;this._viewZNode=np(this._depthTextureNode,e,t)}return this._viewZNode}getDepthNode(){if(this._depthNode===null){const e=this._cameraNear,t=this._cameraFar;this._depthNode=rl(this.getViewZNode(),e,t)}return this._depthNode}setup(){return this.scope===ur.COLOR?this.getTextureNode():this.getDepthNode()}updateBefore(e){const{renderer:t}=e,{scene:n,camera:s}=this;this._pixelRatio=t.getPixelRatio();const o=t.getSize(new Te);this.setSize(o.width,o.height);const r=t.toneMapping,a=t.toneMappingNode,c=t.getRenderTarget();this._cameraNear.value=s.near,this._cameraFar.value=s.far,t.toneMapping=kn,t.toneMappingNode=null,t.setRenderTarget(this.renderTarget),t.render(n,s),t.toneMapping=r,t.toneMappingNode=a,t.setRenderTarget(c)}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget.setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget.dispose()}}ur.COLOR="color";ur.DEPTH="depth";const Bl=(i,e)=>pe(new hl(i,e));Q("PassNode",ur);const bc=new yl(-1,1,1,-1,0,1);class RA extends cs{constructor(e=!1){super();const t=e===!1?[0,-1,0,1,2,1]:[0,2,0,0,2,0];this.setAttribute("position",new Di([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Di(t,2))}}const CA=new RA;class LA extends ni{constructor(e=null){super(CA,e),this.camera=bc}renderAsync(e){return e.renderAsync(this,bc)}render(e){e.render(this,bc)}}const wa=LA,Xh=new wa,qh=new wa;class PA extends Et{constructor(e,t=2){super("vec4"),this.textureNode=e,this.sigma=t,this.directionNode=Ae(1),this._invSize=Tt(new Te),this._passDirection=Tt(new Te),this._horizontalRT=new ss,this._horizontalRT.texture.name="GaussianBlurNode.horizontal",this._verticalRT=new ss,this._verticalRT.texture.name="GaussianBlurNode.vertical",this._textureNode=Bl(this,this._verticalRT.texture),this.updateBeforeType=St.RENDER,this.resolution=new Te(1,1)}setSize(e,t){e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._invSize.value.set(1/e,1/t),this._horizontalRT.setSize(e,t),this._verticalRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value,o=t.getRenderTarget(),r=n.value;Xh.material=this._material,qh.material=this._material,this.setSize(s.image.width,s.image.height);const a=s.type;this._horizontalRT.texture.type=a,this._verticalRT.texture.type=a,t.setRenderTarget(this._horizontalRT),this._passDirection.value.set(1,0),Xh.render(t),n.value=this._horizontalRT.texture,t.setRenderTarget(this._verticalRT),this._passDirection.value.set(0,1),qh.render(t),t.setRenderTarget(o),n.value=r}getTextureNode(){return this._textureNode}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("GaussianBlurNode requires a TextureNode."),Ee();const n=t.uvNode||yi(),s=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),o=$(()=>{const c=3+2*this.sigma,l=this._getCoefficients(c),u=this._invSize,h=Ae(this.directionNode).mul(this._passDirection),d=N(l[0]).toVar(),m=Ee(s(n).mul(d)).toVar();for(let g=1;g<c;g++){const _=N(g),p=N(l[g]),f=Ae(h.mul(u.mul(_))).toVar(),E=Ee(s(n.add(f))),y=Ee(s(n.sub(f)));m.addAssign(E.add(y).mul(p)),d.addAssign(ot(2,p))}return m.div(d)}),r=this._material||(this._material=e.createNodeMaterial());r.fragmentNode=o();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}_getCoefficients(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return t}}const IA=(i,e)=>pe(new PA(pe(i),e));U("gaussianBlur",IA);const Yh=new wa;class DA extends Et{constructor(e,t=.96){super(e),this.textureNode=e,this.textureNodeOld=In(),this.damp=Tt(t),this._compRT=new ss,this._compRT.texture.name="AfterImageNode.comp",this._oldRT=new ss,this._oldRT.texture.name="AfterImageNode.old",this._textureNode=Bl(this,this._compRT.texture),this.updateBeforeType=St.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._compRT.setSize(e,t),this._oldRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value,o=s.type;this._compRT.texture.type=o,this._oldRT.texture.type=o;const r=t.getRenderTarget(),a=n.value;this.textureNodeOld.value=this._oldRT.texture,t.setRenderTarget(this._compRT),Yh.render(t);const c=this._oldRT;this._oldRT=this._compRT,this._compRT=c,this.setSize(s.image.width,s.image.height),t.setRenderTarget(r),n.value=a}setup(e){const t=this.textureNode,n=this.textureNodeOld;if(t.isTextureNode!==!0)return console.error("AfterImageNode requires a TextureNode."),Ee();const s=t.uvNode||yi();n.uvNode=s;const o=u=>t.cache().context({getUV:()=>u,forceUVContext:!0}),r=$(([u,h])=>{const d=N(h).toVar(),m=Ee(u).toVar();return Un(Ol(m.sub(d)),0)}),a=$(()=>{const u=Ee(n),h=Ee(o(s));return u.mulAssign(this.damp.mul(r(u,.1))),Un(h,u)}),c=this._materialComposed||(this._materialComposed=e.createNodeMaterial());c.fragmentNode=a(),Yh.material=c;const l=e.getNodeProperties(this);return l.textureNode=t,this._textureNode}}const UA=(i,e)=>pe(new DA(pe(i),e));U("afterImage",UA);const jh=new wa;class OA extends Et{constructor(e,t,n,s){super("vec4"),this.textureNode=e,this.tresholdNode=t,this.scaleNode=n,this.colorNode=D(.1,0,1),this.samples=s,this.resolution=new Te(1,1),this._renderTarget=new ss,this._renderTarget.texture.name="anamorphic",this._invSize=Tt(new Te),this._textureNode=Bl(this,this._renderTarget.texture),this.updateBeforeType=St.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._invSize.value.set(1/e,1/t),e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._renderTarget.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value;this._renderTarget.texture.type=s.type;const o=t.getRenderTarget(),r=n.value;jh.material=this._material,this.setSize(s.image.width,s.image.height),t.setRenderTarget(this._renderTarget),jh.render(t),t.setRenderTarget(o),n.value=r}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("AnamorphNode requires a TextureNode."),Ee();const n=t.uvNode||yi(),s=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),o=$(()=>{const c=this.samples,l=Math.floor(c/2),u=D(0).toVar();return At({start:-l,end:l},({i:h})=>{const d=N(h).abs().div(l).oneMinus(),m=Ae(n.x.add(this._invSize.x.mul(h).mul(this.scaleNode)),n.y),g=s(m),_=Cp(g,this.tresholdNode).mul(d);u.addAssign(_)}),u.mul(this.colorNode)}),r=this._material||(this._material=e.createNodeMaterial());r.fragmentNode=o();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}}const FA=(i,e=.9,t=3,n=32)=>pe(new OA(pe(i),pe(e),pe(t),n));U("anamorphic",FA);class Up extends Et{constructor(e=null,t={}){super(),this.functionNode=e,this.parameters=t}setParameters(e){return this.parameters=e,this}getParameters(){return this.parameters}getNodeType(e){return this.functionNode.getNodeType(e)}generate(e){const t=[],n=this.functionNode,s=n.getInputs(e),o=this.parameters;if(Array.isArray(o))for(let a=0;a<o.length;a++){const c=s[a],l=o[a];t.push(l.build(e,c.type))}else for(const a of s){const c=o[a.name];if(c!==void 0)t.push(c.build(e,a.type));else throw new Error(`FunctionCallNode: Input '${a.name}' not found in FunctionNode.`)}return`${n.build(e,"property")}( ${t.join(", ")} )`}}const VA=(i,...e)=>(e=e.length>1||e[0]&&e[0].isNode===!0?ao(e):xa(e[0]),pe(new Up(pe(i),e)));U("call",VA);Q("FunctionCallNode",Up);class Op extends Re{constructor(e=null){super(),this._value=e,this._cache=null,this.inputType=null,this.outpuType=null,this.events=new zi,this.isScriptableValueNode=!0}get isScriptableOutputNode(){return this.outputType!==null}set value(e){this._value!==e&&(this._cache&&this.inputType==="URL"&&this.value.value instanceof ArrayBuffer&&(URL.revokeObjectURL(this._cache),this._cache=null),this._value=e,this.events.dispatchEvent({type:"change"}),this.refresh())}get value(){return this._value}refresh(){this.events.dispatchEvent({type:"refresh"})}getValue(){const e=this.value;if(e&&this._cache===null&&this.inputType==="URL"&&e.value instanceof ArrayBuffer)this._cache=URL.createObjectURL(new Blob([e.value]));else if(e&&e.value!==null&&e.value!==void 0&&((this.inputType==="URL"||this.inputType==="String")&&typeof e.value=="string"||this.inputType==="Number"&&typeof e.value=="number"||this.inputType==="Vector2"&&e.value.isVector2||this.inputType==="Vector3"&&e.value.isVector3||this.inputType==="Vector4"&&e.value.isVector4||this.inputType==="Color"&&e.value.isColor||this.inputType==="Matrix3"&&e.value.isMatrix3||this.inputType==="Matrix4"&&e.value.isMatrix4))return e.value;return this._cache||e}getNodeType(e){return this.value&&this.value.isNode?this.value.getNodeType(e):"float"}setup(){return this.value&&this.value.isNode?this.value:N()}serialize(e){super.serialize(e),this.value!==null?this.inputType==="ArrayBuffer"?e.value=kd(this.value):e.value=this.value?this.value.toJSON(e.meta).uuid:null:e.value=null,e.inputType=this.inputType,e.outputType=this.outputType}deserialize(e){super.deserialize(e);let t=null;e.value!==null&&(e.inputType==="ArrayBuffer"?t=Wd(e.value):e.inputType==="Texture"?t=e.meta.textures[e.value]:t=e.meta.nodes[e.value]||null),this.value=t,this.inputType=e.inputType,this.outputType=e.outputType}}const kr=k(Op);U("scriptableValue",kr);Q("ScriptableValueNode",Op);class Fp extends Map{get(e,t=null,...n){if(this.has(e))return super.get(e);if(t!==null){const s=t(...n);return this.set(e,s),s}}}class zA{constructor(e){this.scriptableNode=e}get parameters(){return this.scriptableNode.parameters}get layout(){return this.scriptableNode.getLayout()}getInputLayout(e){return this.scriptableNode.getInputLayout(e)}get(e){const t=this.parameters[e];return t?t.getValue():null}}const wc=new Fp;class Vp extends Re{constructor(e=null,t={}){super(),this.codeNode=e,this.parameters=t,this._local=new Fp,this._output=kr(),this._outputs={},this._source=this.source,this._method=null,this._object=null,this._value=null,this._needsOutputUpdate=!0,this.onRefresh=this.onRefresh.bind(this),this.isScriptableNode=!0}get source(){return this.codeNode?this.codeNode.code:""}setLocal(e,t){return this._local.set(e,t)}getLocal(e){return this._local.get(e)}onRefresh(){this._refresh()}getInputLayout(e){for(const t of this.getLayout())if(t.inputType&&(t.id===e||t.name===e))return t}getOutputLayout(e){for(const t of this.getLayout())if(t.outputType&&(t.id===e||t.name===e))return t}setOutput(e,t){const n=this._outputs;return n[e]===void 0?n[e]=kr(t):n[e].value=t,this}getOutput(e){return this._outputs[e]}getParameter(e){return this.parameters[e]}setParameter(e,t){const n=this.parameters;return t&&t.isScriptableNode?(this.deleteParameter(e),n[e]=t,n[e].getDefaultOutput().events.addEventListener("refresh",this.onRefresh)):t&&t.isScriptableValueNode?(this.deleteParameter(e),n[e]=t,n[e].events.addEventListener("refresh",this.onRefresh)):n[e]===void 0?(n[e]=kr(t),n[e].events.addEventListener("refresh",this.onRefresh)):n[e].value=t,this}getValue(){return this.getDefaultOutput().getValue()}deleteParameter(e){let t=this.parameters[e];return t&&(t.isScriptableNode&&(t=t.getDefaultOutput()),t.events.removeEventListener("refresh",this.onRefresh)),this}clearParameters(){for(const e of Object.keys(this.parameters))this.deleteParameter(e);return this.needsUpdate=!0,this}call(e,...t){const s=this.getObject()[e];if(typeof s=="function")return s(...t)}async callAsync(e,...t){const s=this.getObject()[e];if(typeof s=="function")return s.constructor.name==="AsyncFunction"?await s(...t):s(...t)}getNodeType(e){return this.getDefaultOutputNode().getNodeType(e)}refresh(e=null){e!==null?this.getOutput(e).refresh():this._refresh()}getObject(){if(this.needsUpdate&&this.dispose(),this._object!==null)return this._object;const e=()=>this.refresh(),t=(l,u)=>this.setOutput(l,u),n=new zA(this),s=wc.get("THREE"),o=wc.get("TSL"),r=this.getMethod(this.codeNode),a=[n,this._local,wc,e,t,s,o];this._object=r(...a);const c=this._object.layout;if(c&&(c.cache===!1&&this._local.clear(),this._output.outputType=c.outputType||null,Array.isArray(c.elements)))for(const l of c.elements){const u=l.id||l.name;l.inputType&&(this.getParameter(u)===void 0&&this.setParameter(u,null),this.getParameter(u).inputType=l.inputType),l.outputType&&(this.getOutput(u)===void 0&&this.setOutput(u,null),this.getOutput(u).outputType=l.outputType)}return this._object}deserialize(e){super.deserialize(e);for(const t in this.parameters){let n=this.parameters[t];n.isScriptableNode&&(n=n.getDefaultOutput()),n.events.addEventListener("refresh",this.onRefresh)}}getLayout(){return this.getObject().layout}getDefaultOutputNode(){const e=this.getDefaultOutput().value;return e&&e.isNode?e:N()}getDefaultOutput(){return this._exec()._output}getMethod(){if(this.needsUpdate&&this.dispose(),this._method!==null)return this._method;const e=["parameters","local","global","refresh","setOutput","THREE","TSL"],n=["layout","init","main","dispose"].join(", "),s="var "+n+`; var output = {};
`,o=`
return { ...output, `+n+" };",r=s+this.codeNode.code+o;return this._method=new Function(...e,r),this._method}dispose(){this._method!==null&&(this._object&&typeof this._object.dispose=="function"&&this._object.dispose(),this._method=null,this._object=null,this._source=null,this._value=null,this._needsOutputUpdate=!0,this._output.value=null,this._outputs={})}setup(){return this.getDefaultOutputNode()}set needsUpdate(e){e===!0&&this.dispose()}get needsUpdate(){return this.source!==this._source}_exec(){return this.codeNode===null?this:(this._needsOutputUpdate===!0&&(this._value=this.call("main"),this._needsOutputUpdate=!1),this._output.value=this._value,this)}_refresh(){this.needsUpdate=!0,this._exec(),this._output.refresh()}}const BA=k(Vp);U("scriptable",BA);Q("ScriptableNode",Vp);class Ra extends Re{constructor(e,t){super("float"),this.isFogNode=!0,this.colorNode=e,this.factorNode=t}getViewZNode(e){let t;const n=e.context.getViewZ;return n!==void 0&&(t=n(this)),(t||Ln.z).negate()}setup(){return this.factorNode}}const HA=k(Ra);U("fog",HA);Q("FogNode",Ra);class zp extends Ra{constructor(e,t,n){super(e),this.isFogRangeNode=!0,this.nearNode=t,this.farNode=n}setup(e){const t=this.getViewZNode(e);return Fi(this.nearNode,this.farNode,t)}}const GA=k(zp);U("rangeFog",GA);Q("FogRangeNode",zp);class Bp extends Ra{constructor(e,t){super(e),this.isFogExp2Node=!0,this.densityNode=t}setup(e){const t=this.getViewZNode(e),n=this.densityNode;return n.mul(n,t,t).negate().exp().oneMinus()}}const kA=k(Bp);U("densityFog",kA);Q("FogExp2Node",Bp);let gs=null,_s=null;class Hp extends Re{constructor(e=N(),t=N()){super(),this.minNode=e,this.maxNode=t}getVectorLength(e){const t=e.getTypeLength(Qi(this.minNode.value)),n=e.getTypeLength(Qi(this.maxNode.value));return t>n?t:n}getNodeType(e){return e.object.isInstancedMesh===!0?e.getTypeFromLength(this.getVectorLength(e)):"float"}setup(e){const t=e.object;let n=null;if(t.isInstancedMesh===!0){const s=this.minNode.value,o=this.maxNode.value,r=e.getTypeLength(Qi(s)),a=e.getTypeLength(Qi(o));gs=gs||new at,_s=_s||new at,gs.setScalar(0),_s.setScalar(0),r===1?gs.setScalar(s):s.isColor?gs.set(s.r,s.g,s.b):gs.set(s.x,s.y,s.z||0,s.w||0),a===1?_s.setScalar(o):o.isColor?_s.set(o.r,o.g,o.b):_s.set(o.x,o.y,o.z||0,o.w||0);const c=4,l=c*t.count,u=new Float32Array(l);for(let d=0;d<l;d++){const m=d%c,g=gs.getComponent(m),_=_s.getComponent(m);u[d]=gl.lerp(g,_,Math.random())}const h=this.getNodeType(e);n=Fl(u,"vec4",t.count).element(tf).convert(h)}else n=N(0);return n}}k(Hp);Q("RangeNode",Hp);class Gp extends Re{constructor(e,t,n=[64]){super("void"),this.isComputeNode=!0,this.computeNode=e,this.count=t,this.workgroupSize=n,this.dispatchCount=0,this.version=1,this.updateBeforeType=St.OBJECT,this.updateDispatchCount()}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}updateDispatchCount(){const{count:e,workgroupSize:t}=this;let n=t[0];for(let s=1;s<t.length;s++)n*=t[s];this.dispatchCount=Math.ceil(e/n)}onInit(){}updateBefore({renderer:e}){e.compute(this)}generate(e){const{shaderStage:t}=e;if(t==="compute"){const n=this.computeNode.build(e,"void");n!==""&&e.addLineFlowCode(n)}}}const WA=(i,e,t)=>pe(new Gp(pe(i),e,t));U("compute",WA);Q("ComputeNode",Gp);class Cs extends Re{constructor(e=Cs.TARGET_DIRECTION,t=null){super(),this.scope=e,this.light=t}setup(){const{scope:e,light:t}=this;let n=null;return e===Cs.TARGET_DIRECTION&&(n=Bi.transformDirection(el(t).sub(el(t.target)))),n}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Cs.TARGET_DIRECTION="targetDirection";const kp=k(Cs,Cs.TARGET_DIRECTION);Q("LightNode",Cs);const Wp=$(i=>{const{lightDistance:e,cutoffDistance:t,decayExponent:n}=i,s=e.pow(n).max(.01).reciprocal();return t.greaterThan(0).cond(s.mul(e.div(t).pow4().oneMinus().clamp().pow2()),s)});class Xp extends Is{constructor(e=null){super(e),this.cutoffDistanceNode=Tt(0),this.decayExponentNode=Tt(0)}update(e){const{light:t}=this;super.update(e),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}setup(e){const{colorNode:t,cutoffDistanceNode:n,decayExponentNode:s,light:o}=this,r=e.context.lightingModel,a=Rf(o).sub(Ln),c=a.normalize(),l=a.length(),u=Wp({lightDistance:l,cutoffDistance:n,decayExponent:s}),h=t.mul(u),d=e.context.reflectedLight;r.direct({lightDirection:c,lightColor:h,reflectedLight:d,shadowMask:this.shadowMaskNode},e.stack,e)}}Q("PointLightNode",Xp);Co(MM,Xp);class qp extends Is{constructor(e=null){super(e)}setup(e){super.setup(e);const t=e.context.lightingModel,n=this.colorNode,s=kp(this.light),o=e.context.reflectedLight;t.direct({lightDirection:s,lightColor:n,reflectedLight:o,shadowMask:this.shadowMaskNode},e.stack,e)}}Q("DirectionalLightNode",qp);Co(TM,qp);class Hl extends Is{constructor(e=null){super(e),this.coneCosNode=Tt(0),this.penumbraCosNode=Tt(0),this.cutoffDistanceNode=Tt(0),this.decayExponentNode=Tt(0)}update(e){super.update(e);const{light:t}=this;this.coneCosNode.value=Math.cos(t.angle),this.penumbraCosNode.value=Math.cos(t.angle*(1-t.penumbra)),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}getSpotAttenuation(e){const{coneCosNode:t,penumbraCosNode:n}=this;return Fi(t,n,e)}setup(e){super.setup(e);const t=e.context.lightingModel,{colorNode:n,cutoffDistanceNode:s,decayExponentNode:o,light:r}=this,a=Rf(r).sub(Ln),c=a.normalize(),l=c.dot(kp(r)),u=this.getSpotAttenuation(l),h=a.length(),d=Wp({lightDistance:h,cutoffDistance:s,decayExponent:o}),m=n.mul(u).mul(d),g=e.context.reflectedLight;t.direct({lightDirection:c,lightColor:m,reflectedLight:g,shadowMask:this.shadowMaskNode},e.stack,e)}}Q("SpotLightNode",Hl);Co(Bd,Hl);class XA extends Bd{constructor(e,t,n,s,o,r){super(e,t,n,s,o,r),this.iesMap=null}copy(e,t){return super.copy(e,t),this.iesMap=e.iesMap,this}}const qA=XA;class Yp extends Hl{getSpotAttenuation(e){const t=this.light.iesMap;let n=null;if(t&&t.isTexture===!0){const s=e.acos().mul(1/Math.PI);n=In(t,Ae(s,0),0).r}else n=super.getSpotAttenuation(e);return n}}Q("IESSpotLightNode",Yp);Co(qA,Yp);class jp extends Is{constructor(e=null){super(e)}setup({context:e}){e.irradiance.addAssign(this.colorNode)}}Q("AmbientLightNode",jp);Co(EM,jp);class $p extends Is{constructor(e=null){super(e),this.lightPositionNode=el(e),this.lightDirectionNode=this.lightPositionNode.normalize(),this.groundColorNode=Tt(new Fe)}update(e){const{light:t}=this;super.update(e),this.lightPositionNode.object3d=t,this.groundColorNode.value.copy(t.groundColor).multiplyScalar(t.intensity)}setup(e){const{colorNode:t,groundColorNode:n,lightDirectionNode:s}=this,r=rs.dot(s).mul(.5).add(.5),a=rn(n,t,r);e.context.irradiance.addAssign(a)}}Q("HemisphereLightNode",$p);Co(xM,$p);const YA=$(i=>{const e=i.uv.mul(2),t=e.x.floor(),n=e.y.floor();return t.add(n).mod(2).sign()});class Zp extends Et{constructor(e=yi()){super("float"),this.uvNode=e}setup(){return YA({uv:this.uvNode})}}const jA=k(Zp);U("checker",jA);Q("CheckerNode",Zp);const $A=new Od;class ZA extends Fn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.pointWidth=1,this.pointColorNode=null,this.setDefaultValues($A),this.setupShaders(),this.setValues(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor;this.vertexNode=$(()=>{Ot(Ae(),"vUv").assign(yi());const n=dn("instancePosition"),s=nn("vec4","mvPos");s.assign(Rs.mul(Ee(n,1)));const o=ho.z.div(ho.w),r=fi.mul(s),a=nn("vec2","offset");return a.assign(Mn.xy),a.assign(a.mul(jT)),a.assign(a.div(ho.z)),a.y.assign(a.y.mul(o)),a.assign(a.mul(r.w)),r.assign(r.add(Ee(a,0,0))),r})(),this.fragmentNode=$(()=>{const n=Ot(Ae(),"vUv"),s=nn("float","alpha");s.assign(1);const o=n.x,r=n.y,a=o.mul(o).add(r.mul(r));if(e){const l=nn("float","dlen");l.assign(a.fwidth()),s.assign(Fi(l.oneMinus(),l.add(1),a).oneMinus())}else a.greaterThan(1).discard();let c;return this.pointColorNode?c=this.pointColorNode:t?c=dn("instanceColor").mul(Jo):c=Jo,Ee(c,s)})(),this.needsUpdate=!0}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.setupShaders())}}yn("InstancedPointsNodeMaterial",ZA);const KA=new Ud;class JA extends Fn{constructor(e){super(),this.isLineBasicNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(KA),this.setValues(e)}}yn("LineBasicNodeMaterial",JA);const QA=new zd;class eN extends Fn{constructor(e){super(),this.isLineDashedNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(QA),this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setupVariants(){const e=this.offsetNode,t=this.dashScaleNode?N(this.dashScaleNode):tl,n=this.dashSizeNode?N(this.dashSizeNode):Df,s=this.dashSizeNode?N(this.dashGapNode):Uf;uo.assign(n),ta.assign(s);const o=Ot(dn("lineDistance").mul(t));(e?o.add(e):o).mod(uo.add(ta)).greaterThan(uo).discard()}}yn("LineDashedNodeMaterial",eN);const tN=new zd;class nN extends Fn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.setDefaultValues(tN),this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.useDash=e.dashed,this.useWorldUnits=!1,this.dashOffset=0,this.lineWidth=1,this.lineColorNode=null,this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setup(e){this.setupShaders(),super.setup(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor,n=this.dashed,s=this.worldUnits,o=$(({start:a,end:c})=>{const l=fi.element(2).element(2),d=fi.element(3).element(2).mul(-.5).div(l).sub(a.z).div(c.z.sub(a.z));return Ee(rn(a.xyz,c.xyz,d),c.w)});this.vertexNode=$(()=>{ui("vec2","vUv").assign(yi());const a=dn("instanceStart"),c=dn("instanceEnd"),l=nn("vec4","start"),u=nn("vec4","end");l.assign(Rs.mul(Ee(a,1))),u.assign(Rs.mul(Ee(c,1))),s&&(ui("vec3","worldStart").assign(l.xyz),ui("vec3","worldEnd").assign(u.xyz));const h=ho.z.div(ho.w),d=fi.element(2).element(3).equal(-1);Qe(d,()=>{Qe(l.z.lessThan(0).and(u.z.greaterThan(0)),()=>{u.assign(o({start:l,end:u}))}).elseif(u.z.lessThan(0).and(l.z.greaterThanEqual(0)),()=>{l.assign(o({start:u,end:l}))})});const m=fi.mul(l),g=fi.mul(u),_=m.xyz.div(m.w),p=g.xyz.div(g.w),f=p.xy.sub(_.xy).temp();f.x.assign(f.x.mul(h)),f.assign(f.normalize());const E=Zo(Ee());if(s){const y=u.xyz.sub(l.xyz).normalize(),A=rn(l.xyz,u.xyz,.5).normalize(),F=y.cross(A).normalize(),R=y.cross(F),b=ui("vec4","worldPos");b.assign(Mn.y.lessThan(.5).cond(l,u));const H=gc.mul(.5);b.addAssign(Ee(Mn.x.lessThan(0).cond(F.mul(H),F.mul(H).negate()),0)),n||(b.addAssign(Ee(Mn.y.lessThan(.5).cond(y.mul(H).negate(),y.mul(H)),0)),b.addAssign(Ee(R.mul(H),0)),Qe(Mn.y.greaterThan(1).or(Mn.y.lessThan(0)),()=>{b.subAssign(Ee(R.mul(2).mul(H),0))})),E.assign(fi.mul(b));const T=Zo(D());T.assign(Mn.y.lessThan(.5).cond(_,p)),E.z.assign(T.z.mul(E.w))}else{const y=nn("vec2","offset");y.assign(Ae(f.y,f.x.negate())),f.x.assign(f.x.div(h)),y.x.assign(y.x.div(h)),y.assign(Mn.x.lessThan(0).cond(y.negate(),y)),Qe(Mn.y.lessThan(0),()=>{y.assign(y.sub(f))}).elseif(Mn.y.greaterThan(1),()=>{y.assign(y.add(f))}),y.assign(y.mul(gc)),y.assign(y.div(ho.w)),E.assign(Mn.y.lessThan(.5).cond(m,g)),y.assign(y.mul(E.w)),E.assign(E.add(Ee(y,0,0)))}return E})();const r=$(({p1:a,p2:c,p3:l,p4:u})=>{const h=a.sub(l),d=u.sub(l),m=c.sub(a),g=h.dot(d),_=d.dot(m),p=h.dot(m),f=d.dot(d),y=m.dot(m).mul(f).sub(_.mul(_)),F=g.mul(_).sub(p.mul(f)).div(y).clamp(),R=g.add(_.mul(F)).div(f).clamp();return Ae(F,R)});this.fragmentNode=$(()=>{const a=ui("vec2","vUv");if(n){const u=this.offsetNode?N(this.offsetNodeNode):Rh,h=this.dashScaleNode?N(this.dashScaleNode):tl,d=this.dashSizeNode?N(this.dashSizeNode):Df,m=this.dashSizeNode?N(this.dashGapNode):Uf;uo.assign(d),ta.assign(m);const g=dn("instanceDistanceStart"),_=dn("instanceDistanceEnd"),p=Mn.y.lessThan(.5).cond(h.mul(g),tl.mul(_)),f=Ot(p.add(Rh)),E=u?f.add(u):f;a.y.lessThan(-1).or(a.y.greaterThan(1)).discard(),E.mod(uo.add(ta)).greaterThan(uo).discard()}const c=nn("float","alpha");if(c.assign(1),s){const u=ui("vec3","worldStart"),h=ui("vec3","worldEnd"),d=ui("vec4","worldPos").xyz.normalize().mul(1e5),m=h.sub(u),g=r({p1:u,p2:h,p3:D(0,0,0),p4:d}),_=u.add(m.mul(g.x)),p=d.mul(g.y),y=_.sub(p).length().div(gc);if(!n)if(e){const A=y.fwidth();c.assign(Fi(A.negate().add(.5),A.add(.5),y).oneMinus())}else y.greaterThan(.5).discard()}else if(e){const u=a.x,h=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1)),d=u.mul(u).add(h.mul(h)),m=nn("float","dlen");m.assign(d.fwidth()),Qe(a.y.abs().greaterThan(1),()=>{c.assign(Fi(m.oneMinus(),m.add(1),d).oneMinus())})}else Qe(a.y.abs().greaterThan(1),()=>{const u=a.x,h=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1));u.mul(u).add(h.mul(h)).greaterThan(1).discard()});let l;if(this.lineColorNode)l=this.lineColorNode;else if(t){const u=dn("instanceColorStart"),h=dn("instanceColorEnd");l=Mn.y.lessThan(.5).cond(u,h).mul(Jo)}else l=Jo;return Ee(l,c)})()}get worldUnits(){return this.useWorldUnits}set worldUnits(e){this.useWorldUnits!==e&&(this.useWorldUnits=e,this.needsUpdate=!0)}get dashed(){return this.useDash}set dashed(e){this.useDash!==e&&(this.useDash=e,this.needsUpdate=!0)}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.needsUpdate=!0)}}yn("Line2NodeMaterial",nN);const iN=new gM;class sN extends Fn{constructor(e){super(),this.isMeshNormalNodeMaterial=!0,this.setDefaultValues(iN),this.setValues(e)}setupDiffuseColor(){const e=this.opacityNode?N(this.opacityNode):If;Dt.assign(Ee(mp(Ft),e))}}yn("MeshNormalNodeMaterial",sN);const oN=new hi;class rN extends Fn{constructor(e){super(),this.isMeshBasicNodeMaterial=!0,this.lights=!1,this.setDefaultValues(oN),this.setValues(e)}}yn("MeshBasicNodeMaterial",rN);const er=$(({f0:i,f90:e,dotVH:t})=>{const n=t.mul(-5.55473).sub(6.98316).mul(t).exp2();return i.mul(n.oneMinus()).add(e.mul(n))}),aa=$(i=>i.diffuseColor.mul(1/Math.PI)),aN=()=>N(.25),cN=$(({dotNH:i})=>Zc.mul(N(.5)).add(1).mul(N(1/Math.PI)).mul(i.pow(Zc))),lN=$(({lightDirection:i})=>{const e=i.add(Ut).normalize(),t=Ft.dot(e).clamp(),n=Ut.dot(e).clamp(),s=er({f0:Jn,f90:1,dotVH:n}),o=aN(),r=cN({dotNH:t});return s.mul(o).mul(r)});class Kp extends Cl{constructor(e=!0){super(),this.specular=e}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const o=Ft.dot(e).clamp().mul(t);n.directDiffuse.addAssign(o.mul(aa({diffuseColor:Dt.rgb}))),this.specular===!0&&n.directSpecular.addAssign(o.mul(lN({lightDirection:e})).mul(RT))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(aa({diffuseColor:Dt})))}}const uN=new _M;class hN extends Fn{constructor(e){super(),this.isMeshLambertNodeMaterial=!0,this.lights=!0,this.setDefaultValues(uN),this.setValues(e)}setupLightingModel(){return new Kp(!1)}}yn("MeshLambertNodeMaterial",hN);const dN=new mM;class fN extends Fn{constructor(e){super(),this.isMeshPhongNodeMaterial=!0,this.lights=!0,this.shininessNode=null,this.specularNode=null,this.setDefaultValues(dN),this.setValues(e)}setupLightingModel(){return new Kp}setupVariants(){const e=(this.shininessNode?N(this.shininessNode):AT).max(1e-4);Zc.assign(e);const t=this.specularNode||bT;Jn.assign(t)}copy(e){return this.shininessNode=e.shininessNode,this.specularNode=e.specularNode,super.copy(e)}}yn("MeshPhongNodeMaterial",fN);const pN=$(()=>{const i=na.dFdx().abs().max(na.dFdy().abs());return i.x.max(i.y).max(i.z)}),mN=$(i=>{const{roughness:e}=i,t=pN();let n=e.max(.0525);return n=n.add(t),n=n.min(1),n}),gN=$(({alpha:i,dotNL:e,dotNV:t})=>{const n=i.pow2(),s=e.mul(n.add(n.oneMinus().mul(t.pow2())).sqrt()),o=t.mul(n.add(n.oneMinus().mul(e.pow2())).sqrt());return os(.5,s.add(o).max(ff))}).setLayout({name:"V_GGX_SmithCorrelated",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNL",type:"float"},{name:"dotNV",type:"float"}]}),_N=$(({alphaT:i,alphaB:e,dotTV:t,dotBV:n,dotTL:s,dotBL:o,dotNV:r,dotNL:a})=>{const c=a.mul(D(i.mul(t),e.mul(n),r).length()),l=r.mul(D(i.mul(s),e.mul(o),a).length());return os(.5,c.add(l)).saturate()}).setLayout({name:"V_GGX_SmithCorrelated_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotTV",type:"float",qualifier:"in"},{name:"dotBV",type:"float",qualifier:"in"},{name:"dotTL",type:"float",qualifier:"in"},{name:"dotBL",type:"float",qualifier:"in"},{name:"dotNV",type:"float",qualifier:"in"},{name:"dotNL",type:"float",qualifier:"in"}]}),xN=$(({alpha:i,dotNH:e})=>{const t=i.pow2(),n=e.pow2().mul(t.oneMinus()).oneMinus();return t.div(n.pow2()).mul(1/Math.PI)}).setLayout({name:"D_GGX",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNH",type:"float"}]}),vN=N(1/Math.PI),yN=$(({alphaT:i,alphaB:e,dotNH:t,dotTH:n,dotBH:s})=>{const o=i.mul(e),r=D(e.mul(n),i.mul(s),o.mul(t)),a=r.dot(r),c=o.div(a);return vN.mul(o.mul(c.pow2()))}).setLayout({name:"D_GGX_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotNH",type:"float",qualifier:"in"},{name:"dotTH",type:"float",qualifier:"in"},{name:"dotBH",type:"float",qualifier:"in"}]}),$h=$(i=>{const{lightDirection:e,f0:t,f90:n,roughness:s,f:o,USE_IRIDESCENCE:r,USE_ANISOTROPY:a}=i,c=i.normalView||Ft,l=s.pow2(),u=e.add(Ut).normalize(),h=c.dot(e).clamp(),d=c.dot(Ut).clamp(),m=c.dot(u).clamp(),g=Ut.dot(u).clamp();let _=er({f0:t,f90:n,dotVH:g}),p,f;if(Th(r)&&(_=Pl.mix(_,o)),Th(a)){const E=Hr.dot(e),y=Hr.dot(Ut),A=Hr.dot(u),F=lo.dot(e),R=lo.dot(Ut),b=lo.dot(u);p=_N({alphaT:$c,alphaB:l,dotTV:y,dotBV:R,dotTL:E,dotBL:F,dotNV:d,dotNL:h}),f=yN({alphaT:$c,alphaB:l,dotNH:m,dotTH:A,dotBH:b})}else p=gN({alpha:l,dotNL:h,dotNV:d}),f=xN({alpha:l,dotNH:m});return _.mul(p).mul(f)}),Jp=$(({roughness:i,dotNV:e})=>{const t=Ee(-1,-.0275,-.572,.022),n=Ee(1,.0425,1.04,-.04),s=i.mul(t).add(n),o=s.x.mul(s.x).min(e.mul(-9.28).exp2()).mul(s.x).add(s.y);return Ae(-1.04,1.04).mul(o).add(s.zw)}).setLayout({name:"DFGApprox",type:"vec2",inputs:[{name:"roughness",type:"float"},{name:"dotNV",type:"vec3"}]}),Qp=$(i=>{const{dotNV:e,specularColor:t,specularF90:n,roughness:s}=i,o=Jp({dotNV:e,roughness:s});return t.mul(o.x).add(n.mul(o.y))}),MN=$(({f:i,f90:e,dotVH:t})=>{const n=t.oneMinus().saturate(),s=n.mul(n),o=n.mul(s,s).clamp(0,.9999);return i.sub(D(e).mul(o)).div(o.oneMinus())}).setLayout({name:"Schlick_to_F0",type:"vec3",inputs:[{name:"f",type:"vec3"},{name:"f90",type:"float"},{name:"dotVH",type:"float"}]}),SN=$(({roughness:i,dotNH:e})=>{const t=i.pow2(),n=N(1).div(t),o=e.pow2().oneMinus().max(.0078125);return N(2).add(n).mul(o.pow(n.mul(.5))).div(2*Math.PI)}).setLayout({name:"D_Charlie",type:"float",inputs:[{name:"roughness",type:"float"},{name:"dotNH",type:"float"}]}),TN=$(({dotNV:i,dotNL:e})=>N(1).div(N(4).mul(e.add(i).sub(e.mul(i))))).setLayout({name:"V_Neubelt",type:"float",inputs:[{name:"dotNV",type:"float"},{name:"dotNL",type:"float"}]}),EN=$(({lightDirection:i})=>{const e=i.add(Ut).normalize(),t=Ft.dot(i).clamp(),n=Ft.dot(Ut).clamp(),s=Ft.dot(e).clamp(),o=SN({roughness:Ll,dotNH:s}),r=TN({dotNV:n,dotNL:t});return to.mul(o).mul(r)}),AN=$(([i,e,t,n,s])=>{const o=D(Mf(e.negate(),vn(i),os(1,n))),r=D(jo(s[0].xyz),jo(s[1].xyz),jo(s[2].xyz));return vn(o).mul(t.mul(r))}).setLayout({name:"getVolumeTransmissionRay",type:"vec3",inputs:[{name:"n",type:"vec3"},{name:"v",type:"vec3"},{name:"thickness",type:"float"},{name:"ior",type:"float"},{name:"modelMatrix",type:"mat4"}]}),NN=$(([i,e])=>i.mul(So(e.mul(2).sub(2),0,1))).setLayout({name:"applyIorToRoughness",type:"float",inputs:[{name:"roughness",type:"float"},{name:"ior",type:"float"}]}),bN=Qf(),wN=$(([i,e,t])=>{const n=bN.uv(i),s=ya(N(ol.x)).mul(NN(e,t));return n.bicubic(s)}),RN=$(([i,e,t])=>(Qe(t.notEqual(0),()=>{const n=gf(e).negate().div(t);return mf(n.negate().mul(i))}),D(1))).setLayout({name:"volumeAttenuation",type:"vec3",inputs:[{name:"transmissionDistance",type:"float"},{name:"attenuationColor",type:"vec3"},{name:"attenuationDistance",type:"float"}]}),CN=$(([i,e,t,n,s,o,r,a,c,l,u,h,d,m])=>{const g=AN(i,e,h,u,a),_=r.add(g),p=l.mul(c.mul(Ee(_,1))),f=Ae(p.xy.div(p.w)).toVar();f.addAssign(1),f.divAssign(2),f.assign(Ae(f.x,f.y.oneMinus()));const E=wN(f,t,u),y=n.mul(RN(jo(g),d,m)),A=y.rgb.mul(E.rgb),F=i.dot(e).clamp(),R=D(Qp({dotNV:F,specularColor:s,specularF90:o,roughness:t})),b=y.r.add(y.g,y.b).div(3);return Ee(R.oneMinus().mul(A),E.a.oneMinus().mul(b).oneMinus())}),LN=oi(3.2404542,-.969266,.0556434,-1.5371385,1.8760108,-.2040259,-.4985314,.041556,1.0572252),PN=i=>{const e=i.sqrt();return D(1).add(e).div(D(1).sub(e))},Zh=(i,e)=>i.sub(e).div(i.add(e)).pow2(),IN=(i,e)=>{const t=i.mul(2*Math.PI*1e-9),n=D(54856e-17,44201e-17,52481e-17),s=D(1681e3,1795300,2208400),o=D(43278e5,93046e5,66121e5),r=N(9747e-17*Math.sqrt(2*Math.PI*45282e5)).mul(t.mul(2239900).add(e.x).cos()).mul(t.pow2().mul(-45282e5).exp());let a=n.mul(o.mul(2*Math.PI).sqrt()).mul(s.mul(t).add(e).cos()).mul(t.pow2().negate().mul(o).exp());return a=D(a.x.add(r),a.y,a.z).div(10685e-11),LN.mul(a)},DN=$(({outsideIOR:i,eta2:e,cosTheta1:t,thinFilmThickness:n,baseF0:s})=>{const o=rn(i,e,Fi(0,.03,n)),r=i.div(o).pow2().mul(N(1).sub(t.pow2())),c=N(1).sub(r).sqrt(),l=Zh(o,i),u=er({f0:l,f90:1,dotVH:t}),h=u.oneMinus(),d=o.lessThan(i).cond(Math.PI,0),m=N(Math.PI).sub(d),g=PN(s.clamp(0,.9999)),_=Zh(g,o.vec3()),p=er({f0:_,f90:1,dotVH:c}),f=D(g.x.lessThan(o).cond(Math.PI,0),g.y.lessThan(o).cond(Math.PI,0),g.z.lessThan(o).cond(Math.PI,0)),E=o.mul(n,c,2),y=D(m).add(f),A=u.mul(p).clamp(1e-5,.9999),F=A.sqrt(),R=h.pow2().mul(p).div(D(1).sub(A));let H=u.add(R),T=R.sub(h);for(let M=1;M<=2;++M){T=T.mul(F);const G=IN(N(M).mul(E),N(M).mul(y)).mul(2);H=H.add(T.mul(G))}return H.max(D(0))}).setLayout({name:"evalIridescence",type:"vec3",inputs:[{name:"outsideIOR",type:"float"},{name:"eta2",type:"float"},{name:"cosTheta1",type:"float"},{name:"thinFilmThickness",type:"float"},{name:"baseF0",type:"vec3"}]}),UN=$(({normal:i,viewDir:e,roughness:t})=>{const n=i.dot(e).saturate(),s=t.pow2(),o=Pn(t.lessThan(.25),N(-339.2).mul(s).add(N(161.4).mul(t)).sub(25.9),N(-8.48).mul(s).add(N(14.3).mul(t)).sub(9.95)),r=Pn(t.lessThan(.25),N(44).mul(s).sub(N(23.7).mul(t)).add(3.26),N(1.97).mul(s).sub(N(3.27).mul(t)).add(.72));return Pn(t.lessThan(.25),0,N(.1).mul(t).sub(.025)).add(o.mul(n).add(r).exp()).mul(1/Math.PI).saturate()}),Rc=D(.04),Cc=D(1);class Gl extends Cl{constructor(e=!1,t=!1,n=!1,s=!1,o=!1){super(),this.clearcoat=e,this.sheen=t,this.iridescence=n,this.anisotropy=s,this.transmission=o,this.clearcoatRadiance=null,this.clearcoatSpecularDirect=null,this.clearcoatSpecularIndirect=null,this.sheenSpecularDirect=null,this.sheenSpecularIndirect=null,this.iridescenceFresnel=null,this.iridescenceF0=null}start(e){if(this.clearcoat===!0&&(this.clearcoatRadiance=D().temp("clearcoatRadiance"),this.clearcoatSpecularDirect=D().temp("clearcoatSpecularDirect"),this.clearcoatSpecularIndirect=D().temp("clearcoatSpecularIndirect")),this.sheen===!0&&(this.sheenSpecularDirect=D().temp("sheenSpecularDirect"),this.sheenSpecularIndirect=D().temp("sheenSpecularIndirect")),this.iridescence===!0){const t=Ft.dot(Ut).clamp();this.iridescenceFresnel=DN({outsideIOR:N(1),eta2:sf,cosTheta1:t,thinFilmThickness:of,baseF0:Jn}),this.iridescenceF0=MN({f:this.iridescenceFresnel,f90:1,dotVH:t})}if(this.transmission===!0){const t=nl,n=TT.sub(nl).normalize(),s=Pf;e.backdrop=CN(s,n,es,Dt,Jn,ea,t,Ko,Bi,fi,Gr,rf,cf,af),e.backdropAlpha=Kc,Dt.a.mulAssign(rn(1,e.backdrop.a,Kc))}}computeMultiscattering(e,t,n){const s=Ft.dot(Ut).clamp(),o=Jp({roughness:es,dotNV:s}),a=(this.iridescenceF0?Pl.mix(Jn,this.iridescenceF0):Jn).mul(o.x).add(n.mul(o.y)),l=o.x.add(o.y).oneMinus(),u=Jn.add(Jn.oneMinus().mul(.047619)),h=a.mul(u).div(l.mul(u).oneMinus());e.addAssign(a),t.addAssign(h.mul(l))}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const o=Ft.dot(e).clamp().mul(t);if(this.sheen===!0&&this.sheenSpecularDirect.addAssign(o.mul(EN({lightDirection:e}))),this.clearcoat===!0){const a=no.dot(e).clamp().mul(t);this.clearcoatSpecularDirect.addAssign(a.mul($h({lightDirection:e,f0:Rc,f90:Cc,roughness:Qr,normalView:no})))}n.directDiffuse.addAssign(o.mul(aa({diffuseColor:Dt.rgb}))),n.directSpecular.addAssign(o.mul($h({lightDirection:e,f0:Jn,f90:1,roughness:es,iridescence:this.iridescence,f:this.iridescenceFresnel,USE_IRIDESCENCE:this.iridescence,USE_ANISOTROPY:this.anisotropy})))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(aa({diffuseColor:Dt})))}indirectSpecular({radiance:e,iblIrradiance:t,reflectedLight:n}){if(this.sheen===!0&&this.sheenSpecularIndirect.addAssign(t.mul(to,UN({normal:Ft,viewDir:Ut,roughness:Ll}))),this.clearcoat===!0){const l=no.dot(Ut).clamp(),u=Qp({dotNV:l,specularColor:Rc,specularF90:Cc,roughness:Qr});this.clearcoatSpecularIndirect.addAssign(this.clearcoatRadiance.mul(u))}const s=D().temp("singleScattering"),o=D().temp("multiScattering"),r=t.mul(1/Math.PI);this.computeMultiscattering(s,o,ea);const a=s.add(o),c=Dt.mul(a.r.max(a.g).max(a.b).oneMinus());n.indirectSpecular.addAssign(e.mul(s)),n.indirectSpecular.addAssign(o.mul(r)),n.indirectDiffuse.addAssign(c.mul(r))}ambientOcclusion({ambientOcclusion:e,reflectedLight:t}){const s=Ft.dot(Ut).clamp().add(e),o=es.mul(-16).oneMinus().negate().exp2(),r=e.sub(s.pow(o).oneMinus()).clamp();this.clearcoat===!0&&this.clearcoatSpecularIndirect.mulAssign(e),this.sheen===!0&&this.sheenSpecularIndirect.mulAssign(e),t.indirectDiffuse.mulAssign(e),t.indirectSpecular.mulAssign(r)}finish(e){const{outgoingLight:t}=e;if(this.clearcoat===!0){const n=no.dot(Ut).clamp(),s=er({dotVH:n,f0:Rc,f90:Cc}),o=t.mul(jc.mul(s).oneMinus()).add(this.clearcoatSpecularDirect.add(this.clearcoatSpecularIndirect).mul(jc));t.assign(o)}if(this.sheen===!0){const n=to.r.max(to.g).max(to.b).mul(.157).oneMinus(),s=t.mul(n).add(this.sheenSpecularDirect,this.sheenSpecularIndirect);t.assign(s)}}}const ON=new Vd;class em extends Fn{constructor(e){super(),this.isMeshStandardNodeMaterial=!0,this.emissiveNode=null,this.metalnessNode=null,this.roughnessNode=null,this.setDefaultValues(ON),this.setValues(e)}setupLightingModel(){return new Gl}setupSpecular(){const e=rn(D(.04),Dt.rgb,Jr);Jn.assign(e),ea.assign(1)}setupVariants(){const e=this.metalnessNode?N(this.metalnessNode):LT;Jr.assign(e);let t=this.roughnessNode?N(this.roughnessNode):CT;t=mN({roughness:t}),es.assign(t),this.setupSpecular(),Dt.assign(Ee(Dt.rgb.mul(e.oneMinus()),Dt.a))}copy(e){return this.emissiveNode=e.emissiveNode,this.metalnessNode=e.metalnessNode,this.roughnessNode=e.roughnessNode,super.copy(e)}}yn("MeshStandardNodeMaterial",em);const FN=new pM;class tm extends em{constructor(e){super(),this.isMeshPhysicalNodeMaterial=!0,this.clearcoatNode=null,this.clearcoatRoughnessNode=null,this.clearcoatNormalNode=null,this.sheenNode=null,this.sheenRoughnessNode=null,this.iridescenceNode=null,this.iridescenceIORNode=null,this.iridescenceThicknessNode=null,this.specularIntensityNode=null,this.specularColorNode=null,this.iorNode=null,this.transmissionNode=null,this.thicknessNode=null,this.attenuationDistanceNode=null,this.attenuationColorNode=null,this.anisotropyNode=null,this.setDefaultValues(FN),this.setValues(e)}get useClearcoat(){return this.clearcoat>0||this.clearcoatNode!==null}get useIridescence(){return this.iridescence>0||this.iridescenceNode!==null}get useSheen(){return this.sheen>0||this.sheenNode!==null}get useAnisotropy(){return this.anisotropy>0||this.anisotropyNode!==null}get useTransmission(){return this.transmission>0||this.transmissionNode!==null}setupSpecular(){const e=this.iorNode?N(this.iorNode):XT;Gr.assign(e),Jn.assign(rn(Mo(yf(Gr.sub(1).div(Gr.add(1))).mul(wT),D(1)).mul(wh),Dt.rgb,Jr)),ea.assign(rn(wh,1,Jr))}setupLightingModel(){return new Gl(this.useClearcoat,this.useSheen,this.useIridescence,this.useAnisotropy,this.useTransmission)}setupVariants(e){if(super.setupVariants(e),this.useClearcoat){const t=this.clearcoatNode?N(this.clearcoatNode):IT,n=this.clearcoatRoughnessNode?N(this.clearcoatRoughnessNode):DT;jc.assign(t),Qr.assign(n)}if(this.useSheen){const t=this.sheenNode?D(this.sheenNode):FT,n=this.sheenRoughnessNode?N(this.sheenRoughnessNode):VT;to.assign(t),Ll.assign(n)}if(this.useIridescence){const t=this.iridescenceNode?N(this.iridescenceNode):BT,n=this.iridescenceIORNode?N(this.iridescenceIORNode):HT,s=this.iridescenceThicknessNode?N(this.iridescenceThicknessNode):GT;Pl.assign(t),sf.assign(n),of.assign(s)}if(this.useAnisotropy){const t=(this.anisotropyNode?Ae(this.anisotropyNode):zT).toVar();vs.assign(t.length()),Qe(vs.equal(0),()=>{t.assign(Ae(1,0))}).else(()=>{t.divAssign(vs),vs.assign(vs.saturate())}),$c.assign(vs.pow2().mix(es.pow2(),1)),Hr.assign(io[0].mul(t.x).add(io[1].mul(t.y))),lo.assign(io[1].mul(t.x).sub(io[0].mul(t.y)))}if(this.useTransmission){const t=this.transmissionNode?N(this.transmissionNode):kT,n=this.thicknessNode?N(this.thicknessNode):WT,s=this.attenuationDistanceNode?N(this.attenuationDistanceNode):qT,o=this.attenuationColorNode?D(this.attenuationColorNode):YT;Kc.assign(t),rf.assign(n),af.assign(s),cf.assign(o)}}setupNormal(e){super.setupNormal(e);const t=this.clearcoatNormalNode?D(this.clearcoatNormalNode):UT;no.assign(t)}copy(e){return this.clearcoatNode=e.clearcoatNode,this.clearcoatRoughnessNode=e.clearcoatRoughnessNode,this.clearcoatNormalNode=e.clearcoatNormalNode,this.sheenNode=e.sheenNode,this.sheenRoughnessNode=e.sheenRoughnessNode,this.iridescenceNode=e.iridescenceNode,this.iridescenceIORNode=e.iridescenceIORNode,this.iridescenceThicknessNode=e.iridescenceThicknessNode,this.specularIntensityNode=e.specularIntensityNode,this.specularColorNode=e.specularColorNode,this.transmissionNode=e.transmissionNode,this.thicknessNode=e.thicknessNode,this.attenuationDistanceNode=e.attenuationDistanceNode,this.attenuationColorNode=e.attenuationColorNode,this.anisotropyNode=e.anisotropyNode,super.copy(e)}}yn("MeshPhysicalNodeMaterial",tm);class VN extends Gl{constructor(e,t,n,s){super(e,t,n),this.useSSS=s}direct({lightDirection:e,lightColor:t,reflectedLight:n},s,o){if(this.useSSS===!0){const r=o.material,{thicknessColorNode:a,thicknessDistortionNode:c,thicknessAmbientNode:l,thicknessAttenuationNode:u,thicknessPowerNode:h,thicknessScaleNode:d}=r,m=e.add(Ft.mul(c)).normalize(),g=N(Ut.dot(m.negate()).saturate().pow(h).mul(d)),_=D(g.add(l).mul(a));n.directDiffuse.addAssign(_.mul(u.mul(t)))}super.direct({lightDirection:e,lightColor:t,reflectedLight:n},s,o)}}class zN extends tm{constructor(e){super(e),this.thicknessColorNode=null,this.thicknessDistortionNode=N(.1),this.thicknessAmbientNode=N(0),this.thicknessAttenuationNode=N(.1),this.thicknessPowerNode=N(2),this.thicknessScaleNode=N(10)}get useSSS(){return this.thicknessColorNode!==null}setupLightingModel(){return new VN(this.useClearcoat,this.useSheen,this.useIridescence,this.useSSS)}copy(e){return this.thicknessColorNode=e.thicknessColorNode,this.thicknessDistortionNode=e.thicknessDistortionNode,this.thicknessAmbientNode=e.thicknessAmbientNode,this.thicknessAttenuationNode=e.thicknessAttenuationNode,this.thicknessPowerNode=e.thicknessPowerNode,this.thicknessScaleNode=e.thicknessScaleNode,super.copy(e)}}yn("MeshSSSNodeMaterial",zN);const BN=new Od;class HN extends Fn{constructor(e){super(),this.isPointsNodeMaterial=!0,this.lights=!1,this.normals=!1,this.transparent=!0,this.sizeNode=null,this.setDefaultValues(BN),this.setValues(e)}copy(e){return this.sizeNode=e.sizeNode,super.copy(e)}}yn("PointsNodeMaterial",HN);const GN=new hM;class kN extends Fn{constructor(e){super(),this.isSpriteNodeMaterial=!0,this.lights=!1,this.normals=!1,this.positionNode=null,this.rotationNode=null,this.scaleNode=null,this.setDefaultValues(GN),this.setValues(e)}setupPosition({object:e,context:t}){const{positionNode:n,rotationNode:s,scaleNode:o}=this,r=pn;let a=Rs.mul(D(n||0)),c=Ae(Ko[0].xyz.length(),Ko[1].xyz.length());o!==null&&(c=c.mul(o));let l=r.xy;e.center&&e.center.isVector2===!0&&(l=l.sub(Tt(e.center).sub(.5))),l=l.mul(c);const u=N(s||OT),h=l.rotate(u);a=Ee(a.xy.add(h),a.zw);const d=fi.mul(a);return t.vertex=r,d}copy(e){return this.positionNode=e.positionNode,this.rotationNode=e.rotationNode,this.scaleNode=e.scaleNode,super.copy(e)}}yn("SpriteNodeMaterial",kN);class WN extends Cl{constructor(){super(),this.shadowNode=N(1).toVar("shadowMask")}direct({shadowMask:e}){this.shadowNode.mulAssign(e)}finish(e){Dt.a.mulAssign(this.shadowNode.oneMinus()),e.outgoingLight.rgb.assign(Dt.rgb)}}const XN=new fM;class qN extends Fn{constructor(e){super(),this.isShadowNodeMaterial=!0,this.lights=!0,this.setDefaultValues(XN),this.setValues(e)}setupLightingModel(){return new WN}}yn("ShadowNodeMaterial",qN);const fo=$(([i,e,t])=>{const n=N(t).toVar(),s=N(e).toVar(),o=ws(i).toVar();return Pn(o,s,n)}),tr=$(([i,e])=>{const t=ws(e).toVar(),n=N(i).toVar();return Pn(t,n.negate(),n)}),Vt=$(([i])=>{const e=N(i).toVar();return C(No(e))}),wt=$(([i,e])=>{const t=N(i).toVar();return e.assign(Vt(t)),t.sub(N(e))}),nm=$(([i,e,t,n,s,o])=>{const r=N(o).toVar(),a=N(s).toVar(),c=N(n).toVar(),l=N(t).toVar(),u=N(e).toVar(),h=N(i).toVar(),d=N(zt(1,a)).toVar();return zt(1,r).mul(h.mul(d).add(u.mul(a))).add(r.mul(l.mul(d).add(c.mul(a))))}),im=$(([i,e,t,n,s,o])=>{const r=N(o).toVar(),a=N(s).toVar(),c=D(n).toVar(),l=D(t).toVar(),u=D(e).toVar(),h=D(i).toVar(),d=N(zt(1,a)).toVar();return zt(1,r).mul(h.mul(d).add(u.mul(a))).add(r.mul(l.mul(d).add(c.mul(a))))}),sm=Yn([nm,im]),om=$(([i,e,t,n,s,o,r,a,c,l,u])=>{const h=N(u).toVar(),d=N(l).toVar(),m=N(c).toVar(),g=N(a).toVar(),_=N(r).toVar(),p=N(o).toVar(),f=N(s).toVar(),E=N(n).toVar(),y=N(t).toVar(),A=N(e).toVar(),F=N(i).toVar(),R=N(zt(1,m)).toVar(),b=N(zt(1,d)).toVar();return N(zt(1,h)).toVar().mul(b.mul(F.mul(R).add(A.mul(m))).add(d.mul(y.mul(R).add(E.mul(m))))).add(h.mul(b.mul(f.mul(R).add(p.mul(m))).add(d.mul(_.mul(R).add(g.mul(m))))))}),rm=$(([i,e,t,n,s,o,r,a,c,l,u])=>{const h=N(u).toVar(),d=N(l).toVar(),m=N(c).toVar(),g=D(a).toVar(),_=D(r).toVar(),p=D(o).toVar(),f=D(s).toVar(),E=D(n).toVar(),y=D(t).toVar(),A=D(e).toVar(),F=D(i).toVar(),R=N(zt(1,m)).toVar(),b=N(zt(1,d)).toVar();return N(zt(1,h)).toVar().mul(b.mul(F.mul(R).add(A.mul(m))).add(d.mul(y.mul(R).add(E.mul(m))))).add(h.mul(b.mul(f.mul(R).add(p.mul(m))).add(d.mul(_.mul(R).add(g.mul(m))))))}),am=Yn([om,rm]),cm=$(([i,e,t])=>{const n=N(t).toVar(),s=N(e).toVar(),o=me(i).toVar(),r=me(o.bitAnd(me(7))).toVar(),a=N(fo(r.lessThan(me(4)),s,n)).toVar(),c=N(ot(2,fo(r.lessThan(me(4)),n,s))).toVar();return tr(a,ws(r.bitAnd(me(1)))).add(tr(c,ws(r.bitAnd(me(2)))))}),lm=$(([i,e,t,n])=>{const s=N(n).toVar(),o=N(t).toVar(),r=N(e).toVar(),a=me(i).toVar(),c=me(a.bitAnd(me(15))).toVar(),l=N(fo(c.lessThan(me(8)),r,o)).toVar(),u=N(fo(c.lessThan(me(4)),o,fo(c.equal(me(12)).or(c.equal(me(14))),r,s))).toVar();return tr(l,ws(c.bitAnd(me(1)))).add(tr(u,ws(c.bitAnd(me(2)))))}),Qt=Yn([cm,lm]),um=$(([i,e,t])=>{const n=N(t).toVar(),s=N(e).toVar(),o=ar(i).toVar();return D(Qt(o.x,s,n),Qt(o.y,s,n),Qt(o.z,s,n))}),hm=$(([i,e,t,n])=>{const s=N(n).toVar(),o=N(t).toVar(),r=N(e).toVar(),a=ar(i).toVar();return D(Qt(a.x,r,o,s),Qt(a.y,r,o,s),Qt(a.z,r,o,s))}),Hn=Yn([um,hm]),dm=$(([i])=>{const e=N(i).toVar();return ot(.6616,e)}),fm=$(([i])=>{const e=N(i).toVar();return ot(.982,e)}),pm=$(([i])=>{const e=D(i).toVar();return ot(.6616,e)}),mm=Yn([dm,pm]),gm=$(([i])=>{const e=D(i).toVar();return ot(.982,e)}),_m=Yn([fm,gm]),Sn=$(([i,e])=>{const t=C(e).toVar(),n=me(i).toVar();return n.shiftLeft(t).bitOr(n.shiftRight(C(32).sub(t)))}),xm=$(([i,e,t])=>{i.subAssign(t),i.bitXorAssign(Sn(t,C(4))),t.addAssign(e),e.subAssign(i),e.bitXorAssign(Sn(i,C(6))),i.addAssign(t),t.subAssign(e),t.bitXorAssign(Sn(e,C(8))),e.addAssign(i),i.subAssign(t),i.bitXorAssign(Sn(t,C(16))),t.addAssign(e),e.subAssign(i),e.bitXorAssign(Sn(i,C(19))),i.addAssign(t),t.subAssign(e),t.bitXorAssign(Sn(e,C(4))),e.addAssign(i)}),Lo=$(([i,e,t])=>{const n=me(t).toVar(),s=me(e).toVar(),o=me(i).toVar();return n.bitXorAssign(s),n.subAssign(Sn(s,C(14))),o.bitXorAssign(n),o.subAssign(Sn(n,C(11))),s.bitXorAssign(o),s.subAssign(Sn(o,C(25))),n.bitXorAssign(s),n.subAssign(Sn(s,C(16))),o.bitXorAssign(n),o.subAssign(Sn(n,C(4))),s.bitXorAssign(o),s.subAssign(Sn(o,C(14))),n.bitXorAssign(s),n.subAssign(Sn(s,C(24))),n}),on=$(([i])=>{const e=me(i).toVar();return N(e).div(N(me(C(4294967295))))}),si=$(([i])=>{const e=N(i).toVar();return e.mul(e.mul(e.mul(e.mul(e.mul(6).sub(15)).add(10))))}),vm=$(([i])=>{const e=C(i).toVar(),t=me(me(1)).toVar(),n=me(me(C(3735928559)).add(t.shiftLeft(me(2)).add(me(13)))).toVar();return Lo(n.add(me(e)),n,n)}),ym=$(([i,e])=>{const t=C(e).toVar(),n=C(i).toVar(),s=me(me(2)).toVar(),o=me().toVar(),r=me().toVar(),a=me().toVar();return o.assign(r.assign(a.assign(me(C(3735928559)).add(s.shiftLeft(me(2)).add(me(13)))))),o.addAssign(me(n)),r.addAssign(me(t)),Lo(o,r,a)}),Mm=$(([i,e,t])=>{const n=C(t).toVar(),s=C(e).toVar(),o=C(i).toVar(),r=me(me(3)).toVar(),a=me().toVar(),c=me().toVar(),l=me().toVar();return a.assign(c.assign(l.assign(me(C(3735928559)).add(r.shiftLeft(me(2)).add(me(13)))))),a.addAssign(me(o)),c.addAssign(me(s)),l.addAssign(me(n)),Lo(a,c,l)}),Sm=$(([i,e,t,n])=>{const s=C(n).toVar(),o=C(t).toVar(),r=C(e).toVar(),a=C(i).toVar(),c=me(me(4)).toVar(),l=me().toVar(),u=me().toVar(),h=me().toVar();return l.assign(u.assign(h.assign(me(C(3735928559)).add(c.shiftLeft(me(2)).add(me(13)))))),l.addAssign(me(a)),u.addAssign(me(r)),h.addAssign(me(o)),xm(l,u,h),l.addAssign(me(s)),Lo(l,u,h)}),Tm=$(([i,e,t,n,s])=>{const o=C(s).toVar(),r=C(n).toVar(),a=C(t).toVar(),c=C(e).toVar(),l=C(i).toVar(),u=me(me(5)).toVar(),h=me().toVar(),d=me().toVar(),m=me().toVar();return h.assign(d.assign(m.assign(me(C(3735928559)).add(u.shiftLeft(me(2)).add(me(13)))))),h.addAssign(me(l)),d.addAssign(me(c)),m.addAssign(me(a)),xm(h,d,m),h.addAssign(me(r)),d.addAssign(me(o)),Lo(h,d,m)}),ut=Yn([vm,ym,Mm,Sm,Tm]),Em=$(([i,e])=>{const t=C(e).toVar(),n=C(i).toVar(),s=me(ut(n,t)).toVar(),o=ar().toVar();return o.x.assign(s.bitAnd(C(255))),o.y.assign(s.shiftRight(C(8)).bitAnd(C(255))),o.z.assign(s.shiftRight(C(16)).bitAnd(C(255))),o}),Am=$(([i,e,t])=>{const n=C(t).toVar(),s=C(e).toVar(),o=C(i).toVar(),r=me(ut(o,s,n)).toVar(),a=ar().toVar();return a.x.assign(r.bitAnd(C(255))),a.y.assign(r.shiftRight(C(8)).bitAnd(C(255))),a.z.assign(r.shiftRight(C(16)).bitAnd(C(255))),a}),Gn=Yn([Em,Am]),Nm=$(([i])=>{const e=Ae(i).toVar(),t=C().toVar(),n=C().toVar(),s=N(wt(e.x,t)).toVar(),o=N(wt(e.y,n)).toVar(),r=N(si(s)).toVar(),a=N(si(o)).toVar(),c=N(sm(Qt(ut(t,n),s,o),Qt(ut(t.add(C(1)),n),s.sub(1),o),Qt(ut(t,n.add(C(1))),s,o.sub(1)),Qt(ut(t.add(C(1)),n.add(C(1))),s.sub(1),o.sub(1)),r,a)).toVar();return mm(c)}),bm=$(([i])=>{const e=D(i).toVar(),t=C().toVar(),n=C().toVar(),s=C().toVar(),o=N(wt(e.x,t)).toVar(),r=N(wt(e.y,n)).toVar(),a=N(wt(e.z,s)).toVar(),c=N(si(o)).toVar(),l=N(si(r)).toVar(),u=N(si(a)).toVar(),h=N(am(Qt(ut(t,n,s),o,r,a),Qt(ut(t.add(C(1)),n,s),o.sub(1),r,a),Qt(ut(t,n.add(C(1)),s),o,r.sub(1),a),Qt(ut(t.add(C(1)),n.add(C(1)),s),o.sub(1),r.sub(1),a),Qt(ut(t,n,s.add(C(1))),o,r,a.sub(1)),Qt(ut(t.add(C(1)),n,s.add(C(1))),o.sub(1),r,a.sub(1)),Qt(ut(t,n.add(C(1)),s.add(C(1))),o,r.sub(1),a.sub(1)),Qt(ut(t.add(C(1)),n.add(C(1)),s.add(C(1))),o.sub(1),r.sub(1),a.sub(1)),c,l,u)).toVar();return _m(h)}),YN=Yn([Nm,bm]),wm=$(([i])=>{const e=Ae(i).toVar(),t=C().toVar(),n=C().toVar(),s=N(wt(e.x,t)).toVar(),o=N(wt(e.y,n)).toVar(),r=N(si(s)).toVar(),a=N(si(o)).toVar(),c=D(sm(Hn(Gn(t,n),s,o),Hn(Gn(t.add(C(1)),n),s.sub(1),o),Hn(Gn(t,n.add(C(1))),s,o.sub(1)),Hn(Gn(t.add(C(1)),n.add(C(1))),s.sub(1),o.sub(1)),r,a)).toVar();return mm(c)}),Rm=$(([i])=>{const e=D(i).toVar(),t=C().toVar(),n=C().toVar(),s=C().toVar(),o=N(wt(e.x,t)).toVar(),r=N(wt(e.y,n)).toVar(),a=N(wt(e.z,s)).toVar(),c=N(si(o)).toVar(),l=N(si(r)).toVar(),u=N(si(a)).toVar(),h=D(am(Hn(Gn(t,n,s),o,r,a),Hn(Gn(t.add(C(1)),n,s),o.sub(1),r,a),Hn(Gn(t,n.add(C(1)),s),o,r.sub(1),a),Hn(Gn(t.add(C(1)),n.add(C(1)),s),o.sub(1),r.sub(1),a),Hn(Gn(t,n,s.add(C(1))),o,r,a.sub(1)),Hn(Gn(t.add(C(1)),n,s.add(C(1))),o.sub(1),r,a.sub(1)),Hn(Gn(t,n.add(C(1)),s.add(C(1))),o,r.sub(1),a.sub(1)),Hn(Gn(t.add(C(1)),n.add(C(1)),s.add(C(1))),o.sub(1),r.sub(1),a.sub(1)),c,l,u)).toVar();return _m(h)}),jN=Yn([wm,Rm]),$N=$(([i])=>{const e=N(i).toVar(),t=C(Vt(e)).toVar();return on(ut(t))}),ZN=$(([i])=>{const e=Ae(i).toVar(),t=C(Vt(e.x)).toVar(),n=C(Vt(e.y)).toVar();return on(ut(t,n))}),KN=$(([i])=>{const e=D(i).toVar(),t=C(Vt(e.x)).toVar(),n=C(Vt(e.y)).toVar(),s=C(Vt(e.z)).toVar();return on(ut(t,n,s))}),JN=$(([i])=>{const e=Ee(i).toVar(),t=C(Vt(e.x)).toVar(),n=C(Vt(e.y)).toVar(),s=C(Vt(e.z)).toVar(),o=C(Vt(e.w)).toVar();return on(ut(t,n,s,o))}),Cm=$(([i])=>{const e=N(i).toVar(),t=C(Vt(e)).toVar();return D(on(ut(t,C(0))),on(ut(t,C(1))),on(ut(t,C(2))))}),Lm=$(([i])=>{const e=Ae(i).toVar(),t=C(Vt(e.x)).toVar(),n=C(Vt(e.y)).toVar();return D(on(ut(t,n,C(0))),on(ut(t,n,C(1))),on(ut(t,n,C(2))))}),Pm=$(([i])=>{const e=D(i).toVar(),t=C(Vt(e.x)).toVar(),n=C(Vt(e.y)).toVar(),s=C(Vt(e.z)).toVar();return D(on(ut(t,n,s,C(0))),on(ut(t,n,s,C(1))),on(ut(t,n,s,C(2))))}),Im=$(([i])=>{const e=Ee(i).toVar(),t=C(Vt(e.x)).toVar(),n=C(Vt(e.y)).toVar(),s=C(Vt(e.z)).toVar(),o=C(Vt(e.w)).toVar();return D(on(ut(t,n,s,o,C(0))),on(ut(t,n,s,o,C(1))),on(ut(t,n,s,o,C(2))))}),Dm=Yn([Cm,Lm,Pm,Im]),ca=$(([i,e,t,n])=>{const s=N(n).toVar(),o=N(t).toVar(),r=C(e).toVar(),a=D(i).toVar(),c=N(0).toVar(),l=N(1).toVar();return At({start:C(0),end:r},({i:u})=>{c.addAssign(l.mul(YN(a))),l.mulAssign(s),a.mulAssign(o)}),c}),Um=$(([i,e,t,n])=>{const s=N(n).toVar(),o=N(t).toVar(),r=C(e).toVar(),a=D(i).toVar(),c=D(0).toVar(),l=N(1).toVar();return At({start:C(0),end:r},({i:u})=>{c.addAssign(l.mul(jN(a))),l.mulAssign(s),a.mulAssign(o)}),c}),QN=$(([i,e,t,n])=>{const s=N(n).toVar(),o=N(t).toVar(),r=C(e).toVar(),a=D(i).toVar();return Ae(ca(a,r,o,s),ca(a.add(D(C(19),C(193),C(17))),r,o,s))}),eb=$(([i,e,t,n])=>{const s=N(n).toVar(),o=N(t).toVar(),r=C(e).toVar(),a=D(i).toVar(),c=D(Um(a,r,o,s)).toVar(),l=N(ca(a.add(D(C(19),C(193),C(17))),r,o,s)).toVar();return Ee(c,l)}),Om=$(([i,e,t,n,s,o,r])=>{const a=C(r).toVar(),c=N(o).toVar(),l=C(s).toVar(),u=C(n).toVar(),h=C(t).toVar(),d=C(e).toVar(),m=Ae(i).toVar(),g=D(Dm(Ae(d.add(u),h.add(l)))).toVar(),_=Ae(g.x,g.y).toVar();_.subAssign(.5),_.mulAssign(c),_.addAssign(.5);const p=Ae(Ae(N(d),N(h)).add(_)).toVar(),f=Ae(p.sub(m)).toVar();return Qe(a.equal(C(2)),()=>kt(f.x).add(kt(f.y))),Qe(a.equal(C(3)),()=>Un(kt(f.x),kt(f.y))),bo(f,f)}),Fm=$(([i,e,t,n,s,o,r,a,c])=>{const l=C(c).toVar(),u=N(a).toVar(),h=C(r).toVar(),d=C(o).toVar(),m=C(s).toVar(),g=C(n).toVar(),_=C(t).toVar(),p=C(e).toVar(),f=D(i).toVar(),E=D(Dm(D(p.add(m),_.add(d),g.add(h)))).toVar();E.subAssign(.5),E.mulAssign(u),E.addAssign(.5);const y=D(D(N(p),N(_),N(g)).add(E)).toVar(),A=D(y.sub(f)).toVar();return Qe(l.equal(C(2)),()=>kt(A.x).add(kt(A.y).add(kt(A.z)))),Qe(l.equal(C(3)),()=>Un(Un(kt(A.x),kt(A.y)),kt(A.z))),bo(A,A)}),Po=Yn([Om,Fm]),tb=$(([i,e,t])=>{const n=C(t).toVar(),s=N(e).toVar(),o=Ae(i).toVar(),r=C().toVar(),a=C().toVar(),c=Ae(wt(o.x,r),wt(o.y,a)).toVar(),l=N(1e6).toVar();return At({start:-1,end:C(1),name:"x",condition:"<="},({x:u})=>{At({start:-1,end:C(1),name:"y",condition:"<="},({y:h})=>{const d=N(Po(c,u,h,r,a,s,n)).toVar();l.assign(Mo(l,d))})}),Qe(n.equal(C(0)),()=>{l.assign(Ps(l))}),l}),nb=$(([i,e,t])=>{const n=C(t).toVar(),s=N(e).toVar(),o=Ae(i).toVar(),r=C().toVar(),a=C().toVar(),c=Ae(wt(o.x,r),wt(o.y,a)).toVar(),l=Ae(1e6,1e6).toVar();return At({start:-1,end:C(1),name:"x",condition:"<="},({x:u})=>{At({start:-1,end:C(1),name:"y",condition:"<="},({y:h})=>{const d=N(Po(c,u,h,r,a,s,n)).toVar();Qe(d.lessThan(l.x),()=>{l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.y.assign(d)})})}),Qe(n.equal(C(0)),()=>{l.assign(Ps(l))}),l}),ib=$(([i,e,t])=>{const n=C(t).toVar(),s=N(e).toVar(),o=Ae(i).toVar(),r=C().toVar(),a=C().toVar(),c=Ae(wt(o.x,r),wt(o.y,a)).toVar(),l=D(1e6,1e6,1e6).toVar();return At({start:-1,end:C(1),name:"x",condition:"<="},({x:u})=>{At({start:-1,end:C(1),name:"y",condition:"<="},({y:h})=>{const d=N(Po(c,u,h,r,a,s,n)).toVar();Qe(d.lessThan(l.x),()=>{l.z.assign(l.y),l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.z.assign(l.y),l.y.assign(d)}).elseif(d.lessThan(l.z),()=>{l.z.assign(d)})})}),Qe(n.equal(C(0)),()=>{l.assign(Ps(l))}),l}),sb=$(([i,e,t])=>{const n=C(t).toVar(),s=N(e).toVar(),o=D(i).toVar(),r=C().toVar(),a=C().toVar(),c=C().toVar(),l=D(wt(o.x,r),wt(o.y,a),wt(o.z,c)).toVar(),u=N(1e6).toVar();return At({start:-1,end:C(1),name:"x",condition:"<="},({x:h})=>{At({start:-1,end:C(1),name:"y",condition:"<="},({y:d})=>{At({start:-1,end:C(1),name:"z",condition:"<="},({z:m})=>{const g=N(Po(l,h,d,m,r,a,c,s,n)).toVar();u.assign(Mo(u,g))})})}),Qe(n.equal(C(0)),()=>{u.assign(Ps(u))}),u}),ob=$(([i,e,t])=>{const n=C(t).toVar(),s=N(e).toVar(),o=D(i).toVar(),r=C().toVar(),a=C().toVar(),c=C().toVar(),l=D(wt(o.x,r),wt(o.y,a),wt(o.z,c)).toVar(),u=Ae(1e6,1e6).toVar();return At({start:-1,end:C(1),name:"x",condition:"<="},({x:h})=>{At({start:-1,end:C(1),name:"y",condition:"<="},({y:d})=>{At({start:-1,end:C(1),name:"z",condition:"<="},({z:m})=>{const g=N(Po(l,h,d,m,r,a,c,s,n)).toVar();Qe(g.lessThan(u.x),()=>{u.y.assign(u.x),u.x.assign(g)}).elseif(g.lessThan(u.y),()=>{u.y.assign(g)})})})}),Qe(n.equal(C(0)),()=>{u.assign(Ps(u))}),u}),rb=$(([i,e,t])=>{const n=C(t).toVar(),s=N(e).toVar(),o=D(i).toVar(),r=C().toVar(),a=C().toVar(),c=C().toVar(),l=D(wt(o.x,r),wt(o.y,a),wt(o.z,c)).toVar(),u=D(1e6,1e6,1e6).toVar();return At({start:-1,end:C(1),name:"x",condition:"<="},({x:h})=>{At({start:-1,end:C(1),name:"y",condition:"<="},({y:d})=>{At({start:-1,end:C(1),name:"z",condition:"<="},({z:m})=>{const g=N(Po(l,h,d,m,r,a,c,s,n)).toVar();Qe(g.lessThan(u.x),()=>{u.z.assign(u.y),u.y.assign(u.x),u.x.assign(g)}).elseif(g.lessThan(u.y),()=>{u.z.assign(u.y),u.y.assign(g)}).elseif(g.lessThan(u.z),()=>{u.z.assign(g)})})})}),Qe(n.equal(C(0)),()=>{u.assign(Ps(u))}),u});fo.setLayout({name:"mx_select",type:"float",inputs:[{name:"b",type:"bool"},{name:"t",type:"float"},{name:"f",type:"float"}]});tr.setLayout({name:"mx_negate_if",type:"float",inputs:[{name:"val",type:"float"},{name:"b",type:"bool"}]});Vt.setLayout({name:"mx_floor",type:"int",inputs:[{name:"x",type:"float"}]});nm.setLayout({name:"mx_bilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"}]});im.setLayout({name:"mx_bilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"}]});om.setLayout({name:"mx_trilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"v4",type:"float"},{name:"v5",type:"float"},{name:"v6",type:"float"},{name:"v7",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});rm.setLayout({name:"mx_trilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"v4",type:"vec3"},{name:"v5",type:"vec3"},{name:"v6",type:"vec3"},{name:"v7",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});cm.setLayout({name:"mx_gradient_float_0",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"}]});lm.setLayout({name:"mx_gradient_float_1",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});um.setLayout({name:"mx_gradient_vec3_0",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"}]});hm.setLayout({name:"mx_gradient_vec3_1",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});dm.setLayout({name:"mx_gradient_scale2d_0",type:"float",inputs:[{name:"v",type:"float"}]});fm.setLayout({name:"mx_gradient_scale3d_0",type:"float",inputs:[{name:"v",type:"float"}]});pm.setLayout({name:"mx_gradient_scale2d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});gm.setLayout({name:"mx_gradient_scale3d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});Sn.setLayout({name:"mx_rotl32",type:"uint",inputs:[{name:"x",type:"uint"},{name:"k",type:"int"}]});Lo.setLayout({name:"mx_bjfinal",type:"uint",inputs:[{name:"a",type:"uint"},{name:"b",type:"uint"},{name:"c",type:"uint"}]});on.setLayout({name:"mx_bits_to_01",type:"float",inputs:[{name:"bits",type:"uint"}]});si.setLayout({name:"mx_fade",type:"float",inputs:[{name:"t",type:"float"}]});vm.setLayout({name:"mx_hash_int_0",type:"uint",inputs:[{name:"x",type:"int"}]});ym.setLayout({name:"mx_hash_int_1",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});Mm.setLayout({name:"mx_hash_int_2",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});Sm.setLayout({name:"mx_hash_int_3",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"}]});Tm.setLayout({name:"mx_hash_int_4",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"},{name:"yy",type:"int"}]});Em.setLayout({name:"mx_hash_vec3_0",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});Am.setLayout({name:"mx_hash_vec3_1",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});Nm.setLayout({name:"mx_perlin_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"}]});bm.setLayout({name:"mx_perlin_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"}]});wm.setLayout({name:"mx_perlin_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"}]});Rm.setLayout({name:"mx_perlin_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"}]});$N.setLayout({name:"mx_cell_noise_float_0",type:"float",inputs:[{name:"p",type:"float"}]});ZN.setLayout({name:"mx_cell_noise_float_1",type:"float",inputs:[{name:"p",type:"vec2"}]});KN.setLayout({name:"mx_cell_noise_float_2",type:"float",inputs:[{name:"p",type:"vec3"}]});JN.setLayout({name:"mx_cell_noise_float_3",type:"float",inputs:[{name:"p",type:"vec4"}]});Cm.setLayout({name:"mx_cell_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"float"}]});Lm.setLayout({name:"mx_cell_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec2"}]});Pm.setLayout({name:"mx_cell_noise_vec3_2",type:"vec3",inputs:[{name:"p",type:"vec3"}]});Im.setLayout({name:"mx_cell_noise_vec3_3",type:"vec3",inputs:[{name:"p",type:"vec4"}]});ca.setLayout({name:"mx_fractal_noise_float",type:"float",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});Um.setLayout({name:"mx_fractal_noise_vec3",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});QN.setLayout({name:"mx_fractal_noise_vec2",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});eb.setLayout({name:"mx_fractal_noise_vec4",type:"vec4",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});Om.setLayout({name:"mx_worley_distance_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});Fm.setLayout({name:"mx_worley_distance_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"zoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});tb.setLayout({name:"mx_worley_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});nb.setLayout({name:"mx_worley_noise_vec2_0",type:"vec2",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});ib.setLayout({name:"mx_worley_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});sb.setLayout({name:"mx_worley_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});ob.setLayout({name:"mx_worley_noise_vec2_1",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});rb.setLayout({name:"mx_worley_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});const ab=$(([i])=>{const e=D(i).toVar(),t=N(e.x).toVar(),n=N(e.y).toVar(),s=N(e.z).toVar();Qe(n.lessThan(1e-4),()=>D(s,s,s)).else(()=>{t.assign(ot(6,t.sub(No(t))));const o=C(xf(t)).toVar(),r=N(t.sub(N(o))).toVar(),a=N(s.mul(zt(1,n))).toVar(),c=N(s.mul(zt(1,n.mul(r)))).toVar(),l=N(s.mul(zt(1,n.mul(zt(1,r))))).toVar();return Qe(o.equal(C(0)),()=>D(s,l,a)).elseif(o.equal(C(1)),()=>D(c,s,a)).elseif(o.equal(C(2)),()=>D(a,s,l)).elseif(o.equal(C(3)),()=>D(a,c,s)).elseif(o.equal(C(4)),()=>D(l,a,s)),D(s,a,c)})}),cb=$(([i])=>{const e=D(i).toVar(),t=N(e.x).toVar(),n=N(e.y).toVar(),s=N(e.z).toVar(),o=N(Mo(t,Mo(n,s))).toVar(),r=N(Un(t,Un(n,s))).toVar(),a=N(r.sub(o)).toVar(),c=N().toVar(),l=N().toVar(),u=N().toVar();return u.assign(r),Qe(r.greaterThan(0),()=>{l.assign(a.div(r))}).else(()=>{l.assign(0)}),Qe(l.lessThanEqual(0),()=>{c.assign(0)}).else(()=>{Qe(t.greaterThanEqual(r),()=>{c.assign(n.sub(s).div(a))}).elseif(n.greaterThanEqual(r),()=>{c.assign(Dn(2,s.sub(t).div(a)))}).else(()=>{c.assign(Dn(4,t.sub(n).div(a)))}),c.mulAssign(1/6),Qe(c.lessThan(0),()=>{c.addAssign(1)})}),D(c,l,u)});ab.setLayout({name:"mx_hsvtorgb",type:"vec3",inputs:[{name:"hsv",type:"vec3"}]});cb.setLayout({name:"mx_rgbtohsv",type:"vec3",inputs:[{name:"c",type:"vec3"}]});const lb=$(([i])=>{const e=D(i).toVar(),t=$d(df(e,D(.04045))).toVar(),n=D(e.div(12.92)).toVar(),s=D(_i(Un(e.add(D(.055)),D(0)).div(1.055),D(2.4))).toVar();return rn(n,s,t)});lb.setLayout({name:"mx_srgb_texture_to_lin_rec709",type:"vec3",inputs:[{name:"color",type:"vec3"}]});const Kh={type:"change"},Lc={type:"start"},Jh={type:"end"},zr=new yd,Qh=new Ri,ub=Math.cos(70*gl.DEG2RAD);class hb extends zi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ds.ROTATE,MIDDLE:Ds.DOLLY,RIGHT:Ds.PAN},this.touches={ONE:Us.ROTATE,TWO:Us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(x){x.addEventListener("keydown",Ve),this._domElementKeyEvents=x},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ve),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Kh),n.update(),o=s.NONE},this.update=function(){const x=new L,O=new bs().setFromUnitVectors(e.up,new L(0,1,0)),B=O.clone().invert(),se=new L,de=new bs,We=new L,Ke=2*Math.PI;return function(Kt=null){const rt=n.object.position;x.copy(rt).sub(n.target),x.applyQuaternion(O),a.setFromVector3(x),n.autoRotate&&o===s.NONE&&J(M(Kt)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Bt=n.minAzimuthAngle,Nt=n.maxAzimuthAngle;isFinite(Bt)&&isFinite(Nt)&&(Bt<-Math.PI?Bt+=Ke:Bt>Math.PI&&(Bt-=Ke),Nt<-Math.PI?Nt+=Ke:Nt>Math.PI&&(Nt-=Ke),Bt<=Nt?a.theta=Math.max(Bt,Math.min(Nt,a.theta)):a.theta=a.theta>(Bt+Nt)/2?Math.max(Bt,a.theta):Math.min(Nt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Hi=!1;if(n.zoomToCursor&&R||n.object.isOrthographicCamera)a.radius=le(a.radius);else{const Vn=a.radius;a.radius=le(a.radius*l),Hi=Vn!=a.radius}if(x.setFromSpherical(a),x.applyQuaternion(B),rt.copy(n.target).add(x),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&R){let Vn=null;if(n.object.isPerspectiveCamera){const Gi=x.length();Vn=le(Gi*l);const Mi=Gi-Vn;n.object.position.addScaledVector(A,Mi),n.object.updateMatrixWorld(),Hi=!!Mi}else if(n.object.isOrthographicCamera){const Gi=new L(F.x,F.y,0);Gi.unproject(n.object);const Mi=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Hi=Mi!==n.object.zoom;const Io=new L(F.x,F.y,0);Io.unproject(n.object),n.object.position.sub(Io).add(Gi),n.object.updateMatrixWorld(),Vn=x.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Vn!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Vn).add(n.object.position):(zr.origin.copy(n.object.position),zr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(zr.direction))<ub?e.lookAt(n.target):(Qh.setFromNormalAndCoplanarPoint(n.object.up,n.target),zr.intersectPlane(Qh,n.target))))}else if(n.object.isOrthographicCamera){const Vn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),Vn!==n.object.zoom&&(n.object.updateProjectionMatrix(),Hi=!0)}return l=1,R=!1,Hi||se.distanceToSquared(n.object.position)>r||8*(1-de.dot(n.object.quaternion))>r||We.distanceToSquared(n.target)>r?(n.dispatchEvent(Kh),se.copy(n.object.position),de.copy(n.object.quaternion),We.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",st),n.domElement.removeEventListener("pointerdown",w),n.domElement.removeEventListener("pointercancel",Y),n.domElement.removeEventListener("wheel",re),n.domElement.removeEventListener("pointermove",v),n.domElement.removeEventListener("pointerup",Y),n.domElement.getRootNode().removeEventListener("keydown",ve,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ve),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=s.NONE;const r=1e-6,a=new _h,c=new _h;let l=1;const u=new L,h=new Te,d=new Te,m=new Te,g=new Te,_=new Te,p=new Te,f=new Te,E=new Te,y=new Te,A=new L,F=new Te;let R=!1;const b=[],H={};let T=!1;function M(x){return x!==null?2*Math.PI/60*n.autoRotateSpeed*x:2*Math.PI/60/60*n.autoRotateSpeed}function G(x){const O=Math.abs(x*.01);return Math.pow(.95,n.zoomSpeed*O)}function J(x){c.theta-=x}function I(x){c.phi-=x}const ne=function(){const x=new L;return function(B,se){x.setFromMatrixColumn(se,0),x.multiplyScalar(-B),u.add(x)}}(),te=function(){const x=new L;return function(B,se){n.screenSpacePanning===!0?x.setFromMatrixColumn(se,1):(x.setFromMatrixColumn(se,0),x.crossVectors(n.object.up,x)),x.multiplyScalar(B),u.add(x)}}(),ae=function(){const x=new L;return function(B,se){const de=n.domElement;if(n.object.isPerspectiveCamera){const We=n.object.position;x.copy(We).sub(n.target);let Ke=x.length();Ke*=Math.tan(n.object.fov/2*Math.PI/180),ne(2*B*Ke/de.clientHeight,n.object.matrix),te(2*se*Ke/de.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ne(B*(n.object.right-n.object.left)/n.object.zoom/de.clientWidth,n.object.matrix),te(se*(n.object.top-n.object.bottom)/n.object.zoom/de.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function ce(x){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(x){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ue(x,O){if(!n.zoomToCursor)return;R=!0;const B=n.domElement.getBoundingClientRect(),se=x-B.left,de=O-B.top,We=B.width,Ke=B.height;F.x=se/We*2-1,F.y=-(de/Ke)*2+1,A.set(F.x,F.y,1).unproject(n.object).sub(n.object.position).normalize()}function le(x){return Math.max(n.minDistance,Math.min(n.maxDistance,x))}function be(x){h.set(x.clientX,x.clientY)}function et(x){ue(x.clientX,x.clientX),f.set(x.clientX,x.clientY)}function dt(x){g.set(x.clientX,x.clientY)}function K(x){d.set(x.clientX,x.clientY),m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const O=n.domElement;J(2*Math.PI*m.x/O.clientHeight),I(2*Math.PI*m.y/O.clientHeight),h.copy(d),n.update()}function he(x){E.set(x.clientX,x.clientY),y.subVectors(E,f),y.y>0?ce(G(y.y)):y.y<0&&j(G(y.y)),f.copy(E),n.update()}function Se(x){_.set(x.clientX,x.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),ae(p.x,p.y),g.copy(_),n.update()}function ge(x){ue(x.clientX,x.clientY),x.deltaY<0?j(G(x.deltaY)):x.deltaY>0&&ce(G(x.deltaY)),n.update()}function tt(x){let O=!1;switch(x.code){case n.keys.UP:x.ctrlKey||x.metaKey||x.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ae(0,n.keyPanSpeed),O=!0;break;case n.keys.BOTTOM:x.ctrlKey||x.metaKey||x.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ae(0,-n.keyPanSpeed),O=!0;break;case n.keys.LEFT:x.ctrlKey||x.metaKey||x.shiftKey?J(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ae(n.keyPanSpeed,0),O=!0;break;case n.keys.RIGHT:x.ctrlKey||x.metaKey||x.shiftKey?J(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ae(-n.keyPanSpeed,0),O=!0;break}O&&(x.preventDefault(),n.update())}function $e(x){if(b.length===1)h.set(x.pageX,x.pageY);else{const O=vt(x),B=.5*(x.pageX+O.x),se=.5*(x.pageY+O.y);h.set(B,se)}}function z(x){if(b.length===1)g.set(x.pageX,x.pageY);else{const O=vt(x),B=.5*(x.pageX+O.x),se=.5*(x.pageY+O.y);g.set(B,se)}}function _t(x){const O=vt(x),B=x.pageX-O.x,se=x.pageY-O.y,de=Math.sqrt(B*B+se*se);f.set(0,de)}function Pe(x){n.enableZoom&&_t(x),n.enablePan&&z(x)}function xt(x){n.enableZoom&&_t(x),n.enableRotate&&$e(x)}function De(x){if(b.length==1)d.set(x.pageX,x.pageY);else{const B=vt(x),se=.5*(x.pageX+B.x),de=.5*(x.pageY+B.y);d.set(se,de)}m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const O=n.domElement;J(2*Math.PI*m.x/O.clientHeight),I(2*Math.PI*m.y/O.clientHeight),h.copy(d)}function nt(x){if(b.length===1)_.set(x.pageX,x.pageY);else{const O=vt(x),B=.5*(x.pageX+O.x),se=.5*(x.pageY+O.y);_.set(B,se)}p.subVectors(_,g).multiplyScalar(n.panSpeed),ae(p.x,p.y),g.copy(_)}function Ge(x){const O=vt(x),B=x.pageX-O.x,se=x.pageY-O.y,de=Math.sqrt(B*B+se*se);E.set(0,de),y.set(0,Math.pow(E.y/f.y,n.zoomSpeed)),ce(y.y),f.copy(E);const We=(x.pageX+O.x)*.5,Ke=(x.pageY+O.y)*.5;ue(We,Ke)}function it(x){n.enableZoom&&Ge(x),n.enablePan&&nt(x)}function Rt(x){n.enableZoom&&Ge(x),n.enableRotate&&De(x)}function w(x){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(x.pointerId),n.domElement.addEventListener("pointermove",v),n.domElement.addEventListener("pointerup",Y)),!ke(x)&&(Ie(x),x.pointerType==="touch"?fe(x):ie(x)))}function v(x){n.enabled!==!1&&(x.pointerType==="touch"?Ce(x):oe(x))}function Y(x){switch(Me(x),b.length){case 0:n.domElement.releasePointerCapture(x.pointerId),n.domElement.removeEventListener("pointermove",v),n.domElement.removeEventListener("pointerup",Y),n.dispatchEvent(Jh),o=s.NONE;break;case 1:const O=b[0],B=H[O];fe({pointerId:O,pageX:B.x,pageY:B.y});break}}function ie(x){let O;switch(x.button){case 0:O=n.mouseButtons.LEFT;break;case 1:O=n.mouseButtons.MIDDLE;break;case 2:O=n.mouseButtons.RIGHT;break;default:O=-1}switch(O){case Ds.DOLLY:if(n.enableZoom===!1)return;et(x),o=s.DOLLY;break;case Ds.ROTATE:if(x.ctrlKey||x.metaKey||x.shiftKey){if(n.enablePan===!1)return;dt(x),o=s.PAN}else{if(n.enableRotate===!1)return;be(x),o=s.ROTATE}break;case Ds.PAN:if(x.ctrlKey||x.metaKey||x.shiftKey){if(n.enableRotate===!1)return;be(x),o=s.ROTATE}else{if(n.enablePan===!1)return;dt(x),o=s.PAN}break;default:o=s.NONE}o!==s.NONE&&n.dispatchEvent(Lc)}function oe(x){switch(o){case s.ROTATE:if(n.enableRotate===!1)return;K(x);break;case s.DOLLY:if(n.enableZoom===!1)return;he(x);break;case s.PAN:if(n.enablePan===!1)return;Se(x);break}}function re(x){n.enabled===!1||n.enableZoom===!1||o!==s.NONE||(x.preventDefault(),n.dispatchEvent(Lc),ge(Le(x)),n.dispatchEvent(Jh))}function Le(x){const O=x.deltaMode,B={clientX:x.clientX,clientY:x.clientY,deltaY:x.deltaY};switch(O){case 1:B.deltaY*=16;break;case 2:B.deltaY*=100;break}return x.ctrlKey&&!T&&(B.deltaY*=10),B}function ve(x){x.key==="Control"&&(T=!0,n.domElement.getRootNode().addEventListener("keyup",xe,{passive:!0,capture:!0}))}function xe(x){x.key==="Control"&&(T=!1,n.domElement.getRootNode().removeEventListener("keyup",xe,{passive:!0,capture:!0}))}function Ve(x){n.enabled===!1||n.enablePan===!1||tt(x)}function fe(x){switch(Ze(x),b.length){case 1:switch(n.touches.ONE){case Us.ROTATE:if(n.enableRotate===!1)return;$e(x),o=s.TOUCH_ROTATE;break;case Us.PAN:if(n.enablePan===!1)return;z(x),o=s.TOUCH_PAN;break;default:o=s.NONE}break;case 2:switch(n.touches.TWO){case Us.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pe(x),o=s.TOUCH_DOLLY_PAN;break;case Us.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xt(x),o=s.TOUCH_DOLLY_ROTATE;break;default:o=s.NONE}break;default:o=s.NONE}o!==s.NONE&&n.dispatchEvent(Lc)}function Ce(x){switch(Ze(x),o){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;De(x),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;nt(x),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;it(x),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Rt(x),n.update();break;default:o=s.NONE}}function st(x){n.enabled!==!1&&x.preventDefault()}function Ie(x){b.push(x.pointerId)}function Me(x){delete H[x.pointerId];for(let O=0;O<b.length;O++)if(b[O]==x.pointerId){b.splice(O,1);return}}function ke(x){for(let O=0;O<b.length;O++)if(b[O]==x.pointerId)return!0;return!1}function Ze(x){let O=H[x.pointerId];O===void 0&&(O=new Te,H[x.pointerId]=O),O.set(x.pageX,x.pageY)}function vt(x){const O=x.pointerId===b[0]?b[1]:b[0];return H[O]}n.domElement.addEventListener("contextmenu",st),n.domElement.addEventListener("pointerdown",w),n.domElement.addEventListener("pointercancel",Y),n.domElement.addEventListener("wheel",re,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ve,{passive:!0,capture:!0}),this.update()}}const db=Math.PI/180;function Vi(i){return i*db}function kl(i,e){return Math.sqrt(i*i+e*e)}const Vm=new uM,hr=new Tn(75,window.innerWidth/window.innerHeight,.01,1e3),Ca=new lM({canvas:document.querySelector("#canvas")});Ca.setPixelRatio(window.devicePixelRatio);Ca.setSize(700,500);hr.aspect=700/500;hr.updateProjectionMatrix();hr.position.set(15,15,15);new hb(hr,Ca.domElement);const fb=new To(4.5,4.5,4.5);new hi({color:8421504,wireframe:!0});const pb=[new hi({color:16777215}),new hi({color:16766208}),new hi({color:12124160}),new hi({color:16734464}),new hi({color:17837}),new hi({color:39752})];function mb(){window.piece=[];for(let i=0,e=-5;i<3;i++,e+=5){piece[i]=[];for(let t=0,n=-5;t<3;t++,n+=5){piece[i][t]=[];for(let s=0,o=-5;s<3;s++,o+=5)piece[i][t][s]=new ni(fb,pb),piece[i][t][s].position.set(e,n,o),Vm.add(piece[i][t][s])}}}function gb(i){let e=i.position.x,t=i.position.z;return Math.atan2(t,e)}function _b(i){let e=i.position.x,t=i.position.y;return Math.atan2(e,t)}function xb(i){let e=i.position.z,t=i.position.y;return Math.atan2(t,e)}function vb(i,e){let t=kl(i.position.x,i.position.z),n=gb(i)+Vi(e);i.position.z=t*Math.sin(n),i.position.x=t*Math.cos(n);const s=new L(0,1,0);i.rotateOnWorldAxis(s,Vi(-e))}function yb(i,e){let t=kl(i.position.y,i.position.z),n=xb(i)+Vi(e);i.position.z=t*Math.cos(n),i.position.y=t*Math.sin(n);const s=new L(1,0,0);i.rotateOnWorldAxis(s,Vi(-e))}function Mb(i,e){let t=kl(i.position.x,i.position.y),n=_b(i)+Vi(e);i.position.y=t*Math.cos(n),i.position.x=t*Math.sin(n);const s=new L(0,0,1);i.rotateOnWorldAxis(s,Vi(-e))}function Pc(i,e){for(let n=0;n<3;n++)for(let s=0;s<3;s++)n==1&&s==1||vb(piece[n][e][s],i);const t=new L(0,1,0);piece[1][e][1].rotateOnWorldAxis(t,Vi(-i))}function Ic(i,e){for(let n=0;n<3;n++)for(let s=0;s<3;s++)n==1&&s==1||yb(piece[e][n][s],i);const t=new L(1,0,0);piece[e][1][1].rotateOnWorldAxis(t,Vi(-i))}function Dc(i,e){for(let n=0;n<3;n++)for(let s=0;s<3;s++)n==1&&s==1||Mb(piece[s][n][e],i);const t=new L(0,0,1);piece[1][1][e].rotateOnWorldAxis(t,Vi(-i))}function Uc(i,e){if(i>0){let t=piece[0][2][e];piece[0][2][e]=piece[0][0][e],piece[0][0][e]=piece[2][0][e],piece[2][0][e]=piece[2][2][e],piece[2][2][e]=t,t=piece[0][1][e],piece[0][1][e]=piece[1][0][e],piece[1][0][e]=piece[2][1][e],piece[2][1][e]=piece[1][2][e],piece[1][2][e]=t}else{let t=piece[0][2][e];piece[0][2][e]=piece[2][2][e],piece[2][2][e]=piece[2][0][e],piece[2][0][e]=piece[0][0][e],piece[0][0][e]=t,t=piece[0][1][e],piece[0][1][e]=piece[1][2][e],piece[1][2][e]=piece[2][1][e],piece[2][1][e]=piece[1][0][e],piece[1][0][e]=t}}function Oc(i,e){if(i>0){let t=piece[e][0][0];piece[e][0][0]=piece[e][2][0],piece[e][2][0]=piece[e][2][2],piece[e][2][2]=piece[e][0][2],piece[e][0][2]=t,t=piece[e][0][1],piece[e][0][1]=piece[e][1][0],piece[e][1][0]=piece[e][2][1],piece[e][2][1]=piece[e][1][2],piece[e][1][2]=t}else{let t=piece[e][0][0];piece[e][0][0]=piece[e][0][2],piece[e][0][2]=piece[e][2][2],piece[e][2][2]=piece[e][2][0],piece[e][2][0]=t,t=piece[e][0][1],piece[e][0][1]=piece[e][1][2],piece[e][1][2]=piece[e][2][1],piece[e][2][1]=piece[e][1][0],piece[e][1][0]=t}}function Fc(i,e){if(i>0){let t=piece[2][e][2];piece[2][e][2]=piece[2][e][0],piece[2][e][0]=piece[0][e][0],piece[0][e][0]=piece[0][e][2],piece[0][e][2]=t,t=piece[1][e][0],piece[1][e][0]=piece[0][e][1],piece[0][e][1]=piece[1][e][2],piece[1][e][2]=piece[2][e][1],piece[2][e][1]=t}else{let t=piece[2][e][2];piece[2][e][2]=piece[0][e][2],piece[0][e][2]=piece[0][e][0],piece[0][e][0]=piece[2][e][0],piece[2][e][0]=t,t=piece[1][e][0],piece[1][e][0]=piece[2][e][1],piece[2][e][1]=piece[1][e][2],piece[1][e][2]=piece[0][e][1],piece[0][e][1]=t}}let pt=0,li="",dl=5,ft=dl;function zm(){if(requestAnimationFrame(zm),pt>0){switch(li){case"x0":console.log("turnx ran"),Ic(ft,0),pt==Math.abs(ft)&&Oc(ft,0);break;case"x1":console.log("turnx ran"),Ic(ft,1),pt==Math.abs(ft)&&Oc(ft,1);break;case"x2":console.log("turnx ran"),Ic(ft,2),pt==Math.abs(ft)&&Oc(ft,2);break;case"y0":console.log("turny ran"),Pc(ft,0),pt==Math.abs(ft)&&Fc(ft,0);break;case"y1":console.log("turny ran"),Pc(ft,1),pt==Math.abs(ft)&&Fc(ft,1);break;case"y2":console.log("turny ran"),Pc(ft,2),pt==Math.abs(ft)&&Fc(ft,2);break;case"z0":console.log("turnz ran"),Dc(ft,0),pt==Math.abs(ft)&&Uc(ft,0);break;case"z1":console.log("turnz ran"),Dc(ft,1),pt==Math.abs(ft)&&Uc(ft,1);break;case"z2":console.log("turnz ran"),Dc(ft,2),pt==Math.abs(ft)&&Uc(ft,2);break}pt-=Math.abs(ft)}Ca.render(Vm,hr)}mb();zm();function Sb(i){switch(console.log(i),ft=i.shiftKey?dl*-1:dl,i.keyCode){case 81:pt<=0&&(pt=90,li="x0");break;case 87:pt<=0&&(pt=90,li="x1");break;case 69:pt<=0&&(pt=90,li="x2");break;case 80:pt<=0&&(pt=90,li="z0");break;case 79:pt<=0&&(pt=90,li="z1");break;case 73:pt<=0&&(pt=90,li="z2");break;case 70:pt<=0&&(pt=90,li="y0");break;case 71:pt<=0&&(pt=90,li="y1");break;case 72:pt<=0&&(pt=90,li="y2");break}}window.addEventListener("DOMContentLoaded",()=>{document.addEventListener("keydown",Sb)});
