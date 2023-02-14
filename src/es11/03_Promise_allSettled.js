const promesa = new Promise((resolve, reject) => reject('Reject'));
const promesa2 = new Promise((resolve, reject) => resolve('Resolve'));
const promesa3 = new Promise((resolve, reject) => resolve('Resolve2'));

Promise.allSettled([promesa, promesa2, promesa3])
	.then(response => console.log(response));