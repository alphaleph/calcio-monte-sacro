import {
    PageTitleToURLMap,
    MarkdownDataNode,
    MarkdownData,
} from '../../types/index';
import { SITE_URL } from '../../constants';

export const MOBILE_VIEWPORT_WIDTH = 700;
export const MOBILE_VIEWPORT_HEIGHT = 700;

export const mainLinkTexts: PageTitleToURLMap = {
    Schedule: `${SITE_URL}/schedule`,
    News: `${SITE_URL}/news`,
    Blog: `${SITE_URL}/blog`,
    Drills: `${SITE_URL}/drills`,
    About: `${SITE_URL}/about`,
};

export const legalButtonTexts: string[] = [
    `Terms and Conditions`,
    `Privacy`,
    `Cookies`,
];

export const resizeWindow = (x: number, y: number) => {
    (window as any).innerWidth = x;
    (window as any).innerHeight = y;
    window.dispatchEvent(new Event('resize'));
};

export const resizeToMobile = () => {
    resizeWindow(MOBILE_VIEWPORT_WIDTH, MOBILE_VIEWPORT_HEIGHT);
};

export const mockFixedImageData = {
    file: {
        childImageSharp: {
            fixed: {
                tracedSVG:
                    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='400'%20height='400'%3e%3cpath%20d='M190%2018l-10%2018-9%201c-53%207-68%2032-28%2047l8%203a874%20874%200%2001-36%2060l-6%204-3-5c-9-11-30-14-41-4-10%208-11%2015-11%2064%200%2038%201%2039%203%2043l2%205-6%2012a146%20146%200%2000-8%2013l-2-5v-6H25v48l-12%2022-13%2023h96l8%207c15%2015%2033%2024%2054%2029%2012%203%2060%204%2075%202%2025-4%2045-14%2064-31l7-7h47l48-1-12-23-13-22v-17c0-19-1-24-7-28-3-3-11-3-16-2-2%201-3%201-7-7l-4-7%202-4c2-4%203-6%203-48v-44l-3-6c-5-11-12-15-24-16-8%200-9%200-14%202-6%203-12%208-13%2011-1%204-2%201-2-4%200-7-2-9-9-9h-5l-13-25-14-24%208-3c15-6%2023-13%2023-20%200-13-18-22-54-28l-5-1-10-17-10-17-10%2017m4%205l-6%2011h8l12%201h4l-6-11-6-11-6%2010m-12%2018c-14%201-22%203-32%206-23%207-31%2016-19%2024%204%204%204%204%203%200-2-10%209-17%2031-23%2016-3%2053-4%2068%200%2024%206%2036%2014%2032%2023-1%204%200%204%205-1s5-9%200-13c-13-12-52-19-88-16m-23%2013c-18%206-24%2012-18%2019%202%203%2013%209%2014%208l8-15c9-16%209-16-4-12m20%200l-12%2021%2015%2027%207-13c8-13%2010-16%2012-14l9%2014%208%2013%208-13%207-13-3-5-6-12-4-7h-20c-18%200-20%200-21%202m50-1l16%2028%205-2c15-7%2015-15%200-21-9-4-22-7-21-5m-74%2082c-4%201-4%201-3%203l6%2015%205%2014v-14l1-15v-3h-9m-80%204c-6%202-12%207-15%2014-2%205-2%206-2%2049v44l2%204c4%205%209%207%2014%204l12-7c11-7%2016-13%2020-23l4-6%2010-3%209-4%201-6%202-6%205-2c8-2%209-2%2010%203%200%206%202%206%2013%204l42-4c8%200%209%200%209-5v-3l3%203c4%204%2010%207%2022%208%2018%203%2025-1%2025-15%200-7%200-7-10-8s-11-1-11%206c0%205%200%205-2%205-6%200-6%200-6-20v-19h4l4%201v5c0%207%201%207%2012%207h9v-7c0-13-8-19-25-19-11%200-17%201-22%206l-4%204v40h-22v-24c0-28%201-27-12-27-11%200-11-1-11%2024v21l-7-21-8-23-12-1c-10%200-11%200-12%202l-9%2034c-7%2029-9%2036-9%2030%200-5-2-5-10-2-11%205-11%205-11%2016%200%209%200%209-3%2011l-4%202-1-34c0-37%200-40%205-39%202%200%203%201%203%209%200%2012%201%2012%2011%2010s10-2%2010-12c0-13-4-21-14-25-4-2-14-2-19-1m191%201c-3%202-3%2067%200%2069%202%202%2017%207%2019%206%202%200%202-74%200-76s-17-1-19%201m43-1c-7%202-11%205-14%2010l-3%205v67l3%207c5%209%208%2013%2022%2021%2013%208%2019%208%2023-1%203-6%203-86%200-93-5-13-17-20-31-16m-233%202c-6%202-11%206-14%2013-2%204-2%205-2%2048l1%2046c2%203%208%207%2010%205%2028-16%2034-23%2035-42v-10l-7%203c-10%204-10%204-10%2014%200%209%200%209-3%2013-8%208-9%206-9-35%200-34%200-35%202-37%202-3%207-4%209-2l1%2010v9h5l8-2%204-1v-9c0-6%200-9-2-12-5-9-17-14-28-11m46%2021a31346%2031346%200%2001-13%2054l9-3c7-2%209-3%209-5l2-7%202-4%207-2%208-2%202%205%202%205%2017-3%204-1h21l17-1v-8l-11%201h-12v-50h-18v28l-1%2029-18-58h-22l-5%2022m106-21c-7%201-11%203-14%207s-3%2040%200%2044c4%205%2010%208%2020%209%2019%203%2025%200%2025-13v-5h-5l-8-2h-4v12h-5c-7%200-7%200-7-23l1-19%204-1c6%200%207%201%207%208l1%205h16v-5c0-13-12-20-31-17m39%200l-1%2034v33l8%203%209%203%201-37v-37h-8l-9%201m43%200c-6%201-12%206-15%2011l-2%205v32c0%2030%201%2032%203%2036%203%206%209%2015%2012%2016l12%207%209%206%204-2c7-3%207-3%207-51v-42l-3-6c-5-10-14-14-27-12m-196%2015c-3%203-3%203-3%2010%200%2010-1%2011-11%2013l-9%202-3%207c-4%206-4%207-2%2013l1%203%208-4%2011-3h2l11-44c0-1-2%200-5%203m121-1l-1%2017c0%2014%200%2016%202%2016l1-4c0-4%204-8%207-8l9%201%208%202%201-6v-5h-11c-12%200-14-2-14-10%200-4-1-5-2-3m77%203l-1%2036%201%2034%203%203c7%206%206%207%207-34%200-31%200-37-2-39-2-3-5-3-8%200m-122%2014v14h8v-23l-3-3-4-3-1%2015m14-12c-3%203-3%203-3%2014s1%2012%203%2012c3%200%203-1%203-15v-13l-3%202m110-1l-1%2034v33l3%203%203%203%201-36c0-36%200-38-3-38l-3%201m-176%203l-5%2022%2011-1a150%20150%200%2000-6-21m0%2038c-4%200-5%202-5%206-1%207-2%208-13%2012-10%203-10%204-12%207%200%203-2%206-4%208l-1%205%2053%2012%2021-15%2021-15v-17h-11l-23%203c-16%203-18%202-20-4%200-3-1-3-6-2m74%201l-7%202h-4v17l21%2015%2021%2016%2026-6c32-7%2030-7%2028-9-3-2-8-14-8-17s-1-3-3-1c-2%201-4%201-12-2-11-4-12-5-12-11%200-5-1-7-2-4s-10%206-14%206c-9%200-23-3-28-5-5-4-4-3-6-1M86%20251l-13%2010v12l2-2c8-7%2021-4%2025%206a247%20247%200%2001-2%2064l3%201c2%200%202-3%202-37v-37h14l3%2011%203%2012v-23h19c16%200%2018%200%2018-2a146%20146%200%2001-5-12%201998%201998%200%2001-55-12l-14%209m185-3l-26%206c-1%201-3%204-4%209l-3%208%202%205%203%209c0%206%200%207-6%207h-4l4-1h4l-1-5c0-12-12-19-20-14-10%207-10%2020%201%2036%207%2012%209%2018%208%2021-1%205-5%205-6%200l-1-5c0-2-1-2-5-2l-5%201v4c0%206%201%209%204%2013l1%203c-3%200-8-11-8-20v-4h5c10-1%2010-1%2010%202l1%207c1%202%201%202%202%201%202-3%200-7-5-15l-4-8h-25v4l-1%204-1-6v-7h-9v-18h13v-11h-24v36l-1%2037-1-17-1-17-4%203-3%204v13c0%2010-1%2013-2%2014l-1-1%201-32v-29h9v-11l-15-1h-15v12h9v29a409%20409%200%20000%2033l-2-6v-6l-4%204c-2%202-4%204-4%206l-1%202-1-37v-37h-10v37l-5-16-5-19c0-2-1-2-5-2h-5v73h10v-18c0-21%200-21%206%200%204%2018%204%2018%209%2018%203%200%203%200%203%202l7%2035c1%204%202%204%207%206%2014%204%2020%205%2046%206%2028%200%2040-1%2054-5%2012-3%2012-3%2015-14l5-28c0-2%201-2%205-2%205%200%205%203%200-27a9565%209565%200%2001-6-45h-13a1913%201913%200%2000-12%2073l-1-3v-3l-2%202c-3%202-5%203-3%201s0-2-2%200h-13c-4-2-6-6-7-12-1-5%200-6%201-6%205-2%207-1%207%202%200%207%205%2012%208%207%204-5%203-10-6-23-9-15-11-22-8-30%206-14%2024-9%2024%206%200%204%200%204-4%204-3%200-4%200-5-4-1-6-3-7-6-4-4%204-2%2010%206%2023%207%2011%209%2015%209%2022l-1%209-1%203c2-1%204-8%204-13s-3-13-11-24c-5-9-6-11-6-15s1-4%203-4c1%200%202%200%202%204l2%205v2c-1%202-1%202%2011%2022%201%203%202%201%205-23l4-24%208-1h9l3%2027c6%2038%206%2037%206%2010%200-23%200-25%202-29%203-6%207-8%2013-8%209%200%2014%204%2016%2012%201%203%201%201%201-4v-8h18v-3c0-4-6-8-24-21-4-3-2-3-32%204M82%20271c-4%201-7%203-9%207-3%205-2%2054%201%2059%206%2010%2018%2010%2024-1%202-4%203-43%201-53-2-9-8-14-17-12m207%200c-4%201-6%203-8%207-3%206-3%2054%200%2059%203%206%206%207%2014%207%203%200%209-4%209-6l-4%202c-6%205-14%204-18-4-2-4-2-6-2-28%200-31%202-36%2013-36%208%200%2012%206%2012%2017v7h-7l-1-5c0-8-1-10-3-10-5%200-5%201-5%2027%200%2025%200%2026%205%2026%202%200%203-2%203-9l1-5%203-1h4v9c-1%208%200%209%201%206l1-9v-7h-11v6c0%208-1%2010-4%208-2-1-2-48%200-49%203-2%204%200%204%208v6h11v-7c0-13-7-21-18-19m65%201c-9%203-10%207-10%2038%200%2023%201%2025%203%2028%205%209%2019%208%2023-2%203-6%203-52%200-58s-10-9-16-6m-327%200v37l1%2035h10v-19l1-19%202%2017c3%2022%203%2021%206%2021%202%200%203-1%205-19l3-18v18l1%2019h10v-72H53l-3%2014-3%2015-3-12c-3-19-3-18-10-18l-7%201m285%200l-1%2037%201%2035h11v-15c1-17%201-17%204%201%203%2015%202%2014%208%2014s6%201%202-20c-3-14-3-15-1-17%207-9%204-27-4-33-4-3-20-4-20-2m-233%202c-6%204-6%207-6%2034l1%2027c5%2011%2018%2011%2023%200l1-27c0-27%200-30-6-34l-6-2-7%202m273%200c-5%202-6%205-6%2034%200%2021%200%2026%202%2029%204%208%2016%208%2021%200%201-3%202-7%202-29%200-23-1-27-2-30-3-5-11-8-17-4M29%20308v34h8v-24c0-13%200-23%201-22l3%2021c4%2025%204%2025%206%2025l5-23%204-24%201%2024v23h8v-69h-6l-5%201-3%2016-4%2018-5-22-2-13H29v35m77%200v34h8v-20l1-20%205%2018%206%2020c0%202%201%202%204%202h4v-69h-8v20l-1%2020-5-16-5-20c-1-4-1-4-5-4h-4v35m33-31v5h5l5%201v59h8v-60h10v-9h-28v4m33%2031v34h21v-9h-12v-20l4-1h5v-10h-9v-19l6-1h6v-9h-21v35m82-34l-10%2067%204%201h4v-5c2-9%201-9%207-9h6l1%207v7h5c4%200%204%200%204-2l-10-66h-11m59%2033v35h8v-15c0-12%200-14%202-15s3%201%205%2016l2%2014h5c4%200%204%200%204-2l-3-16-3-14%202-5c3-6%204-18%202-23-3-7-6-8-16-9h-8v34M82%20283l-1%2025c0%2023%201%2026%205%2026h3v-52l-3-1c-2%200-3%200-4%202m273%200l-1%2025c0%2023%200%2026%204%2026s4-2%204-26l-1-25c0-3-5-2-6%200m-271%200a248%20248%200%20001%2050l2-1v-48c0-2-2-3-3-1m273%200v50c3%202%204-2%204-26%200-20-1-27-2-23-1%201-1%201%200%200%200-2-1-3-2-1m-64%201v45l1-7v-7h15v-17h-15v-8l-1-6m-156%2025l1%2025%204-3%203-4v-43h-8v25m24-11v14l4-3c3-2%203-3%203-10%200-9-2-14-5-15-2%200-2%200-2%2014m96%204l-2%2013c0%203%200%203%204%203s4%200%204-2a482%20482%200%2000-4-23l-2%209m-75%2021v9h13v13c1-1%202-4%202-9v-8h-13v-7l-1-7-1%209m73%2011l-2%208v3l3-6%201-5%203%203%203%205%202%203v-2l-1-8v-5l-5-1h-4v5'%20fill='%23d3d3d3'%20fill-rule='evenodd'/%3e%3c/svg%3e",
                width: 100,
                height: 100,
                src:
                    '/static/be02315164569b61ba353b4219d3bb3e/47c2b/cms-icon.png',
                srcSet:
                    '/static/be02315164569b61ba353b4219d3bb3e/47c2b/cms-icon.png 1x,\n/static/be02315164569b61ba353b4219d3bb3e/4148e/cms-icon.png 1.5x,\n/static/be02315164569b61ba353b4219d3bb3e/eb72e/cms-icon.png 2x',
            },
        },
    },
};

