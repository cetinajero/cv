function checkWindowSize() {
	// Fix sidebar if necessary
	if ( $(window).height() < 520 )
		$('#sidebar').removeClass('fixed');
	else
		$('#sidebar').addClass('fixed');

	// Align generals to the sidebar's right corner
	var generals = document.getElementById("generals");
	var generals_width = ((($(window).width()-960)/2)+242);
	if (generals_width < 0)
		generals_width = 0;
	generals.style.width = generals_width+"px";

	if ( (($(window).width()-960)/2) < 41 )
		var sidebar_margin_left = 41;
	else
		var sidebar_margin_left = (($(window).width()-960)/2);
	$('#sidebar').css({"margin": "20px 0px 0px "+sidebar_margin_left+"px"});
}

$(window).resize(checkWindowSize);

$(document).ready(function(){
	checkWindowSize();
});
