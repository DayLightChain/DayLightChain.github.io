// JavaScript Document
$(document).ready(function(){
	'use strict';
	
	$(".soc a.s1").on('click', function(){
		$(".ya-share2__item_service_facebook .ya-share2__link").click();
	});
	$(".soc a.s2").on('click', function(){
		$(".ya-share2__item_service_gplus .ya-share2__link").click();
	});
	$(".soc a.s3").on('click', function(){
		$(".ya-share2__item_service_twitter .ya-share2__link").click();
	});
	
	jQuery.os = { name: (/(win|mac|linux|sunos|solaris|iphone|ipad)/.exec(navigator.platform.toLowerCase()) || [u])[0].replace('sunos', 'solaris') };
	if (jQuery.os.name === "mac" || jQuery.os.name === "iphone" || jQuery.os.name === "ipad") {
		$("body").addClass("macfix");
	}
	if (jQuery.os.name === "linux") {
		$("body").addClass("androidfix");
	}
});

$(window).load(function(){
	'use strict';
});

$(window).resize(function(){
	'use strict';
	
	ResizeHeader();
});

$(window).scroll(function(){
	'use strict';
});