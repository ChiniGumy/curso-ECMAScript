// Spread Operator

let person = {name: 'David', age: 17};
let country = 'EC';

let data = {id: 5, ...person, country};	 // ... es el operador de propagacion
console.log(data);


// Rest Operator

function sum(num, ...values){
	console.log(values);
	console.log(num + values[0]);
	return num + values[0];
}

sum(1, 4,5,6);		// todo lo que esta por delante del 1 ya estaria dentro de ... values

