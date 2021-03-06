import React, { PropTypes } from 'react';
import classNames from 'classnames';

import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import styles from './ProjectCaption.css';

@withStyles(styles)
class ProjectImage extends React.Component {
  static propTypes = {
    src: React.PropTypes.string,
    alt: React.PropTypes.string,
    project: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    var img = document.createElement('img');

    img.src = this.props.src;

    img.onload = () => {
      this.setState({loaded: true});
    };
  }

  handleClick() {
    this.props.onClick(this);
  }

  render() {
    return (
      <figure onClick={this.handleClick.bind(this)} className="ProjectImage-wrapper">
        <img className={classNames(this.state.loaded ? 'loaded' : 'loading', 'hide')} src={this.props.src} alt={this.props.alt} />
        <figcaption>
          <h2>{this.props.project.name}</h2>
          <p className="description">{this.props.project.description}</p>
        </figcaption>
      </figure>
    );
  }
}

export default ProjectImage;
