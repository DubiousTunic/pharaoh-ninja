$(document).ready(function() {
	console.log('header loaded');
    $( '#hamburger img' ).click(function() {
		$( this ).toggleClass('selected');
		console.log('click');
	}); 



	//from stackoverflow
	var lastScrollTop = 0;

	$(window).scroll(function () {

	var st = $(this).scrollTop();
        if (st < lastScrollTop){
            $('header').fadeIn();
        } else {
          $('header').fadeOut();
        }
        lastScrollTop = st;
	 })
});