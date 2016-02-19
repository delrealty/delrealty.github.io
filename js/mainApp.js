var main = function(){
	var mainhref = window.location.href;
	var n = mainhref.indexOf("#");
	if (n > 1)
	{
		var shortHref =mainhref.substr(n+2);
		
		$('#main_menu li').removeClass('active');
		if (shortHref.length>1)
		{		
			$('#'+shortHref).toggleClass('active');
		}
		else
		{
				$('#about').toggleClass('active');
		}	
			
		
	}
	$('#main_menu li').click(function(event){
			$('#main_menu li').removeClass('active');
			$(this).toggleClass('active');
	});

};
//alert(window.location.href);
//$(document).ready(main);
$(function(){
main();
});