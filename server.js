import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
import tzLookup from "tz-lookup";
import { DateTime } from "luxon";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/natal", async (req, res) => {
  try {
    const { date, time } = req.body;

    if (!date || !time) {
      return res.status(400).json({ error: "date and time required" });
    }

    // Hardcode Chicago coordinates
    const lat = 41.8781;
    const lon = -87.6298;

    // Get timezone offset from hardcoded coords
    const tz = tzLookup(lat, lon);
    const localDateTime = DateTime.fromISO(`${date}T${time}`, { zone: tz });
    const offsetHours = localDateTime.offset / 60;

    // Extract date/time parts
    const [year, month, day] = date.split("-").map(Number);
    const [hour, min] = time.split(":").map(Number);
    const sec = 0;

    // Call FreeAstrologyAPI
    const faRes = await axios.post(
      "https://json.freeastrologyapi.com/planets",
      {
        year,
        month,
        date: day,
        hours: hour,
        minutes: min,
        seconds: sec,
        latitude: lat,
        longitude: lon,
        timezone: offsetHours,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.REACT_APP_ASTROLOGY_API_KEY, // make sure this matches your .env key name
        },
      }
    );

    res.json({
      input: { date, time, location: "Chicago, USA" },
      geocoded: { lat, lon, tz, offsetHours },
      planets: faRes.data,
    });
  } catch (err) {
    console.error("Error details:", err.response?.data || err.message);
    res.status(500).json({ error: err.message, details: err.response?.data });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
