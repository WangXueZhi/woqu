(function(woqu){
	
	woqu.get = function(url, data, callback){
		var info = data ? this.jsonToUrl(data) : '';
		url += "?t=" + Math.random();
		var ajax = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

		//连接服务器
		ajax.open('GET', url+'&'+info, true);

		//发送请求
		ajax.send();

		//状态
		ajax.onreadystatechange = function(){
			if (ajax.readyState==4&&ajax.status==200) {
				if(callback){
					var response = null;
					try{
						response = eval('(' + ajax.responseText + ')');
					}catch(err){
						response = ajax.responseText;
					}
					callback(response);
				}
			};
		}
	}

	woqu.post = function(url, data, callback){
		var self = this;
		var ajax = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

		//连接服务器
		ajax.open('POST', url, true);

		//发送请求
		ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		ajax.send(self.jsonToUrl(data));

		//状态
		ajax.onreadystatechange = function(){
			if (ajax.readyState==4&&ajax.status==200) {
				if(callback){
					var response = null;
					try{
						response = eval('(' + ajax.responseText + ')');
					}catch(err){
						response = ajax.responseText;
					}
					callback(response);
				}
			};
		}
	}

	woqu.jsonToUrl = function (json){
		var str = '';
		var dataLen = 0;
		for(var d in json){
			dataLen>0 ? str+="&" : null;
			str += d+'='+json[d];
			dataLen++;
		}
		return str;
	}

}(window.woqu = window.woqu || {}))