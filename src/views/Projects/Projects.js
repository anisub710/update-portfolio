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
        link="https://github.com/aaronluannguyen/CourtVision"
        projectName="CourtVision"
        projectImage={'../img/CourtVision.svg'} 
        projectTags={['Swift', 'iOS', 'Firebase']}
        description = {
          <p>Court vision is an iOS application that connects people who want to play basketball, by providing a platform that allows users
          to organize matches around them to compete with their teams. It has the following components: 
          <ul>
              <li>Authentication: Allows users to sign up (backed by Firebase) with an email to use the application.</li>
              <li>User Profile: Allows users to build profiles with their information such as age, height, weight, position, etc.</li>
              <li>Team Roster: Allows to join teams and see their team rosters containing other user profiles. Assigned an admin to manage team.</li>
              <li>Game Map: Shows nearby games hosted by teams with location and time. </li>
              <li>Game Matchmaking: Allows to create games, teams to join games and manages result of games. </li>
              <li>Ranking: Shows team rankings based on wins and losses.</li>
          </ul>
          </p>
        }/>        
      </div>
    );
  }
}