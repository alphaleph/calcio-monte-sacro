import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import './banner-about.scss';
import { FluidImageData } from '../../types';

interface BannerAboutOwnProps {}
interface BannerAboutProps extends BannerAboutOwnProps {
    bgImage: FluidImageData;
    logoImage: FluidImageData;
}

export const PureBannerAbout = ({ bgImage, logoImage }: BannerAboutProps) => {
    return (
        <section className="banner-about-container hero is-large has-background-granite-grey-team">
            <Img fluid={bgImage.fluid} />
            <div className="banner-about-textbox">
                <Img fluid={logoImage.fluid} alt="Calcio Monte Sacro logo" />
            </div>
        </section>
    );
};

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
            cmsIcon: file(relativePath: { eq: "cms-icon.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <PureBannerAbout
            bgImage={data.bannerImage.childImageSharp}
            logoImage={data.cmsIcon.childImageSharp}
        />
    );
};
