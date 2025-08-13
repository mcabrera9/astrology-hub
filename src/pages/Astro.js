import "../App.css";
import SunSignCalculator from "../components/SunSignCalculator";

export default function Astro() {
  return (
    <div className="App">
      <h1>☀️ Sun Sign Calculator</h1>
      <header className="App-header">
        <SunSignCalculator />
      </header>
    </div>
  );
}
