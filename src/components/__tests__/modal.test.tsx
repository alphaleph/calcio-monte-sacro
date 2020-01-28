import React from 'react';
import { render } from '@testing-library/react';
import { Modal } from '../modal/modal';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

const BUTTON_TEXT = 'Close';
const closeModal = jest.fn();
const title = 'Title';
const text = 'Text';

describe('Modal', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders without crashing', () => {
        const { getByText } = render(
            <Modal
                closeModal={closeModal}
                modalTitle={title}
                modalText={text}
            />
        );
        expect(getByText(title)).toBeInTheDocument();
    });

    it('renders correctly', () => {
        const { getByText } = render(
            <Modal
                closeModal={closeModal}
                modalTitle={title}
                modalText={text}
            />
        );
        expect(getByText(title)).toBeVisible();
        expect(getByText(text)).toBeVisible();
        expect(getByText(BUTTON_TEXT)).toBeVisible();
    });

    it('closes upon button press', () => {
        const { getByText } = render(
            <Modal
                closeModal={closeModal}
                modalTitle={title}
                modalText={text}
            />
        );

        userEvent.click(getByText(BUTTON_TEXT));

        expect(closeModal).toBeCalledTimes(1);
    });
});
