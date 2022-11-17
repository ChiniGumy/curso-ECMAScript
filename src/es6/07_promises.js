// Promesa, una forma de trabajar con el asicronismo

// promise, funcion anonima

// Promesa es un objeto que engloba el resultado de ejecucion asincrona (es decir, uno no sabe cuanto va a tardar porque se delega a otro lado [una peticion a http, lectura a JSON, u otro archivo] )

// Promise es un objeto que recibe una funcion y esa funcion recibe dos argumentos: el primer argumento sirve para indicar que se resolvio correctamente (resolve) el segundo para indicar que fallo (reject)



const anotherFunction = () => {
	return new Promise((resolve, reject) => {
		if (true){
			resolve('ola');
		} else {
			reject('mal');
		}
	});
}

anotherFunction()
	.then(response => console.log(response))
	.catch(err => console.log('Error'));