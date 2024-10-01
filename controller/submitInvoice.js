import asyncHandler from "express-async-handler";
import Invoice from "../model/invoiceModel.js";

const invoiceSubmit = asyncHandler(async (req, res) => {
  try {
    const { company, invoiceNumber, description, quantity, pricePerUnit } = req.body;

    // Check if the file is uploaded
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Create a new invoice record
    const newInvoice = new Invoice({
      company,
      invoiceNumber,
      description,
      quantity,
      pricePerUnit,
      fileUrl: req.file.path,
    });

    await newInvoice.save();
    res.status(201).json({
      message: "Invoice submitted successfully",
      invoice: newInvoice,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export { invoiceSubmit };
