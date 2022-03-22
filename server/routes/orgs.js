const router = require("express").Router();
const Org = require("../models/org");
const verify = require("../verifyToken");
const CryptoJS = require("crypto-js");

//pull user into the org
router.put("/pulluser/:id", verify, async (req, res) => {
  if (!req.admin.isSuperAdmin) {
    try {
      const updatedOrg = await Org.findByIdAndUpdate(
        req.params.id,
        {
          $push: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedOrg);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed");
  }
});

//delete org

router.delete("/:id", verify, async (req, res) => {
  if (req.admin.isSuperAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Org Deleted Successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed");
  }
});

//create
router.post("/", verify, async (req, res) => {
  if (req.admin.isSuperAdmin) {
    const newOrg = new Org(req.body);

    try {
      const savedOrg = await newOrg.save();
      res.status(200).json(savedOrg);
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
      const updatedOrg = await Org.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedOrg);
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
    const org = await Org.findById(req.params.id);
    res.status(200).json(org);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get organization:
router.get("/", verify, async (req, res) => {
  if (req.admin.isSuperAdmin) {
    try {
      const org = await Org.find();
      res.status(200).json(org);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed");
  }
});

//GET single orgnization
router.get("/single/:id", verify, async (req, res) => {
  try {
    const org = await Org.find({ admin: req.params.id });
    res.status(200).json(org);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
