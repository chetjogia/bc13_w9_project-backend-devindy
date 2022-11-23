const express = require('express')
const router = express.Router()

const {
    getBootcampers,
    getBootcamperByID,
    deleteTopic,
    addTopic
} = require("../models/bootcampers.js")

router.get('/bootcampers', async (req, res) => {

    const bootCampers = await getBootcampers();
    return res.json({ success: true, payload: bootCampers})
})

router.get('/bootcampers/:id', async function (req, res) {
    
    const specificBootcamper = await getBootcamperByID(req.params.id)
    res.json({ success: true, payload: specificBootcamper});
})

router.delete('/bootcampers/:id', async function (req, res) {
    console.log(req.body)
     const deletedTopic = await deleteTopic(req.params.id)
     res.json({success: true, payload: deletedTopic})
})

router.post('/bootcampers/', async function (req, res) {
    const newTopic = req.body
    const addedTopic = await addTopic(newTopic)
    res.status(200).json({success: true, payload: addedTopic})
})

module.exports = {
    router
}