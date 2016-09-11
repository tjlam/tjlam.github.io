var main = function () {

	// hides navbar when scrolling down and shows navbar when scrolling up 

	var didScroll; 
	var lastScrollTop = 0; 
	var delta = 20; 
	var navbarHeight = $('.navbar').outerHeight(); 

	$(window).scroll( function(event) {
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			hasScrolled(); 
			didScroll = false; 
		}
	}, 250); 

	function hasScrolled() {
		var st = $(this).scrollTop(); 
		// make sure this function doesn't execute on mobile displays
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		 	return;
		}

		// make sure they scroll more than delta 
		if (Math.abs(lastScrollTop - st) <= delta) {
			return;
		}

		if (st > lastScrollTop) {
			$('.navbar').fadeOut(500);
		} else {
			$('.navbar').fadeIn(500);
		}
		lastScrollTop = st; 
	}
	// Treatments -animate on hover 
	/*
	$(".treatment-list .treatments .treatment").hover(function () {
		console.log("shit");
		$(this).animate({opacity: 0.25 }, 200);
	});
*/

}
$(document).ready(main);