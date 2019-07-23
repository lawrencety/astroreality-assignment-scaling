function parallaxFade() {
	scrollPos = $(this).scrollTop();
  sectionHeight = $(this).height();

  if (scrollPos <= sectionHeight) {
    $('#first-background').css({
      'opacity': 1 - (scrollPos / sectionHeight)
  	});
  } else if (scrollPos >= sectionHeight && scrollPos < 2 * sectionHeight) {
    $('#second-background').css({
  		'opacity': 1 - ((scrollPos - sectionHeight) / sectionHeight)
  	});
  } else if (scrollPos >= 2 * sectionHeight && scrollPos < 3 * sectionHeight) {
    $('#third-background').css({
  		'opacity': 1 - ((scrollPos - 2 * sectionHeight) / sectionHeight)
  	});
  } else if (scrollPos >= 3 * sectionHeight) {
    $('#fourth-background').css({
  		'opacity': 1 - ((scrollPos - 3 * sectionHeight) / sectionHeight)
  	});
  }
}
$(document).ready(function(){
	$(window).scroll(function() {
		parallaxFade();
	});
});
