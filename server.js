import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/planets', async (req, res) => {
  try {
    const response = await axios.post(
      'https://json.freeastrologyapi.com/planets',
      {
        year: req.body.year,
        month: req.body.month,
        date: req.body.day,
        hours: req.body.hour,
        minutes: req.body.min,
        seconds: req.body.sec || 0,
        latitude: req.body.lat,
        longitude: req.body.lon,
        timezone: req.body.tzone,
      },
      headers: {
      "Authorization": `Bearer ${API_KEY}`, // depends on API docs
      "Content-Type": "application/json"
    },
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));