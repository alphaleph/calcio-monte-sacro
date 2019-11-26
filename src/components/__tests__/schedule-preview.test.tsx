import React from 'react';
import { PureSchedulePreview } from '../schedule-preview/schedule-preview';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { mockScheduleDataNodes } from './test-util';

describe('Schedule Preview', () => {
    it('renders without crashing', () => {
        const { getByText } = render(
            <PureSchedulePreview events={mockScheduleDataNodes} />
        );
        expect(getByText('Previous Event')).toBeInTheDocument();
        expect(getByText('Upcoming Events')).toBeInTheDocument();
    });

    it('renders correctly', () => {
        const { getByText } = render(
            <PureSchedulePreview events={mockScheduleDataNodes} />
        );
        expect(getByText('Previous Event')).toBeVisible();
        expect(getByText('Upcoming Events')).toBeVisible();
    });

    it('has not changed', () => {
        const { asFragment } = render(
            <PureSchedulePreview events={mockScheduleDataNodes} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
