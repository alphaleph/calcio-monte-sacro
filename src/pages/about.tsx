import React from 'react';
import { Layout } from '../components/layout/layout';
import { SEO } from '../components/seo/seo';
import { BannerAbout } from '../components/banner-about/banner-about';
import { BannerDonate } from '../components/banner-donate/banner-donate';
import './about.scss';

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="About" />
            <BannerDonate />
            <BannerAbout />
        </Layout>
    );
};

export default AboutPage;
