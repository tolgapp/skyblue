import { describe, expect, vi, it, beforeEach } from 'vitest';
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import ShowTariffs from '../src/pages/ShowTariffs';
import userInputReducer from '../src/store/reducers/userInputsReducer';
import TariffReducer from '../src/store/reducers/tariffsReducer';
import '@testing-library/jest-dom';
import 'react-toastify/dist/ReactToastify.css';

// Mock localStorage
beforeEach(() => {
  localStorage.clear();
});

// Mock useSearchParams
const mockSetSearchParams = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useSearchParams: () => [
      new URLSearchParams({
        location: '12345',
        consumption: '1500',
      }),
      mockSetSearchParams,
    ],
  };
});

const testStore = configureStore({
  reducer: {
    userInput: userInputReducer,
    tariff: TariffReducer,
  },
  preloadedState: {
    userInput: {
      location: '12345',
      consumption: 1500,
    },
    tariff: {
      all: [],
      selected: null,
    },
  },
});

const renderComponent = () =>
  render(
    <Provider store={testStore}>
      <MemoryRouter>
        <ShowTariffs />
      </MemoryRouter>
    </Provider>
  );

describe('ShowTariffs Component', () => {
  it('renders initial values correctly', () => {
    renderComponent();

    expect(screen.getByText(/Your postal code:/)).toBeInTheDocument();
    expect(screen.getByText('12345')).toBeInTheDocument();

    expect(screen.getByText(/Your yearly consumption:/)).toBeInTheDocument();
    const element = screen.getByText((_, node) => {
      return node?.textContent === '1500 kWh';
    });
    expect(element).toBeInTheDocument();
  });

 it('should save a new postal code if valid', () => {
   renderComponent();

   const postalCodeSection = screen
     .getByText(/Your postal code:/)
     .closest('div');

   const changeButton = within(postalCodeSection!).getByRole('button', {
     name: /Change/i,
   });
   fireEvent.click(changeButton);

   const input = within(postalCodeSection!).getByRole('spinbutton');
   fireEvent.change(input, { target: { value: '54321' } });

   const saveButton = within(postalCodeSection!).getByRole('button', {
     name: /Save/i,
   });
   fireEvent.click(saveButton);

   expect(screen.getByText('54321')).toBeInTheDocument();
 });

 it('should show error if postal code is not exactly 5 digits', async () => {
   renderComponent();

   const postalCodeSection = screen
     .getByText(/Your postal code:/)
     .closest('div');

   const changeButton = within(postalCodeSection!).getByRole('button', {
     name: /Change/i,
   });
   fireEvent.click(changeButton);

   const input = within(postalCodeSection!).getByRole('spinbutton');
   fireEvent.change(input, { target: { value: '1234' } });

   const saveButton = within(postalCodeSection!).getByRole('button', {
     name: /Save/i,
   });
   fireEvent.click(saveButton);

   await waitFor(() => {
     expect(
       screen.getByText(/Location must be exactly 5 digits/i)
     ).toBeInTheDocument();
   });
 });

});
