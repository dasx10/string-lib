Boolean.prototype.isTrue = function(cb = () => null){
    if(this.valueOf()){
        let res = cb(this);
        return res ?? this;
    }
    return false;
}

Boolean.prototype.isFalse = function(cb = () => null){
    if(this.valueOf()){
        return this;
    }
    let res = cb(this);
    return res ?? true;
}

Boolean.prototype.if = function(cb){
    if(this.valueOf()){
        let res = cb(this);
        return res ?? this;
    }
    this.__proto__.else = function(cb){
        // console.log(this.valueOf());
        if(!this.valueOf()){
            let res = cb(this);
            return res ?? this;
        }
    }
    return this;
}

Boolean.prototype.reverse = function(){
    return !this;
}

Boolean.prototype.log = function(){
    console.log(this.valueOf());
    return this;
}

Boolean.prototype.and = function(bool){
    return this.valueOf() && bool;
}

Boolean.prototype.or = function(bool){
    return this.valueOf() || bool;
}

Boolean.prototype.xor = function(bool){
    return !!(this.valueOf() ^ bool);
}

Boolean.prototype.nand = function(bool) {
    return !(this.valueOf && bool)
}

// false
// .or(true).and(false).isFalse()
// .log()
// .if(()=>console.log(1))
// .log()
// .else(()=>console.log(0))

false
.nand(false)
.log()
