test('convert string to number in JavaScript', () => {
    expect(parseInt('15')).toEqual(15);

    expect(parseInt('15', 10)).toEqual(15);

    expect(parseInt('1111', 2)).toEqual(15);

    expect(parseInt('17', 8)).toEqual(15);

    expect(parseInt(' 0xF', 16)).toEqual(15);

    expect(isNaN(parseInt('Hello'))).toBeTruthy();

    expect(isNaN(parseInt('546', 2))).toBeTruthy(); 

});

test('convert string to number in JavaScript using parseFloat', () => {
    expect(parseFloat(4.56)).toEqual(4.56);

    expect(parseFloat('4.56')).toEqual(4.56);

    expect(parseFloat('456e-2')).toEqual(4.56);
    
    expect(parseFloat('0.0456E+2')).toEqual(4.56);

    expect(isNaN(parseFloat('FF2'))).toBeTruthy();


});

test('convert string to number in JavaScript using Number()', () => {

    expect(Number('156')).toEqual(156);

    expect(Number('15.6')).toEqual(15.6);

    expect(Number('0x11') ).toEqual(17);
    
    expect(Number('0b11')).toEqual(3);

    expect(Number('0o11')).toEqual(9);

    expect(isNaN(Number('Not A Number'))).toBeTruthy();

    expect(isNaN(Number('100a'))).toBeTruthy();

});

test('convert string to number in JavaScript using Number.parseInt()', () => {

    expect(Number.parseInt('15')).toEqual(15);

    expect(Number.parseInt('15', 10)).toEqual(15);

    expect(Number.parseInt('1111', 2)).toEqual(15);

    expect(Number.parseInt('17', 8)).toEqual(15);

    expect(Number.parseInt(' 0xF', 16)).toEqual(15);

    expect(isNaN(Number.parseInt('Hello'))).toBeTruthy();

    expect(isNaN(Number.parseInt('546', 2))).toBeTruthy(); 

});

test('convert string to number in JavaScript using Number.parseFloat()', () => {
    
    expect(Number.parseFloat(4.56)).toEqual(4.56);

    expect(Number.parseFloat('4.56')).toEqual(4.56);

    expect(Number.parseFloat('456e-2')).toEqual(4.56);
    
    expect(Number.parseFloat('0.0456E+2')).toEqual(4.56);

    expect(isNaN(Number.parseFloat('FF2'))).toBeTruthy();

});