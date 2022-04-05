import * as React from "react"
import { render, screen } from "@testing-library/react"

import { ActivitiesSection } from "./ActivitiesSection";

const data = [
  {
    dynamic_data: {
      user_name: 'Sean Jones',
      voicemail_duration: 118
    },
    id: 'call-1',
    occurred_at: '2019-10-03T15:00:57.089927Z',
    type: 'voicemail',
  },
  {
    dynamic_data: {
      user_name: 'Sean Jones',
    },
    id: 'success-1',
    occurred_at: '2019-10-03T15:00:57.089927Z',
    created_at: '2021-04-07T15:00:57.089927Z',
    type: 'success',
  },
]

describe('ActivitiesSection', () => {
  test('renders the activities section successfully', () => {
    render(<ActivitiesSection 
      personName="Gary Glover"
      title="Past Activities"
      activities={data}
    />)
  
    expect(screen.getByText('Past Activities')).toBeVisible();
    expect(screen.getByText('Gary Glover to Sean Jones')).toBeVisible();
    expect(screen.getByText('Marked as Success')).toBeVisible();
    expect(screen.getByText('Apr 7, 2021')).toBeVisible();
    expect(screen.getByText('11:00 AM')).toBeVisible();
  })
});
