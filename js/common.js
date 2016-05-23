$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
	//tel
	$("[type='tel'").mask("+7 (999) 999-9999");
	
	//tabs
	$('.tabs li a').click(function(event){
        event.preventDefault();
        $('.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.tab').hide();
        $($(this).attr('href')).show();
    });

    //to top
    $('.totop').on('click',function(){
		$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top-55},800);
		return false;
	});
});