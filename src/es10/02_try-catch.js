try {
	hello();
} catch (error) {
	console.log(error);
}

function anotherFn() {
	console.log(2+2)
} 

try {
	anotherFn();
} catch {
	console.log('anotherFn() no funciono como se esperaba')
}