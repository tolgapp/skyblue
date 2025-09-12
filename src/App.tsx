import { useState } from 'react';
import Navbar from './components/Navbar';
import ShowTariffs from './components/ShowTariffs';
import { Route, Routes } from 'react-router-dom';
import type { FormDataProps } from './components/Calculator';
import Home from './pages/Home';

const App = () => {
  const [formData, setFormData] = useState<FormDataProps>({
    location: '',
    energyType: '',
    consumption: '',
    formSubmitted: false,
  });

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home formData={formData} setFormData={setFormData} />}
        />
        <Route
          path="/findtariff"
          element={
            <ShowTariffs formData={formData} setFormData={setFormData} />
          }
        />
      </Routes>
    </>
  );
};

export default App;
