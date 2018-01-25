import React, { Component } from 'react';
import './App.css';
import AboutView from './views/AboutView';
import WorkView from './views/WorkView';
import PhotoView from './views/PhotoView';
import { Switch, Route } from 'react-router-dom'
import './include/bootstrap';



class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route
                        path="/" exact render={(routerProps) => (
                        <WorkView
                            navbar={{
                                navbarBrand: "baohdinh",
                                navbarLinks: [
                                    {
                                        name: "Work",
                                        link: "/"
                                    },
                                    {
                                        name: "About",
                                        link: "/about"
                                    },
                                ]
                            }}
                            footer={{
                                socialAccounts: [
                                    {
                                        name: "facebook",
                                        link: "https://www.facebook.com/baodinh96",
                                    },
                                    {
                                        name: "instagram",
                                        link: "https://www.instagram.com/baohdinh/",
                                    },
                                    {
                                        name: "github",
                                        link: "https://github.com/bdinh",
                                    },
                                    {
                                        name: "linkedin",
                                        link: "https://www.linkedin.com/in/baohdinh/",
                                    }
                                ],
                                copyrightText: "Made with <span class='heart'> &hearts; </span> in Seattle <br/> &copy; 2018 &middot; Bao Dinh "
                            }}
                        />
                    )
                    }/>
                    <Route
                        path="/work" render={(routerProps) => (
                            <WorkView
                            navbar={{
                                navbarBrand: "baohdinh",
                                navbarLinks: [
                                    {
                                        name: "Work",
                                        link: "/"
                                    },
                                    {
                                        name: "About",
                                        link: "/about"
                                    },
                                ]
                            }}
                            footer={{
                                socialAccounts: [
                                    {
                                        name: "facebook",
                                        link: "https://www.facebook.com/baodinh96",
                                    },
                                    {
                                        name: "instagram",
                                        link: "https://www.instagram.com/baohdinh/",
                                    },
                                    {
                                        name: "github",
                                        link: "https://github.com/bdinh",
                                    },
                                    {
                                        name: "linkedin",
                                        link: "https://www.linkedin.com/in/baohdinh/",
                                    }
                                ],
                                copyrightText: "Made with <span class='heart'> &hearts; </span> in Seattle &middot; Bao Dinh &middot; 2018"
                            }}
                        />
                        )
                    }/>
                    <Route
                        path="/about" render={(routerProps) => (
                        <AboutView
                            navbar={{
                                navbarBrand: "baohdinh",
                                navbarLinks: [
                                    {
                                        name: "Work",
                                        link: "/"
                                    },
                                    {
                                        name: "About",
                                        link: "/about"
                                    },
                                ]
                            }}
                            about={{
                                profileImage: "./images/profile-picture.JPG",
                                aboutHeader: "Bao Dinh",
                                aboutText: ["Hi there! I'm Bao, a Junior\n" +
                                "at the University of Washington in Seattle, studying Informatics. " +
                                "I enjoy developing tools for the web, especially those that have to do\n" +
                                "with visualizations. Long term, I hope to work on tools that help ease the\n" +
                                "process of developing visual content.",
                                "While I'm not working, you can find me trying out new cooking recipes, reading " +
                                "or wandering the streets of Seattle taking <a class='emphasize-link' href='/photographs'>photos.</a>" +
                                " I'm currently rereading <span class='italicize'>Island</span> by Aldous Huxley. I recently finished " +
                                "<span class='italicize'>When Breath Becomes Air</span> by Paul Kalanithi. If you've been looking " +
                                "for a book to read, I highly recommend Kalanithi's memoir.",
                                "Feel free to reach out and get in touch - <a class='emphasize-link' href='mailto:baodinh96@gmail.com?Subject=Hi%20Bao!'>baodinh96@gmail.com</a>"
                                ],
                                iconSet: [
                                    {
                                        name: "Computer Code",
                                        src: "./svg/Coding-Html.svg"
                                    },
                                    {
                                        name: "Analytics",
                                        src: "./svg/Analytics.svg"
                                    },
                                    {
                                        name: "Stop Watch",
                                        src: "./svg/Heart-Watch.svg"
                                    },
                                    {
                                        name: "Vector",
                                        src: "./svg/Vector.svg"
                                    },
                                    {
                                        name: "Camera",
                                        src: "./svg/Camera-Front.svg"
                                    },{
                                        name: "Photographs",
                                        src: "./svg/Images.svg"
                                    }
                                ]
                            }}
                            qualifications={{
                                skillHeader: "What Can I Do?",
                                skillSubheader: "Development",
                                skillSet: [
                                    {
                                        name: "Java",
                                        proficiency: "80%"
                                    },
                                    {
                                        name: "Python",
                                        proficiency: "75%"
                                    },
                                    {
                                        name: "R",
                                        proficiency: "85%"
                                    },
                                    {
                                        name: "JavaScript",
                                        proficiency: "85%"
                                    },
                                    {
                                        name: "ReactJS",
                                        proficiency: "88%"
                                    },
                                    {
                                        name: "D3",
                                        proficiency: "80%"
                                    },
                                    {
                                        name: "Git Version Control",
                                        proficiency: "90%"
                                    },
                                    {
                                        name: "Node.js",
                                        proficiency: "75%"
                                    },
                                    {
                                        name: "PHP",
                                        proficiency: "75%"
                                    },
                                    {
                                        name: "Shell Scripting",
                                        proficiency: "80%"
                                    }],
                                courses: [
                                    {
                                        name: "CSE 373: Data Structures & Algorithm",
                                        link: "https://www.washington.edu/students/crscat/cse.html#cse373"
                                    },
                                    {
                                        name: "CSE 374: Intermediate Programming Concepts and Tools",
                                        link: "https://www.washington.edu/students/crscat/cse.html#cse374"
                                    },
                                    {
                                        name: "CSE 415: Introduction to Artificial Intelligence",
                                        link: "https://www.washington.edu/students/crscat/cse.html#cse415"
                                    },
                                    {
                                        name: "INFO 340: Introduction to Relational Database Management Systems",
                                        link: "https://www.washington.edu/students/crscat/info.html#info340"
                                    },
                                    {
                                        name: "INFO 343: Client-Side Web Development",
                                        link: "https://www.washington.edu/students/crscat/info.html#info343"
                                    },
                                    {
                                        name: "INFO 498 B: Software Architecture: Analysis and Applications",
                                        link: "https://ischool.uw.edu/programs/informatics/curriculum/special-topics"
                                    },
                                ],
                            }}
                            footer={{
                                socialAccounts: [
                                    {
                                        name: "facebook",
                                        link: "https://www.facebook.com/baodinh96",
                                    },
                                    {
                                        name: "instagram",
                                        link: "https://www.instagram.com/baohdinh/",
                                    },
                                    {
                                        name: "github",
                                        link: "https://github.com/bdinh",
                                    },
                                    {
                                        name: "linkedin",
                                        link: "https://www.linkedin.com/in/baohdinh/",
                                    }
                                ],
                                copyrightText: "Made with <span class='heart'> &hearts; </span> in Seattle &middot; Bao Dinh &middot; 2018"

                            }}
                        />
                    )
                    }/>
                    <Route
                        path="/photographs" render={(routerProps) => (
                            <PhotoView
                                pictureArray={[
                                    {
                                        name: "Buildings in Seattle from the pier",
                                        source: "./images/seattle-pier.jpg"
                                    },
                                    {
                                        name: "Seagull on a table",
                                        source: "./images/seagull-table.jpg"
                                    },
                                    {
                                        name: "Men sitting on a bench",
                                        source: "./images/bench-shot.jpg"
                                    },
                                    {
                                        name: "Man dressed up as Spiderman",
                                        source: "./images/spiderman.jpg"
                                    },
                                    {
                                        name: "Man playing the piano",
                                        source: "./images/piano-performer.jpg"
                                    },
                                    {
                                        name: "Man playing grand finale of song on piano",
                                        source: "./images/grand-finale.jpg"
                                    },
                                    {
                                        name: "Pike Place Market",
                                        source: "./images/pike-place.jpg"
                                    },
                                    {
                                        name: "Seattle Ferris Wheel",
                                        source: "./images/ferris-wheel.jpg"
                                    },
                                    {
                                        name: "Drummers Marching in Seattle",
                                        source: "./images/nordstrom-drummers.jpg"
                                    },
                                    {
                                        name: "People marching in Pride Parade",
                                        source: "./images/planned-parenthood.jpg"
                                    },
                                    {
                                        name: "Whole Food's food truck for Pride Parade",
                                        source: "./images/whole-foods.jpg"
                                    },
                                    {
                                        name: "Man cutting a fruit",
                                        source: "./images/sam-cutting-fruits.jpg"
                                    }
                                ]}

                            />
                    )}
                    />
                </Switch>
            </div>
        );
    }
}

export default App;
