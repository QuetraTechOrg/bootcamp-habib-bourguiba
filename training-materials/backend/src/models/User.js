/*roniceyemeli
@build by https://www.linkedin.com/in/roniceyemeli/
*/
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: Number, //256544852485
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
    blocked: {
      type: String,
      default: "false",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Users", userSchema);
