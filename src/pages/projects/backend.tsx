import React from 'react';

import { Link } from '@tanstack/react-location';

import CodeBlock from '../../components/code-block';
import ProjectPage from '../../components/project-page';
import SectionTitle from '../../components/section-title';
import ArchitectureDiagram from '../../assets/JFH+BE_diagram.png';

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
  const userData = `const baseUserSchema = {
  firstName: String,
  lastName: String,
  email: {type: String, unique: true},
  password: String,  // Salted + SHA512 hashed
  permissionLevel: { type: String, enum: Object.values(permissionLevels) },
  settings: { type: Schema.Types.Mixed, default: {}},
}`
  const getAdminUser = `Constants.findOne({name: 'adminUser'}
).then({ id } => Users.findById(id)
).then(adminUser => {
  // do something here
})`
  const JFHApp = `const JFHApp = ({config, children}) => {
  const cookieState = JFHCookies.get('JFHCookie');
  const [state, dispatch] = useReducerWithMiddleware(
    reducer, 
    {...DEFAULT_STATE, ...cookieState, ...config, config},
    {
      middlewareFns: [loggingMiddleware],
      afterwareFns: [persistAfterware],
    }
  );
  return (
    <QueryClientProvider client={queryClient}>
      <JFHContext.Provider value={[state, dispatch]}>
        <UserLoader/>
        <JWTRefresher/>
        {children}
      </JFHContext.Provider>
    </QueryClientProvider>
  );
}`
  const QueryLoaderExample = `function AmbassadorCard(){
  const authState = useGetAuthState();
  const user = useGetUserInfo();
  if(authState > 1){ // user is ambassador
    return <AmbassadorDetailCard user={user} noReferralCodeElement={
      <Alert severity="error">
        It appears that you are an ambassador without 
        a referral code.<br/>Please contact Jeff 
        to have this sorted out.
      </Alert>
    }/>
  }
  return <QueryLoader
    query={useGetAmbassadorApplication}
    propName="ambassadorApplication"
    generateQuery
  >
    <AmbassadorApplicationStatus/>
  </QueryLoader>
}`
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
    <div className='split-row'>
      <CodeBlock>{validatePassword}</CodeBlock>
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
    <SectionTitle noBorder>Users & Constants</SectionTitle>
    <p>
      99% of the actions/fetches to the Backend monorepo make sense in terms of
      a specific user writing or reading some data. For the stock trackers,
      every inventory read or write is authenticated and logged per user, so
      that if an error is made or anyone wants to double check any changes, they
      can see who did what. For the ambassador site and the freeskater finder,
      the first and only action that can be taken before logging in is to create
      an account. Both operating modes share the following simple data structure,
      and each extends it in their own{' '}
      <a
        href="https://github.com/JMKRIDE-USA/Backend/blob/master/src/users/schema.js#L32-L64"
        target="_blank" rel="noopener noreferrer"
      >unique</a>
      {' '}
      <a
        href="https://github.com/JMKRIDE-USA/Backend/blob/master/src/users/schema.js#L69-L81"
        target="_blank" rel="noopener noreferrer"
      >ways</a>
      .
    </p>
    <CodeBlock>{userData}</CodeBlock>
    <p>
      In cases where an admin action needs to be taken, e.g. awarding ambassador
      points or creating the base inventory parts, I architected the concept of
      constants, which are created idempotently on every startup and stored
      via a new 'Constant' data type in the DB. The object consists of a unique
      string 'name' and a pointer to the object represented by that constant.
      For example this let me access the id of the admin user like... 
    </p>
    <CodeBlock>{getAdminUser}</CodeBlock>
    <p>
      Constants were critical for setting up the basic DB objects necessary to test
      efficiently. I used constants for the basic inventory parts, categories,
      category sets, and inventories, as well as admin users, and even test
      users when the app is starting when operatingMode = development.
      And since the operation was idempotent, I could simply wipe the test DB and
      restart my app for a clean slate with all the objects I needed.
    </p>
    <SectionTitle noBorder>@jeffdude/frontend-helpers</SectionTitle>
    <p>
      Since I was using the same backend code, I found myself writing the same
      code twice for my frontend applications. Copying code is one of my least
      favorite activities, so I created the npm package
      '<a
        href='https://www.npmjs.com/package/@jeffdude/frontend-helpers'
        target="_blank" rel="noopener noreferrer"
      >@jeffdude/frontend-helpers</a>.' 
    </p>
    <div className='split-row'>
      <p>
        This package provides a higher order component called 'JFHApp' which
        requires the URL of the backend server, and provides a react-query
        client, an auth state context, a user-data autoloader, and a token
        auto-refresher. The context provides the app the ability to create
        authenticated{' '}
        <a
          href='https://github.com/Jeffdude/FrontendHelpers/blob/a0464d39d91feb4e01d0c25a3627bf85d60974a5/src/data.js#L12-L53'
          target="_blank" rel="noopener noreferrer"
        >GET queries</a>
        , as well as{' '}
        <a
          href='https://github.com/Jeffdude/FrontendHelpers/blob/a0464d39d91feb4e01d0c25a3627bf85d60974a5/src/data.js#L55-L85'
          target="_blank" rel="noopener noreferrer"
        >POST queries</a>
        , which modify state and refresh the data cache. Overall this bespoke
        npm package has saved me hundreds of lines of duplicated code across
        four different websites, and will likely continue to be of use moving
        forward.
      </p>
      <CodeBlock>{JFHApp}</CodeBlock>
    </div>
    <p>
      Another incredibly useful hook that this npm package provides is the
      `QueryLoader` component. This component will automatically run the
      provided query, fetching the data and inserting it into its children's
      props. In addition to this, it can also generate that query, which will
      then only run the query if the component will be rendered, allowing me
      to reduce unecessary server fetches and code complexity. I used this
      component many times when writing my frontend.
    </p>
    <CodeBlock>{QueryLoaderExample}</CodeBlock>
    <SectionTitle noBorder>Generic Project Architecture</SectionTitle>
    <img src={ArchitectureDiagram} className='fullpage'/>
  </ProjectPage>
}

export default BackendPage;