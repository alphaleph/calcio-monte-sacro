import React from 'react';
import { BannerWeAre } from '../banner-we-are/banner-we-are';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('We Are Banner', () => {
    it('renders without crashing', () => {
        const { getByText } = render(<BannerWeAre />);
        expect(getByText('Calcio Monte Sacro')).toBeInTheDocument();
    });

    it('renders correctly', () => {
        const { getByText } = render(<BannerWeAre />);
        expect(getByText('Calcio Monte Sacro')).toBeVisible();
    });

    it('has not changed', () => {
        const { asFragment } = render(<BannerWeAre />);
        expect(asFragment()).toMatchSnapshot();
    });
});
