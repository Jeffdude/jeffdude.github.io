import React from 'react';

import { Link } from '@tanstack/react-location';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import ProjectPage from '../../components/project-page';
import SectionTitle from '../../components/section-title';

function BackendPage() {
  const validatePassword = `const validatePassword = (userId, password) =>
  userModel.findById(userId).then(user => {
    if(!user){
      logError("[!][validatePassword] Failed to find user.");
      return false
    } 
    let passwordFields = user.password.split('$');
    let salt = passwordFields[0];
    let hash = crypto
      .createHmac('sha512', salt)
      .update(password)
      .digest("base64");

    if (hash === passwordFields[1]) {
      return true;
    } else {
      logError(
        "[!][validatePassword] Hash and PW didn't match:",
        {password, hash}
      );
      return false;
    }
  })`
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
      To begin this project, I had to teach myself everything about the flow 
      of trusted and authenticated client/server communications. Using{' '}
      <a
        href='https://www.toptal.com/nodejs/secure-rest-api-in-nodejs'
        target="_blank" rel="noopener noreferrer"
      >this helpful article</a>, I created a basic JWT-based authenticated REST
      API. I didn't just copy without understanding, since there were several
      things I needed to modify to work for this project's purposes. I needed to
      implement multiple permission levels, as well as add user sessions that could be
      cancelled upon password resets/log outs etc. 
    </p>
    <div className='split-row' style={{marginTop: "3vmin"}}>
      <SyntaxHighlighter language='javascript' style={a11yDark} customStyle={{
        fontSize: "0.6em",
        margin: "1vmin",
      }}>
        {validatePassword}
      </SyntaxHighlighter>
      <p style={{margin: "2vmin 0 0 1vmin"}}>
        This code snippet shows how the 
        secure hashed + salted passwords are compared to a provided password,{' '}
        '<span style={{color: "rgb(245, 171, 53)"}}>password</span>'. In the
        case of a data breach, hashing the passwords via the one-directional
        SHA512 algorithm protects my users from attackers determining their
        plaintext password, and salting those hashes prevents the attackers from
        reversing the hash's secret key.
        On top of this, the passwords are stored as an encrypted field in
        MongoDB's Atlas database provider, which is connected to and
        communicated with entirely via https.
      </p>
    </div>
  </ProjectPage>
}

export default BackendPage;