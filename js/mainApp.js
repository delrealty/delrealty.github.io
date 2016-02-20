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
$('#send').click(function( event ) {
  event.preventDefault();

var author =$('#answerAuthor').val();
var message = $('#answerText').val();
var fromMail =$('#answerEmail').val();
if (author.length == 0)
{
 alert("Введите имя");
return;
}
if (fromMail.length == 0)
{
 alert("Введите адрес почты");
return;
}
if (message.length == 0)
{
 alert("Введите сообщение");
return;
}
	$.ajax({
		  type: 'POST',
		  url: 'https://mandrillapp.com/api/1.0/messages/send.json',
		  data: {
		    'key': 'oHRU83USpORYdeVAhD_FAw',
		    'message': {
		      'from_email': 'support@delrealty.ru',
		      'to': [
		          {
		            'email': 'astaffer@gmail.com',
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
				console.log(response);
		 }).success(function(data, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
				console.log(data);
				// действия по сохранению
                alert(author + ", Ваше сообщение отправлено");
		});
});