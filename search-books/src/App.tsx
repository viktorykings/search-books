import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { BookPage } from './pages/BookPage';
import { MainPage } from './pages/MainPage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
