import React from 'react';
import { render } from '@testing-library/react';
import { Modal } from '../modal/modal';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

const BUTTON_TEXT = 'Close';
const HEADER_BUTTON_LABEL = 'Close Modal';
const BACKGROUND_TESTID = 'modal-background';
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
                isActive={true}
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
                isActive={true}
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
                isActive={true}
                closeModal={closeModal}
                modalTitle={title}
                modalText={text}
            />
        );

        userEvent.click(getByText(BUTTON_TEXT));

        expect(closeModal).toBeCalledTimes(1);
    });

    it('closes upon background click', () => {
        const { getByTestId } = render(
            <Modal
                isActive={true}
                closeModal={closeModal}
                modalTitle={title}
                modalText={text}
            />
        );

        userEvent.click(getByTestId(BACKGROUND_TESTID));

        expect(closeModal).toBeCalledTimes(1);
    });

    it('closes upon header button press', () => {
        const { getByLabelText } = render(
            <Modal
                isActive={true}
                closeModal={closeModal}
                modalTitle={title}
                modalText={text}
            />
        );

        userEvent.click(getByLabelText(HEADER_BUTTON_LABEL));

        expect(closeModal).toBeCalledTimes(1);
    });
});
