//tabs
$(document).ready(function(){
	$('.tabs__controls-link').on('click', function(e) {
		e.preventDefault();
   		var item = $(this).closest('.tabs__controls-item');
   		var contentItem = $('.tabs__item');
   		var position = item.index();
		
   		contentItem.eq(position)
   			.addClass('tabs__item_active')
   			.siblings()
   			.removeClass('tabs__item_active');
   		item
   			.addClass('tabs__controls-item_active')
   			.siblings()
   			.removeClass('tabs__controls-item_active');
  	});
	
	$('.tabs__controls1-link').on('click', function(e) {
  		e.preventDefault();
   		var item1 = $(this).closest('.tabs__controls1-item');
   		var contentItem1 = $('.tabs__item1');
   		var position1 = item1.data('class');
		
   		contentItem1.filter('.tabs__item1_' + position1)
   			.addClass('tabs__item1_active')
   			.siblings()
   			.removeClass('tabs__item1_active');
   		item1
   			.addClass('tabs__controls1-item_active')
   			.siblings()
   			.removeClass('tabs__controls1-item_active');
  	});
});//ready
