import React from 'react';
import { PureBannerWeAre } from '../banner-we-are/banner-we-are';
import { mockFluidImageDataNodes } from './test-util';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('We Are Banner', () => {
    it('renders without crashing', () => {
        const { getByAltText } = render(
            <PureBannerWeAre
                bottomDivider={true}
                bgImage={mockFluidImageDataNodes[0].node}
            />
        );
        expect(getByAltText('Calcio Monte Sacro Logo')).toBeInTheDocument();
    });

    it('has not changed', () => {
        const { asFragment } = render(
            <PureBannerWeAre
                bottomDivider={true}
                bgImage={mockFluidImageDataNodes[0].node}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
