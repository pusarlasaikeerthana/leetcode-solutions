/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let a = 0, b = 1;
    
    // Use an infinite loop to continuously yield Fibonacci numbers
    while (true) {
        yield a;
        [a, b] = [b, a + b]; // Update a and b to the next Fibonacci numbers
    }
};


/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */