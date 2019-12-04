import React from 'react';
import { PostsList } from '../posts-list/posts-list';
import { mockNewsDataNodes, mockFluidImageDataNodes } from '../__tests__/test-util';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MarkdownDataNode } from '../../types';

const EMPTY_TEST_ID = 'posts-list-empty';
const LIST_TEST_ID = 'posts-list';
const EMPTY_LIST: MarkdownDataNode[] = [];

describe('Posts List', () => {
    it('renders without crashing--news', () => {
        const { getByTestId } = render(<PostsList posts={mockNewsDataNodes} images={mockFluidImageDataNodes} />);
        expect(getByTestId(LIST_TEST_ID)).toBeInTheDocument();
    });

    it('renders without crashing--empty', () => {
        const { getByTestId } = render(<PostsList posts={EMPTY_LIST} images={mockFluidImageDataNodes} />);
        expect(getByTestId(EMPTY_TEST_ID)).toBeInTheDocument();
    });

    it('renders without crashing--one-post', () => {
        const { getByTestId } = render(
            <PostsList posts={mockNewsDataNodes} size={1} images={mockFluidImageDataNodes} />
        );
        expect(getByTestId(LIST_TEST_ID)).toBeInTheDocument();
    });

    it('renders without crashing--two-posts', () => {
        const { getByTestId } = render(
            <PostsList posts={mockNewsDataNodes} size={2} images={mockFluidImageDataNodes} />
        );
        expect(getByTestId(LIST_TEST_ID)).toBeInTheDocument();
    });

    it('renders without crashing--nine-posts', () => {
        const { getByTestId } = render(
            <PostsList posts={mockNewsDataNodes} size={9} images={mockFluidImageDataNodes} />
        );
        expect(getByTestId(LIST_TEST_ID)).toBeInTheDocument();
    });

    it('renders correctly--news', () => {
        const { getByTestId } = render(<PostsList posts={mockNewsDataNodes} images={mockFluidImageDataNodes} />);
        expect(getByTestId(LIST_TEST_ID)).toBeVisible();
    });

    it('renders correctly--empty', () => {
        const { getByTestId } = render(<PostsList posts={EMPTY_LIST} images={mockFluidImageDataNodes} />);
        expect(getByTestId(EMPTY_TEST_ID)).toBeVisible();
    });

    it('renders correctly--one-post', () => {
        const { getByTestId } = render(
            <PostsList posts={mockNewsDataNodes} size={1} images={mockFluidImageDataNodes} />
        );
        expect(getByTestId(LIST_TEST_ID)).toBeVisible();
    });
    it('renders correctly--two=posts', () => {
        const { getByTestId } = render(
            <PostsList posts={mockNewsDataNodes} size={2} images={mockFluidImageDataNodes} />
        );
        expect(getByTestId(LIST_TEST_ID)).toBeVisible();
    });

    it('renders correctly--nine-posts', () => {
        const { getByTestId } = render(
            <PostsList posts={mockNewsDataNodes} size={9} images={mockFluidImageDataNodes} />
        );
        expect(getByTestId(LIST_TEST_ID)).toBeVisible();
    });

    it('has not changed--news', () => {
        const { asFragment } = render(<PostsList posts={mockNewsDataNodes} images={mockFluidImageDataNodes} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('has not changed--empty', () => {
        const { asFragment } = render(<PostsList posts={EMPTY_LIST} images={mockFluidImageDataNodes} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('has not changed--one-post', () => {
        const { asFragment } = render(
            <PostsList posts={mockNewsDataNodes} size={1} images={mockFluidImageDataNodes} />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('has not changed--two-posts', () => {
        const { asFragment } = render(
            <PostsList posts={mockNewsDataNodes} size={2} images={mockFluidImageDataNodes} />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('has not changed--nine-posts', () => {
        const { asFragment } = render(
            <PostsList posts={mockNewsDataNodes} size={9} images={mockFluidImageDataNodes} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
