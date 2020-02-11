module.exports = {
    pathPrefix: '/calcio-monte-sacro',
    siteMetadata: {
        title: `Calcio Monte Sacro`,
        description: `Sito Ufficiale Calcio Monte Sacro`,
        author: `@chaua0927`,
        siteUrl: `https://www.calciomontesacro.com`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `UA-158219830-1`,
                head: true,
            },
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-typescript`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/content/blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `news`,
                path: `${__dirname}/content/news`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `schedule`,
                path: `${__dirname}/content/schedule`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    'gatsby-remark-relative-images', //TODO: Reconfigure to allow for inline MD images?
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1400,
                        },
                    },
                ],
            },
        },
        `gatsby-plugin-netlify-cms`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Calcio Monte Sacro`,
                short_name: `calcioms`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/cms-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
    ],
};
