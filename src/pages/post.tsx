import React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components/layout/layout';
import { SEO } from '../components/seo/seo';

const PostPage = () => {
    return (
        <Layout>
            <SEO title="Post Title" />
            <h1>Hi from the post page</h1>
            <Link to="/">Go back to the homepage</Link>
        </Layout>
    );
};

export default PostPage;

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `
