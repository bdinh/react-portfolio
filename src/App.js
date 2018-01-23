import React, { Component } from 'react';
import './App.css';
import AboutView from './views/AboutView';
import WorkView from './views/WorkView';
import { Switch, Route } from 'react-router-dom'
import { Document } from 'react-pdf';


class App extends Component {
    render() {

        console.log("hello");

        return (
            <div className="App">
                <Switch>
                    <Route
                        path="/" exact render={(routerProps) => (
                            <AboutView
                            navbar={{
                                navbarBrand: "@baohdinh",
                                navbarLinks: [
                                    {
                                        name: "About",
                                        link:  "/"
                                    },
                                    {
                                        name: "Work",
                                        link:  "/work"
                                    },
                                    {
                                        name: "Photography",
                                        link:  "/photo"
                                    },
                                ]
                            }}
                            landing={{
                                headerText: "Software Developer x Photographer",
                                subheaderText: "Whether it's in my code or my photos, " +
                                "attention to detail is what I always strive for"
                            }}
                            about={{
                                profileImage: "./images/profile-picture.JPG",
                                aboutHeader: "Bao Dinh",
                                aboutText: "My name is Bao and I am currently a Junior\n" +
                                "                                at the University of Washington studying Informatics with an emphasis on Data\n" +
                                "                                Science. I love developing tools for the web, especially those that have to do\n" +
                                "                                with Data Visualization. Long term, I hope to continue to work on tools that help ease the\n" +
                                "                                process of developing visual content (Coming for you Bostock). Every data set has a story\n" +
                                "                                and I think that stories are best told through engaging visuals. I also hope to be able\n" +
                                "                                to take my skills to the population health domain to work with health data sets to design\n" +
                                "                                and engineer solutions to help forward population health. As a hobby, I enjoy\n" +
                                "                                photography, as the idea of being able to slow down time and capture experiences\n" +
                                "                                has always fascinated me.",
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
                            }}
                        />
                        )
                    }/>
                    <Route
                        path="/home" render={(routerProps) => (
                            <AboutView
                            navbar={{
                                navbarBrand: "@baohdinh",
                                navbarLinks: [
                                    {
                                        name: "About",
                                        link: "/"
                                    },
                                    {
                                        name: "Work",
                                        link: "/work"
                                    },
                                    {
                                        name: "Photography",
                                        link: "/photo"
                                    },
                                ]
                            }}
                            landing={{
                                headerText: "Software Developer x Photographer",
                                subheaderText: "Whether it's in my code or my photos, " +
                                "attention to detail is what I always strive for"
                            }}
                            about={{
                                profileImage: "./images/profile-picture.JPG",
                                aboutHeader: "Bao Dinh",
                                aboutText: "My name is Bao and I am currently a Junior\n" +
                                "                                at the University of Washington studying Informatics with an emphasis on Data\n" +
                                "                                Science. I love developing tools for the web, especially those that have to do\n" +
                                "                                with Data Visualization. Long term, I hope to continue to work on tools that help ease the\n" +
                                "                                process of developing visual content (Coming for you Bostock). Every data set has a story\n" +
                                "                                and I think that stories are best told through engaging visuals. I also hope to be able\n" +
                                "                                to take my skills to the population health domain to work with health data sets to design\n" +
                                "                                and engineer solutions to help forward population health. As a hobby, I enjoy\n" +
                                "                                photography, as the idea of being able to slow down time and capture experiences\n" +
                                "                                has always fascinated me.",
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
                                    }, {
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
                            }}
                        />
                        )
                    }/>
                    <Route
                        path="/work" render={(routerProps) => (
                            <WorkView
                            navbar={{
                                navbarBrand: "@baohdinh",
                                navbarLinks: [
                                    {
                                        name: "About",
                                        link: "/"
                                    },
                                    {
                                        name: "Work",
                                        link: "/work"
                                    },
                                    {
                                        name: "Photography",
                                        link: "/photo"
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
                            }}
                        />
                        )
                    }/>
                </Switch>
            </div>
        );
    }
}

export default App;
