const db = require("../config/database.js");

const CategoriesController = {
    insert(req, res) {
        let sql = `INSERT INTO categories (name) values
            ('${req.body.name}');`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send("category added...");
        });
    },
    getAll(req, res) {
        let sql = `SELECT * FROM categories`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    },
    getById(req, res) {
        let sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    },
    update(req, res) {
        let sql = `UPDATE categories SET name = '${req.body.name}' WHERE id = ${req.params.id}`;
        db.query(sql, (err) => {
            if (err) throw err;
            res.send("category updated...");
        });
    },
};

module.exports = CategoriesController;
