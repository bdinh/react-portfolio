import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Landing from '../components/landing';
import About from '../components/about';
import Qualifications from '../components/qualifications';
import Footer from '../components/footer';


export default class AboutView extends Component {
    render() {

        const {
            navbar,
            landing,
            about,
            qualifications,
            footer
        } = this.props;

        return (
            <div className="about-view">
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
            {
                landing ?
                    (
                        <Landing
                            headerText={landing.headerText}
                            subheaderText={landing.subheaderText}

                        />
                    )
                    :
                    (
                        ""
                    )
            }
            {
                about ?
                    (
                        <About
                            profileImage={about.profileImage}
                            aboutHeader={"About Header"}
                            aboutText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Phasellus dapibus non nunc ut scelerisque. Aliquam vitae lectus eu eros pulvinar " +
                            "scelerisque et quis orci. Cras rutrum arcu ligula, non rutrum ex hendrerit quis." +
                            " Duis egestas placerat lacinia. Orci varius natoque penatibus et magnis dis" +
                            " parturient montes, nascetur ridiculus mus. Proin erat arcu, viverra vel nisl quis," +
                            " placerat eleifend ex. Mauris vel ante tempus, auctor lectus vitae, viverra ante." +
                            " Aliquam porta, nibh id sagittis mattis, quam nisl fringilla odio, id varius felis " +
                            "nisl a ante. Cras efficitur odio nec magna viverra tincidunt."}
                            iconSet={[
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
                            ]}
                        />
                    )
                    :
                    (
                        ""
                    )
            }
                {
                    qualifications ?
                        (
                            <Qualifications
                                skillSet={[
                                    {
                                        name: "Skill 1",
                                        proficiency: "85%"
                                    },
                                    {
                                        name: "Skill 2",
                                        proficiency: "85%"
                                    },
                                    {
                                        name: "Skill 3",
                                        proficiency: "85%"
                                    },
                                    {
                                        name: "Skill 4",
                                        proficiency: "85%"
                                    },

                                ]}/>
                        )
                        :
                        (
                            ""
                        )
                }



            </div>
        )
    }


}