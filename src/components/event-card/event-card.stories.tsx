import React from 'react';
import { storiesOf } from '@storybook/react';
import { EventCard } from './event-card';
import '../../pages/index.scss';
import {
    mockEventPracticeEN,
    mockEventPracticeIT,
    mockEventFinishedMatchEN,
    mockEventFinishedMatchIT,
    mockEventFutureMatchEN,
    mockEventFutureMatchIT,
} from '../__tests__/test-util';

storiesOf('EventCard', module)
    .add('practice-en', () => <EventCard event={mockEventPracticeEN} />)
    .add('match-finished-en', () => (
        <EventCard event={mockEventFinishedMatchEN} />
    ))
    .add('match-future-en', () => <EventCard event={mockEventFutureMatchEN} />)
    .add('practice-it', () => <EventCard event={mockEventPracticeIT} />)
    .add('match-finished-it', () => (
        <EventCard event={mockEventFinishedMatchIT} />
    ))
    .add('match-future-it', () => <EventCard event={mockEventFutureMatchIT} />)
    .add('empty', () => <EventCard event={null} />);
