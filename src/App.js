import './App.css';
import Particles from 'react-particles-js';
import CorpInfo from './components/CorpInfo.js';

function App() {

        return (
            <div className="App">
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Texturina:wght@600&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Piazzolla:wght@600&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600&display=swap" rel="stylesheet" />
                <Particles params={{
                    "background": {
                        "color": "#000"
                    },
                    "detectRetina": true,
                    "fpsLimit": 60,
            	    "particles": {
                        "color": {
                            "animation": {
                                "enable": true,
                                "sync": true,
                                "speed": 100
                            },
                            "value": "#ffffff"
                        },
                        "links": {
                            "color": "#126CFD",
                            "enable": true,
                            "distance": 300
                        },
                        "collisions": {
                            "enable": true
                        },
                        "move": {
                            "enable": true
                        },
                        "number": {
                            "density": {
                              "enable": true,
                              "area": 800,
                              "factor": 1250
                            },
                            "limit": 0,
                            "value": 40
                          },
                        "opacity": {
                            "animation": {
                                "enable": true,
                                "minimumValue": 0.1,
                                "speed": 0.5
                            },
                            "value": 0.8,
                            "random": {
                                "enable": true,
                                "minimumValue": 0.3
                            }
                        },
                        "size": {
                            "animation": {
                                "enable": true,
                                "minimumValue": .5,
                                "speed": 3
                            },
                            "value": 2,
                            "random": {
                                "enable": true,
                                "minimumValue": 1
                            }
                        }
            	    }
            	}}/>
                <CorpInfo />
            </div>
        );
}

export default App;
