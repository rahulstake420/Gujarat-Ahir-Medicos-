const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["student", "doctor", "pg"],
    default: "student",
  },

  bio: {
    type: String,
    default: "",
  },

  college: {
    type: String,
    default: "",
  },

  city: {
    type: String,
    default: "",
  },

  instagram: {
    type: String,
    default: "",
  },

  whatsapp: {
    type: String,
    default: "",
  },

  profilePic: {
    type: String,
    default: "",
  },

  isPrivate: {
    type: Boolean,
    default: false,
  },

  followRequests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  location: {
    lat: Number,
    lng: Number,
  },

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
