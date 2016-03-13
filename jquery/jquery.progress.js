(function($){   
	//预加载进度条
    $.fn.progressStart = function(event){
        $(this).find('div').css('width',parseInt(event.loaded*100)+'%');
        if(parseInt(event.loaded*100)==100){
            $(this).fadeOut(200);
            setTimeout(function(){
                $(this).remove();
            },200)
        }
    }

    $.fn.progressEnd = function(){
        $(this).fadeOut(200);
        var _this = $(this);
        setTimeout(function(){
            _this.remove();
        },500)
    }
})(jQuery);






