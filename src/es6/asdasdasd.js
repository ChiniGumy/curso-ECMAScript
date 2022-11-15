// En este deafío recibirás dos objetos JSON por parámetros.

// Usando el spread operator, deberás combinar ambos objetos en uno solo. Es posible que no se te envíe alguno de los dos objetos o ninguno, por lo que deberás usar estos por defecto, en su respectivo orden:

/*
	json1 = {
	  name: "Mr. Michi",
	  food: "Pescado"
	}
  
	json2 = {
	  age: 12,
	  color: 'Blanco'
	}
*/

// La solución deberá tener un input y output como la siguiente, recuerda que se te pueden o no envíar los parámetros.

function solution(

	json1 = {
	  name: "Mr. Michi",
	  food: "Pescado"
	},
  
	json2 = {
	  age: 12,
	  color: 'Blanco'
	}
){
	return {...json1, ...json2};
}

console.log(solution())
