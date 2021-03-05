interface String {
    log():string;

    toCamelCase(symbol?:string):string;
    toCapitalizeAll():string;
    toCapitalize():string;

	repeat(num?:number):string;
    reverse():string;
    limit():string;

    count(str?:string):number;
    isEmpty():boolean;

    toRegEx(params?:string):RegExp;
    toJson():string|object;

    toSplit(n?:number):Array<string>;

    toCharCodes():Int32Array;
}
