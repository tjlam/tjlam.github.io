var main = function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		var onMobile = true;
	}

	// hides navbar when scrolling down and shows navbar when scrolling up 
	var didScroll; 
	var lastScrollTop = 0; 
	var delta = 20; 
	var navbarHeight = $('.navbar').outerHeight(); 
	//$('.to-top').hide();

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
		if( onMobile ) {
		 	return;
		}

		// make sure they scroll more than delta 
		if (Math.abs(lastScrollTop - st) <= delta) {
			return;
		}

		if (st > lastScrollTop) {
			$('.navbar').fadeOut(500);
			$('to-top').fadeOut(500);
		} else {
			$('.navbar').fadeIn(500);
			//$('.to-top').fadeOut(500);
		}
		lastScrollTop = st; 
	}
	//home page carousel 
	var slide1 = $("#slide1");
	var slide2 = $("#slide2"); 

	setInterval (function () {
		if (slide1.hasClass("active")) {
			slide1.hide();
			slide2.fadeIn(2000);
			slide1.removeClass("active");
			slide2.addClass("active");
		}
		else 
		{
			slide2.hide();
			slide1.fadeIn(2000);
			slide2.removeClass("active");
			slide1.addClass("active");
		}
	}, 10000);


	//Our staff menu desktop view functionality 
	$('.staff-section .desktop .profiles .profile-tabs .profile-tab').click( function (){
		//remove active class and hide profile
		$('.staff-section .desktop .profiles .profile-tabs .active').removeClass("active");
		$('.staff-section .desktop .profiles .profile-info .active').removeClass("active").hide().finish();
		//add active class to selected tab
		$(this).addClass("active");	
		// add active class to selected profile and fade in 
		var profile = "#" + $(this).attr("value"); 
		$(profile).addClass("active").fadeIn(1000);

	}); 
	// Our staff menu mobile view functionality
	$('.staff-section .mobile .profiles .profile-tab').click( function() {
		//remove active class and styling from previously selected profile
		if ($(this)[0] == $('.staff-section .mobile .profiles .active')[0]) {
			return;
		}
		$('.staff-section .mobile .profiles .active .bio').slideUp();
		$('.staff-section .mobile .profiles .active').removeClass("active"); 

		//add active class to selected profile
		$(this).addClass("active"); 
		//display corresponding bio
		$('.staff-section .mobile .profiles .active .bio').slideToggle();
	});

}
$(document).ready(main);