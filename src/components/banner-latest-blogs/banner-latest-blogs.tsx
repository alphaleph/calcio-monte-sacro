import React from 'react';
import { Link } from 'gatsby';
import { BlogsList } from '../blogs-list/blogs-list';
import { PostsList } from '../posts-list/posts-list';
import {
    mockBlogDataNodes,
    mockFluidImageDataNodes,
} from '../__tests__/test-util';
import './banner-latest-blogs.scss';

export const BannerLatestBlogs = () => {
    return (
        <section className="banner-latest-blogs section has-background-white-main is-bold">
            <div className="container">
                <h2 className="title is-family-secondary has-text-roma-red is-2">
                    LATEST BLOGS
                </h2>
                <div className="banner-latest-blogs-list">
                    <BlogsList size={2} />
                </div>
                <div className="banner-latest-blogs-footer columns">
                    <div className="column is-half is-offset-one-quarter">
                        <Link
                            to={`/blog`}
                            className="banner-latest-blogs-button"
                        >
                            <button
                                className="button is-fullwidth has-background-roma-gold has-text-black-main is-size-5"
                                type="button"
                            >
                                <strong>SEE BLOG</strong>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const TestBannerLatestBlogs = () => {
    return (
        <section className="banner-latest-blogs section has-background-white-main is-bold">
            <div className="container">
                <h2 className="title is-family-secondary has-text-roma-red is-2">
                    LATEST BLOGS
                </h2>
                <div className="banner-latest-blogs-list">
                    <PostsList
                        size={2}
                        posts={mockBlogDataNodes}
                        images={mockFluidImageDataNodes}
                    />
                </div>
                <div className="banner-latest-blogs-footer columns">
                    <div className="column is-half is-offset-one-quarter">
                        <Link
                            to={`/blog`}
                            className="banner-latest-blogs-button"
                        >
                            <button
                                className="button is-fullwidth has-background-roma-gold has-text-black-main is-size-5"
                                type="button"
                            >
                                <strong>SEE BLOG</strong>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
