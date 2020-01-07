import React from 'react';
import { BannerDonate } from '../banner-donate/banner-donate';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

const buttonText = 'Donate! 🎉';
const buttonTextAfterFirstClick = 'Just kidding!';

//TODO: Fix change after click: should be click, not dblClick

describe('Banner Donate', () => {
    it('renders without crashing', () => {
        const { getByText } = render(<BannerDonate />);
        expect(getByText(buttonText)).toBeInTheDocument();
    });

    it('renders correctly', () => {
        const { getByText } = render(<BannerDonate />);
        expect(getByText(buttonText)).toBeVisible();
    });

    it('changes button text after click', () => {
        const { getByText } = render(<BannerDonate />);
        userEvent.dblClick(getByText(buttonText));
        expect(getByText(buttonTextAfterFirstClick)).toBeVisible();
    });

    it('has not changed', () => {
        const { asFragment } = render(<BannerDonate />);
        expect(asFragment()).toMatchSnapshot();
    });
});
