import React, { useEffect } from 'react';
import './modal.scss';

interface ModalProps {
    isActive: boolean;
    closeModal: () => void;
    modalTitle: string;
    modalText: string;
}

export const Modal = ({
    isActive,
    closeModal,
    modalTitle,
    modalText,
}: ModalProps) => {
    const headerButtonRef = React.useRef<HTMLButtonElement>(null);
    const footerButtonRef = React.useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (headerButtonRef.current) {
            headerButtonRef.current.focus();
        }
    }, []);

    const tabToHeaderButton = (e: React.KeyboardEvent) => {
        if (e.key === 'Tab') {
            if (headerButtonRef.current) {
                e.preventDefault();
                headerButtonRef.current.focus();
            }
        }
    };

    const shiftTabToFooterButton = (e: React.KeyboardEvent) => {
        if (e.key === 'Tab' && e.shiftKey) {
            if (footerButtonRef.current) {
                e.preventDefault();
                footerButtonRef.current.focus();
            }
        }
    };

    const escCloseModal = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    };

    return (
        <div
            className={isActive ? 'modal is-active' : 'modal'}
            role="dialog"
            aria-modal={isActive}
            aria-labelledby="modal-card-title"
            onKeyDown={escCloseModal}
        >
            <div
                className="modal-background"
                data-testid="modal-background"
                onClick={closeModal}
            />
            <div className="modal-card">
                <header className="modal-card-head">
                    <p id="modal-card-title" className="modal-card-title">
                        {modalTitle.replace(/_/g, ' ')}
                    </p>
                    <button
                        ref={headerButtonRef}
                        className="delete"
                        aria-label="Close Modal"
                        onClick={closeModal}
                        onKeyDown={shiftTabToFooterButton}
                    />
                </header>
                <section className="modal-card-body">
                    <p className="modal-text">{modalText}</p>
                </section>
                <footer className="modal-card-foot">
                    <button
                        ref={footerButtonRef}
                        className="button"
                        onClick={closeModal}
                        onKeyDown={tabToHeaderButton}
                    >
                        Close
                    </button>
                </footer>
            </div>
        </div>
    );
};
