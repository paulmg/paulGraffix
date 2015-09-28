import React, { PropTypes } from 'react';

import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import styles from './ProjectInfo.css';

import ProjectContent from '../ProjectContent';
import ProjectImage from '../ProjectImage';


@withStyles(styles) class ProjectInfo extends React.Component {
  static propTypes = {
    project: React.PropTypes.object.isRequired,
    isActive: React.PropTypes.string
  };

  render() {
    let sections = null;
    //console.log(this.props.project)

    if(this.props.isActive) {
      sections = this.props.project.content.map((section, index) => {
        //console.log(section);

        return (
          <ProjectContent key={index} section={section} />
        )
      });
    }

    let stack = [];
    if(this.props.project.stack) {
      let keys = Object.keys(this.props.project.stack);

      for(let i = 0; i < keys.length; i++) {
        let stackItems = this.props.project.stack[keys[i]].map(function(el) {
          return (' ' + el)
        });

        stack.push(<p key={i}><span className="ProjectInfo-cardStackTitle">{keys[i]}</span>{' -' + stackItems + '.'}</p>)
      }
    }

    let award = null;
    if(this.props.project.awards) {
      award = this.props.project.awards.map((award, index) => {
        //console.log(section);

        return (
          <p key={index}>{award.title} - {award.award}</p>
        )
      })
    }

    return (
      <div className="ProjectInfo columns hide">
        <div className="ProjectInfo-card columns" ref="projectInfoCard">
          <div className="ProjectInfo-cardInfo">
            <h2>{this.props.project.name}</h2>
            <h4>Client: {this.props.project.client}</h4>

            <p>{this.props.project.description}</p>

            {stack ? <h4>Stack:</h4> : null}
            {stack}

            {award ? <h4>Awards:</h4> : null}
            {award}
          </div>

          <div className="ProjectInfo-cardSections">
            {sections}
          </div>

        </div>
      </div>
    );
  }
}

export default ProjectInfo;
