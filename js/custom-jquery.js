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
	// hides navbar when at top of page
	$(window).scroll(function() {
		if ($(window).scrollTop() >= 50) {
			$('.navbar').css('background', '#09814A'); 
		}else{ 
			$('.navbar').css('background', 'transparent');
		}
	});
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