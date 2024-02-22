const express = require("express");
const zod = require("zod");
const User = require("../Models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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

// Route for signUp

router.post("/createuser", async (req, res) => {
  try {
    // Validate request body against the Zod schema
    createUserSchema.safeParse(req.body);
    // Generate a salt and hash the password
    const salt = bcrypt.genSaltSync(10); // 10 is the salt rounds
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    // Create the user with the hashed password
    await User.create({
      name: req.body.name,
      location: req.body.location,
      email: req.body.email,
      password: hashedPassword,
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

// Route for LOGIN

router.post("/loginuser", async (req, res) => {
  try {
    // Validate request body against the Zod schema
    loginUserSchema.safeParse(req.body);
    let user = await User.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res.status(400).json({ success: false, errors: "User not found" });
    }
    // Compare the provided password with the hashed password stored in the database
    const isPasswordValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ success: false, errors: "Wrong credentials" });
    }
    // Generate a JWT token for the user
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      // expiresIn: "1d", // Token expires in 1 day
    });
    // Return success response with token
    return res.status(200).json({
      success: true,
      token: token,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res
      .status(500)
      .json({ success: false, errors: "Internal Server Error" });
  }
});

module.exports = router;
