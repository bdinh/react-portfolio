import React, { Component } from 'react';
import './App.css';
import './include/bootstrap';
import FontAwesome from 'react-fontawesome';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="landing-strip">
                    <p className="landing-header">Software Developer & Photographer</p>
                    <p className="landing-subheader">
                        Whether it's in my code or my photos,
                        attention to detail is what I always strive for.
                    </p>
                    <div className="page-scroll">
                        <a className="page-scroll-text" href="#">
                            Learn More
                            <br/>
                            <FontAwesome
                                name="chevron-down"
                            />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
