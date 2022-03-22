const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: false,
      unique: true,
      min: 6,
      max: 45,
      match:
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    username: {
      type: String,
      required: true,
      trim: false,
      min: 6,
      max: 30,
    },
    password: {
      type: String,
      required: true,
      minimum: 6,
      max: 255,
    },
    isSuperAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", AdminSchema);
