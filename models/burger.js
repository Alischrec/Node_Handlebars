const orm = require("../config/orm");

module.exports.addBurger = (burgerName, cb) => {
    orm.insertOne('burger', { burger_name: burgerName }, cb);
}

module.exports.getAll = (cb) => {
    orm.selectAll('burger', cb);
}

module.exports.devoureBurger = (burgerId, cb) => {
    orm.updateOne('burger', burgerId, {devoured: true}, cb)
}