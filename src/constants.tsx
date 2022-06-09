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

export class Tech {
  static readonly JS = new Tech("Javascript", "rgba(255,0,0,1)");
  static readonly React = new Tech("React", "rgba(255,0,0,1)");
  static readonly Node = new Tech("Node", "rgba(255,0,0,1)");
  static readonly RN = new Tech("React Native", "rgba(255,0,0,1)");
  static readonly Python = new Tech("Python", "rgba(255,0,0,1)");
  static readonly MongoDB = new Tech("MongoDB", "rgba(255,0,0,1)");
  static readonly MySQL = new Tech("MySQL", "rgba(255,0,0,1)");
  static readonly TS = new Tech("Typescript", "rgba(255,0,0,1)");
  static readonly Liquid = new Tech("Liquid", "rgba(255,0,0,1)");
  static readonly Shopify = new Tech("Shopify", "rgba(255,0,0,1)");
  static readonly Wix = new Tech("Wix", "rgba(255,0,0,1)");
  static readonly GraphQL = new Tech("GraphQL", "rgba(255,0,0,1)");

  private constructor(public readonly key: string, public readonly color: string){}
}

export const AllTech: Tech[] = [
  Tech.GraphQL,
  Tech.Wix,
  Tech.Shopify,
  Tech.Liquid,
  Tech.TS,
  Tech.MySQL,
  Tech.MongoDB,
  Tech.Python,
  Tech.RN,
  Tech.Node,
  Tech.React,
  Tech.JS,
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
    techStack: [Tech.JS, Tech.React, Tech.Python, Tech.MySQL],
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
    techStack: [Tech.JS, Tech.React, Tech.Node, Tech.MongoDB],
    page: () => <></>,
  },
  {
    title: "Ambassador Portal",
    projectId: "ambassador-portal",
    shortDescription: "First attempt at an authenticated frontend & backend.",
    techStack: [Tech.JS, Tech.RN, Tech.Node, Tech.MongoDB],
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
    techStack: [Tech.JS, Tech.TS],
    page: () => <></>,
  },
  {
    title: "JMKRIDE websites",
    projectId: "jmkride-websites",
    shortDescription: "The international and USA shop websites.",
    techStack: [Tech.JS, Tech.Wix, Tech.Liquid, Tech.Shopify],
    page: () => <></>,
  },
  {
    title: "Ambassador Shopify App",
    projectId: "ambassador-shopify-app",
    shortDescription: "The interface between USA sales and our ambassador balances",
    techStack: [Tech.JS, Tech.Shopify, Tech.GraphQL],
    page: () => <></>,
  }
]