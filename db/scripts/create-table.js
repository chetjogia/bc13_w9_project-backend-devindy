import { createSWTable } from "../helpers.js";
import { pool } from "../indexTwo.js";

try {
  await createSWTable();
  console.log("Created 'SW' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}