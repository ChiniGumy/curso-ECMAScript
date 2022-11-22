// generador : tipo especial de funcion que retornara una serie de valores segun el algoritmo definido.

// a un generator se le pone un asterisco despues de la keyword function

function* iterate(array){
	for (let value of array){
		yield value;
	}
}

// next() recuerda su estado final

const it = iterate(['ola', 'soy', 'david']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);