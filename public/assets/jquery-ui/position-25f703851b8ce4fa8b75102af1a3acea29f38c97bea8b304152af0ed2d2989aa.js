/*!
 * jQuery UI Position 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){return function(){function t(e,t,n){return[parseFloat(e[0])*(h.test(e[0])?t/100:1),parseFloat(e[1])*(h.test(e[1])?n/100:1)]}function n(t,n){return parseInt(e.css(t,n),10)||0}function i(t){var n=t[0];return 9===n.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(n)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:n.preventDefault?{width:0,height:0,offset:{top:n.pageY,left:n.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var r,o,s=Math.max,a=Math.abs,u=Math.round,l=/left|center|right/,c=/top|center|bottom/,f=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,h=/%$/,p=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==r)return r;var t,n,i=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=i.children()[0];return e("body").append(i),t=o.offsetWidth,i.css("overflow","scroll"),n=o.offsetWidth,t===n&&(n=i[0].clientWidth),i.remove(),r=t-n},getScrollInfo:function(t){var n=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),i=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),r="scroll"===n||"auto"===n&&t.width<t.element[0].scrollWidth,o="scroll"===i||"auto"===i&&t.height<t.element[0].scrollHeight;return{width:o?e.position.scrollbarWidth():0,height:r?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),i=e.isWindow(n[0]),r=!!n[0]&&9===n[0].nodeType;return{element:n,isWindow:i,isDocument:r,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:i||r?n.width():n.outerWidth(),height:i||r?n.height():n.outerHeight()}}},e.fn.position=function(r){if(!r||!r.of)return p.apply(this,arguments);r=e.extend({},r);var h,m,g,v,y,b,x=e(r.of),w=e.position.getWithinInfo(r.within),C=e.position.getScrollInfo(w),T=(r.collision||"flip").split(" "),k={};return b=i(x),x[0].preventDefault&&(r.at="left top"),m=b.width,g=b.height,v=b.offset,y=e.extend({},v),e.each(["my","at"],function(){var e,t,n=(r[this]||"").split(" ");1===n.length&&(n=l.test(n[0])?n.concat(["center"]):c.test(n[0])?["center"].concat(n):["center","center"]),n[0]=l.test(n[0])?n[0]:"center",n[1]=c.test(n[1])?n[1]:"center",e=f.exec(n[0]),t=f.exec(n[1]),k[this]=[e?e[0]:0,t?t[0]:0],r[this]=[d.exec(n[0])[0],d.exec(n[1])[0]]}),1===T.length&&(T[1]=T[0]),"right"===r.at[0]?y.left+=m:"center"===r.at[0]&&(y.left+=m/2),"bottom"===r.at[1]?y.top+=g:"center"===r.at[1]&&(y.top+=g/2),h=t(k.at,m,g),y.left+=h[0],y.top+=h[1],this.each(function(){var i,l,c=e(this),f=c.outerWidth(),d=c.outerHeight(),p=n(this,"marginLeft"),b=n(this,"marginTop"),_=f+p+n(this,"marginRight")+C.width,S=d+b+n(this,"marginBottom")+C.height,N=e.extend({},y),$=t(k.my,c.outerWidth(),c.outerHeight());"right"===r.my[0]?N.left-=f:"center"===r.my[0]&&(N.left-=f/2),"bottom"===r.my[1]?N.top-=d:"center"===r.my[1]&&(N.top-=d/2),N.left+=$[0],N.top+=$[1],o||(N.left=u(N.left),N.top=u(N.top)),i={marginLeft:p,marginTop:b},e.each(["left","top"],function(t,n){e.ui.position[T[t]]&&e.ui.position[T[t]][n](N,{targetWidth:m,targetHeight:g,elemWidth:f,elemHeight:d,collisionPosition:i,collisionWidth:_,collisionHeight:S,offset:[h[0]+$[0],h[1]+$[1]],my:r.my,at:r.at,within:w,elem:c})}),r.using&&(l=function(e){var t=v.left-N.left,n=t+m-f,i=v.top-N.top,o=i+g-d,u={target:{element:x,left:v.left,top:v.top,width:m,height:g},element:{element:c,left:N.left,top:N.top,width:f,height:d},horizontal:0>n?"left":t>0?"right":"center",vertical:0>o?"top":i>0?"bottom":"middle"};f>m&&a(t+n)<m&&(u.horizontal="center"),d>g&&a(i+o)<g&&(u.vertical="middle"),u.important=s(a(t),a(n))>s(a(i),a(o))?"horizontal":"vertical",r.using.call(this,e,u)}),c.offset(e.extend(N,{using:l}))})},e.ui.position={fit:{left:function(e,t){var n,i=t.within,r=i.isWindow?i.scrollLeft:i.offset.left,o=i.width,a=e.left-t.collisionPosition.marginLeft,u=r-a,l=a+t.collisionWidth-o-r;t.collisionWidth>o?u>0&&0>=l?(n=e.left+u+t.collisionWidth-o-r,e.left+=u-n):e.left=l>0&&0>=u?r:u>l?r+o-t.collisionWidth:r:u>0?e.left+=u:l>0?e.left-=l:e.left=s(e.left-a,e.left)},top:function(e,t){var n,i=t.within,r=i.isWindow?i.scrollTop:i.offset.top,o=t.within.height,a=e.top-t.collisionPosition.marginTop,u=r-a,l=a+t.collisionHeight-o-r;t.collisionHeight>o?u>0&&0>=l?(n=e.top+u+t.collisionHeight-o-r,e.top+=u-n):e.top=l>0&&0>=u?r:u>l?r+o-t.collisionHeight:r:u>0?e.top+=u:l>0?e.top-=l:e.top=s(e.top-a,e.top)}},flip:{left:function(e,t){var n,i,r=t.within,o=r.offset.left+r.scrollLeft,s=r.width,u=r.isWindow?r.scrollLeft:r.offset.left,l=e.left-t.collisionPosition.marginLeft,c=l-u,f=l+t.collisionWidth-s-u,d="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,h="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,p=-2*t.offset[0];0>c?(n=e.left+d+h+p+t.collisionWidth-s-o,(0>n||n<a(c))&&(e.left+=d+h+p)):f>0&&(i=e.left-t.collisionPosition.marginLeft+d+h+p-u,(i>0||a(i)<f)&&(e.left+=d+h+p))},top:function(e,t){var n,i,r=t.within,o=r.offset.top+r.scrollTop,s=r.height,u=r.isWindow?r.scrollTop:r.offset.top,l=e.top-t.collisionPosition.marginTop,c=l-u,f=l+t.collisionHeight-s-u,d="top"===t.my[1],h=d?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,p="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>c?(i=e.top+h+p+m+t.collisionHeight-s-o,e.top+h+p+m>c&&(0>i||i<a(c))&&(e.top+=h+p+m)):f>0&&(n=e.top-t.collisionPosition.marginTop+h+p+m-u,e.top+h+p+m>f&&(n>0||a(n)<f)&&(e.top+=h+p+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,n,i,r,s,a=document.getElementsByTagName("body")[0],u=document.createElement("div");t=document.createElement(a?"div":"body"),i={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},a&&e.extend(i,{position:"absolute",left:"-1000px",top:"-1000px"});for(s in i)t.style[s]=i[s];t.appendChild(u),n=a||document.documentElement,n.insertBefore(t,n.firstChild),u.style.cssText="position: absolute; left: 10.7432222px;",r=e(u).offset().left,o=r>10&&11>r,t.innerHTML="",n.removeChild(t)}()}(),e.ui.position});