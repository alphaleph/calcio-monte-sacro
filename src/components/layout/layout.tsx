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

    const MODAL_MAP: TypeToElementMap = {
        NONE: null,
        TERMS_AND_CONDITIONS: null, //<TermsAndCondModal />,
        PRIVACY: null, //<PrivacyModal />,
        COOKIES: null, //<CookiesModal />,
    };

    const openModal = (modalType: string) => {
        setModalType(modalType);
    };

    return (
        <div className="layout-base">
            <Header />
            <main>{props.children}</main>
            <Footer openModal={openModal} />
            {MODAL_MAP[modalType]}
        </div>
    );
};
