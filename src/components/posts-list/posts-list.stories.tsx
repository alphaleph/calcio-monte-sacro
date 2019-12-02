import React from 'react';
import { storiesOf } from '@storybook/react';
import { PostsList } from './posts-list';
import { mockNewsDataNodes } from '../__tests__/test-util';
import '../../pages/index.scss';

storiesOf('PostsList', module)
    .add('news', () => <PostsList posts={mockNewsDataNodes} />)
    .add('empty', () => <PostsList posts={null} />)
    .add('one-post', () => <PostsList posts={mockNewsDataNodes} size={1} />)
    .add('two-posts', () => <PostsList posts={mockNewsDataNodes} size={2} />)
    .add('nine-posts', () => <PostsList posts={mockNewsDataNodes} size={9} />);
