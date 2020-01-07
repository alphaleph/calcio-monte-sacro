import React from 'react';
import { PureBannerWeAre } from '../banner-we-are/banner-we-are';
import { mockFluidImageDataNodes } from './test-util';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('We Are Banner', () => {
    it('renders without crashing', () => {
        const { getByText } = render(
            <PureBannerWeAre bgImage={mockFluidImageDataNodes[0].node} />
        );
        expect(getByText('Calcio Monte Sacro')).toBeInTheDocument();
    });

    it('renders correctly', () => {
        const { getByText } = render(
            <PureBannerWeAre bgImage={mockFluidImageDataNodes[0].node} />
        );
        expect(getByText('Calcio Monte Sacro')).toBeVisible();
    });

    it('has not changed', () => {
        const { asFragment } = render(
            <PureBannerWeAre bgImage={mockFluidImageDataNodes[0].node} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
