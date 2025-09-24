import { describe, expect, vi, it, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import Calculator from '../src/components/Calculator';
import userInputReducer from '../src/store/reducers/userInputsReducer';
import '@testing-library/jest-dom';

// Mock store for tests
const testStore = configureStore({
  reducer: {
    userInput: userInputReducer,
  },
});

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const renderWithProviders = () =>
  render(
    <Provider store={testStore}>
      <MemoryRouter>
        <Calculator />
      </MemoryRouter>
    </Provider>
  );

describe('Calculator Component', () => {
  beforeEach(() => {
    mockNavigate.mockReset();
  });

  it('on short postalcode submit button should not shown', async () => {
    renderWithProviders();

    fireEvent.change(screen.getByPlaceholderText('Your postalcode'), {
      target: { name: 'location', value: '123' },
    });

    fireEvent.click(screen.getByText('Electricity'));

    fireEvent.change(screen.getByPlaceholderText('Your yearly consumption'), {
      target: { name: 'consumption', value: '200' },
    });

    await waitFor(() => {
      expect(
        screen.queryByRole('button', { name: /find your tariff/i })
      ).not.toBeInTheDocument();
    });
  });

  it('on wrong postalcode an error message is shown', async () => {
    renderWithProviders();

    fireEvent.change(screen.getByPlaceholderText('Your postalcode'), {
      target: { name: 'location', value: '123ef' },
    });

    fireEvent.click(screen.getByText('Electricity'));

    fireEvent.change(screen.getByPlaceholderText('Your yearly consumption'), {
      target: { name: 'consumption', value: '200' },
    });

    const submitButton = screen.getByRole('button', {
      name: /find your tariff/i,
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(/Location must be exactly 5 digits/i)
      ).toBeInTheDocument();
    });
  });

  it('navigates on valid input and shows success message', async () => {
    renderWithProviders();

    fireEvent.change(screen.getByPlaceholderText('Your postalcode'), {
      target: { name: 'location', value: '12345' },
    });

    fireEvent.change(screen.getByPlaceholderText('Your yearly consumption'), {
      target: { name: 'consumption', value: '300' },
    });

    fireEvent.click(screen.getByText('Electricity'));

    const submitButton = screen.getByRole('button', {
      name: /find your tariff/i,
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(
        screen.getByText(/Tariffs are being fetched/i)
      ).toBeInTheDocument();
    });

    const stored = JSON.parse(localStorage.getItem('userInput') || '{}');
    expect(stored).toMatchObject({
      location: '12345',
      consumption: '300',
      energyType: 'Electricity',
      formSubmitted: true,
    });
  });
});
