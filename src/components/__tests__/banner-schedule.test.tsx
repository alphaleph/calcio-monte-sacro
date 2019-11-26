import React from 'react';
import { BannerSchedule } from '../banner-schedule/banner-schedule';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Banner Schedule', () => {
    it('renders without crashing', () => {
        const { getByText } = render(<BannerSchedule />);
        expect(getByText('SCHEDULE')).toBeInTheDocument();
        expect(getByText('SEE FULL SCHEDULE')).toBeInTheDocument();
    });

    it('renders correctly', () => {
        const { getByText } = render(<BannerSchedule />);
        expect(getByText('SCHEDULE')).toBeVisible();
        expect(getByText('SEE FULL SCHEDULE')).toBeVisible();
    });

    it('has not changed', () => {
        const { asFragment } = render(<BannerSchedule />);
        expect(asFragment()).toMatchSnapshot();
    });
});
