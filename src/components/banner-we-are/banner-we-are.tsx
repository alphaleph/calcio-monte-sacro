import React from 'react';
import './banner-we-are.scss';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { NodeGarden } from '../node-garden/node-garden';
import { FluidImageData } from '../../types';

interface BannerWeAreOwnProps {
    bottomDivider: boolean;
}
interface BannerWeAreProps extends BannerWeAreOwnProps {
    bgImage: FluidImageData;
}
export const PureBannerWeAre = ({
    bottomDivider,
    bgImage,
}: BannerWeAreProps) => {
    //TODO: Convert Canvas to PixiJS
    return (
        <section className="banner-we-are">
            <div className="banner-we-are-container">
                <NodeGarden />
                <div className="banner-we-are-foreground">
                    <Img alt="Calcio Monte Sacro Logo" fluid={bgImage.fluid} />
                </div>
            </div>
            {bottomDivider && <div className="divider-beige" />}
        </section>
    );
};

export const BannerWeAre = ({ bottomDivider }: BannerWeAreOwnProps) => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "cms-icon.png" }) {
                childImageSharp {
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
    `);

    return (
        <PureBannerWeAre
            bottomDivider={bottomDivider}
            bgImage={data.placeholderImage.childImageSharp}
        />
    );
};
