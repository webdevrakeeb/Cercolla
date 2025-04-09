(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

		jQuery(window).scroll(function(){
			var countUpFront = jQuery(window).scrollTop();
			if(countUpFront > 20) {
				jQuery('.header-area').addClass('sticky-top');
			} else {
				jQuery('.header-area').removeClass('sticky-top');
			}
		});

		//User Log In Register PopUp Handler
		jQuery('.register-now-btn-card p span').click(function(){
			jQuery('.modal-header').addClass('hide-area');
			jQuery('.login-form-card').addClass('hide-area');
			jQuery('.registration-form-card').addClass('show-area');
		})
		jQuery('.back-login-btn p').click(function(){
			jQuery('.modal-header').removeClass('hide-area');
			jQuery('.login-form-card').removeClass('hide-area');
			jQuery('.registration-form-card').removeClass('show-area');
		})

		// Mobile Menu Tab Handler
		$('.tab-menu li').click(function(){
			var tab_id = $(this).data('tab');
			$('.tab-menu li').removeClass('active');
			$('.tab-content').removeClass('active');
			$(this).addClass('active');
			$("#" + tab_id).addClass('active');
		});

		// Mobile User Login Registration Handler
		jQuery('.aside-register-now-btn-card p').click(function(){
			jQuery('.login-form-card').addClass('hide-area');
			jQuery('.registration-form-card').addClass('show-area');
		});
		// Mobile User Login Registration Handler
		jQuery('#aside-login-back-btn p').click(function(){
			jQuery('.login-form-card').removeClass('hide-area');
			jQuery('.registration-form-card').removeClass('show-area');
		});

		// Hero Slider Activation
		jQuery('.hero-slider').owlCarousel({
			margin: 30,
			nav: true,
			items: 1,
			loop: true,
			smartSpeed: 1000,
			navText: ['<i class="fa-sharp fa-regular fa-arrow-left"></i>', '<i class="fa-sharp fa-regular fa-arrow-right"></i>'],
			responsive : {
				1600 : {
					items: 1.2
				},
				768 : {
					margin:20
				},
				0 : {
					margin:10
				}
			}
		});

		// FEATURED PRODUCTS Slider Activation
		jQuery('#featured-product-slider').owlCarousel({
			margin: 30,
			nav: true,
			items: 1,
			loop: true,
			smartSpeed: 1000,
			navText: ['<i class="fa-sharp fa-regular fa-arrow-left"></i>', '<i class="fa-sharp fa-regular fa-arrow-right"></i>'],
			responsive : {
				768 : {
					items: 3
				},
				0 : {
					margin:10
				}
			}
		});

		// INSTAGRAM Slider Activation
		jQuery('#instagram-post').owlCarousel({
			nav: false,
			dots: false,
			mouseDrag: false,
			responsive: {
				1200 : {
					items: 6
				},
				992 : {
					items: 4,
					mouseDrag: true,
					autoplay: true,
					smartSpeed: 1000,
					loop: true,
				},
				600 : {
					items: 3,
					mouseDrag: true,
					autoplay: true,
					smartSpeed: 1000,
					loop: true,
				},
				0 : {
					items: 2,
					mouseDrag: true,
					autoplay: true,
					smartSpeed: 1000,
					loop: true,
				}
			}
		})

		jQuery('.single-column-number').click(function(){
			jQuery('.single-column-number').removeClass('grid-active');
			jQuery(this).addClass('grid-active');
		});


		jQuery('.single-column-number').on('click', function() {
			var clickedValue = jQuery(this).find('span').text();
			if (clickedValue == 2) {
				jQuery('.single-poduct-card').addClass('width-49');
				jQuery('.single-poduct-card').removeClass('width-32');
				jQuery('.single-poduct-card').removeClass('width-24');
				jQuery('.single-poduct-card').removeClass('width-19');
			} else if (clickedValue == 3) {
				jQuery('.single-poduct-card').addClass('width-32');
				jQuery('.single-poduct-card').removeClass('width-49');
				jQuery('.single-poduct-card').removeClass('width-24');
				jQuery('.single-poduct-card').removeClass('width-19');
			} else if (clickedValue == 4) {
				jQuery('.single-poduct-card').addClass('width-24');
				jQuery('.single-poduct-card').removeClass('width-49');
				jQuery('.single-poduct-card').removeClass('width-32');
				jQuery('.single-poduct-card').removeClass('width-19');
			}
			else if (clickedValue == 5) {
				jQuery('.single-poduct-card').addClass('width-19');
				jQuery('.single-poduct-card').removeClass('width-49');
				jQuery('.single-poduct-card').removeClass('width-32');
				jQuery('.single-poduct-card').removeClass('width-24');
			}
		});


		jQuery('.filter-btn-card button').on('click', function(){
			jQuery('.filter-card').toggleClass('col-lg-3');
			jQuery('.all-products-card').toggleClass('col-lg-9');
		})

		jQuery('.colors ul li').click(function(){
			jQuery(this).toggleClass('color-active')
		})

		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);