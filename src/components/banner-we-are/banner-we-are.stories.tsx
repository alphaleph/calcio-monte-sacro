import React from 'react';
import { storiesOf } from '@storybook/react';
import { BannerWeAre } from './banner-we-are';
import '../../pages/index.scss';

storiesOf('BannerWeAre', module).add('default', () => <BannerWeAre />);
