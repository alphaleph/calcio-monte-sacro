import { Link } from 'gatsby';
import React from 'react';
import styles from './header.module.scss';

interface HeaderProps {
    siteTitle: string;
    isDarkMode?: boolean;
}

export const Header = ({ isDarkMode = false, ...props }: HeaderProps) => {
    return (
        <header className={isDarkMode ? styles.dark : styles.container}>
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
