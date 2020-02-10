import React, { useState } from 'react';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Modal } from '../modal/modal';
import {
    NONE,
    PRIVACY,
    PRIVACY_STRING,
    TERMS_AND_CONDITIONS,
    TERMS_AND_CONDITIONS_STRING,
    COOKIES,
    COOKIES_STRING,
} from '../../constants';
import { TypeToElementMap } from '../../types';
import './layout.scss';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
    const [modalType, setModalType] = useState(NONE);
    const [preModalFocusEl, setPreModalFocusEl] = useState(
        {} as React.RefObject<HTMLElement>
    );
    const mainContent = React.createRef<HTMLElement>();

    const openModal = (
        ref: React.RefObject<HTMLElement>,
        modalType: string
    ) => {
        setModalType(modalType);
        setPreModalFocusEl(ref);
    };

    const closeModal = () => {
        setModalType(NONE);
        if (preModalFocusEl.current) {
            preModalFocusEl.current.focus();
        }
    };

    const MODAL_MAP: TypeToElementMap = {
        NONE: null,
        TERMS_AND_CONDITIONS: (
            <Modal
                isActive={true}
                closeModal={closeModal}
                modalTitle={TERMS_AND_CONDITIONS}
                modalText={TERMS_AND_CONDITIONS_STRING}
            />
        ),
        PRIVACY: (
            <Modal
                isActive={true}
                closeModal={closeModal}
                modalTitle={PRIVACY}
                modalText={PRIVACY_STRING}
            />
        ),
        COOKIES: (
            <Modal
                isActive={true}
                closeModal={closeModal}
                modalTitle={COOKIES}
                modalText={COOKIES_STRING}
            />
        ),
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
