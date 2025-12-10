const product = require('../modules/product/controller/product.controller');
const express = require('express');
const router = express.Router();

module.exports = function(app){
    app.get('/api/v1/products/:id', product.findOne);
    app.get('/api/v1/products', product.findAll);
    app.post('/api/v1/products', product.create);
    app.put('/api/v1/products/:id', product.updateById);
    app.delete('/api/v1/products/:id', product.deleteById);
}