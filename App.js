//const express = require("express");
import express from 'express'
//const morgan = require("morgan")
import morgan from 'morgan'
// const router = require ('./routes/bootcampers.js')
import cors from 'cors'


const app = express();

import { router } from "./routes/bootcampers.js"


app.use(cors())
app.use(express.json());

app.use(morgan("dev"))

app.use(express.static("public"))

app.use("/api", router)
export { app }

//change3