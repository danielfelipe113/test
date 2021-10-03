import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LatestTransactions from './LatestTransactions';
import { BrowserRouter } from 'react-router-dom';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const globalLatestTransactions = [
  {
    "id": 1,
    "guest": "Quinlan Stovine",
    "guestId": "user_260",
    "itemsCount": 6,
    "totalValue": 120
  },
  {
    "id": 2,
    "guest": "Costa Boswell",
    "guestId": "user_294",
    "itemsCount": 19,
    "totalValue": 224
  },
  {
    "id": 3,
    "guest": "Henderson Cornels",
    "guestId": "user_948",
    "itemsCount": 8,
    "totalValue": 257
  },
  {
    "id": 4,
    "guest": "Rickey Boman",
    "guestId": "user_419",
    "itemsCount": 16,
    "totalValue": 154
  },
  {
    "id": 5,
    "guest": "Anita Werner",
    "guestId": "user_616",
    "itemsCount": 5,
    "totalValue": 112
  }
];

describe('<LatestTransactions />', () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios.create());
  });

  afterEach(() => {
    mock.reset();
  });
  test('it should mount', () => {
    render(
      <BrowserRouter>
        <LatestTransactions />
      </BrowserRouter>
    );
    
    const latestTransactions = screen.getByTestId('LatestTransactions');

    expect(latestTransactions).toBeInTheDocument();
  });

  test('it should render latest transactions', async () => {
    mock.onGet('https://retoolapi.dev/M49uHh/transactions').reply(200, globalLatestTransactions);
    render(
      <BrowserRouter>
        <LatestTransactions />
      </BrowserRouter>
    );
    const latestTransactions = await screen.findAllByTestId('latestTransaction');

    expect(latestTransactions.length).toBe(10);
    
  });
});