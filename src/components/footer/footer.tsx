import React from 'react';
import { Link } from 'gatsby';
import './footer.scss';
import {
    SITE_URL,
    EMAIL_ADDR,
    TERMS_AND_CONDITIONS,
    PRIVACY,
    COOKIES,
} from '../../constants';

interface FooterProps {
    openModal: (modalType: string) => void;
}

export const Footer = (props: FooterProps) => {
    const openTermsAndCondModal = () => {
        props.openModal(TERMS_AND_CONDITIONS);
    };

    const openPrivacyModal = () => {
        props.openModal(PRIVACY);
    };

    const openCookiesModal = () => {
        props.openModal(COOKIES);
    };

    return (
        <footer className="footer-container columns is-centered has-background-team-granite">
            <div className="column is-two-thirds">
                <section className="footer-main-links container">
                    <Link
                        className="footer-main-link"
                        to={`${SITE_URL}/schedule`}
                    >
                        Schedule
                    </Link>
                    <Link className="footer-main-link" to={`${SITE_URL}/news`}>
                        News
                    </Link>
                    <Link className="footer-main-link" to={`${SITE_URL}/blog`}>
                        Blog
                    </Link>
                    <Link
                        className="footer-main-link"
                        to={`${SITE_URL}/drills`}
                    >
                        Drills
                    </Link>
                    <Link className="footer-main-link" to={`${SITE_URL}/about`}>
                        About
                    </Link>
                </section>
                <div className="footer-divider" />
                <section className="footer-legal-buttons container">
                    <button
                        type="button"
                        className="footer-legal-button"
                        onClick={openTermsAndCondModal}
                    >
                        Terms and Conditions
                    </button>
                    <button
                        type="button"
                        className="footer-legal-button"
                        onClick={openPrivacyModal}
                    >
                        Privacy
                    </button>
                    <button
                        type="button"
                        className="footer-legal-button"
                        onClick={openCookiesModal}
                    >
                        Cookies
                    </button>
                </section>
                <section className="copyright container">
                    <p>
                        © 2019 Calcio Monte Sacro. All Rights Reserved. Website
                        questions, comments or suggestions?
                        <a className="email-link" href={`mailto:${EMAIL_ADDR}`}>
                            Email Us
                        </a>
                    </p>
                </section>
            </div>
        </footer>
    );
};
