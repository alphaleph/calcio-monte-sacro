module.exports = {
    pathPrefix: '/calcio-monte-sacro', // TODO:  Remove for custom URL
    siteMetadata: {
        title: `Calcio Monte Sacro`,
        description: `Sito Ufficiale Calcio Monte Sacro`,
        author: `@chaua0927`,
    },
    plugins: [
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
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
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
