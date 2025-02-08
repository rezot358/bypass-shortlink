// server.js - Backend Bypass Shortlink
const express = require('express');
const app = express();

app.get('/bypass', async (req, res) => {
  const targetUrl = req.query.url;
  
  // Simulasi logika bypass (nanti diganti dengan Puppeteer/Cheerio)
  const finalUrl = targetUrl ? `https://redirected.com/?url=${targetUrl}` : "https://default.com";

  res.json({ success: true, finalUrl });
});

app.listen(3000, () => console.log('Server running on port 3000'));
