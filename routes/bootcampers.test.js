const request = require ("supertest");
const { app } = require  ("../App");
const { expect, test } = require ("@jest/globals")
const { pool } = require('../db/index')
// const  supertest from "supertest";

// describe ('get handler test suite', () => {
   test('responds to get request with 200 status code', async () => {
   const response = await request(app).get("/bootcampers/")
   // expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({success: true, payload: expect.any(Array)});
   })
// })
