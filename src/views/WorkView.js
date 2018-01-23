
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

export default class WorkView extends Component {

    render() {

        const {
            navbar,
            landing,
            about,
            qualifications,
            footer
        } = this.props;

        return (
            <div className="work-view">
                {
                    navbar ?
                        (
                            <Navbar
                                navbarBrand={navbar.navbarBrand}
                                navbarLinks={navbar.navbarLinks}
                            />
                        )
                        :
                        (
                            ""
                        )
                }
                <div className="experience-section">
                    <div className="container">
                    <div className="navbar-spacing">
                    </div>
                    <div className="experience-header">
                        <h2>Experience</h2>
                    </div>
                    <div className="experience-container row">
                        <div className="col-md-6 experience-item">
                            <div className="card content">
                                <div className="content-overlay"/>
                                <img className="card-img-top content-image" src="./images/ihme.png" alt="Card image cap"/>
                                <div className="content-details experience-detail fadeIn-bottom">
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="content-title">SDE Intern</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="content-date">June - August 2017</p>
                                        </div>
                                    </div>
                                    <a className="remove-link-css"
                                       href="http://www.healthdata.org/">Institute for Health Metrics and Evaluation</a>
                                    <div className="content-text">
                                        <ul>
                                            <li>
                                                Designed and implemented reusable React components used for the refactoring of visualization codebase.
                                            </li>
                                            <li>
                                                Worked in a Scrum framework in order to complete objectives to carryout deliverables.                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 experience-item">
                            <div className="card content">
                                <div className="content-overlay"/>
                                <img className="card-img-top content-image" src="./images/ischool-linear-gradient.png" alt="Card image cap"/>
                                <div className="content-details fadeIn-bottom">
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="content-title">Teaching Assistant</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="content-date">March 2017 - Present</p>
                                        </div>
                                    </div>
                                    <a className="remove-link-css"
                                       href="https://ischool.uw.edu/">University of Washington Information School</a>
                                    <div className="content-text">
                                        <ul>
                                            <li>
                                                Teach undergraduate students technologies
                                                (R, CLI, Git, APIs) that serves as a technical
                                                foundation for them to build upon as they continue to
                                                develop more technical skills.</li>
                                            <li>
                                                Responsibilities include, writing programming exercises,
                                                creating lab presentations, and performing programming demos.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-spacing"/>
                </div>
                </div>

                <div className="project-section container">
                    <div className="experience-header">
                        <h2>Projects</h2>
                    </div>
                    <div className="experience-container row">
                        <div className="col-md-4 project-item">
                            <div className="card content">
                                <div className="content-overlay"/>
                                <img className="card-img-top content-image" src="./images/react-build-portfolio.png" alt="Card image cap"/>
                                <div className="experience-content-details fadeIn-bottom">
                                    <p className="experience-content-title">react-build-portfolio</p>
                                    <div className="content-text experience-content-text">
                                        <p>Stateless React Components library for building portfolios.</p>
                                        <a className="remove-link-css"
                                        href="https://github.com/bdinh/react-build-portfolio">Source Code</a>
                                        <p>*Work currently in progress</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 project-item">
                            <div className="card content">
                                <div className="content-overlay"/>
                                <img className="card-img-top content-image" src="./images/tic-tac-toe.png" alt="Card image cap"/>
                                <div className="experience-content-details fadeIn-bottom">
                                    <p className="experience-content-title">Tic-Tac-Toe</p>
                                    <div className="content-text experience-content-text">
                                        <p>A simple interactive game of Tic-Tac-Toe,
                                            supplemented with a brief explanation to game-theory.
                                        </p>
                                        <a className="remove-link-css"
                                           href="https://github.com/bdinh/tic-tac-toe">Source Code</a>
                                        <br/>
                                        <a className="remove-link-css"
                                           href="https://bdinh.github.io/tic-tac-toe/about.html">Live Site</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 project-item">
                            <div className="card content">
                                <div className="content-overlay"/>
                                <img className="card-img-top content-image" src="./images/tweetalytics.png" alt="Card image cap"/>
                                <div className="experience-content-details fadeIn-bottom">
                                    <p className="experience-content-title">Tweetalytics</p>
                                    <div className="content-text experience-content-text">
                                        <p>Interactive web application that that utilizes
                                            <a className="remove-link-css" href="https://developer.twitter.com/en/docs/tweets/post-and-engage/overview"> Twitter's Rest API </a>
                                            to create a visualization dashboard showing relevant tweet engagement statistics.
                                        </p>
                                        <a className="remove-link-css"
                                           href="https://github.com/bdinh/tweetalytics">Source Code</a>
                                        <br/>
                                        <a className="remove-link-css"
                                           href="https://bdinh.github.io/tweetalytics/">Live Site</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 project-item">
                            <div className="card content">
                                <div className="content-overlay"/>
                                <img className="card-img-top content-image" src="./images/slack-application.png" alt="Card image cap"/>
                                <div className="experience-content-details fadeIn-bottom">
                                    <p className="experience-content-title">Slack Rebuilt</p>
                                    <div className="content-text experience-content-text">
                                        <p>React application that utilizes routers and Firebase to
                                            create a single-page messaging application that resembles that of
                                            <a  className="remove-link-css" href="https://slack.com/"> Slack.</a>
                                        </p>
                                        <a className="remove-link-css"
                                           href="https://github.com/bdinh/tweetalytics">Source Code</a>
                                        <br/>
                                        <a className="remove-link-css"
                                           href="https://bdinh.github.io/tweetalytics/">Live Site</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 project-item">
                            <div className="card content">
                                <div className="content-overlay"/>
                                <img className="card-img-top content-image" src="./images/rubiks-cube.jpg" alt="Card image cap"/>
                                <div className="experience-content-details fadeIn-bottom">
                                    <p className="experience-content-title">Reinforcement Learning</p>
                                    <div className="content-text experience-content-text">
                                        <p>Python scripts that attempts to formulate and solve a 2x2 rubik's cube using
                                            reinforcement learning.
                                        </p>
                                        <a className="remove-link-css"
                                           href="https://github.com/bdinh/rubiks-cube">Source Code</a>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 project-item">
                            <div className="card content">
                                <div className="content-overlay"/>
                                <img className="card-img-top content-image" src="./images/c-logo.png" alt="Card image cap"/>
                                <div className="experience-content-details fadeIn-bottom">
                                    <p className="experience-content-title">Reinforcement Learning</p>
                                    <div className="content-text experience-content-text">
                                        <p>Python scripts that attempts to formulate and solve a 2x2 rubik's cube using
                                            reinforcement learning.
                                        </p>
                                        <a className="remove-link-css"
                                           href="https://github.com/bdinh/rubiks-cube">Source Code</a>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-spacing"/>
                <div style={{backgroundColor: "#EDEEF0"}}>
                <Footer
                    socialAccounts={footer.socialAccounts}
                />
                </div>
            </div>
        )


    }

}
