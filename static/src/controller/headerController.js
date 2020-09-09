$(document).ready(function() {
	$( '#header_searchIcon-open' ).click(function(){	
		$( '.search_field' ).fadeIn();
		$(' .search_field' ).css('display','flex');

		$(this).hide();

		$('#header_searchIcon-close').fadeIn();
		$(' #header_searchIcon-close' ).css('display','flex');
	});

	$( '#header_searchIcon-close' ).click(function(){	
		$(' .search_field ').fadeOut();
		$(this).hide();
		$(' #search_suggestions ').hide();  
		$('#header_searchIcon-open').fadeIn();
	});

	$( ' .search_field input ' ).keyup(function(){

		if($(this).val().length >= 3 && !($(' #search_suggestions' ).is(':visible'))) {
        	$(' html ').click(function(){
  				$(this).data('clicked', true);
			});

        	$(' #search_suggestions ').show(function(){  
        		
        	});
        	
        	
        }

        //use transparent overlay
        else if($(this).val().length == 0 || $(this).data('clicked')){        	
        	$(' #search_suggestions ').hide();        	
        }

	});
	
});