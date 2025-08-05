import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Astro from './pages/Astro';
import Home from './Home';
import Counter from './Counter';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/astro" element={<Astro />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
