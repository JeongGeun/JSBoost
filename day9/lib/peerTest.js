const { test,assert }  = require("../lib/tester.js");

function nand(firBool, secBool) {
    return !(firBool && secBool);
}


function nor(firBool, secBool) {
    return !(firBool || secBool);
}


function xor(firBool, secBool) {
    return !(firBool === secBool);
}


function halfadder(bitA, bitB) {
    return [xor(bitA, bitB), bitA && bitB];
}

function fulladder(bitA, bitB, carry) {
    [_sum, _carry] = halfadder(bitA, bitB);
    [_sum, carry] = halfadder(carry, _sum);
    return [_sum, _carry || carry];
}

test('nand test', () => {
    assert.equal(nand(true,false),true); //pass
});
test('nor test', () => {
    assert.notEqual(nor(true,true),false); //fail
});
test('xor test', () => {
    assert.equal(xor(true,false),true); //pass
});
test('halfadder test', () => {
    assert.detailEqual(halfadder(true,true),[false,true]) //pass
});
test('fulladder test', () => {
   assert.detailEqual(fulladder(true,true,true),[true,true])//pass
});