require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");

const app = express();

const serviceRoutes = require("./routes/serviceRoutes");
const reviewRoutes = require("./routes/reviewRoutes");







// ✅ Middleware FIRST
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

// ✅ Routes
app.use("/api/users", userRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/reviews", reviewRoutes);

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log("Mongo Error:", err));

// ✅ Test route
app.get("/", (req, res) => {
  res.json({
    message: "TrustBharat Backend Connected 🚀",
    status: "success"
  });
});



const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



