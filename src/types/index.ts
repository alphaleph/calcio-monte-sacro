import React from 'react';

export interface PageTitleToURLMap {
    [pageTitle: string]: string;
}

export interface TypeToElementMap {
    [modalType: string]: React.ReactNode;
}

export interface MarkdownData {
    allMarkdownRemark: {
        edges: MarkdownDataNode[];
    };
}

export interface MarkdownDataNode {
    node: {
        frontmatter: {
            title: string;
            layout: string;
            language: string;
            date: string;
            banner_image?: string | null;
            type?: string | null;
            venue?: string | null;
            opposing_team?: string | null;
            score_ms?: number | null;
            score_other?: number | null;
        };
        fields: {
            slug: string;
        };
        html: string;
    };
}
