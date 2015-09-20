import React, { PropTypes } from 'react';
import classNames from 'classnames';
import smoothScroll from 'smooth-scroll';

import withStyles from '../../decorators/withStyles';
import Link from '../Link';

import styles from './Navigation.css';

@withStyles(styles) class Navigation extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  componentDidMount() {
    smoothScroll.init({
      easing: 'easeInOutQuad',
      speed: 300
    });
  }

  componentWillUnmount() {
    smoothScroll.destroy();
  }

  render() {
    return (
      <div className={classNames(this.props.className, 'Navigation')} role="navigation">
        <a className="Navigation-link" data-scroll href="#skills" onClick={Link.handleClick}>Skills</a>
        <a className="Navigation-link" data-scroll href="#portfolio" onClick={Link.handleClick}>Portfolio</a>
        <a className="Navigation-link" data-scroll href="#contact" onClick={Link.handleClick}>Contact</a>
      </div>
    );
  }
}

export default Navigation;
