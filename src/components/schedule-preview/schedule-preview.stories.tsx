import React from 'react';
import { storiesOf } from '@storybook/react';
import { PureSchedulePreview } from './schedule-preview';
import { mockScheduleDataNodes } from '../__tests__/test-util';
import '../../pages/index.scss';

storiesOf('SchedulePreview', module).add('default', () => (
    <PureSchedulePreview events={mockScheduleDataNodes} />
));
