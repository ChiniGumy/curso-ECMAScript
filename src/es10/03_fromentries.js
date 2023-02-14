// array de arrays => objeto

const entries = new Map([['name', 'david'], ['age', 16]]);
console.log(entries)
console.log(Object.fromEntries(entries));