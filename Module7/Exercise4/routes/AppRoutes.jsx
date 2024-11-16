
import { Routes, Route } from 'react-router-dom'


import HomePage from '../pages/Homepage';
import LoginPage from '../pages/LoginPage';
import BitcoinRatesPage from '../pages/BitcoinRatesPage';

function AppRoutes(props) {
  return (
    <Routes>
      
      <Route path='home' index element={<HomePage {...props} />} />
      
      <Route path="login" element={<LoginPage {...props} />} />
      
      <Route path="bitcoinrates" element={<BitcoinRatesPage {...props} />} />
   
    </Routes>
  );
}
export default AppRoutes;
