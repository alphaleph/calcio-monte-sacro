import React from 'react';
import { TestBannerLatestNews } from '../banner-latest-news/banner-latest-news';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Banner Latest News', () => {
    it('renders without crashing', () => {
        const { getByText } = render(<TestBannerLatestNews />);
        expect(getByText('LATEST NEWS')).toBeInTheDocument();
        expect(getByText('SEE MORE NEWS')).toBeInTheDocument();
    });

    it('renders correctly', () => {
        const { getByText } = render(<TestBannerLatestNews />);
        expect(getByText('LATEST NEWS')).toBeVisible();
        expect(getByText('SEE MORE NEWS')).toBeVisible();
    });

    it('has not changed', () => {
        const { asFragment } = render(<TestBannerLatestNews />);
        expect(asFragment()).toMatchSnapshot();
    });
});
