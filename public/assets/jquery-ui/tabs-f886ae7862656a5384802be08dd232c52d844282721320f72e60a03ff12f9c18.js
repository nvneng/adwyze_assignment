/*!
 * jQuery UI Core 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(e,i){var r,o,s,a=e.nodeName.toLowerCase();return"area"===a?(r=e.parentNode,o=r.name,e.href&&o&&"map"===r.nodeName.toLowerCase()?(s=t("img[usemap='#"+o+"']")[0],!!s&&n(s)):!1):(/input|select|textarea|button|object/.test(a)?!e.disabled:"a"===a?e.href||i:i)&&n(e)}function n(e){return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){return"hidden"===t.css(this,"visibility")}).length}t.ui=t.ui||{},t.extend(t.ui,{version:"1.11.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),t.fn.extend({scrollParent:function(e){var n=this.css("position"),i="absolute"===n,r=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return i&&"static"===e.css("position")?!1:r.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==n&&o.length?o:t(this[0].ownerDocument||document)},uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(n){return!!t.data(n,e)}}):function(e,n,i){return!!t.data(e,i[3])},focusable:function(n){return e(n,!isNaN(t.attr(n,"tabindex")))},tabbable:function(n){var i=t.attr(n,"tabindex"),r=isNaN(i);return(r||i>=0)&&e(n,!r)}}),t("<a>").outerWidth(1).jquery||t.each(["Width","Height"],function(e,n){function i(e,n,i,o){return t.each(r,function(){n-=parseFloat(t.css(e,"padding"+this))||0,i&&(n-=parseFloat(t.css(e,"border"+this+"Width"))||0),o&&(n-=parseFloat(t.css(e,"margin"+this))||0)}),n}var r="Width"===n?["Left","Right"]:["Top","Bottom"],o=n.toLowerCase(),s={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+n]=function(e){return void 0===e?s["inner"+n].call(this):this.each(function(){t(this).css(o,i(this,e)+"px")})},t.fn["outer"+n]=function(e,r){return"number"!=typeof e?s["outer"+n].call(this,e):this.each(function(){t(this).css(o,i(this,e,!0,r)+"px")})}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(t.fn.removeData=function(e){return function(n){return arguments.length?e.call(this,t.camelCase(n)):e.call(this)}}(t.fn.removeData)),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),t.fn.extend({focus:function(e){return function(n,i){return"number"==typeof n?this.each(function(){var e=this;setTimeout(function(){t(e).focus(),i&&i.call(e)},n)}):e.apply(this,arguments)}}(t.fn.focus),disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(e){if(void 0!==e)return this.css("zIndex",e);if(this.length)for(var n,i,r=t(this[0]);r.length&&r[0]!==document;){if(n=r.css("position"),("absolute"===n||"relative"===n||"fixed"===n)&&(i=parseInt(r.css("zIndex"),10),!isNaN(i)&&0!==i))return i;r=r.parent()}return 0}}),t.ui.plugin={add:function(e,n,i){var r,o=t.ui[e].prototype;for(r in i)o.plugins[r]=o.plugins[r]||[],o.plugins[r].push([n,i[r]])},call:function(t,e,n,i){var r,o=t.plugins[e];if(o&&(i||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(r=0;r<o.length;r++)t.options[o[r][0]]&&o[r][1].apply(t.element,n)}}}),/*!
 * jQuery UI Widget 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){var e=0,n=Array.prototype.slice;return t.cleanData=function(e){return function(n){var i,r,o;for(o=0;null!=(r=n[o]);o++)try{i=t._data(r,"events"),i&&i.remove&&t(r).triggerHandler("remove")}catch(s){}e(n)}}(t.cleanData),t.widget=function(e,n,i){var r,o,s,a,u={},l=e.split(".")[0];return e=e.split(".")[1],r=l+"-"+e,i||(i=n,n=t.Widget),t.expr[":"][r.toLowerCase()]=function(e){return!!t.data(e,r)},t[l]=t[l]||{},o=t[l][e],s=t[l][e]=function(t,e){return this._createWidget?void(arguments.length&&this._createWidget(t,e)):new s(t,e)},t.extend(s,o,{version:i.version,_proto:t.extend({},i),_childConstructors:[]}),a=new n,a.options=t.widget.extend({},a.options),t.each(i,function(e,i){return t.isFunction(i)?void(u[e]=function(){var t=function(){return n.prototype[e].apply(this,arguments)},r=function(t){return n.prototype[e].apply(this,t)};return function(){var e,n=this._super,o=this._superApply;return this._super=t,this._superApply=r,e=i.apply(this,arguments),this._super=n,this._superApply=o,e}}()):void(u[e]=i)}),s.prototype=t.widget.extend(a,{widgetEventPrefix:o?a.widgetEventPrefix||e:e},u,{constructor:s,namespace:l,widgetName:e,widgetFullName:r}),o?(t.each(o._childConstructors,function(e,n){var i=n.prototype;t.widget(i.namespace+"."+i.widgetName,s,n._proto)}),delete o._childConstructors):n._childConstructors.push(s),t.widget.bridge(e,s),s},t.widget.extend=function(e){for(var i,r,o=n.call(arguments,1),s=0,a=o.length;a>s;s++)for(i in o[s])r=o[s][i],o[s].hasOwnProperty(i)&&void 0!==r&&(e[i]=t.isPlainObject(r)?t.isPlainObject(e[i])?t.widget.extend({},e[i],r):t.widget.extend({},r):r);return e},t.widget.bridge=function(e,i){var r=i.prototype.widgetFullName||e;t.fn[e]=function(o){var s="string"==typeof o,a=n.call(arguments,1),u=this;return o=!s&&a.length?t.widget.extend.apply(null,[o].concat(a)):o,this.each(s?function(){var n,i=t.data(this,r);return"instance"===o?(u=i,!1):i?t.isFunction(i[o])&&"_"!==o.charAt(0)?(n=i[o].apply(i,a),n!==i&&void 0!==n?(u=n&&n.jquery?u.pushStack(n.get()):n,!1):void 0):t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+o+"'")}:function(){var e=t.data(this,r);e?(e.option(o||{}),e._init&&e._init()):t.data(this,r,new i(o,this))}),u}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(n,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=e++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),n),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(e,n){var i,r,o,s=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(s={},i=e.split("."),e=i.shift(),i.length){for(r=s[e]=t.widget.extend({},this.options[e]),o=0;o<i.length-1;o++)r[i[o]]=r[i[o]]||{},r=r[i[o]];if(e=i.pop(),1===arguments.length)return void 0===r[e]?null:r[e];r[e]=n}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];s[e]=n}return this._setOptions(s),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!e),e&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(e,n,i){var r,o=this;"boolean"!=typeof e&&(i=n,n=e,e=!1),i?(n=r=t(n),this.bindings=this.bindings.add(n)):(i=n,n=this.element,r=this.widget()),t.each(i,function(i,s){function a(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof s?o[s]:s).apply(o,arguments):void 0}"string"!=typeof s&&(a.guid=s.guid=s.guid||a.guid||t.guid++);var u=i.match(/^([\w:-]*)\s*(.*)$/),l=u[1]+o.eventNamespace,c=u[2];c?r.delegate(c,l,a):n.bind(l,a)})},_off:function(e,n){n=(n||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(n).undelegate(n),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function n(){return("string"==typeof t?i[t]:t).apply(i,arguments)}var i=this;return setTimeout(n,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,n,i){var r,o,s=this.options[e];if(i=i||{},n=t.Event(n),n.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),n.target=this.element[0],o=n.originalEvent)for(r in o)r in n||(n[r]=o[r]);return this.element.trigger(n,i),!(t.isFunction(s)&&s.apply(this.element[0],[n].concat(i))===!1||n.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,n){t.Widget.prototype["_"+e]=function(i,r,o){"string"==typeof r&&(r={effect:r});var s,a=r?r===!0||"number"==typeof r?n:r.effect||n:e;r=r||{},"number"==typeof r&&(r={duration:r}),s=!t.isEmptyObject(r),r.complete=o,r.delay&&i.delay(r.delay),s&&t.effects&&t.effects.effect[a]?i[e](r):a!==e&&i[a]?i[a](r.duration,r.easing,o):i.queue(function(n){t(this)[e](),o&&o.call(i[0]),n()})}}),t.widget}),/*!
 * jQuery UI Tabs 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tabs/
 */
