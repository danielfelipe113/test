import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders OddEvenFinder', () => {
  render(<App />);
  const linkElement = screen.getByText(/Odd & Even numbers finder/i);
  expect(linkElement).toBeInTheDocument();
});

// test('Renders Dashboard', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('Latest Transactions', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
