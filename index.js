const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));


// In-memory metrics store
let metrics = [];

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Get all metrics
app.get('/metrics', (req, res) => {
  res.json(metrics);
});

// Add a new metric
app.post('/metrics', (req, res) => {
  const { type, value } = req.body;

  if (!type || !value) {
    return res.status(400).json({ error: 'type and value are required' });
  }

  const entry = {
    id: metrics.length + 1,
    type,
    value,
    timestamp: new Date().toISOString(),
  };

  metrics.push(entry);
  res.status(201).json(entry);
});

// Start server
app.listen(PORT, () => {
  console.log("nodejs-app-cicd running at http://localhost:3000");
});
