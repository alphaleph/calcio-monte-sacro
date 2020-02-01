import React, { useState } from 'react';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { NONE } from '../../constants';
import { TypeToElementMap } from '../../types';
import './layout.scss';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
    const [modalType, setModalType] = useState(NONE);
    const mainContent = React.createRef<HTMLElement>();

    const MODAL_MAP: TypeToElementMap = {
        NONE: null,
        TERMS_AND_CONDITIONS: null, //<TermsAndCondModal />,
        PRIVACY: null, //<PrivacyModal />,
        COOKIES: null, //<CookiesModal />,
    };

    const openModal = (modalType: string) => {
        setModalType(modalType);
    };

    const skipToMain = () => {
        if (mainContent.current) {
            mainContent.current.focus();
        }
    };

    return (
        <div className="layout-base">
            <button className="button skip-nav" onClick={skipToMain}>
                Skip to Main Content
            </button>
            <Header />
            <main ref={mainContent} tabIndex={-1}>
                {props.children}
            </main>
            <Footer openModal={openModal} />
            {MODAL_MAP[modalType]}
        </div>
    );
};
