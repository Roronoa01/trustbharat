const Review = require("../models/Review");

exports.addReview = async (req, res) => {
  try {
    const { text, rating, serviceId } = req.body;

    const review = new Review({
      text,
      rating,
      user: req.user.id, // from token
      service: serviceId
    });

    await review.save();

    res.json({
      message: "Review added successfully ✅",
      review
    });

  } catch (err) {
  console.log("ERROR:", err);   // 👈 MUST ADD
  res.status(500).json({ message: err.message });
}
}; 

  exports.getReviews = async (req, res) => {
  try {
    const serviceId = req.params.serviceId;

    const reviews = await Review.find({ service: serviceId })
      .populate("user", "name"); // fetch user name

    res.json(reviews);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


