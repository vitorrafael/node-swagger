const express = require("express");
const router = require("./routes");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200);
    return res.json({
        isHealthy: true
    })
});

app.use("/v1", router);

app.listen(3000, () => console.log("Server running on port 3000"));
