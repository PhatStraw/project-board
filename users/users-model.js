const db = require('../database/dbConfig.js')

module.exports = {
    add,
    findUsers,
    findById,
    findBy
}

async function add(user){
    const [id] = await db('users').insert(user, 'id')

    return findById(id)
}

function findById(id){
    return db('users')
        .where({id})
        .first()
}

function findUsers() {
    return db('users')
}

function findBy(filter){
    return db('users').where(filter)
}