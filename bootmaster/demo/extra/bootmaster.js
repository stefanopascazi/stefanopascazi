// JavaScript Document 

(function($){
	// add class necessary
	$('ul.navbar-nav > li').addClass('nav-item');
	$('ul.navbar-nav > li a').addClass('nav-link');
	$( '.current_page_item' ).addClass( 'active' );
	$('table').addClass('table');
	$('.menu-item-has-children').addClass('nav-item dropdown');
	$('.menu-item-has-children a').addClass('nav-link dropdown-toggle').attr( 'data-toggle', 'dropdown' );
	$('ul.sub-menu').addClass('dropdown-menu');
	$('ul.sub-menu li a').removeClass('nav-link dropdown-toggle').addClass('dropdown-item');
	$('ul.sub-menu li ul').removeClass('dropdown-menu');
	
	$(document).ready(function($){
		$('html').animate({
			opacity: '1'
		});
	})
})(jQuery);