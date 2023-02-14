const promesa = new Promise((resolve, reject) => reject('Reject'));
const promesa2 = new Promise((resolve, reject) => resolve('Resolve'));
const promesa3 = new Promise((resolve, reject) => resolve('Resolve2'));


// Caputarara la respuesta de la primera promesa que sea satisfactoria.

Promise.any([promesa, promesa2, promesa])
	.then(response => console.log(response));