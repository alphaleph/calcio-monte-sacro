import React, { useState } from 'react';
import { Layout } from '../components/layout/layout';
import { SEO } from '../components/seo/seo';
import { useWindowDimensions } from '../hooks';
import Confetti from 'react-confetti';
import ConfettiSpray from 'react-dom-confetti';
import { Fireworks } from 'fireworks/lib/react';
import './about.scss';

const AboutPage = () => {
    const [isDonated, setIsDonated] = useState(false);
    const [isFireConfetti, setIsFireConfetti] = useState(false);
    const [isDropConfetti, setIsDropConfetti] = useState(false);
    const [isFireFireworks, setIsFireFireworks] = useState(false);
    const { width, height } = useWindowDimensions();

    const handleDonateClick = () => {
        if (!isDonated) {
            setIsDonated(true);
        }

        if (!isFireConfetti) {
            setIsFireConfetti(true);
        }
        setTimeout(() => {
            if (isFireConfetti) {
                setIsFireConfetti(false);
            }
        }, 250);

        if (!isDropConfetti) {
            setIsDropConfetti(true);
        }
        setTimeout(() => {
            if (isDropConfetti) {
                setIsDropConfetti(false);
            }
        }, 3000);

        if (!isFireFireworks) {
            setIsFireFireworks(true);
        }
        setTimeout(() => {
            if (isFireFireworks) {
                setIsFireFireworks(false);
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

    const fireworksConfig = {
        count: 4,
        interval: 2000,
        colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
        calc: (props, i) => ({
            ...props,
            x: Math.random() * (width / 2) + width / 4,
            y: Math.random() * (height / 2) + height / 4,
        }),
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
                <div>
                    {isFireFireworks && <Fireworks {...fireworksConfig} />}
                </div>
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
