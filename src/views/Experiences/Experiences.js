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
      link = "https://www.pwc.com/us/en/careers/why-pwc/what-we-do/what-we-do-products-and-technology.html"
      experienceName="PriceWaterhouseCoopers"
      experienceImage={'../img/PwC.svg'} 
      experienceTags={['Scala', 'Kafka', 'Cassandra', 'Couchbase', 'RabbitMQ', 'Lagom', 'Akka', 'Docker']} 
      description = {
        <ul> 
          <li> Lead development of back-end services for $2M client project. </li>
          <li> Implement middle-tier services using Scala and with enterprise systems. </li>
          <li> Troubleshoot production issues. </li>
          <li> Coordinate with several teams to gather requirements. </li>
          <li> Build documentation for services.</li>
       </ul>}
      />
      </div>
    );
  }
}