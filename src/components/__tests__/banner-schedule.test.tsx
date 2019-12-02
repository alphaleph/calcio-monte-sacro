import React from 'react';
import { TestBannerSchedule } from '../banner-schedule/banner-schedule';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Banner Schedule', () => {
    it('renders without crashing', () => {
        const { getByText } = render(<TestBannerSchedule />);
        expect(getByText('SCHEDULE')).toBeInTheDocument();
        expect(getByText('SEE FULL SCHEDULE')).toBeInTheDocument();
    });

    it('renders correctly', () => {
        const { getByText } = render(<TestBannerSchedule />);
        expect(getByText('SCHEDULE')).toBeVisible();
        expect(getByText('SEE FULL SCHEDULE')).toBeVisible();
    });

    it('has not changed', () => {
        const { asFragment } = render(<TestBannerSchedule />);
        expect(asFragment()).toMatchSnapshot();
    });
});
