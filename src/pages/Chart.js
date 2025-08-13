import "../App.css";
import React, { useState } from "react";
import NatalCalculator from "../components/NatalCalculator";

export default function Chart() {
  const [data, setData] = useState(null);
  const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];

  function getSignName(signNumber) {
    // Use signNumber as zero-based index since API seems zero-based
    if (signNumber === 12) return "Pisces";
    else console.log("sign number", signNumber);
    return zodiacSigns[signNumber];
  }
  return (
    <div className="App">
      <h1>Natal chart calculator</h1>
      <header className="App-header">
        <NatalCalculator onResult={setData} />
      </header>

      {data &&
        Object.entries(data.planets.output[1])
          .filter(
            ([planet, details]) =>
              planet !== "Rahu" && details.current_sign !== undefined
          )
          .map(([planet, details]) => {
            console.log(
              planet,
              details.current_sign,
              getSignName(details.current_sign)
            ); // log each planet and sign
            return (
              <div key={planet}>
                <strong>{planet}:</strong> {getSignName(details.current_sign)}
              </div>
            );
          })}
    </div>
  );
}
