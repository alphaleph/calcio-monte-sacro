import React from 'react';

export interface WindowDimensions {
    width: number;
    height: number;
}
export interface PageTitleToURLMap {
    [pageTitle: string]: string;
}

export interface TypeToElementMap {
    [modalType: string]: React.ReactNode;
}

export interface MarkdownData {
    allMarkdownRemark: {
        edges: MarkdownDataNode[] | MarkdownEventDataNode[];
    };
    allImageSharp?: {
        edges: FluidImageDataNode[];
    };
}

export interface MarkdownDataNode {
    node: MarkdownPostData;
}

export interface MarkdownRemark {
    markdownRemark: MarkdownPostData;
}

export interface MarkdownPostData {
    frontmatter: {
        title: string;
        layout: string;
        language: string;
        date: string;
        banner_image?: FluidImageChildImageSharpData | null;
        type?: string | null;
        venue?: string | null;
        opposing_team?: string | null;
        score_ms?: number | null;
        score_other?: number | null;
    };
    fields: {
        slug: string;
        pathString: string;
    };
    html: string;
    excerpt?: string | null;
}

export interface MarkdownEventData {
    frontmatter: {
        title: string;
        layout: string;
        language: string;
        date: string;
        type: string;
        venue: string;
        opposing_team?: string | null;
        score_ms?: number | null;
        score_other?: number | null;
    };
    fields: {
        slug: string;
    };
    html: string;
}

export interface MarkdownEventDataNode {
    node: MarkdownEventData;
}

export interface FluidImageDataNode {
    node: FluidImageData;
}

export interface FluidImageChildImageSharpData {
    childImageSharp: FluidImageData;
}

export interface FluidImageData {
    fluid: {
        base64: string;
        aspectRatio: number;
        src: string;
        srcSet: string;
        sizes: string;
        originalName: string;
    };
}
