const Product = require('../models/product.model');

const list = async (req, res) => {
  const products = await Product.find().limit(100);
  res.json(products);
};

const getOne = async (req, res) => {
  const p = await Product.findById(req.params.id);
  if (!p) return res.status(404).json({ error: 'Not found' });
  res.json(p);
};

const create = async (req, res) => {
  const data = req.body;
  const p = await Product.create(data);
  res.status(201).json(p);
};

module.exports = { list, getOne, create };
