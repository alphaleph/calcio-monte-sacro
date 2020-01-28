import React from 'react';
import { storiesOf } from '@storybook/react';
import { Modal } from './modal';
import '../../pages/index.scss';

const closeModal = jest.fn();
const title = 'Title';
const text = 'Text';

storiesOf('Modal', module).add('default', () => (
    <Modal closeModal={closeModal} modalTitle={title} modalText={text} />
));
