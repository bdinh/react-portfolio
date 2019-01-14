import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/about.css';

export default class About extends Component {
    render() {

        const {
            profileImage,
            aboutHeader,
            aboutText,
            iconSet,
        } = this.props;

        // TODO: Need to fix in order to scale for all cases
        let gridDivide = 12 / iconSet.length;
        let gridClass = "col-md-" + gridDivide;

        return (
            <div className="about" id="about">
                <div className="container">
                    <div className="row about-section">
                        <ProfileImage
                            profileImagePath={profileImage}
                        />
                       <ProfileText
                           aboutHeader={aboutHeader}
                           aboutText={aboutText}
                       />
                    </div>
                    <div className="row about-section">
                        {iconSet.map((icon, i) => {
                            return (
                                <div className={gridClass + " col-4"} key={i}>
                                    <img className="about-icon" src={icon.src} alt="icon"/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}


class ProfileText extends Component {
    constructor(props) {
        super(props)
    }


    render() {

        const {
            aboutHeader,
            // aboutText,
        } = this.props;

        return (
            <div className="col-md-6 col-lg-8 profile-content">
                <div className="profile-text">
                    <h2>{aboutHeader}</h2>
                    {/*{*/}
                        {/*aboutText.map((sentence, i) => (*/}
                            {/*<p key={i} dangerouslySetInnerHTML={{__html: sentence}}/>*/}
                        {/*))*/}
                    {/*}*/}
                    <p>Hi there! I'm Bao, a Senior at the University of Washington in Seattle, studying Informatics.
                        My primary interests lie in full-stack development, distributed systems, site reliability,
                        scalability and maintainability. I enjoy building exhaustive applications with my friends.
                        Currently, we’re working on a platform that facilitates the marketplace for businesses to
                        connect with on-demand service workers. Long term, I hope to be an Engineering Manager, but
                        currently I am seeking a full time position as a Software Engineer after June 2019.
                    </p>
                    <p>
                        While I'm not working, you can find me trying out new cooking recipes, reading
                        or wandering the streets of Seattle taking <NavLink className='emphasize-link' to='/photographs'>photos. </NavLink>
                        I'm currently reading <span className='italicize'>Thinking, Fast and Slow</span> by Daniel Kahnerman. I recently finished
                        <span className='italicize'>When Breath Becomes Air</span> by Paul Kalanithi. If you've been looking
                        for a book to read, I highly recommend Kalanithi's memoir.
                    </p>
                    <p>
                        Feel free to reach out and get in touch :) - <a className='emphasize-link' href='mailto:bdinh@uw.edu?Subject=Hi%20Bao!'>bdinh@uw.edu</a>
                    </p>
                </div>
            </div>
        )
    }

}


class ProfileImage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            profileImagePath
        } = this.props;

        return (
            <div className="col-md-6 col-lg-4 about-content profile-picture-container">
                <img
                    className="profile-picture"
                    alt="User Profile Picture"
                    src={profileImagePath}
                />
            </div>
        )
    }

}
