const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🔥 Gujarat Ahir Medicos API running");
});

app.listen(5000, () => console.log("Server started"));
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

// 🔥 MongoDB Connection
mongoose.connect("mongodb+srv://rahulstake420_db_user:<db_password>@cluster0.yxjdutd.mongodb.net/?appName=Cluster0")
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log("Error:", err));

// Test route
app.get("/", (req, res) => {
    res.send("Server Running 🚀");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
