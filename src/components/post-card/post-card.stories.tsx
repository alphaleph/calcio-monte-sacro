import React from 'react';
import { storiesOf } from '@storybook/react';
import { PostCard } from './post-card';
import {
    mockNewsDataNodes,
    mockFluidImageDataNodes,
} from '../__tests__/test-util';
import '../../pages/index.scss';

storiesOf('PostCard', module)
    .add('empty', () => <PostCard post={null} image={null} />)
    .add('news-en', () => (
        <PostCard
            post={mockNewsDataNodes[0]}
            image={mockFluidImageDataNodes[0]}
        />
    ))
    .add('news-it', () => (
        <PostCard
            post={mockNewsDataNodes[1]}
            image={mockFluidImageDataNodes[0]}
        />
    ))
    .add('news-markdown-en', () => (
        <PostCard
            post={mockNewsDataNodes[2]}
            image={mockFluidImageDataNodes[0]}
        />
    ))
    .add('news-markdown-it', () => (
        <PostCard
            post={mockNewsDataNodes[3]}
            image={mockFluidImageDataNodes[0]}
        />
    ))
    .add('news-symbols-en', () => (
        <PostCard
            post={mockNewsDataNodes[4]}
            image={mockFluidImageDataNodes[0]}
        />
    ))
    .add('news-symbols-it', () => (
        <PostCard
            post={mockNewsDataNodes[5]}
            image={mockFluidImageDataNodes[0]}
        />
    ))
    .add('news-short-en', () => (
        <PostCard
            post={mockNewsDataNodes[6]}
            image={mockFluidImageDataNodes[0]}
        />
    ))
    .add('news-short-it', () => (
        <PostCard
            post={mockNewsDataNodes[7]}
            image={mockFluidImageDataNodes[0]}
        />
    ))
    .add('news-banner-en', () => (
        <PostCard
            post={mockNewsDataNodes[8]}
            image={mockFluidImageDataNodes[4]}
        />
    ))
    .add('news-banner-it', () => (
        <PostCard
            post={mockNewsDataNodes[9]}
            image={mockFluidImageDataNodes[4]}
        />
    ))
    .add('news-image-en', () => (
        <PostCard
            post={mockNewsDataNodes[10]}
            image={mockFluidImageDataNodes[0]}
        />
    ))
    .add('news-image-it', () => (
        <PostCard
            post={mockNewsDataNodes[11]}
            image={mockFluidImageDataNodes[0]}
        />
    ));
