import React from 'react';
import './banner-contact.scss';
import { EMAIL_ADDR, LOCATION_URL } from '../../constants';

export const BannerContact = () => {
    return (
        <section className="banner-contact-container hero is-large has-background-granite-grey-team">
            <div className="banner-contact-textbox">
                <h2 className="banner-contact-header">CONTACT US</h2>
                <p className="banner-contact-text">
                    Meet us at
                    <br />
                    <a className="banner-contact-link" href={LOCATION_URL}>
                        Parco Sannazzaro, 00141 Roma RM, Italy
                    </a>
                </p>
                <p className="banner-contact-text">
                    Email us at
                    <br />
                    <a
                        className="banner-contact-link"
                        href={`mailto:${EMAIL_ADDR}`}
                    >
                        {EMAIL_ADDR}
                    </a>
                </p>
            </div>
        </section>
    );
};
