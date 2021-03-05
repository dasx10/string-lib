require('../src/index');

test('isEmpty false',()=>{
	expect('aaaaa'.isEmpty()).toBe(false);
	expect('\t\naaaaa'.isEmpty()).toBe(false);
	expect('  aaaaa '.isEmpty()).toBe(false);
})

test('isEmpty true',()=>{
	expect('  '.isEmpty()).toBe(true);
	expect('  \n'.isEmpty()).toBe(true);
	expect('\t  '.isEmpty()).toBe(true);
})
