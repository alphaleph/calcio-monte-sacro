import React from 'react';
import { storiesOf } from '@storybook/react';
import { PostCard } from './post-card';
import { mockNewsDataNodes } from '../__tests__/test-util';
import '../../pages/index.scss';

storiesOf('PostCard', module)
    .add('empty', () => <PostCard post={null} />)
    .add('news-en', () => <PostCard post={mockNewsDataNodes[0]} />)
    .add('news-it', () => <PostCard post={mockNewsDataNodes[1]} />)
    .add('news-markdown-en', () => <PostCard post={mockNewsDataNodes[2]} />)
    .add('news-markdown-it', () => <PostCard post={mockNewsDataNodes[3]} />)
    .add('news-symbols-en', () => <PostCard post={mockNewsDataNodes[4]} />)
    .add('news-symbols-it', () => <PostCard post={mockNewsDataNodes[5]} />)
    .add('news-short-en', () => <PostCard post={mockNewsDataNodes[6]} />)
    .add('news-short-it', () => <PostCard post={mockNewsDataNodes[7]} />)
    .add('news-banner-en', () => <PostCard post={mockNewsDataNodes[8]} />)
    .add('news-banner-it', () => <PostCard post={mockNewsDataNodes[9]} />)
    .add('news-image-en', () => <PostCard post={mockNewsDataNodes[10]} />)
    .add('news-image-it', () => <PostCard post={mockNewsDataNodes[11]} />);
