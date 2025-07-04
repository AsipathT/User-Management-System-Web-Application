//pass - SSl1mcXVqGGT1KUm

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/UserRoutes");

const app = express();
const cors = require("cors");

//Middleware
app.use(express.json());
app.use(cors());
app.use("/users",router);

mongoose.connect("mongodb+srv://admin:SSl1mcXVqGGT1KUm@cluster0.o31co.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.then(()=> {
    app.listen(5000);
})
.catch((err)=> console.log((err)));