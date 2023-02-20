{
  console.log(area);
});const express = require('express');

const app = express();

app.get('/calculate-area', (req, res) => {
  const radius = req.query.radius;
  
  if(!radius) {
    return res.status(400).json({ error: 'Radius is required' });
  }
  
  const area = Math.PI * radius * radius;
  
  res.json({ area });
});

app.listen(3000, () =>
{
  console.log(area);
});
