import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// import { EventCard } from '../event-card/event-card';
import { MarkdownData, MarkdownDataNode } from '../../types/index';
import { findMostRecentlyPastIndex } from '../../util';

interface SchedulePreviewOwnProps {}

interface SchedulePreviewProps {
    events: MarkdownDataNode[];
}

export const PureSchedulePreview = (props: SchedulePreviewProps) => {
    const mostRecentlyPastIndex = findMostRecentlyPastIndex(props.events);
    const previewScheduleData = [
        props.events[mostRecentlyPastIndex],
        props.events[mostRecentlyPastIndex + 1],
        props.events[mostRecentlyPastIndex + 2],
    ];
    console.log(previewScheduleData);
    const cardList = previewScheduleData.map((event, index) => (
        <div className="column is-one-third" key={index}>
            <p>{event ? `rock` : `null`}</p>
            {/* <EventCard event={event ? event : null} />; */}
        </div>
    ));

    return (
        <section className="columns is-multiline">
            <div className="column is-one-third">
                <h3 className="has-text-black-main is-size-5">
                    <strong>Previous Event</strong>
                </h3>
            </div>
            <div className="column is-two-thirds">
                <h3 className="has-text-black-main is-size-5">
                    <strong>Upcoming Events</strong>
                </h3>
            </div>
            {cardList}
        </section>
    );
};

export const SchedulePreview = (props: SchedulePreviewOwnProps) => {
    const { data }: MarkdownData = useStaticQuery(
        graphql`
            query query {
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
                                home
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
