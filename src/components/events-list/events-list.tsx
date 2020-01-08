import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { EventRow } from '../event-row/event-row';
import { MarkdownData, MarkdownEventDataNode } from '../../types/index';
import { findMostRecentlyPastIndex } from '../../util';
import './events-list.scss';

interface EventsListOwnProps {
    date?: number;
    isDesc?: boolean;
}

interface EventsListProps extends EventsListOwnProps {
    events: MarkdownEventDataNode[];
}

export const PureEventsList = ({
    events,
    date = Date.now(),
    isDesc = true,
}: EventsListProps) => {
    if (events.length > 0) {
        const mostRecentlyPastIndex = findMostRecentlyPastIndex(events, date);

        const ascRowList = events.map((event, index) =>
            index === mostRecentlyPastIndex ? (
                <li className="is-most-recent" key={index}>
                    <p className="most-recent-note">Latest Event</p>
                    <EventRow event={event ? event : null} />
                </li>
            ) : (
                <li className="" key={index}>
                    <EventRow event={event ? event : null} />
                </li>
            )
        );

        const rowList = isDesc ? [...ascRowList].reverse() : ascRowList;

        return (
            <ul className="events-list container" data-testid="events-list">
                {rowList}
            </ul>
        );
    } else {
        return (
            <section
                className="section has-background-team-granite has-text-team-holy has-text-centered has-text-weight-bold is-size-4"
                data-testid="events-list-empty"
            >
                There are currently no events!
                <br />
                <span className="is-size-1" role="img" aria-label="zzz">
                    💤
                </span>
            </section>
        );
    }
};

export const EventsList = (props: EventsListOwnProps) => {
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
        <PureEventsList
            {...props}
            events={data.allMarkdownRemark.edges as MarkdownEventDataNode[]}
        />
    );
};
