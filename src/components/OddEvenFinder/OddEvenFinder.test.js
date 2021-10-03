import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OddEvenFinder from './OddEvenFinder';

describe('<OddEvenFinder />', () => {


  test('it should mount', () => {
    render(<OddEvenFinder />);
    
    const oddEvenFinder = screen.getByTestId('OddEvenFinder');

    expect(oddEvenFinder).toBeInTheDocument();
  });

  test('it should separate odd and even numbers', () => {
    render(<OddEvenFinder />);
    const input = screen.getByLabelText('List of whole numbers:');
    const submit = screen.getByText('Find!');
    
    let oddNumbers = '';
    let evenNumbers = '';

    fireEvent.change(input, {target: {value: '0 1 2 3 4 5 6 7 8 9 10 11 12 13 14'}});
    fireEvent.click(submit);
    
    const oddNumberElems = screen.getByTestId('oddNumbers').querySelectorAll('p');
    const evenNumberElems = screen.getByTestId('evenNumbers').querySelectorAll('p');
    for (let i = 0; i < oddNumberElems.length; ++i) {
      oddNumbers += oddNumberElems[i].textContent  + (i !== (oddNumberElems.length-1) ? ' ' : '');
    }

    for (let i = 0; i < evenNumberElems.length; ++i) {
      evenNumbers += evenNumberElems[i].textContent  + (i !== (evenNumberElems.length-1) ? ' ' : '');
    }

    
    expect(oddNumbers).toBe('1 3 5 7 9 11 13');
    expect(evenNumbers).toBe('0 2 4 6 8 10 12 14');
  });
});