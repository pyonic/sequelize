const router = require('express').Router();

const UserController = require('../controllers/user.controller');
const { checkAdmin } = require('../middlware/jwt');

router.get('/', checkAdmin, async (req, res, next) => {
	try{
		const users = await UserController.getUsers();
		res.json({data: users});
	} catch (error) {
		next(error)
	}
});

router.post('/login', async (req, res, next) => {
	try{
		const response = await UserController.userLogin(req.body);	
		res.json({data: response})
	} catch (error) {
		next(error)
	}
});

module.exports = router;