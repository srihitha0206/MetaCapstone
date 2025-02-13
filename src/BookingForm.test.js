import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { fetchAPI } from './utils/api';

// Mock fetchAPI function
jest.mock('./utils/api', () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

// Mock implementation of initializeTimes
const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00'];

// Mock reducer function for updateTimes
const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    return action.payload;
  }
  return state;
};

describe('BookingForm Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the BookingForm heading', () => {
    fetchAPI.mockReturnValue(['17:00', '18:00', '19:00']); // Mock response

    render(
      <BrowserRouter>
        <BookingForm />
      </BrowserRouter>
    );

    const headingElement = screen.getByRole('heading', {
      name: /table reservation/i,
    });

    expect(headingElement).toBeInTheDocument();
  });

  // Unit test for initializeTimes function
  test('initializeTimes should return the expected initial available times', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    expect(initializeTimes()).toEqual(expectedTimes);
  });

  // Unit test for updateTimes function
  test('updateTimes should return the same state that is provided', () => {
    const previousState = ['17:00', '18:00', '19:00'];
    const action = { type: 'UPDATE_TIMES', payload: previousState };

    const newState = updateTimes(previousState, action);

    expect(newState).toEqual(previousState);
  });
});
