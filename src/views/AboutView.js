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
                            aboutHeader={about.aboutHeader}
                            aboutText={about.aboutText}
                            iconSet={about.iconSet}
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
                            skillSet={qualifications.skillSet}
                            courses={qualifications.courses}
                        />
                    )
                    :
                    (
                        ""
                    )
            }
            {
                footer ?
                    (
                        <Footer
                            socialAccounts={footer.socialAccounts}
                        />
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
