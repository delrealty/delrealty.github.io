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
var send = function(answerForm)
{

//if (answerForm.valid)
	{
	var message = $('#answerText').val();
	var fromMail =$('#answerEmail').val();
	var author =$('#answerAuthor').val();
	$.ajax({
		  type: 'POST',
		  url: 'https://mandrillapp.com/api/1.0/messages/send.json',
		  data: {
		    'key': 'oHRU83USpORYdeVAhD_FAw',
		    'message': {
		      'from_email': 'support@delrealty.ru',
		      'to': [
		          {
		            'email': 'astaffer@mail.ru',
		            'name': 'Pablo',
		            'type': 'to'
		          }
		        ],
		      'autotext': 'true',
		      'subject': 'Сообщение с сайта',
		      'html': '<h1>Новое сообщение</h1>'
								+'<b>Обращение:</b>'+author 
								+'<br><b>E-mail адрес:</b>'+fromMail
								+'<br><b>Текст обращения:</b>'+'<p>'+message+'</p>'
		    }
		  }
		 }).done(function(response) {
		   console.log(response); // if you're into that sorta thing
		 });
return false;
	}
}