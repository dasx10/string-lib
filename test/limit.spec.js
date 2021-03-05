require('../src/index');

test('limit',()=>{
	expect('aaaaa'.limit(1)).toBe("a");
	expect('aaaaa'.limit(2)).toBe("aa");
	expect('aaaaa'.limit(3)).toBe("aaa");
})
