import { seedSWTable } from "../helpers.js";
import { pool } from "../indexTwo.js";



try {
  await seedSWTable();
  console.log("Seeded 'SW' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}