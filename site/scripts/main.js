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
	//Scroll Function
	$('a[href*=#]').bind('click', function(e) {
	e.preventDefault(); //prevent the "normal" behaviour which would be a "hard" jump

	var target = $(this).attr("href"); //Get the target

	// perform animated scrolling by getting top-position of target-element and set it as scroll target
	$('html, body').stop().animate({ scrollTop: $(target).offset().top - 100 }, 800, function() {
	     location.hash = target;  //attach the hash (#jumptarget) to the pageurl
	});

	return false;
   });
	  //Active Link




  //Display Form
	  $('header nav a:last(),div.teachers_wrap a, input[type="button"]').click(function(){
	  		$('header nav').css('z-index','2');
	  		$('div.teacher').css('z-index','0');
	  		$('div.teachers_wrap div.form_wrap').css('visibility','visible');
	  		$('div.teachers_wrap div.form_wrap').css('opacity','1');
	  		$('div.teachers_wrap div.form_wrap').css('z-index','3');
	  });
 //Display Form Sponser
 	 $('div.sponsor_wrap a').click(function(){
	  		$('header nav').css('z-index','2');
	  		$('div.teacher').css('z-index','0');
	  		$('div.sponsor_wrap div.form_wrap').css('visibility','visible');
	  		$('div.sponsor_wrap div.form_wrap').css('opacity','1');
	  		$('div.sponsor_wrap div.form_wrap').css('z-index','3');
	  });

	  // Exit Form

	  $('div.form_wrap a').click(function(){
	  		$('header nav').css('z-index','9999');
	  		$('div.teacher').css('z-index','1');
	  		$('div.form_wrap').css('visibility','hidden');
	  		$('div.form_wrap').css('opacity','0');
		});
}


// connect document `load` event with handler function
$(Site.on_load);