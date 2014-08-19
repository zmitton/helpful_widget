
//widget css importer
var hnh_css = 'myCss';  
if (!document.getElementById(hnh_css))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = hnh_css;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'http://hnh-zacmitton.herokuapp.com/css/hnh_widget.css';
    link.media = 'all';
    head.appendChild(link);
}

//hidget html importer
var hnh_div = document.createElement("div");
hnh_div.id = "widget_container";
hnh_div.className = hnh_div.className + "fixedElement";
document.body.appendChild(hnh_div);

var hnh_widget_string="";
hnh_widget_string += "	<div id=\"vote_container\">";
hnh_widget_string += "		<div class=\"rotate\">";
hnh_widget_string += "			Helpful?";
hnh_widget_string += "		<\/div>";
hnh_widget_string += "	<\/div>";
hnh_widget_string += "	<button id=\"yes_button\" type=\"button\">Yes<\/button><\/br>";
hnh_widget_string += "	<button id=\"no_button\" type=\"button\">No<\/button>";
hnh_widget_string += "";
hnh_widget_string += "	<div id=\"reasons_container\">";
hnh_widget_string += "		<div id=\"reasons_head\">Why not?<\/div>";
hnh_widget_string += "			<form id=\"reasons_form\">";


hnh_widget_string += "<li><input type=\"checkbox\" name=\"reasons_arr[]\" value=\"1\"> Other<\/li>";
hnh_widget_string += "				";
hnh_widget_string += "					<li><input type=\"checkbox\" name=\"reasons_arr[]\" value=\"2\"> Needs more photos<\/li>";
hnh_widget_string += "				";
hnh_widget_string += "					<li><input type=\"checkbox\" name=\"reasons_arr[]\" value=\"3\"> Innacurate<\/li>";
hnh_widget_string += "				";
hnh_widget_string += "					<li><input type=\"checkbox\" name=\"reasons_arr[]\" value=\"4\"> Out of date<\/li>";
hnh_widget_string += "				";
hnh_widget_string += "					<li><input type=\"checkbox\" name=\"reasons_arr[]\" value=\"5\"> Too general<\/li>";


hnh_widget_string += "				<div id=\"reason_text_and_submit\">";
hnh_widget_string += "					<textarea id=\"reason_text\" rows=\"1\" cols=\"34\"><\/textarea><\/br>";
hnh_widget_string += "					<button id=\"submit_reasons_button\" type=\"button\">Submit<\/button>";
hnh_widget_string += "				<\/div>";
hnh_widget_string += "			<\/form>";
hnh_widget_string += "	<\/div>";

hnh_div.innerHTML = hnh_widget_string;


//imperatively js widget functionality
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















	$("#submit_reasons_button").click(function() {

		var post_data = $('#reasons_form').serializeArray();
		post_data.push({name: 'helpful', value: false});
		post_data.push({name: 'reason_text', value: $('#reason_text').val() });
	    var url = "/votes";

		$.ajax({
			type: "POST",
			url: "http://hnh-zacmitton.herokuapp.com/articles/1" + "/votes",
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
		url: "http://hnh-zacmitton.herokuapp.com/articles/1"  + "/votes",
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
























