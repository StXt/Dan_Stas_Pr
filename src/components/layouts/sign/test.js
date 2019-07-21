function test(a, b) {
    return a + b;
}

describe("test function", ()=>{
    it('sum numbers', ()=>{
        expect(test(1, 2)).toEqual(3);
    })
});