import React from 'react';
import { storiesOf } from '@storybook/react';
import { BannerDrills } from './banner-drills';
import '../../pages/index.scss';

storiesOf('BannerDrills', module).add('default', () => <BannerDrills />);
