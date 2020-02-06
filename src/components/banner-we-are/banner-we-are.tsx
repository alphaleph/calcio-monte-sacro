import React, { useState, useEffect } from 'react';
import './banner-we-are.scss';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { NodeGarden } from '../node-garden/node-garden';
import { FluidImageData } from '../../types';

interface BannerWeAreOwnProps {}
interface BannerWeAreProps extends BannerWeAreOwnProps {
    bgImage: FluidImageData;
}
export const PureBannerWeAre = ({ bgImage }: BannerWeAreProps) => {
    //TODO: Convert Canvas to PixiJS
    return (
        <section className="banner-we-are">
            <NodeGarden />
            <div className="banner-we-are-foreground">
                <Img alt="Calcio Monte Sacro Logo" fluid={bgImage.fluid} />
            </div>
        </section>
    );
};

export const BannerWeAre = () => {
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

    return <PureBannerWeAre bgImage={data.placeholderImage.childImageSharp} />;
};
