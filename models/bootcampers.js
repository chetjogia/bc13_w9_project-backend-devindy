import { pool } from "../db/index.js"

export async function getBootcampers() {
  
    const strengthsArray = await pool.query("SELECT * FROM strengths_weaknesses s JOIN bootcampers b ON b.bootcamper_id = s.bootcamper_id JOIN topics t ON t.topic_id = s.topic_id;")
    const bootcamperArray = await pool.query("SELECT * FROM bootcampers")
    return [bootcamperArray.rows, strengthsArray.rows];
  }

export async function getBootcamperByID(id) {
    const specificBootcamper = await pool.query("SELECT * FROM bootcampers WHERE bootcamper_id = $1", [id]);
    console.log(specificBootcamper)   
    return specificBootcamper.rows
}


export async function deleteTopic(id) {
    const deletedTopic = await pool.query ("DELETE FROM strengths_weaknesses WHERE unique_id = $1 RETURNING *", [id]);

    return deletedTopic.rows
}

export async function addTopic(newTopic) {
  

  const AddedTopic = await pool.query ("INSERT into strengths_weaknesses (bootcamper_id, topic_id, strength_weakness, unique_id)VALUES ($1, $2, $3, $4) RETURNING *",[newTopic.bootcamperId, newTopic.topicId, newTopic.strengthOrWeakness, newTopic.uniqueId])
  const AddedTopicObject = AddedTopic.rows
  return AddedTopicObject
}

export async function updateTopicHandler(updateTopic, bootID) {
  
  const AddedTopic = await pool.query (`UPDATE bootcampers SET description=$1 WHERE bootcamper_id=$2;`,[updateTopic.description, bootID])
  const AddedTopicObject = AddedTopic.rows
  return AddedTopic.rows
}




