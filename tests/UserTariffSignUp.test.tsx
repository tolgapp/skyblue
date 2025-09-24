import { describe, expect, it, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserTariffSignUp from '../src/pages/UserTariffSignUp';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import userInputReducer from '../src/store/reducers/userInputsReducer';
import TariffReducer from '../src/store/reducers/tariffsReducer';
import { configureStore } from '@reduxjs/toolkit';

const exampleTariff = {
  id: 'test-tariff',
  name: 'TestTariff',
  duration: 12,
  durationText: '12 months',
};

const testStore = configureStore({
  reducer: {
    tariff: TariffReducer,
    userInput: userInputReducer,
  },
  preloadedState: {
    userInput: {
      location: '12345',
      consumption: 2000,
      energyType: 'Electricity',
    },
    tariff: {
      selected: exampleTariff,
      all: [],
    },
  },
});

const renderSignUpPage = () =>
  render(
    <Provider store={testStore}>
      <MemoryRouter>
        <UserTariffSignUp />
      </MemoryRouter>
    </Provider>
  );

describe('UserTariffSignUp Page', () => {
  beforeEach(() => {
    renderSignUpPage();
  });

  it('shows the selected tariff', () => {
    console.log('👀 TEST: shows the selected tariff');
    const tariffName = screen.queryByText('TestTariff');
    const tariffDuration = screen.queryByText('12 months');

    console.log('🧾 tariffName:', tariffName);
    console.log('🧾 tariffDuration:', tariffDuration);

    expect(tariffName).toBeInTheDocument();
    expect(tariffDuration).toBeInTheDocument();
  });

  it('renders first and second step with correct input fields', () => {
    expect(
      screen.getByText(/Where goes the positive energy tariff/i)
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/Streetname/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Streetnumber/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Postalcode/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/City/i)).toBeInTheDocument();

    const nextBtn = screen.getByRole('button', {
      name: /Next/i,
    });
    fireEvent.click(nextBtn);

    expect(
      screen.getByText(/Who will be the contract holder?/i)
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Enter first name/i)
    ).toBeInTheDocument();
  });
});
