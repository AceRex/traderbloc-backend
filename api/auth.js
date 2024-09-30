import express from "express";
import { getUserProfile, registerUser } from "../controller/authController.js";

const router = express.Router();

// @route   POST /api/user
// @desc    Create a user
// @access  Public
router.post("/create_user", registerUser);

// @route   GET /api/user
// @desc    Get a user
// @access  Public
router.get("/", getUserProfile);

export default router;