function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./widget"],t):t(jQuery)}(function(t){return t.widget("ui.tabs",{version:"1.11.2",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var t=/#.*$/;return function(e){var n,i;e=e.cloneNode(!1),n=e.href.replace(t,""),i=location.href.replace(t,"");try{n=decodeURIComponent(n)}catch(r){}try{i=decodeURIComponent(i)}catch(r){}return e.hash.length>1&&n===i}}(),_create:function(){var e=this,n=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",n.collapsible),this._processTabs(),n.active=this._initialActive(),t.isArray(n.disabled)&&(n.disabled=t.unique(n.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(n.active):t(),this._refresh(),this.active.length&&this.load(n.active)},_initialActive:function(){var e=this.options.active,n=this.options.collapsible,i=location.hash.substring(1);return null===e&&(i&&this.tabs.each(function(n,r){return t(r).attr("aria-controls")===i?(e=n,!1):void 0}),null===e&&(e=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===e||-1===e)&&(e=this.tabs.length?0:!1)),e!==!1&&(e=this.tabs.index(this.tabs.eq(e)),-1===e&&(e=n?!1:0)),!n&&e===!1&&this.anchors.length&&(e=0),e},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(e){var n=t(this.document[0].activeElement).closest("li"),i=this.tabs.index(n),r=!0;if(!this._handlePageNav(e)){switch(e.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:i++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:r=!1,i--;break;case t.ui.keyCode.END:i=this.anchors.length-1;break;case t.ui.keyCode.HOME:i=0;break;case t.ui.keyCode.SPACE:return e.preventDefault(),clearTimeout(this.activating),void this._activate(i);case t.ui.keyCode.ENTER:return e.preventDefault(),clearTimeout(this.activating),void this._activate(i===this.options.active?!1:i);default:return}e.preventDefault(),clearTimeout(this.activating),i=this._focusNextTab(i,r),e.ctrlKey||(n.attr("aria-selected","false"),this.tabs.eq(i).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",i)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.focus())},_handlePageNav:function(e){return e.altKey&&e.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):e.altKey&&e.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(e,n){function i(){return e>r&&(e=0),0>e&&(e=r),e}for(var r=this.tabs.length-1;-1!==t.inArray(i(),this.options.disabled);)e=n?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).focus(),t},_setOption:function(t,e){return"active"===t?void this._activate(e):"disabled"===t?void this._setupDisabled(e):(this._super(t,e),"collapsible"===t&&(this.element.toggleClass("ui-tabs-collapsible",e),e||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(e),void("heightStyle"===t&&this._setupHeightStyle(e)))},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,n=this.tablist.children(":has(a[href])");e.disabled=t.map(n.filter(".ui-state-disabled"),function(t){return n.index(t)}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this,n=this.tabs,i=this.anchors,r=this.panels;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=t(),this.anchors.each(function(n,i){var r,o,s,a=t(i).uniqueId().attr("id"),u=t(i).closest("li"),l=u.attr("aria-controls");e._isLocal(i)?(r=i.hash,s=r.substring(1),o=e.element.find(e._sanitizeSelector(r))):(s=u.attr("aria-controls")||t({}).uniqueId()[0].id,r="#"+s,o=e.element.find(r),o.length||(o=e._createPanel(s),o.insertAfter(e.panels[n-1]||e.tablist)),o.attr("aria-live","polite")),o.length&&(e.panels=e.panels.add(o)),l&&u.data("ui-tabs-aria-controls",l),u.attr({"aria-controls":s,"aria-labelledby":a}),o.attr("aria-labelledby",a)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel"),n&&(this._off(n.not(this.tabs)),this._off(i.not(this.anchors)),this._off(r.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(e){t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1);for(var n,i=0;n=this.tabs[i];i++)e===!0||-1!==t.inArray(i,e)?t(n).addClass("ui-state-disabled").attr("aria-disabled","true"):t(n).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=e},_setupEvents:function(e){var n={};e&&t.each(e.split(" "),function(t,e){n[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(t){t.preventDefault()}}),this._on(this.anchors,n),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var n,i=this.element.parent();"fill"===e?(n=i.height(),n-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),i=e.css("position");"absolute"!==i&&"fixed"!==i&&(n-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){n-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,n-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(n=0,this.panels.each(function(){n=Math.max(n,t(this).height("").height())}).height(n))},_eventHandler:function(e){var n=this.options,i=this.active,r=t(e.currentTarget),o=r.closest("li"),s=o[0]===i[0],a=s&&n.collapsible,u=a?t():this._getPanelForTab(o),l=i.length?this._getPanelForTab(i):t(),c={oldTab:i,oldPanel:l,newTab:a?t():o,newPanel:u};e.preventDefault(),o.hasClass("ui-state-disabled")||o.hasClass("ui-tabs-loading")||this.running||s&&!n.collapsible||this._trigger("beforeActivate",e,c)===!1||(n.active=a?!1:this.tabs.index(o),this.active=s?t():o,this.xhr&&this.xhr.abort(),l.length||u.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),u.length&&this.load(this.tabs.index(o),e),this._toggle(e,c))},_toggle:function(e,n){function i(){o.running=!1,o._trigger("activate",e,n)}function r(){n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),s.length&&o.options.show?o._show(s,o.options.show,i):(s.show(),i())}var o=this,s=n.newPanel,a=n.oldPanel;this.running=!0,a.length&&this.options.hide?this._hide(a,this.options.hide,function(){n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r()}):(n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),a.hide(),r()),a.attr("aria-hidden","true"),n.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),s.length&&a.length?n.oldTab.attr("tabIndex",-1):s.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),s.attr("aria-hidden","false"),n.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(e){var n,i=this._findActive(e);i[0]!==this.active[0]&&(i.length||(i=this.active),n=i.find(".ui-tabs-anchor")[0],this._eventHandler({target:n,currentTarget:n,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(t){return"string"==typeof t&&(t=this.anchors.index(this.anchors.filter("[href$='"+t+"']"))),t},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tablist.unbind(this.eventNamespace),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var e=t(this),n=e.data("ui-tabs-aria-controls");n?e.attr("aria-controls",n).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(e){var n=this.options.disabled;n!==!1&&(void 0===e?n=!1:(e=this._getIndex(e),n=t.isArray(n)?t.map(n,function(t){return t!==e?t:null}):t.map(this.tabs,function(t,n){return n!==e?n:null})),this._setupDisabled(n))},disable:function(e){var n=this.options.disabled;if(n!==!0){if(void 0===e)n=!0;else{if(e=this._getIndex(e),-1!==t.inArray(e,n))return;n=t.isArray(n)?t.merge([e],n).sort():[e]}this._setupDisabled(n)}},load:function(e,n){e=this._getIndex(e);var i=this,r=this.tabs.eq(e),o=r.find(".ui-tabs-anchor"),s=this._getPanelForTab(r),a={tab:r,panel:s};this._isLocal(o[0])||(this.xhr=t.ajax(this._ajaxSettings(o,n,a)),this.xhr&&"canceled"!==this.xhr.statusText&&(r.addClass("ui-tabs-loading"),s.attr("aria-busy","true"),this.xhr.success(function(t){setTimeout(function(){s.html(t),i._trigger("load",n,a)},1)}).complete(function(t,e){setTimeout(function(){"abort"===e&&i.panels.stop(!1,!0),r.removeClass("ui-tabs-loading"),s.removeAttr("aria-busy"),t===i.xhr&&delete i.xhr},1)})))},_ajaxSettings:function(e,n,i){var r=this;return{url:e.attr("href"),beforeSend:function(e,o){return r._trigger("beforeLoad",n,t.extend({jqXHR:e,ajaxSettings:o},i))}}},_getPanelForTab:function(e){var n=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+n))}})});