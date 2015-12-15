(function(woqu){
	
	/**
     * 查询页面地址的参数值
     * @ --> str {string}
     * @returns {string}
     */
    woqu.getValFromUrl = function(str)
    {
        var reg = new RegExp("(^|&)" + str + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]); return null;
    }

    /*
     * 调试信息
     * @ --> str {string} 文字
     */
    woqu.log = function(str)
    {
        console.log('---------------------------');
        console.log(str);
        console.log('---------------------------');
    }

    /*
     * 抽奖，返回是否中奖
     * @ --> num {number} 中奖概率
     * @return {boolean}
     */
    woqu.lucky = function(num){
        var n = 10;
        return Math.floor(Math.random() * n)/n<num;
    }

    /*
     * 指定范围随机数
     * @ --> min {int} 最小值
     * @ --> max {int} 最大值
     * @return {int}
     */
    woqu.randomFromRange = function(Min,Max){
        var Range = Max - Min;
        var Rand = Math.random();   
        var num = Min + Math.round(Rand * Range);
        return num;
    }

    /*
     * 从两个数组里随机抽取数据穿插合并为一个数组
     * @ --> array1 {array} 参与合并的第1个数组
     * @ --> array2 {array} 参与合并的第2个数组
     * @ --> getNum {number} 合并后数组的长度
     * @return {array}
     */
    woqu.randomMergeFrom = function(array1, array2, getNum){
        var array = [];
        var arr1 = array1;
        var arr2 = array2;
        var startFromArray = woqu.lucky(0.5);
        for (var i = 0; i < getNum; i++) {
            if (startFromArray) {
                var randomNum = Math.floor(Math.random() * (arr1.length-1));
                array.push(arr1[randomNum]);
                arr1.splice(randomNum,1);
                startFromArray = false;
            }else{
                var randomNum = Math.floor(Math.random() * (arr2.length-1));
                array.push(arr2[randomNum]);
                arr2.splice(randomNum,1);
                startFromArray = true;
            }
        }
        return array;
    }

    /*
     * 验证手机号
     * @ --> str {string} 验证的内容
     * @return {boolean}
     */
    woqu.isMobilePhone = function(str){
        var a = /^1[3|4|5|8][0-9]\d{4,8}$/;
        return a.test(str);
    }

    /*
     * 验证电话号码
     * @ --> str {string} 验证的内容 
     * @return {boolean}
     */
    woqu.isPhone = function(str){
        var a = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/;
        return a.test(str);
    }

    /*
     * 验证邮箱
     * @ --> str {string} 验证的内容
     * @return {boolean}
     */
    woqu.isEmail = function(str){
        var a = /(\S)+[@]{1}(\S)+[.]{1}(\w)+/;
        return a.test(str);
    }

    /*
     * 获取浏览器版本
     * @return {object}
     */
    woqu.browser = {
        versions: function() {
            var u = navigator.userAgent, app = navigator.appVersion;
            return {//移动终端浏览器版本信息 
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                weiXin: u.indexOf('MicroMessenger') > -1
            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    }

    /*
     * 获取浏览器窗口大小
     * @return {object}
     */
    woqu.getWindowSize = function(){
        var e = window, 
        a = 'inner'; 
  
        if (!('innerWidth' in window )){ 
            a = 'client'; 
            e = document.documentElement || document.body; 
        } 
      
        return { w : e[ a+'Width' ] , h : e[ a+'Height' ] }; 
    }

    /*
     * 判断是否是微信浏览器
     * @return {boolean}
     */
    woqu.isWeiXin = function(){ 
        var self = this;
        var size = 300;
        var ua = window.navigator.userAgent.toLowerCase(); 
        return ua.match(/MicroMessenger/i) == 'micromessenger';
    }

    /*
     * 打字效果
     * @ --> element {DOM Element}
     * @ --> str {string} 要输入的文字，单位ms
     * @ --> time {number} 文字显示时间间隔，单位ms
     */
    woqu.writer = function(element, str, time) {
        var html = "", i = 0;
        (function __timeout() {
            if (i < str.length) {
                element.innerHTML = html += str[i++];
                setTimeout(__timeout, time);
            }
        })();
    };

}(window.woqu = window.woqu || {}))