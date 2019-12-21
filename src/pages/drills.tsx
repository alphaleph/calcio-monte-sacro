import React from 'react';
import { Layout } from '../components/layout/layout';
import { SEO } from '../components/seo/seo';
import Img from 'gatsby-image';
import './drills.scss';
import { useStaticQuery, graphql } from 'gatsby';

const DrillsPage = () => {
    const data = useStaticQuery(graphql`
        query {
            soccerFieldTop: file(
                relativePath: { eq: "pixel-soccer-field-top.png" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 1048) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            soccerFieldMid: file(
                relativePath: { eq: "pixel-soccer-field-mid.png" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 1048) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            soccerFieldBottom: file(
                relativePath: { eq: "pixel-soccer-field-bottom.png" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 1048) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            soccerFieldSection: file(
                relativePath: { eq: "pixel-soccer-field-section.png" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 1048) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            bird: file(relativePath: { eq: "bird.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            bomb: file(relativePath: { eq: "bomb.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            flame: file(relativePath: { eq: "flame.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            tnt: file(relativePath: { eq: "tnt.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <SEO title="Drills" />
            <section className="parallax-container">
                <div className="wrapper">
                    <div className="drills-background">
                        <Img
                            fluid={data.soccerFieldTop.childImageSharp.fluid}
                        />
                        <Img
                            fluid={
                                data.soccerFieldSection.childImageSharp.fluid
                            }
                        />
                        <Img
                            fluid={
                                data.soccerFieldSection.childImageSharp.fluid
                            }
                        />
                        <Img
                            fluid={
                                data.soccerFieldSection.childImageSharp.fluid
                            }
                        />
                        <Img
                            fluid={
                                data.soccerFieldSection.childImageSharp.fluid
                            }
                        />
                        <Img
                            fluid={
                                data.soccerFieldSection.childImageSharp.fluid
                            }
                        />
                        <Img
                            fluid={data.soccerFieldMid.childImageSharp.fluid}
                        />
                        <Img
                            fluid={
                                data.soccerFieldSection.childImageSharp.fluid
                            }
                        />
                        <Img
                            fluid={
                                data.soccerFieldSection.childImageSharp.fluid
                            }
                        />
                        <Img
                            fluid={
                                data.soccerFieldSection.childImageSharp.fluid
                            }
                        />
                        <Img
                            fluid={
                                data.soccerFieldSection.childImageSharp.fluid
                            }
                        />
                        <Img
                            fluid={
                                data.soccerFieldSection.childImageSharp.fluid
                            }
                        />
                        <Img
                            fluid={data.soccerFieldBottom.childImageSharp.fluid}
                        />
                    </div>
                    <Img
                        fluid={data.bird.childImageSharp.fluid}
                        className="drills-middleground-bird"
                    />
                    <Img
                        fluid={data.bomb.childImageSharp.fluid}
                        className="drills-middleground-bomb-1"
                    />
                    <Img
                        fluid={data.bomb.childImageSharp.fluid}
                        className="drills-middleground-bomb-2"
                    />
                    <Img
                        fluid={data.bomb.childImageSharp.fluid}
                        className="drills-middleground-bomb-3"
                    />
                    <Img
                        fluid={data.flame.childImageSharp.fluid}
                        className="drills-middleground-flame-1"
                    />
                    <Img
                        fluid={data.flame.childImageSharp.fluid}
                        className="drills-middleground-flame-2"
                    />
                    <Img
                        fluid={data.flame.childImageSharp.fluid}
                        className="drills-middleground-flame-3"
                    />
                    <Img
                        fluid={data.tnt.childImageSharp.fluid}
                        className="drills-middleground-tnt-1"
                    />
                    <Img
                        fluid={data.tnt.childImageSharp.fluid}
                        className="drills-middleground-tnt-2"
                    />
                    <Img
                        fluid={data.tnt.childImageSharp.fluid}
                        className="drills-middleground-tnt-3"
                    />
                    <div className="drills-foreground">
                        <div className="drills-container has-text-centered">
                            <h1 className="drills-title">DRILLS</h1>
                            <div className="drills-quote-container">
                                <h2 className="drills-quote-header">
                                    Inspirational quote:
                                </h2>
                                <p className="drills-quote">
                                    Mo je faccio er cucchiaio
                                    <br />- L&apos;Ottavo Re di Roma
                                </p>
                            </div>
                            <ul className="drills-list">
                                <li>20 push ups</li>
                                <li>20 crunches</li>
                                <li>2km warm up run</li>
                                <li>3km run with ball</li>
                                <li>15 consecutive juggles</li>
                                <li>50 headers</li>
                                <li>50 headers with coconut</li>
                                <li>
                                    1 min ball nose-balancing like a sea lion
                                </li>
                                <li>
                                    80 meters rolling around like an armadillo
                                </li>
                                <li>20 toes-crosses</li>
                                <li>15 min becoming the pallone</li>
                                <li>1km continuous slide tackling</li>
                            </ul>
                            <div className="drills-quote-container">
                                <h2 className="drills-quote-header">
                                    Inspirational quote:
                                </h2>
                                <p className="drills-quote">
                                    Non lo mastico l&apos;inglese
                                    <br />- Er Bimbo de Oro
                                    <br />
                                </p>
                            </div>
                            <ul className="drills-list">
                                <li>Bruschetta break</li>
                                <li>
                                    Breathing exercises
                                    <br />
                                    Duration: indefinite
                                </li>
                                <li>20 steals from raccoons</li>
                                <li>15 consecutive juggles with watermelon</li>
                                <li>20 catching popcorn with your mouth</li>
                                <li>5 min feigning injury practice</li>
                                <li>10 min ref contestation practice</li>
                                <li>10 min goal celebration practice</li>
                                <li>10 min ultra self-defense practice</li>
                                <li>30 gluteus maximus clenches</li>
                                <li>Twice weekly ice bath</li>
                                <li>
                                    2 hours calcio history (e.g. Chi e&apos;
                                    Dino Zoff?)
                                </li>
                            </ul>
                            <div className="drills-quote-container">
                                <h2 className="drills-quote-header">
                                    Inspirational quote:
                                </h2>
                                <p className="drills-quote">
                                    Semplicemente tu sei il calcio.
                                    <br />- Il Capitano
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default DrillsPage;
