const express = require("express");
const router = express.Router();

const { addReview, getReviews } = require("../controllers/reviewController");
const protect = require("../middleware/authMiddleware");


// ADD REVIEW
router.post("/add", protect, addReview);

// GET REVIEWS
router.get("/:serviceId", getReviews);

module.exports = router;