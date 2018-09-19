$(function(){
	$mobileNav = jQuery('<div id="mobileNav"></div>').prependTo('.offcanvas .nano .nano-content ');
	$mobileNav.append(jQuery('.menu .mynav > ul, .top-info-cta').clone());
	jQuery('.toggle a').click(function(e) {
		jQuery('.offcanvas').addClass('show-offcanvas');
		jQuery('body').addClass('pushed');
		jQuery('.body-inactive').fadeIn(350);
		e.preventDefault();
	});
	jQuery('.body-inactive, .coff a').click(function(e) {
		jQuery('.offcanvas').removeClass('show-offcanvas');
		jQuery('.body-inactive').fadeOut(350);
		e.preventDefault();
	});
	// scrollbar js initialization
	$(".nano").nanoScroller();

	$('.offcanvas ul li.menu-item-has-children >  a').click(function(e){
		e.preventDefault();
		findIfAlreadyOpen = $(this).parent().children('ul').css('display');
		if(findIfAlreadyOpen == "block"){
			$(this).parent().children('ul').slideUp(300);

		}
		else{
			$('.mynav ul li ul').slideDown(300);
			$(this).parent().children('ul').slideDown(300);
		}
	})



})