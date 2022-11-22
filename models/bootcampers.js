const { query } = require("../db/index.js");

async function getBootcampers() {
  
    const strengthsArray = await query("SELECT first_name, last_name, topic_name, strength_weakness FROM strengths_weaknesses s JOIN bootcampers b ON b.bootcamper_id = s.bootcamper_id JOIN topics t ON t.topic_id = s.topic_id;")
    const bootcamperArray = await query("SELECT first_name, last_name, password FROM bootcampers")
    return [bootcamperArray.rows, strengthsArray.rows];
  }

async function getBootcamperByID(id) {
    const specificBootcamper = await query("SELECT *FROM bootcampers WHERE id = $1", [id]);
    console.log(specificBootcamper)   
    return specificBootcamper.rows
}

  module.exports = {
    getBootcampers,
    getBootcamperByID
  }