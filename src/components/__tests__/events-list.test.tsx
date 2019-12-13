import React from 'react';
import { PureEventsList } from '../events-list/events-list';
import { mockEventsDataNodes } from '../__tests__/test-util';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MarkdownEventDataNode } from '../../types';

const EMPTY_TEST_ID = 'events-list-empty';
const LIST_TEST_ID = 'events-list';
const EMPTY_LIST: MarkdownEventDataNode[] = [];

//TODO: Props Tests: Date, isDesc

describe('Events List', () => {
    it('renders without crashing', () => {
        const { getByTestId } = render(
            <PureEventsList events={mockEventsDataNodes} />
        );
        expect(getByTestId(LIST_TEST_ID)).toBeInTheDocument();
    });

    it('renders without crashing--empty', () => {
        const { getByTestId } = render(<PureEventsList events={EMPTY_LIST} />);
        expect(getByTestId(EMPTY_TEST_ID)).toBeInTheDocument();
    });

    it('renders correctly', () => {
        const { getByTestId } = render(
            <PureEventsList events={mockEventsDataNodes} />
        );
        expect(getByTestId(LIST_TEST_ID)).toBeVisible();
    });

    it('renders correctly--empty', () => {
        const { getByTestId } = render(<PureEventsList events={EMPTY_LIST} />);
        expect(getByTestId(EMPTY_TEST_ID)).toBeVisible();
    });

    it('has not changed', () => {
        const { asFragment } = render(
            <PureEventsList events={mockEventsDataNodes} />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('has not changed--empty', () => {
        const { asFragment } = render(<PureEventsList events={EMPTY_LIST} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
