import React from 'react';

import HomePage from './pages/home';
import UserFinderPage from './pages/userfinder'
import ContactPage from './pages/contact';
import ProjectPage from './pages/project';
import FourOhFourPage from './pages/404';

import StocktrackerV1Page from './pages/projects/stocktracker-v1';
import BackendPage from './pages/projects/backend';
import JMKRIDEShopWebsites from './pages/projects/shop-websites';
import StocktrackerV2Page from './pages/projects/stocktrackerv2';
import UnderConstructionPage from './pages/projects/construction';

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
  underConstruction: boolean,
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
    underConstruction: false,
  },
  {
    title: "Stock Tracker v2",
    projectId: "stocktracker-v2",
    shortDescription: "Full featured inventory management website.",
    techStack: [Tech.Javascript, Tech.React, Tech.Node, Tech.MongoDB],
    page: () => <StocktrackerV2Page/>,
    underConstruction: false,
  },
  {
    title: "Auth Backend + FE Helpers",
    projectId: "backend",
    shortDescription: "Secure backend authentication REST API, and an accompanying npm package for frontend use.",
    techStack: [Tech.Javascript, Tech.Node, Tech.MongoDB],
    links: [
      {tooltip: 'Backend', link: 'https://github.com/JMKRIDE-USA/Backend'},
      {tooltip: 'Frontend', link: 'https://github.com/Jeffdude/FrontendHelpers'},
    ],
    page: () => <BackendPage/>,
    underConstruction: false,
  },
  {
    title: "Ambassador Portal",
    projectId: "ambassador-portal",
    shortDescription: "First attempt at an authenticated frontend & backend.",
    techStack: [Tech.Javascript, Tech["React Native"], Tech.Node, Tech.MongoDB],
    page: () => <UnderConstructionPage/>,
    underConstruction: true,
  },
  {
    title: "Service Storm",
    projectId: "service-storm",
    shortDescription: "Disaster simulation software at Facebook scale.",
    techStack: [Tech.Python],
    page: () => <UnderConstructionPage/>,
    underConstruction: true,
  },
  {
    title: "This Website",
    projectId: "personal-website",
    shortDescription: "This simple professional personal website",
    techStack: [Tech.Javascript, Tech.Typescript, Tech.React],
    page: () => <UnderConstructionPage/>,
    underConstruction: true,
  },
  {
    title: "JMKRIDE Shop Websites",
    projectId: "jmkride-shop-websites",
    shortDescription: "The international and USA shop websites.",
    techStack: [Tech.Javascript, Tech.Wix, Tech.Liquid, Tech.Shopify],
    links: [
      {tooltip: 'USA Shop', link: 'https://github.com/JMKRIDE-USA/USAShop'},
    ],
    page: () => <JMKRIDEShopWebsites/>,
    underConstruction: false,
  },
  {
    title: "Ambassador Shopify App",
    projectId: "ambassador-shopify-app",
    shortDescription: "The interface between USA sales and our ambassador balances",
    techStack: [Tech.Javascript, Tech.Shopify, Tech.GraphQL],
    page: () => <UnderConstructionPage/>,
    underConstruction: true,
  },
  {
    title: "Freeskater Finder",
    projectId: "freeskater-finder",
    shortDescription: "Customer-facing social map website for connecting people all around the world",
    techStack: [Tech.React, Tech.Javascript, Tech.MongoDB, Tech.Node],
    page: () => <UnderConstructionPage/>,
    underConstruction: true,
  },
]