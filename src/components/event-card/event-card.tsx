import React from 'react';
import { Loading } from '../loading/loading';
import { MarkdownDataNode } from '../../types/index';
import { MATCH_EN, MATCH_IT, HOME_VENUE, TEAM_ABRV } from '../../constants';
import { getMonthAbrvEN } from '../../util';
import './event-card.scss';

interface EventCardProps {
    event: MarkdownDataNode | null;
}

export const EventCard = ({ event }: EventCardProps) => {
    let el = <Loading />;
    if (event) {
        const frontMatter = (event as MarkdownDataNode).node.frontmatter;
        const date = new Date(frontMatter.date);
        const venue = frontMatter.venue;
        const type = frontMatter.type;
        // Event: Match
        if (type === MATCH_EN || type === MATCH_IT) {
            const opposingTeam = frontMatter.opposing_team;
            let matchInfo = null;
            // Event: Finished Match
            if (date.getTime() < Date.now()) {
                const scoreMS = frontMatter.score_ms;
                const scoreOther = frontMatter.score_other;
                matchInfo = (
                    <p>{`${venue === HOME_VENUE ? scoreMS : scoreOther}-${
                        venue === HOME_VENUE ? scoreOther : scoreMS
                    }`}</p>
                );
            } else {
                // Event: Future Match
                matchInfo = <p>{`${date.getHours()}:${date.getMinutes()}`}</p>;
            }
            el = (
                <article className="event-card-container container">
                    <header className="event-card-header">
                        <p>
                            {`${date.getDate()} ${getMonthAbrvEN(
                                date.getMonth()
                            )} ${date.getFullYear()}`}
                        </p>
                        <p className="has-text-weight-light">{venue}</p>
                    </header>
                    <section className="event-card-info columns is-mobile is-vcentered has-text-centered">
                        <div className="column is-one-third team-info">
                            <p
                                className="is-size-1"
                                role="img"
                                aria-label="Soccer ball"
                            >
                                ⚽
                            </p>
                            <p>
                                {venue === HOME_VENUE
                                    ? TEAM_ABRV
                                    : opposingTeam}
                            </p>
                        </div>
                        <div className="column is-one-third match-info has-text-team-holy">
                            {matchInfo}
                        </div>
                        <div className="column is-one-third team-info">
                            <p
                                className="is-size-1"
                                role="img"
                                aria-label="Soccer ball"
                            >
                                ⚽
                            </p>
                            <p>
                                {venue === HOME_VENUE
                                    ? opposingTeam
                                    : TEAM_ABRV}
                            </p>
                        </div>
                    </section>
                </article>
            );
        } else {
            // Event: Practice
            el = (
                <article className="event-card-container container">
                    <header className="event-card-header">
                        <p>
                            {`${date.getDate()} ${getMonthAbrvEN(
                                date.getMonth()
                            )} ${date.getFullYear()}`}
                        </p>
                        <p className="has-text-weight-light">{venue}</p>
                    </header>
                    <section className="event-card-info has-text-centered columns is-mobile is-vcentered">
                        <div className="column practice-info">
                            <p>PRACTICE</p>
                            <p className="has-text-team-holy">{`${date.getHours()}:${date.getMinutes()}`}</p>
                        </div>
                    </section>
                </article>
            );
        }
    } else {
        // Event: null
        el = (
            <article
                className="event-card-container container"
                data-testid="event-card-empty"
            />
        );
    }

    return el;
};
