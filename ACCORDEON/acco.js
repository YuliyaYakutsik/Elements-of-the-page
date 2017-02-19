$(document).ready(function(){
	var duration = 400;

	$('.accordeon__trigger').on('click', function(e) {
		e.preventDefault();
		var item = $(this).closest('.accordeon__item');
		var list = $(this).closest('.accordeon__list');
		var items = list.find('.accordeon__item');
		var content = item.find('.accordeon__inner');
		var otherContent = list.find('.accordeon__inner');

		if (!item.hasClass('accordeon__item_active')) {
			items.removeClass('accordeon__item_active');
			item.addClass('accordeon__item_active');
			otherContent.slideUp(duration);
			content.slideDown(duration);
		} else {
			item.removeClass('accordeon__item_active');
			content.slideUp(duration);
		};
	});

	$(document).on('click', function(e) {
		e.preventDefault();
		var $this = $(e.target);

		if (!$this.closest('.accordeon__list').length) {
			$('.accordeon__item').removeClass('accordeon__item_active');
			$('.accordeon__inner').slideUp(duration);
		};
	});
});