import React from 'react';
import './App.css';
import {Routes} from './Routes';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from './views/Home/Home';
import Projects from './views/Projects/Projects';
import Experiences from './views/Experiences/Experiences';

function App() {
  return (    
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={Routes.Home} component={Home}/>
          <Route path={Routes.Projects} component={Projects}/>
          <Route path={Routes.Experiences} component={Experiences}/>   
          <Redirect to={Routes.Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
