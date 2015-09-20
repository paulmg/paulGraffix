import React, { PropTypes } from 'react';

import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import styles from './ProjectInfo.css';

import ProjectContent from '../ProjectContent';
import ProjectImage from '../ProjectImage';


@withStyles(styles) class ProjectInfo extends React.Component {
  static propTypes = {
    project: React.PropTypes.object.isRequired
  };

  componentWillMount() {
    // set up animation here
  }

  handleClose() {
    this.props.closeClick(this);
  }

  handleNext() {
    this.props.nextClick(this);
  }

  handlePrev() {
    this.props.prevClick(this);
  }

  render() {
    //console.log(this.props.isActive);
    var sections = null;

    if(this.props.isActive) {
      sections = this.props.project.content.map((section, index) => {
        //console.log(section);

        return (
          <ProjectContent key={index} section={section} />
        )
      });
    }

    return (
      <div className="ProjectInfo hide">
        <a className="button" onClick={this.handleClose.bind(this)}>x</a>
        <a className="button" onClick={this.handlePrev.bind(this)}>Prev</a>
        <a className="button" onClick={this.handleNext.bind(this)}>Next</a>

        <div className="ProjectInfo-card">
          <h2>{this.props.project.name}</h2>
          <p>{this.props.project.description}</p>

          <div>
            {sections}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectInfo;
