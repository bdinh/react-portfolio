import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../css/foooter.css';

export default class Footer extends Component {
    constructor(props) {
        super(props)
    }


    render() {

        const {
            copyrightText,
            socialAccounts,
        } = this.props;

        return (
            <footer>
            <div className="container">
                <div className="footer-contact">
                    {
                        socialAccounts.map((account, i) => {
                            return (
                                <SocialIcon
                                    key={i}
                                    socialAccount={{
                                        name: account.name,
                                        link: account.link
                                    }}
                                />
                            )
                        })
                    }
                    <p className="footer-text" dangerouslySetInnerHTML={{
                        __html: copyrightText
                    }}/>
                </div>
            </div>
            </footer>
        );

    }

}

class SocialIcon extends Component {

    render() {

        const {
            socialAccount,
        } = this.props;

        return(
            <div className="social-link">
                <a href={socialAccount.link}>
                    <FontAwesome
                        name={socialAccount.name.toLowerCase()}
                    />
                </a>
            </div>
        )
    }
}
