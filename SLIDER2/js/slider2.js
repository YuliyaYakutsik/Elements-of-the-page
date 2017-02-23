var slider = (function(){

	var flag = true;
	var timerDuration = 3000;
	var timer = 0;

	return {
		init: function () {

			var _this = this;

			//создание контейнера с точками
			_this.createDots();

			// включение автопереключения
			_this.autoSwitch();

			$('.slider__controls-button').on('click', function(e) {
				e.preventDefault();
				
				var $this = $(this);
				var slides = $this.closest('.slider').find('.slider__item');
				var activeSlide = slides.filter('.active');
				var nextSlide = activeSlide.next();
				var prevSlide = activeSlide.prev();
				var firstSlide = slides.first();
				var lastSlide = slides.last();

				_this.clearTimer();

				if ($this.hasClass('slider__controls-button_next')) {
					if (nextSlide.length) {
						_this.moveSlide (nextSlide, 'forward');
					} else {
						_this.moveSlide (firstSlide, 'forward');
					}
				} else {
					if (prevSlide.length) {
						_this.moveSlide (prevSlide, 'backward');
					} else {
						_this.moveSlide (lastSlide, 'backward');
					}
				}
			});

			$('.slider__dots-link').on('click', function(e) {
				e.preventDefault;

				var $this = $(this);
				var dots = $this.closest('.slider__dots').find('.slider__dots-item');
				var activeDot = dots.filter('.active');
				var dot = $this.closest('.slider__dots-item');
				var curDotNum = dot.index();
				var direction = (activeDot.index() < curDotNum) ? 'forward' : 'backward';
				var reqSlide = $this.closest('.slider').find('.slider__item').eq(curDotNum);

				_this.clearTimer();

				_this.moveSlide (reqSlide, direction);
			});
		},

		moveSlide: function (slide, direction) {

			var _this = this;
			var container = slide.closest('.slider');
			var slides = container.find('.slider__item');
			var activeSlide = slides.filter('.active');
			var slideWidth = slides.width();
			var duration = 500;
			var reqCssPosition = 0;
			var reqSlideStrafe = 0;

			if (flag) {

				flag = false;

				if (direction === 'forward') {
					reqCssPosition = slideWidth;
					reqSlideStrafe = -slideWidth;
				} else if (direction === 'backward') {
					reqCssPosition = -slideWidth;
					reqSlideStrafe = slideWidth;
				}

				slide.css('left', reqCssPosition).addClass('inslide');

				var movableSlide = slides.filter('.inslide');

				activeSlide.animate({left: reqSlideStrafe}, duration);

				movableSlide.animate({left: 0}, duration, function () {
				
					var $this = $(this);

					slides.css('left', 0).removeClass('active');

					$this.toggleClass('inslide active');

					_this.setActiveDot(container.find('.slider__dots'));

					flag = true;
				});
			}
		},

		createDots: function () {
			
			var _this = this;
			var container = $('.slider');
			var dotMarkUp = '<li class="slider__dots-item">\
							<a href="#" class="slider__dots-link"></a>\
						    </li>';

			container.each(function() {
				var $this = $(this);
				var slides = $this.find('.slider__item');
				var dotsContainer = $this.find('.slider__dots');

				for (var i = 0; i < slides.length; i++) {
					dotsContainer.append(dotMarkUp)
				}

				_this.setActiveDot(dotsContainer);
			});
		},

		setActiveDot: function (container) {
			
			var slides = container.closest('.slider__list--wrap').find('.slider__item');

			container
				.find('.slider__dots-item')
				.eq(slides.filter('.active').index())
				.addClass('active')
				.siblings()
				.removeClass('active');
		},

		autoSwitch: function(){

			var _this = this;

			timer = setInterval(function () {
				var slides = $('.slider__list .slider__item');
				var activeSlide = slides.filter('.active');
				var nextSlide = activeSlide.next();
				var firstSlide = slides.first();

				if (nextSlide.length) {
						_this.moveSlide (nextSlide, 'forward');
					} else {
						_this.moveSlide (firstSlide, 'forward');
					};
			}, timerDuration)
		},

		clearTimer: function () {
			if (timer) {
				clearInterval(timer);
				this.autoSwitch();
			}
		}
	}
}());

$(document).ready(function() {
	if ($('.slider').length) {
		slider.init();
	}
});