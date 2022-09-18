import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import MainPage from './pages/MainPage'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="*"
          element={<div>Error</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
