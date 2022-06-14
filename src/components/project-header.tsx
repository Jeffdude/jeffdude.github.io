import React from 'react';

import { Project, projects, Tech } from '../constants';
import SectionTitle from './section-title';
import GithubLink from './github-link';

type Props = {
  projectId: string;
}

const ProjectHeader: React.FC<Props> = ({projectId}: Props): JSX.Element => {
  const {title, links, techStack}: Project = (
    projects.find(({projectId: pId}) => projectId === pId) || projects[0]
  )
  return (
    <div className="project-header">
      <SectionTitle noMargin>{title}</SectionTitle>
      <div id="row">
        Code:
        {links?.map(({ tooltip, link }, key) => <GithubLink {...{tooltip, link, key}}/>)}
      </div>
      <div className="tech-tag-list">
        Tech Used: 
        {techStack.map((tech, key) => (
          <div className={"tech-tag " + Tech[tech]} key={key}>{Tech[tech]}</div>
        ))}
      </div>
    </div>
  )
}

export default ProjectHeader;