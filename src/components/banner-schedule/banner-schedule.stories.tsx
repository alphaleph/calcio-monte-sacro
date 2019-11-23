import React from 'react';
import { storiesOf } from '@storybook/react';
import { BannerSchedule } from './banner-schedule';
import '../../pages/index.scss';

storiesOf('BannerSchedule', module).add('default', () => <BannerSchedule />);
