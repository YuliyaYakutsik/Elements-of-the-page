$(document).ready(function() {
	
	var sideBarHeight = $('.sidebar').height();
	var sideBarPadding = parseInt($('.sidebar').css('padding'));
	var contentHeight = $('.content').height();
	var contentPadding = parseInt($('.content').css('padding'));

	if (sideBarHeight > contentHeight) {
		$('.content').css('height', sideBarHeight + (sideBarPadding*2));
	} else {
		$('.sidebar').css('height', contentHeight + (contentPadding*2));
	}
});