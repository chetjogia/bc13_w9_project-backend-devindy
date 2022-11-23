const express = require("express");
//import express from 'express'
const morgan = require("morgan")
//import morgan from 'morgan'
// const router = require ('./routes/bootcampers.js')

const app = express();

const { router }= require ("./routes/bootcampers.js")

app.use(express.json());

app.use(morgan("dev"))

app.use(express.static("public"))

app.use("/api", router)


module.exports = { app }