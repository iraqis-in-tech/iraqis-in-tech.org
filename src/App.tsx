import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <div className="App-container">
        <div className="App"><Link to="/">Home</Link></div>
        <div className="App"><Link to="/breaking-in">Breaking Into The Field</Link></div>
        <div className="App"><Link to="/finding-work">Networking, Marketing Yourself, and Finding Work</Link></div>
        <div className="App" ><Link to="/interviewing">Interviewing</Link></div>
        <div className="App"><Link to="/career-progression">Career Progression</Link></div>

       
        <Switch>
          <Route path="/breaking-in">
            <BreakingInTopics />
          </Route>
          <Route path="/finding-work">
            <FindingWorkTopics />
          </Route>
          <Route path="/interviewing">
            <InterviewingTopics />
          </Route>
          <Route path="/career-progression">
            <CareerProgressionTopics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
         </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function CareerProgressionTopics() {
  let match = useRouteMatch();

  return (
    <div className="App-container">
      <h2 className="App">Career Progression</h2>
      <div className="App"> <Link to={`${match.url}/increasing-pay`}>Increasing Your Pay</Link></div>
      <div className="App"><Link to={`${match.url}/advancing-your-skills`}>Advancing Your Skills</Link></div>
      <div className="App"><Link to={`${match.url}/specializing`}>Specializing</Link></div>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <CareerProgressionTopic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function CareerProgressionTopic() {
  let { topicId } : any = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

function BreakingInTopics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Breaking Into The field</h2>

      <ul>
      <li>
          <Link to={`${match.url}/community-college`}>Community College to Four Year Degree Track</Link>
        </li>
        <li>
          <Link to={`${match.url}/self-study`}>Self Study (minimum education) Track</Link>
        </li>
        <li>
          <Link to={`${match.url}/bootcamp`}>
            Bootcamp Track
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <BreakingInTopic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function BreakingInTopic() {
  let { topicId } : any = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

function InterviewingTopics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Interviewing</h2>

      <ul>
      <li>
          <Link to={`${match.url}/behavioral`}>The Behavioral Interview</Link>
        </li>
        <li>
          <Link to={`${match.url}/algorithmic`}>The Algorithmic Interview</Link>
        </li>
        <li>
          <Link to={`${match.url}/system-design`}>
            The System Design Interview
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <InterviewingTopic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function InterviewingTopic() {
  let { topicId } : any = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

function FindingWorkTopics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Finding Work Topics</h2>

      <ul>
      <li>
          <Link to={`${match.url}/resume`}>Your Resume</Link>
        </li>
        <li>
          <Link to={`${match.url}/linkedin`}>LinkedIn</Link>
        </li>
        <li>
          <Link to={`${match.url}/bumble-bizz`}>
            Bumble Bizz
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/meetup`}>Meetup</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <FindingWorkTopic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function FindingWorkTopic() {
  let { topicId } : any = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export default App;
