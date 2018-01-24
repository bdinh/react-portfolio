import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../css/landing.css';
import { NavLink } from 'react-router-dom';

export default class Landing extends Component {
    render() {
        const {
            headerText,
            subheaderText,
            pageScroll,
            pageScrollLink,
            pageScrollText,
        } = this.props;

        return (
            <div className="landing-strip">
                <p className="landing-header">{headerText}</p>
                <p className="landing-subheader">
                    {subheaderText}
                </p>
                <div className="page-scroll">
                    {
                        pageScroll ?
                            (
                                <NavLink
                                    className="page-scroll-text"
                                    to={pageScrollLink}
                                >
                                    {pageScrollText}
                                    <br/>
                                    <FontAwesome
                                        name="chevron-down"
                                    />
                                </NavLink>
                            )
                            :
                            ""
                    }
                </div>
            </div>
        )
    }

}
