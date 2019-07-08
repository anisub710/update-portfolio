import React from 'react';
import './Project.css';

export default class Project extends React.Component {  
  constructor(props){
    super(props);
  };

  renderProjectImage() {
    return (
      <div className={'imageContainer-singleProject'}>
        <img src={this.props.projectImage}/>
      </div>
    )
  }

  renderProjectContent() {
    return(
      <div className={'contentContainer-singleProject'}>
        <div className={'title-singleProject'}>Project 1</div>
        <div className={'tags-singleProject'}>
          <div className={'tag-singleProject'}>Go</div>
        </div>
        <div className={'description-singleProject'}>description asdosiadjoijdsaoin asndoianoiand snaiodnodain ansidonaoindn nasodinsiaonddescription asdosiadjoijdsaoin asndoianoiand snaiodnodain ansidonaoindn nasodinsiaonddescription asdosiadjoijdsaoin asndoianoiand snaiodnodain ansidonaoindn</div>
      </div>
    );
  }
  renderTags() {

  }

  renderProject() {
    return (
      <div className={'container-singleProject'}>        
        {this.renderProjectImage()}
        {this.renderProjectContent()}
      </div>
    )          
  }

  render() {
    
    return(
      <div className={'singleProject'}>
        {this.renderProject()}
      </div>
    );
  }
}