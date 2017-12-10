$(function() {
	"use strict";
  var header = $("header"),
			navbar = $(".navbar");
	$(window).scroll(function() {
		if ( $(window).scrollTop() >= header.height() ? navbar.addClass("scrolled navbar-fixed-top") : navbar.removeClass("scrolled navbar-fixed-top"));
	});	
	$(".switch-tabs li").click(function(){
		// add selected class to active link
		$(this).addClass("selected").siblings().removeClass("selected");
	   $(".tabs-content >div").hide(500);
		$("."+$(this).data("class")).show(500);
	});
  
});