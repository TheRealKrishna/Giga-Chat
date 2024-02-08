const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
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
  nickname: {
    type: String,
    default: function () {
      return this.username;
    },
  },
  profile: {
    type: String,
    default: "https://qph.cf2.quoracdn.net/main-thumb-126103989-200-zznnaqrcesiwnhqtmpqnteoblncikoxe.jpeg"
  },
  contacts: {
    type: Array
  },
  unreadMessages: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  }
}, { minimize: false });

const User = new mongoose.model("User", UserSchema);
module.exports = User