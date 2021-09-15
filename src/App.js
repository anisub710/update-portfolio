import React from 'react';
import './App.css';
import {Routes} from './Routes';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './views/Home/Home';
import Projects from './views/Projects/Projects';
import Experiences from './views/Experiences/Experiences';

function App() {
  return (    
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Route exact path={Routes.Home} component={Home}/>
        <Route path={Routes.Projects} component={Projects}/>
        <Route exact path={Routes.Experiences} component={Experiences}/>        
      </div>
    </Router>
  );
}

export default App;
