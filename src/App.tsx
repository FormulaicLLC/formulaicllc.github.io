import React from 'react';
import Particles from "react-tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles";

function App() {
    return (
        <div className="App">
            <Particles options={particlesOptions as ISourceOptions}/>
            <CompanyInfo />
        </div>
    );
}

const CompanyInfo = () => (
    <div id="companyInfo">
        <div>
            <h1>Formulaic</h1>
            <p>Cloud Solutions</p>
        </div>
    </div>
  );

export default App;
