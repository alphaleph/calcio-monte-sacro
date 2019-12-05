import React from 'react';
import { Link } from 'gatsby';
import { SITE_URL } from '../../constants';
import './banner-drills.scss';

export const BannerDrills = () => {
    return (
        <section className="banner-drills section">
            <div className="container">
                <h2 className="banner-drills-title">
                    The Techniques of the Trade...
                </h2>
                <div className="banner-drills-note columns is-mobile has-text-centered">
                    <p className="column is-one-third">👉🦵</p>
                    <p className="column is-one-third">👉⚽</p>
                    <p className="column is-one-third">👉🥅</p>
                </div>
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <Link to={`/drills`}>
                            <button
                                className="banner-drills-button button is-fullwidth has-background-team-granite has-text-team-holy"
                                type="button"
                            >
                                SEE DRILLS
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
