const express = require("express")

const mongoose = require("mongoose")
const cors = require('cors')
const FriendeModel = require("./models/Friend")

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(
    "mongodb+srv://user1:bacon123@cluster0.6ypzfec.mongodb.net/mernp1?retryWrites=true&w=majority", 
{
    useNewUrlParser: true,
});

app.post("/insert", async (req, res) => {
    const friendName = req.body.friendName;
    const days = req.body.days;
    const friend = new FriendeModel({friendName: friendName, daySinceCalled: days})

    try {
        await friend.save()
    } catch(err) {
        console.log(err)
    }
})

app.listen(3001, () => {
    console.group("you are connected")
})

