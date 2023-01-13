const user = {
	username: 'chinigod',
	age: 16,
	country: 'EC'
};

// las demas keys se asignan a values, porque estamos poniendo username, o sea que en el ... entran todos los keyus excepto username

const {username, ...values} = user;
console.log(username);
console.log(values);