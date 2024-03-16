// server.js
import express, { json } from 'express';
import { createPool } from 'mysql2/promise';
import cors from 'cors';

const app = express();
app.use(json());
app.use(cors());

const pool = createPool({
  host: 'localhost',
  user: 'sqluser',
  password: 'password',
  database: 'people'
});

// Route to fetch all people from the database
app.get('/person', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM person');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching people:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to add a new person to the database
app.post('/person', async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const [result] = await pool.query('INSERT INTO person (name) VALUES (?)', [name]);
    res.status(201).json({ id: result.insertId, name });
  } catch (err) {
    console.error('Error adding person:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
