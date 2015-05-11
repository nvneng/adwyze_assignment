// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function() {
    $('#albumScroller').carousel({
        interval: 0
    })
    $('#artistScroller').carousel({
        interval: 0
    })

    $('#albumScroller').on('slid.bs.carousel', function() {
        //alert("slid");
    });

    $('#artistScroller').on('slid.bs.carousel', function() {
        //alert("slid");
    });

    $(".backup_picture").error(function(){
        $(this).attr('src', 'http://i61.tinypic.com/2mwdtsk.png');
    });


});
