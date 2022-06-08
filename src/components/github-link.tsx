import React from 'react';

import { FaGithub } from 'react-icons/fa'; 

type Props = {
  link: string,
  tooltip: string,
  title?: string,
}

function GithubLink({link, tooltip, title} : Props) : React.ReactElement {
  return <a href={link} className="github-link">
    <FaGithub/>
  </a>
}

export default GithubLink;