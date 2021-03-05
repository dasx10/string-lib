
(function(){
	var __reg = function(name,cb){
		if(String.prototype[name])return;
		String.prototype[name]=cb;
	}

	// formater
	__reg('toCapitalize',function() {
		let strArr = this.split('');
		if(strArr[0]) strArr[0] = strArr[0].toUpperCase();
		return strArr.join('');
	})

	__reg('toCapitalizeAll',function() {
		let strArr = this.split(' ');
		return strArr.map((str) => str.toCapitalize()).join(' ');
	})

	__reg('toCamelCase',function(symbol){
		let charNum;
		if(symbol){
			charNum = this.indexOf(symbol)
		} else {
			charNum = this.indexOf('-');
			charNum > -1 || (charNum = this.indexOf('_'));
		}

		if(charNum > -1){
			let newText = [...this];
			if(newText[charNum+1]){
				newText[charNum+1] = newText[charNum+1].toUpperCase();
				newText.splice(charNum,1)
			}
			return newText.join('').toCamelCase();
		}
		return this;
	})

	__reg('reverse',function() {
		return this.split('').reverse().join('');
	})

	__reg('repeat',function(num = 2) {
		if(num <= 0) return this;
		let str = '';
		for(let i = 0 ; i < num; i ++) str += this;
		return str;
	})

	// rebuilder

	__reg('toJson',function() {
		try{
			return JSON.parse(this);
		} catch {
			return this;
		}
	})

	__reg('toCharCodes',function() {
		let arr = new Int32Array(this.length)
		for(let i = 0; i < this.length; i++){
			arr[i] = this.charCodeAt(i)
		}
		return arr;
	})

	__reg('toRegEx',function(params){
		return new RegExp(this, params)
	})

	__reg('toSplit',function(n = 2) {
		let textArr = [];
		let cof = Math.ceil(this.length / n);
		if(cof > this.length){
			cof = this.length;
		}

		for(let i = 0 ; i < n ; i++ ){
			textArr[i]='';
			for(let s = i * cof; s < (i + 1) * cof; s++){
				if(this[s] === undefined) break;
				textArr[i]+=this[s];
			}
			if(textArr[i] === ''){
				textArr.pop();
				break;
			}
		}
		return textArr;
	})

	// helpers

	__reg('log',function() {
		console.log(this);
		return this;
	})

	__reg('limit',function(n = 0) {
		return this.slice(0, n);
	})

	__reg('isEmpty',function() {
		return this.replace(/[\n|\t| ]/g,'')==='';
	})

	__reg('count',function(str = ''){
		if(str.length){
			return this.split(str).length -1
		}
		return this.length
	})
})();
