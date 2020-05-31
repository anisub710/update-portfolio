import React from 'react';
import './Experiences.css';
import Nav from '../../components/Nav/Nav';
import Experience from '../../components/Experience/Experience';

export default class Experiences extends React.Component {
  render() {
    
    return(
      <div className={'container-experiences'}>
      <Nav currLocation='Experiences'/>
      <Experience
      link = "https://novantapp.com"
      experienceName="Novant"
      experienceImage={'../img/Novant.svg'} 
      experienceTags={['Go', 'MySQL', 'Redis', 'React', 'React Native', 'Redux']} 
      description = "Developed a mobile and web platform that facilitates the marketplace for job shifts to be listed by businesses, applied for and worked by a supply of trusted
      employees. Architected and built RESTful backend server for the business logic."
      />
      </div>
    );
  }
}