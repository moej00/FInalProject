const router = require("express").Router();
const Admin = require("../models/admin");
const verify = require("../verifyToken");
const CryptoJS = require("crypto-js");

//Create:

router.post("/", verify, async (req, res) => {
  if (req.admin.isSuperAdmin) {
    const newAdmin = new Admin({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString(),
    });

    try {
      const savedAdmin = await newAdmin.save();
      res.status(200).json(savedAdmin);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed");
  }
});

// Update:
router.put("/:id", verify, async (req, res) => {
  if (req.admin.isSuperAdmin) {
    try {
      const updatedAdmin = await Admin.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedAdmin);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed");
  }
});

// Delete:
router.delete("/:id", verify, async (req, res) => {
  if (req.admin.isSuperAdmin) {
    try {
      await Admin.findByIdAndDelete(req.params.id);
      res.status(200).json("Admin Deleted Successfully");
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
    const admin = await Admin.findById(req.params.id);
    res.status(200).json(admin);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All users:
router.get("/", async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
