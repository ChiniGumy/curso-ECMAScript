// arrow function, no permite constructor, no tiene argumentos

// Recomendable que arrow function sea con const.

function square(num){
	return num * num;
}


// Estas dos cosas son lo mismo

const square = (num) => {
	return num * num;
}

const square = num => num * num;