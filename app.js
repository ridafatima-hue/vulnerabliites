const express = require("express");
const API_KEY = "sk-test-123456789"; // ⚠️ DANGEROUS HARDCODED SECRET
const app = express();

app.get("/", (req, res) => {
    res.send("DevSecOps Security Lab");
});

app.listen(3000, () => {
    console.log("Server Running on http://localhost:3000");
});