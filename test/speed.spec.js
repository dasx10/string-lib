
require('../src/index');
let text = require('./testText');

function speedTest(name, options){
    console.time(name)
    text[name](options)
    console.timeEnd(name)
}
test('spped tests',()=>{
	speedTest('toCamelCase')
	speedTest('toCapitalizeAll')
	speedTest('toCapitalize')

	speedTest('reverse')
	speedTest('limit')

	speedTest('count')
	speedTest('isEmpty')

	speedTest('toRegEx')
	speedTest('toJson')

	speedTest('toSplit',100)

	speedTest('toCharCodes')
})
