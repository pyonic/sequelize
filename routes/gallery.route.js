const router = require('express').Router();
const multer = require('multer');

const GalleryController = require('../controllers/gallery.controller');

const storage = multer.diskStorage({
	destination: (_req, _file, cb) => {
		cb(null, 'uploads/');
	},
	filename: (_req, file, cb) => {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
		cb(null, uniqueSuffix + file.originalname);
	},
});
const upload = multer({ storage });

router.post('/:id', upload.single('image'), async (req, res, next) => {
	try {
		const img = await GalleryController.createImage(req.params.id, req.file.filename);
		res.send(img);
	} catch (error) {
		next(error);
	}
});

module.exports = router;