export const mockScheduleDataNodes: MarkdownDataNode[] = [
    {
        node: {
            frontmatter: {
                title: 'Monte Sacro 1 vs Monte Sacro 2',
                language: 'en',
                type: 'Match',
                venue: 'Parco Sannazzaro',
                opposing_team: 'CMS2',
                score_ms: 1,
                score_other: 2,
                date: '2019-11-20T02:15:50.939Z',
                layout: 'schedule',
            },
            fields: {
                slug: '/2019-11-20-monte-sacro-1-vs-monte-sacro-2/',
            },
            html: '',
        },
    },
    {
        node: {
            frontmatter: {
                title: 'Monte Sacro 1 vs Monte Sacro 2',
                language: 'it',
                type: 'Partita',
                venue: 'Parco Sannazzaro',
                opposing_team: 'CMS2',
                score_ms: 2,
                score_other: 1,
                date: '2019-11-20T02:15:58.097Z',
                layout: 'schedule',
            },
            fields: {
                slug: '/2019-11-20-monte-sacro-1-vs-monte-sacro-2-1/',
            },
            html: '',
        },
    },
    {
        node: {
            frontmatter: {
                title: 'Monte Sacro Practice 1',
                language: 'en',
                type: 'Practice',
                venue: 'Parco Sannazzaro',
                opposing_team: null,
                score_ms: null,
                score_other: null,
                date: '2019-11-20T17:40:15.578Z',
                layout: 'schedule',
            },
            fields: {
                slug: '/2019-11-20-monte-sacro-practice-1/',
            },
            html: '',
        },
    },
];

