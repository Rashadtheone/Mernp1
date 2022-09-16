const mongoose = require ("mongoose");

const FriendSchema = new mongoose.Schema({
    friendName: {
        type: String,
        required: true,
    },
    daySinceCalled: {
        type: Number,
        required: true,
    }
})

const Friend = mongoose.model("Friend", FriendSchema)
module.exports = Friend