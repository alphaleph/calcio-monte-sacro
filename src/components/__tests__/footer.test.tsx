import React from 'react';
import { Footer } from '../footer/footer';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { resizeToMobile, mainLinkTexts, legalButtonTexts } from './test-util';
import {
    EMAIL_ADDR,
    TERMS_AND_CONDITIONS,
    PRIVACY,
    COOKIES,
} from '../../constants';

const openModal = jest.fn();

describe('Footer', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders without crashing', () => {
        const { getByText } = render(<Footer openModal={openModal} />);
        expect(getByText(EMAIL_ADDR)).toBeInTheDocument();
    });

    it('renders correctly', () => {
        const { getByText } = render(<Footer openModal={openModal} />);
        for (let pageTitle of Object.keys(mainLinkTexts)) {
            expect(getByText(pageTitle)).toBeVisible();
            expect(getByText(pageTitle)).toHaveAttribute(
                'href',
                mainLinkTexts[pageTitle]
            );
        }
        for (let buttonText of legalButtonTexts) {
            expect(getByText(buttonText)).toBeVisible();
        }
        expect(getByText(EMAIL_ADDR)).toBeVisible();
    });

    it('renders correctly on mobile', () => {
        resizeToMobile();
        const { getByText } = render(<Footer openModal={openModal} />);

        for (let pageTitle of Object.keys(mainLinkTexts)) {
            expect(getByText(pageTitle)).toBeVisible();
            expect(getByText(pageTitle)).toHaveAttribute(
                'href',
                mainLinkTexts[pageTitle]
            );
        }
        for (let buttonText of legalButtonTexts) {
            expect(getByText(buttonText)).toBeVisible();
        }
        expect(getByText(EMAIL_ADDR)).toBeVisible();
    });

    it('opens Terms and Conditions modal on correct button click', () => {
        const { getByText } = render(<Footer openModal={openModal} />);
        userEvent.click(getByText(legalButtonTexts[0]));
        expect(openModal).toHaveBeenCalledTimes(1);
        expect(openModal).toHaveBeenCalledWith(TERMS_AND_CONDITIONS);
    });

    it('opens Privacy modal on correct button click', () => {
        const { getByText } = render(<Footer openModal={openModal} />);
        userEvent.click(getByText(legalButtonTexts[1]));
        expect(openModal).toHaveBeenCalledTimes(1);
        expect(openModal).toHaveBeenCalledWith(PRIVACY);
    });

    it('opens Cookies modal on correct button click', () => {
        const { getByText } = render(<Footer openModal={openModal} />);
        userEvent.click(getByText(legalButtonTexts[2]));
        expect(openModal).toHaveBeenCalledTimes(1);
        expect(openModal).toHaveBeenCalledWith(COOKIES);
    });

    it('has not changed', () => {
        const { asFragment } = render(<Footer openModal={openModal} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
