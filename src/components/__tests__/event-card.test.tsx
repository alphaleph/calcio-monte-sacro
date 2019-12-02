import React from 'react';
import { EventCard } from '../event-card/event-card';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {
    mockEventPracticeEN,
    mockEventFinishedMatchEN,
    mockEventFutureMatchEN,
} from '../__tests__/test-util';
import { getMonthAbrvEN } from '../../util';

const VENUE = 'Parco Sannazzaro';
const OPP_TEAM = 'CMS2';
const SCORE_MS = 1;
const SCORE_OTHER = 2;
const HOME_SCORE_STRING = `${SCORE_MS}-${SCORE_OTHER}`;
const rawDateFinished = new Date('2019-11-20T17:40:15.578Z');
const DATE_FINISHED = `${rawDateFinished.getDate()} ${getMonthAbrvEN(
    rawDateFinished.getMonth()
)} ${rawDateFinished.getFullYear()}`;
const rawDateFuture = new Date('2200-11-20T17:40:15.578Z');
const DATE_FUTURE = `${rawDateFuture.getDate()} ${getMonthAbrvEN(
    rawDateFuture.getMonth()
)} ${rawDateFuture.getFullYear()}`;
const TIME = `${rawDateFuture.getHours()}:${rawDateFuture.getMinutes()}`;
const EMPTY_TEST_ID = 'empty';

//TODO: Error checks for incorrectly formatted input
//TODO: Test cases for non-home venues
//TODO: Replace team emblem placeholders
describe('Event Card', () => {
    it('renders without crashing--practice', () => {
        const { getByText } = render(<EventCard event={mockEventPracticeEN} />);
        expect(getByText(VENUE)).toBeInTheDocument();
    });

    it('renders without crashing--match-finished', () => {
        const { getByText } = render(
            <EventCard event={mockEventFinishedMatchEN} />
        );
        expect(getByText(VENUE)).toBeInTheDocument();
    });

    it('renders without crashing--match-future', () => {
        const { getByText } = render(
            <EventCard event={mockEventFutureMatchEN} />
        );
        expect(getByText(VENUE)).toBeInTheDocument();
    });

    it('renders without crashing--null', () => {
        const { getByTestId } = render(<EventCard event={null} />);
        expect(getByTestId(EMPTY_TEST_ID)).toBeInTheDocument();
    });

    it('renders correctly--practice', () => {
        const { getByText } = render(<EventCard event={mockEventPracticeEN} />);
        expect(getByText(VENUE)).toBeVisible();
        expect(getByText(DATE_FINISHED)).toBeVisible();
        expect(getByText(TIME)).toBeVisible();
        expect(getByText('PRACTICE')).toBeVisible();
    });

    it('renders correctly--match-finished', () => {
        const { getByText } = render(
            <EventCard event={mockEventFinishedMatchEN} />
        );
        expect(getByText(VENUE)).toBeVisible();
        expect(getByText(DATE_FINISHED)).toBeVisible();
        expect(getByText(OPP_TEAM)).toBeVisible();
        expect(getByText(HOME_SCORE_STRING)).toBeVisible();
    });

    it('renders correctly--match-future', () => {
        const { getByText } = render(
            <EventCard event={mockEventFutureMatchEN} />
        );
        expect(getByText(VENUE)).toBeVisible();
        expect(getByText(DATE_FUTURE)).toBeVisible();
        expect(getByText(TIME)).toBeVisible();
        expect(getByText(OPP_TEAM)).toBeVisible();
    });

    it('renders correctly--null', () => {
        const { getByTestId } = render(<EventCard event={null} />);
        expect(getByTestId(EMPTY_TEST_ID)).toBeVisible();
    });

    it('has not changed--practice', () => {
        const { asFragment } = render(
            <EventCard event={mockEventPracticeEN} />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('has not changed--match-finished', () => {
        const { asFragment } = render(
            <EventCard event={mockEventFinishedMatchEN} />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('has not changed--match-future', () => {
        const { asFragment } = render(
            <EventCard event={mockEventFutureMatchEN} />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('has not changed--null', () => {
        const { asFragment } = render(<EventCard event={null} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
