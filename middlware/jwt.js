const jwt = require('jsonwebtoken');
const { unauthorized, forbidden } = require('boom');
const { User } = require('../models');
const { secret }= require('../config');

exports.checkAdmin = async (req,res,next) => {
	try{
		const token = req.headers['x-access-token'];
		if( !token )  throw unauthorized('Auth error');
		const data = jwt.verify(token, secret,async (error,data) => {
			if (error) throw unauthorized('Auth error');
			const user = await User.findOne({where: {id: data.id}})
			if (!user) throw unauthorized('Auth error');
			if(user.role != "ADMIN"){
				throw forbidden('Access denied');
			}
			next();
		});
	} catch (error) {
		next(error);
	}
}