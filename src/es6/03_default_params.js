// Que no hacer

function newUser(name, age, country){
	var name = name || 'David';
	var age = age || 16;
	var country = country || 'Ecuador';

	console.log(name, age, country);
}

newUser();
newUser('David', 15, 'Colombia');


// Que si hacer

function newAdmin(name = 'Dome', age = 16, country = 'Ecuador'){
	console.log(name, age, country);
}

newAdmin();
newAdmin('Gabriel', 17, 'Peru');