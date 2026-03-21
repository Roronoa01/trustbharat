require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log(err));

app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message:"TrustBharat Backend Connected 🚀",
    status : "success"
  });
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});