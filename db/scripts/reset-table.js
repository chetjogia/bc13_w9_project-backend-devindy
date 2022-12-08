import { resetSWTable } from "../helpers.js";
import { pool } from "../indexTwo.js";


try {
  await resetSWTable();
  console.log("Dropped, re-created and re-seeded 'SW' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}