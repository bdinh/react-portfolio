
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Landing from '../components/landing';
import '../css/experience.css';

// TODO: Refactor Code and add prop constraints
export default class WorkView extends Component {

    render() {

        const {
            navbar,
            footer,
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
                <Landing
                        headerText="Software Engineer"
                        subheaderText={"I'm a student at the University of Washington studying" +
                        "<a class='remove-link-css' href='https://ischool.uw.edu/programs/informatics'> Informatics</a>. " +
                        "Currently I'm a teaching assistant for the <a class='remove-link-css' href='https://ischool.uw.edu'>Information School</a>. " +
                        "Previously interned at the <a class='remove-link-css' href='http://www.healthdata.org/'> Institute for Health Metrics and Evaluation</a>."}
                />
                <div className="experience-section">
                    <div className="container">
                    <div className="experience-header">
                        <h2>Experience</h2>
                    </div>
                    </div>
                    <div className={"container experience-section-container"}>
                        <div className="experience-container row">
                            <Experience
                                title="Teaching Assistant"
                                date="Sept. 2018 - Present"
                                organization={{
                                    name: "University of Washington Information School - INFO 441",
                                    link: "https://github.com/info441",
                                    source: "./images/ischool-linear-gradient.png"
                                }}
                                bullet={[
                                    "Responsible for teaching students about server-side development by means of building a sophisticated full-stack web application. Concepts covered include communication protocols, REST, containerization, in-memory data stores, Microservices and asynchronous messaging.",
                                ]}
                                technologies={"Golang, Node.js, Python, Docker, EC2, Redis, RabbitMQ, Websockets, MySQL, MongoDB"}
                            />
                            <Experience
                                title="SDE Intern"
                                date="June - Aug. 2017"
                                organization={{
                                    name: "Institute for Health Metrics and Evaluation",
                                    link: "http://www.healthdata.org/",
                                    source: "./images/ihme.png"
                                }}
                                bullet={[
                                    "Implemented reusable React UI components for internal visualization library used to refactor the existing codebase as well as standardize future visualization development.",
                                    "Utilized implemented components to refactor an existing visualization in production in order to create documentation for future development."
                                ]}
                                technologies={"React, D3, Chai, Enzyme, Git Version Control"}
                            />
                            <Experience
                                title="Teaching Assistant"
                                date="March 2017 - June 2018"
                                organization={{
                                    name: "University of Washington Information School - INFO 201",
                                    link: "https://github.com/info201a-au17",
                                    source: "./images/ischool-linear-gradient.png"
                                }}
                                bullet={[
                                    "Teach undergraduate students technologies\n" +
                                    "(R, CLI, Git, APIs) that serves as a technical\n" +
                                    "foundation for them to build upon as they continue to\n" +
                                    "develop more technical skills.",
                                    "Responsibilities include, writing programming exercises,\n" +
                                    "creating lab presentations, and performing programming demos."
                                ]}
                                technologies={"R, CLI, Git, APIs, Shiny"}
                            />
                        </div>
                        <div className="navbar-spacing"/>
                    </div>
                </div>

                <div className="project-section container">
                    <div className="experience-header">
                        <h2>Projects</h2>
                    </div>
                    <div className="experience-container row">
                        <Project
                            title="Shift 2 Go (Capstone)"
                            description="Platform that facilitates the marketplace for businesses to connect with on-demand service workers."
                            image="./images/waba.png"
                            // sourceCode="https://github.com/bdinh/ecosnap"
                            unfinished="Software is proprietary. Feel free to reach out to me if you're interested in what my team and I are building. We'd love to discuss it with you."
                        />
                        <Project
                            title="EcoSnap"
                            description="Environmentally conscious Android application that utilizes Deep Learning to classify whether an object is recyclable or non-recyclable."
                            image="./images/ecosnap.png"
                            sourceCode="https://github.com/bdinh/ecosnap"
                        />
                        <Project
                            title="Visualize Your History"
                            description="Chrome extension written in Typescript with TSX that visualizes the user's browsing history."
                            image="./images/history-visualizer.png"
                            sourceCode="https://github.com/bdinh/visualize-history-extension"
                        />
                        <Project
                            title="react-build-portfolio"
                            description="Stateless React Components library for building portfolios."
                            image="/images/react-build-portfolio.png"
                            sourceCode="https://github.com/bdinh/react-build-portfolio"
                            unfinished
                        />
                        <Project
                            title="Tic-Tac-Toe"
                            description="A simple interactive game of Tic-Tac-Toe,
                            supplemented with a brief explanation to game-theory."
                            image="./images/tic-tac-toe.png"
                            sourceCode="https://github.com/bdinh/tic-tac-toe"
                            liveSite="https://bdinh.github.io/tic-tac-toe/about.html"
                        />
                        <Project
                            title="Tweetalytics"
                            description={"Interactive web application that that utilizes\n" +
                            "Twitter's Rest API " +
                            "to create a visualization dashboard showing relevant tweet engagement statistics."}
                            image="./images/tweetalytics.png"
                            sourceCode="https://github.com/bdinh/tweetalytics"
                            liveSite="https://bdinh.github.io/tweetalytics/"
                        />
                        <Project
                            title="Slack Rebuilt"
                            description="React application that utilizes routers and Firebase to
                            create a single-page messaging application that resembles that of Slack"
                            image="./images/slack-application.png"
                            sourceCode="https://github.com/bdinh/slack-application"
                            liveSite="https://bdinh.github.io/slack-application/login"
                        />
                        <Project
                            title="Reinforcement Learning"
                            description="Python scripts that attempts to formulate and solve a 2x2 rubik's cube using
                            reinforcement learning."
                            image="./images/rubiks-cube.jpg"
                            sourceCode="https://github.com/bdinh/rubiks-cube"
                        />
                        <Project
                            title="C Memory Manager"
                            description="Memory management package that has the same
                            functionality as the standard library malloc and free functions."
                            image="./images/c-logo.png"
                            sourceCode="https://github.com/bdinh/memory-management"
                        />
                    </div>
                </div>
                <div className="navbar-spacing"/>
                <div style={{backgroundColor: "#EDEEF0"}}>
                <Footer
                    socialAccounts={footer.socialAccounts}
                    copyrightText={footer.copyrightText}
                />
                </div>
            </div>
        )


    }

}


