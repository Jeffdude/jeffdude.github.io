import { Link } from '@tanstack/react-location';
import React from 'react';
import Page from './page';
import ProjectHeader from './project-header';
import SectionTitle from './section-title';

export type Scope = {
  developmentTime: string[];
  operatingCosts: string[];
}

type ScopeProps = {
  scope: Scope;
}

const ProjectScope: React.FC<ScopeProps> = ({scope}: ScopeProps): JSX.Element => {
  const { developmentTime, operatingCosts } = scope;
  return (
    <div className='project-scope-container'>
      <div id="cornerbordercontent" style={{margin: 0}}>
        <h4>Scope:</h4>
        <div id="hline" style={{width: "50%"}}/>
        {developmentTime.length > 1
          ? <ul>
            { developmentTime.map((s, index) => <li className="project-scope-content" key={index}>{s}</li>) }
          </ul>
          : <div className="project-scope-content">{ developmentTime }</div>
        }
      </div>
      <div id="cornerbordercontent" style={{margin: "0 0 0 2vmin"}}>
        <h4>Operating Costs:</h4>
        <div id="hline" style={{width: "50%"}}/>
        {operatingCosts.length > 1
          ? <ul>
            { operatingCosts.map((s, index) => <li className="project-scope-content" key={index}>{s}</li>) }
          </ul>
          : <div className="project-scope-content">{ operatingCosts }</div>
        }
        <ul>
          
        </ul>
      </div>
    </div>
  )
}

type PageProps = {
  projectId: string;
  summary: string | React.ReactNode;
  scope?: Scope;
  children: React.ReactNode;
}

const ProjectPage: React.FC<PageProps> = ({
  projectId, summary, scope, children
}: PageProps): JSX.Element => {
  return (
    <Page>
      <ProjectHeader projectId={projectId}/>
      <SectionTitle noBorder>Summary:</SectionTitle>
      <p>{summary}</p>
      {scope && <ProjectScope scope={ scope }/>}
      {children}
      <Link to="/" hash="projects" className="button back-to-home-link">Back to all projects</Link>
    </Page>
  )
}

export default ProjectPage;