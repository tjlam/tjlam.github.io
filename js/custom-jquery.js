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
	//Parallax effect for splash page 
	var parallax = $(".splash-section");

	$(document).on("scroll" , function () {
		var currentScroll = $(document).scrollTop(); 
		parallax.css("background-position" , "0 " + -currentScroll/4 + "px");
	});
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