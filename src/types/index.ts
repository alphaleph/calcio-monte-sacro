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
        banner_image?: string | null;
        type?: string | null;
        venue?: string | null;
        opposing_team?: string | null;
        score_ms?: number | null;
        score_other?: number | null;
    };
    fields: {
        slug: string;
        pathString: string;
        bannerImg: FluidImageChildImageSharpData;
    };
    html: string;
    excerpt?: string | null;
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
