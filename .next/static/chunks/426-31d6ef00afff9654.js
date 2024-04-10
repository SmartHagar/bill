"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[426],{4493:function(t,e,n){n.d(e,{Cp:function(){return d},Qo:function(){return p},RR:function(){return c},US:function(){return l},X5:function(){return f},cv:function(){return g},dp:function(){return x},dr:function(){return y},oo:function(){return o},uY:function(){return w},x7:function(){return u}});var r=n(842);function i(t,e,n){let i,{reference:o,floating:l}=t,u=(0,r.Qq)(e),f=(0,r.Wh)(e),c=(0,r.I4)(f),a=(0,r.k3)(e),s="y"===u,d=o.x+o.width/2-l.width/2,h=o.y+o.height/2-l.height/2,p=o[c]/2-l[c]/2;switch(a){case"top":i={x:d,y:o.y-l.height};break;case"bottom":i={x:d,y:o.y+o.height};break;case"right":i={x:o.x+o.width,y:h};break;case"left":i={x:o.x-l.width,y:h};break;default:i={x:o.x,y:o.y}}switch((0,r.hp)(e)){case"start":i[f]-=p*(n&&s?-1:1);break;case"end":i[f]+=p*(n&&s?-1:1)}return i}let o=async(t,e,n)=>{let{placement:r="bottom",strategy:o="absolute",middleware:l=[],platform:u}=n,f=l.filter(Boolean),c=await (null==u.isRTL?void 0:u.isRTL(e)),a=await u.getElementRects({reference:t,floating:e,strategy:o}),{x:s,y:d}=i(a,r,c),h=r,p={},m=0;for(let n=0;n<f.length;n++){let{name:l,fn:g}=f[n],{x:w,y:y,data:x,reset:v}=await g({x:s,y:d,initialPlacement:r,placement:h,strategy:o,middlewareData:p,rects:a,platform:u,elements:{reference:t,floating:e}});s=null!=w?w:s,d=null!=y?y:d,p={...p,[l]:{...p[l],...x}},v&&m<=50&&(m++,"object"==typeof v&&(v.placement&&(h=v.placement),v.rects&&(a=!0===v.rects?await u.getElementRects({reference:t,floating:e,strategy:o}):v.rects),{x:s,y:d}=i(a,h,c)),n=-1)}return{x:s,y:d,placement:h,strategy:o,middlewareData:p}};async function l(t,e){var n;void 0===e&&(e={});let{x:i,y:o,platform:l,rects:u,elements:f,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:s="viewport",elementContext:d="floating",altBoundary:h=!1,padding:p=0}=(0,r.ku)(e,t),m=(0,r.yd)(p),g=f[h?"floating"===d?"reference":"floating":d],w=(0,r.JB)(await l.getClippingRect({element:null==(n=await (null==l.isElement?void 0:l.isElement(g)))||n?g:g.contextElement||await (null==l.getDocumentElement?void 0:l.getDocumentElement(f.floating)),boundary:a,rootBoundary:s,strategy:c})),y="floating"===d?{...u.floating,x:i,y:o}:u.reference,x=await (null==l.getOffsetParent?void 0:l.getOffsetParent(f.floating)),v=await (null==l.isElement?void 0:l.isElement(x))&&await (null==l.getScale?void 0:l.getScale(x))||{x:1,y:1},b=(0,r.JB)(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:f,rect:y,offsetParent:x,strategy:c}):y);return{top:(w.top-b.top+m.top)/v.y,bottom:(b.bottom-w.bottom+m.bottom)/v.y,left:(w.left-b.left+m.left)/v.x,right:(b.right-w.right+m.right)/v.x}}let u=t=>({name:"arrow",options:t,async fn(e){let{x:n,y:i,placement:o,rects:l,platform:u,elements:f,middlewareData:c}=e,{element:a,padding:s=0}=(0,r.ku)(t,e)||{};if(null==a)return{};let d=(0,r.yd)(s),h={x:n,y:i},p=(0,r.Wh)(o),m=(0,r.I4)(p),g=await u.getDimensions(a),w="y"===p,y=w?"clientHeight":"clientWidth",x=l.reference[m]+l.reference[p]-h[p]-l.floating[m],v=h[p]-l.reference[p],b=await (null==u.getOffsetParent?void 0:u.getOffsetParent(a)),R=b?b[y]:0;R&&await (null==u.isElement?void 0:u.isElement(b))||(R=f.floating[y]||l.floating[m]);let k=R/2-g[m]/2-1,F=(0,r.VV)(d[w?"top":"left"],k),L=(0,r.VV)(d[w?"bottom":"right"],k),T=R-g[m]-L,E=R/2-g[m]/2+(x/2-v/2),V=(0,r.uZ)(F,E,T),A=!c.arrow&&null!=(0,r.hp)(o)&&E!==V&&l.reference[m]/2-(E<F?F:L)-g[m]/2<0,C=A?E<F?E-F:E-T:0;return{[p]:h[p]+C,data:{[p]:V,centerOffset:E-V-C,...A&&{alignmentOffset:C}},reset:A}}}),f=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,i,o,u;let{rects:f,middlewareData:c,placement:a,platform:s,elements:d}=e,{crossAxis:h=!1,alignment:p,allowedPlacements:m=r.Ct,autoAlignment:g=!0,...w}=(0,r.ku)(t,e),y=void 0!==p||m===r.Ct?((u=p||null)?[...m.filter(t=>(0,r.hp)(t)===u),...m.filter(t=>(0,r.hp)(t)!==u)]:m.filter(t=>(0,r.k3)(t)===t)).filter(t=>!u||(0,r.hp)(t)===u||!!g&&(0,r.Go)(t)!==t):m,x=await l(e,w),v=(null==(n=c.autoPlacement)?void 0:n.index)||0,b=y[v];if(null==b)return{};let R=(0,r.i8)(b,f,await (null==s.isRTL?void 0:s.isRTL(d.floating)));if(a!==b)return{reset:{placement:y[0]}};let k=[x[(0,r.k3)(b)],x[R[0]],x[R[1]]],F=[...(null==(i=c.autoPlacement)?void 0:i.overflows)||[],{placement:b,overflows:k}],L=y[v+1];if(L)return{data:{index:v+1,overflows:F},reset:{placement:L}};let T=F.map(t=>{let e=(0,r.hp)(t.placement);return[t.placement,e&&h?t.overflows.slice(0,2).reduce((t,e)=>t+e,0):t.overflows[0],t.overflows]}).sort((t,e)=>t[1]-e[1]),E=(null==(o=T.filter(t=>t[2].slice(0,(0,r.hp)(t[0])?2:3).every(t=>t<=0))[0])?void 0:o[0])||T[0][0];return E!==a?{data:{index:v+1,overflows:F},reset:{placement:E}}:{}}}},c=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,i,o,u,f;let{placement:c,middlewareData:a,rects:s,initialPlacement:d,platform:h,elements:p}=e,{mainAxis:m=!0,crossAxis:g=!0,fallbackPlacements:w,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:v=!0,...b}=(0,r.ku)(t,e);if(null!=(n=a.arrow)&&n.alignmentOffset)return{};let R=(0,r.k3)(c),k=(0,r.k3)(d)===d,F=await (null==h.isRTL?void 0:h.isRTL(p.floating)),L=w||(k||!v?[(0,r.pw)(d)]:(0,r.gy)(d));w||"none"===x||L.push(...(0,r.KX)(d,v,x,F));let T=[d,...L],E=await l(e,b),V=[],A=(null==(i=a.flip)?void 0:i.overflows)||[];if(m&&V.push(E[R]),g){let t=(0,r.i8)(c,s,F);V.push(E[t[0]],E[t[1]])}if(A=[...A,{placement:c,overflows:V}],!V.every(t=>t<=0)){let t=((null==(o=a.flip)?void 0:o.index)||0)+1,e=T[t];if(e)return{data:{index:t,overflows:A},reset:{placement:e}};let n=null==(u=A.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:u.placement;if(!n)switch(y){case"bestFit":{let t=null==(f=A.map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:f[0];t&&(n=t);break}case"initialPlacement":n=d}if(c!==n)return{reset:{placement:n}}}return{}}}};function a(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function s(t){return r.mA.some(e=>t[e]>=0)}let d=function(t){return void 0===t&&(t={}),{name:"hide",options:t,async fn(e){let{rects:n}=e,{strategy:i="referenceHidden",...o}=(0,r.ku)(t,e);switch(i){case"referenceHidden":{let t=a(await l(e,{...o,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:t,referenceHidden:s(t)}}}case"escaped":{let t=a(await l(e,{...o,altBoundary:!0}),n.floating);return{data:{escapedOffsets:t,escaped:s(t)}}}default:return{}}}}};function h(t){let e=(0,r.VV)(...t.map(t=>t.left)),n=(0,r.VV)(...t.map(t=>t.top));return{x:e,y:n,width:(0,r.Fp)(...t.map(t=>t.right))-e,height:(0,r.Fp)(...t.map(t=>t.bottom))-n}}let p=function(t){return void 0===t&&(t={}),{name:"inline",options:t,async fn(e){let{placement:n,elements:i,rects:o,platform:l,strategy:u}=e,{padding:f=2,x:c,y:a}=(0,r.ku)(t,e),s=Array.from(await (null==l.getClientRects?void 0:l.getClientRects(i.reference))||[]),d=function(t){let e=t.slice().sort((t,e)=>t.y-e.y),n=[],i=null;for(let t=0;t<e.length;t++){let r=e[t];!i||r.y-i.y>i.height/2?n.push([r]):n[n.length-1].push(r),i=r}return n.map(t=>(0,r.JB)(h(t)))}(s),p=(0,r.JB)(h(s)),m=(0,r.yd)(f),g=await l.getElementRects({reference:{getBoundingClientRect:function(){if(2===d.length&&d[0].left>d[1].right&&null!=c&&null!=a)return d.find(t=>c>t.left-m.left&&c<t.right+m.right&&a>t.top-m.top&&a<t.bottom+m.bottom)||p;if(d.length>=2){if("y"===(0,r.Qq)(n)){let t=d[0],e=d[d.length-1],i="top"===(0,r.k3)(n),o=t.top,l=e.bottom,u=i?t.left:e.left,f=i?t.right:e.right;return{top:o,bottom:l,left:u,right:f,width:f-u,height:l-o,x:u,y:o}}let t="left"===(0,r.k3)(n),e=(0,r.Fp)(...d.map(t=>t.right)),i=(0,r.VV)(...d.map(t=>t.left)),o=d.filter(n=>t?n.left===i:n.right===e),l=o[0].top,u=o[o.length-1].bottom;return{top:l,bottom:u,left:i,right:e,width:e-i,height:u-l,x:i,y:l}}return p}},floating:i.floating,strategy:u});return o.reference.x!==g.reference.x||o.reference.y!==g.reference.y||o.reference.width!==g.reference.width||o.reference.height!==g.reference.height?{reset:{rects:g}}:{}}}};async function m(t,e){let{placement:n,platform:i,elements:o}=t,l=await (null==i.isRTL?void 0:i.isRTL(o.floating)),u=(0,r.k3)(n),f=(0,r.hp)(n),c="y"===(0,r.Qq)(n),a=["left","top"].includes(u)?-1:1,s=l&&c?-1:1,d=(0,r.ku)(e,t),{mainAxis:h,crossAxis:p,alignmentAxis:m}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return f&&"number"==typeof m&&(p="end"===f?-1*m:m),c?{x:p*s,y:h*a}:{x:h*a,y:p*s}}let g=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var n,r;let{x:i,y:o,placement:l,middlewareData:u}=e,f=await m(e,t);return l===(null==(n=u.offset)?void 0:n.placement)&&null!=(r=u.arrow)&&r.alignmentOffset?{}:{x:i+f.x,y:o+f.y,data:{...f,placement:l}}}}},w=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){let{x:n,y:i,placement:o}=e,{mainAxis:u=!0,crossAxis:f=!1,limiter:c={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...a}=(0,r.ku)(t,e),s={x:n,y:i},d=await l(e,a),h=(0,r.Qq)((0,r.k3)(o)),p=(0,r.Rn)(h),m=s[p],g=s[h];if(u){let t="y"===p?"top":"left",e="y"===p?"bottom":"right",n=m+d[t],i=m-d[e];m=(0,r.uZ)(n,m,i)}if(f){let t="y"===h?"top":"left",e="y"===h?"bottom":"right",n=g+d[t],i=g-d[e];g=(0,r.uZ)(n,g,i)}let w=c.fn({...e,[p]:m,[h]:g});return{...w,data:{x:w.x-n,y:w.y-i}}}}},y=function(t){return void 0===t&&(t={}),{options:t,fn(e){let{x:n,y:i,placement:o,rects:l,middlewareData:u}=e,{offset:f=0,mainAxis:c=!0,crossAxis:a=!0}=(0,r.ku)(t,e),s={x:n,y:i},d=(0,r.Qq)(o),h=(0,r.Rn)(d),p=s[h],m=s[d],g=(0,r.ku)(f,e),w="number"==typeof g?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(c){let t="y"===h?"height":"width",e=l.reference[h]-l.floating[t]+w.mainAxis,n=l.reference[h]+l.reference[t]-w.mainAxis;p<e?p=e:p>n&&(p=n)}if(a){var y,x;let t="y"===h?"width":"height",e=["top","left"].includes((0,r.k3)(o)),n=l.reference[d]-l.floating[t]+(e&&(null==(y=u.offset)?void 0:y[d])||0)+(e?0:w.crossAxis),i=l.reference[d]+l.reference[t]+(e?0:(null==(x=u.offset)?void 0:x[d])||0)-(e?w.crossAxis:0);m<n?m=n:m>i&&(m=i)}return{[h]:p,[d]:m}}}},x=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){let n,i;let{placement:o,rects:u,platform:f,elements:c}=e,{apply:a=()=>{},...s}=(0,r.ku)(t,e),d=await l(e,s),h=(0,r.k3)(o),p=(0,r.hp)(o),m="y"===(0,r.Qq)(o),{width:g,height:w}=u.floating;"top"===h||"bottom"===h?(n=h,i=p===(await (null==f.isRTL?void 0:f.isRTL(c.floating))?"start":"end")?"left":"right"):(i=h,n="end"===p?"top":"bottom");let y=w-d[n],x=g-d[i],v=!e.middlewareData.shift,b=y,R=x;if(m){let t=g-d.left-d.right;R=p||v?(0,r.VV)(x,t):t}else{let t=w-d.top-d.bottom;b=p||v?(0,r.VV)(y,t):t}if(v&&!p){let t=(0,r.Fp)(d.left,0),e=(0,r.Fp)(d.right,0),n=(0,r.Fp)(d.top,0),i=(0,r.Fp)(d.bottom,0);m?R=g-2*(0!==t||0!==e?t+e:(0,r.Fp)(d.left,d.right)):b=w-2*(0!==n||0!==i?n+i:(0,r.Fp)(d.top,d.bottom))}await a({...e,availableWidth:R,availableHeight:b});let k=await f.getDimensions(c.floating);return g!==k.width||w!==k.height?{reset:{rects:!0}}:{}}}}},5426:function(t,e,n){n.d(e,{Cp:function(){return L},Jv:function(){return x},Me:function(){return v},Qo:function(){return E},RR:function(){return k},X5:function(){return b},dp:function(){return F},dr:function(){return V},oo:function(){return A},uY:function(){return R},x7:function(){return T}});var r=n(842),i=n(4493),o=n(4261);function l(t){let e=(0,o.Dx)(t),n=parseFloat(e.width)||0,i=parseFloat(e.height)||0,l=(0,o.Re)(t),u=l?t.offsetWidth:n,f=l?t.offsetHeight:i,c=(0,r.NM)(n)!==u||(0,r.NM)(i)!==f;return c&&(n=u,i=f),{width:n,height:i,$:c}}function u(t){return(0,o.kK)(t)?t:t.contextElement}function f(t){let e=u(t);if(!(0,o.Re)(e))return(0,r.ze)(1);let n=e.getBoundingClientRect(),{width:i,height:f,$:c}=l(e),a=(c?(0,r.NM)(n.width):n.width)/i,s=(c?(0,r.NM)(n.height):n.height)/f;return a&&Number.isFinite(a)||(a=1),s&&Number.isFinite(s)||(s=1),{x:a,y:s}}let c=(0,r.ze)(0);function a(t){let e=(0,o.Jj)(t);return(0,o.Pf)()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:c}function s(t,e,n,i){var l;void 0===e&&(e=!1),void 0===n&&(n=!1);let c=t.getBoundingClientRect(),s=u(t),d=(0,r.ze)(1);e&&(i?(0,o.kK)(i)&&(d=f(i)):d=f(t));let h=(void 0===(l=n)&&(l=!1),i&&(!l||i===(0,o.Jj)(s))&&l)?a(s):(0,r.ze)(0),p=(c.left+h.x)/d.x,m=(c.top+h.y)/d.y,g=c.width/d.x,w=c.height/d.y;if(s){let t=(0,o.Jj)(s),e=i&&(0,o.kK)(i)?(0,o.Jj)(i):i,n=t,r=n.frameElement;for(;r&&i&&e!==n;){let t=f(r),e=r.getBoundingClientRect(),i=(0,o.Dx)(r),l=e.left+(r.clientLeft+parseFloat(i.paddingLeft))*t.x,u=e.top+(r.clientTop+parseFloat(i.paddingTop))*t.y;p*=t.x,m*=t.y,g*=t.x,w*=t.y,p+=l,m+=u,r=(n=(0,o.Jj)(r)).frameElement}}return(0,r.JB)({width:g,height:w,x:p,y:m})}let d=[":popover-open",":modal"];function h(t){return d.some(e=>{try{return t.matches(e)}catch(t){return!1}})}function p(t){return s((0,o.tF)(t)).left+(0,o.Lw)(t).scrollLeft}function m(t,e,n){let i;if("viewport"===e)i=function(t,e){let n=(0,o.Jj)(t),r=(0,o.tF)(t),i=n.visualViewport,l=r.clientWidth,u=r.clientHeight,f=0,c=0;if(i){l=i.width,u=i.height;let t=(0,o.Pf)();(!t||t&&"fixed"===e)&&(f=i.offsetLeft,c=i.offsetTop)}return{width:l,height:u,x:f,y:c}}(t,n);else if("document"===e)i=function(t){let e=(0,o.tF)(t),n=(0,o.Lw)(t),i=t.ownerDocument.body,l=(0,r.Fp)(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),u=(0,r.Fp)(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight),f=-n.scrollLeft+p(t),c=-n.scrollTop;return"rtl"===(0,o.Dx)(i).direction&&(f+=(0,r.Fp)(e.clientWidth,i.clientWidth)-l),{width:l,height:u,x:f,y:c}}((0,o.tF)(t));else if((0,o.kK)(e))i=function(t,e){let n=s(t,!0,"fixed"===e),i=n.top+t.clientTop,l=n.left+t.clientLeft,u=(0,o.Re)(t)?f(t):(0,r.ze)(1),c=t.clientWidth*u.x;return{width:c,height:t.clientHeight*u.y,x:l*u.x,y:i*u.y}}(e,n);else{let n=a(t);i={...e,x:e.x-n.x,y:e.y-n.y}}return(0,r.JB)(i)}function g(t,e){return(0,o.Re)(t)&&"fixed"!==(0,o.Dx)(t).position?e?e(t):t.offsetParent:null}function w(t,e){let n=(0,o.Jj)(t);if(!(0,o.Re)(t)||h(t))return n;let r=g(t,e);for(;r&&(0,o.Ze)(r)&&"static"===(0,o.Dx)(r).position;)r=g(r,e);return r&&("html"===(0,o.wk)(r)||"body"===(0,o.wk)(r)&&"static"===(0,o.Dx)(r).position&&!(0,o.hT)(r))?n:r||(0,o.gQ)(t)||n}let y=async function(t){let e=this.getOffsetParent||w,n=this.getDimensions;return{reference:function(t,e,n){let i=(0,o.Re)(e),l=(0,o.tF)(e),u="fixed"===n,f=s(t,!0,u,e),c={scrollLeft:0,scrollTop:0},a=(0,r.ze)(0);if(i||!i&&!u){if(("body"!==(0,o.wk)(e)||(0,o.ao)(l))&&(c=(0,o.Lw)(e)),i){let t=s(e,!0,u,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else l&&(a.x=p(l))}return{x:f.left+c.scrollLeft-a.x,y:f.top+c.scrollTop-a.y,width:f.width,height:f.height}}(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,...await n(t.floating)}}},x={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:i,strategy:l}=t,u="fixed"===l,c=(0,o.tF)(i),a=!!e&&h(e.floating);if(i===c||a&&u)return n;let d={scrollLeft:0,scrollTop:0},p=(0,r.ze)(1),m=(0,r.ze)(0),g=(0,o.Re)(i);if((g||!g&&!u)&&(("body"!==(0,o.wk)(i)||(0,o.ao)(c))&&(d=(0,o.Lw)(i)),(0,o.Re)(i))){let t=s(i);p=f(i),m.x=t.x+i.clientLeft,m.y=t.y+i.clientTop}return{width:n.width*p.x,height:n.height*p.y,x:n.x*p.x-d.scrollLeft*p.x+m.x,y:n.y*p.y-d.scrollTop*p.y+m.y}},getDocumentElement:o.tF,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:i,strategy:l}=t,u=[..."clippingAncestors"===n?function(t,e){let n=e.get(t);if(n)return n;let r=(0,o.Kx)(t,[],!1).filter(t=>(0,o.kK)(t)&&"body"!==(0,o.wk)(t)),i=null,l="fixed"===(0,o.Dx)(t).position,u=l?(0,o.Ow)(t):t;for(;(0,o.kK)(u)&&!(0,o.Py)(u);){let e=(0,o.Dx)(u),n=(0,o.hT)(u);n||"fixed"!==e.position||(i=null),(l?!n&&!i:!n&&"static"===e.position&&!!i&&["absolute","fixed"].includes(i.position)||(0,o.ao)(u)&&!n&&function t(e,n){let r=(0,o.Ow)(e);return!(r===n||!(0,o.kK)(r)||(0,o.Py)(r))&&("fixed"===(0,o.Dx)(r).position||t(r,n))}(t,u))?r=r.filter(t=>t!==u):i=e,u=(0,o.Ow)(u)}return e.set(t,r),r}(e,this._c):[].concat(n),i],f=u[0],c=u.reduce((t,n)=>{let i=m(e,n,l);return t.top=(0,r.Fp)(i.top,t.top),t.right=(0,r.VV)(i.right,t.right),t.bottom=(0,r.VV)(i.bottom,t.bottom),t.left=(0,r.Fp)(i.left,t.left),t},m(e,f,l));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:w,getElementRects:y,getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){let{width:e,height:n}=l(t);return{width:e,height:n}},getScale:f,isElement:o.kK,isRTL:function(t){return"rtl"===(0,o.Dx)(t).direction}};function v(t,e,n,i){let l;void 0===i&&(i={});let{ancestorScroll:f=!0,ancestorResize:c=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:d="function"==typeof IntersectionObserver,animationFrame:h=!1}=i,p=u(t),m=f||c?[...p?(0,o.Kx)(p):[],...(0,o.Kx)(e)]:[];m.forEach(t=>{f&&t.addEventListener("scroll",n,{passive:!0}),c&&t.addEventListener("resize",n)});let g=p&&d?function(t,e){let n,i=null,l=(0,o.tF)(t);function u(){var t;clearTimeout(n),null==(t=i)||t.disconnect(),i=null}return!function o(f,c){void 0===f&&(f=!1),void 0===c&&(c=1),u();let{left:a,top:s,width:d,height:h}=t.getBoundingClientRect();if(f||e(),!d||!h)return;let p=(0,r.GW)(s),m=(0,r.GW)(l.clientWidth-(a+d)),g={rootMargin:-p+"px "+-m+"px "+-(0,r.GW)(l.clientHeight-(s+h))+"px "+-(0,r.GW)(a)+"px",threshold:(0,r.Fp)(0,(0,r.VV)(1,c))||1},w=!0;function y(t){let e=t[0].intersectionRatio;if(e!==c){if(!w)return o();e?o(!1,e):n=setTimeout(()=>{o(!1,1e-7)},100)}w=!1}try{i=new IntersectionObserver(y,{...g,root:l.ownerDocument})}catch(t){i=new IntersectionObserver(y,g)}i.observe(t)}(!0),u}(p,n):null,w=-1,y=null;a&&(y=new ResizeObserver(t=>{let[r]=t;r&&r.target===p&&y&&(y.unobserve(e),cancelAnimationFrame(w),w=requestAnimationFrame(()=>{var t;null==(t=y)||t.observe(e)})),n()}),p&&!h&&y.observe(p),y.observe(e));let x=h?s(t):null;return h&&function e(){let r=s(t);x&&(r.x!==x.x||r.y!==x.y||r.width!==x.width||r.height!==x.height)&&n(),x=r,l=requestAnimationFrame(e)}(),n(),()=>{var t;m.forEach(t=>{f&&t.removeEventListener("scroll",n),c&&t.removeEventListener("resize",n)}),null==g||g(),null==(t=y)||t.disconnect(),y=null,h&&cancelAnimationFrame(l)}}let b=i.X5,R=i.uY,k=i.RR,F=i.dp,L=i.Cp,T=i.x7,E=i.Qo,V=i.dr,A=(t,e,n)=>{let r=new Map,o={platform:x,...n},l={...o.platform,_c:r};return(0,i.oo)(t,e,{...o,platform:l})}},4261:function(t,e,n){function r(t){return l(t)?(t.nodeName||"").toLowerCase():"#document"}function i(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function o(t){var e;return null==(e=(l(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function l(t){return t instanceof Node||t instanceof i(t).Node}function u(t){return t instanceof Element||t instanceof i(t).Element}function f(t){return t instanceof HTMLElement||t instanceof i(t).HTMLElement}function c(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof i(t).ShadowRoot)}function a(t){let{overflow:e,overflowX:n,overflowY:r,display:i}=g(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function s(t){return["table","td","th"].includes(r(t))}function d(t){let e=p(),n=g(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(t=>(n.willChange||"").includes(t))||["paint","layout","strict","content"].some(t=>(n.contain||"").includes(t))}function h(t){let e=y(t);for(;f(e)&&!m(e);){if(d(e))return e;e=y(e)}return null}function p(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function m(t){return["html","body","#document"].includes(r(t))}function g(t){return i(t).getComputedStyle(t)}function w(t){return u(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function y(t){if("html"===r(t))return t;let e=t.assignedSlot||t.parentNode||c(t)&&t.host||o(t);return c(e)?e.host:e}n.d(e,{Dx:function(){return g},Jj:function(){return i},Kx:function(){return function t(e,n,r){var o;void 0===n&&(n=[]),void 0===r&&(r=!0);let l=function t(e){let n=y(e);return m(n)?e.ownerDocument?e.ownerDocument.body:e.body:f(n)&&a(n)?n:t(n)}(e),u=l===(null==(o=e.ownerDocument)?void 0:o.body),c=i(l);return u?n.concat(c,c.visualViewport||[],a(l)?l:[],c.frameElement&&r?t(c.frameElement):[]):n.concat(l,t(l,[],r))}},Lw:function(){return w},Ow:function(){return y},Pf:function(){return p},Py:function(){return m},Re:function(){return f},Ze:function(){return s},Zq:function(){return c},ao:function(){return a},gQ:function(){return h},hT:function(){return d},kK:function(){return u},tF:function(){return o},wk:function(){return r}})},842:function(t,e,n){n.d(e,{Ct:function(){return i},Fp:function(){return l},GW:function(){return f},Go:function(){return R},I4:function(){return w},JB:function(){return T},KX:function(){return k},NM:function(){return u},Qq:function(){return y},Rn:function(){return g},VV:function(){return o},Wh:function(){return x},gy:function(){return b},hp:function(){return m},i8:function(){return v},k3:function(){return p},ku:function(){return h},mA:function(){return r},pw:function(){return F},uZ:function(){return d},yd:function(){return L},ze:function(){return c}});let r=["top","right","bottom","left"],i=r.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]),o=Math.min,l=Math.max,u=Math.round,f=Math.floor,c=t=>({x:t,y:t}),a={left:"right",right:"left",bottom:"top",top:"bottom"},s={start:"end",end:"start"};function d(t,e,n){return l(t,o(e,n))}function h(t,e){return"function"==typeof t?t(e):t}function p(t){return t.split("-")[0]}function m(t){return t.split("-")[1]}function g(t){return"x"===t?"y":"x"}function w(t){return"y"===t?"height":"width"}function y(t){return["top","bottom"].includes(p(t))?"y":"x"}function x(t){return g(y(t))}function v(t,e,n){void 0===n&&(n=!1);let r=m(t),i=x(t),o=w(i),l="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return e.reference[o]>e.floating[o]&&(l=F(l)),[l,F(l)]}function b(t){let e=F(t);return[R(t),e,R(e)]}function R(t){return t.replace(/start|end/g,t=>s[t])}function k(t,e,n,r){let i=m(t),o=function(t,e,n){let r=["left","right"],i=["right","left"];switch(t){case"top":case"bottom":if(n)return e?i:r;return e?r:i;case"left":case"right":return e?["top","bottom"]:["bottom","top"];default:return[]}}(p(t),"start"===n,r);return i&&(o=o.map(t=>t+"-"+i),e&&(o=o.concat(o.map(R)))),o}function F(t){return t.replace(/left|right|bottom|top/g,t=>a[t])}function L(t){return"number"!=typeof t?{top:0,right:0,bottom:0,left:0,...t}:{top:t,right:t,bottom:t,left:t}}function T(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}}}]);