const productService = require('../service/product.service');
const Joi = require('joi');

const findOne = async (req, res) => {
    const product =  await productService.findOne(req.params.id);
    res.json(product);
}

const findAll = async (req, res) => {
    try {
        const products =  await productService.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const create = async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().optional(),
        image : Joi.string().optional(),
        video : Joi.string().optional(),
        price: Joi.number().required()
    });

    try{
        await schema.validateAsync(req.body);

        const product =  await productService.create(req.body);
        res.status(201).json(product);
    }catch (error){
        res.status(400).json({ message: error.message });
    }
}

const updateById = async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().optional(),
        image : Joi.string().optional(),
        video : Joi.string().optional(),
        price: Joi.number().required()
    });

    try{
        await schema.validateAsync(req.body);

        const product =  await productService.update(req.params.id, req.body);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    }catch (error){
        res.status(400).json({ message: error.message });
    }
}

const deleteById = async (req, res) => {
    try {
        const product =  await productService.deleteById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    findOne,
    findAll,
    create,
    updateById,
    deleteById
}