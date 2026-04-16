const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🔥 Gujarat Ahir Medicos API running");
});

app.listen(5000, () => console.log("Server started"));
