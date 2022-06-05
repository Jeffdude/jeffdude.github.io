import React from 'react';

import HomePage from './pages/home';
import UserFinderPage from './pages/userfinder'

export const topToolbarHeight: number = 200;

export interface Page {
  element: React.ReactNode;
  path: string,
  title: string,
  intabbar: boolean,
}
export const pages: Page[] = [
  {
    title: "Home",
    element: <HomePage/>,
    path: "/",
    intabbar: true,
  },
  {
    title: "User Finder",
    element: <UserFinderPage/>,
    path: "/user-finder",
    intabbar: true,
  }
]