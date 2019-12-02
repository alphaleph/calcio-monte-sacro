import React from 'react';
import { PureSchedulePreview } from '../schedule-preview/schedule-preview';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { mockScheduleDataNodes } from './test-util';

//TODO: Fix order of headers in mobile
//TODO: Fix tablet-sized overlap

describe('Schedule Preview', () => {
    it('renders without crashing', () => {
        const { getByText } = render(
            <PureSchedulePreview events={mockScheduleDataNodes} />
        );
        expect(getByText('PREVIOUS EVENT')).toBeInTheDocument();
        expect(getByText('UPCOMING EVENTS')).toBeInTheDocument();
    });

    it('renders correctly', () => {
        const { getByText } = render(
            <PureSchedulePreview events={mockScheduleDataNodes} />
        );
        expect(getByText('PREVIOUS EVENT')).toBeVisible();
        expect(getByText('UPCOMING EVENTS')).toBeVisible();
    });

    it('has not changed', () => {
        const { asFragment } = render(
            <PureSchedulePreview events={mockScheduleDataNodes} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
