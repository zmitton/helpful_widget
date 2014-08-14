$(document).ready(function () {


	$("#submit_reasons_button").click(function() {

		var post_data = $('#reasons_form').serializeArray();
		post_data.push({name: 'helpful', value: false});
		post_data.push({name: 'reason_text', value: $('#reason_text').val() });
	    var url = "/votes";

		$.ajax({
			type: "POST",
			url: $(location).attr('href') + "/votes",
			data: post_data
		})
		.done(function( msg ) {
			console.log( "Data Back: " + msg );
			$('#reasons_container').html("</br></br>Thank you for helping us make eHow better for everyone");
			$('#reasons_container').css({'text-align': 'center'}); 
			setTimeout(function(){ $('#widget_container').fadeOut("slow"); }, 2000);
		});
	});



	$("#yes_button").click(function() {

		var post_data = $('#reasons_form').serializeArray();
		post_data.push({name: 'helpful', value: true});
		post_data.push({name: 'reason_text', value: $('#reason_text').val() });
	    var url = "/votes";
	    console.log(post_data);

	$.ajax({
		type: "POST",
		url: $(location).attr('href') + "/votes",
		data: post_data
	})
		.done(function( msg ) {
			$('#reasons_container').css({'display': 'block'}); 
			$('#widget_container').css({'width': '300'}); 
			$('#reasons_container').html("</br></br>Thank you for helping us make eHow better for everyone");
			$('#reasons_container').css({'text-align': 'center'}); 
			setTimeout(function(){ $('#widget_container').fadeOut("slow"); }, 2000);
		});
	});








	$( "#no_button" ).click(function() {
		$('#reasons_container').css({'display': 'block'}); 
		$('#widget_container').css({'width': '300'}); 

	});

});


$(window).scroll(function(e){ 
  $el = $('.fixedElement'); 
  if ($(this).scrollTop() > 770 && $el.css('position') != 'fixed'){ 
  	console.log("here")
	$('.fixedElement').css({'position': 'fixed', 'top': '30px'}); 
  }
  if ($(this).scrollTop() < 770 && $el.css('position') == 'fixed')
  {
    $('.fixedElement').css({'position': 'absolute', 'top': '800px'}); 
  	console.log("here2")
  } 
});


