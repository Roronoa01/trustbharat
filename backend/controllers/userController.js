const User = require("../models/User");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({ name, email, password });
    await user.save();

    res.json({ message: "User registered successfully" });

  } catch (error) {
    console.log(error); // 👈 important for debugging
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { registerUser };