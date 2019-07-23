function parallaxFade() {
	scrollPos = $(this).scrollTop();
  sectionHeight = $(this).height();
  sectionWidth = $(this).width();

  if ((scrollPos <= sectionHeight / 2)) {
    $('#first-background').css({
      'opacity': 1,
      'height': sectionHeight - (sectionHeight * 0.05 * 2 * (scrollPos / sectionHeight)),
      'width': sectionWidth - (sectionWidth * 0.05 * 2 * (scrollPos / sectionHeight)),
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
      'opacity': 1,
      'height': 0.95 * sectionHeight - (sectionHeight * 0.05 * 2 * ((scrollPos - sectionHeight) / sectionHeight)),
      'width': 0.95 * sectionWidth - (sectionWidth * 0.05 * 2 * ((scrollPos - sectionHeight)/ sectionHeight)),
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
      'opacity': 1,
      'height': 0.90 * sectionHeight - (sectionHeight * 0.05 * 2 * ((scrollPos - 2 * sectionHeight) / sectionHeight)),
      'width': 0.90 * sectionWidth - (sectionWidth * 0.05 * 2 * ((scrollPos - 2 * sectionHeight)/ sectionHeight)),
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
      'opacity': 1,
      'height': 0.85 * sectionHeight - (sectionHeight * 0.05 * 2 * ((scrollPos - 3 * sectionHeight) / sectionHeight)),
      'width': 0.85 * sectionWidth - (sectionWidth * 0.05 * 2 * ((scrollPos - 3 * sectionHeight)/ sectionHeight)),
  	});
  }
}
$(document).ready(function(){
	$(window).scroll(function() {
		parallaxFade();
	});
});
