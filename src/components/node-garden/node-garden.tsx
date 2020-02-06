// Adapted from pakastin's nodegarden

import React, { useState, useEffect } from 'react';
import './node-garden.scss';
import NodeGardenModel from './node-garden-model';

export const NodeGarden = () => {
    const [isAnimate, setIsAnimate] = useState(true); //for React HTML updates
    const isAnimateRef = React.useRef<boolean>(true); //for canvas control
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const widthRef = React.useRef<number>(2000);
    const heightRef = React.useRef<number>(2000);
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const animReqRef = React.useRef<number>(-1);
    const prevTimeRef = React.useRef<number>(-1);

    let nodeGarden = new NodeGardenModel(widthRef.current, heightRef.current);
    let area = widthRef.current * heightRef.current;
    let NUM_NODES = (Math.sqrt(area) / 25) | 0;
    nodeGarden.initNodes(NUM_NODES);

    // Initialization
    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            // if retina screen, scale canvas
            // const { devicePixelRatio = 1 } = window;
            // if (devicePixelRatio && devicePixelRatio !== 1) {
            //     canvas.style.transform = 'scale(' + 1 / devicePixelRatio + ')';
            //     canvas.style.transformOrigin = '0 0';
            // }
            console.log('Init: ' + window.innerWidth + ' x ' + window.innerHeight);
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);

            // set up event handlers
            window.addEventListener('resize', handleResize);

            // start animation
            animReqRef.current = requestAnimationFrame(animate);

            return () => {
                if (animReqRef !== undefined) {
                    cancelAnimationFrame(animReqRef.current);
                }
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    useEffect(() => {
        if (width !== widthRef.current) {
            setWidth(widthRef.current);
        }
        if (height !== heightRef.current) {
            setHeight(heightRef.current);
        }
    }, [width, height]);

    const animate = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                const currTime = Date.now();
                if (prevTimeRef.current !== undefined) {
                    const deltaTime = currTime - prevTimeRef.current;
                    nodeGarden.render(isAnimateRef.current, ctx, deltaTime);
                }
                prevTimeRef.current = currTime;
                animReqRef.current = requestAnimationFrame(animate);
            }
        }
    };

    const handleResize = () => {
        console.log('Resize: ' + window.innerWidth + ' x ' + window.innerHeight);
        widthRef.current = window.innerWidth * devicePixelRatio;
        heightRef.current = window.innerHeight * devicePixelRatio;
        area = widthRef.current * heightRef.current;
        NUM_NODES = (Math.sqrt(area) / 10) | 0;
        nodeGarden.resetNodes(widthRef.current, heightRef.current, NUM_NODES);
    };

    const toggleAnimate = () => {
        isAnimateRef.current = !isAnimateRef.current;
        setIsAnimate(isAnimateRef.current);
    };

    return (
        <div className="node-garden-container">
            <button
                className="button is-text node-garden-control-button"
                onClick={toggleAnimate}
            >
                {isAnimateRef.current ? '⏸' : '▶'}
            </button>
            <canvas
                className="node-garden-canvas"
                ref={canvasRef}
                width={width}
                height={height}
            ></canvas>
        </div>
    );
};
