/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    fmImagesToRelative(node);
    if (node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({ node, getNode, basePath: `content` });
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
        if (node.frontmatter.layout === 'post') {
            let pathString = '';
            if (node.frontmatter.post_type === 'news') {
                pathString += '/news';
            } else if (node.frontmatter.post_type === 'blog') {
                pathString += '/blog';
            }
            pathString += node.fields.slug;
            createNodeField({
                node,
                name: `pathString`,
                value: pathString,
            });

            // FIXME: Hotfix - Netlify CMS banner image URL normalization
            let bannerImg = '';
            let regex = /(.*\/)(.*\.(?:jpe?g|png))$/;
            let matches = node['frontmatter']['banner-image'].match(regex);
            if (matches) {
                // [0] = whole path, [1] = path before filename, [2] = filename
                bannerImg = matches[2];
            } else {
                console.error(
                    `Error: Invalid path structure. Path <${
                        node['frontmatter']['banner-image']
                    }> Must contain / .`
                );
            }
            bannerImg = '../../src/images/' + bannerImg;
            createNodeField({
                node,
                name: `bannerImg`,
                value: bannerImg,
            });
        }
    }
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            layout
                            post_type
                        }
                        fields {
                            slug
                            pathString
                            bannerImg {
                                childImageSharp {
                                    fluid(maxWidth: 1024) {
                                        base64
                                        aspectRatio
                                        sizes
                                        originalName
                                        src
                                        srcSet
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.frontmatter.layout === 'post') {
            createPage({
                path: node.fields.pathString,
                component: path.resolve(`./src/templates/post.tsx`),
                context: {
                    slug: node.fields.slug,
                    pathString: node.fields.pathString,
                    bannerImg: node.fields.bannerImg,
                },
            });
        }
    });
};
