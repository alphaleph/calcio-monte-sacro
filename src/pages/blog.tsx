import React from 'react';
import { Layout } from '../components/layout/layout';
import { SEO } from '../components/seo/seo';
import { BlogsList } from '../components/blogs-list/blogs-list';
import './blog.scss';

//TODO: Add Pagination

const BlogPage = () => {
    return (
        <Layout>
            <SEO title="Blog" />
            <section className="blog-container container">
                <h1 className="blog-title">BLOG</h1>
                <BlogsList size={9} />
            </section>
        </Layout>
    );
};

export default BlogPage;
