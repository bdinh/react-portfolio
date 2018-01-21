import React, { Component } from 'react';

export default class ProgressBar extends Component {

    render() {
        const {
            percentage,
        } = this.props;

        return (
            <div className="full-bar">
                <div
                    className="progress-bar"
                    style={{width: percentage, height: "100%", backgroundColor: "#34495E"}}
                />
            </div>
        );
    }
}