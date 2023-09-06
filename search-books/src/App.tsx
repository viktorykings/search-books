import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { SearchResult } from './components/SearchResult';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchResult />
    </div>
  );
}

export default App;
