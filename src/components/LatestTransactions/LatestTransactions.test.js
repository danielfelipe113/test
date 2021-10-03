import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
  },
  {
    "id": 6,
    "guest": "Lorelle Cathro",
    "guestId": "user_171",
    "itemsCount": 15,
    "totalValue": 96
  },
  {
    "id": 7,
    "guest": "Heindrick Archer",
    "guestId": "user_876",
    "itemsCount": 13,
    "totalValue": 370
  },
  {
    "id": 8,
    "guest": "Fawne Ledger",
    "guestId": "user_401",
    "itemsCount": 17,
    "totalValue": 134
  },
  {
    "id": 9,
    "guest": "Way Scanterbury",
    "guestId": "user_411",
    "itemsCount": 7,
    "totalValue": 80
  },
  {
    "id": 10,
    "guest": "Ryann Venneur",
    "guestId": "user_858",
    "itemsCount": 18,
    "totalValue": 133
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

    expect(latestTransactions.length).toBe(3);
    
  });

  test('it should show N amount of transactions', async () => {
    render(
      <BrowserRouter>
        <LatestTransactions />
      </BrowserRouter>
    );

    const selectInput = await screen.findByTestId('amountInput');
    fireEvent.change(selectInput, { target: { value: 3 } })
    let latestTransactions = await screen.findAllByTestId('latestTransaction');

    expect(latestTransactions.length).toBe(3);

    fireEvent.change(selectInput, { target: { value: 5 } })
    latestTransactions = await screen.findAllByTestId('latestTransaction');

    expect(latestTransactions.length).toBe(5);

    fireEvent.change(selectInput, { target: { value: 10 } })
    latestTransactions = await screen.findAllByTestId('latestTransaction');

    expect(latestTransactions.length).toBe(10);
  });
});