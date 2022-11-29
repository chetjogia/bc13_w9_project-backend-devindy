import request from "supertest";
import { app } from  "../App";
import { expect, test } from "@jest/globals"
import { pool } from '../db/index'
// const  supertest from "supertest";

describe ('get handler test suite', () => {
   afterAll(()=>{pool.end()})
   
   test('responds to get request with 200 status code', async function(){
   const response = await request(app).get("/api/bootcampers/")
   expect(response.status).toBe(200);
    //expect(response.body).toStrictEqual({success: true, payload: expect.any(Array)});
   
   })
 })

