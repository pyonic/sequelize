const router = require('express').Router();

const { checkAdmin } = require('../middlware/jwt');
const UserController = require('../controllers/user.controller');

router.get('/', checkAdmin, async (_req, res, next) => {
	try {
		const users = await UserController.getUsers();
		res.json({data: users});
	} catch (error) {
		next(error);
	}
});

router.post('/login', async (req, res, next) => {
	try {
		const response = await UserController.userLogin(req.body);	
		res.json({data: response});
	} catch (error) {
		next(error);
	}
});

module.exports = router;