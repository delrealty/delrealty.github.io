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
	
	
});


