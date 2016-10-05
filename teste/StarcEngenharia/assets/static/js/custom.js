jQuery(document).ready(function(){

	jQuery('.about, .portfolio').hover(function() {
		jQuery(this).find('.movable-content').stop().animate({
			left: '300px'
		}, 200);
	}, function() {
		jQuery(this).find('.movable-content').stop().animate({
			left: '0px'
		}, 200);
	});

	jQuery('.tippy').hover(function() {
		jQuery(this).find('.hover-title').stop().fadeTo("fast",1);
	}, function() {
		jQuery(this).find('.hover-title').stop().fadeTo("fast",0);
		jQuery(this).find('.hover-title').delay(500).stop().css({
			'display': 'none'
		}, 0);
	});


});
