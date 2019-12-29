import React from 'react';
import { Layout } from '../components/layout/layout';
import { SEO } from '../components/seo/seo';
import { BannerDonate } from '../components/banner-donate/banner-donate';
import './about.scss';

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="About" />
            <BannerDonate />
        </Layout>
    );
};

export default AboutPage;
