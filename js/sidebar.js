//Initialize our user agent string to lower case.
var uagent = navigator.userAgent.toLowerCase();

function DetectMobile(){
	if (uagent.search("iphone") > -1)
      		return true;
	else if (uagent.search("ipod") > -1)
      		return true;
	else if (uagent.search("ipad") > -1)
      		return true;
	else if (uagent.search("android") > -1)
      		return true;
	else if (uagent.search("blackberry") > -1)
      		return true;
	else
		return false;
}

function checkWindowSize() {
	if ( $(window).height() < 520 ) {
		$('#sidebar').removeClass('fixed');
	}
    else if ( DetectMobile() ) {
        $('#sidebar').removeClass('fixed');
    }
	else {
		$('#sidebar').addClass('fixed');
	}
    var generals = document.getElementById("generals");
    var generals_width = ((($(window).width()-960)/2)+242);
    if (generals_width < 0){
        generals_width = 0;
    }
    generals.style.width = generals_width+"px";
    if ( (($(window).width()-960)/2) < 41 ){
        var sidebar_margin_left = 41;
    }
    else {
        var sidebar_margin_left = (($(window).width()-960)/2);
    }
		$('#sidebar').css({"margin": "20px 0px 0px "+sidebar_margin_left+"px"});
}

$(window).resize(checkWindowSize);

$(document).ready(function(){
	//Load html data
	//$( "#sidebar" ).load( "{{ site.public-url }}/sidebar/" );

	checkWindowSize();
	$("a[rel^='prettyPhoto']").prettyPhoto({
		theme: 'light_rounded' /* light_rounded / dark_rounded / light_square / dark_square / facebook */
	});
	if (DetectMobile())
		$("head").append($('<link type="text/css" rel="stylesheet" href="/css/mobile.css" media="screen"/>'));
});
