const express = require("express");
const CategoriesProductsController = require("../controllers/CategoriesProductsController.js");

const router = express.Router();

router.post("/", CategoriesProductsController.insert);

router.get("/", CategoriesProductsController.getAll);

module.exports = router;
