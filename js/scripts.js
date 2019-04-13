;(function($){
	
	"use strict";	
	
	// load fonts
	function loadFonts(linkHref){
		
		var head = document.querySelector('head'),
		link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = linkHref;
		
		head.appendChild(link);
	}
	loadFonts('https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900&amp;subset=cyrillic,latin-ext');
	loadFonts('https://use.fontawesome.com/releases/v5.7.2/css/all.css');
	
		
	// navbar	
	var navbar = $('.navbar');	
		
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
				
		if (scroll >= 100) {
			navbar.addClass("fixed");			
				
		} else {
			navbar.removeClass("fixed");			
		}
	});	
	
	
	
	// btn up
	var btnUp = $('.btn-up');
	
	$(window).scroll(function() {    
		var scrollTop = $(window).scrollTop();
				
		if (scrollTop >= 600) {
			btnUp.addClass("show");			
				
		} else {
			btnUp.removeClass("show");			
		}
	});	
		
		
	
	// lazy load
	var bLazy = new Blazy({
		// Options
		offset: 100
	});		
	
	
	
	// scroll anchor
	$(document).on('click', '.page-scroll', function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
	});
	
	
	
   // wow animation 
   document.addEventListener("DOMContentLoaded", function(event) {
	   var wow = new WOW({
		boxClass:     'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset:       50,          // distance to the element when triggering the animation (default is 0)
		mobile:       false,       // trigger animations on mobile devices (default is true)
		live:         true,       // act on asynchronously loaded content (default is true)
		callback:     function(box) {
		  // the callback is fired every time an animation is started
		  // the argument that is passed in is the DOM node being animated
		},
		scrollContainer: null // optional scroll container selector, otherwise use window
	  }
	);
	wow.init();
	   //console.log("DOM fully loaded and parsed");
	});
	
	
})(window.jQuery);									