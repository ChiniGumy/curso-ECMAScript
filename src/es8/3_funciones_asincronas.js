const functionAsync = () => {
	return new Promise((resolve, reject) => {
		(true)
		? setTimeout(() => resolve('Async'), 2000)
		: reject(new Error('Error!'));	
	});
}

const anotherFunction = async() => {
	const something = await functionAsync;
	console.log(something);
	console.log('Ola');
}

console.log('Before');
anotherFunction();
console.log('After');