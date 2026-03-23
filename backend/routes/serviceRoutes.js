const express = require("express");
const router = express.Router();


const protect = require("../middleware/authMiddleware");

const { addService, getServices } = require("../controllers/serviceController");


router.post("/add", protect, addService);
router.get("/", getServices);

module.exports = router;