export const mockMarkdownData: MarkdownData = {
    allMarkdownRemark: {
        edges: mockScheduleDataNodes,
    },
};

export const mockOneFutureScheduleDataNodes: MarkdownDataNode[] = [
    {
        node: {
            frontmatter: {
                title: 'Monte Sacro 1 vs Monte Sacro 2',
                language: 'en',
                type: 'Match',
                venue: 'Parco Sannazzaro',
                opposing_team: 'CMS2',
                score_ms: 1,
                score_other: 2,
                date: '2019-11-20T02:15:50.939Z',
                layout: 'schedule',
            },
            fields: {
                slug: '/2019-11-20-monte-sacro-1-vs-monte-sacro-2/',
            },
            html: '',
        },
    },
    {
        node: {
            frontmatter: {
                title: 'Monte Sacro 1 vs Monte Sacro 2',
                language: 'it',
                type: 'Partita',
                venue: 'Parco Sannazzaro',
                opposing_team: 'CMS2',
                score_ms: 2,
                score_other: 1,
                date: '2019-11-20T02:15:58.097Z',
                layout: 'schedule',
            },
            fields: {
                slug: '/2019-11-20-monte-sacro-1-vs-monte-sacro-2-1/',
            },
            html: '',
        },
    },
    {
        node: {
            frontmatter: {
                title: 'Monte Sacro Practice 1',
                language: 'en',
                type: 'Practice',
                venue: 'Parco Sannazzaro',
                opposing_team: null,
                score_ms: null,
                score_other: null,
                date: '2219-11-20T17:40:15.578Z',
                layout: 'schedule',
            },
            fields: {
                slug: '/2219-11-20-monte-sacro-practice-1/',
            },
            html: '',
        },
    },
];

export const mockTwoFutureScheduleDataNodes: MarkdownDataNode[] = [
    {
        node: {
            frontmatter: {
                title: 'Monte Sacro 1 vs Monte Sacro 2',
                language: 'en',
                type: 'Match',
                venue: 'Parco Sannazzaro',
                opposing_team: 'CMS2',
                score_ms: 1,
                score_other: 2,
                date: '2019-11-20T02:15:50.939Z',
                layout: 'schedule',
            },
            fields: {
                slug: '/2019-11-20-monte-sacro-1-vs-monte-sacro-2/',
            },
            html: '',
        },
    },
    {
        node: {
            frontmatter: {
                title: 'Monte Sacro 1 vs Monte Sacro 2',
                language: 'it',
                type: 'Partita',
                venue: 'Parco Sannazzaro',
                opposing_team: 'CMS2',
                score_ms: 2,
                score_other: 1,
                date: '2219-11-20T02:15:58.097Z',
                layout: 'schedule',
            },
            fields: {
                slug: '/2019-11-20-monte-sacro-1-vs-monte-sacro-2-1/',
            },
            html: '',
        },
    },
    {
        node: {
            frontmatter: {
                title: 'Monte Sacro Practice 1',
                language: 'en',
                type: 'Practice',
                venue: 'Parco Sannazzaro',
                opposing_team: null,
                score_ms: null,
                score_other: null,
                date: '2219-11-20T17:40:15.578Z',
                layout: 'schedule',
            },
            fields: {
                slug: '/2019-11-20-monte-sacro-practice-1/',
            },
            html: '',
        },
    },
];

