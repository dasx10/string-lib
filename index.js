!function(){function t(t,i){String.prototype[t]||(String.prototype[t]=i)}t("toCapitalize",function(){let t=this.split("");return t[0]&&(t[0]=t[0].toUpperCase()),t.join("")}),t("toCapitalizeAll",function(){let t=this.split(" ");return t.map(t=>t.toCapitalize()).join(" ")}),t("toCamelCase",function(t){let i;if(t?i=this.indexOf(t):(i=this.indexOf("-"),-1<i||(i=this.indexOf("_"))),-1<i){let t=[...this];return t[i+1]&&(t[i+1]=t[i+1].toUpperCase(),t.splice(i,1)),t.join("").toCamelCase()}return this}),t("reverse",function(){return this.split("").reverse().join("")}),t("repeat",function(i=2){if(i<=0)return this;let n="";for(let t=0;t<i;t++)n+=this;return n}),t("toJson",function(){try{return JSON.parse(this)}catch{return this}}),t("toCharCodes",function(){let i=new Int32Array(this.length);for(let t=0;t<this.length;t++)i[t]=this.charCodeAt(t);return i}),t("toRegExp",function(t){return new RegExp(this,t)}),t("toSplit",function(t=2){let n=[],e=Math.ceil(this.length/t);e>this.length&&(e=this.length);for(let i=0;i<t;i++){n[i]="";for(let t=i*e;t<(i+1)*e&&void 0!==this[t];t++)n[i]+=this[t];if(""===n[i]){n.pop();break}}return n}),t("log",function(){return console.log(this),this}),t("limit",function(t=0){return this.slice(0,t)}),t("isEmpty",function(){return""===this.replace(/[\n|\t| ]/g,"")}),t("isPalindrome",function(){return this.toString()===this.reverse().toString()}),t("isWord",function(){return 1===this.split(" ").length&&1===this.split("\n").length&&1===this.split("\t").length}),t("isHasNumbers",function(){return/[0-9]/.test(this)}),t("isHasEmails",function(){return/[a-z|A-Z|0-9|-|_]+@+[a-z|A-Z|0-9|-|_]+.[a-z|A-Z|0-9|-|_]+[^ ]/.test(this)}),t("isEmail",function(){return this.isWord()&&this.isHasEmails()}),t("isHasUrls",function(){return/[a-z|A-Z|0-9]+:\/\//.test(this)||this.isEmail()}),t("isUrl",function(){return this.isWord()&&this.isHasUrls()}),t("isJson",function(){try{return JSON.parse(this),!0}catch{return!1}}),t("getElementByTagName",function(t=""){return`<${t}[^你]+<\/${t}>|<${t}[^\/>]+\/>|<${t}\/>`.toRegExp().exec(this)[0]||""}),t("count",function(t=""){return t.length?this.split(t).length-1:this.length}),t("countLines",function(){return this.split("\n").length}),t("countSpaces",function(){return this.split(" ").length}),t("countTags",function(t){return t?(t=t.replace(/[^a-z|[A-Z]]/g,""))?this.trim().split(`<${t}[^\/]+>|<[^<\/]+\/>`.toRegExp()).length-1:0:this.trim().split(/<[^\/]+>|<[^<\/]+\/>/).length-1}),t("countNumbers",function(t){return t?"string"==typeof(t="number"==typeof t?""+t:t)?(t=""+parseInt(t))?this.split((t+"[^0-9]").toRegExp()).length-1:0:this.split(t).length-1:this.split(/[0-9]+/).length-1})}();