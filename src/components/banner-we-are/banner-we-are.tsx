import React, { useState, useEffect } from 'react';
import './banner-we-are.scss';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FluidImageData } from '../../types';

interface BannerWeAreOwnProps {}
interface BannerWeAreProps extends BannerWeAreOwnProps {
    bgImage: FluidImageData;
}
export const PureBannerWeAre = ({ bgImage }: BannerWeAreProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    //TODO: Implement Canvas BG, animate with PixiJS
    return (
        <section>
            <Img fluid={bgImage.fluid} className="banner-we-are-background" />
            <div className="banner-we-are-foreground">
                <h1>
                    <span
                        className={
                            isLoaded
                                ? 'banner-we-are-name is-family-secondary'
                                : 'banner-we-are-name is-transparent is-family-secondary'
                        }
                    >
                        Calcio Monte Sacro
                    </span>
                </h1>
            </div>
        </section>
    );
};

export const BannerWeAre = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(
                relativePath: { eq: "mountaintop-sky-temp.png" }
            ) {
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
