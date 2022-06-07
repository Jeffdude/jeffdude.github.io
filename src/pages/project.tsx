import React from 'react';

import { useMatch } from '@tanstack/react-location';

import { Project, projects } from '../constants';
import FourOhFourPage from './404';


function ProjectPage() {
  const { params: { projectId } } = useMatch()
  const project : Project | undefined = projects.find(({projectId: searchId}) => projectId === searchId)
  return <>
    {project 
      ? project.page()
      : <FourOhFourPage/>
    }
  </>
}

export default ProjectPage;