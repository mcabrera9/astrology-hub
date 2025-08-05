import React, { useState } from 'react';
import './App.css';
import SunSignCalculator from './SunSignCalculator';

function Astro() {
    return (
        <div className="App">
            <header className="App-header">
                Astro page
                <SunSignCalculator />
            </header>
        </div>
    )
}

export default Astro;