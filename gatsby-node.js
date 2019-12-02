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
    }
};



// exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions;
//     const result = await graphql(`
//         query {
//             allMarkdownRemark {
//                 edges {
//                     node {
//                         frontmatter {
//                             layout
//                         }
//                         fields {
//                             slug
//                         }
//                     }
//                 }
//             }
//         }
//     `);

//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//         if (node.layout === 'post') {
//             createPage({
//                 path: node.fields.slug,
//                 component: path.resolve(`./src/pages/post.tsx`),
//                 context: {
//                     slug: node.fields.slug,
//                 },
//             });
//         }
//     });
// };
