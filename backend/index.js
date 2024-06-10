const express = require("express");
const mongoose = require("mongoose"); // Use directly mongoose
const { userModel } = require("./database/db");
const router = require("./routes/index");
const app = express();
const port = 3000;

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb+srv://raghavkaul44:29XZfR6nNVu7xoqR@cluster01win.lpqgoez.mongodb.net/payments_app", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
}

app.use(express.json());
app.use("/api/v1", router); // Correct route prefix

app.listen(port, () => {
    console.log("running on " + port);
});
