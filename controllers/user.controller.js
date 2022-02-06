const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { badRequest, conflict, unauthorized} = require('boom');
const { secret } = require('../config');
const { User } = require('../models');


exports.getUsers = async () => {
	const users = await User.findAll({ where: {role: 'USER'} });
	return users;
};

exports.userLogin = async (data) => {
	const { name, password } = data;
	const candidate = await User.findOne({ where: { name: name }, raw: true});
	if ( !candidate ) throw unauthorized('Auth error');
	const passwordCorrect = await bcrypt.compare(password, candidate.password);
	if (passwordCorrect) {
		const { id, name, role } = candidate;
		const payload = {
			id,
			name,
			role,
		};
		const token = jwt.sign(payload, secret, { 'expiresIn': '24h' });
		return token;
	} else {
		throw badRequest('Auth error');
	}
	// eslint-disable-next-line no-unreachable
	return candidate;
};

exports.createUser = async (data) => {
	const { name, password, email, role} = data;
	const user = await User.findOne({where: {
		name: name,
	}});
	if (user) {
		throw conflict('User already exists');
	}
	const hpassword = bcrypt.hashSync(password, 7);
	const newUser = await User.create({
		name,
		password: hpassword,
		email,
		role,
	});

	return newUser;
};

// const controller = new UserController();
// console.log(controller.userLogin({name: 'Andy', password: '12345678'}));