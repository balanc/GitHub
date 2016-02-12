$(document).ready(function(){

	//variables

	var user = $('#field');
	var value;
	var check = true;
	var text;
	// var val = user.val().toLowerCase(); //get user input

	//functions

	//clear text field
	function clearUser(){
		user.val("");
	}

	function showText(){
		$("p.hide").animate({
			width: 'toggle',
			height: 'toggle'
		});
	}

	function letterText(){
		$("p.hide").each(function(){
			text += $(this).html() + ' ';
		});
	}

	//get value of field after enter key
	$("#field").keyup(function(e){
	    if (e.keyCode == 13) {
	        // console.log($(user).val().toLowerCase());
	        value = $(user).val().toLowerCase();

	        if(value == 'git log' && check == true)
	        {
	        	showText();
	        	check = false

	        } else if(value == 'clear' && check == false) {

	        	showText();
	        	$('.add').remove();
	        	check = true

	        } else {

				$(".terminal").append('<span class="add">'+"Just follow directions"+'</span>');
	        }

	        clearUser();
	    }
	});

	letterText();

	// writeLog();

});