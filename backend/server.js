require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("TrustBharat Backend Running... 🚀");
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});