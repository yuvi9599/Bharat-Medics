import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, trim: true, default: "" },
    subject: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    status: { type: String, default: "new" },
    date: { type: Number, required: true },
})

const contactModel = mongoose.models.contact || mongoose.model("contact", contactSchema)
export default contactModel