export const mockEventPracticeEN = {
    node: {
        frontmatter: {
            title: 'Monte Sacro Practice 1',
            language: 'en',
            type: 'Practice',
            venue: 'Parco Sannazzaro',
            opposing_team: null,
            score_ms: null,
            score_other: null,
            date: '2019-11-20T17:40:15.578Z',
            layout: 'schedule',
        },
        fields: {
            slug: '/2019-11-20-monte-sacro-practice-1/',
        },
        html: '',
    },
};

export const mockEventFinishedMatchEN = {
    node: {
        frontmatter: {
            title: 'Monte Sacro 1 vs Monte Sacro 2',
            language: 'en',
            type: 'Match',
            venue: 'Parco Sannazzaro',
            opposing_team: 'CMS2',
            score_ms: 1,
            score_other: 2,
            date: '2019-11-20T17:40:15.578Z',
            layout: 'schedule',
        },
        fields: {
            slug: '/2019-11-20-monte-sacro-1-vs-monte-sacro-2/',
        },
        html: '',
    },
};

export const mockEventFutureMatchEN = {
    node: {
        frontmatter: {
            title: 'Monte Sacro 1 vs Monte Sacro 2',
            language: 'en',
            type: 'Match',
            venue: 'Parco Sannazzaro',
            opposing_team: 'CMS2',
            score_ms: 1,
            score_other: 2,
            date: '2200-11-20T17:40:15.578Z',
            layout: 'schedule',
        },
        fields: {
            slug: '/2019-11-20-monte-sacro-1-vs-monte-sacro-2/',
        },
        html: '',
    },
};

export const mockEventPracticeIT = {
    node: {
        frontmatter: {
            title: 'Monte Sacro 1 vs Monte Sacro 2',
            language: 'it',
            type: 'Allenamento',
            venue: 'Parco Sannazzaro',
            opposing_team: null,
            score_ms: null,
            score_other: null,
            date: '2019-11-20T17:40:15.578Z',
            layout: 'schedule',
        },
        fields: {
            slug: '/2019-11-20-monte-sacro-1-vs-monte-sacro-2-1/',
        },
        html: '',
    },
};

export const mockEventFinishedMatchIT = {
    node: {
        frontmatter: {
            title: 'Monte Sacro 1 vs Monte Sacro 2',
            language: 'it',
            type: 'Partita',
            venue: 'Parco Sannazzaro',
            opposing_team: 'CMS2',
            score_ms: 1,
            score_other: 2,
            date: '2019-11-20T17:40:15.578Z',
            layout: 'schedule',
        },
        fields: {
            slug: '/2019-11-20-monte-sacro-1-vs-monte-sacro-2-1/',
        },
        html: '',
    },
};

export const mockEventFutureMatchIT = {
    node: {
        frontmatter: {
            title: 'Monte Sacro 1 vs Monte Sacro 2',
            language: 'it',
            type: 'Partita',
            venue: 'Parco Sannazzaro',
            opposing_team: 'CMS2',
            score_ms: 1,
            score_other: 2,
            date: '2200-11-20T17:40:15.578Z',
            layout: 'schedule',
        },
        fields: {
            slug: '/2019-11-20-monte-sacro-1-vs-monte-sacro-2-1/',
        },
        html: '',
    },
};

