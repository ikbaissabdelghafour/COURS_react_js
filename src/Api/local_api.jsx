const express = require('express');
const cors = require('cors');
const app = express();
const port = 500;

// Enable CORS for all origins (you can specify specific origins for more security)
app.use(cors());

// Middleware to parse JSON data in the request body
app.use(express.json());

// Mock data
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' }
];

// GET endpoint for users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// POST endpoint to add a new user
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
