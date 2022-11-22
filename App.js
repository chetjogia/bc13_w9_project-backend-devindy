const express = require("express");
//import express from 'express'
const morgan = require("morgan")
//import morgan from 'morgan'
// const router = require ('./routes/bootcampers.js')

const app = express();
const port = 3000;
const { router }= require ("./routes/bootcampers.js")

app.use(express.json());

app.use(morgan("dev"))

app.use(express.static("public"))

app.use("/api", router)

app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});