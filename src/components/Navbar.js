import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './../include/bootstrap';


export default class Navbar extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const {
            navbarBrand,
            navbarLinks,
        } = this.props;

        return (
            <nav className="navbar navbar-expand-md fixed-top navbar-dark">
                <NavLink className="navbar-brand" to="/">{navbarBrand}</NavLink>
                <button className="navbar-toggler navbar-toggler-right"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item "><NavLink className="nav-link" to={navbarLinks[0].link}>{navbarLinks[0].name} <span className="sr-only">(current)</span></NavLink></li>
                        {
                            navbarLinks.splice(1, navbarLinks.length - 1).map((link, i) => {
                                return (
                                    <li className="nav-item" key={i}>
                                        <NavLink className="nav-link" to={link.link}>
                                            {link.name}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                        <li className="nav-item "><a className="nav-link" href="./files/resume.pdf" target="_blank">Resume <span className="sr-only">(current)</span></a></li>
                    </ul>
                </div>
            </nav>
            )
    }

}
