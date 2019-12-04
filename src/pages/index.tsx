import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Layout } from '../components/layout/layout';
import { SEO } from '../components/seo/seo';
import { BannerWeAre } from '../components/banner-we-are/banner-we-are';
import { BannerSchedule } from '../components/banner-schedule/banner-schedule';
import { BannerLatestNews } from '../components/banner-latest-news/banner-latest-news';
import './index.scss';

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <BannerWeAre />
            <BannerSchedule />
            <BannerLatestNews />
            <Link to="/page-2/">Go to page 2</Link>
        </Layout>
    );
};

export default IndexPage;
