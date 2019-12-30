import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import './banner-about.scss';

export const BannerAbout = () => {
    const data = useStaticQuery(graphql`
        query {
            bannerImage: file(relativePath: { eq: "collage.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1048) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
        <section className="banner-about-container hero is-large has-background-granite-grey-team">
            <Img fluid={data.bannerImage.childImageSharp.fluid} />
            <div className="banner-about-textbox">
                <p className="banner-about-text">
                    WELCOME TO <br /> CALCIO MONTE SACRO
                </p>
            </div>
        </section>
    );
};
