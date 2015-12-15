(function(woqu){
	
	//原型继承
	woqu.interface = function(a,b){
		for(var i in a.prototype){
			b.prototype[i]=a.prototype[i];
		}
	}

}(window.woqu = window.woqu || {}))