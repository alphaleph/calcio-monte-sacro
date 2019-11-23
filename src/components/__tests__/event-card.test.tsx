import React from 'react';
import { EventCard } from '../event-card/event-card';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const eventTitle = 'Title';

describe('Banner Schedule', () => {
    it('renders without crashing', () => {
        const { getByText } = render(<EventCard />);
        expect(getByText(eventTitle)).toBeInTheDocument();
    });

    it('renders correctly', () => {
        const { getByText } = render(<EventCard />);
        expect(getByText(eventTitle)).toBeVisible();
    });

    it('has not changed', () => {
        const { asFragment } = render(<EventCard />);
        expect(asFragment()).toMatchSnapshot();
    });
});
