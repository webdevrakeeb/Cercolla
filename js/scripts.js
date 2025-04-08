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
		})
		// Mobile User Login Registration Handler
		jQuery('#aside-login-back-btn p').click(function(){
			jQuery('.login-form-card').removeClass('hide-area');
			jQuery('.registration-form-card').removeClass('show-area');
		})


		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);