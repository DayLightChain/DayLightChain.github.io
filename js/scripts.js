// JavaScript Document
$(document).ready(function(){
	'use strict';
	
	$("#send_email").bind('click', function () {
		if ($("#email").val().indexOf('@')===-1) {
			$("#email").val('Incorrect e-mail address!');
			return false;
		} else {
			$.ajax({
				url: 'http://148.251.83.120:8093/subscribe',
				type: 'POST',
				data: {
					email: $("#email").val()
				},
				success: function(data){
					$("#form").hide();
					$("#message").html('Thank you!').show();
				}    
			});
		}
	});
	
	jQuery.os = { name: (/(win|mac|linux|sunos|solaris|iphone|ipad)/.exec(navigator.platform.toLowerCase()) || [u])[0].replace('sunos', 'solaris') };
	if (jQuery.os.name === "mac" || jQuery.os.name === "iphone" || jQuery.os.name === "ipad") {
		$("body").addClass("macfix");
	}
	if (jQuery.os.name === "linux") {
		$("body").addClass("androidfix");
	}
});