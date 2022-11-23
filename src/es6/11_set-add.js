// Set es parecido a un Array. Una de las diferencias es que el Array impide agregar elementos repetidos.
const list = new Set()

list.add('item 1');
list.add('item 2').add('item 3');		// se lo puede hacer en la misma linea

console.log(list);