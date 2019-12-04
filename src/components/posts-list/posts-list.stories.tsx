import React from 'react';
import { storiesOf } from '@storybook/react';
import { PostsList } from './posts-list';
import {
    mockNewsDataNodes,
    mockFluidImageDataNodes,
} from '../__tests__/test-util';
import '../../pages/index.scss';

storiesOf('PostsList', module)
    .add('news', () => (
        <PostsList posts={mockNewsDataNodes} images={mockFluidImageDataNodes} />
    ))
    .add('empty', () => <PostsList posts={null} images={[]} />)
    .add('one-post', () => (
        <PostsList
            posts={[mockNewsDataNodes[0]]}
            size={1}
            images={mockFluidImageDataNodes}
        />
    ))
    .add('two-posts', () => (
        <PostsList
            posts={[mockNewsDataNodes[0], mockNewsDataNodes[1]]}
            size={2}
            images={mockFluidImageDataNodes}
        />
    ))
    .add('three-posts', () => (
        <PostsList
            posts={mockNewsDataNodes}
            size={3}
            images={mockFluidImageDataNodes}
        />
    ))
    .add('four-posts', () => (
        <PostsList
            posts={mockNewsDataNodes}
            size={4}
            images={mockFluidImageDataNodes}
        />
    ))
    .add('six-posts', () => (
        <PostsList
            posts={mockNewsDataNodes}
            size={6}
            images={mockFluidImageDataNodes}
        />
    ))
    .add('nine-posts', () => (
        <PostsList
            posts={mockNewsDataNodes}
            size={9}
            images={mockFluidImageDataNodes}
        />
    ));
