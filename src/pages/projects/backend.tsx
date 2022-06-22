import React from 'react';

import { Link } from '@tanstack/react-location';

import ProjectPage from '../../components/project-page';
import SectionTitle from '../../components/section-title';

function BackendPage() {
  return <ProjectPage
    projectId='backend'
    summary={
      <p>
        This project is a Node monorepo born from a need to reuse code between
        two similiarly structured websites:
        {" "} <Link to="../stocktracker-v2">Stocktracker V2</Link>, and
        {" "} <Link to="../freeskater-finder">Freeskater Finder</Link>.
        The backend connects securely to the MongoDB database, and handles
        client authentication via JWTs and encrypted + salted + SHA512 hashed
        user passwords. The clients' JWT tokens are tracked, revokable, and
        refreshable. <br/><br/> Also included in this project is my npm package
        '
        <a
          href='https://www.npmjs.com/package/@jeffdude/frontend-helpers'
          target="_blank" rel="noopener noreferrer"
        >@jeffdude/frontend-helpers</a>',
        which provides react hooks for the full authentication flow,
        authenticated queries and mutations, as well as auth and user state
        management for my frontend React projects.
      </p>
    }
  >
    <SectionTitle noBorder>Authentication:</SectionTitle>
    <p>
      
    </p>
  </ProjectPage>
}

export default BackendPage;