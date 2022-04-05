import * as React from "react"
import { render, screen, fireEvent } from "@testing-library/react"

import { PeopleDashboard } from "./PeopleDashboard";

const mockPastActivities = [
  {
    created_at: '2020-04-09T01:50:06.951221Z',
    id: 'call-1',
    occurred_at: '2019-10-03T15:00:57.089927Z',
    dynamic_data: {
      user_name: 'Sean Jones',
      voicemail_duration: 118
    },
    type: 'voicemail'
  },
  {
    created_at: '2021-04-07T15:00:57.089927Z',
    id: 'success-1',
    occurred_at: '2021-04-07T15:00:57.089927Z',
    dynamic_data: {
      user_name: 'Sean Jones'
    },
    type: 'success'
  },
  {
    created_at: '2020-10-28T13:19:45.637830Z',
    id: 'sent_email-1',
    occurred_at: '2020-10-28T13:19:45.562226Z',
    dynamic_data: {
      counts: {
        clicks: 0,
        replies: 1,
        views: 20
      },
      user_name: 'Sean Jones'
    },
    static_data: {
      status: 'sent',
      subject: 'Modern Sales in SalesLoft'
    },
    type: 'sent_email'
  },
  {
    created_at: '2020-04-11T23:09:18.196574Z',
    id: 'call-2',
    occurred_at: '2019-10-03T15:00:56.523049Z',
    dynamic_data: {
      user_name: 'Sean Jones',
      phone_number: '+12345678910'
    },
    static_data: {
      note_content: "LD off - office \n\nremembers my emails, says he's overseeing a team of 10 'inside sales specialist'....they're somewhat account managers. Conversation was short, so I didn't do much discovery, but he is open to seeing SL",
      note_id: 1,
      recording_urls: ['https://recordings.salesloft.com'],
      sentiment: 'Discovery Call'
    },
    type: 'call'
  },
  {
    dynamic_data: {
      user_name: 'Sean Jones',
      voicemail_duration: 118
    },
    id: 'call-3',
    occurred_at: '2019-10-03T15:00:57.089927Z',
    type: 'voicemail',
  },
  {
    created_at: '2020-04-05T07:37:24.043963Z',
    id: 'added_to_cadence-1',
    occurred_at: '2019-10-03T15:00:18.871103Z',
    dynamic_data: {
      cadence_name: 'Opportunity | Active Opps',
      user_name: 'Sean Jones'
    },
    static_data: {
      cadence_id: 1234,
      instigator: {
        action_caller_id: 12,
        action_caller_name: 'Sean Jones'
      }
    },
    type: 'added_to_cadence'
  }
];


describe('PeopleDashboard', () => {
  let originalFetch;

  beforeEach(() => {
    originalFetch = global.fetch;
    global.fetch = jest.fn((url) => {
      // Mock fetch so that we only return data for past activities
      const isPastActivitiesReq = url === 'https://ui-offline-exercise.s3.amazonaws.com/data/past_activities/1.json';

      return Promise.resolve({
        json: () => Promise.resolve({data: isPastActivitiesReq ? mockPastActivities : [] }),
      });
    });
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  test('switching tabs works successfully', async () => {
    render(<PeopleDashboard 
      personName="Sean Jones"
      pastActivitiesUrl="https://ui-offline-exercise.s3.amazonaws.com/data/past_activities/1.json" 
      upcomingActivitiesUrl="https://ui-offline-exercise.s3.amazonaws.com/data/upcoming_activities/1.json"
    />)
  
    expect(await screen.findByText('Upcoming Activities')).toBeVisible();
    expect(await screen.findByText('Past Activities')).toBeVisible();

    const trackingTabButton = await screen.findByText('Tracking');
    fireEvent.click(trackingTabButton);
  
    expect(screen.queryByText('Upcoming Activities')).toBeNull();
    expect(screen.queryByText('Past Activities')).toBeNull();
  })

  test('renders the activities tab successfully', async () => {
    render(<PeopleDashboard 
      personName="Sean Jones"
      pastActivitiesUrl="https://ui-offline-exercise.s3.amazonaws.com/data/past_activities/1.json" 
      upcomingActivitiesUrl="https://ui-offline-exercise.s3.amazonaws.com/data/upcoming_activities/1.json"
    />)
  
    // Assert there are no upcoming activities
    expect(await screen.findByText('Upcoming Activities')).toBeVisible();
    expect(await screen.findByText("Once actions are scheduled, they\'ll appear here")).toBeVisible();

    // Assert that there are past activities
    expect(await screen.findByText('Past Activities')).toBeVisible();
    expect(await screen.findByText('Added to Cadence')).toBeVisible();
    expect(await screen.findByText('Opportunity | Active Opps')).toBeVisible();
    expect(await screen.findByText('Added by Sean Jones assigned to Sean Jones')).toBeVisible();
    expect(await screen.findByText('Apr 5, 2020')).toBeVisible();
  })

  test('renders the action bar successfully', async () => {
    render(<PeopleDashboard 
      personName="Sean Jones"
      pastActivitiesUrl="https://ui-offline-exercise.s3.amazonaws.com/data/past_activities/1.json" 
      upcomingActivitiesUrl="https://ui-offline-exercise.s3.amazonaws.com/data/upcoming_activities/1.json"
    />)
  
    expect(await screen.findByText('Log a Call')).toBeVisible();
    expect(await screen.findByText('Add a Note')).toBeVisible();
    expect(screen.getByRole('button', { name: 'Activity' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Person' })).toBeVisible();
  })
});
