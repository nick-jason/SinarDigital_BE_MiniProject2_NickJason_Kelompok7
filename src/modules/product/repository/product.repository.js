const db = require ('../../../helpers/db');

const findOne = async (id) => {
    return await db.product.findUnique({
        where: {
            id: Number(id)
        },
    });
}

const findAll = async () => {
    return await db.product.findMany();
}

const create = async (data) => {
    return await db.product.create({
        data
    });
}

const update = async (id, data) => {
    return await db.product.update({
        where: {
            id: Number(id)
        },
        data
    });
}

const deleteById = async (id) => {
    return await db.product.delete({
        where: {
            id: Number(id)
        }
    });
}

module.exports = {
    findOne,
    findAll,
    create,
    update,
    deleteById
}