const { Product, Gallery } = require('../models');
const { badRequest } = require('boom');


exports.getProducts = async (data) => {
	let { limit, page } = data;
	limit = limit ? parseInt(limit) : 10;
	page = page ? parseInt(page) : 1;
	const offset = limit * (page - 1);
	const products = Product.findAll({offset, limit, raw: true});
	return products;
};

exports.createProduct = async (data) => {
	const { title, description, price, quantity } = data;
	if (!title || !price || !quantity) throw badRequest('Fields validation error');
	const product = await Product.create({
		title, 
		description, 
		price,
		quantity,
	});
	return product;
};

exports.deleteProduct = async (id) => {
	if (!id) throw badRequest('Id not provided');
	const product = await Product.destroy({ where: {
		id,
	}});
	return product;
};

exports.updateProduct = async (id, data) => {
	const { title, description, price, quantity } = data;
	if (!title || !price || !quantity || !description) throw badRequest('Fields validation error');
	const product = Product.update(data, {
		where: {
			id,
		},
	});
	return product;
};

exports.getProduct = async (id) => {
	const product = await Product.findOne({ where: {id}});
	let images = {};
	if (product) {
		// images = await product.getGallery();
		images = await Gallery.findAll({
			where: {
				productId: product.id,
			},
		});
	}
	return {product, images};
};
