// Podemos tener un obj que dentro puede tener la representacion de key : value, y ese puede ser otro objeto, y cuando queremos acceder a ese elemento podemos tener errores. Entonces esta caracteristica va a evitar que se rompa.

const users = {
	david: {
		country: 'EC',
		nickname: 'ChiniGumy'
	},

	dome: {
		country: 'EC',
		nickname: 'JCDarth'
	}
}

console.log(users.david.country);

console.log(users.david.age);

// Age no existe, entonces nos devuelve undefined, pero puede ser peligroso hacer validaciones con el, entonces vamos a usar el optional chaining.

// En este caso, developer no existe, y si no puede acceder a developer, peor va a poader acceder a country, entonces va a devolver un error, no va a devolver undefined, pero con los '?', primero va a preguntar antes de acceder si existe. Y si no existe, devolvera un undefined.

console.log(users?.developer?.country);