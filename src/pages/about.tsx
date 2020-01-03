import React from 'react';
import { Layout } from '../components/layout/layout';
import { SEO } from '../components/seo/seo';
import { BannerAbout } from '../components/banner-about/banner-about';
import { BannerDonate } from '../components/banner-donate/banner-donate';
import { BannerContact } from '../components/banner-contact/banner-contact';
import './about.scss';

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="About" />
            <BannerDonate />
            <BannerAbout />
            <BannerContact />
        </Layout>
    );
};

export default AboutPage;
