import { dropSWTable } from "../helpers.js";
import { pool } from "../indexTwo.js";


try {
  await dropSWTable();
  console.log("Dropped 'SW' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}