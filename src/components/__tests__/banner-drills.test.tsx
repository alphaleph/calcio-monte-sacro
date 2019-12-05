import React from 'react';
import { BannerDrills } from '../banner-drills/banner-drills';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const title = 'The Techniques of the Trade...';
const buttonText = 'SEE DRILLS';

describe('Banner Drills', () => {
    it('renders without crashing', () => {
        const { getByText } = render(<BannerDrills />);
        expect(getByText(title)).toBeInTheDocument();
        expect(getByText(buttonText)).toBeInTheDocument();
    });

    it('renders correctly', () => {
        const { getByText } = render(<BannerDrills />);
        expect(getByText(title)).toBeVisible();
        expect(getByText(buttonText)).toBeVisible();
    });

    it('has not changed', () => {
        const { asFragment } = render(<BannerDrills />);
        expect(asFragment()).toMatchSnapshot();
    });
});
