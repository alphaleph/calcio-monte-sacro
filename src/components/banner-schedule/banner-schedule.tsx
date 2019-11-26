import React from 'react';
import { Link } from 'gatsby';
// import { SchedulePreview } from '../schedule-preview/schedule-preview';
import { SITE_URL } from '../../constants';
import './banner-schedule.scss';

export const BannerSchedule = () => {
    return (
        <section className="section has-background-white-main is-bold">
            <div className="container">
                <h2 className="title is-family-secondary has-text-black-main is-2">
                    SCHEDULE
                </h2>
                {/* <SchedulePreview /> */}
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
