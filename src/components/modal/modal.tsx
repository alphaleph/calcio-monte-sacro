import React from 'react';
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
    return (
        <div className={isActive ? 'modal is-active' : 'modal'}>
            <div
                className="modal-background"
                data-testid="modal-background"
                onClick={closeModal}
            />
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{modalTitle}</p>
                    <button
                        className="delete"
                        aria-label="Close Modal"
                        onClick={closeModal}
                    />
                </header>
                <section className="modal-card-body">
                    <p className="modal-text">{modalText}</p>
                </section>
                <footer className="modal-card-foot">
                    <button className="button" onClick={closeModal}>
                        Close
                    </button>
                </footer>
            </div>
        </div>
    );
};
