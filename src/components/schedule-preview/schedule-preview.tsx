import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { EventCard } from '../event-card/event-card';
import { MarkdownData, MarkdownEventDataNode } from '../../types/index';
import { findMostRecentlyPastIndex } from '../../util';
import './schedule-preview.scss';

interface SchedulePreviewOwnProps {
    date?: number;
}

interface SchedulePreviewProps extends SchedulePreviewOwnProps {
    events: MarkdownEventDataNode[];
}

export const PureSchedulePreview = ({
    events,
    date = Date.now(),
}: SchedulePreviewProps) => {
    const mostRecentlyPastIndex = findMostRecentlyPastIndex(events, date);
    const previewScheduleData = [
        events[mostRecentlyPastIndex],
        events[mostRecentlyPastIndex + 1],
        events[mostRecentlyPastIndex + 2],
    ];

    const cardList = previewScheduleData.map((event, index) => (
        <EventCard event={event ? event : null} key={index} />
    ));

    return (
        <section className="columns is-multiline">
            <div className="column is-one-third">
                <h3 className="schedule-preview-previous-title has-text-black-main is-size-5">
                    <strong>PREVIOUS EVENT</strong>
                </h3>
                <div className="">{cardList[0]}</div>
            </div>
            <div className="column is-two-thirds">
                <h3 className="schedule-preview-upcoming-title has-text-black-main is-size-5">
                    <strong>UPCOMING EVENTS</strong>
                </h3>
                <div className="schedule-preview-upcoming-cards">
                    {cardList[1]}
                    {cardList[2]}
                </div>
            </div>
        </section>
    );
};

export const SchedulePreview = (props: SchedulePreviewOwnProps) => {
    const data: MarkdownData = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(
                    sort: { order: ASC, fields: frontmatter___date }
                    filter: { frontmatter: { layout: { eq: "schedule" } } }
                ) {
                    edges {
                        node {
                            frontmatter {
                                title
                                language
                                type
                                venue
                                opposing_team
                                score_ms
                                score_other
                                date
                                layout
                            }
                            fields {
                                slug
                            }
                            html
                        }
                    }
                }
            }
        `
    );
    return (
        <PureSchedulePreview {...props} events={data.allMarkdownRemark.edges} />
    );
};
