import React from 'react';

export interface PageTitleToURLMap {
    [pageTitle: string]: string;
}

export interface TypeToElementMap {
    [modalType: string]: React.ReactNode;
}
