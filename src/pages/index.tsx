import React from 'react';
import { Layout } from '../components/layout/layout';
import { SEO } from '../components/seo/seo';
import { BannerWeAre } from '../components/banner-we-are/banner-we-are';
import { BannerSchedule } from '../components/banner-schedule/banner-schedule';
import { BannerLatestNews } from '../components/banner-latest-news/banner-latest-news';
import { BannerDrills } from '../components/banner-drills/banner-drills';
import { BannerLatestBlogs } from '../components/banner-latest-blogs/banner-latest-blogs';
import './index.scss';

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <BannerWeAre />
            <BannerSchedule />
            <BannerLatestNews />
            <BannerDrills />
            <BannerLatestBlogs />
        </Layout>
    );
};

export default IndexPage;
