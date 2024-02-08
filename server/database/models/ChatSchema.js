const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
    members: {
        type: Array
    },
    messages:{
        type: Array,
    }
});

const Chat = new mongoose.model("Chat", ChatSchema);
module.exports = Chat


