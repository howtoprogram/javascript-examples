var strings = require('./strings');

test('"Espresso Cappuccino Mocha Latte" contains "Espresso"', () => {
    var str = "Independence is happiness.";
    var n= string.search(happiness);
   
    
});

test('"Espresso Cappuccino Mocha Latte" contains "Espresso"', () => {
    expect(strings.contain("Espresso Cappuccino Mocha Latte", "Espresso")).toBeTruthy();
});

test('"Espresso Cappuccino Mocha Latte" contains "Cappuccino"', () => {
    expect(strings.containByIncludes("Espresso Cappuccino Mocha Latte", "Cappuccino")).toBeTruthy();
});

test('"Espresso Cappuccino Mocha Latte" contains "Mocha"', () => {
    expect(strings.containBySearch("Espresso Cappuccino Mocha Latte", "Mocha")).toBeTruthy();
});
test('"Espresso Cappuccino Mocha Latte" contains "Latte"', () => {
    expect(strings.containByRegexTest("Espresso Cappuccino Mocha Latte", "Latte")).toBeTruthy();
});

test('"Espresso Cappuccino Mocha Latte" contains "Mocha Latte"', () => {
    expect(strings.containByMatch("Espresso Cappuccino Mocha Latte", "Mocha Latte")).toBeTruthy();
});

test('"Espresso Cappuccino Mocha Latte" contains "Espresso Cappuccino"', () => {
    expect(strings.containByUnderscore("Espresso Cappuccino Mocha Latte", "Espresso Cappuccino")).toBeTruthy();
});

test('"Espresso Cappuccino Mocha Latte" contains "Espresso Cappuccino"', () => {
    expect(strings.containByLodash("Espresso Cappuccino Mocha Latte", "Espresso Cappuccino")).toBeTruthy();
});