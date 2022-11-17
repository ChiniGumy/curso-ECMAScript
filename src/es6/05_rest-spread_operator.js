// El rest operator se usa cuando tienes valores y quieres sacar el resto de (encapsular en arreglo)
// El spread operator se usa cuando tienes que propagar todo lo que esta dentro (desencapsular en clave:valor)

// Spread Operator
let person = {name: 'David', age: 17};
let country = 'EC';

// En este ejemplo desencapsula las claves:valor del objeto 'person' para meterlos dentro del objeto data. Esto sirve para no tener un objeto dentro de otro objeto. En este caso 'country' ya tiene un valor definido por eso no es necesario darle valor.

let data = {id: 5, ...person, country};	 // ... es el operador de propagacion
console.log(data);


// Rest Operator
function sum(num, ...values){
	console.log(values);
	console.log(num + values[0]);
	return num + values[0];
}

// En este ejemplo lo que esta haciendo el operador rest es encapsular en un array los valores ingresados despues del primero.

sum(1, 4,5,6);		// todo lo que esta por delante del 1 ya estaria dentro de ... values