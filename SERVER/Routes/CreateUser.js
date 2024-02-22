const express = require("express");
const zod = require("zod");

const User = require("../Models/user");
const router = express.Router();

// for signUp
const createUserSchema = zod.object({
  name: zod.string(),
  location: zod.string(),
  email: zod.string().email(),
  password: zod.string().min(6),
});

// for login
const loginUserSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
});

router.post("/createuser", async (req, res) => {
  try {
    // Validate request body against the Zod schema
    createUserSchema.safeParse(req.body);
    // if validatiobn is successfull, the user is created :)
    await User.create({
      name: req.body.name,
      location: req.body.location,
      email: req.body.email,
      password: req.body.password,
    });

    res.json({
      success: true,
    });
  } catch (error) {
    if (error instanceof Error && error.errors) {
      // If there are validation errors, return them in the response
      return res.status(400).json({ success: false, errors: error.errors });
    }
    res.status(407).json({
      success: false,
      message: "Invalid Credentials | Email already used",
    });
  }
});

router.post("/loginuser", async (req, res) => {
  try {
    // Validate request body against the Zod schema
    createUserSchema.safeParse(req.body);
    let user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!user) {
      return res.status(400).json({ success: false, errors: "Wrong credentials" });
    }
    return res.status(200).json({
      success: true,
      msg: "User found"
    });
  } catch (error) {
    if (error instanceof Error && error.errors) {
      // If there are validation errors, return them in the response
      return res.status(400).json({ success: false, errors: error.errors });
    }
    res.status(407).json({
      success: false,
      message: "Invalid Credentials | Email already used",
    });
  }
});

module.exports = router;
