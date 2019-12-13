import React from 'react';
import { Link } from 'gatsby';
import {
    PureSchedulePreview,
    SchedulePreview,
} from '../schedule-preview/schedule-preview';
import { mockTwoFutureScheduleDataNodes } from '../__tests__/test-util';
import { SITE_URL } from '../../constants';
import './banner-schedule.scss';

export const BannerSchedule = () => {
    return (
        <section className="banner-schedule section has-background-white-main is-bold">
            <div className="container">
                <h2 className="title is-family-secondary has-text-roma-red is-2">
                    SCHEDULE
                </h2>
                <div className="banner-schedule-preview">
                    <SchedulePreview />
                </div>
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <Link
                            to={`/schedule`}
                            className="banner-schedule-button"
                        >
                            <button
                                className="button is-fullwidth has-background-roma-gold has-text-black-main is-size-5"
                                type="button"
                            >
                                <strong>SEE FULL SCHEDULE</strong>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const TestBannerSchedule = () => {
    return (
        <section className="banner-schedule section has-background-white-main is-bold">
            <div className="container">
                <h2 className="title is-family-secondary has-text-roma-red is-2">
                    SCHEDULE
                </h2>
                <div className="banner-schedule-preview">
                    <PureSchedulePreview
                        events={mockTwoFutureScheduleDataNodes}
                    />
                </div>
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <Link to={`${SITE_URL}/schedule`}>
                            <button
                                className="button is-fullwidth has-background-roma-gold has-text-black-main is-size-5 is"
                                type="button"
                            >
                                <strong>SEE FULL SCHEDULE</strong>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
