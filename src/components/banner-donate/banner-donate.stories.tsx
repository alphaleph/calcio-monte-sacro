import React from 'react';
import { storiesOf } from '@storybook/react';
import { BannerDonate } from './banner-donate';
import '../../pages/index.scss';

storiesOf('BannerDonate', module).add('default', () => <BannerDonate />);
