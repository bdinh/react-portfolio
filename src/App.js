import React, { Component } from 'react';
import './App.css';
import './include/bootstrap';
import AboutView from './views/AboutView';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AboutView
                    navbar={{
                        navbarBrand: "Branding goes here",
                        navbarLinks: [
                            {
                                name: "Page 1",
                                link:  "#about"
                            },
                            {
                                name: "Page 2",
                                link:  "page.html"
                            },
                            {
                                name: "Page 3",
                                link:  "page.html"
                            },
                        ]
                    }}
                    landing={{
                        headerText: "Landing Header",
                        subheaderText: "Landing Sub Header with Cheesy Quote"
                    }}
                    about={{
                        profileImage: "./images/profile-generic-user.png",
                        aboutHeader: "About Header",
                        aboutText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Phasellus dapibus non nunc ut scelerisque. Aliquam vitae lectus eu eros pulvinar " +
                        "scelerisque et quis orci. Cras rutrum arcu ligula, non rutrum ex hendrerit quis." +
                        " Duis egestas placerat lacinia. Orci varius natoque penatibus et magnis dis" +
                        " parturient montes, nascetur ridiculus mus. Proin erat arcu, viverra vel nisl quis," +
                        " placerat eleifend ex. Mauris vel ante tempus, auctor lectus vitae, viverra ante." +
                        " Aliquam porta, nibh id sagittis mattis, quam nisl fringilla odio, id varius felis " +
                        "nisl a ante. Cras efficitur odio nec magna viverra tincidunt.",
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
                />
                {/*<Navbar*/}
                    {/*navbarBrand={"Branding goes here"}*/}
                    {/*navbarLinks={[*/}
                        {/*{*/}
                          {/*name: "Page 1",*/}
                          {/*link:  "#about"*/}
                        {/*},*/}
                        {/*{*/}
                            {/*name: "Page 2",*/}
                            {/*link:  "page.html"*/}
                        {/*},*/}
                        {/*{*/}
                            {/*name: "Page 3",*/}
                            {/*link:  "page.html"*/}
                        {/*},*/}
                    {/*]}*/}
                {/*/>*/}
                {/*<Landing*/}
                    {/*headerText={"Landing Header"}*/}
                    {/*subheaderText={"Landing Sub Header with Cheesy Quote"}*/}

                {/*/>*/}
                {/*<About*/}
                    {/*profileImage={"./images/profile-generic-user.png"}*/}
                    {/*aboutHeader={"About Header"}*/}
                    {/*aboutText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +*/}
                    {/*"Phasellus dapibus non nunc ut scelerisque. Aliquam vitae lectus eu eros pulvinar " +*/}
                    {/*"scelerisque et quis orci. Cras rutrum arcu ligula, non rutrum ex hendrerit quis." +*/}
                    {/*" Duis egestas placerat lacinia. Orci varius natoque penatibus et magnis dis" +*/}
                    {/*" parturient montes, nascetur ridiculus mus. Proin erat arcu, viverra vel nisl quis," +*/}
                    {/*" placerat eleifend ex. Mauris vel ante tempus, auctor lectus vitae, viverra ante." +*/}
                    {/*" Aliquam porta, nibh id sagittis mattis, quam nisl fringilla odio, id varius felis " +*/}
                    {/*"nisl a ante. Cras efficitur odio nec magna viverra tincidunt."}*/}
                    {/*iconSet={[*/}
                        {/*{*/}
                            {/*name: "Computer Code",*/}
                            {/*src: "./svg/Coding-Html.svg"*/}
                        {/*},*/}
                        {/*{*/}
                            {/*name: "Analytics",*/}
                            {/*src: "./svg/Analytics.svg"*/}
                        {/*},*/}
                        {/*{*/}
                            {/*name: "Stop Watch",*/}
                            {/*src: "./svg/Heart-Watch.svg"*/}
                        {/*},*/}
                        {/*{*/}
                            {/*name: "Vector",*/}
                            {/*src: "./svg/Vector.svg"*/}
                        {/*},*/}
                        {/*{*/}
                            {/*name: "Camera",*/}
                            {/*src: "./svg/Camera-Front.svg"*/}
                        {/*},{*/}
                            {/*name: "Photographs",*/}
                            {/*src: "./svg/Images.svg"*/}
                        {/*}*/}
                    {/*]}*/}
                {/*/>*/}
                {/*<Qualifications*/}
                    {/*skillSet={[*/}
                        {/*{*/}
                            {/*name: "Skill 1",*/}
                            {/*proficiency: "85%"*/}
                        {/*},*/}
                        {/*{*/}
                            {/*name: "Skill 2",*/}
                            {/*proficiency: "85%"*/}
                        {/*},*/}
                        {/*{*/}
                            {/*name: "Skill 3",*/}
                            {/*proficiency: "85%"*/}
                        {/*},*/}
                        {/*{*/}
                            {/*name: "Skill 4",*/}
                            {/*proficiency: "85%"*/}
                        {/*},*/}

                    {/*]}*/}
                    {/*courses={[*/}
                        {/*{*/}
                            {/*name: "Course Number and Name",*/}
                            {/*link: "https://www.washington.edu/students/crscat/cse.html#cse373"*/}
                        {/*},*/}
                        {/*{*/}
                            {/*name: "Course Number and Name",*/}
                            {/*link: "https://www.washington.edu/students/crscat/cse.html#cse373"*/}
                        {/*},*/}
                        {/*{*/}
                            {/*name: "Course Number and Name",*/}
                            {/*link: "https://www.washington.edu/students/crscat/cse.html#cse373"*/}
                        {/*},*/}
                        {/*{*/}
                            {/*name: "Course Number and Name",*/}
                            {/*link: "https://www.washington.edu/students/crscat/cse.html#cse373"*/}
                        {/*},*/}
                    {/*]}*/}
                {/*/>*/}
                {/*<Footer*/}
                    {/*socialAccounts={[*/}
                        {/*{*/}
                            {/*name: "facebook",*/}
                            {/*link: "https://www.facebook.com/baodinh96",*/}
                        {/*},*/}
                        {/*{*/}
                            {/*name: "instagram",*/}
                            {/*link: "https://www.instagram.com/baohdinh/",*/}
                        {/*},*/}
                        {/*{*/}
                            {/*name: "github",*/}
                            {/*link: "https://github.com/bdinh",*/}
                        {/*},*/}
                        {/*{*/}
                            {/*name: "linkedin",*/}
                            {/*link: "https://www.linkedin.com/in/baohdinh/",*/}
                        {/*}*/}
                    {/*]}*/}

                {/*/>*/}
            </div>
        );
    }
}

export default App;
