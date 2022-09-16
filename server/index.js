const express = require("express")

const mongoose = require("mongoose")

const FriendeModel = require("./models/Friend")

const app = express()

app.use(express.json())

mongoose.connect(
    "mongodb+srv://user1:bacon123@cluster0.6ypzfec.mongodb.net/mernp1?retryWrites=true&w=majority", 
{
    useNewUrlParser: true,
});

app.get("/get", async (req, res) => {
    const friend = new FriendeModel({friendName: "frank", daySinceCalled: 3})

    try {
        await friend.save()
    } catch(err) {
        console.log(err)
    }
})

app.listen(3001, () => {
    console.group("you are connected")
})

