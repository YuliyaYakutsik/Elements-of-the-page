$(document).ready(function() {
	$('.slideshow__pic').on('click', function(e) {
		e.preventDefault();
		var $this = $(this);
		var item = $this.closest('.slideshow__item');
		var container = $this.closest('.slideshow');
		var display = container.find('.slideshow__display');
		var path = item.find('img').attr('src');
		var duration = 300;

		if (!item.hasClass('active')) {
			item.addClass('active').siblings().removeClass('active');

			display.find('img').fadeOut(duration, function() {
				$(this).attr('src', path).fadeIn(duration);
			});
		}
	});
});