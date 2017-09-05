$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('#nav').addClass('shrink');
      $('#L').addClass('show');
    }
    else {
    $('#nav').removeClass('shrink');
    $('#L').removeClass('show');
    }
  });
});
