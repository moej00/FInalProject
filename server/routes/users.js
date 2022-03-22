const router = require("express").Router();
const User = require("../models/user");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");

//Create:
router.post("/", verify, async (req, res) => {
  if (!req.admin.isSuperAdmin) {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      address: req.body.address,
      jobTitle: req.body.jobTitle,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString(),
    });

    try {
      const savedUser = await newUser.save();
      res.status(200).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed");
  }
});

// Update:
router.put("/:id", verify, async (req, res) => {
  if (!req.admin.isSuperAdmin) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed");
  }
});

// Delete:
router.delete("/:id", verify, async (req, res) => {
  if (!req.admin.isSuperAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User Deleted Successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed");
  }
});

// Get:
router.get("/find/:id", verify, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All users:
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
