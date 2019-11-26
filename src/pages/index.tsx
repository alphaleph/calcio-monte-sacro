import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Layout } from '../components/layout/layout';
import { Image } from '../components/image/image';
import { SEO } from '../components/seo/seo';
import { BannerWeAre } from '../components/banner-we-are/banner-we-are';
import { BannerSchedule } from '../components/banner-schedule/banner-schedule';
import './index.scss';

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <BannerWeAre />
            <BannerSchedule />
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image />
            </div>
            <Link to="/page-2/">Go to page 2</Link>
        </Layout>
    );
};

export default IndexPage;
