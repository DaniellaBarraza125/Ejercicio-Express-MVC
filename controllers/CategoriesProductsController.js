const db = require("../config/database.js");

const CategoriesProductsController = {
    insert(req, res) {
        const { product_id, category_id } = req.body;
        const sql = `INSERT INTO categories_products (product_id, category_id) VALUES (?, ?)`;
        db.query(sql, [product_id, category_id], (err, result) => {
            if (err) {
                console.error("Error al insertar categoría de producto:", err);
                return res
                    .status(500)
                    .send("Error al insertar categoría de producto");
            }
            res.send("Categoría de producto agregada correctamente");
        });
    },
    getAll(req, res) {
        const sql = `SELECT products.name AS name_product, categories.name AS name_category
        FROM products
        INNER JOIN categories_products ON products.id = categories_products.product_id
        INNER JOIN categories ON categories_products.category_id = categories.id`;
        db.query(sql, (err, result) => {
            if (err) {
                console.error(
                    "Error al obtener todas las categorías de productos:",
                    err,
                );
                return res
                    .status(500)
                    .send("Error al obtener todas las categorías de productos");
            }
            res.send(result);
        });
    },
};

module.exports = CategoriesProductsController;
