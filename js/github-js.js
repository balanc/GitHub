$(document).ready(function(){

	//variables

	var user = $("#field");
	var value;
	var check = true;
	// var val = user.val().toLowerCase(); //get user input

	//functions

	//clear text field
	function clearUser(){
		user.val("");
	}

	function showText(){
		$(".hide").animate({
			width: 'toggle',
			height: 'toggle'
		});
	}

	//get value of field after enter key
	$("#field").keyup(function(e){
	    if (e.keyCode == 13) {
	        // console.log($(user).val().toLowerCase());
	        value = $(user).val().toLowerCase();

	        if(value == 'git pull' && check == true)
	        {
	        	showText();
	        	check = false

	        } else if(value == 'git merge' && check == false) {

	        	showText();
	        	check = true

	        } else if(value == 'clear') {

	        	

	        } else {

	        	$('.terminal').append('<p>Already up-to-date</p>');

	        }

	        clearUser();
	    }
	});



	// writeLog();

});