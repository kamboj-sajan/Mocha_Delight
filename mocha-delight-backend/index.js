import express from "express"
import cors from "cors";
import pg from "pg";

const { Pool } = pg;


const app = express();
const port = 5000;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "mocha_delight",
    password: "Nova258@",
    port: 5432,
});

app.use(cors());
app.use(express.json());

app.get('/shop', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM shops LIMIT 1');
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
