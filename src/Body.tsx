import React from 'react';
import './Body.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

function Body() {
    return (
        <Router>
            <div className="Body-container">
                <div className="Body"><Link to="/">Home</Link></div>
                <div className="Body"><Link to="/breaking-in">Breaking Into The Field</Link></div>
                <div className="Body"><Link to="/finding-work">Networking, Marketing Yourself, and Finding Work</Link></div>
                <div className="Body" ><Link to="/interviewing">Interviewing</Link></div>
                <div className="Body"><Link to="/career-progression">Career Progression</Link></div>
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
                <div className="Body">
                    <iframe src="https://discord.com/widget?id=820526253026967602&theme=dark" width="350" height="350" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </div>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div className="Body-container2">
            <h2 className="Body" >Home</h2>
        </div>
    );;
}

function CareerProgressionTopics() {
    let match = useRouteMatch();

    return (
        <div className="Body-container2">
            <h2 className="Body">Career Progression</h2>
            <div className="Body"> <Link to={`${match.url}/increasing-pay`}>Increasing Your Pay</Link></div>
            <div className="Body"><Link to={`${match.url}/advancing-your-skills`}>Advancing Your Skills</Link></div>
            <div className="Body"><Link to={`${match.url}/specializing`}>Specializing</Link></div>

            {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
            <Switch>
                {/* <Route path={`${match.path}/:topicId`}>
                    <CareerProgressionTopic />      
                </Route> */}
                <Route path={`${match.path}/increasing-pay`}>
                    <IncreasingYourPay />
                </Route>
                <Route path={match.path}>
                    <h3 className="Body">Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}

function IncreasingYourPay() {
    let { topicId }: any = useParams();
    return <h3 className="Body">Resdfgsdfsdfs: {topicId}</h3>;
}

function CareerProgressionTopic() {
    let { topicId }: any = useParams();
    return <h3 className="Body">Requested topic ID: {topicId}</h3>;
}

function BreakingInTopics() {
    let match = useRouteMatch();

    return (
        <div className="Body-container2">
            <h2 className="Body">Breaking Into The field</h2>
            <div className="Body">   <Link to={`${match.url}/community-college`}>Community College to Four Year Degree Track</Link></div>
            <div className="Body"> <Link to={`${match.url}/self-study`}>Self Study (minimum education) Track</Link></div>
            <div className="Body"> <Link to={`${match.url}/bootcamp`}>
                Bootcamp Track
          </Link></div>

            {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <BreakingInTopic />
                </Route>
                <Route path={match.path}>
                    <h3 className="Body" >Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}

function BreakingInTopic() {
    let { topicId }: any = useParams();
    return <h3 className="Body" >Requested topic ID: {topicId}</h3>;
}

function InterviewingTopics() {
    let match = useRouteMatch();

    return (
        <div className="Body-container2">
            <h2 className="Body">Interviewing</h2>
            <div className="Body"> <Link to={`${match.url}/behavioral`}>The Behavioral Interview</Link></div>
            <div className="Body"><Link to={`${match.url}/algorithmic`}>The Algorithmic Interview</Link></div>
            <div className="Body"><Link to={`${match.url}/system-design`}>
                The System Design Interview
          </Link></div>

            {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <InterviewingTopic />
                </Route>
                <Route path={match.path}>
                    <h3 className="Body" >Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}

function InterviewingTopic() {
    let { topicId }: any = useParams();
    return <h3 className="Body">Requested topic ID: {topicId}</h3>;
}

function FindingWorkTopics() {
    let match = useRouteMatch();

    return (
        <div className="Body-container2">
            <h2 className="Body">Finding Work</h2>
            <div className="Body"> <Link to={`${match.url}/resume`}>Your Resume</Link></div>
            <div className="Body"> <Link to={`${match.url}/linkedin`}>LinkedIn</Link></div>
            <div className="Body"> <Link to={`${match.url}/meetup`}>Meetup</Link></div>
            <div className="Body"> <Link to={`${match.url}/bumble-bizz`}>Bumble Bizz</Link></div>

            {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <FindingWorkTopic />
                </Route>
                <Route path={match.path}>
                    <h3 className="Body" >Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}

// function FindingWorkTopics() {
//     let match = useRouteMatch();

//     return (
//         <div className="Body-container">
//             <h2 className="Body">Finding Work</h2>
//             <div className="Body"> <Link to={`${match.url}/resume`}>Your Resume</Link></div>
//             <div className="Body"> <Link to={`${match.url}/linkedin`}>LinkedIn</Link></div>
//             <div className="Body"> <Link to={`${match.url}/meetup`}>Meetup</Link></div>
//             <div className="Body"> <Link to={`${match.url}/bumble-bizz`}>Bumble Bizz</Link></div>

//             {/* The Topics page has its own <Switch> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//             <Switch>
//                 <Route path={`${match.path}/:topicId`}>
//                     <FindingWorkTopic />
//                 </Route>
//                 <Route path={match.path}>
//                     <h3 className="Body" >Please select a topic.</h3>
//                 </Route>
//             </Switch>
//         </div>
//     );
// }

function FindingWorkTopic() {
    let { topicId }: any = useParams();
    return <h3 className="Body" >Requested topic ID: {topicId}</h3>;
}

export default Body;