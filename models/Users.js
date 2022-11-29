const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    userRole: { type: String, required: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: false },
  },
  { timestamps: true }
);

mongoose.models = {};

export default mongoose.model("Users", UserSchema);
