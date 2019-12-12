import React from 'react';
import { storiesOf } from '@storybook/react';
import { EventRow } from './event-row';
import '../../pages/index.scss';
import {
    mockEventPracticeEN,
    mockEventPracticeIT,
    mockEventFinishedMatchEN,
    mockEventFinishedMatchIT,
    mockEventFutureMatchEN,
    mockEventFutureMatchIT,
} from '../__tests__/test-util';

storiesOf('EventRow', module)
    .add('practice-en', () => <EventRow event={mockEventPracticeEN} />)
    .add('match-finished-en', () => (
        <EventRow event={mockEventFinishedMatchEN} />
    ))
    .add('match-future-en', () => <EventRow event={mockEventFutureMatchEN} />)
    .add('practice-it', () => <EventRow event={mockEventPracticeIT} />)
    .add('match-finished-it', () => (
        <EventRow event={mockEventFinishedMatchIT} />
    ))
    .add('match-future-it', () => <EventRow event={mockEventFutureMatchIT} />)
    .add('empty', () => <EventRow event={null} />);
