import React from 'react';
import { Link } from 'gatsby';
import { NewsList } from '../news-list/news-list';
import { SITE_URL } from '../../constants';
import './banner-latest-news.scss';

export const BannerLatestNews = () => {
    return (
        <section className="banner-latest-news section has-background-beige-main is-bold">
            <div className="container">
                <h2 className="title is-family-secondary has-text-black-main is-2">
                    LATEST NEWS
                </h2>
                <div className="banner-latest-news-list">
                    <NewsList size={3} />
                </div>
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <Link
                            to={`${SITE_URL}/news`}
                            className="banner-latest-news-button"
                        >
                            <button
                                className="button is-fullwidth has-background-roma-red has-text-white-main is-size-5"
                                type="button"
                            >
                                <strong>SEE MORE NEWS</strong>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
