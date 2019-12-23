import React from 'react';
import { PostCard } from '../post-card/post-card';
import { MarkdownDataNode } from '../../types';
import { findMostRecentlyPastIndex } from '../../util';
import './posts-list.scss';

interface PostsListProps {
    posts: MarkdownDataNode[] | null;
    size?: number;
    date?: number;
}

export const PostsList = ({
    posts,
    size = 3,
    date = Date.now(),
}: PostsListProps) => {
    if (size <= 0) {
        console.error(
            'PostsList: Invalid size parameter - Size must be greater than 0!'
        );
    }

    if (!posts || posts.length === 0) {
        return (
            <section
                className="section has-background-team-granite has-text-team-holy has-text-centered  has-text-weight-bold is-size-4"
                data-testid="posts-list-empty"
            >
                There are currently no posts!
                <br />
                <span className="is-size-1" role="img" aria-label="zzz">
                    💤
                </span>
            </section>
        );
    }

    let postsList = null;

    // Case: Single Card
    if (posts.length === 1 || size === 1) {
        // Generate single Post Card
        postsList = (
            <div className="column is-full">
                <PostCard post={posts[0] ? posts[0] : null} />
            </div>
        );
    } else {
        // General Cose: n-Cards
        const pastIndex = findMostRecentlyPastIndex(posts, date);

        const currPosts = posts.filter(
            (postDatum, index) => index <= pastIndex && index > pastIndex - size
        );

        // Generate n-Cards
        postsList = currPosts.map((post, index) => (
            <div
                className={
                    posts.length === 2 || size === 2
                        ? 'column is-half'
                        : 'column is-one-third'
                }
                key={index}
            >
                <PostCard post={post ? post : null} />
            </div>
        ));
    }
    return (
        <section className="columns is-multiline" data-testid="posts-list">
            {postsList}
        </section>
    );
};
