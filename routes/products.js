const express = require("express");
const ProductsController = require("../controllers/ProductsController.js");

const router = express.Router();

router.post("/", ProductsController.insert);

router.put("/id/:id", ProductsController.update);

router.get("/", ProductsController.getAll);

router.get("/id/:id", ProductsController.getById);

router.delete("/id/:id", ProductsController.deleteById);

router.get("/nombre/:nombre", ProductsController.getByName);

router.get("/orderby/", ProductsController.orderBy);

module.exports = router;
