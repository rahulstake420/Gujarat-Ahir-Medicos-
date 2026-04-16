const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb+srv://rahulstake420_db_user:<db_password>@cluster0.yxjdutd.mongodb.net/?appName=Cluster0")
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log("MongoDB Error ❌", err));

// Test route
app.get("/", (req, res) => {
    res.send("🚀 Gujarat Ahir Medicos API running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
