$(document).ready(function() {
	$( 'body table td' ).click(function(){
	
		//todo: slight pause after click of overlay
		$( '#mediumPopupOverlay' ).show();
		$( '#mediumPopup' ).fadeIn();

		$('body').css("overflow", "hidden");

		$( '#mediumPopupOverlay' ).click(function(){
			//restore scroll
		   	$("body").css("overflow", "initial");

			$( '#mediumPopupOverlay' ).hide();
			$( '#mediumPopup' ).fadeOut();
		});
	});


	


		/*$( 'body table td' ).on('click', function(e) {
	   		e.stopPropagation();
		});
			
		$('body').css("overflow", "hidden");

		//show popups
		

		$('#mediumPopup').on('click', function(e) {
   			e.stopPropagation();
		});
		$('html').on('click', function(e) {
				
			//hide popups
		   	$( '#mediumPopup' ).hide();
		    $( '#mediumPopupOverlay' ).hide();

		    //restore scroll
		   	$("body").css("overflow", "initial");
   			
		});

		

		
		
		
	});*/

	
	
});