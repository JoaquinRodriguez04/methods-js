const numbers = [11, 5, 7, 23, 44, 12, 10, 20, 60, 137];

const sortedNumbers = numbers.toSorted((a, b) => a - b);

// no modifica al Array original
console.log(numbers);
console.log(sortedNumbers);