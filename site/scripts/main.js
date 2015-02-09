/**
 * Main JavaScript
 * Site Name
 *
 * Copyright (c) 2015. by Way2CU, http://way2cu.com
 * Authors:
 */

// create or use existing site scope
var Site = Site || {};

// make sure variable cache exists
Site.variable_cache = Site.variable_cache || {};


/**
 * Check if site is being displayed on mobile.
 * @return boolean
 */
Site.is_mobile = function() {
	var result = false;

	// check for cached value
	if ('mobile_version' in Site.variable_cache) {
		result = Site.variable_cache['mobile_version'];

	} else {
		// detect if site is mobile
		var elements = document.getElementsByName('viewport');

		// check all tags and find `meta`
		for (var i=0, count=elements.length; i<count; i++) {
			var tag = elements[i];

			if (tag.tagName == 'META') {
				result = true;
				break;
			}
		}

		// cache value so next time we are faster
		Site.variable_cache['mobile_version'] = result;
	}

	return result;
};

/**
 * Function called when document and images have been completely loaded.
 */
Site.on_load = function() {
	// Scroll Function
	  $(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 500);
	        return false;
	      }
	    }
	  });
	});

  //Display Form
	  $('header nav a:last(),div.teachers_wrap a, input[type="button"]').click(function(){
	  		$('header nav').css('z-index','2');
	  		$('div.teacher').css('z-index','0');
	  		$('div.form_wrap').css('visibility','visible');
	  		$('div.form_wrap').css('opacity','1');
	  		$('div.form_wrap').css('z-index','3');
	  });

	  // Exit Form

	  $('div.form_wrap a').click(function(){
	  		$('header nav').css('z-index','9999');
	  		$('div.teacher').css('z-index','1');
	  		$('div.form_wrap').css('visibility','hidden');
	  		$('div.form_wrap').css('opacity','0');
	  		
	  });




};


// connect document `load` event with handler function
$(Site.on_load);
