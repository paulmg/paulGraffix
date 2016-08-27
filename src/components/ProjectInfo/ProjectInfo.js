import React, { PropTypes } from 'react';

import withStyles from '../../decorators/withStyles';
import styles from './ProjectInfo.css';

import ProjectContent from '../ProjectContent';

@withStyles(styles) class ProjectInfo extends React.Component {
  static propTypes = {
    project: React.PropTypes.object.isRequired,
    isActive: React.PropTypes.string
  };

  render() {
    let sections = null;

    if(this.props.isActive) {
      sections = this.props.project.content.map((section, index) => {
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
          return (' ' + el);
        });

        stack.push(<p key={i}><span className="ProjectInfo-cardStackTitle">{keys[i]}</span>{' -' + stackItems + '.'}</p>);
      }
    }

    let award = null;
    if(this.props.project.awards) {
      award = this.props.project.awards.map((award, index) => {
        return (
          <p key={index}><span className="ProjectInfo-cardAwardTitle">{award.title}</span> - {award.award}</p>
        )
      })
    }

    return (
      <div className="ProjectInfo columns hide">
        <div className="ProjectInfo-card" ref="projectInfoCard">
          <div className="ProjectInfo-cardInfo">
            <h2>{this.props.project.name}</h2>
            <h5>Client: {this.props.project.client}</h5>
            <p>{this.props.project.long_description}</p>
            {this.props.project.link ? <p>Link: <a href={this.props.project.link} target="_blank">{this.props.project.link}</a></p> : null}

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
