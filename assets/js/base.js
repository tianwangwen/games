(function(){

	//是否是原型的属性 参数：（对象，属性）
	function hasPrototypeProterty(obj, name){
		if(!isObject(obj)) return false;
		return !obj.hasOwnProperty(name) && (name in obj);
	}

	//生成随机整数 参数：（最小值，最大值）
	function getRandom(n,m){
		if(!isNumber(n)) n = parseInt(n);
		if(!isNumber(m)) m = parseInt(m);
		if(n > m) return Math.floor(Math.random() * (n - m + 1) + m);
		return Math.floor(Math.random() * (m - n + 1) + n);
	}

	function isObject(obj){
		return typeof obj === 'object';
	}

	function isNumber(num){
		return typeof num === 'number';
	}

    isArray = Array.isArray || function(object){ return object instanceof Array };


})()