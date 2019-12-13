import React from 'react';
import { Layout } from '../components/layout/layout';
import { SEO } from '../components/seo/seo';
import { SchedulePreview } from '../components/schedule-preview/schedule-preview';
import { EventsList } from '../components/events-list/events-list';
import './schedule.scss';

//TODO: Add Pagination

const SchedulePage = () => {
    return (
        <Layout>
            <SEO title="Schedule" />
            <section className="schedule-container container">
                <h1 className="schedule-title">SCHEDULE</h1>
                <SchedulePreview />
                <h2 className="schedule-title">FULL CALENDAR</h2>
                <EventsList />
            </section>
        </Layout>
    );
};

export default SchedulePage;
