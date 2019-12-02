import React from 'react';
import { storiesOf } from '@storybook/react';
import { PureSchedulePreview } from './schedule-preview';
import {
    mockScheduleDataNodes,
    mockOneFutureScheduleDataNodes,
    mockTwoFutureScheduleDataNodes,
} from '../__tests__/test-util';
import '../../pages/index.scss';

storiesOf('SchedulePreview', module)
    .add('zero future events', () => (
        <PureSchedulePreview events={mockScheduleDataNodes} />
    ))
    .add('one future event', () => (
        <PureSchedulePreview events={mockOneFutureScheduleDataNodes} />
    ))
    .add('two future events', () => (
        <PureSchedulePreview events={mockTwoFutureScheduleDataNodes} />
    ));
