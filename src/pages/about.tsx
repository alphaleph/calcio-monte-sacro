import React, { useState } from 'react';
import { Layout } from '../components/layout/layout';
import { SEO } from '../components/seo/seo';
import { useWindowDimensions } from '../hooks';
import Confetti from 'react-confetti';
import ConfettiSpray from 'react-dom-confetti';
import './about.scss';

const AboutPage = () => {
    const [isDonated, setIsDonated] = useState(false);
    const [isFireConfetti, setIsFireConfetti] = useState(false);
    const [isDropConfetti, setIsDropConfetti] = useState(false);
    const { width, height } = useWindowDimensions();

    const handleDonateClick = () => {
        if (!isDonated) {
            setIsDonated(true);
        }
        setIsFireConfetti(true);
        setTimeout(() => {
            if (isFireConfetti) {
                setIsFireConfetti(false);
            }
        }, 250);

        setIsDropConfetti(true);
        setTimeout(() => {
            if (isDropConfetti) {
                setIsDropConfetti(false);
            }
        }, 3000);
    };

    const confettiSprayConfigLeft = {
        angle: 60,
        spread: 65,
        startVelocity: 45,
        elementCount: 50,
        dragFriction: 0.09,
        duration: 3000,
        stagger: 20,
        width: '10px',
        height: '10px',
        colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
    };
    const confettiSprayConfigRight = {
        angle: 120,
        spread: 65,
        startVelocity: 45,
        elementCount: 50,
        dragFriction: 0.09,
        duration: 3000,
        stagger: 20,
        width: '10px',
        height: '10px',
        colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
    };

    return (
        <Layout>
            <SEO title="About" />
            <section className="hero is-large has-background-roma-red is-bold">
                <Confetti
                    width={width}
                    height={height}
                    numberOfPieces={isDropConfetti ? 50 : 0}
                />
                <div className="hero-body has-text-centered">
                    <button
                        type="button"
                        className="button has-background-roma-gold is-large is-rounded"
                        onClick={handleDonateClick}
                    >
                        Donate! 🎉
                    </button>
                </div>
                <div className="about-confetti-spray-left">
                    <ConfettiSpray
                        active={isFireConfetti}
                        config={confettiSprayConfigLeft}
                    />
                </div>
                <div className="about-confetti-spray-right">
                    <ConfettiSpray
                        active={isFireConfetti}
                        config={confettiSprayConfigRight}
                    />
                </div>
            </section>
        </Layout>
    );
};

export default AboutPage;
