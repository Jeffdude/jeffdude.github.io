import React from 'react';

import ProjectPage from '../../components/project-page';

function ServiceStormPage(){
  return <ProjectPage
    projectId='service-storm'
    summary={`
      As a Production Engineer at Facebook, most of my day-to-day tasks involved
      improving services availability and reliability.
    `}
  >
    <div/>
  </ProjectPage>
}

export default ServiceStormPage;