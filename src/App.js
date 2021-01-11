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
                                "sync": false,
                                "speed": 100
                            },
                            "value": "#00f"
                        },
                        "links": {
                            "color": "random",
                            "enable": true,
                            "distance": 150
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
                              "factor": 1000
                            },
                            "limit": 0,
                            "value": 40
                          },
                        "opacity": {
                            "animation": {
                                "enable": true,
                                "minimumValue": 0.3,
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
                                "minimumValue": 1,
                                "speed": 3
                            },
                            "value": 4,
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
