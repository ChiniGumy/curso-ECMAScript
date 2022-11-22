// Declarando la clase
// class User {};

// Instancia de una clase
// const newUser = new User();

class User {

	// Metodos
	greeting(){
		return console.log('Ola');
	};

};

const chinigumy = new User();			// Instancia
chinigumy.greeting();

const dome = new User();
dome.greeting();

// =============================================================================================

class Usuario {
	
	// Constructor
	constructor(){
		console.log('nuevo usuario')
	};

	saludo(){
		return console.log('Ola');
	};
}

// Cuando ejecutamos el code, se ejecuta el constructor para inicializar los elementos asignados en la instancia

const duchigod = new Usuario();
duchigod.saludo();

// =============================================================================================

// this hace referencia al elemento padre que lo contiene

class User2 {
	constructor(name){
		this.name = name;
	};

	speak(){
		return 'ola ñaño';
	};

	saludito(){
		return `${this.speak()} ${this.name}`
	};
}

const awp = new User2('sebastian');
console.log(awp.saludito());

// =============================================================================================

// setters n' getters : una forma de guardar y obtener elementos dentro de esta estructura

class utilisatric{
	constructor(nom, ans){
		this.nom = nom;
		this.ans = ans;
	};

	parler(){
		return 'salut'
	};

	salutation(){
		return `${this.parler()} ${this.nom}`
	};


	// aqui estoy obteniendo el valor de la variable ans (agnos)

	get uAns() {
		return this.ans
	};


	// aqui estoy seteando el valor de this.ans a n

	set uAns(n) {
		this.ans = n
	};
}

const jorge = new utilisatric('Jorge', 20);
console.log(jorge.uAns);
console.log(jorge.uAns = 16);

// En la consola se obtendra primero 20 y luego 16. Porque en la estructura de la clase primero se obtiene la edad de 20 en el constructor, y luego se setea la edad nueva en la linea 97.