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
  }

  componentDidUpdate(prevProps, prevState) {

  }


  render() {
    var sections = null;

    if(this.props.isActive) {
      sections = this.props.project.content.map((section, index) => {
        //console.log(section);

        return (
          <ProjectContent key={index} section={section} isLoaded={this.props.isLoaded} />
        )
      });
    }

    return (
      <div className="ProjectInfo columns hide">
        <div className="ProjectInfo-card columns" ref="projectInfoCard">
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
