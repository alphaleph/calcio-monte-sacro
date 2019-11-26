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
            type: string | null;
            venue: string | null;
            home: boolean | null;
            opposing_team: string | null;
            score_ms: number | null;
            score_other: number | null;
        };
        fields: {
            slug: string;
        };
        html: string;
    };
}
