import React from 'react';
import { SchedulePreview } from '../schedule-preview/schedule-preview';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Schedule Preview', () => {
    it('renders without crashing', () => {
        const { getByText } = render(<SchedulePreview />);
        expect(getByText('Previous Event')).toBeInTheDocument();
        expect(getByText('Upcoming Events')).toBeInTheDocument();
    });

    it('renders correctly', () => {
        const { getByText } = render(<SchedulePreview />);
        expect(getByText('Previous Event')).toBeVisible();
        expect(getByText('Upcoming Events')).toBeVisible();
    });

    it('has not changed', () => {
        const { asFragment } = render(<SchedulePreview />);
        expect(asFragment()).toMatchSnapshot();
    });
});
