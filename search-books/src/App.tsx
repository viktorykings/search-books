import React from 'react';
import './App.css';
import { Header } from './components/Header';
import CardsContainer from './components/CardsContainer';
import {Book} from './components/Book';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { useAppSelector } from './hooks/useTypesSelector';
import { googleBooksApi } from './services/googleBooksApi';



function App() {
  // const { id } = useAppSelector((state) => state.googleBooksApi.queries.ge);
  const { id } = useAppSelector((state) => state.bookInfo);
  const {
    data,
    error,
    isLoading,
  } = googleBooksApi.useGetBookQuery(id);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CardsContainer />} />
          {data && <Route path="/:book/*" element={<Book etag={data.etag} id={data.id} volumeInfo={{
            image: data.volumeInfo.imageLinks?.thumbnail,
            title: data.volumeInfo.title,
            authors: data.volumeInfo.authors,
            categories: undefined,
            imageLinks: undefined
          }} />} />}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
