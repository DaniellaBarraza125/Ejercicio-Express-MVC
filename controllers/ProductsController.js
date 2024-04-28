const db = require("../config/database.js");

const ProductsController = {
    insert(req, res) {
        let sql = `INSERT INTO products (name, price) values
            ('${req.body.name}', '${req.body.price}')`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send("Product added...");
        });
    },
    getAll(req, res) {
        let sql = `SELECT * FROM products`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    },
    getById(req, res) {
        let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    },
    update(req, res) {
        let sql = `UPDATE products SET name = '${req.body.name}', price = '${req.body.price}' WHERE id = ${req.params.id}`;
        db.query(sql, (err) => {
            if (err) throw err;
            res.send("Product updated...");
        });
    },
    getByName(req, res) {
        let sql = `SELECT * FROM products WHERE name LIKE '%${req.params.nombre}%'`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    },
    orderBy(req, res) {
        let sql = `SELECT * FROM products order by id desc`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    },
    deleteById(req, res) {
        let sql = `DELETE FROM products WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send("product deleted");
        });
    },
};
module.exports = ProductsController;
