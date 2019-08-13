import React from 'react';
import './Projects.css';
import Nav from '../../components/Nav/Nav';
import Project from '../../components/Project/Project';

export default class Projects extends React.Component {  

  render() {
    
    return(
      <div className={'container-projects'}>
        <Nav currLocation='Projects'/>
        <Project id = {0} projectImage={'../img/CourtVision.svg'} projectTags={['Swift', 'iOS', 'mobile']}/>
        <Project id = {1} projectImage={'../img/iSchool.svg'} projectTags={['TA']}/>
      </div>
    );
  }
}