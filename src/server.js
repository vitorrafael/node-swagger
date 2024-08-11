const express = require("express");
const router = require("./routes");

const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger.json");

const app = express();

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.get("/health", (req, res) => {
    res.status(200);
    return res.json({
        isHealthy: true
    })
});

app.use("/v1", router);

app.listen(3000, () => console.log("Server running on port 3000"));
