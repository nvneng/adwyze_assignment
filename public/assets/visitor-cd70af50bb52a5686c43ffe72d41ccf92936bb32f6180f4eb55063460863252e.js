angular.module("myApp",[]).controller("MyController",function(t,e){t.historyData={},t.artistData={},t.moreData={},t.init=function(){t.cpage=0;var n=e.get("/search_record/getRecord?cpage="+t.cpage);n.success(function(e){"nopageleft"===e.cpage?$("#more_button").hide():(t.historyData=e.history,t.cpage=t.cpage+1,$(".more_button").show())}),n.error(function(){})},t.artistData.doClick=function(){if(!$("#search-artist").val().match(/^\s*$/)){$(".history-view").hide(),$(".load-view").show(),t.cpage=0;var n=e.get("/search_record/putRecord?search_string="+$("#search-artist").val());n.success(function(e){e.error||jQuery.isEmptyObject(e)?($(".load-view").hide(),$(".no-result-view").show()):($("#search-artist").val(""),t.artistData.name=e.name,t.artistData.image=e.image,t.artistData.url=e.url,t.artistData.similar_artist=e.similar_artist,t.artistData.tags=e.tags,t.artistData.albums=e.albums,$(".load-view").hide(),$(".artist-view").show()),$("#search-artist").val("")}),n.error(function(){$("#search-artist").val(""),$(".load-view").hide(),$(".error-view").show()})}},t.moreData.g=function(){var n=e.get("/search_record/getRecord?cpage="+t.cpage);n.success(function(e){"nopageleft"===e.cpage?$("#more_button").hide():(t.historyData=$.merge(t.historyData,e.history),t.cpage=t.cpage+1,$("#more_button").show())}),n.error(function(){})}});