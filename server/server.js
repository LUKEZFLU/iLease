const express = require('express')
const app = express()
const port = 4000

app.get("/api", (req, res) => {
    res.json({"users":["userOne", "userTwo", "userThree"]})
})

app.listen(port, () => {
    console.log("Listening to port: " + port);
})