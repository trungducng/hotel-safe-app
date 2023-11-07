/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  test('renders the App component with PinInput and PinCheck', () => {
    const { container } = render(<App />);

    const pinInput = container.querySelector('#submitButton');
    const pinCheck = container.querySelector('.pinCheck');

    expect(pinInput).toBeInTheDocument();
    expect(pinCheck).toBeInTheDocument();
  });

  test('clears pinInput correctly', () => {
    const { container } = render(<App />);
    const clearButton = screen.getByText('CLR');
    fireEvent.click(clearButton);
    const pinCheck = container.querySelector('.pinCheck');
    expect(pinCheck?.value).toBe('');
  });
});
