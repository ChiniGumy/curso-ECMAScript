class utilisatric{
	constructor(nom, ans){
		this.nom = nom;
		this.ans = ans;
	};

	// con el # se vuelve privado, o sea que solo es accesisble desde la misma clase.

	#parler(){
		return 'salut'
	};

	salutation(){
		return `${this.parler()} ${this.nom}`
	};

	get #uAns() {
		return this.ans
	};

	set #uAns(n) {
		this.ans = n
	};
}