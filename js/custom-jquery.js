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
}
$(document).ready(main);