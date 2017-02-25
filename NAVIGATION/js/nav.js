$(document).ready(function() {

	$('.nav__item-link').on('click', function(e) {
		e.preventDefault();
		
		showSection($(this).attr('href'), true);
	});

	showSection(window.location.hash, false);
});//ready_end

$(window).scroll(function() {
	checkSection();
});//scroll_end

function showSection (section, isAnimate) {
	
	var direction = section.replace(/#/, '');
	var reqSection = $('.section').filter('[data-section="' + direction + '"]');
	var reqSectionPos = reqSection.offset().top;

	if (isAnimate) {
		$('body, html').animate({scrollTop: reqSectionPos}, 500);
	} else {
		$('body, html').scrollTop(reqSectionPos);
	}
}

function checkSection () {

	$('section').each(function() {

		var $this = $(this);
		var topEdge = $this.offset().top - 200;
		var bottomEdge = topEdge + $this.height();
		var wScroll = $(window).scrollTop();

		if (topEdge < wScroll && bottomEdge > wScroll) {
			var currentId = $this.data('section');
			var reqLink = $('.nav__item-link').filter('[href="#' + currentId + '"]');

			reqLink.closest('.nav__item').addClass('active').siblings().removeClass('active');

			window.location.hash = currentId;
		}
	});
}