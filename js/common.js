$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
	//tabs
	$('.tabs li a').click(function(event){
        event.preventDefault();
        $('.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.tab').hide();
        $($(this).attr('href')).show();
    });
});