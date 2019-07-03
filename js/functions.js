$(document).ready(function() {
	"use strict";
	/*------------------ Hover Main Menu ------------------*/
	if($('.mnu>ul>li').hasClass('selected')){
		$('.selected').addClass('active');
		var currentleft=$('.selected').position().left+"px";
		var currentwidth=$('.selected').css('width');
		$('.lamp').css({"left":currentleft,"width":currentwidth});
	}
	else{
		$('.mnu>ul>li').first().addClass('active');
		var currentleft=$('.active').position().left+"px";
		var currentwidth=$('.active').css('width');
		$('.lamp').css({"left":currentleft,"width":currentwidth});
	}
	$('.mnu>ul>li').hover(function(){
		$('.mnu ul li').removeClass('active');
		$(this).addClass('active');
		var currentleft=$('.active').position().left+"px";
		var currentwidth=$('.active').css('width');
		$('.lamp').css({"left":currentleft,"width":currentwidth});
	},function(){
		if($('.mnu>ul>li').hasClass('selected')){
			$('.selected').addClass('active');
			var currentleft=$('.selected').position().left+"px";
			var currentwidth=$('.selected').css('width');
			$('.lamp').css({"left":currentleft,"width":currentwidth});
		}
		else{
			$('.mnu>ul>li').first().addClass('active');
			var currentleft=$('.active').position().left+"px";
			var currentwidth=$('.active').css('width');
			$('.lamp').css({"left":currentleft,"width":currentwidth});
		}
	});


	/*------------------ Mobile Main Menu ------------------*/
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	var slideout = new Slideout({
		'panel': document.getElementById('panel'),
		'menu': document.getElementById('menu'),
		'padding': 256,
		'tolerance': 70
	});

	// Toggle button
	document.querySelector('.toggle-mnu').addEventListener('click', function() {
		slideout.toggle();
		return false;
	});


	/*------------------ First Window Height Detected ------------------*/
	
	$(".head_bg").height($(window).height());
	$(window).resize(function(){
		$(".head_bg").height($(window).height());
	}); 


	/*------------------ Animate WOW ------------------*/

	new WOW().init();


	/*------------------ Owl Carousel Parameters------------------*/

	$('.owl-carousel').owlCarousel({
		items: 1, /* The number of items you want to see on the screen */
		loop: true, /* Infinity loop. Duplicate last and first items to get loop illusion. */
		autoplay: true, /* Autoplay */
		autoHeight: false /* AutoHeight Slider */
	});


	/*------------------ Scroll Menu------------------*/

	$(".mnu ul li a, .slide_mnu ul li a, .scroll_bottom a, .scrollup").mPageScroll2id(); 


	/*------------------ Popup Window Effect------------------*/

	$(".popup").magnificPopup({type:"image"});


	/*------------------ Button to Top------------------*/
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	}); 
	

});


/*------------------Preloader------------------*/

$(window).load(function() {

	$(".loader").delay(1000).fadeOut("slow");
	$(".content_name .hello").addClass('animated zoomIn');
	$(".content_name .name").addClass('animated zoomIn');
	$(".content_prof p").addClass('animated zoomIn');
	$(".content_download p").addClass('animated zoomIn');

}); 


