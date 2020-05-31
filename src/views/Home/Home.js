import React from 'react';
import './Home.css';
import Nav from '../../components/Nav/Nav';

export default class Home extends React.Component {


  renderBasicInfo(title, beforeLogo, link, logo, additionalInfo){
    return (
    <div className={'basicInfo-home'}>
      <div>{`${title}: ${beforeLogo}`}</div>
      <div className={'logoContainer-home'}>
        <a href={link}>
          <img className={'logo-home'} src={logo}/>
        </a>
      </div>
      <div className={'additionalInfo-home'}>{additionalInfo}</div>
    </div>
    )
  }

  render() {
    
    return(
      <div className={'container-home'}>
        <div className={'contentContainer-home'}>
          <div className={'header-home'}>Hey!</div>
          <div className={'content-home'}>
            <p>
              My name is <strong> Anirudh Subramanyam (Ani)</strong>, and I'm a <strong>Software Developer</strong>.
              I aim to increasingly integrate accessible technology into society, especially in <strong>health care</strong> and <strong>education</strong>. I believe 
              that my exposure to various cultures having lived and studied in cities such as Mumbai, Bangalore, Singapore, London and Seattle, 
              and my involvment in the community provides me a strong perspective to build <strong>user-centered technology.</strong>
            </p>
          </div>
          {this.renderBasicInfo('Current', 'Assurance Innovation Back-end Developer', 'https://www.pwc.com/', '../img/pwc_logo.svg', 'at Tampa, FL.')}
          {this.renderBasicInfo('Education','Bachelor of Science in Informatics','https://www.washington.edu/', '../img/uw_logo.svg', 'at Seattle, WA.')}
          <Nav currLocation="Home"/>
        </div>
      </div>
    );
  }
}