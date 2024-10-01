import express from "express";
import { getUserProfile, registerUser } from "../controller/authController.js";
import { invoiceSubmit } from "../controller/submitInvoice.js";
import { upload } from "../utils/fileupload.js";

const router = express.Router();

router.post("/create_user", registerUser);

router.post("/invoice", upload.single("invoiceFile"), invoiceSubmit);

router.get("/user",  getUserProfile);

export default router;
