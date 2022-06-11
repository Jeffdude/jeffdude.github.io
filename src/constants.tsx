import React from 'react';

import HomePage from './pages/home';
import UserFinderPage from './pages/userfinder'
import ContactPage from './pages/contact';
import ProjectPage from './pages/project';
import FourOhFourPage from './pages/404';

import StocktrackerV1Page from './pages/projects/stocktracker-v1';

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
  },
  {
    title: "Contact Me",
    element: <ContactPage/>,
    path: "/contact-me",
    intabbar: true,
  },
  {
    title: "Project",
    element: <ProjectPage/>,
    path: "/project/:projectId",
    intabbar: false,
  },
  {
    title: "404",
    element: <FourOhFourPage/>,
    path: "*",
    intabbar: false,
  },
]

export enum Tech {
  Javascript,
  React,
  Node,
  "React Native",
  Python,
  MongoDB,
  MySQL,
  Typescript,
  Liquid,
  Shopify,
  Wix,
  GraphQL,
}
export const AllTech: Tech[] = [
  Tech.Javascript,
  Tech.Typescript,
  Tech.React,
  Tech.GraphQL,
  Tech.Wix,
  Tech.Shopify,
  Tech.MySQL,
  Tech.MongoDB,
  Tech.Python,
  Tech.Liquid,
  Tech["React Native"],
  Tech.Node,
]

export interface Project {
  title: string,
  projectId: string, 
  shortDescription: string,
  techStack: Tech[],
  links?: {link: string, tooltip: string}[],
  page: () => React.ReactNode;
} 

export const projects: Project[] = [
  {
    title: "Stock Tracker v1",
    projectId: "stocktracker-v1",
    shortDescription: "My first website.",
    techStack: [Tech.Javascript, Tech.React, Tech.Python, Tech.MySQL],
    links: [
      {tooltip: 'Frontend', link: "https://github.com/JMKRIDE-USA/StockTracker-frontend/tree/a9088a6f031c12227d0fef06df858c333093455a"},
      {tooltip: 'Backend', link: "https://github.com/JMKRIDE-USA/StockTracker-backend"},
    ],
    page: () => <StocktrackerV1Page/>,
  },
  {
    title: "Stock Tracker v2",
    projectId: "stocktracker-v2",
    shortDescription: "Full featured inventory management website.",
    techStack: [Tech.Javascript, Tech.React, Tech.Node, Tech.MongoDB],
    page: () => <></>,
  },
  {
    title: "Ambassador Portal",
    projectId: "ambassador-portal",
    shortDescription: "First attempt at an authenticated frontend & backend.",
    techStack: [Tech.Javascript, Tech["React Native"], Tech.Node, Tech.MongoDB],
    page: () => <></>,
  },
  {
    title: "Service Storm",
    projectId: "service-storm",
    shortDescription: "Disaster simulation software at Facebook scale.",
    techStack: [Tech.Python],
    page: () => <></>,
  },
  {
    title: "This Website",
    projectId: "personal-website",
    shortDescription: "This simple professional personal website",
    techStack: [Tech.Javascript, Tech.Typescript],
    page: () => <></>,
  },
  {
    title: "JMKRIDE websites",
    projectId: "jmkride-websites",
    shortDescription: "The international and USA shop websites.",
    techStack: [Tech.Javascript, Tech.Wix, Tech.Liquid, Tech.Shopify],
    page: () => <></>,
  },
  {
    title: "Ambassador Shopify App",
    projectId: "ambassador-shopify-app",
    shortDescription: "The interface between USA sales and our ambassador balances",
    techStack: [Tech.Javascript, Tech.Shopify, Tech.GraphQL],
    page: () => <></>,
  },
  {
    title: "Freeskater Finder",
    projectId: "freeskater-finder",
    shortDescription: "Customer-facing social map website for connecting people all around the world",
    techStack: [Tech.React, Tech.Javascript, Tech.MongoDB, Tech.Node],
    page: () => <></>,
  },
]