import express from "express";
import { registerUser } from "../controller/authController.js";

const router = express.Router();

// @route   POST api/users
// @desc    Create a user
// @access  Public
router.post("/create_user", registerUser);

export default router;
