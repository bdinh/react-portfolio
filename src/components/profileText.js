import React, { Component } from 'react';

export default class ProfileText extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const {
            aboutHeader,
            aboutText,
        } = this.props;

        return (
            <div className="col-md-6 col-lg-8 about-content">
                <h2>{aboutHeader}</h2>
                <div className="about-text">
                    <p>{aboutText}</p>
                </div>
            </div>
        )
    }

}