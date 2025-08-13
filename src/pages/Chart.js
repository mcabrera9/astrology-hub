import "../App.css";
import React, { useState } from "react";
import NatalCalculator from "../components/NatalCalculator";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

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
      <Stack
        alignContent="center"
        direction="column"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>🪐 Natal chart calculator</h1>
        <header className="App-header">
          <NatalCalculator onResult={setData} />
        </header>
      </Stack>

      {data && (
        <Stack sx={{ p: 2, marginTop: 5, border: "1px dashed grey" }}>
          <Box>Here is your calculated natal chart.</Box>
          {Object.entries(data.planets.output[1])
            .filter(
              ([planet, details]) =>
                planet !== "Rahu" &&
                planet !== "Ketu" &&
                details.current_sign !== undefined
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
        </Stack>
      )}
    </div>
  );
}
