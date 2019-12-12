import React from 'react';
import { Loading } from '../loading/loading';
import { utcStringToDateString } from '../../util';
import { MATCH_EN, MATCH_IT, HOME_VENUE, TEAM_ABRV } from '../../constants';
import { MarkdownEventDataNode } from '../../types';
import './event-row.scss';

interface EventRowProps {
    event: MarkdownEventDataNode | null;
}

export const EventRow = ({ event }: EventRowProps) => {
    let el = <Loading />;
    if (event) {
        const frontMatter = (event as MarkdownEventDataNode).node.frontmatter;
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
                    <p>
                        <span className="match-info-score">
                            {venue === HOME_VENUE ? scoreMS : scoreOther}
                        </span>
                        <span className="has-text-team-granite">-</span>
                        <span className="match-info-score">
                            {venue === HOME_VENUE ? scoreOther : scoreMS}
                        </span>
                    </p>
                );
            } else {
                matchInfo = <p>{`${date.getHours()}:${date.getMinutes()}`}</p>;
            }
            el = (
                <article className="event-row-container container">
                    <header className="event-row-header">
                        <p>{`${utcStringToDateString(frontMatter.date)}`}</p>
                        <p className="has-text-weight-light">{venue}</p>
                    </header>
                    <section className="event-row-info columns is-mobile is-vcentered">
                        <div className="column is-two-fifths has-text-right team-info">
                            <span className="team-info-abrv">
                                {venue === HOME_VENUE
                                    ? TEAM_ABRV
                                    : opposingTeam}
                            </span>
                            <span
                                className="team-info-icon"
                                role="img"
                                aria-label="Soccer ball"
                            >
                                ⚽
                            </span>
                        </div>
                        <div className="column is-one-fifth match-info has-text-roma-red has-text-centered">
                            {matchInfo}
                        </div>
                        <div className="column is-two-fifths team-info">
                            <span
                                className="team-info-icon"
                                role="img"
                                aria-label="Soccer ball"
                            >
                                ⚽
                            </span>
                            <span className="team-info-abrv">
                                {venue === HOME_VENUE
                                    ? opposingTeam
                                    : TEAM_ABRV}
                            </span>
                        </div>
                    </section>
                </article>
            );
        } else {
            // Event: Practice
            el = (
                <article className="event-row-container container">
                    <header className="event-row-header">
                        <p>{`${utcStringToDateString(frontMatter.date)}`}</p>
                        <p className="has-text-weight-light">{venue}</p>
                    </header>
                    <section className="event-row-info has-text-centered columns is-mobile is-vcentered">
                        <div className="column practice-info">
                            <p>PRACTICE</p>
                            <p className="has-text-roma-red">{`${date.getHours()}:${date.getMinutes()}`}</p>
                        </div>
                    </section>
                </article>
            );
        }
    } else {
        // Event: null
        el = (
            <article
                className="event-row-container container"
                data-testid="event-row-empty"
            />
        );
    }

    return el;
};
