import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Layout } from '../components/layout/layout';
import { SEO } from '../components/seo/seo';
import { MarkdownRemark } from '../types/index';
import { utcStringToDateString } from '../util';
import './post.scss';

interface PostPageProps {
    data: MarkdownRemark;
}

const PostPage = ({ data }: PostPageProps) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <SEO title={`${post.frontmatter.title}`} />
            <article className="post-container container">
                <h1 className="post-title">{post.frontmatter.title}</h1>
                <p className="post-date">
                    {utcStringToDateString(post.frontmatter.date)}
                </p>
                <Img fluid={post.fields.bannerImg.childImageSharp.fluid} />
                <div
                    className="post-markdown"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
                <div className="container has-text-centered ">
                    <Link
                        to={
                            post.frontmatter.post_type === 'news'
                                ? '/news'
                                : '/blog'
                        }
                    >
                        <button type="button" className="button is-outline">
                            {`Go back to ${
                                post.frontmatter.post_type === 'news'
                                    ? 'News'
                                    : 'Blog'
                            }`}
                        </button>
                    </Link>
                </div>
            </article>
        </Layout>
    );
};

export default PostPage;

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                language
                date
                post_type
            }
            fields {
                bannerImg {
                    childImageSharp {
                        fluid(maxWidth: 1024, maxHeight: 450) {
                            ...GatsbyImageSharpFluid
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
            }
        }
    }
`;
