import React from 'react';
import './Projects.css';
import Nav from '../../components/Nav/Nav';
import Project from '../../components/Project/Project';

export default class Projects extends React.Component {  

  render() {
    
    return(
      <div className={'container-projects'}>
        <Nav currLocation='Projects'/>
        <Project id = {0} 
        link="https://novantapp.com"
        projectName="Novant"
        projectImage={'../img/Novant.svg'} 
        projectTags={['Go', 'MySQL', 'Redis', 'React', 'React Native', 'Redux']} 
        description="Developed a mobile and web platform that facilitates the marketplace for job shifts to be listed by businesses, applied for and worked by a supply of trusted
        employees. Architected and built RESTful backend server for the business logic."
      />
        <Project id = {1} 
        projectName="CourtVision"
        projectImage={'../img/CourtVision.svg'} 
        projectTags={['Swift', 'iOS', 'mobile']}
        description = "Test2"/>        
      </div>
    );
  }
}