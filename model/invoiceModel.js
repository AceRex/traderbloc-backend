import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  invoiceNumber: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  pricePerUnit: { type: Number, required: true },
  fileUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

export default Invoice;
