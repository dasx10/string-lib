String.prototype.log = function() {
    console.log(this);
    return this;
}

String.prototype.limit = function(n = 0) {
    return this.slice(0, n);
}

String.prototype.isEmpty = function() {
    return this.replace(/[\n|\t| ]/g,'')==='';
}

String.prototype.count = function(str = ''){
    if(str.length){
        return this.split(str).length -1
    }
    return this.length
}