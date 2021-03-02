String.prototype.log = function(){
    console.log(this);
    return this;
}

String.prototype.toCapitalize = function(){
    let strArr = this.split('');
    if(strArr[0]) strArr[0] = strArr[0].toUpperCase();
    return strArr.join('');
}

String.prototype.toCapitalizeAll = function(){
    let strArr = this.split(' ');
    return strArr.map((str)=> str.toCapitalize()).join(' ');
}

String.prototype.reverse = function() {
    return this.split('').reverse().join('');
}

String.prototype.limit = function(n = 0) {
    return this.slice(0, n);
}