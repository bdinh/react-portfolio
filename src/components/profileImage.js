import React, { Component } from 'react';

export default class ProfileImage extends Component {
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