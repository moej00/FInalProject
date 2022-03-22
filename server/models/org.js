const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrgSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    users: {
      type: Array,
    },
    admin: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Org", OrgSchema);
