import Navbar from './components/Navbar';
import ShowTariffs from './components/ShowTariffs';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import UserTariffSignUp from './components/UserTariffSignUp';
import NotFound from './components/NotFound';

const App = () => {
  
  // TODO: Responsive Design

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findtariff" element={<ShowTariffs />} />
        <Route path="/tariff-signup" element={<UserTariffSignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
