import React from 'react';
import './Experience.css';

export default class Experience extends React.Component {  
  constructor(props){
    super(props);
  };

  renderExperienceImage() {
    return (
      <div className={'imageContainer-singleExperience'}>
        <a href={this.props.link} target="_blank">
          <img src={this.props.experienceImage}/>
        </a>
      </div>
    )
  }

  renderExperienceContent() {
    return(
      <div className={'contentContainer-singleExperience'}>
        <div className={'title-singleExperience'}>{this.props.experienceName}</div>
        <div className={'tags-singleExperience'}>
          {this.renderTags()}
        </div>
        <div className={'description-singleExperience'}>{this.props.description}</div>        
      </div>
    );
  }
  renderTags() {
    return this.props.experienceTags.map((tag) => {
      return <div className={'tag-singleExperience'}>{tag}</div>
    });
  }

  renderExperience() {
    return (
      <div className={'container-singleExperience'}>        
        {this.renderExperienceImage()}
        {this.renderExperienceContent()}
      </div>
    )          
  }

  render() {
    
    return(
      <div className={'singleExperience'}>
        {this.renderExperience()}
      </div>
    );
  }
}