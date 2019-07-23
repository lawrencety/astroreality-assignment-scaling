function parallaxFade() {
	scrollPos = $(this).scrollTop();
  sectionHeight = $(this).height();

  if ((scrollPos <= sectionHeight / 2)) {
    $('#first-background').css({
      'opacity': 1
  	});
  } else if ((scrollPos >= sectionHeight / 2) && scrollPos <= sectionHeight) {
    $('#first-background').css({
      'opacity': 1 - (2 * (scrollPos - (sectionHeight / 2)) / sectionHeight)
  	});
  } else if (scrollPos >= sectionHeight && scrollPos <= 1.5 * sectionHeight) {
    $('#first-background').css({
      'opacity': 0
  	});
    $('#second-background').css({
      'opacity': 1
  	});
  } else if (scrollPos >= 1.5 * sectionHeight && scrollPos <= 2 * sectionHeight) {
    $('#second-background').css({
  		'opacity': 1 - (2 * (scrollPos - (1.5 * sectionHeight)) / sectionHeight)
  	});
  } else if (scrollPos >= 2* sectionHeight && scrollPos <= 2.5 * sectionHeight) {
    $('#second-background').css({
      'opacity': 0
  	});
    $('#third-background').css({
      'opacity': 1
  	});
  } else if (scrollPos >= 2.5 * sectionHeight && scrollPos <= 3 * sectionHeight) {
    $('#second-background').css({
      'opacity': 0
  	});
    $('#third-background').css({
  		'opacity': 1 - (2 * (scrollPos - (2.5 * sectionHeight)) / sectionHeight)
  	});
  } else if (scrollPos >= 3* sectionHeight) {
    $('#third-background').css({
      'opacity': 0
  	});
    $('#fourth-background').css({
      'opacity': 1
  	});
  }
}
$(document).ready(function(){
	$(window).scroll(function() {
		parallaxFade();
	});
});
