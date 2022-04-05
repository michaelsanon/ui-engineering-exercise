import * as React from "react"
import { render, screen } from "@testing-library/react"

import { PersonPanel } from "./PersonPanel";


describe('PersonPanel', () => {
  test('renders the person panel successfully', () => {
    render(<PersonPanel 
      displayName="Gary Glover"
      title="Marketing Manager"
      companyName="SalesLoft"
      salesforceUrl="https://salesforce.com"
      linkedinUrl="https://www.linkedin.com"
      twitterHandle="@salesloft"
      personalWebsiteUrl="https://salesloft.com"
      companyWebsiteUrl="https://salesloft.com"
    />)
  
    // TODO: test that social links exist by adding accessible text along with the SVG icons
    // so that we can properly select the elements here
    expect(screen.getByText('SalesLoft')).toBeVisible();
    expect(screen.getByText('Gary Glover')).toBeVisible();
    expect(screen.getByText('Marketing Manager')).toBeVisible();
  })  
});
