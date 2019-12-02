import React, { useState, useEffect } from 'react';
import './banner-we-are.scss';

export const BannerWeAre = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    //TODO: Implement Canvas BG, animate with PixiJS
    return (
        <section className="hero has-background-night-sky is-bold">
            <div className="hero-body">
                <div className="we-are-container container has-text-centered">
                    <h1 className="title">
                        <span
                            className={
                                isLoaded
                                    ? 'we-are-name is-family-secondary'
                                    : 'we-are-name is-transparent is-family-secondary'
                            }
                        >
                            Calcio Monte Sacro
                        </span>
                    </h1>
                </div>
            </div>
            <p className="has-text-centered placeholder-pic">🗻</p>
        </section>
    );
};
