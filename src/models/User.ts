import mongoose from "mongoose";
import { JobType, LocationType } from "../@types";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  image: {
    data: Buffer,
    contentType: String,
    required: false,
  },
  phone: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: false,
  },
  gender: {
    type: String,
    match: new RegExp("male|female"),
    required: false,
  },
  locations: {
    type: [String],
    required: false,
  },
  jobs: {
    type: [String],
    required: false,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
