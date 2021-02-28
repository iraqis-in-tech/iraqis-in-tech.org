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
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/getting_in">Getting Into The Field</Link>
          </li>
          <li>
            <Link to="/finding_work">Networking, Marketing Yourself, and Finding Work</Link>
          </li>
          <li>
            <Link to="/interviewing">Interviewing</Link>
          </li>
          <li>
            <Link to="/moving_up">Career Progression</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/getting_in">
            <GettingIn />
          </Route>
          <Route path="/finding_work">
            <Topics />
          </Route>
          <Route path="/interviewing">
            <Topics />
          </Route>
          <Route path="/moving_up">
            <Topics />
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

function GettingIn() {
  return <h2>Getting Into The Field</h2>;
}

function FindingWork() {
  return <h2>Networking, Marketing Yourself, and Finding Work</h2>;
}

function Interviewing() {
  return <h2>Interviewing</h2>;
}

function CareerProgression() {
  return <h2>Career Progression</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } : any = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export default App;
