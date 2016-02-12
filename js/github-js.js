$(document).ready(function(){

	/* ========== Begin Variables ==========*/


	var user = $('#field'); //get text field id
	var value;
	var check = true;
	var text;

	/* ========== End Variables ==========*/

	/* ========== Begin Functions ==========*/

	//clear text field
	function clearUser(){
		user.val("");
	}

	//toggle letter contents
	function showText(){
		$("p.hide").animate({
			width: 'toggle',
			height: 'toggle'
		});
	}

	//unimplemented function gets contents of all paragraph tags for letter
	function letterText(){
		$("p.hide").each(function(){
			text += $(this).html() + ' ';
		});
	}

	/* ========== End Functions ==========*/

	/* ========== Begin Page Interaction ==========*/


	//get value of field after enter key
	$("#field").keyup(function(e){
	    if (e.keyCode == 13) {

	        // console.log($(user).val().toLowerCase());
	        value = $(user).val().toLowerCase(); //set value equal to user input after enter keyup

	        if(value == 'git love' && check == true)
	        {
	        	showText(); //toggle letter contents
	        	$('.add').remove(); //remove appended text if existing
	        	check = false

	        } else if(value == 'clear' && check == false) {

	        	showText(); //toggle letter contents
	        	$('.add').remove(); //remove appended text if existing
	        	check = true

	        } else if(value == 'clear') {

	        	$('.add').remove(); //remove appended text if existing

	        } else {

				$(".terminal").append('<span class="add"><p>-bash: ' + value + ': command not found</p></span>'); //append text if user inputs incorrectly
	        }

	        clearUser(); //clear text field on enter keyup
	    }
	});

	/* ========== End Page Interaction ==========*/

});