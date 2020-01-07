import React from 'react';
import { storiesOf } from '@storybook/react';
import { BannerAbout } from './banner-about';
import '../../pages/index.scss';

storiesOf('BannerAbout', module).add('default', () => <BannerAbout />);
