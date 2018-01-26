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
                    <p>Hi there! I'm Bao, a Junior
                        at the University of Washington in Seattle, studying Informatics.
                        I enjoy developing tools for the web, especially those that have to do
                        with visualizations. Long term, I hope to work on tools that help ease the
                        process of developing visual content.
                    </p>
                    <p>
                        While I'm not working, you can find me trying out new cooking recipes, reading
                        or wandering the streets of Seattle taking <NavLink className='emphasize-link' to='/photographs'>photos. </NavLink>
                        I'm currently rereading <span className='italicize'>Island</span> by Aldous Huxley. I recently finished
                        <span className='italicize'>When Breath Becomes Air</span> by Paul Kalanithi. If you've been looking
                        for a book to read, I highly recommend Kalanithi's memoir.
                    </p>
                    <p>
                        Feel free to reach out and get in touch - <a className='emphasize-link' href='mailto:baodinh96@gmail.com?Subject=Hi%20Bao!'>baodinh96@gmail.com</a>
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
