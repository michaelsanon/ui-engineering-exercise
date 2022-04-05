import * as React from "react"
import { render, screen } from "@testing-library/react"

import { Card } from "./Card";

const voicemailActivity = {
    created_at: '2020-04-09T01:50:06.951221Z',
    id: 'call-1',
    occurred_at: '2019-10-03T15:00:57.089927Z',
    dynamic_data: {
      user_name: 'Sean Jones',
      voicemail_duration: 118
    },
    type: 'voicemail'
  }

const cadenceActivity = {
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

// TODO: Ideally test every card type here to be more thorough
describe('Card', () => {
  test('renders the voicemail card successfully', () => {
    render(<Card 
      personName="Gary Glover"
      activity={voicemailActivity}
    />)
  
    expect(screen.getByText('Voicemail Received: 1:58')).toBeVisible();
    expect(screen.getByText('Gary Glover to Sean Jones')).toBeVisible();
    expect(screen.getByText('Apr 8, 2020')).toBeVisible();
    expect(screen.getByText('9:50 PM')).toBeVisible();
  })

  test('renders the cadence card successfully', () => {
    render(<Card 
      personName="Sean Jones"
      activity={cadenceActivity}
    />)
  
    expect(screen.getByText('Added to Cadence')).toBeVisible();
    expect(screen.getByText('Opportunity | Active Opps')).toBeVisible();
    expect(screen.getByText('Added by Sean Jones assigned to Sean Jones')).toBeVisible();
    expect(screen.getByText('Apr 5, 2020')).toBeVisible();
    expect(screen.getByText('3:37 AM')).toBeVisible();
  })
});
