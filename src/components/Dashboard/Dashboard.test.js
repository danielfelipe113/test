import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { BrowserRouter } from 'react-router-dom';

const globalDashboardItems = [
      {
        "id": 1,
        "arrivalDate": "Sep 21, 2021 9:24 PM",
        "emailsSentCount": 46,
        "reservationsCount": 73,
        "transactionsCount": 29
      },
      {
        "id": 2,
        "arrivalDate": "Sep 13, 2021 12:18 AM",
        "emailsSentCount": 43,
        "reservationsCount": 77,
        "transactionsCount": 2
      },
      {
        "id": 3,
        "arrivalDate": "Sep 29, 2021 9:38 PM",
        "emailsSentCount": 26,
        "reservationsCount": 64,
        "transactionsCount": 8
      },
    ];
describe('<Dashboard />', () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios.create());
  });

  afterEach(() => {
    mock.reset();
  });
  test('it should mount', () => {
    
    render(<Dashboard />);
    
    const dashboard = screen.getByTestId('Dashboard');

    expect(dashboard).toBeInTheDocument();
  });

  test('it should render the dashboard items', async () => {
    mock.onGet('https://retoolapi.dev/BnLc1j/dashboard').reply(200, globalDashboardItems);
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
    const dashboardItems = await screen.findAllByTestId('dashboardItem');

    expect(dashboardItems.length).toBe(30);
    
  });

  test('it should render the details of each item', async () => {
    mock.onGet('https://retoolapi.dev/BnLc1j/dashboard').reply(200, [globalDashboardItems[0]]);
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
    
    const arrivalDate = await screen.findByText('Sep 21, 2021 9:24 PM');
    const emailsSent = await screen.findByText('46');
    
    expect(arrivalDate).toBeDefined();
    expect(emailsSent).toBeDefined();
  });
});