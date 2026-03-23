const Service = require("../models/Service");

const addService = async (req, res) => {
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

const getServices = async (req, res) => {
  try {
    const services = await Service.find().populate("user", "name");

    res.json(services);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addService, getServices };