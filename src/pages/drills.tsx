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
                            fluid={data.soccerFieldBottom.childImageSharp.fluid}
                        />
                    </div>
                    <div className="drills-middleground-bird">💣💣💣</div>
                    <div className="drills-middleground-bomb-1">💣</div>
                    <div className="drills-middleground-bomb-2">💣</div>
                    <div className="drills-middleground-bomb-3">💣</div>
                    <div className="drills-middleground-trap">💣💣💣</div>
                    <div className="drills-middleground-spikes">💣💣💣</div>
                    <div className="drills-middleground-struck-bird">💣💣💣</div>
                    <div className="drills-middleground-pit">💣💣💣</div>
                    <div className="drills-middleground-nuke">💣💣</div>
                    <div className="drills-foreground">
                        <div className="drills-container has-text-centered">
                            <h1 className="drills-title">DRILLS</h1>
                            <h2 className="drills-quote">
                                The journey of a thousand miles begins with a
                                single step...
                            </h2>
                            <ul>
                                <li>20 push ups</li>
                                <li>20 crunches</li>
                                <li>2km warm up run</li>
                                <li>3km run with ball</li>
                                <li>15 consecutive juggles</li>
                                <li>
                                    1 min ball nose-balancing like a sea lion
                                </li>
                                <li>
                                    80 meters rolling around like an armadillo
                                </li>
                                <li>20 toes-crosses</li>
                                <li>Bruschetta break</li>
                                <li>
                                    Breathing exercises, Duration: indefinite
                                </li>
                                <li>15 consecutive juggles with watermelon</li>
                                <li>20 catching popcorn with your mouth</li>
                                <li>5 min feigning injury practice</li>
                                <li>10 min ref contestation practice</li>
                                <li>10 min goal celebration practice</li>
                                <li>10 min ultra self-defense practice</li>
                                <li>30 gluteus maximus clenches</li>
                                <li>Twice weekly ice bath</li>
                                <li>2 hours studying calcio history</li>
                                //
                                <li>20 push ups</li>
                                <li>20 crunches</li>
                                <li>2km warm up run</li>
                                <li>3km run with ball</li>
                                <li>15 consecutive juggles</li>
                                <li>
                                    1 min ball nose-balancing like a sea lion
                                </li>
                                <li>
                                    80 meters rolling around like an armadillo
                                </li>
                                <li>20 toes-crosses</li>
                                <li>Bruschetta break</li>
                                <li>
                                    Breathing exercises, Duration: indefinite
                                </li>
                                <li>15 consecutive juggles with watermelon</li>
                                <li>20 catching popcorn with your mouth</li>
                                <li>5 min feigning injury practice</li>
                                <li>10 min ref contestation practice</li>
                                <li>10 min goal celebration practice</li>
                                <li>10 min ultra self-defense practice</li>
                                <li>30 gluteus maximus clenches</li>
                                <li>30 gluteus minumis clenches</li>
                                <li>Twice weekly ice bath</li>
                                <li>2 hours studying calcio history</li>
                                <li>20 push ups</li>
                                <li>20 crunches</li>
                                <li>2km warm up run</li>
                                <li>3km run with ball</li>
                                <li>15 consecutive juggles</li>
                                <li>
                                    1 min ball nose-balancing like a sea lion
                                </li>
                                <li>
                                    80 meters rolling around like an armadillo
                                </li>
                                <li>20 toes-crosses</li>
                                <li>Bruschetta break</li>
                                <li>
                                    Breathing exercises, Duration: indefinite
                                </li>
                                <li>15 consecutive juggles with watermelon</li>
                                <li>20 catching popcorn with your mouth</li>
                                <li>5 min feigning injury practice</li>
                                <li>10 min ref contestation practice</li>
                                <li>10 min goal celebration practice</li>
                                <li>10 min ultra self-defense practice</li>
                                <li>30 gluteus maximus clenches</li>
                                <li>30 gluteus minumis clenches</li>
                                <li>Twice weekly ice bath</li>
                                <li>2 hours studying calcio history</li>
                                <li>20 push ups</li>
                                <li>20 crunches</li>
                                <li>2km warm up run</li>
                                <li>3km run with ball</li>
                                <li>15 consecutive juggles</li>
                                <li>
                                    1 min ball nose-balancing like a sea lion
                                </li>
                                <li>
                                    80 meters rolling around like an armadillo
                                </li>
                                <li>20 toes-crosses</li>
                                <li>Bruschetta break</li>
                                <li>
                                    Breathing exercises, Duration: indefinite
                                </li>
                                <li>15 consecutive juggles with watermelon</li>
                                <li>20 catching popcorn with your mouth</li>
                                <li>5 min feigning injury practice</li>
                                <li>10 min ref contestation practice</li>
                                <li>10 min goal celebration practice</li>
                                <li>10 min ultra self-defense practice</li>
                                <li>30 gluteus maximus clenches</li>
                                <li>30 gluteus minumis clenches</li>
                                <li>Twice weekly ice bath</li>
                                <li>2 hours studying calcio history</li>
                                <li>20 push ups</li>
                                <li>20 crunches</li>
                                <li>2km warm up run</li>
                                <li>3km run with ball</li>
                                <li>15 consecutive juggles</li>
                                <li>
                                    1 min ball nose-balancing like a sea lion
                                </li>
                                <li>
                                    80 meters rolling around like an armadillo
                                </li>
                                <li>20 toes-crosses</li>
                                <li>Bruschetta break</li>
                                <li>
                                    Breathing exercises, Duration: indefinite
                                </li>
                                <li>15 consecutive juggles with watermelon</li>
                                <li>20 catching popcorn with your mouth</li>
                                <li>5 min feigning injury practice</li>
                                <li>10 min ref contestation practice</li>
                                <li>10 min goal celebration practice</li>
                                <li>10 min ultra self-defense practice</li>
                                <li>30 gluteus maximus clenches</li>
                                <li>30 gluteus minumis clenches</li>
                                <li>Twice weekly ice bath</li>
                                <li>2 hours studying calcio history</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default DrillsPage;
