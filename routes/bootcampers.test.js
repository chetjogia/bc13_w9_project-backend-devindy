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
   
   test('responds to post request with 200 status code', async function(){

    const response = await request(app).post
   })

 })

