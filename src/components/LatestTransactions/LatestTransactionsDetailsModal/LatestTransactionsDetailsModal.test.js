import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LatestTransactionsDetailsModal from './LatestTransactionsDetailsModal';

const latestTransaction = {
  "id": 5,
  "guest": "Anita Werner",
  "guestId": "user_616",
  "itemsCount": 5,
  "totalValue": 112
}

describe('<LatestTransactionsDetailsModal />', () => {
  test('it should mount', () => {
    render(<LatestTransactionsDetailsModal 
      details={latestTransaction}
    />);
    
    const latestTransactionsDetailsModal = screen.getByTestId('LatestTransactionsDetailsModal');

    expect(latestTransactionsDetailsModal).toBeInTheDocument();
  });

  test('it should render data', () => {
    render(<LatestTransactionsDetailsModal
      details={latestTransaction}
    />);
    const guest = screen.findByText('Quinlan Stovine');
    const itemsCount = screen.findByText('6');
    const totalValue = screen.findByText('€120');

    expect(guest).toBeDefined();
    expect(itemsCount).toBeDefined();
    expect(totalValue).toBeDefined();
  });

  test('it should emit method to close the modal', async () => {
    const mockFn = jest.fn();
    render(<LatestTransactionsDetailsModal
      details={latestTransaction}
      onModalClose={mockFn}
    />);

    const closeButton = await screen.findByText('Close');
    fireEvent.click(closeButton);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});