import React from 'react';
import './banner-contact.scss';

export const BannerContact = () => {
    return (
        <section className="banner-contact-container hero is-large has-background-granite-grey-team">
            <div className="banner-contact-textbox">
                <h2 className="banner-contact-header">CONTACT US</h2>
                <p className="banner-contact-text">
                    Meet us at
                    <br />
                    <a
                        className="banner-contact-link"
                        href="https://www.google.com/maps/place/Parco+Sannazzaro/@41.9422582,12.5402792,17z/data=!3m1!4b1!4m5!3m4!1s0x132f64080252da0b:0x28b23f52b87f2d63!8m2!3d41.9422582!4d12.5424679"
                    >
                        Parco Sannazzaro, 00141 Roma RM, Italy
                    </a>
                </p>
                <p className="banner-contact-text">
                    Email us at
                    <br />
                    <a
                        className="banner-contact-link"
                        href="mailto:calciomontesacro@gmail.com"
                    >
                        calciomontesacro@gmail.com
                    </a>
                </p>
            </div>
        </section>
    );
};
