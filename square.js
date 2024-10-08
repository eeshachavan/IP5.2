class SquareIterator {
    constructor(numbers) {
        this.numbers = numbers;
        this.index = 0;
    }

    // Custom iterator function
    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.numbers.length) {
                    const value = this.numbers[this.index] ** 2;
                    this.index++;
                    return { value, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
}

// Usage example
const numbers = [1, 2, 3, 4, 5];
const squareIterator = new SquareIterator(numbers);

for (const square of squareIterator) {
    console.log(square); // Logs squares of the numbers in the array
}

