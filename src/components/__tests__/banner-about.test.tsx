import React from 'react';
import { PureBannerAbout } from '../banner-about/banner-about';
import { mockFluidImageDataNodes } from './test-util';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const altText = 'Calcio Monte Sacro logo';

describe('Banner Contact', () => {
    it('renders without crashing', () => {
        const { getByAltText } = render(
            <PureBannerAbout
                bgImage={mockFluidImageDataNodes[0].node}
                logoImage={mockFluidImageDataNodes[0].node}
            />
        );
        expect(getByAltText(altText)).toBeInTheDocument();
    });

    it('renders correctly', () => {
        const { getByAltText } = render(
            <PureBannerAbout
                bgImage={mockFluidImageDataNodes[0].node}
                logoImage={mockFluidImageDataNodes[0].node}
            />
        );
        expect(getByAltText(altText)).toHaveAttribute('loading', 'lazy');
    });

    it('has not changed', () => {
        const { asFragment } = render(
            <PureBannerAbout
                bgImage={mockFluidImageDataNodes[0].node}
                logoImage={mockFluidImageDataNodes[0].node}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
