// Promesa, una forma de trabajar con el asicronismo

// promise, funcion anonima

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