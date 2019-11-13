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
                    <Link
                        to="/"
                        className="is-size-2 has-text-white has-text-weight-semibold "
                    >
                        {props.siteTitle}
                    </Link>
                    <button type="button" className="button is-primary">
                        This is a test button.
                    </button>
                </h1>
            </div>
        </header>
    );
};
