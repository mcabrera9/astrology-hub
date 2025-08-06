import '../App.css';
import SunSignCalculator from '../SunSignCalculator';

export default function Astro() {
//  WIP - natal chart calculator    
// const [form, setForm] = useState({
//     date: '',
//     time: '',
//     location: '',
//   });
//   const [chartData, setChartData] = useState(null);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // 1. Convert location to lat/lng
//     const geoRes = await axios.get(`https://nominatim.openstreetmap.org/search`, {
//       params: {
//         q: form.location,
//         format: 'json',
//         limit: 1,
//       }
//     });

//     const { lat, lon } = geoRes.data[0];

//     const astroRes = await axios.post('https://your-astro-api.com/calculate', {
//       date: form.date,
//       time: form.time,
//       latitude: lat,
//       longitude: lon,
//     });

//     setChartData(astroRes.data); // Should contain planet positions, houses, etc.
//   };
    return (
        <div className="App">
            <header className="App-header">
                Astro page
                <SunSignCalculator />
        {/* WIP
        <p>
          Natal chart calculator
        </p>
        <form className="space-y-4">
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          requiredclassName="w-full border p-2 rounded"
          />
          <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="City, Country"
          required
          className="w-full border p-2 rounded"
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Calculate Natal Chart
        </button>
      </form>
      <button>Click here to generate natal chart</button> */}
            </header>
        </div>
    )
}