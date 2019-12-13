import React from 'react';
import { PostCard } from '../post-card/post-card';
import { MarkdownDataNode, FluidImageDataNode } from '../../types';
import { findMostRecentlyPastIndex, getNetlifyCMSFilename } from '../../util';
import './posts-list.scss';

interface PostsListProps {
    posts: MarkdownDataNode[] | null;
    size?: number;
    date?: number;
    images: FluidImageDataNode[];
}

export const PostsList = ({
    posts,
    size = 3,
    date = Date.now(),
    images,
}: PostsListProps) => {
    // Returns array of fluid images with indices corresponding to posts param.
    const makePostImageArray = (
        posts: MarkdownDataNode[],
        images: FluidImageDataNode[]
    ): FluidImageDataNode[] => {
        let imagesList: FluidImageDataNode[] = [];
        for (let i = 0; i < posts.length; i++) {
            for (let j = 0; j < images.length; j++) {
                if (
                    getNetlifyCMSFilename(
                        posts[i].node.frontmatter.banner_image
                    ) === images[j].node.fluid.originalName
                ) {
                    imagesList = imagesList.concat(images[j]);
                    continue;
                }
            }
        }
        return imagesList;
    };

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
        // Retrieve banner image
        const image: FluidImageDataNode = images.filter(
            (imageData) =>
                imageData.node.fluid.originalName ===
                getNetlifyCMSFilename(posts[0].node.frontmatter.banner_image)
        )[0];
        // Generate single Post Card
        postsList = (
            <div className="column is-full">
                <PostCard post={posts[0] ? posts[0] : null} image={image} />
            </div>
        );
    } else {
        // General Cose: n-Cards
        const pastIndex = findMostRecentlyPastIndex(posts, date);

        const currPosts = posts.filter(
            (postDatum, index) => index <= pastIndex && index > pastIndex - size
        );

        // Retrieve corresponding banner images
        let imagesList: FluidImageDataNode[] = makePostImageArray(
            currPosts,
            images
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
                <PostCard post={post ? post : null} image={imagesList[index]} />
            </div>
        ));
    }
    return (
        <section className="columns is-multiline" data-testid="posts-list">
            {postsList}
        </section>
    );
};
