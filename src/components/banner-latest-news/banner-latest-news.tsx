import React from 'react';
import { Link } from 'gatsby';
import { NewsList } from '../news-list/news-list';
import { PostsList } from '../posts-list/posts-list';
import {
    mockNewsDataNodes,
    mockFluidImageDataNodes,
} from '../__tests__/test-util';
import { SITE_URL } from '../../constants';
import './banner-latest-news.scss';

export const BannerLatestNews = () => {
    return (
        <section className="banner-latest-news section has-background-beige-main is-bold">
            <div className="container">
                <h2 className="title is-family-secondary has-text-roma-red is-2">
                    LATEST NEWS
                </h2>
                <div className="banner-latest-news-list">
                    <NewsList size={3} />
                </div>
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <Link
                            to={`/news`}
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

export const TestBannerLatestNews = () => {
    return (
        <section className="banner-latest-news section has-background-beige-main is-bold">
            <div className="container">
                <h2 className="title is-family-secondary has-text-roma-red is-2">
                    LATEST NEWS
                </h2>
                <div className="banner-latest-news-list">
                    <PostsList
                        size={3}
                        posts={mockNewsDataNodes}
                        images={mockFluidImageDataNodes}
                    />
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
