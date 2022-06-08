import React from 'react';

import { Link } from '@tanstack/react-location';

import GithubLink from '../../components/github-link';
import Page from '../../components/page';


function StocktrackerV1Page(){
  return <Page>
    <div className="project-header">
      <h1>Stocktracker v1: Quick & Dirty</h1>
      <GithubLink
        link="https://github.com/JMKRIDE-USA/StockTracker-frontend/tree/a9088a6f031c12227d0fef06df858c333093455a"
        tooltip='Frontend'
        title='Frontend'
      />
      <GithubLink
        link="https://github.com/JMKRIDE-USA/StockTracker-backend"
        tooltip='Backend'
        title='Backend'
      />
    </div>
    <p>
      This first version of JMKRIDE's stock tracker was a solution to an
      immediate business need.  As we expanded our inventory in both quantity
      and variety, we realized that we needed a better way to track and
      visualize our inventory. So I began working on a very minimal and quick
      solution. Being the first "from-scratch" website I'd ever made, I decided
      to reduce complexity and scope by hosting the site locally, which not only
      allowed me to deploy very quickly, but also eliminated the issue of
      authenticating my coworkers vs. anyone else on the internet.
    </p>
    <h4>Backend</h4>
    <p>
      I chose Python for the backend because that was the language that I was
      most familiar with coming from my time at Facebook. Python's flask package
      paired with the sqlite3 package made for a "quick & dirty" solution to the
      REST database interface. Several bugs resulted from the string formatted 
      MySQL queries, as well as a completely incomprehensible decision to
      use separate tables for the mapping of partId to inventory quantity and
      partId to rich part info like name, color, category, etc. I learned
      countless lessons from these issues that I incorporated into the much
      improved <Link to="/project/stocktracker-v2">stocktracker v2</Link>
    </p>
  </Page>
}

export default StocktrackerV1Page;