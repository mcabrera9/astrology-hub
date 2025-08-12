import React, { useState } from 'react';

const getSunSign = (month, day) => {
  const signs = [
    { name: 'Capricorn', start: [12, 22], end: [1, 19] },
    { name: 'Aquarius', start: [1, 20], end: [2, 18] },
    { name: 'Pisces', start: [2, 19], end: [3, 20] },
    { name: 'Aries', start: [3, 21], end: [4, 19] },
    { name: 'Taurus', start: [4, 20], end: [5, 20] },
    { name: 'Gemini', start: [5, 21], end: [6, 20] },
    { name: 'Cancer', start: [6, 21], end: [7, 22] },
    { name: 'Leo', start: [7, 23], end: [8, 22] },
    { name: 'Virgo', start: [8, 23], end: [9, 22] },
    { name: 'Libra', start: [9, 23], end: [10, 22] },
    { name: 'Scorpio', start: [10, 23], end: [11, 21] },
    { name: 'Sagittarius', start: [11, 22], end: [12, 21] },
  ];

  for (const sign of signs) {
    const [startMonth, startDay] = sign.start;
    const [endMonth, endDay] = sign.end;

    if (
      (month === startMonth && day >= startDay) ||
      (month === endMonth && day <= endDay)
    ) {
      return sign.name;
    }
  }

  return 'Unknown';
};

const SunSignCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [sunSign, setSunSign] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!birthDate) return;

    const date = new Date(birthDate);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const sign = getSunSign(month, day);
    setSunSign(sign);
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20, fontFamily: 'sans-serif' }}>
      <h2>☀️ Sun Sign Calculator</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your birthday:
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
            style={{ display: 'block', marginTop: 10 }}
          />
        </label>
        <button type="submit" style={{ marginTop: 15 }}>
          Calculate Sun Sign
        </button>
      </form>

      {sunSign && (
        <div style={{ marginTop: 20, fontSize: '1.2em' }}>
          🌟 Your Sun Sign is: <strong>{sunSign}</strong>
        </div>
      )}
    </div>
  );
};

export default SunSignCalculator;
