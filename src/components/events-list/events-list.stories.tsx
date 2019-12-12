import React from 'react';
import { storiesOf } from '@storybook/react';
import { PureEventsList } from './events-list';
import '../../pages/index.scss';
import { mockEventsDataNodes } from '../__tests__/test-util';

storiesOf('EventsList', module)
    .add('default', () => <PureEventsList events={mockEventsDataNodes} />)
    .add('empty', () => <PureEventsList events={[]} />);
