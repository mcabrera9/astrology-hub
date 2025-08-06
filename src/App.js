import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import { Astro, CounterPage, TodoPage } from './pages';
import Home from './Home';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/astro" element={<Astro />} />
          <Route path="/counterpage" element={<CounterPage />} />
          <Route path="/todopage" element={<TodoPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
