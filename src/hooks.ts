import { useState, useEffect } from 'react';
import { WindowDimensions } from './types/index';

const getWindowDimensions = () => {
    if (typeof window !== 'undefined') {
        const { innerWidth: width, innerHeight: height } = window;
        return { width, height };
    } else {
        console.error('Error: Cannot get dimensions of window.');
        return { width: 0, height: 0 };
    }
};

export const useWindowDimensions = (): WindowDimensions => {
    const [windowDimensions, setWindowDimensions] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function handleResize() {
        setWindowDimensions(getWindowDimensions());
    }

    return windowDimensions;
};
