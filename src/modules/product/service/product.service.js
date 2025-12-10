const productRepository = require('../repository/product.repository');

const findOne = async (id) => {
    return await productRepository.findOne(parseInt(id));
}

const findAll = async () => {
    return await productRepository.findAll();
}

const create = async (data) => {
    return await productRepository.create(data);
}

const update = async (id, data) => {
    return await productRepository.update(parseInt(id), data);
}

const deleteById = async (id) => {
    return await productRepository.deleteById(parseInt(id));
}

module.exports = {
    findOne,
    findAll,
    create,
    update,
    deleteById
}