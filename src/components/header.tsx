import { Link } from 'gatsby';
import React from 'react';
import styles from './header.module.scss';

type HeaderProps = {
    siteTitle: string;
};

export const Header = (props: HeaderProps) => {
    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.mainHeader}>
                    <Link to="/" className={styles.link}>
                        {props.siteTitle}
                    </Link>
                </h1>
            </div>
        </header>
    );
};
