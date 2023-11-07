/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render } from '@testing-library/react';
import PinCheck from '../components/PinCheck';

describe('PinCheck component', () => {
  test('renders with valid PIN input', () => {
    const pinInput = '1234';
    const pinStore = '1234';

    const { container } = render(
      <PinCheck pinInput={pinInput} pinStore={pinStore} />
    );

    const errorMessage = container.querySelector('#errorMessage');
    const circle = document.querySelector('.circle');

    expect(errorMessage).toBeNull();
    expect(circle).toBeInTheDocument();
  });

  test('renders with invalid PIN input', () => {
    const pinInput = '1234';
    const pinStore = '5678';

    const { container } = render(
      <PinCheck pinInput={pinInput} pinStore={pinStore} />
    );

    const errorMessage = container.querySelector('#errorMessage');
    const circle = document.querySelector('.circle');

    expect(errorMessage).toBeVisible();
    expect(circle).toHaveClass('circle-lock');
  });

  test('renders with empty PIN input', () => {
    const pinInput = '';
    const pinStore = '1234';

    const { container } = render(
      <PinCheck pinInput={pinInput} pinStore={pinStore} />
    );

    const errorMessage = container.querySelector('#errorMessage');
    const circle = document.querySelector('.circle');

    expect(errorMessage).toBeNull();
    expect(circle).toHaveClass('circle');
  });

  test('renders with no PIN store', () => {
    const pinInput = '1234';
    const pinStore = '';

    const { container } = render(
      <PinCheck pinInput={pinInput} pinStore={pinStore} />
    );

    const errorMessage = container.querySelector('#errorMessage');
    const circle = document.querySelector('.circle');

    expect(errorMessage).toBeNull();
    expect(circle).toHaveClass('circle-unLock');
  });
});
