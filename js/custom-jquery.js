var main = function () {
	
	$(".list-group-item").click( function() {
		var lastBtn = $(".service-list .list-group-item.active"); 
		lastBtn.removeClass("active");
		var lastPg = "#" + lastBtn.attr("value");
		$(lastPg).removeClass("active-page");


		$(this).addClass("active");
		var currentPg = "#" + $(this).attr("value");
		$(currentPg).addClass("active-page");
		var currentList = currentPg + "-sub";
		$(currentList).slideToggle();
	});

	$(window).scroll(function() {
		if ($(window).scrollTop() >= 50) {
			$('.navbar').css('background', '#09814A'); 
		}else{ 
			$('.navbar').css('background', 'transparent');
		}
	});
}
$(document).ready(main);