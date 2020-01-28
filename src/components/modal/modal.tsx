import React from 'react';
import './modal.scss';

interface ModalProps {
    closeModal: () => void;
    modalTitle: string;
    modalText: string;
}

export const Modal = ({ closeModal, modalTitle, modalText }: ModalProps) => {
    return <div />;
};
