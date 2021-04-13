/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

$(".show-more").click(function () {
    if($(".extra", $(this).parent()).hasClass("show-less")) {
        $(this).text("(Show Less)");
    } else {
        $(this).text("(Show More)");
    }
    $(".extra", $(this).parent()).toggleClass("show-less");
});

// $(".single-chart").mouseout(function(){
//     $(".circle-bg", $(this)).css("stroke-width", "3.8");
//     $(".circle", $(this)).css("stroke-width", "2.8");
//     $(".percentage", $(this)).css("font-size", "0.4em");
// });
//
// $(".single-chart").mouseover(function(){
//     $(".circle-bg", $(this)).css("stroke-width", "1.8");
//     $(".circle", $(this)).css("stroke-width", "0.8");
//     $(".percentage", $(this)).css("font-size", "0.45em");
// });

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});
