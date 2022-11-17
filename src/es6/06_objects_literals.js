// Enahced obect literals

function newUser(user, age, country, uId){
	return{
		user,
		age,
		country,
		uId,
	};
};

console.log(newUser('chinigumy', 16, 'ECU', 15));