import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { MarkdownDataNode } from '../../types';
import { getMonthAbrvEN } from '../../util';
import './post-card.scss';

interface PostCardProps {
    post: MarkdownDataNode | null;
}

export const PostCard = ({ post }: PostCardProps) => {
    if (post) {
        const date = new Date(post.node.frontmatter.date);
        const excerpt = post.node.excerpt;
        const title = post.node.frontmatter.title;
        const postUrl = post.node.fields.pathString;

        return (
            <Link to={postUrl} data-testid="post-card-link">
                <article className="post-card-container container">
                    <header className="post-card-header">
                        <Img
                            fluid={{
                                ...post.node.frontmatter.banner_image
                                    .childImageSharp.fluid,
                                aspectRatio: 1,
                            }}
                        />
                    </header>
                    <section className="post-card-info">
                        <p className="post-card-title">{title}</p>
                        <p className="post-card-excerpt">{excerpt}</p>
                    </section>
                    <footer className="post-card-footer">
                        <p className="post-card-date">{`${date.getDate()} ${getMonthAbrvEN(
                            date.getMonth()
                        )} ${date.getFullYear()}`}</p>
                    </footer>
                </article>
            </Link>
        );
    } else {
        return (
            <article
                className="post-card-container container"
                data-testid="post-card-empty"
            />
        );
    }
};
