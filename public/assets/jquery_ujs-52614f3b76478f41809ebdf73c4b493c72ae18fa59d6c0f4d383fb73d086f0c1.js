!function(e,t){e.rails!==t&&e.error("jquery-ujs has already been loaded!");var n,i=e(document);e.rails=n={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",buttonClickSelector:"button[data-remote]:not(form button), button[data-confirm]:not(form button)",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",disableSelector:"input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",requiredInputSelector:"input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",fileInputSelector:"input[type=file]",linkDisableSelector:"a[data-disable-with], a[data-disable]",buttonDisableSelector:"button[data-remote][data-disable-with], button[data-remote][data-disable]",CSRFProtection:function(t){var n=e('meta[name="csrf-token"]').attr("content");n&&t.setRequestHeader("X-CSRF-Token",n)},refreshCSRFTokens:function(){var t=e("meta[name=csrf-token]").attr("content"),n=e("meta[name=csrf-param]").attr("content");e('form input[name="'+n+'"]').val(t)},fire:function(t,n,i){var r=e.Event(n);return t.trigger(r,i),r.result!==!1},confirm:function(e){return confirm(e)},ajax:function(t){return e.ajax(t)},href:function(e){return e.attr("href")},handleRemote:function(i){var r,o,a,s,l,u,c,f;if(n.fire(i,"ajax:before")){if(s=i.data("cross-domain"),l=s===t?null:s,u=i.data("with-credentials")||null,c=i.data("type")||e.ajaxSettings&&e.ajaxSettings.dataType,i.is("form")){r=i.attr("method"),o=i.attr("action"),a=i.serializeArray();var d=i.data("ujs:submit-button");d&&(a.push(d),i.data("ujs:submit-button",null))}else i.is(n.inputChangeSelector)?(r=i.data("method"),o=i.data("url"),a=i.serialize(),i.data("params")&&(a=a+"&"+i.data("params"))):i.is(n.buttonClickSelector)?(r=i.data("method")||"get",o=i.data("url"),a=i.serialize(),i.data("params")&&(a=a+"&"+i.data("params"))):(r=i.data("method"),o=n.href(i),a=i.data("params")||null);return f={type:r||"GET",data:a,dataType:c,beforeSend:function(e,r){return r.dataType===t&&e.setRequestHeader("accept","*/*;q=0.5, "+r.accepts.script),n.fire(i,"ajax:beforeSend",[e,r])?void i.trigger("ajax:send",e):!1},success:function(e,t,n){i.trigger("ajax:success",[e,t,n])},complete:function(e,t){i.trigger("ajax:complete",[e,t])},error:function(e,t,n){i.trigger("ajax:error",[e,t,n])},crossDomain:l},u&&(f.xhrFields={withCredentials:u}),o&&(f.url=o),n.ajax(f)}return!1},handleMethod:function(i){var r=n.href(i),o=i.data("method"),a=i.attr("target"),s=e("meta[name=csrf-token]").attr("content"),l=e("meta[name=csrf-param]").attr("content"),u=e('<form method="post" action="'+r+'"></form>'),c='<input name="_method" value="'+o+'" type="hidden" />';l!==t&&s!==t&&(c+='<input name="'+l+'" value="'+s+'" type="hidden" />'),a&&u.attr("target",a),u.hide().append(c).appendTo("body"),u.submit()},formElements:function(t,n){return t.is("form")?e(t[0].elements).filter(n):t.find(n)},disableFormElements:function(t){n.formElements(t,n.disableSelector).each(function(){n.disableFormElement(e(this))})},disableFormElement:function(e){var n,i;n=e.is("button")?"html":"val",i=e.data("disable-with"),e.data("ujs:enable-with",e[n]()),i!==t&&e[n](i),e.prop("disabled",!0)},enableFormElements:function(t){n.formElements(t,n.enableSelector).each(function(){n.enableFormElement(e(this))})},enableFormElement:function(e){var t=e.is("button")?"html":"val";e.data("ujs:enable-with")&&e[t](e.data("ujs:enable-with")),e.prop("disabled",!1)},allowAction:function(e){var t,i=e.data("confirm"),r=!1;return i?(n.fire(e,"confirm")&&(r=n.confirm(i),t=n.fire(e,"confirm:complete",[r])),r&&t):!0},blankInputs:function(t,n,i){var r,o,a=e(),s=n||"input,textarea",l=t.find(s);return l.each(function(){if(r=e(this),o=r.is("input[type=checkbox],input[type=radio]")?r.is(":checked"):r.val(),!o==!i){if(r.is("input[type=radio]")&&l.filter('input[type=radio]:checked[name="'+r.attr("name")+'"]').length)return!0;a=a.add(r)}}),a.length?a:!1},nonBlankInputs:function(e,t){return n.blankInputs(e,t,!0)},stopEverything:function(t){return e(t.target).trigger("ujs:everythingStopped"),t.stopImmediatePropagation(),!1},disableElement:function(e){var i=e.data("disable-with");e.data("ujs:enable-with",e.html()),i!==t&&e.html(i),e.bind("click.railsDisable",function(e){return n.stopEverything(e)})},enableElement:function(e){e.data("ujs:enable-with")!==t&&(e.html(e.data("ujs:enable-with")),e.removeData("ujs:enable-with")),e.unbind("click.railsDisable")}},n.fire(i,"rails:attachBindings")&&(e.ajaxPrefilter(function(e,t,i){e.crossDomain||n.CSRFProtection(i)}),e(window).on("pageshow.rails",function(){e(e.rails.enableSelector).each(function(){var t=e(this);t.data("ujs:enable-with")&&e.rails.enableFormElement(t)}),e(e.rails.linkDisableSelector).each(function(){var t=e(this);t.data("ujs:enable-with")&&e.rails.enableElement(t)})}),i.delegate(n.linkDisableSelector,"ajax:complete",function(){n.enableElement(e(this))}),i.delegate(n.buttonDisableSelector,"ajax:complete",function(){n.enableFormElement(e(this))}),i.delegate(n.linkClickSelector,"click.rails",function(i){var r=e(this),o=r.data("method"),a=r.data("params"),s=i.metaKey||i.ctrlKey;if(!n.allowAction(r))return n.stopEverything(i);if(!s&&r.is(n.linkDisableSelector)&&n.disableElement(r),r.data("remote")!==t){if(s&&(!o||"GET"===o)&&!a)return!0;var l=n.handleRemote(r);return l===!1?n.enableElement(r):l.fail(function(){n.enableElement(r)}),!1}return o?(n.handleMethod(r),!1):void 0}),i.delegate(n.buttonClickSelector,"click.rails",function(t){var i=e(this);if(!n.allowAction(i))return n.stopEverything(t);i.is(n.buttonDisableSelector)&&n.disableFormElement(i);var r=n.handleRemote(i);return r===!1?n.enableFormElement(i):r.fail(function(){n.enableFormElement(i)}),!1}),i.delegate(n.inputChangeSelector,"change.rails",function(t){var i=e(this);return n.allowAction(i)?(n.handleRemote(i),!1):n.stopEverything(t)}),i.delegate(n.formSubmitSelector,"submit.rails",function(i){var r,o,a=e(this),s=a.data("remote")!==t;if(!n.allowAction(a))return n.stopEverything(i);if(a.attr("novalidate")==t&&(r=n.blankInputs(a,n.requiredInputSelector),r&&n.fire(a,"ajax:aborted:required",[r])))return n.stopEverything(i);if(s){if(o=n.nonBlankInputs(a,n.fileInputSelector)){setTimeout(function(){n.disableFormElements(a)},13);var l=n.fire(a,"ajax:aborted:file",[o]);return l||setTimeout(function(){n.enableFormElements(a)},13),l}return n.handleRemote(a),!1}setTimeout(function(){n.disableFormElements(a)},13)}),i.delegate(n.formInputClickSelector,"click.rails",function(t){var i=e(this);if(!n.allowAction(i))return n.stopEverything(t);var r=i.attr("name"),o=r?{name:r,value:i.val()}:null;i.closest("form").data("ujs:submit-button",o)}),i.delegate(n.formSubmitSelector,"ajax:send.rails",function(t){this==t.target&&n.disableFormElements(e(this))}),i.delegate(n.formSubmitSelector,"ajax:complete.rails",function(t){this==t.target&&n.enableFormElements(e(this))}),e(function(){n.refreshCSRFTokens()}))}(jQuery);