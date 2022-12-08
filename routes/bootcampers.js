//const express = require('express')
import express from 'express'
export const router = express.Router()

import {
    getBootcampers,
    getBootcamperByID,
    deleteTopic,

    addTopic
} from "../models/bootcampers.js"


router.get('/bootcampers', async (req, res) => {

    const bootCampers = await getBootcampers();
    return res.json({ success: true, payload: bootCampers})
})

router.get('/bootcampers/:id', async function (req, res) {
    
    const specificBootcamper = await getBootcamperByID(req.params.id)
    res.json({ success: true, payload: specificBootcamper});
})

router.delete('/bootcampers/:id', async function (req, res) {
    console.log(req.params.id)
     const deletedTopic = await deleteTopic(req.params.id)
     res.json({success: true, payload: deletedTopic})
})


router.patch('/bootcampers/:id', async function (req, res) {
    const updateTopic = req.body
    const bootID = req.params.id
    console.log(updateTopic)
    const updatedTopic = await updateTopicHandler(updateTopic, bootID)
    res.status(200).json({success: true, payload: updatedTopic})
})

router.post('/bootcampers/', async function (req, res) {
    const newTopic = req.body
    const addedTopic = await addTopic(newTopic)
    res.status(200).json({success: true, payload: addedTopic})
})