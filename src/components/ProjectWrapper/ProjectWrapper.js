import React, { PropTypes } from 'react';
import classNames from 'classnames';

import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import styles from './ProjectWrapper.css';

import ProjectImage from '../ProjectImage';
import ProjectInfo from '../ProjectInfo';

@withStyles(styles) class ProjectWrapper {
  static propTypes = {
    project: React.PropTypes.object.isRequired,
    onClick: React.PropTypes.func.isRequired,
    id: React.PropTypes.number.isRequired,
    active: React.PropTypes.string
  };

  handleClick() {
    this.props.onClick(this);
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
    let src = this.props.project.thumb;
    let id = this.props.id;

    function svgMarkup() {
      return {
        __html: '<svg class="ProjectWrapper-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ' +
        'viewBox="0 0 1920 500" preserveAspectRatio="xMidYMid slice"><defs><clipPath id="clipPath' + id +
        '"><circle id="clip" class="clip" cx="960" cy="250" r="992"></circle></clipPath></defs><image clip-path="url(#clipPath' + id +
        ')" width="1920" height="500" xlink:href="' + src + '"}></image></svg>'
      };
    }

    return (
      <li className={classNames(this.props.active, 'ProjectWrapper')}>

        <div className="ProjectWrapper-container ProjectWrapper-container--closed ProjectWrapper-container--hoverable">
          <div className="ProjectWrapper-svgContainer" dangerouslySetInnerHTML={svgMarkup()}></div>

          <ProjectInfo closeClick={this.handleClose.bind(this)}
                       nextClick={this.handleNext.bind(this)}
                       prevClick={this.handlePrev.bind(this)}
                       project={this.props.project} isActive={this.props.active} />
        </div>

        <ProjectImage onClick={this.handleClick.bind(this)} src={src} alt={this.props.project.name}
                      project={this.props.project} />
      </li>
    );
  }
}

export default ProjectWrapper;
