import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import React, { useState } from 'react';
import './header.scss';

interface HeaderOwnProps {}

interface HeaderProps extends HeaderOwnProps {
    data: any;
}

export const PureHeader = ({ data }: HeaderProps) => {
    const [isBurgerExpanded, setIsBurgerExpanded] = useState(false);

    const toggleBurgerMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsBurgerExpanded(!isBurgerExpanded);
    };

    return (
        <header className="nav-container">
            <div className="nav-outline">
                <nav
                    className="navbar has-background-team-granite is-spaced"
                    role="navigation"
                    aria-label="main navigation"
                >
                    <div className="navbar-brand">
                        <Link
                            className="navbar-logo-container navbar-item has-link-team-holy"
                            to="https://www.calciomontesacro.com"
                        >
                            <Img
                                className="navbar-logo"
                                style={{
                                    position: 'absolute',
                                    left: '0vh',
                                    top: '1.25vh',
                                }}
                                imgStyle={{
                                    width: 'auto',
                                    height: 'auto',
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain',
                                }}
                                placeholderStyle={{
                                    width: 'auto',
                                    height: 'auto',
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain',
                                }}
                                fixed={data.file.childImageSharp.fixed}
                                alt="Calcio Monte Sacro Homepage"
                            />
                        </Link>
                        <a
                            id="headerBurger"
                            className={
                                isBurgerExpanded
                                    ? 'navbar-burger is-active'
                                    : 'navbar-burger'
                            }
                            role="button"
                            aria-label="Header Menu"
                            aria-expanded={isBurgerExpanded}
                            onClick={toggleBurgerMenu}
                        >
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div
                        id="headerNavbarMenu"
                        className={
                            isBurgerExpanded
                                ? 'navbar-menu has-background-team-granite is-active'
                                : 'navbar-menu has-background-team-granite'
                        }
                    >
                        <div className="navbar-end">
                            <Link
                                className="navbar-item has-link-team-holy"
                                to="https://www.calciomontesacro.com/schedule"
                            >
                                <span className="link-text">Schedule </span>
                                <span role="img" aria-label="Calendar">
                                    📆
                                </span>
                            </Link>
                            <Link
                                className="navbar-item has-link-team-holy"
                                to="https://www.calciomontesacro.com/news"
                            >
                                <span className="link-text">News </span>
                                <span role="img" aria-label="Megaphone">
                                    📣
                                </span>
                            </Link>
                            <Link
                                className="navbar-item has-link-team-holy"
                                to="https://www.calciomontesacro.com/blog"
                            >
                                <span className="link-text">Blog </span>
                                <span role="img" aria-label="Writing hand">
                                    ✍
                                </span>
                            </Link>
                            <Link
                                className="navbar-item has-link-team-holy"
                                to="https://www.calciomontesacro.com/drills"
                            >
                                <span className="link-text">Drills </span>
                                <span role="img" aria-label="100 points">
                                    💯
                                </span>
                            </Link>

                            <Link
                                className="navbar-item has-link-team-holy"
                                to="https://www.calciomontesacro.com/about"
                            >
                                <span className="link-text">About </span>
                                <span role="img" aria-label="Soccer ball">
                                    ⚽
                                </span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export const Header = (props: HeaderOwnProps) => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "cms-icon.png" }) {
                childImageSharp {
                    fixed(width: 100, height: 100) {
                        ...GatsbyImageSharpFixed_tracedSVG
                    }
                }
            }
        }
    `);

    return <PureHeader {...props} data={data} />;
};
