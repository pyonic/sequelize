const { Gallery } = require('../models');
const { badRequest } = require('boom');

exports.createImage = async (productId, image) => {
	if ( !image || !productId) throw badRequest('Validation error');
	const img = await Gallery.create({
		image,
		productId,
	});
	return img;
};
