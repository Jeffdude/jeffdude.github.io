import React from 'react';

import { Link } from '@tanstack/react-location';

import GithubLink from '../../components/github-link';
import Page from '../../components/page';
import SectionTitle from '../../components/section-title';
import { Project, projects, Tech } from '../../constants';


function StocktrackerV1Page(){
  const {links, techStack}: Project = (
    projects.find(({projectId}) => projectId === "stocktracker-v1") || projects[0]
  )
  return <Page>
    <div className="project-header">
      <SectionTitle noMargin>Stocktracker v1</SectionTitle>
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
    <h4 className="section-header">Summary:</h4>
    <p>
      The guiding philosophy for this project was "Quick and Dirty". This first
      version of JMKRIDE's stock tracker was a solution to an immediate business
      need. As we expanded our inventory in both quantity and variety, we
      realized that we needed a better way to track and visualize our inventory.
      So I began working on a very minimal and quick solution. Being the first
      "from-scratch" website I'd ever made, I decided to reduce complexity and
      scope by hosting the site locally, which not only allowed me to deploy
      very quickly, but also eliminated the issue of authenticating my coworkers
      vs. anyone else on the internet.
    </p>

    <p>Scope: 1 week develpment. 1 week deployment + productionize</p>
    <p>Operating costs: ~$0 (self-hosted)</p>

    <h4 className="section-header">Backend:</h4>
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
    <h4 className="section-header">Frontend:</h4>
    <p>
      This was the first frontend website I created, so I learned a lot about
      separating frontend information display and backend business logic. I
      assumed a framework was necessary, so I used bootstrap. In hindsight, it
      was absolutely unecessary and probably slowed development down. Beginning
      with `create-react-app`, I was able to quickly develop a method of
      displaying, adding, and subtracting part inventory quantities. `chart.js`
      was used for the actual graphs, which were static and unresponsive. The
      site was not usable on mobile, which was fine because it was hosted
      locally, so my coworkers were restricted to only interacting with it on
      their desktop monitors.
    </p>
    <h4 className="section-header">Deployment</h4>
    <p>
      In order to save time during development, it was deployed locally on an
      always-on laptop server running Ubuntu server. At this time, no ports were
      open on our router, so I was able to avoid implementing any
      authentication. If we had guests or friends in our shop who were connected
      to the wifi, they could've modified our inventory and we would have no way
      of knowing who did it or what they did. Lots of lessons were learned from
      this when 
      implementing <Link to="/project/stocktracker-v2">stocktracker v2's</Link> backend.
    </p>
  </Page>
}

export default StocktrackerV1Page;