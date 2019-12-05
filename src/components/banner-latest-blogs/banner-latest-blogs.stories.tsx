import React from 'react';
import { storiesOf } from '@storybook/react';
import { BannerLatestBlogs } from './banner-latest-blogs';
import '../../pages/index.scss';

storiesOf('BannerLatestNews', module).add('default', () => (
    <BannerLatestBlogs />
));
