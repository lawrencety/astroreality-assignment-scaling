function parallaxFade() {
	scrollPos = $(this).scrollTop();
  docHeight = $(this).height();
  sectionHeight = docHeight/4;

  if (scrollPos < sectionHeight) {
    $('#first-section').css({
      'opacity': 1 - (scrollPos / sectionHeight)
  	});
  } else if (scrollPos > sectionHeight && scrollPos < 2 * sectionHeight)

	$('#second-section').css({
		'opacity': ((scrollPos - sectionHeight) / sectionHeight)
	});
}
$(document).ready(function(){
	$(window).scroll(function() {
		parallaxFade();
	});
});
