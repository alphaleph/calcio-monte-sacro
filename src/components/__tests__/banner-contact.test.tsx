import React from 'react';
import { BannerContact } from '../banner-contact/banner-contact';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { EMAIL_ADDR, HOME_LOCATION, LOCATION_URL } from '../../constants';

const title = 'CONTACT US';
const emailLink = `mailto:${EMAIL_ADDR}`;

describe('Banner Contact', () => {
    it('renders without crashing', () => {
        const { getByText } = render(<BannerContact />);
        expect(getByText(title)).toBeInTheDocument();
    });

    it('renders correctly', () => {
        const { getByText } = render(<BannerContact />);
        expect(getByText(title)).toBeVisible();
        expect(getByText(HOME_LOCATION)).toBeVisible();
        expect(getByText(HOME_LOCATION)).toHaveAttribute('href', LOCATION_URL);
        expect(getByText(EMAIL_ADDR)).toBeVisible();
        expect(getByText(EMAIL_ADDR)).toHaveAttribute('href', emailLink);
    });

    it('has not changed', () => {
        const { asFragment } = render(<BannerContact />);
        expect(asFragment()).toMatchSnapshot();
    });
});
