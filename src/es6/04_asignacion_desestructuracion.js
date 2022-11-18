// arrays destructuring

// Usar el let o const, con brackets y poner dentro valores, se lo conoce como destructurar un arreglo, donde el primer valor inicializado sera el primer valor del arreglo.

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);


// object destructuring

// Usar el let o const, con llaves y poner dentro valores, se lo conoce como destructurar un objeto, donde se inicializa las variables con los mismos nombres de claves

// para ponerle alias a una variable destructurada se le pone un ':' y despues de los dos puntos el nuevo nombre o alias

let user = {username: 'ChiniGumy', age: 16};
let {username:nick, age} = user;
console.log(nick, age);