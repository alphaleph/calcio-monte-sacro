import React from 'react';
import { storiesOf } from '@storybook/react';
import { EventCard } from './event-card';
import '../../pages/index.scss';

storiesOf('BannerSchedule', module).add('default', () => <EventCard />);
