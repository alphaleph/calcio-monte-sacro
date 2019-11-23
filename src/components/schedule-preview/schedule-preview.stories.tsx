import React from 'react';
import { storiesOf } from '@storybook/react';
import { SchedulePreview } from './schedule-preview';
import '../../pages/index.scss';

storiesOf('SchedulePreview', module).add('default', () => <SchedulePreview />);
