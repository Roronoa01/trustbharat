const User = require("../models/User");
const bcrypt = require("bcryptjs");



const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 🔐 HASH PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


      // save user
    const user = new User({
      name,
      email,
      password: hashedPassword
    });

    await user.save();
     // 🔥 CREATE TOKEN
    const token = jwt.sign(
      { id: user._id },
      "secretkey", // later we will move to .env
      { expiresIn: "7d" }
    );

    // ✅ SEND TOKEN
    res.json({
      message: "User registered successfully",
      token: token
    });


   
console.log(res.data);

  } catch (error) {
    console.log(error); // 👈 important for debugging
    res.status(500).json({ message: "Server Error" });
  }
};

const jwt = require("jsonwebtoken");


// Login page
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
     //  CREATE TOKEN
    const token = jwt.sign(
      { id: user._id },
      "secretkey", 
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login successful",
       token: token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.log( "LOGIN ERROR:", error);
    res.status(500).json({ message: "Server Error" });
  }
};




module.exports = { registerUser , loginUser};