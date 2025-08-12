import React, { useState } from "react";
import axios from "axios";

export default function NatalCalculator() {
  const [form, setForm] = useState({ date: "", time: "", location: "" });
  const [data, setData] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const geo = await axios.get("https://nominatim.openstreetmap.org/search", {
      params: { q: form.location, format: "json", limit: 1 },
    });
    const { lat, lon } = geo.data[0];
    const [year, month, day] = form.date.split("-").map(Number);
    const [hour, min] = form.time.split(":").map(Number);
    const res = await axios.post("http://localhost:5000/planets", {
      year,
      month,
      day,
      hour,
      min,
      sec: 0,
      lat,
      lon,
      tzone: -(new Date().getTimezoneOffset() / 60),
    });
    setData(res.data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          required
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <input
          type="time"
          name="time"
          required
          onChange={(e) => setForm({ ...form, time: e.target.value })}
        />
        <input
          type="text"
          name="location"
          placeholder="City, Country"
          required
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />
        <button type="submit">Calculate</button>
      </form>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
