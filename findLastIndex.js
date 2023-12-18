const numbers = [1, 5, 7, 122, 33, 213, 120, 90, 60, 50, 67, 320];

const findIndex = numbers.findLastIndex(x => {
    console.log("x =", x);
    return x === 50;
});

console.log(findIndex);