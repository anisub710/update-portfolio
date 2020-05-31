import React from 'react';
import './Nav.css';
import {Routes} from '../../Routes';
import {Link} from 'react-router-dom';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  };

  handleLinks() {
    switch(this.props.currLocation) {
      case "Home":
        return(
          <div className={'content-nav centered'}>          
            <div><Link to={Routes.Experiences} className={'link-nav'}>experiences</Link></div>
            <div className={'circle-nav'}/>
            <div><Link to={Routes.Projects} className={'link-nav'}>projects</Link></div>            
            <div className={'circle-nav'}/>
            <div><a href={'./Resume.pdf'} target='_blank' className={'link-nav'}>resume</a></div>
          </div>
        );
      default:
        return(
          <div className={'content-nav'}>   
            <div>
              <Link to={Routes.Home} className={'link-nav-blue'}>about</Link>
            </div>
            <div className={'circle-nav-blue'}/>
            <div>
              <Link to={Routes.Experiences} className={this.getLinkClassName('Experiences')}>experiences</Link>
            </div>
            <div className={'circle-nav-blue'}/>                 
            <div>
              <Link to={Routes.Projects} className={this.getLinkClassName('Projects')}>projects</Link>
            </div>
            <div className={'circle-nav-blue'}/>
            <div><a href={'./Resume.pdf'} target='_blank' className={this.getLinkClassName('Resume')}>resume</a></div>                    
          </div>
        ); 
    }
  }

  getLinkClassName(tab){
    return ('link-nav-blue ' + (this.props.currLocation === tab ? 'active': '')) ;
  } 


  render() {
    
    return(
      <div className='container-nav'>
        {this.handleLinks()}
      </div>
    );
  }
}