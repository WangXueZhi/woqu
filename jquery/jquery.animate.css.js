(function($){   
	//利用animate.css
    $.fn.setAnimate = function(effect, delay){
    	var _delay = delay ? delay : '';
        var _this = $(this);
        _this.addClass('animated '+effect+' '+_delay);
    }
})(jQuery);






