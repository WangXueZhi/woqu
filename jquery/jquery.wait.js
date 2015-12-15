(function($){      
	//请求等待
	$.showWait = function(option){
        var option = option || {};

        var style = option.style ? option.style : 'default';
        var text = option.text ? option.text : '请求中';
        var anistyle = option.anistyle ? option.anistyle : 'default';

		if(!$('.woqu-wait').length){
            var wait = $("<div class='woqu-wait'>"+
		                        "<div class='woqu-waitbox'>"+
		                            "<div class='woqu-waitani'>"+
		                            	"<i></i><i></i><i></i>"+
		                            "</div>"+
                                    "<p class='woqu-waittxt'></p>"+
		                        "</div>"+
		                    "</div>");

            $('body').append(wait);

            wait.hide(0);
        }else{
            var oldStyle = $('.woqu-wait').data('style');
            $('.woqu-wait').removeClass(oldStyle);
        }
        
        $('.woqu-waittxt').text(text);
        $('.woqu-wait').addClass(style).fadeIn().attr('data-style',style);
        $('.woqu-waitani').addClass('woqu-ani-'+anistyle);
	}

    $.hideWait = function(){
        $('.woqu-wait').fadeOut();
    }     
})(jQuery);








