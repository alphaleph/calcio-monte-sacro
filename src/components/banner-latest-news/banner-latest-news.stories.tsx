import React from 'react';
import { storiesOf } from '@storybook/react';
import { BannerLatestNews } from './banner-latest-news';
import '../../pages/index.scss';

storiesOf('BannerLatestNews', module).add('default', () => (
    <BannerLatestNews />
));
