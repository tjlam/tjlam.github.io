var main = function () {
	
	//Services side bar
	$(".services-nav .list-item").click( function() {
		var lastSelected = $(".services-nav .active"); 
		var lastPg = $(".info-port .active-page");

		lastSelected.removeClass("active");
		lastPg.removeClass("active-page");

		$(this).addClass("active");
		var selected = "#" + $(this).attr("value");
		$(selected).addClass("active-page");


	});
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
	//testimonails chevrons
	var first = $(".testimonial-section .testimonials .carousel .first");
	var last = $(".testimonial-section .testimonials .carousel .last"); 
	//left chevron function
	$("#chevron-left").click( function() {
		var current = $(".testimonial-section .testimonials .carousel .active"); 
		var previous = current.prev(".testimonial");
		current.removeClass("active").hide();
		if (current[0] == first[0]) {
			last.fadeIn(1000).addClass("active");
		} else {
			previous.fadeIn(1000).addClass("active");
		}
	}); 
	//right chevron function 
	$("#chevron-right").click(function() {
		var current = $(".testimonial-section .testimonials .carousel .active"); 
		var next = current.next(".testimonial"); 
		current.removeClass("active").hide(); 
		if (current[0] == last[0]) {
			first.fadeIn(1000).addClass("active");
		} else {
			next.fadeIn(1000).addClass("active");
		}
	});
}
$(document).ready(main);