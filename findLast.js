// array de numeros
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const foundLastNumber = numbers.findLast(x => {
    console.log("x =", x);
    return x === 8;
});

console.log(foundLastNumber);