$(document).ready(function(){$("#albumScroller").carousel({interval:0}),$("#artistScroller").carousel({interval:0}),$("#albumScroller").on("slid.bs.carousel",function(){}),$("#artistScroller").on("slid.bs.carousel",function(){}),$(".backup_picture").error(function(){$(this).attr("src","http://i61.tinypic.com/2mwdtsk.png")})});