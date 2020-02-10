import React from 'react';
import { storiesOf } from '@storybook/react';
import { Modal } from './modal';
import '../../pages/index.scss';
import { PRIVACY_STRING } from '../../constants';

const closeModal = () => {
    console.log('Closing modal');
};
const title = 'Title';
const text = 'Text';

storiesOf('Modal', module)
    .add('default', () => (
        <Modal
            isActive={true}
            closeModal={closeModal}
            modalTitle={title}
            modalText={text}
        />
    ))
    .add('Long Text', () => (
        <Modal
            isActive={true}
            closeModal={closeModal}
            modalTitle={title}
            modalText={PRIVACY_STRING}
        />
    ));
