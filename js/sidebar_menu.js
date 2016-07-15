function updateScrollSpy() {
    jQuery('[data-spy="scroll"]').each(function () {
      var $spy = jQuery(this).scrollspy('refresh')
    });
	$('#main_menu li').removeClass('active');
}
$(document).ready(function() {
	$('body').scrollspy({ target: '#spy', offset:100});	
	$('a.scroll').click(function(e){
	 	    $('html, body').animate({
	 	        scrollTop: $( $.attr(this, 'href') ).offset().top
	 	    }, 500);
	e.preventDefault();
	 	});
	 setTimeout(updateScrollSpy, 1000);
	$('#sendMessage').click(function(e){
		e.preventDefault();
		var $message = $('#form_message').val();
		var $phone = $('#form_phone').val();
		var $email = $('#form_email').val();
		var $name = $('#form_name').val();
			$.ajax({
		    url: "https://formspree.io/info@delrealty.ru", 
		    method: "POST",
		    data: {	name:$name,
				phone:$phone,
				mymail:$email,
				message: $message,
				},
		    dataType: "json"
			})
			.done(function() {
			 alert("Ваше сообщение отправлено");
			})
		 	.fail(function() {
			 alert("Сообщение отправить не удалось");
			});
	});
});
	
});


