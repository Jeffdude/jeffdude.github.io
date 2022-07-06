import React from 'react';

import Link from '../../components/link';

import ProjectPage from '../../components/project-page';
import SectionTitle from '../../components/section-title';

import InternationalHeroScreenshot from '../../assets/jmkride_com_hero.png';
import InternationalToast from '../../assets/jmkride_com_confirmation_toast.png';


function JMKRIDEShopWebsites(){
  return (
    <ProjectPage
      projectId='jmkride-shop-websites'
      summary={
        <p>
          When I started working with JMKRIDE, we were sorely in need of a
          website UX overhaul. The customer story for conversions was difficult
          and long, and there wasn't much information explaining the sport and
          who we as a company were. To improve this situation, I created two
          websites. Our international website, 
          <Link to="https://jmkride.com">jmkride.com</Link>,
          and our USA's shop website,
          <Link to="https://usa.jmkride.com">usa.jmkride.com</Link>.
        </p>
      }
      scope={{
        developmentTime: [
          "2 months - JMKRIDE.com",
          "1 month - usa.jmkride.com (1st rev)",
          "2 months - usa.jmkride.com (2nd rev)",
        ],
        operatingCosts: [
          "jmkride.com: $x monthly",
          "usa.jmkride.com: $x monthly"
        ],
      }}
    >
      <SectionTitle noBorder>JMKRIDE.com</SectionTitle>
      <p>
        This website is the global homepage of everyone interested in our
        company and what we are doing. As such, it needs to have a universally 
        intuitive interface, and it needs to easily direct the user to either a
        shop, or any of our other website features, e.g. information about the
        sport, learning tutorials, contact forms, events, various JMK-affiliated
        online communities, and the{' '}
        <Link to="../freeskater-finder">Freeskater Finder</Link> site.
      </p>
      <p>
        I trialed and ultimated opted to use Wix for its full-featured admin
        interface including a shared customer contact interface, which unlike
        email, allows all of the global employees of JMKRIDE to see and respond
        to any customer thread. Wix's site building interface was also
        sufficiently powerful for almost all of my purposes. The mobile site
        editor is very convoluted and I found myself fighting against its
        interface. In the end, I had to add multiple copies of several elements,
        like the 'shop now' button, and use custom JS to replicate media queries
        which would display/hide elements accordingly. Not ideal but functional.   
      </p>
      <p>
        As previously said, in designing this site, I attempted to keep the
        design as minimal and intuitive as possible. As seen below, the main
        element is a hero banner with a call to action button, which
        automatically redirects the user to their respective shop based off
        their browser's locale.  Originally, this redirection was fully opaque
        to the customer, but after some issues with misconfigured clients, we
        decided to compromise with a confirmation 'toast' message, telling
        customers that they're being directed to a specific region's shop, and 
        if that is not correct, it offers them a link to the list of all
        JMKRIDE-affiliated shops. Like most of the site, this toast is designed
        to funnel customers to our shops without barely requiring them to think.
      </p>
      <div className="split-row images">
        <img
          src={InternationalToast}
          className='fullpage-img'
          alt='Architecture Diagram for Backend + Jeffdude Frontend Helpers'
        />
        <img
          src={InternationalHeroScreenshot}
          className='fullpage-img'
          alt='Architecture Diagram for Backend + Jeffdude Frontend Helpers'
        />
      </div>
      <p>
        Both this site and our USA shop site required a lot of specific media
        creation. For this, I self-taught Adobe Photoshop, and Adobe Illustrator
        in order to accelerate development time.
      </p>
      <Link to="https://jmkride.com" className="button back-to-home-link">Go to site</Link>
      <SectionTitle noBorder>USA.JMKRIDE.com</SectionTitle>
      <p>
        This website is the most important site for the success of our company,
        and as such, lots of time and effort has gone into optimizing
        performance and user experience
      </p>
    </ProjectPage>
  )
}

export default JMKRIDEShopWebsites;