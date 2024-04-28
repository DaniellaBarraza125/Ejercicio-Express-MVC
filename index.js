const express = require("express");
const app = express();
const db = require("./config/database");
const PORT = 3001;

app.use(express.json());

app.use("/products", require("./routes/products.js"));
app.use("/categories", require("./routes/categories.js"));
app.use("/categories_products", require("./routes/categories_products.js"));

app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE expressDB";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Database created...");
    });
});
// *Productos

app.get("/createproductstable", (req, res) => {
    let sql =
        "CREATE TABLE products(id INT AUTO_INCREMENT,name VARCHAR(255), price INT, PRIMARY KEY(id))";
    db.query(sql, (err, result) => {
        if (err) throw err;
        // console.log(result);
        res.send("Products table created...");
    });
});

// !Categorias

app.get("/createcategoriestable", (req, res) => {
    let sql =
        "CREATE TABLE categories(id INT AUTO_INCREMENT,name VARCHAR(255), PRIMARY KEY(id))";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send("categories table created...");
    });
});

//todo categories_products
app.get("/createcategories_productstable", (req, res) => {
    let sql =
        "CREATE TABLE categories_products (id INT AUTO_INCREMENT, product_id INT, category_id INT, PRIMARY KEY(id), FOREIGN KEY(product_id) REFERENCES products(id), FOREIGN KEY(category_id) REFERENCES categories(id))";
    db.query(sql, (err, result) => {
        if (err) {
            console.error("Error al crear la tabla categories_products:", err);
            res.status(500).send("Error interno del servidor");
            return;
        }
        res.send("categories_products table created");
    });
});

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));
