import React from 'react';
import { TestBannerLatestBlogs } from '../banner-latest-blogs/banner-latest-blogs';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const title = 'LATEST BLOGS';
const buttonText = 'SEE BLOG';

describe('Banner Blog', () => {
    it('renders without crashing', () => {
        const { getByText } = render(<TestBannerLatestBlogs />);
        expect(getByText(title)).toBeInTheDocument();
        expect(getByText(buttonText)).toBeInTheDocument();
    });

    it('renders correctly', () => {
        const { getByText } = render(<TestBannerLatestBlogs />);
        expect(getByText(title)).toBeVisible();
        expect(getByText(buttonText)).toBeVisible();
    });

    it('has not changed', () => {
        const { asFragment } = render(<TestBannerLatestBlogs />);
        expect(asFragment()).toMatchSnapshot();
    });
});
