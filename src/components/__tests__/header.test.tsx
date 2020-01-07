import React from 'react';
import { PureHeader } from '../header/header';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import {
    resizeToMobile,
    mockFixedImageData,
    mainLinkTexts as LINK_TEXTS,
} from './test-util';

const LOGO_ALT_TEXT = 'Calcio Monte Sacro Homepage';
const HAMBURGER_LABEL = 'Header Menu';

const data = mockFixedImageData;

// TODO: Toggle languages functionality
// TODO: Use programmatic media query to set navbar-end as hidden under 1024px

describe('Header', () => {
    it('renders without crashing', () => {
        const { getByAltText } = render(<PureHeader data={data} />);

        expect(getByAltText(LOGO_ALT_TEXT)).toBeInTheDocument();
    });

    it('renders correctly on larger than mobile', () => {
        const { getByAltText, getByText } = render(<PureHeader data={data} />);

        expect(getByAltText(LOGO_ALT_TEXT)).toHaveAttribute('loading', 'lazy');
        for (let pageTitle of Object.keys(LINK_TEXTS)) {
            expect(getByText(pageTitle)).toBeVisible();
            // // BDD Test: Click
            // expect(getByText(pageTitle)).toHaveAttribute(
            //     'href',
            //     LINK_TEXTS[pageTitle]
            // );
        }
    });

    it('has a collapsed hamburger menu on mobile', () => {
        resizeToMobile();
        const { getByLabelText } = render(<PureHeader data={data} />);

        expect(getByLabelText(HAMBURGER_LABEL)).toBeVisible();
        expect(getByLabelText(HAMBURGER_LABEL)).toHaveAttribute(
            'aria-expanded',
            'false'
        );
    });

    it('expands the hamburger menu on click', () => {
        resizeToMobile();
        const { getByLabelText, getByText } = render(
            <PureHeader data={data} />
        );

        userEvent.click(getByLabelText(HAMBURGER_LABEL));

        expect(getByLabelText(HAMBURGER_LABEL)).toHaveAttribute(
            'aria-expanded',
            'true'
        );
        for (let pageTitle of Object.keys(LINK_TEXTS)) {
            expect(getByText(pageTitle)).toBeVisible();
        }
    });

    it('collapses the hamburger menu on click after opening', () => {
        resizeToMobile();
        const { getByLabelText } = render(<PureHeader data={data} />);

        userEvent.dblClick(getByLabelText(HAMBURGER_LABEL));

        expect(getByLabelText(HAMBURGER_LABEL)).toHaveAttribute(
            'aria-expanded',
            'false'
        );
    });

    it('has not changed', () => {
        const { asFragment } = render(<PureHeader data={data} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
