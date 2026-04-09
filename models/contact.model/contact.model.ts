import mongoose, { Date, models, Schema } from "mongoose";

export type contact = {
  _id: mongoose.Types.ObjectId;
  createdAt: Date;
  name: string;
  email: string;
  phone: string;
  message: string;
  updatedAt: Date;
};




const contactSchema = new Schema<contact>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);





const CONTACT = models?.CONTACT || mongoose.model("CONTACT", contactSchema);
export default CONTACT;
