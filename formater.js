String.prototype.toCapitalize = function() {
    let strArr = this.split('');
    if(strArr[0]) strArr[0] = strArr[0].toUpperCase();
    return strArr.join('');
}

String.prototype.toCapitalizeAll = function() {
    let strArr = this.split(' ');
    return strArr.map((str) => str.toCapitalize()).join(' ');
}

String.prototype.toCamelCase=function(symbol){
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
}

String.prototype.reverse = function() {
    return this.split('').reverse().join('');
}