
test('Empty an array in JavaScript by setting length', () => {

    var coffees = new Array("Espresso","Macchiato","Latte","Cappuccino","Mocha");

    expect(coffees.length).toEqual(5);

    coffees.length = 0;

    expect(coffees.length).toEqual(0);

});

test('Empty an array in JavaScript by setting to new array', () => {

    var breakfasts = ["rice","noodle","bread","popcorn"];

    expect(breakfasts.length).toEqual(4);

    // empty the array 
    breakfasts = [];

    expect(breakfasts.length).toEqual(0);

});

test('Empty an array in JavaScript by using Spice method', () => {

    var fruits = ["Banana","Orange","Mango","Water Melon"];

    expect(fruits.length).toEqual(4);

    // empty the array 
    fruits.splice(0, fruits.length);

    expect(fruits.length).toEqual(0);

});

test('Empty an array in JavaScript by using pop() method', () => {

    var rooms = ["101","102","103","104"];

    expect(rooms.length).toEqual(4);

    // empty the array 
    while (rooms.length) {
        rooms.pop();
    }

    expect(rooms.length).toEqual(0);

});