export const mockNewsDataNodes: MarkdownDataNode[] = [
    {
        node: {
            frontmatter: {
                title: 'Test News Plain',
                language: 'en',
                date: '2019-12-02T19:23:26.234Z',
                layout: 'post',
                banner_image: '../../src/images/cms-icon.png',
            },
            fields: {
                slug: '/2019-12-02-test-news-plain/',
            },
            html:
                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a volutpat nulla, scelerisque mollis est. Sed eget cursus ipsum. Mauris pharetra purus non nulla pharetra, sit amet faucibus quam pellentesque. Vivamus auctor, tellus in finibus placerat, elit eros gravida nisl, sit amet laoreet nulla magna non augue. Morbi volutpat, nibh ac pellentesque congue, felis velit commodo quam, at scelerisque justo arcu et ex. Morbi eget sem placerat, luctus est quis, vulputate tortor. Curabitur ut iaculis lacus, eu pellentesque lacus. Fusce bibendum est id lorem finibus, quis aliquam lacus ultrices. Praesent condimentum pharetra purus et sagittis. Vivamus fermentum molestie congue. Cras dictum in orci eu auctor. Mauris tristique quam quis sem dictum, in rhoncus metus venenatis. Phasellus maximus ex vitae elit sodales tempus. Sed suscipit ex non ex viverra eleifend.</p>\n<p>Mauris in mauris urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris eu viverra arcu, eget condimentum eros. Duis eget tortor lorem. Sed rhoncus dictum nisl a elementum. Vestibulum enim turpis, posuere vitae quam nec, hendrerit mollis lorem. Quisque bibendum sed dolor in rhoncus. Etiam id nunc porta, mollis nisi sed, consequat nisl. Vestibulum nec sapien lectus. Vestibulum nec justo et erat fringilla venenatis.</p>\n<p>Aliquam eu dolor felis. Curabitur fringilla mollis sem, quis accumsan tortor pulvinar sit amet. Pellentesque porttitor varius velit vitae maximus. Aenean condimentum sed turpis eget auctor. Ut elementum vehicula molestie. In id feugiat ligula. Sed at aliquet nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse euismod dictum nunc, non auctor ipsum lobortis sed.</p>\n<p>Etiam et mauris velit. Cras at vestibulum odio. Sed accumsan turpis in felis vehicula, at feugiat erat bibendum. Vivamus sed venenatis mi. Vestibulum pulvinar elit vitae sem tempor, a tincidunt mauris euismod. Nam in laoreet quam. Nullam congue vitae velit sit amet feugiat. Etiam mattis finibus ante, ut aliquet nisl. In consectetur blandit ipsum. In nec vestibulum nibh. Maecenas malesuada, purus sit amet convallis pharetra, felis ante fermentum est, imperdiet consequat nunc nulla non ante. Aenean sollicitudin non neque non rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor est, viverra vitae eleifend ac, tincidunt ac arcu. Fusce ultrices nunc vel nunc fermentum convallis. Sed condimentum tortor libero, nec vestibulum leo convallis rhoncus.</p>\n<p>Integer eu nisi eu nunc ornare pretium rutrum ut tortor. Ut tincidunt, quam sit amet accumsan auctor, dui velit faucibus massa, eget viverra dolor mi id erat. Phasellus sed facilisis neque. Maecenas nunc sapien, faucibus eu purus sit amet, mattis venenatis turpis. Aenean tristique tortor vitae nisl dictum, eu malesuada urna tincidunt. Quisque dapibus ante vel ex tincidunt commodo. Aliquam gravida massa ac tellus rutrum, eget euismod lorem sodales. Vivamus volutpat rhoncus ex, a luctus nisl ultricies ut. Duis id magna ac metus laoreet bibendum eu sit amet nulla. Curabitur et leo id nisi vestibulum tincidunt. Maecenas et magna sagittis ipsum congue luctus. Etiam lacus arcu, blandit non consectetur sit amet, semper et neque. Ut luctus diam nec accumsan dignissim. Aliquam eget ultrices lectus.</p>\n<p>Nulla viverra magna odio, lobortis posuere augue viverra sed. Aliquam ante nulla, hendrerit quis suscipit et, rutrum quis diam. Donec ut tristique tellus. Aliquam lorem risus, porttitor sit amet lorem vel, scelerisque congue ipsum. Morbi tincidunt molestie sagittis. Ut quis est ac urna hendrerit vulputate at et ipsum. Aliquam erat volutpat. Curabitur scelerisque ligula eget risus semper ornare. Etiam venenatis dolor vel suscipit dapibus. Nullam molestie ut est a pharetra. Proin congue nulla non laoreet vehicula. Sed gravida iaculis tellus, eu congue est luctus non. In sem diam, facilisis a pellentesque eu, vehicula quis erat. Suspendisse vitae vestibulum dolor. Donec ut eros vel odio varius fringilla eget vel lectus.</p>',
        },
    },
    {
        node: {
            frontmatter: {
                title: 'Notizie Prova Semplice',
                language: 'it',
                date: '2019-12-02T19:24:28.048Z',
                layout: 'post',
                banner_image: '../../src/images/cms-icon.png',
            },
            fields: {
                slug: '/2019-12-02-notizie-prova-semplice/',
            },
            html:
                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a volutpat nulla, scelerisque mollis est. Sed eget cursus ipsum. Mauris pharetra purus non nulla pharetra, sit amet faucibus quam pellentesque. Vivamus auctor, tellus in finibus placerat, elit eros gravida nisl, sit amet laoreet nulla magna non augue. Morbi volutpat, nibh ac pellentesque congue, felis velit commodo quam, at scelerisque justo arcu et ex. Morbi eget sem placerat, luctus est quis, vulputate tortor. Curabitur ut iaculis lacus, eu pellentesque lacus. Fusce bibendum est id lorem finibus, quis aliquam lacus ultrices. Praesent condimentum pharetra purus et sagittis. Vivamus fermentum molestie congue. Cras dictum in orci eu auctor. Mauris tristique quam quis sem dictum, in rhoncus metus venenatis. Phasellus maximus ex vitae elit sodales tempus. Sed suscipit ex non ex viverra eleifend.</p>\n<p>Mauris in mauris urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris eu viverra arcu, eget condimentum eros. Duis eget tortor lorem. Sed rhoncus dictum nisl a elementum. Vestibulum enim turpis, posuere vitae quam nec, hendrerit mollis lorem. Quisque bibendum sed dolor in rhoncus. Etiam id nunc porta, mollis nisi sed, consequat nisl. Vestibulum nec sapien lectus. Vestibulum nec justo et erat fringilla venenatis.</p>\n<p>Aliquam eu dolor felis. Curabitur fringilla mollis sem, quis accumsan tortor pulvinar sit amet. Pellentesque porttitor varius velit vitae maximus. Aenean condimentum sed turpis eget auctor. Ut elementum vehicula molestie. In id feugiat ligula. Sed at aliquet nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse euismod dictum nunc, non auctor ipsum lobortis sed.</p>\n<p>Etiam et mauris velit. Cras at vestibulum odio. Sed accumsan turpis in felis vehicula, at feugiat erat bibendum. Vivamus sed venenatis mi. Vestibulum pulvinar elit vitae sem tempor, a tincidunt mauris euismod. Nam in laoreet quam. Nullam congue vitae velit sit amet feugiat. Etiam mattis finibus ante, ut aliquet nisl. In consectetur blandit ipsum. In nec vestibulum nibh. Maecenas malesuada, purus sit amet convallis pharetra, felis ante fermentum est, imperdiet consequat nunc nulla non ante. Aenean sollicitudin non neque non rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor est, viverra vitae eleifend ac, tincidunt ac arcu. Fusce ultrices nunc vel nunc fermentum convallis. Sed condimentum tortor libero, nec vestibulum leo convallis rhoncus.</p>\n<p>Integer eu nisi eu nunc ornare pretium rutrum ut tortor. Ut tincidunt, quam sit amet accumsan auctor, dui velit faucibus massa, eget viverra dolor mi id erat. Phasellus sed facilisis neque. Maecenas nunc sapien, faucibus eu purus sit amet, mattis venenatis turpis. Aenean tristique tortor vitae nisl dictum, eu malesuada urna tincidunt. Quisque dapibus ante vel ex tincidunt commodo. Aliquam gravida massa ac tellus rutrum, eget euismod lorem sodales. Vivamus volutpat rhoncus ex, a luctus nisl ultricies ut. Duis id magna ac metus laoreet bibendum eu sit amet nulla. Curabitur et leo id nisi vestibulum tincidunt. Maecenas et magna sagittis ipsum congue luctus. Etiam lacus arcu, blandit non consectetur sit amet, semper et neque. Ut luctus diam nec accumsan dignissim. Aliquam eget ultrices lectus.</p>\n<p>Nulla viverra magna odio, lobortis posuere augue viverra sed. Aliquam ante nulla, hendrerit quis suscipit et, rutrum quis diam. Donec ut tristique tellus. Aliquam lorem risus, porttitor sit amet lorem vel, scelerisque congue ipsum. Morbi tincidunt molestie sagittis. Ut quis est ac urna hendrerit vulputate at et ipsum. Aliquam erat volutpat. Curabitur scelerisque ligula eget risus semper ornare. Etiam venenatis dolor vel suscipit dapibus. Nullam molestie ut est a pharetra. Proin congue nulla non laoreet vehicula. Sed gravida iaculis tellus, eu congue est luctus non. In sem diam, facilisis a pellentesque eu, vehicula quis erat. Suspendisse vitae vestibulum dolor. Donec ut eros vel odio varius fringilla eget vel lectus.</p>',
        },
    },
    {
        node: {
            frontmatter: {
                title: 'Test News Markdown',
                language: 'en',
                date: '2019-12-02T19:25:03.182Z',
                layout: 'post',
                banner_image: '../../src/images/cms-icon.png',
            },
            fields: {
                slug: '/2019-12-02-test-news-markdown/',
            },
            html:
                '<p><code>Donec tristique lobortis tortor, quis commodo sapien eleifend sit amet. Donec ut elit et nibh placerat egestas nec eget mi. Nulla mollis consequat nunc sed dignissim. Ut feugiat quam in fringilla suscipit. Quisque sed sodales odio. In id purus enim. Pellentesque blandit, nisi ac condimentum placerat, dui magna molestie est, in sodales arcu velit non nibh. Nam tempus felis quis diam accumsan, non accumsan velit tempor. Aenean lacus magna, iaculis quis massa at, pellentesque tristique purus. Sed eu neque at nisi ultrices mollis. Sed nulla massa, dapibus at convallis non, finibus et lacus. Nunc facilisis nibh eu dolor dignissim, congue sodales dui commodo. Mauris dolor nibh, consequat quis nisl ut, facilisis imperdiet tellus. Fusce tincidunt dictum nisi, ut fermentum leo eleifend ut. Phasellus ut gravida purus. Maecenas nec fermentum nulla. Aenean rhoncus vestibulum libero nec bibendum. Phasellus ut quam vel dolor pulvinar facilisis eget ut enim. Sed id laoreet velit. Nam tempor massa a magna elementum, at volutpat leo egestas. Nunc suscipit dolor non mauris dapibus, dignissim fringilla turpis consectetur. Etiam sagittis nec ipsum eget blandit. Donec gravida, lacus sit amet maximus pharetra, ex felis venenatis metus, sit amet egestas erat velit vel ligula.</code></p>\n<p><em>Ut</em> <p style="color: red">orci orci</p>, <strong><em>lobortis ac porta ultricies, volutpat commodo enim.</em></strong> <strong>Fusce ex lacus, tincidunt eget</strong></p>\n<blockquote>\n<p>diam quis, tincidunt elementum neque. Duis finibus diam dolor, ac ultrices neque tempor in. Maecenas sed velit nec urna auctor eleifend sit amet a dolor. Suspendisse blandit eros non facilisis semper. </p>\n</blockquote>\n<h2>Sed ut massa eu leo consectetur commodo nec id magna.</h2>\n<p>Integer lectus mi, gravida id tortor vitae, laoreet aliquam massa. Nullam purus nisi, sodales et finibus et, rhoncus ac justo. Praesent condimentum ante eu risus fermentum, ac pulvinar mi condimentum. </p>\n<ul>\n<li>Morbi at luctus libero. </li>\n<li>Integer porttitor turpis mattis ante blandit consequat. </li>\n<li>Integer laoreet turpis vitae ipsum mollis, at ullamcorper sem pretium. </li>\n</ul>\n<p>Vestibulum at nunc pulvinar eros aliquam tincidunt eget at nisl. In quis orci nisl.</p>',
        },
    },
    {
        node: {
            frontmatter: {
                title: 'Notizie Prova Markdown',
                language: 'it',
                date: '2019-12-02T19:25:28.605Z',
                layout: 'post',
                banner_image: '../../src/images/cms-icon.png',
            },
            fields: {
                slug: '/2019-12-02-notizie-prova-markdown/',
            },
            html:
                '<p><code>Donec tristique lobortis tortor, quis commodo sapien eleifend sit amet. Donec ut elit et nibh placerat egestas nec eget mi. Nulla mollis consequat nunc sed dignissim. Ut feugiat quam in fringilla suscipit. Quisque sed sodales odio. In id purus enim. Pellentesque blandit, nisi ac condimentum placerat, dui magna molestie est, in sodales arcu velit non nibh. Nam tempus felis quis diam accumsan, non accumsan velit tempor. Aenean lacus magna, iaculis quis massa at, pellentesque tristique purus. Sed eu neque at nisi ultrices mollis. Sed nulla massa, dapibus at convallis non, finibus et lacus. Nunc facilisis nibh eu dolor dignissim, congue sodales dui commodo. Mauris dolor nibh, consequat quis nisl ut, facilisis imperdiet tellus. Fusce tincidunt dictum nisi, ut fermentum leo eleifend ut. Phasellus ut gravida purus. Maecenas nec fermentum nulla. Aenean rhoncus vestibulum libero nec bibendum. Phasellus ut quam vel dolor pulvinar facilisis eget ut enim. Sed id laoreet velit. Nam tempor massa a magna elementum, at volutpat leo egestas. Nunc suscipit dolor non mauris dapibus, dignissim fringilla turpis consectetur. Etiam sagittis nec ipsum eget blandit. Donec gravida, lacus sit amet maximus pharetra, ex felis venenatis metus, sit amet egestas erat velit vel ligula.</code></p>\n<p><em>Ut</em> <p style="color: red">orci orci</p>, <strong><em>lobortis ac porta ultricies, volutpat commodo enim.</em></strong> <strong>Fusce ex lacus, tincidunt eget</strong></p>\n<blockquote>\n<p>diam quis, tincidunt elementum neque. Duis finibus diam dolor, ac ultrices neque tempor in. Maecenas sed velit nec urna auctor eleifend sit amet a dolor. Suspendisse blandit eros non facilisis semper. </p>\n</blockquote>\n<h2>Sed ut massa eu leo consectetur commodo nec id magna.</h2>\n<p>Integer lectus mi, gravida id tortor vitae, laoreet aliquam massa. Nullam purus nisi, sodales et finibus et, rhoncus ac justo. Praesent condimentum ante eu risus fermentum, ac pulvinar mi condimentum. </p>\n<ul>\n<li>Morbi at luctus libero. </li>\n<li>Integer porttitor turpis mattis ante blandit consequat. </li>\n<li>Integer laoreet turpis vitae ipsum mollis, at ullamcorper sem pretium. </li>\n</ul>\n<p>Vestibulum at nunc pulvinar eros aliquam tincidunt eget at nisl. In quis orci nisl.</p>',
        },
    },
    {
        node: {
            frontmatter: {
                title: 'Test News Symbols',
                language: 'en',
                date: '2019-12-02T19:25:49.168Z',
                layout: 'post',
                banner_image: '../../src/images/cms-icon.png',
            },
            fields: {
                slug: '/2019-12-02-test-news-symbols/',
            },
            html:
                '<p>!#@!@#!##$%^%<em>^&#x26;</em>^<em>^&#x26;^#%#$(</em>)(**({}}{][];\'./.,&#x3C;>?&#x3C;":{~<code></code>!@#!3-0913-98576||\\][/$</p>',
        },
    },
    {
        node: {
            frontmatter: {
                title: 'Notizie Prova Simboli',
                language: 'it',
                date: '2019-12-02T19:26:13.275Z',
                layout: 'post',
                banner_image: '../../src/images/cms-icon.png',
            },
            fields: {
                slug: '/2019-12-02-notizie-prova-simboli/',
            },
            html:
                '<p>!#@!@#!##$%^%<em>^&#x26;</em>^<em>^&#x26;^#%#$(</em>)(**({}}{][];\'./.,&#x3C;>?&#x3C;":{~<code></code>!@#!3-0913-98576||\\][/$</p>',
        },
    },
    {
        node: {
            frontmatter: {
                title: 'Test News Short',
                language: 'en',
                date: '2019-12-02T19:26:41.566Z',
                layout: 'post',
                banner_image: '../../src/images/cms-icon.png',
            },
            fields: {
                slug: '/2019-12-02-test-news-short/',
            },
            html: '<p>Nulla consectetur.</p>',
        },
    },
    {
        node: {
            frontmatter: {
                title: 'Notizie Prova Corta',
                language: 'it',
                date: '2019-12-02T19:27:02.142Z',
                layout: 'post',
                banner_image: '../../src/images/cms-icon.png',
            },
            fields: {
                slug: '/2019-12-02-notizie-prova-corta/',
            },
            html: '<p>Nulla consectetur.</p>',
        },
    },
    {
        node: {
            frontmatter: {
                title: 'Test News Banner',
                language: 'en',
                date: '2019-12-02T19:27:19.215Z',
                layout: 'post',
                banner_image: '../../src/images/ball.jpg',
            },
            fields: {
                slug: '/2019-12-02-test-news-banner/',
            },
            html:
                '<p>Curabitur vitae sem quam. Duis nec orci sed est sollicitudin rhoncus sed eget orci. Nam condimentum magna eu odio malesuada, elementum vulputate arcu auctor. Aliquam erat volutpat. Nunc tristique sit amet nisl sit amet elementum. Nunc sit amet purus fringilla, lacinia tellus id, egestas magna. Maecenas id lorem sed sem pharetra hendrerit ac vel nibh. Maecenas est lacus, sagittis ut justo eu, feugiat suscipit ligula. Phasellus vehicula ultrices massa. Donec facilisis venenatis mauris, eget venenatis lectus vehicula vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam est nibh, malesuada vel ipsum id, mattis rutrum risus. In cursus imperdiet nisl ac dapibus. Nunc efficitur leo sed justo interdum, ac rhoncus lacus suscipit. Cras cursus tortor sit amet felis rhoncus volutpat. In accumsan sapien eget dui ornare dapibus.</p>',
        },
    },
    {
        node: {
            frontmatter: {
                title: 'Notizie Prova Banner',
                language: 'it',
                date: '2019-12-02T19:28:00.362Z',
                layout: 'post',
                banner_image: '../../src/images/ball.jpg',
            },
            fields: {
                slug: '/2019-12-02-notizie-prova-banner/',
            },
            html:
                '<p>Curabitur vitae sem quam. Duis nec orci sed est sollicitudin rhoncus sed eget orci. Nam condimentum magna eu odio malesuada, elementum vulputate arcu auctor. Aliquam erat volutpat. Nunc tristique sit amet nisl sit amet elementum. Nunc sit amet purus fringilla, lacinia tellus id, egestas magna. Maecenas id lorem sed sem pharetra hendrerit ac vel nibh. Maecenas est lacus, sagittis ut justo eu, feugiat suscipit ligula. Phasellus vehicula ultrices massa. Donec facilisis venenatis mauris, eget venenatis lectus vehicula vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam est nibh, malesuada vel ipsum id, mattis rutrum risus. In cursus imperdiet nisl ac dapibus. Nunc efficitur leo sed justo interdum, ac rhoncus lacus suscipit. Cras cursus tortor sit amet felis rhoncus volutpat. In accumsan sapien eget dui ornare dapibus.</p>',
        },
    },
    {
        node: {
            frontmatter: {
                title: 'Test News Image',
                language: 'en',
                date: '2019-12-02T19:30:08.694Z',
                layout: 'post',
                banner_image: '../../src/images/cms-icon.png',
            },
            fields: {
                slug: '/2019-12-02-test-news-image/',
            },
            html:
                '<p>Donec vitae nunc et ligula vehicula aliquet eu eu libero. Mauris in scelerisque magna, sit amet egestas tellus. Vestibulum eget purus lobortis, auctor mauris ac, malesuada diam. Aliquam turpis sapien, semper non est sit amet, fringilla interdum nisi. In tincidunt velit a lorem molestie, a maximus diam consequat. Sed in est eu arcu cursus lobortis id sed metus. Maecenas justo nisi, rhoncus at nisl quis, commodo rutrum tortor. Sed ornare nibh in euismod mattis.</p>\n<p><span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto;  max-width: 1400px;"\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/2e7396dc6a2652a0267c8daa3a97b55e/c0087/aerial-view.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 177.79775280898878%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAkABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAMFAQIE/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAEDAgT/2gAMAwEAAhADEAAAAaPex2liodSrnn5HOomF3FgYDP/EAB0QAAICAgMBAAAAAAAAAAAAAAECABEDEwQQEiL/2gAIAQEAAQUCAueDCKiImpVE5FbVB8LMwp9nyMlF3Jbv/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwFf/8QAGREBAAIDAAAAAAAAAAAAAAAAAQACAxAR/9oACAECAQE/AXLyEtRYb//EABoQAAICAwAAAAAAAAAAAAAAAAABEDERIEH/2gAIAQEABj8CKhPrhinBev8A/8QAGxAAAwADAQEAAAAAAAAAAAAAAAERITFBYRD/2gAIAQEAAT8hboV6GNGoypaC/VGwFcIcb4LcdMf4hI0pKIfRKXV4LP3/2gAMAwEAAgADAAAAEJfawPwf/8QAFxEBAAMAAAAAAAAAAAAAAAAAARAgIf/aAAgBAwEBPxBYTaf/xAAXEQEBAQEAAAAAAAAAAAAAAAABEQAQ/9oACAECAQE/ECSTKlyTMEC9/8QAHhABAAMAAgIDAAAAAAAAAAAAAQARITFBEGGh4fH/2gAIAQEAAT8QuqXUHUMxC4ORhmAsJfEq9rqW4Q6X6gnQE1sIObd7Gtc3fEvNatfqB06K38lWsoGephsfH//Z\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Aerial View of a Soccer Field"\n        title="Aerial View of a Soccer Field"\n        src="/static/2e7396dc6a2652a0267c8daa3a97b55e/8dcf2/aerial-view.jpg"\n        srcset="/static/2e7396dc6a2652a0267c8daa3a97b55e/3a2a3/aerial-view.jpg 350w,\n/static/2e7396dc6a2652a0267c8daa3a97b55e/67d4f/aerial-view.jpg 700w,\n/static/2e7396dc6a2652a0267c8daa3a97b55e/8dcf2/aerial-view.jpg 1400w,\n/static/2e7396dc6a2652a0267c8daa3a97b55e/36a65/aerial-view.jpg 2100w,\n/static/2e7396dc6a2652a0267c8daa3a97b55e/c0087/aerial-view.jpg 2225w"\n        sizes="(max-width: 1400px) 100vw, 1400px"\n        loading="lazy"\n      />\n  </a>\n    </span></p>\n<p>Donec vitae nunc et ligula vehicula aliquet eu eu libero. Mauris in scelerisque magna, sit amet egestas tellus. Vestibulum eget purus lobortis, auctor mauris ac, malesuada diam. Aliquam turpis sapien, semper non est sit amet, fringilla interdum nisi. In tincidunt velit a lorem molestie, a maximus diam consequat. Sed in est eu arcu cursus lobortis id sed metus. Maecenas justo nisi, rhoncus at nisl quis, commodo rutrum tortor. Sed ornare nibh in euismod mattis.</p>',
        },
    },
    {
        node: {
            frontmatter: {
                title: 'Notizie Prova Immagine',
                language: 'it',
                date: '2019-12-02T19:30:25.362Z',
                layout: 'post',
                banner_image: '../../src/images/cms-icon.png',
            },
            fields: {
                slug: '/2019-12-02-notizie-prova-immagine/',
            },
            html:
                '<p>Donec vitae nunc et ligula vehicula aliquet eu eu libero. Mauris in scelerisque magna, sit amet egestas tellus. Vestibulum eget purus lobortis, auctor mauris ac, malesuada diam. Aliquam turpis sapien, semper non est sit amet, fringilla interdum nisi. In tincidunt velit a lorem molestie, a maximus diam consequat. Sed in est eu arcu cursus lobortis id sed metus. Maecenas justo nisi, rhoncus at nisl quis, commodo rutrum tortor. Sed ornare nibh in euismod mattis.</p>\n<p><span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto;  max-width: 1400px;"\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/2e7396dc6a2652a0267c8daa3a97b55e/c0087/aerial-view.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 177.79775280898878%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAkABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAMFAQIE/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAEDAgT/2gAMAwEAAhADEAAAAaPex2liodSrnn5HOomF3FgYDP/EAB0QAAICAgMBAAAAAAAAAAAAAAECABEDEwQQEiL/2gAIAQEAAQUCAueDCKiImpVE5FbVB8LMwp9nyMlF3Jbv/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwFf/8QAGREBAAIDAAAAAAAAAAAAAAAAAQACAxAR/9oACAECAQE/AXLyEtRYb//EABoQAAICAwAAAAAAAAAAAAAAAAABEDERIEH/2gAIAQEABj8CKhPrhinBev8A/8QAGxAAAwADAQEAAAAAAAAAAAAAAAERITFBYRD/2gAIAQEAAT8hboV6GNGoypaC/VGwFcIcb4LcdMf4hI0pKIfRKXV4LP3/2gAMAwEAAgADAAAAEJfawPwf/8QAFxEBAAMAAAAAAAAAAAAAAAAAARAgIf/aAAgBAwEBPxBYTaf/xAAXEQEBAQEAAAAAAAAAAAAAAAABEQAQ/9oACAECAQE/ECSTKlyTMEC9/8QAHhABAAMAAgIDAAAAAAAAAAAAAQARITFBEGGh4fH/2gAIAQEAAT8QuqXUHUMxC4ORhmAsJfEq9rqW4Q6X6gnQE1sIObd7Gtc3fEvNatfqB06K38lWsoGephsfH//Z\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Aerial View of a Soccer Field"\n        title="Aerial View of a Soccer Field"\n        src="/static/2e7396dc6a2652a0267c8daa3a97b55e/8dcf2/aerial-view.jpg"\n        srcset="/static/2e7396dc6a2652a0267c8daa3a97b55e/3a2a3/aerial-view.jpg 350w,\n/static/2e7396dc6a2652a0267c8daa3a97b55e/67d4f/aerial-view.jpg 700w,\n/static/2e7396dc6a2652a0267c8daa3a97b55e/8dcf2/aerial-view.jpg 1400w,\n/static/2e7396dc6a2652a0267c8daa3a97b55e/36a65/aerial-view.jpg 2100w,\n/static/2e7396dc6a2652a0267c8daa3a97b55e/c0087/aerial-view.jpg 2225w"\n        sizes="(max-width: 1400px) 100vw, 1400px"\n        loading="lazy"\n      />\n  </a>\n    </span></p>\n<p>Donec vitae nunc et ligula vehicula aliquet eu eu libero. Mauris in scelerisque magna, sit amet egestas tellus. Vestibulum eget purus lobortis, auctor mauris ac, malesuada diam. Aliquam turpis sapien, semper non est sit amet, fringilla interdum nisi. In tincidunt velit a lorem molestie, a maximus diam consequat. Sed in est eu arcu cursus lobortis id sed metus. Maecenas justo nisi, rhoncus at nisl quis, commodo rutrum tortor. Sed ornare nibh in euismod mattis.</p>',
        },
    },
];
