$(document).ready(function() {
	$('.slider__controls-button').on('click', function(e) {
		e.preventDefault();
		
		var $this = $(this);
		var container = $this.closest('.slider');
		var list = container.find('.slider__list');
		var items = list.find('.slider__item');
		var activeSlide = items.filter('.active');
		var nextSlide = activeSlide.next();
		var prevSlide = activeSlide.prev();
		var firstSlide = items.first();
		var lastSlide = items.last();
		var sliderOffset = container.offset().left;
		var requiredPosition = 0;

		if ($this.hasClass('slider__controls-button_next')) {
			if (nextSlide.length) {
				findRequiredPosition (nextSlide)
				activeClass (nextSlide);
			} else {
				findRequiredPosition (firstSlide)
				activeClass (firstSlide);
			}
		} else {
			if (prevSlide.length) {
				findRequiredPosition (prevSlide)
				activeClass (prevSlide);
			} else {
				findRequiredPosition (lastSlide)
				activeClass (lastSlide);
			}
		}

		list.css('left', '-=' + requiredPosition + 'px');

		function activeClass (reqSlide) {
			reqSlide.addClass('active').siblings().removeClass('active');
		}

		function findRequiredPosition (slide) {
			requiredPosition = slide.offset().left - sliderOffset;
		}
	});
});