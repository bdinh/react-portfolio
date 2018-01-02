import React, { Component } from 'react';
import './App.css';
import './include/bootstrap';
// import FontAwesome from 'react-fontawesome';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
import Landing from './components/landing';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Landing
                    headerText={"Software Developer & Photographer"}
                    subheaderText={"Whether it's in my code or my photos,\n" +
                    "                    attention to detail is what I always strive for."}
                />
                <div>
                    <p>Projects</p>
                    <div className="project-container">
                        <div className="project">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
