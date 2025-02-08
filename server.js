const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();

// Rate Limiting (Mencegah spam request)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 menit
  max: 100 // Maksimal 100 request per 15 menit
});
app.use(limiter);

// Fungsi bypass sederhana (nanti bisa dikembangkan)
app.get('/bypass', async (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) return res.status(400).send({ error: "URL tidak ditemukan!" });

  // Logic bypass bisa ditambahkan di sini
  res.redirect(targetUrl);
});

app.listen(3000, () => console.log('Server berjalan di port 3000'));
