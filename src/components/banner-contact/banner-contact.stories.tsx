import React from 'react';
import { storiesOf } from '@storybook/react';
import { BannerContact } from './banner-contact';
import '../../pages/index.scss';

storiesOf('BannerContact', module).add('default', () => <BannerContact />);
