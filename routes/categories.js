const express = require("express");
const CategoriesController = require("../controllers/CategoriesController.js");

const router = express.Router();

router.post("/", CategoriesController.insert);

router.put("/id/:id", CategoriesController.update);
router.get("/", CategoriesController.getAll);

router.get("/id/:id", CategoriesController.getById);

module.exports = router;
