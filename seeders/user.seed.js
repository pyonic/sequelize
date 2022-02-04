const UserController = require('../controllers/user.controller');

async function userPopulation() {
	await UserController.createUser({
		name: 'Andy',
		password: '12345678',
		email: 'andy@email.com',
		role: 'USER'
	});
	await UserController.createUser({
		name: 'Lary',
		password: 'lalaland',
		email: 'Lary@email.com',
		role: 'USER'
	});
	await UserController.createUser({
		name: 'Harry',
		password: 'Harry',
		email: 'Harry@email.com',
		role: 'USER'
	});
	await UserController.createUser({
		name: 'Michle',
		password: 'Michle',
		email: 'Michle@email.com',
		role: 'USER'
	});
	await UserController.createUser({
		name: 'MichleStan',
		password: 'pswdd',
		email: 'MichleStan@email.com',
		role: 'USER'
	});
	await UserController.createUser({
		name: 'Waley',
		password: 'Waley',
		email: 'Waley@email.com',
		role: 'USER'
	});
	console.log('Users seeded');

}
userPopulation();