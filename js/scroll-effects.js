function parallaxFade() {
	scrollPos = $(this).scrollTop();
	$('#first-section').css({
		'background-position' : '50%'
    'opacity': 1-(scrollPos/100)
	});
	$('#second-section').css({
		'opacity': 1-(scrollPos/100)
	});
}
$(document).ready(function(){
	$(window).scroll(function() {
		parallaxFade();
	});
});
