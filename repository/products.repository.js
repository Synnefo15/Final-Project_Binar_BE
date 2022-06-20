const db = require('../models/index.js');
const Product = db.products;

exports.findAll = async() => {
    return await Product.findAll();
}; 

exports.findById = async(id) => {
    return await Product.findByPk(id);
};

exports.save = async(product) => {
    return await Product.create(product);
};

exports.update = async(product, ids) => {
    return await Product.update(product, { where: { id: ids } })
};

exports.delete = async(product) => {
    product.destroy();
};