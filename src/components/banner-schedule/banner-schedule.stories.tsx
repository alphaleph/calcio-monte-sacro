import React from 'react';
import { storiesOf } from '@storybook/react';
import { TestBannerSchedule } from './banner-schedule';
import '../../pages/index.scss';

storiesOf('BannerSchedule', module).add('default', () => (
    <TestBannerSchedule />
));
