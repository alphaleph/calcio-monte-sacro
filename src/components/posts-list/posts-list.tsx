import React from 'react';
import { Link } from 'gatsby';
import { MarkdownDataNode } from '../../types';

interface PostsListProps {
    posts: MarkdownDataNode[] | null;
    size?: number;
}

export const PostsList = ({ posts, size = 3 }: PostsListProps) => {
    return <div />;
}
