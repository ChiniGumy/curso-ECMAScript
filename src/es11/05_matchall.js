// Esto sirve para ver si un input, es igual a lo que nosotros pongamos.

const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.'

for (const match of fruit.matchAll(regex)) {
	console.log(match);
}