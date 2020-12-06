const connection = require("./connection");

// create the methods that will execute the necessary MySQL commands in the controllers.

module.exports.selectAll = (tableName, cb) => {
    connection.query(`SELECT * FROM  ${tableName}`, (err, results) => {
        if (err) throw err;
        return cb(results);
    })
}

module.exports.insertOne = (tableName, newData, cb) => {
    connection.query(`INSERT INTO ${tableName} SET ?`, newData, (err) => {
        if (err) throw err;
        return cb();
    })
}

module.exports.updateOne = (tableName, id, updateData, cb) => {
    connection.query(`UPDATE ${tableName} SET ? WHERE id = ${id}`, updateData, (err) => {
        if (err) throw err;
        return cb();
    })
}