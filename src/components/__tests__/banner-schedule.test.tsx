import React from 'react';
import { BannerSchedule } from '../banner-schedule/banner-schedule';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { mainLinkTexts } from './test-util';

describe('Banner Schedule', () => {
    it('renders without crashing', () => {
        const { getByText } = render(<BannerSchedule />);
        expect(getByText('Schedule')).toBeInTheDocument();
        expect(getByText('See Full Schedule')).toBeInTheDocument();
    });

    it('renders correctly', () => {
        const { getByText } = render(<BannerSchedule />);
        expect(getByText('Schedule')).toBeVisible();
        expect(getByText('See Full Schedule')).toBeVisible();
        expect(getByText('See Full Schedule')).toHaveAttribute(
            'href',
            mainLinkTexts['Schedule']
        );
    });

    it('has not changed', () => {
        const { asFragment } = render(<BannerSchedule />);
        expect(asFragment()).toMatchSnapshot();
    });
});
