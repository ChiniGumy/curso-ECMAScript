// Flat

const array = ['array',['array dentro de array',['array dentro de array dentro de array']]];
console.log(array.flat(3));


// Flatmap
const array2 = [1, 2, 3, 4];
console.log(array2.flatMap(value => [value, value * 2]));