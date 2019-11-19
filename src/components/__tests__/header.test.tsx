import React from 'react';
import { Header } from '../header/header';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { PageTitleToURLMap } from '../../types/index';
import { resizeToMobile } from './test-util';

const SITE_TITLE = 'test';
const SITE_URL = 'https://www.calciomontesacro.com';
const LOGO_ALT_TEXT = 'Calcio Monte Sacro Homepage';
const HAMBURGER_LABEL = 'Header Menu';
const LINK_TEXTS: PageTitleToURLMap = {
    Schedule: `/schedule`,
    News: `/news`,
    Blog: `/blog`,
    Drills: `/drills`,
    About: `/about`,
};

describe('Header', () => {
    it('renders without crashing', () => {
        const { getByAltText } = render(<Header siteTitle={SITE_TITLE} />);

        expect(getByAltText(LOGO_ALT_TEXT)).toBeInTheDocument();
    });

    it('renders correctly on larger than mobile', () => {
        const { getByAltText, getByText } = render(
            <Header siteTitle={SITE_TITLE} />
        );

        expect(getByAltText(LOGO_ALT_TEXT)).toHaveAttribute('href', SITE_URL);
        for (let pageTitle of Object.keys(LINK_TEXTS)) {
            expect(getByText(pageTitle)).toBeVisible();
            expect(getByText(pageTitle)).toHaveAttribute(
                'href',
                LINK_TEXTS[pageTitle]
            );
        }
    });

    it('has a collapsed hamburger menu on mobile', () => {
        resizeToMobile();
        const { getByLabelText, getByText } = render(
            <Header siteTitle={SITE_TITLE} />
        );

        expect(getByLabelText(HAMBURGER_LABEL)).toBeVisible();
        expect(getByLabelText(HAMBURGER_LABEL)).toHaveAttribute(
            'aria-expanded',
            'false'
        );
        for (let pageTitle of Object.keys(LINK_TEXTS)) {
            expect(getByText(pageTitle)).not.toBeVisible();
        }
    });

    it('expands the hamburger menu on click', () => {
        resizeToMobile();
        const { getByLabelText, getByText } = render(
            <Header siteTitle={SITE_TITLE} />
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
        const { getByLabelText, getByText } = render(
            <Header siteTitle={SITE_TITLE} />
        );

        userEvent.dblClick(getByLabelText(HAMBURGER_LABEL));

        expect(getByLabelText(HAMBURGER_LABEL)).toHaveAttribute(
            'aria-expanded',
            'false'
        );
        for (let pageTitle of Object.keys(LINK_TEXTS)) {
            expect(getByText(pageTitle)).not.toBeVisible();
        }
    });

    it('has not changed', () => {
        const { asFragment } = render(<Header siteTitle={SITE_TITLE} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
