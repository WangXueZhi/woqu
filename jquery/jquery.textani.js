;(function(){
    $.fn.textani = function(str,delay,addDom){
        var _this = this;

        _this.empty();

        var arr = str.split('');

        for (var x in arr) {
            _this.append('<i class="ani-text" style="animation-delay:'+(0.01*x*4)+'s;-webkit-animation-delay:'+(0.01*x*4)+'s">'+arr[x]+'</i>');
        }

        if(addDom){
            _this.append(' ').append(addDom);
        }

        setTimeout(function(){
            _this.find('.ani-text').addClass('ani-scale-up');
        },delay);
    }
})(jQuery)