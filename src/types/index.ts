import React from 'react';

export interface PageTitleToURLMap {
    [pageTitle: string]: string;
}

export interface TypeToElementMap {
    [modalType: string]: React.ReactNode;
}

export interface MarkdownData {
    data: {
        allMarkdownRemark: {
            edges: MarkdownDataNode[];
        };
    };
}

export interface MarkdownDataNode {
    node: {
        frontmatter: {
            title: string;
            layout: string;
            language: string;
            date: string;
            type?: string;
            venue?: string;
            home?: boolean;
            opposing_team?: string;
            score_ms?: number;
            score_other?: number;
        };
        fields: {
            slug: string;
        };
        html: string;
    };
}
