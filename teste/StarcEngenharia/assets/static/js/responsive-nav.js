jQuery(document).ready(function(){
	
if ( jQuery(window).width() < 767) {
	jQuery('#nav-button-wrapper').click(function() {
	jQuery('#options').slideDown(200);
	});
	jQuery('#options li a').click(function() {
	jQuery('#options').hide();
	});
}

	jQuery(window).resize(function() {
  if ( jQuery(window).width() < 767) {
	  
jQuery('#nav-button-wrapper').click(function() {
	jQuery('#options').slideDown(200);
	});
	jQuery('#options li a').click(function() {
	jQuery('#options').hide();
	});
	}
	});

	jQuery(window).resize(function() {
  if ( jQuery(window).width() > 767) {

jQuery('#options').show(0);
jQuery('#options li a').click(function() {
	jQuery('#options').show();
	});
	}
	});
	


	

	
});	
	