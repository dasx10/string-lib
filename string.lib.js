String.prototype.log = function() {
    console.log(this);
    return this;
}

String.prototype.toCapitalize = function() {
    let strArr = this.split('');
    if(strArr[0]) strArr[0] = strArr[0].toUpperCase();
    return strArr.join('');
}

String.prototype.toJson = function() {
    try{
        return JSON.parse(this);
    } catch {
        return this;
    }
}

String.prototype.toCapitalizeAll = function() {
    let strArr = this.split(' ');
    return strArr.map((str) => str.toCapitalize()).join(' ');
}

String.prototype.reverse = function() {
    return this.split('').reverse().join('');
}

String.prototype.limit = function(n = 0) {
    return this.slice(0, n);
}

String.prototype.isEmpty = function() {
    return this.replace(/[\n|\t| ]/g,'')==='';
}

String.prototype.toCharCodes = function() {
    let arr = new Int32Array(this.length)
    for(let i = 0; i < this.length; i++){
        arr[i] = this.charCodeAt(i)
    }
    return arr;
}

String.prototype.toSplit = function(n = 2) {
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
}