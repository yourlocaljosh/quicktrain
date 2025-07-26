import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Encyclopedia from './Encyclopedia.jsx';
import About from './About.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/encyclopedia" element={<Encyclopedia />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);