class Experience extends Component {

    render() {

        const {
            title,
            date,
            organization,
            bullet,
            technologies
        } = this.props;

        return (
            <div className="col-md-4 experience-item">
                <div className="card content">
                    <div className="content-overlay"/>
                    <img className="card-img-top content-image" src={organization.source} alt="Card image cap"/>
                    <div className="content-details experience-detail fadeIn-bottom">
                        <div className="row">
                            <div className="col-6">
                                <p className="content-title">{title}</p>
                            </div>
                            <div className="col-6">
                                <p className="content-date">{date}</p>
                            </div>
                        </div>
                        <a className="remove-link-css"
                           href={organization.link}>{organization.name}</a>
                        <div className="content-text">
                            <ul>
                                {
                                    bullet.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))
                                }
                            </ul>
                            <div className={"technologies-leveraged-container"}>
                                <p>{"Technologies Leveraged: " + technologies}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Project extends Component {

    render() {

        const {
            title,
            description,
            image,
            sourceCode,
            liveSite,
            unfinished,
        } = this.props;

        return (
            <div className="col-md-4 project-item">
                <div className="card content">
                    <div className="content-overlay"/>
                    <img className="card-img-top content-image" src={image} alt="Card image cap"/>
                    <div className="experience-content-details fadeIn-bottom">
                        <p className="experience-content-title">{title}</p>
                        <div className="content-text experience-content-text">
                            <p>{description}</p>
                            {
                                sourceCode ? <a className="remove-link-css"
                                                href={sourceCode}>Source Code</a> : ""
                            }

                            <br/>
                            {
                                unfinished ?
                                    (
                                        <p className={"unfinished"}>{unfinished}</p>
                                    )
                                :
                                    (
                                        ""
                                    )
                            }
                            {
                                liveSite ?
                                    (
                                        <a className="remove-link-css"
                                           href={liveSite}>
                                            Live Site
                                        </a>
                                    )
                                    :
                                    (
                                        ""
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
