import React from 'react';
import ProjectPage from '../../components/project-page';
import SectionTitle from '../../components/section-title';
import FFLogo from '../../assets/FreeskaterFinderHeaderLogo_md.svg'
import Link from '../../components/link';

function FreeskaterFinderPage(){
  return <ProjectPage
    projectId='freeskater-finder'
    summary={
    <>
      <p>
        The Freeskater Finder is an online hub for freeskaters to connect with
        their fellow freeskaters from around the world. Inspired by the pin boards
        in cafes, users of the Freeskater Finder can create an account, upload
        social media information, and place their "pin" on a zip code on the world
        map.  Users can see each others pins, and connect via the provided social
        media links. The Freeskater Finder also provides our JMKRIDE brand
        ambassadors with their ambassador dashboard, where my ambassador-link
        shopify app allows them to see their recent sales and their ambassador
        credits.
      </p>
      <hr className=''/>
      <object data={FFLogo} aria-label="logo" className="FF-logo"/>
      <hr className=''/>
    </>
  }>
      <p>Check it out for yourself!</p>
      <Link to="https://freeskaterfinder.jmkride.com" className="button">
        Log in to the Freeskater Finder
      </Link>
      <SectionTitle noBorder>Design Phase - Safety First:</SectionTitle>
      <p>
        One of my biggest concerns when making this site was the privacy and
        safety of my fellow freeskaters. I've learned throughout my experience
        programming is that time spent designing pays for itself at least two-fold. 
        So after a long and careful design period, I made three design decisions
        to maximize user safety. 
      </p>
      <ul>
        <li>
          I decided to rely on the built-in social media safety tools like blocking, message
          requests, and reporting. Therefore, there is no messaging
          functionality in the Freeskater Finder itself. This goes with the
          general theme of the Freeskater Finder being a simple pin board and
          not a full-fledged social media.
        </li>
        <li>
          I limited users' location choices to be as specific as a zip code.
          This prevents users from being able to put themselves in physical
          risk by revealing too much of their personal location. This has the
          added benefit of limiting the amount of user locations to a finite
          and bin-able network. This allowed me to implement zip-code user
          binning on top of the Google Marker Clusterer for further
          optimization.
        </li>
        <li>
          I implemented two user settings: Visibility and Privacy. The
          visibility setting will immediately remove your pin from the map,
          preventing any discovery from users. The privacy setting has two
          states, public and private. Setting your privacy to private means
          that users will not be able to see your social media accounts until
          you've approved them. These settings are easily edited on your
          profile page, and greatly increase the safety tools available for
          our users.
        </li>
      </ul>
      <p>
        Lastly, my JMKRIDE email has been made available to all of our users in
        several places throughout the app for any additional help. I have found
        that the built-in safety tools have mostly covered all concerns of my
        users, and I haven't needed to do much manual interaction with the site
        with the exception of users requesting to delete their account. If I
        wanted to continue work on the Freeskater Finder I would likely
        implement this as a functionality next. Check out the full user-safety
        guide at the link below.
        <br/><br/>
        <Link to="https://freeskaterfinder.jmkride.com/safety">
          https://freeskaterfinder.jmkride.com/safety
        </Link>
      </p>
      {/* <SectionTitle noBorder>Scaling Up:</SectionTitle> */}
      <SectionTitle noBorder>Results and Next Steps:</SectionTitle>
      <p>
        The Freeskater Finder has been a resounding success for the freeskate
        community. As intended, many of our community members have reported
        meeting fellow local skaters and starting local organized meetups. We
        have over 1700 users, and over 60 brand ambassadors on the site. While
        it's not a social media site and therefore this is expected, the daily
        and weekly active user count is quite low and I think this effects the
        experience of new skaters and skaters who may not feel comfortable
        reaching out to other locals.
      </p>
      <p>
        If I were to continue to develop the
        site, I would implement email notifications to bring users back to the
        site when they receive a notification. I would also create a new
        notification type for 'a new skater has appeared nearby.' I expect this
        to be a fairly easy improvement as MongoDB has several useful{' '}
        <Link to='https://www.mongodb.com/docs/v5.0/geospatial-queries/'>
          geospatial query tools
        </Link>.
      </p>
    </ProjectPage>
}

export default FreeskaterFinderPage;