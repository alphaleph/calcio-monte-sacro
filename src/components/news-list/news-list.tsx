import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { PostsList } from '../posts-list/posts-list';
import { MarkdownData } from '../../types/index';

interface NewsListProps {
    size?: number;
}

export const NewsList = ({ size = 3 }: NewsListProps) => {
    const data: MarkdownData = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(
                    sort: { order: ASC, fields: frontmatter___date }
                    filter: {
                        frontmatter: {
                            layout: { eq: "post" }
                            post_type: { eq: "news" }
                        }
                    }
                ) {
                    edges {
                        node {
                            frontmatter {
                                title
                                language
                                date
                                layout
                                banner_image
                            }
                            fields {
                                slug
                                pathString
                            }
                            html
                            excerpt(format: PLAIN)
                        }
                    }
                }
                allImageSharp {
                    edges {
                        node {
                            fluid(maxWidth: 1024) {
                                base64
                                aspectRatio
                                src
                                srcSet
                                sizes
                                originalName
                            }
                        }
                    }
                }
            }
        `
    );

    return (
        <PostsList
            posts={data.allMarkdownRemark.edges}
            size={size}
            images={data.allImageSharp.edges}
        />
    );
};
