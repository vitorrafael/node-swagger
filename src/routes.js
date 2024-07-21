const { Router } = require("express");

const router = Router();

const products = [];

router.get("/products/findByName", (req, res) => {
    const { name } = req.query;
    const product = products.find(product => product.name === name);
    return res.json(product);
});

router.post("/products", (req, res) => {
    const { name, description } = req.query;
    products.push({ name, description });
    return res.status(200);
})

router.get("/products", (req, res) => {
    return res.json(products);
})

module.exports = router;