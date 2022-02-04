const router = require('express').Router();
const ProductController = require('../controllers/product.controller');
const { checkAdmin } = require('../middlware/jwt');

router.get('/', async (req, res) => {
	const products = await ProductController.getProducts(req.query);
	res.json({data: products});
})

router.post('', async (req,res,next) => {
	try{
		const product = await ProductController.createProduct(req.body);
		res.json(product);
	} catch (error) {
		next(error);
	}
});

router.get('/:id',async (req,res,next) => {
	try{
		const product = await ProductController.getProduct(req.params.id);
		res.json({data: product})
	} catch (error) {
		next(error);
	}
})

router.post('/delete/:id',checkAdmin, async (req, res, next) => {
	try{
		await ProductController.deleteProduct(req.params.id);
		res.json({message: 'ok'});
	}catch(error) {
		next(error);
	} 
})

router.put('/:id', async (req,res,next) => {
	try{
		const product = await ProductController.updateProduct(req.params.id,req.body);
		res.json({data: product, message: "Updated with success"});
	} catch(error) {
		next(error)
	}
})
module.exports = router;