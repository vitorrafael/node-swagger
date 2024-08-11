const { Router } = require("express");
const uuid = require("uuid");

const router = Router();

const products = [];

router.get("/products/findByName", (req, res) => {
    const { name } = req.query;
    const product = products.find(product => product.name === name);
    return res.json(product);
});

router.post("/products", (req, res) => {
    const { name, description, price } = req.body;
    const product = { id: uuid.v4(), name, description, price };
    products.push(product);
    return res.json(product);
})

router.get("/products/:id", (req, res) => {
    const { id } = req.params;
    const product = products.find(product => product.id === id);
    if (!product) {
        res.status(404);
        return res.json({ message: `Could not find product for id "${id}"` })
    }
    return res.json(product);
})

router.get("/products", (req, res) => {
    return res.json(products);
})

module.exports = router;