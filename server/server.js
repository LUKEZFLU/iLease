//Auto matching for Mac: shift + option + F

const express = require('express')
const app = express()
const port = 3000

app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] })
})

app.listen(port, () => {
    console.log("Listening to port: " + port);
})