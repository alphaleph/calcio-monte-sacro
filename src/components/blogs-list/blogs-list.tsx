import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { PostsList } from '../posts-list/posts-list';
import { MarkdownData } from '../../types/index';

interface BlogsListProps {
    size?: number;
}

export const BlogsList = ({ size = 2 }: BlogsListProps) => {
    const data: MarkdownData = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(
                    sort: { order: ASC, fields: frontmatter___date }
                    filter: {
                        frontmatter: {
                            layout: { eq: "post" }
                            post_type: { eq: "blog" }
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
