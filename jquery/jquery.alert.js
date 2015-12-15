(function($){   
	//弹窗 
	$.showAlert = function(option){
        var option = option || {};

        var style = option.style ? option.style : 'default';
        var text = option.text ? option.text : '这是弹窗';
        var btn = option.btn ? option.btn : '确定';

		if(!$('.woqu-alert').length){
            var alert = $("<div class='woqu-alert'>"+
                        "<div class='woqu-alertbox'>"+
                            "<div class='woqu-alerttxt'></div>"+
                            "<div class='woqu-alertbtn button'></div>"+
                        "</div>"+
                    "</div>");

            $('body').append(alert);

            alert.hide(0);
        }else{
            var oldStyle = $('.woqu-alert').data('style');
            $('.woqu-alert').removeClass(oldStyle);
        }
        
        $('.woqu-alerttxt').text(text);
        $('.woqu-alertbtn').text(btn).on('click',$.hideAlert);
        $('.woqu-alert').addClass(style).fadeIn().attr('data-style',style);
	}

    $.hideAlert = function(){
        $('.woqu-alert').fadeOut();
        $('.woqu-alertbtn').off('click',$.hideAlert);
    }    
})(jQuery);






