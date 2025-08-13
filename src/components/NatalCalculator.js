import React, { useState } from "react";
import api from "../api";

export default function NatalChartCalculator({ onResult }) {
  const [form, setForm] = useState({
    date: "",
    time: "",
    // no location in state anymore
  });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Hardcode location here when sending
      const payload = {
        ...form,
        location: "Chicago, USA",
      };
      const res = await api.post("/api/natal", payload);

      console.log("API response:", res.data);

      onResult(res.data);
    } catch (err) {
      alert("Failed to fetch data. See console.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "grid", gap: 12, maxWidth: 320 }}
    >
      <label>
        Date of birth:
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={onChange}
          required
        />
      </label>
      <label>
        Time of birth:
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={onChange}
          required
        />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? "Calculating..." : "Calculate"}
      </button>
    </form>
  );
}
