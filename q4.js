// Define a function calculateAverage that takes an array of numbers as an argument and returns the average value.

function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0; 
    }

    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / numbers.length;
}

const numbers = [5, 10, 15, 20];
const average = calculateAverage(numbers);
console.log(average); 
