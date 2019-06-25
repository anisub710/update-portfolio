import React from 'react';
import './Experiences.css';
import Nav from '../../components/Nav/Nav';

export default class Experiences extends React.Component {
  render() {
    
    return(
      <div className={'container-experiences'}>
      <Nav currLocation='Experiences'/>
       Experiences!
      </div>
    );
  }
}