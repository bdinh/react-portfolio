
import React, { Component } from 'react';
import Navbar from '../components/Navbar';

export default class AboutView extends Component {


    handleHover

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
                <div className="experience-section container">
                    <div className="navbar-format">
                    </div>
                    <div className="experience-header">
                        <h2>Experience</h2>
                    </div>
                    <div className="experience-container row">
                        <div className="col-md-6 experience-item">
                            <div className="card content">
                                <div className="content-overlay"/>
                                <img className="card-img-top content-image" src="./images/ihme.png" alt="Card image cap"/>
                                <div className="content-details fadeIn-bottom">
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
                    <div className="navbar-format">

                    </div>
                </div>


            </div>
        )


    }

}
