$(document).ready(function() {
    $('#_header').load('/fragments/header.html');
    $('#_body').load('/fragments/body.html', function(){
    	$('#mediumLoader').load('/fragments/medium.html');
    	$('#executeLoader').load('/fragments/execute.html');
    });

    $('#_footer').load('/fragments/footer.html');

    $( '.disabled' ).on('click', function(e) {
   		e.stopPropagation();
	});
});