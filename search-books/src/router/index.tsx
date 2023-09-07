import React from 'react';
import { RouteObject } from 'react-router-dom';
import { NotFound } from '../pages/NotFound';
import { BookInfo } from '../pages/BookInfo';

const routes: RouteObject[] = [
  {
    path: '/book/*',
    element: <BookInfo />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
