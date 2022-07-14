import React from 'react';

import Link from '../../components/link';
import ProjectPage from '../../components/project-page';
import SectionTitle from '../../components/section-title';

function StocktrackerV2Page(){
  return <ProjectPage
    projectId='stocktracker-v2'
    summary={<p>
      The StockTracker v2 is a followup to all the deficiencies encountered through using 
      {" "}<Link to={"../stocktracker-v1"}>StockTracker v1</Link>. 
      The deficiencies that were solved included static part organizations, part
      quantity histories, logs of all actions and edits, inefficient complete set
      withdrawal, and no auxiliary part handling. Stocktracker v2 is powered by
      my other project <Link to="../backend">Backend + JFH Helpers</Link>.
    </p>
    }
  >
    <SectionTitle noBorder>Video Walkthrough</SectionTitle>
      <iframe width="560" height="315"
        src="https://www.youtube.com/embed/0ZuKdzmHjPY" title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    <SectionTitle noBorder>Deployment</SectionTitle>
    <p>
      Stocktracker V2 frontend is deployed on Amazon AWS using 
      {" "}<Link to="https://aws.amazon.com/amplify">Amplify</Link>. 
      I chose Amplify because it has very minimal ec2 compute usage and can
      auto-deploy on Github pushes.
      For Backend deployment, please see the <Link to="../backend">backend project</Link>.
    </p>
  </ProjectPage>
}

export default StocktrackerV2Page;