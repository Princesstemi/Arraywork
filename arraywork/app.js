//input numbers
function getNumbers() {
    let numbers = [];
    for (let i = 0; i < 5; i++) {
        let num = parseFloat(prompt(`Kindly enter number ${i + 1}:`));
        numbers.push(num);
    }
    return numbers;
}
//highest number
function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

// lowest number
function findMin(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

// the average
function findAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

// Function to find even numbers
function findEvens(numbers) {
    let evens = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evens.push(numbers[i]);
        }
    }
    return evens;
}

// Function to find odd numbers
function findOdds(numbers) {
    let odds = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            odds.push(numbers[i]);
        }
    }
    return odds;
}

// Main program
let numbers = getNumbers();

let max = findMax(numbers);
let min = findMin(numbers);
let range = max - min;
let average = findAverage(numbers);
let evens = findEvens(numbers);
let odds = findOdds(numbers);

alert(`Highest value: ${max}`);
alert(`Lowest value: ${min}`);
alert(`Range: ${range}`);
alert(`Average: ${average}`);
alert(`Even numbers: ${evens.join(', ')}`);
alert(`Odd numbers: ${odds.join(', ')}`);
