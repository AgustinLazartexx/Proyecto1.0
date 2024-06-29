import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componentes/Header';
import NavBar from './componentes/NavBar';
import Dashboard from './componentes/Dashboard';
import About from './componentes/About';
import Contact from './componentes/Contact';
import Footer from './componentes/Footer';
import Home from './componentes/Home';

import Weather from './componentes/Weather';
import WeatherMap from './componentes/WeatherMap'
import Register from './componentes/Register';
import Login from './componentes/Login';
import AddCrop from './componentes/AddCrop';
import CropList from './componentes/CropList';

import './App.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <NavBar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/add-crop" element={<AddCrop />} />
            <Route path="/crops" element={<CropList />} />
          
            <Route path="/weather" element={<Weather />} />
            <Route path="/weather-map" element={<WeatherMap />} /> {/* Nueva ruta */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
