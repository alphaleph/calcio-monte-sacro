import React from 'react';
import { PostCard } from '../post-card/post-card';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { NEWS_URL } from '../../constants';
import {
    mockNewsDataNodes,
    mockFluidImageDataNodes,
} from '../__tests__/test-util';
import { getMonthAbrvEN } from '../../util';
import { FluidImageDataNode } from '../../types';

const rawDate = new Date('2019-12-02T19:23:26.234Z');
const DATE = `${rawDate.getDate()} ${getMonthAbrvEN(
    rawDate.getMonth()
)} ${rawDate.getFullYear()}`;
const TITLE = 'Test News Plain';
const EXCERPT =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a volutpat nulla, scelerisque mollis est. Sed eget cursus ipsum. Mauris…';
const POSTCARD_URL = NEWS_URL + '/2019-12-02-test-news-plain/';
const EMPTY_TEST_ID = 'post-card-empty';
const LINK_TEST_ID = 'post-card-link';
const mockImage: FluidImageDataNode = mockFluidImageDataNodes[0];

describe('Post Card', () => {
    it('renders without crashing', () => {
        const { getByText } = render(
            <PostCard post={mockNewsDataNodes[0]} image={mockImage} />
        );
        expect(getByText(TITLE)).toBeInTheDocument();
    });

    it('renders without crashing--null', () => {
        const { getByTestId } = render(<PostCard post={null} image={null} />);
        expect(getByTestId(EMPTY_TEST_ID)).toBeInTheDocument();
    });

    it('renders correctly', () => {
        const { getByText, getByTestId } = render(
            <PostCard post={mockNewsDataNodes[0]} image={mockImage} />
        );
        expect(getByText(TITLE)).toBeVisible();
        expect(getByText(DATE)).toBeVisible();
        expect(getByText(EXCERPT)).toBeVisible();
        expect(getByTestId(LINK_TEST_ID)).toHaveAttribute('href', POSTCARD_URL);
    });

    it('renders correctly--null', () => {
        const { getByTestId } = render(<PostCard post={null} image={null} />);
        expect(getByTestId(EMPTY_TEST_ID)).toBeVisible();
    });

    it('has not changed', () => {
        const { asFragment } = render(
            <PostCard post={mockNewsDataNodes[0]} image={mockImage} />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('has not changed--null', () => {
        const { asFragment } = render(<PostCard post={null} image={null} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
