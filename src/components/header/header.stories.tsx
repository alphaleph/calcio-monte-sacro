import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';
import { Header } from './header';

export const siteTitle = 'Calcio Monte Sacro Test';
export const isDarkMode = false;
export const actions = {
    onDarkMode: action('onDarkMode'),
};

storiesOf('Header', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <Header
            siteTitle={object('siteTitle', siteTitle)}
            isDarkMode={object('isDarkMode', isDarkMode)}
            {...actions}
        />
    ))
    .add('dark-mode', () => (
        <Header siteTitle={siteTitle} isDarkMode={true} {...actions} />
    ));
