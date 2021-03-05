interface String {
    log():string;

    toCamelCase(symbol?:string):string;
    toCapitalizeAll():string;
    toCapitalize():string;

	repeat(count?:number):string;
    reverse():string;
    limit():string;

    count(string?:string):number;
    countLines():number;
    countSpaces():number;
    countTags(tagName?:string):number;
	countNumbers(number?:number|string|RegExp):number;

	getElementByTagName(tagName:string):string

    isEmpty():boolean;
	isPalindrome():boolean;
	isEmail():boolean;
	isUrl():boolean;
	isWord():boolean;
	isJson():boolean;

	isHasNumbers():boolean;
	isHasEmails():boolean;
	isHasUrls():boolean;

    toRegExp(RegExpFlags?:string):RegExp;
    toJson():string|object;

    toSplit(n?:number):Array<string>;

    toCharCodes():Int32Array;
}
