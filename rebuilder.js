String.prototype.toJson = function() {
    try{
        return JSON.parse(this);
    } catch {
        return this;
    }
}

String.prototype.toCharCodes = function() {
    let arr = new Int32Array(this.length)
    for(let i = 0; i < this.length; i++){
        arr[i] = this.charCodeAt(i)
    }
    return arr;
}

String.prototype.toRegEx = function(params){
    return new RegExp(this, params)
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