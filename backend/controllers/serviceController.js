const Service = require("../models/Service");

const createService = async (req, res) => {
  try {
    const { title, description, location } = req.body;

    const service = new Service({
      title,
      description,
      location,
      user: req.user.id // 🔐 from token
    });

    await service.save();

    res.json({ message: "Service created", service });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { createService };