const User = require("../models/User");

exports.registerUser = async (req, res) => {
  try {
    const {
      fullName,
      dateOfBirth,
      gender,
      email,
      phoneNumber,
      address,
      emergencyContactNumber,
    } = req.body;
    const newUser = new User({
      fullName,
      dateOfBirth,
      gender,
      email,
      phoneNumber,
      address,
      emergencyContactNumber,
    });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
