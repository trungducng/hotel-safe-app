/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import PinInput from '../components/PinInput';

test('PinInput component renders and handles clicks correctly', () => {
  const setPinValue = jest.fn();
  const clearPinInput = jest.fn();
  const setPinStore = jest.fn();
  
  const view = render(
    <PinInput
      setPinValue={setPinValue}
      clearPinInput={clearPinInput}
      setPinStore={setPinStore}
      pinInput="1234"
    />
  );

  const clearButton = screen.getByText('CLR');
  const num0Button = screen.getByText('0');
  const rightArrowButton = view.container.querySelector('#submitButton');


  fireEvent.click(clearButton);
  fireEvent.click(num0Button);
  fireEvent.click(rightArrowButton);

  expect(clearPinInput).toHaveBeenCalled();
  expect(setPinValue).toHaveBeenCalledWith('0');
  expect(setPinStore).toHaveBeenCalledWith('1234');
});
