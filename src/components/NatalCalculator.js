import React, { useState } from "react";
import api from "../api";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

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
      // hardcode location here when sending
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
    <Stack
      direction="column"
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
      spacing={2}
    >
      <Box>Calculate natal charts for Chicago residents.</Box>
      <form
        onSubmit={onSubmit}
        style={{ display: "grid", gap: 12, maxWidth: 320 }}
      >
        <Stack direction="row" spacing={1}>
          <Box>Date of birth:</Box>
          <TextField
            type="date"
            name="date"
            value={form.date}
            onChange={onChange}
            required
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Box>Time of birth:</Box>
          <TextField
            type="time"
            name="time"
            value={form.time}
            onChange={onChange}
            required
          />
        </Stack>
        <Button variant="contained" type="submit" disabled={loading}>
          {loading ? "Calculating..." : "Calculate"}
        </Button>
      </form>
    </Stack>
  );
}
