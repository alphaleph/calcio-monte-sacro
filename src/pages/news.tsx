import React from 'react';
import { Layout } from '../components/layout/layout';
import { SEO } from '../components/seo/seo';
import { NewsList } from '../components/news-list/news-list';
import './news.scss';

//TODO: Add Pagination

const NewsPage = () => {
    return (
        <Layout>
            <SEO title="News" />
            <section className="news-container container">
                <h1 className="news-title">NEWS</h1>
                <NewsList size={9} />
            </section>
        </Layout>
    );
};

export default NewsPage;
