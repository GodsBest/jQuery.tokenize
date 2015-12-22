//small form tokenize utility
$(function() { 
	;(function($) {
		//the plugin
		$.fn.tokenize = function() {
			return this.each(function() {
				if(!$.cookie) {
					//console.log('Tokenize needs jQuery.cookie plugin!!');
				} else {
					//console.log('All set!!');
					var stoken = $.cookie('STOKEN') || $.cookie('stoken');
					if(!stoken) {
						//console.log('Missing token!');
					} else {
						var input = $('<input type="hidden" name="token"/>').val(stoken);
						$(this).prepend(input);
					}
				}
			});
		}
	})(jQuery);

	//plugin initialization
	if(!$.cookie) {
    	var script = document.createElement('script');
		script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js';
    	script.onload = goAhead;
    	document.head.appendChild(script);
	} else {
    	goAhead();
  	}
	function goAhead() {
		$('form:not(:has(input[name="token"]))').tokenize();
	}
});