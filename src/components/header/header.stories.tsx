import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { PureHeader } from './header';
import { mockFixedImageData } from '../__tests__/test-util';
import '../../pages/index.scss';

export const siteTitle = 'Calcio Monte Sacro Test';
export const isDarkMode = false;
export const actions = {
    onDarkMode: action('onDarkMode'),
};

storiesOf('Header', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <PureHeader
            data={mockFixedImageData}
            // {...actions}
        />
    ));
    // .add('dark-mode', () => (
    //     <Header siteTitle={siteTitle} isDarkMode={true} {...actions} />
    // ));
