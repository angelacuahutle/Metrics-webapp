import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Continents from './Components/Countries/Countries';
import CountryInfo from './Components/Countries/CountryInfo';
import Navbar from './Components/Navbar';
import './App.css';
import HomePage from './Components/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<Continents />} />
        <Route path="/CountryInfo/:id" element={<CountryInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
