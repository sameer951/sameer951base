import React from 'react';
import { ResumePage } from './pagecomponents/Resume.page';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import Error404 from './pagecomponents/errorpage/error';

// var addingRouter 
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={withRouter((props) => {
            props.history.push('/jyotikant_cv');
            return <div>Hello</div>
          })}></Route>
          <Route exact path="/jyotikant_cv">
            <ResumePage></ResumePage>
          </Route>
          <Route component={Error404} />
        </Switch>
      </Router>
    </div>
  );
}
function NoMatchPage() {
  return <div>404 Error</div>
}

export default App;
