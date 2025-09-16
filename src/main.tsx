import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { TariffProvider } from './context/TariffProvider.tsx';
import './index.css';
import { PriceProvider } from './context/PriceProvider.tsx';
import { UserInputProvider } from './context/UserInputsProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <TariffProvider>
        <PriceProvider>
          <UserInputProvider>
            <App />
          </UserInputProvider>
        </PriceProvider>
      </TariffProvider>
    </BrowserRouter>
  </StrictMode>
);
