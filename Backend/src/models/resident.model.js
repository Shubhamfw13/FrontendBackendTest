const mongoose = require("mongoose");
const residentSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    age: { type: Number, min: 1, max: 100, required: true },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "others"],
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("resident", residentSchema);
