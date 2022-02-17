// Dependencies / modules
const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config({ path: './config/.env'})

// Initializers
const app = express()
mongoose.connect("mongodb+srv://rashadn1234:<password>@nelsonmongodb.rx9rc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

// Setup static and middleware
app.use(express.static("public"))

// Routes

// This line of code is not needed, as "app.use(express.static("public")" renders the index.html file in the "public" folder.
/*app.get("/", (request, response) => {
    response.sendFile(path.resolve(__dirname, "./index.html"))
})*/

app.all("*", (request, response) => {
    response.status(404).send("<h1>Resource not found</h1>")
})

app.listen(5000, () => {
    console.log(`This server is listneing on port 5000...`)
})