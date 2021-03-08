
(function(){var reg=function(name,cb){if(String.prototype[name])return;String.prototype[name]=cb;}
	// formater
	reg('toCapitalize',function() {
		let strArr = this.split('');
		if(strArr[0]) strArr[0] = strArr[0].toUpperCase();
		return strArr.join('');
	})

	reg('toCapitalizeAll',function() {
		let strArr = this.split(' ');
		return strArr.map((str) => str.toCapitalize()).join(' ');
	})

	reg('toCamelCase',function(symbol){
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

	reg('reverse',function() {
		return this.split('').reverse().join('');
	})

	reg('repeat',function(num = 2) {
		if(num <= 0) return this;
		let str = '';
		for(let i = 0 ; i < num; i ++) str += this;
		return str;
	})

	// rebuilder
	reg('toJson',function() {
		try{
			return JSON.parse(this);
		} catch {
			return this;
		}
	})

	reg('toCharCodes',function() {
		let arr = new Int32Array(this.length)
		for(let i = 0; i < this.length; i++){
			arr[i] = this.charCodeAt(i)
		}
		return arr;
	})

	reg('toRegExp',function(params){
		return new RegExp(this, params)
	})

	reg('toSplit',function(n = 2) {
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
	reg('log',function() {
		console.log(this);
		return this;
	})

	reg('limit',function(n = 0) {
		return this.slice(0, n);
	})

	reg('isEmpty',function() {
		return this.replace(/[\n|\t| ]/g,'')==='';
	})

	reg('isPalindrome',function() {
		return this.toString() === this.reverse().toString();
	})

	reg('isWord', function(){
		return this.split(' ').length === 1 && this.split('\n').length === 1 && this.split('\t').length === 1
	})

	reg('isHasNumbers', function(){
		return /[0-9]/.test(this)
	})

	reg('isHasEmails', function(){
		return /[a-z|A-Z|0-9|-|_]+@+[a-z|A-Z|0-9|-|_]+.[a-z|A-Z|0-9|-|_]+[^ ]/.test(this)
	})

	reg('isEmail',function(){
		return this.isWord() && this.isHasEmails()
	})

	reg('isHasUrls',function(){
		return /[a-z|A-Z|0-9]+:\/\//.test(this) || this.isEmail()
	})

	reg('isUrl',function(){
		return this.isWord() && this.isHasUrls()
	})

	reg('isJson',function(){
		try{
			JSON.parse(this);
			return true
		}catch{
			return false
		}
	})

	reg('getElementByTagName',function(tagName = ''){
		if(!tagName) return '';
		tagName.replace(/[^a-z|A-Z]/g,'');
		if(!tagName) return '';
		return `<${tagName}[^你]+<\/${tagName}>|<${tagName}[^\/>]+\/>|<${tagName}\/>`.toRegExp().exec(this)[0]||'';
	})

	reg('getElementsByTagName',function(tagName = ''){
		let text = this;
		const XMLElements = [];
		const finder = function(){
			let XMLElement = text.getElementByTagName();
			if(XMLElement){
				XMLElements.push(XMLElement);
				text.replace(XMLElement,'');
				finder()
			}
		}
		return XMLElements;
	})

	reg('count',function(str = ''){
		if(str.length){
			return this.split(str).length -1
		}
		return this.length
	})

	reg('countLines',function(){
		return this.split('\n').length
	})

	reg('countSpaces',function(){
		return this.split(' ').length
	})

	reg('countTags',function(tagName){
		if(tagName){
			tagName = tagName.replace(/[^a-z|[A-Z]]/g,'');
			if(tagName){
				return this.trim().split(`<${tagName}[^\/]+>|<[^<\/]+\/>`.toRegExp()).length -1
			}
			return 0;
		}
		return this.trim().split(/<[^\/]+>|<[^<\/]+\/>/).length -1
	})

	reg('countNumbers',function(number){
		if(number){
			if(typeof number === 'number'){
				number = ""+number;
			}
			if(typeof number === 'string'){
				number=""+parseInt(number);
				if(number){
					return this.split((number + '[^0-9]').toRegExp()).length -1
				}
				return 0;
			} else {
				return this.split(number).length -1
			}
		}
		return this.split(/[0-9]+/).length -1
	})
})();
