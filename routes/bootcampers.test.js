const request = require ("supertest");
const { app } = require  ("../App");
const { expect, test } = require ("@jest/globals")
const { pool } = require('../db/index')
// const  supertest from "supertest";

describe ('handler test suite', () => {
   afterAll(()=>{pool.end()})
   
   test('responds to get request with correct 200 status code and returns array', async function(){
   const response = await request(app).get("/api/bootcampers/")
   expect(response.status).toBe(200);
   expect(response.body).toStrictEqual({success: true, payload: expect.any(Array)});
   
   })
   
  // test('responds to post request with 200 status code', async function(){

    //const response = await request(app).post('/api/bootcampers')
    //expect(response.status).toBe(200);
    //expect(response.body).toStrictEqual({success:true, payload: expect.any(Object)})
   //})
   
   test('responds to delete request with 200 status code', async function(){

    const response = await request(app).delete("/api/bootcampers/41658f90-8c10-4fb8-a1c6-c5bf92a23d03")
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({success: true, payload:[
        {
            "strength_id": expect.any(Number),
            "bootcamper_id": expect.any(Number),
            "topic_id": expect.any(Number),
            "strength_weakness": expect.any(Boolean),
            "unique_id": "41658f90-8c10-4fb8-a1c6-c5bf92a23d03"
        }
    ] })
   })

 })

