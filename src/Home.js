import React, { useState } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import SunSignCalculator from './SunSignCalculator';
import Todolist from './Todo';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome home! This site is a testing ground for a variety of React applications.
      </header>
    </div>
  );
}

export default Home;
